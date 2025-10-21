// V3 Graph-based Main Script
import dataLoader from './data-loader.js';
import ExplorerNavigation from '../shared/explorer-navigation.js';

// Application state
const state = {
    currentView: 'system-tree', // 'system-tree', 'category-grid', 'tag-cloud', 'list'
    selectedEntity: null,
    selectedType: null, // 'system', 'category', 'disease'
    filters: {},
    searchQuery: ''
};

// Initialize application
async function init() {
    console.log('Initializing Step 1 Differential Diagnosis Tool v3...');

    // Initialize explorer navigation
    const explorerNav = new ExplorerNavigation('conditions');

    // Load data
    const loaded = await dataLoader.load();
    if (!loaded) {
        showError('Failed to load data. Please refresh the page.');
        return;
    }

    // Setup event listeners
    setupEventListeners();

    // Render initial view
    renderSystemTree();

    console.log('Initialization complete');
    console.log('Stats:', dataLoader.getStats());
}

// Setup event listeners
function setupEventListeners() {
    // Search box
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', handleSearch);
    }

    // View switcher (will add later)
    // Filter controls (will add later)
}

// Handle search
function handleSearch(event) {
    const query = event.target.value;
    state.searchQuery = query;

    if (query.length < 2) {
        // Clear search, return to normal view
        renderSystemTree();
        return;
    }

    const results = dataLoader.search(query);
    renderSearchResults(results);
}

// Render system tree (default view)
function renderSystemTree() {
    const treeContainer = document.getElementById('diagnosisTree');
    if (!treeContainer) return;

    treeContainer.innerHTML = '';

    const systems = dataLoader.getAllSystems();

    systems.forEach(system => {
        const systemNode = createSystemNode(system);
        treeContainer.appendChild(systemNode);
    });
}

// Create system node
function createSystemNode(system) {
    const node = document.createElement('div');
    node.className = 'tree-node system-node';
    node.dataset.systemId = system.id;

    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
        <span class="expand-icon">▶</span>
        <span class="node-title">${system.name}</span>
    `;

    const categories = dataLoader.getCategoriesForSystem(system.id);
    const diseaseCount = categories.reduce((sum, cat) => sum + cat.diseaseCount, 0);

    const badge = document.createElement('span');
    badge.className = 'count-badge';
    badge.textContent = diseaseCount;
    header.appendChild(badge);

    node.appendChild(header);

    // Categories container (initially hidden)
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'categories-container';
    categoriesContainer.style.display = 'none';

    categories.forEach(category => {
        const categoryNode = createCategoryNode(category);
        categoriesContainer.appendChild(categoryNode);
    });

    node.appendChild(categoriesContainer);

    // Toggle expand/collapse
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSystemNode(node);
    });

    // Click to show system detail
    node.addEventListener('click', (e) => {
        if (e.target === header || e.target.parentElement === header) return;
        e.stopPropagation();
        selectEntity(system, 'system');
    });

    return node;
}

// Create category node
function createCategoryNode(category) {
    const node = document.createElement('div');
    node.className = 'tree-node category-node';
    node.dataset.categoryId = category.id;

    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
        <span class="expand-icon">▶</span>
        <span class="node-title">${category.name}</span>
    `;

    const badge = document.createElement('span');
    badge.className = 'count-badge';
    badge.textContent = category.diseaseCount;
    header.appendChild(badge);

    node.appendChild(header);

    // Diseases container (initially hidden)
    const diseasesContainer = document.createElement('div');
    diseasesContainer.className = 'diseases-container';
    diseasesContainer.style.display = 'none';

    const diseases = dataLoader.getDiseasesForCategory(category.id);
    diseases.forEach(disease => {
        const diseaseNode = createDiseaseNode(disease);
        diseasesContainer.appendChild(diseaseNode);
    });

    node.appendChild(diseasesContainer);

    // Toggle expand/collapse
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCategoryNode(node);
    });

    return node;
}

// Create disease node
function createDiseaseNode(disease) {
    const node = document.createElement('div');
    node.className = 'tree-node disease-node';
    node.dataset.diseaseId = disease.id;

    // Severity indicator
    const severityClass = `severity-${disease.severity}`;

    node.innerHTML = `
        <div class="node-header">
            <span class="severity-indicator ${severityClass}"></span>
            <span class="node-title">${disease.name}</span>
        </div>
    `;

    node.addEventListener('click', (e) => {
        e.stopPropagation();
        selectEntity(disease, 'disease');
    });

    return node;
}

// Toggle system node
function toggleSystemNode(node) {
    const categoriesContainer = node.querySelector('.categories-container');
    const expandIcon = node.querySelector('.expand-icon');

    if (categoriesContainer.style.display === 'none') {
        categoriesContainer.style.display = 'block';
        expandIcon.textContent = '▼';
        node.classList.add('expanded');
    } else {
        categoriesContainer.style.display = 'none';
        expandIcon.textContent = '▶';
        node.classList.remove('expanded');
    }
}

// Toggle category node
function toggleCategoryNode(node) {
    const diseasesContainer = node.querySelector('.diseases-container');
    const expandIcon = node.querySelector('.expand-icon');

    if (diseasesContainer.style.display === 'none') {
        diseasesContainer.style.display = 'block';
        expandIcon.textContent = '▼';
        node.classList.add('expanded');
    } else {
        diseasesContainer.style.display = 'none';
        expandIcon.textContent = '▶';
        node.classList.remove('expanded');
    }
}

// Select an entity and show detail
function selectEntity(entity, type) {
    state.selectedEntity = entity;
    state.selectedType = type;

    // Highlight selected node
    document.querySelectorAll('.tree-node').forEach(node => {
        node.classList.remove('selected');
    });

    const selector = type === 'system' ? `[data-system-id="${entity.id}"]` :
                     type === 'category' ? `[data-category-id="${entity.id}"]` :
                     `[data-disease-id="${entity.id}"]`;

    const selectedNode = document.querySelector(selector);
    if (selectedNode) {
        selectedNode.classList.add('selected');
    }

    // Render detail panel
    if (type === 'system') {
        renderSystemDetail(entity);
    } else if (type === 'category') {
        renderCategoryDetail(entity);
    } else if (type === 'disease') {
        renderDiseaseDetail(entity);
    }
}

// Render system detail
function renderSystemDetail(system) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const categories = dataLoader.getCategoriesForSystem(system.id);

    detailPanel.innerHTML = `
        <div class="entity-detail system-detail">
            <div class="entity-header">
                <span class="entity-type-badge">System</span>
                <h2>${system.name}</h2>
            </div>

            ${system.detail ? `
                <section class="detail-section">
                    <h3>Overview</h3>
                    <p>${system.detail.overview}</p>
                </section>

                ${system.detail.keyAnatomy ? `
                    <section class="detail-section">
                        <h3>Key Anatomy</h3>
                        <ul>
                            ${system.detail.keyAnatomy.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </section>
                ` : ''}

                ${system.detail.commonThemes ? `
                    <section class="detail-section">
                        <h3>Common Themes</h3>
                        <ul>
                            ${system.detail.commonThemes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </section>
                ` : ''}
            ` : ''}

            <section class="detail-section">
                <h3>Categories (${categories.length})</h3>
                <div class="category-list">
                    ${categories.map(cat => `
                        <div class="category-card" data-category-id="${cat.id}">
                            <h4>${cat.name}</h4>
                            <span class="count-badge">${cat.diseaseCount} diseases</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;

    // Add click handlers for category cards
    detailPanel.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.categoryId;
            const category = dataLoader.getCategory(categoryId);
            selectEntity(category, 'category');
        });
    });
}

// Render category detail
function renderCategoryDetail(category) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const diseases = dataLoader.getDiseasesForCategory(category.id);

    detailPanel.innerHTML = `
        <div class="entity-detail category-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Category</span>
                <h2>${category.name}</h2>
            </div>

            ${category.detail ? `
                ${category.detail.approach ? `
                    <section class="detail-section">
                        <h3>Approach</h3>
                        <p>${category.detail.approach}</p>
                    </section>
                ` : ''}

                ${category.detail.redFlags ? `
                    <section class="detail-section important">
                        <h3>🚩 Red Flags</h3>
                        <ul>
                            ${category.detail.redFlags.map(flag => `<li>${flag}</li>`).join('')}
                        </ul>
                    </section>
                ` : ''}

                ${category.detail.initialWorkup ? `
                    <section class="detail-section">
                        <h3>Initial Workup</h3>
                        <ul>
                            ${category.detail.initialWorkup.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </section>
                ` : ''}

                ${category.detail.differentialCategories ? `
                    <section class="detail-section">
                        <h3>Differential Categories</h3>
                        <ul>
                            ${category.detail.differentialCategories.map(cat => `<li>${cat}</li>`).join('')}
                        </ul>
                    </section>
                ` : ''}
            ` : ''}

            <section class="detail-section">
                <h3>Diseases in this Category (${diseases.length})</h3>
                <div class="disease-list">
                    ${diseases.map(disease => `
                        <div class="disease-card severity-${disease.severity}" data-disease-id="${disease.id}">
                            <span class="severity-indicator severity-${disease.severity}"></span>
                            <div class="disease-card-content">
                                <h4>${disease.name}</h4>
                                <p class="disease-tags">
                                    ${disease.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;

    // Add click handlers for disease cards
    detailPanel.querySelectorAll('.disease-card').forEach(card => {
        card.addEventListener('click', () => {
            const diseaseId = card.dataset.diseaseId;
            const disease = dataLoader.getDisease(diseaseId);
            selectEntity(disease, 'disease');
        });
    });
}

// Render disease detail
function renderDiseaseDetail(disease) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const detail = disease.detail;

    detailPanel.innerHTML = `
        <div class="entity-detail disease-detail">
            <div class="entity-header">
                <span class="entity-type-badge severity-${disease.severity}">Disease</span>
                <h2>${disease.name}</h2>
                <div class="disease-metadata">
                    <span class="badge severity-${disease.severity}">${disease.severity} severity</span>
                    <span class="badge acuity-${disease.acuity}">${disease.acuity}</span>
                </div>
            </div>

            ${detail.definition ? `
                <section class="detail-section">
                    <h3>Definition</h3>
                    <p>${detail.definition}</p>
                </section>
            ` : ''}

            ${detail.pathophysiology ? `
                <section class="detail-section">
                    <h3>Pathophysiology</h3>
                    <p>${detail.pathophysiology}</p>
                </section>
            ` : ''}

            ${detail.epidemiology ? `
                <section class="detail-section">
                    <h3>Epidemiology</h3>
                    <p>${detail.epidemiology}</p>
                </section>
            ` : ''}

            ${detail.riskFactors ? `
                <section class="detail-section">
                    <h3>Risk Factors</h3>
                    <ul>
                        ${detail.riskFactors.map(factor => `<li>${factor}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.presentation ? `
                <section class="detail-section">
                    <h3>Presentation</h3>
                    <p>${detail.presentation}</p>
                </section>
            ` : ''}

            ${detail.physicalExam ? `
                <section class="detail-section">
                    <h3>Physical Exam</h3>
                    <ul>
                        ${detail.physicalExam.map(finding => `<li>${finding}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.diagnosticCriteria ? `
                <section class="detail-section important">
                    <h3>Diagnostic Criteria</h3>
                    <p>${detail.diagnosticCriteria}</p>
                </section>
            ` : ''}

            ${detail.labs ? `
                <section class="detail-section">
                    <h3>Labs</h3>
                    <ul>
                        ${detail.labs.map(lab => `<li>${lab}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.imaging ? `
                <section class="detail-section">
                    <h3>Imaging</h3>
                    <ul>
                        ${detail.imaging.map(img => `<li>${img}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.differentialDiagnosis ? `
                <section class="detail-section">
                    <h3>Differential Diagnosis</h3>
                    <ul>
                        ${detail.differentialDiagnosis.map(dx => `<li>${dx}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.management ? `
                <section class="detail-section highlight">
                    <h3>Management</h3>
                    ${detail.management.acute ? `
                        <h4>Acute Management</h4>
                        <ul>
                            ${detail.management.acute.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    ` : ''}
                    ${detail.management.chronic ? `
                        <h4>Chronic Management</h4>
                        <ul>
                            ${detail.management.chronic.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    ` : ''}
                </section>
            ` : ''}

            ${detail.complications ? `
                <section class="detail-section">
                    <h3>Complications</h3>
                    <ul>
                        ${detail.complications.map(comp => `<li>${comp}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.prognosis ? `
                <section class="detail-section">
                    <h3>Prognosis</h3>
                    <p>${detail.prognosis}</p>
                </section>
            ` : ''}

            ${detail.clinicalPearls ? `
                <section class="detail-section pearls">
                    <h3>💎 Clinical Pearls</h3>
                    <ul>
                        ${detail.clinicalPearls.map(pearl => `<li>${pearl}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            <section class="detail-section">
                <h3>Metadata</h3>
                <p><strong>Categories:</strong> ${disease.categories.map(catId => {
                    const cat = dataLoader.getCategory(catId);
                    return cat ? cat.name : catId;
                }).join(', ')}</p>
                <p><strong>Tags:</strong> ${disease.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
            </section>
        </div>
    `;
}

// Render search results
function renderSearchResults(results) {
    const treeContainer = document.getElementById('diagnosisTree');
    if (!treeContainer) return;

    if (results.length === 0) {
        treeContainer.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }

    treeContainer.innerHTML = `
        <div class="search-results">
            <h3>Search Results (${results.length})</h3>
            ${results.map(result => {
                const entity = result.entity;
                if (result.type === 'disease') {
                    return `
                        <div class="search-result disease-result severity-${entity.severity}" data-disease-id="${entity.id}">
                            <span class="severity-indicator severity-${entity.severity}"></span>
                            <div>
                                <h4>${entity.name}</h4>
                                <p class="result-type">Disease</p>
                            </div>
                        </div>
                    `;
                } else if (result.type === 'category') {
                    return `
                        <div class="search-result category-result" data-category-id="${entity.id}">
                            <div>
                                <h4>${entity.name}</h4>
                                <p class="result-type">Category</p>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="search-result system-result" data-system-id="${entity.id}">
                            <div>
                                <h4>${entity.name}</h4>
                                <p class="result-type">System</p>
                            </div>
                        </div>
                    `;
                }
            }).join('')}
        </div>
    `;

    // Add click handlers
    treeContainer.querySelectorAll('.disease-result').forEach(result => {
        result.addEventListener('click', () => {
            const disease = dataLoader.getDisease(result.dataset.diseaseId);
            selectEntity(disease, 'disease');
        });
    });

    treeContainer.querySelectorAll('.category-result').forEach(result => {
        result.addEventListener('click', () => {
            const category = dataLoader.getCategory(result.dataset.categoryId);
            selectEntity(category, 'category');
        });
    });

    treeContainer.querySelectorAll('.system-result').forEach(result => {
        result.addEventListener('click', () => {
            const system = dataLoader.getSystem(result.dataset.systemId);
            selectEntity(system, 'system');
        });
    });
}

// Show error
function showError(message) {
    const detailPanel = document.getElementById('detailPanel');
    if (detailPanel) {
        detailPanel.innerHTML = `
            <div class="error-message">
                <h2>Error</h2>
                <p>${message}</p>
            </div>
        `;
    }
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// V3 Graph-based Main Script with Cross-Linking
import dataLoader from './data-loader.js';
import medicationDataLoader from '../medications/data-loader.js';
import ExplorerNavigation from '../shared/explorer-navigation.js';
import inlineLinker from '../shared/cross-links/inline-linker.js';
import tooltipManager from '../shared/cross-links/tooltip-manager.js';
import relationshipResolver from '../shared/cross-links/relationship-resolver.js';

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
    try {
        console.log('Initializing Step 1 Differential Diagnosis Tool v3...');

        // Initialize explorer navigation
        const explorerNav = new ExplorerNavigation('conditions');

    // Load condition data
    const loaded = await dataLoader.load();
    if (!loaded) {
        showError('Failed to load data. Please refresh the page.');
        // Hide loading overlay even on error
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('fade-out');
            setTimeout(() => loadingOverlay.style.display = 'none', 300);
        }
        return;
    }

    // Load medication data for cross-linking
    console.log('Loading medication data for cross-linking...');
    const medsLoaded = await medicationDataLoader.load();
    if (medsLoaded) {
        console.log('✓ Medication data loaded for cross-linking');
        console.log(`  - ${medicationDataLoader.drugs.length} drugs indexed`);
    } else {
        console.warn('⚠ Medication data failed to load - inline tooltips will not work');
    }

    // Initialize cross-linking with both data loaders
    inlineLinker.init(medicationDataLoader, dataLoader);

    // Initialize tooltip manager
    tooltipManager.init();

    // Setup event listeners
    setupEventListeners();

    // Render initial view
    renderSystemTree();

    // Check for URL parameters AFTER tree is rendered (deep linking from medications explorer)
    // Use setTimeout to ensure tree DOM is fully built
    setTimeout(() => {
        checkUrlParameters();
    }, 100);

    console.log('Initialization complete');
    console.log('Stats:', dataLoader.getStats());
    console.log('Cross-linking stats:', {
        relationships: relationshipResolver.getStats(),
        inlineLinker: inlineLinker.getStats()
    });

        // Hide loading overlay with fade out
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('fade-out');
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }
    } catch (error) {
        console.error('Initialization error:', error);
        showError(`Failed to initialize: ${error.message}`);
        // Always hide loading overlay, even on error
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('fade-out');
            setTimeout(() => loadingOverlay.style.display = 'none', 300);
        }
    }
}

// Check URL parameters for deep linking
function checkUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const diseaseId = params.get('disease');

    if (diseaseId) {
        console.log(`Deep linking to disease: ${diseaseId}`);
        const disease = dataLoader.getDisease(diseaseId);

        if (disease) {
            // Expand the tree FIRST, then select the entity
            // This ensures the tree nodes exist before we try to highlight them
            expandTreeToDisease(disease);
        } else {
            console.warn(`Disease not found: ${diseaseId}`);
        }
    }
}

// Expand tree to show a specific disease
function expandTreeToDisease(disease) {
    // Find and expand the system
    const systemNode = document.querySelector(`[data-system-id="${disease.system}"]`);
    if (systemNode && !systemNode.classList.contains('expanded')) {
        systemNode.querySelector('.node-header').click();
    }

    // Wait for tree to expand, then find category
    setTimeout(() => {
        // Find the first category that contains this disease
        const categoryId = disease.categories[0];
        if (categoryId) {
            const categoryNode = document.querySelector(`[data-category-id="${categoryId}"]`);
            if (categoryNode && !categoryNode.classList.contains('expanded')) {
                categoryNode.querySelector('.node-header').click();
            }

            // Finally, select and display the disease
            setTimeout(() => {
                // Call selectEntity to display the disease detail and highlight the node
                selectEntity(disease, 'disease');

                // Scroll to the disease node
                const diseaseNode = document.querySelector(`[data-disease-id="${disease.id}"]`);
                if (diseaseNode) {
                    diseaseNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 150);
        }
    }, 150);
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
        <span class="info-icon" title="View system details">→</span>
    `;

    node.appendChild(header);

    // Categories container (initially hidden)
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'categories-container';
    categoriesContainer.style.display = 'none';

    // Get categories for this system
    const categories = dataLoader.getCategoriesForSystem(system.id);
    categories.forEach(category => {
        const categoryNode = createCategoryNode(category);
        categoriesContainer.appendChild(categoryNode);
    });

    node.appendChild(categoriesContainer);

    // Toggle expand/collapse when clicking anywhere on header (except info icon)
    header.addEventListener('click', (e) => {
        // Don't toggle if clicking the info icon
        if (e.target.classList.contains('info-icon')) {
            return;
        }
        toggleSystemNode(node);
    });

    // Show system detail when clicking info icon
    const infoIcon = header.querySelector('.info-icon');
    infoIcon.addEventListener('click', (e) => {
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
        <span class="info-icon" title="View category details">→</span>
    `;

    node.appendChild(header);

    // Check if category has subcategories
    if (category.subcategories && category.subcategories.length > 0) {
        // Create subcategories container
        const subcategoriesContainer = document.createElement('div');
        subcategoriesContainer.className = 'subcategories-container';
        subcategoriesContainer.style.display = 'none';

        category.subcategories.forEach(subcategory => {
            const subcategoryNode = createSubcategoryNode(subcategory, category.id);
            subcategoriesContainer.appendChild(subcategoryNode);
        });

        node.appendChild(subcategoriesContainer);
    } else {
        // No subcategories - create diseases container directly
        const diseasesContainer = document.createElement('div');
        diseasesContainer.className = 'diseases-container';
        diseasesContainer.style.display = 'none';

        const diseases = dataLoader.getDiseasesForCategory(category.id);
        diseases.forEach(disease => {
            const diseaseNode = createDiseaseNode(disease);
            diseasesContainer.appendChild(diseaseNode);
        });

        node.appendChild(diseasesContainer);
    }

    // Toggle expand/collapse when clicking anywhere on header (except info icon)
    header.addEventListener('click', (e) => {
        // Don't toggle if clicking the info icon
        if (e.target.classList.contains('info-icon')) {
            return;
        }
        toggleCategoryNode(node);
    });

    // Show category detail when clicking info icon
    const infoIcon = header.querySelector('.info-icon');
    infoIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        selectEntity(category, 'category');
    });

    return node;
}

// Create subcategory node
function createSubcategoryNode(subcategory, categoryId) {
    const node = document.createElement('div');
    node.className = 'tree-node subcategory-node';
    node.dataset.subcategoryId = subcategory.id;
    node.dataset.categoryId = categoryId;

    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
        <span class="expand-icon">▶</span>
        <span class="node-title">${subcategory.name}</span>
        <span class="info-icon" title="View subcategory details">→</span>
    `;

    node.appendChild(header);

    // Diseases container (initially hidden)
    const diseasesContainer = document.createElement('div');
    diseasesContainer.className = 'diseases-container';
    diseasesContainer.style.display = 'none';

    // Get diseases for this subcategory
    subcategory.diseaseIds.forEach(diseaseId => {
        const disease = dataLoader.getDisease(diseaseId);
        if (disease) {
            const diseaseNode = createDiseaseNode(disease);
            diseasesContainer.appendChild(diseaseNode);
        }
    });

    node.appendChild(diseasesContainer);

    // Toggle expand/collapse when clicking anywhere on header (except info icon)
    header.addEventListener('click', (e) => {
        // Don't toggle if clicking the info icon
        if (e.target.classList.contains('info-icon')) {
            return;
        }
        toggleSubcategoryNode(node);
    });

    // Show subcategory detail when clicking info icon
    const infoIcon = header.querySelector('.info-icon');
    infoIcon.addEventListener('click', (e) => {
        e.stopPropagation();

        // Get the parent category to pass full context
        const category = dataLoader.getCategory(categoryId);
        selectEntity({...subcategory, categoryId, categoryName: category.name}, 'subcategory');
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
    // Check if this category has subcategories or diseases
    const subcategoriesContainer = node.querySelector('.subcategories-container');
    const diseasesContainer = node.querySelector('.diseases-container');
    const expandIcon = node.querySelector('.expand-icon');

    const containerToToggle = subcategoriesContainer || diseasesContainer;

    if (containerToToggle && containerToToggle.style.display === 'none') {
        containerToToggle.style.display = 'block';
        expandIcon.textContent = '▼';
        node.classList.add('expanded');
    } else if (containerToToggle) {
        containerToToggle.style.display = 'none';
        expandIcon.textContent = '▶';
        node.classList.remove('expanded');
    }
}

// Toggle subcategory node
function toggleSubcategoryNode(node) {
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
                     type === 'subcategory' ? `[data-subcategory-id="${entity.id}"]` :
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
    } else if (type === 'subcategory') {
        renderSubcategoryDetail(entity);
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
    const subcategories = category.subcategories || [];

    detailPanel.innerHTML = `
        <div class="entity-detail category-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Category</span>
                <h2>${category.name}</h2>
            </div>

            ${category.detail && category.detail.overview ? `
                <section class="detail-section conversational">
                    <h3>🎯 The Big Picture</h3>
                    <p class="lead-paragraph">${category.detail.overview}</p>
                </section>
            ` : ''}

            ${category.detail && category.detail.classification ? `
                <section class="detail-section">
                    <h3>📚 How to Think About It</h3>
                    <p class="intro-text">Here's a practical way to organize these conditions in your mind:</p>
                    <ul class="styled-list">
                        ${category.detail.classification.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${category.detail && category.detail.generalPrinciples ? `
                <section class="detail-section highlight">
                    <h3>💡 Key Principles to Remember</h3>
                    <p class="intro-text">These are the high-yield concepts you'll use over and over:</p>
                    <ul class="styled-list">
                        ${category.detail.generalPrinciples.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${subcategories.length > 0 ? `
                <section class="detail-section">
                    <h3>🗂️ Subcategories (${subcategories.length})</h3>
                    <p class="intro-text">We've organized this category into focused subcategories to make studying easier:</p>
                    <div class="subcategory-grid">
                        ${subcategories.map(sub => `
                            <div class="subcategory-card" data-subcategory-id="${sub.id}" data-category-id="${category.id}">
                                <h4>${sub.name}</h4>
                                <p class="description">${sub.description || ''}</p>
                                <span class="disease-count">${sub.diseaseIds ? sub.diseaseIds.length : 0} diseases</span>
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            ${category.detail && (category.detail.approach || category.detail.redFlags || category.detail.initialWorkup) ? `
                <section class="detail-section pearls">
                    <h3>🎯 Clinical Approach</h3>
                    ${category.detail.approach ? `<p class="intro-text">${category.detail.approach}</p>` : ''}

                    ${category.detail.redFlags ? `
                        <div class="red-flags-box">
                            <h4>🚩 Red Flags - Don't Miss These!</h4>
                            <ul>
                                ${category.detail.redFlags.map(flag => `<li>${flag}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${category.detail.initialWorkup ? `
                        <div class="workup-box">
                            <h4>Initial Workup</h4>
                            <ul>
                                ${category.detail.initialWorkup.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </section>
            ` : ''}

            <section class="detail-section">
                <h3>📋 All Diseases in this Category (${diseases.length})</h3>
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

    // Add click handlers for subcategory cards
    detailPanel.querySelectorAll('.subcategory-card').forEach(card => {
        card.addEventListener('click', () => {
            const subcategoryId = card.dataset.subcategoryId;
            const categoryId = card.dataset.categoryId;
            const subcategory = category.subcategories.find(s => s.id === subcategoryId);
            const parentCategory = dataLoader.getCategory(categoryId);
            if (subcategory) {
                selectEntity({...subcategory, categoryId, categoryName: parentCategory.name}, 'subcategory');
            }
        });
    });
}

// Helper function to parse and render comparison matrix as HTML table
function renderComparisonTable(comparisonMatrix) {
    const { title, description, content } = comparisonMatrix;

    // Parse the content to extract disease information
    const diseases = [];
    const lines = content.split('\n').filter(line => line.trim());

    let currentDisease = null;
    let currentField = null;

    lines.forEach(line => {
        const trimmed = line.trim();

        // Check if this is a disease header (all caps followed by colon or parentheses)
        if (trimmed.match(/^[A-Z\s\(\)]+:/)) {
            if (currentDisease) {
                diseases.push(currentDisease);
            }
            const diseaseName = trimmed.replace(/:$/, '');
            currentDisease = { name: diseaseName, fields: [] };
        }
        // Check if this is a field (starts with - )
        else if (trimmed.startsWith('- ') && currentDisease) {
            const fieldMatch = trimmed.match(/^-\s+([^:]+):\s*(.+)$/);
            if (fieldMatch) {
                const [, fieldName, fieldValue] = fieldMatch;
                currentDisease.fields.push({ name: fieldName.trim(), value: fieldValue.trim() });
            }
        }
    });

    if (currentDisease) {
        diseases.push(currentDisease);
    }

    // Extract unique field names
    const allFieldNames = [...new Set(diseases.flatMap(d => d.fields.map(f => f.name)))];

    // Build HTML table
    let html = `
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        ${diseases.map(d => `<th>${d.name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
    `;

    allFieldNames.forEach(fieldName => {
        html += '<tr>';
        html += `<td class="field-name">${fieldName}</td>`;
        diseases.forEach(disease => {
            const field = disease.fields.find(f => f.name === fieldName);
            html += `<td>${field ? field.value : '—'}</td>`;
        });
        html += '</tr>';
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    return html;
}

// Render subcategory detail
function renderSubcategoryDetail(subcategory) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    // Get diseases for this subcategory
    const diseases = subcategory.diseaseIds.map(id => dataLoader.getDisease(id)).filter(d => d);

    // Helper function to render flexible content
    const renderFlexibleContent = (detail) => {
        if (!detail) return '';

        let html = '';

        // Overview
        if (detail.overview) {
            html += `
                <section class="detail-section">
                    <h3>Overview</h3>
                    <p>${detail.overview}</p>
                </section>
            `;
        }

        // Diagnostic Algorithm (formatted as preformatted text or Mermaid diagram)
        if (detail.diagnosticAlgorithm) {
            if (typeof detail.diagnosticAlgorithm === 'object' && detail.diagnosticAlgorithm.type === 'mermaid') {
                // Render Mermaid flowchart with controls
                const diagramId = 'diagram-' + Math.random().toString(36).substr(2, 9);
                html += `
                    <section class="detail-section highlight flowchart-section">
                        <div class="flowchart-header">
                            <h3>📋 Diagnostic Approach</h3>
                            <div class="flowchart-controls">
                                <button class="flowchart-btn" onclick="toggleFlowchart('${diagramId}')" title="Toggle flowchart">
                                    <span class="toggle-icon">−</span>
                                </button>
                                <button class="flowchart-btn" onclick="zoomFlowchart('${diagramId}', 1.2)" title="Zoom in">+</button>
                                <button class="flowchart-btn" onclick="zoomFlowchart('${diagramId}', 0.8)" title="Zoom out">−</button>
                                <button class="flowchart-btn" onclick="resetFlowchart('${diagramId}')" title="Reset zoom">↻</button>
                            </div>
                        </div>
                        <div class="mermaid-container" id="${diagramId}" data-zoom="1">
                            <div class="mermaid-wrapper">
                                <pre class="mermaid">${detail.diagnosticAlgorithm.content}</pre>
                            </div>
                        </div>
                    </section>
                `;
            } else {
                // Render plain text algorithm
                const algorithmText = typeof detail.diagnosticAlgorithm === 'string'
                    ? detail.diagnosticAlgorithm
                    : detail.diagnosticAlgorithm.content || '';
                html += `
                    <section class="detail-section highlight">
                        <h3>📋 Diagnostic Approach</h3>
                        <pre class="algorithm">${algorithmText}</pre>
                    </section>
                `;
            }
        }

        // Clinical Approach (free-form)
        if (detail.clinicalApproach) {
            html += `
                <section class="detail-section">
                    <h3>Clinical Approach</h3>
                    <pre class="clinical-approach">${detail.clinicalApproach}</pre>
                </section>
            `;
        }

        // Comparison Matrix (2x2 or other) - render as HTML table
        if (detail.comparisonMatrix) {
            html += `
                <section class="detail-section important">
                    <h3>🔍 ${detail.comparisonMatrix.title || 'Comparison'}</h3>
                    ${detail.comparisonMatrix.description ? `<p><strong>${detail.comparisonMatrix.description}</strong></p>` : ''}
                    ${renderComparisonTable(detail.comparisonMatrix)}
                </section>
            `;
        }

        // Key Features (bullets)
        if (detail.keyFeatures && detail.keyFeatures.length > 0) {
            html += `
                <section class="detail-section">
                    <h3>Key Features</h3>
                    <ul>
                        ${detail.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        // Disease Distinctions
        if (detail.diseaseDistinctions) {
            html += `
                <section class="detail-section pearls">
                    <h3>💎 How to Differentiate</h3>
                    <pre class="disease-distinctions">${detail.diseaseDistinctions}</pre>
                </section>
            `;
        }

        // Clinical Pearls
        if (detail.clinicalPearls && detail.clinicalPearls.length > 0) {
            html += `
                <section class="detail-section pearls">
                    <h3>💎 Clinical Pearls</h3>
                    <ul>
                        ${detail.clinicalPearls.map(pearl => `<li>${pearl}</li>`).join('')}
                    </ul>
                </section>
            `;
        }

        return html;
    };

    // Check if we have enough content to warrant tabs
    const hasMultipleSections = subcategory.subcategoryDetail && (
        (subcategory.subcategoryDetail.diagnosticAlgorithm ? 1 : 0) +
        (subcategory.subcategoryDetail.comparisonMatrix ? 1 : 0) +
        (subcategory.subcategoryDetail.keyFeatures ? 1 : 0) +
        (subcategory.subcategoryDetail.clinicalPearls ? 1 : 0) > 2
    );

    detailPanel.innerHTML = `
        <div class="entity-detail subcategory-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Subcategory</span>
                <h2>${subcategory.name}</h2>
                <p class="breadcrumb">${subcategory.categoryName || ''}</p>
            </div>

            ${subcategory.description ? `
                <section class="detail-section">
                    <p><strong>${subcategory.description}</strong></p>
                </section>
            ` : ''}

            ${hasMultipleSections ? `
                <div class="tabs-container">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="overview">Overview</button>
                        ${subcategory.subcategoryDetail.diagnosticAlgorithm ? '<button class="tab-btn" data-tab="diagnosis">Diagnosis</button>' : ''}
                        ${subcategory.subcategoryDetail.comparisonMatrix ? '<button class="tab-btn" data-tab="comparison">Comparison</button>' : ''}
                        ${subcategory.subcategoryDetail.clinicalPearls || subcategory.subcategoryDetail.keyFeatures ? '<button class="tab-btn" data-tab="pearls">Key Points</button>' : ''}
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" data-tab-pane="overview">
                            ${subcategory.subcategoryDetail.overview ? `
                                <section class="detail-section">
                                    <h3>Overview</h3>
                                    <p>${subcategory.subcategoryDetail.overview}</p>
                                </section>
                            ` : ''}
                            ${subcategory.subcategoryDetail.diseaseDistinctions ? `
                                <section class="detail-section pearls">
                                    <h3>💎 How to Differentiate</h3>
                                    <pre class="disease-distinctions">${subcategory.subcategoryDetail.diseaseDistinctions}</pre>
                                </section>
                            ` : ''}
                        </div>
                        ${subcategory.subcategoryDetail.diagnosticAlgorithm ? `
                            <div class="tab-pane" data-tab-pane="diagnosis">
                                ${subcategory.subcategoryDetail.diagnosticAlgorithm ? (
                                    typeof subcategory.subcategoryDetail.diagnosticAlgorithm === 'object' && subcategory.subcategoryDetail.diagnosticAlgorithm.type === 'mermaid' ?
                                        `<section class="detail-section highlight flowchart-section">
                                            <div class="flowchart-header">
                                                <h3>📋 Diagnostic Approach</h3>
                                                <div class="flowchart-controls">
                                                    <button class="flowchart-btn" onclick="toggleFlowchart('diagram-diagnosis')" title="Toggle flowchart">
                                                        <span class="toggle-icon">−</span>
                                                    </button>
                                                    <button class="flowchart-btn" onclick="zoomFlowchart('diagram-diagnosis', 1.2)" title="Zoom in">+</button>
                                                    <button class="flowchart-btn" onclick="zoomFlowchart('diagram-diagnosis', 0.8)" title="Zoom out">−</button>
                                                    <button class="flowchart-btn" onclick="resetFlowchart('diagram-diagnosis')" title="Reset zoom">↻</button>
                                                </div>
                                            </div>
                                            <div class="mermaid-container" id="diagram-diagnosis" data-zoom="1">
                                                <div class="mermaid-wrapper">
                                                    <pre class="mermaid">${subcategory.subcategoryDetail.diagnosticAlgorithm.content}</pre>
                                                </div>
                                            </div>
                                        </section>`
                                    : `<section class="detail-section highlight">
                                            <h3>📋 Diagnostic Approach</h3>
                                            <pre class="algorithm">${typeof subcategory.subcategoryDetail.diagnosticAlgorithm === 'string' ? subcategory.subcategoryDetail.diagnosticAlgorithm : subcategory.subcategoryDetail.diagnosticAlgorithm.content}</pre>
                                        </section>`
                                ) : ''}
                            </div>
                        ` : ''}
                        ${subcategory.subcategoryDetail.comparisonMatrix ? `
                            <div class="tab-pane" data-tab-pane="comparison">
                                <section class="detail-section important">
                                    <h3>🔍 ${subcategory.subcategoryDetail.comparisonMatrix.title || 'Comparison'}</h3>
                                    ${subcategory.subcategoryDetail.comparisonMatrix.description ? `<p><strong>${subcategory.subcategoryDetail.comparisonMatrix.description}</strong></p>` : ''}
                                    ${renderComparisonTable(subcategory.subcategoryDetail.comparisonMatrix)}
                                </section>
                            </div>
                        ` : ''}
                        ${subcategory.subcategoryDetail.clinicalPearls || subcategory.subcategoryDetail.keyFeatures ? `
                            <div class="tab-pane" data-tab-pane="pearls">
                                ${subcategory.subcategoryDetail.keyFeatures ? `
                                    <section class="detail-section">
                                        <h3>Key Features</h3>
                                        <ul>
                                            ${subcategory.subcategoryDetail.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                                        </ul>
                                    </section>
                                ` : ''}
                                ${subcategory.subcategoryDetail.clinicalPearls ? `
                                    <section class="detail-section pearls">
                                        <h3>💎 Clinical Pearls</h3>
                                        <ul>
                                            ${subcategory.subcategoryDetail.clinicalPearls.map(pearl => `<li>${pearl}</li>`).join('')}
                                        </ul>
                                    </section>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
            ` : renderFlexibleContent(subcategory.subcategoryDetail)}

            <section class="detail-section">
                <h3>Diseases in this Subcategory (${diseases.length})</h3>
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

            <section class="detail-section">
                <div class="quiz-placeholder">
                    <button class="quiz-button" disabled>
                        📝 Practice Questions (Coming Soon)
                    </button>
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

    // Setup tab switching
    detailPanel.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;

            // Remove active class from all tabs and panes
            detailPanel.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            detailPanel.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding pane
            e.target.classList.add('active');
            const pane = detailPanel.querySelector(`[data-tab-pane="${tabName}"]`);
            if (pane) {
                pane.classList.add('active');

                // Render Mermaid diagrams in the newly visible pane
                if (window.mermaid && pane.querySelector('.mermaid')) {
                    window.mermaid.run({
                        querySelector: '.mermaid',
                        nodes: pane.querySelectorAll('.mermaid')
                    });
                }
            }
        });
    });

    // Render Mermaid diagrams if present
    if (window.mermaid) {
        window.mermaid.run({
            querySelector: '.mermaid'
        });
    }
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
                        ${detail.differentialDiagnosis.map(dx => `<li>${inlineLinker.linkConditionsInText(dx, { exclude: [disease.id] })}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${detail.management ? `
                <section class="detail-section highlight">
                    <h3>Management</h3>
                    ${detail.management.acute ? `
                        <h4>Acute Management</h4>
                        <ul>
                            ${detail.management.acute.map(item => `<li>${inlineLinker.linkMedicationsInText(item)}</li>`).join('')}
                        </ul>
                    ` : ''}
                    ${detail.management.chronic ? `
                        <h4>Chronic Management</h4>
                        <ul>
                            ${detail.management.chronic.map(item => `<li>${inlineLinker.linkMedicationsInText(item)}</li>`).join('')}
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

            ${renderRelatedMedications(disease.id)}

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

// Render related medications section
function renderRelatedMedications(diseaseId) {
    const medsByType = relationshipResolver.getMedicationsGroupedByType(diseaseId);

    // Check if there are any related medications
    const hasAny = Object.values(medsByType).some(meds => meds && meds.length > 0);
    if (!hasAny) {
        return ''; // No related medications
    }

    const basePath = getBasePath();

    let html = '<section class="detail-section related-medications">';
    html += '<h3>💊 Related Medications</h3>';

    // Acute Treatment
    if (medsByType.acuteTreatment && medsByType.acuteTreatment.length > 0) {
        html += '<div class="medication-group">';
        html += '<h4>🚨 Acute Treatment</h4>';
        html += '<div class="medication-links">';
        medsByType.acuteTreatment.forEach(med => {
            const priorityClass = med.priority || 'alternative';
            html += `
                <a href="${basePath}medications/index-v2.html?drug=${med.drugId}"
                   target="_blank"
                   class="medication-link ${priorityClass}"
                   title="${med.context}">
                    <span class="med-name">${med.drugName}</span>
                    <span class="priority-badge">${med.priority}</span>
                </a>
            `;
        });
        html += '</div></div>';
    }

    // Chronic Management
    if (medsByType.chronicManagement && medsByType.chronicManagement.length > 0) {
        html += '<div class="medication-group">';
        html += '<h4>🏥 Chronic Management</h4>';
        html += '<div class="medication-links">';
        medsByType.chronicManagement.forEach(med => {
            const priorityClass = med.priority || 'alternative';
            html += `
                <a href="${basePath}medications/index-v2.html?drug=${med.drugId}"
                   target="_blank"
                   class="medication-link ${priorityClass}"
                   title="${med.context}">
                    <span class="med-name">${med.drugName}</span>
                    <span class="priority-badge">${med.priority}</span>
                </a>
            `;
        });
        html += '</div></div>';
    }

    // Contraindicated
    if (medsByType.contraindicated && medsByType.contraindicated.length > 0) {
        html += '<div class="medication-group contraindicated">';
        html += '<h4>⚠️ Contraindicated</h4>';
        html += '<div class="medication-links">';
        medsByType.contraindicated.forEach(med => {
            html += `
                <a href="${basePath}medications/index-v2.html?drug=${med.drugId}"
                   target="_blank"
                   class="medication-link contraindicated"
                   title="${med.context}">
                    <span class="med-name">${med.drugName}</span>
                    <span class="priority-badge">avoid</span>
                </a>
            `;
        });
        html += '</div></div>';
    }

    html += '</section>';
    return html;
}

// Get base path for navigation
function getBasePath() {
    const hostname = window.location.hostname;
    if (hostname.includes('github.io')) {
        return '/step1/';
    }
    return '../';
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

// Flowchart control functions
window.toggleFlowchart = function(diagramId) {
    const container = document.getElementById(diagramId);
    const toggleIcon = event.target.closest('button').querySelector('.toggle-icon');

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        toggleIcon.textContent = '−';
    } else {
        container.style.display = 'none';
        toggleIcon.textContent = '+';
    }
};

window.zoomFlowchart = function(diagramId, factor) {
    const container = document.getElementById(diagramId);
    const currentZoom = parseFloat(container.dataset.zoom || 1);
    const newZoom = Math.max(0.5, Math.min(3, currentZoom * factor));

    container.dataset.zoom = newZoom;
    const wrapper = container.querySelector('.mermaid-wrapper');
    wrapper.style.transform = `scale(${newZoom})`;
    wrapper.style.transformOrigin = 'top center';
};

window.resetFlowchart = function(diagramId) {
    const container = document.getElementById(diagramId);
    container.dataset.zoom = 1;
    const wrapper = container.querySelector('.mermaid-wrapper');
    wrapper.style.transform = 'scale(1)';
};

// Start application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

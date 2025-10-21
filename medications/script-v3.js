// Medications Explorer V3 - Simplified Tree-Based UI
// Matches the Conditions Explorer pattern for consistency

import dataLoader from './data-loader.js';
import ExplorerNavigation from '../shared/explorer-navigation.js';

// Application state
const state = {
    searchQuery: '',
    selectedEntity: null,
    selectedType: null // 'system', 'therapeutic-class', 'pharma-class', 'drug'
};

// Initialize application
async function init() {
    console.log('Initializing Medications Explorer V3...');

    // Initialize explorer navigation
    const explorerNav = new ExplorerNavigation('medications');

    // Load data
    const loaded = await dataLoader.load();
    if (!loaded) {
        showError('Failed to load medication data. Please refresh the page.');
        return;
    }

    // Setup event listeners
    setupEventListeners();

    // Render initial view
    renderSystemTree();

    // Info modal handling
    setupInfoModal();

    console.log('Initialization complete');
    console.log('Stats:', dataLoader.getStats());
}

// Setup event listeners
function setupEventListeners() {
    // Search box
    const searchBox = document.getElementById('global-search');
    if (searchBox) {
        searchBox.addEventListener('input', handleSearch);
    }
}

// Handle search
function handleSearch(event) {
    const query = event.target.value;
    state.searchQuery = query;

    if (query.length < 2) {
        renderSystemTree();
        return;
    }

    const results = dataLoader.search(query);
    renderSearchResults(results);
}

// Render system tree (default view)
function renderSystemTree() {
    const treeContainer = document.getElementById('medicationsTree');
    if (!treeContainer) return;

    treeContainer.innerHTML = '';

    const systems = dataLoader.getSystems();

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

    // Count total drugs in this system
    const therapeuticClasses = dataLoader.getTherapeuticClassesBySystem(system.id);
    let drugCount = 0;
    therapeuticClasses.forEach(tc => {
        const pharmaClasses = dataLoader.getPharmacologicClassesByTherapeuticClass(tc.id);
        pharmaClasses.forEach(pc => {
            drugCount += dataLoader.getDrugsByPharmacologicClass(pc.id).length;
        });
    });

    const badge = document.createElement('span');
    badge.className = 'count-badge';
    badge.textContent = drugCount;
    header.appendChild(badge);

    node.appendChild(header);

    // Therapeutic classes container (initially hidden)
    const therapeuticContainer = document.createElement('div');
    therapeuticContainer.className = 'categories-container';
    therapeuticContainer.style.display = 'none';

    therapeuticClasses.forEach(therapeuticClass => {
        const therapeuticNode = createTherapeuticClassNode(therapeuticClass);
        therapeuticContainer.appendChild(therapeuticNode);
    });

    node.appendChild(therapeuticContainer);

    // Toggle expand/collapse
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNode(node, therapeuticContainer);
    });

    return node;
}

// Create therapeutic class node
function createTherapeuticClassNode(therapeuticClass) {
    const node = document.createElement('div');
    node.className = 'tree-node category-node';
    node.dataset.therapeuticId = therapeuticClass.id;

    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
        <span class="expand-icon">▶</span>
        <span class="node-title">${therapeuticClass.name}</span>
    `;

    // Count drugs
    const pharmaClasses = dataLoader.getPharmacologicClassesByTherapeuticClass(therapeuticClass.id);
    let drugCount = 0;
    pharmaClasses.forEach(pc => {
        drugCount += dataLoader.getDrugsByPharmacologicClass(pc.id).length;
    });

    const badge = document.createElement('span');
    badge.className = 'count-badge';
    badge.textContent = drugCount;
    header.appendChild(badge);

    node.appendChild(header);

    // Pharmacologic classes container (initially hidden)
    const pharmaContainer = document.createElement('div');
    pharmaContainer.className = 'diseases-container';
    pharmaContainer.style.display = 'none';

    pharmaClasses.forEach(pharmaClass => {
        const pharmaNode = createPharmaClassNode(pharmaClass);
        pharmaContainer.appendChild(pharmaNode);
    });

    node.appendChild(pharmaContainer);

    // Toggle expand/collapse
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNode(node, pharmaContainer);
    });

    // Click to show detail
    node.addEventListener('click', (e) => {
        if (e.target === header || e.target.parentElement === header) return;
        e.stopPropagation();
        selectEntity(therapeuticClass, 'therapeutic-class');
    });

    return node;
}

// Create pharmacologic class node
function createPharmaClassNode(pharmaClass) {
    const node = document.createElement('div');
    node.className = 'tree-node category-node pharma-class-node';
    node.dataset.pharmaId = pharmaClass.id;

    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
        <span class="expand-icon">▶</span>
        <span class="node-title">${pharmaClass.name}</span>
    `;

    const drugs = dataLoader.getDrugsByPharmacologicClass(pharmaClass.id);
    const badge = document.createElement('span');
    badge.className = 'count-badge';
    badge.textContent = drugs.length;
    header.appendChild(badge);

    node.appendChild(header);

    // Drugs container (initially hidden)
    const drugsContainer = document.createElement('div');
    drugsContainer.className = 'diseases-container';
    drugsContainer.style.display = 'none';

    drugs.forEach(drug => {
        const drugNode = createDrugNode(drug, pharmaClass);
        drugsContainer.appendChild(drugNode);
    });

    node.appendChild(drugsContainer);

    // Toggle expand/collapse
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNode(node, drugsContainer);
    });

    // Click to show detail
    node.addEventListener('click', (e) => {
        if (e.target === header || e.target.parentElement === header) return;
        e.stopPropagation();
        selectEntity(pharmaClass, 'pharma-class');
    });

    return node;
}

// Create drug node
function createDrugNode(drug, pharmaClass) {
    const node = document.createElement('div');
    node.className = 'tree-node disease-node drug-node';
    node.dataset.drugId = drug.id;

    node.innerHTML = `
        <div class="node-header">
            <span class="node-title">${drug.name}</span>
        </div>
    `;

    node.addEventListener('click', (e) => {
        e.stopPropagation();
        selectEntity({ drug, pharmaClass }, 'drug');
    });

    return node;
}

// Toggle node expansion
function toggleNode(node, container) {
    const expandIcon = node.querySelector('.expand-icon');

    if (container.style.display === 'none') {
        container.style.display = 'block';
        expandIcon.textContent = '▼';
        node.classList.add('expanded');
    } else {
        container.style.display = 'none';
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
                     type === 'therapeutic-class' ? `[data-therapeutic-id="${entity.id}"]` :
                     type === 'pharma-class' ? `[data-pharma-id="${entity.id}"]` :
                     `[data-drug-id="${entity.drug.id}"]`;

    const selectedNode = document.querySelector(selector);
    if (selectedNode) {
        selectedNode.classList.add('selected');
    }

    // Render detail panel
    if (type === 'system') {
        renderSystemDetail(entity);
    } else if (type === 'therapeutic-class') {
        renderTherapeuticClassDetail(entity);
    } else if (type === 'pharma-class') {
        renderPharmaClassDetail(entity);
    } else if (type === 'drug') {
        renderDrugDetail(entity.drug, entity.pharmaClass);
    }
}

// Render system detail
function renderSystemDetail(system) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const therapeuticClasses = dataLoader.getTherapeuticClassesBySystem(system.id);

    detailPanel.innerHTML = `
        <div class="entity-detail system-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Body System</span>
                <h2>${system.name}</h2>
            </div>

            <section class="detail-section">
                <h3>Therapeutic Classes (${therapeuticClasses.length})</h3>
                <div class="category-list">
                    ${therapeuticClasses.map(tc => `
                        <div class="category-card" data-therapeutic-id="${tc.id}">
                            <h4>${tc.name}</h4>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;

    // Add click handlers for therapeutic class cards
    detailPanel.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const therapeuticId = card.dataset.therapeuticId;
            const therapeutic = dataLoader.getClassById(therapeuticId);
            selectEntity(therapeutic, 'therapeutic-class');
        });
    });
}

// Render therapeutic class detail
function renderTherapeuticClassDetail(therapeuticClass) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const pharmaClasses = dataLoader.getPharmacologicClassesByTherapeuticClass(therapeuticClass.id);

    detailPanel.innerHTML = `
        <div class="entity-detail category-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Therapeutic Class</span>
                <h2>${therapeuticClass.name}</h2>
            </div>

            <section class="detail-section">
                <h3>Pharmacologic Classes (${pharmaClasses.length})</h3>
                <div class="category-list">
                    ${pharmaClasses.map(pc => {
                        const drugs = dataLoader.getDrugsByPharmacologicClass(pc.id);
                        return `
                            <div class="category-card" data-pharma-id="${pc.id}">
                                <h4>${pc.name}</h4>
                                <span class="count-badge">${drugs.length} drugs</span>
                                ${pc.mechanism ? `<p class="mechanism-preview">${pc.mechanism}</p>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        </div>
    `;

    // Add click handlers
    detailPanel.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const pharmaId = card.dataset.pharmaId;
            const pharma = dataLoader.getClassById(pharmaId);
            selectEntity(pharma, 'pharma-class');
        });
    });
}

// Render pharmacologic class detail
function renderPharmaClassDetail(pharmaClass) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const drugs = dataLoader.getDrugsByPharmacologicClass(pharmaClass.id);

    detailPanel.innerHTML = `
        <div class="entity-detail category-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Pharmacologic Class</span>
                <h2>${pharmaClass.name}</h2>
            </div>

            ${pharmaClass.mechanism ? `
                <section class="detail-section">
                    <h3>Mechanism of Action</h3>
                    <p>${pharmaClass.mechanism}</p>
                </section>
            ` : ''}

            ${pharmaClass.sideEffects && pharmaClass.sideEffects.length ? `
                <section class="detail-section">
                    <h3>Class-Wide Side Effects</h3>
                    <div class="tag-container">
                        ${pharmaClass.sideEffects.map(effect => `<span class="tag side-effect">${effect}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${pharmaClass.interactions ? `
                <section class="detail-section">
                    <h3>Drug Interactions</h3>
                    <p>${pharmaClass.interactions}</p>
                    ${pharmaClass.interactionDetails ? `<p><strong>Details:</strong> ${pharmaClass.interactionDetails}</p>` : ''}
                </section>
            ` : ''}

            <section class="detail-section">
                <h3>Drugs in this Class (${drugs.length})</h3>
                <div class="disease-list">
                    ${drugs.map(drug => `
                        <div class="disease-card drug-card-mini" data-drug-id="${drug.id}">
                            <div class="disease-card-content">
                                <h4>${drug.name}</h4>
                                ${drug.features ? `<p class="drug-features-preview">${drug.features.substring(0, 100)}${drug.features.length > 100 ? '...' : ''}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;

    // Add click handlers for drug cards
    detailPanel.querySelectorAll('.drug-card-mini').forEach(card => {
        card.addEventListener('click', () => {
            const drugId = card.dataset.drugId;
            const drug = dataLoader.getDrugById(drugId);
            selectEntity({ drug, pharmaClass }, 'drug');
        });
    });
}

// Render drug detail
function renderDrugDetail(drug, pharmaClass) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    detailPanel.innerHTML = `
        <div class="entity-detail disease-detail drug-detail">
            <div class="entity-header">
                <span class="entity-type-badge">Drug</span>
                <h2>${drug.name}</h2>
                <div class="disease-metadata">
                    <span class="badge">${pharmaClass.name}</span>
                </div>
            </div>

            ${pharmaClass.mechanism ? `
                <section class="detail-section">
                    <h3>Mechanism of Action</h3>
                    <p>${pharmaClass.mechanism}</p>
                </section>
            ` : ''}

            ${drug.features ? `
                <section class="detail-section">
                    <h3>Key Features</h3>
                    <p>${drug.features}</p>
                </section>
            ` : ''}

            ${drug.choice ? `
                <section class="detail-section highlight">
                    <h3>Clinical Choice</h3>
                    <p>${drug.choice}</p>
                </section>
            ` : ''}

            ${drug.indications && drug.indications.length ? `
                <section class="detail-section">
                    <h3>Indications</h3>
                    <div class="tag-container">
                        ${drug.indications.map(indication => `<span class="tag indication">${indication}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${drug.contraindications && drug.contraindications.length ? `
                <section class="detail-section important">
                    <h3>Contraindications</h3>
                    <div class="tag-container">
                        ${drug.contraindications.map(contraindication => `<span class="tag contraindication">${contraindication}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${pharmaClass.sideEffects && pharmaClass.sideEffects.length ? `
                <section class="detail-section">
                    <h3>Adverse Effects</h3>
                    <div class="tag-container">
                        ${pharmaClass.sideEffects.map(effect => `<span class="tag side-effect">${effect}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${pharmaClass.interactions ? `
                <section class="detail-section">
                    <h3>Drug Interactions</h3>
                    <p>${pharmaClass.interactions}</p>
                    ${pharmaClass.interactionDetails ? `<p><strong>Details:</strong> ${pharmaClass.interactionDetails}</p>` : ''}
                </section>
            ` : ''}
        </div>
    `;
}

// Render search results
function renderSearchResults(results) {
    const treeContainer = document.getElementById('medicationsTree');
    if (!treeContainer) return;

    if (results.length === 0) {
        treeContainer.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }

    treeContainer.innerHTML = `
        <div class="search-results">
            <h3>Search Results (${results.length})</h3>
            ${results.map(result => {
                const entity = result.item;
                if (result.type === 'drug') {
                    return `
                        <div class="search-result drug-result" data-drug-id="${entity.id}">
                            <div>
                                <h4>${entity.name}</h4>
                                <p class="result-type">Drug</p>
                            </div>
                        </div>
                    `;
                } else if (result.type === 'class') {
                    return `
                        <div class="search-result class-result" data-class-id="${entity.id}">
                            <div>
                                <h4>${entity.name}</h4>
                                <p class="result-type">${entity.pageType === 'therapeutic-class' ? 'Therapeutic' : 'Pharmacologic'} Class</p>
                            </div>
                        </div>
                    `;
                } else if (result.type === 'system') {
                    return `
                        <div class="search-result system-result" data-system-id="${entity.id}">
                            <div>
                                <h4>${entity.name}</h4>
                                <p class="result-type">Body System</p>
                            </div>
                        </div>
                    `;
                }
                return '';
            }).join('')}
        </div>
    `;

    // Add click handlers
    treeContainer.querySelectorAll('.drug-result').forEach(result => {
        result.addEventListener('click', () => {
            const drug = dataLoader.getDrugById(result.dataset.drugId);
            const pharmaClass = dataLoader.getClassById(drug.pharmacologicClass);
            selectEntity({ drug, pharmaClass }, 'drug');
        });
    });

    treeContainer.querySelectorAll('.class-result').forEach(result => {
        result.addEventListener('click', () => {
            const classEntity = dataLoader.getClassById(result.dataset.classId);
            const type = classEntity.pageType === 'therapeutic-class' ? 'therapeutic-class' : 'pharma-class';
            selectEntity(classEntity, type);
        });
    });

    treeContainer.querySelectorAll('.system-result').forEach(result => {
        result.addEventListener('click', () => {
            const system = dataLoader.getSystemById(result.dataset.systemId);
            selectEntity(system, 'system');
        });
    });
}

// Setup info modal
function setupInfoModal() {
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const infoModalClose = document.getElementById('info-modal-close');
    const infoModalStart = document.getElementById('info-modal-start');

    const WELCOME_STORAGE_KEY = 'step1MedicationsExplorer_seenWelcome';
    let hasSeenWelcome = false;

    try {
        hasSeenWelcome = localStorage.getItem(WELCOME_STORAGE_KEY) === 'true';
    } catch (error) {
        hasSeenWelcome = false;
    }

    const openModal = () => {
        if (!infoModal) return;
        infoModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        try {
            localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
        } catch (error) {
            // Ignore
        }
    };

    const closeModal = () => {
        if (!infoModal) return;
        infoModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    if (infoButton) {
        infoButton.addEventListener('click', openModal);
    }

    if (infoModalClose) {
        infoModalClose.addEventListener('click', closeModal);
    }

    if (infoModalStart) {
        infoModalStart.addEventListener('click', closeModal);
    }

    if (infoModal) {
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal && !infoModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Show welcome modal on first visit
    if (!hasSeenWelcome) {
        setTimeout(openModal, 300);
    }
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

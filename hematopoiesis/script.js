// Hematopoiesis Explorer - Main Script

import dataLoader from './data-loader.js';
import HematopoiesisQuizMode from './quiz-mode.js';

// Application state
const state = {
    searchQuery: '',
    selectedEntity: null,
    selectedType: null // 'system', 'lineage-group', 'cell'
};

// Quiz mode instance
let quizMode = null;

// Initialize application
async function init() {
    try {
        console.log('Initializing Hematopoiesis Explorer...');

        // Load hematopoiesis data
        const loaded = await dataLoader.load();
        if (!loaded) {
            showError('Failed to load hematopoiesis data. Please refresh the page.');
            hideLoadingOverlay();
            return;
        }

        // Initialize quiz mode
        quizMode = new HematopoiesisQuizMode(dataLoader);
        window.quizMode = quizMode; // Make available globally for onclick handlers

        // Setup event listeners
        setupEventListeners();

        // Render initial view
        renderLineageTree();

        // Info modal handling
        setupInfoModal();

        console.log('Initialization complete');
        console.log('Stats:', dataLoader.getStats());

        // Hide loading overlay
        hideLoadingOverlay();
    } catch (error) {
        console.error('Initialization error:', error);
        showError(`Failed to initialize: ${error.message}`);
        hideLoadingOverlay();
    }
}

function hideLoadingOverlay() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 300);
    }
}

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });
    }

    // Quiz mode button
    const quizButton = document.getElementById('quiz-mode-button');
    if (quizButton) {
        quizButton.addEventListener('click', () => {
            quizMode.showCellSelection('quiz');
        });
    }

    // Learning mode button
    const learningButton = document.getElementById('learning-mode-button');
    if (learningButton) {
        learningButton.addEventListener('click', () => {
            quizMode.showCellSelection('learning');
        });
    }

    // Info button
    const infoButton = document.getElementById('info-button');
    if (infoButton) {
        infoButton.addEventListener('click', () => {
            showInfoModal();
        });
    }

    // Explorer toggle buttons (for future navigation)
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const explorer = e.currentTarget.dataset.explorer;
            if (explorer === 'hematopoiesis' || e.currentTarget.classList.contains('disabled')) {
                return;
            }
            navigateToExplorer(explorer);
        });
    });
}

function navigateToExplorer(explorer) {
    const routes = {
        conditions: '../conditions/index.html',
        medications: '../medications/index-v2.html',
        bugs: '#'
    };
    if (routes[explorer]) {
        window.location.href = routes[explorer];
    }
}

function renderLineageTree() {
    const treeContainer = document.getElementById('hematopoiesisTree');
    if (!treeContainer) return;

    const tree = dataLoader.getTree();
    if (!tree) return;

    treeContainer.innerHTML = '';

    // Render the root and its children
    const treeEl = createTreeNodeElement(tree);
    treeContainer.appendChild(treeEl);
}

function createTreeNodeElement(node, depth = 0) {
    const nodeDiv = document.createElement('div');
    nodeDiv.className = `tree-node tree-node-${node.type || 'root'}`;
    nodeDiv.dataset.id = node.id;
    nodeDiv.dataset.depth = depth;

    // For root node, only render its children
    if (node.type === 'root') {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'tree-children';

        (node.children || []).forEach(child => {
            const childEl = createTreeNodeElement(child, depth);
            childrenContainer.appendChild(childEl);
        });

        return childrenContainer;
    }

    // Start collapsed by default (except for the root HSC node at depth 0)
    const startCollapsed = depth > 0;
    if (startCollapsed) {
        nodeDiv.classList.add('collapsed');
    }

    // Create node header
    const nodeHeader = document.createElement('div');
    nodeHeader.className = `tree-node-header tree-node-header-${node.type}`;

    const hasChildren = node.children && node.children.length > 0;
    const hasDetailPage = node.pageType === 'lineage' || node.pageType === 'cell';

    nodeHeader.innerHTML = `
        ${hasChildren ? `<span class="tree-icon">${startCollapsed ? '▶' : '▼'}</span>` : '<span class="tree-icon-spacer"></span>'}
        ${node.icon ? `<span class="tree-node-icon">${node.icon}</span>` : ''}
        <span class="tree-label">${node.name}</span>
        ${hasDetailPage ? '<span class="info-icon" title="View details">→</span>' : ''}
    `;

    nodeDiv.appendChild(nodeHeader);

    // Create children container if node has children
    if (hasChildren) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'tree-children';

        node.children.forEach(child => {
            const childEl = createTreeNodeElement(child, depth + 1);
            childrenContainer.appendChild(childEl);
        });

        nodeDiv.appendChild(childrenContainer);

        // Toggle children - make entire header clickable for expand/collapse (except info icon)
        nodeHeader.addEventListener('click', (e) => {
            // Don't toggle if clicking the info icon
            if (e.target.classList.contains('info-icon')) {
                return;
            }

            e.stopPropagation();
            nodeDiv.classList.toggle('collapsed');
            const iconEl = nodeHeader.querySelector('.tree-icon');
            if (iconEl) {
                iconEl.textContent = nodeDiv.classList.contains('collapsed') ? '▶' : '▼';
            }
        });
    }

    // Click handler for info icon - show detail
    if (hasDetailPage) {
        const infoIcon = nodeHeader.querySelector('.info-icon');
        if (infoIcon) {
            infoIcon.addEventListener('click', (e) => {
                e.stopPropagation();

                // Highlight selected
                document.querySelectorAll('.tree-node').forEach(el => el.classList.remove('selected'));
                nodeDiv.classList.add('selected');

                // Show detail based on node type
                if (node.pageType === 'lineage') {
                    showLineageDetail(node.id);
                } else if (node.pageType === 'cell') {
                    const cell = dataLoader.getCellById(node.id);
                    if (cell) showCellDetail(cell);
                }
            });
        }
    }

    return nodeDiv;
}

function showCellDetail(cell) {
    state.selectedEntity = cell;
    state.selectedType = 'cell';

    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    detailPanel.innerHTML = `
        <div class="cell-detail">
            <h1 class="cell-name">${cell.name}</h1>
            <div class="cell-lineage-badge">${formatLineageName(cell.lineage)}</div>

            ${cell.markers ? `
                <section class="detail-section">
                    <h2>🔬 Surface Markers</h2>
                    <div class="tags-container">
                        ${cell.markers.map(m => `<span class="tag tag-marker">${m}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            <section class="detail-section">
                <h2>📝 Morphology</h2>
                <p>${cell.morphology}</p>
                ${cell.size ? `<p><strong>Size:</strong> ${cell.size}</p>` : ''}
            </section>

            <section class="detail-section">
                <h2>📍 Location</h2>
                <p>${cell.location}</p>
            </section>

            <section class="detail-section">
                <h2>⚙️ Function</h2>
                <p>${cell.function}</p>
                ${cell.lifespan ? `<p><strong>Lifespan:</strong> ${cell.lifespan}</p>` : ''}
            </section>

            ${cell.mechanisticDetail ? `
                <section class="detail-section">
                    <h2>🔬 Mechanistic Detail</h2>
                    <p>${cell.mechanisticDetail}</p>
                </section>
            ` : ''}

            ${cell.transcriptionFactors ? `
                <section class="detail-section">
                    <h2>🧬 Transcription Factors</h2>
                    <div class="tags-container">
                        ${cell.transcriptionFactors.map(tf => `<span class="tag tag-tf">${tf}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${cell.cytokines ? `
                <section class="detail-section">
                    <h2>🔄 Cytokines & Growth Factors</h2>
                    ${renderCytokines(cell.cytokines)}
                </section>
            ` : ''}

            ${cell.differentiatesFrom ? `
                <section class="detail-section">
                    <h2>↑ Differentiates From</h2>
                    <p>${cell.differentiatesFrom}</p>
                </section>
            ` : ''}

            ${cell.differentiatesTo ? `
                <section class="detail-section">
                    <h2>↓ Differentiates To</h2>
                    <div class="tags-container">
                        ${cell.differentiatesTo.map(c => `<span class="tag">${c}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${cell.granuleContents ? `
                <section class="detail-section">
                    <h2>🎯 Granule Contents</h2>
                    ${renderGranuleContents(cell.granuleContents)}
                </section>
            ` : ''}

            ${cell.clinicalRelevance ? `
                <section class="detail-section">
                    <h2>🏥 Clinical Relevance</h2>
                    <ul>
                        ${cell.clinicalRelevance.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${cell.diseases ? `
                <section class="detail-section">
                    <h2>🦠 Associated Diseases</h2>
                    <ul>
                        ${cell.diseases.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${cell.step1Pearls ? `
                <section class="detail-section step1-pearls">
                    <h2>🎯 Step 1 High-Yield Pearls</h2>
                    <ul>
                        ${cell.step1Pearls.map(pearl => `<li>${pearl}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}
        </div>
    `;

    detailPanel.scrollTop = 0;
}

function showLineageDetail(lineageId) {
    const lineage = dataLoader.getLineageById(lineageId);
    if (!lineage) return;

    state.selectedEntity = lineage;
    state.selectedType = 'lineage';

    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    const overview = lineage.overview || {};
    const stages = lineage.stages || [];

    detailPanel.innerHTML = `
        <div class="lineage-detail">
            <h1 class="lineage-name">${lineage.icon || ''} ${lineage.name}</h1>

            ${overview.description ? `
                <section class="detail-section lineage-overview">
                    <h2>📖 Overview</h2>
                    <p>${overview.description}</p>
                    ${overview.timeline ? `<p><strong>Timeline:</strong> ${overview.timeline}</p>` : ''}
                </section>
            ` : ''}

            ${overview.keyTranscriptionFactors ? `
                <section class="detail-section">
                    <h2>🧬 Key Transcription Factors</h2>
                    <div class="tags-container">
                        ${overview.keyTranscriptionFactors.map(tf => `<span class="tag tag-tf">${tf}</span>`).join('')}
                    </div>
                </section>
            ` : ''}

            ${overview.keyCytokines ? `
                <section class="detail-section">
                    <h2>🔄 Key Cytokines</h2>
                    <ul>
                        ${overview.keyCytokines.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${overview.keyMechanism ? `
                <section class="detail-section">
                    <h2>⚙️ Key Mechanism</h2>
                    <p>${overview.keyMechanism}</p>
                </section>
            ` : ''}

            <div class="lineage-stages">
                <h2>🔬 Maturation Stages</h2>
                ${stages.map((stage, index) => renderLineageStage(stage, index)).join('')}
            </div>

            ${lineage.clinicalCorrelations ? `
                <section class="detail-section">
                    <h2>🏥 Clinical Correlations</h2>
                    <ul>
                        ${lineage.clinicalCorrelations.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            ${lineage.step1HighYieldConcepts ? `
                <section class="detail-section step1-pearls">
                    <h2>🎯 Step 1 High-Yield Concepts</h2>
                    <ul>
                        ${lineage.step1HighYieldConcepts.map(concept => `<li>${concept}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}
        </div>
    `;

    detailPanel.scrollTop = 0;
}

function renderLineageStage(stage, index) {
    return `
        <div class="lineage-stage" id="stage-${stage.id}">
            <div class="stage-header">
                <span class="stage-number">Stage ${stage.stageNumber || index + 1}</span>
                <h3 class="stage-name">${stage.name}</h3>
            </div>

            ${stage.markers ? `
                <div class="stage-section">
                    <h4>🔬 Surface Markers</h4>
                    <div class="tags-container">
                        ${stage.markers.map(m => `<span class="tag tag-marker">${m}</span>`).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="stage-section">
                <h4>📝 Morphology</h4>
                <p>${stage.morphology}</p>
                ${stage.size ? `<p><strong>Size:</strong> ${stage.size}</p>` : ''}
                ${stage.nucleusCytoplasmRatio ? `<p><strong>N:C Ratio:</strong> ${stage.nucleusCytoplasmRatio}</p>` : ''}
            </div>

            ${stage.function ? `
                <div class="stage-section">
                    <h4>⚙️ Function</h4>
                    <p>${stage.function}</p>
                </div>
            ` : ''}

            ${stage.mechanisticDetail ? `
                <div class="stage-section">
                    <h4>🔬 Mechanistic Detail</h4>
                    <p>${stage.mechanisticDetail}</p>
                </div>
            ` : ''}

            ${stage.transcriptionFactors ? `
                <div class="stage-section">
                    <h4>🧬 Transcription Factors</h4>
                    <div class="tags-container">
                        ${stage.transcriptionFactors.map(tf => `<span class="tag tag-tf">${tf}</span>`).join('')}
                    </div>
                </div>
            ` : ''}

            ${stage.cytokines ? `
                <div class="stage-section">
                    <h4>🔄 Cytokines</h4>
                    ${renderCytokines(stage.cytokines)}
                </div>
            ` : ''}

            ${stage.granuleContents ? `
                <div class="stage-section">
                    <h4>🎯 Granule Contents</h4>
                    ${renderGranuleContents(stage.granuleContents)}
                </div>
            ` : ''}

            ${stage.surfaceReceptors ? `
                <div class="stage-section">
                    <h4>📡 Surface Receptors</h4>
                    <ul>
                        ${stage.surfaceReceptors.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${stage.secretedFactors ? `
                <div class="stage-section">
                    <h4>📤 Secreted Factors</h4>
                    ${renderCytokines(stage.secretedFactors)}
                </div>
            ` : ''}

            ${stage.clinicalRelevance ? `
                <div class="stage-section">
                    <h4>🏥 Clinical Relevance</h4>
                    <ul>
                        ${stage.clinicalRelevance.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${stage.diseases ? `
                <div class="stage-section">
                    <h4>🦠 Associated Diseases</h4>
                    <ul>
                        ${stage.diseases.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${stage.step1Pearls ? `
                <div class="stage-section stage-pearls">
                    <h4>🎯 Step 1 Pearls</h4>
                    <ul>
                        ${stage.step1Pearls.map(pearl => `<li>${pearl}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function showLineageGroupDetail(lineageGroup) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    detailPanel.innerHTML = `
        <div class="lineage-detail">
            <h1>${lineageGroup.name}</h1>
            <p class="lineage-description">${lineageGroup.description}</p>

            ${lineageGroup.sharedFeatures ? `
                <section class="detail-section">
                    <h2>Shared Features</h2>
                    <ul>
                        ${lineageGroup.sharedFeatures.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}

            <section class="detail-section">
                <h2>Cells in this Lineage (${lineageGroup.cells.length})</h2>
                <div class="cell-grid">
                    ${lineageGroup.cells.map(cell => `
                        <div class="cell-card" data-cell-id="${cell.id}">
                            <h3>${cell.name}</h3>
                            <p class="cell-summary">${cell.function.substring(0, 100)}...</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;

    // Add click handlers to cell cards
    detailPanel.querySelectorAll('.cell-card').forEach(card => {
        card.addEventListener('click', () => {
            const cellId = card.dataset.cellId;
            const cell = dataLoader.getCellById(cellId);
            if (cell) showCellDetail(cell);
        });
    });

    detailPanel.scrollTop = 0;
}

function formatLineageName(lineageId) {
    return lineageId.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function renderCytokines(cytokines) {
    let html = '<div class="cytokine-list">';

    if (typeof cytokines === 'object' && !Array.isArray(cytokines)) {
        // Cytokines organized by category
        for (const [category, items] of Object.entries(cytokines)) {
            if (Array.isArray(items) && items.length > 0) {
                html += `<div class="cytokine-category">
                    <strong>${formatCategoryName(category)}:</strong>
                    <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>`;
            }
        }
    } else if (Array.isArray(cytokines)) {
        html += `<ul>${cytokines.map(c => `<li>${c}</li>`).join('')}</ul>`;
    }

    html += '</div>';
    return html;
}

function renderGranuleContents(contents) {
    let html = '<div class="granule-contents">';

    for (const [category, items] of Object.entries(contents)) {
        if (Array.isArray(items) && items.length > 0) {
            html += `<div class="granule-category">
                <strong>${formatCategoryName(category)}:</strong>
                <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>`;
        }
    }

    html += '</div>';
    return html;
}

function formatCategoryName(category) {
    return category.split(/[-_]/).map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function handleSearch(query) {
    state.searchQuery = query.toLowerCase().trim();

    if (!state.searchQuery) {
        renderLineageTree();
        return;
    }

    const results = dataLoader.searchCells(state.searchQuery);
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel) return;

    if (results.length === 0) {
        detailPanel.innerHTML = `
            <div class="search-results">
                <h2>No results found for "${state.searchQuery}"</h2>
                <p>Try searching for cell names, markers (CD34, CD19), or functions.</p>
            </div>
        `;
        return;
    }

    detailPanel.innerHTML = `
        <div class="search-results">
            <h2>Search Results (${results.length})</h2>
            <div class="cell-grid">
                ${results.map(cell => `
                    <div class="cell-card" data-cell-id="${cell.id}">
                        <h3>${cell.name}</h3>
                        <div class="cell-lineage-badge-small">${formatLineageName(cell.lineage)}</div>
                        ${cell.markers ? `
                            <div class="cell-markers-preview">
                                ${cell.markers.slice(0, 3).map(m => `<span class="tag-small">${m}</span>`).join('')}
                                ${cell.markers.length > 3 ? `<span class="tag-small">+${cell.markers.length - 3} more</span>` : ''}
                            </div>
                        ` : ''}
                        <p class="cell-summary">${cell.function.substring(0, 80)}...</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add click handlers
    detailPanel.querySelectorAll('.cell-card').forEach(card => {
        card.addEventListener('click', () => {
            const cellId = card.dataset.cellId;
            const cell = dataLoader.getCellById(cellId);
            if (cell) showCellDetail(cell);
        });
    });
}

function setupInfoModal() {
    const modal = document.getElementById('info-modal');
    const closeBtn = document.getElementById('info-modal-close');
    const startBtn = document.getElementById('info-modal-start');

    if (closeBtn) {
        closeBtn.addEventListener('click', hideInfoModal);
    }

    if (startBtn) {
        startBtn.addEventListener('click', hideInfoModal);
    }

    // Close on outside click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideInfoModal();
        }
    });
}

function showInfoModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideInfoModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

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

// Initialize on load
init();

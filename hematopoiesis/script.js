// Hematopoiesis Explorer - Main Script

import dataLoader from './data-loader.js';

// Application state
const state = {
    searchQuery: '',
    selectedEntity: null,
    selectedType: null // 'system', 'lineage-group', 'cell'
};

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

    const tree = dataLoader.getLineageTree();
    treeContainer.innerHTML = '';

    tree.forEach(system => {
        const systemEl = createSystemElement(system);
        treeContainer.appendChild(systemEl);
    });
}

function createSystemElement(system) {
    const systemDiv = document.createElement('div');
    systemDiv.className = 'tree-system';
    systemDiv.dataset.id = system.id;

    const systemHeader = document.createElement('div');
    systemHeader.className = 'tree-system-header';
    systemHeader.innerHTML = `
        <span class="tree-icon">▼</span>
        <span class="tree-label">${system.name}</span>
    `;

    systemDiv.appendChild(systemHeader);

    // Create lineage groups container
    const lineageGroupsContainer = document.createElement('div');
    lineageGroupsContainer.className = 'tree-lineage-groups';

    (system.lineageGroups || []).forEach(lineageGroup => {
        const lineageGroupEl = createLineageGroupElement(lineageGroup);
        lineageGroupsContainer.appendChild(lineageGroupEl);
    });

    systemDiv.appendChild(lineageGroupsContainer);

    // Toggle system
    systemHeader.addEventListener('click', () => {
        systemDiv.classList.toggle('collapsed');
        const icon = systemHeader.querySelector('.tree-icon');
        icon.textContent = systemDiv.classList.contains('collapsed') ? '▶' : '▼';
    });

    return systemDiv;
}

function createLineageGroupElement(lineageGroup) {
    const lineageDiv = document.createElement('div');
    lineageDiv.className = 'tree-lineage-group';
    lineageDiv.dataset.id = lineageGroup.id;

    const lineageHeader = document.createElement('div');
    lineageHeader.className = 'tree-lineage-header';
    lineageHeader.innerHTML = `
        <span class="tree-icon">▼</span>
        <span class="tree-label">${lineageGroup.name}</span>
        <span class="tree-count">${lineageGroup.cells.length}</span>
    `;

    lineageDiv.appendChild(lineageHeader);

    // Create cells container
    const cellsContainer = document.createElement('div');
    cellsContainer.className = 'tree-cells';

    (lineageGroup.cells || []).forEach(cell => {
        const cellEl = createCellElement(cell);
        cellsContainer.appendChild(cellEl);
    });

    lineageDiv.appendChild(cellsContainer);

    // Toggle lineage group
    lineageHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        lineageDiv.classList.toggle('collapsed');
        const icon = lineageHeader.querySelector('.tree-icon');
        icon.textContent = lineageDiv.classList.contains('collapsed') ? '▶' : '▼';
    });

    // Click lineage group label to show info
    lineageHeader.querySelector('.tree-label').addEventListener('click', (e) => {
        e.stopPropagation();
        showLineageGroupDetail(lineageGroup);
    });

    return lineageDiv;
}

function createCellElement(cell) {
    const cellDiv = document.createElement('div');
    cellDiv.className = 'tree-cell';
    cellDiv.dataset.id = cell.id;
    cellDiv.innerHTML = `<span class="tree-label">${cell.name}</span>`;

    cellDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        showCellDetail(cell);

        // Highlight selected
        document.querySelectorAll('.tree-cell').forEach(el => el.classList.remove('selected'));
        cellDiv.classList.add('selected');
    });

    return cellDiv;
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

/**
 * Hematopoiesis Data Loader
 * Loads and indexes cell and lineage data
 */

import allCells from './data/cells/all-cells.js';
import allLineages from './data/lineages/hematopoietic-lineages.js';

class HematopoiesisDataLoader {
    constructor() {
        this.cells = [];
        this.lineages = [];
        this.cellsById = new Map();
        this.lineagesById = new Map();
        this.cellsByLineage = new Map();
        this.isLoaded = false;
    }

    async load() {
        try {
            console.log('Loading hematopoiesis data...');

            // Load cells
            this.cells = allCells;
            console.log(`✓ Loaded ${this.cells.length} cells`);

            // Load lineages
            this.lineages = allLineages;
            console.log(`✓ Loaded ${this.lineages.length} lineages`);

            // Build indexes
            this.buildIndexes();

            this.isLoaded = true;
            console.log('✓ Hematopoiesis data loaded successfully');
            return true;
        } catch (error) {
            console.error('Error loading hematopoiesis data:', error);
            return false;
        }
    }

    buildIndexes() {
        // Index cells by ID
        this.cells.forEach(cell => {
            this.cellsById.set(cell.id, cell);
        });

        // Index lineages by ID
        this.lineages.forEach(lineage => {
            this.lineagesById.set(lineage.id, lineage);
        });

        // Index cells by lineage
        this.cells.forEach(cell => {
            if (!this.cellsByLineage.has(cell.lineage)) {
                this.cellsByLineage.set(cell.lineage, []);
            }
            this.cellsByLineage.get(cell.lineage).push(cell);
        });

        console.log('✓ Indexes built');
    }

    // Getters
    getCellById(id) {
        return this.cellsById.get(id);
    }

    getLineageById(id) {
        return this.lineagesById.get(id);
    }

    getCellsByLineage(lineageId) {
        return this.cellsByLineage.get(lineageId) || [];
    }

    getAllCells() {
        return this.cells;
    }

    getAllLineages() {
        return this.lineages;
    }

    // Search functionality
    searchCells(query) {
        const lowerQuery = query.toLowerCase();
        return this.cells.filter(cell => {
            return (
                cell.name.toLowerCase().includes(lowerQuery) ||
                cell.lineage.toLowerCase().includes(lowerQuery) ||
                (cell.markers && cell.markers.some(m => m.toLowerCase().includes(lowerQuery))) ||
                (cell.function && cell.function.toLowerCase().includes(lowerQuery))
            );
        });
    }

    // Get lineage tree for navigation
    getLineageTree() {
        const systems = this.lineages.filter(l => l.pageType === 'system');

        return systems.map(system => {
            return {
                ...system,
                lineageGroups: (system.lineageGroupIds || []).map(lgId => {
                    const lineageGroup = this.getLineageById(lgId);
                    return {
                        ...lineageGroup,
                        cells: (lineageGroup.cellIds || []).map(cellId => this.getCellById(cellId))
                    };
                })
            };
        });
    }

    // Stats
    getStats() {
        return {
            cells: this.cells.length,
            lineages: this.lineages.length,
            lineageGroups: this.lineages.filter(l => l.pageType === 'lineage-group').length,
            systems: this.lineages.filter(l => l.pageType === 'system').length
        };
    }
}

// Export singleton instance
const dataLoader = new HematopoiesisDataLoader();
export default dataLoader;

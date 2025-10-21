/**
 * INLINE LINKER
 *
 * Automatically detects medication and condition names in text and converts
 * them to interactive links with hover tooltips.
 *
 * Usage:
 * - On condition pages: Links medication names → medication explorer
 * - On medication pages: Links condition names → condition explorer
 */

class InlineLinker {
    constructor() {
        // Will be populated with data loaders
        this.medicationDataLoader = null;
        this.conditionDataLoader = null;

        // Search indexes
        this.drugNameIndex = new Map();
        this.conditionNameIndex = new Map();

        // Regex patterns for matching
        this.drugPattern = null;
        this.conditionPattern = null;

        this.initialized = false;
    }

    /**
     * Initialize with data loaders
     * @param {Object} medicationDataLoader - Medication data loader instance
     * @param {Object} conditionDataLoader - Condition data loader instance
     */
    init(medicationDataLoader, conditionDataLoader) {
        this.medicationDataLoader = medicationDataLoader;
        this.conditionDataLoader = conditionDataLoader;
        this.buildIndexes();
    }

    /**
     * Build searchable indexes of all drug and condition names
     */
    buildIndexes() {
        if (this.initialized) return;

        console.log('Building inline linker indexes...');

        // Index all drug names
        if (this.medicationDataLoader && this.medicationDataLoader.drugs) {
            this.medicationDataLoader.drugs.forEach(drug => {
                // Lowercase for case-insensitive matching
                const key = drug.name.toLowerCase();
                this.drugNameIndex.set(key, drug);
            });
            console.log(`✓ Indexed ${this.drugNameIndex.size} drug names`);
        }

        // Index all condition names
        if (this.conditionDataLoader && this.conditionDataLoader.diseases) {
            this.conditionDataLoader.diseases.forEach(disease => {
                const key = disease.name.toLowerCase();
                this.conditionNameIndex.set(key, disease);
            });
            console.log(`✓ Indexed ${this.conditionNameIndex.size} condition names`);
        }

        // Build regex patterns
        this.buildMatchingPatterns();

        this.initialized = true;
    }

    /**
     * Build regex patterns for all drug and condition names
     */
    buildMatchingPatterns() {
        // Get all drug names, sorted by length (longest first for greedy matching)
        const drugNames = Array.from(this.drugNameIndex.keys())
            .sort((a, b) => b.length - a.length);

        if (drugNames.length > 0) {
            // Escape special regex characters
            const escapedDrugNames = drugNames.map(name =>
                name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );

            // Create pattern: \b(aspirin|lisinopril|metoprolol)\b
            // Word boundaries ensure we don't match partial words
            this.drugPattern = new RegExp(
                `\\b(${escapedDrugNames.join('|')})\\b`,
                'gi'
            );
        }

        // Same for conditions
        const conditionNames = Array.from(this.conditionNameIndex.keys())
            .sort((a, b) => b.length - a.length);

        if (conditionNames.length > 0) {
            const escapedConditionNames = conditionNames.map(name =>
                name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );

            this.conditionPattern = new RegExp(
                `\\b(${escapedConditionNames.join('|')})\\b`,
                'gi'
            );
        }
    }

    /**
     * Process text and add inline links to medications
     * Used on CONDITION pages to link to medications
     *
     * @param {string} text - Text to process
     * @param {Object} options - Options (exclude, maxLinks)
     * @returns {string} Processed HTML with inline links
     */
    linkMedicationsInText(text, options = {}) {
        if (!text || !this.drugPattern) return text;

        const excludeIds = new Set(options.exclude || []);
        const maxLinksPerText = options.maxLinks || 10;
        let linkCount = 0;
        const linkedDrugs = new Set(); // Track already linked drugs

        return text.replace(this.drugPattern, (match, drugName) => {
            // Limit links to avoid overwhelming UI
            if (linkCount >= maxLinksPerText) {
                return match;
            }

            const drug = this.drugNameIndex.get(drugName.toLowerCase());

            // Skip if not found or excluded
            if (!drug || excludeIds.has(drug.id)) {
                return match;
            }

            // Only link first occurrence of each drug
            if (linkedDrugs.has(drug.id)) {
                return match;
            }

            linkedDrugs.add(drug.id);
            linkCount++;
            return this.createDrugLink(drug, match);
        });
    }

    /**
     * Process text and add inline links to conditions
     * Used on MEDICATION pages to link to conditions
     *
     * @param {string} text - Text to process
     * @param {Object} options - Options (exclude, maxLinks)
     * @returns {string} Processed HTML with inline links
     */
    linkConditionsInText(text, options = {}) {
        if (!text || !this.conditionPattern) return text;

        const excludeIds = new Set(options.exclude || []);
        const maxLinksPerText = options.maxLinks || 10;
        let linkCount = 0;
        const linkedConditions = new Set();

        return text.replace(this.conditionPattern, (match, conditionName) => {
            if (linkCount >= maxLinksPerText) {
                return match;
            }

            const condition = this.conditionNameIndex.get(conditionName.toLowerCase());

            if (!condition || excludeIds.has(condition.id)) {
                return match;
            }

            // Only link first occurrence
            if (linkedConditions.has(condition.id)) {
                return match;
            }

            linkedConditions.add(condition.id);
            linkCount++;
            return this.createConditionLink(condition, match);
        });
    }

    /**
     * Create HTML for drug link with tooltip data
     * @param {Object} drug - Drug object
     * @param {string} displayText - Text to display
     * @returns {string} HTML string
     */
    createDrugLink(drug, displayText) {
        const basePath = this.getBasePath();
        const tooltipData = this.generateDrugTooltipData(drug);

        // Create data attribute with escaped JSON
        const tooltipDataStr = JSON.stringify(tooltipData).replace(/'/g, '&apos;');

        return `<span class="inline-link drug-link"
                      data-drug-id="${drug.id}"
                      data-tooltip='${tooltipDataStr}'
                      data-href="${basePath}medications/index-v2.html?drug=${drug.id}">${displayText}</span>`;
    }

    /**
     * Create HTML for condition link with tooltip data
     * @param {Object} condition - Condition object
     * @param {string} displayText - Text to display
     * @returns {string} HTML string
     */
    createConditionLink(condition, displayText) {
        const basePath = this.getBasePath();
        const tooltipData = this.generateConditionTooltipData(condition);

        const tooltipDataStr = JSON.stringify(tooltipData).replace(/'/g, '&apos;');

        return `<span class="inline-link condition-link"
                      data-condition-id="${condition.id}"
                      data-tooltip='${tooltipDataStr}'
                      data-href="${basePath}conditions/index.html?disease=${condition.id}">${displayText}</span>`;
    }

    /**
     * Generate tooltip data for drug
     * @param {Object} drug - Drug object
     * @returns {Object} Tooltip data
     */
    generateDrugTooltipData(drug) {
        return {
            name: drug.name,
            class: drug.pharmacologicClass || drug.therapeuticClass || 'Unknown',
            mechanism: this.truncate(drug.mechanism || '', 150),
            indications: (drug.indications || []).slice(0, 3),
            sideEffects: (drug.sideEffects || []).slice(0, 3),
            clinicalChoice: this.truncate(drug.clinicalChoice || '', 100)
        };
    }

    /**
     * Generate tooltip data for condition
     * @param {Object} condition - Condition object
     * @returns {Object} Tooltip data
     */
    generateConditionTooltipData(condition) {
        const detail = condition.detail || {};
        return {
            name: condition.name,
            definition: this.truncate(detail.definition || '', 150),
            presentation: this.truncate(detail.presentation || '', 150),
            severity: condition.severity,
            acuity: condition.acuity
        };
    }

    /**
     * Truncate text to max length
     * @param {string} text - Text to truncate
     * @param {number} maxLength - Maximum length
     * @returns {string} Truncated text
     */
    truncate(text, maxLength) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }

    /**
     * Get base path for navigation (GitHub Pages vs local)
     * @returns {string} Base path
     */
    getBasePath() {
        const hostname = window.location.hostname;
        const path = window.location.pathname;

        if (hostname.includes('github.io')) {
            return '/step1/';
        }

        // Local development
        if (path.includes('/conditions/') || path.includes('/medications/')) {
            return '../';
        }

        return './';
    }

    /**
     * Get statistics about indexed entities
     * @returns {Object} Stats
     */
    getStats() {
        return {
            drugsIndexed: this.drugNameIndex.size,
            conditionsIndexed: this.conditionNameIndex.size,
            initialized: this.initialized
        };
    }
}

// Export singleton instance
export default new InlineLinker();

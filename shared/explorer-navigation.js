/**
 * STEP 1 EXPLORERS - NAVIGATION CONTROLLER
 *
 * Manages navigation between Conditions, Medications, Hematopoiesis, and Bugs explorers.
 * Handles explorer switching, context preservation, and URL management.
 *
 * Last Updated: October 30, 2025
 * Phase: 3 - Shared Design System
 */

class ExplorerNavigation {
    constructor(currentExplorer, options = {}) {
        this.current = currentExplorer; // 'conditions' | 'medications' | 'hematopoiesis' | 'bugs'

        // Base URLs for each explorer (relative paths work for both local and GitHub Pages)
        this.baseUrls = options.baseUrls || {
            conditions: this.getBasePath() + 'conditions/index.html',
            medications: this.getBasePath() + 'medications/index-v2.html',
            hematopoiesis: this.getBasePath() + 'hematopoiesis/index.html',
            bugs: '#' // Future - not implemented yet
        };

        // Configuration
        this.enableContextPreservation = options.enableContextPreservation ?? true;
        this.enableBreadcrumbs = options.enableBreadcrumbs ?? true;

        // State
        this.context = this.parseContext();

        // Initialize
        this.init();
    }

    /**
     * Get base path for navigation (works for both local and GitHub Pages)
     * @returns {string} Base path with trailing slash
     */
    getBasePath() {
        // Get current path
        const path = window.location.pathname;
        const hostname = window.location.hostname;

        // If we're on GitHub Pages
        if (hostname.includes('github.io')) {
            // If we're in a subdirectory (conditions/ or medications/ or hematopoiesis/), go up one level
            if (path.includes('/conditions/') || path.includes('/medications/') || path.includes('/hematopoiesis/')) {
                return '/step1/';
            }
            // If we're at the step1 root
            return '/step1/';
        }

        // Local development
        // If we're in a subdirectory (conditions/ or medications/ or hematopoiesis/), go up one level
        if (path.includes('/conditions/') || path.includes('/medications/') || path.includes('/hematopoiesis/')) {
            return '../';
        }

        // If we're at root
        return './';
    }

    /**
     * Initialize the navigation system
     */
    init() {
        this.updateActiveButton();
        this.attachListeners();

        if (this.context.from) {
            this.showContextBanner();
        }

        console.log(`✓ Explorer navigation initialized: ${this.current}`);
    }

    /**
     * Update active toggle button
     */
    updateActiveButton() {
        const buttons = document.querySelectorAll('.toggle-btn');
        buttons.forEach(btn => {
            const explorer = btn.dataset.explorer;
            btn.classList.toggle('active', explorer === this.current);
        });
    }

    /**
     * Attach event listeners to toggle buttons
     */
    attachListeners() {
        const buttons = document.querySelectorAll('.toggle-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const explorer = e.currentTarget.dataset.explorer;

                // Don't navigate if clicking current explorer or disabled
                if (explorer === this.current || e.currentTarget.classList.contains('disabled')) {
                    return;
                }

                this.navigate(explorer);
            });
        });
    }

    /**
     * Navigate to another explorer
     * @param {string} explorer - Target explorer ('conditions', 'medications', 'bugs')
     * @param {object} context - Optional context to pass (entity ID, etc.)
     */
    navigate(explorer, context = {}) {
        if (!this.baseUrls[explorer]) {
            console.error(`Unknown explorer: ${explorer}`);
            return;
        }

        let url = this.baseUrls[explorer];

        // Add context parameters if enabled
        if (this.enableContextPreservation && Object.keys(context).length > 0) {
            const params = new URLSearchParams({
                from: this.current,
                ...context
            });
            url += (url.includes('?') ? '&' : '?') + params.toString();
        }

        // Navigate
        window.location.href = url;
    }

    /**
     * Parse context from URL parameters
     * @returns {object} Context object with from, entity, etc.
     */
    parseContext() {
        const params = new URLSearchParams(window.location.search);
        return {
            from: params.get('from'),
            entity: params.get('entity'),
            context: params.get('context'),
            highlight: params.get('highlight')
        };
    }

    /**
     * Show context banner when navigating from another explorer
     */
    showContextBanner() {
        const { from, context } = this.context;

        if (!from) return;

        // Create banner element
        const banner = document.createElement('div');
        banner.className = 'context-banner';
        banner.innerHTML = `
            <div class="context-message">
                <span>Navigated from <strong>${this.formatExplorerName(from)}</strong></span>
                ${context ? `<span>→ ${context}</span>` : ''}
            </div>
            <a href="${this.baseUrls[from]}" class="back-link">
                Back to ${this.formatExplorerName(from)}
            </a>
        `;

        // Insert after header
        const header = document.querySelector('.unified-header, header');
        if (header) {
            header.after(banner);
        }
    }

    /**
     * Format explorer name for display
     * @param {string} explorer - Explorer key
     * @returns {string} Formatted name
     */
    formatExplorerName(explorer) {
        const names = {
            conditions: 'Conditions Explorer',
            medications: 'Medications Explorer',
            hematopoiesis: 'Hematopoiesis Explorer',
            bugs: 'Bugs Explorer'
        };
        return names[explorer] || explorer;
    }

    /**
     * Get current context (for passing to other explorers)
     * @returns {object} Current context
     */
    getContext() {
        return this.context;
    }

    /**
     * Navigate to specific entity in another explorer
     * @param {string} explorer - Target explorer
     * @param {string} entityType - Type of entity (drug, disease, etc.)
     * @param {string} entityId - Entity ID
     */
    navigateToEntity(explorer, entityType, entityId) {
        this.navigate(explorer, {
            entity: entityId,
            type: entityType,
            context: this.getCurrentEntityName()
        });
    }

    /**
     * Get current entity name for context
     * @returns {string} Current entity name
     */
    getCurrentEntityName() {
        // This should be overridden by each explorer
        // to return the current viewed entity name
        return '';
    }
}

// Export for ES6 modules
export default ExplorerNavigation;

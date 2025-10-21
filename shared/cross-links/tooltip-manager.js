/**
 * TOOLTIP MANAGER
 *
 * Handles interactive behavior for inline link tooltips:
 * - Show/hide on hover with delay
 * - Position adjustment to prevent off-screen tooltips
 * - Click to open in new tab
 */

class TooltipManager {
    constructor() {
        this.activeTooltip = null;
        this.hoverTimeout = null;
        this.hideTimeout = null;
        this.SHOW_DELAY = 300; // ms delay before showing tooltip
        this.HIDE_DELAY = 100; // ms delay before hiding tooltip
    }

    /**
     * Initialize tooltip handlers for all inline links
     */
    init() {
        console.log('Initializing tooltip manager...');

        // Use event delegation for better performance
        document.addEventListener('mouseover', (e) => {
            const link = e.target.closest('.inline-link');
            if (link && !link.hasAttribute('data-tooltip-attached')) {
                this.attachTooltip(link);
                link.setAttribute('data-tooltip-attached', 'true');
            }

            if (link) {
                this.scheduleShowTooltip(link);
            }
        });

        document.addEventListener('mouseout', (e) => {
            const link = e.target.closest('.inline-link');
            if (link) {
                this.scheduleHideTooltip();
            }
        });

        document.addEventListener('click', (e) => {
            const link = e.target.closest('.inline-link');
            if (link) {
                this.handleClick(link, e);
            }
        });

        console.log('✓ Tooltip manager initialized');
    }

    /**
     * Attach tooltip element to a link
     * @param {HTMLElement} linkElement - The inline link element
     */
    attachTooltip(linkElement) {
        // Parse tooltip data from data attribute
        const tooltipDataStr = linkElement.dataset.tooltip;
        if (!tooltipDataStr) return;

        try {
            const tooltipData = JSON.parse(tooltipDataStr);
            const isDrug = linkElement.classList.contains('drug-link');

            // Create tooltip element
            const tooltip = this.createTooltipElement(tooltipData, linkElement.dataset.href, isDrug);
            linkElement.appendChild(tooltip);
        } catch (error) {
            console.error('Failed to create tooltip:', error);
        }
    }

    /**
     * Schedule showing tooltip after delay
     * @param {HTMLElement} linkElement - The link to show tooltip for
     */
    scheduleShowTooltip(linkElement) {
        // Clear any pending hide
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }

        // Clear any pending show
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
        }

        // Schedule show
        this.hoverTimeout = setTimeout(() => {
            this.showTooltip(linkElement);
        }, this.SHOW_DELAY);
    }

    /**
     * Schedule hiding tooltip after delay
     */
    scheduleHideTooltip() {
        // Clear any pending show
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = null;
        }

        // Schedule hide
        this.hideTimeout = setTimeout(() => {
            this.hideTooltip();
        }, this.HIDE_DELAY);
    }

    /**
     * Show tooltip
     * @param {HTMLElement} linkElement - The link element
     */
    showTooltip(linkElement) {
        const tooltip = linkElement.querySelector('.inline-tooltip');
        if (!tooltip) return;

        // Hide any existing tooltip
        this.hideTooltip();

        // Show new tooltip
        this.activeTooltip = tooltip;

        // Adjust position if needed
        this.adjustTooltipPosition(tooltip, linkElement);
    }

    /**
     * Hide active tooltip
     */
    hideTooltip() {
        if (this.activeTooltip) {
            // Remove positioning classes
            this.activeTooltip.classList.remove('tooltip-left', 'tooltip-right');
            this.activeTooltip = null;
        }
    }

    /**
     * Create tooltip DOM element
     * @param {Object} data - Tooltip data
     * @param {string} href - Link URL
     * @param {boolean} isDrug - Whether this is a drug link
     * @returns {HTMLElement} Tooltip element
     */
    createTooltipElement(data, href, isDrug) {
        const tooltip = document.createElement('div');
        tooltip.className = 'inline-tooltip';

        if (isDrug) {
            tooltip.innerHTML = this.createDrugTooltipHTML(data, href);
        } else {
            tooltip.innerHTML = this.createConditionTooltipHTML(data, href);
        }

        return tooltip;
    }

    /**
     * Create HTML for drug tooltip
     * @param {Object} data - Drug data
     * @param {string} href - Link URL
     * @returns {string} HTML string
     */
    createDrugTooltipHTML(data, href) {
        return `
            <h5>${data.name}</h5>
            ${data.class ? `<span class="class-badge">${data.class}</span>` : ''}

            ${data.mechanism ? `
                <p class="mechanism">${data.mechanism}</p>
            ` : ''}

            ${data.indications && data.indications.length > 0 ? `
                <div class="indications">
                    <h6>Indications</h6>
                    <ul>
                        ${data.indications.map(ind => `<li>${ind}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.sideEffects && data.sideEffects.length > 0 ? `
                <div class="side-effects">
                    <h6>Key Side Effects</h6>
                    <ul>
                        ${data.sideEffects.map(se => `<li>${se}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.clinicalChoice ? `
                <p class="clinical-choice">
                    <strong>Use:</strong> ${data.clinicalChoice}
                </p>
            ` : ''}

            <a href="${href}" target="_blank" class="view-full" onclick="event.stopPropagation()">
                View Full Details →
            </a>
        `;
    }

    /**
     * Create HTML for condition tooltip
     * @param {Object} data - Condition data
     * @param {string} href - Link URL
     * @returns {string} HTML string
     */
    createConditionTooltipHTML(data, href) {
        return `
            <h5>${data.name}</h5>
            ${data.severity ? `<span class="severity-badge">${data.severity}</span>` : ''}
            ${data.acuity ? `<span class="acuity-badge">${data.acuity}</span>` : ''}

            ${data.definition ? `
                <p class="definition">${data.definition}</p>
            ` : ''}

            ${data.presentation ? `
                <div style="margin: 0.75rem 0;">
                    <h6 style="font-size: 0.75rem; text-transform: uppercase; color: #9ca3af; margin: 0 0 0.25rem 0;">Presentation</h6>
                    <p class="presentation">${data.presentation}</p>
                </div>
            ` : ''}

            <a href="${href}" target="_blank" class="view-full" onclick="event.stopPropagation()">
                View Full Details →
            </a>
        `;
    }

    /**
     * Adjust tooltip position to prevent it from going off-screen
     * @param {HTMLElement} tooltip - Tooltip element
     * @param {HTMLElement} linkElement - Link element
     */
    adjustTooltipPosition(tooltip, linkElement) {
        // Wait for next frame to get accurate measurements
        requestAnimationFrame(() => {
            const rect = tooltip.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // Check if tooltip goes off right edge
            if (rect.right > viewportWidth - 20) {
                tooltip.classList.add('tooltip-left');
                tooltip.classList.remove('tooltip-right');
            }
            // Check if tooltip goes off left edge
            else if (rect.left < 20) {
                tooltip.classList.add('tooltip-right');
                tooltip.classList.remove('tooltip-left');
            }
        });
    }

    /**
     * Handle click on link - open in new tab
     * @param {HTMLElement} linkElement - Link element
     * @param {Event} event - Click event
     */
    handleClick(linkElement, event) {
        // Don't prevent default if clicking "View Full Details" button
        if (event.target.classList.contains('view-full')) {
            return;
        }

        event.preventDefault();
        const href = linkElement.dataset.href;

        if (href) {
            window.open(href, '_blank');
        }
    }

    /**
     * Destroy tooltip manager (cleanup)
     */
    destroy() {
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        this.hideTooltip();
    }
}

// Export singleton instance
export default new TooltipManager();

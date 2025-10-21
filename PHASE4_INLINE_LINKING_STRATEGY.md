# Phase 4: Inline Text Linking with Hover Tooltips

## Overview

Enable **inline text linking** where medication/condition names in detail text become interactive elements with hover tooltips and click-to-navigate functionality.

---

## 🎯 User Experience

### On Conditions Page (e.g., STEMI):

**Before (Plain Text):**
```
Acute management: Aspirin 325mg chewed, Clopidogrel loading dose,
Lisinopril within 24h if anterior MI or EF <40%
```

**After (Interactive Text):**
```
Acute management: [Aspirin] 325mg chewed, [Clopidogrel] loading dose,
[Lisinopril] within 24h if anterior MI or EF <40%
                   ↑
        ┌──────────┴────────────────────────┐
        │ Lisinopril                        │
        │ ───────────────────────────────── │
        │ ACE Inhibitor                     │
        │ Inhibits ACE → ↓ Angiotensin II   │
        │ → vasodilation                    │
        │                                   │
        │ Indications:                      │
        │ • Hypertension                    │
        │ • Heart Failure                   │
        │ • Diabetic Nephropathy            │
        │                                   │
        │ Side Effects:                     │
        │ • Dry cough                       │
        │ • Angioedema                      │
        │                                   │
        │ [View Full Details →]             │
        └───────────────────────────────────┘
```

**Click**: Opens Medications Explorer with Lisinopril card in **new tab**

---

## 🏗️ Architecture

### Two-Layer Approach:

1. **Automatic Detection** - Scan text for drug/condition names, auto-link them
2. **Manual Markup** - Allow explicit linking in data files for precision

---

## Strategy 1: Automatic Inline Linking (Recommended)

### How It Works:

1. **Parse detail text** when displaying disease/drug
2. **Match against entity database** (all drug names, condition names)
3. **Convert matches to interactive spans** with tooltip data
4. **Attach event handlers** for hover/click

### Implementation:

**File**: `shared/cross-links/inline-linker.js`

```javascript
class InlineLinker {
    constructor(medicationDataLoader, conditionDataLoader) {
        this.medicationDataLoader = medicationDataLoader;
        this.conditionDataLoader = conditionDataLoader;

        // Build search indexes
        this.drugNameIndex = new Map(); // "aspirin" → drug object
        this.conditionNameIndex = new Map(); // "stemi" → condition object

        // Build regex patterns for matching
        this.drugPattern = null;
        this.conditionPattern = null;
    }

    /**
     * Build searchable indexes of all drug and condition names
     */
    buildIndexes() {
        // Index all drug names (including generic and brand names)
        this.medicationDataLoader.drugs.forEach(drug => {
            // Lowercase for case-insensitive matching
            const key = drug.name.toLowerCase();
            this.drugNameIndex.set(key, drug);

            // Also index common abbreviations/variants
            if (drug.abbreviations) {
                drug.abbreviations.forEach(abbr => {
                    this.drugNameIndex.set(abbr.toLowerCase(), drug);
                });
            }
        });

        // Index all condition names
        this.conditionDataLoader.diseases.forEach(disease => {
            const key = disease.name.toLowerCase();
            this.conditionNameIndex.set(key, disease);

            // Index abbreviations
            if (disease.abbreviations) {
                disease.abbreviations.forEach(abbr => {
                    this.conditionNameIndex.set(abbr.toLowerCase(), disease);
                });
            }
        });

        // Build regex patterns for efficient matching
        this.buildMatchingPatterns();
    }

    /**
     * Build regex patterns for all drug and condition names
     */
    buildMatchingPatterns() {
        // Get all drug names, sorted by length (longest first for greedy matching)
        const drugNames = Array.from(this.drugNameIndex.keys())
            .sort((a, b) => b.length - a.length);

        // Escape special regex characters
        const escapedDrugNames = drugNames.map(name =>
            name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );

        // Create pattern: \b(aspirin|lisinopril|metoprolol)\b
        this.drugPattern = new RegExp(
            `\\b(${escapedDrugNames.join('|')})\\b`,
            'gi'
        );

        // Same for conditions
        const conditionNames = Array.from(this.conditionNameIndex.keys())
            .sort((a, b) => b.length - a.length);

        const escapedConditionNames = conditionNames.map(name =>
            name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );

        this.conditionPattern = new RegExp(
            `\\b(${escapedConditionNames.join('|')})\\b`,
            'gi'
        );
    }

    /**
     * Process text and add inline links to medications
     * Used on CONDITION pages to link to medications
     */
    linkMedicationsInText(text, options = {}) {
        if (!text || !this.drugPattern) return text;

        const excludeIds = new Set(options.exclude || []);
        const maxLinksPerParagraph = options.maxLinks || 5;
        let linkCount = 0;

        return text.replace(this.drugPattern, (match, drugName) => {
            // Limit links per paragraph to avoid overwhelming UI
            if (linkCount >= maxLinksPerParagraph) {
                return match;
            }

            const drug = this.drugNameIndex.get(drugName.toLowerCase());

            // Skip if not found or excluded
            if (!drug || excludeIds.has(drug.id)) {
                return match;
            }

            linkCount++;
            return this.createDrugLink(drug, match);
        });
    }

    /**
     * Process text and add inline links to conditions
     * Used on MEDICATION pages to link to conditions
     */
    linkConditionsInText(text, options = {}) {
        if (!text || !this.conditionPattern) return text;

        const excludeIds = new Set(options.exclude || []);
        const maxLinksPerParagraph = options.maxLinks || 5;
        let linkCount = 0;

        return text.replace(this.conditionPattern, (match, conditionName) => {
            if (linkCount >= maxLinksPerParagraph) {
                return match;
            }

            const condition = this.conditionNameIndex.get(conditionName.toLowerCase());

            if (!condition || excludeIds.has(condition.id)) {
                return match;
            }

            linkCount++;
            return this.createConditionLink(condition, match);
        });
    }

    /**
     * Create HTML for drug link with tooltip data
     */
    createDrugLink(drug, displayText) {
        const basePath = this.getBasePath();
        const tooltipData = this.generateDrugTooltipData(drug);

        return `<span class="inline-link drug-link"
                      data-drug-id="${drug.id}"
                      data-tooltip='${JSON.stringify(tooltipData)}'
                      data-href="${basePath}medications/index-v2.html?drug=${drug.id}">
                    ${displayText}
                </span>`;
    }

    /**
     * Create HTML for condition link with tooltip data
     */
    createConditionLink(condition, displayText) {
        const basePath = this.getBasePath();
        const tooltipData = this.generateConditionTooltipData(condition);

        return `<span class="inline-link condition-link"
                      data-condition-id="${condition.id}"
                      data-tooltip='${JSON.stringify(tooltipData)}'
                      data-href="${basePath}conditions/index.html?disease=${condition.id}">
                    ${displayText}
                </span>`;
    }

    /**
     * Generate tooltip data for drug
     */
    generateDrugTooltipData(drug) {
        return {
            name: drug.name,
            class: drug.pharmacologicClass,
            mechanism: drug.mechanism,
            indications: drug.indications.slice(0, 3),
            sideEffects: drug.sideEffects.slice(0, 3),
            clinicalChoice: drug.clinicalChoice
        };
    }

    /**
     * Generate tooltip data for condition
     */
    generateConditionTooltipData(condition) {
        return {
            name: condition.name,
            definition: condition.detail.definition,
            presentation: this.truncate(condition.detail.presentation, 150),
            severity: condition.severity,
            acuity: condition.acuity
        };
    }

    /**
     * Truncate text to max length
     */
    truncate(text, maxLength) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    getBasePath() {
        const hostname = window.location.hostname;
        if (hostname.includes('github.io')) {
            return '/step1/';
        }
        return '../';
    }
}

export default InlineLinker;
```

---

## UI Components

### CSS for Inline Links

**File**: `shared/cross-links/inline-links.css`

```css
/* Inline link styling */
.inline-link {
    color: var(--accent-color);
    font-weight: 500;
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
}

.inline-link:hover {
    color: var(--accent-dark);
    text-decoration-style: solid;
    text-decoration-thickness: 2px;
}

/* Different colors for different link types */
.inline-link.drug-link {
    color: #7c3aed; /* Purple for medications */
}

.inline-link.drug-link:hover {
    color: #6d28d9;
}

.inline-link.condition-link {
    color: #2563eb; /* Blue for conditions */
}

.inline-link.condition-link:hover {
    color: #1d4ed8;
}

/* Tooltip container */
.inline-tooltip {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: #1f2937;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    min-width: 320px;
    max-width: 400px;
    z-index: 10000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.inline-link:hover .inline-tooltip {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(-4px);
}

/* Tooltip arrow */
.inline-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: #1f2937;
}

/* Tooltip content */
.inline-tooltip h5 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
}

.inline-tooltip .class-badge {
    display: inline-block;
    padding: 2px 8px;
    background: rgba(124, 58, 237, 0.3);
    color: #c4b5fd;
    border-radius: 4px;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
}

.inline-tooltip .mechanism {
    font-size: 0.875rem;
    color: #93c5fd;
    font-style: italic;
    margin: 0.5rem 0;
    line-height: 1.4;
}

.inline-tooltip .indications,
.inline-tooltip .side-effects {
    margin: 0.75rem 0;
}

.inline-tooltip .indications h6,
.inline-tooltip .side-effects h6 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #9ca3af;
    margin: 0 0 0.25rem 0;
}

.inline-tooltip ul {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.6;
}

.inline-tooltip ul li {
    color: #e5e7eb;
}

.inline-tooltip .view-full {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background 0.2s ease;
}

.inline-tooltip .view-full:hover {
    background: var(--accent-dark);
}

/* Prevent tooltip from going off-screen */
.inline-tooltip.tooltip-left {
    left: auto;
    right: 0;
    transform: translateX(0);
}

.inline-tooltip.tooltip-right {
    left: 0;
    right: auto;
    transform: translateX(0);
}
```

---

## JavaScript for Tooltip Behavior

**File**: `shared/cross-links/tooltip-manager.js`

```javascript
class TooltipManager {
    constructor() {
        this.activeTooltip = null;
        this.tooltipCache = new Map();
        this.hoverTimeout = null;
    }

    /**
     * Initialize tooltip handlers for all inline links
     */
    init() {
        document.addEventListener('mouseover', (e) => {
            const link = e.target.closest('.inline-link');
            if (link) {
                this.showTooltip(link);
            }
        });

        document.addEventListener('mouseout', (e) => {
            const link = e.target.closest('.inline-link');
            if (link) {
                this.hideTooltip(link);
            }
        });

        document.addEventListener('click', (e) => {
            const link = e.target.closest('.inline-link');
            if (link) {
                this.handleClick(link, e);
            }
        });
    }

    /**
     * Show tooltip for link
     */
    showTooltip(linkElement) {
        // Clear any pending hide
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
        }

        // Small delay before showing (prevents flicker)
        this.hoverTimeout = setTimeout(() => {
            const tooltipData = JSON.parse(linkElement.dataset.tooltip);
            const tooltip = this.createTooltipElement(tooltipData, linkElement);

            // Remove existing tooltip
            this.hideTooltip();

            // Add new tooltip
            linkElement.appendChild(tooltip);
            this.activeTooltip = tooltip;

            // Position adjustment if off-screen
            this.adjustTooltipPosition(tooltip, linkElement);
        }, 300);
    }

    /**
     * Hide active tooltip
     */
    hideTooltip() {
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
        }

        if (this.activeTooltip) {
            this.activeTooltip.remove();
            this.activeTooltip = null;
        }
    }

    /**
     * Create tooltip DOM element
     */
    createTooltipElement(data, linkElement) {
        const tooltip = document.createElement('div');
        tooltip.className = 'inline-tooltip';

        const isDrug = linkElement.classList.contains('drug-link');

        if (isDrug) {
            tooltip.innerHTML = this.createDrugTooltipHTML(data, linkElement.dataset.href);
        } else {
            tooltip.innerHTML = this.createConditionTooltipHTML(data, linkElement.dataset.href);
        }

        return tooltip;
    }

    /**
     * Create HTML for drug tooltip
     */
    createDrugTooltipHTML(data, href) {
        return `
            <h5>${data.name}</h5>
            <span class="class-badge">${data.class}</span>
            <p class="mechanism">${data.mechanism}</p>

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
                <p style="font-size: 0.875rem; color: #d1d5db; margin-top: 0.5rem;">
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
     */
    createConditionTooltipHTML(data, href) {
        return `
            <h5>${data.name}</h5>
            ${data.severity ? `<span class="class-badge">${data.severity} severity</span>` : ''}

            ${data.definition ? `
                <p style="font-size: 0.875rem; color: #e5e7eb; margin: 0.5rem 0;">
                    ${data.definition}
                </p>
            ` : ''}

            ${data.presentation ? `
                <div style="margin: 0.75rem 0;">
                    <h6 style="font-size: 0.75rem; text-transform: uppercase; color: #9ca3af; margin: 0 0 0.25rem 0;">Presentation</h6>
                    <p style="font-size: 0.875rem; color: #e5e7eb; line-height: 1.4;">
                        ${data.presentation}
                    </p>
                </div>
            ` : ''}

            <a href="${href}" target="_blank" class="view-full" onclick="event.stopPropagation()">
                View Full Details →
            </a>
        `;
    }

    /**
     * Adjust tooltip position if it goes off-screen
     */
    adjustTooltipPosition(tooltip, linkElement) {
        const rect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        // Check if tooltip goes off right edge
        if (rect.right > viewportWidth - 20) {
            tooltip.classList.add('tooltip-left');
        }

        // Check if tooltip goes off left edge
        if (rect.left < 20) {
            tooltip.classList.add('tooltip-right');
        }
    }

    /**
     * Handle click on link - open in new tab
     */
    handleClick(linkElement, event) {
        event.preventDefault();
        const href = linkElement.dataset.href;
        window.open(href, '_blank');
    }
}

export default new TooltipManager();
```

---

## Integration with Data Display

### Conditions Script (script.js)

```javascript
import InlineLinker from '../shared/cross-links/inline-linker.js';
import tooltipManager from '../shared/cross-links/tooltip-manager.js';

// After loading data
const inlineLinker = new InlineLinker(medicationDataLoader, conditionDataLoader);
inlineLinker.buildIndexes();

// Initialize tooltip system
tooltipManager.init();

// When displaying disease detail
function displayDiseaseDetail(disease) {
    const detail = disease.detail;

    // Process all text fields to add inline links
    const processedDetail = {
        ...detail,
        definition: inlineLinker.linkMedicationsInText(detail.definition),
        pathophysiology: inlineLinker.linkMedicationsInText(detail.pathophysiology),
        presentation: inlineLinker.linkMedicationsInText(detail.presentation),
        management: {
            acute: detail.management.acute.map(item =>
                inlineLinker.linkMedicationsInText(item)
            ),
            chronic: detail.management.chronic.map(item =>
                inlineLinker.linkMedicationsInText(item)
            )
        },
        // ... other fields
    };

    // Render with processed text
    renderDetailPanel(processedDetail);
}
```

### Medications Script (script-v3.js)

```javascript
import InlineLinker from '../shared/cross-links/inline-linker.js';
import tooltipManager from '../shared/cross-links/tooltip-manager.js';

// After loading data
const inlineLinker = new InlineLinker(medicationDataLoader, conditionDataLoader);
inlineLinker.buildIndexes();

// Initialize tooltip system
tooltipManager.init();

// When displaying drug detail
function displayDrugDetail(drug) {
    // Process text fields to add inline links to conditions
    const processedDrug = {
        ...drug,
        mechanism: inlineLinker.linkConditionsInText(drug.mechanism),
        clinicalChoice: inlineLinker.linkConditionsInText(drug.clinicalChoice),
        // Link indications to condition pages
        indications: drug.indications.map(ind =>
            inlineLinker.linkConditionsInText(ind)
        ),
        contraindications: drug.contraindications.map(contra =>
            inlineLinker.linkConditionsInText(contra)
        )
    };

    // Render with processed text
    renderDrugDetailPanel(processedDrug);
}
```

---

## Performance Considerations

### Optimization Strategies:

1. **Build indexes once** on page load
2. **Cache regex patterns** (don't rebuild every time)
3. **Limit links per paragraph** (maxLinks parameter)
4. **Lazy tooltip rendering** (only create when hovering)
5. **Debounce hover events** (300ms delay)
6. **Use event delegation** (one listener for all links)

### Memory Usage:

- **Drug index**: ~385 entries × 100 bytes = ~38KB
- **Condition index**: ~50 entries × 100 bytes = ~5KB
- **Regex patterns**: ~10KB
- **Total**: ~50-60KB (negligible)

---

## Advanced: Manual Markup (Optional)

For precise control, allow manual markup in data files:

```javascript
// In disease file
management: {
    acute: [
        "Give {{aspirin|aspirin}} 325mg chewed immediately",
        "Start {{clopidogrel|clopidogrel}} 600mg loading dose",
        "{{lisinopril|lisinopril}} within 24h if EF <40%"
    ]
}
```

Parser would convert `{{aspirin|aspirin}}` to linked text.

**Advantages:**
- Precise control over what gets linked
- Can link partial phrases
- Override auto-detection

**Disadvantages:**
- More manual work
- Need to edit data files

**Recommendation**: Start with auto-detection, add manual markup only where needed.

---

## Implementation Priority

### Phase 4A: Inline Linking (Week 1-2)
1. [ ] Build InlineLinker class
2. [ ] Create inline-links.css
3. [ ] Build TooltipManager
4. [ ] Integrate with conditions page
5. [ ] Integrate with medications page
6. [ ] Test and refine UX

### Phase 4B: Dedicated Link Sections (Week 3)
7. [ ] Add "Related Medications" section (as in original plan)
8. [ ] Add "Related Conditions" section
9. [ ] Combine both approaches for best UX

---

## Benefits of This Approach

✅ **Natural reading experience** - Links appear in context
✅ **Immediate preview** - Hover to learn without leaving page
✅ **Easy navigation** - Click to deep dive
✅ **Automatic** - No manual markup needed
✅ **Consistent** - All entity names automatically linked
✅ **Scalable** - Works with any number of drugs/conditions

---

## Example: STEMI Management Section

**Before:**
> Acute: Aspirin 325mg chewed, Clopidogrel 600mg loading, Lisinopril within 24h if EF <40%, high-dose Atorvastatin 80mg

**After (with inline links):**
> Acute: <span style="color: #7c3aed; text-decoration: underline dotted;">Aspirin</span> 325mg chewed, <span style="color: #7c3aed; text-decoration: underline dotted;">Clopidogrel</span> 600mg loading, <span style="color: #7c3aed; text-decoration: underline dotted;">Lisinopril</span> within 24h if EF <40%, high-dose <span style="color: #7c3aed; text-decoration: underline dotted;">Atorvastatin</span> 80mg

Each underlined word is hoverable with tooltip and clickable to open in new tab.

---

**This gives you the exact UX you described!** Want to start implementing this?

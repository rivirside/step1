# Phase 4: Cross-Platform Linking Architecture

## Overview

This document outlines the strategy for implementing bidirectional cross-references between Conditions and Medications explorers without requiring a complete rewrite of existing data files.

---

## 🎯 Goals

1. **Minimal Disruption**: Add cross-linking without rewriting all existing disease/drug files
2. **Scalable**: Easy to add links as we expand content
3. **Maintainable**: Single source of truth for relationships
4. **User-Friendly**: Clickable links with hover tooltips showing previews
5. **Bi-directional**: Conditions → Medications AND Medications → Conditions

---

## 🏗️ Architecture Strategy

### Option A: Separate Link Database (RECOMMENDED)

Create a **separate linking layer** that sits between the two explorers. This avoids modifying 385+ drug files and 50+ disease files.

**Structure:**
```
shared/
├── cross-links/
│   ├── link-database.js          # Central mapping of all relationships
│   ├── link-generator.js         # Auto-generates preview JSONs
│   └── link-resolver.js          # Resolves links at runtime
```

**Advantages:**
- ✅ No need to edit existing data files
- ✅ Single file to maintain relationships
- ✅ Easy to bulk-add links
- ✅ Can be generated/validated programmatically
- ✅ Separation of concerns

**How It Works:**
1. Define relationships in central database
2. Data loaders fetch links at runtime
3. UI renders links dynamically
4. Generate preview JSONs for tooltips

---

### Option B: Inline Links in Data Files

Add `relatedDrugs` and `relatedConditions` arrays directly to each entity.

**Disadvantages:**
- ❌ Need to edit 435+ files (385 drugs + 50 conditions)
- ❌ Duplication (condition references drug, drug references condition)
- ❌ Risk of inconsistencies
- ❌ Hard to maintain

**Not Recommended** for this project.

---

## 📋 Implementation Plan (Option A)

### Step 1: Create Link Database Schema

**File**: `shared/cross-links/link-database.js`

```javascript
// Central cross-reference database
// Maps conditions to medications and vice versa

export const conditionToMedicationLinks = [
    {
        conditionId: "stemi",
        conditionName: "STEMI",
        relationships: [
            {
                drugId: "aspirin",
                drugName: "Aspirin",
                relationshipType: "acute-treatment",  // acute-treatment, chronic-management, contraindicated
                context: "Chew 325mg immediately, part of MONA protocol",
                priority: "first-line"  // first-line, second-line, alternative
            },
            {
                drugId: "clopidogrel",
                drugName: "Clopidogrel",
                relationshipType: "acute-treatment",
                context: "Dual antiplatelet therapy post-PCI for 12 months",
                priority: "first-line"
            },
            {
                drugId: "atorvastatin",
                drugName: "Atorvastatin",
                relationshipType: "chronic-management",
                context: "High-intensity statin, 80mg daily",
                priority: "first-line"
            },
            {
                drugId: "lisinopril",
                drugName: "Lisinopril",
                relationshipType: "chronic-management",
                context: "Within 24h, especially if EF <40% or anterior MI",
                priority: "first-line"
            },
            {
                drugId: "metoprolol",
                drugName: "Metoprolol",
                relationshipType: "chronic-management",
                context: "Proven mortality benefit, start within 24h",
                priority: "first-line"
            }
        ]
    },
    {
        conditionId: "heart-failure-systolic",
        conditionName: "Heart Failure (Systolic)",
        relationships: [
            {
                drugId: "lisinopril",
                drugName: "Lisinopril",
                relationshipType: "chronic-management",
                context: "Reduces mortality and hospitalizations",
                priority: "first-line"
            },
            {
                drugId: "carvedilol",
                drugName: "Carvedilol",
                relationshipType: "chronic-management",
                context: "Beta-blocker with proven mortality benefit",
                priority: "first-line"
            },
            {
                drugId: "spironolactone",
                drugName: "Spironolactone",
                relationshipType: "chronic-management",
                context: "Aldosterone antagonist if EF <35%",
                priority: "first-line"
            },
            {
                drugId: "furosemide",
                drugName: "Furosemide",
                relationshipType: "acute-treatment",
                context: "Loop diuretic for volume overload",
                priority: "first-line"
            }
        ]
    },
    {
        conditionId: "hypertension",
        conditionName: "Hypertension",
        relationships: [
            {
                drugId: "lisinopril",
                drugName: "Lisinopril",
                relationshipType: "chronic-management",
                context: "First-line especially in diabetics",
                priority: "first-line"
            },
            {
                drugId: "amlodipine",
                drugName: "Amlodipine",
                relationshipType: "chronic-management",
                context: "CCB, first-line especially in African Americans",
                priority: "first-line"
            },
            {
                drugId: "hydrochlorothiazide",
                drugName: "Hydrochlorothiazide",
                relationshipType: "chronic-management",
                context: "Thiazide diuretic, first-line",
                priority: "first-line"
            }
        ]
    }
    // ... more condition-drug mappings
];

// Reverse index is auto-generated from above
export const medicationToConditionLinks = null; // Generated by link-generator.js
```

**Relationship Types:**
- `acute-treatment` - Used in acute/emergency management
- `chronic-management` - Long-term disease management
- `prophylaxis` - Preventive use
- `contraindicated` - Drug is contraindicated in this condition
- `caution` - Use with caution

**Priority Levels:**
- `first-line` - Primary treatment
- `second-line` - Alternative if first-line fails/contraindicated
- `alternative` - Less commonly used option
- `avoid` - Generally avoided

---

### Step 2: Create Link Generator

**File**: `shared/cross-links/link-generator.js`

```javascript
// Auto-generates reverse links and preview JSONs
import { conditionToMedicationLinks } from './link-database.js';

class LinkGenerator {
    /**
     * Generate medication → condition reverse index
     */
    generateReverseIndex() {
        const medicationToConditionLinks = new Map();

        conditionToMedicationLinks.forEach(conditionLink => {
            conditionLink.relationships.forEach(rel => {
                if (!medicationToConditionLinks.has(rel.drugId)) {
                    medicationToConditionLinks.set(rel.drugId, {
                        drugId: rel.drugId,
                        drugName: rel.drugName,
                        relationships: []
                    });
                }

                medicationToConditionLinks.get(rel.drugId).relationships.push({
                    conditionId: conditionLink.conditionId,
                    conditionName: conditionLink.conditionName,
                    relationshipType: rel.relationshipType,
                    context: rel.context,
                    priority: rel.priority
                });
            });
        });

        return Array.from(medicationToConditionLinks.values());
    }

    /**
     * Generate preview JSON for a drug (for tooltip on condition page)
     */
    generateDrugPreview(drugData) {
        return {
            id: drugData.id,
            name: drugData.name,
            pharmacologicClass: drugData.pharmacologicClass,
            mechanism: drugData.mechanism,
            clinicalChoice: drugData.clinicalChoice,
            keyIndications: drugData.indications.slice(0, 3),
            keySideEffects: drugData.sideEffects.slice(0, 3)
        };
    }

    /**
     * Generate preview JSON for a condition (for tooltip on drug page)
     */
    generateConditionPreview(conditionData) {
        return {
            id: conditionData.id,
            name: conditionData.name,
            definition: conditionData.detail.definition,
            presentation: conditionData.detail.presentation.substring(0, 200) + '...',
            severity: conditionData.severity,
            acuity: conditionData.acuity
        };
    }
}

export default new LinkGenerator();
```

---

### Step 3: Create Link Resolver

**File**: `shared/cross-links/link-resolver.js`

```javascript
// Runtime link resolution
import { conditionToMedicationLinks } from './link-database.js';
import linkGenerator from './link-generator.js';

class LinkResolver {
    constructor() {
        this.medicationToConditionIndex = null;
    }

    /**
     * Get all medications related to a condition
     */
    getMedicationsForCondition(conditionId) {
        const link = conditionToMedicationLinks.find(l => l.conditionId === conditionId);
        return link ? link.relationships : [];
    }

    /**
     * Get all conditions related to a medication
     */
    getConditionsForMedication(drugId) {
        if (!this.medicationToConditionIndex) {
            this.medicationToConditionIndex = linkGenerator.generateReverseIndex();
        }

        const link = this.medicationToConditionIndex.find(l => l.drugId === drugId);
        return link ? link.relationships : [];
    }

    /**
     * Get medications by relationship type for a condition
     */
    getMedicationsByType(conditionId, relationshipType) {
        const meds = this.getMedicationsForCondition(conditionId);
        return meds.filter(m => m.relationshipType === relationshipType);
    }

    /**
     * Get first-line medications for a condition
     */
    getFirstLineMedications(conditionId) {
        const meds = this.getMedicationsForCondition(conditionId);
        return meds.filter(m => m.priority === 'first-line');
    }
}

export default new LinkResolver();
```

---

### Step 4: Integrate with Data Loaders

**Modify**: `conditions/data-loader.js`

```javascript
import linkResolver from '../shared/cross-links/link-resolver.js';

class DataLoader {
    // ... existing code ...

    /**
     * Get disease with related medications
     */
    getDiseaseWithMedications(diseaseId) {
        const disease = this.diseaseIndex.get(diseaseId);
        if (!disease) return null;

        return {
            ...disease,
            relatedMedications: linkResolver.getMedicationsForCondition(diseaseId)
        };
    }

    /**
     * Get medications for disease grouped by relationship type
     */
    getMedicationsGroupedForDisease(diseaseId) {
        const allMeds = linkResolver.getMedicationsForCondition(diseaseId);

        return {
            acuteTreatment: allMeds.filter(m => m.relationshipType === 'acute-treatment'),
            chronicManagement: allMeds.filter(m => m.relationshipType === 'chronic-management'),
            prophylaxis: allMeds.filter(m => m.relationshipType === 'prophylaxis'),
            contraindicated: allMeds.filter(m => m.relationshipType === 'contraindicated')
        };
    }
}
```

**Modify**: `medications/data-loader.js`

```javascript
import linkResolver from '../shared/cross-links/link-resolver.js';

class MedicationDataLoader {
    // ... existing code ...

    /**
     * Get drug with related conditions
     */
    getDrugWithConditions(drugId) {
        const drug = this.drugsById.get(drugId);
        if (!drug) return null;

        return {
            ...drug,
            relatedConditions: linkResolver.getConditionsForMedication(drugId)
        };
    }

    /**
     * Get conditions grouped by relationship type
     */
    getConditionsGroupedForDrug(drugId) {
        const allConditions = linkResolver.getConditionsForMedication(drugId);

        return {
            acuteTreatment: allConditions.filter(c => c.relationshipType === 'acute-treatment'),
            chronicManagement: allConditions.filter(c => c.relationshipType === 'chronic-management'),
            prophylaxis: allConditions.filter(c => c.relationshipType === 'prophylaxis'),
            contraindicated: allConditions.filter(c => c.relationshipType === 'contraindicated')
        };
    }
}
```

---

### Step 5: UI Components for Links

**File**: `shared/components/cross-links.css`

```css
/* Cross-reference link styles */
.related-items {
    margin-top: 1.5rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: 8px;
    border-left: 4px solid var(--accent-color);
}

.related-items h4 {
    margin: 0 0 0.75rem 0;
    color: var(--text-primary);
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.related-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.related-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    text-decoration: none;
    color: var(--text-primary);
    font-size: 0.875rem;
    transition: all 0.2s ease;
    position: relative;
}

.related-link:hover {
    background: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.related-link .badge {
    padding: 2px 6px;
    font-size: 0.75rem;
    border-radius: 3px;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
}

.related-link.first-line .badge {
    background: #10b981;
    color: white;
}

.related-link.contraindicated .badge {
    background: #ef4444;
    color: white;
}

/* Tooltip for previews */
.link-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    background: #1f2937;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    min-width: 300px;
    max-width: 400px;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
}

.related-link:hover .link-tooltip {
    opacity: 1;
}

.link-tooltip h5 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
}

.link-tooltip p {
    margin: 0.25rem 0;
    font-size: 0.875rem;
    line-height: 1.4;
}

.link-tooltip .mechanism {
    color: #93c5fd;
    font-style: italic;
}
```

**File**: `shared/components/cross-links.js`

```javascript
// UI component for rendering cross-reference links
class CrossLinkRenderer {
    /**
     * Render medication links for a condition
     */
    renderMedicationLinks(medications, groupByType = true) {
        if (!medications || medications.length === 0) {
            return '<p class="no-links">No related medications found.</p>';
        }

        if (groupByType) {
            return this.renderGroupedMedicationLinks(medications);
        }

        return `
            <div class="related-links">
                ${medications.map(med => this.renderMedicationLink(med)).join('')}
            </div>
        `;
    }

    /**
     * Render grouped medication links
     */
    renderGroupedMedicationLinks(medicationsByType) {
        let html = '';

        if (medicationsByType.acuteTreatment?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>🚨 Acute Treatment</h4>
                    <div class="related-links">
                        ${medicationsByType.acuteTreatment.map(m => this.renderMedicationLink(m)).join('')}
                    </div>
                </div>
            `;
        }

        if (medicationsByType.chronicManagement?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>💊 Chronic Management</h4>
                    <div class="related-links">
                        ${medicationsByType.chronicManagement.map(m => this.renderMedicationLink(m)).join('')}
                    </div>
                </div>
            `;
        }

        if (medicationsByType.prophylaxis?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>🛡️ Prophylaxis</h4>
                    <div class="related-links">
                        ${medicationsByType.prophylaxis.map(m => this.renderMedicationLink(m)).join('')}
                    </div>
                </div>
            `;
        }

        if (medicationsByType.contraindicated?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>⚠️ Contraindicated</h4>
                    <div class="related-links">
                        ${medicationsByType.contraindicated.map(m => this.renderMedicationLink(m, true)).join('')}
                    </div>
                </div>
            `;
        }

        return html;
    }

    /**
     * Render single medication link with tooltip
     */
    renderMedicationLink(medication, isContraindicated = false) {
        const priorityClass = medication.priority || 'alternative';
        const basePath = this.getBasePath();

        return `
            <a href="${basePath}medications/index-v2.html?drug=${medication.drugId}"
               class="related-link ${priorityClass} ${isContraindicated ? 'contraindicated' : ''}"
               data-drug-id="${medication.drugId}">
                <span>${medication.drugName}</span>
                <span class="badge">${medication.priority}</span>
                <div class="link-tooltip">
                    <h5>${medication.drugName}</h5>
                    <p class="context">${medication.context}</p>
                </div>
            </a>
        `;
    }

    /**
     * Render condition links for a medication
     */
    renderConditionLinks(conditions, groupByType = true) {
        if (!conditions || conditions.length === 0) {
            return '<p class="no-links">No related conditions found.</p>';
        }

        if (groupByType) {
            return this.renderGroupedConditionLinks(conditions);
        }

        return `
            <div class="related-links">
                ${conditions.map(cond => this.renderConditionLink(cond)).join('')}
            </div>
        `;
    }

    /**
     * Render grouped condition links
     */
    renderGroupedConditionLinks(conditionsByType) {
        let html = '';

        if (conditionsByType.acuteTreatment?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>🚨 Acute Indications</h4>
                    <div class="related-links">
                        ${conditionsByType.acuteTreatment.map(c => this.renderConditionLink(c)).join('')}
                    </div>
                </div>
            `;
        }

        if (conditionsByType.chronicManagement?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>🏥 Chronic Indications</h4>
                    <div class="related-links">
                        ${conditionsByType.chronicManagement.map(c => this.renderConditionLink(c)).join('')}
                    </div>
                </div>
            `;
        }

        if (conditionsByType.contraindicated?.length > 0) {
            html += `
                <div class="related-items">
                    <h4>⚠️ Contraindications</h4>
                    <div class="related-links">
                        ${conditionsByType.contraindicated.map(c => this.renderConditionLink(c, true)).join('')}
                    </div>
                </div>
            `;
        }

        return html;
    }

    /**
     * Render single condition link with tooltip
     */
    renderConditionLink(condition, isContraindicated = false) {
        const priorityClass = condition.priority || 'alternative';
        const basePath = this.getBasePath();

        return `
            <a href="${basePath}conditions/index.html?disease=${condition.conditionId}"
               class="related-link ${priorityClass} ${isContraindicated ? 'contraindicated' : ''}"
               data-condition-id="${condition.conditionId}">
                <span>${condition.conditionName}</span>
                <span class="badge">${condition.priority}</span>
                <div class="link-tooltip">
                    <h5>${condition.conditionName}</h5>
                    <p class="context">${condition.context}</p>
                </div>
            </a>
        `;
    }

    getBasePath() {
        const hostname = window.location.hostname;
        if (hostname.includes('github.io')) {
            return '/step1/';
        }
        return '../';
    }
}

export default new CrossLinkRenderer();
```

---

## 📝 Adding New Links - Workflow

### For Future Content Additions:

**When adding a new condition:**
1. Create disease file as usual in `conditions/data/diseases/`
2. Add entry to `shared/cross-links/link-database.js` mapping it to relevant drugs

**When adding a new drug:**
1. Create drug file as usual in `medications/data/drugs/`
2. Add drug references to existing condition entries in `link-database.js`

**Single file to edit**: `shared/cross-links/link-database.js`

---

## 🔄 Migration Path for Existing Data

You DON'T need to edit existing files. Instead:

1. **Create link database** with high-yield relationships first
2. **Start with top conditions** (STEMI, Heart Failure, Hypertension, COPD, etc.)
3. **Add ~50-100 key relationships** initially
4. **Expand incrementally** as needed

### Suggested Initial Links (High-Yield):

**Cardiovascular:**
- STEMI → Aspirin, Clopidogrel, Atorvastatin, Lisinopril, Metoprolol
- Heart Failure → Lisinopril, Carvedilol, Spironolactone, Furosemide
- Hypertension → Lisinopril, Amlodipine, HCTZ

**Respiratory:**
- Asthma → Albuterol, Fluticasone, Montelukast
- COPD → Albuterol, Ipratropium, Prednisone

**GI:**
- GERD → Omeprazole, Famotidine
- H. pylori → Clarithromycin, Amoxicillin, Omeprazole

**Psychiatry:**
- Depression → Sertraline, Fluoxetine, Bupropion
- Schizophrenia → Haloperidol, Risperidone, Clozapine

---

## 📊 Implementation Timeline

### Week 1: Infrastructure
- [ ] Create `shared/cross-links/` directory
- [ ] Implement link-database.js schema
- [ ] Build link-generator.js
- [ ] Build link-resolver.js
- [ ] Update data loaders

### Week 2: UI Components
- [ ] Create cross-links.css
- [ ] Implement cross-links.js renderer
- [ ] Integrate into conditions detail panel
- [ ] Integrate into medications detail panel
- [ ] Test navigation flow

### Week 3: Content Population
- [ ] Add cardiovascular links (15-20 conditions)
- [ ] Add respiratory links (10-15 conditions)
- [ ] Add GI links (10-15 conditions)
- [ ] Add psychiatry links (10-15 conditions)

### Week 4: Polish & Testing
- [ ] Validate all links work
- [ ] Test tooltips on both platforms
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Documentation

---

## 🎨 User Experience

### On Conditions Page (e.g., STEMI):

```
[Disease Detail Panel]

📋 Management
Acute:
  - MONA protocol
  - Dual antiplatelet therapy
  - Reperfusion <90 min

💊 Related Medications

🚨 Acute Treatment
[Aspirin] [first-line]  [Clopidogrel] [first-line]  [Nitroglycerin] [first-line]
↑ Hover shows: "Aspirin - Irreversibly inhibits COX-1, preventing platelet aggregation"

🏥 Chronic Management
[Lisinopril] [first-line]  [Metoprolol] [first-line]  [Atorvastatin] [first-line]
```

### On Medications Page (e.g., Aspirin):

```
[Drug Detail Panel]

⚙️ Mechanism
Irreversibly inhibits COX-1...

🏥 Related Conditions

🚨 Acute Indications
[STEMI] [first-line]  [Ischemic Stroke] [first-line]  [Unstable Angina] [first-line]
↑ Hover shows: "STEMI - Complete coronary occlusion causing transmural MI"

💊 Chronic Indications
[Secondary Prevention MI] [first-line]  [Atrial Fibrillation] [alternative]
```

---

## 🚀 Next Steps

1. **Review this plan** - Does this architecture meet your needs?
2. **Start with infrastructure** - Build the linking layer
3. **Pilot with 5-10 conditions** - Test the system
4. **Iterate based on feedback** - Refine UI/UX
5. **Scale up content** - Add remaining links incrementally

---

## 📚 Benefits of This Approach

✅ **No mass file editing** - Keep existing 435 files as-is
✅ **Single source of truth** - All links in one database
✅ **Easy to maintain** - Add/remove links in one place
✅ **Programmatically verifiable** - Can validate links exist
✅ **Gradual adoption** - Start small, expand over time
✅ **Performance** - Links resolved at runtime, no bloat
✅ **Flexible** - Easy to add new relationship types

---

**Ready to build this?** Let me know if you want to start with the infrastructure or if you'd like any modifications to this plan!

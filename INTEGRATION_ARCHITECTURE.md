# Step 1 Explorers - Federated Integration Architecture

## Overview

Three independent but integrated explorers for USMLE Step 1 preparation:
1. **Conditions Explorer** - Diseases, symptoms, diagnosis, management
2. **Medications Explorer** - Drugs, mechanisms, indications, side effects
3. **Bugs Explorer** - Pathogens, microbiology, antimicrobials

## Architecture Philosophy: Federated Explorers

### Core Principles

1. **Independent Apps**: Each explorer is a separate application
   - Can be developed, tested, deployed independently
   - Separate codebases, own data models
   - No shared runtime dependencies

2. **Shared Design System**: Visual consistency across all three
   - Common CSS variables (colors, typography, spacing)
   - Consistent component patterns
   - Same navigation paradigm

3. **Smart Cross-Linking**: Automated bidirectional references
   - Conditions → Medications (treatment references)
   - Medications → Conditions (indication references)
   - Bugs → Conditions (diseases caused)
   - Bugs → Medications (antimicrobial therapy)

4. **Context Preservation**: Navigation maintains user journey
   - URL parameters track navigation path
   - Breadcrumbs show cross-explorer navigation
   - "Back to..." links preserve context

## Directory Structure

```
step1-explorers/
├── shared/
│   ├── design-tokens.css           # CSS variables for all explorers
│   ├── navigation.css              # Unified header/nav component
│   └── cross-references/
│       ├── conditions-to-meds.json # Condition → Medication mappings
│       ├── meds-to-conditions.json # Medication → Condition mappings
│       └── build-references.js     # Script to generate mappings
│
├── conditions/                     # Conditions Explorer
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── data-loader.js
│   ├── data/
│   │   ├── systems/
│   │   │   └── systems.js
│   │   ├── categories/
│   │   │   ├── cv-categories.js
│   │   │   ├── gi-categories.js
│   │   │   ├── respiratory-categories.js
│   │   │   └── psychiatry-categories.js
│   │   └── diseases/
│   │       ├── cv-diseases.js
│   │       ├── gi-diseases.js
│   │       ├── respiratory-diseases.js
│   │       └── psychiatry-diseases.js
│   └── previews/
│       ├── medication-previews.json # Medication tooltip data
│       └── bug-previews.json        # Bug tooltip data
│
├── medications/                    # Medications Explorer (NEW)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── data-loader.js
│   ├── data/
│   │   ├── systems/
│   │   │   └── systems.js           # Body systems (matching conditions)
│   │   ├── therapeutic-classes/
│   │   │   ├── autonomic.js
│   │   │   ├── cardiovascular.js
│   │   │   ├── respiratory.js
│   │   │   └── psychiatry.js
│   │   └── drugs/
│   │       └── [organized by system]
│   └── previews/
│       └── condition-previews.json  # Condition tooltip data
│
└── bugs/                           # Bugs Explorer (FUTURE)
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── data-loader.js
    ├── data/
    │   ├── categories/
    │   │   ├── bacteria.js
    │   │   ├── viruses.js
    │   │   ├── fungi.js
    │   │   └── parasites.js
    │   └── pathogens/
    │       └── [organized by category]
    └── previews/
        ├── condition-previews.json
        └── medication-previews.json
```

## Data Models

### Conditions Data Model

```javascript
// System
{
    id: "cardiovascular",
    name: "Cardiovascular",
    categoryIds: ["chest-pain", "dyspnea", ...],
    pageType: "system",
    detail: { overview: "...", keyAnatomy: [...], commonThemes: [...] }
}

// Category
{
    id: "chest-pain",
    name: "Chest Pain",
    system: "cardiovascular",
    type: "presenting-complaint",
    diseaseIds: ["stemi", "nstemi", "unstable-angina", ...],
    pageType: "category",
    detail: { overview: "...", ddxApproach: [...] }
}

// Disease
{
    id: "stemi",
    name: "ST-Elevation Myocardial Infarction (STEMI)",
    system: "cardiovascular",
    categories: ["chest-pain", "acs"],
    symptoms: ["chest-pain", "dyspnea", "diaphoresis"],
    tags: ["emergency", "cardiology", "ischemic"],
    severity: "high",
    acuity: "acute",
    pageType: "disease",

    // Cross-references (NEW)
    medications: {
        acute: ["aspirin", "clopidogrel", "heparin", "morphine", "nitroglycerin"],
        chronic: ["aspirin", "clopidogrel", "atorvastatin", "metoprolol", "lisinopril"]
    },

    detail: {
        definition: "...",
        pathophysiology: "...",
        // ... 13 sections
        management: {
            acute: [
                "MONA-B: Morphine, Oxygen, Nitroglycerin, Aspirin, Beta-blocker",
                "Dual antiplatelet: aspirin 325mg + P2Y12 inhibitor (clopidogrel, ticagrelor, prasugrel)"
            ],
            chronic: ["..."]
        }
    }
}
```

### Medications Data Model (NEW - Modular)

```javascript
// System (matches conditions systems)
{
    id: "cardiovascular",
    name: "Cardiovascular",
    therapeuticClassIds: ["antiplatelet", "anticoagulant", "antihypertensive", ...],
    pageType: "system"
}

// Therapeutic Class
{
    id: "antiplatelet",
    name: "Antiplatelet Agents",
    system: "cardiovascular",
    pharmacologicClassIds: ["cox-inhibitors", "p2y12-inhibitors", "gpiib-iiia-inhibitors"],
    pageType: "therapeutic-class",
    detail: {
        overview: "Prevent platelet aggregation and thrombosis",
        clinicalUse: "ACS, stroke prevention, PCI"
    }
}

// Pharmacologic Class
{
    id: "p2y12-inhibitors",
    name: "P2Y12 Receptor Antagonists",
    therapeuticClass: "antiplatelet",
    mechanism: "Block P2Y12 receptor on platelets → inhibit ADP-mediated activation",
    sideEffects: ["Bleeding", "Thrombotic thrombocytopenic purpura (ticagrelor)"],
    interactions: ["Anticoagulants potentiate bleeding risk"],
    drugIds: ["clopidogrel", "ticagrelor", "prasugrel"],
    pageType: "pharmacologic-class"
}

// Drug
{
    id: "clopidogrel",
    name: "Clopidogrel",
    pharmacologicClass: "p2y12-inhibitors",
    therapeuticClass: "antiplatelet",
    system: "cardiovascular",

    mechanism: "Prodrug → active metabolite blocks P2Y12 receptor irreversibly",
    features: "Requires CYP2C19 activation. Genetic polymorphisms affect efficacy.",

    // Cross-references to conditions
    indications: [
        {text: "Acute Coronary Syndrome", conditionId: "stemi"},
        {text: "Recent MI", conditionId: "stemi"},
        {text: "Stroke prevention", conditionId: "ischemic-stroke"},
        {text: "Peripheral Arterial Disease", conditionId: "pad"}
    ],

    contraindications: ["Active bleeding", "Severe hepatic impairment"],
    sideEffects: ["Bleeding", "TTP (rare)", "Rash"],
    interactions: [
        "Omeprazole/esomeprazole: reduce activation (avoid)",
        "NSAIDs: increase bleeding risk"
    ],

    dosing: {
        loading: "300-600mg PO once",
        maintenance: "75mg PO daily"
    },

    clinicalChoice: "ACS with PCI: dual antiplatelet therapy with aspirin for 12 months",

    pageType: "drug"
}
```

### Bugs Data Model (FUTURE)

```javascript
// Pathogen
{
    id: "streptococcus-pneumoniae",
    name: "Streptococcus pneumoniae",
    commonName: "Pneumococcus",
    category: "bacteria",
    gramStain: "positive",
    shape: "diplococci",

    microbiology: {
        microscopy: "Gram+ lancet-shaped diplococci",
        culture: "Alpha-hemolytic on blood agar, bile soluble, optochin sensitive",
        capsule: "Polysaccharide capsule (virulence factor, vaccine target)"
    },

    // Cross-references
    diseasesCaused: [
        {conditionId: "cap", severity: "most common"},
        {conditionId: "bacterial-meningitis", severity: "most common adult"},
        {conditionId: "otitis-media", severity: "most common"},
        {conditionId: "sinusitis", severity: "common"}
    ],

    treatment: {
        firstLine: [
            {drugId: "amoxicillin", note: "If susceptible"},
            {drugId: "ceftriaxone", note: "If resistant or severe"}
        ],
        alternatives: [
            {drugId: "levofloxacin", note: "If beta-lactam allergy"}
        ],
        resistance: "Increasing penicillin resistance via PBP mutations"
    },

    pageType: "pathogen"
}
```

## Cross-Linking System

### Automated Medication Detection

**In Conditions Explorer**:

```javascript
// management text contains: "aspirin 325mg + clopidogrel 75mg"
// Auto-parse and link:

const DRUG_DICTIONARY = {
    "aspirin": {id: "aspirin", class: "COX inhibitor"},
    "clopidogrel": {id: "clopidogrel", class: "P2Y12 inhibitor"}
    // ... built from medication database
};

function parseMedicationReferences(text) {
    // Regex to find drug names
    // Wrap in <span class="drug-link" data-drug-id="...">
    // On hover: show tooltip
    // On click: navigate to medication explorer
}
```

### Preview/Tooltip Data

**medication-previews.json** (used by Conditions Explorer):
```json
{
  "clopidogrel": {
    "name": "Clopidogrel",
    "class": "P2Y12 Receptor Antagonist",
    "mechanism": "Blocks P2Y12 receptor → inhibits ADP-mediated platelet activation",
    "keyIndications": ["ACS", "Stroke prevention", "PAD"],
    "keySideEffects": ["Bleeding", "TTP (rare)"],
    "keyContraindications": ["Active bleeding"],
    "clinicalPearl": "Requires CYP2C19 activation. Avoid PPIs (especially omeprazole)."
  }
}
```

**condition-previews.json** (used by Medications Explorer):
```json
{
  "stemi": {
    "name": "STEMI",
    "definition": "Complete coronary occlusion → transmural MI → ST elevation",
    "keyPresentation": "Severe crushing chest pain, diaphoresis, dyspnea",
    "keyDiagnostic": "ECG: ST elevation ≥1mm in 2+ contiguous leads",
    "keyTreatment": "MONA-B + emergent reperfusion (PCI < 90min or fibrinolysis)",
    "severity": "high"
  }
}
```

### URL Schema

**Deep linking with context**:

```
# User navigates: Conditions → STEMI → clicks "clopidogrel"
/medications/#/drug/clopidogrel?from=conditions&context=stemi

# Medications explorer shows:
← Back to STEMI
Clopidogrel
[indication badge] Acute Coronary Syndrome (click → back to conditions)
```

**Breadcrumb trail**:
```
Conditions > Cardiovascular > Chest Pain > STEMI > Medications > Clopidogrel
```

## Navigation Pattern

### Unified Header (All Three Explorers)

```html
<header class="unified-header">
    <div class="explorer-toggle">
        <button class="toggle-btn active" data-explorer="conditions">
            Conditions
        </button>
        <button class="toggle-btn" data-explorer="medications">
            Medications
        </button>
        <button class="toggle-btn disabled" data-explorer="bugs">
            Bugs <span class="badge">Coming Soon</span>
        </button>
    </div>

    <div class="search-global">
        <input type="text" placeholder="Search...">
        <label>
            <input type="checkbox" id="search-all">
            Search all explorers
        </label>
    </div>

    <div class="header-actions">
        <button id="info-button">?</button>
        <a href="https://ko-fi.com/rivir">Support</a>
    </div>
</header>

<nav class="breadcrumb" id="breadcrumb">
    <!-- Dynamically populated -->
</nav>
```

### Navigation Behavior

```javascript
// When user clicks medication link in conditions explorer
function navigateToMedication(drugId, context) {
    const url = `/medications/#/drug/${drugId}?from=conditions&context=${context}`;
    window.location.href = url;
}

// Medications explorer on load
function handleIncomingNavigation() {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');
    const context = params.get('context');

    if (from === 'conditions' && context) {
        // Show "Back to [condition]" link
        // Highlight relevant indication
        showNavigationContext(from, context);
    }
}
```

## Tooltip System

### Implementation

```javascript
class TooltipManager {
    constructor(previewDataUrl) {
        this.previews = {};
        this.currentTooltip = null;
        this.loadPreviews(previewDataUrl);
    }

    async loadPreviews(url) {
        const response = await fetch(url);
        this.previews = await response.json();
    }

    show(element, itemId, itemType) {
        const preview = this.previews[itemId];
        if (!preview) return;

        const tooltip = this.createTooltip(preview, itemType);
        this.positionTooltip(tooltip, element);
        this.currentTooltip = tooltip;
    }

    createTooltip(preview, type) {
        // type: 'medication', 'condition', 'bug'
        // Return formatted HTML based on type
    }

    hide() {
        if (this.currentTooltip) {
            this.currentTooltip.remove();
            this.currentTooltip = null;
        }
    }
}

// Usage in conditions explorer
const medicationTooltips = new TooltipManager('/previews/medication-previews.json');

document.querySelectorAll('.drug-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const drugId = e.target.dataset.drugId;
        medicationTooltips.show(e.target, drugId, 'medication');
    });

    link.addEventListener('mouseleave', () => {
        medicationTooltips.hide();
    });
});
```

## Design System

### CSS Variables (shared/design-tokens.css)

```css
:root {
    /* Colors - Primary */
    --color-primary: #2563eb;
    --color-primary-dark: #1e40af;
    --color-primary-light: #3b82f6;

    /* Colors - Severity */
    --severity-high: #dc2626;
    --severity-medium: #f59e0b;
    --severity-low: #10b981;

    /* Colors - Acuity */
    --acuity-acute: #ef4444;
    --acuity-chronic: #8b5cf6;

    /* Colors - System */
    --system-cv: #dc2626;
    --system-resp: #2563eb;
    --system-gi: #f59e0b;
    --system-neuro: #8b5cf6;
    --system-renal: #06b6d4;
    --system-endo: #ec4899;
    --system-psych: #10b981;

    /* Typography */
    --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-family-mono: 'Consolas', 'Monaco', monospace;

    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;

    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 300ms ease;
    --transition-slow: 500ms ease;

    /* Z-index layers */
    --z-base: 1;
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-modal: 1000;
    --z-tooltip: 2000;
}
```

## Build System (Future)

### Preview Generation

```javascript
// shared/cross-references/build-references.js

import medicationData from '../../medications/data/drugs/all.js';
import diseaseData from '../../conditions/data/diseases/all.js';

// Generate medication-previews.json for conditions explorer
function generateMedicationPreviews() {
    const previews = {};

    medicationData.forEach(drug => {
        previews[drug.id] = {
            name: drug.name,
            class: drug.pharmacologicClass,
            mechanism: drug.mechanism.substring(0, 150) + '...',
            keyIndications: drug.indications.slice(0, 3).map(i => i.text),
            keySideEffects: drug.sideEffects.slice(0, 3),
            keyContraindications: drug.contraindications.slice(0, 2),
            clinicalPearl: drug.clinicalChoice
        };
    });

    return previews;
}

// Generate condition-previews.json for medications explorer
function generateConditionPreviews() {
    const previews = {};

    diseaseData.forEach(disease => {
        previews[disease.id] = {
            name: disease.name,
            definition: disease.detail.definition.substring(0, 150) + '...',
            keyPresentation: disease.detail.presentation.substring(0, 100) + '...',
            keyDiagnostic: disease.detail.diagnosticCriteria.substring(0, 100) + '...',
            keyTreatment: disease.detail.management.acute[0].substring(0, 100) + '...',
            severity: disease.severity
        };
    });

    return previews;
}

// Auto-generate cross-reference mappings
function buildCrossReferences() {
    // Parse management text in diseases
    // Detect medication names
    // Build conditions-to-meds.json

    // Parse indications in medications
    // Map to condition IDs
    // Build meds-to-conditions.json
}
```

## Implementation Phases

### Phase 1: Rebuild Medications (Now)
- [ ] Modularize medication data into ES6 modules
- [ ] Create systems, therapeutic-classes, drugs structure
- [ ] Build DataLoader for medications (match conditions pattern)
- [ ] Port UI to modular architecture
- [ ] Test functionality matches original

### Phase 2: Shared Design System
- [ ] Extract CSS variables to shared/design-tokens.css
- [ ] Create shared navigation component
- [ ] Apply to both explorers
- [ ] Visual consistency verification

### Phase 3: Cross-Linking Foundation
- [ ] Generate medication-previews.json
- [ ] Generate condition-previews.json
- [ ] Implement tooltip system in both explorers
- [ ] Add manual cross-references to key conditions/medications
- [ ] Test bidirectional navigation

### Phase 4: Automation
- [ ] Build drug name parser
- [ ] Auto-generate medication links in conditions
- [ ] Map indications to conditions in medications
- [ ] Build reference generation script
- [ ] Test coverage

### Phase 5: Enhanced UX
- [ ] Unified search across explorers
- [ ] Breadcrumb navigation
- [ ] Context preservation in URLs
- [ ] Related items sidebar
- [ ] Performance optimization

### Phase 6: Bugs Explorer
- [ ] Design bugs data model
- [ ] Build bugs explorer using proven pattern
- [ ] Three-way cross-referencing
- [ ] Integration testing
- [ ] Launch

## Success Metrics

- **Navigation**: User can move Conditions → Medications → Bugs seamlessly
- **Context**: User journey is preserved (breadcrumbs, back links work)
- **Discovery**: Hovering medication name shows preview without leaving page
- **Consistency**: All three explorers feel like one unified platform
- **Performance**: Tooltip appears <100ms, navigation <500ms
- **Maintainability**: Can update one explorer without breaking others

## Future Enhancements

- [ ] Progressive Web App (offline support)
- [ ] Anki deck export
- [ ] Study mode with spaced repetition
- [ ] Comparison mode across explorers
- [ ] Mobile apps
- [ ] Collaborative features (share notes, highlights)

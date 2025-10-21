# Step 1 Conditions Explorer - Architecture Documentation

## Overview

The Conditions Explorer is a comprehensive medical education platform designed for USMLE Step 1 preparation. It uses a graph-based data structure with bidirectional linking and multiple content types to support different learning modalities.

## Content Type Hierarchy

### 1. Systems (Top Level)
Organ systems that organize all content (e.g., Cardiovascular, Renal, Psychiatry)

```javascript
{
  id: "renal",
  name: "Renal",
  categoryIds: ["acute-kidney-injury", "chronic-kidney-disease", ...],
  pageType: "system",
  detail: {
    overview: "High-level system description",
    keyAnatomy: ["Anatomical points"],
    commonThemes: ["Cross-cutting concepts"]
  }
}
```

### 2. Categories (Middle Level)
Clinical groupings within systems (e.g., Acute Kidney Injury, Glomerular Diseases)

```javascript
{
  id: "acute-kidney-injury",
  name: "Acute Kidney Injury (AKI)",
  system: "renal",
  type: "category",
  diseaseIds: ["prerenal-aki", "atn", "ain", "postrenal-aki"],
  pageType: "category",
  detail: {
    approach: "Clinical approach to this category",
    redFlags: ["Critical warning signs"],
    initialWorkup: ["Diagnostic approach"],
    differentialCategories: ["Differential diagnosis framework"],

    // NEW: Learning Tools
    comparisonTables: [...],  // See below
    algorithms: [...],         // See below
    keyDifferentiations: [...] // See below
  }
}
```

### 3. Diseases (Bottom Level)
Individual conditions with comprehensive Step 1 content

```javascript
{
  id: "prerenal-aki",
  name: "Prerenal Acute Kidney Injury",
  system: "renal",
  categories: ["acute-kidney-injury"],
  symptoms: ["oliguria", "fatigue", "confusion"],
  tags: ["aki", "prerenal", "reversible"],
  severity: "moderate",
  acuity: "acute",
  pageType: "disease",
  detail: {
    definition: "...",
    pathophysiology: "...",
    epidemiology: "...",
    riskFactors: [...],
    presentation: [...],
    physicalExam: [...],
    diagnosticCriteria: "...",
    labs: [...],
    imaging: [...],
    differentialDiagnosis: [...],
    management: {
      acute: [...],
      chronic: [...]
    },
    complications: [...],
    prognosis: "...",
    clinicalPearls: [...]
  }
}
```

### 4. Presentations (Clinical Entry Points) - *Future*
Common clinical presentations that link to relevant diseases

```javascript
{
  id: "oliguria",
  name: "Oliguria",
  system: "renal",
  categories: ["acute-kidney-injury"],
  pageType: "presentation",
  detail: {
    definition: "Urine output <400 mL/day or <0.5 mL/kg/hr for ≥6 hours",
    emergentCauses: ["Bilateral renal artery occlusion", ...],
    differentialByCategory: {
      "Prerenal (60%)": {
        diseases: ["prerenal-aki"],
        clues: "FENa <1%, BUN/Cr >20, concentrated urine"
      },
      "Intrarenal (35%)": {
        diseases: ["atn", "ain"],
        clues: "FENa >2% (ATN), WBC casts (AIN)"
      }
    },
    initialWorkup: [...],
    clinicalPearls: [...]
  }
}
```

---

## Learning Tools (NEW Feature)

Learning tools embedded in **category pages** to aid understanding and differentiation.

### 1. Comparison Tables

Side-by-side feature comparison of related diseases.

#### Schema:
```javascript
{
  title: "Prerenal vs ATN vs AIN vs Postrenal AKI",
  subtitle: "Key distinguishing features", // optional
  type: "feature-comparison",
  diseases: ["prerenal-aki", "atn", "ain", "postrenal-aki"],
  features: [
    {
      name: "FENa",
      values: ["<1%", ">2%", "Variable", "Variable"],
      note: "Most reliable if not on diuretics" // optional
    },
    {
      name: "Urine Na (mEq/L)",
      values: ["<20", ">40", "Variable", "Variable"]
    },
    {
      name: "BUN/Cr ratio",
      values: [">20", "<15", "Variable", "Variable"]
    },
    {
      name: "Urinalysis",
      values: ["Bland, concentrated", "Muddy brown casts", "WBC casts, eosinophils", "Bland"]
    },
    {
      name: "Response to fluids",
      values: ["Improves 24-48h", "No improvement", "No improvement", "No improvement"]
    }
  ],
  clinicalPearl: "FENa <1% with oliguria = prerenal until proven otherwise"
}
```

#### Example Use Cases:
- **AKI types**: Prerenal vs ATN vs AIN vs Postrenal
- **RTA types**: Type 1 vs Type 2 vs Type 4
- **Nephrotic syndromes**: Minimal change vs FSGS vs Membranous
- **Nephritic syndromes**: IgA nephropathy vs Post-infectious GN vs RPGN
- **Psychotic disorders**: Schizophrenia vs Schizoaffective vs Mood disorder with psychosis

### 2. 2x2 Matrices

Contingency tables for diagnosis based on two binary variables.

#### Schema:
```javascript
{
  title: "Schizoaffective vs Mood Disorder with Psychosis",
  subtitle: "Timing of symptom onset determines diagnosis",
  type: "2x2-matrix",
  rowHeaders: ["Bipolar features", "Depressive features"],
  colHeaders: ["Mood symptoms appear FIRST", "Psychotic symptoms appear FIRST"],
  cells: [
    ["Bipolar I with psychotic features", "Schizoaffective disorder (bipolar type)"],
    ["MDD with psychotic features", "Schizoaffective disorder (depressive type)"]
  ],
  notes: [
    "Schizoaffective requires ≥2 weeks of psychosis WITHOUT mood symptoms",
    "Mood disorder with psychosis: psychotic features ONLY during mood episodes"
  ]
}
```

#### Example Use Cases:
- **Psychiatry**: Schizoaffective diagnosis (mood vs psychosis timing)
- **Anemia**: MCV + Reticulocyte count → diagnosis
- **Acid-Base**: pH + PaCO2 → primary disorder
- **Hypercalcemia**: PTH + Calcium → etiology (hyperparathyroidism vs malignancy)

### 3. Decision Algorithms

Flowchart-style diagnostic or management algorithms.

#### Schema:
```javascript
{
  title: "AKI Diagnostic Algorithm",
  type: "algorithm",
  startNode: "aki-detected",
  nodes: {
    "aki-detected": {
      label: "AKI detected (↑Cr ≥0.3 in 48h)",
      question: "Check urine output and volume status",
      branches: [
        {condition: "Oliguria + hypovolemia", next: "check-fena"},
        {condition: "Anuria or bladder distension", next: "check-obstruction"}
      ]
    },
    "check-fena": {
      label: "Check FENa and urinalysis",
      branches: [
        {condition: "FENa <1%, BUN/Cr >20", diagnosis: "prerenal-aki"},
        {condition: "FENa >2%, muddy brown casts", diagnosis: "atn"},
        {condition: "WBC casts, eosinophils", diagnosis: "ain"}
      ]
    },
    "check-obstruction": {
      label: "Bladder scan or ultrasound",
      branches: [
        {condition: "Hydronephrosis present", diagnosis: "postrenal-aki"},
        {condition: "No obstruction", next: "check-vascular"}
      ]
    }
  }
}
```

#### Example Use Cases:
- **AKI workup**: FENa → UA → imaging → diagnosis
- **Hyponatremia**: Volume status → Serum osm → Urine osm → diagnosis
- **Anemia**: MCV → Reticulocyte → specific tests → diagnosis
- **Chest pain**: Risk stratification → ECG → Troponin → management

### 4. Key Differentiations

Narrative-style comparisons with decision rules.

#### Schema:
```javascript
{
  title: "Nephrotic vs Nephritic Syndrome",
  type: "differentiation",
  summary: "Both cause kidney disease, but different pathophysiology and presentation",
  keyDistinction: "Nephrotic = podocyte injury (heavy proteinuria, edema). Nephritic = glomerular inflammation (hematuria, HTN, oliguria).",
  comparisonPoints: [
    {
      feature: "Pathophysiology",
      nephrotic: "Podocyte foot process effacement → loss of charge barrier → massive proteinuria",
      nephritic: "Glomerular inflammation → disrupted filtration barrier → hematuria, RBC casts"
    },
    {
      feature: "Proteinuria",
      nephrotic: ">3.5 g/day (heavy)",
      nephritic: "<3.5 g/day (mild-moderate)"
    },
    {
      feature: "Edema",
      nephrotic: "Severe (hypoalbuminemia → ↓ oncotic pressure)",
      nephritic: "Mild (salt/water retention)"
    },
    {
      feature: "Blood pressure",
      nephrotic: "Normal or low (volume depletion)",
      nephritic: "Hypertension (volume overload)"
    },
    {
      feature: "Urinalysis",
      nephrotic: "Oval fat bodies, fatty casts, minimal RBCs",
      nephritic: "RBC casts (pathognomonic), dysmorphic RBCs, mild proteinuria"
    }
  ],
  diseases: {
    nephrotic: ["minimal-change-disease", "fsgs", "membranous-nephropathy", "diabetic-nephropathy"],
    nephritic: ["iga-nephropathy", "post-infectious-gn", "rpgn", "lupus-nephritis"]
  },
  clinicalPearl: "RBC casts = nephritic. >3.5g proteinuria + edema = nephrotic. Can have overlap (membranoproliferative GN)."
}
```

---

## Data Loader Integration

### New Methods

```javascript
// Existing methods
dataLoader.getSystem(systemId)
dataLoader.getCategory(categoryId)
dataLoader.getDisease(diseaseId)

// Category learning tools (NEW)
dataLoader.getCategoryComparisonTables(categoryId)
dataLoader.getCategoryAlgorithms(categoryId)
dataLoader.getCategoryDifferentiations(categoryId)

// Presentation pages (FUTURE)
dataLoader.getAllPresentations()
dataLoader.getPresentationsForSystem(systemId)
dataLoader.getPresentation(presentationId)
dataLoader.getDiseasesForPresentation(presentationId)

// Enhanced search
dataLoader.searchBySymptom(symptom) // returns diseases with that symptom
dataLoader.searchByTag(tag)
```

### Indexing Strategy

```javascript
// Existing indexes
this.systemIndex = new Map()        // systemId -> system
this.categoryIndex = new Map()      // categoryId -> category
this.diseaseIndex = new Map()       // diseaseId -> disease

// Reverse indexes
this.diseasesByCategory = new Map() // categoryId -> [diseases]
this.diseasesBySystem = new Map()   // systemId -> [diseases]
this.diseasesByTag = new Map()      // tag -> [diseases]
this.diseasesBySymptom = new Map()  // symptom -> [diseases]

// NEW: Presentation indexes (FUTURE)
this.presentationIndex = new Map()  // presentationId -> presentation
this.presentationsBySystem = new Map() // systemId -> [presentations]
this.diseasesByPresentation = new Map() // presentationId -> [diseases]
```

---

## UI/UX Patterns

### Category Page Layout

```
┌─────────────────────────────────────────────────────────┐
│ Acute Kidney Injury (AKI)                               │
├─────────────────────────────────────────────────────────┤
│ 📋 Clinical Approach                                    │
│ AKI = rapid ↑Cr (≥0.3 mg/dL in 48h or ≥1.5× baseline  │
│ in 7 days) or ↓ urine output (<0.5 mL/kg/hr × 6h).    │
│ Categorize as prerenal, intrarenal, or postrenal...    │
│                                                         │
│ ⚠️ Red Flags                                            │
│ • Oliguria/anuria → fluid overload, hyperkalemia       │
│ • Hyperkalemia >6.5 → arrhythmias, cardiac arrest      │
│                                                         │
│ 📊 Quick Comparison: AKI Types                          │
│ ┌───────────────────────────────────────────────────┐  │
│ │         │ Prerenal │ ATN    │ AIN      │ Postrenal│  │
│ ├─────────┼──────────┼────────┼──────────┼──────────┤  │
│ │ FENa    │ <1%      │ >2%    │ Variable │ Variable │  │
│ │ Urine Na│ <20      │ >40    │ Variable │ Variable │  │
│ │ BUN/Cr  │ >20      │ <15    │ Variable │ Variable │  │
│ │ UA      │ Bland    │ Muddy  │ WBC casts│ Bland    │  │
│ │ Fluids  │ Improves │ No Δ   │ No Δ     │ No Δ     │  │
│ └───────────────────────────────────────────────────┘  │
│ 💡 FENa <1% with oliguria = prerenal until proven      │
│    otherwise                                            │
│                                                         │
│ 🔬 Diseases in this category (4):                      │
│ • Prerenal AKI → Most common (60-70%), reversible      │
│ • Acute Tubular Necrosis → Muddy brown casts           │
│ • Acute Interstitial Nephritis → Drug-induced          │
│ • Postrenal AKI → Obstruction, hydronephrosis          │
└─────────────────────────────────────────────────────────┘
```

### Presentation Page Layout (FUTURE)

```
┌─────────────────────────────────────────────────────────┐
│ 🔍 Oliguria                                             │
├─────────────────────────────────────────────────────────┤
│ Definition: Urine output <400 mL/day or <0.5 mL/kg/hr  │
│             for ≥6 hours                                │
│                                                         │
│ ⚠️ Emergent Causes (rule out first!)                   │
│ • Bilateral renal artery occlusion                      │
│ • Postrenal obstruction in single kidney               │
│ • Severe ATN from shock                                │
│                                                         │
│ 📋 Differential Diagnosis by Category                  │
│                                                         │
│ Prerenal (60%)                                          │
│ 🔑 Clues: FENa <1%, BUN/Cr >20, concentrated urine,    │
│           improves with fluids                          │
│ → Prerenal AKI                                          │
│                                                         │
│ Intrarenal (35%)                                        │
│ 🔑 Clues: FENa >2% (ATN), WBC casts (AIN),             │
│           RBC casts (GN)                                │
│ → ATN, Acute Interstitial Nephritis, Acute GN          │
│                                                         │
│ Postrenal (5%)                                          │
│ 🔑 Clues: Hydronephrosis on ultrasound,                │
│           bladder distension                            │
│ → Postrenal AKI                                         │
│                                                         │
│ 🔬 Initial Workup                                       │
│ • BMP (Cr, BUN, K+)                                    │
│ • Urinalysis (casts, protein, blood)                   │
│ • Urine electrolytes (FENa, urine Na)                  │
│ • Renal ultrasound (hydronephrosis)                    │
│ • Bladder scan (if BPH suspected)                      │
└─────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 1: Learning Tools in Categories ✅ (CURRENT)
- Extend category schema to support `comparisonTables`, `algorithms`, `keyDifferentiations`
- Add comparison tables to high-yield categories (AKI types, RTA types, nephrotic vs nephritic)
- Render as formatted tables in category detail pages
- No data loader changes needed (just accessing `category.detail.*`)

### Phase 2: Enhanced UI Rendering (NEXT)
- Create React/Vue components for different table types:
  - `<ComparisonTable>` - Feature comparison
  - `<Matrix2x2>` - Contingency table
  - `<Algorithm>` - Flowchart
  - `<Differentiation>` - Side-by-side comparison
- Add icons/formatting for visual distinction
- Mobile-responsive tables

### Phase 3: Presentation Pages (FUTURE)
- Create presentation disease objects (`pageType: "presentation"`)
- Add to data loader with new indexes
- Create UI section for presentations (separate from diseases)
- Implement bidirectional linking (diseases ↔ presentations)

### Phase 4: Cross-Linking & Search (FUTURE)
- Click disease name in comparison table → navigate to disease page
- Click symptom tag → see all diseases with that symptom
- Global search includes presentations
- "Related presentations" section on disease pages

---

## Best Practices

### When to use each learning tool:

1. **Comparison Tables** - When differentiating 3+ similar diseases
   - Example: AKI types, RTA types, anemias by MCV

2. **2x2 Matrices** - When diagnosis depends on 2 binary variables
   - Example: Schizoaffective diagnosis, hypercalcemia etiology

3. **Algorithms** - When workup follows a decision tree
   - Example: AKI workup, hyponatremia workup, anemia workup

4. **Differentiation** - When comparing 2 major categories
   - Example: Nephrotic vs nephritic, restrictive vs obstructive lung disease

### Content Guidelines:

- **Comparison tables**: Focus on high-yield distinguishing features (5-8 features max)
- **Clinical pearls**: Add after table for "the trick to remember"
- **Keep it visual**: Tables should be scannable in <30 seconds
- **Link to diseases**: Use disease IDs so UI can create clickable links
- **Step 1 focus**: Include what's testable, not comprehensive clinical medicine

---

## Future Enhancements

1. **Mnemonics section** in categories/diseases
2. **Images/diagrams** embedded in learning tools
3. **Interactive algorithms** (click through decision tree)
4. **Spaced repetition** integration (flag tables/differentiations for review)
5. **User annotations** (personal notes on comparison tables)
6. **Export to Anki** (generate flashcards from comparison tables)

---

## Example Files

See implementations in:
- `/data/systems/` - System definitions
- `/data/categories/renal-categories.js` - Categories with learning tools
- `/data/diseases/renal-diseases.js` - Disease definitions
- `/data-loader.js` - Data loading and indexing logic

# Data Schema Documentation

Complete TypeScript-style schema definitions for all content types.

## Core Content Types

### System

```typescript
interface System {
  id: string;                    // "renal", "cardiovascular"
  name: string;                  // "Renal", "Cardiovascular"
  categoryIds: string[];         // ["acute-kidney-injury", "ckd", ...]
  pageType: "system";
  detail: {
    overview: string;            // High-level description of the system
    keyAnatomy: string[];        // Important anatomical concepts
    commonThemes: string[];      // Cross-cutting clinical themes
  };
}
```

### Category

```typescript
interface Category {
  id: string;                    // "acute-kidney-injury"
  name: string;                  // "Acute Kidney Injury (AKI)"
  system: string;                // "renal"
  type: "category";
  diseaseIds: string[];          // ["prerenal-aki", "atn", ...]
  pageType: "category";
  detail: {
    approach: string;            // Clinical approach to the category
    redFlags: string[];          // Warning signs requiring urgent action
    initialWorkup: string[];     // Diagnostic approach
    differentialCategories: string[]; // Framework for differential diagnosis

    // Learning tools (NEW)
    comparisonTables?: ComparisonTable[];
    algorithms?: Algorithm[];
    keyDifferentiations?: Differentiation[];
  };
}
```

### Disease

```typescript
interface Disease {
  id: string;                    // "prerenal-aki"
  name: string;                  // "Prerenal Acute Kidney Injury"
  system: string;                // "renal"
  categories: string[];          // ["acute-kidney-injury"]
  symptoms: string[];            // ["oliguria", "fatigue", ...]
  tags: string[];                // ["aki", "prerenal", "reversible"]
  severity: "mild" | "moderate" | "severe";
  acuity: "acute" | "chronic";
  pageType: "disease";
  detail: {
    definition: string;
    pathophysiology: string;
    epidemiology: string;
    riskFactors: string[];
    presentation: string[];
    physicalExam: string[];
    diagnosticCriteria: string;
    labs: string[];
    imaging: string[];
    differentialDiagnosis: string[];
    management: {
      acute: string[];
      chronic: string[];
    };
    complications: string[];
    prognosis: string;
    clinicalPearls: string[];
  };
}
```

### Presentation (FUTURE)

```typescript
interface Presentation {
  id: string;                    // "oliguria"
  name: string;                  // "Oliguria"
  system: string;                // "renal"
  categories: string[];          // ["acute-kidney-injury"]
  pageType: "presentation";
  detail: {
    definition: string;          // Clinical definition
    emergentCauses: string[];    // Life-threatening causes to rule out
    differentialByCategory: {
      [category: string]: {
        diseases: string[];      // Disease IDs
        clues: string;           // Key distinguishing features
      };
    };
    initialWorkup: string[];
    clinicalPearls: string[];
  };
}
```

---

## Learning Tools

### Comparison Table

```typescript
interface ComparisonTable {
  title: string;                 // "Prerenal vs ATN vs AIN vs Postrenal AKI"
  subtitle?: string;             // Optional subtitle
  type: "feature-comparison";
  diseases: string[];            // Disease IDs being compared
  features: Feature[];
  clinicalPearl?: string;        // Memory aid
}

interface Feature {
  name: string;                  // "FENa", "Urinalysis"
  values: string[];              // One per disease (same order as diseases array)
  note?: string;                 // Optional caveat or explanation
}
```

**Example:**
```javascript
{
  title: "AKI Types",
  type: "feature-comparison",
  diseases: ["prerenal-aki", "atn", "ain", "postrenal-aki"],
  features: [
    {
      name: "FENa",
      values: ["<1%", ">2%", "Variable", "Variable"],
      note: "Less reliable if on diuretics"
    }
  ],
  clinicalPearl: "FENa <1% = prerenal"
}
```

### 2x2 Matrix

```typescript
interface Matrix2x2 {
  title: string;
  subtitle?: string;
  type: "2x2-matrix";
  rowHeaders: [string, string];   // Two row labels
  colHeaders: [string, string];   // Two column labels
  cells: [
    [string, string],             // Row 1: [cell 1,1, cell 1,2]
    [string, string]              // Row 2: [cell 2,1, cell 2,2]
  ];
  notes?: string[];               // Additional explanations
  clinicalPearl?: string;
}
```

**Example:**
```javascript
{
  title: "Schizoaffective Diagnosis",
  type: "2x2-matrix",
  rowHeaders: ["Bipolar features", "Depressive features"],
  colHeaders: ["Mood first", "Psychosis first"],
  cells: [
    ["Bipolar I with psychosis", "Schizoaffective bipolar"],
    ["MDD with psychosis", "Schizoaffective depressive"]
  ],
  notes: ["Requires ≥2 weeks psychosis without mood"],
  clinicalPearl: "Timeline determines diagnosis"
}
```

### Algorithm

```typescript
interface Algorithm {
  title: string;
  type: "algorithm";
  description?: string;
  startNode: string;              // ID of starting node
  nodes: {
    [nodeId: string]: AlgorithmNode;
  };
  clinicalPearl?: string;
}

interface AlgorithmNode {
  label: string;                  // Node title
  details?: string;               // Additional info
  action?: string;                // What to do at this step
  question?: string;              // Decision point
  diagnosis?: string;             // Disease ID if terminal node
  treatment?: string;             // Management if terminal node
  branches?: Branch[];            // Paths to next nodes
}

interface Branch {
  condition: string;              // "FENa <1%", "Hydronephrosis present"
  next?: string;                  // Next node ID (if not terminal)
  diagnosis?: string;             // Disease ID (if terminal)
  treatment?: string;             // Management (if terminal)
  note?: string;                  // Additional info
}
```

**Example:**
```javascript
{
  title: "AKI Diagnostic Algorithm",
  type: "algorithm",
  startNode: "aki-detected",
  nodes: {
    "aki-detected": {
      label: "AKI detected",
      action: "Check urine output",
      branches: [
        {condition: "Anuria", next: "check-obstruction"},
        {condition: "Oliguria", next: "check-fena"}
      ]
    },
    "check-fena": {
      label: "Check FENa",
      branches: [
        {
          condition: "FENa <1%",
          diagnosis: "prerenal-aki",
          treatment: "IV fluids"
        }
      ]
    }
  }
}
```

### Key Differentiation

```typescript
interface Differentiation {
  title: string;
  type: "differentiation";
  summary: string;                // High-level comparison
  keyDistinction: string;         // Main differentiating feature
  comparisonPoints: ComparisonPoint[];
  diseases: {
    [category: string]: string[]; // Disease IDs by category
  };
  overlap?: string;               // Exceptions or mixed presentations
  clinicalPearl?: string;
}

interface ComparisonPoint {
  feature: string;                // "Pathophysiology", "Proteinuria"
  [category: string]: string;     // One entry per category being compared
}
```

**Example:**
```javascript
{
  title: "Nephrotic vs Nephritic",
  type: "differentiation",
  summary: "Podocyte injury vs glomerular inflammation",
  keyDistinction: "Nephrotic = >3.5g protein, Nephritic = RBC casts",
  comparisonPoints: [
    {
      feature: "Proteinuria",
      nephrotic: ">3.5 g/day",
      nephritic: "<3.5 g/day"
    }
  ],
  diseases: {
    nephrotic: ["minimal-change", "fsgs"],
    nephritic: ["iga-nephropathy", "post-infectious-gn"]
  },
  overlap: "MPGN can have both features"
}
```

---

## Data Loader Methods

### Existing Methods
```typescript
// Core getters
getSystem(systemId: string): System | undefined
getCategory(categoryId: string): Category | undefined
getDisease(diseaseId: string): Disease | undefined

// Get all
getAllSystems(): System[]
getAllCategories(): Category[]
getAllDiseases(): Disease[]

// Navigation
getDiseasesForCategory(categoryId: string): Disease[]
getDiseasesForSystem(systemId: string): Disease[]
getCategoriesForSystem(systemId: string): Category[]

// Search
search(query: string): SearchResult[]
getDiseasesWithTag(tag: string): Disease[]
getDiseasesWithSymptom(symptom: string): Disease[]

// Filtering
filterDiseases(filters: FilterOptions): Disease[]

// Stats
getStats(): Stats
getAllTags(): string[]
getAllSymptoms(): string[]
```

### New Methods for Learning Tools
```typescript
// Category learning tools
getCategoryComparisonTables(categoryId: string): ComparisonTable[]
getCategoryAlgorithms(categoryId: string): Algorithm[]
getCategoryDifferentiations(categoryId: string): Differentiation[]

// Get all learning tools across system
getSystemComparisonTables(systemId: string): ComparisonTable[]
getSystemAlgorithms(systemId: string): Algorithm[]

// Search learning tools
searchComparisonTables(query: string): ComparisonTable[]
```

### Future Methods for Presentations
```typescript
// Presentations
getAllPresentations(): Presentation[]
getPresentationsForSystem(systemId: string): Presentation[]
getPresentation(presentationId: string): Presentation | undefined
getDiseasesForPresentation(presentationId: string): Disease[]

// Bidirectional linking
getPresentationsForDisease(diseaseId: string): Presentation[]
```

---

## Type Definitions Summary

```typescript
// Content types
type PageType = "system" | "category" | "disease" | "presentation";
type Severity = "mild" | "moderate" | "severe";
type Acuity = "acute" | "chronic";

// Learning tool types
type LearningToolType =
  | "feature-comparison"
  | "2x2-matrix"
  | "algorithm"
  | "differentiation";

// All content
type Content = System | Category | Disease | Presentation;

// All learning tools
type LearningTool =
  | ComparisonTable
  | Matrix2x2
  | Algorithm
  | Differentiation;
```

---

## Validation Rules

### Disease
- `id`: Lowercase, kebab-case, unique globally
- `system`: Must reference valid system ID
- `categories`: All must reference valid category IDs in same system
- `symptoms`: Lowercase, kebab-case for indexing
- `tags`: Lowercase, kebab-case for indexing
- `management`: Must have both `acute` and `chronic` arrays

### Category
- `diseaseIds`: All must reference valid disease IDs
- Disease IDs should match diseases where `disease.categories` includes this category

### Learning Tools
- `diseases` array in ComparisonTable: All must reference valid disease IDs
- `features.values` array: Length must match `diseases` array length
- `cells` in Matrix2x2: Must be 2x2 array (2 rows, 2 columns)
- `startNode` in Algorithm: Must exist in `nodes` object

---

## File Organization

```
data/
├── systems/
│   ├── systems.js (all systems export)
│   └── renal-system.js
├── categories/
│   ├── renal-categories.js
│   ├── cardiovascular-categories.js
│   └── ...
├── diseases/
│   ├── renal-diseases.js
│   ├── cardiovascular-diseases.js
│   ├── hematology-oncology-diseases.js
│   └── ...
└── presentations/ (FUTURE)
    ├── renal-presentations.js
    └── ...
```

---

## Naming Conventions

### IDs
- Systems: `renal`, `cardiovascular`, `respiratory`
- Categories: `acute-kidney-injury`, `chronic-kidney-disease`
- Diseases: `prerenal-aki`, `acute-tubular-necrosis`
- Presentations: `oliguria`, `hematuria`, `chest-pain`

### Names (Display)
- Systems: "Renal", "Cardiovascular"
- Categories: "Acute Kidney Injury (AKI)"
- Diseases: "Prerenal Acute Kidney Injury"
- Presentations: "Oliguria"

### Arrays
- Symptoms: `["oliguria", "fatigue", "confusion"]`
- Tags: `["aki", "prerenal", "reversible"]`
- Both use lowercase, kebab-case for consistency

---

## Migration Notes

### Adding Learning Tools to Existing Categories

1. **Locate category file**: `/data/categories/[system]-categories.js`
2. **Find category object**: Search for `id: "category-id"`
3. **Add to detail object**:
   ```javascript
   detail: {
     approach: "...",
     redFlags: [...],

     // ADD HERE
     comparisonTables: [
       { /* comparison table */ }
     ],

     // or
     algorithms: [
       { /* algorithm */ }
     ],

     // or
     keyDifferentiations: [
       { /* differentiation */ }
     ]
   }
   ```

### Creating Presentations (Future)

1. Create file: `/data/presentations/[system]-presentations.js`
2. Follow Presentation interface schema
3. Update data-loader.js to import presentations
4. Build presentation indexes in data loader
5. Update UI to display presentation pages

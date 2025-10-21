# V3 Graph-Based Data Model

## Overview
Diseases are stored in a flat library with metadata (tags, categories, symptoms). Navigation structures reference diseases by ID, allowing diseases to appear in multiple places.

## Core Entities

### 1. Disease
The atomic unit of medical content.

```javascript
{
    id: "aortic-dissection",           // Unique identifier (kebab-case)
    name: "Aortic Dissection",         // Display name
    system: "cardiovascular",          // Organ system
    categories: [                      // Categories this appears in
        "chest-pain",
        "vascular-disease"
    ],
    symptoms: [                        // Associated symptoms
        "chest-pain",
        "back-pain"
    ],
    tags: [                           // Searchable tags
        "emergency",
        "surgical",
        "aortic",
        "cardiovascular"
    ],
    severity: "high",                 // Optional: high/medium/low
    acuity: "acute",                  // Optional: acute/chronic
    pageType: "disease",
    detail: {
        definition: "...",
        pathophysiology: "...",
        // ... full content
    }
}
```

### 2. Category
A grouping of diseases (can be symptom, syndrome, anatomical, etc.)

```javascript
{
    id: "chest-pain",
    name: "Chest Pain",
    system: "cardiovascular",
    type: "symptom",                  // symptom|syndrome|anatomical|category
    diseaseIds: [                     // References to diseases
        "aortic-dissection",
        "stemi",
        "pericarditis"
    ],
    pageType: "category",
    detail: {
        approach: "...",
        redFlags: [...],
        initialWorkup: [...],
        differentialCategories: [...]
    }
}
```

### 3. System
Top-level organ system

```javascript
{
    id: "cardiovascular",
    name: "Cardiovascular",
    categoryIds: [                    // References to categories
        "chest-pain",
        "dyspnea",
        "syncope-palpitations",
        "valvular-disease"
    ],
    pageType: "system",
    detail: {
        overview: "...",
        keyAnatomy: [...],
        commonThemes: [...]
    }
}
```

## Data Files Structure

```
v3-graph-based/
├── data/
│   ├── diseases/
│   │   ├── cv-diseases.js           # All cardiovascular diseases (flat array)
│   │   └── [future: resp-diseases.js, gi-diseases.js, etc.]
│   ├── categories/
│   │   ├── cv-categories.js         # CV categories/symptoms/syndromes
│   │   └── [future: resp-categories.js, etc.]
│   ├── systems/
│   │   └── systems.js               # All organ systems
│   └── data-loader.js               # Indexes and builds navigation structures
```

## Indexes (Built by data-loader.js)

```javascript
// Fast lookups
const diseaseIndex = {
    "aortic-dissection": { /* disease object */ }
};

const categoryIndex = {
    "chest-pain": { /* category object */ }
};

const systemIndex = {
    "cardiovascular": { /* system object */ }
};

// Reverse indexes for queries
const diseasesByCategory = {
    "chest-pain": [/* array of disease objects */]
};

const diseasesByTag = {
    "emergency": [/* array of disease objects */]
};

const diseasesBySystem = {
    "cardiovascular": [/* array of disease objects */]
};
```

## View Modes

### 1. System View (Hierarchical)
```
Cardiovascular
├── Chest Pain
│   ├── Aortic Dissection
│   ├── STEMI
│   └── Pericarditis
├── Vascular Disease
│   ├── Aortic Dissection (same disease, different view)
│   └── AAA
```

### 2. Symptom View
```
Chest Pain
├── Aortic Dissection
├── STEMI
Back Pain
├── Aortic Dissection (appears here too)
```

### 3. Tag View
```
Emergency
├── Aortic Dissection
├── STEMI
├── Cardiac Tamponade
Surgical
├── Aortic Dissection (appears here too)
```

### 4. Alphabetical List
```
A
├── AAA
├── Aortic Dissection
S
├── STEMI
```

## Search Strategy

Searches across:
1. Disease name
2. Category names
3. Tags
4. Detail content (definition, clinical pearls, etc.)

Results grouped by relevance:
- Exact name match
- Tag match
- Content match

## Migration from V2

V2 → V3 mapping:
- Each v2 disease → v3 disease with metadata
- V2 category "children" → v3 category "diseaseIds"
- V2 nested structure → v3 flat with references
- Add: id, categories, symptoms, tags fields

## Benefits

✅ Diseases can appear in multiple categories
✅ Flexible filtering by tags, symptoms, severity
✅ Multiple view modes
✅ Easy to add new categorization axes
✅ Scalable for many organ systems
✅ Natural cross-referencing

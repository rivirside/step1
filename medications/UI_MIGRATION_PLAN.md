# Medication UI Migration Plan - Phase 2

## Overview

Migrate the medications UI from using monolithic `drugData` array to modular `dataLoader` architecture.

## Current Architecture Analysis

### Data Structure (OLD)
```javascript
const drugData = [
    {
        system: 'Cardiovascular System',
        therapeutic_classes: [
            {
                name: 'Antihypertensives',
                pharma_classes: [
                    {
                        name: 'ACE Inhibitors',
                        mechanism: '...',
                        side_effects: [...],
                        interactions: '...',
                        drugs: [
                            {name: 'Lisinopril', features: '...', ...}
                        ]
                    }
                ]
            }
        ]
    }
]
```

### New Architecture
```javascript
import dataLoader from './data-loader.js';

await dataLoader.load();

// Access via DataLoader API:
const systems = dataLoader.getSystems();
const classes = dataLoader.getClassesBySystem('cardiovascular-system');
const drugs = dataLoader.getDrugsByPharmacologicClass('ace-inhibitors');
```

## Migration Strategy

### 1. Key drugData References to Replace

| Location | Old Code | New Code |
|----------|----------|----------|
| Initialization | `drugData.forEach(system => ...)` | `dataLoader.getSystems().forEach(system => ...)` |
| System access | `drugData[0]` | `dataLoader.getSystems()[0]` |
| Drug iteration | Nested loops through therapeutic_classes → pharma_classes → drugs | `dataLoader.getDrugsBySystem(systemId)` |
| Search | Manual iteration + filtering | `dataLoader.search(query)` |

### 2. Data Structure Mapping

#### OLD → NEW Field Mapping

**System Level**:
- `system.system` → `system.name`
- `system.therapeutic_classes` → `dataLoader.getTherapeuticClassesBySystem(system.id)`

**Therapeutic Class Level**:
- `therapeuticClass.name` → `therapeuticClass.name` (same)
- `therapeuticClass.pharma_classes` → `dataLoader.getPharmacologicClassesByTherapeuticClass(therapeuticClass.id)`

**Pharmacologic Class Level**:
- `pharmaClass.name` → `pharmaClass.name` (same)
- `pharmaClass.mechanism` → `pharmaClass.mechanism` (same)
- `pharmaClass.side_effects` → `pharmaClass.sideEffects` ⚠️ (camelCase)
- `pharmaClass.drugs` → `dataLoader.getDrugsByPharmacologicClass(pharmaClass.id)`

**Drug Level**:
- `drug.name` → `drug.name` (same)
- `drug.indications` → `drug.indications` (same)
- `drug.contraindications` → `drug.contraindications` (same)
- Drug side effects come from parent pharmaClass → `drug.sideEffects`
- Drug mechanism comes from parent pharmaClass → `drug.mechanism`

### 3. UI Components to Update

#### A. Column Creation (`createColumn`)
- Current: Receives `drugData` directly
- New: Receives systems from `dataLoader.getSystems()`

#### B. Flatten Function
```javascript
// OLD
function flattenDrugData() {
    searchableData = [];
    drugData.forEach(system => {
        system.therapeutic_classes.forEach(tc => {
            tc.pharma_classes.forEach(pc => {
                pc.drugs.forEach(drug => {
                    searchableData.push({...});
                });
            });
        });
    });
}

// NEW
function flattenDrugData() {
    searchableData = dataLoader.getDrugs().map(drug => ({
        drugName: drug.name,
        drugClass: drug.pharmacologicClass,
        indications: drug.indications || [],
        pointers: {
            system: dataLoader.getSystemById(drug.system),
            drug: drug
        }
    }));
}
```

#### C. Search Functions
```javascript
// OLD
function searchByIndication(indication) {
    // Manual filtering through nested structure
}

// NEW
function searchByIndication(indication) {
    return dataLoader.searchDrugsByIndication(indication);
}
```

#### D. Show Drug Details
```javascript
// OLD - drug data spread across pharmaClass
function showDrugDetails(drug, pharmaClass) {
    // mechanism from pharmaClass.mechanism
    // sideEffects from pharmaClass.side_effects
}

// NEW - drug has all data
function showDrugDetails(drug) {
    // mechanism from drug.mechanism
    // sideEffects from drug.sideEffects
}
```

### 4. Comparison Selection Restoration
```javascript
// OLD
comparisonSelection.forEach(item => {
    const { systemIndex, tcIndex, pcIndex, drugIndex } = item;
    const system = drugData[systemIndex];
    const tc = system.therapeutic_classes[tcIndex];
    const pc = tc.pharma_classes[pcIndex];
    const drug = pc.drugs[drugIndex];
});

// NEW
comparisonSelection.forEach(item => {
    const drug = dataLoader.getDrugById(item.drugId);
    const pharmaClass = dataLoader.getClassById(drug.pharmacologicClass);
    // ... use drug and pharmaClass
});
```

### 5. State Management Updates

#### OLD Selection State
```javascript
{
    systemIndex: 0,
    tcIndex: 1,
    pcIndex: 2,
    drugIndex: 3
}
```

#### NEW Selection State
```javascript
{
    systemId: 'cardiovascular-system',
    therapeuticClassId: 'antihypertensives',
    pharmacologicClassId: 'ace-inhibitors',
    drugId: 'lisinopril'
}
```

## Implementation Steps

### Step 1: Create New Script Structure
1. Create `script-v2.js` with ES6 module imports
2. Import dataLoader
3. Initialize dataLoader on page load
4. Keep all existing UI functions intact

### Step 2: Adapter Layer (Temporary)
Create adapter functions to ease migration:
```javascript
// Adapters for backward compatibility during migration
const adapters = {
    getSystemData: (systemId) => {
        const system = dataLoader.getSystemById(systemId);
        const therapeuticClasses = dataLoader.getTherapeuticClassesBySystem(systemId);

        return {
            system: system.name,
            therapeutic_classes: therapeuticClasses.map(tc => ({
                name: tc.name,
                pharma_classes: dataLoader.getPharmacologicClassesByTherapeuticClass(tc.id).map(pc => ({
                    name: pc.name,
                    mechanism: pc.mechanism,
                    side_effects: pc.sideEffects,
                    interactions: pc.interactions,
                    drugs: dataLoader.getDrugsByPharmacologicClass(pc.id)
                }))
            }))
        };
    }
};
```

### Step 3: Progressive Migration
1. ✅ Initialize dataLoader
2. ✅ Update search functions (easiest - direct mapping)
3. ✅ Update column creation
4. ✅ Update drug detail display
5. ✅ Update comparison mode
6. ✅ Remove adapter layer
7. ✅ Test all features

### Step 4: Testing Checklist
- [ ] Reference View displays systems correctly
- [ ] Learning View displays 3-column progression
- [ ] Clicking system shows therapeutic classes
- [ ] Clicking therapeutic class shows pharmacologic classes
- [ ] Clicking pharmacologic class shows drugs
- [ ] Drug cards display all information correctly
- [ ] Search by drug name works
- [ ] Search by indication works
- [ ] Search by contraindication works
- [ ] Search by side effect works
- [ ] Search by mechanism works
- [ ] Search by class works
- [ ] Compare mode can add drugs
- [ ] Compare mode displays side-by-side correctly
- [ ] Navigation between views works
- [ ] Layout toggle works
- [ ] Back buttons work
- [ ] State preservation works

## Risk Mitigation

### Backup Strategy
1. Keep `script.js` as `script-old.js`
2. Build `script-v2.js` alongside
3. Update index.html to use script-v2.js only when ready
4. Can quickly rollback by changing one line in HTML

### Testing Strategy
1. Create `index-v2.html` for testing new version
2. Run both versions side-by-side
3. Compare behavior
4. Only replace when 100% feature parity

## Performance Considerations

### OLD Performance
- Load entire 4000-line file
- Parse nested structure every search
- Manual iteration

### NEW Performance
- Load modular data (lazy loading possible in future)
- Indexed lookups O(1)
- Pre-built search indexes
- **Expected**: 2-5x faster searches, instant lookups

## Success Criteria

✅ All existing features work identically
✅ No visual changes to UI
✅ Same or better performance
✅ Cleaner, more maintainable code
✅ Ready for integration with conditions platform

## Timeline

- **Hours 1-2**: Build new script structure with dataLoader
- **Hours 3-4**: Update all data access points
- **Hours 5-6**: Testing and debugging
- **Hour 7**: Final verification and documentation

**Total estimated time**: 6-8 hours

Let's do this! 🚀

# Step 1 Differential Diagnosis Tool - V3 Graph-Based

## Overview

V3 is a complete rewrite using a graph-based architecture that allows diseases to appear in multiple categories without duplication. This solves the key limitation of v2's strict tree structure.

## Key Features

### Architecture
- **Graph-based data model**: Diseases stored once, referenced by multiple categories
- **ES6 modules**: Modern JavaScript with import/export
- **Modular data loading**: Centralized DataLoader class with indexing
- **Three-tier hierarchy**: Systems → Categories → Diseases

### Data
- **74 Total Diseases**: 44 Cardiovascular + 30 Respiratory
- **2 Complete Organ Systems**: Cardiovascular and Respiratory
- **Comprehensive Step 1 content**: 13 sections per disease
  - Definition, Pathophysiology, Epidemiology
  - Risk Factors, Presentation, Physical Exam
  - Diagnostic Criteria, Labs, Imaging
  - Differential Diagnosis, Management (Acute/Chronic)
  - Complications, Prognosis, Clinical Pearls
- **Cross-category references**: Diseases like Aortic Dissection appear in both "Chest Pain" and "Vascular Disease"

### UI Features
- **Interactive tree navigation**: Expandable/collapsible nodes
- **Real-time search**: Searches diseases, categories, and systems
- **Rich detail panels**: System, category, and disease views
- **Severity indicators**: Color-coded (high/medium/low)
- **Responsive design**: Works on desktop and mobile

### Technical Implementation
- **DataLoader class**: Handles all data loading and indexing
- **Index structures**:
  - Primary indexes by ID (systems, categories, diseases)
  - Reverse indexes (diseases by category, tag, symptom, system)
- **Search functionality**: Weighted scoring across multiple fields
- **Filter capability**: By severity, acuity, system, category, tag, symptom

## File Structure

```
v3-graph-based/
├── index.html              # Main HTML (loads script.js as module)
├── styles.css              # Complete styling (706 lines)
├── script.js               # Main application logic
├── data-loader.js          # Data loading and indexing
├── data/
│   ├── systems/
│   │   └── systems.js      # System definitions (2: CV + Respiratory)
│   ├── categories/
│   │   ├── cv-categories.js          # CV category definitions (8)
│   │   └── respiratory-categories.js # Respiratory category definitions (10)
│   └── diseases/
│       ├── cv-diseases.js          # CV disease library (44 diseases)
│       └── respiratory-diseases.js # Respiratory disease library (30 diseases)
├── data-model.md           # Architecture documentation
└── README.md               # This file
```

## Categories

### Cardiovascular System (44 diseases)
1. **Chest Pain (8)**: STEMI, NSTEMI, Unstable Angina, Stable Angina, Pericarditis, Myocarditis, Aortic Dissection, Costochondritis
2. **Dyspnea (5)**: HFrEF, HFpEF, Acute Decompensated HF, Pulmonary Edema, Cardiogenic Shock
3. **Syncope & Palpitations (10)**: Atrial Fibrillation, Atrial Flutter, Ventricular Tachycardia, SVT, Ventricular Fibrillation, 1st/2nd/3rd Degree AV Block, Sick Sinus Syndrome
4. **Valvular Disease (6)**: Aortic Stenosis/Regurgitation, Mitral Stenosis/Regurgitation/Prolapse, Tricuspid Regurgitation
5. **Hypertension (3)**: Essential Hypertension, Hypertensive Emergency, Secondary Hypertension
6. **Cardiomyopathies (4)**: Dilated, Hypertrophic, Restrictive, Takotsubo
7. **Pericardial Disease (3)**: Pericarditis, Pericardial Effusion, Cardiac Tamponade
8. **Vascular Disease (4)**: Aortic Dissection, AAA, PAD, DVT

### Respiratory System (30 diseases)
1. **Dyspnea (Respiratory) (9)**: Asthma, COPD, Pulmonary Embolism, Pneumothorax, Pleural Effusion, ARDS, Pulmonary Hypertension, IPF, Sarcoidosis
2. **Cough (10)**: Acute Bronchitis, Asthma, COPD, CAP, HAP, TB, NSCLC, SCLC, Bronchiectasis, IPF
3. **Hemoptysis (8)**: TB, NSCLC, SCLC, Bronchiectasis, PE, CAP, Lung Abscess, Goodpasture Syndrome (referenced), Carcinoid Tumor
4. **Wheezing & Stridor (4)**: Asthma, COPD, Bronchiolitis, Anaphylaxis
5. **Obstructive Lung Disease (5)**: Asthma, COPD, Bronchiectasis, Cystic Fibrosis, Bronchiolitis
6. **Restrictive Lung Disease (6)**: IPF, Sarcoidosis, Hypersensitivity Pneumonitis, Asbestosis, Silicosis, ARDS
7. **Infectious Lung Disease (8)**: CAP, HAP/VAP, Aspiration Pneumonia, TB, Mycoplasma, Legionella, Chlamydia Pneumoniae, Lung Abscess
8. **Pulmonary Vascular Disease (2)**: Pulmonary Embolism, Pulmonary Hypertension
9. **Lung Neoplasms (4)**: NSCLC, SCLC, Mesothelioma, Carcinoid Tumor
10. **Pleural Disease (5)**: Pneumothorax, Pleural Effusion, Hemothorax, Acute Bronchitis, Anaphylaxis

*Note: Diseases appear in multiple categories (e.g., Asthma in Dyspnea, Cough, Wheezing, and Obstructive Disease)*

## Usage

### Running Locally
1. Start a local web server:
   ```bash
   cd v3-graph-based
   python3 -m http.server 8000
   ```
2. Open browser to `http://localhost:8000`

### Navigation
- Click on **System name** to expand/collapse categories
- Click on **Category name** to expand/collapse diseases
- Click on **Disease name** to view full details
- Use **Search box** to find any disease, category, or system
- **Severity indicators**: 🔴 High (red), 🟠 Medium (orange), 🟢 Low (green)

## Advantages Over V2

### V2 Limitations (Tree-Based)
- ❌ Diseases could only appear in one category
- ❌ Required duplication for diseases in multiple categories
- ❌ Harder to maintain (changes needed in multiple places)
- ❌ No cross-referencing capability

### V3 Advantages (Graph-Based)
- ✅ Diseases appear in multiple categories without duplication
- ✅ Single source of truth for each disease
- ✅ Easy to maintain and update
- ✅ Natural cross-referencing
- ✅ Flexible filtering and searching
- ✅ Extensible for future features (tags, symptoms, etc.)

## Future Enhancements

### Planned Features
- [ ] Multiple view modes (tree, grid, list, tag cloud)
- [ ] Advanced filtering (by severity, acuity, tags, symptoms)
- [ ] Bookmark/favorite diseases
- [ ] Comparison view (compare 2+ diseases side-by-side)
- [ ] Print-friendly formatting
- [ ] Export to PDF/Anki

### Future Systems
- [x] ~~Respiratory~~ (COMPLETED - 30 diseases)
- [ ] Gastrointestinal
- [ ] Neurological
- [ ] Renal
- [ ] Endocrine
- [ ] Hematology/Oncology
- [ ] Infectious Disease
- [ ] Musculoskeletal
- [ ] Dermatology

## Development

### Adding a New Disease
1. Open `data/diseases/cv-diseases.js`
2. Add disease object following the established pattern:
```javascript
{
    id: "disease-id",
    name: "Disease Name",
    system: "cardiovascular",
    categories: ["category-1", "category-2"], // Can be multiple!
    symptoms: ["symptom-1", "symptom-2"],
    tags: ["tag1", "tag2"],
    severity: "high|medium|low",
    acuity: "acute|chronic",
    pageType: "disease",
    detail: {
        definition: "...",
        pathophysiology: "...",
        // ... all 13 sections
    }
}
```
3. Add disease ID to appropriate category's `diseaseIds` array in `data/categories/cv-categories.js`
4. Reload page - DataLoader automatically indexes the new disease

### Adding a New Category
1. Open `data/categories/cv-categories.js`
2. Add category object with `diseaseIds` array
3. Add category ID to system's `categoryIds` array in `data/systems/systems.js`
4. Reload page

## Technical Notes

- **No build process required**: Pure vanilla JavaScript
- **No frameworks**: Just HTML, CSS, JavaScript
- **ES6 modules**: Modern import/export syntax
- **Class-based architecture**: DataLoader singleton pattern
- **Efficient indexing**: O(1) lookups by ID, fast category/tag/symptom filtering
- **Browser compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Stats

- **Total Systems**: 2 (Cardiovascular, Respiratory)
- **Total Categories**: 18 (8 CV + 10 Respiratory)
- **Total Diseases**: 74 (44 CV + 30 Respiratory)
- **Total Tags**: ~100+
- **Total Symptoms**: ~60+
- **Lines of Code**: ~8,500+
- **Disease Content**: ~3,700+ lines

## Credits

Built for USMLE Step 1 preparation. All content is Step 1-level medical knowledge.

Generated with assistance from Claude Code.

# Step 1 Differential Diagnosis Tool - V3 Graph-Based

**Project Status**: 46.1% Complete (228/495 diseases) | [📋 Full Roadmap](./ROADMAP.md) | [📊 Detailed Analysis](./ROADMAP-SUMMARY.md)

## Overview

V3 is a complete rewrite using a graph-based architecture that allows diseases to appear in multiple categories without duplication. This solves the key limitation of v2's strict tree structure.

**Current Focus**: Completing 495 comprehensive disease entries across 19 medical systems for USMLE Step 1 preparation.

## Key Features

### Architecture
- **Graph-based data model**: Diseases stored once, referenced by multiple categories
- **ES6 modules**: Modern JavaScript with import/export
- **Modular data loading**: Centralized DataLoader class with indexing
- **Three-tier hierarchy**: Systems → Categories → Diseases

### Data
- **495 Total Diseases** across 19 medical systems
- **5 Complete Systems** (100%): Cardiovascular (42), Hematology-Oncology (47), Psychiatry (44), Renal (38), Respiratory (30)
- **1 Near-Complete System** (75%): Gastrointestinal (27/36)
- **13 Systems In Development**: 267 diseases in placeholder stage
- **Comprehensive Step 1 content** (Level 3): 14 sections per complete disease
  - Core: Definition, Pathophysiology, Epidemiology, Risk Factors
  - Clinical: Presentation, Physical Exam, Diagnostic Criteria
  - Diagnostics: Labs, Imaging, Differential Diagnosis
  - Treatment: Management (Acute/Chronic), Complications, Prognosis
  - Learning: Clinical Pearls (5-10 high-yield USMLE points)
- **Cross-category references**: Diseases appear in multiple categories without duplication (graph-based architecture)

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

## Project Roadmap

### Current Status (October 2025)
**Overall Progress**: 46.1% complete (228/495 diseases at Level 3 - Comprehensive)

- ✅ **5 Systems Complete (100%)**: Cardiovascular (42), Hematology-Oncology (47), Psychiatry (44), Renal (38), Respiratory (30)
- 🟡 **1 System In Progress (75%)**: Gastrointestinal (27/36 complete, 9 remaining)
- 🔴 **13 Systems Need Work (0-25%)**: 267 diseases require expansion to comprehensive level

### Completion Standards

**Level 3 - Comprehensive (Target for all diseases):**
- 14 required fields per disease:
  - Core: definition, pathophysiology, epidemiology, riskFactors
  - Clinical: presentation, physicalExam, diagnosticCriteria
  - Diagnostics: labs, imaging, differentialDiagnosis
  - Treatment: management (acute + chronic), complications, prognosis
  - Learning: clinicalPearls (5-10 high-yield USMLE points)

### Work Phases

**Phase 1: Finish In-Progress** (Week 1)
- Complete 9 remaining GI diseases
- Target: 100% GI system completion

**Phase 2: High-Yield Systems** (Weeks 2-10) - ⭐ USMLE Priority
- Neurology: 33 diseases
- Infectious Disease: 24 diseases
- Endocrine: 22 diseases
- Rheumatology: 24 diseases

**Phase 3: Medium-Yield Systems** (Weeks 11-19)
- Musculoskeletal: 22 diseases
- ENT: 28 diseases
- Dermatology: 24 diseases
- Reproductive/OBGYN: 15 diseases

**Phase 4: Lower-Priority Systems** (Weeks 20-25)
- Genitourinary: 19 diseases
- Ophthalmology: 12 diseases
- Toxicology: 11 diseases
- Immunology: 9 diseases
- Pediatrics: 15 diseases

**Phase 5: Format Standardization** (Integrated)
- Convert 5 systems from single-line to multi-line format
- Ensure consistency across all files

**Phase 6: Category Pages** (Weeks 26-40)
- Create 150-200 comprehensive category landing pages
- Add clinical approach frameworks
- Add key differentiators for each category

### Detailed Documentation

For comprehensive project planning and execution details:
- **Master Roadmap**: See [`ROADMAP.md`](./ROADMAP.md) - Phase-by-phase breakdown with checkboxes
- **Analysis & Summary**: See [`ROADMAP-SUMMARY.md`](./ROADMAP-SUMMARY.md) - Methodology, findings, timeline estimates

### Estimated Timeline
- **Total remaining work**: ~293 hours
- **At 4-6 hours/week**: 40-50 weeks (~11 months)
- **At focused sprint**: 14-20 weeks (~4 months)

### Future Enhancements (Post-Completion)
- [ ] Multiple view modes (tree, grid, list, tag cloud)
- [ ] Advanced filtering (by severity, acuity, tags, symptoms)
- [ ] Bookmark/favorite diseases
- [ ] Comparison view (compare 2+ diseases side-by-side)
- [ ] Print-friendly formatting
- [ ] Export to PDF/Anki

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

### Current Project Scope (October 2025)
- **Total Systems**: 19 medical specialties
- **Total Categories**: ~150-200 (estimated)
- **Total Diseases**: 495 diseases
  - ✅ Complete (Level 3): 228 diseases (46.1%)
  - 🔴 Placeholder (Level 1): 267 diseases (53.9%)
- **Total Tags**: ~500+
- **Total Symptoms**: ~200+
- **Lines of Code**: ~50,000+ (estimated)
- **Disease Content**: ~25,000+ lines

### System Distribution
| System | Diseases | Completion |
|--------|----------|------------|
| Cardiovascular | 42 | 100% ✅ |
| Hematology-Oncology | 47 | 100% ✅ |
| Psychiatry | 44 | 100% ✅ |
| Renal | 38 | 100% ✅ |
| Respiratory | 30 | 100% ✅ |
| Gastrointestinal | 36 | 75% 🟡 |
| Neurology | 33 | 0% 🔴 |
| ENT | 28 | 0% 🔴 |
| Dermatology | 24 | 0% 🔴 |
| Infectious Disease | 24 | 0% 🔴 |
| Rheumatology | 24 | 0% 🔴 |
| Musculoskeletal | 22 | 0% 🔴 |
| Endocrine | 22 | 0% 🔴 |
| Genitourinary | 19 | 0% 🔴 |
| Reproductive/OBGYN | 15 | 0% 🔴 |
| Pediatrics | 15 | 0% 🔴 |
| Ophthalmology | 12 | 0% 🔴 |
| Toxicology | 11 | 0% 🔴 |
| Immunology | 9 | 0% 🔴 |

## Credits

Built for USMLE Step 1 preparation. All content is Step 1-level medical knowledge.

Generated with assistance from Claude Code.

# Step 1 Medical Explorers

Comprehensive, interactive learning platform for medical students preparing for USMLE Step 1. Master conditions, medications, microbiology, physiology, and more through intuitive, hierarchical explorers with integrated learning tools.

**Live Demo**: [https://rivirside.github.io/step1](https://rivirside.github.io/step1)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://rivirside.github.io/step1)
![Overall Progress](https://img.shields.io/badge/Progress-Conditions%2046%25%20%7C%20Drugs%201%25-blue)

---

## 🎯 Features

### Current Explorers (v1.0)

1. **Conditions Explorer** 🏥 (Blue Theme)
   - Browse 495 diseases by body system and category
   - Comprehensive: pathophysiology, presentation, diagnostics, management
   - **19 systems | 228/495 comprehensive (46% complete)**
   - Integrated clinical pearls and USMLE high-yield content

2. **Medications Explorer** 💊 (Purple Theme)
   - Navigate drugs by system → therapeutic → pharmacologic class
   - Detailed: mechanism, PK, dosing, contraindications, clinical pearls
   - **16 systems | 385 drugs | 167 pharmacologic classes**
   - Enhanced content: 3/385 drugs comprehensive (1% complete)

3. **Bugs Explorer** 🦠 (Green Theme)
   - *Phase 6* - Planned for development
   - Pathogens organized by type and infection site
   - Antimicrobials with spectrum and resistance patterns

---

## 📊 Current Progress

### Conditions Explorer Status
| System | Diseases | Status | Completion |
|--------|----------|--------|------------|
| Cardiovascular | 42 | ✅ Complete | 100% |
| Hematology-Oncology | 47 | ✅ Complete | 100% |
| Psychiatry | 44 | ✅ Complete | 100% |
| Renal | 38 | ✅ Complete | 100% |
| Respiratory | 30 | ✅ Complete | 100% |
| Gastrointestinal | 36 | 🟡 In Progress | 75% |
| Neurology | 33 | 🔴 High Priority | 0% |
| Infectious Disease | 24 | 🔴 High Priority | 0% |
| Endocrine | 22 | 🔴 High Priority | 0% |
| Rheumatology | 24 | 🔴 High Priority | 0% |
| *13 more systems* | 155 | 🔴 Planned | 0% |

**Overall**: 228/495 diseases at Level 3 (comprehensive) = **46.1% complete**

### Medications Explorer Status
| Priority | System | Drugs | Status |
|----------|--------|-------|--------|
| 1 | Endocrine (Diabetes) | 26 | 🟡 12% (3/26) |
| 2 | Cardiovascular | 44 | 🔴 Planned |
| 3 | Antimicrobials | 48 | 🔴 Planned |
| 4 | All Other Systems | 267 | 🔴 Planned |

**Overall**: 3/385 drugs enhanced = **1% complete**

---

## 🚀 Quick Start

### View Live (GitHub Pages)
Visit the deployed site: [https://rivirside.github.io/step1](https://rivirside.github.io/step1)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/rivirside/step1.git
cd step1

# Start local server (choose one):
python3 -m http.server 8765        # Python 3
python -m SimpleHTTPServer 8765    # Python 2
npx http-server -p 8765            # Node.js

# Open in browser
open http://localhost:8765
```

---

## 📂 Project Structure

### Current Architecture (v1.0)

```
step1/
├── index.html                    # Landing page - Explorer selection
│
├── conditions/                   # Conditions Explorer
│   ├── index.html               # Main explorer interface
│   ├── script.js                # Tree-based UI controller
│   ├── data-loader.js           # Dynamic data loading
│   ├── data/
│   │   ├── systems/            # 19 medical systems
│   │   ├── categories/         # ~200 disease categories
│   │   └── diseases/           # 495 disease files
│   └── docs/                   # Documentation & planning
│
├── medications/                 # Medications Explorer
│   ├── index-v2.html           # Main explorer interface
│   ├── script-v3.js            # Tree-based UI controller
│   ├── data-loader.js          # Dynamic data loading
│   ├── data/
│   │   ├── systems/           # 16 pharmacology systems
│   │   ├── classes/           # Therapeutic + Pharmacologic classes
│   │   └── drugs/             # 385 individual drug files
│   └── docs/                  # Documentation & planning
│
├── shared/                     # Shared Design System
│   ├── design-tokens.css      # Color scheme, spacing, typography
│   ├── navigation.css         # Header navigation components
│   ├── components.css         # Reusable UI components
│   ├── themes.css             # Explorer-specific themes
│   ├── explorer-navigation.js # Navigation logic
│   └── cross-links/           # Cross-reference relationships
│       └── drug-condition-relationships.js  # 35+ relationships
│
└── docs/                       # Project documentation
    ├── ROADMAP files
    ├── ARCHITECTURE docs
    └── Implementation guides
```

### Planned Structure (v2.0+)

```
step1/                          # Future additions
├── bugs/                       # Phase 6 - Bugs Explorer
├── physiology/                # Phase 7 - Physiology Explorer
├── anatomy/                   # Phase 8 - Anatomy Explorer
├── biostatistics/            # Phase 9 - Biostatistics Explorer
├── simulators/               # Phase 10 - Interactive Simulators
├── quiz-builder/             # Phase 11 - Question Banks & Quiz Builder
└── shared/
    ├── question-engine/      # Question generation system
    ├── spaced-repetition/    # Learning algorithm
    └── progress-tracking/    # User progress storage
```

---

## 🎨 Design System

### Color Themes
- **Conditions**: Blue `#2563eb` / Teal `#0891b2`
- **Medications**: Purple `#7c3aed` / Violet `#a855f7`
- **Bugs**: Green `#16a34a` / Lime `#65a30d`
- **Physiology**: Orange `#ea580c` / Amber `#f59e0b`
- **Anatomy**: Pink `#ec4899` / Rose `#f43f5e`
- **Biostatistics**: Indigo `#4f46e5` / Sky `#0284c7`

### Key Features
- ✅ Unified navigation header across all explorers
- ✅ Hierarchical tree sidebar with expand/collapse
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Color-coded cross-references (hover previews)
- ✅ Fast search functionality with fuzzy matching
- ✅ Mobile-friendly touch interactions
- 🔄 Dynamic feature highlighting (Pro Tips, High Yield)
- 🔄 Bookmark and progress tracking
- 🔄 Dark mode support

---

## 🗺️ Comprehensive Roadmap

### ✅ Phase 1-3: Foundation (Complete)
**Status**: ✅ Done
**Timeline**: Completed Oct 2025

- [x] Modular architecture with shared design system
- [x] Unified navigation header across explorers
- [x] Tree-based hierarchical UI for conditions and medications
- [x] GitHub Pages deployment configured
- [x] 228 comprehensive disease entries (5 complete systems)
- [x] 385 medication entries with basic information
- [x] 35+ drug-condition cross-references

### 🔄 Phase 4: Conditions Content Expansion (In Progress)
**Status**: 🟡 46% Complete
**Timeline**: Oct 2025 - Feb 2026 (Est. 20-40 weeks)
**Current**: Week 1 - Completing GI System

#### Priorities:
1. **Complete GI System** (9 diseases) - Week 1
2. **High-Yield Systems** (103 diseases) - Weeks 2-10
   - Neurology (33 diseases) - Most USMLE-relevant
   - Infectious Disease (24 diseases) - High-yield antimicrobials
   - Endocrine (22 diseases) - Diabetes, thyroid disorders
   - Rheumatology (24 diseases) - Autoimmune conditions

3. **Medium-Yield Systems** (89 diseases) - Weeks 11-19
   - Musculoskeletal, ENT, Dermatology, OBGYN

4. **Lower-Priority Systems** (66 diseases) - Weeks 20-25
   - Genitourinary, Ophthalmology, Toxicology, Immunology, Pediatrics

5. **Category Pages** (~200 pages) - Weeks 26-40
   - Clinical approach frameworks
   - Key differentiators for diagnosis
   - Disease comparison tables

**Target**: 100% of 495 diseases at Level 3 (comprehensive)

### 🔄 Phase 5: Medications Content Expansion (In Progress)
**Status**: 🟡 1% Complete
**Timeline**: Oct 2025 - Jan 2026 (Est. 4-5 weeks)
**Current**: Week 1 - Endocrine diabetes medications

#### Priorities:
1. **Endocrine System** (26 drugs) - Week 1
   - Insulin, oral hypoglycemics, thyroid agents, corticosteroids

2. **Cardiovascular System** (44 drugs) - Week 2
   - Beta-blockers, ACE inhibitors, diuretics, antiarrhythmics

3. **Antimicrobials** (48 drugs) - Week 2
   - Beta-lactams, fluoroquinolones, antivirals, antifungals

4. **Remaining Systems** (267 drugs) - Weeks 3-5
   - Nervous, respiratory, GI, pain, heme/onc, etc.

**Target**: All 385 drugs with enhanced content (mechanism, PK, dosing, pearls)

### 🔮 Phase 6: Bugs Explorer (Planned)
**Status**: 🔴 Not Started
**Timeline**: Mar 2026 - May 2026 (Est. 8-10 weeks)

#### Scope:
- **Bacteria** (80+ organisms)
  - Gram-positive/negative classification
  - Common pathogens by infection site
  - Antibiotic resistance patterns

- **Viruses** (60+ organisms)
  - DNA/RNA classification
  - Systemic and localized infections
  - Antiviral therapy options

- **Fungi** (30+ organisms)
  - Opportunistic vs endemic
  - Antifungal therapy

- **Parasites** (40+ organisms)
  - Protozoa and helminths
  - Geographic distribution
  - Antiparasitic therapy

#### Features:
- Organism → infection site mapping
- Antimicrobial spectrum visualizations
- Cross-links to conditions (pneumonia, meningitis, etc.)
- USMLE-focused clinical pearls

### 🧬 Phase 7: Physiology Explorer (Planned)
**Status**: 🔴 Not Started
**Timeline**: Jun 2026 - Oct 2026 (Est. 20 weeks)

#### Scope: 120-150 physiology topics

**By System:**
- Cardiovascular (15-20 topics): Cardiac cycle, baroreceptor reflex, Frank-Starling
- Respiratory (10-12 topics): V/Q matching, oxygen-hemoglobin dissociation
- Renal (15-18 topics): GFR regulation, acid-base balance, electrolyte handling
- Gastrointestinal (12-15 topics): Gastric acid secretion, bile metabolism
- Endocrine (20-25 topics): HPT axis, HPA axis, insulin regulation (GPCR pathways)
- Neurology (15-20 topics): Action potentials, neurotransmitter systems
- Hematology (10-12 topics): Coagulation cascade, hemoglobin synthesis
- Immunology (12-15 topics): Complement system, cytokines, MHC

#### Content Structure:
Each physiology topic includes:
- **Overview**: Normal physiologic function
- **Molecular/Cellular Mechanisms**: Detailed mechanistic explanations
- **Receptor Tables**: GPCR signaling, ion channels
- **Regulatory Pathways**: Feedback loops, homeostasis
- **Clinical Correlations**: Links to diseases and medications
- **USMLE High-Yield Points**: Board-relevant facts and mnemonics

**Example**: Insulin Secretion Regulation
- GPCR table (Gs, Gi, Gq pathways)
- Glucose-stimulated insulin secretion mechanism
- Links to: T2DM, GLP-1 agonists, sulfonylureas, beta-blockers
- Clinical pearls for Step 1

### 🧠 Phase 8: Anatomy Explorer (Planned)
**Status**: 🔴 Not Started
**Timeline**: Nov 2026 - Apr 2027 (Est. 24 weeks)

#### Scope: 180-220 anatomy topics

**Content Structure:**
- **Gross Anatomy**: Macroscopic structure and spatial relationships
- **Histology**: Microscopic structure, cell types
- **Embryology**: Developmental origin and congenital anomalies
- **Clinical Correlations**: Anatomical basis of disease
- **Imaging Pearls**: X-ray, CT, MRI appearances
- **Cross-links**: Related conditions and surgical approaches

**Example Systems:**
- Neurology (30-40 topics): Most anatomy-heavy
- Musculoskeletal (40-50 topics): Orthopedic foundations
- Gastrointestinal (25-30 topics): Surgical anatomy
- Cardiovascular (20-25 topics): Heart anatomy, great vessels

### 📊 Phase 9: Biostatistics Explorer (NEW)
**Status**: 🔴 Not Started
**Timeline**: May 2027 - Jul 2027 (Est. 10 weeks)

#### Scope: Statistical concepts for USMLE Step 1

**Topics (40-50 concepts):**
- **Study Design** (10 topics)
  - RCT, cohort, case-control, cross-sectional
  - Bias types and mitigation
  - Validity (internal/external)

- **Diagnostic Testing** (10 topics)
  - Sensitivity, specificity, PPV, NPV
  - Likelihood ratios
  - ROC curves

- **Statistical Measures** (15 topics)
  - Relative risk, odds ratio, hazard ratio
  - Confidence intervals
  - P-values and significance
  - Number needed to treat/harm

- **Epidemiology** (10 topics)
  - Incidence vs prevalence
  - Attack rate, case fatality rate
  - Years of potential life lost

#### Features:
- **Interactive Calculators**: Input data to calculate statistics
- **Practice Problems**: Step-by-step worked examples
- **Visual Aids**: 2x2 tables, graphs, flowcharts
- **Clinical Scenarios**: Apply stats to medical decision-making

### 🎮 Phase 10: Interactive Simulators (NEW)
**Status**: 🔴 Not Started
**Timeline**: Aug 2027 - Dec 2027 (Est. 16 weeks)

#### Simulators:

1. **Pharmacodynamics Simulator**
   - Drug dose-response curves
   - Competitive vs non-competitive antagonism
   - Therapeutic window visualization
   - Drug interaction effects

2. **Acid-Base Simulator**
   - Input: pH, pCO2, HCO3
   - Auto-calculate: primary disorder, compensation
   - Practice interpreting ABGs

3. **ECG Rhythm Simulator**
   - Generate arrhythmias
   - Practice interpretation
   - Link to antiarrhythmic drugs

4. **Oxygen-Hemoglobin Curve Simulator**
   - Adjust: temperature, pH, 2,3-BPG, CO
   - Visualize curve shifts
   - Clinical correlations

5. **Coagulation Cascade Visualizer**
   - Interactive pathway diagram
   - Click factors to see where drugs act
   - Identify deficiencies and their effects

6. **Nephron Function Simulator**
   - Trace solute/water handling through segments
   - Drug effects (diuretics, ADH)
   - Calculate GFR, clearance

#### Features:
- Real-time visualizations
- Adjustable parameters with instant feedback
- Clinical vignettes to practice decision-making
- Links to related conditions and medications

### 📝 Phase 11: Question Banks & Quiz Builder (NEW)
**Status**: 🔴 Not Started
**Timeline**: Jan 2028 - Jun 2028 (Est. 24 weeks)

#### Question Banks:

1. **Per-Page Questions**
   - Every disease: 5-10 USMLE-style questions
   - Every drug: 5-10 pharmacology questions
   - Every physiology topic: 3-5 mechanism questions
   - **Total**: ~5,000-8,000 questions

2. **Question Types**
   - Single best answer (USMLE format)
   - Clinical vignettes with images
   - "Next best step" management questions
   - Mechanism/pathophysiology questions

3. **Quiz Builder**
   - **Custom Quizzes**: Select systems, topics, difficulty
   - **Timed Mode**: Simulate exam conditions
   - **Study Mode**: Instant feedback with explanations
   - **Flashcard Mode**: Rapid-fire recall practice

4. **Adaptive Learning**
   - Track performance by topic
   - Identify weak areas
   - Spaced repetition algorithm
   - Smart quiz generation (focus on weaknesses)

5. **Progress Tracking**
   - Questions answered by system
   - Accuracy over time
   - Predicted readiness score
   - Weak topic recommendations

#### Question Structure:
```json
{
  "id": "stemi-q01",
  "relatedContent": ["stemi", "aspirin", "cardiac-catheterization"],
  "stem": "A 58-year-old man with crushing chest pain...",
  "options": ["A", "B", "C", "D", "E"],
  "correct": "A",
  "explanation": "Detailed explanation with mechanism...",
  "difficulty": "medium",
  "tags": ["cardiology", "ACS", "high-yield"]
}
```

### ✨ Phase 12: Dynamic Feature Enhancements (NEW)
**Status**: 🔴 Not Started
**Timeline**: Jul 2028 - Sep 2028 (Est. 10 weeks)

#### Features:

1. **Pro Tips System**
   - Inline tips highlighted throughout content
   - Clinical pearls from experienced physicians
   - Test-taking strategies
   - Common pitfalls to avoid
   - Toggle on/off for clean reading

2. **High-Yield Highlighting**
   - Dynamic highlighting of board-relevant content
   - Color-coded by importance (red = must-know)
   - Filter view: show only high-yield content
   - Customizable based on user's weak areas

3. **Smart Hyperlinking**
   - Auto-detect related terms in text
   - Hover preview cards (mini-summaries)
   - Click to navigate to full page
   - "Related Reading" suggestions at bottom of each page
   - Bidirectional links (conditions ↔ drugs ↔ physiology)

4. **Mnemonics & Memory Aids**
   - Integrated mnemonics for each topic
   - Visual mnemonics (Sketchy-style associations)
   - User-generated mnemonics (community feature)
   - Flashcard export

5. **Bookmarks & Notes**
   - Bookmark pages for later review
   - Add personal notes to any page
   - Highlight text with color coding
   - Export notes to PDF/Anki

6. **Study Plans**
   - Pre-built study schedules (3 months, 6 months, 1 year)
   - Track daily/weekly progress
   - Sync with calendar
   - Reminders and notifications

7. **Dark Mode**
   - System-aware theme switching
   - Reduced eye strain for long study sessions
   - Preserves color-coding for visual learning

### 🚀 Phase 13: Advanced Features (Future)
**Status**: 🔴 Not Started
**Timeline**: 2028+

- **Mobile App**: Native iOS/Android apps
- **Offline Mode**: Download content for offline access
- **AI Study Assistant**: ChatGPT-style Q&A for any topic
- **Collaborative Learning**: Study groups, shared notes
- **Video Integration**: Embedded teaching videos
- **3D Anatomy Models**: Interactive 3D visualization
- **Virtual Patient Cases**: Practice clinical reasoning
- **Step 2 CK Expansion**: Extend platform to Step 2 content

---

## 📋 Standardized Page Structure

### Condition Pages (Level 3 - Comprehensive)

Every disease page follows this 14-field structure:

```javascript
{
  id: 'stemi',
  name: 'ST-Elevation Myocardial Infarction (STEMI)',
  categories: ['acute-coronary-syndrome', 'ischemic-heart-disease'],
  severity: 'high',
  acuity: 'acute',
  detail: {
    // 1. Definition - Concise 1-2 sentence summary
    definition: 'Complete occlusion of coronary artery...',

    // 2. Pathophysiology - Mechanism of disease
    pathophysiology: 'Atherosclerotic plaque rupture...',

    // 3. Epidemiology - Incidence, prevalence, demographics
    epidemiology: 'Leading cause of death in US...',

    // 4. Risk Factors - Array of modifiable/non-modifiable factors
    riskFactors: ['Smoking', 'Diabetes', 'Hypertension', ...],

    // 5. Presentation - Clinical presentation
    presentation: 'Crushing substernal chest pain...',

    // 6. Physical Exam - Array of exam findings
    physicalExam: ['Diaphoresis', 'S4 gallop', 'Crackles', ...],

    // 7. Diagnostic Criteria - Formal criteria
    diagnosticCriteria: 'ST elevation >1mm in 2+ contiguous leads...',

    // 8. Labs - Array of lab findings
    labs: ['Troponin elevated', 'CK-MB elevated', ...],

    // 9. Imaging - Array of imaging findings
    imaging: ['ECG: ST elevation', 'Echo: wall motion abnormality', ...],

    // 10. Differential Diagnosis - 3-5 alternatives
    differentialDiagnosis: ['NSTEMI', 'Aortic dissection', 'PE', ...],

    // 11. Management - Acute and chronic
    management: {
      acute: ['MONA (Morphine, O2, Nitrates, Aspirin)', 'PCI within 90min', ...],
      chronic: ['Dual antiplatelet therapy', 'Beta-blocker', 'Statin', ...]
    },

    // 12. Complications - Array of potential complications
    complications: ['Cardiogenic shock', 'Ventricular rupture', 'Arrhythmias', ...],

    // 13. Prognosis - Outcome information
    prognosis: 'Mortality 5-10% with early PCI...',

    // 14. Clinical Pearls - 5-10 high-yield USMLE points
    clinicalPearls: [
      '**MONA-B**: Morphine, O2, Nitrates, Aspirin, Beta-blocker',
      '**Killip Class**: Predicts mortality based on heart failure signs',
      'Contraindications to fibrinolytics: recent surgery, stroke, active bleeding',
      ...
    ]
  }
}
```

### Medication Pages (Enhanced Structure)

Every drug page includes comprehensive pharmacology:

```javascript
{
  id: 'aspirin',
  name: 'Aspirin',
  system: 'cardiovascular',
  therapeuticClass: 'antiplatelets',
  pharmacologicClass: 'nsaids',

  // Basic info (existing)
  indications: ['Acute MI', 'Stroke prevention', 'Fever'],
  contraindications: ['Bleeding disorders', 'Active PUD'],

  // Enhanced fields (new)
  mechanism: 'Irreversibly inhibits COX-1 and COX-2...',

  pharmacokinetics: {
    absorption: 'Rapidly absorbed from GI tract',
    distribution: 'Widely distributed, crosses placenta',
    metabolism: 'Hepatic hydrolysis to salicylic acid',
    excretion: 'Renal (pH-dependent)',
    halfLife: '15-20 minutes (aspirin), 2-3 hours (salicylate)',
    onset: '30 minutes',
    peak: '1-2 hours',
    duration: '4-6 hours (analgesia), 7-10 days (antiplatelet)'
  },

  clinicalChoice: 'First-line antiplatelet for ACS due to rapid onset...',

  dosing: {
    typical: '81-325mg daily (cardioprotective), 650-1000mg q4-6h (pain)',
    renal: 'Avoid in severe CKD',
    hepatic: 'Use caution',
    elderly: 'Standard dosing',
    pediatric: 'Avoid due to Reye syndrome risk'
  },

  blackBoxWarnings: [
    'Reye syndrome in children with viral illnesses',
    'Increased bleeding risk (especially with anticoagulants)'
  ],

  sideEffects: {
    common: ['Dyspepsia', 'Nausea', 'GI upset'],
    serious: ['GI bleeding', 'Hemorrhagic stroke', 'Tinnitus (toxicity)'],
    rare: ['Anaphylaxis', 'Hepatotoxicity', 'Renal impairment']
  },

  interactions: {
    drugDrug: [
      'Warfarin → increased bleeding risk',
      'NSAIDs → increased GI bleeding',
      'ACE inhibitors → reduced antihypertensive effect'
    ],
    drugDisease: [
      'PUD → contraindicated',
      'Asthma → bronchospasm (ASA triad)'
    ],
    drugFood: ['Alcohol → increased GI bleeding']
  },

  monitoring: {
    labs: ['CBC (check for anemia from GI bleed)', 'Salicylate levels (if toxicity suspected)'],
    vitals: ['Monitor for signs of bleeding'],
    symptoms: ['Tinnitus (indicates toxicity)', 'Black tarry stools (GI bleed)']
  },

  pregnancy: {
    category: 'D (3rd trimester)',
    notes: 'Avoid in 3rd trimester (premature ductus arteriosus closure)'
  },

  clinicalPearls: [
    '**ASA triad**: Asthma + Nasal polyps + ASA sensitivity',
    'Tinnitus = first sign of salicylate toxicity',
    'Irreversible platelet inhibition lasts 7-10 days (platelet lifespan)',
    'Give with food to reduce GI upset',
    'Low-dose (81mg) for cardiovascular prevention, high-dose (3-6g/day) for rheumatologic disease',
    'Acetaminophen overdose antidote: N-acetylcysteine (NOT for aspirin)',
    'Aspirin overdose: metabolic acidosis → respiratory alkalosis (compensation)',
    'Reye syndrome: hepatic encephalopathy + fatty liver in children post-viral illness'
  ]
}
```

### Drug Class Pages

Every pharmacologic class has standardized overview:

```javascript
{
  id: 'ace-inhibitors',
  name: 'ACE Inhibitors',
  system: 'cardiovascular',
  therapeuticClass: 'antihypertensives',
  drugs: ['lisinopril', 'enalapril', 'ramipril', 'captopril'],

  detail: {
    overview: 'ACE inhibitors block conversion of angiotensin I to II...',

    clinicalApproach: 'First-line for HTN with diabetes, CKD, or CHF...',

    pharmacokinetics: {
      classLevel: 'Most are prodrugs (except captopril, lisinopril)...',
      differences: 'Captopril: shortest half-life, requires TID dosing'
    },

    comparison: `
| Drug | Half-Life | Dosing | Renal Adjustment | Notes |
|------|-----------|--------|------------------|-------|
| Lisinopril | 12h | Once daily | Required | Not a prodrug |
| Enalapril | 11h | Once-twice daily | Required | Prodrug |
| Ramipril | 13-17h | Once daily | Required | High tissue affinity |
| Captopril | 2h | TID | Required | Shortest acting, sulfhydryl group |
    `,

    monitoring: ['K+ (hyperkalemia)', 'Creatinine (check 1-2 weeks after starting)', 'BP'],

    contraindications: [
      'Pregnancy (teratogenic)',
      'Bilateral renal artery stenosis',
      'History of angioedema'
    ],

    clinicalPearls: [
      'All end in **-pril**',
      'Dry cough (10-15% of patients) due to bradykinin accumulation → switch to ARB',
      'Angioedema (rare but serious) → discontinue immediately',
      'Increase K+ → avoid with K+-sparing diuretics',
      'Protective in diabetic nephropathy (reduce proteinuria)',
      'Acute rise in creatinine (<30%) is acceptable; higher suggests RAS'
    ]
  }
}
```

---

## 🛠️ Technology Stack

### Current (v1.0)
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS3 (custom properties, grid, flexbox)
- **Data**: JSON-based ES6 modules
- **Architecture**: Federated explorers with shared design system
- **Hosting**: GitHub Pages (static site)
- **Build**: Zero-build approach (no webpack, no npm)
- **Performance**: <2s load time, ~500KB total bundle

### Planned (v2.0+)
- **Framework**: Consider React/Vue for interactive features
- **State Management**: For progress tracking and bookmarks
- **Backend**: Firebase/Supabase for user accounts and sync
- **Database**: PostgreSQL for question banks
- **Search**: Algolia or MeiliSearch for advanced search
- **Analytics**: Privacy-focused analytics
- **PWA**: Service workers for offline mode

---

## 📊 Content Coverage

### Conditions Explorer (19 Systems, 495 Diseases)

**Complete Systems (5):**
- Cardiovascular (42 diseases) - STEMI, CHF, HTN, arrhythmias, valvular disease
- Hematology-Oncology (47 diseases) - Anemias, leukemias, lymphomas, coagulation disorders
- Psychiatry (44 diseases) - Depression, anxiety, schizophrenia, personality disorders
- Renal (38 diseases) - AKI, CKD, glomerulonephritis, electrolyte disorders
- Respiratory (30 diseases) - COPD, asthma, pneumonia, ILD, pulmonary vascular

**In Progress (1):**
- Gastrointestinal (36 diseases, 75% complete) - GERD, IBD, hepatitis, pancreatitis

**High Priority (4):**
- Neurology (33 diseases) - Stroke, seizures, dementia, movement disorders
- Infectious Disease (24 diseases) - Pneumonia, UTI, meningitis, sepsis, HIV/AIDS
- Endocrine (22 diseases) - Diabetes, thyroid disorders, adrenal disorders
- Rheumatology (24 diseases) - RA, SLE, vasculitis, inflammatory arthropathies

**Remaining (9):**
- Musculoskeletal, ENT, Dermatology, OBGYN, Genitourinary, Ophthalmology, Toxicology, Immunology, Pediatrics

### Medications Explorer (16 Systems, 385 Drugs)

**By System:**
```
Endocrine (26 drugs)
├── Diabetes medications
│   ├── Insulin (4 types) ✅ Enhanced
│   ├── Biguanides (Metformin)
│   ├── Sulfonylureas (3 drugs)
│   ├── GLP-1 agonists (2 drugs)
│   └── SGLT2 inhibitors (2 drugs)
├── Thyroid agents (4 drugs)
└── Corticosteroids (4 drugs)

Cardiovascular (44 drugs)
├── Beta-blockers (6 drugs)
├── ACE inhibitors (4 drugs)
├── Diuretics (5 drugs)
├── Antiarrhythmics (5 drugs)
└── Anticoagulants (6 drugs)

Antimicrobials (48 drugs)
├── Beta-lactams (12 drugs)
├── Fluoroquinolones (4 drugs)
├── Macrolides (3 drugs)
├── Antivirals (10 drugs)
└── Antifungals (8 drugs)

[... 13 more systems]
```

---

## 🤝 Contributing

Contributions welcome! This is a tool built for medical students, by medical students.

### How to Contribute

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/add-condition-xyz`
3. **Follow existing structure**: Use templates in `data/` folders
4. **Test locally**: Ensure navigation works
5. **Submit PR**: Describe your changes

### Content Guidelines
- ✅ High-yield for USMLE Step 1
- ✅ Accurate medical information (cite sources if needed)
- ✅ Concise and clear
- ✅ Follow existing JSON structure
- ❌ No copyrighted content
- ❌ No personal opinions/biases

---

## 📝 Development

### Adding a Condition
```javascript
// conditions/data/diseases/cardiovascular/stemi.js
export default {
    id: 'stemi',
    name: 'ST-Elevation Myocardial Infarction (STEMI)',
    categories: ['acute-coronary-syndrome'],
    severity: 'high',
    acuity: 'acute',
    detail: {
        definition: '...',
        pathophysiology: '...',
        presentation: '...',
        // ... more fields
    }
};
```

### Adding a Medication
```javascript
// medications/data/drugs/cardiovascular/aspirin.js
export default {
    id: 'aspirin',
    name: 'Aspirin',
    system: 'cardiovascular',
    therapeuticClass: 'antiplatelets',
    pharmacologicClass: 'nsaids',
    indications: ['MI', 'Stroke prevention', 'Fever'],
    contraindications: ['Bleeding disorders', 'Peptic ulcer'],
    // ... more fields
};
```

---

## 🎓 For Medical Students

### Study Strategies

1. **Systems-Based Review**
   - Navigate by body system
   - Group related content mentally

2. **Hierarchical Learning**
   - Start broad (system) → narrow (class) → specific (drug/disease)
   - Use tree structure to test recall

3. **Cross-Reference** (Phase 4)
   - Link conditions to treatments
   - Understand drug indications in context

4. **Active Recall**
   - Hide detail panel, try to remember from tree
   - Use search to quiz yourself

5. **Quick Reference**
   - Fast lookup during practice questions
   - Clarify mechanism/presentation confusion

---

## 📚 Documentation

- **[INTEGRATION_ARCHITECTURE.md](./INTEGRATION_ARCHITECTURE.md)** - Technical architecture
- **[THEME_SYSTEM.md](./THEME_SYSTEM.md)** - Color-coding and themes
- **[UI_SIMPLIFICATION.md](./UI_SIMPLIFICATION.md)** - UI improvements
- **[QUICK_START.md](./QUICK_START.md)** - Testing guide

---

## 🙏 Acknowledgments

- Built with [Claude Code](https://claude.com/claude-code)
- Inspired by medical students' need for better study tools
- Community feedback and contributions

---

## 📞 Support

- **Bug Reports**: [GitHub Issues](https://github.com/YOUR_USERNAME/step1-conditions/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/YOUR_USERNAME/step1-conditions/discussions)
- **Support Development**: [Ko-fi](https://ko-fi.com/rivir)

---

## 📄 License

This project is open source and available for educational purposes.

**Built for medical students preparing for USMLE Step 1**

---

## ⚡ Performance

- **Load Time**: <2s on 4G
- **Bundle Size**: ~500KB total (all data included)
- **No Backend**: Entirely client-side
- **Offline Capable**: Works with service workers (future)

---

**Good luck on Step 1!** 📚💊🏥

*Last Updated: October 20, 2025*

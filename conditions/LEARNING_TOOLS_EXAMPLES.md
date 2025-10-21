# Learning Tools - Implementation Examples

This document provides copy-paste examples for adding learning tools to category pages.

## Table of Contents
1. [Feature Comparison Tables](#feature-comparison-tables)
2. [2x2 Matrices](#2x2-matrices)
3. [Algorithms](#algorithms)
4. [Key Differentiations](#key-differentiations)

---

## Feature Comparison Tables

Use when comparing 3+ similar diseases across multiple features.

### Example 1: AKI Types (Renal)

```javascript
comparisonTables: [
    {
        title: "Prerenal vs ATN vs AIN vs Postrenal AKI",
        subtitle: "Key distinguishing features for rapid differentiation",
        type: "feature-comparison",
        diseases: ["prerenal-aki", "atn", "ain", "postrenal-aki"],
        features: [
            {
                name: "FENa",
                values: ["<1%", ">2%", "Variable", "Variable"],
                note: "Less reliable if on diuretics"
            },
            {
                name: "Urine Na",
                values: ["<20", ">40", "Variable", "Variable"]
            },
            {
                name: "BUN/Cr ratio",
                values: [">20", "<15", "Variable", "Variable"]
            },
            {
                name: "Urinalysis",
                values: ["Bland", "Muddy brown casts", "WBC casts, eosinophils", "Bland"]
            },
            {
                name: "Response to fluids",
                values: ["Improves 24-48h", "No improvement", "No improvement", "No improvement"]
            }
        ],
        clinicalPearl: "FENa <1% + oliguria = prerenal until proven otherwise"
    }
]
```

### Example 2: RTA Types (Renal - Tubulointerstitial)

```javascript
comparisonTables: [
    {
        title: "Renal Tubular Acidosis Types",
        subtitle: "Type 1 (Distal) vs Type 2 (Proximal) vs Type 4 (Hyperkalemic)",
        type: "feature-comparison",
        diseases: ["rta-type-1", "rta-type-2", "rta-type-4"],
        features: [
            {
                name: "Location",
                values: ["Distal tubule (collecting duct)", "Proximal tubule", "Collecting duct (aldosterone resistance)"]
            },
            {
                name: "Defect",
                values: ["↓ H+ secretion", "↓ HCO3 reabsorption", "↓ Aldosterone effect → ↓ K+ secretion"]
            },
            {
                name: "Serum K+",
                values: ["Hypokalemia", "Hypokalemia", "Hyperkalemia"],
                note: "Type 4 is the ONLY hyperkalemic RTA"
            },
            {
                name: "Urine pH",
                values: [">5.5 (alkaline despite acidosis)", "<5.5 (can acidify once HCO3 depleted)", "<5.5"]
            },
            {
                name: "Anion gap",
                values: ["Normal", "Normal", "Normal"],
                note: "All RTAs are normal anion gap metabolic acidosis"
            },
            {
                name: "Complications",
                values: ["Kidney stones, nephrocalcinosis", "Rickets, osteomalacia, Fanconi", "Mild acidosis only"]
            },
            {
                name: "Causes",
                values: ["Autoimmune (Sjögren, SLE), amphotericin", "Fanconi syndrome, multiple myeloma", "DM, NSAIDs, ACE inhibitors, heparin"]
            },
            {
                name: "Treatment",
                values: ["Potassium citrate (replace K+, alkali)", "High-dose bicarbonate (10-15 mEq/kg/day)", "Fludrocortisone, low-K+ diet, furosemide"]
            }
        ],
        clinicalPearl: "Type 1: stones + alkaline urine. Type 2: kids with rickets. Type 4: DM + hyperkalemia."
    }
]
```

### Example 3: Nephrotic Syndromes (Glomerular)

```javascript
comparisonTables: [
    {
        title: "Primary Nephrotic Syndromes",
        type: "feature-comparison",
        diseases: ["minimal-change-disease", "fsgs", "membranous-nephropathy"],
        features: [
            {
                name: "Age",
                values: ["Children (most common)", "Adults, African Americans", "Adults >50"]
            },
            {
                name: "Light microscopy",
                values: ["Normal glomeruli", "Focal segmental sclerosis", "Thickened GBM"]
            },
            {
                name: "Electron microscopy",
                values: ["Podocyte foot process effacement", "Foot process effacement + sclerosis", "Subepithelial deposits (spike-and-dome)"]
            },
            {
                name: "Immunofluorescence",
                values: ["Negative", "Negative (IgM, C3 in sclerotic areas)", "Granular IgG, C3"]
            },
            {
                name: "Response to steroids",
                values: ["Excellent (90% respond)", "Poor (30-40% respond)", "Variable (30-40% respond)"]
            },
            {
                name: "Progression to ESRD",
                values: ["No (rarely progresses)", "Yes (50% at 10 years)", "Variable (30-40% at 10 years)"]
            },
            {
                name: "Associations",
                values: ["Hodgkin lymphoma, NSAIDs", "HIV, heroin, obesity, reflux nephropathy", "Hepatitis B, solid tumors, SLE, NSAIDs"]
            },
            {
                name: "Special feature",
                values: ["Triggers: recent URI, immunizations", "Recurs in transplant (30-50%)", "Anti-PLA2R antibodies (70%)"]
            }
        ],
        clinicalPearl: "Minimal change: kids who respond to steroids. FSGS: adults, HIV, high ESRD risk. Membranous: adults, anti-PLA2R+, associated with malignancy."
    }
]
```

---

## 2x2 Matrices

Use when diagnosis depends on two binary variables creating 4 possible outcomes.

### Example 1: Schizoaffective Diagnosis (Psychiatry)

```javascript
comparisonTables: [
    {
        title: "Schizoaffective vs Mood Disorder with Psychosis",
        subtitle: "Timing of symptom onset determines diagnosis",
        type: "2x2-matrix",
        rowHeaders: ["Bipolar features (mania/hypomania)", "Depressive features only"],
        colHeaders: ["Mood symptoms appear FIRST", "Psychotic symptoms appear FIRST"],
        cells: [
            [
                "Bipolar I disorder with psychotic features",
                "Schizoaffective disorder, bipolar type"
            ],
            [
                "Major depressive disorder with psychotic features",
                "Schizoaffective disorder, depressive type"
            ]
        ],
        notes: [
            "Schizoaffective requires ≥2 weeks of psychosis WITHOUT mood symptoms",
            "Mood disorder with psychosis: psychotic features ONLY during mood episodes",
            "If psychosis persists after mood symptoms resolve → schizoaffective",
            "If psychosis only occurs during mood episodes → mood disorder with psychosis"
        ],
        clinicalPearl: "Schizoaffective = schizophrenia + mood disorder. Must have 2+ weeks of psychosis alone (no mood symptoms) to diagnose."
    }
]
```

### Example 2: Hypercalcemia Etiology (Endocrine/Renal)

```javascript
comparisonTables: [
    {
        title: "Hypercalcemia: PTH-Mediated vs Non-PTH",
        type: "2x2-matrix",
        rowHeaders: ["PTH elevated or inappropriately normal", "PTH suppressed (<20 pg/mL)"],
        colHeaders: ["Calcium elevated", ""],
        cells: [
            [
                "Primary hyperparathyroidism (adenoma 85%, hyperplasia 15%, carcinoma <1%)",
                "Familial hypocalciuric hypercalcemia (FHH) - check urine calcium/creatinine ratio <0.01"
            ],
            [
                "Malignancy (PTHrP, lytic lesions, vitamin D from lymphoma)",
                "Granulomatous disease (sarcoidosis, TB), vitamin D toxicity, milk-alkali syndrome"
            ]
        ],
        notes: [
            "PTH ↑ + Ca ↑ = primary hyperparathyroidism (most common outpatient cause)",
            "PTH ↓ + Ca ↑ = malignancy (most common inpatient cause) or granulomatous disease",
            "FHH: PTH normal/high but urine calcium LOW (kidneys retain calcium). Benign, no treatment.",
            "PTHrP (parathyroid hormone-related peptide): secreted by squamous cell cancers (lung, head/neck)"
        ],
        clinicalPearl: "Hypercalcemia workup: check PTH. If high → primary hyperparathyroidism. If low → malignancy or vitamin D."
    }
]
```

### Example 3: Anemia by MCV and Reticulocyte Count (Hematology)

```javascript
comparisonTables: [
    {
        title: "Anemia Classification by MCV and Reticulocyte Response",
        type: "2x2-matrix",
        rowHeaders: ["Reticulocyte count LOW (<2%, impaired production)", "Reticulocyte count HIGH (>2%, hemolysis or bleeding)"],
        colHeaders: ["Microcytic (MCV <80)", "Macrocytic (MCV >100)"],
        cells: [
            [
                "Iron deficiency, thalassemia, anemia of chronic disease, sideroblastic",
                "B12 deficiency, folate deficiency, medications (methotrexate, hydroxyurea), myelodysplastic syndrome, alcohol"
            ],
            [
                "Rare (acute blood loss with microcytosis unusual)",
                "Hemolytic anemia (with macrocytosis from reticulocytosis), acute blood loss"
            ]
        ],
        notes: [
            "Low reticulocyte count = bone marrow not responding (production problem)",
            "High reticulocyte count = bone marrow responding appropriately (hemolysis or bleeding)",
            "Normocytic anemia (MCV 80-100): can be acute blood loss, chronic disease, CKD, bone marrow failure"
        ],
        clinicalPearl: "MCV + retic count → narrow differential. Microcytic + low retic = iron studies. Macrocytic + low retic = B12/folate."
    }
]
```

---

## Algorithms

Use for step-by-step diagnostic or management workflows.

### Example 1: AKI Diagnostic Approach (Renal)

```javascript
algorithms: [
    {
        title: "AKI Diagnostic Algorithm",
        type: "algorithm",
        description: "Step-by-step approach to diagnosing the etiology of acute kidney injury",
        startNode: "aki-detected",
        nodes: {
            "aki-detected": {
                label: "AKI detected",
                details: "↑Cr ≥0.3 in 48h OR ↑Cr ≥1.5× baseline in 7d OR oliguria <0.5 mL/kg/hr × 6h",
                action: "Assess volume status and urine output",
                branches: [
                    {condition: "Anuria or bladder distension", next: "check-obstruction"},
                    {condition: "Oliguria + signs of volume depletion", next: "check-prerenal"},
                    {condition: "Normal urine output (non-oliguric)", next: "check-urinalysis"}
                ]
            },
            "check-obstruction": {
                label: "Rule out obstruction (postrenal)",
                action: "Bladder scan or ultrasound",
                branches: [
                    {
                        condition: "Bladder distension (>300 mL post-void residual)",
                        diagnosis: "postrenal-aki",
                        treatment: "Foley catheter"
                    },
                    {
                        condition: "Bilateral hydronephrosis",
                        diagnosis: "postrenal-aki",
                        treatment: "Urology consult for nephrostomy or stent"
                    },
                    {
                        condition: "No obstruction",
                        next: "check-prerenal"
                    }
                ]
            },
            "check-prerenal": {
                label: "Check for prerenal AKI",
                action: "Send BMP, FENa, urinalysis",
                branches: [
                    {
                        condition: "FENa <1%, BUN/Cr >20, bland UA, concentrated urine",
                        diagnosis: "prerenal-aki",
                        treatment: "IV fluids (500-1000 mL NS bolus), treat underlying cause"
                    },
                    {
                        condition: "FENa >1% or doesn't improve with fluids",
                        next: "check-urinalysis"
                    }
                ]
            },
            "check-urinalysis": {
                label: "Evaluate urinalysis for intrarenal causes",
                action: "Look for casts, cells, protein",
                branches: [
                    {
                        condition: "Muddy brown granular casts",
                        diagnosis: "atn",
                        treatment: "Supportive care, discontinue nephrotoxins"
                    },
                    {
                        condition: "WBC casts, eosinophiluria, recent drug exposure",
                        diagnosis: "ain",
                        treatment: "Stop offending drug, consider corticosteroids"
                    },
                    {
                        condition: "RBC casts, dysmorphic RBCs, proteinuria",
                        diagnosis: "Glomerulonephritis",
                        treatment: "Nephrology consult, renal biopsy, serologies"
                    }
                ]
            }
        },
        clinicalPearl: "First rule out postrenal (ultrasound). Then check FENa + UA: FENa <1% = prerenal, FENa >2% + muddy brown = ATN, WBC casts = AIN, RBC casts = GN."
    }
]
```

### Example 2: Hyponatremia Workup (Electrolytes)

```javascript
algorithms: [
    {
        title: "Hyponatremia Diagnostic Algorithm",
        type: "algorithm",
        startNode: "hyponatremia-detected",
        nodes: {
            "hyponatremia-detected": {
                label: "Hyponatremia (Na <135)",
                action: "Check serum osmolality",
                branches: [
                    {condition: "Serum osm >295 (hypertonic)", next: "hypertonic"},
                    {condition: "Serum osm 280-295 (isotonic)", next: "isotonic"},
                    {condition: "Serum osm <280 (hypotonic)", next: "hypotonic"}
                ]
            },
            "hypertonic": {
                label: "Hypertonic hyponatremia",
                details: "Osmotically active substance dilutes Na",
                branches: [
                    {condition: "Hyperglycemia", diagnosis: "DKA or HHS", note: "Corrected Na = measured Na + 1.6 × [(glucose - 100) / 100]"},
                    {condition: "Mannitol administration", diagnosis: "Iatrogenic"}
                ]
            },
            "isotonic": {
                label: "Isotonic (pseudohyponatremia)",
                details: "Lab artifact from ↑ lipids or proteins displacing Na measurement",
                branches: [
                    {condition: "Hyperlipidemia, hyperproteinemia (multiple myeloma)", diagnosis: "Pseudohyponatremia", note: "Use direct ion-selective electrode to measure true Na"}
                ]
            },
            "hypotonic": {
                label: "Hypotonic hyponatremia (TRUE hyponatremia)",
                action: "Assess volume status",
                branches: [
                    {condition: "Hypovolemic (↓ skin turgor, orthostasis)", next: "hypovolemic"},
                    {condition: "Euvolemic (normal exam)", next: "euvolemic"},
                    {condition: "Hypervolemic (edema, ascites)", next: "hypervolemic"}
                ]
            },
            "hypovolemic": {
                label: "Hypovolemic hypotonic hyponatremia",
                action: "Check urine Na",
                branches: [
                    {condition: "Urine Na <20", diagnosis: "GI losses (vomiting, diarrhea), third-spacing (burns, pancreatitis)"},
                    {condition: "Urine Na >40", diagnosis: "Renal losses (diuretics, salt-wasting nephropathy, adrenal insufficiency, cerebral salt wasting)"}
                ]
            },
            "euvolemic": {
                label: "Euvolemic hypotonic hyponatremia",
                action: "Check urine osmolality",
                branches: [
                    {condition: "Uosm <100 (dilute)", diagnosis: "Primary polydipsia (psychogenic water intake)"},
                    {condition: "Uosm >100 (concentrated)", next: "check-siadh"}
                ]
            },
            "check-siadh": {
                label: "Rule out SIADH",
                action: "Check TSH, cortisol, medications",
                branches: [
                    {condition: "Hypothyroidism (↑ TSH)", diagnosis: "Hypothyroidism"},
                    {condition: "Adrenal insufficiency (↓ cortisol)", diagnosis: "Adrenal insufficiency"},
                    {condition: "Normal thyroid/adrenal, Uosm >100, UNa >40", diagnosis: "SIADH", note: "Causes: CNS, pulmonary, medications (SSRIs, carbamazepine)"}
                ]
            },
            "hypervolemic": {
                label: "Hypervolemic hypotonic hyponatremia",
                details: "Edematous states with total body Na ↑ but dilutional hyponatremia",
                branches: [
                    {condition: "Elevated JVP, pulmonary edema", diagnosis: "CHF"},
                    {condition: "Ascites, jaundice", diagnosis: "Cirrhosis"},
                    {condition: "Periorbital edema, proteinuria", diagnosis: "Nephrotic syndrome"}
                ]
            }
        },
        clinicalPearl: "Hyponatremia: (1) Check osm → hypotonic. (2) Volume status → hypo/eu/hyper. (3) Urine Na/osm → diagnosis. SIADH = euvolemic + Uosm >100 + UNa >40."
    }
]
```

---

## Key Differentiations

Use for side-by-side narrative comparison of two major categories.

### Example 1: Nephrotic vs Nephritic Syndrome (Glomerular)

```javascript
keyDifferentiations: [
    {
        title: "Nephrotic vs Nephritic Syndrome",
        type: "differentiation",
        summary: "Both glomerular diseases, but nephrotic = podocyte injury (heavy proteinuria, edema) vs nephritic = glomerular inflammation (hematuria, HTN, oliguria)",
        keyDistinction: "Nephrotic = massive proteinuria >3.5 g/day from podocyte foot process effacement. Nephritic = hematuria with RBC casts from glomerular inflammation.",
        comparisonPoints: [
            {
                feature: "Pathophysiology",
                nephrotic: "Podocyte foot process effacement → loss of charge barrier → massive protein leak",
                nephritic: "Glomerular inflammation → disrupted filtration barrier → RBCs leak into urine, ↓ GFR"
            },
            {
                feature: "Proteinuria",
                nephrotic: ">3.5 g/day (heavy, selective for albumin)",
                nephritic: "<3.5 g/day (mild-moderate, non-selective)"
            },
            {
                feature: "Hematuria",
                nephrotic: "Absent or microscopic",
                nephritic: "Gross or microscopic with RBC casts (pathognomonic), dysmorphic RBCs"
            },
            {
                feature: "Edema",
                nephrotic: "Severe (periorbital, pitting, anasarca) from hypoalbuminemia → ↓ oncotic pressure",
                nephritic: "Mild (periorbital) from salt/water retention → volume expansion"
            },
            {
                feature: "Blood pressure",
                nephrotic: "Normal or low (from volume depletion despite edema)",
                nephritic: "Hypertension (from volume overload, RAAS activation)"
            },
            {
                feature: "GFR",
                nephrotic: "Usually preserved (normal Cr)",
                nephritic: "↓ GFR → ↑ Cr, oliguria"
            },
            {
                feature: "Serum albumin",
                nephrotic: "<2.5 g/dL (severe hypoalbuminemia)",
                nephritic: "Normal or mildly decreased"
            },
            {
                feature: "Lipid levels",
                nephrotic: "Hyperlipidemia (↑ cholesterol, ↑ TG) from ↑ hepatic lipoprotein synthesis",
                nephritic: "Normal"
            },
            {
                feature: "Urinalysis",
                nephrotic: "Oval fat bodies, fatty casts, Maltese cross (polarized light)",
                nephritic: "RBC casts, dysmorphic RBCs, WBC casts, granular casts"
            },
            {
                feature: "Complications",
                nephrotic: "Infections (encapsulated organisms from loss of immunoglobulins), thrombosis (renal vein, PE from loss of antithrombin III), hyperlipidemia → atherosclerosis",
                nephritic: "Hypertensive emergency, RPGN (rapidly progressive), acute kidney injury, pulmonary hemorrhage (Goodpasture, GPA)"
            }
        ],
        diseases: {
            nephrotic: ["minimal-change-disease", "fsgs", "membranous-nephropathy", "diabetic-nephropathy", "amyloidosis"],
            nephritic: ["iga-nephropathy", "post-infectious-gn", "rpgn", "lupus-nephritis", "mpgn", "goodpasture", "gpa"]
        },
        overlap: "Membranoproliferative GN (MPGN) can present with both nephrotic AND nephritic features (mixed pattern).",
        clinicalPearl: "RBC casts = nephritic (glomerular bleeding). >3.5g proteinuria + edema = nephrotic (podocyte injury). Can't have both in pure forms, but MPGN is mixed."
    }
]
```

### Example 2: Restrictive vs Obstructive Lung Disease (Respiratory - Future)

```javascript
keyDifferentiations: [
    {
        title: "Restrictive vs Obstructive Lung Disease",
        type: "differentiation",
        summary: "Restrictive = ↓ lung volumes (can't expand lungs). Obstructive = ↓ airflow (can't exhale).",
        keyDistinction: "PFTs: Restrictive has ↓ TLC, normal/high FEV1/FVC. Obstructive has normal TLC, ↓ FEV1/FVC <70%.",
        comparisonPoints: [
            {
                feature: "Pathophysiology",
                restrictive: "↓ Lung compliance (stiff lungs) or ↓ chest wall expansion → can't inflate lungs fully",
                obstructive: "Airway narrowing or loss of elastic recoil → air trapping, can't exhale"
            },
            {
                feature: "FEV1 (forced expiratory volume in 1 sec)",
                restrictive: "↓ (proportional to FVC)",
                obstructive: "↓↓ (more than FVC)"
            },
            {
                feature: "FVC (forced vital capacity)",
                restrictive: "↓↓",
                obstructive: "Normal or ↓"
            },
            {
                feature: "FEV1/FVC ratio",
                restrictive: "Normal (>70%) or high (both ↓ proportionally)",
                obstructive: "<70% (FEV1 ↓↓ more than FVC)"
            },
            {
                feature: "TLC (total lung capacity)",
                restrictive: "↓ (can't fully inflate lungs)",
                obstructive: "Normal or ↑ (air trapping)"
            },
            {
                feature: "RV (residual volume)",
                restrictive: "↓",
                obstructive: "↑ (air trapping)"
            },
            {
                feature: "DLCO (diffusion capacity)",
                restrictive: "↓ (interstitial disease, ↓ surface area) or normal (chest wall, neuromuscular)",
                obstructive: "↓ (emphysema, ↓ surface area) or normal (asthma, chronic bronchitis)"
            }
        ],
        diseases: {
            restrictive: ["Pulmonary fibrosis (IPF, sarcoidosis)", "Pneumoconioses", "Obesity", "Kyphoscoliosis", "Neuromuscular (ALS, myasthenia gravis)"],
            obstructive: ["COPD (emphysema, chronic bronchitis)", "Asthma", "Bronchiectasis", "Cystic fibrosis"]
        },
        clinicalPearl: "FEV1/FVC <70% = obstructive. FEV1/FVC normal + ↓ TLC = restrictive. Restrictive: can't breathe in. Obstructive: can't breathe out."
    }
]
```

---

## Tips for Creating Learning Tools

### General Guidelines:
1. **Keep it concise**: 5-8 features max for comparison tables
2. **High-yield only**: Include what's testable on Step 1
3. **Add clinical pearls**: Memory aids after each tool
4. **Use disease IDs**: Enable UI to create clickable links
5. **Include notes**: Explain caveats or exceptions

### When to Use Each Type:
- **Comparison Table**: 3+ diseases, multiple shared features
- **2x2 Matrix**: 2 binary variables create 4 diagnostic outcomes
- **Algorithm**: Step-by-step workflow with decision points
- **Differentiation**: 2 major categories with detailed side-by-side comparison

### Color/Formatting Ideas (for UI):
- Comparison tables: Alternating row colors
- 2x2 matrices: Color-code quadrants
- Algorithms: Flowchart with arrows
- Differentiations: Two-column layout with divider

---

## Future Enhancements

1. **Interactive algorithms**: Click through decision tree in UI
2. **Hover tooltips**: Hover over disease name → quick preview
3. **Export to Anki**: Generate flashcards from tables
4. **Visual diagrams**: Embed images/illustrations
5. **Mnemonics section**: Add memory aids to tables

// Renal categories
const renalCategories = [
    {
        id: "acute-kidney-injury",
        name: "Acute Kidney Injury (AKI)",
        system: "renal",
        type: "category",
        diseaseIds: [
            "prerenal-aki",
            "acute-tubular-necrosis",
            "acute-interstitial-nephritis",
            "postrenal-aki"
        ],
        pageType: "category",
        detail: {
            approach: "AKI = rapid ↑ Cr (≥0.3 mg/dL in 48h or ≥1.5× baseline in 7 days) or ↓ urine output (<0.5 mL/kg/hr × 6h). Categorize as prerenal (↓ perfusion, FENa <1%, reversible), intrarenal (ATN, GN, AIN), or postrenal (obstruction, bladder scan). Check BUN/Cr ratio (>20 suggests prerenal), urinalysis (casts, protein, blood), and imaging if obstruction suspected.",
            comparisonTables: [
                {
                    title: "Prerenal vs ATN vs AIN vs Postrenal AKI",
                    subtitle: "Key distinguishing features for rapid differentiation",
                    type: "feature-comparison",
                    diseases: ["prerenal-aki", "atn", "ain", "postrenal-aki"],
                    features: [
                        {
                            name: "FENa",
                            values: ["<1%", ">2%", "Variable (>1% if NSAIDs)", "Variable"],
                            note: "Less reliable if patient on diuretics (use FEurea <35% for prerenal instead)"
                        },
                        {
                            name: "Urine Na (mEq/L)",
                            values: ["<20", ">40", "Variable", "Variable"]
                        },
                        {
                            name: "BUN/Cr ratio",
                            values: [">20", "<15", "Variable", "Variable"],
                            note: "Both rise proportionally in intrarenal; BUN ↑↑ in prerenal (proximal reabsorption)"
                        },
                        {
                            name: "Urine osmolality",
                            values: [">500 (concentrated)", "250-350 (isosthenuric)", "Variable", "Variable"]
                        },
                        {
                            name: "Urinalysis",
                            values: ["Bland, hyaline casts", "Muddy brown granular casts", "WBC casts, eosinophiluria", "Bland, may have RBCs if stones"]
                        },
                        {
                            name: "Response to IV fluids",
                            values: ["Cr improves in 24-48h", "No improvement", "No improvement", "No improvement"]
                        },
                        {
                            name: "Clinical context",
                            values: ["Hypovolemia, hypotension, CHF", "Prolonged hypoperfusion, nephrotoxins", "Drug exposure 7-10d prior, rash, fever", "Anuria, bladder distension, BPH"]
                        }
                    ],
                    clinicalPearl: "FENa <1% + oliguria = prerenal until proven otherwise. Muddy brown casts = ATN. WBC casts = AIN. Anuria = postrenal or vascular catastrophe."
                }
            ],
            redFlags: [
                "Oliguria/anuria → fluid overload, hyperkalemia, uremia",
                "Hyperkalemia >6.5 → arrhythmias, cardiac arrest (ECG changes: peaked T waves, wide QRS)",
                "Severe metabolic acidosis (pH <7.1) → emergent dialysis",
                "Uremic complications: pericarditis, encephalopathy, seizures → dialysis urgently"
            ],
            initialWorkup: [
                "BMP: ↑ Cr (baseline comparison), ↑ BUN, hyperkalemia, metabolic acidosis",
                "Urinalysis: casts (muddy brown = ATN, RBC = GN, WBC = AIN, eosinophils = AIN), protein, blood",
                "Urine electrolytes: FENa (prerenal <1%, ATN >2%), urine Na (prerenal <20, ATN >40)",
                "BUN/Cr ratio: >20 suggests prerenal, <15 suggests intrarenal",
                "Renal ultrasound: hydronephrosis (obstruction), kidney size (small = CKD)",
                "Bladder scan: post-void residual if obstruction suspected"
            ],
            differentialCategories: [
                "Prerenal (60%): hypovolemia, hypotension, CHF, cirrhosis, NSAIDs, ACE inhibitors. FENa <1%, BUN/Cr >20.",
                "Intrarenal (35%): ATN (ischemia, nephrotoxins), GN (hematuria, RBC casts), AIN (drugs, rash, eosinophils)",
                "Postrenal (5%): BPH, stones, malignancy, retroperitoneal fibrosis. Bilateral obstruction or single kidney."
            ]
        }
    },
    {
        id: "chronic-kidney-disease",
        name: "Chronic Kidney Disease (CKD)",
        system: "renal",
        type: "category",
        diseaseIds: [
            "ckd-stage-3",
            "ckd-stage-4",
            "ckd-stage-5-esrd",
            "ckd-mineral-bone-disease"
        ],
        pageType: "category",
        detail: {
            approach: "CKD = kidney damage or GFR <60 for ≥3 months. Stages: G1 (GFR >90 + damage), G2 (60-89), G3a (45-59), G3b (30-44), G4 (15-29), G5 (<15 or dialysis = ESRD). Etiologies: diabetes (most common), hypertension, GN, PKD. Complications: anemia (↓ EPO), bone disease (↓ calcitriol, ↑ PTH), acidosis, hyperkalemia, uremia. Manage: BP control (ACE/ARB), treat underlying cause, prepare for dialysis/transplant.",
            redFlags: [
                "GFR <15 (G5 ESRD) → prepare for dialysis or transplant",
                "Severe hyperkalemia, acidosis, fluid overload refractory to diuretics → emergent dialysis",
                "Uremic symptoms: pericarditis, encephalopathy, bleeding → dialysis urgently",
                "Rapidly progressive ↓ GFR → consider acute-on-chronic or RPGN"
            ],
            initialWorkup: [
                "BMP: ↑ Cr, ↓ GFR (calculate with CKD-EPI equation), hyperkalemia, metabolic acidosis, ↑ phosphate, ↓ calcium",
                "CBC: normocytic anemia (↓ EPO)",
                "Urinalysis: proteinuria (albumin/creatinine ratio), hematuria (if GN)",
                "PTH, vitamin D, alkaline phosphatase (CKD-MBD screening)",
                "Renal ultrasound: small echogenic kidneys (chronic), hydronephrosis (obstruction), cysts (PKD)",
                "Hemoglobin A1c (if diabetic), lipid panel (cardiovascular risk)"
            ],
            differentialCategories: [
                "Diabetic nephropathy (40%): albuminuria, hypertension, retinopathy",
                "Hypertensive nephrosclerosis (30%): African American, long-standing HTN",
                "Glomerulonephritis: proteinuria, hematuria, active urine sediment",
                "Polycystic kidney disease: family history, bilateral cysts, HTN, kidney enlargement"
            ]
        }
    },
    {
        id: "glomerular-diseases",
        name: "Glomerular Diseases",
        system: "renal",
        type: "category",
        diseaseIds: [
            "minimal-change-disease",
            "focal-segmental-glomerulosclerosis",
            "membranous-nephropathy",
            "iga-nephropathy",
            "post-infectious-glomerulonephritis",
            "rapidly-progressive-glomerulonephritis"
        ],
        subcategories: [
            {
                id: "nephrotic-syndrome",
                name: "Nephrotic Syndrome",
                diseaseIds: [
                    "minimal-change-disease",
                    "focal-segmental-glomerulosclerosis",
                    "membranous-nephropathy"
                ],
                description: "Podocyte injury → >3.5 g/day proteinuria, hypoalbuminemia (<3 g/dL), edema, hyperlipidemia. Loss of charge barrier → albumin leak. Complications: infections (loss of immunoglobulins), thrombosis (loss of antithrombin III, protein C/S), AKI."
            },
            {
                id: "nephritic-syndrome",
                name: "Nephritic Syndrome",
                diseaseIds: [
                    "iga-nephropathy",
                    "post-infectious-glomerulonephritis",
                    "rapidly-progressive-glomerulonephritis"
                ],
                description: "Glomerular inflammation → hematuria, RBC casts, HTN, oliguria, mild proteinuria (<3.5 g/day). Disrupted GBM → RBC leak. Acute: post-infectious GN. Chronic: IgA nephropathy. Rapidly progressive: RPGN with crescents."
            }
        ],
        pageType: "category",
        detail: {
            approach: "Glomerulopathies: nephrotic (podocyte injury: >3.5 g/day proteinuria, hypoalbuminemia, edema, hyperlipidemia) vs nephritic (glomerular inflammation: hematuria, RBC casts, HTN, mild proteinuria, oliguria). Nephrotic: minimal change (children, podocin), FSGS (adults, ESRD risk), membranous (thickened GBM, PLA2R antibodies). Nephritic: post-infectious (↓ C3), IgA (episodic hematuria), RPGN (crescents, rapid ↓ GFR).",
            redFlags: [
                "Rapidly progressive GN (RPGN): ↑ Cr over days-weeks, crescents on biopsy → plasmapheresis + immunosuppression urgently",
                "Nephrotic syndrome complications: infections (encapsulated organisms), thrombosis (renal vein), AKI",
                "Acute nephritic syndrome with pulmonary hemorrhage → Goodpasture, granulomatosis with polyangiitis (GPA) → life-threatening"
            ],
            initialWorkup: [
                "Urinalysis: proteinuria (nephrotic >3.5 g/day), hematuria, RBC casts (nephritic), dysmorphic RBCs",
                "24-hour urine protein or spot albumin/creatinine ratio",
                "Serum albumin, lipid panel (nephrotic syndrome)",
                "Complement levels: ↓ C3 (post-infectious GN, MPGN), ↓ C3 + C4 (lupus, cryoglobulinemia)",
                "Serologies: ANA (lupus), ANCA (vasculitis), anti-GBM (Goodpasture), anti-PLA2R (membranous), HIV, hepatitis",
                "Renal biopsy: definitive diagnosis (light microscopy, immunofluorescence, electron microscopy)"
            ],
            differentialCategories: [
                "Nephrotic: minimal change (children, podocin fusion), FSGS (adults, sclerosis), membranous (thickened GBM, spike-and-dome), diabetic nephropathy, amyloidosis",
                "Nephritic: post-infectious (↓ C3, subepithelial humps), IgA (mesangial deposits), RPGN (crescents, ANCA/anti-GBM)"
            ]
        }
    },
    {
        id: "tubulointerstitial-diseases",
        name: "Tubulointerstitial Diseases",
        system: "renal",
        type: "category",
        diseaseIds: [
            "rta-type-1",
            "rta-type-2",
            "rta-type-3",
            "rta-type-4",
            "fanconi-syndrome"
        ],
        pageType: "category",
        detail: {
            approach: "Tubulointerstitial diseases: affect tubules/interstitium, not glomeruli. Presents with tubular dysfunction (RTA, Fanconi), AKI (ATN, AIN), or CKD. RTA: normal anion gap metabolic acidosis. Type 1 (distal, ↓ H+ secretion, alkaline urine pH >5.5, stones). Type 2 (proximal, ↓ HCO3 reabsorption, urine pH <5.5). Type 4 (hyperkalemic, ↓ aldosterone, ↓ NH4+ excretion). Fanconi: proximal tubule dysfunction → glycosuria, aminoaciduria, phosphaturia.",
            redFlags: [
                "Severe metabolic acidosis (pH <7.2) with normal anion gap → consider RTA, diarrhea",
                "Type 1 RTA → kidney stones, nephrocalcinosis (alkaline urine precipitates calcium)",
                "Fanconi syndrome in child → cystinosis, Wilson disease, heavy metals",
                "AIN with eosinophiluria → drug reaction (discontinue offending agent)"
            ],
            initialWorkup: [
                "ABG or VBG: metabolic acidosis (↓ HCO3, ↓ pH)",
                "BMP: normal anion gap (anion gap = Na - Cl - HCO3, normal 8-12), hyperkalemia (type 4) or hypokalemia (type 1, 2)",
                "Urine pH: >5.5 in type 1 RTA despite acidosis, <5.5 in type 2 and 4",
                "Urine anion gap: positive (type 1, 4), negative (diarrhea) - estimates NH4+ excretion",
                "Urine studies: glucosuria (despite normal glucose = Fanconi), aminoaciduria, phosphaturia",
                "Imaging: renal ultrasound (nephrocalcinosis in type 1 RTA)"
            ],
            differentialCategories: [
                "Type 1 RTA (distal): autoimmune (Sjögren, SLE), amphotericin, sickle cell. Stones, hypokalemia, alkaline urine pH.",
                "Type 2 RTA (proximal): Fanconi syndrome, carbonic anhydrase inhibitors, multiple myeloma. Hypokalemia, urine pH <5.5.",
                "Type 4 RTA: DM, NSAIDs, ACE inhibitors, heparin. Hyperkalemia, mild acidosis.",
                "Fanconi: cystinosis, Wilson, heavy metals, medications (tenofovir, ifosfamide). Rickets, growth failure."
            ]
        }
    },
    {
        id: "electrolyte-disorders",
        name: "Electrolyte Disorders",
        system: "renal",
        type: "category",
        diseaseIds: [
            "hyponatremia",
            "hypernatremia",
            "hypokalemia",
            "hyperkalemia",
            "hypercalcemia",
            "hypocalcemia",
            "hypophosphatemia",
            "hyperphosphatemia",
            "hypomagnesemia",
            "hypermagnesemia"
        ],
        pageType: "category",
        detail: {
            approach: "Electrolyte disorders: assess volume status first. Hyponatremia: hypotonic (SIADH, psychogenic polydipsia, thiazides), isotonic (hyperglycemia, TURP syndrome), hypertonic (hyperglycemia). Hypernatremia: water loss (DI, diarrhea, sweating) or Na gain (salt ingestion). Hypokalemia: GI loss, renal loss (diuretics, RTA), ↑ aldosterone. Hyperkalemia: ↓ excretion (renal failure, meds), ↑ release (rhabdomyolysis, hemolysis), transcellular shift (acidosis, hyperglycemia). Hypercalcemia: PTH-mediated (hyperparathyroidism) vs non-PTH (malignancy, granulomatous disease). Hypocalcemia: hypoparathyroidism, vitamin D deficiency, CKD.",
            redFlags: [
                "Severe hyponatremia (<120) → seizures, cerebral edema. Correct slowly (8-10 mEq/L per 24h) to avoid osmotic demyelination.",
                "Hyperkalemia >6.5 → arrhythmias, cardiac arrest. ECG: peaked T waves → wide QRS → sine wave. Treat with calcium gluconate (stabilize), insulin + glucose, albuterol, dialysis.",
                "Hypercalcemia >14 → altered mental status, arrhythmias. IV fluids + calcitonin + bisphosphonates urgently.",
                "Symptomatic hypocalcemia (tetany, Chvostek, Trousseau, QT prolongation) → IV calcium gluconate."
            ],
            initialWorkup: [
                "BMP: Na, K, Cl, HCO3, glucose, Ca (correct for albumin: corrected Ca = measured Ca + 0.8 × (4 - albumin))",
                "Serum osmolality (hypo/hypernatremia): differentiates hypotonic, isotonic, hypertonic",
                "Urine osmolality, urine Na (hyponatremia): SIADH (Uosm >100, UNa >40), hypovolemia (Uosm >100, UNa <20)",
                "ECG: hyperkalemia (peaked T, wide QRS), hypercalcemia (short QT), hypocalcemia (long QT)",
                "PTH, vitamin D (Ca disorders): ↑ PTH + ↑ Ca = primary hyperparathyroidism, ↓ PTH + ↑ Ca = malignancy",
                "ABG: acidosis (hyperkalemia, hypocalcemia), alkalosis (hypokalemia, hypercalcemia)"
            ],
            differentialCategories: [
                "Hyponatremia: SIADH (euvolemic, Uosm >100, UNa >40), hypovolemia (diuretics, vomiting, diarrhea), hypervolemia (CHF, cirrhosis, nephrotic)",
                "Hypernatremia: DI (central vs nephrogenic, Uosm <300), dehydration (elderly, diarrhea), salt ingestion",
                "Hypokalemia: GI loss (diarrhea, vomiting), renal loss (diuretics, RTA, ↑ aldosterone), ↓ intake",
                "Hyperkalemia: renal failure, meds (ACE/ARB, K-sparing diuretics), acidosis, rhabdomyolysis, pseudohyperkalemia (hemolysis)",
                "Hypercalcemia: hyperparathyroidism (↑ PTH), malignancy (↓ PTH, PTHrP), granulomatous disease, vitamin D toxicity",
                "Hypocalcemia: hypoparathyroidism, vitamin D deficiency, CKD (↓ calcitriol), acute pancreatitis, rhabdomyolysis"
            ]
        }
    },
    {
        id: "acid-base-disorders",
        name: "Acid-Base Disorders",
        system: "renal",
        type: "category",
        diseaseIds: [
            "metabolic-acidosis-high-ag",
            "metabolic-acidosis-normal-ag",
            "metabolic-alkalosis",
            "respiratory-acidosis-alkalosis",
            "mixed-acid-base-disorders"
        ],
        pageType: "category",
        detail: {
            approach: "Acid-base: check ABG (pH, PaCO2, HCO3). Metabolic acidosis: ↓ pH, ↓ HCO3. Check anion gap (AG = Na - Cl - HCO3). ↑ AG (>12) = MUDPILES (methanol, uremia, DKA, propylene glycol/paraldehyde, iron/INH, lactic acidosis, ethylene glycol, salicylates). Normal AG = diarrhea, RTA, hyperalimentation, acetazolamide. Metabolic alkalosis: ↑ pH, ↑ HCO3. Saline-responsive (vomiting, diuretics, UNa <20) vs saline-resistant (hyperaldosteronism, UNa >20). Respiratory: PaCO2 determines (↑ = acidosis, ↓ = alkalosis). Compensation: metabolic → respiratory (fast), respiratory → metabolic (slow, 3-5 days).",
            redFlags: [
                "Severe acidosis (pH <7.1) → arrhythmias, ↓ myocardial contractility, shock → treat underlying cause, consider bicarbonate (if pH <7.1)",
                "↑ Anion gap acidosis → DKA, lactic acidosis, toxic ingestion (methanol, ethylene glycol) → life-threatening",
                "Metabolic acidosis + respiratory acidosis → impending respiratory failure → intubate",
                "Severe alkalosis (pH >7.6) → arrhythmias, seizures, ↓ Ca (tetany)"
            ],
            initialWorkup: [
                "ABG: pH (7.35-7.45), PaCO2 (35-45), HCO3 (22-26), PaO2",
                "BMP: anion gap (Na - Cl - HCO3, normal 8-12), glucose (DKA), BUN/Cr (uremia), lactate (lactic acidosis)",
                "Serum osmolal gap (if toxic ingestion suspected): measured osm - calculated osm (2×Na + glucose/18 + BUN/2.8). Gap >10 → methanol, ethylene glycol, ethanol.",
                "Urine anion gap (normal gap acidosis): positive (RTA), negative (diarrhea)",
                "Urine Cl (metabolic alkalosis): <20 (saline-responsive = vomiting, diuretics), >20 (saline-resistant = hyperaldosteronism)",
                "ECG: T wave changes (hyperkalemia in acidosis), arrhythmias"
            ],
            differentialCategories: [
                "Metabolic acidosis ↑ AG: MUDPILES (methanol, uremia, DKA, propylene glycol, iron/INH, lactic acidosis, ethylene glycol, salicylates)",
                "Metabolic acidosis normal AG: diarrhea, RTA, hyperalimentation, acetazolamide (HARDUPS)",
                "Metabolic alkalosis: vomiting, NG suction, diuretics (saline-responsive), hyperaldosteronism, Cushing (saline-resistant)",
                "Respiratory acidosis: COPD, opioids, neuromuscular disease (hypoventilation)",
                "Respiratory alkalosis: anxiety, pain, PE, sepsis, pregnancy, high altitude (hyperventilation)"
            ]
        }
    },
    {
        id: "nephrolithiasis",
        name: "Nephrolithiasis & Urinary Tract Stones",
        system: "renal",
        type: "category",
        diseaseIds: [
            "calcium-oxalate-stones",
            "uric-acid-stones",
            "struvite-stones",
            "cystine-stones"
        ],
        pageType: "category",
        detail: {
            approach: "Nephrolithiasis: flank pain radiating to groin, hematuria, nausea/vomiting. Calcium oxalate (80%): radiopaque, hypercalciuria, ↑ oxalate (Crohn's), ↓ citrate. Uric acid (5-10%): radiolucent, acidic urine (pH <5.5), gout, ileostomy. Struvite (10%): staghorn calculi, UTI with urease-producing organisms (Proteus, Klebsiella). Cystine (1%): radiopaque, hexagonal crystals, cystinuria (autosomal recessive). CT without contrast gold standard. Treat: hydration, analgesia (NSAIDs, opioids), tamsulosin (α-blocker), lithotripsy or ureteroscopy if >10 mm or persistent.",
            redFlags: [
                "Complete obstruction + infection (pyonephrosis) → sepsis, shock → emergent decompression (nephrostomy or stent) + antibiotics",
                "Solitary kidney or bilateral obstruction → AKI → urgent intervention",
                "Anuria, severe AKI → consider bilateral obstruction or single kidney with stone",
                "Persistent pain or vomiting despite analgesia → consider complications (infection, complete obstruction)"
            ],
            initialWorkup: [
                "Urinalysis: hematuria (90%), crystals (calcium oxalate, uric acid, cystine), pH (acidic <5.5 = uric acid, alkaline >7.5 = struvite)",
                "BMP: Cr (AKI if obstruction), Ca (hypercalcemia), uric acid",
                "Urine culture: if infection suspected (struvite stones)",
                "CT abdomen/pelvis without contrast: gold standard, detects all stone types except indinavir, shows size/location/hydronephrosis",
                "Renal ultrasound: alternative if CT contraindicated (pregnancy), less sensitive for small stones",
                "24-hour urine collection (recurrent stones): Ca, oxalate, uric acid, citrate, cystine, volume"
            ],
            differentialCategories: [
                "Calcium oxalate (80%): hypercalciuria (idiopathic, hyperparathyroidism), hyperoxaluria (Crohn's, gastric bypass), hypocitraturia (RTA, diarrhea)",
                "Uric acid (5-10%): gout, ileostomy, acidic urine, high purine diet, tumor lysis syndrome",
                "Struvite (10%): UTI with urease organisms (Proteus, Klebsiella), staghorn calculi, alkaline urine",
                "Cystine (1%): cystinuria (autosomal recessive), hexagonal crystals, young patients"
            ]
        }
    }
];

export default renalCategories;

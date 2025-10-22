// Endocrine categories and disorders
const endocrineCategories = [
    {
        id: "thyroid-disorders",
        name: "Thyroid Disorders",
        system: "endocrine",
        type: "pathophysiologic",
        diseaseIds: [
            "hypothyroidism",
            "hyperthyroidism",
            "graves-disease",
            "hashimoto-thyroiditis",
            "thyroid-nodules",
            "thyroid-cancer"
        ],
        subcategories: [
            {
                id: "hypothyroidism",
                name: "Hypothyroidism",
                diseaseIds: [
                    "hypothyroidism",
                    "hashimoto-thyroiditis"
                ],
                description: "↓ T4/T3, ↑ TSH (primary). Weight gain, fatigue, cold intolerance, constipation, bradycardia.",
                subcategoryDetail: {
                    diagnosticAlgorithm: {
                        type: 'mermaid',
                        content: `graph TD
    A[Patient with Hypothyroid Symptoms] --> B[Measure TSH]
    B --> C{TSH Level?}
    C -->|High TSH| D[Primary Hypothyroidism<br/>Thyroid gland problem]
    C -->|Low TSH| E[Secondary Hypothyroidism<br/>Pituitary problem or<br/>Euthyroid sick syndrome]
    D --> F[Measure Free T4]
    F --> G{Free T4 Level?}
    G -->|Low T4| H[Overt Primary<br/>Hypothyroidism]
    G -->|Normal T4| I[Subclinical<br/>Hypothyroidism]
    H --> J[Determine Etiology]
    I --> J
    J --> K{Anti-TPO<br/>Antibodies?}
    K -->|Positive| L[Hashimoto Thyroiditis<br/>Most common in US]
    K -->|Negative| M{History?}
    M --> N[Iodine Deficiency<br/>Most common worldwide]
    M --> O[Post-thyroidectomy or<br/>Radioactive iodine]
    M --> P[Medications<br/>Lithium, Amiodarone]
    L --> Q[Treatment:<br/>Levothyroxine]
    N --> Q
    O --> Q
    P --> Q
    Q --> R[Monitor TSH<br/>every 6-8 weeks<br/>until stable]`
                    },
                    keyFeatures: [
                        "Weight gain, fatigue, cold intolerance (opposite of hyperthyroid)",
                        "Constipation, dry skin, hair loss",
                        "Bradycardia, diastolic hypertension",
                        "Delayed deep tendon reflexes (classic finding)"
                    ],
                    diseaseDistinctions: `Hashimoto Thyroiditis (most common cause in US):
  - Autoimmune destruction of thyroid
  - Anti-TPO antibodies (90%), anti-thyroglobulin antibodies
  - Goiter may be present
  - Women > men (10:1)
  - Gradual onset

Iodine Deficiency (most common worldwide):
  - Endemic goiter
  - Cretinism if congenital
  - Prevented by iodized salt

Secondary Hypothyroidism (pituitary):
  - ↓ TSH, ↓ T4
  - Other pituitary hormone deficiencies
  - MRI shows pituitary mass or empty sella`,
                    clinicalPearls: [
                        "Myxedema coma: severe hypothyroidism + hypothermia + AMS. Life-threatening!",
                        "Subclinical hypothyroidism: ↑ TSH, normal T4. Treat if TSH >10 or symptomatic",
                        "Pregnancy: increase levothyroxine dose by 30% (increased hormone needs)",
                        "Don't treat based on symptoms alone - always check TSH first"
                    ]
                }
            },
            {
                id: "hyperthyroidism",
                name: "Hyperthyroidism",
                diseaseIds: [
                    "hyperthyroidism",
                    "graves-disease"
                ],
                description: "↑ T4/T3, ↓ TSH. Weight loss, anxiety, heat intolerance, tachycardia, tremor.",
                subcategoryDetail: {
                    diagnosticAlgorithm: `Step 1: Measure TSH
  - ↓ TSH → primary hyperthyroidism
  - ↑ TSH → TSH-secreting pituitary adenoma (rare)

Step 2: Measure free T4 and T3
  - ↑ Free T4/T3 + ↓ TSH → overt hyperthyroidism
  - Normal T4/T3 + ↓ TSH → subclinical hyperthyroidism

Step 3: Radioactive iodine uptake (RAIU)
  - HIGH uptake (diffuse) → Graves disease
  - HIGH uptake (nodular) → Toxic multinodular goiter or toxic adenoma
  - LOW uptake → Thyroiditis (subacute, silent, postpartum)

Step 4: Additional tests
  - TSI/TRAb antibodies → Graves disease
  - Thyroid ultrasound for nodules

Step 5: Treatment
  - Methimazole or PTU (antithyroid drugs)
  - Radioactive iodine ablation (definitive)
  - Thyroidectomy (if large goiter or pregnancy)
  - Beta-blockers for symptom control`,
                    keyFeatures: [
                        "Weight loss despite increased appetite",
                        "Heat intolerance, sweating, anxiety, tremor",
                        "Tachycardia, atrial fibrillation, palpitations",
                        "Diarrhea, hyperreflexia"
                    ],
                    diseaseDistinctions: `Graves Disease (most common):
  - Autoimmune: TSI antibodies stimulate TSH receptor
  - Diffuse goiter, HIGH RAIU (diffuse)
  - Ophthalmopathy (exophthalmos, lid lag) - SPECIFIC to Graves
  - Pretibial myxedema (dermopathy)
  - Women > men

Toxic Multinodular Goiter:
  - Older patients
  - Nodular goiter, HIGH RAIU (nodular pattern)
  - NO ophthalmopathy

Subacute Thyroiditis (de Quervain):
  - Viral prodrome
  - PAINFUL thyroid, jaw/ear pain
  - LOW RAIU (thyroid damaged, releases stored hormone)
  - Triphasic: hyperthyroid → euthyroid → hypothyroid → recovery
  - ESR elevated

Silent/Postpartum Thyroiditis:
  - Painless
  - LOW RAIU
  - Postpartum (within 1 year of delivery)
  - Triphasic course`,
                    clinicalPearls: [
                        "Thyroid storm: severe hyperthyroidism + fever + AMS + tachycardia. Mortality 20-30%!",
                        "Graves ophthalmopathy: treat with selenium, steroids, or radiation. Independent of thyroid status",
                        "PTU preferred in pregnancy (1st trimester) - methimazole has teratogenic risk",
                        "RAI contraindicated in pregnancy and Graves ophthalmopathy (can worsen eyes)"
                    ]
                }
            }
        ],
        pageType: "category",
        detail: {
            overview: "Thyroid disorders result from excess (hyperthyroidism) or deficiency (hypothyroidism) of thyroid hormones (T4, T3). TSH from pituitary regulates thyroid via negative feedback. Primary disorders = thyroid gland problem (TSH opposite of T4). Secondary = pituitary problem (TSH and T4 both low).",
            classification: [
                "Hypothyroidism: Hashimoto (most common in US), iodine deficiency (worldwide), post-ablation, medications",
                "Hyperthyroidism: Graves (most common), toxic multinodular goiter, toxic adenoma, thyroiditis (transient)",
                "Thyroid nodules: 95% benign, 5% malignant. Evaluate with ultrasound + FNA if suspicious",
                "Thyroid cancer: papillary (most common, excellent prognosis), follicular, medullary, anaplastic"
            ],
            generalPrinciples: [
                "TSH is best screening test: ↑ TSH = hypothyroid, ↓ TSH = hyperthyroid",
                "Primary (gland): TSH opposite T4. Secondary (pituitary): TSH and T4 same direction",
                "Thyroid exam: palpate for goiter, nodules, tenderness. Listen for bruit (Graves)",
                "Treatment: hypothyroid → levothyroxine. Hyperthyroid → antithyroid drugs, RAI, or surgery",
                "Pregnancy increases thyroid hormone needs. Screen TSH in pregnancy, adjust levothyroxine dose"
            ]
        }
    },
    {
        id: "diabetes-glucose-disorders",
        name: "Diabetes & Glucose Disorders",
        system: "endocrine",
        type: "pathophysiologic",
        diseaseIds: [
            "diabetes-type-1",
            "diabetes-type-2",
            "diabetic-ketoacidosis",
            "hyperosmolar-hyperglycemic-state",
            "hypoglycemia"
        ],
        subcategories: [
            {
                id: "diabetes-mellitus",
                name: "Diabetes Mellitus (Type 1 & 2)",
                diseaseIds: [
                    "diabetes-type-1",
                    "diabetes-type-2"
                ],
                description: "Chronic hyperglycemia. Type 1: autoimmune, insulin deficiency. Type 2: insulin resistance.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Type 1 vs Type 2 Diabetes",
                        description: "Which type of diabetes?",
                        content: `TYPE 1 DIABETES:
  - Pathophysiology: Autoimmune destruction of pancreatic β cells → absolute insulin deficiency
  - Age of onset: Children/young adults (<30 years)
  - Body habitus: Normal or thin
  - Onset: Acute (days to weeks)
  - Ketosis-prone: YES (DKA common)
  - C-peptide: LOW (no insulin production)
  - Antibodies: Anti-GAD, anti-islet cell antibodies
  - Genetics: HLA-DR3, HLA-DR4
  - Treatment: INSULIN (required for survival)
  - Complications: Microvascular (retinopathy, nephropathy, neuropathy)

TYPE 2 DIABETES:
  - Pathophysiology: Insulin resistance + relative insulin deficiency
  - Age of onset: Adults (>40 years), but increasing in youth
  - Body habitus: Obese (80-90%)
  - Onset: Gradual (months to years)
  - Ketosis-prone: NO (HHS more common)
  - C-peptide: NORMAL or HIGH (hyperinsulinemia initially)
  - Antibodies: Negative
  - Genetics: Strong family history, polygenic
  - Treatment: Lifestyle + metformin → add other agents → insulin if needed
  - Complications: Macrovascular (CAD, stroke, PVD) + microvascular`
                    },
                    diagnosticAlgorithm: `Diagnosis of Diabetes (any of the following):
  1. Fasting glucose ≥126 mg/dL (on 2 occasions)
  2. Random glucose ≥200 mg/dL + symptoms
  3. 2-hour OGTT ≥200 mg/dL
  4. HbA1c ≥6.5%

Prediabetes:
  - Fasting glucose 100-125 mg/dL
  - HbA1c 5.7-6.4%
  - 2-hour OGTT 140-199 mg/dL

Screening:
  - Start at age 35 (or earlier if overweight + risk factors)
  - Screen every 3 years if normal`,
                    keyFeatures: [
                        "Polyuria, polydipsia, polyphagia (classic triad)",
                        "Type 1: abrupt onset, weight loss, DKA at presentation",
                        "Type 2: gradual onset, obesity, acanthosis nigricans",
                        "Chronic complications: retinopathy, nephropathy, neuropathy, CAD"
                    ],
                    clinicalPearls: [
                        "HbA1c goal: <7% for most, <6.5% if newly diagnosed, <8% if elderly/comorbidities",
                        "Metformin is first-line for Type 2. Also helps with weight loss",
                        "SGLT2 inhibitors (empagliflozin) reduce CV mortality in Type 2 with CAD",
                        "Tight glycemic control prevents microvascular complications (DCCT trial)"
                    ]
                }
            },
            {
                id: "diabetic-emergencies",
                name: "Diabetic Emergencies (DKA & HHS)",
                diseaseIds: [
                    "diabetic-ketoacidosis",
                    "hyperosmolar-hyperglycemic-state"
                ],
                description: "Acute hyperglycemic crises. DKA: acidosis + ketones. HHS: extreme hyperglycemia without ketones.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "DKA vs HHS",
                        description: "Which hyperglycemic emergency?",
                        content: `DIABETIC KETOACIDOSIS (DKA):
  - Diabetes type: Type 1 (most common)
  - Glucose: >250 mg/dL (moderate)
  - pH: <7.3 (acidotic)
  - Ketones: POSITIVE (blood or urine)
  - Anion gap: ELEVATED (>12)
  - Osmolality: Normal to slightly elevated
  - Mental status: Usually alert (unless severe)
  - Trigger: Infection, missed insulin, new-onset DM1
  - Pathophysiology: Absolute insulin deficiency → lipolysis → ketone production → metabolic acidosis
  - Treatment: IV fluids + insulin + K+ replacement
  - Mortality: 1-5%

HYPEROSMOLAR HYPERGLYCEMIC STATE (HHS):
  - Diabetes type: Type 2 (most common)
  - Glucose: >600 mg/dL (VERY high)
  - pH: >7.3 (NOT acidotic)
  - Ketones: Negative or mild
  - Anion gap: Normal or slightly elevated
  - Osmolality: VERY HIGH (>320 mOsm/kg)
  - Mental status: AMS, stupor, coma (from hyperosmolality)
  - Trigger: Infection, stroke, MI, poor adherence
  - Pathophysiology: Relative insulin deficiency + severe dehydration
  - Treatment: Aggressive IV fluids (more than DKA) + insulin + K+
  - Mortality: 10-20% (higher than DKA)`
                    },
                    diagnosticAlgorithm: {
                        type: 'mermaid',
                        content: `graph TD
    A[Hyperglycemic Crisis] --> B{Check Glucose,<br/>pH, Ketones}
    B --> C{pH < 7.3 AND<br/>Ketones Positive?}
    C -->|YES| D[DKA<br/>Diabetic Ketoacidosis]
    C -->|NO| E{Glucose > 600<br/>AND Osmolality > 320?}
    E -->|YES| F[HHS<br/>Hyperosmolar<br/>Hyperglycemic State]
    E -->|NO| G[Re-evaluate]

    D --> H[DKA Treatment]
    H --> H1[Step 1: IV Fluids<br/>NS 1-2L in 1st hour]
    H1 --> H2[Step 2: IV Insulin<br/>0.1 units/kg/hr]
    H2 --> H3[Step 3: K+ Replacement<br/>if K < 5.3]
    H3 --> H4{Glucose < 200?}
    H4 -->|YES| H5[Switch to D5W<br/>Continue insulin]
    H4 -->|NO| H2
    H5 --> H6{Anion Gap<br/>Closed?}
    H6 -->|NO| H5
    H6 -->|YES| H7[Overlap IV + SubQ insulin<br/>2 hours before stopping IV]

    F --> I[HHS Treatment]
    I --> I1[Step 1: Aggressive<br/>IV Fluids<br/>NS then 0.45% saline]
    I1 --> I2[Step 2: IV Insulin<br/>lower dose than DKA]
    I2 --> I3[Step 3: K+ Replacement]
    I3 --> I4[Slow Osmolality<br/>Correction<br/>Avoid cerebral edema]`
                    },
                    keyFeatures: [
                        "DKA: Kussmaul breathing (deep, rapid), fruity breath (acetone)",
                        "HHS: Severe dehydration, AMS/coma, NO ketoacidosis",
                        "Both: hyperglycemia, but HHS is MUCH higher glucose",
                        "Precipitants: infection (most common), MI, stroke, medications"
                    ],
                    clinicalPearls: [
                        "DKA with normal glucose = euglycemic DKA (SGLT2 inhibitors, pregnancy)",
                        "Cerebral edema: complication of DKA in children. Rapid glucose correction → brain swelling",
                        "Don't stop insulin when glucose normalizes in DKA - continue until anion gap closes!",
                        "HHS has higher mortality due to older patients and severe dehydration"
                    ]
                }
            }
        ],
        pageType: "category",
        detail: {
            overview: "Diabetes mellitus: chronic hyperglycemia from insulin deficiency (Type 1) or insulin resistance (Type 2). Complications include microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (CAD, stroke, PVD). Acute complications: DKA (Type 1), HHS (Type 2), hypoglycemia (treatment-related).",
            classification: [
                "Type 1: autoimmune β-cell destruction, absolute insulin deficiency, ketosis-prone",
                "Type 2: insulin resistance + relative deficiency, obesity-related, gradual onset",
                "Gestational diabetes: diagnosed in pregnancy, screen at 24-28 weeks with OGTT",
                "Monogenic diabetes: MODY (young-onset, autosomal dominant), neonatal diabetes"
            ],
            generalPrinciples: [
                "Diagnosis: fasting glucose ≥126, random ≥200 + symptoms, HbA1c ≥6.5%, 2hr OGTT ≥200",
                "HbA1c reflects average glucose over 3 months. Goal <7% for most patients",
                "Complications screening: annual foot exam, annual eye exam, annual urine albumin/creatinine",
                "Hypoglycemia: glucose <70. Symptoms: tremor, palpitations, sweating, confusion. Treat with glucose",
                "Somogyi effect: nocturnal hypoglycemia → rebound hyperglycemia. Dawn phenomenon: early AM hyperglycemia from cortisol/GH"
            ]
        }
    },
    {
        id: "adrenal-disorders",
        name: "Adrenal Disorders",
        system: "endocrine",
        type: "pathophysiologic",
        diseaseIds: [
            "cushing-syndrome",
            "addison-disease",
            "primary-hyperaldosteronism",
            "pheochromocytoma",
            "congenital-adrenal-hyperplasia"
        ],
        subcategories: [
            {
                id: "cortisol-disorders",
                name: "Cortisol Disorders (Cushing vs Addison)",
                diseaseIds: [
                    "cushing-syndrome",
                    "addison-disease"
                ],
                description: "Cortisol excess (Cushing) vs deficiency (Addison). Central obesity vs hyperpigmentation.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Cushing Syndrome vs Addison Disease",
                        description: "Which cortisol disorder?",
                        content: `CUSHING SYNDROME (Cortisol Excess):
  - Pathophysiology: Excess cortisol from any source
  - Causes: Cushing disease (pituitary adenoma, 70%), adrenal adenoma, ectopic ACTH (small cell lung cancer), exogenous steroids
  - Appearance: Central obesity, moon facies, buffalo hump, supraclavicular fat pads
  - Skin: Purple striae (>1cm), easy bruising, thin skin, hirsutism, acne
  - Metabolic: Hyperglycemia, hypertension, hypokalemia (if ectopic ACTH)
  - Musculoskeletal: Proximal muscle weakness, osteoporosis
  - Psychiatric: Depression, psychosis, cognitive impairment
  - Labs: ↑ cortisol, ↑ glucose, ↓ K+ (if severe)
  - ACTH: High (Cushing disease, ectopic) vs Low (adrenal tumor)

ADDISON DISEASE (Cortisol Deficiency):
  - Pathophysiology: Primary adrenal insufficiency (cortisol + aldosterone deficiency)
  - Causes: Autoimmune (most common in US, 80%), TB (worldwide), hemorrhage, metastases
  - Appearance: Hyperpigmentation (↑ ACTH stimulates melanocytes), weight loss
  - Skin: Bronzing of skin, darkening of palmar creases, mucosa (gums)
  - Metabolic: Hypoglycemia, hypotension, hyperkalemia, hyponatremia
  - GI: Nausea, vomiting, abdominal pain, salt craving
  - Labs: ↓ cortisol, ↓ aldosterone, ↑ ACTH, ↑ K+, ↓ Na+
  - Addisonian crisis: shock, hypoglycemia, hyperkalemia (life-threatening!)`
                    },
                    diagnosticAlgorithm: {
                        type: 'mermaid',
                        content: `graph TD
    subgraph CUSHING["CUSHING SYNDROME WORKUP"]
    A[Suspect Cushing] --> B[Screen for Hypercortisolism]
    B --> B1[24hr urine cortisol OR<br/>Late-night salivary cortisol OR<br/>1mg dexamethasone test]
    B1 --> C{Cortisol<br/>Elevated?}
    C -->|YES| D[Measure ACTH]
    C -->|NO| Z1[Not Cushing]
    D --> E{ACTH Level?}
    E -->|HIGH| F[Pituitary or<br/>Ectopic ACTH]
    E -->|LOW| G[Adrenal Tumor]
    F --> H[High-dose Dex Test]
    H --> I{Suppresses?}
    I -->|YES| J[Cushing Disease<br/>Pituitary adenoma<br/>→ Transsphenoidal surgery]
    I -->|NO| K[Ectopic ACTH<br/>e.g., Small cell lung CA<br/>→ Treat malignancy]
    G --> L[CT Adrenals<br/>→ Adrenalectomy]
    end

    subgraph ADDISON["ADDISON DISEASE WORKUP"]
    M[Suspect Addison] --> N[Morning Cortisol + ACTH]
    N --> O{Low Cortisol<br/>High ACTH?}
    O -->|YES| P[ACTH Stimulation Test<br/>Give cosyntropin]
    O -->|NO| Z2[Not Primary<br/>Adrenal Insufficiency]
    P --> Q{Cortisol<br/>Rises?}
    Q -->|NO| R[Confirmed Primary<br/>Adrenal Insufficiency]
    Q -->|YES| Z2
    R --> S[Determine Etiology]
    S --> T{21-hydroxylase<br/>antibodies?}
    T -->|Positive| U[Autoimmune<br/>Addison Disease]
    T -->|Negative| V[CT Adrenals]
    V --> W[Atrophic: Autoimmune<br/>Enlarged: TB, hemorrhage, mets]
    U --> X[Treatment:<br/>Hydrocortisone +<br/>Fludrocortisone<br/>Stress-dose steroids]
    W --> X
    end`
                    },
                    keyFeatures: [
                        "Cushing: central obesity, moon facies, purple striae, proximal weakness",
                        "Addison: hyperpigmentation, hypotension, hyperkalemia, hyponatremia",
                        "Cushing: HTN + hyperglycemia. Addison: hypotension + hypoglycemia",
                        "ACTH differentiates: High in Addison (trying to stimulate failed adrenals), High/Low in Cushing (depends on source)"
                    ],
                    clinicalPearls: [
                        "Cushing vs Cushing's: Cushing SYNDROME (any cause), Cushing DISEASE (pituitary adenoma specifically)",
                        "Addisonian crisis triggers: infection, surgery, trauma. Treat empirically with IV hydrocortisone + fluids!",
                        "Chronic steroid use → secondary adrenal insufficiency (low ACTH + cortisol). Taper steroids slowly!",
                        "Nelson syndrome: after bilateral adrenalectomy for Cushing disease, pituitary adenoma grows unchecked → ↑↑ ACTH, hyperpigmentation"
                    ]
                }
            },
            {
                id: "aldosterone-catecholamine-disorders",
                name: "Aldosterone & Catecholamine Excess",
                diseaseIds: [
                    "primary-hyperaldosteronism",
                    "pheochromocytoma"
                ],
                description: "Hyperaldosteronism: HTN + hypokalemia. Pheochromocytoma: episodic HTN + headache + sweating.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Primary Hyperaldosteronism vs Pheochromocytoma",
                        description: "Which cause of secondary hypertension?",
                        content: `PRIMARY HYPERALDOSTERONISM (Conn Syndrome):
  - Pathophysiology: Excess aldosterone → Na+ retention, K+ loss
  - Causes: Adrenal adenoma (Conn syndrome, 35%), bilateral adrenal hyperplasia (65%)
  - Presentation: Hypertension + hypokalemia (classic triad: HTN + ↓ K+ + metabolic alkalosis)
  - Symptoms: Often asymptomatic, or muscle weakness/cramps (hypokalemia), polyuria, polydipsia
  - Blood pressure: SUSTAINED hypertension (resistant to treatment)
  - Labs: ↓ K+, ↑ Na+, metabolic alkalosis, ↓ renin, ↑ aldosterone
  - Screening: Aldosterone-to-renin ratio (↑↑)
  - Confirmation: Saline suppression test (aldosterone NOT suppressed)
  - Imaging: CT adrenals (adenoma vs bilateral hyperplasia)
  - Treatment: Adenoma → surgery. Hyperplasia → spironolactone (aldosterone antagonist)

PHEOCHROMOCYTOMA:
  - Pathophysiology: Catecholamine-secreting tumor of adrenal medulla (or extra-adrenal chromaffin cells)
  - Rule of 10s: 10% bilateral, 10% extra-adrenal, 10% malignant, 10% familial
  - Presentation: Episodic HTN + headache + sweating + palpitations (classic triad)
  - Symptoms: Paroxysmal spells (minutes to hours), anxiety, tremor, pallor
  - Blood pressure: EPISODIC hypertension (vs sustained in hyperaldosteronism)
  - Labs: ↑ plasma metanephrines (most sensitive), ↑ 24-hour urine metanephrines
  - Imaging: CT/MRI adrenals, MIBG scan (localizes catecholamine-secreting tissue)
  - Associations: MEN 2A/2B, von Hippel-Lindau, NF1
  - Treatment: Surgical resection AFTER medical preparation (alpha-blocker first, then beta-blocker)
  - Complications: Hypertensive crisis during surgery if not adequately blocked`
                    },
                    diagnosticAlgorithm: `PRIMARY HYPERALDOSTERONISM Workup:
Step 1: Screen patients with resistant HTN, spontaneous hypokalemia
  - Aldosterone-to-renin ratio (ARR)
  - ↑ Aldosterone + ↓ Renin → positive screen

Step 2: Confirmatory testing
  - Saline suppression test or oral sodium loading
  - Aldosterone remains HIGH despite Na+ load → confirms diagnosis

Step 3: Subtype differentiation (adenoma vs hyperplasia)
  - CT adrenals
  - Adrenal vein sampling (if surgery planned)

Step 4: Treatment
  - Unilateral adenoma → laparoscopic adrenalectomy
  - Bilateral hyperplasia → spironolactone or eplerenone

PHEOCHROMOCYTOMA Workup:
Step 1: Screen high-risk patients (episodic HTN, triad symptoms, genetic syndromes)
  - Plasma free metanephrines (best test, >99% sensitivity)
  - Or 24-hour urine metanephrines

Step 2: Localize tumor
  - CT or MRI adrenals (90% are adrenal)
  - MIBG scan if extra-adrenal suspected

Step 3: Pre-operative preparation (CRITICAL!)
  - Alpha-blocker (phenoxybenzamine) × 10-14 days FIRST
  - Then beta-blocker (prevents unopposed alpha if beta given first)
  - High-salt diet, volume expansion

Step 4: Surgical resection
  - Laparoscopic adrenalectomy
  - Intraoperative BP monitoring (risk of hypertensive crisis)`,
                    keyFeatures: [
                        "Hyperaldosteronism: sustained HTN, hypokalemia, muscle weakness, NO episodic symptoms",
                        "Pheochromocytoma: episodic HTN, classic triad (headache/sweating/palpitations), NO hypokalemia",
                        "Hyperaldosteronism: low renin (aldosterone suppresses it). Pheochromocytoma: normal renin",
                        "Rule of 10s for pheo: 10% bilateral, extra-adrenal, malignant, familial"
                    ],
                    clinicalPearls: [
                        "Hyperaldosteronism most common cause of secondary HTN (5-10% of all HTN)",
                        "Pheo: 5 Ps = Pressure (HTN), Pain (headache), Perspiration, Palpitations, Pallor",
                        "NEVER give beta-blocker first in pheo! Unopposed alpha → hypertensive crisis",
                        "Pheo associated with MEN 2A/2B (medullary thyroid cancer, hyperparathyroidism)"
                    ]
                }
            }
        ],
        pageType: "category",
        detail: {
            overview: "Adrenal disorders result from excess or deficiency of adrenal hormones. Adrenal cortex produces cortisol (stress response), aldosterone (volume/BP regulation), and androgens. Adrenal medulla produces catecholamines (epinephrine, norepinephrine). Cortex disorders: Cushing (cortisol excess), Addison (cortisol/aldosterone deficiency), hyperaldosteronism (aldosterone excess). Medulla disorders: pheochromocytoma (catecholamine excess).",
            classification: [
                "Cortisol excess: Cushing disease (pituitary), adrenal adenoma, ectopic ACTH, exogenous steroids",
                "Cortisol deficiency: Addison (primary), secondary/tertiary (pituitary/hypothalamic)",
                "Aldosterone excess: primary (adrenal adenoma/hyperplasia), secondary (CHF, cirrhosis, RAS)",
                "Catecholamine excess: pheochromocytoma (adrenal medulla), paraganglioma (extra-adrenal)"
            ],
            generalPrinciples: [
                "ACTH differentiates primary vs secondary: ↑ ACTH = primary adrenal failure, ↓ ACTH = pituitary/hypothalamic",
                "Addisonian crisis = life-threatening adrenal insufficiency. Empiric IV hydrocortisone if suspected!",
                "Secondary HTN workup: consider hyperaldosteronism (resistant HTN + hypokalemia) and pheo (episodic HTN)",
                "Cushing screening: 24hr urine cortisol, late-night salivary cortisol, dexamethasone suppression test",
                "Pheo preparation: alpha-blocker FIRST (phenoxybenzamine), then beta-blocker. Never beta first!"
            ]
        }
    },
    {
        id: "pituitary-disorders",
        name: "Pituitary Disorders",
        system: "endocrine",
        type: "pathophysiologic",
        diseaseIds: [
            "hypopituitarism",
            "acromegaly",
            "prolactinoma",
            "diabetes-insipidus",
            "siadh"
        ],
        subcategories: [
            {
                id: "anterior-pituitary-disorders",
                name: "Anterior Pituitary Disorders",
                diseaseIds: [
                    "hypopituitarism",
                    "acromegaly",
                    "prolactinoma"
                ],
                description: "Hormone deficiency (hypopituitarism) vs excess (acromegaly, prolactinoma). Mass effects common.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Anterior Pituitary Disorders",
                        description: "Which anterior pituitary disorder?",
                        content: `HYPOPITUITARISM (Panhypopituitarism):
  - Pathophysiology: Deficiency of one or more pituitary hormones
  - Causes: Pituitary adenoma (mass effect), surgery, radiation, Sheehan syndrome (postpartum hemorrhage), apoplexy
  - Hormone deficiencies (typical order of loss: GH → LH/FSH → ACTH → TSH → prolactin):
    * GH: decreased growth in children, fatigue/decreased muscle mass in adults
    * LH/FSH: hypogonadism, amenorrhea, decreased libido, infertility
    * ACTH: secondary adrenal insufficiency (cortisol deficiency, NO aldosterone deficiency)
    * TSH: secondary hypothyroidism (low T4 + low/normal TSH)
    * Prolactin: inability to lactate postpartum
  - Mass effects: headache, bitemporal hemianopsia (optic chiasm compression)
  - Labs: ↓ GH, ↓ LH/FSH, ↓ ACTH, ↓ TSH, ↓ prolactin. Check target hormones too.
  - Imaging: MRI pituitary (adenoma, empty sella, hemorrhage)
  - Treatment: Hormone replacement (hydrocortisone, levothyroxine, sex hormones, GH if needed)

ACROMEGALY (GH Excess):
  - Pathophysiology: Excess GH from pituitary adenoma → ↑ IGF-1 → tissue overgrowth
  - Appearance: Enlarged hands/feet, coarse facial features, frontal bossing, prognathism (protruding jaw)
  - Soft tissue: Macroglossia, thick skin, carpal tunnel syndrome
  - Systemic: HTN, diabetes, cardiomyopathy, sleep apnea, colon polyps (↑ cancer risk)
  - Labs: ↑ IGF-1 (best screening test), ↑ GH (not suppressed by glucose)
  - Diagnosis: Oral glucose tolerance test (OGTT) - GH does NOT suppress
  - Imaging: MRI pituitary (macroadenoma usually)
  - Treatment: Transsphenoidal surgery, octreotide (somatostatin analog), pegvisomant (GH receptor antagonist)
  - Complications: Cardiomyopathy, DM, OSA, arthropathy

PROLACTINOMA (Prolactin Excess):
  - Pathophysiology: Prolactin-secreting pituitary adenoma (most common functional pituitary tumor)
  - Women: Galactorrhea, amenorrhea, infertility (hyperprolactinemia suppresses GnRH)
  - Men: Decreased libido, erectile dysfunction, gynecomastia (less common presentation)
  - Mass effects: Headache, bitemporal hemianopsia (if macroadenoma)
  - Labs: ↑ Prolactin (>200 ng/mL suggests adenoma; 20-200 could be stalk effect)
  - Imaging: MRI pituitary (microadenoma <1cm vs macroadenoma >1cm)
  - Treatment: Dopamine agonists (cabergoline, bromocriptine) - 1st line! Surgery if medication fails.
  - Note: Dopamine normally inhibits prolactin → dopamine agonists shrink tumor`
                    },
                    diagnosticAlgorithm: `HYPOPITUITARISM Workup:
Step 1: Measure pituitary hormones + target hormones
  - Low target hormone (T4, cortisol, testosterone/estrogen) + low/normal pituitary hormone (TSH, ACTH, LH/FSH)
  - Pattern = secondary deficiency

Step 2: Dynamic testing if needed
  - ACTH stimulation test (cosyntropin) for adrenal insufficiency
  - Insulin tolerance test (most sensitive for GH/ACTH deficiency)

Step 3: MRI pituitary
  - Adenoma, empty sella, hemorrhage (apoplexy), Sheehan syndrome

Step 4: Hormone replacement
  - Hydrocortisone (cortisol), levothyroxine (T4), testosterone/estrogen, GH (if indicated)

ACROMEGALY Workup:
Step 1: Screen with IGF-1
  - ↑ IGF-1 (age-adjusted) → suggests GH excess

Step 2: Confirm with OGTT
  - Give glucose → measure GH at intervals
  - GH NOT suppressed to <1 ng/mL → confirms acromegaly

Step 3: MRI pituitary
  - Macroadenoma (>1cm) usually present

Step 4: Treatment
  - Transsphenoidal surgery (1st line)
  - Octreotide or pegvisomant if surgery incomplete

PROLACTINOMA Workup:
Step 1: Measure prolactin
  - ↑ Prolactin (>200 ng/mL strongly suggests adenoma)
  - Mild elevation (20-200): could be stalk effect, medication, stress

Step 2: MRI pituitary
  - Microadenoma (<1cm, common in women) vs macroadenoma (>1cm, more common in men)

Step 3: Rule out other causes
  - Medications (antipsychotics, metoclopramide), hypothyroidism (↑ TRH stimulates prolactin), pregnancy

Step 4: Treatment
  - Dopamine agonist (cabergoline preferred, bromocriptine alternative)
  - Surgery only if medication intolerant or resistant`,
                    keyFeatures: [
                        "Hypopituitarism: fatigue, cold intolerance, amenorrhea, decreased libido, bitemporal hemianopsia",
                        "Acromegaly: enlarged hands/feet, coarse features, macroglossia, HTN, DM",
                        "Prolactinoma: women (galactorrhea, amenorrhea), men (erectile dysfunction, decreased libido)",
                        "Mass effects (all): headache, bitemporal hemianopsia (optic chiasm compression)"
                    ],
                    clinicalPearls: [
                        "Sheehan syndrome: postpartum pituitary necrosis from hemorrhagic shock. Inability to lactate is first sign.",
                        "Pituitary apoplexy: sudden hemorrhage into adenoma → severe headache, vision loss, adrenal crisis. Emergency!",
                        "Acromegaly screening: compare old photos (gradual changes in appearance)",
                        "Prolactinoma: dopamine agonists are 1st line (shrink tumor!). Surgery reserved for failures."
                    ]
                }
            },
            {
                id: "posterior-pituitary-disorders",
                name: "Posterior Pituitary Disorders (DI vs SIADH)",
                diseaseIds: [
                    "diabetes-insipidus",
                    "siadh"
                ],
                description: "ADH deficiency (DI) vs excess (SIADH). Polyuria + hypernatremia vs oliguria + hyponatremia.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Diabetes Insipidus vs SIADH",
                        description: "Which ADH disorder?",
                        content: `DIABETES INSIPIDUS (DI) - ADH Deficiency:
  - Pathophysiology: Lack of ADH (central DI) or kidney resistance to ADH (nephrogenic DI)
  - Central DI causes: Head trauma, surgery, tumor, idiopathic
  - Nephrogenic DI causes: Lithium, hypercalcemia, hypokalemia, chronic kidney disease
  - Presentation: Polyuria (>3L/day), polydipsia, nocturia
  - Urine: Large volume, dilute (low osmolality <300, low specific gravity <1.005)
  - Serum: Hypernatremia (if inadequate water intake), high osmolality
  - Water deprivation test:
    * Urine stays dilute despite dehydration (osmolality <300)
    * Give desmopressin (synthetic ADH):
      - Central DI: urine concentrates (>50% increase in osmolality)
      - Nephrogenic DI: urine stays dilute (no response)
  - Treatment:
    * Central: Desmopressin (DDAVP)
    * Nephrogenic: Thiazide diuretics + NSAIDs (paradoxically decrease urine output)

SIADH - ADH Excess:
  - Pathophysiology: Excess ADH → free water retention → dilutional hyponatremia
  - Causes: Small cell lung cancer (ectopic ADH), CNS disorders (meningitis, stroke), drugs (SSRIs, carbamazepine, cyclophosphamide), pulmonary disease (pneumonia)
  - Presentation: Often asymptomatic (mild hyponatremia), or confusion, seizures (severe)
  - Urine: Concentrated (high osmolality >100), high sodium (>40 mEq/L)
  - Serum: Hyponatremia (<135), low osmolality (<280), euvolemic (no edema)
  - Diagnosis: Hyponatremia + urine osmolality >100 + euvolemia + normal thyroid/adrenal function
  - Treatment:
    * Fluid restriction (first-line)
    * Hypertonic saline (if severe symptoms)
    * Tolvaptan/demeclocycline (ADH antagonists) if refractory
    * Correct slowly (<8-10 mEq/L per day) to avoid osmotic demyelination syndrome`
                    },
                    diagnosticAlgorithm: `DIABETES INSIPIDUS Workup:
Step 1: Suspect in patient with polyuria + polydipsia
  - Measure 24-hour urine volume (>3L suggests DI or primary polydipsia)
  - Serum Na+ (high in DI, normal in primary polydipsia)

Step 2: Water deprivation test
  - Withhold fluids, measure urine osmolality every 2 hours
  - Normal: urine concentrates (>600-800 mOsm/kg)
  - DI: urine stays dilute (<300 mOsm/kg)

Step 3: Give desmopressin (DDAVP)
  - Central DI: urine osmolality increases >50%
  - Nephrogenic DI: little to no response
  - Primary polydipsia: minimal response (kidneys already work)

Step 4: Determine etiology
  - Central: MRI brain (pituitary stalk, tumor)
  - Nephrogenic: Check lithium, calcium, potassium

SIADH Workup:
Step 1: Confirm hyponatremia (Na <135)
  - Assess volume status: euvolemic (SIADH), hypovolemic (renal loss, GI loss), hypervolemic (CHF, cirrhosis)

Step 2: If euvolemic, measure serum and urine osmolality
  - Serum osmolality LOW (<280)
  - Urine osmolality HIGH (>100) - inappropriately concentrated
  - Urine Na+ HIGH (>40) - kidneys wasting sodium

Step 3: Rule out other causes
  - Normal thyroid function (hypothyroidism can mimic SIADH)
  - Normal cortisol (adrenal insufficiency can cause hyponatremia)

Step 4: Find underlying cause
  - CXR (small cell lung cancer, pneumonia)
  - CT chest if malignancy suspected
  - Review medications (SSRIs, carbamazepine, cyclophosphamide)

Step 5: Treatment
  - Fluid restriction (<800-1000 mL/day)
  - Hypertonic saline (3%) if severe symptoms (seizures, coma)
  - SLOW correction (<8-10 mEq/L/day to avoid osmotic demyelination)`,
                    keyFeatures: [
                        "DI: polyuria, polydipsia, hypernatremia, dilute urine (low osmolality)",
                        "SIADH: hyponatremia, concentrated urine (high osmolality), euvolemia, no edema",
                        "DI: responds to desmopressin (central) or doesn't (nephrogenic)",
                        "SIADH: caused by lung cancer, CNS disorders, drugs (SSRIs, carbamazepine)"
                    ],
                    clinicalPearls: [
                        "DI vs psychogenic polydipsia: both have polyuria. DI has hypernatremia, polydipsia has normal/low Na+",
                        "SIADH diagnosis of exclusion: must rule out hypothyroidism and adrenal insufficiency first",
                        "Osmotic demyelination syndrome (central pontine myelinolysis): from rapid Na+ correction. Quadriplegia, dysarthria, dysphagia!",
                        "SIADH urine: concentrated (high osmolality) despite low serum osmolality = inappropriately concentrated"
                    ]
                }
            }
        ],
        pageType: "category",
        detail: {
            overview: "Pituitary gland has two lobes: anterior (adenohypophysis) secretes GH, ACTH, TSH, LH/FSH, prolactin; posterior (neurohypophysis) releases ADH and oxytocin. Anterior disorders: hormone deficiency (hypopituitarism) or excess (adenomas causing acromegaly, prolactinoma, Cushing disease). Posterior disorders: ADH deficiency (diabetes insipidus) or excess (SIADH). Mass effects common: headache, bitemporal hemianopsia from optic chiasm compression.",
            classification: [
                "Anterior hormone excess: acromegaly (GH), prolactinoma (prolactin), Cushing disease (ACTH), TSH-oma (rare)",
                "Anterior hormone deficiency: hypopituitarism (GH, LH/FSH, ACTH, TSH deficiency). Sheehan syndrome postpartum.",
                "Posterior: diabetes insipidus (central vs nephrogenic ADH deficiency), SIADH (ADH excess)",
                "Mass effects: pituitary adenomas → headache, bitemporal hemianopsia, hypopituitarism from compression"
            ],
            generalPrinciples: [
                "Pituitary adenomas: micro (<1cm) vs macro (>1cm). Functional (hormone-secreting) vs non-functional.",
                "Secondary endocrine disorders: low target hormone + low/normal pituitary hormone (vs primary: opposite directions)",
                "DI: polyuria + dilute urine + hypernatremia. SIADH: oliguria + concentrated urine + hyponatremia.",
                "Prolactinoma: dopamine agonists 1st line (cabergoline). Acromegaly: surgery 1st line.",
                "Pituitary apoplexy: sudden hemorrhage into adenoma → headache, vision loss, adrenal crisis. Surgical emergency!"
            ]
        }
    },
    {
        id: "calcium-bone-disorders",
        name: "Calcium & Bone Disorders",
        system: "endocrine",
        type: "pathophysiologic",
        diseaseIds: [
            "hyperparathyroidism",
            "hypoparathyroidism",
            "hypercalcemia",
            "hypocalcemia",
            "osteoporosis",
            "osteomalacia",
            "pagets-disease"
        ],
        subcategories: [
            {
                id: "parathyroid-disorders",
                name: "Parathyroid Disorders (Hyper vs Hypo)",
                diseaseIds: [
                    "hyperparathyroidism",
                    "hypoparathyroidism"
                ],
                description: "PTH excess (hypercalcemia) vs deficiency (hypocalcemia). Stones/bones/groans vs tetany.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Hyperparathyroidism vs Hypoparathyroidism",
                        description: "Which parathyroid disorder?",
                        content: `HYPERPARATHYROIDISM (↑ PTH):
  - Pathophysiology: Excess PTH → ↑ Ca2+ (bones, kidneys, gut)
  - Primary: Parathyroid adenoma (80%), hyperplasia (15%), carcinoma (rare)
  - Secondary: Chronic kidney disease (↓ vitamin D, ↑ phosphate → compensatory ↑ PTH)
  - Tertiary: Long-standing secondary hyperparathyroidism → autonomous PTH secretion
  - Labs:
    * Primary: ↑ Ca2+, ↓ PO4, ↑ PTH (inappropriate for high calcium)
    * Secondary: ↓ or normal Ca2+, ↑ PO4, ↑ PTH (appropriate response to low calcium)
  - Symptoms: "Stones, bones, groans, psychiatric overtones"
    * Stones: kidney stones (calcium oxalate), nephrocalcinosis
    * Bones: osteitis fibrosa cystica (bone pain, fractures, brown tumors)
    * Groans: constipation, nausea, peptic ulcers, pancreatitis
    * Psychiatric: depression, confusion, fatigue
  - Treatment:
    * Primary: Parathyroidectomy (if symptomatic or Ca >1mg/dL above normal)
    * Secondary: Vitamin D, phosphate binders, calcimimetics (cinacalcet)

HYPOPARATHYROIDISM (↓ PTH):
  - Pathophysiology: PTH deficiency → ↓ Ca2+, ↑ PO4
  - Causes: Post-thyroidectomy/parathyroidectomy (most common), autoimmune (DiGeorge), hypomagnesemia
  - Labs: ↓ Ca2+, ↑ PO4, ↓ PTH
  - Symptoms: Neuromuscular excitability from hypocalcemia
    * Tetany: muscle spasms, carpopedal spasm, laryngospasm
    * Chvostek sign: facial twitching with tapping facial nerve
    * Trousseau sign: carpopedal spasm with BP cuff inflation
    * Paresthesias (perioral, fingers/toes), seizures (severe)
  - ECG: Prolonged QT interval (risk of arrhythmias)
  - Treatment: Calcium + vitamin D supplementation`
                    },
                    diagnosticAlgorithm: `HYPERPARATHYROIDISM Workup:
Step 1: Measure calcium, phosphate, PTH
  - ↑ Ca2+ + ↓ PO4 + ↑ PTH → primary hyperparathyroidism
  - Normal/↓ Ca2+ + ↑ PO4 + ↑ PTH → secondary hyperparathyroidism (CKD)

Step 2: Assess for complications
  - Renal: kidney stones (imaging), GFR (kidney function)
  - Bone: DEXA scan (osteoporosis), X-rays (if bone pain)
  - GI: calcium, symptoms

Step 3: Localize adenoma (if surgery planned)
  - Sestamibi scan (parathyroid adenoma uptake)
  - Ultrasound neck

Step 4: Treatment
  - Surgery if: symptomatic, Ca >1 mg/dL above normal, age <50, osteoporosis, GFR <60
  - Observation if asymptomatic + mild hypercalcemia

HYPOPARATHYROIDISM Workup:
Step 1: Measure calcium, phosphate, PTH
  - ↓ Ca2+ + ↑ PO4 + ↓ PTH → hypoparathyroidism
  - ↓ Ca2+ + ↓ PO4 + ↑ PTH → vitamin D deficiency

Step 2: Check magnesium
  - Hypomagnesemia impairs PTH secretion → treat Mg first

Step 3: Determine etiology
  - History of neck surgery (post-surgical)
  - DiGeorge syndrome (congenital, cardiac defects, immunodeficiency)
  - Autoimmune (check other autoimmune diseases)

Step 4: Treatment
  - Acute: IV calcium gluconate (if severe, seizures)
  - Chronic: Oral calcium + vitamin D (calcitriol)
  - Goal: keep Ca in low-normal range (avoid hypercalciuria)`,
                    keyFeatures: [
                        "Hyperparathyroidism: 'stones, bones, groans, psychiatric overtones' from hypercalcemia",
                        "Hypoparathyroidism: tetany, Chvostek/Trousseau signs, prolonged QT, perioral paresthesias",
                        "Primary hyperPTH: ↑ Ca, ↓ PO4, ↑ PTH. Secondary hyperPTH (CKD): normal/↓ Ca, ↑ PO4, ↑ PTH",
                        "HypoPTH: ↓ Ca, ↑ PO4, ↓ PTH (opposite of hyperPTH)"
                    ],
                    clinicalPearls: [
                        "Most common cause of hypercalcemia: primary hyperparathyroidism (outpatient) vs malignancy (inpatient)",
                        "Chvostek sign: tap facial nerve → facial twitch (75% sensitivity). Trousseau: BP cuff → carpopedal spasm (94% sensitivity)",
                        "Hungry bone syndrome: after parathyroidectomy, bones rapidly take up calcium → severe hypocalcemia",
                        "Hypomagnesemia causes functional hypoparathyroidism (↓ PTH secretion). Always check Mg in hypocalcemia!"
                    ]
                }
            },
            {
                id: "bone-metabolism-disorders",
                name: "Bone Metabolism Disorders",
                diseaseIds: [
                    "osteoporosis",
                    "osteomalacia",
                    "pagets-disease"
                ],
                description: "Osteoporosis: ↓ bone density. Osteomalacia: ↓ mineralization. Paget: ↑ bone turnover.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Osteoporosis vs Osteomalacia vs Paget Disease",
                        description: "Which bone disorder?",
                        content: `OSTEOPOROSIS:
  - Pathophysiology: ↓ Bone mass (low density) with NORMAL mineralization
  - Causes: Aging (postmenopausal, senile), steroids, hyperparathyroidism, hyperthyroidism, hypogonadism
  - Risk factors: Female, advanced age, low BMI, smoking, alcohol, family history
  - Presentation: Often asymptomatic until fracture (vertebral compression, hip, wrist)
  - Labs: Normal calcium, phosphate, alkaline phosphatase (unless acute fracture)
  - DEXA scan: T-score ≤ -2.5 (osteoporosis), -1.0 to -2.5 (osteopenia)
  - X-ray: ↓ Bone density, vertebral compression fractures (loss of height)
  - Treatment: Bisphosphonates (alendronate), denosumab, teriparatide (anabolic), calcium + vitamin D

OSTEOMALACIA (Rickets in children):
  - Pathophysiology: ↓ Bone mineralization (soft bones) from vitamin D deficiency
  - Causes: Vitamin D deficiency (dietary, malabsorption, lack of sunlight), renal disease (↓ 1,25-vitamin D)
  - Presentation: Bone pain, muscle weakness, fractures (pseudofractures/Looser zones)
  - Children (rickets): Bowing of legs, rachitic rosary (costochondral beading), frontal bossing
  - Labs: ↓ Calcium, ↓ PO4, ↑ Alkaline phosphatase, ↓ Vitamin D, ↑ PTH (secondary)
  - X-ray: Pseudofractures (Looser zones), bowing deformities (rickets)
  - Treatment: Vitamin D + calcium supplementation

PAGET DISEASE OF BONE:
  - Pathophysiology: ↑ Bone turnover (excessive resorption + disorganized formation) → thick but weak bones
  - Epidemiology: Older adults (>50 years), men > women
  - Presentation: Often asymptomatic, or bone pain, deformities, fractures
  - Complications: Skull enlargement (↑ hat size), hearing loss (CN VIII compression), high-output heart failure (↑ blood flow to bone), osteosarcoma (rare, <1%)
  - Labs: VERY HIGH alkaline phosphatase (reflects ↑ bone formation), normal calcium/phosphate
  - X-ray: Thickened, sclerotic bones, lytic lesions (osteoporosis circumscripta in skull)
  - Bone scan: ↑ Uptake in affected bones (polyostotic or monostotic)
  - Treatment: Bisphosphonates (if symptomatic, ↑ alk phos, risk of complications)`
                    },
                    diagnosticAlgorithm: `OSTEOPOROSIS Screening & Management:
Step 1: Screen with DEXA scan
  - Women ≥65, men ≥70 (or earlier if risk factors)
  - T-score: ≤ -2.5 (osteoporosis), -1.0 to -2.5 (osteopenia), > -1.0 (normal)

Step 2: Assess fracture risk
  - FRAX score (10-year fracture risk)
  - History of fragility fracture

Step 3: Rule out secondary causes
  - Vitamin D, calcium, TSH, PTH
  - Consider: steroids, hyperparathyroidism, hyperthyroidism, celiac

Step 4: Treatment
  - Lifestyle: weight-bearing exercise, fall prevention, calcium 1200mg + vitamin D 800-1000 IU
  - Pharmacologic: Bisphosphonates (1st line), denosumab, teriparatide (severe)

OSTEOMALACIA Workup:
Step 1: Suspect in patient with bone pain + muscle weakness
  - Measure vitamin D (25-OH), calcium, phosphate, alkaline phosphatase, PTH

Step 2: Labs show vitamin D deficiency pattern
  - ↓ Vitamin D, ↓ Ca, ↓ PO4, ↑ Alk phos, ↑ PTH (secondary)

Step 3: X-ray if needed
  - Pseudofractures (Looser zones) - radiolucent lines perpendicular to cortex

Step 4: Treatment
  - Vitamin D replacement (50,000 IU weekly × 8 weeks, then daily maintenance)
  - Calcium supplementation

PAGET DISEASE Workup:
Step 1: Often incidental finding on X-ray or labs
  - Very high alkaline phosphatase (normal calcium/phosphate)

Step 2: X-ray affected bones
  - Thickened cortex, lytic + sclerotic areas, bone enlargement

Step 3: Bone scan to assess extent
  - Monostotic (single bone) vs polyostotic (multiple)

Step 4: Treatment indications
  - Symptomatic (pain), high alk phos, skull/weight-bearing bone involvement, pre-surgery
  - Bisphosphonates (zoledronic acid, alendronate)`,
                    keyFeatures: [
                        "Osteoporosis: fragility fractures, DEXA T-score ≤-2.5, normal labs (unless fracture)",
                        "Osteomalacia: bone pain + muscle weakness, ↓ vitamin D, ↓ Ca/PO4, ↑ alk phos, pseudofractures",
                        "Paget: very high alk phos, bone pain/deformities, ↑ hat size, hearing loss, normal Ca/PO4",
                        "Osteoporosis = low density, normal mineralization. Osteomalacia = normal density, low mineralization"
                    ],
                    clinicalPearls: [
                        "Bisphosphonates for osteoporosis: take on empty stomach, stay upright 30 min (prevent esophagitis)",
                        "Paget complications: high-output CHF (↑ blood flow), osteosarcoma (<1%), pathologic fractures",
                        "Vitamin D deficiency screening: 25-OH vitamin D (storage form). 1,25-OH (active) NOT useful for screening.",
                        "T-score (DEXA): compares to young healthy adult. Z-score: compares to age-matched. Use T-score for diagnosis."
                    ]
                }
            }
        ],
        pageType: "category",
        detail: {
            overview: "Calcium homeostasis: regulated by PTH (raises calcium), vitamin D (enhances calcium absorption), and calcitonin (lowers calcium). PTH acts on bones (calcium release), kidneys (calcium reabsorption, phosphate excretion), and indirectly on gut (via vitamin D activation). Parathyroid disorders: hyperparathyroidism (high PTH → hypercalcemia) vs hypoparathyroidism (low PTH → hypocalcemia). Bone disorders: osteoporosis (low bone mass), osteomalacia/rickets (poor mineralization), Paget disease (excessive bone turnover).",
            classification: [
                "Hypercalcemia causes: primary hyperparathyroidism, malignancy, vitamin D toxicity, granulomatous disease, thiazides",
                "Hypocalcemia causes: hypoparathyroidism, vitamin D deficiency, CKD, hypomagnesemia, pancreatitis",
                "Bone density: osteoporosis (low density, normal mineralization), osteomalacia (normal density, low mineralization)",
                "Bone turnover: Paget disease (high turnover, disorganized), osteopetrosis (low turnover, dense but brittle)"
            ],
            generalPrinciples: [
                "Calcium interpretation: check albumin (40% calcium is protein-bound). Correct for low albumin or measure ionized calcium.",
                "Hypercalcemia symptoms: 'stones, bones, groans, psychiatric overtones' (renal stones, bone pain, GI symptoms, confusion)",
                "Hypocalcemia symptoms: tetany, Chvostek/Trousseau signs, prolonged QT, seizures",
                "PTH increases calcium: bone resorption, renal reabsorption, gut absorption (via vitamin D activation)",
                "DEXA scan T-score: >-1.0 normal, -1.0 to -2.5 osteopenia, ≤-2.5 osteoporosis. Bisphosphonates first-line treatment."
            ]
        }
    }
];

export default endocrineCategories;

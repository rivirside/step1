// Endocrine diseases
const endocrineDiseases = [
    // === THYROID DISORDERS ===
    {
        id: "hypothyroidism",
        name: "Hypothyroidism",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["fatigue", "weight-gain", "cold-intolerance", "constipation", "bradycardia"],
        tags: ["thyroid", "hormone-deficiency", "chronic", "common"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Thyroid hormone deficiency (↓ T4/T3) causing decreased metabolism. Most commonly from Hashimoto thyroiditis (US) or iodine deficiency (worldwide). Primary hypothyroidism: thyroid gland problem (↑ TSH, ↓ T4). Secondary: pituitary problem (↓ TSH, ↓ T4)."
        }
    },
    {
        id: "hyperthyroidism",
        name: "Hyperthyroidism",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["weight-loss", "heat-intolerance", "palpitations", "tremor", "anxiety"],
        tags: ["thyroid", "hormone-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Thyroid hormone excess (↑ T4/T3) causing increased metabolism. Most commonly from Graves disease (autoimmune TSI antibodies). ↓ TSH, ↑ T4/T3. Radioactive iodine uptake differentiates causes."
        }
    },
    {
        id: "graves-disease",
        name: "Graves Disease",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["weight-loss", "exophthalmos", "pretibial-myxedema", "palpitations"],
        tags: ["thyroid", "autoimmune", "hyperthyroidism"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common cause of hyperthyroidism. Autoimmune: TSI antibodies stimulate TSH receptor. Diffuse goiter, HIGH RAIU (diffuse), ophthalmopathy (exophthalmos, lid lag - SPECIFIC to Graves), pretibial myxedema."
        }
    },
    {
        id: "hashimoto-thyroiditis",
        name: "Hashimoto Thyroiditis",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["fatigue", "weight-gain", "goiter", "cold-intolerance"],
        tags: ["thyroid", "autoimmune", "hypothyroidism"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common cause of hypothyroidism in US. Autoimmune destruction of thyroid. Anti-TPO antibodies (90%), anti-thyroglobulin antibodies. Goiter may be present. Women > men (10:1). Gradual onset."
        }
    },

    // === DIABETES & GLUCOSE DISORDERS ===
    {
        id: "diabetes-type-1",
        name: "Type 1 Diabetes Mellitus",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["polyuria", "polydipsia", "polyphagia", "weight-loss"],
        tags: ["diabetes", "autoimmune", "insulin-deficiency", "chronic"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Autoimmune destruction of pancreatic β cells → absolute insulin deficiency. Children/young adults. Normal or thin. Acute onset (days-weeks). Ketosis-prone (DKA). Low C-peptide. Anti-GAD, anti-islet antibodies. HLA-DR3/DR4. INSULIN required for survival."
        }
    },
    {
        id: "diabetes-type-2",
        name: "Type 2 Diabetes Mellitus",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["polyuria", "polydipsia", "obesity", "acanthosis-nigricans"],
        tags: ["diabetes", "insulin-resistance", "chronic", "common"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Insulin resistance + relative insulin deficiency. Adults >40 (increasing in youth). Obese (80-90%). Gradual onset (months-years). NOT ketosis-prone (HHS more common). Normal/high C-peptide initially. Negative antibodies. Treatment: lifestyle + metformin → insulin if needed."
        }
    },
    {
        id: "diabetic-ketoacidosis",
        name: "Diabetic Ketoacidosis (DKA)",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["kussmaul-breathing", "fruity-breath", "nausea", "abdominal-pain"],
        tags: ["diabetes", "emergency", "acidosis", "acute"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Type 1 diabetes complication. Absolute insulin deficiency → lipolysis → ketones → metabolic acidosis. Glucose >250, pH <7.3, positive ketones, elevated anion gap. Kussmaul breathing, fruity breath. Treatment: IV fluids + insulin + K+ replacement."
        }
    },
    {
        id: "hyperosmolar-hyperglycemic-state",
        name: "Hyperosmolar Hyperglycemic State (HHS)",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["altered-mental-status", "severe-dehydration", "polyuria"],
        tags: ["diabetes", "emergency", "hyperosmolar", "acute"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Type 2 diabetes complication. Glucose >600, pH >7.3, negative ketones, very high osmolality >320. AMS/coma from hyperosmolality. NO ketoacidosis. Treatment: aggressive IV fluids + insulin. Mortality 10-20% (higher than DKA)."
        }
    },

    // === ADRENAL DISORDERS ===
    {
        id: "cushing-syndrome",
        name: "Cushing Syndrome",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["central-obesity", "moon-facies", "purple-striae", "proximal-weakness"],
        tags: ["adrenal", "cortisol-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess cortisol from any source. Cushing disease (pituitary adenoma, 70%), adrenal adenoma, ectopic ACTH, exogenous steroids. Central obesity, moon facies, buffalo hump, purple striae, proximal weakness, HTN, hyperglycemia. Screen: 24hr urine cortisol, late-night salivary cortisol, dexamethasone suppression."
        }
    },
    {
        id: "addison-disease",
        name: "Addison Disease",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["hyperpigmentation", "hypotension", "hyperkalemia", "hyponatremia"],
        tags: ["adrenal", "cortisol-deficiency", "chronic"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Primary adrenal insufficiency (cortisol + aldosterone deficiency). Autoimmune (US, 80%), TB (worldwide). Hyperpigmentation (↑ ACTH), hypotension, hyperkalemia, hyponatremia, hypoglycemia. ↓ cortisol, ↑ ACTH. ACTH stimulation test confirms. Treatment: hydrocortisone + fludrocortisone."
        }
    },
    {
        id: "primary-hyperaldosteronism",
        name: "Primary Hyperaldosteronism (Conn Syndrome)",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["hypertension", "hypokalemia", "muscle-weakness"],
        tags: ["adrenal", "aldosterone-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess aldosterone → Na+ retention, K+ loss. Adrenal adenoma (35%) or bilateral hyperplasia (65%). HTN + hypokalemia + metabolic alkalosis. ↓ renin, ↑ aldosterone. Aldosterone-to-renin ratio screening. Treatment: adenoma → surgery, hyperplasia → spironolactone."
        }
    },
    {
        id: "pheochromocytoma",
        name: "Pheochromocytoma",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["episodic-hypertension", "headache", "sweating", "palpitations"],
        tags: ["adrenal", "catecholamine-excess", "emergency"],
        severity: "high",
        acuity: "acute-on-chronic",
        pageType: "disease",
        detail: {
            definition: "Catecholamine-secreting tumor of adrenal medulla. Rule of 10s: 10% bilateral, extra-adrenal, malignant, familial. Episodic HTN + headache + sweating + palpitations. ↑ plasma metanephrines. Treatment: surgical resection AFTER alpha-blocker (phenoxybenzamine), then beta-blocker. NEVER beta first!"
        }
    },

    // === PITUITARY DISORDERS ===
    {
        id: "acromegaly",
        name: "Acromegaly",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["enlarged-hands-feet", "coarse-features", "macroglossia", "arthropathy"],
        tags: ["pituitary", "growth-hormone-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess GH from pituitary adenoma → ↑ IGF-1. Enlarged hands/feet, coarse facial features, frontal bossing, prognathism. Macroglossia, carpal tunnel, HTN, DM, cardiomyopathy, sleep apnea. ↑ IGF-1 screening, OGTT confirms (GH not suppressed). Treatment: transsphenoidal surgery."
        }
    },
    {
        id: "prolactinoma",
        name: "Prolactinoma",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["galactorrhea", "amenorrhea", "erectile-dysfunction"],
        tags: ["pituitary", "prolactin-excess", "chronic"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common functional pituitary tumor. Women: galactorrhea, amenorrhea, infertility. Men: erectile dysfunction, decreased libido. ↑ Prolactin >200 suggests adenoma. Treatment: dopamine agonists (cabergoline, bromocriptine) FIRST-LINE. Surgery only if medication fails."
        }
    },
    {
        id: "diabetes-insipidus",
        name: "Diabetes Insipidus (DI)",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["polyuria", "polydipsia", "hypernatremia", "nocturia"],
        tags: ["pituitary", "adh-deficiency", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "ADH deficiency (central) or kidney resistance (nephrogenic). Polyuria >3L/day, dilute urine (osmolality <300), hypernatremia. Water deprivation test: urine stays dilute. Desmopressin test: central responds (urine concentrates), nephrogenic doesn't. Treatment: central = DDAVP, nephrogenic = thiazides + NSAIDs."
        }
    },
    {
        id: "siadh",
        name: "Syndrome of Inappropriate ADH (SIADH)",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["hyponatremia", "confusion", "seizures"],
        tags: ["pituitary", "adh-excess", "acute"],
        severity: "medium",
        acuity: "acute-on-chronic",
        pageType: "disease",
        detail: {
            definition: "Excess ADH → free water retention → dilutional hyponatremia. Small cell lung cancer, CNS disorders, drugs (SSRIs, carbamazepine). Hyponatremia <135, concentrated urine (osmolality >100), euvolemic. Treatment: fluid restriction, hypertonic saline if severe, tolvaptan. Correct slowly (<8-10 mEq/L/day) to avoid osmotic demyelination."
        }
    },
    {
        id: "hypopituitarism",
        name: "Hypopituitarism",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["fatigue", "amenorrhea", "decreased-libido", "bitemporal-hemianopsia"],
        tags: ["pituitary", "hormone-deficiency", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Deficiency of pituitary hormones. Adenoma (mass effect), surgery, radiation, Sheehan syndrome. Order of loss: GH → LH/FSH → ACTH → TSH. Secondary adrenal/thyroid insufficiency (low target + low pituitary hormone). Bitemporal hemianopsia if optic chiasm compression. Treatment: hormone replacement."
        }
    },

    // === CALCIUM & BONE DISORDERS ===
    {
        id: "hyperparathyroidism",
        name: "Primary Hyperparathyroidism",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["kidney-stones", "bone-pain", "constipation", "confusion"],
        tags: ["parathyroid", "pth-excess", "calcium-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess PTH from parathyroid adenoma (80%). ↑ Ca2+, ↓ PO4, ↑ PTH. 'Stones, bones, groans, psychiatric overtones' (kidney stones, bone pain, constipation, confusion). Treatment: parathyroidectomy if symptomatic or Ca >1 mg/dL above normal."
        }
    },
    {
        id: "hypoparathyroidism",
        name: "Hypoparathyroidism",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["tetany", "chvostek-sign", "trousseau-sign", "prolonged-qt"],
        tags: ["parathyroid", "pth-deficiency", "calcium-deficiency", "chronic"],
        severity: "medium",
        acuity: "acute-on-chronic",
        pageType: "disease",
        detail: {
            definition: "PTH deficiency. Post-thyroidectomy/parathyroidectomy most common. ↓ Ca2+, ↑ PO4, ↓ PTH. Tetany, Chvostek sign (facial twitch), Trousseau sign (carpopedal spasm), prolonged QT, seizures. Treatment: acute IV calcium gluconate, chronic oral calcium + vitamin D."
        }
    },
    {
        id: "osteoporosis",
        name: "Osteoporosis",
        system: "endocrine",
        categories: ["calcium-bone-disorders", "bone-disorders"],
        symptoms: ["fragility-fractures", "vertebral-compression", "kyphosis"],
        tags: ["bone", "bone-density", "chronic", "common"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "↓ Bone mass with normal mineralization. Postmenopausal, aging, steroids. Fragility fractures (vertebral, hip, wrist). DEXA T-score ≤-2.5. Normal Ca/PO4/alk phos. Treatment: bisphosphonates (alendronate), denosumab, teriparatide, calcium + vitamin D."
        }
    },
    {
        id: "osteomalacia",
        name: "Osteomalacia (Rickets in Children)",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["bone-pain", "muscle-weakness", "pseudofractures"],
        tags: ["bone", "vitamin-d-deficiency", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "↓ Bone mineralization from vitamin D deficiency. Bone pain, muscle weakness, pseudofractures (Looser zones). ↓ Ca, ↓ PO4, ↑ alk phos, ↓ vitamin D, ↑ PTH (secondary). Children: bowing legs, rachitic rosary. Treatment: vitamin D + calcium."
        }
    },
    {
        id: "pagets-disease",
        name: "Paget Disease of Bone",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["bone-pain", "deformities", "increased-hat-size", "hearing-loss"],
        tags: ["bone", "bone-turnover", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "↑ Bone turnover (excessive resorption + disorganized formation) → thick but weak bones. Older adults >50. Often asymptomatic. VERY HIGH alk phos, normal Ca/PO4. Skull enlargement (↑ hat size), hearing loss, high-output CHF. Treatment: bisphosphonates if symptomatic."
        }
    }
];

export default endocrineDiseases;

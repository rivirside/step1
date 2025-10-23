// Endocrine System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "insulin",
        "name": "Insulin",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Replaces endogenous insulin, promotes glucose uptake and storage.",
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "Injection site reactions"
        ],
        "interactions": "Beta-blockers mask hypoglycemia symptoms.",
        "interactionDetails": "",
        "drugIds": [
            "insulin-lispro",
            "insulin-regular",
            "insulin-nph",
            "insulin-glargine"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Insulin is an anabolic peptide hormone essential for glucose homeostasis. Exogenous insulin is the cornerstone of Type 1 DM management and often required in Type 2 DM. Insulin preparations differ by onset, peak, and duration, allowing for physiologic mimicry of basal and prandial insulin secretion.",
            "clinicalApproach": [
                "Type 1 DM requires insulin (absolute deficiency) - use basal-bolus regimen",
                "Type 2 DM may require insulin when oral agents insufficient or in acute illness",
                "Basal insulin (long-acting): provides background glucose control between meals and overnight",
                "Bolus insulin (rapid/short-acting): covers mealtime glucose spikes",
                "Basal-bolus regimen: most physiologic, typically 50% basal + 50% bolus divided among meals",
                "Sliding scale alone is inferior to scheduled basal-bolus for inpatients",
                "NPH can be used as basal but has peak (risk of nocturnal hypoglycemia) - glargine/detemir preferred"
            ],
            "pharmacokinetics": {
                "absorption": "Subcutaneous injection into adipose tissue. Absorption varies by site (abdomen fastest, then arms, thighs, buttocks). Exercise and heat increase absorption.",
                "distribution": "Does not cross placenta in significant amounts (large peptide). Does not enter breast milk in significant amounts.",
                "metabolism": "Metabolized by insulinase (insulin-degrading enzyme) primarily in liver and kidney. Also muscle and adipose tissue.",
                "excretion": "Renal elimination of metabolites. Dose reduction may be needed in renal impairment (decreased clearance)."
            },
            "comparison": {
                "title": "Comparison of Insulin Preparations",
                "description": "Key differences in onset, peak, and duration guide clinical use",
                "content": `
RAPID-ACTING (Lispro, Aspart, Glulisine):
- Onset: 5-15 minutes
- Peak: 1-2 hours
- Duration: 3-5 hours
- Use: Mealtime bolus dosing (give right before meal), DKA correction
- Pearl: Can give immediately before or even after meal

SHORT-ACTING (Regular):
- Onset: 30 minutes
- Peak: 2-4 hours
- Duration: 5-8 hours
- Use: Mealtime coverage (give 30 min before meal), DKA treatment (IV formulation)
- Pearl: Only insulin that can be given IV

INTERMEDIATE-ACTING (NPH):
- Onset: 1-2 hours
- Peak: 4-8 hours (IMPORTANT: has a peak unlike long-acting)
- Duration: 10-18 hours
- Use: Basal insulin (typically twice daily), can mix with regular
- Pearl: Peak causes nocturnal hypoglycemia risk if given at bedtime

LONG-ACTING (Glargine, Detemir):
- Onset: 2-4 hours
- Peak: Minimal to no peak (flat profile)
- Duration: 20-24 hours (once daily dosing)
- Use: Basal insulin coverage
- Pearl: Cannot be mixed with other insulins, reduced hypoglycemia risk vs NPH

ULTRA-LONG (Degludec):
- Duration: >42 hours
- Use: Once-daily basal with very stable levels
- Pearl: Lowest hypoglycemia risk
`
            },
            "monitoring": [
                "Blood glucose: fingerstick before meals and at bedtime (or continuous glucose monitor)",
                "HbA1c every 3 months (reflects 3-month average glucose)",
                "Hypoglycemia symptoms: confusion, diaphoresis, tachycardia, tremor, seizures",
                "Weight (insulin causes weight gain)",
                "Injection site reactions (lipodystrophy from repeated use of same site)"
            ],
            "contraindications": [
                "Active hypoglycemia is the only absolute contraindication",
                "Use caution in renal/hepatic impairment (adjust doses)",
                "Hypokalemia risk (insulin shifts K+ intracellularly) - monitor K+"
            ],
            "clinicalPearls": [
                "DKA treatment: ALWAYS use regular insulin IV (only insulin that can be given IV). Start with bolus 0.1 units/kg, then 0.1 units/kg/hr infusion",
                "Hypoglycemia treatment: Rule of 15 - give 15g carbs, recheck in 15 minutes. If severe/unconscious: IV dextrose or IM glucagon",
                "Beta-blockers mask hypoglycemia symptoms (except diaphoresis) - counsel patients",
                "Insulin needs increase during illness/infection (stress response) - do NOT stop insulin",
                "Somogyi effect: nocturnal hypoglycemia → rebound hyperglycemia in AM (decrease bedtime insulin)",
                "Dawn phenomenon: early AM hyperglycemia from GH/cortisol surge (increase basal insulin or give at bedtime)",
                "Mnemonic for DKA vs HHS: DKA = Kussmaul breathing, Ketones, young (Type 1). HHS = Hyperosmolar, HyperNatremia, old (Type 2)",
                "Step 1 buzzword: 'fruity breath' = ketones in DKA",
                "Insulin + glucose + calcium = treatment for hyperkalemia (shifts K+ into cells)"
            ]
        }
    },
    {
        "id": "biguanides",
        "name": "Biguanides",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Decrease hepatic glucose production, increase insulin sensitivity.",
        "sideEffects": [
            "GI upset",
            "Lactic acidosis (rare)",
            "B12 deficiency"
        ],
        "interactions": "Contrast agents increase lactic acidosis risk.",
        "interactionDetails": "",
        "drugIds": [
            "metformin"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Metformin is the only biguanide available in the US and is the first-line medication for Type 2 DM. It works primarily by suppressing hepatic gluconeogenesis without stimulating insulin secretion, making it 'euglycemic' rather than hypoglycemic. Weight-neutral or promotes modest weight loss, making it ideal for obese diabetic patients.",
            "clinicalApproach": [
                "FIRST-LINE therapy for Type 2 DM (unless contraindicated)",
                "Does NOT cause hypoglycemia when used alone (insulin-independent mechanism)",
                "Weight-neutral or causes modest weight loss (2-3 kg) - major advantage over sulfonylureas/insulin",
                "Can be combined with any other diabetes medication",
                "Also used off-label for PCOS, prediabetes, antipsychotic-induced weight gain",
                "Start with low dose and titrate slowly to minimize GI side effects",
                "Hold before contrast studies and resume 48 hours after if renal function stable"
            ],
            "pharmacokinetics": {
                "absorption": "Oral bioavailability 50-60%. Absorbed in small intestine. Food decreases rate but not extent. Extended-release formulation available for once-daily dosing.",
                "distribution": "Does not bind to plasma proteins. Distributes to erythrocytes and tissues. Does not cross BBB significantly.",
                "metabolism": "NOT metabolized - excreted unchanged. This is unique and important.",
                "excretion": "100% renal excretion (unchanged drug). Adjust dose if eGFR <45, discontinue if eGFR <30. Half-life 4-8 hours."
            },
            "monitoring": [
                "Blood glucose (fasting and HbA1c every 3 months)",
                "Renal function (eGFR) - at baseline and annually (more frequently if impaired)",
                "Vitamin B12 levels - annually (long-term use causes malabsorption)",
                "GI symptoms (nausea, diarrhea - usually transient)",
                "No need for routine lactate monitoring unless high-risk patient"
            ],
            "contraindications": [
                "eGFR <30 mL/min/1.73m² (absolute contraindication - lactic acidosis risk)",
                "Acute or chronic metabolic acidosis (including DKA)",
                "Hypoxic states: shock, sepsis, acute MI, heart failure requiring pharmacologic support",
                "Severe hepatic disease (decreased lactate clearance)",
                "Immediately before/during iodinated contrast procedures (hold 48 hours, check renal function before restarting)"
            ],
            "clinicalPearls": [
                "Step 1 buzzword: 'first-line for Type 2 DM' or 'weight loss in diabetic patient'",
                "Mechanism mnemonic: 'Metformin Makes hepatic glucose production Minimal'",
                "ONLY diabetes drug that reduces cardiovascular mortality (UKPDS trial)",
                "Does NOT cause hypoglycemia as monotherapy - safe for patients with variable meal schedule",
                "Lactic acidosis is RARE (<1 in 100,000) but serious - risk factors: renal dysfunction, hypoxia, sepsis, contrast dye",
                "GI side effects (diarrhea, nausea) occur in 30% - usually resolve in 2-4 weeks. Take with food and start low dose.",
                "B12 deficiency develops in 10-30% with long-term use - check annually",
                "NOT metabolized by liver - safe in hepatic dysfunction (unlike sulfonylureas)",
                "Classic vignette: Obese Type 2 DM patient, HbA1c 8.5% on lifestyle modification → start metformin",
                "Common wrong answer: 'Start insulin' - metformin is always first unless contraindicated"
            ]
        }
    },
    {
        "id": "sulfonylureas",
        "name": "Sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Stimulate insulin release from pancreatic beta cells.",
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "SIADH"
        ],
        "interactions": "Sulfonamides potentiate effects.",
        "interactionDetails": "",
        "drugIds": [
            "glipizide",
            "glyburide",
            "glimepiride"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Sulfonylureas are 'insulin secretagogues' - they stimulate pancreatic beta cells to release insulin regardless of glucose level. Second-line therapy for Type 2 DM (after metformin) or first-line if metformin contraindicated. Divided into 1st generation (rarely used) and 2nd generation (glipizide, glyburide, glimepiride). Major limitation: hypoglycemia risk and weight gain.",
            "clinicalApproach": [
                "Second-line therapy for Type 2 DM (add to metformin if HbA1c not at goal)",
                "Can be used as monotherapy if metformin contraindicated (rare)",
                "Require functioning pancreatic beta cells - NOT effective in Type 1 DM",
                "CAUSE hypoglycemia (unlike metformin) - educate patients on symptoms and treatment",
                "Cause weight gain (2-5 kg average) - less desirable in obese diabetics",
                "Work best when taken 30 minutes before meals (stimulate mealtime insulin)",
                "2nd generation (glipizide, glyburide, glimepiride) preferred over 1st gen (chlorpropamide, tolbutamide)",
                "Between 2nd gen drugs: glipizide and glimepiride preferred over glyburide (lower hypoglycemia risk)"
            ],
            "pharmacokinetics": {
                "absorption": "Well absorbed orally. Take 30 minutes before meals for optimal effect.",
                "distribution": "Highly protein-bound (90-99%). Displaced by other highly protein-bound drugs.",
                "metabolism": "Hepatic metabolism via CYP2C9 (glipizide, glyburide) or CYP2C9 (glimepiride). Active metabolites for some (glyburide).",
                "excretion": "Renal excretion of metabolites. Glyburide has active metabolites excreted renally - avoid in renal impairment. Glipizide safer in renal disease."
            },
            "comparison": {
                "title": "Comparison of 2nd Generation Sulfonylureas",
                "description": "Choose based on renal function, hypoglycemia risk, and dosing convenience",
                "content": `
GLIPIZIDE (Glucotrol):
- Half-life: 2-4 hours (shortest)
- Dosing: 1-2 times daily, before meals
- Metabolism: Hepatic → inactive metabolites
- Renal adjustment: Safest in renal impairment (no active metabolites)
- Hypoglycemia risk: Lower than glyburide
- Use: Preferred in elderly and renally impaired

GLYBURIDE (Micronase, DiaBeta):
- Half-life: 4-10 hours (longest)
- Dosing: 1-2 times daily, with meals
- Metabolism: Hepatic → ACTIVE metabolites
- Renal adjustment: AVOID in renal impairment (active metabolites accumulate)
- Hypoglycemia risk: HIGHEST of sulfonylureas
- Use: Avoid in elderly, avoid in CKD

GLIMEPIRIDE (Amaryl):
- Half-life: 5-9 hours
- Dosing: Once daily, with breakfast
- Metabolism: Hepatic → mostly inactive metabolites
- Renal adjustment: Use caution, dose reduction may be needed
- Hypoglycemia risk: Lower than glyburide, similar to glipizide
- Use: Convenient once-daily dosing
`
            },
            "monitoring": [
                "Blood glucose: frequent fingersticks, especially when starting or adjusting dose",
                "HbA1c every 3 months",
                "Signs/symptoms of hypoglycemia (teach patient recognition and treatment)",
                "Weight (expect weight gain 2-5 kg)",
                "Renal function if using glyburide (avoid in CKD)"
            ],
            "contraindications": [
                "Type 1 Diabetes (no beta cells to stimulate)",
                "Diabetic ketoacidosis",
                "Severe hepatic disease (decreased metabolism)",
                "Sulfa allergy (cross-reactivity possible but rare)",
                "Pregnancy (teratogenic, use insulin instead)"
            ],
            "clinicalPearls": [
                "Mechanism mnemonic: 'SURe makes insulin' (SUR = sulfonylurea receptor on beta cells)",
                "Suffix: -ide (glipizIDE, glyburIDE, glimepiRIDE)",
                "Step 1 buzzword: 'hypoglycemia' or 'weight gain in diabetic'",
                "Bind to SUR1 (sulfonylurea receptor) on ATP-sensitive K+ channels → closes K+ channel → depolarization → Ca²⁺ influx → insulin release",
                "Major side effect: Hypoglycemia (10-20% of patients) - risk factors: elderly, renal impairment, skipped meals, alcohol",
                "SIADH: rare but classic board-tested side effect (especially chlorpropamide, less with 2nd gen)",
                "Disulfiram-like reaction with alcohol (especially chlorpropamide)",
                "Beta cell burnout: chronic use may exhaust beta cells (secondary failure in 5-10% per year)",
                "Glipizide vs Glyburide: 'GlipiZIDE is Zafe' (safer in renal disease, lower hypoglycemia)",
                "Classic vignette: Type 2 DM on metformin, HbA1c still 8.5% → add sulfonylurea",
                "Common wrong answer: 'Switch to sulfonylurea' - usually ADD to metformin, not switch"
            ]
        }
    },
    {
        "id": "thiazolidinediones",
        "name": "Thiazolidinediones",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "PPAR-γ agonists, increase insulin sensitivity in muscle and fat.",
        "sideEffects": [
            "Weight gain",
            "Fluid retention",
            "Heart failure",
            "Bone fractures"
        ],
        "interactions": "CYP2C8 inhibitors increase levels.",
        "interactionDetails": "",
        "drugIds": [
            "pioglitazone"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "TZDs (also called glitazones) are PPAR-γ (peroxisome proliferator-activated receptor gamma) agonists that increase insulin sensitivity in muscle and adipose tissue. Third-line therapy for Type 2 DM. Rosiglitazone was removed from market due to cardiovascular concerns; pioglitazone remains available. Major limitations: weight gain, fluid retention, heart failure risk, and bone fractures.",
            "clinicalApproach": [
                "Third-line therapy (after metformin + sulfonylurea or other combinations)",
                "Work by increasing insulin SENSITIVITY (not secretion) - 'insulin sensitizers'",
                "Takes 6-12 weeks for full glucose-lowering effect (slow onset)",
                "Do NOT cause hypoglycemia when used alone",
                "Reserved for patients with significant insulin resistance who can't tolerate other agents",
                "CONTRAINDICATED in heart failure (NYHA Class III-IV) - causes fluid retention",
                "Avoid in patients with osteoporosis or fracture risk (especially postmenopausal women)",
                "Less commonly used now due to side effect profile - safer alternatives available"
            ],
            "pharmacokinetics": {
                "absorption": "Well absorbed orally. Can take with or without food.",
                "distribution": "Highly protein-bound (>99%). Extensive tissue distribution.",
                "metabolism": "Hepatic metabolism via CYP2C8 (pioglitazone) and CYP2C9. Active metabolites contribute to effect.",
                "excretion": "Primarily fecal (pioglitazone). Long half-life allows once-daily dosing."
            },
            "monitoring": [
                "Blood glucose and HbA1c (may take 8-12 weeks to see full effect)",
                "LFTs at baseline and periodically (risk of hepatotoxicity, though rare)",
                "Weight (expect 3-5 kg weight gain)",
                "Signs/symptoms of heart failure (edema, dyspnea, weight gain)",
                "Bone health in at-risk patients (postmenopausal women)",
                "Macular edema (rare but check vision if complaints)"
            ],
            "contraindications": [
                "Heart failure (NYHA Class III-IV) - ABSOLUTE contraindication",
                "Active liver disease or elevated LFTs (>2.5x ULN)",
                "History of bladder cancer (pioglitazone specific)",
                "Pregnancy/breastfeeding"
            ],
            "clinicalPearls": [
                "Suffix: -glitazone (pioGLITAZONE, rosiGLITAZONE [removed])",
                "Mechanism mnemonic: 'PPAR-γ agonist = Promotes fat Production And Redistribution'",
                "Step 1 buzzword: 'contraindicated in heart failure' or 'fluid retention and edema'",
                "Rosiglitazone (Avandia) removed from US market in 2010 due to MI/cardiovascular risk",
                "Weight gain is ADIPOSE tissue (subcutaneous), not muscle - redistributes fat from visceral to subcutaneous",
                "Fluid retention mechanism: increased renal sodium reabsorption in collecting duct",
                "Heart failure: TZDs cause fluid retention → precipitate/worsen HF (BLACK BOX WARNING)",
                "Bone fractures: increased fracture risk in women (distal limbs) - uncertain mechanism, possibly osteoblast inhibition",
                "Classic vignette: Type 2 DM on metformin + sulfonylurea, still HbA1c 8.5%, consider TZD vs other options",
                "Common wrong answer: 'Give TZD to patient with CHF' - CONTRAINDICATED!"
            ]
        }
    },
    {
        "id": "dpp-4-inhibitors",
        "name": "DPP-4 Inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit dipeptidyl peptidase-4, increase incretin levels.",
        "sideEffects": [
            "Upper respiratory infections",
            "Headache",
            "Pancreatitis (rare)"
        ],
        "interactions": "Few significant interactions.",
        "interactionDetails": "",
        "drugIds": [
            "sitagliptin",
            "linagliptin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "glp-1-receptor-agonists",
        "name": "GLP-1 Receptor Agonists",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Mimic incretin hormones, glucose-dependent insulin release.",
        "sideEffects": [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Pancreatitis risk"
        ],
        "interactions": "Delay gastric emptying, affect oral drug absorption.",
        "interactionDetails": "",
        "drugIds": [
            "exenatide",
            "liraglutide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "sglt2-inhibitors",
        "name": "SGLT2 Inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Block sodium-glucose cotransporter-2 in kidneys, increase glucose excretion.",
        "sideEffects": [
            "UTIs",
            "Genital mycotic infections",
            "DKA risk",
            "Dehydration"
        ],
        "interactions": "Diuretics increase dehydration risk.",
        "interactionDetails": "",
        "drugIds": [
            "empagliflozin",
            "canagliflozin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "amylin-analogs",
        "name": "Amylin Analogs",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Synthetic analog of amylin (hormone co-secreted with insulin). Slows gastric emptying, suppresses postprandial glucagon, and promotes satiety.",
        "sideEffects": [
            "Nausea",
            "Hypoglycemia (when combined with insulin)",
            "Injection site reactions"
        ],
        "interactions": "Delays absorption of oral medications due to delayed gastric emptying.",
        "interactionDetails": "",
        "drugIds": [
            "pramlintide"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Amylin is a hormone normally co-secreted with insulin from pancreatic beta cells. Pramlintide is a synthetic analog used as adjunct therapy with insulin in Type 1 and Type 2 DM. It complements insulin by addressing postprandial glucose spikes through multiple mechanisms.",
            "clinicalApproach": [
                "Only used as adjunct to insulin therapy (never alone)",
                "Primarily targets postprandial hyperglycemia",
                "Reduces insulin requirements by 30-50% (must reduce mealtime insulin when starting to avoid hypoglycemia)",
                "Benefits: weight loss (unlike insulin), improved postprandial glucose control",
                "Reserved for patients not at goal despite optimized insulin therapy"
            ],
            "pharmacokinetics": {
                "absorption": "Subcutaneous injection. Rapid absorption with peak at 20 minutes.",
                "distribution": "Does not bind extensively to plasma proteins.",
                "metabolism": "Primarily renal metabolism.",
                "excretion": "Renal excretion. Avoid in severe renal impairment (CrCl <15 mL/min)."
            },
            "monitoring": [
                "Blood glucose: before and after meals (watch for hypoglycemia)",
                "Weight (amylin analogs promote weight loss)",
                "Gastrointestinal symptoms (nausea is common initially)"
            ],
            "contraindications": [
                "Gastroparesis (delayed gastric emptying)",
                "Hypoglycemia unawareness",
                "Confirmed diagnosis of gastroparesis"
            ],
            "clinicalPearls": [
                "Must reduce mealtime insulin dose by 50% when starting pramlintide to avoid severe hypoglycemia",
                "Give as separate injection from insulin (cannot mix)",
                "Nausea is very common (60-70%) but usually improves over weeks",
                "Step 1 buzzword: 'adjunct to insulin' or 'postprandial glucose control'",
                "Mechanism mnemonic: Amylin = 'A meal is lingering' (slows gastric emptying)",
                "Unique benefit: only diabetes drug that causes weight LOSS when combined with insulin"
            ]
        }
    },
    {
        "id": "alpha-glucosidase-inhibitors",
        "name": "Alpha-Glucosidase Inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit intestinal alpha-glucosidase enzymes, delaying carbohydrate digestion and absorption. Reduces postprandial glucose spikes.",
        "sideEffects": [
            "Flatulence",
            "Diarrhea",
            "Abdominal pain"
        ],
        "interactions": "Intestinal adsorbents (charcoal) and digestive enzymes may reduce efficacy.",
        "interactionDetails": "",
        "drugIds": [
            "acarbose",
            "miglitol"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Alpha-glucosidase inhibitors work in the gut to delay breakdown of complex carbohydrates into simple sugars. By slowing digestion, they reduce postprandial glucose spikes. Modest efficacy (HbA1c reduction 0.5-0.8%) but no risk of hypoglycemia when used alone.",
            "clinicalApproach": [
                "Primarily reduce postprandial glucose (less effect on fasting glucose)",
                "Must be taken with first bite of each meal to be effective",
                "No hypoglycemia risk when used as monotherapy",
                "Often used in combination with other diabetes drugs",
                "Better for patients with predominantly postprandial hyperglycemia",
                "GI side effects limit use - start low dose and titrate slowly"
            ],
            "pharmacokinetics": {
                "absorption": "Acarbose: <2% absorbed systemically (acts locally in GI tract). Miglitol: well absorbed systemically.",
                "distribution": "Minimal systemic distribution for acarbose (local GI action).",
                "metabolism": "Acarbose: metabolized by intestinal bacteria and GI enzymes. Miglitol: not metabolized.",
                "excretion": "Acarbose: fecal (metabolites). Miglitol: renal (unchanged). Avoid miglitol in severe renal impairment."
            },
            "comparison": {
                "title": "Comparison of Alpha-Glucosidase Inhibitors",
                "description": "Acarbose vs Miglitol - key differences",
                "content": `
ACARBOSE:
- Absorption: <2% systemic absorption (mostly GI action)
- Metabolism: By intestinal bacteria
- Excretion: Fecal
- Renal impairment: Can use (not systemically absorbed)
- Liver effects: Rare reversible hepatotoxicity (monitor LFTs)
- Dose: 25-100 mg TID with meals

MIGLITOL:
- Absorption: Well absorbed (>95%)
- Metabolism: Not metabolized
- Excretion: Renal (unchanged)
- Renal impairment: Avoid if CrCl <25 mL/min
- Liver effects: No hepatotoxicity
- Dose: 25-100 mg TID with meals
`
            },
            "monitoring": [
                "Blood glucose: particularly postprandial levels",
                "HbA1c every 3 months",
                "LFTs for acarbose (rare hepatotoxicity, check at 3, 6, 12 months then annually)",
                "GI symptoms (flatulence, diarrhea - dose-dependent)"
            ],
            "contraindications": [
                "Inflammatory bowel disease",
                "Colonic ulceration",
                "Intestinal obstruction",
                "Chronic intestinal diseases with malabsorption",
                "Cirrhosis (for acarbose)",
                "Severe renal impairment (for miglitol)"
            ],
            "clinicalPearls": [
                "GI side effects (flatulence, diarrhea) occur in 70% of patients - caused by undigested carbs fermenting in colon",
                "Must take with FIRST BITE of meal (not before, not after)",
                "If hypoglycemia occurs (from concurrent insulin/sulfonylurea), treat with GLUCOSE (not sucrose) - drug blocks sucrose breakdown",
                "Step 1 buzzword: 'flatulence' or 'must avoid in IBD'",
                "Mechanism mnemonic: 'Alpha blockers block sugar breakdown in the Alimentary canal'",
                "Weak efficacy but safe (no hypoglycemia as monotherapy, no weight gain)",
                "Rarely used first-line due to GI side effects and modest efficacy - mostly used in combination"
            ]
        }
    },
    {
        "id": "diabetes-medications",
        "name": "Diabetes Medications",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "insulin",
            "biguanides",
            "sulfonylureas",
            "thiazolidinediones",
            "dpp-4-inhibitors",
            "glp-1-receptor-agonists",
            "sglt2-inhibitors",
            "amylin-analogs",
            "alpha-glucosidase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "thyroid-hormones",
        "name": "Thyroid Hormones",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Replace deficient thyroid hormones T4 and T3.",
        "sideEffects": [
            "Hyperthyroid symptoms",
            "Arrhythmias",
            "Osteoporosis"
        ],
        "interactions": "Iron, calcium reduce absorption.",
        "interactionDetails": "",
        "drugIds": [
            "levothyroxine",
            "liothyronine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antithyroid-agents",
        "name": "Antithyroid Agents",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit thyroid hormone synthesis.",
        "sideEffects": [
            "Agranulocytosis",
            "Hepatotoxicity",
            "Rash"
        ],
        "interactions": "Warfarin effects enhanced.",
        "interactionDetails": "",
        "drugIds": [
            "methimazole",
            "propylthiouracil"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "thyroid-medications",
        "name": "Thyroid Medications",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "thyroid-hormones",
            "antithyroid-agents"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "glucocorticoids",
        "name": "Glucocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Anti-inflammatory and immunosuppressive effects via genomic pathways.",
        "sideEffects": [
            "Hyperglycemia",
            "Osteoporosis",
            "Immunosuppression",
            "Adrenal suppression"
        ],
        "interactions": "CYP3A4 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "drugIds": [
            "prednisone",
            "hydrocortisone",
            "dexamethasone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "mineralocorticoids",
        "name": "Mineralocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Sodium retention and potassium excretion in distal nephron.",
        "sideEffects": [
            "Hypertension",
            "Hypokalemia",
            "Fluid retention"
        ],
        "interactions": "NSAIDs reduce effectiveness.",
        "interactionDetails": "",
        "drugIds": [
            "fludrocortisone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "corticosteroids",
        "name": "Corticosteroids",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "glucocorticoids",
            "mineralocorticoids"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

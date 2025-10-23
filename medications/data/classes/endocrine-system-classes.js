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
        "pageType": "pharmacologic-class"
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
        "pageType": "pharmacologic-class"
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
        "pageType": "pharmacologic-class"
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

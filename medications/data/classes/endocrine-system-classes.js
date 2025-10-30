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
        "pageType": "pharmacologic-class"
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
        "id": "meglitinides",
        "name": "Meglitinides",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Non-sulfonylurea insulin secretagogues. Bind to SUR1 receptor (different site than sulfonylureas) on pancreatic beta cells, stimulating insulin release.",
        "sideEffects": [
            "Hypoglycemia (less than sulfonylureas)",
            "Weight gain (1-2 kg, less than sulfonylureas)",
            "Upper respiratory infection"
        ],
        "interactions": "CYP3A4 and CYP2C8 interactions. Gemfibrozil significantly increases repaglinide levels.",
        "interactionDetails": "",
        "drugIds": [
            "repaglinide",
            "nateglinide"
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
            "pioglitazone",
            "rosiglitazone"
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
        "pageType": "pharmacologic-class"
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
        "pageType": "pharmacologic-class"
    },
    {
        "id": "diabetes-medications",
        "name": "Diabetes Medications",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "insulin",
            "biguanides",
            "sulfonylureas",
            "meglitinides",
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

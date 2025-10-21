// Gastrointestinal System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "proton-pump-inhibitors",
        "name": "Proton Pump Inhibitors",
        "therapeuticClass": "acid-suppression",
        "system": "gastrointestinal-system",
        "mechanism": "Irreversibly block H+/K+-ATPase in gastric parietal cells.",
        "sideEffects": [
            "Bone fractures",
            "B12 deficiency",
            "C. diff infection",
            "Rebound acid hypersecretion"
        ],
        "interactions": "Reduce absorption of pH-dependent drugs.",
        "interactionDetails": "",
        "drugIds": [
            "omeprazole",
            "pantoprazole",
            "esomeprazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "h2-receptor-antagonists",
        "name": "H2 Receptor Antagonists",
        "therapeuticClass": "acid-suppression",
        "system": "gastrointestinal-system",
        "mechanism": "Block histamine H2 receptors on gastric parietal cells.",
        "sideEffects": [
            "CNS effects (especially cimetidine)",
            "Gynecomastia",
            "Drug interactions"
        ],
        "interactions": "Cimetidine inhibits CYP enzymes.",
        "interactionDetails": "",
        "drugIds": [
            "ranitidine",
            "famotidine",
            "cimetidine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antacids",
        "name": "Antacids",
        "therapeuticClass": "acid-suppression",
        "system": "gastrointestinal-system",
        "mechanism": "Neutralize gastric acid through basic compounds.",
        "sideEffects": [
            "Constipation (aluminum)",
            "Diarrhea (magnesium)",
            "Electrolyte imbalances"
        ],
        "interactions": "Affect absorption of many drugs.",
        "interactionDetails": "",
        "drugIds": [
            "aluminum-hydroxide",
            "magnesium-hydroxide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "acid-suppression",
        "name": "Acid Suppression",
        "system": "gastrointestinal-system",
        "pharmacologicClassIds": [
            "proton-pump-inhibitors",
            "h2-receptor-antagonists",
            "antacids"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "prokinetic-agents",
        "name": "Prokinetic Agents",
        "therapeuticClass": "gastrointestinal-motility",
        "system": "gastrointestinal-system",
        "mechanism": "Enhance GI motility through various receptor mechanisms.",
        "sideEffects": [
            "Extrapyramidal effects",
            "Tardive dyskinesia",
            "QT prolongation"
        ],
        "interactions": "CNS depressants additive effects.",
        "interactionDetails": "",
        "drugIds": [
            "metoclopramide",
            "domperidone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antidiarrheals",
        "name": "Antidiarrheals",
        "therapeuticClass": "gastrointestinal-motility",
        "system": "gastrointestinal-system",
        "mechanism": "Reduce intestinal motility and fluid secretion.",
        "sideEffects": [
            "Constipation",
            "CNS depression",
            "Dependency potential"
        ],
        "interactions": "MAOIs contraindicated with loperamide.",
        "interactionDetails": "",
        "drugIds": [
            "loperamide",
            "diphenoxylate-atropine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "laxatives",
        "name": "Laxatives",
        "therapeuticClass": "gastrointestinal-motility",
        "system": "gastrointestinal-system",
        "mechanism": "Various mechanisms to promote bowel movements.",
        "sideEffects": [
            "Electrolyte imbalances",
            "Dependency",
            "Dehydration"
        ],
        "interactions": "May affect absorption of other drugs.",
        "interactionDetails": "",
        "drugIds": [
            "psyllium",
            "docusate",
            "senna"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "gastrointestinal-motility",
        "name": "Gastrointestinal Motility",
        "system": "gastrointestinal-system",
        "pharmacologicClassIds": [
            "prokinetic-agents",
            "antidiarrheals",
            "laxatives"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "aminosalicylates",
        "name": "Aminosalicylates",
        "therapeuticClass": "inflammatory-bowel-disease",
        "system": "gastrointestinal-system",
        "mechanism": "Deliver 5-aminosalicylic acid to inflamed colonic mucosa to inhibit prostaglandins and leukotrienes.",
        "sideEffects": [
            "Headache",
            "Nausea",
            "Interstitial nephritis (rare)"
        ],
        "interactions": "Concurrent NSAIDs increase renal risk.",
        "interactionDetails": "",
        "drugIds": [
            "mesalamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "biologic-agents",
        "name": "Biologic Agents",
        "therapeuticClass": "inflammatory-bowel-disease",
        "system": "gastrointestinal-system",
        "mechanism": "Monoclonal antibodies neutralize TNF-α to reduce intestinal inflammation.",
        "sideEffects": [
            "Infection risk",
            "Infusion reactions",
            "Reactivation of latent TB"
        ],
        "interactions": "Live vaccines contraindicated.",
        "interactionDetails": "",
        "drugIds": [
            "infliximab"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "inflammatory-bowel-disease",
        "name": "Inflammatory Bowel Disease",
        "system": "gastrointestinal-system",
        "pharmacologicClassIds": [
            "aminosalicylates",
            "biologic-agents"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "somatostatin-analogs",
        "name": "Somatostatin Analogs",
        "therapeuticClass": "portal-and-hepatic-disorders",
        "system": "gastrointestinal-system",
        "mechanism": "Decrease splanchnic blood flow and hormone secretion.",
        "sideEffects": [
            "Gallstones",
            "Steatorrhea",
            "Glucose dysregulation"
        ],
        "interactions": "May reduce absorption of fat-soluble drugs.",
        "interactionDetails": "",
        "drugIds": [
            "octreotide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "ammonia-lowering-agents",
        "name": "Ammonia-Lowering Agents",
        "therapeuticClass": "portal-and-hepatic-disorders",
        "system": "gastrointestinal-system",
        "mechanism": "Reduce intestinal ammonia production and absorption.",
        "sideEffects": [
            "Bloating",
            "Diarrhea",
            "Electrolyte disturbances"
        ],
        "interactions": "Additive diarrhea with other laxatives.",
        "interactionDetails": "",
        "drugIds": [
            "lactulose",
            "rifaximin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "portal-and-hepatic-disorders",
        "name": "Portal and Hepatic Disorders",
        "system": "gastrointestinal-system",
        "pharmacologicClassIds": [
            "somatostatin-analogs",
            "ammonia-lowering-agents"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

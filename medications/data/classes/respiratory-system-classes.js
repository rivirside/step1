// Respiratory System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "short-acting-beta-2-agonists-saba",
        "name": "Short-Acting Beta-2 Agonists (SABA)",
        "therapeuticClass": "bronchodilators",
        "system": "respiratory-system",
        "mechanism": "Stimulate β2 receptors causing rapid bronchodilation.",
        "sideEffects": [
            "Tachycardia",
            "Tremor",
            "Hypokalemia"
        ],
        "interactions": "Beta-blockers antagonize effects.",
        "interactionDetails": "",
        "drugIds": [
            "albuterol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "long-acting-beta-2-agonists-laba",
        "name": "Long-Acting Beta-2 Agonists (LABA)",
        "therapeuticClass": "bronchodilators",
        "system": "respiratory-system",
        "mechanism": "Long-duration β2 stimulation for maintenance therapy.",
        "sideEffects": [
            "Tachycardia",
            "Tremor",
            "Increased asthma mortality if used alone"
        ],
        "interactions": "Must be used with inhaled corticosteroids in asthma.",
        "interactionDetails": "",
        "drugIds": [
            "salmeterol",
            "formoterol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anticholinergics",
        "name": "Anticholinergics",
        "therapeuticClass": "bronchodilators",
        "system": "respiratory-system",
        "mechanism": "Block muscarinic receptors preventing bronchoconstriction.",
        "sideEffects": [
            "Dry mouth",
            "Urinary retention"
        ],
        "interactions": "Other anticholinergics (additive effects).",
        "interactionDetails": "",
        "drugIds": [
            "ipratropium",
            "tiotropium"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "methylxanthines",
        "name": "Methylxanthines",
        "therapeuticClass": "bronchodilators",
        "system": "respiratory-system",
        "mechanism": "Inhibit phosphodiesterase to increase cAMP and block adenosine receptors, causing bronchodilation.",
        "sideEffects": [
            "Narrow therapeutic index",
            "Arrhythmias",
            "Seizures"
        ],
        "interactions": "CYP inhibitors (ciprofloxacin, cimetidine) increase toxicity; smoking induces metabolism.",
        "interactionDetails": "",
        "drugIds": [
            "theophylline"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "bronchodilators",
        "name": "Bronchodilators",
        "system": "respiratory-system",
        "pharmacologicClassIds": [
            "short-acting-beta-2-agonists-saba",
            "long-acting-beta-2-agonists-laba",
            "anticholinergics",
            "methylxanthines"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "inhaled-corticosteroids",
        "name": "Inhaled Corticosteroids",
        "therapeuticClass": "anti-inflammatory-agents",
        "system": "respiratory-system",
        "mechanism": "Local anti-inflammatory effects in airways.",
        "sideEffects": [
            "Oral thrush",
            "Hoarseness",
            "Growth suppression"
        ],
        "interactions": "Minimal systemic interactions.",
        "interactionDetails": "",
        "drugIds": [
            "beclomethasone",
            "fluticasone",
            "budesonide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "leukotriene-modifiers",
        "name": "Leukotriene Modifiers",
        "therapeuticClass": "anti-inflammatory-agents",
        "system": "respiratory-system",
        "mechanism": "Block leukotriene effects or synthesis.",
        "sideEffects": [
            "Neuropsychiatric effects",
            "Hepatotoxicity"
        ],
        "interactions": "CYP450 interactions.",
        "interactionDetails": "",
        "drugIds": [
            "montelukast",
            "zileuton"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "mast-cell-stabilizers",
        "name": "Mast Cell Stabilizers",
        "therapeuticClass": "anti-inflammatory-agents",
        "system": "respiratory-system",
        "mechanism": "Prevent calcium-dependent mast cell degranulation.",
        "sideEffects": [
            "Throat irritation",
            "Cough",
            "Unpleasant taste"
        ],
        "interactions": "Minimal systemic interactions.",
        "interactionDetails": "",
        "drugIds": [
            "cromolyn-sodium"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "targeted-biologics",
        "name": "Targeted Biologics",
        "therapeuticClass": "anti-inflammatory-agents",
        "system": "respiratory-system",
        "mechanism": "Monoclonal antibodies neutralize IgE or cytokines driving allergic inflammation.",
        "sideEffects": [
            "Injection site reactions",
            "Anaphylaxis (rare)"
        ],
        "interactions": "Live vaccines contraindicated while on therapy.",
        "interactionDetails": "",
        "drugIds": [
            "omalizumab"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anti-inflammatory-agents",
        "name": "Anti-Inflammatory Agents",
        "system": "respiratory-system",
        "pharmacologicClassIds": [
            "inhaled-corticosteroids",
            "leukotriene-modifiers",
            "mast-cell-stabilizers",
            "targeted-biologics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "mucolytics",
        "name": "Mucolytics",
        "therapeuticClass": "airway-clearance-agents",
        "system": "respiratory-system",
        "mechanism": "Reduce mucus viscosity to improve airway clearance.",
        "sideEffects": [
            "Bronchospasm",
            "Chest tightness",
            "Nausea"
        ],
        "interactions": "May enhance effects of other inhaled therapies by improving deposition.",
        "interactionDetails": "",
        "drugIds": [
            "n-acetylcysteine",
            "dornase-alfa"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "airway-clearance-agents",
        "name": "Airway Clearance Agents",
        "system": "respiratory-system",
        "pharmacologicClassIds": [
            "mucolytics"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

// Dermatology - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "topical-retinoids",
        "name": "Topical Retinoids",
        "therapeuticClass": "acne-medications",
        "system": "dermatology",
        "mechanism": "Normalize follicular keratinization, reduce comedone formation.",
        "sideEffects": [
            "Skin irritation",
            "Photosensitivity",
            "Teratogenic"
        ],
        "interactions": "Other topical irritants increase skin irritation.",
        "interactionDetails": "",
        "drugIds": [
            "tretinoin",
            "adapalene"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "oral-antibiotics",
        "name": "Oral Antibiotics",
        "therapeuticClass": "acne-medications",
        "system": "dermatology",
        "mechanism": "Reduce Propionibacterium acnes, anti-inflammatory effects.",
        "sideEffects": [
            "GI upset",
            "Photosensitivity",
            "Antibiotic resistance"
        ],
        "interactions": "Antacids reduce absorption, oral contraceptives.",
        "interactionDetails": "",
        "drugIds": [
            "doxycycline",
            "minocycline"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "isotretinoin",
        "name": "Isotretinoin",
        "therapeuticClass": "acne-medications",
        "system": "dermatology",
        "mechanism": "Reduces sebum production, normalizes keratinization, anti-inflammatory.",
        "sideEffects": [
            "Severe teratogenicity",
            "Depression",
            "Dry skin/lips",
            "Hepatotoxicity"
        ],
        "interactions": "Vitamin A supplements (hypervitaminosis A), tetracyclines (pseudotumor cerebri).",
        "interactionDetails": "TETRACYCLINES: MECHANISM - Both isotretinoin and tetracyclines can increase intracranial pressure. CONSEQUENCE - Risk of pseudotumor cerebri with severe headaches and vision changes.",
        "drugIds": [
            "isotretinoin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "acne-medications",
        "name": "Acne Medications",
        "system": "dermatology",
        "pharmacologicClassIds": [
            "topical-retinoids",
            "oral-antibiotics",
            "isotretinoin"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "azole-antifungals",
        "name": "Azole Antifungals",
        "therapeuticClass": "topical-antifungals",
        "system": "dermatology",
        "mechanism": "Inhibit ergosterol synthesis by blocking 14α-demethylase.",
        "sideEffects": [
            "Local irritation",
            "Contact dermatitis"
        ],
        "interactions": "Minimal systemic absorption, few interactions.",
        "interactionDetails": "",
        "drugIds": [
            "clotrimazole",
            "ketoconazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "allylamine-antifungals",
        "name": "Allylamine Antifungals",
        "therapeuticClass": "topical-antifungals",
        "system": "dermatology",
        "mechanism": "Inhibit squalene epoxidase, fungicidal.",
        "sideEffects": [
            "Local burning",
            "Skin irritation"
        ],
        "interactions": "None significant.",
        "interactionDetails": "",
        "drugIds": [
            "terbinafine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "topical-antifungals",
        "name": "Topical Antifungals",
        "system": "dermatology",
        "pharmacologicClassIds": [
            "azole-antifungals",
            "allylamine-antifungals"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "low-to-high-potency-steroids",
        "name": "Low to High Potency Steroids",
        "therapeuticClass": "topical-corticosteroids",
        "system": "dermatology",
        "mechanism": "Anti-inflammatory, immunosuppressive, vasoconstrictive effects.",
        "sideEffects": [
            "Skin atrophy",
            "Striae",
            "Systemic absorption",
            "Rebound dermatitis"
        ],
        "interactions": "Occlusive dressings increase absorption.",
        "interactionDetails": "",
        "drugIds": [
            "hydrocortisone",
            "triamcinolone",
            "clobetasol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "topical-corticosteroids",
        "name": "Topical Corticosteroids",
        "system": "dermatology",
        "pharmacologicClassIds": [
            "low-to-high-potency-steroids"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "topical-calcineurin-inhibitors",
        "name": "Topical Calcineurin Inhibitors",
        "therapeuticClass": "topical-immunomodulators",
        "system": "dermatology",
        "mechanism": "Inhibit calcineurin to block T-cell activation and cytokine release.",
        "sideEffects": [
            "Burning sensation",
            "Skin infections",
            "Potential lymphoma risk (black box warning)"
        ],
        "interactions": "CYP3A4 inhibitors may increase systemic absorption.",
        "interactionDetails": "",
        "drugIds": [
            "tacrolimus-topical",
            "pimecrolimus"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "topical-immunomodulators",
        "name": "Topical Immunomodulators",
        "system": "dermatology",
        "pharmacologicClassIds": [
            "topical-calcineurin-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "topical-antibiotics",
        "name": "Topical Antibiotics",
        "therapeuticClass": "topical-antibacterials",
        "system": "dermatology",
        "mechanism": "Inhibit bacterial protein synthesis or cell wall formation.",
        "sideEffects": [
            "Local irritation",
            "Skin dryness",
            "Burning sensation"
        ],
        "interactions": "Variable by agent.",
        "interactionDetails": "",
        "drugIds": [
            "mupirocin",
            "clindamycin-topical"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "topical-antibacterials",
        "name": "Topical Antibacterials",
        "system": "dermatology",
        "pharmacologicClassIds": [
            "topical-antibiotics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "il-12-23-inhibitors",
        "name": "IL-12/23 Inhibitors",
        "therapeuticClass": "psoriasis-biologics",
        "system": "dermatology",
        "mechanism": "Monoclonal antibody against IL-12 and IL-23, reducing T-cell activation.",
        "sideEffects": [
            "Infection risk",
            "Injection site reactions",
            "Antibody formation"
        ],
        "interactions": "Live vaccines contraindicated.",
        "interactionDetails": "",
        "drugIds": [
            "ustekinumab"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "psoriasis-biologics",
        "name": "Psoriasis Biologics",
        "system": "dermatology",
        "pharmacologicClassIds": [
            "il-12-23-inhibitors"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

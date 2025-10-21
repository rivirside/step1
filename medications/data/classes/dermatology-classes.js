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
    }
];

export default classes;

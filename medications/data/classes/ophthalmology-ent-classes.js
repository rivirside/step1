// Ophthalmology/ENT - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "prostaglandin-analogs",
        "name": "Prostaglandin Analogs",
        "therapeuticClass": "glaucoma-medications",
        "system": "ophthalmology-ent",
        "mechanism": "Increase aqueous humor outflow through uveoscleral pathway.",
        "sideEffects": [
            "Iris pigmentation",
            "Eyelash growth",
            "Periorbital fat atrophy"
        ],
        "interactions": "Minimal systemic interactions.",
        "interactionDetails": "",
        "drugIds": [
            "latanoprost",
            "bimatoprost"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "beta-blockers",
        "name": "Beta-Blockers",
        "therapeuticClass": "glaucoma-medications",
        "system": "ophthalmology-ent",
        "mechanism": "Reduce aqueous humor production by blocking β-receptors.",
        "sideEffects": [
            "Bradycardia",
            "Bronchospasm",
            "Fatigue"
        ],
        "interactions": "Systemic beta-blockers (additive effects), calcium channel blockers.",
        "interactionDetails": "SYSTEMIC BETA-BLOCKERS: MECHANISM - Additive β-adrenergic blockade from topical and systemic routes. CONSEQUENCE - Enhanced bradycardia, heart block, and bronchospasm, especially dangerous in COPD/asthma patients.",
        "drugIds": [
            "timolol",
            "betaxolol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "carbonic-anhydrase-inhibitors",
        "name": "Carbonic Anhydrase Inhibitors",
        "therapeuticClass": "glaucoma-medications",
        "system": "ophthalmology-ent",
        "mechanism": "Reduce aqueous humor production by inhibiting carbonic anhydrase.",
        "sideEffects": [
            "Metallic taste",
            "Stinging",
            "Systemic effects if absorbed"
        ],
        "interactions": "Oral CAIs (additive effects).",
        "interactionDetails": "",
        "drugIds": [
            "dorzolamide",
            "brinzolamide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "glaucoma-medications",
        "name": "Glaucoma Medications",
        "system": "ophthalmology-ent",
        "pharmacologicClassIds": [
            "prostaglandin-analogs",
            "beta-blockers",
            "carbonic-anhydrase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "otic-antibiotics",
        "name": "Otic Antibiotics",
        "therapeuticClass": "ear-medications",
        "system": "ophthalmology-ent",
        "mechanism": "Local antibiotic therapy for external ear infections.",
        "sideEffects": [
            "Local irritation",
            "Ototoxicity if tympanic membrane perforated"
        ],
        "interactions": "Avoid if eardrum perforation.",
        "interactionDetails": "",
        "drugIds": [
            "ciprofloxacin-otic",
            "polymyxin-b-neomycin-hydrocortisone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "ear-medications",
        "name": "Ear Medications",
        "system": "ophthalmology-ent",
        "pharmacologicClassIds": [
            "otic-antibiotics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "nasal-decongestants",
        "name": "Nasal Decongestants",
        "therapeuticClass": "nasal-medications",
        "system": "ophthalmology-ent",
        "mechanism": "α1-adrenergic agonists causing vasoconstriction.",
        "sideEffects": [
            "Rebound congestion",
            "Hypertension",
            "Tachycardia"
        ],
        "interactions": "MAOIs, tricyclic antidepressants.",
        "interactionDetails": "",
        "drugIds": [
            "oxymetazoline",
            "phenylephrine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "intranasal-corticosteroids",
        "name": "Intranasal Corticosteroids",
        "therapeuticClass": "nasal-medications",
        "system": "ophthalmology-ent",
        "mechanism": "Local anti-inflammatory effects in nasal passages.",
        "sideEffects": [
            "Nasal dryness",
            "Epistaxis",
            "Septal perforation (rare)"
        ],
        "interactions": "Minimal systemic absorption.",
        "interactionDetails": "",
        "drugIds": [
            "fluticasone",
            "budesonide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "nasal-medications",
        "name": "Nasal Medications",
        "system": "ophthalmology-ent",
        "pharmacologicClassIds": [
            "nasal-decongestants",
            "intranasal-corticosteroids"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

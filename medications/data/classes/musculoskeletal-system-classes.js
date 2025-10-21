// Musculoskeletal System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "central-acting-muscle-relaxants",
        "name": "Central Acting Muscle Relaxants",
        "therapeuticClass": "muscle-relaxants",
        "system": "musculoskeletal-system",
        "mechanism": "Act centrally in spinal cord and brain to reduce muscle spasticity.",
        "sideEffects": [
            "Sedation",
            "Dizziness",
            "Weakness",
            "Hepatotoxicity"
        ],
        "interactions": "CNS depressants (additive sedation), alcohol.",
        "interactionDetails": "CNS DEPRESSANTS: MECHANISM - Additive effects on GABA and other inhibitory neurotransmitter systems. CONSEQUENCE - Enhanced sedation, respiratory depression, and risk of falls, especially in elderly patients.",
        "drugIds": [
            "baclofen",
            "tizanidine",
            "cyclobenzaprine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "neuromuscular-blocking-agents",
        "name": "Neuromuscular Blocking Agents",
        "therapeuticClass": "muscle-relaxants",
        "system": "musculoskeletal-system",
        "mechanism": "Block nicotinic receptors at neuromuscular junction.",
        "sideEffects": [
            "Paralysis",
            "Respiratory depression",
            "Malignant hyperthermia"
        ],
        "interactions": "Aminoglycosides potentiate blockade.",
        "interactionDetails": "",
        "drugIds": [
            "succinylcholine",
            "vecuronium"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "muscle-relaxants",
        "name": "Muscle Relaxants",
        "system": "musculoskeletal-system",
        "pharmacologicClassIds": [
            "central-acting-muscle-relaxants",
            "neuromuscular-blocking-agents"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "bisphosphonates",
        "name": "Bisphosphonates",
        "therapeuticClass": "bone-health",
        "system": "musculoskeletal-system",
        "mechanism": "Inhibit osteoclast-mediated bone resorption by binding to hydroxyapatite.",
        "sideEffects": [
            "Esophagitis",
            "Osteonecrosis of jaw",
            "Atypical fractures"
        ],
        "interactions": "Calcium, antacids reduce absorption.",
        "interactionDetails": "CALCIUM/ANTACIDS: MECHANISM - Divalent cations (Ca2+, Mg2+) chelate bisphosphonates, forming insoluble complexes. CONSEQUENCE - Markedly reduced oral bioavailability and therapeutic efficacy. Take on empty stomach.",
        "drugIds": [
            "alendronate",
            "zoledronic-acid"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "calcium-and-vitamin-d",
        "name": "Calcium and Vitamin D",
        "therapeuticClass": "bone-health",
        "system": "musculoskeletal-system",
        "mechanism": "Provide building blocks for bone mineralization and enhance calcium absorption.",
        "sideEffects": [
            "Constipation",
            "Kidney stones",
            "Hypercalcemia"
        ],
        "interactions": "Thiazide diuretics increase calcium retention.",
        "interactionDetails": "",
        "drugIds": [
            "calcium-carbonate",
            "calcitriol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anabolic-agents",
        "name": "Anabolic Agents",
        "therapeuticClass": "bone-health",
        "system": "musculoskeletal-system",
        "mechanism": "Stimulate osteoblasts to increase bone formation.",
        "sideEffects": [
            "Hypercalcemia",
            "Leg cramps",
            "Osteosarcoma risk (black box warning)"
        ],
        "interactions": "Avoid combination with other hypercalcemia-inducing therapies.",
        "interactionDetails": "",
        "drugIds": [
            "teriparatide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "rankl-inhibitors",
        "name": "RANKL Inhibitors",
        "therapeuticClass": "bone-health",
        "system": "musculoskeletal-system",
        "mechanism": "Monoclonal antibody inhibits RANKL to block osteoclast activation.",
        "sideEffects": [
            "Hypocalcemia",
            "Osteonecrosis of jaw",
            "Infections"
        ],
        "interactions": "Ensure adequate calcium/vitamin D to prevent hypocalcemia.",
        "interactionDetails": "",
        "drugIds": [
            "denosumab"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "bone-health",
        "name": "Bone Health",
        "system": "musculoskeletal-system",
        "pharmacologicClassIds": [
            "bisphosphonates",
            "calcium-and-vitamin-d",
            "anabolic-agents",
            "rankl-inhibitors"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

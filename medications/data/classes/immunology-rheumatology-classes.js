// Immunology/Rheumatology - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "disease-modifying-antirheumatic-drugs-dmards",
        "name": "Disease-Modifying Antirheumatic Drugs (DMARDs)",
        "therapeuticClass": "immunosuppressants",
        "system": "immunology-rheumatology",
        "mechanism": "Various mechanisms to suppress immune system and slow disease progression.",
        "sideEffects": [
            "Immunosuppression",
            "Hepatotoxicity",
            "Myelosuppression"
        ],
        "interactions": "Live vaccines contraindicated, increased infection risk.",
        "interactionDetails": "LIVE VACCINES: MECHANISM - DMARDs suppress immune system function, reducing ability to mount adequate immune response. CONSEQUENCE - Risk of disseminated infection from live vaccines, potentially fatal. Use killed vaccines only.",
        "drugIds": [
            "methotrexate",
            "sulfasalazine",
            "hydroxychloroquine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "biologic-dmards",
        "name": "Biologic DMARDs",
        "therapeuticClass": "immunosuppressants",
        "system": "immunology-rheumatology",
        "mechanism": "Target specific inflammatory mediators (TNF-α, IL-1, IL-6).",
        "sideEffects": [
            "Increased infection risk",
            "Injection site reactions",
            "Reactivation of TB"
        ],
        "interactions": "Live vaccines, other immunosuppressants.",
        "interactionDetails": "OTHER IMMUNOSUPPRESSANTS: MECHANISM - Additive immunosuppressive effects when combined with conventional DMARDs or corticosteroids. CONSEQUENCE - Significantly increased risk of opportunistic infections including PCP, TB reactivation, and fungal infections.",
        "drugIds": [
            "adalimumab",
            "infliximab",
            "etanercept",
            "rituximab"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "calcineurin-inhibitors",
        "name": "Calcineurin Inhibitors",
        "therapeuticClass": "immunosuppressants",
        "system": "immunology-rheumatology",
        "mechanism": "Inhibit calcineurin to block IL-2 transcription and T-cell activation.",
        "sideEffects": [
            "Nephrotoxicity",
            "Hypertension",
            "Neurotoxicity",
            "Gingival hyperplasia (cyclosporine)"
        ],
        "interactions": "CYP3A4 inhibitors markedly increase levels.",
        "interactionDetails": "",
        "drugIds": [
            "cyclosporine",
            "tacrolimus"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antimetabolite-immunosuppressants",
        "name": "Antimetabolite Immunosuppressants",
        "therapeuticClass": "immunosuppressants",
        "system": "immunology-rheumatology",
        "mechanism": "Inhibit nucleotide synthesis to prevent lymphocyte proliferation.",
        "sideEffects": [
            "Myelosuppression",
            "GI upset",
            "Hepatotoxicity"
        ],
        "interactions": "Allopurinol increases azathioprine toxicity; antacids reduce mycophenolate absorption.",
        "interactionDetails": "",
        "drugIds": [
            "mycophenolate-mofetil",
            "azathioprine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "mtor-inhibitors",
        "name": "mTOR Inhibitors",
        "therapeuticClass": "immunosuppressants",
        "system": "immunology-rheumatology",
        "mechanism": "Block mTOR signaling downstream of IL-2 to prevent T-cell proliferation.",
        "sideEffects": [
            "Hyperlipidemia",
            "Bone marrow suppression",
            "Mouth ulcers"
        ],
        "interactions": "CYP3A4 and P-gp substrates.",
        "interactionDetails": "",
        "drugIds": [
            "sirolimus-rapamycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "immunosuppressants",
        "name": "Immunosuppressants",
        "system": "immunology-rheumatology",
        "pharmacologicClassIds": [
            "disease-modifying-antirheumatic-drugs-dmards",
            "biologic-dmards",
            "calcineurin-inhibitors",
            "antimetabolite-immunosuppressants",
            "mtor-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "systemic-corticosteroids",
        "name": "Systemic Corticosteroids",
        "therapeuticClass": "corticosteroids",
        "system": "immunology-rheumatology",
        "mechanism": "Bind glucocorticoid receptors, suppress inflammatory gene transcription.",
        "sideEffects": [
            "Osteoporosis",
            "Diabetes",
            "Infection risk",
            "Adrenal suppression"
        ],
        "interactions": "CYP3A4 inducers reduce efficacy, live vaccines.",
        "interactionDetails": "CYP3A4 INDUCERS: MECHANISM - Rifampin, phenytoin increase cortisol metabolism, reducing therapeutic levels. CONSEQUENCE - Loss of anti-inflammatory efficacy, potential disease flare. May need dose adjustment.",
        "drugIds": [
            "prednisone",
            "methylprednisolone",
            "dexamethasone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "corticosteroids",
        "name": "Corticosteroids",
        "system": "immunology-rheumatology",
        "pharmacologicClassIds": [
            "systemic-corticosteroids"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "uric-acid-lowering-agents",
        "name": "Uric Acid Lowering Agents",
        "therapeuticClass": "gout-medications",
        "system": "immunology-rheumatology",
        "mechanism": "Reduce uric acid production (allopurinol) or increase excretion (probenecid).",
        "sideEffects": [
            "Gout flares initially",
            "Hypersensitivity reactions",
            "Kidney stones"
        ],
        "interactions": "Azathioprine with allopurinol (severe toxicity).",
        "interactionDetails": "AZATHIOPRINE: MECHANISM - Allopurinol inhibits xanthine oxidase, which metabolizes azathioprine. This leads to accumulation of toxic metabolites. CONSEQUENCE - Severe myelosuppression and life-threatening bone marrow toxicity requiring dose reduction.",
        "drugIds": [
            "allopurinol",
            "probenecid"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "acute-gout-treatment",
        "name": "Acute Gout Treatment",
        "therapeuticClass": "gout-medications",
        "system": "immunology-rheumatology",
        "mechanism": "Anti-inflammatory effects to treat acute gout attacks.",
        "sideEffects": [
            "GI upset",
            "Diarrhea",
            "Neutropenia"
        ],
        "interactions": "CYP3A4 inhibitors increase colchicine toxicity.",
        "interactionDetails": "",
        "drugIds": [
            "colchicine",
            "indomethacin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "gout-medications",
        "name": "Gout Medications",
        "system": "immunology-rheumatology",
        "pharmacologicClassIds": [
            "uric-acid-lowering-agents",
            "acute-gout-treatment"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

// Pain Management - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "nsaids",
        "name": "NSAIDs",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Inhibit cyclooxygenase enzymes, reduce prostaglandin synthesis.",
        "sideEffects": [
            "GI ulceration",
            "Renal impairment",
            "Cardiovascular risk",
            "Platelet dysfunction"
        ],
        "interactions": "Warfarin, ACE inhibitors, lithium.",
        "interactionDetails": "WARFARIN: MECHANISM - NSAIDs displace warfarin from protein binding sites (increasing free active drug) and independently inhibit platelet aggregation via COX-1 blockade. Some NSAIDs also inhibit warfarin metabolism. CONSEQUENCE - Dramatically increased bleeding risk through dual anticoagulant/antiplatelet effects. ACE INHIBITORS: MECHANISM - NSAIDs block cyclooxygenase, reducing prostaglandin E2 and prostacyclin production. These prostaglandins normally cause vasodilation and help maintain renal blood flow. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury. LITHIUM: MECHANISM - NSAIDs reduce renal blood flow and glomerular filtration rate, decreasing lithium clearance. Lithium has a narrow therapeutic window. CONSEQUENCE - Lithium toxicity with neurological symptoms (tremor, confusion, seizures) and potential nephrotoxicity.",
        "drugIds": [
            "ibuprofen",
            "naproxen",
            "celecoxib",
            "aspirin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "acetaminophen",
        "name": "Acetaminophen",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Inhibits CNS cyclooxygenase, exact mechanism unclear.",
        "sideEffects": [
            "Hepatotoxicity (dose-dependent)",
            "Rare skin reactions"
        ],
        "interactions": "Warfarin (high doses), alcohol increases hepatotoxicity.",
        "interactionDetails": "",
        "drugIds": [
            "acetaminophen"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "opioid-analgesics",
        "name": "Opioid Analgesics",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Activate opioid receptors in CNS and periphery.",
        "sideEffects": [
            "Respiratory depression",
            "Constipation",
            "Dependence",
            "Tolerance"
        ],
        "interactions": "CNS depressants, MAOIs, CYP3A4 inhibitors.",
        "interactionDetails": "",
        "drugIds": [
            "morphine",
            "codeine",
            "oxycodone",
            "fentanyl",
            "tramadol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "opioid-antagonists",
        "name": "Opioid Antagonists",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Block opioid receptors, reverse opioid effects.",
        "sideEffects": [
            "Precipitated withdrawal",
            "Hypertension",
            "Arrhythmias"
        ],
        "interactions": "Reverses analgesic effects of opioids.",
        "interactionDetails": "",
        "drugIds": [
            "naloxone",
            "naltrexone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "analgesics",
        "name": "Analgesics",
        "system": "pain-management",
        "pharmacologicClassIds": [
            "nsaids",
            "acetaminophen",
            "opioid-analgesics",
            "opioid-antagonists"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "serotonin-antagonists",
        "name": "Serotonin Antagonists",
        "therapeuticClass": "antiemetics",
        "system": "pain-management",
        "mechanism": "Block 5-HT3 receptors in chemoreceptor trigger zone.",
        "sideEffects": [
            "Headache",
            "Constipation",
            "QT prolongation"
        ],
        "interactions": "CYP3A4 substrates.",
        "interactionDetails": "",
        "drugIds": [
            "ondansetron",
            "granisetron"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "dopamine-antagonists",
        "name": "Dopamine Antagonists",
        "therapeuticClass": "antiemetics",
        "system": "pain-management",
        "mechanism": "Block dopamine D2 receptors in chemoreceptor trigger zone.",
        "sideEffects": [
            "Extrapyramidal effects",
            "Tardive dyskinesia",
            "Hyperprolactinemia"
        ],
        "interactions": "CNS depressants.",
        "interactionDetails": "",
        "drugIds": [
            "prochlorperazine",
            "promethazine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antiemetics",
        "name": "Antiemetics",
        "system": "pain-management",
        "pharmacologicClassIds": [
            "serotonin-antagonists",
            "dopamine-antagonists"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

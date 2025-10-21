// Pain Management - Drugs
// Auto-generated from modularize-data.js

const drugs = [
    {
        "id": "ibuprofen",
        "name": "Ibuprofen",
        "pharmacologicClass": "nsaids",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Inhibit cyclooxygenase enzymes, reduce prostaglandin synthesis.",
        "features": "Short half-life, reversible COX inhibition.",
        "clinicalChoice": "Mild-moderate pain, fever.",
        "indications": [
            "Pain",
            "Fever",
            "Inflammation"
        ],
        "contraindications": [
            "Active GI Bleeding",
            "Severe Heart Failure"
        ],
        "sideEffects": [
            "GI ulceration",
            "Renal impairment",
            "Cardiovascular risk",
            "Platelet dysfunction"
        ],
        "interactions": "Warfarin, ACE inhibitors, lithium.",
        "interactionDetails": "WARFARIN: MECHANISM - NSAIDs displace warfarin from protein binding sites (increasing free active drug) and independently inhibit platelet aggregation via COX-1 blockade. Some NSAIDs also inhibit warfarin metabolism. CONSEQUENCE - Dramatically increased bleeding risk through dual anticoagulant/antiplatelet effects. ACE INHIBITORS: MECHANISM - NSAIDs block cyclooxygenase, reducing prostaglandin E2 and prostacyclin production. These prostaglandins normally cause vasodilation and help maintain renal blood flow. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury. LITHIUM: MECHANISM - NSAIDs reduce renal blood flow and glomerular filtration rate, decreasing lithium clearance. Lithium has a narrow therapeutic window. CONSEQUENCE - Lithium toxicity with neurological symptoms (tremor, confusion, seizures) and potential nephrotoxicity.",
        "pageType": "drug"
    },
    {
        "id": "naproxen",
        "name": "Naproxen",
        "pharmacologicClass": "nsaids",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Inhibit cyclooxygenase enzymes, reduce prostaglandin synthesis.",
        "features": "Longer half-life, twice-daily dosing.",
        "clinicalChoice": "Chronic inflammatory conditions.",
        "indications": [
            "Arthritis",
            "Chronic Pain"
        ],
        "contraindications": [
            "Active GI Bleeding",
            "Severe Renal Impairment"
        ],
        "sideEffects": [
            "GI ulceration",
            "Renal impairment",
            "Cardiovascular risk",
            "Platelet dysfunction"
        ],
        "interactions": "Warfarin, ACE inhibitors, lithium.",
        "interactionDetails": "WARFARIN: MECHANISM - NSAIDs displace warfarin from protein binding sites (increasing free active drug) and independently inhibit platelet aggregation via COX-1 blockade. Some NSAIDs also inhibit warfarin metabolism. CONSEQUENCE - Dramatically increased bleeding risk through dual anticoagulant/antiplatelet effects. ACE INHIBITORS: MECHANISM - NSAIDs block cyclooxygenase, reducing prostaglandin E2 and prostacyclin production. These prostaglandins normally cause vasodilation and help maintain renal blood flow. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury. LITHIUM: MECHANISM - NSAIDs reduce renal blood flow and glomerular filtration rate, decreasing lithium clearance. Lithium has a narrow therapeutic window. CONSEQUENCE - Lithium toxicity with neurological symptoms (tremor, confusion, seizures) and potential nephrotoxicity.",
        "pageType": "drug"
    },
    {
        "id": "celecoxib",
        "name": "Celecoxib",
        "pharmacologicClass": "nsaids",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Inhibit cyclooxygenase enzymes, reduce prostaglandin synthesis.",
        "features": "COX-2 selective, reduced GI toxicity.",
        "clinicalChoice": "Arthritis with GI risk factors.",
        "indications": [
            "Osteoarthritis",
            "Rheumatoid Arthritis"
        ],
        "contraindications": [
            "Sulfa Allergy",
            "Cardiovascular Disease"
        ],
        "sideEffects": [
            "GI ulceration",
            "Renal impairment",
            "Cardiovascular risk",
            "Platelet dysfunction"
        ],
        "interactions": "Warfarin, ACE inhibitors, lithium.",
        "interactionDetails": "WARFARIN: MECHANISM - NSAIDs displace warfarin from protein binding sites (increasing free active drug) and independently inhibit platelet aggregation via COX-1 blockade. Some NSAIDs also inhibit warfarin metabolism. CONSEQUENCE - Dramatically increased bleeding risk through dual anticoagulant/antiplatelet effects. ACE INHIBITORS: MECHANISM - NSAIDs block cyclooxygenase, reducing prostaglandin E2 and prostacyclin production. These prostaglandins normally cause vasodilation and help maintain renal blood flow. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury. LITHIUM: MECHANISM - NSAIDs reduce renal blood flow and glomerular filtration rate, decreasing lithium clearance. Lithium has a narrow therapeutic window. CONSEQUENCE - Lithium toxicity with neurological symptoms (tremor, confusion, seizures) and potential nephrotoxicity.",
        "pageType": "drug"
    },
    {
        "id": "acetaminophen",
        "name": "Acetaminophen",
        "pharmacologicClass": "acetaminophen",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Inhibits CNS cyclooxygenase, exact mechanism unclear.",
        "features": "No anti-inflammatory effects, hepatic metabolism.",
        "clinicalChoice": "Fever, pain when NSAIDs contraindicated.",
        "indications": [
            "Fever",
            "Pain"
        ],
        "contraindications": [
            "Severe Liver Disease",
            "Alcohol Abuse"
        ],
        "sideEffects": [
            "Hepatotoxicity (dose-dependent)",
            "Rare skin reactions"
        ],
        "interactions": "Warfarin (high doses), alcohol increases hepatotoxicity.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "morphine",
        "name": "Morphine",
        "pharmacologicClass": "opioid-analgesics",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Activate opioid receptors in CNS and periphery.",
        "features": "Prototype opioid, active metabolites.",
        "clinicalChoice": "Severe acute pain, end-of-life care.",
        "indications": [
            "Severe Pain",
            "Myocardial Infarction"
        ],
        "contraindications": [
            "Respiratory Depression",
            "Paralytic Ileus"
        ],
        "sideEffects": [
            "Respiratory depression",
            "Constipation",
            "Dependence",
            "Tolerance"
        ],
        "interactions": "CNS depressants, MAOIs, CYP3A4 inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "codeine",
        "name": "Codeine",
        "pharmacologicClass": "opioid-analgesics",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Activate opioid receptors in CNS and periphery.",
        "features": "Prodrug, converted to morphine by CYP2D6.",
        "clinicalChoice": "Mild-moderate pain, cough.",
        "indications": [
            "Mild Pain",
            "Cough"
        ],
        "contraindications": [
            "CYP2D6 Ultra-rapid Metabolizers",
            "Children <12"
        ],
        "sideEffects": [
            "Respiratory depression",
            "Constipation",
            "Dependence",
            "Tolerance"
        ],
        "interactions": "CNS depressants, MAOIs, CYP3A4 inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "oxycodone",
        "name": "Oxycodone",
        "pharmacologicClass": "opioid-analgesics",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Activate opioid receptors in CNS and periphery.",
        "features": "Semi-synthetic, high oral bioavailability.",
        "clinicalChoice": "Moderate-severe pain.",
        "indications": [
            "Moderate to Severe Pain"
        ],
        "contraindications": [
            "Respiratory Depression"
        ],
        "sideEffects": [
            "Respiratory depression",
            "Constipation",
            "Dependence",
            "Tolerance"
        ],
        "interactions": "CNS depressants, MAOIs, CYP3A4 inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "fentanyl",
        "name": "Fentanyl",
        "pharmacologicClass": "opioid-analgesics",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Activate opioid receptors in CNS and periphery.",
        "features": "High potency, rapid onset, transdermal available.",
        "clinicalChoice": "Severe chronic pain, anesthesia.",
        "indications": [
            "Severe Chronic Pain",
            "Anesthesia"
        ],
        "contraindications": [
            "Opioid-naive Patients (transdermal)"
        ],
        "sideEffects": [
            "Respiratory depression",
            "Constipation",
            "Dependence",
            "Tolerance"
        ],
        "interactions": "CNS depressants, MAOIs, CYP3A4 inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "tramadol",
        "name": "Tramadol",
        "pharmacologicClass": "opioid-analgesics",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Activate opioid receptors in CNS and periphery.",
        "features": "Weak opioid receptor agonist, SNRI activity.",
        "clinicalChoice": "Moderate pain, lower abuse potential.",
        "indications": [
            "Moderate Pain"
        ],
        "contraindications": [
            "Seizure Disorders",
            "MAOIs"
        ],
        "sideEffects": [
            "Respiratory depression",
            "Constipation",
            "Dependence",
            "Tolerance"
        ],
        "interactions": "CNS depressants, MAOIs, CYP3A4 inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "naloxone",
        "name": "Naloxone",
        "pharmacologicClass": "opioid-antagonists",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Block opioid receptors, reverse opioid effects.",
        "features": "Short duration, IV/IM/nasal administration.",
        "clinicalChoice": "Opioid overdose reversal.",
        "indications": [
            "Opioid Overdose"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Precipitated withdrawal",
            "Hypertension",
            "Arrhythmias"
        ],
        "interactions": "Reverses analgesic effects of opioids.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "naltrexone",
        "name": "Naltrexone",
        "pharmacologicClass": "opioid-antagonists",
        "therapeuticClass": "analgesics",
        "system": "pain-management",
        "mechanism": "Block opioid receptors, reverse opioid effects.",
        "features": "Long-acting, oral formulation.",
        "clinicalChoice": "Opioid use disorder, alcohol dependence.",
        "indications": [
            "Opioid Use Disorder",
            "Alcohol Dependence"
        ],
        "contraindications": [
            "Current Opioid Use"
        ],
        "sideEffects": [
            "Precipitated withdrawal",
            "Hypertension",
            "Arrhythmias"
        ],
        "interactions": "Reverses analgesic effects of opioids.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "ondansetron",
        "name": "Ondansetron",
        "pharmacologicClass": "serotonin-antagonists",
        "therapeuticClass": "antiemetics",
        "system": "pain-management",
        "mechanism": "Block 5-HT3 receptors in chemoreceptor trigger zone.",
        "features": "Highly effective for chemotherapy-induced nausea.",
        "clinicalChoice": "Chemotherapy-induced nausea, postoperative nausea.",
        "indications": [
            "Chemotherapy-Induced Nausea",
            "Postoperative Nausea"
        ],
        "contraindications": [
            "Congenital Long QT Syndrome"
        ],
        "sideEffects": [
            "Headache",
            "Constipation",
            "QT prolongation"
        ],
        "interactions": "CYP3A4 substrates.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "granisetron",
        "name": "Granisetron",
        "pharmacologicClass": "serotonin-antagonists",
        "therapeuticClass": "antiemetics",
        "system": "pain-management",
        "mechanism": "Block 5-HT3 receptors in chemoreceptor trigger zone.",
        "features": "Longer duration than ondansetron.",
        "clinicalChoice": "Chemotherapy-induced nausea.",
        "indications": [
            "Chemotherapy-Induced Nausea"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Headache",
            "Constipation",
            "QT prolongation"
        ],
        "interactions": "CYP3A4 substrates.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "prochlorperazine",
        "name": "Prochlorperazine",
        "pharmacologicClass": "dopamine-antagonists",
        "therapeuticClass": "antiemetics",
        "system": "pain-management",
        "mechanism": "Block dopamine D2 receptors in chemoreceptor trigger zone.",
        "features": "Phenothiazine antiemetic.",
        "clinicalChoice": "Severe nausea, migraine-associated nausea.",
        "indications": [
            "Severe Nausea",
            "Migraine"
        ],
        "contraindications": [
            "Parkinson Disease",
            "Bone Marrow Depression"
        ],
        "sideEffects": [
            "Extrapyramidal effects",
            "Tardive dyskinesia",
            "Hyperprolactinemia"
        ],
        "interactions": "CNS depressants.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "promethazine",
        "name": "Promethazine",
        "pharmacologicClass": "dopamine-antagonists",
        "therapeuticClass": "antiemetics",
        "system": "pain-management",
        "mechanism": "Block dopamine D2 receptors in chemoreceptor trigger zone.",
        "features": "Antihistamine with antiemetic properties.",
        "clinicalChoice": "Motion sickness, pregnancy-related nausea.",
        "indications": [
            "Motion Sickness",
            "Pregnancy-Related Nausea"
        ],
        "contraindications": [
            "Children <2 years"
        ],
        "sideEffects": [
            "Extrapyramidal effects",
            "Tardive dyskinesia",
            "Hyperprolactinemia"
        ],
        "interactions": "CNS depressants.",
        "interactionDetails": "",
        "pageType": "drug"
    }
];

export default drugs;

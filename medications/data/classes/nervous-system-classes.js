// Nervous System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "ssris-selective-serotonin-reuptake-inhibitors",
        "name": "SSRIs (Selective Serotonin Reuptake Inhibitors)",
        "therapeuticClass": "antidepressants",
        "system": "nervous-system",
        "mechanism": "Selectively inhibit serotonin reuptake, increasing synaptic serotonin.",
        "sideEffects": [
            "Sexual dysfunction",
            "Nausea",
            "Insomnia",
            "Serotonin syndrome"
        ],
        "interactions": "MAOIs (serotonin syndrome), warfarin (increased bleeding).",
        "interactionDetails": "",
        "drugIds": [
            "fluoxetine",
            "sertraline",
            "paroxetine",
            "citalopram",
            "escitalopram"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "snris-serotonin-norepinephrine-reuptake-inhibitors",
        "name": "SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)",
        "therapeuticClass": "antidepressants",
        "system": "nervous-system",
        "mechanism": "Inhibit both serotonin and norepinephrine reuptake.",
        "sideEffects": [
            "Hypertension",
            "Sexual dysfunction",
            "Discontinuation syndrome"
        ],
        "interactions": "MAOIs (serotonin syndrome).",
        "interactionDetails": "",
        "drugIds": [
            "venlafaxine",
            "duloxetine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "atypical-antidepressants",
        "name": "Atypical Antidepressants",
        "therapeuticClass": "antidepressants",
        "system": "nervous-system",
        "mechanism": "Various mechanisms outside traditional classes.",
        "sideEffects": [
            "Varies by drug"
        ],
        "interactions": "Drug-specific.",
        "interactionDetails": "",
        "drugIds": [
            "bupropion",
            "mirtazapine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antidepressants",
        "name": "Antidepressants",
        "system": "nervous-system",
        "pharmacologicClassIds": [
            "ssris-selective-serotonin-reuptake-inhibitors",
            "snris-serotonin-norepinephrine-reuptake-inhibitors",
            "atypical-antidepressants"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "benzodiazepines",
        "name": "Benzodiazepines",
        "therapeuticClass": "anxiolytics-and-sedatives",
        "system": "nervous-system",
        "mechanism": "Potentiate GABA-A receptors, enhancing chloride influx.",
        "sideEffects": [
            "Sedation",
            "Dependence",
            "Respiratory depression",
            "Amnesia"
        ],
        "interactions": "Alcohol (increased CNS depression).",
        "interactionDetails": "",
        "drugIds": [
            "lorazepam",
            "diazepam",
            "alprazolam",
            "midazolam"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "non-benzodiazepine-hypnotics",
        "name": "Non-Benzodiazepine Hypnotics",
        "therapeuticClass": "anxiolytics-and-sedatives",
        "system": "nervous-system",
        "mechanism": "Selective GABA-A receptor modulation.",
        "sideEffects": [
            "Complex sleep behaviors",
            "Dependence"
        ],
        "interactions": "CYP3A4 inhibitors increase levels.",
        "interactionDetails": "",
        "drugIds": [
            "zolpidem",
            "eszopiclone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anxiolytics-and-sedatives",
        "name": "Anxiolytics and Sedatives",
        "system": "nervous-system",
        "pharmacologicClassIds": [
            "benzodiazepines",
            "non-benzodiazepine-hypnotics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "typical-antipsychotics",
        "name": "Typical Antipsychotics",
        "therapeuticClass": "antipsychotics",
        "system": "nervous-system",
        "mechanism": "Primarily D2 receptor antagonism.",
        "sideEffects": [
            "Extrapyramidal symptoms",
            "Tardive dyskinesia",
            "Neuroleptic malignant syndrome"
        ],
        "interactions": "CNS depressants (additive effects).",
        "interactionDetails": "",
        "drugIds": [
            "haloperidol",
            "chlorpromazine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "atypical-antipsychotics",
        "name": "Atypical Antipsychotics",
        "therapeuticClass": "antipsychotics",
        "system": "nervous-system",
        "mechanism": "D2 and 5-HT2A antagonism with lower EPS risk.",
        "sideEffects": [
            "Weight gain",
            "Metabolic syndrome",
            "QT prolongation"
        ],
        "interactions": "CYP450 interactions vary by drug.",
        "interactionDetails": "",
        "drugIds": [
            "risperidone",
            "olanzapine",
            "quetiapine",
            "aripiprazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antipsychotics",
        "name": "Antipsychotics",
        "system": "nervous-system",
        "pharmacologicClassIds": [
            "typical-antipsychotics",
            "atypical-antipsychotics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "intravenous-anesthetics",
        "name": "Intravenous Anesthetics",
        "therapeuticClass": "anesthetics",
        "system": "nervous-system",
        "mechanism": "Various mechanisms including GABA potentiation and NMDA antagonism.",
        "sideEffects": [
            "Respiratory depression",
            "Hypotension",
            "Injection site pain"
        ],
        "interactions": "CNS depressants (additive effects).",
        "interactionDetails": "",
        "drugIds": [
            "propofol",
            "ketamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anesthetics",
        "name": "Anesthetics",
        "system": "nervous-system",
        "pharmacologicClassIds": [
            "intravenous-anesthetics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "sodium-channel-blockers",
        "name": "Sodium Channel Blockers",
        "therapeuticClass": "antiepileptics",
        "system": "nervous-system",
        "mechanism": "Block voltage-gated sodium channels, preventing neuronal firing.",
        "sideEffects": [
            "Diplopia",
            "Ataxia",
            "Rash"
        ],
        "interactions": "Many are enzyme inducers.",
        "interactionDetails": "",
        "drugIds": [
            "phenytoin",
            "carbamazepine",
            "lamotrigine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antiepileptics",
        "name": "Antiepileptics",
        "system": "nervous-system",
        "pharmacologicClassIds": [
            "sodium-channel-blockers"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

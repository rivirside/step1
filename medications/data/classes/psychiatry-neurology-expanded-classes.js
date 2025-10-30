// Psychiatry/Neurology (Expanded) - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "lithium",
        "name": "Lithium",
        "therapeuticClass": "mood-stabilizers",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibits inositol monophosphatase, affects neurotransmitter signaling.",
        "sideEffects": [
            "Tremor",
            "Polyuria",
            "Thyroid dysfunction",
            "Nephrotoxicity"
        ],
        "interactions": "Thiazides, ACE inhibitors, NSAIDs increase lithium levels.",
        "interactionDetails": "THIAZIDES: MECHANISM - Thiazides cause volume depletion, increasing proximal tubule lithium reabsorption. CONSEQUENCE - Lithium toxicity with tremor, confusion, seizures. NSAIDS: MECHANISM - Reduce renal prostaglandins needed for lithium excretion. CONSEQUENCE - Increased lithium levels and toxicity.",
        "drugIds": [
            "lithium-carbonate"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anticonvulsants-as-mood-stabilizers",
        "name": "Anticonvulsants as Mood Stabilizers",
        "therapeuticClass": "mood-stabilizers",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Various mechanisms: sodium channel blockade, GABA enhancement.",
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Teratogenicity",
            "Blood dyscrasias"
        ],
        "interactions": "CYP450 inducers and inhibitors.",
        "interactionDetails": "",
        "drugIds": [
            "valproic-acid",
            "lamotrigine",
            "carbamazepine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "mood-stabilizers",
        "name": "Mood Stabilizers",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "lithium",
            "anticonvulsants-as-mood-stabilizers"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "dopamine-precursors",
        "name": "Dopamine Precursors",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Levodopa crosses blood-brain barrier, converted to dopamine.",
        "sideEffects": [
            "Dyskinesias",
            "On-off phenomena",
            "Nausea",
            "Orthostatic hypotension"
        ],
        "interactions": "MAOIs, high-protein meals reduce absorption.",
        "interactionDetails": "MAOIS: MECHANISM - MAOIs prevent dopamine breakdown, while levodopa increases dopamine production. CONSEQUENCE - Risk of hypertensive crisis from excessive dopamine. Use MAO-B selective inhibitors only.",
        "drugIds": [
            "levodopa-carbidopa"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "dopamine-agonists",
        "name": "Dopamine Agonists",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Direct stimulation of dopamine receptors.",
        "sideEffects": [
            "Impulse control disorders",
            "Sleep attacks",
            "Nausea"
        ],
        "interactions": "Antipsychotics antagonize effects.",
        "interactionDetails": "",
        "drugIds": [
            "pramipexole",
            "ropinirole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "mao-b-inhibitors",
        "name": "MAO-B Inhibitors",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibit MAO-B enzyme, increase dopamine availability.",
        "sideEffects": [
            "Insomnia",
            "Nausea",
            "Dizziness"
        ],
        "interactions": "Meperidine, tramadol (serotonin syndrome).",
        "interactionDetails": "",
        "drugIds": [
            "selegiline",
            "rasagiline"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "parkinson-disease-medications",
        "name": "Parkinson Disease Medications",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "dopamine-precursors",
            "dopamine-agonists",
            "mao-b-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "sodium-channel-blockers",
        "name": "Sodium Channel Blockers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block voltage-gated sodium channels, prevent neuronal firing.",
        "sideEffects": [
            "Diplopia",
            "Ataxia",
            "Cognitive impairment",
            "Rash"
        ],
        "interactions": "CYP450 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "drugIds": [
            "phenytoin",
            "carbamazepine",
            "lamotrigine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "gaba-enhancers",
        "name": "GABA Enhancers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Enhance GABA-mediated inhibition through various mechanisms.",
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Cognitive slowing"
        ],
        "interactions": "CNS depressants (additive sedation).",
        "interactionDetails": "",
        "drugIds": [
            "valproic-acid",
            "phenobarbital",
            "gabapentin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "other-antiepileptics",
        "name": "Other Antiepileptics",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Various mechanisms including SV2A binding and multi-modal actions.",
        "sideEffects": [
            "Variable by agent"
        ],
        "interactions": "Variable by agent.",
        "interactionDetails": "",
        "drugIds": [
            "levetiracetam",
            "topiramate"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "comprehensive-antiepileptics",
        "name": "Comprehensive Antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "sodium-channel-blockers",
            "gaba-enhancers",
            "other-antiepileptics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "selective-serotonin-reuptake-inhibitors-ssris",
        "name": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
        "therapeuticClass": "antidepressants",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Selectively inhibit serotonin reuptake, increasing synaptic serotonin.",
        "sideEffects": [
            "Sexual dysfunction",
            "GI upset",
            "Insomnia",
            "Serotonin syndrome"
        ],
        "interactions": "MAOIs (serotonin syndrome), CYP interactions vary by agent.",
        "interactionDetails": "",
        "drugIds": [
            "fluoxetine",
            "sertraline",
            "escitalopram",
            "paroxetine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "serotonin-norepinephrine-reuptake-inhibitors-snris",
        "name": "Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)",
        "therapeuticClass": "antidepressants",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibit both serotonin and norepinephrine reuptake.",
        "sideEffects": [
            "Hypertension",
            "Sexual dysfunction",
            "Nausea",
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
        "id": "tricyclic-antidepressants-tcas",
        "name": "Tricyclic Antidepressants (TCAs)",
        "therapeuticClass": "antidepressants",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block reuptake of serotonin and norepinephrine; also block histamine, muscarinic, and alpha receptors.",
        "sideEffects": [
            "Anticholinergic effects",
            "Sedation",
            "Orthostatic hypotension",
            "QT prolongation",
            "Seizures"
        ],
        "interactions": "MAOIs, QT-prolonging drugs.",
        "interactionDetails": "",
        "drugIds": [
            "amitriptyline",
            "nortriptyline"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "atypical-antidepressants",
        "name": "Atypical Antidepressants",
        "therapeuticClass": "antidepressants",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Various mechanisms including dopamine/NE reuptake inhibition and alpha-2 antagonism.",
        "sideEffects": [
            "Variable by agent"
        ],
        "interactions": "Variable by agent.",
        "interactionDetails": "",
        "drugIds": [
            "bupropion",
            "mirtazapine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "monoamine-oxidase-inhibitors-maois",
        "name": "Monoamine Oxidase Inhibitors (MAOIs)",
        "therapeuticClass": "antidepressants",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Irreversibly inhibit MAO-A and MAO-B, increasing all monoamines.",
        "sideEffects": [
            "Hypertensive crisis (tyramine)",
            "Orthostatic hypotension",
            "Serotonin syndrome"
        ],
        "interactions": "Serotonergic drugs, sympathomimetics, tyramine.",
        "interactionDetails": "",
        "drugIds": [
            "phenelzine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antidepressants",
        "name": "Antidepressants",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "selective-serotonin-reuptake-inhibitors-ssris",
            "serotonin-norepinephrine-reuptake-inhibitors-snris",
            "tricyclic-antidepressants-tcas",
            "atypical-antidepressants",
            "monoamine-oxidase-inhibitors-maois"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "typical-antipsychotics",
        "name": "Typical Antipsychotics",
        "therapeuticClass": "antipsychotics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block D2 dopamine receptors in mesolimbic pathway.",
        "sideEffects": [
            "Extrapyramidal symptoms",
            "Tardive dyskinesia",
            "Neuroleptic malignant syndrome",
            "QT prolongation"
        ],
        "interactions": "QT-prolonging drugs, anticholinergics.",
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
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block D2 and 5-HT2A receptors; serotonin antagonism reduces EPS risk.",
        "sideEffects": [
            "Weight gain",
            "Metabolic syndrome",
            "Hyperprolactinemia",
            "QT prolongation"
        ],
        "interactions": "CYP450 substrates vary by agent.",
        "interactionDetails": "",
        "drugIds": [
            "risperidone",
            "olanzapine",
            "quetiapine",
            "aripiprazole",
            "clozapine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antipsychotics",
        "name": "Antipsychotics",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "typical-antipsychotics",
            "atypical-antipsychotics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "benzodiazepines",
        "name": "Benzodiazepines",
        "therapeuticClass": "anxiolytics-sedatives",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Enhance GABA-A receptor function, increase chloride influx.",
        "sideEffects": [
            "Sedation",
            "Dependence",
            "Respiratory depression",
            "Cognitive impairment"
        ],
        "interactions": "CNS depressants (additive sedation), alcohol.",
        "interactionDetails": "",
        "drugIds": [
            "lorazepam",
            "diazepam",
            "alprazolam",
            "clonazepam"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anxiolytics-sedatives",
        "name": "Anxiolytics/Sedatives",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "benzodiazepines"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "acetylcholinesterase-inhibitors",
        "name": "Acetylcholinesterase Inhibitors",
        "therapeuticClass": "dementia-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibit acetylcholinesterase to increase synaptic acetylcholine.",
        "sideEffects": [
            "Nausea",
            "Diarrhea",
            "Bradycardia",
            "Insomnia"
        ],
        "interactions": "Anticholinergics antagonize effects.",
        "interactionDetails": "",
        "drugIds": [
            "donepezil",
            "rivastigmine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "nmda-antagonists",
        "name": "NMDA Antagonists",
        "therapeuticClass": "dementia-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "NMDA receptor antagonist, reduces excitotoxicity.",
        "sideEffects": [
            "Dizziness",
            "Confusion",
            "Headache"
        ],
        "interactions": "Minimal drug interactions.",
        "interactionDetails": "",
        "drugIds": [
            "memantine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "dementia-medications",
        "name": "Dementia Medications",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "acetylcholinesterase-inhibitors",
            "nmda-antagonists"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "stimulants",
        "name": "Stimulants",
        "therapeuticClass": "adhd-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block dopamine and norepinephrine reuptake or increase release in prefrontal cortex.",
        "sideEffects": [
            "Insomnia",
            "Decreased appetite",
            "Growth suppression",
            "Tachycardia",
            "Hypertension"
        ],
        "interactions": "MAOIs (hypertensive crisis).",
        "interactionDetails": "",
        "drugIds": [
            "methylphenidate",
            "amphetamine-dextroamphetamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "non-stimulant-adhd-medications",
        "name": "Non-Stimulant ADHD Medications",
        "therapeuticClass": "adhd-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Selective norepinephrine reuptake inhibitor.",
        "sideEffects": [
            "Decreased appetite",
            "Nausea",
            "Insomnia",
            "Suicidal ideation (black box warning)"
        ],
        "interactions": "CYP2D6 substrates.",
        "interactionDetails": "",
        "drugIds": [
            "atomoxetine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "adhd-medications",
        "name": "ADHD Medications",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "stimulants",
            "non-stimulant-adhd-medications"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

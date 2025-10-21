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
        "id": "comprehensive-antiepileptics",
        "name": "Comprehensive Antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "pharmacologicClassIds": [
            "sodium-channel-blockers",
            "gaba-enhancers"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

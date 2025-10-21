// Psychiatry/Neurology (Expanded) - Drugs
// Auto-generated from modularize-data.js

const drugs = [
    {
        "id": "lithium-carbonate",
        "name": "Lithium Carbonate",
        "pharmacologicClass": "lithium",
        "therapeuticClass": "mood-stabilizers",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibits inositol monophosphatase, affects neurotransmitter signaling.",
        "features": "Narrow therapeutic index, requires monitoring.",
        "clinicalChoice": "Bipolar disorder, acute mania.",
        "indications": [
            "Bipolar Disorder",
            "Acute Mania"
        ],
        "contraindications": [
            "Severe Renal Disease",
            "Severe Heart Disease"
        ],
        "sideEffects": [
            "Tremor",
            "Polyuria",
            "Thyroid dysfunction",
            "Nephrotoxicity"
        ],
        "interactions": "Thiazides, ACE inhibitors, NSAIDs increase lithium levels.",
        "interactionDetails": "THIAZIDES: MECHANISM - Thiazides cause volume depletion, increasing proximal tubule lithium reabsorption. CONSEQUENCE - Lithium toxicity with tremor, confusion, seizures. NSAIDS: MECHANISM - Reduce renal prostaglandins needed for lithium excretion. CONSEQUENCE - Increased lithium levels and toxicity.",
        "pageType": "drug"
    },
    {
        "id": "valproic-acid",
        "name": "Valproic Acid",
        "pharmacologicClass": "anticonvulsants-as-mood-stabilizers",
        "therapeuticClass": "mood-stabilizers",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Various mechanisms: sodium channel blockade, GABA enhancement.",
        "features": "GABA enhancer, teratogenic.",
        "clinicalChoice": "Bipolar disorder, epilepsy.",
        "indications": [
            "Bipolar Disorder",
            "Epilepsy",
            "Migraine Prophylaxis"
        ],
        "contraindications": [
            "Pregnancy",
            "Hepatic Disease"
        ],
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Teratogenicity",
            "Blood dyscrasias"
        ],
        "interactions": "CYP450 inducers and inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "lamotrigine",
        "name": "Lamotrigine",
        "pharmacologicClass": "anticonvulsants-as-mood-stabilizers",
        "therapeuticClass": "mood-stabilizers",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Various mechanisms: sodium channel blockade, GABA enhancement.",
        "features": "Sodium channel blocker, good for depression.",
        "clinicalChoice": "Bipolar depression, epilepsy.",
        "indications": [
            "Bipolar Disorder",
            "Epilepsy"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Teratogenicity",
            "Blood dyscrasias"
        ],
        "interactions": "CYP450 inducers and inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "carbamazepine",
        "name": "Carbamazepine",
        "pharmacologicClass": "anticonvulsants-as-mood-stabilizers",
        "therapeuticClass": "mood-stabilizers",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Various mechanisms: sodium channel blockade, GABA enhancement.",
        "features": "Sodium channel blocker, CYP450 inducer.",
        "clinicalChoice": "Bipolar disorder, trigeminal neuralgia.",
        "indications": [
            "Bipolar Disorder",
            "Trigeminal Neuralgia",
            "Epilepsy"
        ],
        "contraindications": [
            "Bone Marrow Depression",
            "MAOIs"
        ],
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Teratogenicity",
            "Blood dyscrasias"
        ],
        "interactions": "CYP450 inducers and inhibitors.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "levodopa-carbidopa",
        "name": "Levodopa/Carbidopa",
        "pharmacologicClass": "dopamine-precursors",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Levodopa crosses blood-brain barrier, converted to dopamine.",
        "features": "Carbidopa prevents peripheral conversion.",
        "clinicalChoice": "First-line Parkinson treatment.",
        "indications": [
            "Parkinson Disease"
        ],
        "contraindications": [
            "MAOIs",
            "Angle-Closure Glaucoma"
        ],
        "sideEffects": [
            "Dyskinesias",
            "On-off phenomena",
            "Nausea",
            "Orthostatic hypotension"
        ],
        "interactions": "MAOIs, high-protein meals reduce absorption.",
        "interactionDetails": "MAOIS: MECHANISM - MAOIs prevent dopamine breakdown, while levodopa increases dopamine production. CONSEQUENCE - Risk of hypertensive crisis from excessive dopamine. Use MAO-B selective inhibitors only.",
        "pageType": "drug"
    },
    {
        "id": "pramipexole",
        "name": "Pramipexole",
        "pharmacologicClass": "dopamine-agonists",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Direct stimulation of dopamine receptors.",
        "features": "Non-ergot agonist, good for early PD.",
        "clinicalChoice": "Early Parkinson disease, restless leg syndrome.",
        "indications": [
            "Parkinson Disease",
            "Restless Leg Syndrome"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Impulse control disorders",
            "Sleep attacks",
            "Nausea"
        ],
        "interactions": "Antipsychotics antagonize effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "ropinirole",
        "name": "Ropinirole",
        "pharmacologicClass": "dopamine-agonists",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Direct stimulation of dopamine receptors.",
        "features": "Non-ergot agonist, impulse control risk.",
        "clinicalChoice": "Early PD, restless leg syndrome.",
        "indications": [
            "Parkinson Disease",
            "Restless Leg Syndrome"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Impulse control disorders",
            "Sleep attacks",
            "Nausea"
        ],
        "interactions": "Antipsychotics antagonize effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "selegiline",
        "name": "Selegiline",
        "pharmacologicClass": "mao-b-inhibitors",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibit MAO-B enzyme, increase dopamine availability.",
        "features": "Irreversible MAO-B inhibitor.",
        "clinicalChoice": "Early PD, adjunct to levodopa.",
        "indications": [
            "Parkinson Disease"
        ],
        "contraindications": [
            "Meperidine Use"
        ],
        "sideEffects": [
            "Insomnia",
            "Nausea",
            "Dizziness"
        ],
        "interactions": "Meperidine, tramadol (serotonin syndrome).",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "rasagiline",
        "name": "Rasagiline",
        "pharmacologicClass": "mao-b-inhibitors",
        "therapeuticClass": "parkinson-disease-medications",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Inhibit MAO-B enzyme, increase dopamine availability.",
        "features": "Irreversible MAO-B inhibitor, neuroprotective.",
        "clinicalChoice": "Early or advanced PD.",
        "indications": [
            "Parkinson Disease"
        ],
        "contraindications": [
            "Severe Hepatic Impairment"
        ],
        "sideEffects": [
            "Insomnia",
            "Nausea",
            "Dizziness"
        ],
        "interactions": "Meperidine, tramadol (serotonin syndrome).",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "phenytoin",
        "name": "Phenytoin",
        "pharmacologicClass": "sodium-channel-blockers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block voltage-gated sodium channels, prevent neuronal firing.",
        "features": "Narrow therapeutic index, zero-order kinetics.",
        "clinicalChoice": "Tonic-clonic seizures, status epilepticus.",
        "indications": [
            "Tonic-Clonic Seizures",
            "Status Epilepticus"
        ],
        "contraindications": [
            "Heart Block",
            "Porphyria"
        ],
        "sideEffects": [
            "Diplopia",
            "Ataxia",
            "Cognitive impairment",
            "Rash"
        ],
        "interactions": "CYP450 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "carbamazepine",
        "name": "Carbamazepine",
        "pharmacologicClass": "sodium-channel-blockers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block voltage-gated sodium channels, prevent neuronal firing.",
        "features": "Autoinduction, drug interactions.",
        "clinicalChoice": "Partial seizures, trigeminal neuralgia.",
        "indications": [
            "Partial Seizures",
            "Trigeminal Neuralgia"
        ],
        "contraindications": [
            "Bone Marrow Depression"
        ],
        "sideEffects": [
            "Diplopia",
            "Ataxia",
            "Cognitive impairment",
            "Rash"
        ],
        "interactions": "CYP450 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "lamotrigine",
        "name": "Lamotrigine",
        "pharmacologicClass": "sodium-channel-blockers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Block voltage-gated sodium channels, prevent neuronal firing.",
        "features": "Broad spectrum, good tolerability.",
        "clinicalChoice": "Broad-spectrum epilepsy, bipolar disorder.",
        "indications": [
            "Epilepsy",
            "Bipolar Disorder"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Diplopia",
            "Ataxia",
            "Cognitive impairment",
            "Rash"
        ],
        "interactions": "CYP450 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "valproic-acid",
        "name": "Valproic Acid",
        "pharmacologicClass": "gaba-enhancers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Enhance GABA-mediated inhibition through various mechanisms.",
        "features": "Broad spectrum, multiple mechanisms.",
        "clinicalChoice": "Absence seizures, myoclonic epilepsy.",
        "indications": [
            "Absence Seizures",
            "Myoclonic Epilepsy"
        ],
        "contraindications": [
            "Hepatic Disease",
            "Pregnancy"
        ],
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Cognitive slowing"
        ],
        "interactions": "CNS depressants (additive sedation).",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "phenobarbital",
        "name": "Phenobarbital",
        "pharmacologicClass": "gaba-enhancers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Enhance GABA-mediated inhibition through various mechanisms.",
        "features": "GABA-A receptor enhancer, enzyme inducer.",
        "clinicalChoice": "Neonatal seizures, refractory epilepsy.",
        "indications": [
            "Neonatal Seizures",
            "Refractory Epilepsy"
        ],
        "contraindications": [
            "Porphyria",
            "Severe Respiratory Depression"
        ],
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Cognitive slowing"
        ],
        "interactions": "CNS depressants (additive sedation).",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "gabapentin",
        "name": "Gabapentin",
        "pharmacologicClass": "gaba-enhancers",
        "therapeuticClass": "comprehensive-antiepileptics",
        "system": "psychiatry-neurology-expanded",
        "mechanism": "Enhance GABA-mediated inhibition through various mechanisms.",
        "features": "Calcium channel modulator, renally excreted.",
        "clinicalChoice": "Partial seizures, neuropathic pain.",
        "indications": [
            "Partial Seizures",
            "Neuropathic Pain"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Sedation",
            "Weight gain",
            "Cognitive slowing"
        ],
        "interactions": "CNS depressants (additive sedation).",
        "interactionDetails": "",
        "pageType": "drug"
    }
];

export default drugs;

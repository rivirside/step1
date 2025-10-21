// Autonomic Nervous System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "direct-muscarinic-agonists",
        "name": "Direct Muscarinic Agonists",
        "therapeuticClass": "cholinergic-agonists-parasympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Direct stimulation of muscarinic receptors, mimicking acetylcholine effects.",
        "sideEffects": [
            "Cholinergic crisis",
            "Bradycardia",
            "Hypotension",
            "Bronchoconstriction"
        ],
        "interactions": "Anticholinergics antagonize effects.",
        "interactionDetails": "",
        "drugIds": [
            "bethanechol",
            "pilocarpine",
            "carbachol",
            "methacholine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "acetylcholinesterase-inhibitors",
        "name": "Acetylcholinesterase Inhibitors",
        "therapeuticClass": "cholinergic-agonists-parasympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Inhibit breakdown of acetylcholine, increasing cholinergic transmission.",
        "sideEffects": [
            "Cholinergic crisis",
            "Muscle weakness",
            "Bradycardia"
        ],
        "interactions": "Succinylcholine effects prolonged.",
        "interactionDetails": "",
        "drugIds": [
            "neostigmine",
            "physostigmine",
            "pyridostigmine",
            "edrophonium",
            "donepezil",
            "rivastigmine",
            "galantamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "cholinergic-agonists-parasympathomimetics",
        "name": "Cholinergic Agonists (Parasympathomimetics)",
        "system": "autonomic-nervous-system",
        "pharmacologicClassIds": [
            "direct-muscarinic-agonists",
            "acetylcholinesterase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "muscarinic-antagonists",
        "name": "Muscarinic Antagonists",
        "therapeuticClass": "cholinergic-antagonists-parasympatholytics",
        "system": "autonomic-nervous-system",
        "mechanism": "Block muscarinic receptors, preventing acetylcholine effects.",
        "sideEffects": [
            "Dry mouth",
            "Constipation",
            "Urinary retention",
            "Confusion"
        ],
        "interactions": "Other anticholinergics (additive effects).",
        "interactionDetails": "",
        "drugIds": [
            "atropine",
            "scopolamine",
            "ipratropium",
            "tiotropium",
            "benztropine",
            "trihexyphenidyl",
            "glycopyrrolate",
            "oxybutynin",
            "tolterodine",
            "homatropine-tropicamide",
            "dicyclomine",
            "hyoscyamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "nicotinic-antagonists",
        "name": "Nicotinic Antagonists",
        "therapeuticClass": "cholinergic-antagonists-parasympatholytics",
        "system": "autonomic-nervous-system",
        "mechanism": "Block nicotinic receptors at neuromuscular junction or ganglia.",
        "sideEffects": [
            "Muscle weakness",
            "Paralysis",
            "Ganglionic blockade"
        ],
        "interactions": "Aminoglycosides potentiate blockade.",
        "interactionDetails": "",
        "drugIds": [
            "succinylcholine",
            "rocuronium"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "cholinergic-antagonists-parasympatholytics",
        "name": "Cholinergic Antagonists (Parasympatholytics)",
        "system": "autonomic-nervous-system",
        "pharmacologicClassIds": [
            "muscarinic-antagonists",
            "nicotinic-antagonists"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "mixed-α-β-agonists",
        "name": "Mixed α/β Agonists",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Stimulate both alpha and beta adrenergic receptors.",
        "sideEffects": [
            "Hypertension",
            "Tachycardia",
            "Arrhythmias"
        ],
        "interactions": "MAOIs potentiate effects.",
        "interactionDetails": "",
        "drugIds": [
            "epinephrine",
            "norepinephrine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "dopamine-receptor-agonists",
        "name": "Dopamine Receptor Agonists",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Dose-dependent stimulation of dopamine, β1, and α1 receptors.",
        "sideEffects": [
            "Arrhythmias",
            "Tachycardia",
            "Extravasation injury"
        ],
        "interactions": "MAOIs and β-blockers modify response.",
        "interactionDetails": "",
        "drugIds": [
            "dopamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "β1-selective-agonists",
        "name": "β1-Selective Agonists",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Preferential stimulation of β1 receptors increases inotropy and chronotropy.",
        "sideEffects": [
            "Tachyarrhythmias",
            "Angina",
            "Hypertension"
        ],
        "interactions": "Beta-blockers blunt effects.",
        "interactionDetails": "",
        "drugIds": [
            "dobutamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "non-selective-β-agonists",
        "name": "Non-selective β Agonists",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Stimulate both β1 and β2 receptors strongly.",
        "sideEffects": [
            "Tachycardia",
            "Arrhythmias",
            "Hypotension from β2 vasodilation"
        ],
        "interactions": "Beta-blockers antagonize effects.",
        "interactionDetails": "",
        "drugIds": [
            "isoproterenol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "selective-β2-agonists",
        "name": "Selective β2 Agonists",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Selective stimulation of β2 receptors causing bronchodilation.",
        "sideEffects": [
            "Tachycardia",
            "Tremor",
            "Hypokalemia"
        ],
        "interactions": "Beta-blockers antagonize effects.",
        "interactionDetails": "",
        "drugIds": [
            "albuterol",
            "salmeterol",
            "formoterol",
            "terbutaline"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "α1-selective-agonists",
        "name": "α1-Selective Agonists",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Stimulate α1 receptors causing vasoconstriction and increased tone.",
        "sideEffects": [
            "Hypertension",
            "Reflex bradycardia",
            "Piloerection"
        ],
        "interactions": "MAOIs enhance effects, α-blockers antagonize.",
        "interactionDetails": "",
        "drugIds": [
            "phenylephrine",
            "midodrine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "indirect-sympathomimetics",
        "name": "Indirect Sympathomimetics",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Increase synaptic catecholamines via release or reuptake inhibition.",
        "sideEffects": [
            "Tachycardia",
            "Hypertension",
            "CNS stimulation"
        ],
        "interactions": "MAOIs and sympathomimetics potentiate hypertensive crises.",
        "interactionDetails": "",
        "drugIds": [
            "amphetamine",
            "ephedrine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "reuptake-inhibitors",
        "name": "Reuptake Inhibitors",
        "therapeuticClass": "adrenergic-agonists-sympathomimetics",
        "system": "autonomic-nervous-system",
        "mechanism": "Block catecholamine reuptake pumps at synaptic clefts.",
        "sideEffects": [
            "Arrhythmias",
            "Hypertension",
            "Seizures"
        ],
        "interactions": "Sympathomimetics enhance toxicity.",
        "interactionDetails": "",
        "drugIds": [
            "cocaine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "adrenergic-agonists-sympathomimetics",
        "name": "Adrenergic Agonists (Sympathomimetics)",
        "system": "autonomic-nervous-system",
        "pharmacologicClassIds": [
            "mixed-α-β-agonists",
            "dopamine-receptor-agonists",
            "β1-selective-agonists",
            "non-selective-β-agonists",
            "selective-β2-agonists",
            "α1-selective-agonists",
            "indirect-sympathomimetics",
            "reuptake-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "beta-blockers",
        "name": "Beta Blockers",
        "therapeuticClass": "adrenergic-antagonists-sympatholytics",
        "system": "autonomic-nervous-system",
        "mechanism": "Block beta-adrenergic receptors, reducing heart rate and contractility.",
        "sideEffects": [
            "Bradycardia",
            "Fatigue",
            "Bronchoconstriction"
        ],
        "interactions": "Calcium channel blockers, amiodarone.",
        "interactionDetails": "MECHANISM: Both beta blockers and calcium channel blockers (especially verapamil and diltiazem) independently suppress cardiac conduction and contractility. Beta blockers block sympathetic stimulation of the heart, while non-dihydropyridine CCBs block L-type calcium channels crucial for cardiac conduction and contraction. CLINICAL CONSEQUENCE: When combined, these effects are additive, creating dangerous negative inotropic (reduced contractility) and negative chronotropic (reduced heart rate) effects. This can lead to severe bradycardia, complete heart block, cardiogenic shock, and hemodynamic collapse. AMIODARONE: Has additional risks due to its multiple mechanisms - blocks sodium, potassium, and calcium channels while also having anti-adrenergic effects, creating a \"quadruple block\" when combined with beta blockers.",
        "drugIds": [
            "propranolol",
            "metoprolol",
            "atenolol",
            "carvedilol",
            "esmolol",
            "timolol",
            "nadolol",
            "nebivolol",
            "labetalol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "alpha-blockers",
        "name": "Alpha Blockers",
        "therapeuticClass": "adrenergic-antagonists-sympatholytics",
        "system": "autonomic-nervous-system",
        "mechanism": "Block alpha-adrenergic receptors causing vasodilation.",
        "sideEffects": [
            "Orthostatic hypotension",
            "First-dose syncope"
        ],
        "interactions": "Other antihypertensives (additive effects).",
        "interactionDetails": "",
        "drugIds": [
            "prazosin",
            "doxazosin",
            "terazosin",
            "tamsulosin",
            "phenoxybenzamine",
            "phentolamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "central-α2-agonists",
        "name": "Central α2 Agonists",
        "therapeuticClass": "adrenergic-antagonists-sympatholytics",
        "system": "autonomic-nervous-system",
        "mechanism": "Stimulate central α2 receptors to reduce sympathetic outflow.",
        "sideEffects": [
            "Sedation",
            "Rebound hypertension",
            "Dry mouth"
        ],
        "interactions": "CNS depressants enhance sedation.",
        "interactionDetails": "",
        "drugIds": [
            "clonidine",
            "methyldopa",
            "tizanidine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "adrenergic-antagonists-sympatholytics",
        "name": "Adrenergic Antagonists (Sympatholytics)",
        "system": "autonomic-nervous-system",
        "pharmacologicClassIds": [
            "beta-blockers",
            "alpha-blockers",
            "central-α2-agonists"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

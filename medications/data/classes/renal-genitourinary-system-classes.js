// Renal/Genitourinary System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "loop-diuretics",
        "name": "Loop Diuretics",
        "therapeuticClass": "diuretics",
        "system": "renal-genitourinary-system",
        "mechanism": "Inhibit NKCC2 transporter in thick ascending limb of loop of Henle.",
        "sideEffects": [
            "Hypokalemia",
            "Hyponatremia",
            "Ototoxicity",
            "Hyperuricemia"
        ],
        "interactions": "Aminoglycosides (increased ototoxicity), lithium (increased levels).",
        "interactionDetails": "AMINOGLYCOSIDES: MECHANISM - Both loop diuretics and aminoglycosides have direct ototoxic effects on hair cells in the cochlea. Loop diuretics may increase aminoglycoside concentration in the inner ear. CONSEQUENCE - Synergistic ototoxicity leading to permanent hearing loss, especially high-frequency hearing. LITHIUM: MECHANISM - Loop diuretics cause volume depletion, leading to increased proximal tubule lithium reabsorption. CONSEQUENCE - Elevated lithium levels with risk of lithium toxicity including tremor, confusion, and nephrotoxicity.",
        "drugIds": [
            "furosemide",
            "bumetanide",
            "torsemide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "thiazide-diuretics",
        "name": "Thiazide Diuretics",
        "therapeuticClass": "diuretics",
        "system": "renal-genitourinary-system",
        "mechanism": "Inhibit NCC transporter in distal convoluted tubule.",
        "sideEffects": [
            "Hypokalemia",
            "Hyperuricemia",
            "Hyperglycemia",
            "Hyperlipidemia"
        ],
        "interactions": "Lithium (increased levels), NSAIDs (reduced efficacy).",
        "interactionDetails": "LITHIUM: MECHANISM - Thiazides cause mild volume depletion, increasing proximal tubule sodium and lithium reabsorption. CONSEQUENCE - Increased lithium levels with risk of toxicity. NSAIDS: MECHANISM - Thiazides work partly through prostaglandin-mediated vasodilation. NSAIDs inhibit prostaglandin synthesis. CONSEQUENCE - Reduced antihypertensive efficacy and potential for acute kidney injury.",
        "drugIds": [
            "hydrochlorothiazide-hctz",
            "chlorthalidone",
            "indapamide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "potassium-sparing-diuretics",
        "name": "Potassium-Sparing Diuretics",
        "therapeuticClass": "diuretics",
        "system": "renal-genitourinary-system",
        "mechanism": "Either block aldosterone receptors (spironolactone) or ENaC channels (amiloride).",
        "sideEffects": [
            "Hyperkalemia",
            "Gynecomastia (spironolactone)",
            "Menstrual irregularities"
        ],
        "interactions": "ACE inhibitors, ARBs (hyperkalemia risk).",
        "interactionDetails": "ACE INHIBITORS/ARBS: MECHANISM - ACE inhibitors and ARBs reduce aldosterone production, leading to potassium retention. Potassium-sparing diuretics independently block potassium excretion. CONSEQUENCE - Additive hyperkalemia with risk of fatal cardiac arrhythmias, especially in patients with kidney disease or diabetes.",
        "drugIds": [
            "spironolactone",
            "amiloride",
            "eplerenone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "carbonic-anhydrase-inhibitors",
        "name": "Carbonic Anhydrase Inhibitors",
        "therapeuticClass": "diuretics",
        "system": "renal-genitourinary-system",
        "mechanism": "Inhibit carbonic anhydrase in proximal tubule, reducing sodium reabsorption.",
        "sideEffects": [
            "Metabolic acidosis",
            "Hypokalemia",
            "Kidney stones"
        ],
        "interactions": "Salicylates (increased toxicity).",
        "interactionDetails": "SALICYLATES: MECHANISM - Both carbonic anhydrase inhibitors and salicylates can cause metabolic acidosis. Acetazolamide may also increase salicylate levels by altering renal elimination. CONSEQUENCE - Enhanced salicylate toxicity with confusion, tinnitus, and potentially fatal metabolic acidosis.",
        "drugIds": [
            "acetazolamide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "osmotic-diuretics",
        "name": "Osmotic Diuretics",
        "therapeuticClass": "diuretics",
        "system": "renal-genitourinary-system",
        "mechanism": "Increase tubular fluid osmolarity, drawing free water out of tissues and into filtrate.",
        "sideEffects": [
            "Pulmonary edema",
            "Dehydration",
            "Hypernatremia"
        ],
        "interactions": "Additive nephrotoxicity with other nephrotoxic agents.",
        "interactionDetails": "",
        "drugIds": [
            "mannitol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "diuretics",
        "name": "Diuretics",
        "system": "renal-genitourinary-system",
        "pharmacologicClassIds": [
            "loop-diuretics",
            "thiazide-diuretics",
            "potassium-sparing-diuretics",
            "carbonic-anhydrase-inhibitors",
            "osmotic-diuretics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "alpha-1-blockers",
        "name": "Alpha-1 Blockers",
        "therapeuticClass": "benign-prostatic-hyperplasia-bph",
        "system": "renal-genitourinary-system",
        "mechanism": "Block α1-adrenergic receptors in prostate smooth muscle, reducing urethral resistance.",
        "sideEffects": [
            "Orthostatic hypotension",
            "Dizziness",
            "Retrograde ejaculation"
        ],
        "interactions": "Antihypertensives (additive hypotension), PDE5 inhibitors.",
        "interactionDetails": "ANTIHYPERTENSIVES: MECHANISM - Alpha-1 blockers cause vasodilation and reduced peripheral resistance. Combined with other antihypertensives, this can cause excessive hypotension. CONSEQUENCE - Symptomatic hypotension, falls, and syncope, especially with first dose or dose increases.",
        "drugIds": [
            "tamsulosin",
            "doxazosin",
            "terazosin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "5α-reductase-inhibitors",
        "name": "5α-Reductase Inhibitors",
        "therapeuticClass": "benign-prostatic-hyperplasia-bph",
        "system": "renal-genitourinary-system",
        "mechanism": "Inhibit conversion of testosterone to dihydrotestosterone (DHT), reducing prostate size.",
        "sideEffects": [
            "Decreased libido",
            "Erectile dysfunction",
            "Gynecomastia"
        ],
        "interactions": "Minimal drug interactions.",
        "interactionDetails": "",
        "drugIds": [
            "finasteride",
            "dutasteride"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "benign-prostatic-hyperplasia-bph",
        "name": "Benign Prostatic Hyperplasia (BPH)",
        "system": "renal-genitourinary-system",
        "pharmacologicClassIds": [
            "alpha-1-blockers",
            "5α-reductase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "urinary-antiseptics",
        "name": "Urinary Antiseptics",
        "therapeuticClass": "urinary-tract-infections",
        "system": "renal-genitourinary-system",
        "mechanism": "Concentrated in urine to achieve bactericidal levels in urinary tract.",
        "sideEffects": [
            "GI upset",
            "Pulmonary toxicity (nitrofurantoin)",
            "Hemolysis in G6PD deficiency"
        ],
        "interactions": "Antacids (reduced absorption).",
        "interactionDetails": "",
        "drugIds": [
            "nitrofurantoin",
            "trimethoprim-sulfamethoxazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "urinary-tract-infections",
        "name": "Urinary Tract Infections",
        "system": "renal-genitourinary-system",
        "pharmacologicClassIds": [
            "urinary-antiseptics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "adh-agonists",
        "name": "ADH Agonists",
        "therapeuticClass": "adh-related-disorders",
        "system": "renal-genitourinary-system",
        "mechanism": "Activate V2 receptors in collecting duct, increasing water reabsorption.",
        "sideEffects": [
            "Hyponatremia",
            "Water intoxication",
            "Headache"
        ],
        "interactions": "NSAIDs (potentiate ADH effects).",
        "interactionDetails": "",
        "drugIds": [
            "desmopressin-ddavp"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "adh-antagonists",
        "name": "ADH Antagonists",
        "therapeuticClass": "adh-related-disorders",
        "system": "renal-genitourinary-system",
        "mechanism": "Block V2 receptors, promoting free water excretion.",
        "sideEffects": [
            "Hypernatremia",
            "Dehydration",
            "Thirst"
        ],
        "interactions": "CYP3A4 inhibitors (increased levels).",
        "interactionDetails": "",
        "drugIds": [
            "tolvaptan"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "adh-related-disorders",
        "name": "ADH-Related Disorders",
        "system": "renal-genitourinary-system",
        "pharmacologicClassIds": [
            "adh-agonists",
            "adh-antagonists"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

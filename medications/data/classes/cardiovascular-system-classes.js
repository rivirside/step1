// Cardiovascular System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "ace-inhibitors",
        "name": "ACE Inhibitors",
        "therapeuticClass": "antihypertensives",
        "system": "cardiovascular-system",
        "mechanism": "Inhibit Angiotensin Converting Enzyme, reducing Angiotensin II and causing vasodilation.",
        "sideEffects": [
            "Dry cough",
            "Angioedema",
            "Hyperkalemia"
        ],
        "interactions": "Potassium-sparing diuretics, NSAIDs.",
        "interactionDetails": "POTASSIUM-SPARING DIURETICS: MECHANISM - ACE inhibitors reduce aldosterone production (via decreased Angiotensin II), leading to potassium retention. Potassium-sparing diuretics independently block aldosterone receptors or epithelial sodium channels, also causing potassium retention. CONSEQUENCE - Additive hyperkalemia can cause dangerous cardiac arrhythmias, including fatal ventricular arrhythmias and asystole. NSAIDS: MECHANISM - ACE inhibitors work partly through increased prostaglandin E2 and prostacyclin (vasodilators). NSAIDs block cyclooxygenase, reducing these protective prostaglandins. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury, especially in patients with pre-existing renal disease, elderly patients, or volume-depleted states.",
        "drugIds": [
            "lisinopril",
            "captopril",
            "enalapril",
            "ramipril"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "angiotensin-receptor-blockers",
        "name": "Angiotensin Receptor Blockers",
        "therapeuticClass": "antihypertensives",
        "system": "cardiovascular-system",
        "mechanism": "Block AT1 receptors, preventing angiotensin II effects without affecting bradykinin.",
        "sideEffects": [
            "Hyperkalemia",
            "Hypotension",
            "Dizziness"
        ],
        "interactions": "Potassium-sparing diuretics, NSAIDs.",
        "interactionDetails": "",
        "drugIds": [
            "losartan",
            "valsartan",
            "irbesartan"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "direct-vasodilators",
        "name": "Direct Vasodilators",
        "therapeuticClass": "antihypertensives",
        "system": "cardiovascular-system",
        "mechanism": "Directly relax arteriolar smooth muscle to reduce afterload (± preload).",
        "sideEffects": [
            "Reflex tachycardia",
            "Fluid retention",
            "Headache",
            "Hypertrichosis (minoxidil)"
        ],
        "interactions": "Often require concomitant β-blocker/diuretic to blunt reflex responses.",
        "interactionDetails": "",
        "drugIds": [
            "hydralazine",
            "minoxidil"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "hypertensive-emergency-agents",
        "name": "Hypertensive Emergency Agents",
        "therapeuticClass": "antihypertensives",
        "system": "cardiovascular-system",
        "mechanism": "Rapidly lower blood pressure via potent arterial dilatation and renal vasodilation.",
        "sideEffects": [
            "Hypotension",
            "Cyanide toxicity (nitroprusside)",
            "Tachycardia",
            "Nausea"
        ],
        "interactions": "Additive hypotension with other vasodilators.",
        "interactionDetails": "",
        "drugIds": [
            "sodium-nitroprusside",
            "fenoldopam"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "calcium-channel-blockers",
        "name": "Calcium Channel Blockers",
        "therapeuticClass": "antihypertensives",
        "system": "cardiovascular-system",
        "mechanism": "Block L-type calcium channels, causing vasodilation or reduced cardiac contractility.",
        "sideEffects": [
            "Peripheral edema",
            "Constipation",
            "Bradycardia"
        ],
        "interactions": "Beta-blockers (increased risk of heart block).",
        "interactionDetails": "BETA-BLOCKERS: MECHANISM - Non-dihydropyridine CCBs (verapamil, diltiazem) have negative chronotropic and dromotropic effects on the AV node. Beta-blockers also slow AV node conduction and reduce heart rate. CONSEQUENCE - Combined use significantly increases risk of symptomatic bradycardia, AV block (first-, second-, or third-degree), and potential asystole, especially in elderly patients or those with pre-existing conduction abnormalities.",
        "drugIds": [
            "amlodipine",
            "nifedipine",
            "verapamil",
            "diltiazem"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "nitrates",
        "name": "Nitrates",
        "therapeuticClass": "antihypertensives",
        "system": "cardiovascular-system",
        "mechanism": "Release nitric oxide, causing venous and arterial vasodilation.",
        "sideEffects": [
            "Headache",
            "Hypotension",
            "Tolerance with continuous use"
        ],
        "interactions": "Sildenafil and other PDE5 inhibitors (severe hypotension).",
        "interactionDetails": "PDE5 INHIBITORS: MECHANISM - Nitrates increase cGMP levels through nitric oxide release. PDE5 inhibitors (sildenafil, tadalafil, vardenafil) prevent cGMP breakdown by inhibiting phosphodiesterase-5. CONSEQUENCE - Synergistic vasodilation leads to severe, potentially life-threatening hypotension that may not respond to fluids and requires vasopressors.",
        "drugIds": [
            "nitroglycerin",
            "isosorbide-mononitrate",
            "isosorbide-dinitrate"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antihypertensives",
        "name": "Antihypertensives",
        "system": "cardiovascular-system",
        "pharmacologicClassIds": [
            "ace-inhibitors",
            "angiotensin-receptor-blockers",
            "direct-vasodilators",
            "hypertensive-emergency-agents",
            "calcium-channel-blockers",
            "nitrates"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "loop-diuretics",
        "name": "Loop Diuretics",
        "therapeuticClass": "diuretics-cardiovascular",
        "system": "cardiovascular-system",
        "mechanism": "Inhibit NKCC2 transporter in thick ascending limb, causing rapid fluid loss.",
        "sideEffects": [
            "Hypokalemia",
            "Hyponatremia",
            "Ototoxicity"
        ],
        "interactions": "Aminoglycosides (ototoxicity), lithium (increased levels).",
        "interactionDetails": "AMINOGLYCOSIDES: MECHANISM - Both loop diuretics and aminoglycosides have direct ototoxic effects on hair cells in the cochlea. CONSEQUENCE - Synergistic permanent hearing loss. LITHIUM: MECHANISM - Volume depletion increases lithium reabsorption. CONSEQUENCE - Lithium toxicity with tremor and confusion.",
        "drugIds": [
            "furosemide",
            "bumetanide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "thiazide-diuretics",
        "name": "Thiazide Diuretics",
        "therapeuticClass": "diuretics-cardiovascular",
        "system": "cardiovascular-system",
        "mechanism": "Inhibit NCC transporter in distal convoluted tubule, first-line for HTN.",
        "sideEffects": [
            "Hypokalemia",
            "Hyperuricemia",
            "Hyperglycemia"
        ],
        "interactions": "Lithium (increased levels), NSAIDs (reduced efficacy).",
        "interactionDetails": "LITHIUM: MECHANISM - Thiazides cause volume depletion, increasing lithium reabsorption. CONSEQUENCE - Lithium toxicity. NSAIDS: MECHANISM - Thiazides work partly through prostaglandin-mediated vasodilation, NSAIDs block this. CONSEQUENCE - Reduced antihypertensive effect.",
        "drugIds": [
            "hydrochlorothiazide-hctz",
            "chlorthalidone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "potassium-sparing-diuretics",
        "name": "Potassium-Sparing Diuretics",
        "therapeuticClass": "diuretics-cardiovascular",
        "system": "cardiovascular-system",
        "mechanism": "Block aldosterone receptors or ENaC channels, prevent K+ loss.",
        "sideEffects": [
            "Hyperkalemia",
            "Gynecomastia (spironolactone)"
        ],
        "interactions": "ACE inhibitors, ARBs (hyperkalemia).",
        "interactionDetails": "ACE INHIBITORS/ARBS: MECHANISM - Both reduce aldosterone and block potassium excretion. CONSEQUENCE - Dangerous hyperkalemia with risk of fatal arrhythmias.",
        "drugIds": [
            "spironolactone",
            "eplerenone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "diuretics-cardiovascular",
        "name": "Diuretics (Cardiovascular)",
        "system": "cardiovascular-system",
        "pharmacologicClassIds": [
            "loop-diuretics",
            "thiazide-diuretics",
            "potassium-sparing-diuretics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "class-i-sodium-channel-blockers",
        "name": "Class I (Sodium Channel Blockers)",
        "therapeuticClass": "antiarrhythmics",
        "system": "cardiovascular-system",
        "mechanism": "Block sodium channels, slowing conduction velocity. Sub-classified into IA, IB, IC based on effect on action potential duration.",
        "sideEffects": [
            "Proarrhythmic effects",
            "CNS toxicity",
            "Anticholinergic effects"
        ],
        "interactions": "Many, due to effects on cardiac conduction and metabolism.",
        "interactionDetails": "",
        "drugIds": [
            "quinidine-ia",
            "procainamide-ia",
            "lidocaine-ib",
            "flecainide-ic"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "class-iii-potassium-channel-blockers",
        "name": "Class III (Potassium Channel Blockers)",
        "therapeuticClass": "antiarrhythmics",
        "system": "cardiovascular-system",
        "mechanism": "Block potassium channels, prolonging repolarization and action potential duration.",
        "sideEffects": [
            "QT prolongation",
            "Torsades de pointes",
            "Thyroid dysfunction"
        ],
        "interactions": "Drugs that prolong QT interval.",
        "interactionDetails": "",
        "drugIds": [
            "amiodarone",
            "sotalol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "miscellaneous-class-v",
        "name": "Miscellaneous (Class V)",
        "therapeuticClass": "antiarrhythmics",
        "system": "cardiovascular-system",
        "mechanism": "Act through unique pathways to acutely slow AV node conduction or stabilize myocardium.",
        "sideEffects": [
            "Flushing (adenosine)",
            "Chest discomfort",
            "Hypotension",
            "Bradycardia"
        ],
        "interactions": "Dipyridamole and carbamazepine potentiate adenosine; methylxanthines antagonize.",
        "interactionDetails": "",
        "drugIds": [
            "adenosine",
            "magnesium-sulfate"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antiarrhythmics",
        "name": "Antiarrhythmics",
        "system": "cardiovascular-system",
        "pharmacologicClassIds": [
            "class-i-sodium-channel-blockers",
            "class-iii-potassium-channel-blockers",
            "miscellaneous-class-v"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "statins",
        "name": "Statins",
        "therapeuticClass": "lipid-management",
        "system": "cardiovascular-system",
        "mechanism": "Inhibit HMG-CoA reductase, the rate-limiting step in cholesterol synthesis.",
        "sideEffects": [
            "Myopathy",
            "Rhabdomyolysis",
            "Hepatotoxicity"
        ],
        "interactions": "CYP3A4 inhibitors increase levels.",
        "interactionDetails": "",
        "drugIds": [
            "atorvastatin",
            "simvastatin",
            "rosuvastatin",
            "pravastatin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "cholesterol-absorption-inhibitors",
        "name": "Cholesterol Absorption Inhibitors",
        "therapeuticClass": "lipid-management",
        "system": "cardiovascular-system",
        "mechanism": "Block NPC1L1 transporter at intestinal brush border to reduce cholesterol absorption.",
        "sideEffects": [
            "Diarrhea",
            "Elevated LFTs (with statins)"
        ],
        "interactions": "Bile acid resins decrease ezetimibe absorption.",
        "interactionDetails": "",
        "drugIds": [
            "ezetimibe"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "bile-acid-sequestrants",
        "name": "Bile Acid Sequestrants",
        "therapeuticClass": "lipid-management",
        "system": "cardiovascular-system",
        "mechanism": "Bind bile acids in intestine, forcing hepatic conversion of cholesterol to bile acids.",
        "sideEffects": [
            "GI distress",
            "Decreased fat-soluble vitamins"
        ],
        "interactions": "Reduce absorption of many drugs (digoxin, warfarin).",
        "interactionDetails": "",
        "drugIds": [
            "cholestyramine",
            "colesevelam"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "fibrates",
        "name": "Fibrates",
        "therapeuticClass": "lipid-management",
        "system": "cardiovascular-system",
        "mechanism": "Activate PPAR-α to increase lipoprotein lipase activity and lower triglycerides.",
        "sideEffects": [
            "Myopathy (especially with statins)",
            "Gallstones"
        ],
        "interactions": "Gemfibrozil increases statin levels via OATP inhibition.",
        "interactionDetails": "",
        "drugIds": [
            "gemfibrozil",
            "fenofibrate"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "niacin",
        "name": "Niacin",
        "therapeuticClass": "lipid-management",
        "system": "cardiovascular-system",
        "mechanism": "Inhibits hepatic VLDL synthesis and adipose lipolysis, raising HDL.",
        "sideEffects": [
            "Flushing",
            "Hyperglycemia",
            "Hyperuricemia",
            "Hepatotoxicity"
        ],
        "interactions": "Additive myopathy with statins.",
        "interactionDetails": "",
        "drugIds": [
            "niacin-vitamin-b3"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "lipid-management",
        "name": "Lipid Management",
        "system": "cardiovascular-system",
        "pharmacologicClassIds": [
            "statins",
            "cholesterol-absorption-inhibitors",
            "bile-acid-sequestrants",
            "fibrates",
            "niacin"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "cardiac-glycosides",
        "name": "Cardiac Glycosides",
        "therapeuticClass": "positive-inotropes",
        "system": "cardiovascular-system",
        "mechanism": "Inhibit Na+/K+-ATPase pump, increasing intracellular calcium and cardiac contractility.",
        "sideEffects": [
            "Arrhythmias",
            "Nausea",
            "Visual disturbances",
            "Confusion"
        ],
        "interactions": "Diuretics (hypokalemia increases toxicity), amiodarone, quinidine.",
        "interactionDetails": "DIURETICS: MECHANISM - Digoxin toxicity is potentiated by hypokalemia because potassium competes with digoxin for binding to Na+/K+-ATPase. CONSEQUENCE - Low potassium increases digoxin binding and toxicity, leading to dangerous arrhythmias. AMIODARONE/QUINIDINE: MECHANISM - These drugs inhibit P-glycoprotein, reducing digoxin clearance. CONSEQUENCE - Increased digoxin levels requiring dose reduction.",
        "drugIds": [
            "digoxin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "phosphodiesterase-3-inhibitors",
        "name": "Phosphodiesterase-3 Inhibitors",
        "therapeuticClass": "positive-inotropes",
        "system": "cardiovascular-system",
        "mechanism": "Inhibit PDE3 to increase cAMP in cardiomyocytes and vascular smooth muscle, enhancing inotropy and vasodilation.",
        "sideEffects": [
            "Arrhythmias",
            "Hypotension",
            "Thrombocytopenia"
        ],
        "interactions": "Additive hypotension with other vasodilators.",
        "interactionDetails": "",
        "drugIds": [
            "milrinone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "positive-inotropes",
        "name": "Positive Inotropes",
        "system": "cardiovascular-system",
        "pharmacologicClassIds": [
            "cardiac-glycosides",
            "phosphodiesterase-3-inhibitors"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

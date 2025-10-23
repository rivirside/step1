// Endocrine System - Drugs
// Auto-generated from modularize-data.js

const drugs = [

    {
        "id": "insulin-lispro",
        "name": "Insulin Lispro",
        "pharmacologicClass": "insulin",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Replaces endogenous insulin, promotes glucose uptake and storage.",
        "features": "Rapid-acting (15 min onset).",
        "clinicalChoice": "Mealtime coverage, rapid correction.",
        "indications": [
            "Type 1 Diabetes",
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Hypoglycemia"
        ],
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "Injection site reactions"
        ],
        "interactions": "Beta-blockers mask hypoglycemia symptoms.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "insulin-regular",
        "name": "Insulin Regular",
        "pharmacologicClass": "insulin",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Replaces endogenous insulin, promotes glucose uptake and storage.",
        "features": "Short-acting (30 min onset).",
        "clinicalChoice": "Mealtime coverage, DKA treatment.",
        "indications": [
            "Type 1 Diabetes",
            "Type 2 Diabetes",
            "DKA"
        ],
        "contraindications": [
            "Hypoglycemia"
        ],
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "Injection site reactions"
        ],
        "interactions": "Beta-blockers mask hypoglycemia symptoms.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "insulin-nph",
        "name": "Insulin NPH",
        "pharmacologicClass": "insulin",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Replaces endogenous insulin, promotes glucose uptake and storage.",
        "features": "Intermediate-acting (2-4 hr onset).",
        "clinicalChoice": "Basal insulin coverage.",
        "indications": [
            "Type 1 Diabetes",
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Hypoglycemia"
        ],
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "Injection site reactions"
        ],
        "interactions": "Beta-blockers mask hypoglycemia symptoms.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "insulin-glargine",
        "name": "Insulin Glargine",
        "pharmacologicClass": "insulin",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Long-acting basal insulin analog with modified amino acid sequence that forms microprecipitates in subcutaneous tissue, allowing slow, steady release. Binds to insulin receptors → activates tyrosine kinase → promotes glucose uptake in skeletal muscle and adipose tissue, inhibits hepatic gluconeogenesis, and suppresses lipolysis.",
        "features": "Long-acting (24 hr duration).",
        "clinicalChoice": "Once-daily basal insulin.",
        "pharmacokinetics": {
            "onset": "2-4 hours (slow onset)",
            "peak": "No pronounced peak - relatively flat concentration profile (peakless)",
            "duration": "20-24 hours (allows once-daily dosing)",
            "halfLife": "~12-14 hours",
            "metabolism": "Metabolized to two active metabolites (M1 and M2) in subcutaneous tissue",
            "excretion": "Renal elimination of metabolites. Dose reduction may be needed in renal impairment."
        },
        "indications": [
            "Type 1 Diabetes",
            "Type 2 Diabetes"
        ],
        "clinicalChoice": "Preferred long-acting basal insulin for once-daily dosing. Choose glargine over NPH because: (1) Flat profile reduces nocturnal hypoglycemia risk, (2) Once-daily dosing improves adherence, (3) More predictable glucose control. Typically given at bedtime or same time daily.",
        "dosing": {
            "typical": "Initial: 10 units once daily or 0.1-0.2 units/kg/day. Titrate by 2-4 units every 3 days based on fasting glucose. Goal fasting glucose 80-130 mg/dL.",
            "renal": "Dose reduction may be needed (decreased insulin clearance). Monitor closely for hypoglycemia.",
            "hepatic": "Dose reduction may be needed (decreased gluconeogenesis). Monitor closely for hypoglycemia.",
            "elderly": "Start conservatively (lower doses) due to increased hypoglycemia risk."
        },
        "contraindications": [
            "Hypoglycemia"
        ],
        "sideEffects": {
            "common": [
                "Hypoglycemia (most common, especially if dosed too high)",
                "Weight gain (2-4 kg average)",
                "Injection site reactions (erythema, pruritus, lipodystrophy)"
            ],
            "serious": [
                "Severe hypoglycemia (confusion, seizures, loss of consciousness)",
                "Hypokalemia (insulin shifts K+ into cells)",
                "Anaphylaxis (rare)"
            ],
            "rare": [
                "Lipohypertrophy (from repeated injections at same site)",
                "Immunologic insulin resistance (very rare with analogs)"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Beta-blockers: mask hypoglycemia symptoms (except diaphoresis), may prolong hypoglycemia",
                "Thiazolidinediones (pioglitazone): increased risk of fluid retention and heart failure when combined",
                "Corticosteroids: antagonize insulin effects, increase insulin requirements",
                "Fluoroquinolones: may cause dysglycemia (hypo or hyperglycemia)"
            ],
            "drugDisease": [
                "Renal impairment: decreased insulin clearance, increased hypoglycemia risk",
                "Hepatic impairment: decreased gluconeogenesis, increased hypoglycemia risk",
                "Hypothyroidism: decreased insulin requirements",
                "Hyperthyroidism: increased insulin requirements"
            ],
            "drugFood": [
                "Alcohol: inhibits gluconeogenesis, increases hypoglycemia risk"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose: fingerstick before meals and bedtime (goal pre-meal 80-130 mg/dL)",
                "HbA1c every 3 months (goal <7% for most, <6.5% if low hypoglycemia risk)",
                "Potassium (insulin shifts K+ intracellularly)",
                "Renal function (creatinine) annually or if dose changes needed"
            ],
            "vitals": [
                "Weight (monitor for weight gain)"
            ],
            "symptoms": [
                "Hypoglycemia symptoms: tremor, palpitations, diaphoresis, confusion, hunger",
                "Injection site reactions"
            ],
            "frequency": "Daily glucose monitoring initially, then as stable. HbA1c every 3 months."
        },
        "pregnancy": {
            "category": "Category B (no human risk demonstrated). Generally considered safe.",
            "considerations": "Insulin is treatment of choice for diabetes in pregnancy (does not cross placenta). Insulin requirements increase in 2nd and 3rd trimesters. Tight glucose control essential to prevent fetal complications."
        },
        "clinicalPearls": [
            "Cannot be mixed with other insulins (acidic pH causes precipitation). Give as separate injection.",
            "Must give subcutaneously - NEVER give IV (will precipitate)",
            "Peakless profile = lower nocturnal hypoglycemia risk vs NPH",
            "If patient has nocturnal hypoglycemia with AM hyperglycemia, think Somogyi effect (decrease glargine dose)",
            "If patient has isolated AM hyperglycemia without nocturnal hypo, think dawn phenomenon (increase glargine dose or give at bedtime)",
            "Brand names: Lantus, Basaglar, Toujeo (concentrated U-300)",
            "Step 1 buzzword: 'long-acting basal insulin' or 'once-daily insulin'",
            "Common vignette: Type 2 DM patient on metformin with HbA1c 9% despite adherence → add basal insulin (glargine)",
            "Wrong answer distractor: 'Start NPH' - glargine preferred due to better profile"
        ],
        "pageType": "drug"
    },
    {
        "id": "metformin",
        "name": "Metformin",
        "pharmacologicClass": "biguanides",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Decrease hepatic glucose production, increase insulin sensitivity.",
        "features": "First-line therapy, weight neutral.",
        "clinicalChoice": "Initial T2DM treatment, PCOS.",
        "indications": [
            "Type 2 Diabetes",
            "PCOS"
        ],
        "contraindications": [
            "Renal Impairment",
            "Heart Failure",
            "Alcohol Abuse"
        ],
        "sideEffects": [
            "GI upset",
            "Lactic acidosis (rare)",
            "B12 deficiency"
        ],
        "interactions": "Contrast agents increase lactic acidosis risk.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "glipizide",
        "name": "Glipizide",
        "pharmacologicClass": "sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Stimulate insulin release from pancreatic beta cells.",
        "features": "Short-acting, liver metabolism.",
        "clinicalChoice": "T2DM when metformin insufficient.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic Ketoacidosis"
        ],
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "SIADH"
        ],
        "interactions": "Sulfonamides potentiate effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "glyburide",
        "name": "Glyburide",
        "pharmacologicClass": "sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Stimulate insulin release from pancreatic beta cells.",
        "features": "Long-acting, higher hypoglycemia risk.",
        "clinicalChoice": "T2DM, avoid in elderly.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Type 1 Diabetes",
            "Renal Impairment"
        ],
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "SIADH"
        ],
        "interactions": "Sulfonamides potentiate effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "glimepiride",
        "name": "Glimepiride",
        "pharmacologicClass": "sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Stimulate insulin release from pancreatic beta cells.",
        "features": "Once-daily dosing.",
        "clinicalChoice": "T2DM with compliance issues.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic Ketoacidosis"
        ],
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "SIADH"
        ],
        "interactions": "Sulfonamides potentiate effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "pioglitazone",
        "name": "Pioglitazone",
        "pharmacologicClass": "thiazolidinediones",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "PPAR-γ agonists, increase insulin sensitivity in muscle and fat.",
        "features": "Improves insulin sensitivity.",
        "clinicalChoice": "T2DM with insulin resistance.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Heart Failure",
            "Bladder Cancer History"
        ],
        "sideEffects": [
            "Weight gain",
            "Fluid retention",
            "Heart failure",
            "Bone fractures"
        ],
        "interactions": "CYP2C8 inhibitors increase levels.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "sitagliptin",
        "name": "Sitagliptin",
        "pharmacologicClass": "dpp-4-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit dipeptidyl peptidase-4, increase incretin levels.",
        "features": "Weight neutral, low hypoglycemia risk.",
        "clinicalChoice": "T2DM add-on therapy.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic Ketoacidosis"
        ],
        "sideEffects": [
            "Upper respiratory infections",
            "Headache",
            "Pancreatitis (rare)"
        ],
        "interactions": "Few significant interactions.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "linagliptin",
        "name": "Linagliptin",
        "pharmacologicClass": "dpp-4-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit dipeptidyl peptidase-4, increase incretin levels.",
        "features": "Hepatic elimination, safe in renal disease.",
        "clinicalChoice": "T2DM with kidney disease.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Type 1 Diabetes"
        ],
        "sideEffects": [
            "Upper respiratory infections",
            "Headache",
            "Pancreatitis (rare)"
        ],
        "interactions": "Few significant interactions.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "exenatide",
        "name": "Exenatide",
        "pharmacologicClass": "glp-1-receptor-agonists",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Mimic incretin hormones, glucose-dependent insulin release.",
        "features": "Twice-daily injection, weight loss.",
        "clinicalChoice": "T2DM with obesity.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Type 1 Diabetes",
            "Gastroparesis"
        ],
        "sideEffects": [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Pancreatitis risk"
        ],
        "interactions": "Delay gastric emptying, affect oral drug absorption.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "liraglutide",
        "name": "Liraglutide",
        "pharmacologicClass": "glp-1-receptor-agonists",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Mimic incretin hormones, glucose-dependent insulin release.",
        "features": "Once-daily, cardiovascular benefits.",
        "clinicalChoice": "T2DM with CV risk.",
        "indications": [
            "Type 2 Diabetes",
            "Obesity"
        ],
        "contraindications": [
            "MTC History",
            "MEN 2"
        ],
        "sideEffects": [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Pancreatitis risk"
        ],
        "interactions": "Delay gastric emptying, affect oral drug absorption.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "empagliflozin",
        "name": "Empagliflozin",
        "pharmacologicClass": "sglt2-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Block sodium-glucose cotransporter-2 in kidneys, increase glucose excretion.",
        "features": "Cardiovascular and renal benefits.",
        "clinicalChoice": "T2DM with heart failure or CKD.",
        "indications": [
            "Type 2 Diabetes",
            "Heart Failure"
        ],
        "contraindications": [
            "Type 1 Diabetes",
            "Severe Renal Impairment"
        ],
        "sideEffects": [
            "UTIs",
            "Genital mycotic infections",
            "DKA risk",
            "Dehydration"
        ],
        "interactions": "Diuretics increase dehydration risk.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "canagliflozin",
        "name": "Canagliflozin",
        "pharmacologicClass": "sglt2-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Block sodium-glucose cotransporter-2 in kidneys, increase glucose excretion.",
        "features": "May reduce CV events.",
        "clinicalChoice": "T2DM with established CVD.",
        "indications": [
            "Type 2 Diabetes"
        ],
        "contraindications": [
            "Severe Renal Impairment",
            "Lower Limb Amputation History"
        ],
        "sideEffects": [
            "UTIs",
            "Genital mycotic infections",
            "DKA risk",
            "Dehydration"
        ],
        "interactions": "Diuretics increase dehydration risk.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "pramlintide",
        "name": "Pramlintide",
        "pharmacologicClass": "amylin-analogs",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Synthetic analog of amylin, a hormone co-secreted with insulin from pancreatic beta cells. Slows gastric emptying, suppresses postprandial glucagon secretion, and promotes satiety via central mechanisms.",
        "features": "Only amylin analog available. Adjunct to insulin therapy.",
        "clinicalChoice": "Type 1 or Type 2 DM on insulin not at goal. Provides postprandial glucose control and weight loss benefit.",
        "pharmacokinetics": {
            "onset": "Rapid (peak at 20 minutes)",
            "peak": "20 minutes",
            "duration": "3 hours",
            "halfLife": "~48 minutes",
            "metabolism": "Primarily renal metabolism",
            "excretion": "Renal excretion"
        },
        "indications": [
            "Type 1 Diabetes (as adjunct to mealtime insulin)",
            "Type 2 Diabetes (as adjunct to mealtime insulin)"
        ],
        "clinicalChoice": "For patients on mealtime insulin who have inadequate glucose control despite optimal insulin therapy. Unique benefit of weight loss (3-4 kg average) unlike insulin alone. Particularly useful for obese diabetic patients.",
        "dosing": {
            "typical": "Type 1 DM: Start 15 mcg before meals, titrate to 30-60 mcg. Type 2 DM: Start 60 mcg before meals, titrate to 120 mcg. MUST reduce mealtime insulin by 50% when initiating.",
            "renal": "Avoid in severe renal impairment (CrCl <15 mL/min)",
            "hepatic": "No dose adjustment needed"
        },
        "contraindications": [
            "Gastroparesis",
            "Hypoglycemia unawareness"
        ],
        "sideEffects": {
            "common": [
                "Nausea (60-70%, usually improves over 4 weeks)",
                "Vomiting",
                "Anorexia",
                "Headache"
            ],
            "serious": [
                "Severe hypoglycemia (when not reducing insulin dose appropriately)",
                "Injection site reactions"
            ],
            "rare": []
        },
        "blackBoxWarnings": [
            "Risk of severe hypoglycemia, particularly in Type 1 DM. Occurs within 3 hours of injection. Must reduce mealtime insulin dose by 50% when starting pramlintide."
        ],
        "interactions": {
            "drugDrug": [
                "Insulin: increased hypoglycemia risk (reduce insulin dose by 50%)",
                "Anticholinergics: may antagonize GI effects",
                "Drugs requiring rapid absorption: pramlintide delays gastric emptying, give at least 1 hour before or 2 hours after pramlintide"
            ],
            "drugDisease": [
                "Gastroparesis: absolutely contraindicated (worsens delayed emptying)"
            ],
            "drugFood": []
        },
        "monitoring": {
            "labs": [
                "Blood glucose before and after meals",
                "HbA1c every 3 months"
            ],
            "vitals": [
                "Weight (monitor for weight loss - therapeutic effect)"
            ],
            "symptoms": [
                "Hypoglycemia symptoms (especially in first 3 hours after dose)",
                "Nausea/vomiting (usually transient)",
                "Signs of gastroparesis"
            ],
            "frequency": "Frequent glucose monitoring initially, especially within 3 hours post-dose"
        },
        "pregnancy": {
            "category": "Category C",
            "considerations": "Limited data in pregnancy. Use only if benefit outweighs risk. Insulin monotherapy generally preferred in pregnancy."
        },
        "clinicalPearls": [
            "BLACK BOX: Severe hypoglycemia - must reduce mealtime insulin by 50% when starting",
            "Give as separate injection from insulin (cannot mix). Inject subcutaneously into abdomen or thigh.",
            "Only diabetes medication that promotes weight LOSS when added to insulin",
            "Nausea is almost universal (60-70%) but typically improves over 4 weeks - titrate slowly",
            "Must take immediately BEFORE meal (within 15 minutes)",
            "Step 1 buzzword: 'adjunct to insulin' or 'contraindicated in gastroparesis'",
            "Mechanism mnemonic: 'Amylin makes A meal linger' (slows gastric emptying)",
            "If hypoglycemia occurs, patient can still eat - unlike GLP-1 agonists which suppress appetite",
            "Not commonly used in practice due to nausea, need for injections, and modest efficacy"
        ],
        "pageType": "drug"
    },
    {
        "id": "acarbose",
        "name": "Acarbose",
        "pharmacologicClass": "alpha-glucosidase-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Reversibly inhibits alpha-glucosidase enzymes in small intestine brush border, delaying breakdown of complex carbohydrates (starch, sucrose) into absorbable monosaccharides. Reduces postprandial glucose spikes.",
        "features": "Minimal systemic absorption (<2%). Acts locally in GI tract.",
        "clinicalChoice": "Type 2 DM with predominantly postprandial hyperglycemia. Often used in combination therapy. Safe (no hypoglycemia alone) but GI side effects limit use.",
        "pharmacokinetics": {
            "onset": "Immediate (with first bite of meal)",
            "peak": "Not applicable (minimal systemic absorption)",
            "duration": "Duration of meal digestion",
            "halfLife": "~2 hours (for absorbed fraction)",
            "metabolism": "Metabolized by intestinal bacteria and digestive enzymes in GI tract",
            "excretion": "Fecal excretion (>95% as metabolites and unchanged drug)"
        },
        "indications": [
            "Type 2 Diabetes"
        ],
        "clinicalChoice": "For patients with elevated postprandial glucose but acceptable fasting glucose. Particularly useful in Asian populations (high-carbohydrate diets). No hypoglycemia risk as monotherapy. Can use in renal impairment (unlike miglitol).",
        "dosing": {
            "typical": "Start 25 mg TID with first bite of each meal. Titrate slowly: increase to 50 mg TID after 4-8 weeks, then to 100 mg TID if needed. Maximum 100 mg TID.",
            "renal": "Avoid if CrCl <25 mL/min (not due to systemic effects, but lack of data and increased GI side effects)",
            "hepatic": "Contraindicated in cirrhosis (rare hepatotoxicity reported)"
        },
        "contraindications": [
            "Inflammatory bowel disease (Crohn's, ulcerative colitis)",
            "Colonic ulceration",
            "Intestinal obstruction",
            "Chronic intestinal diseases with malabsorption",
            "Cirrhosis"
        ],
        "sideEffects": {
            "common": [
                "Flatulence (75% of patients - due to colonic fermentation of undigested carbs)",
                "Diarrhea (30%)",
                "Abdominal pain/cramping (20%)"
            ],
            "serious": [
                "Elevated liver enzymes (rare, reversible)"
            ],
            "rare": [
                "Hepatotoxicity (rare, mostly with doses >300 mg/day)"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Digestive enzymes (pancreatin): may reduce acarbose efficacy",
                "Intestinal adsorbents (charcoal): may reduce acarbose efficacy",
                "Insulin/sulfonylureas: if hypoglycemia occurs, treat with GLUCOSE (not sucrose - acarbose blocks sucrose breakdown)"
            ],
            "drugDisease": [
                "IBD: contraindicated (worsens GI symptoms)",
                "Cirrhosis: contraindicated (hepatotoxicity risk)"
            ],
            "drugFood": []
        },
        "monitoring": {
            "labs": [
                "Blood glucose (postprandial primarily)",
                "HbA1c every 3 months",
                "LFTs at baseline, then at 3, 6, 12 months, then annually (monitor for hepatotoxicity)"
            ],
            "vitals": [],
            "symptoms": [
                "GI symptoms (flatulence, diarrhea, abdominal pain)",
                "Symptoms of hypoglycemia (if on concurrent insulin/sulfonylurea)"
            ],
            "frequency": "LFTs every 3 months for first year, then annually"
        },
        "pregnancy": {
            "category": "Category B",
            "considerations": "Generally safe (minimal systemic absorption). However, insulin is preferred in pregnancy."
        },
        "clinicalPearls": [
            "Must take with FIRST BITE of meal (not before, not after) - timing is critical",
            "GI side effects are dose-dependent and improve with slow titration",
            "If patient develops hypoglycemia (from concurrent therapy), treat with GLUCOSE tablets/gel - NOT sucrose or complex carbs (acarbose blocks their breakdown)",
            "Step 1 buzzword: 'flatulence and diarrhea' or 'contraindicated in IBD'",
            "Mechanism: works in the gut, not systemically - 'Acarbose acts in the Alimentary canal'",
            "Modest efficacy: reduces HbA1c by 0.5-0.8% (less than metformin)",
            "No weight gain, no hypoglycemia as monotherapy - safe profile",
            "Rarely used first-line due to GI side effects - mostly add-on therapy",
            "Can use in renal impairment (minimal absorption) - advantage over miglitol"
        ],
        "pageType": "drug"
    },
    {
        "id": "miglitol",
        "name": "Miglitol",
        "pharmacologicClass": "alpha-glucosidase-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Reversibly inhibits alpha-glucosidase enzymes in small intestine, delaying digestion and absorption of carbohydrates. Reduces postprandial glucose excursions.",
        "features": "Well absorbed systemically (unlike acarbose). Renally excreted unchanged.",
        "clinicalChoice": "Type 2 DM with postprandial hyperglycemia. Similar to acarbose but systemically absorbed. Avoid in renal impairment.",
        "pharmacokinetics": {
            "onset": "Immediate (with meal)",
            "peak": "2-3 hours (plasma concentration)",
            "duration": "Duration of meal digestion",
            "halfLife": "~2 hours",
            "metabolism": "Not metabolized (excreted unchanged)",
            "excretion": "Renal excretion (>95% unchanged in urine)"
        },
        "indications": [
            "Type 2 Diabetes"
        ],
        "clinicalChoice": "Alternative to acarbose with similar efficacy and side effect profile. Main difference: systemically absorbed and renally excreted (avoid in renal impairment). Choose acarbose over miglitol if patient has renal disease.",
        "dosing": {
            "typical": "Start 25 mg TID with first bite of each meal. Increase to 50 mg TID after 4-8 weeks, then 100 mg TID if needed. Maximum 100 mg TID.",
            "renal": "Avoid if CrCl <25 mL/min (drug accumulation)",
            "hepatic": "No dose adjustment needed (not hepatically metabolized)"
        },
        "contraindications": [
            "Inflammatory bowel disease",
            "Colonic ulceration",
            "Intestinal obstruction",
            "Severe renal impairment (CrCl <25 mL/min)",
            "Chronic intestinal diseases with malabsorption"
        ],
        "sideEffects": {
            "common": [
                "Flatulence (70% - due to colonic fermentation)",
                "Diarrhea (30%)",
                "Abdominal pain (10-15%)"
            ],
            "serious": [],
            "rare": []
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Digestive enzymes: may reduce efficacy",
                "Propranolol, ranitidine: miglitol may reduce their bioavailability (give 2 hours apart)",
                "Insulin/sulfonylureas: if hypoglycemia occurs, treat with GLUCOSE (not sucrose)"
            ],
            "drugDisease": [
                "IBD: contraindicated",
                "Severe renal impairment: contraindicated (drug accumulation)"
            ],
            "drugFood": []
        },
        "monitoring": {
            "labs": [
                "Blood glucose (especially postprandial)",
                "HbA1c every 3 months",
                "Renal function (serum creatinine) - avoid if impaired"
            ],
            "vitals": [],
            "symptoms": [
                "GI symptoms (flatulence, diarrhea, abdominal discomfort)",
                "Hypoglycemia symptoms (if on concurrent therapy)"
            ],
            "frequency": "Regular glucose monitoring, check renal function periodically"
        },
        "pregnancy": {
            "category": "Category B",
            "considerations": "Limited data. Insulin preferred in pregnancy. Use only if clearly needed."
        },
        "clinicalPearls": [
            "Must take with FIRST BITE of each meal for efficacy",
            "If hypoglycemia occurs (from concurrent insulin/sulfonylurea), treat with GLUCOSE - NOT table sugar (sucrose) which requires enzyme breakdown",
            "Main difference vs acarbose: miglitol is systemically absorbed → renally excreted → avoid in renal impairment",
            "Acarbose advantage: can use in renal disease (not absorbed)",
            "Miglitol advantage: no hepatotoxicity (unlike rare cases with acarbose)",
            "Step 1 buzzword: 'avoid in renal impairment' (unlike acarbose)",
            "GI side effects same as acarbose - flatulence and diarrhea from carb fermentation in colon",
            "Rarely first-line due to GI side effects and modest efficacy (HbA1c -0.5-0.8%)",
            "No hypoglycemia as monotherapy, no weight gain - safe but limited by tolerability"
        ],
        "pageType": "drug"
    },
    {
        "id": "levothyroxine",
        "name": "Levothyroxine",
        "pharmacologicClass": "thyroid-hormones",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Replace deficient thyroid hormones T4 and T3.",
        "features": "T4 replacement, converted to T3.",
        "clinicalChoice": "Hypothyroidism treatment.",
        "indications": [
            "Hypothyroidism",
            "Thyroid Cancer"
        ],
        "contraindications": [
            "Untreated Adrenal Insufficiency"
        ],
        "sideEffects": [
            "Hyperthyroid symptoms",
            "Arrhythmias",
            "Osteoporosis"
        ],
        "interactions": "Iron, calcium reduce absorption.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "liothyronine",
        "name": "Liothyronine",
        "pharmacologicClass": "thyroid-hormones",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Replace deficient thyroid hormones T4 and T3.",
        "features": "T3 replacement, rapid onset.",
        "clinicalChoice": "Myxedema coma.",
        "indications": [
            "Severe Hypothyroidism",
            "Myxedema Coma"
        ],
        "contraindications": [
            "Untreated Adrenal Insufficiency"
        ],
        "sideEffects": [
            "Hyperthyroid symptoms",
            "Arrhythmias",
            "Osteoporosis"
        ],
        "interactions": "Iron, calcium reduce absorption.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "methimazole",
        "name": "Methimazole",
        "pharmacologicClass": "antithyroid-agents",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit thyroid hormone synthesis.",
        "features": "Preferred agent, once-daily dosing.",
        "clinicalChoice": "Hyperthyroidism treatment.",
        "indications": [
            "Hyperthyroidism",
            "Graves Disease"
        ],
        "contraindications": [
            "Pregnancy (1st trimester)"
        ],
        "sideEffects": [
            "Agranulocytosis",
            "Hepatotoxicity",
            "Rash"
        ],
        "interactions": "Warfarin effects enhanced.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "propylthiouracil",
        "name": "Propylthiouracil",
        "pharmacologicClass": "antithyroid-agents",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit thyroid hormone synthesis.",
        "features": "Blocks T4 to T3 conversion.",
        "clinicalChoice": "Pregnancy, thyroid storm.",
        "indications": [
            "Hyperthyroidism in Pregnancy",
            "Thyroid Storm"
        ],
        "contraindications": [
            "Severe Liver Disease"
        ],
        "sideEffects": [
            "Agranulocytosis",
            "Hepatotoxicity",
            "Rash"
        ],
        "interactions": "Warfarin effects enhanced.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "prednisone",
        "name": "Prednisone",
        "pharmacologicClass": "glucocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Anti-inflammatory and immunosuppressive effects via genomic pathways.",
        "features": "Oral prodrug, converted to prednisolone. | Oral, intermediate-acting.",
        "clinicalChoice": "Inflammatory conditions, immunosuppression.",
        "indications": [
            "Allergic Reactions",
            "Asthma",
            "Autoimmune Disorders",
            "Inflammatory Diseases",
            "Rheumatoid Arthritis"
        ],
        "contraindications": [
            "Systemic Fungal Infections"
        ],
        "sideEffects": [
            "Hyperglycemia",
            "Osteoporosis",
            "Immunosuppression",
            "Adrenal suppression"
        ],
        "interactions": "CYP3A4 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "pageType": "drug",
        "pharmacologicClasses": [
            "glucocorticoids",
            "systemic-corticosteroids"
        ]
    },
    {
        "id": "dexamethasone",
        "name": "Dexamethasone",
        "pharmacologicClass": "glucocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Anti-inflammatory and immunosuppressive effects via genomic pathways.",
        "features": "Long-acting, high potency. | Long-acting, potent, minimal mineralocorticoid activity.",
        "clinicalChoice": "Cerebral edema, severe inflammation.",
        "indications": [
            "Adrenal Insufficiency Testing",
            "Cerebral Edema",
            "Severe Asthma"
        ],
        "contraindications": [
            "Systemic Fungal Infections"
        ],
        "sideEffects": [
            "Hyperglycemia",
            "Osteoporosis",
            "Immunosuppression",
            "Adrenal suppression"
        ],
        "interactions": "CYP3A4 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "pageType": "drug",
        "pharmacologicClasses": [
            "glucocorticoids",
            "systemic-corticosteroids"
        ]
    },
    {
        "id": "fludrocortisone",
        "name": "Fludrocortisone",
        "pharmacologicClass": "mineralocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Sodium retention and potassium excretion in distal nephron.",
        "features": "Oral mineralocorticoid replacement.",
        "clinicalChoice": "Adrenal insufficiency with salt wasting.",
        "indications": [
            "Primary Adrenal Insufficiency",
            "Orthostatic Hypotension"
        ],
        "contraindications": [
            "Systemic Fungal Infections",
            "Hypertension"
        ],
        "sideEffects": [
            "Hypertension",
            "Hypokalemia",
            "Fluid retention"
        ],
        "interactions": "NSAIDs reduce effectiveness.",
        "interactionDetails": "",
        "pageType": "drug"
    }

];export default drugs;

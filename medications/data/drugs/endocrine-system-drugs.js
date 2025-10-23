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
        "mechanism": "Activates AMP-activated protein kinase (AMPK) → suppresses hepatic gluconeogenesis (primary effect), decreases intestinal glucose absorption, and increases peripheral glucose uptake and insulin sensitivity. Does NOT stimulate insulin secretion, so no hypoglycemia risk as monotherapy.",
        "features": "First-line therapy, weight neutral.",
        "clinicalChoice": "Initial T2DM treatment, PCOS.",
        "pharmacokinetics": {
            "onset": "Hours to days for full glucose-lowering effect",
            "peak": "Plasma concentration peaks at 2-3 hours (immediate-release) or 4-8 hours (extended-release)",
            "duration": "12-24 hours depending on formulation",
            "halfLife": "4-8.7 hours",
            "metabolism": "NOT metabolized - excreted unchanged (unique among oral diabetes drugs)",
            "excretion": "100% renal excretion via glomerular filtration and tubular secretion. Accumulates in renal impairment."
        },
        "indications": [
            "Type 2 Diabetes (first-line)",
            "PCOS (off-label)",
            "Prediabetes prevention (off-label)",
            "Antipsychotic-induced weight gain (off-label)"
        ],
        "clinicalChoice": "THE first-line drug for Type 2 DM unless contraindicated. Choose metformin because: (1) Reduces HbA1c by 1-2%, (2) Weight-neutral or modest weight loss, (3) No hypoglycemia as monotherapy, (4) Only diabetes drug proven to reduce CV mortality, (5) Inexpensive. For PCOS: improves insulin resistance, may restore ovulation.",
        "dosing": {
            "typical": "Start 500 mg once or twice daily with meals. Titrate by 500 mg weekly to maximum 2000-2550 mg/day divided BID-TID. Extended-release: 500-2000 mg once daily with evening meal.",
            "renal": "eGFR 30-45: max 1000 mg/day. eGFR <30: contraindicated (lactic acidosis risk). Check eGFR before starting and annually.",
            "hepatic": "Use caution in severe hepatic disease (decreased lactate clearance → lactic acidosis risk)",
            "elderly": "Start low dose. Monitor renal function closely (age-related decline in eGFR)."
        },
        "contraindications": [
            "eGFR <30 mL/min/1.73m²",
            "Acute or chronic metabolic acidosis (including DKA)",
            "Hypoxic states (shock, sepsis, acute MI)",
            "Acute heart failure or decompensated HF requiring IV therapy",
            "Severe hepatic disease"
        ],
        "sideEffects": {
            "common": [
                "GI upset: diarrhea, nausea, abdominal discomfort (30% - usually resolves in 2-4 weeks)",
                "Metallic taste",
                "Decreased appetite"
            ],
            "serious": [
                "Lactic acidosis (RARE: <1/100,000 patient-years, but mortality 50%)",
                "Vitamin B12 deficiency (10-30% with long-term use → macrocytic anemia, neuropathy)"
            ],
            "rare": [
                "Hypoglycemia (only when combined with insulin or sulfonylureas)"
            ]
        },
        "blackBoxWarnings": [
            "Lactic acidosis: Rare but serious metabolic complication. Risk factors: renal impairment, hypoxia, sepsis, tissue hypoperfusion, alcohol abuse, IV contrast. Symptoms: hyperventilation, myalgias, malaise, abdominal pain. If suspected: stop metformin, check lactate."
        ],
        "interactions": {
            "drugDrug": [
                "Iodinated contrast media: Hold metformin at time of or before contrast. Resume 48 hours after procedure if renal function stable (prevents contrast-induced nephropathy → lactic acidosis)",
                "Cationic drugs (cimetidine, amiloride): compete for renal tubular secretion → increased metformin levels",
                "Carbonic anhydrase inhibitors (topiramate, acetazolamide): increase risk of lactic acidosis",
                "Alcohol: increases lactic acidosis risk (avoid excessive alcohol)"
            ],
            "drugDisease": [
                "Renal impairment: accumulation → lactic acidosis",
                "Hepatic disease: decreased lactate clearance → lactic acidosis",
                "Heart failure: tissue hypoperfusion → lactic acidosis"
            ],
            "drugFood": [
                "Take with food to minimize GI side effects",
                "Vitamin B12: long-term metformin impairs B12 absorption"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose: fasting and HbA1c every 3 months (goal HbA1c <7%)",
                "eGFR/serum creatinine: baseline and at least annually (more frequent if eGFR <60)",
                "Vitamin B12 levels: baseline and annually with long-term use",
                "CBC if B12 deficiency suspected (macrocytic anemia)"
            ],
            "vitals": [
                "Weight (monitor for beneficial weight loss)"
            ],
            "symptoms": [
                "GI symptoms (usually transient)",
                "Symptoms of lactic acidosis (hyperventilation, myalgias, malaise)",
                "Symptoms of B12 deficiency (paresthesias, glossitis, cognitive changes)"
            ],
            "frequency": "eGFR annually minimum, more often if borderline. B12 annually."
        },
        "pregnancy": {
            "category": "Category B. Generally considered safe.",
            "considerations": "Insulin is preferred for pregnancy (tighter glucose control). However, metformin increasingly used for gestational DM and PCOS in pregnancy. Does not cause congenital malformations. Crosses placenta."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'first-line for Type 2 DM' or 'no hypoglycemia as monotherapy'",
            "Mnemonic: 'Metformin Makes Me need to Monitor My kidneys'",
            "ONLY diabetes drug proven to reduce cardiovascular mortality (UKPDS trial - 30% reduction)",
            "Does NOT cause weight gain (unlike insulin, sulfonylureas, TZDs) - may cause 2-3 kg weight loss",
            "NOT metabolized by liver → safe in hepatic dysfunction (unless severe)",
            "Lactic acidosis: RARE but classic Step 1 testable complication. Risk factors = renal disease, contrast dye, hypoxia",
            "Hold metformin for 48 hours before/after contrast studies (prevents contrast-induced AKI → lactic acidosis)",
            "GI side effects: start low, go slow, take with food. Extended-release formulation better tolerated.",
            "B12 deficiency: metformin impairs ileal B12 absorption → check annually, supplement if low",
            "Classic vignette: 55yo obese man, BMI 32, HbA1c 8.5%, fasting glucose 160 despite diet/exercise → start metformin",
            "Common wrong answer: 'Start sulfonylurea' or 'Start insulin' - metformin is ALWAYS first unless contraindicated",
            "For PCOS: metformin improves insulin resistance → may restore ovulation, improve hirsutism"
        ],
        "pageType": "drug"
    },
    {
        "id": "glipizide",
        "name": "Glipizide",
        "pharmacologicClass": "sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Binds to SUR1 (sulfonylurea receptor) on ATP-sensitive K+ channels in pancreatic beta cells → closes K+ channels → membrane depolarization → Ca²⁺ influx → insulin granule exocytosis. Stimulates insulin release regardless of glucose level.",
        "features": "Short-acting, liver metabolism.",
        "pharmacokinetics": {
            "onset": "1-1.5 hours",
            "peak": "2-3 hours",
            "duration": "12-24 hours (depending on formulation)",
            "halfLife": "2-4 hours (shortest of sulfonylureas)",
            "metabolism": "Hepatic via CYP2C9 to INACTIVE metabolites",
            "excretion": "Renal (60-70% as inactive metabolites), fecal (10%)"
        },
        "indications": [
            "Type 2 Diabetes (as monotherapy or combination with metformin, insulin, or TZDs)"
        ],
        "clinicalChoice": "Safest sulfonylurea in renal impairment (inactive metabolites don't accumulate). Preferred in elderly due to shorter duration and lower hypoglycemia risk vs glyburide. Choose when need sulfonylurea in patient with CKD or elderly.",
        "dosing": {
            "typical": "Start 5 mg once daily before breakfast. Titrate by 2.5-5 mg every few weeks. Max 40 mg/day (usually divided BID if >15 mg/day). Take 30 min before meals.",
            "renal": "Start with low dose (2.5 mg). Safest sulfonylurea in renal disease (no active metabolites). Can use with caution even in moderate CKD.",
            "hepatic": "Use caution in severe hepatic disease (decreased metabolism)",
            "elderly": "Start 2.5 mg daily. Preferred sulfonylurea in elderly (lower hypoglycemia risk)."
        },
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic ketoacidosis",
            "Sulfa allergy (cross-reactivity rare but possible)",
            "Pregnancy/breastfeeding"
        ],
        "sideEffects": {
            "common": [
                "Hypoglycemia (10-20%, but lower than glyburide)",
                "Weight gain (2-5 kg average)",
                "GI upset (nausea, diarrhea)"
            ],
            "serious": [
                "Severe hypoglycemia (confusion, seizures, coma - especially if skipped meals or alcohol)",
                "SIADH (rare but classic board side effect)"
            ],
            "rare": [
                "Hemolytic anemia",
                "Cholestatic jaundice"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Sulfonamide antibiotics: potentiate hypoglycemia (both sulfon-)",
                "Warfarin: displaced from protein binding → increased warfarin effect",
                "Beta-blockers: mask hypoglycemia symptoms",
                "Alcohol: disulfiram-like reaction (flushing, nausea), increased hypoglycemia",
                "Salicylates: displace from protein binding → increased sulfonylurea effect"
            ],
            "drugDisease": [
                "G6PD deficiency: risk of hemolytic anemia"
            ],
            "drugFood": [
                "Take 30 minutes before meals for optimal effect",
                "Alcohol: avoid (hypoglycemia risk, disulfiram reaction)"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose: frequent monitoring, especially during titration",
                "HbA1c every 3 months",
                "Renal function periodically"
            ],
            "vitals": [
                "Weight (expect 2-5 kg gain)"
            ],
            "symptoms": [
                "Hypoglycemia symptoms: tremor, palpitations, diaphoresis, confusion, hunger",
                "SIADH symptoms: hyponatremia, confusion, seizures"
            ],
            "frequency": "Frequent glucose checks initially, teach patient to recognize hypoglycemia"
        },
        "pregnancy": {
            "category": "Category C",
            "considerations": "Not recommended in pregnancy. Switch to insulin for pregnancy (better glycemic control, no teratogenicity concerns)."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'safest sulfonylurea in renal disease'",
            "Mnemonic: 'GlipiZIDE is Zafe' (safe in renal disease, no active metabolites)",
            "Preferred over glyburide in elderly and CKD patients",
            "Shortest half-life (2-4 hr) → lower risk of prolonged hypoglycemia",
            "Inactive metabolites → don't accumulate in renal failure (unlike glyburide)",
            "Classic vignette: Type 2 DM on metformin, HbA1c 8.5%, eGFR 35 → add glipizide (safe in CKD)",
            "Hypoglycemia treatment: Rule of 15 - give 15g fast-acting carbs, recheck in 15 min",
            "Take 30 min before meals (onset 1-1.5 hours)",
            "Extended-release formulation (Glucotrol XL) available for once-daily dosing"
        ],
        "pageType": "drug"
    },
    {
        "id": "glyburide",
        "name": "Glyburide",
        "pharmacologicClass": "sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Binds to SUR1 (sulfonylurea receptor) on ATP-sensitive K+ channels in pancreatic beta cells → closes K+ channels → membrane depolarization → Ca²⁺ influx → insulin secretion. Most potent insulin secretagogue of the sulfonylureas.",
        "features": "Long-acting, higher hypoglycemia risk.",
        "pharmacokinetics": {
            "onset": "1 hour",
            "peak": "2-4 hours",
            "duration": "16-24 hours (longest of sulfonylureas)",
            "halfLife": "4-10 hours (longest half-life)",
            "metabolism": "Hepatic via CYP2C9 and CYP3A4 to ACTIVE metabolites",
            "excretion": "Renal (50%) and biliary (50%). Active metabolites excreted renally → accumulate in renal impairment"
        },
        "indications": [
            "Type 2 Diabetes"
        ],
        "clinicalChoice": "Generally AVOID - highest hypoglycemia risk of sulfonylureas due to long duration and active metabolites. Only use if: (1) normal renal function, (2) not elderly, (3) patient can't afford alternatives. Glipizide or glimepiride preferred.",
        "dosing": {
            "typical": "Start 1.25-2.5 mg once daily with breakfast. Titrate by 1.25-2.5 mg every 1-2 weeks. Max 20 mg/day (divided BID if >10 mg). Micronized formulation: start 0.75-1.5 mg.",
            "renal": "AVOID if eGFR <60. Contraindicated if eGFR <30 (active metabolites accumulate → prolonged hypoglycemia)",
            "hepatic": "Use caution in severe hepatic disease",
            "elderly": "AVOID in elderly (Beer's Criteria - high risk prolonged hypoglycemia). If must use, start 1.25 mg and monitor closely."
        },
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic ketoacidosis",
            "Renal impairment (eGFR <60 - relative, <30 - absolute)",
            "Elderly patients (Beer's Criteria)",
            "Pregnancy/breastfeeding",
            "Sulfa allergy"
        ],
        "sideEffects": {
            "common": [
                "Hypoglycemia (20-30% - HIGHEST risk of all sulfonylureas)",
                "Weight gain (2-5 kg)",
                "GI upset"
            ],
            "serious": [
                "Severe/prolonged hypoglycemia (can last 24+ hours due to long half-life and active metabolites)",
                "SIADH (more common than with other sulfonylureas)"
            ],
            "rare": [
                "Hemolytic anemia",
                "Cholestatic jaundice",
                "Disulfiram-like reaction with alcohol"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Sulfonamides: potentiate hypoglycemia",
                "Warfarin: displaced from protein binding → increased INR",
                "Beta-blockers: mask hypoglycemia, prolong hypoglycemia",
                "CYP2C9 inhibitors (fluconazole): increase glyburide levels",
                "Alcohol: severe disulfiram-like reaction, prolonged hypoglycemia"
            ],
            "drugDisease": [
                "Renal impairment: AVOID (active metabolites accumulate)",
                "Elderly: AVOID (prolonged hypoglycemia risk)",
                "G6PD deficiency: hemolytic anemia risk"
            ],
            "drugFood": [
                "Take with meals",
                "Alcohol: AVOID (severe reactions)"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose: very frequent monitoring (highest hypoglycemia risk)",
                "HbA1c every 3 months",
                "Renal function: check regularly (if eGFR drops, switch to glipizide)"
            ],
            "vitals": [
                "Weight"
            ],
            "symptoms": [
                "Hypoglycemia symptoms (especially prolonged hypoglycemia lasting >24 hours)",
                "SIADH symptoms"
            ],
            "frequency": "Daily glucose monitoring, especially first few weeks"
        },
        "pregnancy": {
            "category": "Category C (Category B for gestational diabetes in some guidelines)",
            "considerations": "Generally avoid in pregnancy. Insulin preferred. Some use in gestational DM but insulin is first choice."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'avoid in elderly and renal disease' or 'prolonged hypoglycemia'",
            "Beer's Criteria: Glyburide is POTENTIALLY INAPPROPRIATE in elderly (high hypoglycemia risk)",
            "HIGHEST hypoglycemia risk of all sulfonylureas due to: (1) long duration, (2) active metabolites, (3) renal excretion",
            "Active metabolites accumulate in renal impairment → can cause hypoglycemia for DAYS",
            "Brand names: Micronase, DiaBeta, Glynase (micronized)",
            "Mnemonic: 'GLYburide is GLY-bad' (avoid due to hypoglycemia)",
            "Classic vignette: Elderly T2DM patient on glyburide presents with confusion, diaphoresis → hypoglycemia",
            "Common exam trap: 'Elderly patient on glyburide with CKD' → SWITCH to glipizide or glimepiride",
            "If prolonged hypoglycemia occurs: may need D50 bolus + continuous D10 infusion for 24-48 hours",
            "Generally being phased out - glipizide and glimepiride preferred for safety"
        ],
        "pageType": "drug"
    },
    {
        "id": "glimepiride",
        "name": "Glimepiride",
        "pharmacologicClass": "sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Binds to SUR1 (sulfonylurea receptor) on ATP-sensitive K+ channels in pancreatic beta cells → closes K+ channels → depolarization → Ca²⁺ influx → insulin release. Also has some extrapancreatic effects on insulin sensitivity.",
        "features": "Once-daily dosing.",
        "pharmacokinetics": {
            "onset": "1 hour",
            "peak": "2-3 hours",
            "duration": "24 hours (once-daily dosing)",
            "halfLife": "5-9 hours",
            "metabolism": "Hepatic via CYP2C9 to mostly INACTIVE metabolites (one weakly active metabolite)",
            "excretion": "Renal (60%) and fecal (40%). Less accumulation in renal impairment than glyburide."
        },
        "indications": [
            "Type 2 Diabetes"
        ],
        "clinicalChoice": "Good choice when once-daily convenience needed. Similar safety to glipizide (safer than glyburide). Can use in mild-moderate CKD with dose reduction. Choose when patient compliance concern or prefer single daily dose.",
        "dosing": {
            "typical": "Start 1-2 mg once daily with breakfast or first main meal. Titrate by 1-2 mg every 1-2 weeks. Max 8 mg/day. MUST take with meal (not on empty stomach).",
            "renal": "Start 1 mg daily. Use caution if eGFR 30-60. Avoid if eGFR <30.",
            "hepatic": "Use caution in severe hepatic disease",
            "elderly": "Start 1 mg daily. Lower hypoglycemia risk than glyburide but still monitor closely."
        },
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic ketoacidosis",
            "Severe renal impairment (eGFR <30)",
            "Pregnancy/breastfeeding",
            "Sulfa allergy"
        ],
        "sideEffects": {
            "common": [
                "Hypoglycemia (10-20%, lower than glyburide)",
                "Weight gain (2-5 kg)",
                "Dizziness, headache"
            ],
            "serious": [
                "Severe hypoglycemia",
                "SIADH (rare)",
                "Cardiovascular events (some controversy)"
            ],
            "rare": [
                "Hemolytic anemia",
                "Hepatotoxicity"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Sulfonamides: potentiate effect",
                "CYP2C9 inhibitors (fluconazole): increase glimepiride levels",
                "Beta-blockers: mask hypoglycemia",
                "Alcohol: increased hypoglycemia, possible disulfiram reaction",
                "Rifampin: decreases glimepiride levels (CYP2C9 inducer)"
            ],
            "drugDisease": [
                "Renal impairment: dose reduction needed",
                "G6PD deficiency: hemolytic anemia risk"
            ],
            "drugFood": [
                "MUST take with breakfast or first main meal (not on empty stomach)",
                "Alcohol: avoid excessive use"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose monitoring",
                "HbA1c every 3 months",
                "Renal function periodically"
            ],
            "vitals": [
                "Weight"
            ],
            "symptoms": [
                "Hypoglycemia symptoms",
                "SIADH symptoms"
            ],
            "frequency": "Regular glucose monitoring, especially during titration"
        },
        "pregnancy": {
            "category": "Category C",
            "considerations": "Not recommended in pregnancy. Switch to insulin."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'once-daily dosing' or 'good compliance'",
            "Brand name: Amaryl",
            "Once-daily convenience → better adherence than BID glipizide",
            "Safer than glyburide (no active metabolites, shorter duration)",
            "MUST take with meal (not on empty stomach) - reduced absorption if fasted",
            "Possible cardiovascular benefit vs other sulfonylureas (some studies controversial)",
            "Classic vignette: T2DM patient with compliance issues (missed doses) → switch to once-daily glimepiride",
            "Intermediate choice: safer than glyburide, more convenient than glipizide",
            "May have some insulin-sensitizing effects beyond just insulin secretion"
        ],
        "pageType": "drug"
    },
    {
        "id": "pioglitazone",
        "name": "Pioglitazone",
        "pharmacologicClass": "thiazolidinediones",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "PPAR-γ (peroxisome proliferator-activated receptor gamma) agonist → activates PPAR-γ in adipocytes, skeletal muscle, and liver → increases expression of genes involved in glucose uptake and fatty acid metabolism → enhances insulin sensitivity without increasing insulin secretion.",
        "features": "Improves insulin sensitivity.",
        "pharmacokinetics": {
            "onset": "Gradual (weeks to months for full effect)",
            "peak": "Plasma levels peak at 2 hours, but clinical effect takes 6-12 weeks",
            "duration": "24 hours (once-daily dosing)",
            "halfLife": "3-7 hours (parent drug), 16-24 hours (total, including metabolites)",
            "metabolism": "Hepatic via CYP2C8 and CYP3A4 to active metabolites (M-III, M-IV)",
            "excretion": "Fecal (primarily) and renal"
        },
        "indications": [
            "Type 2 Diabetes (as monotherapy or combination therapy)"
        ],
        "clinicalChoice": "Third-line option for T2DM with significant insulin resistance who cannot tolerate other agents. Safer cardiovascular profile than rosiglitazone (removed from market). Consider if: (1) patient has insulin resistance, (2) no heart failure, (3) no bladder cancer history, (4) acceptable to wait 8-12 weeks for effect.",
        "dosing": {
            "typical": "Start 15-30 mg once daily. Can increase to max 45 mg once daily. Take with or without food. Allow 8-12 weeks to assess response before increasing dose.",
            "renal": "No dose adjustment needed (not renally excreted)",
            "hepatic": "Do not use if ALT >2.5x ULN. Monitor LFTs.",
            "elderly": "No specific dose adjustment but use caution (increased fracture and HF risk)"
        },
        "contraindications": [
            "Heart failure (NYHA Class III-IV)",
            "Active liver disease or ALT >2.5x ULN",
            "History of bladder cancer",
            "Active bladder cancer",
            "Macroscopic hematuria of unknown etiology"
        ],
        "sideEffects": {
            "common": [
                "Weight gain (3-5 kg average due to adipose accumulation and fluid retention)",
                "Edema (peripheral edema 5-10%)",
                "Upper respiratory tract infection",
                "Headache"
            ],
            "serious": [
                "Heart failure exacerbation (3-5% - BLACK BOX WARNING)",
                "Myocardial infarction (controversial, less than rosiglitazone)",
                "Bone fractures (especially in women - distal limb fractures)",
                "Hepatotoxicity (rare - check LFTs)",
                "Macular edema (rare vision complication)",
                "Bladder cancer (possible increased risk with prolonged use >1 year)"
            ],
            "rare": [
                "Hepatic failure"
            ]
        },
        "blackBoxWarnings": [
            "Congestive Heart Failure: TZDs cause or exacerbate heart failure. Contraindicated in NYHA Class III-IV. Monitor for signs/symptoms of HF (weight gain, dyspnea, edema). If HF develops, discontinue or dose reduce."
        ],
        "interactions": {
            "drugDrug": [
                "CYP2C8 inhibitors (gemfibrozil): increase pioglitazone levels 3-fold → reduce pioglitazone dose",
                "CYP2C8 inducers (rifampin): decrease pioglitazone levels",
                "Insulin or insulin secretagogues: increased risk of hypoglycemia when combined (reduce insulin dose)",
                "Oral contraceptives: may reduce contraceptive efficacy (use backup method)"
            ],
            "drugDisease": [
                "Heart failure: CONTRAINDICATED (causes fluid retention)",
                "Bladder cancer: CONTRAINDICATED if history or active cancer",
                "Liver disease: contraindicated if ALT >2.5x ULN",
                "Osteoporosis: avoid (increased fracture risk)"
            ],
            "drugFood": [
                "Can take with or without food"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose and HbA1c (allow 8-12 weeks for full effect)",
                "LFTs: baseline, then periodically (every 2-3 months for first year)",
                "Lipid panel (may improve HDL and triglycerides)",
                "Urinalysis if hematuria suspected (bladder cancer screening)"
            ],
            "vitals": [
                "Weight (expect 3-5 kg gain)",
                "Blood pressure (monitor for fluid retention effects)"
            ],
            "symptoms": [
                "Signs of heart failure: dyspnea, edema, rapid weight gain, fatigue",
                "Bone pain or fractures",
                "Vision changes (macular edema)",
                "Hematuria (bladder cancer concern)"
            ],
            "frequency": "Weight and HF symptoms at each visit. LFTs every 2-3 months year 1, then periodically."
        },
        "pregnancy": {
            "category": "Category C",
            "considerations": "Not recommended in pregnancy. Insulin is treatment of choice for diabetes in pregnancy. Discontinue before conception."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'contraindicated in heart failure' or 'takes 8-12 weeks for effect'",
            "Brand name: Actos",
            "BLACK BOX WARNING for heart failure - causes fluid retention via renal sodium reabsorption",
            "Rosiglitazone (Avandia) removed from market 2010 due to MI risk - pioglitazone has better CV profile",
            "Weight gain is ADIPOSE (subcutaneous), not muscle - redistributes fat from visceral → subcutaneous (paradoxically may improve metabolic profile)",
            "Bone fractures: increased risk in postmenopausal women (2-3x) - distal limbs (wrists, ankles), not hip",
            "Bladder cancer: possible association with use >1 year - avoid if history, monitor for hematuria",
            "SLOW onset: takes 6-12 weeks for full glucose-lowering effect (counsel patient about delayed response)",
            "No hypoglycemia as monotherapy (doesn't increase insulin secretion)",
            "Classic vignette: T2DM on metformin + sulfonylurea, HbA1c 8.5%, develops CHF → STOP pioglitazone",
            "Common wrong answer: 'Start pioglitazone in patient with CHF' - CONTRAINDICATED!",
            "Mnemonic: 'Pio-GLITZ-azone makes you GLITZy' (shiny = edema)"
        ],
        "pageType": "drug"
    },
    {
        "id": "rosiglitazone",
        "name": "Rosiglitazone",
        "pharmacologicClass": "thiazolidinediones",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "PPAR-γ agonist → increases insulin sensitivity in muscle and adipose tissue.",
        "features": "REMOVED FROM MARKET (2010) due to cardiovascular risk.",
        "pharmacokinetics": {
            "onset": "Weeks to months",
            "peak": "1 hour",
            "duration": "24 hours",
            "halfLife": "3-4 hours",
            "metabolism": "Hepatic via CYP2C8 and CYP2C9",
            "excretion": "Primarily renal (metabolites)"
        },
        "indications": [
            "Previously: Type 2 Diabetes (NOW WITHDRAWN FROM MARKET)"
        ],
        "clinicalChoice": "NOT AVAILABLE - removed from US market in 2010 due to increased risk of myocardial infarction and cardiovascular death. Historically was marketed as Avandia.",
        "dosing": {
            "typical": "Historical: 4-8 mg daily (NOT CURRENTLY USED)",
            "renal": "N/A - drug withdrawn",
            "hepatic": "N/A - drug withdrawn",
            "elderly": "N/A - drug withdrawn"
        },
        "contraindications": [
            "DRUG WITHDRAWN FROM MARKET",
            "Historical contraindications: Heart failure, liver disease"
        ],
        "sideEffects": {
            "common": [
                "Weight gain",
                "Edema",
                "Fluid retention"
            ],
            "serious": [
                "Myocardial infarction (increased risk - reason for market withdrawal)",
                "Cardiovascular death",
                "Heart failure",
                "Bone fractures"
            ],
            "rare": []
        },
        "blackBoxWarnings": [
            "REMOVED FROM MARKET: Increased risk of myocardial infarction and cardiovascular events led to FDA restriction in 2010 and subsequent market withdrawal."
        ],
        "interactions": {
            "drugDrug": [
                "Historical: CYP2C8/2C9 interactions similar to pioglitazone"
            ],
            "drugDisease": [],
            "drugFood": []
        },
        "monitoring": {
            "labs": [],
            "vitals": [],
            "symptoms": [],
            "frequency": "N/A - drug not available"
        },
        "pregnancy": {
            "category": "Category C (when it was available)",
            "considerations": "Drug no longer available."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'removed from market due to MI risk' or 'Avandia scandal'",
            "Brand name: Avandia",
            "CLASSIC board question: Why was rosiglitazone removed? Answer: Increased MI and cardiovascular death",
            "FDA initially restricted access in 2010, then completely withdrawn from US market",
            "Meta-analysis by Nissen (2007) showed 43% increased risk of MI → led to black box warning then removal",
            "Pioglitazone (Actos) remains on market - appears to have better CV safety profile",
            "Important historical example of post-market surveillance leading to drug withdrawal",
            "Compare: Pioglitazone = safer CV profile, Rosiglitazone = removed for CV risk",
            "Mnemonic: 'Rosi-GOES-tazone' (it's GONE from the market)",
            "Common exam question: Which TZD was removed and why? Rosiglitazone → MI risk"
        ],
        "pageType": "drug"
    },
    {
        "id": "sitagliptin",
        "name": "Sitagliptin",
        "pharmacologicClass": "dpp-4-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Selectively inhibits dipeptidyl peptidase-4 (DPP-4) enzyme → prevents degradation of incretin hormones (GLP-1 and GIP) → prolonged incretin activity → glucose-dependent insulin secretion from beta cells and suppression of glucagon from alpha cells. Glucose-dependent action minimizes hypoglycemia risk.",
        "features": "Weight neutral, low hypoglycemia risk. First DPP-4 inhibitor approved (2006).",
        "pharmacokinetics": {
            "onset": "Immediate DPP-4 inhibition; glucose effects within hours",
            "peak": "Plasma concentration peaks at 1-4 hours",
            "duration": "24 hours (once-daily dosing)",
            "halfLife": "12-14 hours",
            "metabolism": "Minimal metabolism (~80% excreted unchanged)",
            "excretion": "Primarily renal (87% unchanged in urine via active tubular secretion)"
        },
        "indications": [
            "Type 2 Diabetes (as monotherapy or combination with metformin, sulfonylurea, TZD, insulin)"
        ],
        "clinicalChoice": "Good second or third-line agent for T2DM. Choose sitagliptin when: (1) patient needs weight-neutral option (not losing weight like GLP-1, not gaining like insulin/SU/TZD), (2) low hypoglycemia risk desired, (3) oral medication preferred over injectable GLP-1. REQUIRES renal dose adjustment (disadvantage vs linagliptin in CKD).",
        "dosing": {
            "typical": "100 mg once daily, with or without food. Can take any time of day.",
            "renal": "CrCl ≥50: 100 mg daily. CrCl 30-49: 50 mg daily. CrCl <30 or ESRD: 25 mg daily. (Renal dose adjustment REQUIRED - major difference from linagliptin)",
            "hepatic": "No dose adjustment needed (not hepatically metabolized)",
            "elderly": "No dose adjustment for age alone, but monitor renal function (age-related decline)"
        },
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic ketoacidosis",
            "History of serious hypersensitivity to sitagliptin (anaphylaxis, angioedema, Stevens-Johnson syndrome)"
        ],
        "sideEffects": {
            "common": [
                "Upper respiratory tract infections (5-6%)",
                "Nasopharyngitis",
                "Headache (5%)"
            ],
            "serious": [
                "Pancreatitis (rare: 0.1%, but serious - discontinue if suspected)",
                "Severe hypersensitivity reactions (anaphylaxis, angioedema, Stevens-Johnson syndrome - rare)",
                "Severe arthralgia/joint pain (can be disabling, resolves on discontinuation)"
            ],
            "rare": [
                "Acute renal failure (rare, usually in setting of volume depletion)",
                "Bullous pemphigoid (rare autoimmune blistering disorder)"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Insulin or insulin secretagogues (sulfonylureas): increased hypoglycemia risk when combined (reduce insulin/SU dose)",
                "Digoxin: sitagliptin slightly increases digoxin levels (monitor, usually not clinically significant)",
                "P-glycoprotein inhibitors: may increase sitagliptin levels (not clinically significant)"
            ],
            "drugDisease": [
                "Renal impairment: dose adjustment required (see dosing section)",
                "Pancreatitis history: use with caution (may increase risk of recurrence)",
                "Heart failure: neutral to possible small benefit (TECOS trial showed CV safety)"
            ],
            "drugFood": [
                "Can take with or without food (no food interactions)"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose and HbA1c every 3 months",
                "Renal function (serum creatinine/eGFR) at baseline and periodically (for dose adjustment)",
                "Lipase/amylase if pancreatitis suspected (abdominal pain)"
            ],
            "vitals": [
                "Weight (should be stable - weight-neutral drug)"
            ],
            "symptoms": [
                "Abdominal pain (pancreatitis warning sign)",
                "Severe joint pain (arthralgia - discontinue if disabling)",
                "Skin reactions (rash, blistering)"
            ],
            "frequency": "Glucose monitoring as clinically indicated. Check renal function annually or more often if declining."
        },
        "pregnancy": {
            "category": "Category B (no human data)",
            "considerations": "Limited data in pregnancy. Insulin is preferred for diabetes in pregnancy. Use only if benefit outweighs risk."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'DPP-4 inhibitor, weight-neutral, low hypoglycemia risk'",
            "Brand name: Januvia (very commonly tested brand name)",
            "Suffix '-gliptin' identifies all DPP-4 inhibitors",
            "First-in-class DPP-4 inhibitor approved in 2006",
            "Mechanism: glucose-DEPENDENT insulin release → no hypoglycemia as monotherapy (unlike sulfonylureas)",
            "Weight-neutral: major advantage over insulin (gain), sulfonylureas (gain), TZDs (gain); but no weight loss like GLP-1",
            "REQUIRES renal dose adjustment (unlike linagliptin) - reduce to 50 mg if CrCl 30-49, 25 mg if CrCl <30",
            "Pancreatitis: RARE but classic board side effect. Discontinue if suspected (abdominal pain, elevated lipase)",
            "Severe arthralgia: FDA warning 2015 - can cause disabling joint pain (reversible on discontinuation)",
            "Classic vignette: T2DM on metformin, HbA1c 8.5%, wants to avoid weight gain and injections → add sitagliptin",
            "Common wrong answer: 'Use same dose in all patients' - NO, must adjust for renal function",
            "TECOS trial (2015): CV safety demonstrated (non-inferior to placebo) - safe in patients with CV disease",
            "Modest efficacy: reduces HbA1c by 0.5-0.8% (similar to DPP-4 class, less than metformin or GLP-1)",
            "Combination: often combined with metformin (Janumet) for convenience"
        ],
        "pageType": "drug"
    },
    {
        "id": "linagliptin",
        "name": "Linagliptin",
        "pharmacologicClass": "dpp-4-inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Selectively and reversibly inhibits dipeptidyl peptidase-4 (DPP-4) enzyme → prevents degradation of incretin hormones (GLP-1 and GIP) → prolonged incretin activity → glucose-dependent insulin secretion and reduced glucagon secretion. Glucose-dependent mechanism minimizes hypoglycemia risk.",
        "features": "UNIQUE non-renal elimination among DPP-4 inhibitors. NO dose adjustment needed in ANY stage of CKD.",
        "pharmacokinetics": {
            "onset": "Immediate DPP-4 inhibition; glucose effects within hours",
            "peak": "Plasma concentration peaks at 1.5 hours",
            "duration": "24 hours (once-daily dosing)",
            "halfLife": "~12 hours (effective half-life >100 hours due to DPP-4 binding)",
            "metabolism": "Not significantly metabolized (minimal CYP involvement)",
            "excretion": "Primarily enterohepatic elimination: 85% fecal (via bile), only 5% renal. UNIQUE among DPP-4 inhibitors."
        },
        "indications": [
            "Type 2 Diabetes (as monotherapy or combination with metformin, sulfonylurea, TZD, insulin)"
        ],
        "clinicalChoice": "PREFERRED DPP-4 inhibitor in chronic kidney disease (any stage, including ESRD and dialysis). Choose linagliptin when: (1) patient has renal impairment (no dose adjustment needed - major advantage), (2) need weight-neutral oral agent, (3) low hypoglycemia risk desired. Best DPP-4i for CKD patients.",
        "dosing": {
            "typical": "5 mg once daily, with or without food. Can take any time of day.",
            "renal": "NO dose adjustment needed for ANY degree of renal impairment, including ESRD and dialysis. (UNIQUE advantage - only DPP-4 inhibitor that doesn't require renal dosing)",
            "hepatic": "No dose adjustment needed (not hepatically metabolized)",
            "elderly": "No dose adjustment needed"
        },
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic ketoacidosis",
            "History of serious hypersensitivity to linagliptin (anaphylaxis, angioedema)"
        ],
        "sideEffects": {
            "common": [
                "Nasopharyngitis (5-7%)",
                "Upper respiratory tract infections",
                "Headache"
            ],
            "serious": [
                "Pancreatitis (rare: <0.1% - discontinue if suspected)",
                "Severe hypersensitivity reactions (anaphylaxis, angioedema, exfoliative skin conditions - rare)",
                "Severe arthralgia (disabling joint pain - FDA warning, reversible)"
            ],
            "rare": [
                "Bullous pemphigoid (rare autoimmune blistering disorder)",
                "Rhabdomyolysis (very rare)"
            ]
        },
        "blackBoxWarnings": [],
        "interactions": {
            "drugDrug": [
                "Insulin or insulin secretagogues (sulfonylureas): increased hypoglycemia risk when combined (reduce insulin/SU dose)",
                "Strong P-glycoprotein/CYP3A4 inducers (rifampin): decrease linagliptin levels by 40% (usually still effective)",
                "Ritonavir: increases linagliptin levels 2-fold (no dose adjustment needed, well-tolerated)"
            ],
            "drugDisease": [
                "Renal impairment: NO dose adjustment needed (safe in all stages of CKD, dialysis, ESRD)",
                "Pancreatitis history: use with caution",
                "Heart failure: CARMELINA trial showed CV safety (neutral effect)"
            ],
            "drugFood": [
                "Can take with or without food (no food interactions)"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose and HbA1c every 3 months",
                "Renal function for disease monitoring (NOT for dose adjustment - none needed)",
                "Lipase/amylase if pancreatitis suspected (abdominal pain)"
            ],
            "vitals": [
                "Weight (should be stable - weight-neutral)"
            ],
            "symptoms": [
                "Abdominal pain (pancreatitis warning)",
                "Severe joint pain (arthralgia - discontinue if disabling)",
                "Skin reactions (rash, blistering)"
            ],
            "frequency": "Glucose monitoring as clinically indicated. No special monitoring required."
        },
        "pregnancy": {
            "category": "Category B (no human data)",
            "considerations": "Limited data in pregnancy. Insulin is preferred for diabetes in pregnancy. Use only if benefit outweighs risk."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'DPP-4 inhibitor safe in CKD' or 'no renal dose adjustment'",
            "Brand name: Tradjenta",
            "UNIQUE among DPP-4 inhibitors: primarily non-renal excretion (85% fecal) → NO dose adjustment in ANY stage of CKD",
            "ONLY DPP-4 inhibitor approved for use in ESRD and dialysis without dose adjustment",
            "Preferred DPP-4 inhibitor in chronic kidney disease (sitagliptin, saxagliptin, alogliptin all require renal dose adjustment)",
            "Mechanism: glucose-DEPENDENT insulin release → no hypoglycemia as monotherapy",
            "Weight-neutral: advantage over insulin, sulfonylureas, TZDs (which cause weight gain)",
            "Pancreatitis: RARE but classic board complication - discontinue if abdominal pain/elevated lipase",
            "Severe arthralgia: FDA warning 2015 - can cause severe, disabling joint pain (reversible on discontinuation)",
            "Classic vignette: T2DM on metformin, HbA1c 8.5%, CKD stage 4 (eGFR 20) → add linagliptin (NO dose adjustment needed)",
            "Common wrong answer: 'Reduce dose in CKD' - NO! Linagliptin needs NO dose adjustment in renal disease",
            "CARMELINA trial (2019): CV safety demonstrated in high-risk patients with CKD",
            "Modest efficacy: reduces HbA1c by 0.5-0.8% (similar to DPP-4 class)",
            "Combination: often combined with metformin (Jentadueto) or empagliflozin (Glyxambi)",
            "Mnemonic: 'LinaGLIPtin Loves Low GFR' (safe in low GFR/kidney disease)"
        ],
        "pageType": "drug"
    },
    {
        "id": "exenatide",
        "name": "Exenatide",
        "pharmacologicClass": "glp-1-receptor-agonists",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Synthetic analog of exendin-4 (from Gila monster saliva). Acts as GLP-1 receptor agonist → stimulates glucose-dependent insulin secretion from pancreatic beta cells, suppresses inappropriately elevated glucagon secretion, slows gastric emptying, and reduces food intake via central satiety mechanisms.",
        "features": "First GLP-1 agonist approved (2005). Twice-daily injection. Derived from Gila monster venom.",
        "pharmacokinetics": {
            "onset": "Rapid insulin secretion within minutes of injection",
            "peak": "Plasma concentration peaks at 2 hours",
            "duration": "5-6 hours (short-acting, requires BID dosing)",
            "halfLife": "2.4 hours (short half-life necessitates twice-daily dosing)",
            "metabolism": "Proteolytic degradation (similar to endogenous peptides)",
            "excretion": "Primarily renal via glomerular filtration with subsequent proteolytic degradation"
        },
        "indications": [
            "Type 2 Diabetes (as adjunct to diet and exercise)"
        ],
        "clinicalChoice": "First-generation GLP-1 agonist, now largely replaced by once-daily (liraglutide) or once-weekly (dulaglutide, semaglutide) agents due to convenience. Consider if: (1) cost-sensitive (generic available), (2) patient accepts BID injections. Less commonly prescribed now due to inconvenient dosing and higher nausea vs newer agents.",
        "dosing": {
            "typical": "Start 5 mcg BID subcutaneously within 60 minutes before morning and evening meals (at least 6 hours apart). After 1 month, increase to 10 mcg BID if tolerated. Do NOT give after meals.",
            "renal": "Use caution if CrCl 30-50 mL/min. Avoid if CrCl <30 mL/min or ESRD (limited data, reports of renal impairment)",
            "hepatic": "No dose adjustment needed (not hepatically metabolized)",
            "elderly": "No specific dose adjustment, but use caution (may have decreased renal function)"
        },
        "contraindications": [
            "Type 1 Diabetes",
            "Diabetic ketoacidosis",
            "Personal or family history of medullary thyroid carcinoma (MTC)",
            "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
            "Severe gastrointestinal disease (gastroparesis, inflammatory bowel disease)",
            "End-stage renal disease (ESRD) or severe renal impairment (CrCl <30)"
        ],
        "sideEffects": {
            "common": [
                "Nausea (44% - most common, dose-related, usually improves over 4-8 weeks)",
                "Vomiting (13%)",
                "Diarrhea (13%)",
                "Headache",
                "Feeling jittery"
            ],
            "serious": [
                "Pancreatitis (rare: 0.1-0.2% - discontinue if suspected)",
                "Severe hypoglycemia (when combined with insulin or sulfonylureas)",
                "Acute renal failure (rare, usually in setting of volume depletion from vomiting/diarrhea)",
                "Thyroid C-cell tumors (medullary thyroid cancer - rodent data, BLACK BOX)"
            ],
            "rare": [
                "Anaphylaxis and angioedema",
                "Hemorrhagic or necrotizing pancreatitis"
            ]
        },
        "blackBoxWarnings": [
            "Risk of Thyroid C-Cell Tumors: Exenatide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors (medullary thyroid carcinoma) in rodents. Unknown if occurs in humans. Contraindicated in patients with personal or family history of MTC or MEN 2. Patient counseling about thyroid tumors required."
        ],
        "interactions": {
            "drugDrug": [
                "Insulin or sulfonylureas: increased hypoglycemia risk (reduce dose by 50%)",
                "Oral medications: delayed absorption due to delayed gastric emptying. Give oral meds at least 1 hour BEFORE exenatide.",
                "Warfarin: potential for increased INR (monitor closely when initiating)",
                "Digoxin: AUC decreased by 17% due to delayed absorption (give 1 hour before exenatide)"
            ],
            "drugDisease": [
                "Gastroparesis: CONTRAINDICATED (worsens delayed gastric emptying)",
                "Pancreatitis history: use with extreme caution or avoid (may increase recurrence risk)",
                "Renal impairment: avoid if CrCl <30 (reports of renal dysfunction)"
            ],
            "drugFood": [
                "MUST give within 60 minutes BEFORE meals (not after meals)",
                "At least 6 hours between BID doses"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose and HbA1c every 3 months (expect 0.8-1% reduction)",
                "Renal function (serum creatinine) - risk of acute renal failure in volume depletion",
                "Lipase/amylase if pancreatitis suspected (persistent severe abdominal pain)",
                "Calcitonin NOT routinely recommended (controversial)"
            ],
            "vitals": [
                "Weight (expect 2-3 kg weight loss over 6-12 months)",
                "Blood pressure (may have modest reduction)"
            ],
            "symptoms": [
                "GI symptoms (nausea, vomiting, diarrhea - usually transient)",
                "Abdominal pain (pancreatitis warning)",
                "Signs of dehydration (from GI side effects)",
                "Hypoglycemia symptoms (if on insulin/sulfonylureas)"
            ],
            "frequency": "Glucose monitoring as needed. Monitor renal function periodically, especially if volume depleted."
        },
        "pregnancy": {
            "category": "Category C",
            "considerations": "Limited human data. Insulin is preferred for diabetes in pregnancy. Discontinue exenatide if pregnancy occurs or is planned."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'derived from Gila monster venom' or 'BLACK BOX thyroid C-cell tumors'",
            "Brand name: Byetta (immediate-release BID) or Bydureon (extended-release weekly)",
            "First GLP-1 agonist approved (2005) - discovered from Gila monster (Heloderma suspectum) saliva",
            "Exendin-4 is 53% homologous to human GLP-1 but resistant to DPP-4 degradation (longer half-life than native GLP-1)",
            "BLACK BOX WARNING: Thyroid C-cell tumors (medullary thyroid cancer) in rodents - contraindicated in MTC/MEN 2",
            "Nausea is VERY common (44%) - worse than liraglutide. START LOW, titrate slowly. Usually improves over weeks.",
            "MUST give BEFORE meals (within 60 min) - NOT after meals. At least 6 hours between doses.",
            "Weight loss: Average 2-3 kg (less than liraglutide's 3-5 kg or semaglutide's 5-10 kg)",
            "BID dosing is major disadvantage - most patients prefer once-daily liraglutide or once-weekly agents",
            "No hypoglycemia as monotherapy (glucose-dependent mechanism) - but risk increases with insulin/sulfonylureas",
            "Pancreatitis: RARE (0.1-0.2%) but serious. Discontinue if persistent severe abdominal pain, nausea, vomiting.",
            "EXSCEL trial (2017): CV safety demonstrated (non-inferior) but no CV benefit (unlike liraglutide)",
            "Classic vignette: T2DM patient wants injectable for weight loss, cost-conscious → exenatide cheaper than liraglutide",
            "Common wrong answer: 'Give after meals' - NO! Must give BEFORE meals (30-60 min before)",
            "Renal caution: Reports of acute renal failure (usually with volume depletion from GI side effects)"
        ],
        "pageType": "drug"
    },
    {
        "id": "liraglutide",
        "name": "Liraglutide",
        "pharmacologicClass": "glp-1-receptor-agonists",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Long-acting human GLP-1 analog (97% homology to native GLP-1). Acts as GLP-1 receptor agonist → stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and promotes satiety. Modified by fatty acid chain to bind albumin, providing prolonged half-life and once-daily dosing.",
        "features": "Once-daily injection. PROVEN cardiovascular benefit (LEADER trial). Also approved for obesity.",
        "pharmacokinetics": {
            "onset": "Glucose-lowering effects within hours to days",
            "peak": "Plasma concentration peaks at 8-12 hours",
            "duration": "24 hours (once-daily dosing)",
            "halfLife": "13 hours (long half-life allows once-daily dosing)",
            "metabolism": "Proteolytic degradation (similar to endogenous peptides). Metabolized to smaller peptides and amino acids.",
            "excretion": "Primarily renal and fecal after proteolytic degradation"
        },
        "indications": [
            "Type 2 Diabetes (as adjunct to diet and exercise)",
            "Reduce risk of MACE in T2DM with established cardiovascular disease",
            "Chronic weight management (Saxenda brand, higher dose 3 mg)"
        ],
        "clinicalChoice": "PREFERRED GLP-1 agonist in patients with established ASCVD (atherosclerotic cardiovascular disease) due to PROVEN cardiovascular benefit. Choose liraglutide when: (1) patient has CVD (MI, stroke, PAD - reduces MACE by 13%), (2) need weight loss (3-5 kg average), (3) once-daily dosing acceptable (more convenient than exenatide BID). Most commonly prescribed GLP-1 agonist after semaglutide.",
        "dosing": {
            "typical": "Start 0.6 mg once daily subcutaneously for 1 week (to reduce nausea). Increase to 1.2 mg daily. Can further increase to 1.8 mg daily if needed for glycemic control. Give any time of day, with or without food. For obesity (Saxenda): up to 3 mg daily.",
            "renal": "No dose adjustment needed for mild-moderate CKD. Use caution in severe CKD (CrCl <30) - limited data. Avoid in ESRD.",
            "hepatic": "No dose adjustment needed (not hepatically metabolized)",
            "elderly": "No specific dose adjustment needed"
        },
        "contraindications": [
            "Personal or family history of medullary thyroid carcinoma (MTC)",
            "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
            "Type 1 Diabetes (not approved)",
            "Diabetic ketoacidosis",
            "Pregnancy (insulin preferred)"
        ],
        "sideEffects": {
            "common": [
                "Nausea (20-30% - most common, dose-related, usually transient)",
                "Diarrhea (17%)",
                "Vomiting (10%)",
                "Decreased appetite",
                "Headache",
                "Constipation"
            ],
            "serious": [
                "Pancreatitis (rare: 0.1% - discontinue if suspected)",
                "Hypoglycemia (when combined with insulin or sulfonylureas - reduce their dose)",
                "Acute gallbladder disease (cholelithiasis, cholecystitis - 1.5% vs 1% placebo)",
                "Acute kidney injury (rare, usually from volume depletion)",
                "Thyroid C-cell tumors (medullary thyroid cancer - rodent data, BLACK BOX)"
            ],
            "rare": [
                "Anaphylaxis and angioedema",
                "Increased heart rate (2-3 bpm average)",
                "Suicidal ideation (with high-dose obesity formulation)"
            ]
        },
        "blackBoxWarnings": [
            "Risk of Thyroid C-Cell Tumors: Liraglutide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors (medullary thyroid carcinoma) in rodents at clinically relevant exposures. Unknown if occurs in humans. Contraindicated in patients with personal or family history of MTC or MEN 2 syndrome. Counsel patients about potential risk and symptoms of thyroid tumors (neck mass, dysphagia, dyspnea, persistent hoarseness)."
        ],
        "interactions": {
            "drugDrug": [
                "Insulin or sulfonylureas: increased hypoglycemia risk (reduce insulin dose by 20-50%, reduce sulfonylurea dose)",
                "Oral medications: delayed absorption due to delayed gastric emptying. Give oral medications 1 hour before liraglutide if concerned about absorption.",
                "Warfarin: monitor INR when initiating (case reports of increased INR)"
            ],
            "drugDisease": [
                "Gastroparesis: contraindicated (worsens delayed gastric emptying)",
                "Pancreatitis history: use with extreme caution (may increase recurrence risk)",
                "Gallbladder disease: increased risk of cholelithiasis/cholecystitis (1.5%)",
                "Renal impairment: use caution in severe CKD (limited data)"
            ],
            "drugFood": [
                "Can take with or without food, at any time of day (flexible dosing)"
            ]
        },
        "monitoring": {
            "labs": [
                "Blood glucose and HbA1c every 3 months (expect 1-1.5% reduction)",
                "Renal function periodically (risk of acute kidney injury with volume depletion)",
                "Lipase/amylase if pancreatitis suspected (persistent severe abdominal pain)",
                "Calcitonin NOT routinely recommended (controversial, no proven benefit)"
            ],
            "vitals": [
                "Weight (expect 3-5 kg weight loss - therapeutic effect)",
                "Heart rate (may increase by 2-3 bpm)",
                "Blood pressure (may decrease modestly)"
            ],
            "symptoms": [
                "GI symptoms (nausea, vomiting, diarrhea - usually transient, improve over weeks)",
                "Abdominal pain (pancreatitis or gallbladder disease)",
                "Hypoglycemia symptoms (if on insulin/sulfonylureas)",
                "Thyroid mass, dysphagia, dyspnea (thyroid cancer concern)",
                "Mood changes (especially at high doses for obesity)"
            ],
            "frequency": "Glucose monitoring as clinically indicated. Monitor weight monthly initially."
        },
        "pregnancy": {
            "category": "Category C (Category X for obesity indication)",
            "considerations": "Limited human data. Insulin is preferred for diabetes in pregnancy. Discontinue liraglutide at least 2 weeks before planned pregnancy. For obesity: contraindicated in pregnancy."
        },
        "clinicalPearls": [
            "Step 1 buzzword: 'cardiovascular benefit proven' or 'reduces MACE in ASCVD'",
            "Brand names: Victoza (1.2-1.8 mg for diabetes), Saxenda (3 mg for obesity)",
            "LEADER trial (2016): REDUCED cardiovascular events by 13% (MACE: CV death, MI, stroke) in T2DM with ASCVD → PREFERRED GLP-1 in CVD",
            "97% homology to human GLP-1, but modified with fatty acid side chain → binds albumin → prolonged half-life (13 hr) → once-daily dosing",
            "BLACK BOX WARNING: Thyroid C-cell tumors (medullary thyroid cancer) in rodents - contraindicated in MTC/MEN 2",
            "Weight loss: Average 3-5 kg (MORE than exenatide 2-3 kg, but LESS than semaglutide 5-10 kg)",
            "Once-daily dosing at ANY time of day (major convenience advantage over exenatide BID)",
            "Better tolerated than exenatide: nausea 20-30% (vs 44% with exenatide). START LOW (0.6 mg), GO SLOW.",
            "No hypoglycemia as monotherapy (glucose-dependent insulin release) - but risk with insulin/sulfonylureas",
            "Pancreatitis: RARE (0.1%) but serious. Discontinue if persistent severe abdominal pain.",
            "Gallbladder disease: increased risk (1.5% vs 1%) - rapid weight loss promotes gallstone formation",
            "Also approved for obesity (Saxenda 3 mg) - one of few FDA-approved weight loss medications",
            "Classic vignette: T2DM patient with prior MI, BMI 34, on metformin, HbA1c 8.5% → add liraglutide (CV benefit + weight loss)",
            "Common wrong answer: 'Start at full dose' - NO! Start at 0.6 mg to minimize nausea, titrate weekly",
            "Cardioprotection mechanism: Not fully understood - may be via weight loss, BP reduction, anti-inflammatory effects, direct cardiac effects",
            "Mnemonic: 'Lira-GLUT-ide reduces GLUT-tony' (reduces weight/obesity)"
        ],
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

// Endocrine System - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "insulin",
        "name": "Insulin",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Replaces endogenous insulin, promotes glucose uptake and storage.",
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "Injection site reactions"
        ],
        "interactions": "Beta-blockers mask hypoglycemia symptoms.",
        "interactionDetails": "",
        "drugIds": [
            "insulin-lispro",
            "insulin-regular",
            "insulin-nph",
            "insulin-glargine"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Insulin is an anabolic peptide hormone essential for glucose homeostasis. Exogenous insulin is the cornerstone of Type 1 DM management and often required in Type 2 DM. Insulin preparations differ by onset, peak, and duration, allowing for physiologic mimicry of basal and prandial insulin secretion.",
            "clinicalApproach": [
                "Type 1 DM requires insulin (absolute deficiency) - use basal-bolus regimen",
                "Type 2 DM may require insulin when oral agents insufficient or in acute illness",
                "Basal insulin (long-acting): provides background glucose control between meals and overnight",
                "Bolus insulin (rapid/short-acting): covers mealtime glucose spikes",
                "Basal-bolus regimen: most physiologic, typically 50% basal + 50% bolus divided among meals",
                "Sliding scale alone is inferior to scheduled basal-bolus for inpatients",
                "NPH can be used as basal but has peak (risk of nocturnal hypoglycemia) - glargine/detemir preferred"
            ],
            "pharmacokinetics": {
                "absorption": "Subcutaneous injection into adipose tissue. Absorption varies by site (abdomen fastest, then arms, thighs, buttocks). Exercise and heat increase absorption.",
                "distribution": "Does not cross placenta in significant amounts (large peptide). Does not enter breast milk in significant amounts.",
                "metabolism": "Metabolized by insulinase (insulin-degrading enzyme) primarily in liver and kidney. Also muscle and adipose tissue.",
                "excretion": "Renal elimination of metabolites. Dose reduction may be needed in renal impairment (decreased clearance)."
            },
            "comparison": {
                "title": "Comparison of Insulin Preparations",
                "description": "Key differences in onset, peak, and duration guide clinical use",
                "content": `
RAPID-ACTING (Lispro, Aspart, Glulisine):
- Onset: 5-15 minutes
- Peak: 1-2 hours
- Duration: 3-5 hours
- Use: Mealtime bolus dosing (give right before meal), DKA correction
- Pearl: Can give immediately before or even after meal

SHORT-ACTING (Regular):
- Onset: 30 minutes
- Peak: 2-4 hours
- Duration: 5-8 hours
- Use: Mealtime coverage (give 30 min before meal), DKA treatment (IV formulation)
- Pearl: Only insulin that can be given IV

INTERMEDIATE-ACTING (NPH):
- Onset: 1-2 hours
- Peak: 4-8 hours (IMPORTANT: has a peak unlike long-acting)
- Duration: 10-18 hours
- Use: Basal insulin (typically twice daily), can mix with regular
- Pearl: Peak causes nocturnal hypoglycemia risk if given at bedtime

LONG-ACTING (Glargine, Detemir):
- Onset: 2-4 hours
- Peak: Minimal to no peak (flat profile)
- Duration: 20-24 hours (once daily dosing)
- Use: Basal insulin coverage
- Pearl: Cannot be mixed with other insulins, reduced hypoglycemia risk vs NPH

ULTRA-LONG (Degludec):
- Duration: >42 hours
- Use: Once-daily basal with very stable levels
- Pearl: Lowest hypoglycemia risk
`
            },
            "monitoring": [
                "Blood glucose: fingerstick before meals and at bedtime (or continuous glucose monitor)",
                "HbA1c every 3 months (reflects 3-month average glucose)",
                "Hypoglycemia symptoms: confusion, diaphoresis, tachycardia, tremor, seizures",
                "Weight (insulin causes weight gain)",
                "Injection site reactions (lipodystrophy from repeated use of same site)"
            ],
            "contraindications": [
                "Active hypoglycemia is the only absolute contraindication",
                "Use caution in renal/hepatic impairment (adjust doses)",
                "Hypokalemia risk (insulin shifts K+ intracellularly) - monitor K+"
            ],
            "clinicalPearls": [
                "DKA treatment: ALWAYS use regular insulin IV (only insulin that can be given IV). Start with bolus 0.1 units/kg, then 0.1 units/kg/hr infusion",
                "Hypoglycemia treatment: Rule of 15 - give 15g carbs, recheck in 15 minutes. If severe/unconscious: IV dextrose or IM glucagon",
                "Beta-blockers mask hypoglycemia symptoms (except diaphoresis) - counsel patients",
                "Insulin needs increase during illness/infection (stress response) - do NOT stop insulin",
                "Somogyi effect: nocturnal hypoglycemia → rebound hyperglycemia in AM (decrease bedtime insulin)",
                "Dawn phenomenon: early AM hyperglycemia from GH/cortisol surge (increase basal insulin or give at bedtime)",
                "Mnemonic for DKA vs HHS: DKA = Kussmaul breathing, Ketones, young (Type 1). HHS = Hyperosmolar, HyperNatremia, old (Type 2)",
                "Step 1 buzzword: 'fruity breath' = ketones in DKA",
                "Insulin + glucose + calcium = treatment for hyperkalemia (shifts K+ into cells)"
            ]
        }
    },
    {
        "id": "biguanides",
        "name": "Biguanides",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Decrease hepatic glucose production, increase insulin sensitivity.",
        "sideEffects": [
            "GI upset",
            "Lactic acidosis (rare)",
            "B12 deficiency"
        ],
        "interactions": "Contrast agents increase lactic acidosis risk.",
        "interactionDetails": "",
        "drugIds": [
            "metformin"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Metformin is the only biguanide available in the US and is the first-line medication for Type 2 DM. It works primarily by suppressing hepatic gluconeogenesis without stimulating insulin secretion, making it 'euglycemic' rather than hypoglycemic. Weight-neutral or promotes modest weight loss, making it ideal for obese diabetic patients.",
            "clinicalApproach": [
                "FIRST-LINE therapy for Type 2 DM (unless contraindicated)",
                "Does NOT cause hypoglycemia when used alone (insulin-independent mechanism)",
                "Weight-neutral or causes modest weight loss (2-3 kg) - major advantage over sulfonylureas/insulin",
                "Can be combined with any other diabetes medication",
                "Also used off-label for PCOS, prediabetes, antipsychotic-induced weight gain",
                "Start with low dose and titrate slowly to minimize GI side effects",
                "Hold before contrast studies and resume 48 hours after if renal function stable"
            ],
            "pharmacokinetics": {
                "absorption": "Oral bioavailability 50-60%. Absorbed in small intestine. Food decreases rate but not extent. Extended-release formulation available for once-daily dosing.",
                "distribution": "Does not bind to plasma proteins. Distributes to erythrocytes and tissues. Does not cross BBB significantly.",
                "metabolism": "NOT metabolized - excreted unchanged. This is unique and important.",
                "excretion": "100% renal excretion (unchanged drug). Adjust dose if eGFR <45, discontinue if eGFR <30. Half-life 4-8 hours."
            },
            "monitoring": [
                "Blood glucose (fasting and HbA1c every 3 months)",
                "Renal function (eGFR) - at baseline and annually (more frequently if impaired)",
                "Vitamin B12 levels - annually (long-term use causes malabsorption)",
                "GI symptoms (nausea, diarrhea - usually transient)",
                "No need for routine lactate monitoring unless high-risk patient"
            ],
            "contraindications": [
                "eGFR <30 mL/min/1.73m² (absolute contraindication - lactic acidosis risk)",
                "Acute or chronic metabolic acidosis (including DKA)",
                "Hypoxic states: shock, sepsis, acute MI, heart failure requiring pharmacologic support",
                "Severe hepatic disease (decreased lactate clearance)",
                "Immediately before/during iodinated contrast procedures (hold 48 hours, check renal function before restarting)"
            ],
            "clinicalPearls": [
                "Step 1 buzzword: 'first-line for Type 2 DM' or 'weight loss in diabetic patient'",
                "Mechanism mnemonic: 'Metformin Makes hepatic glucose production Minimal'",
                "ONLY diabetes drug that reduces cardiovascular mortality (UKPDS trial)",
                "Does NOT cause hypoglycemia as monotherapy - safe for patients with variable meal schedule",
                "Lactic acidosis is RARE (<1 in 100,000) but serious - risk factors: renal dysfunction, hypoxia, sepsis, contrast dye",
                "GI side effects (diarrhea, nausea) occur in 30% - usually resolve in 2-4 weeks. Take with food and start low dose.",
                "B12 deficiency develops in 10-30% with long-term use - check annually",
                "NOT metabolized by liver - safe in hepatic dysfunction (unlike sulfonylureas)",
                "Classic vignette: Obese Type 2 DM patient, HbA1c 8.5% on lifestyle modification → start metformin",
                "Common wrong answer: 'Start insulin' - metformin is always first unless contraindicated"
            ]
        }
    },
    {
        "id": "sulfonylureas",
        "name": "Sulfonylureas",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Stimulate insulin release from pancreatic beta cells.",
        "sideEffects": [
            "Hypoglycemia",
            "Weight gain",
            "SIADH"
        ],
        "interactions": "Sulfonamides potentiate effects.",
        "interactionDetails": "",
        "drugIds": [
            "glipizide",
            "glyburide",
            "glimepiride"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Sulfonylureas are 'insulin secretagogues' - they stimulate pancreatic beta cells to release insulin regardless of glucose level. Second-line therapy for Type 2 DM (after metformin) or first-line if metformin contraindicated. Divided into 1st generation (rarely used) and 2nd generation (glipizide, glyburide, glimepiride). Major limitation: hypoglycemia risk and weight gain.",
            "clinicalApproach": [
                "Second-line therapy for Type 2 DM (add to metformin if HbA1c not at goal)",
                "Can be used as monotherapy if metformin contraindicated (rare)",
                "Require functioning pancreatic beta cells - NOT effective in Type 1 DM",
                "CAUSE hypoglycemia (unlike metformin) - educate patients on symptoms and treatment",
                "Cause weight gain (2-5 kg average) - less desirable in obese diabetics",
                "Work best when taken 30 minutes before meals (stimulate mealtime insulin)",
                "2nd generation (glipizide, glyburide, glimepiride) preferred over 1st gen (chlorpropamide, tolbutamide)",
                "Between 2nd gen drugs: glipizide and glimepiride preferred over glyburide (lower hypoglycemia risk)"
            ],
            "pharmacokinetics": {
                "absorption": "Well absorbed orally. Take 30 minutes before meals for optimal effect.",
                "distribution": "Highly protein-bound (90-99%). Displaced by other highly protein-bound drugs.",
                "metabolism": "Hepatic metabolism via CYP2C9 (glipizide, glyburide) or CYP2C9 (glimepiride). Active metabolites for some (glyburide).",
                "excretion": "Renal excretion of metabolites. Glyburide has active metabolites excreted renally - avoid in renal impairment. Glipizide safer in renal disease."
            },
            "comparison": {
                "title": "Comparison of 2nd Generation Sulfonylureas",
                "description": "Choose based on renal function, hypoglycemia risk, and dosing convenience",
                "content": `
GLIPIZIDE (Glucotrol):
- Half-life: 2-4 hours (shortest)
- Dosing: 1-2 times daily, before meals
- Metabolism: Hepatic → inactive metabolites
- Renal adjustment: Safest in renal impairment (no active metabolites)
- Hypoglycemia risk: Lower than glyburide
- Use: Preferred in elderly and renally impaired

GLYBURIDE (Micronase, DiaBeta):
- Half-life: 4-10 hours (longest)
- Dosing: 1-2 times daily, with meals
- Metabolism: Hepatic → ACTIVE metabolites
- Renal adjustment: AVOID in renal impairment (active metabolites accumulate)
- Hypoglycemia risk: HIGHEST of sulfonylureas
- Use: Avoid in elderly, avoid in CKD

GLIMEPIRIDE (Amaryl):
- Half-life: 5-9 hours
- Dosing: Once daily, with breakfast
- Metabolism: Hepatic → mostly inactive metabolites
- Renal adjustment: Use caution, dose reduction may be needed
- Hypoglycemia risk: Lower than glyburide, similar to glipizide
- Use: Convenient once-daily dosing
`
            },
            "monitoring": [
                "Blood glucose: frequent fingersticks, especially when starting or adjusting dose",
                "HbA1c every 3 months",
                "Signs/symptoms of hypoglycemia (teach patient recognition and treatment)",
                "Weight (expect weight gain 2-5 kg)",
                "Renal function if using glyburide (avoid in CKD)"
            ],
            "contraindications": [
                "Type 1 Diabetes (no beta cells to stimulate)",
                "Diabetic ketoacidosis",
                "Severe hepatic disease (decreased metabolism)",
                "Sulfa allergy (cross-reactivity possible but rare)",
                "Pregnancy (teratogenic, use insulin instead)"
            ],
            "clinicalPearls": [
                "Mechanism mnemonic: 'SURe makes insulin' (SUR = sulfonylurea receptor on beta cells)",
                "Suffix: -ide (glipizIDE, glyburIDE, glimepiRIDE)",
                "Step 1 buzzword: 'hypoglycemia' or 'weight gain in diabetic'",
                "Bind to SUR1 (sulfonylurea receptor) on ATP-sensitive K+ channels → closes K+ channel → depolarization → Ca²⁺ influx → insulin release",
                "Major side effect: Hypoglycemia (10-20% of patients) - risk factors: elderly, renal impairment, skipped meals, alcohol",
                "SIADH: rare but classic board-tested side effect (especially chlorpropamide, less with 2nd gen)",
                "Disulfiram-like reaction with alcohol (especially chlorpropamide)",
                "Beta cell burnout: chronic use may exhaust beta cells (secondary failure in 5-10% per year)",
                "Glipizide vs Glyburide: 'GlipiZIDE is Zafe' (safer in renal disease, lower hypoglycemia)",
                "Classic vignette: Type 2 DM on metformin, HbA1c still 8.5% → add sulfonylurea",
                "Common wrong answer: 'Switch to sulfonylurea' - usually ADD to metformin, not switch"
            ]
        }
    },
    {
        "id": "meglitinides",
        "name": "Meglitinides",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Non-sulfonylurea insulin secretagogues. Bind to SUR1 receptor (different site than sulfonylureas) on pancreatic beta cells, stimulating insulin release.",
        "sideEffects": [
            "Hypoglycemia (less than sulfonylureas)",
            "Weight gain (1-2 kg, less than sulfonylureas)",
            "Upper respiratory infection"
        ],
        "interactions": "CYP3A4 and CYP2C8 interactions. Gemfibrozil significantly increases repaglinide levels.",
        "interactionDetails": "",
        "drugIds": [
            "repaglinide",
            "nateglinide"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Meglitinides (also called glinides) are rapid-acting, short-duration insulin secretagogues chemically distinct from sulfonylureas. They stimulate prandial (mealtime) insulin release, targeting postprandial hyperglycemia. Key advantage: shorter half-life than sulfonylureas = lower hypoglycemia risk. Key disadvantage: must be taken with EACH meal (3x daily) = poor adherence. Less commonly used now - largely replaced by DPP-4 inhibitors and GLP-1 agonists for similar glycemic control with better safety and convenience.",
            "clinicalApproach": [
                "Target postprandial (after-meal) hyperglycemia specifically",
                "MUST be taken immediately before each meal (0-30 min) - if skip meal, skip dose",
                "Faster onset and shorter duration than sulfonylureas (rapid in, rapid out)",
                "Lower hypoglycemia risk than sulfonylureas due to shorter duration",
                "Can use in mild-moderate renal impairment (unlike some sulfonylureas)",
                "Alternative for patients with sulfa allergy (not sulfa-based, unlike sulfonylureas)",
                "Rarely used first-line - typically third-line after metformin ± other agents",
                "Poor adherence due to 3x daily dosing with meals"
            ],
            "pharmacokinetics": {
                "absorption": "Rapid oral absorption. MUST take immediately before meals (0-30 minutes).",
                "distribution": "Highly protein-bound (>98%). Limited distribution.",
                "metabolism": "Hepatic metabolism - Repaglinide via CYP3A4 and CYP2C8, Nateglinide via CYP2C9 and CYP3A4.",
                "excretion": "Primarily biliary/fecal (repaglinide 90%, nateglinide 83%). Minimal renal excretion allows use in renal impairment."
            },
            "comparison": {
                "title": "Comparison of Meglitinides",
                "description": "Key differences in potency, metabolism, and clinical use",
                "content": `
REPAGLINIDE (Prandin):
- Potency: More potent (lower dose needed)
- Dosing: 0.5-4 mg with each meal (3x daily)
- Half-life: 1 hour (very short)
- Metabolism: CYP3A4 and CYP2C8 (major gemfibrozil interaction!)
- Efficacy: Reduces HbA1c by 1-1.5% (similar to sulfonylureas)
- Use: Can use in renal impairment (hepatic metabolism)
- Drug interactions: AVOID with gemfibrozil (8x increase in repaglinide levels → severe hypoglycemia)

NATEGLINIDE (Starlix):
- Potency: Less potent (higher dose needed)
- Dosing: 60-120 mg with each meal (3x daily)
- Half-life: 1.5 hours (very short)
- Metabolism: CYP2C9 (70%) and CYP3A4
- Efficacy: Reduces HbA1c by 0.5-1% (less effective than repaglinide)
- Use: Can use in renal impairment
- Drug interactions: Fewer interactions than repaglinide
`
            },
            "monitoring": [
                "Blood glucose: pre-meal and 2-hour postprandial (targeting postprandial spikes)",
                "HbA1c every 3 months (expect 0.5-1.5% reduction depending on agent)",
                "Signs/symptoms of hypoglycemia (less common than sulfonylureas)",
                "Weight (expect modest 1-2 kg gain)",
                "Adherence assessment (3x daily dosing is burden)"
            ],
            "contraindications": [
                "Type 1 Diabetes (no beta cells to stimulate)",
                "Diabetic ketoacidosis",
                "Severe hepatic impairment (hepatic metabolism)",
                "Gemfibrozil use (for repaglinide - severe interaction)"
            ],
            "clinicalPearls": [
                "Suffix: '-glinide' identifies all meglitinides (rePAGLinide, naTEGLinide)",
                "Step 1 buzzword: 'rapid-acting insulin secretagogue' or 'take with meals'",
                "Mechanism: Bind to SUR1 receptor (SAME target as sulfonylureas) but DIFFERENT binding site → rapid, short-duration insulin release",
                "Key advantage over sulfonylureas: Shorter duration → LOWER hypoglycemia risk, can skip dose if skip meal",
                "Key disadvantage: Must take 3x daily with meals → poor adherence, less convenient than sulfonylureas",
                "Mnemonic: 'Meglitinides are GLINDIN' (glinide suffix, taken with meals like eating/grindin')",
                "CRITICAL: If skip meal, skip dose! (unlike sulfonylureas which are taken once/twice daily regardless of meals)",
                "Alternative for sulfa allergy patients (not sulfonylurea-based, different chemical class)",
                "Can use in renal impairment (primarily hepatic/biliary excretion) - advantage over glyburide",
                "Repaglinide + gemfibrozil = SEVERE interaction (8x increase in repaglinide levels → prolonged severe hypoglycemia) - AVOID",
                "Less commonly used now - DPP-4 inhibitors offer similar postprandial control without hypoglycemia, once-daily dosing",
                "Classic vignette: T2DM patient with postprandial hyperglycemia, normal fasting glucose, sulfa allergy → meglitinide",
                "Comparison to sulfonylureas: Faster onset (30 min vs 1-2 hr), shorter duration (4 hr vs 12-24 hr), lower hypoglycemia risk"
            ]
        }
    },
    {
        "id": "thiazolidinediones",
        "name": "Thiazolidinediones",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "PPAR-γ agonists, increase insulin sensitivity in muscle and fat.",
        "sideEffects": [
            "Weight gain",
            "Fluid retention",
            "Heart failure",
            "Bone fractures"
        ],
        "interactions": "CYP2C8 inhibitors increase levels.",
        "interactionDetails": "",
        "drugIds": [
            "pioglitazone",
            "rosiglitazone"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "TZDs (also called glitazones) are PPAR-γ (peroxisome proliferator-activated receptor gamma) agonists that increase insulin sensitivity in muscle and adipose tissue. Third-line therapy for Type 2 DM. Rosiglitazone was removed from market due to cardiovascular concerns; pioglitazone remains available. Major limitations: weight gain, fluid retention, heart failure risk, and bone fractures.",
            "clinicalApproach": [
                "Third-line therapy (after metformin + sulfonylurea or other combinations)",
                "Work by increasing insulin SENSITIVITY (not secretion) - 'insulin sensitizers'",
                "Takes 6-12 weeks for full glucose-lowering effect (slow onset)",
                "Do NOT cause hypoglycemia when used alone",
                "Reserved for patients with significant insulin resistance who can't tolerate other agents",
                "CONTRAINDICATED in heart failure (NYHA Class III-IV) - causes fluid retention",
                "Avoid in patients with osteoporosis or fracture risk (especially postmenopausal women)",
                "Less commonly used now due to side effect profile - safer alternatives available"
            ],
            "pharmacokinetics": {
                "absorption": "Well absorbed orally. Can take with or without food.",
                "distribution": "Highly protein-bound (>99%). Extensive tissue distribution.",
                "metabolism": "Hepatic metabolism via CYP2C8 (pioglitazone) and CYP2C9. Active metabolites contribute to effect.",
                "excretion": "Primarily fecal (pioglitazone). Long half-life allows once-daily dosing."
            },
            "monitoring": [
                "Blood glucose and HbA1c (may take 8-12 weeks to see full effect)",
                "LFTs at baseline and periodically (risk of hepatotoxicity, though rare)",
                "Weight (expect 3-5 kg weight gain)",
                "Signs/symptoms of heart failure (edema, dyspnea, weight gain)",
                "Bone health in at-risk patients (postmenopausal women)",
                "Macular edema (rare but check vision if complaints)"
            ],
            "contraindications": [
                "Heart failure (NYHA Class III-IV) - ABSOLUTE contraindication",
                "Active liver disease or elevated LFTs (>2.5x ULN)",
                "History of bladder cancer (pioglitazone specific)",
                "Pregnancy/breastfeeding"
            ],
            "clinicalPearls": [
                "Suffix: -glitazone (pioGLITAZONE, rosiGLITAZONE [removed])",
                "Mechanism mnemonic: 'PPAR-γ agonist = Promotes fat Production And Redistribution'",
                "Step 1 buzzword: 'contraindicated in heart failure' or 'fluid retention and edema'",
                "Rosiglitazone (Avandia) removed from US market in 2010 due to MI/cardiovascular risk",
                "Weight gain is ADIPOSE tissue (subcutaneous), not muscle - redistributes fat from visceral to subcutaneous",
                "Fluid retention mechanism: increased renal sodium reabsorption in collecting duct",
                "Heart failure: TZDs cause fluid retention → precipitate/worsen HF (BLACK BOX WARNING)",
                "Bone fractures: increased fracture risk in women (distal limbs) - uncertain mechanism, possibly osteoblast inhibition",
                "Classic vignette: Type 2 DM on metformin + sulfonylurea, still HbA1c 8.5%, consider TZD vs other options",
                "Common wrong answer: 'Give TZD to patient with CHF' - CONTRAINDICATED!"
            ]
        }
    },
    {
        "id": "dpp-4-inhibitors",
        "name": "DPP-4 Inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit dipeptidyl peptidase-4, increase incretin levels.",
        "sideEffects": [
            "Upper respiratory infections",
            "Headache",
            "Pancreatitis (rare)"
        ],
        "interactions": "Few significant interactions.",
        "interactionDetails": "",
        "drugIds": [
            "sitagliptin",
            "linagliptin"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "DPP-4 inhibitors (also called gliptins) work by inhibiting the enzyme dipeptidyl peptidase-4, which normally degrades incretin hormones (GLP-1 and GIP). By preventing incretin breakdown, these drugs enhance glucose-dependent insulin secretion and suppress glucagon. Second or third-line therapy for Type 2 DM. Well-tolerated with favorable side effect profile - no hypoglycemia, weight-neutral, oral administration.",
            "clinicalApproach": [
                "Second or third-line therapy (add to metformin or metformin + sulfonylurea)",
                "Glucose-DEPENDENT insulin release - no hypoglycemia as monotherapy",
                "Weight-neutral (unlike sulfonylureas, TZDs, insulin)",
                "Oral administration (unlike GLP-1 agonists which are injectable)",
                "Mild to moderate efficacy (HbA1c reduction 0.5-0.8%)",
                "Generally well-tolerated with few drug interactions",
                "Good option for patients concerned about hypoglycemia or weight gain",
                "Choose between drugs based on renal function: linagliptin safe in CKD (no adjustment), sitagliptin requires adjustment"
            ],
            "pharmacokinetics": {
                "absorption": "Oral, well absorbed. Can take with or without food.",
                "distribution": "Variable protein binding depending on agent.",
                "metabolism": "Sitagliptin: minimally metabolized (79% unchanged). Linagliptin: primarily non-renal elimination.",
                "excretion": "Sitagliptin: primarily renal (adjust dose in CKD). Linagliptin: primarily fecal/biliary (no adjustment in CKD)."
            },
            "comparison": {
                "title": "Comparison of DPP-4 Inhibitors",
                "description": "Choose based primarily on renal function",
                "content": `
SITAGLIPTIN (Januvia):
- Half-life: 12 hours
- Dosing: Once daily
- Excretion: Renal (79% unchanged)
- Renal adjustment: YES - reduce dose if eGFR <50
- Use: First-line DPP-4i if normal renal function

LINAGLIPTIN (Tradjenta):
- Half-life: >100 hours (extensive tissue binding)
- Dosing: Once daily
- Excretion: Primarily fecal/biliary (non-renal)
- Renal adjustment: NO - safe at all levels of CKD
- Use: Preferred DPP-4i in chronic kidney disease
`
            },
            "monitoring": [
                "Blood glucose and HbA1c every 3 months",
                "Renal function (especially for sitagliptin - adjust dose if eGFR declines)",
                "Signs/symptoms of pancreatitis (rare but serious - abdominal pain)",
                "Joint pain (rare - arthralgia reported)"
            ],
            "contraindications": [
                "Type 1 Diabetes (not effective without endogenous insulin)",
                "History of pancreatitis (relative contraindication - use caution)"
            ],
            "clinicalPearls": [
                "Suffix: -gliptin (sitaGLIPTIN, linaGLIPTIN, saxagliptin, alogliptin)",
                "Mechanism mnemonic: 'DPP-4 inhibitors preserve Incretins' (GLP-1, GIP)",
                "Step 1 buzzword: 'weight-neutral' or 'no hypoglycemia as monotherapy'",
                "Incretin effect: GLP-1 and GIP enhance GLUCOSE-DEPENDENT insulin secretion → no hypo when glucose normal",
                "Key advantage: Oral (vs injectable GLP-1 agonists), weight-neutral (vs sulfonylureas/TZDs/insulin)",
                "Pancreatitis: rare (0.1%) but FDA warning - discontinue if suspected",
                "Linagliptin vs Sitagliptin: 'LinaGLIPTIN = liver/gut excretion' (safe in CKD, no adjustment)",
                "Classic vignette: T2DM on metformin, eGFR 25, add DPP-4i → choose linagliptin (safe in CKD)",
                "Combination products: Janumet (sitagliptin + metformin), common in practice"
            ]
        }
    },
    {
        "id": "glp-1-receptor-agonists",
        "name": "GLP-1 Receptor Agonists",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Glucagon-like peptide-1 (GLP-1) receptor agonists that mimic endogenous incretin hormone GLP-1. Stimulate glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying, and promote satiety.",
        "sideEffects": [
            "Nausea (40-50%, dose-related)",
            "Vomiting",
            "Diarrhea",
            "Pancreatitis risk (rare)",
            "Thyroid C-cell tumors (BLACK BOX - rodent data)"
        ],
        "interactions": "Delay gastric emptying, affect oral drug absorption. Give other oral meds 1 hour before GLP-1 agonist.",
        "interactionDetails": "",
        "drugIds": [
            "exenatide",
            "liraglutide"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "GLP-1 receptor agonists are injectable diabetes medications that mimic the effects of glucagon-like peptide-1 (GLP-1), an incretin hormone naturally released by the gut in response to food. They provide glucose-dependent insulin secretion (low hypoglycemia risk), promote weight loss (3-6 kg average), and have proven cardiovascular benefits. Considered second-line after metformin, especially in patients with obesity or established cardiovascular disease.",
            "clinicalApproach": [
                "Second-line for T2DM after metformin, or first-line if metformin contraindicated",
                "PREFERRED in patients with: (1) obesity (promotes 3-6 kg weight loss), (2) established ASCVD (CV benefits proven), (3) need to avoid weight gain",
                "Injectable route (subcutaneous) - barrier for some patients, but increasingly accepted",
                "Newer weekly formulations (semaglutide, dulaglutide) improve adherence vs daily injections",
                "Oral semaglutide now available (first oral GLP-1 agonist)",
                "Do NOT use in patients with: personal/family history of medullary thyroid cancer, MEN 2 syndrome, gastroparesis",
                "Superior to DPP-4 inhibitors for glucose lowering and weight loss, but more expensive and injectable"
            ],
            "pharmacokinetics": {
                "absorption": "Subcutaneous injection. Absorption rate varies by drug (exenatide faster, liraglutide slower). Oral semaglutide requires special absorption enhancer.",
                "distribution": "Low volume of distribution. Does not cross blood-brain barrier significantly despite satiety effects (mediated via vagal afferents).",
                "metabolism": "Proteolytic degradation (similar to endogenous peptides). Minimal CYP metabolism.",
                "excretion": "Primarily renal after proteolytic degradation. Dose adjustment generally not needed in mild-moderate renal impairment."
            },
            "comparison": {
                "title": "Comparison of GLP-1 Receptor Agonists",
                "description": "Key differences in dosing frequency, origin, and clinical indications",
                "content": `
EXENATIDE (Byetta):
- Dosing: Twice daily (BID) injection
- Origin: Synthetic exendin-4 (from Gila monster saliva)
- Half-life: 2-4 hours (short-acting)
- Use case: Less convenient dosing, first-generation, less commonly used now
- Weight loss: 2-3 kg average
- CV data: Neutral (EXSCEL trial)

LIRAGLUTIDE (Victoza):
- Dosing: Once daily injection
- Origin: Human GLP-1 analog (97% homology)
- Half-life: 13 hours
- Use case: PREFERRED in patients with established ASCVD (CV benefit proven)
- Weight loss: 3-5 kg average
- CV data: REDUCES CV events (LEADER trial: ↓ MACE by 13%)
- Also approved for obesity (Saxenda brand, 3 mg dose)

NEWER AGENTS (not detailed here):
- Semaglutide: Once-weekly injection OR oral (first oral GLP-1), superior weight loss (5-10 kg)
- Dulaglutide: Once-weekly injection, convenient
- Exenatide ER: Once-weekly injection
`
            },
            "monitoring": [
                "Blood glucose and HbA1c every 3 months (expect 1-1.5% reduction in HbA1c)",
                "Weight (monitor for therapeutic weight loss of 3-6 kg)",
                "Lipase/amylase if pancreatitis suspected (persistent severe abdominal pain)",
                "Renal function in patients with renal impairment (some risk of worsening in severe CKD)",
                "Calcitonin levels NOT routinely recommended (controversial, no proven benefit)"
            ],
            "contraindications": [
                "Personal or family history of medullary thyroid carcinoma (MTC)",
                "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
                "Gastroparesis or severe GI disease",
                "Type 1 diabetes (not approved, though studied)",
                "Diabetic ketoacidosis",
                "Pregnancy (insulin preferred)"
            ],
            "clinicalPearls": [
                "BLACK BOX WARNING: Thyroid C-cell tumors (medullary thyroid cancer) in rodents. Contraindicated in personal/family history of MTC or MEN 2.",
                "Weight loss: Average 3-6 kg (major advantage over insulin, sulfonylureas, TZDs which cause weight gain)",
                "Cardiovascular benefit: Liraglutide (LEADER trial) and semaglutide (SUSTAIN-6) reduce MACE by 13-26%",
                "GI side effects: Nausea in 40-50% (usually transient, improves over 4-8 weeks). START LOW, GO SLOW to minimize nausea.",
                "Delayed gastric emptying: Give other oral medications 1 hour BEFORE GLP-1 agonist to ensure absorption",
                "No hypoglycemia as monotherapy (glucose-dependent insulin release) - but can occur when combined with insulin/sulfonylureas",
                "Pancreatitis: RARE but serious (~0.1%). Discontinue if persistent severe abdominal pain.",
                "Step 1 buzzword: 'weight loss and CV benefit' or 'contraindicated in MTC/MEN 2'",
                "Mnemonic: 'GLP = Glucose Lowers, Pounds Lost' (glucose control + weight loss)",
                "Classic vignette: Obese T2DM patient (BMI 35) on metformin, HbA1c 8.5%, wants to lose weight → add GLP-1 agonist",
                "Incretin effect: GLP-1 is released from L-cells in gut in response to food → the 'incretin effect' accounts for 50-70% of postprandial insulin secretion",
                "Compare to DPP-4i: GLP-1 agonists MORE effective (↓ HbA1c 1-1.5% vs 0.5-0.8%) and cause weight LOSS (vs neutral), but are injectable and more expensive",
                "FDA approval expanding: Now approved for weight loss (higher doses), being studied for NASH, neurodegenerative diseases"
            ]
        }
    },
    {
        "id": "sglt2-inhibitors",
        "name": "SGLT2 Inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Sodium-glucose cotransporter-2 (SGLT2) inhibitors block SGLT2 in the proximal renal tubule, preventing reabsorption of filtered glucose. Results in glucosuria (glucose excretion in urine), lowering blood glucose independent of insulin.",
        "sideEffects": [
            "Urinary tract infections (UTIs) - 10%",
            "Genital mycotic infections (yeast infections) - 15%",
            "Euglycemic DKA (rare but serious)",
            "Dehydration, orthostatic hypotension",
            "Increased urination (polyuria)"
        ],
        "interactions": "Diuretics increase dehydration risk. Insulin/sulfonylureas increase hypoglycemia risk.",
        "interactionDetails": "",
        "drugIds": [
            "empagliflozin",
            "canagliflozin"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "SGLT2 inhibitors are the newest class of diabetes medications (first approved 2013) that work by blocking glucose reabsorption in the kidneys, causing glucosuria and calorie loss. Beyond glucose control, they provide MAJOR cardiovascular and renal benefits (reduce heart failure hospitalizations, slow CKD progression, reduce cardiovascular death). They are insulin-independent and cause weight loss and blood pressure reduction. Increasingly considered as add-on to metformin or even first-line in patients with heart failure or chronic kidney disease.",
            "clinicalApproach": [
                "Second-line add-on to metformin, OR first-line if patient has heart failure or CKD (compelling indications)",
                "PREFERRED in patients with: (1) Heart failure (reduce HF hospitalizations by 30-35%), (2) CKD (slow progression), (3) ASCVD (reduce CV death)",
                "Benefits beyond glucose control: weight loss (2-3 kg), BP reduction (3-5 mmHg), diuretic effect, renal protection",
                "Require eGFR >30 for glucose-lowering efficacy (though cardio-renal benefits persist at lower eGFR)",
                "Patient counseling essential: genital hygiene (prevent yeast infections), stay hydrated, recognize DKA symptoms",
                "Do NOT stop before surgery or illness (euglycemic DKA risk - hold during acute illness)",
                "Cost may be barrier (expensive, but cost-effective given CV/renal benefits)"
            ],
            "pharmacokinetics": {
                "absorption": "Oral absorption, generally well absorbed. Can take with or without food.",
                "distribution": "High protein binding (>90%). Wide distribution.",
                "metabolism": "Hepatic metabolism via glucuronidation and/or CYP450 (varies by agent). Generally produce inactive metabolites.",
                "excretion": "Renal (50-60%) and fecal (40-50%). Efficacy decreases with declining renal function (need eGFR >30 for glucose effect)."
            },
            "comparison": {
                "title": "Comparison of SGLT2 Inhibitors",
                "description": "Key differences in cardiovascular outcomes and safety profiles",
                "content": `
EMPAGLIFLOZIN (Jardiance):
- Dosing: 10-25 mg once daily
- eGFR requirement: Can initiate if eGFR ≥20 (CV/renal benefit), glucose effect needs eGFR ≥30
- CV data: STRONGEST - EMPA-REG trial showed 38% reduction in CV death, 35% reduction in HF hospitalization
- Use case: PREFERRED in patients with heart failure or established ASCVD (best CV mortality data)
- FDA approval: T2DM, reduce CV death in ASCVD, reduce HF hospitalization, slow CKD progression
- Safety: No amputation signal (unlike canagliflozin)

CANAGLIFLOZIN (Invokana):
- Dosing: 100-300 mg once daily (take before first meal)
- eGFR requirement: ≥30 (strict, don't use if <30)
- CV data: CANVAS trial showed CV benefit but also INCREASED amputation risk (toe/foot amputations 2x)
- Use case: Generally avoid - empagliflozin or dapagliflozin preferred due to amputation concern
- BLACK BOX: Increased risk of lower limb amputations (especially toes)
- Safety concerns: Bone fractures (increased risk), amputations (2x risk)

NEWER AGENTS (not detailed here):
- Dapagliflozin (Farxiga): CV and renal benefits, HF indication, good safety profile
- Ertugliflozin: Newer, less data, generally avoid
`
            },
            "monitoring": [
                "Blood glucose and HbA1c every 3 months (expect 0.5-1% reduction)",
                "eGFR/serum creatinine: baseline and periodically (efficacy decreases with declining renal function, but don't stop if eGFR drops)",
                "Blood pressure (expect 3-5 mmHg reduction - monitor for hypotension if on antihypertensives)",
                "Weight (expect 2-3 kg weight loss from calorie loss via glucosuria)",
                "Urinalysis if UTI symptoms (dysuria, frequency, urgency)",
                "Foot exams (if on canagliflozin - amputation risk)",
                "Ketones if DKA symptoms (nausea, vomiting, abdominal pain - can occur with NORMAL glucose)"
            ],
            "contraindications": [
                "Type 1 Diabetes (risk of euglycemic DKA, though being studied off-label)",
                "Diabetic ketoacidosis",
                "Severe renal impairment (eGFR <30 for glucose benefit, though CV/renal benefits may persist)",
                "Dialysis or ESRD (no glucose benefit, limited data)",
                "Recurrent UTIs or genital infections (relative contraindication)",
                "Volume depletion or hypotension (relative)"
            ],
            "clinicalPearls": [
                "GAME-CHANGER in diabetes care: reduce CV death (38%), HF hospitalization (35%), slow CKD progression",
                "EMPA-REG (2015): First diabetes drug to show CV MORTALITY benefit since metformin (38% reduction in CV death)",
                "Mechanism: insulin-INDEPENDENT → block SGLT2 in proximal tubule → prevent glucose reabsorption → excrete ~60-80g glucose/day in urine",
                "Weight loss via calorie loss (glucose in urine = ~240-320 kcal/day lost)",
                "Euglycemic DKA: RARE (0.1%) but HIGH-YIELD. Can have DKA with NORMAL blood glucose. Hold SGLT2i during illness, surgery, prolonged fasting.",
                "Genital mycotic infections (yeast): 10-15%, especially women. Glucose in urine → yeast overgrowth. Treat with topical antifungals.",
                "UTIs: 5-10% (glucose in urine promotes bacterial growth). Not a major concern unless recurrent.",
                "Diuretic effect: lose 1-2 kg fluid initially → BP reduction, may improve edema. Risk of hypotension if on diuretics.",
                "NO hypoglycemia as monotherapy (insulin-independent) - but risk when combined with insulin/sulfonylureas",
                "Require functioning kidneys: Need eGFR >30 for glucose-lowering (but KEEP if eGFR drops - renal/CV benefits persist)",
                "Step 1 buzzword: 'reduce heart failure hospitalization' or 'euglycemic DKA'",
                "Classic vignette: T2DM patient with HFrEF (EF 35%), on metformin, HbA1c 8% → add SGLT2 inhibitor (empagliflozin for HF benefit)",
                "Fournier's gangrene: RARE (<0.01%) but serious necrotizing fasciitis of perineum - FDA warning 2018",
                "Mnemonic: 'SGLT2 = Sugar Goes, Lost Through urine' or 'SGLT2 = Sweet Goes Low Through kidneys'",
                "Suffix: '-gliflozin' identifies all SGLT2 inhibitors"
            ]
        }
    },
    {
        "id": "amylin-analogs",
        "name": "Amylin Analogs",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Synthetic analog of amylin (hormone co-secreted with insulin). Slows gastric emptying, suppresses postprandial glucagon, and promotes satiety.",
        "sideEffects": [
            "Nausea",
            "Hypoglycemia (when combined with insulin)",
            "Injection site reactions"
        ],
        "interactions": "Delays absorption of oral medications due to delayed gastric emptying.",
        "interactionDetails": "",
        "drugIds": [
            "pramlintide"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Amylin is a hormone normally co-secreted with insulin from pancreatic beta cells. Pramlintide is a synthetic analog used as adjunct therapy with insulin in Type 1 and Type 2 DM. It complements insulin by addressing postprandial glucose spikes through multiple mechanisms.",
            "clinicalApproach": [
                "Only used as adjunct to insulin therapy (never alone)",
                "Primarily targets postprandial hyperglycemia",
                "Reduces insulin requirements by 30-50% (must reduce mealtime insulin when starting to avoid hypoglycemia)",
                "Benefits: weight loss (unlike insulin), improved postprandial glucose control",
                "Reserved for patients not at goal despite optimized insulin therapy"
            ],
            "pharmacokinetics": {
                "absorption": "Subcutaneous injection. Rapid absorption with peak at 20 minutes.",
                "distribution": "Does not bind extensively to plasma proteins.",
                "metabolism": "Primarily renal metabolism.",
                "excretion": "Renal excretion. Avoid in severe renal impairment (CrCl <15 mL/min)."
            },
            "monitoring": [
                "Blood glucose: before and after meals (watch for hypoglycemia)",
                "Weight (amylin analogs promote weight loss)",
                "Gastrointestinal symptoms (nausea is common initially)"
            ],
            "contraindications": [
                "Gastroparesis (delayed gastric emptying)",
                "Hypoglycemia unawareness",
                "Confirmed diagnosis of gastroparesis"
            ],
            "clinicalPearls": [
                "Must reduce mealtime insulin dose by 50% when starting pramlintide to avoid severe hypoglycemia",
                "Give as separate injection from insulin (cannot mix)",
                "Nausea is very common (60-70%) but usually improves over weeks",
                "Step 1 buzzword: 'adjunct to insulin' or 'postprandial glucose control'",
                "Mechanism mnemonic: Amylin = 'A meal is lingering' (slows gastric emptying)",
                "Unique benefit: only diabetes drug that causes weight LOSS when combined with insulin"
            ]
        }
    },
    {
        "id": "alpha-glucosidase-inhibitors",
        "name": "Alpha-Glucosidase Inhibitors",
        "therapeuticClass": "diabetes-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit intestinal alpha-glucosidase enzymes, delaying carbohydrate digestion and absorption. Reduces postprandial glucose spikes.",
        "sideEffects": [
            "Flatulence",
            "Diarrhea",
            "Abdominal pain"
        ],
        "interactions": "Intestinal adsorbents (charcoal) and digestive enzymes may reduce efficacy.",
        "interactionDetails": "",
        "drugIds": [
            "acarbose",
            "miglitol"
        ],
        "pageType": "pharmacologic-class",
        "detail": {
            "overview": "Alpha-glucosidase inhibitors work in the gut to delay breakdown of complex carbohydrates into simple sugars. By slowing digestion, they reduce postprandial glucose spikes. Modest efficacy (HbA1c reduction 0.5-0.8%) but no risk of hypoglycemia when used alone.",
            "clinicalApproach": [
                "Primarily reduce postprandial glucose (less effect on fasting glucose)",
                "Must be taken with first bite of each meal to be effective",
                "No hypoglycemia risk when used as monotherapy",
                "Often used in combination with other diabetes drugs",
                "Better for patients with predominantly postprandial hyperglycemia",
                "GI side effects limit use - start low dose and titrate slowly"
            ],
            "pharmacokinetics": {
                "absorption": "Acarbose: <2% absorbed systemically (acts locally in GI tract). Miglitol: well absorbed systemically.",
                "distribution": "Minimal systemic distribution for acarbose (local GI action).",
                "metabolism": "Acarbose: metabolized by intestinal bacteria and GI enzymes. Miglitol: not metabolized.",
                "excretion": "Acarbose: fecal (metabolites). Miglitol: renal (unchanged). Avoid miglitol in severe renal impairment."
            },
            "comparison": {
                "title": "Comparison of Alpha-Glucosidase Inhibitors",
                "description": "Acarbose vs Miglitol - key differences",
                "content": `
ACARBOSE:
- Absorption: <2% systemic absorption (mostly GI action)
- Metabolism: By intestinal bacteria
- Excretion: Fecal
- Renal impairment: Can use (not systemically absorbed)
- Liver effects: Rare reversible hepatotoxicity (monitor LFTs)
- Dose: 25-100 mg TID with meals

MIGLITOL:
- Absorption: Well absorbed (>95%)
- Metabolism: Not metabolized
- Excretion: Renal (unchanged)
- Renal impairment: Avoid if CrCl <25 mL/min
- Liver effects: No hepatotoxicity
- Dose: 25-100 mg TID with meals
`
            },
            "monitoring": [
                "Blood glucose: particularly postprandial levels",
                "HbA1c every 3 months",
                "LFTs for acarbose (rare hepatotoxicity, check at 3, 6, 12 months then annually)",
                "GI symptoms (flatulence, diarrhea - dose-dependent)"
            ],
            "contraindications": [
                "Inflammatory bowel disease",
                "Colonic ulceration",
                "Intestinal obstruction",
                "Chronic intestinal diseases with malabsorption",
                "Cirrhosis (for acarbose)",
                "Severe renal impairment (for miglitol)"
            ],
            "clinicalPearls": [
                "GI side effects (flatulence, diarrhea) occur in 70% of patients - caused by undigested carbs fermenting in colon",
                "Must take with FIRST BITE of meal (not before, not after)",
                "If hypoglycemia occurs (from concurrent insulin/sulfonylurea), treat with GLUCOSE (not sucrose) - drug blocks sucrose breakdown",
                "Step 1 buzzword: 'flatulence' or 'must avoid in IBD'",
                "Mechanism mnemonic: 'Alpha blockers block sugar breakdown in the Alimentary canal'",
                "Weak efficacy but safe (no hypoglycemia as monotherapy, no weight gain)",
                "Rarely used first-line due to GI side effects and modest efficacy - mostly used in combination"
            ]
        }
    },
    {
        "id": "diabetes-medications",
        "name": "Diabetes Medications",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "insulin",
            "biguanides",
            "sulfonylureas",
            "thiazolidinediones",
            "dpp-4-inhibitors",
            "glp-1-receptor-agonists",
            "sglt2-inhibitors",
            "amylin-analogs",
            "alpha-glucosidase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "thyroid-hormones",
        "name": "Thyroid Hormones",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Replace deficient thyroid hormones T4 and T3.",
        "sideEffects": [
            "Hyperthyroid symptoms",
            "Arrhythmias",
            "Osteoporosis"
        ],
        "interactions": "Iron, calcium reduce absorption.",
        "interactionDetails": "",
        "drugIds": [
            "levothyroxine",
            "liothyronine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antithyroid-agents",
        "name": "Antithyroid Agents",
        "therapeuticClass": "thyroid-medications",
        "system": "endocrine-system",
        "mechanism": "Inhibit thyroid hormone synthesis.",
        "sideEffects": [
            "Agranulocytosis",
            "Hepatotoxicity",
            "Rash"
        ],
        "interactions": "Warfarin effects enhanced.",
        "interactionDetails": "",
        "drugIds": [
            "methimazole",
            "propylthiouracil"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "thyroid-medications",
        "name": "Thyroid Medications",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "thyroid-hormones",
            "antithyroid-agents"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "glucocorticoids",
        "name": "Glucocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Anti-inflammatory and immunosuppressive effects via genomic pathways.",
        "sideEffects": [
            "Hyperglycemia",
            "Osteoporosis",
            "Immunosuppression",
            "Adrenal suppression"
        ],
        "interactions": "CYP3A4 inducers/inhibitors affect levels.",
        "interactionDetails": "",
        "drugIds": [
            "prednisone",
            "hydrocortisone",
            "dexamethasone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "mineralocorticoids",
        "name": "Mineralocorticoids",
        "therapeuticClass": "corticosteroids",
        "system": "endocrine-system",
        "mechanism": "Sodium retention and potassium excretion in distal nephron.",
        "sideEffects": [
            "Hypertension",
            "Hypokalemia",
            "Fluid retention"
        ],
        "interactions": "NSAIDs reduce effectiveness.",
        "interactionDetails": "",
        "drugIds": [
            "fludrocortisone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "corticosteroids",
        "name": "Corticosteroids",
        "system": "endocrine-system",
        "pharmacologicClassIds": [
            "glucocorticoids",
            "mineralocorticoids"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

// Endocrine diseases
const endocrineDiseases = [
    // === THYROID DISORDERS ===
    {
        id: "hypothyroidism",
        name: "Hypothyroidism",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["fatigue", "weight-gain", "cold-intolerance", "constipation", "bradycardia"],
        tags: ["thyroid", "hormone-deficiency", "chronic", "common"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Thyroid hormone deficiency (↓ T4/T3) causing decreased metabolism. Most commonly from Hashimoto thyroiditis (US) or iodine deficiency (worldwide). Primary hypothyroidism: thyroid gland problem (↑ TSH, ↓ T4). Secondary: pituitary problem (↓ TSH, ↓ T4).",
            pathophysiology: "Thyroid hormones (T4 and T3) regulate metabolic rate of nearly all cells. Synthesized in thyroid follicular cells: iodide uptake → organification → MIT/DIT coupling → T4 (thyroxine, 90% of secretion) and T3 (triiodothyronine, more potent). HPT axis: hypothalamus releases TRH → pituitary releases TSH → thyroid releases T4/T3. T4 is converted peripherally to active T3 by deiodinases. PRIMARY HYPOTHYROIDISM (95% of cases): thyroid gland failure → ↓ T4/T3 → ↑ TSH (negative feedback lost). Causes: (1) Hashimoto thyroiditis (most common in US): autoimmune destruction of thyroid by anti-TPO and anti-thyroglobulin antibodies, lymphocytic infiltration, follicular atrophy. (2) Iodine deficiency (most common worldwide): insufficient substrate for hormone synthesis → goiter from TSH stimulation. (3) Iatrogenic: radioactive iodine ablation, thyroidectomy, neck radiation, medications (lithium, amiodarone). SECONDARY HYPOTHYROIDISM (5%): pituitary TSH deficiency → ↓ T4/T3 + ↓ TSH. Causes: pituitary adenoma, surgery, Sheehan syndrome, hypopituitarism. TERTIARY (rare): hypothalamic TRH deficiency. Effects of deficiency: ↓ BMR → weight gain, cold intolerance, fatigue. ↓ sympathetic activity → bradycardia, constipation. ↓ cardiac contractility → diastolic dysfunction, pericardial effusion. Myxedema: accumulation of glycosaminoglycans in interstitium → non-pitting edema.",
            epidemiology: "Prevalence 5% in US (10 million). SUBCLINICAL hypothyroidism (↑ TSH, normal T4): 5-10% of population. WOMEN >> MEN (8:1 female predominance). Age: prevalence increases with age, 10-20% of women >60 years. Hashimoto most common in women 30-50. Iodine deficiency affects 2 billion worldwide (endemic goiter regions). Congenital hypothyroidism: 1 in 3000-4000 newborns (screened at birth).",
            riskFactors: [
                "Female sex (8:1 female predominance)",
                "Age >60 years (prevalence 10-20% in elderly women)",
                "Family history of autoimmune thyroid disease",
                "Personal history of autoimmune disease (type 1 diabetes, celiac, vitiligo, pernicious anemia)",
                "Hashimoto thyroiditis: anti-TPO antibodies (90%), anti-thyroglobulin",
                "Iatrogenic: radioactive iodine treatment for hyperthyroidism, thyroidectomy, external neck radiation",
                "Medications: lithium (inhibits T4 release), amiodarone (iodine content + thyroid dysfunction), interferon-alpha, tyrosine kinase inhibitors",
                "Iodine deficiency (worldwide) or excess (Wolff-Chaikoff effect)",
                "Down syndrome, Turner syndrome (increased risk autoimmune thyroid disease)",
                "Postpartum thyroiditis: transient hypothyroidism after hyperthyroid phase (5-10% of women)",
                "Pregnancy (increased thyroid hormone requirements)"
            ],
            presentation: "ONSET: insidious, gradual over months-years. May be asymptomatic in mild/subclinical cases. METABOLIC: fatigue (most common), lethargy, weakness, cold intolerance (prefer warm environments), weight gain (5-10 lbs, modest despite normal appetite). CARDIOVASCULAR: bradycardia, reduced exercise tolerance, dyspnea on exertion. GASTROINTESTINAL: constipation, decreased appetite. NEUROLOGIC: slowed mentation, poor concentration, memory impairment, depression, psychomotor slowing. Carpal tunnel syndrome (myxedematous infiltration of median nerve). DERMATOLOGIC: dry, coarse skin. Brittle hair, hair loss (especially lateral eyebrows). Puffiness of face (periorbital edema). REPRODUCTIVE: menorrhagia (prolonged, heavy periods from anovulation), infertility, decreased libido. Men: erectile dysfunction. MYXEDEMA (severe): non-pitting edema of hands, feet, periorbital. Macroglossia. Myxedema coma (rare, life-threatening): hypothermia, bradycardia, hypoventilation, altered mental status, hyponatremia. Precipitated by infection, cold exposure, medications (sedatives).",
            physicalExam: [
                "Vital signs: bradycardia (HR 50-60 bpm), hypothermia (in severe cases), diastolic hypertension (↑ SVR)",
                "General: flat affect, slow speech, psychomotor retardation, delayed relaxation phase of deep tendon reflexes (CLASSIC finding - 'hung-up' reflexes)",
                "Skin: cool, dry, rough, pale (anemia). Carotenemia (yellowish skin, spares sclera vs jaundice). Non-pitting edema (myxedema) of face, hands, feet.",
                "Hair: coarse, brittle hair. Loss of lateral one-third of eyebrows (madarosis). Diffuse alopecia.",
                "Face: periorbital puffiness, facial edema, expressionless facies",
                "Neck: thyroid exam - may be goitrous (Hashimoto, iodine deficiency) or atrophic (end-stage Hashimoto, post-ablation). Non-tender diffuse goiter in Hashimoto.",
                "Cardiovascular: bradycardia, distant heart sounds (pericardial effusion), diastolic HTN, cool extremities",
                "Abdomen: hypoactive bowel sounds (constipation)",
                "Neurologic: delayed relaxation phase of DTRs (especially Achilles reflex - hallmark). Carpal tunnel signs (Tinel, Phalen). Ataxia, proximal muscle weakness.",
                "Tongue: macroglossia (enlarged tongue) in severe myxedema",
                "Mental status: slowed mentation, depressed mood, poor memory"
            ],
            diagnosticCriteria: "LABORATORY DIAGNOSIS based on TSH and free T4 levels. PRIMARY HYPOTHYROIDISM (95%): ↑ TSH (>4.5-5 mIU/L) + ↓ free T4 (<0.8 ng/dL). Overt: ↑ TSH + ↓ T4, symptomatic. Subclinical: ↑ TSH (5-10) + normal T4, often asymptomatic. SECONDARY HYPOTHYROIDISM (5%): ↓ TSH (or inappropriately normal TSH) + ↓ free T4. Suggests pituitary or hypothalamic disease. CLINICAL DIAGNOSIS: symptoms + labs. Severity correlates with degree of TSH elevation. TSH >10 usually requires treatment. TSH 5-10 (subclinical): treat if symptomatic, pregnant, or anti-TPO positive (higher risk of progression).",
            labs: [
                "TSH (FIRST-LINE SCREENING TEST): ↑ in primary hypothyroidism (usually >10 in overt, 5-10 in subclinical). Most sensitive early marker. ↓ or normal in secondary hypothyroidism.",
                "Free T4 (thyroxine): ↓ in overt hypothyroidism (<0.8 ng/dL). Normal in subclinical hypothyroidism. More specific than total T4 (unaffected by TBG).",
                "Free T3: usually not needed for diagnosis (can be normal in hypothyroidism due to increased T4→T3 conversion). Only order if suspect T3 toxicosis.",
                "Anti-TPO antibodies (anti-thyroid peroxidase): positive in 90% of Hashimoto thyroiditis. Indicates autoimmune etiology. Predicts progression of subclinical to overt.",
                "Anti-thyroglobulin antibodies: positive in 50-70% of Hashimoto (less sensitive than anti-TPO)",
                "CBC: normocytic anemia (decreased EPO) or macrocytic anemia (associated pernicious anemia - B12 deficiency in autoimmune)",
                "Lipid panel: ↑ LDL, ↑ total cholesterol, ↑ triglycerides (↓ LDL receptor expression)",
                "BMP: hyponatremia (↓ free water clearance, ↑ ADH)",
                "CK (creatine kinase): may be elevated (myopathy)",
                "If secondary hypothyroidism suspected: check other pituitary hormones (cortisol, LH/FSH, prolactin, GH), MRI pituitary"
            ],
            imaging: [
                "Thyroid ultrasound: NOT routinely needed for diagnosis of hypothyroidism. Indications: palpable nodule, goiter, suspected malignancy. Findings in Hashimoto: heterogeneous, hypoechoic gland, decreased vascularity, pseudonodules.",
                "Radioactive iodine uptake (RAIU): NOT used for hypothyroidism diagnosis (used for hyperthyroidism). Would show low uptake in primary hypothyroidism.",
                "ECG: sinus bradycardia, low voltage QRS (pericardial effusion), prolonged QT, flattened T waves",
                "Chest X-ray: enlarged cardiac silhouette (pericardial effusion), pleural effusion (in severe myxedema)",
                "MRI pituitary: if secondary hypothyroidism (↓ TSH + ↓ T4) → evaluate for pituitary adenoma, empty sella, Sheehan syndrome"
            ],
            differentialDiagnosis: [
                "Subclinical hypothyroidism: ↑ TSH, normal T4. Asymptomatic or mild symptoms. Monitor or treat if TSH >10, pregnant, symptomatic.",
                "Secondary hypothyroidism: ↓ TSH + ↓ T4 (pituitary/hypothalamic failure). Check other pituitary hormones, MRI pituitary.",
                "Euthyroid sick syndrome (non-thyroidal illness): ↓ T3, normal or ↓ T4, normal or ↓ TSH. Critical illness, starvation. Resolves with recovery. Do NOT treat.",
                "Depression: overlapping symptoms (fatigue, weight gain, psychomotor slowing). Check TSH to rule out hypothyroidism.",
                "Chronic fatigue syndrome: fatigue, normal thyroid function tests",
                "Anemia: fatigue, pallor. Check CBC and TSH (hypothyroidism can cause anemia).",
                "Congestive heart failure: edema, dyspnea. CHF is pitting edema (vs non-pitting in myxedema). Hypothyroidism can cause diastolic dysfunction.",
                "Nephrotic syndrome: edema, hypoalbuminemia. Pitting edema vs non-pitting myxedema. Check urinalysis (proteinuria).",
                "Medication side effects: lithium, amiodarone can cause hypothyroidism. Check med list."
            ],
            management: {
                acute: [
                    "MYXEDEMA COMA (rare, life-threatening emergency, 30-50% mortality):",
                    "Presentation: severe hypothyroidism + altered mental status/coma, hypothermia (<95°F), bradycardia, hypoventilation (↑ CO2), hypotension, hyponatremia. Precipitated by infection, cold, trauma, medications (sedatives, anesthesia).",
                    "ICU admission required",
                    "IV levothyroxine loading dose: 200-400 mcg IV bolus (higher dose due to emergency, poor absorption), then 50-100 mcg IV daily until oral tolerated",
                    "IV liothyronine (T3): 5-20 mcg IV bolus, then 2.5-10 mcg IV q8h (faster onset than T4). Controversial but often given in myxedema coma.",
                    "Hydrocortisone 100 mg IV q8h: ALWAYS give stress-dose steroids BEFORE thyroid hormone (risk of precipitating adrenal crisis if coexistent adrenal insufficiency). Rule out secondary hypothyroidism.",
                    "Supportive care: passive rewarming (avoid active rewarming - vasodilation → cardiovascular collapse), mechanical ventilation if hypoventilation/respiratory failure, IV fluids (cautious - risk of fluid overload, hyponatremia), correct hyponatremia slowly, treat precipitating cause (infection - broad-spectrum antibiotics, sepsis workup)"
                ],
                chronic: [
                    "LEVOTHYROXINE (synthetic T4) - FIRST-LINE, standard of care:",
                    "Dosing: start 1.6 mcg/kg/day (typical 100-125 mcg daily in adults). Lower starting dose in elderly or cardiac disease: 25-50 mcg daily (risk of precipitating angina, arrhythmia).",
                    "Timing: take on empty stomach, 30-60 minutes BEFORE breakfast (food decreases absorption). Consistent timing daily.",
                    "Monitoring: check TSH in 6-8 weeks after starting or dose change (T4 half-life ~7 days, steady state in 4-6 weeks). Goal TSH 0.5-2.5 mIU/L. Adjust dose by 12.5-25 mcg increments.",
                    "Maintenance: once stable, check TSH every 6-12 months. Lifelong treatment usually required.",
                    "Drug interactions: separate from calcium, iron, PPI by 4 hours (decrease absorption). Estrogen, pregnancy increase TBG → need higher dose.",
                    "Pregnancy: increase dose by 30-50% (increased T4 degradation, ↑ TBG). Goal TSH <2.5 in 1st trimester, <3 later. Check TSH as soon as pregnancy confirmed, every 4 weeks in 1st half, then at 28-32 weeks.",
                    "Subclinical hypothyroidism (TSH 5-10, normal T4): treat if TSH >10, symptoms, pregnancy, infertility, anti-TPO positive, goiter, or cardiovascular risk factors. Otherwise monitor TSH every 6-12 months.",
                    "Avoid liothyronine (T3) monotherapy: shorter half-life, requires multiple daily doses, no proven benefit over T4. Some patients on T4 continue to have symptoms despite normal TSH - can trial T4/T3 combination (controversial).",
                    "Address underlying cause: if medication-induced (lithium, amiodarone), consider switching if possible. Iodine deficiency: dietary supplementation."
                ]
            },
            complications: [
                "Myxedema coma: life-threatening, 30-50% mortality. Hypothermia, AMS, hypoventilation, cardiovascular collapse.",
                "Cardiovascular: diastolic dysfunction, heart failure (↓ contractility), pericardial effusion, atherosclerosis (↑ LDL), coronary artery disease",
                "Dyslipidemia: ↑ LDL cholesterol, ↑ triglycerides → increased cardiovascular risk. Improves with treatment.",
                "Infertility: anovulation, menstrual irregularities. Treat hypothyroidism to restore fertility.",
                "Pregnancy complications (if untreated): miscarriage, preterm birth, preeclampsia, low birth weight, impaired fetal neurodevelopment (maternal T4 critical for fetal brain development in 1st trimester).",
                "Goiter: chronic TSH stimulation → thyroid enlargement, compressive symptoms (dysphagia, dyspnea). May require surgery if large.",
                "Obstructive sleep apnea: macroglossia, obesity contribute",
                "Myopathy: muscle weakness, cramps, ↑ CK. Rhabdomyolysis (rare).",
                "Neurologic: carpal tunnel syndrome (myxedematous infiltration), cerebellar ataxia, peripheral neuropathy",
                "Psychiatric: depression, cognitive impairment, psychosis ('myxedema madness' - rare)",
                "Anemia: normocytic or macrocytic (associated pernicious anemia in autoimmune)",
                "Over-treatment (iatrogenic hyperthyroidism): atrial fibrillation, osteoporosis, anxiety. Keep TSH in normal range."
            ],
            prognosis: "EXCELLENT with treatment. Levothyroxine replacement normalizes TSH and reverses symptoms in 4-8 weeks. Most symptoms resolve completely (fatigue, weight gain, cold intolerance, bradycardia, constipation, mental slowing). Some symptoms persist in minority despite normal TSH (controversial - may benefit from T4/T3 combination). LIFELONG treatment required in most cases (Hashimoto, post-ablation, congenital). Subclinical hypothyroidism: 2-5% per year progress to overt (higher if anti-TPO positive). Untreated severe hypothyroidism: increased cardiovascular morbidity (heart failure, CAD from dyslipidemia), myxedema coma risk. Pregnancy outcomes normal with adequate treatment (goal TSH <2.5). Myxedema coma: 30-50% mortality even with treatment.",
            clinicalPearls: [
                "Hypothyroidism = most common thyroid disorder. Hashimoto = most common cause in US (iodine-sufficient areas).",
                "TSH is FIRST-LINE screening test (most sensitive). ↑ TSH + ↓ T4 = primary hypothyroidism (95% of cases).",
                "PRIMARY hypothyroidism: ↑ TSH, ↓ T4 (thyroid gland problem). SECONDARY: ↓ TSH, ↓ T4 (pituitary problem).",
                "Classic triad: fatigue, cold intolerance, weight gain. But presentation is highly variable and insidious.",
                "Delayed relaxation phase of deep tendon reflexes = HALLMARK physical exam finding ('hung-up' reflexes, especially Achilles).",
                "Myxedema = non-pitting edema (vs CHF/nephrotic = pitting). Glycosaminoglycan accumulation in interstitium.",
                "Anti-TPO antibodies in 90% of Hashimoto thyroiditis. Predicts progression of subclinical to overt.",
                "Subclinical hypothyroidism: ↑ TSH (5-10), normal T4. Treat if TSH >10, pregnant, symptomatic, or anti-TPO+.",
                "Levothyroxine dosing: 1.6 mcg/kg/day (typical 100-125 mcg). Take on empty stomach 30-60 min before breakfast.",
                "Elderly or cardiac disease: start LOW dose (25-50 mcg) to avoid precipitating angina/arrhythmia. Titrate slowly.",
                "Check TSH in 6-8 weeks after dose change (T4 half-life 7 days → steady state 4-6 weeks). Goal TSH 0.5-2.5.",
                "Pregnancy: increase levothyroxine by 30-50% as soon as pregnancy confirmed. Goal TSH <2.5 in 1st trimester.",
                "Drug interactions: separate levothyroxine from calcium, iron, PPI by 4 hours (decrease absorption).",
                "Myxedema coma: ALWAYS give IV hydrocortisone BEFORE thyroid replacement (risk of adrenal crisis if secondary hypothyroidism or coexistent AI).",
                "Hypothyroidism causes ↑ LDL cholesterol (cardiovascular risk). Improves with treatment.",
                "Congenital hypothyroidism: screened in all newborns (cretinism if untreated → severe intellectual disability). Early treatment prevents complications.",
                "Euthyroid sick syndrome: ↓ T3, normal/↓ T4, normal/↓ TSH in critical illness. Do NOT treat (resolves with recovery).",
                "Lateral eyebrow thinning (madarosis) is classic but not sensitive/specific."
            ]
        }
    },
    {
        id: "hyperthyroidism",
        name: "Hyperthyroidism",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["weight-loss", "heat-intolerance", "palpitations", "tremor", "anxiety"],
        tags: ["thyroid", "hormone-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Thyroid hormone excess (↑ T4/T3) causing increased metabolism. Most commonly from Graves disease (autoimmune TSI antibodies). ↓ TSH, ↑ T4/T3. Radioactive iodine uptake differentiates causes.",
            pathophysiology: "Excess thyroid hormones (T4/T3) → ↑ metabolic rate, ↑ sympathetic activity, ↑ cardiac output. GRAVES DISEASE (60-80% of hyperthyroidism): autoimmune condition with TSI (thyroid-stimulating immunoglobulins) antibodies that bind and activate TSH receptor → unregulated thyroid hormone synthesis and release. Diffuse thyroid hyperplasia. TSI also stimulates orbital fibroblasts (ophthalmopathy) and dermal fibroblasts (pretibial myxedema). TOXIC MULTINODULAR GOITER (Plummer disease, 15-20%): autonomous thyroid nodules produce excess hormone independent of TSH. Usually older patients, longstanding goiter. TOXIC ADENOMA (5%): single autonomous nodule producing excess hormone. THYROIDITIS (5-10%): transient hyperthyroidism from thyroid destruction releasing preformed hormone. Types: subacute (de Quervain, painful), silent (painless, postpartum), drug-induced (amiodarone, lithium). Self-limited (2-6 months). OTHER: iodine excess (Jod-Basedow phenomenon), TSH-secreting pituitary adenoma (rare), struma ovarii (ectopic thyroid in ovarian teratoma), hCG-mediated (hydatidiform mole, hyperemesis gravidarum - hCG has TSH-like activity). Effects of excess: ↑ BMR → heat intolerance, weight loss. ↑ β-adrenergic sensitivity → tachycardia, tremor, anxiety. ↑ bone turnover → osteoporosis. ↑ GI motility → diarrhea.",
            epidemiology: "Prevalence 1.2% in US (hyperthyroidism of any cause). WOMEN >> MEN (5-10:1 female predominance). Graves disease: peak age 20-50 years, most common cause of hyperthyroidism in young adults. Toxic multinodular goiter: peak age >60 years, more common in iodine-deficient regions. Toxic adenoma: middle-aged adults. Subclinical hyperthyroidism (↓ TSH, normal T4/T3): 1-2% of population, more common in elderly.",
            riskFactors: [
                "Female sex (5-10:1 female predominance)",
                "Age: Graves 20-50 years, toxic multinodular goiter >60 years",
                "Family history of autoimmune thyroid disease (Graves)",
                "Personal history of autoimmune disease (type 1 diabetes, vitiligo, pernicious anemia, Addison disease)",
                "Smoking (doubles risk of Graves disease and ophthalmopathy)",
                "Iodine excess: contrast dye, amiodarone, supplements (triggers hyperthyroidism in multinodular goiter - Jod-Basedow)",
                "Medications: amiodarone (iodine content + direct thyroid effects), lithium, interferon-alpha",
                "Pregnancy/postpartum period (postpartum thyroiditis 5-10% of women)",
                "Recent viral infection (subacute thyroiditis)",
                "Stress, trauma (can precipitate thyroid storm in undiagnosed/untreated hyperthyroidism)"
            ],
            presentation: "ONSET: gradual in Graves/toxic nodular (weeks-months), acute in thyroiditis (days-weeks). METABOLIC: weight loss (10-20 lbs) despite increased appetite, heat intolerance, sweating. CARDIOVASCULAR: palpitations, tachycardia (HR 90-120), exercise intolerance, dyspnea, atrial fibrillation (10-25%, especially elderly). NEUROPSYCHIATRIC: anxiety, emotional lability, irritability, insomnia, tremor (fine, rapid), hyperreflexia, proximal muscle weakness. GASTROINTESTINAL: increased bowel movements (frequent, not diarrhea), increased appetite. DERMATOLOGIC: warm, moist skin, fine hair, onycholysis (nail separation). REPRODUCTIVE: oligomenorrhea or amenorrhea (women), decreased libido, gynecomastia (men - ↑ SHBG → ↑ estrogen). GRAVES-SPECIFIC (not in other causes): ophthalmopathy (25-50% - exophthalmos, lid lag, diplopia, periorbital edema), pretibial myxedema (1-5% - non-pitting edema of shins), diffuse non-tender goiter. ELDERLY ('apathetic hyperthyroidism'): minimal symptoms, atrial fibrillation, heart failure, weight loss (not anxiety/tremor). THYROID STORM (rare, life-threatening): severe hyperthyroidism + fever >102°F, tachycardia >140, altered mental status (agitation → coma), GI symptoms (nausea, vomiting, diarrhea). Mortality 10-20%. Precipitated by infection, surgery, trauma, radioiodine treatment.",
            physicalExam: [
                "Vital signs: tachycardia (HR 90-140, resting), elevated systolic BP with widened pulse pressure, tachypnea, fever (thyroid storm)",
                "General: restless, anxious, hyperactive. Warm, moist skin. Flushed appearance.",
                "Eyes (GRAVES-SPECIFIC): exophthalmos (proptosis - eyeball protrusion), lid lag (upper eyelid lags behind eyeball on downward gaze), lid retraction (sclera visible above iris), stare, chemosis (conjunctival edema), periorbital edema, ophthalmoplegia (restricted eye movements). NOT seen in toxic nodular/adenoma.",
                "Neck: thyroid exam - DIFFUSE, smooth, non-tender goiter (Graves). Thyroid bruit (↑ vascularity, Graves). Single nodule (toxic adenoma). Multinodular goiter (toxic MNG). Tender thyroid (subacute thyroiditis).",
                "Cardiovascular: tachycardia, bounding pulses, widened pulse pressure, irregularly irregular rhythm (atrial fibrillation), systolic flow murmur (↑ cardiac output), heart failure signs if severe (JVD, rales, S3)",
                "Hands: fine tremor (outstretched hands, tongue), warm, moist palms. Onycholysis (Plummer nails - nail separation from bed). Palmar erythema.",
                "Skin: warm, smooth, moist, velvety. Hyperpigmentation (Graves). Pretibial myxedema (GRAVES-SPECIFIC - non-pitting edema, orange-peel texture on shins, 1-5%).",
                "Neurologic: hyperreflexia (brisk DTRs), proximal muscle weakness (difficulty standing from chair, climbing stairs), tremor",
                "Hair: fine, thin hair. Diffuse alopecia.",
                "Mental status: anxious, restless, emotional lability, pressured speech. Altered mental status in thyroid storm."
            ],
            diagnosticCriteria: "LABORATORY DIAGNOSIS: ↓ TSH (<0.1 mIU/L, suppressed) + ↑ free T4 and/or ↑ free T3. TSH is MOST SENSITIVE screening test (suppressed first). OVERT HYPERTHYROIDISM: ↓ TSH + ↑ T4 and/or ↑ T3. SUBCLINICAL HYPERTHYROIDISM: ↓ TSH + normal T4/T3 (early, mild, or T3 toxicosis). T3 TOXICOSIS (5-10%): ↓ TSH + normal T4 + ↑ T3 (must check T3 if T4 normal but TSH suppressed). Radioactive iodine uptake (RAIU) differentiates causes: HIGH uptake (Graves, toxic nodular/adenoma) vs LOW uptake (thyroiditis, exogenous thyroid hormone, iodine excess). Thyroid ultrasound + uptake scan localizes hot nodules.",
            labs: [
                "TSH: ↓ or undetectable (<0.1 mIU/L) in hyperthyroidism. MOST SENSITIVE screening test. Suppressed due to negative feedback.",
                "Free T4 (thyroxine): ↑ in overt hyperthyroidism (>1.8 ng/dL). Normal in subclinical or T3 toxicosis.",
                "Free T3 (triiodothyronine): ↑ in hyperthyroidism. MUST check if TSH suppressed but T4 normal (T3 toxicosis). T3 often more elevated than T4 in Graves.",
                "Radioactive iodine uptake (RAIU) - DIFFERENTIATES CAUSES:",
                "  - HIGH uptake (>25-30% at 24h): Graves disease (DIFFUSE uptake), toxic multinodular goiter (patchy/irregular), toxic adenoma (single hot nodule, suppressed rest of gland)",
                "  - LOW uptake (<5%): thyroiditis (subacute, silent, postpartum - gland injured, can't trap iodine), exogenous thyroid hormone (factitious), iodine excess (amiodarone, contrast), struma ovarii",
                "TSI (thyroid-stimulating immunoglobulin) or TRAb (TSH receptor antibody): positive in Graves disease (90-95%). Confirms autoimmune etiology. Useful if RAIU contraindicated (pregnancy, breastfeeding).",
                "Anti-TPO, anti-thyroglobulin: may be positive in Graves (less specific than TSI)",
                "ESR: markedly elevated (>50 mm/hr) in subacute thyroiditis (painful thyroid). Normal in Graves.",
                "CBC: mild leukocytosis, lymphocytosis",
                "BMP: hypercalcemia (↑ bone turnover), hyperglycemia (↑ gluconeogenesis)",
                "Liver function: mild transaminase elevation, ↑ alk phos (↑ bone turnover)",
                "ECG: sinus tachycardia, atrial fibrillation (10-25%, especially elderly), short PR interval"
            ],
            imaging: [
                "Radioactive iodine uptake scan (I-123 or I-131): GOLD STANDARD to determine cause. High uptake (Graves, toxic nodular/adenoma) vs low (thyroiditis, exogenous). Uptake at 4-6h and 24h. Normal 10-30%. CONTRAINDICATED in pregnancy/breastfeeding (use TSI instead).",
                "Thyroid ultrasound: evaluates thyroid size, nodules, vascularity. Graves: diffuse enlargement, ↑ vascularity (\"thyroid inferno\" on Doppler). Toxic adenoma: single nodule. Multinodular goiter: multiple nodules. Thyroiditis: hypoechoic, heterogeneous.",
                "Thyroid scintigraphy (I-123 or Tc-99m pertechnetate): shows pattern of uptake. Graves: diffuse uptake. Toxic adenoma: single hot nodule with suppression of surrounding gland. Toxic MNG: multiple hot nodules.",
                "Neck ultrasound: if palpable nodules, evaluate for malignancy (hypoechoic, irregular, microcalcifications). FNA biopsy if suspicious.",
                "ECG: sinus tachycardia most common. Atrial fibrillation (irregularly irregular, no P waves). Short PR interval. LVH if longstanding.",
                "CXR: cardiomegaly if heart failure, thymic enlargement in Graves (rare)"
            ],
            differentialDiagnosis: [
                "Graves disease: diffuse goiter, HIGH RAIU (diffuse), ophthalmopathy (exophthalmos, lid lag - SPECIFIC), pretibial myxedema, TSI positive. Most common cause in young adults.",
                "Toxic multinodular goiter: multinodular thyroid, HIGH RAIU (patchy), NO ophthalmopathy, older patients (>60), longstanding goiter. Second most common.",
                "Toxic adenoma: single palpable nodule, HIGH RAIU (single hot nodule, suppressed rest), NO ophthalmopathy",
                "Subacute thyroiditis (de Quervain): painful, tender thyroid, LOW RAIU, very high ESR (>50), recent viral URI, self-limited (hypothyroid → hyperthyroid → euthyroid over 2-6 months)",
                "Silent thyroiditis (painless, postpartum): non-tender thyroid, LOW RAIU, normal ESR, postpartum (5-10% women), self-limited",
                "Exogenous thyroid hormone (factitious thyrotoxicosis): LOW RAIU, ↓ thyroglobulin (not from thyroid), intentional or iatrogenic overdose",
                "Amiodarone-induced thyrotoxicosis: Type 1 (iodine-induced, HIGH RAIU, pre-existing nodular disease) vs Type 2 (destructive thyroiditis, LOW RAIU)",
                "TSH-secreting pituitary adenoma (rare): ↑ TSH + ↑ T4/T3 (NOT suppressed TSH). MRI shows pituitary mass. Treat tumor.",
                "Anxiety disorder: tachycardia, tremor, weight loss. Normal TSH/T4/T3.",
                "Pheochromocytoma: episodic HTN, tachycardia, sweating. Normal thyroid tests. ↑ metanephrines."
            ],
            management: {
                acute: [
                    "THYROID STORM (life-threatening emergency, 10-20% mortality):",
                    "Diagnostic criteria (Burch-Wartofsky score): fever >102°F + tachycardia >140 + CNS dysfunction (agitation, delirium, coma) + GI symptoms. Precipitated by infection, surgery, trauma, RAI, medication non-compliance.",
                    "ICU admission required. Treat empirically if suspected (do NOT wait for labs).",
                    "BLOCK SYNTHESIS (first): Propylthiouracil (PTU) 500-1000 mg PO loading, then 250 mg PO q4h. PTU preferred over methimazole in storm (also blocks T4→T3 conversion). If unable to take PO: methimazole 20-25 mg PR q4-6h.",
                    "BLOCK RELEASE (1 hour AFTER antithyroid drug): Iodine solution (Lugol's or SSKI) 5 drops PO q6h. MUST give antithyroid drug first (otherwise iodine provides substrate for more hormone synthesis). Blocks hormone release. OR Lithium 300 mg PO q6h if iodine allergy.",
                    "BLOCK T4→T3 CONVERSION: Propranolol 60-80 mg PO q4h (or 1-2 mg IV q10-15min). Blocks peripheral conversion. Also treats tachycardia, tremor. If β-blocker contraindicated: diltiazem.",
                    "BLOCK ENTEROHEPATIC CIRCULATION: Cholestyramine 4g PO q6h. Binds thyroid hormone in gut.",
                    "STRESS-DOSE STEROIDS: Hydrocortisone 100 mg IV q8h or dexamethasone 2 mg IV q6h. Blocks T4→T3 conversion + treats potential adrenal insufficiency.",
                    "SUPPORTIVE CARE: IV fluids (dehydration from fever, GI losses), cooling blankets (avoid aspirin - displaces T4 from TBG), acetaminophen for fever, treat underlying precipitant (antibiotics for infection).",
                    "Definitive therapy AFTER stabilization: radioactive iodine or thyroidectomy (urgent if refractory)"
                ],
                chronic: [
                    "TREATMENT DEPENDS ON CAUSE AND PATIENT FACTORS:",
                    "ANTITHYROID DRUGS (thionamides) - FIRST-LINE for Graves:",
                    "  - Methimazole 10-40 mg PO daily (PREFERRED - once daily, less hepatotoxic). Start 10-20 mg daily, titrate based on T4/TSH q4-6 weeks. Goal: euthyroid in 4-8 weeks. Continue 12-18 months, then taper/stop (30-50% remission in Graves). Does NOT work for toxic nodular (no remission - needs definitive therapy).",
                    "  - Propylthiouracil (PTU) 50-150 mg PO TID. Use ONLY in: 1st trimester pregnancy (methimazole teratogenic), thyroid storm (blocks T4→T3), methimazole allergy. More hepatotoxic than methimazole.",
                    "  - Side effects: rash (5%), agranulocytosis (0.5% - fever, sore throat → STOP drug, check CBC), hepatotoxicity (PTU > methimazole - monitor LFTs), arthralgia, vasculitis (PTU)",
                    "  - Monitoring: check CBC, LFTs at baseline and if symptoms. Check free T4, TSH q4-6 weeks during titration, then q3 months. Patient education: stop drug if fever, sore throat (agranulocytosis).",
                    "RADIOACTIVE IODINE (I-131) - DEFINITIVE CURE, most common in US:",
                    "  - Indications: Graves disease (especially if failed medical therapy, patient preference, contraindication to surgery), toxic nodular goiter, toxic adenoma (nodular disease does NOT remit with meds).",
                    "  - Mechanism: I-131 ablates thyroid tissue. Single oral dose. Cure rate 80-90% after 1 dose.",
                    "  - CONTRAINDICATIONS: pregnancy (teratogenic), breastfeeding, ophthalmopathy (can worsen - give steroids if moderate-severe eye disease).",
                    "  - Side effects: hypothyroidism (90% within 1 year - intended). Transient thyroiditis (2 weeks post-treatment). Worsening ophthalmopathy (give prednisone prophylaxis). Sialadenitis (rare).",
                    "  - Post-treatment: avoid pregnancy 6 months. Monitor TSH q4-6 weeks. Start levothyroxine when hypothyroid.",
                    "THYROIDECTOMY (surgery) - DEFINITIVE CURE:",
                    "  - Indications: large goiter with compressive symptoms, suspicious nodule (possible cancer), pregnancy (2nd trimester if needed), ophthalmopathy (contraindication to RAI), patient preference",
                    "  - Procedure: total or subtotal thyroidectomy. Cure rate >95%.",
                    "  - Complications: hypothyroidism (intended if total), hypoparathyroidism (damage parathyroids - 1-2%, transient or permanent), recurrent laryngeal nerve injury (hoarseness - 1-2%)",
                    "  - Pre-op preparation: achieve euthyroid state with antithyroid drugs (prevent thyroid storm). Iodine solution (Lugol's) 7-10 days before surgery to decrease vascularity.",
                    "BETA-BLOCKERS (SYMPTOMATIC RELIEF - ALL PATIENTS):",
                    "  - Propranolol 20-40 mg PO q6h (also blocks T4→T3 conversion) or atenolol 25-100 mg daily or metoprolol 25-50 mg BID",
                    "  - Treats tachycardia, tremor, anxiety, palpitations. Start immediately while waiting for definitive therapy. Does NOT treat underlying hyperthyroidism.",
                    "TREATMENT BY CAUSE:",
                    "  - Graves: trial antithyroid drug 12-18 months (30-50% remission). If relapse → RAI or surgery.",
                    "  - Toxic multinodular goiter / toxic adenoma: RAI or surgery (do NOT remit with meds, need definitive therapy)",
                    "  - Thyroiditis (subacute, silent, postpartum): SELF-LIMITED (2-6 months). Beta-blockers for symptoms. NSAIDs or steroids if painful (subacute). Monitor TSH (may become hypothyroid → levothyroxine if persistent).",
                    "  - Amiodarone-induced: Type 1 (iodine-induced) → antithyroid drug + perchlorate. Type 2 (destructive) → steroids. Consider stopping amiodarone if possible.",
                    "SPECIAL POPULATIONS:",
                    "  - Pregnancy: PTU in 1st trimester (methimazole teratogenic), switch to methimazole in 2nd-3rd trimester. Avoid RAI. Surgery in 2nd trimester if needed.",
                    "  - Atrial fibrillation: anticoagulation if CHA2DS2-VASc ≥2 (hyperthyroidism is risk factor for stroke). Treat hyperthyroidism → most convert to sinus rhythm.",
                    "  - Subclinical hyperthyroidism (↓ TSH, normal T4/T3): treat if TSH <0.1, age >65, osteoporosis, cardiac disease, or symptoms. Otherwise monitor TSH q6 months."
                ]
            },
            complications: [
                "Thyroid storm: life-threatening, 10-20% mortality. Fever, tachycardia >140, altered mental status, GI symptoms. Precipitated by infection, surgery, trauma.",
                "Atrial fibrillation: 10-25% of hyperthyroid patients, especially elderly. Risk of stroke → anticoagulate. Usually resolves with treatment of hyperthyroidism.",
                "Heart failure: high-output cardiac failure from chronic tachycardia, ↑ cardiac output. Treat hyperthyroidism + β-blockers + diuretics.",
                "Thyrotoxic periodic paralysis: sudden muscle weakness/paralysis (lower extremities) + hypokalemia. Asian males. Precipitated by high-carb meals, exercise. Treat: K+ replacement + β-blockers + treat hyperthyroidism.",
                "Osteoporosis: ↑ bone turnover → bone loss. Increased fracture risk, especially postmenopausal women. Improves with treatment.",
                "Ophthalmopathy (Graves-specific): 25-50% of Graves patients. Exophthalmos, diplopia, corneal ulceration, optic neuropathy (vision loss). Smoking worsens. RAI can worsen (give prednisone prophylaxis). Severe cases: high-dose steroids, orbital decompression surgery.",
                "Pretibial myxedema (Graves-specific): 1-5%. Non-pitting edema of shins. Cosmetic issue, not dangerous.",
                "Thyrotoxic cardiomyopathy: chronic hyperthyroidism → dilated cardiomyopathy. Usually reversible with treatment.",
                "Weight loss, muscle wasting (thyrotoxic myopathy): proximal muscle weakness",
                "Neuropsychiatric: anxiety, insomnia, psychosis (rare)",
                "Hypercalcemia: ↑ bone resorption → ↑ serum Ca2+",
                "Complications of treatment: hypothyroidism (RAI, surgery - lifelong levothyroxine), agranulocytosis (antithyroid drugs), hypoparathyroidism, recurrent laryngeal nerve injury (surgery)"
            ],
            prognosis: "EXCELLENT with treatment. Symptoms resolve in 4-8 weeks with antithyroid drugs (euthyroid in 6-8 weeks). Graves disease: 30-50% achieve remission after 12-18 months of antithyroid drugs. Higher remission if: smaller goiter, milder hyperthyroidism, lower TSI titers. 50-70% relapse after stopping meds → need definitive therapy (RAI or surgery). Toxic multinodular goiter / toxic adenoma: do NOT remit with meds, require definitive therapy (RAI or surgery) for cure. Thyroiditis: self-limited (2-6 months), excellent prognosis. 30% develop permanent hypothyroidism. Radioactive iodine: 80-90% cured after 1 dose. 90% develop hypothyroidism within 1 year (intended). Thyroidectomy: >95% cure rate. Complications rare (<5%). Untreated hyperthyroidism: increased cardiovascular morbidity (atrial fibrillation, heart failure), osteoporosis, weight loss. Thyroid storm: 10-20% mortality even with treatment.",
            clinicalPearls: [
                "Hyperthyroidism = ↓ TSH + ↑ T4/T3. TSH is MOST SENSITIVE screening test.",
                "Graves disease = most common cause (60-80%), especially in young adults. Toxic multinodular goiter = 2nd most common, elderly.",
                "Classic symptoms: weight loss despite ↑ appetite, heat intolerance, palpitations, tremor, anxiety, diarrhea",
                "Graves-SPECIFIC findings (not in other causes): ophthalmopathy (exophthalmos, lid lag), pretibial myxedema, diffuse goiter, thyroid bruit",
                "Radioactive iodine uptake (RAIU) differentiates causes: HIGH (Graves, toxic nodular) vs LOW (thyroiditis, exogenous thyroid hormone)",
                "T3 toxicosis (5-10%): ↓ TSH + normal T4 + ↑ T3. MUST check T3 if TSH suppressed but T4 normal.",
                "Beta-blockers (propranolol, atenolol) for IMMEDIATE symptom relief (tachycardia, tremor, anxiety). Start in all patients.",
                "Graves treatment: trial antithyroid drugs 12-18 months → 30-50% remission. If relapse → RAI or surgery (definitive).",
                "Methimazole PREFERRED over PTU (once daily, less hepatotoxic). PTU only for: 1st trimester pregnancy, thyroid storm, methimazole allergy.",
                "Radioactive iodine (I-131) = most common definitive treatment in US. 80-90% cured. 90% develop hypothyroidism (intended). CONTRAINDICATED in pregnancy.",
                "Toxic multinodular goiter / toxic adenoma: do NOT remit with meds. Require RAI or surgery for cure.",
                "Thyroid storm: LIFE-THREATENING (10-20% mortality). Fever >102°F + tachycardia >140 + altered mental status. Treat empirically (don't wait for labs).",
                "Thyroid storm treatment: PTU → iodine (1hr later) → propranolol → steroids → supportive care. ALWAYS give PTU BEFORE iodine (otherwise iodine provides substrate).",
                "Atrial fibrillation in 10-25% (especially elderly). Anticoagulate. Usually converts to sinus with treatment of hyperthyroidism.",
                "Antithyroid drug side effect: agranulocytosis (0.5%). Educate patient: STOP drug if fever/sore throat → check CBC immediately.",
                "Pregnancy: PTU in 1st trimester (methimazole teratogenic), switch to methimazole 2nd-3rd trimester. Avoid RAI (teratogenic).",
                "Subclinical hyperthyroidism (↓ TSH, normal T4/T3): treat if TSH <0.1, age >65, osteoporosis, cardiac disease. Otherwise monitor.",
                "Thyroiditis (subacute, silent, postpartum): SELF-LIMITED (2-6 months). LOW RAIU. Beta-blockers for symptoms. 30% develop permanent hypothyroidism."
            ]
        }
    },
    {
        id: "graves-disease",
        name: "Graves Disease",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["weight-loss", "exophthalmos", "pretibial-myxedema", "palpitations"],
        tags: ["thyroid", "autoimmune", "hyperthyroidism"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common cause of hyperthyroidism (60-80%). Autoimmune disorder: TSI (thyroid-stimulating immunoglobulin) antibodies bind and activate TSH receptor → unregulated thyroid hormone production. Classic triad: hyperthyroidism + ophthalmopathy + pretibial myxedema. Diffuse goiter, HIGH RAIU (diffuse pattern). Women 20-50 years. Treatment: antithyroid drugs, radioactive iodine, or thyroidectomy.",
            pathophysiology: "AUTOIMMUNE MECHANISM: TSI (thyroid-stimulating immunoglobulins) are IgG antibodies that bind to and ACTIVATE the TSH receptor on thyroid follicular cells → unregulated synthesis and secretion of thyroid hormones (T4/T3) independent of TSH. TSH is suppressed by negative feedback but thyroid continues producing hormone. TSI also stimulates thyroid growth → diffuse goiter. EXTRATHYROIDAL MANIFESTATIONS: TSI cross-reacts with TSH receptors on orbital fibroblasts → fibroblast proliferation, glycosaminoglycan accumulation, inflammation, edema → ophthalmopathy (exophthalmos, extraocular muscle dysfunction). TSI on dermal fibroblasts → pretibial myxedema (non-pitting shin edema). GENETIC: HLA-DR3, CTLA-4 gene polymorphisms increase risk. TRIGGERS: stress, infection, pregnancy, iodine excess, smoking. Often associated with other autoimmune diseases (type 1 diabetes, vitiligo, pernicious anemia, Addison disease).",
            epidemiology: "Most common cause of hyperthyroidism (60-80% of cases). Prevalence 0.5% in US. WOMEN >> MEN (5-10:1 female predominance). Peak age 20-50 years (young to middle-aged adults). Family history in 50% (genetic predisposition). More common in Caucasians and Asians. Smokers have 2× risk and more severe ophthalmopathy. Postpartum period is common trigger (immune rebound after pregnancy immunosuppression).",
            riskFactors: [
                "Female sex (5-10:1 vs males)",
                "Age 20-50 years (peak incidence)",
                "Family history of Graves or autoimmune thyroid disease (50% have positive family history)",
                "Personal history of autoimmune disease: type 1 diabetes, vitiligo, pernicious anemia, Addison disease, celiac disease",
                "Smoking (doubles risk of Graves + 8× risk of ophthalmopathy, worsens eye disease)",
                "HLA-DR3, CTLA-4 gene polymorphisms",
                "Pregnancy/postpartum period (immune rebound after pregnancy - 5% develop postpartum thyroiditis/Graves)",
                "Iodine excess: contrast dye, supplements, amiodarone (triggers hyperthyroidism in susceptible)",
                "Stress, infection (precipitating factors)",
                "Recent viral infection",
                "Medications: interferon-alpha, immune checkpoint inhibitors (anti-PD-1, anti-CTLA-4)"
            ],
            presentation: "HYPERTHYROIDISM SYMPTOMS (same as other causes): weight loss (10-20 lbs) despite ↑ appetite, heat intolerance, sweating, palpitations, tachycardia, anxiety, tremor, insomnia, frequent bowel movements, oligomenorrhea/amenorrhea (women), decreased libido. GRAVES-SPECIFIC FEATURES (differentiate from other hyperthyroidism): OPHTHALMOPATHY (25-50%, SPECIFIC to Graves, NOT seen in toxic nodular): exophthalmos (proptosis - eyeball protrusion), lid retraction (sclera visible above iris - 'stare'), lid lag (upper lid lags behind eye on downward gaze), periorbital edema, chemosis (conjunctival injection/edema), diplopia (extraocular muscle dysfunction - medial/inferior rectus most affected), photophobia, eye pain, excessive tearing. Severe: corneal ulceration, optic neuropathy (vision loss - emergency). PRETIBIAL MYXEDEMA (1-5%, SPECIFIC to Graves): non-pitting edema of shins/dorsum of feet, orange-peel texture, erythematous, raised plaques. Also called thyroid dermopathy. DIFFUSE GOITER (80%): symmetric, smooth, non-tender thyroid enlargement. Thyroid bruit may be heard (↑ vascularity). ONSET: gradual over weeks-months. Can present with thyroid storm (rare, life-threatening - fever, tachycardia >140, AMS).",
            physicalExam: [
                "Vital signs: tachycardia (HR 90-140 at rest), widened pulse pressure (↑ systolic, ↓ diastolic), warm skin, tachypnea",
                "Eyes (GRAVES-SPECIFIC, 25-50%): exophthalmos (proptosis - eyeballs protrude >20mm on Hertel exophthalmometry), lid retraction (sclera visible above cornea - 'Dalrymple sign'), lid lag (upper eyelid lags on downward gaze - 'von Graefe sign'), periorbital edema, chemosis (conjunctival injection/edema), proptosis, limited upward/lateral gaze (inferior/medial rectus fibrosis), diplopia. Measure with Hertel exophthalmometer (>20mm = proptosis).",
                "Neck: DIFFUSE, smooth, symmetric, non-tender goiter (80%). Thyroid bruit on auscultation (↑ blood flow). No nodules (vs toxic multinodular goiter).",
                "Skin: warm, moist, velvety, smooth. Pretibial myxedema (1-5%, GRAVES-SPECIFIC): non-pitting edema of shins/feet, orange-peel texture, erythematous, waxy, raised plaques. Hyperpigmentation. Onycholysis (Plummer nails).",
                "Hands: fine tremor (outstretched hands, tongue), warm, moist palms. Palmar erythema.",
                "Cardiovascular: tachycardia, bounding pulses, widened pulse pressure, systolic flow murmur (↑ cardiac output), atrial fibrillation (irregularly irregular) in 10-25%",
                "Neurologic: hyperreflexia, proximal muscle weakness, fine tremor, brisk deep tendon reflexes",
                "Mental status: anxious, restless, emotional lability, insomnia",
                "General: restless, hyperactive, weight loss despite good appetite"
            ],
            diagnosticCriteria: "CLINICAL + LABORATORY DIAGNOSIS: (1) Hyperthyroidism: ↓ TSH (<0.1 mIU/L) + ↑ free T4/T3. (2) Graves-specific features: ophthalmopathy (exophthalmos, lid lag), pretibial myxedema, diffuse goiter. (3) TSI antibodies positive (90-95%) OR high RAIU with diffuse uptake pattern. RAIU: HIGH uptake (>30% at 24h) with DIFFUSE pattern throughout gland (vs patchy in toxic multinodular goiter, focal in toxic adenoma). TSI antibodies confirm autoimmune etiology (useful if RAIU contraindicated - pregnancy, breastfeeding). Diagnosis can be made on clinical grounds if classic triad present (hyperthyroidism + ophthalmopathy + diffuse goiter).",
            labs: [
                "TSH: ↓ or undetectable (<0.1 mIU/L). Suppressed by negative feedback from excess T4/T3.",
                "Free T4: ↑ (>1.8 ng/dL) in overt Graves. May be normal in subclinical or T3 toxicosis.",
                "Free T3: ↑ in Graves. Often MORE elevated than T4 (T3:T4 ratio >20 suggests Graves). Check if TSH suppressed but T4 normal (T3 toxicosis).",
                "TSI (thyroid-stimulating immunoglobulin) or TRAb (TSH receptor antibody): POSITIVE in 90-95% of Graves disease. Confirms autoimmune etiology. Levels correlate with disease activity. First-line test if RAIU contraindicated (pregnancy, breastfeeding, iodine allergy). Can predict neonatal Graves if very high in pregnancy (crosses placenta).",
                "Anti-TPO, anti-thyroglobulin: may be positive (50-70%) but LESS SPECIFIC than TSI. More common in Hashimoto but can coexist.",
                "Radioactive iodine uptake (RAIU, if TSI not done): HIGH uptake (>30% at 24h, normal 10-30%). DIFFUSE pattern on scan (entire gland lights up uniformly vs patchy in toxic MNG).",
                "CBC: mild leukopenia, lymphocytosis",
                "BMP: hypercalcemia (↑ bone turnover), hyperglycemia",
                "Liver function: mild transaminase elevation, ↑ alk phos",
                "ECG: sinus tachycardia, short PR interval, atrial fibrillation (10-25%)"
            ],
            imaging: [
                "Radioactive iodine uptake (RAIU) scan (I-123 or Tc-99m pertechnetate): HIGH uptake (>30% at 24h) with DIFFUSE pattern throughout gland. Differentiates Graves from other causes of hyperthyroidism. CONTRAINDICATED in pregnancy/breastfeeding (use TSI instead).",
                "Thyroid ultrasound: diffuse thyroid enlargement, INCREASED vascularity ('thyroid inferno' on Doppler - characteristic), hypoechoic, homogeneous. Rules out nodules. Not needed if TSI positive and clinical diagnosis clear.",
                "Orbital CT or MRI (if severe ophthalmopathy): enlarged extraocular muscles (inferior and medial rectus most common - 'Coca-Cola can sign'), increased orbital fat, optic nerve compression. Helps assess severity and plan treatment (orbital decompression if severe).",
                "ECG: sinus tachycardia, atrial fibrillation, short PR interval",
                "CXR: cardiomegaly if heart failure (rare)"
            ],
            differentialDiagnosis: [
                "Toxic multinodular goiter: multinodular thyroid (palpable nodules), HIGH RAIU with PATCHY/irregular pattern, NO ophthalmopathy, older age (>60), longstanding goiter",
                "Toxic adenoma: single palpable thyroid nodule, HIGH RAIU with focal hot nodule + suppressed surrounding gland, NO ophthalmopathy",
                "Subacute thyroiditis (de Quervain): PAINFUL tender thyroid, LOW RAIU, very high ESR (>50), recent viral URI, self-limited",
                "Silent/postpartum thyroiditis: non-tender thyroid, LOW RAIU, normal ESR, postpartum timing, transient",
                "Hashitoxicosis: initial hyperthyroid phase of Hashimoto (transient release of hormone from thyroid destruction), LOW RAIU, anti-TPO positive, progresses to hypothyroidism",
                "Exogenous thyroid hormone (factitious): LOW RAIU, ↓ thyroglobulin (not from thyroid), intentional or iatrogenic overdose",
                "TSH-secreting pituitary adenoma (rare): ↑ TSH + ↑ T4/T3 (NOT suppressed), MRI shows pituitary mass"
            ],
            management: {
                acute: [
                    "Most Graves patients do NOT require acute management (treated as outpatients with chronic therapy).",
                    "THYROID STORM (rare, life-threatening, 10-20% mortality):",
                    "  - Presentation: fever >102°F, tachycardia >140, altered mental status (agitation→coma), GI symptoms. Precipitated by infection, surgery, trauma, RAI, medication non-compliance.",
                    "  - ICU admission. Treat empirically (don't wait for labs).",
                    "  - PTU 500-1000mg PO load → 250mg q4h (blocks synthesis + T4→T3 conversion)",
                    "  - Iodine (Lugol's 5 drops q6h) 1 HOUR AFTER PTU (blocks hormone release)",
                    "  - Propranolol 60-80mg PO q4h or 1-2mg IV (blocks T4→T3 conversion + treats symptoms)",
                    "  - Hydrocortisone 100mg IV q8h (blocks T4→T3 conversion + treats potential adrenal insufficiency)",
                    "  - Supportive: IV fluids, cooling blankets, acetaminophen (NOT aspirin), treat precipitant (antibiotics for infection)"
                ],
                chronic: [
                    "THREE TREATMENT OPTIONS for Graves disease:",
                    "1. ANTITHYROID DRUGS (thionamides) - FIRST-LINE, especially in young patients, mild disease, small goiter:",
                    "  - Methimazole 10-40mg PO daily (PREFERRED - once daily, less hepatotoxic than PTU). Start 10-20mg daily, titrate q4-6 weeks based on free T4/TSH. Goal: euthyroid in 4-8 weeks. Continue 12-18 months total, then taper/stop. 30-50% achieve REMISSION (stay euthyroid off meds). Higher remission if: small goiter, mild hyperthyroidism, low TSI titers.",
                    "  - Propylthiouracil (PTU) 50-150mg PO TID: Use ONLY if (1) 1st trimester pregnancy (methimazole teratogenic), (2) thyroid storm, (3) methimazole allergy. More hepatotoxic.",
                    "  - Monitor: CBC, LFTs at baseline. Check free T4, TSH q4-6 weeks during titration, then q3 months. Patient education: STOP drug if fever/sore throat (agranulocytosis) → check CBC immediately.",
                    "  - Side effects: rash (5%), agranulocytosis (0.5% - STOP drug), hepatotoxicity (PTU>methimazole), arthralgia, vasculitis (PTU)",
                    "  - If RELAPSE after stopping (50-70%): restart antithyroid drug or proceed to definitive therapy (RAI or surgery)",
                    "2. RADIOACTIVE IODINE (I-131) - DEFINITIVE CURE, most common treatment in US:",
                    "  - Indications: failed/relapsed after antithyroid drugs, patient preference, contraindication to surgery, moderate-large goiter, elderly",
                    "  - Mechanism: oral I-131 → ablates thyroid tissue. Single dose. 80-90% cured.",
                    "  - CONTRAINDICATIONS: pregnancy (teratogenic), breastfeeding, MODERATE-SEVERE OPHTHALMOPATHY (can worsen eye disease - give prednisone 0.3-0.5mg/kg/day starting 2-3 days before RAI, continue 1 month, taper over 3 months if eye disease present).",
                    "  - Side effects: hypothyroidism (90% within 1 year - EXPECTED, lifelong levothyroxine). Transient thyroiditis (2 weeks post - sore neck, transient worsening hyperthyroidism). Worsening ophthalmopathy (5-15% - prevented with steroids). Sialadenitis (rare).",
                    "  - Post-RAI: avoid pregnancy 6 months. Monitor TSH q4-6 weeks. Start levothyroxine when hypothyroid (TSH >10 or symptomatic).",
                    "  - Smoking cessation MANDATORY before RAI (smoking worsens ophthalmopathy post-RAI)",
                    "3. THYROIDECTOMY (surgery) - DEFINITIVE CURE:",
                    "  - Indications: large goiter with compressive symptoms (dysphagia, dyspnea), suspicious thyroid nodule (possible cancer), pregnancy (2nd trimester if antithyroid drugs fail/not tolerated), severe ophthalmopathy (contraindication to RAI), patient preference (wants immediate cure)",
                    "  - Procedure: total or near-total thyroidectomy. Cure >95%.",
                    "  - Pre-op preparation: (1) Achieve euthyroid state with antithyroid drugs (prevent thyroid storm during surgery). (2) Lugol's iodine solution 5-10 drops TID for 7-10 days pre-op (decreases thyroid vascularity, reduces surgical bleeding).",
                    "  - Complications: hypothyroidism (intended), hypoparathyroidism (1-2%, transient or permanent - check Ca2+ post-op), recurrent laryngeal nerve injury (hoarseness 1-2%), bleeding, infection",
                    "ADJUNCTIVE THERAPY (ALL PATIENTS):",
                    "  - Beta-blockers for IMMEDIATE symptom relief: propranolol 20-40mg PO q6h (also blocks T4→T3) or atenolol 25-100mg daily or metoprolol 25-50mg BID. Treats tachycardia, tremor, anxiety, palpitations. Start immediately while waiting for definitive therapy.",
                    "OPHTHALMOPATHY MANAGEMENT:",
                    "  - Mild: artificial tears, sunglasses, eye lubricants, elevate head of bed (reduce periorbital edema). Smoking cessation (most important).",
                    "  - Moderate-severe: high-dose IV methylprednisolone (1g weekly × 6-12 weeks) or oral prednisone 0.5-1mg/kg/day tapered over 3-6 months. Consider orbital radiation.",
                    "  - Sight-threatening (optic neuropathy, corneal ulceration): URGENT orbital decompression surgery + high-dose steroids.",
                    "  - Achieve euthyroid state (hyper or hypothyroidism worsen eye disease). Monitor TSH closely.",
                    "  - Avoid RAI if moderate-severe eye disease (give prednisone prophylaxis if RAI necessary).",
                    "PRETIBIAL MYXEDEMA: topical steroids (high-potency), compression stockings. Usually cosmetic, not dangerous.",
                    "MONITORING: TSI titers correlate with disease activity and predict relapse. Check q6 months during antithyroid drug therapy."
                ]
            },
            complications: [
                "Thyroid storm: 10-20% mortality. Fever, tachycardia >140, AMS. Precipitated by infection, surgery, RAI.",
                "Ophthalmopathy (25-50%): exophthalmos, diplopia, optic neuropathy (vision loss - emergency), corneal ulceration. Smoking dramatically worsens. RAI can worsen (give steroid prophylaxis). Severe cases need orbital decompression.",
                "Pretibial myxedema (1-5%): non-pitting shin edema, cosmetic issue",
                "Atrial fibrillation (10-25%, especially elderly): stroke risk → anticoagulate if CHA2DS2-VASc ≥2. Usually converts to sinus with treatment.",
                "Heart failure: high-output failure from chronic tachycardia. Treat hyperthyroidism + β-blockers + diuretics.",
                "Thyrotoxic periodic paralysis: sudden muscle weakness + hypokalemia. Asian males. Treat with K+ replacement + β-blockers.",
                "Osteoporosis: ↑ bone turnover → bone loss, fracture risk",
                "Neonatal Graves (if mother has Graves during pregnancy): TSI crosses placenta → fetal/neonatal hyperthyroidism. Check maternal TSI in 3rd trimester. Neonate: tachycardia, irritability, poor feeding, goiter. Transient (TSI cleared in 3-12 weeks). Treat: methimazole, propranolol.",
                "Postpartum relapse: 50% relapse in first year postpartum (immune rebound)",
                "Treatment complications: hypothyroidism (RAI, surgery - lifelong levothyroxine), agranulocytosis (antithyroid drugs - 0.5%), hypoparathyroidism (surgery), recurrent laryngeal nerve injury (surgery)"
            ],
            prognosis: "EXCELLENT with treatment. Symptoms resolve in 4-8 weeks with antithyroid drugs (euthyroid in 6-8 weeks). REMISSION RATES with antithyroid drugs: 30-50% after 12-18 months of treatment. Higher remission if: small goiter, mild hyperthyroidism, low TSI titers, Asian ethnicity. RELAPSE: 50-70% relapse after stopping antithyroid drugs (usually within 1 year). If relapse → definitive therapy (RAI or surgery). RADIOACTIVE IODINE: 80-90% cured after 1 dose. 10-20% need 2nd dose. 90% develop hypothyroidism within 1 year (intended). THYROIDECTOMY: >95% cure rate. Complications <5%. OPHTHALMOPATHY: usually stabilizes within 1-2 years. Severity peaks in first 6 months, then improves. Smoking cessation most important. Severe cases (5-10%) need steroids or orbital decompression. UNTREATED: progressive weight loss, atrial fibrillation, heart failure, osteoporosis, thyroid storm risk.",
            clinicalPearls: [
                "Graves = most common cause of hyperthyroidism (60-80%), especially in young adults (20-50 years)",
                "Classic TRIAD: hyperthyroidism + ophthalmopathy + pretibial myxedema. Ophthalmopathy is SPECIFIC to Graves (NOT seen in toxic nodular/adenoma).",
                "TSI antibodies: positive in 90-95%, confirm autoimmune etiology. First-line if RAIU contraindicated (pregnancy).",
                "RAIU: HIGH uptake (>30%) with DIFFUSE pattern (entire gland lights up uniformly)",
                "Ophthalmopathy in 25-50%: exophthalmos, lid lag, lid retraction ('stare'), diplopia. Can occur before, during, or after hyperthyroidism. SMOKING worsens 8×.",
                "Pretibial myxedema (1-5%): non-pitting shin edema, orange-peel texture. SPECIFIC to Graves (not in other hyperthyroidism).",
                "Treatment: trial antithyroid drugs 12-18 months → 30-50% remission. If relapse (50-70%) → RAI or surgery.",
                "Methimazole PREFERRED over PTU (once daily, less hepatotoxic). PTU only for 1st trimester pregnancy, thyroid storm, methimazole allergy.",
                "Radioactive iodine (I-131): most common definitive treatment in US. 80-90% cured. 90% develop hypothyroidism (expected). CONTRAINDICATED if moderate-severe ophthalmopathy (can worsen - give steroids prophylaxis if necessary).",
                "Smoking cessation MANDATORY before RAI (prevents worsening ophthalmopathy). Most important intervention for eye disease.",
                "Beta-blockers (propranolol, atenolol) for immediate symptom relief. Start in ALL patients (treats tachycardia, tremor, anxiety).",
                "Thyroid storm: LIFE-THREATENING. Fever >102°F + HR >140 + AMS. Treat: PTU → iodine (1hr later) → propranolol → steroids.",
                "Pregnancy: PTU in 1st trimester (methimazole teratogenic), switch to methimazole 2nd-3rd trimester. Check maternal TSI 3rd trimester (predicts neonatal Graves).",
                "Ophthalmopathy management: smoking cessation (#1), artificial tears, steroids if moderate-severe, URGENT orbital decompression if optic neuropathy.",
                "Antithyroid drug side effect: agranulocytosis (0.5%). Educate: STOP if fever/sore throat → check CBC immediately.",
                "Pre-op thyroidectomy: achieve euthyroid with antithyroid drugs + Lugol's iodine 7-10 days pre-op (↓ vascularity, prevent thyroid storm).",
                "TSI levels correlate with disease activity, predict relapse and neonatal Graves risk",
                "Atrial fibrillation in 10-25%. Anticoagulate if CHA2DS2-VASc ≥2. Usually converts to sinus with treatment of Graves."
            ]
        }
    },
    {
        id: "hashimoto-thyroiditis",
        name: "Hashimoto Thyroiditis",
        system: "endocrine",
        categories: ["thyroid-disorders"],
        symptoms: ["fatigue", "weight-gain", "goiter", "cold-intolerance"],
        tags: ["thyroid", "autoimmune", "hypothyroidism"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common cause of hypothyroidism in iodine-sufficient regions (US, developed countries). Autoimmune destruction of thyroid follicular cells by anti-TPO (90%) and anti-thyroglobulin (50-70%) antibodies → progressive thyroid failure. Lymphocytic infiltration with germinal centers. Goiter may be present (early) or atrophic (late). Women >> men (10:1). Gradual onset over months-years. Treatment: levothyroxine replacement.",
            pathophysiology: "AUTOIMMUNE THYROIDITIS: CD8+ T-cell mediated destruction of thyroid follicular cells + B-cell production of autoantibodies. Anti-TPO antibodies (thyroid peroxidase - enzyme for thyroid hormone synthesis) in 90-95%. Anti-thyroglobulin antibodies in 50-70%. Lymphocytic infiltration with germinal center formation (chronic inflammation). Apoptosis of follicular cells → progressive thyroid failure. PHASES: (1) EARLY (Hashitoxicosis): thyroid destruction releases preformed hormone → transient hyperthyroidism (weeks-months), low RAIU. (2) EUTHYROID: compensated destruction, ↑ TSH but normal T4 (subclinical hypothyroidism). (3) LATE: overt hypothyroidism, ↑ TSH + ↓ T4. GOITER PROGRESSION: initially enlarged from TSH stimulation + lymphocytic infiltration (Hashimoto goiter). Late stages: atrophic thyroid from complete destruction. GENETIC: HLA-DR3, DR4, DR5 associations. CTLA-4 polymorphisms. Family history common. ASSOCIATED AUTOIMMUNE DISEASES: type 1 diabetes, pernicious anemia, vitiligo, celiac, Addison disease, primary biliary cholangitis. Increased risk of thyroid lymphoma (MALT lymphoma from chronic inflammation).",
            epidemiology: "Most common cause of hypothyroidism in US and iodine-sufficient areas (worldwide, iodine deficiency still #1). Prevalence 1-2% overt hypothyroidism, 5-10% subclinical. WOMEN >> MEN (10:1 female predominance). Peak age 30-50 years (middle-aged women). Family history in 50% (genetic component). More common in Caucasians, Asians. Subclinical hypothyroidism (↑ TSH, normal T4) affects 5-10% of population, especially women >60 years. 2-5% per year progress to overt hypothyroidism (higher if anti-TPO positive).",
            riskFactors: [
                "Female sex (10:1 vs males)",
                "Age 30-50 years (peak), increases with age (10-20% women >60 have subclinical hypothyroidism)",
                "Family history of autoimmune thyroid disease (50% have positive family history)",
                "Personal history of other autoimmune diseases: type 1 diabetes, pernicious anemia, vitiligo, celiac disease, Addison disease, rheumatoid arthritis",
                "HLA-DR3, DR4, DR5 haplotypes. CTLA-4 gene polymorphisms",
                "Postpartum thyroiditis: 5-10% of women develop transient thyroiditis postpartum, 30% progress to permanent Hashimoto",
                "Down syndrome, Turner syndrome (increased autoimmune thyroid disease risk)",
                "Excess iodine intake: high dietary iodine can precipitate hypothyroidism in susceptible (Wolff-Chaikoff effect)",
                "Medications: lithium, interferon-alpha, amiodarone, immune checkpoint inhibitors (anti-PD-1, anti-CTLA-4)",
                "Radiation exposure: neck radiation, radioactive iodine treatment",
                "Pregnancy (postpartum immune rebound)"
            ],
            presentation: "ONSET: insidious, gradual over months-years. Often asymptomatic in early stages (subclinical hypothyroidism). HYPOTHYROIDISM SYMPTOMS: fatigue (most common), cold intolerance, weight gain (5-10 lbs), constipation, dry skin, hair loss (especially lateral eyebrows), menorrhagia (heavy periods), depression, slowed mentation, memory impairment, muscle weakness, bradycardia. GOITER (50%): diffuse, firm, non-tender thyroid enlargement. May have sensation of fullness in neck. Rarely causes compressive symptoms (dysphagia, dyspnea). PROGRESSION: early disease may have goiter + euthyroid. Over time → goiter shrinks (atrophic thyroiditis) as gland destroyed. Some patients have HASHITOXICOSIS: transient hyperthyroid phase (thyroid destruction releases hormone) → then progress to hypothyroidism. Symptoms: weight loss, palpitations, anxiety (lasts weeks-months). ASSOCIATED AUTOIMMUNE DISEASES: patients may have type 1 diabetes, vitiligo, pernicious anemia, celiac. THYROID LYMPHOMA (rare): rapid thyroid enlargement, compressive symptoms, hard mass (concern for malignancy).",
            physicalExam: [
                "Vital signs: bradycardia (HR 50-60 bpm), diastolic hypertension, hypothermia (severe cases)",
                "General: flat affect, slow speech, psychomotor slowing, delayed relaxation of deep tendon reflexes ('hung-up' reflexes)",
                "Thyroid: DIFFUSE, firm, NON-TENDER goiter (50% in early disease). Pebbled or bosselated surface. Rubbery consistency. May be small/atrophic in late-stage (end-stage Hashimoto). Asymmetric enlargement or hard nodule suggests lymphoma or coexisting thyroid cancer.",
                "Skin: cool, dry, rough, pale. Carotenemia (yellowish skin, spares sclera). Non-pitting edema (myxedema) of face, hands, feet.",
                "Hair: coarse, brittle hair. Loss of lateral one-third eyebrows (madarosis). Diffuse alopecia.",
                "Face: periorbital puffiness, expressionless facies",
                "Cardiovascular: bradycardia, distant heart sounds (pericardial effusion), diastolic HTN",
                "Neurologic: delayed relaxation phase of deep tendon reflexes (especially Achilles - hallmark), proximal muscle weakness, carpal tunnel signs (Tinel, Phalen)",
                "Mental status: slowed mentation, depressed mood, poor concentration",
                "Associated findings: vitiligo (depigmented patches), acanthosis nigricans (if coexistent type 1 diabetes)"
            ],
            diagnosticCriteria: "DIAGNOSIS: (1) Primary hypothyroidism: ↑ TSH + ↓ free T4 (overt) OR ↑ TSH + normal T4 (subclinical). (2) Positive anti-TPO antibodies (90-95% of Hashimoto). Anti-TPO confirms autoimmune etiology. OVERT HYPOTHYROIDISM: TSH >10 mIU/L + free T4 <0.8 ng/dL. SUBCLINICAL HYPOTHYROIDISM: TSH 5-10 + normal T4. Anti-TPO positive predicts progression to overt (2-5%/year). Thyroid biopsy NOT needed (diagnosis based on labs + antibodies). Biopsy would show lymphocytic infiltration with germinal centers, Hürthle cell metaplasia, fibrosis.",
            labs: [
                "TSH: ↑ in Hashimoto hypothyroidism (>5 mIU/L in subclinical, >10 in overt). Most sensitive screening test.",
                "Free T4: ↓ in overt hypothyroidism (<0.8 ng/dL). Normal in subclinical hypothyroidism.",
                "Anti-TPO antibodies (anti-thyroid peroxidase): POSITIVE in 90-95% of Hashimoto. Confirms autoimmune etiology. Titers correlate with severity of lymphocytic infiltration. Predicts progression of subclinical to overt hypothyroidism.",
                "Anti-thyroglobulin antibodies: positive in 50-70% of Hashimoto (less sensitive than anti-TPO). Can interfere with thyroglobulin assays (used for thyroid cancer monitoring).",
                "Free T3: not needed for diagnosis (may be normal in hypothyroidism due to compensatory ↑ T4→T3 conversion)",
                "CBC: normocytic or macrocytic anemia (associated pernicious anemia in 10% - B12 deficiency from autoimmune gastritis)",
                "Lipid panel: ↑ LDL, ↑ total cholesterol, ↑ triglycerides",
                "BMP: hyponatremia (↓ free water clearance)",
                "CK: may be elevated (myopathy)",
                "If pernicious anemia suspected: anti-intrinsic factor antibodies, methylmalonic acid, homocysteine, serum B12"
            ],
            imaging: [
                "Thyroid ultrasound: NOT routinely needed for Hashimoto diagnosis (diagnosis based on labs + antibodies). Indications: palpable nodule (rule out malignancy), asymmetric enlargement, rapid growth (concern for lymphoma). Findings: diffuse heterogeneous hypoechoic gland, coarse echotexture, decreased vascularity, pseudonodules (areas of spared tissue). May show true nodules (Hashimoto patients have increased risk of thyroid nodules and papillary thyroid cancer - 2-3× higher).",
                "Radioactive iodine uptake (RAIU): NOT used for Hashimoto diagnosis. Would show low uptake in hypothyroidism. May be used to differentiate Hashitoxicosis (low RAIU) from Graves (high RAIU) if transient hyperthyroid phase.",
                "Fine needle aspiration (FNA) biopsy: if palpable nodule or concerning ultrasound features (hypoechoic, irregular, microcalcifications, increased vascularity). Cytology: lymphocytic thyroiditis, Hürthle cells, germinal centers. FNA rarely needed for Hashimoto diagnosis.",
                "ECG: sinus bradycardia, low voltage QRS (pericardial effusion), prolonged QT",
                "If rapid thyroid enlargement or hard mass: CT/MRI neck to evaluate for thyroid lymphoma"
            ],
            differentialDiagnosis: [
                "Iodine deficiency hypothyroidism: most common cause worldwide. Low dietary iodine. Goiter (TSH stimulation). Anti-TPO negative. Geographic areas (mountainous, inland). Urinary iodine <100 mcg/L. Treat with iodine supplementation.",
                "Iatrogenic hypothyroidism: radioactive iodine treatment (for Graves), thyroidectomy, neck radiation. History of prior thyroid treatment. Anti-TPO may be negative.",
                "Subacute thyroiditis (de Quervain): PAINFUL tender thyroid (vs non-tender Hashimoto). Triphasic: hyperthyroid → hypothyroid → euthyroid. Low RAIU, very high ESR (>50). Recent viral URI. Self-limited (2-6 months).",
                "Postpartum thyroiditis: transient thyroiditis within 1 year postpartum. Triphasic like subacute but PAINLESS. Anti-TPO often positive. 30% progress to permanent hypothyroidism (Hashimoto).",
                "Drug-induced hypothyroidism: lithium (inhibits T4 release), amiodarone (iodine content + direct effects), interferon-alpha. Anti-TPO may be negative. Hypothyroidism may resolve if drug stopped.",
                "Riedel thyroiditis (rare): fibrosing thyroiditis, rock-hard thyroid (\"wooden\"), infiltrates surrounding structures. Compressive symptoms. Biopsy shows fibrosis (not lymphocytes). Associated with IgG4-related disease.",
                "Primary thyroid lymphoma: rapid thyroid enlargement, hard mass, compressive symptoms. More common in Hashimoto patients (chronic inflammation → MALT lymphoma). Biopsy diagnostic.",
                "Thyroid nodule/cancer coexisting with Hashimoto: palpable nodule, asymmetric enlargement. Ultrasound + FNA if concerning features. Hashimoto patients have 2-3× higher risk of papillary thyroid cancer."
            ],
            management: {
                acute: [
                    "Hashimoto is a chronic disease - acute management rarely needed.",
                    "MYXEDEMA COMA (rare, <1% of Hashimoto patients, but life-threatening if occurs):",
                    "  - Presentation: severe hypothyroidism + AMS/coma, hypothermia (<95°F), bradycardia, hypoventilation, hypotension. Precipitated by infection, cold, trauma, sedatives.",
                    "  - ICU admission",
                    "  - IV levothyroxine 200-400 mcg loading dose → 50-100 mcg IV daily",
                    "  - IV liothyronine (T3) 5-20 mcg bolus → 2.5-10 mcg q8h (faster onset)",
                    "  - Hydrocortisone 100 mg IV q8h (ALWAYS give before thyroid hormone - risk of adrenal crisis)",
                    "  - Supportive: passive rewarming, mechanical ventilation if needed, IV fluids (cautious), treat precipitant (infection)",
                    "HASHITOXICOSIS (transient hyperthyroid phase - rare):",
                    "  - Beta-blockers for symptom control: propranolol 20-40 mg q6h",
                    "  - Do NOT give antithyroid drugs (not producing excess hormone, just releasing stored hormone)",
                    "  - Self-limited (weeks-months). Monitor TSH - will progress to hypothyroidism."
                ],
                chronic: [
                    "LEVOTHYROXINE (synthetic T4) - STANDARD OF CARE for Hashimoto hypothyroidism:",
                    "INDICATIONS FOR TREATMENT:",
                    "  - Overt hypothyroidism (TSH >10, ↓ T4): ALWAYS treat",
                    "  - Subclinical hypothyroidism (TSH 5-10, normal T4): treat if (1) symptomatic, (2) pregnant or planning pregnancy, (3) anti-TPO positive (higher risk progression), (4) goiter, (5) cardiovascular risk factors, (6) infertility. Otherwise monitor TSH q6-12 months.",
                    "DOSING:",
                    "  - Full replacement: 1.6 mcg/kg/day (typical 100-125 mcg daily in healthy adults)",
                    "  - Elderly or cardiac disease: start LOW (25-50 mcg daily) and titrate slowly q6-8 weeks (risk of precipitating angina, arrhythmia)",
                    "  - Young, healthy: can start full replacement dose",
                    "ADMINISTRATION:",
                    "  - Take on empty stomach 30-60 minutes BEFORE breakfast (food decreases absorption by 20-40%)",
                    "  - Consistent timing daily",
                    "  - Separate from calcium, iron, PPI by 4 hours (interfere with absorption)",
                    "MONITORING:",
                    "  - Check TSH in 6-8 weeks after starting or dose change (T4 half-life 7 days → steady state in 4-6 weeks)",
                    "  - Goal TSH 0.5-2.5 mIU/L (some guidelines 0.4-4.0, but tighter control often preferred)",
                    "  - Adjust dose by 12.5-25 mcg increments based on TSH",
                    "  - Once stable: check TSH every 6-12 months lifelong",
                    "PREGNANCY:",
                    "  - Increase levothyroxine by 30-50% as soon as pregnancy confirmed (↑ thyroid hormone requirements)",
                    "  - Goal TSH <2.5 mIU/L in 1st trimester, <3.0 in 2nd-3rd trimester",
                    "  - Check TSH every 4 weeks in first half of pregnancy, then at 28-32 weeks",
                    "  - Untreated hypothyroidism in pregnancy → miscarriage, preterm birth, preeclampsia, impaired fetal neurodevelopment",
                    "  - Postpartum: decrease to pre-pregnancy dose",
                    "SUBCLINICAL HYPOTHYROIDISM MANAGEMENT:",
                    "  - TSH 5-10, normal T4. If anti-TPO positive: 2-5%/year progress to overt",
                    "  - Treat if: TSH >10, symptomatic, pregnant, anti-TPO+, goiter, infertility, cardiovascular disease",
                    "  - If not treating: monitor TSH q6-12 months",
                    "SPECIAL CONSIDERATIONS:",
                    "  - Hashitoxicosis (transient hyperthyroidism): do NOT start levothyroxine. Beta-blockers for symptoms. Monitor - will become hypothyroid.",
                    "  - Goiter: levothyroxine may shrink goiter by suppressing TSH. Large compressive goiter may need surgery.",
                    "  - Nodules: monitor with ultrasound. FNA if concerning features. Hashimoto patients have increased thyroid cancer risk.",
                    "LIFELONG TREATMENT: Hashimoto is permanent. Thyroid destruction irreversible. Levothyroxine required for life in nearly all cases."
                ]
            },
            complications: [
                "Progression to overt hypothyroidism: 2-5% per year with subclinical hypothyroidism (higher if anti-TPO positive). Eventually all Hashimoto patients develop overt hypothyroidism without treatment.",
                "Myxedema coma: rare (<1%), life-threatening. Hypothermia, AMS/coma, hypoventilation. 30-50% mortality.",
                "Cardiovascular: diastolic dysfunction, pericardial effusion, dyslipidemia (↑ LDL → atherosclerosis, CAD), heart failure",
                "Pregnancy complications (if untreated): miscarriage, preterm birth, preeclampsia, low birth weight, impaired fetal neurodevelopment (maternal T4 critical for fetal brain 1st trimester)",
                "Infertility: anovulation, menstrual irregularities. Treat hypothyroidism to restore fertility.",
                "Goiter: chronic TSH stimulation → thyroid enlargement. Rarely causes compressive symptoms (dysphagia, dyspnea). May require surgery if large.",
                "Thyroid nodules: Hashimoto patients have increased risk of thyroid nodules (30-50%). Monitor with ultrasound, FNA if concerning.",
                "Thyroid cancer: 2-3× increased risk of papillary thyroid cancer in Hashimoto patients. Proposed mechanisms: chronic inflammation, TSH stimulation. Monitor nodules carefully.",
                "Primary thyroid lymphoma (MALT lymphoma): rare but 50-100× higher risk in Hashimoto vs general population. Chronic lymphocytic infiltration → malignant transformation. Presents as rapid thyroid enlargement, hard mass, compressive symptoms. Median age 60-70 years. FNA or biopsy diagnostic.",
                "Associated autoimmune diseases: type 1 diabetes, pernicious anemia (10% - B12 deficiency), vitiligo, celiac disease, Addison disease, rheumatoid arthritis, primary biliary cholangitis",
                "Pernicious anemia: 10% of Hashimoto patients. Autoimmune gastritis → intrinsic factor deficiency → B12 deficiency. Macrocytic anemia, neurologic symptoms (paresthesias, ataxia). Check anti-intrinsic factor antibodies, B12 level.",
                "Over-treatment (iatrogenic hyperthyroidism): atrial fibrillation, osteoporosis, anxiety. Keep TSH in target range."
            ],
            prognosis: "EXCELLENT with levothyroxine treatment. Symptoms resolve in 4-8 weeks with adequate replacement (TSH normalizes in 6-8 weeks). Quality of life returns to normal. LIFELONG TREATMENT required - thyroid destruction is permanent and irreversible. Some patients (minority) report persistent symptoms despite normal TSH (controversial - may benefit from T4/T3 combination, but no clear evidence). SUBCLINICAL HYPOTHYROIDISM PROGRESSION: 2-5% per year progress to overt hypothyroidism. Higher risk if anti-TPO positive (5%/year), higher TSH, older age. GOITER: may shrink with levothyroxine (TSH suppression). Some goiters persist or enlarge despite treatment. THYROID CANCER RISK: 2-3× higher in Hashimoto. Monitor nodules with ultrasound. Papillary thyroid cancer prognosis excellent (>95% 10-year survival with treatment). LYMPHOMA RISK: rare but 50-100× higher. MALT lymphoma prognosis variable (localized disease: 80-90% 5-year survival, advanced: 50%). PREGNANCY OUTCOMES: normal with adequate levothyroxine treatment (goal TSH <2.5 in 1st trimester). UNTREATED: progressive hypothyroidism → cardiovascular morbidity, myxedema coma risk.",
            clinicalPearls: [
                "Hashimoto = most common cause of hypothyroidism in US/iodine-sufficient areas (worldwide, iodine deficiency still #1)",
                "Anti-TPO antibodies positive in 90-95% (diagnostic for autoimmune etiology). Anti-thyroglobulin positive in 50-70% (less sensitive).",
                "Classic presentation: gradual hypothyroidism + diffuse non-tender goiter + anti-TPO positive. Women 30-50 years.",
                "Goiter progression: early - enlarged (TSH stimulation + inflammation). Late - atrophic (gland destroyed).",
                "Hashitoxicosis (rare): transient hyperthyroid phase from thyroid destruction releasing stored hormone. Low RAIU (vs Graves = high RAIU). Self-limited → progresses to hypothyroidism. Do NOT treat with antithyroid drugs.",
                "Subclinical hypothyroidism (TSH 5-10, normal T4): 2-5%/year progress to overt. Treat if TSH >10, pregnant, symptomatic, anti-TPO+.",
                "Levothyroxine dosing: 1.6 mcg/kg/day (100-125 mcg typical). Elderly/cardiac: start low 25-50 mcg, titrate slowly.",
                "Check TSH 6-8 weeks after dose change (T4 half-life 7 days → steady state 4-6 weeks). Goal TSH 0.5-2.5.",
                "Pregnancy: increase levothyroxine 30-50% immediately. Goal TSH <2.5 in 1st trimester (maternal T4 critical for fetal brain).",
                "Drug interactions: separate levothyroxine from calcium, iron, PPI by 4 hours (decrease absorption by 20-40%).",
                "Associated autoimmune: type 1 DM, pernicious anemia (10%), vitiligo, celiac, Addison. Screen if clinical suspicion.",
                "Pernicious anemia in 10%: macrocytic anemia, B12 deficiency. Check anti-intrinsic factor, B12 level. Treat with B12 injections.",
                "Increased thyroid cancer risk: 2-3× higher (papillary thyroid cancer). If nodule: ultrasound + FNA if concerning (hypoechoic, irregular, microcalcifications).",
                "Thyroid lymphoma risk: rare but 50-100× higher (MALT lymphoma). Suspect if rapid thyroid enlargement, hard mass, compressive symptoms. FNA/biopsy.",
                "Hashimoto is PERMANENT. Lifelong levothyroxine required. Thyroid destruction irreversible.",
                "Do NOT confuse with Graves: Hashimoto → hypothyroidism, anti-TPO+, goiter. Graves → hyperthyroidism, TSI+, ophthalmopathy.",
                "Postpartum thyroiditis: 5-10% of women. Triphasic (hyper→hypo→euthyroid). 30% progress to permanent Hashimoto.",
                "Some patients have both Hashimoto AND Graves antibodies (TSI + anti-TPO). Can transition between hyper and hypothyroidism over time."
            ]
        }
    },

    // === DIABETES & GLUCOSE DISORDERS ===
    {
        id: "diabetes-type-1",
        name: "Type 1 Diabetes Mellitus",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["polyuria", "polydipsia", "polyphagia", "weight-loss"],
        tags: ["diabetes", "autoimmune", "insulin-deficiency", "chronic"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Autoimmune destruction of pancreatic β cells → absolute insulin deficiency. Children/young adults. Normal or thin. Acute onset (days-weeks). Ketosis-prone (DKA). Low C-peptide. Anti-GAD, anti-islet antibodies. HLA-DR3/DR4. INSULIN required for survival."
        }
    },
    {
        id: "diabetes-type-2",
        name: "Type 2 Diabetes Mellitus",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["polyuria", "polydipsia", "obesity", "acanthosis-nigricans"],
        tags: ["diabetes", "insulin-resistance", "chronic", "common"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Insulin resistance + relative insulin deficiency. Adults >40 (increasing in youth). Obese (80-90%). Gradual onset (months-years). NOT ketosis-prone (HHS more common). Normal/high C-peptide initially. Negative antibodies. Treatment: lifestyle + metformin → insulin if needed."
        }
    },
    {
        id: "diabetic-ketoacidosis",
        name: "Diabetic Ketoacidosis (DKA)",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["kussmaul-breathing", "fruity-breath", "nausea", "abdominal-pain"],
        tags: ["diabetes", "emergency", "acidosis", "acute"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Type 1 diabetes complication. Absolute insulin deficiency → lipolysis → ketones → metabolic acidosis. Glucose >250, pH <7.3, positive ketones, elevated anion gap. Kussmaul breathing, fruity breath. Treatment: IV fluids + insulin + K+ replacement."
        }
    },
    {
        id: "hyperosmolar-hyperglycemic-state",
        name: "Hyperosmolar Hyperglycemic State (HHS)",
        system: "endocrine",
        categories: ["diabetes-glucose-disorders"],
        symptoms: ["altered-mental-status", "severe-dehydration", "polyuria"],
        tags: ["diabetes", "emergency", "hyperosmolar", "acute"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Type 2 diabetes complication. Glucose >600, pH >7.3, negative ketones, very high osmolality >320. AMS/coma from hyperosmolality. NO ketoacidosis. Treatment: aggressive IV fluids + insulin. Mortality 10-20% (higher than DKA)."
        }
    },

    // === ADRENAL DISORDERS ===
    {
        id: "cushing-syndrome",
        name: "Cushing Syndrome",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["central-obesity", "moon-facies", "purple-striae", "proximal-weakness"],
        tags: ["adrenal", "cortisol-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess cortisol from any source. Cushing disease (pituitary adenoma, 70%), adrenal adenoma, ectopic ACTH, exogenous steroids. Central obesity, moon facies, buffalo hump, purple striae, proximal weakness, HTN, hyperglycemia. Screen: 24hr urine cortisol, late-night salivary cortisol, dexamethasone suppression."
        }
    },
    {
        id: "addison-disease",
        name: "Addison Disease",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["hyperpigmentation", "hypotension", "hyperkalemia", "hyponatremia"],
        tags: ["adrenal", "cortisol-deficiency", "chronic"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Primary adrenal insufficiency (cortisol + aldosterone deficiency). Autoimmune (US, 80%), TB (worldwide). Hyperpigmentation (↑ ACTH), hypotension, hyperkalemia, hyponatremia, hypoglycemia. ↓ cortisol, ↑ ACTH. ACTH stimulation test confirms. Treatment: hydrocortisone + fludrocortisone."
        }
    },
    {
        id: "primary-hyperaldosteronism",
        name: "Primary Hyperaldosteronism (Conn Syndrome)",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["hypertension", "hypokalemia", "muscle-weakness"],
        tags: ["adrenal", "aldosterone-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess aldosterone → Na+ retention, K+ loss. Adrenal adenoma (35%) or bilateral hyperplasia (65%). HTN + hypokalemia + metabolic alkalosis. ↓ renin, ↑ aldosterone. Aldosterone-to-renin ratio screening. Treatment: adenoma → surgery, hyperplasia → spironolactone."
        }
    },
    {
        id: "pheochromocytoma",
        name: "Pheochromocytoma",
        system: "endocrine",
        categories: ["adrenal-disorders"],
        symptoms: ["episodic-hypertension", "headache", "sweating", "palpitations"],
        tags: ["adrenal", "catecholamine-excess", "emergency"],
        severity: "high",
        acuity: "acute-on-chronic",
        pageType: "disease",
        detail: {
            definition: "Catecholamine-secreting tumor of adrenal medulla. Rule of 10s: 10% bilateral, extra-adrenal, malignant, familial. Episodic HTN + headache + sweating + palpitations. ↑ plasma metanephrines. Treatment: surgical resection AFTER alpha-blocker (phenoxybenzamine), then beta-blocker. NEVER beta first!"
        }
    },

    // === PITUITARY DISORDERS ===
    {
        id: "acromegaly",
        name: "Acromegaly",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["enlarged-hands-feet", "coarse-features", "macroglossia", "arthropathy"],
        tags: ["pituitary", "growth-hormone-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess GH from pituitary adenoma → ↑ IGF-1. Enlarged hands/feet, coarse facial features, frontal bossing, prognathism. Macroglossia, carpal tunnel, HTN, DM, cardiomyopathy, sleep apnea. ↑ IGF-1 screening, OGTT confirms (GH not suppressed). Treatment: transsphenoidal surgery."
        }
    },
    {
        id: "prolactinoma",
        name: "Prolactinoma",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["galactorrhea", "amenorrhea", "erectile-dysfunction"],
        tags: ["pituitary", "prolactin-excess", "chronic"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common functional pituitary tumor. Women: galactorrhea, amenorrhea, infertility. Men: erectile dysfunction, decreased libido. ↑ Prolactin >200 suggests adenoma. Treatment: dopamine agonists (cabergoline, bromocriptine) FIRST-LINE. Surgery only if medication fails."
        }
    },
    {
        id: "diabetes-insipidus",
        name: "Diabetes Insipidus (DI)",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["polyuria", "polydipsia", "hypernatremia", "nocturia"],
        tags: ["pituitary", "adh-deficiency", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "ADH deficiency (central) or kidney resistance (nephrogenic). Polyuria >3L/day, dilute urine (osmolality <300), hypernatremia. Water deprivation test: urine stays dilute. Desmopressin test: central responds (urine concentrates), nephrogenic doesn't. Treatment: central = DDAVP, nephrogenic = thiazides + NSAIDs."
        }
    },
    {
        id: "siadh",
        name: "Syndrome of Inappropriate ADH (SIADH)",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["hyponatremia", "confusion", "seizures"],
        tags: ["pituitary", "adh-excess", "acute"],
        severity: "medium",
        acuity: "acute-on-chronic",
        pageType: "disease",
        detail: {
            definition: "Excess ADH → free water retention → dilutional hyponatremia. Small cell lung cancer, CNS disorders, drugs (SSRIs, carbamazepine). Hyponatremia <135, concentrated urine (osmolality >100), euvolemic. Treatment: fluid restriction, hypertonic saline if severe, tolvaptan. Correct slowly (<8-10 mEq/L/day) to avoid osmotic demyelination."
        }
    },
    {
        id: "hypopituitarism",
        name: "Hypopituitarism",
        system: "endocrine",
        categories: ["pituitary-disorders"],
        symptoms: ["fatigue", "amenorrhea", "decreased-libido", "bitemporal-hemianopsia"],
        tags: ["pituitary", "hormone-deficiency", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Deficiency of pituitary hormones. Adenoma (mass effect), surgery, radiation, Sheehan syndrome. Order of loss: GH → LH/FSH → ACTH → TSH. Secondary adrenal/thyroid insufficiency (low target + low pituitary hormone). Bitemporal hemianopsia if optic chiasm compression. Treatment: hormone replacement."
        }
    },

    // === CALCIUM & BONE DISORDERS ===
    {
        id: "hyperparathyroidism",
        name: "Primary Hyperparathyroidism",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["kidney-stones", "bone-pain", "constipation", "confusion"],
        tags: ["parathyroid", "pth-excess", "calcium-excess", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Excess PTH from parathyroid adenoma (80%). ↑ Ca2+, ↓ PO4, ↑ PTH. 'Stones, bones, groans, psychiatric overtones' (kidney stones, bone pain, constipation, confusion). Treatment: parathyroidectomy if symptomatic or Ca >1 mg/dL above normal."
        }
    },
    {
        id: "hypoparathyroidism",
        name: "Hypoparathyroidism",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["tetany", "chvostek-sign", "trousseau-sign", "prolonged-qt"],
        tags: ["parathyroid", "pth-deficiency", "calcium-deficiency", "chronic"],
        severity: "medium",
        acuity: "acute-on-chronic",
        pageType: "disease",
        detail: {
            definition: "PTH deficiency. Post-thyroidectomy/parathyroidectomy most common. ↓ Ca2+, ↑ PO4, ↓ PTH. Tetany, Chvostek sign (facial twitch), Trousseau sign (carpopedal spasm), prolonged QT, seizures. Treatment: acute IV calcium gluconate, chronic oral calcium + vitamin D."
        }
    },
    {
        id: "osteoporosis",
        name: "Osteoporosis",
        system: "endocrine",
        categories: ["calcium-bone-disorders", "bone-disorders"],
        symptoms: ["fragility-fractures", "vertebral-compression", "kyphosis"],
        tags: ["bone", "bone-density", "chronic", "common"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "↓ Bone mass with normal mineralization. Postmenopausal, aging, steroids. Fragility fractures (vertebral, hip, wrist). DEXA T-score ≤-2.5. Normal Ca/PO4/alk phos. Treatment: bisphosphonates (alendronate), denosumab, teriparatide, calcium + vitamin D."
        }
    },
    {
        id: "osteomalacia",
        name: "Osteomalacia (Rickets in Children)",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["bone-pain", "muscle-weakness", "pseudofractures"],
        tags: ["bone", "vitamin-d-deficiency", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "↓ Bone mineralization from vitamin D deficiency. Bone pain, muscle weakness, pseudofractures (Looser zones). ↓ Ca, ↓ PO4, ↑ alk phos, ↓ vitamin D, ↑ PTH (secondary). Children: bowing legs, rachitic rosary. Treatment: vitamin D + calcium."
        }
    },
    {
        id: "pagets-disease",
        name: "Paget Disease of Bone",
        system: "endocrine",
        categories: ["calcium-bone-disorders"],
        symptoms: ["bone-pain", "deformities", "increased-hat-size", "hearing-loss"],
        tags: ["bone", "bone-turnover", "chronic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "↑ Bone turnover (excessive resorption + disorganized formation) → thick but weak bones. Older adults >50. Often asymptomatic. VERY HIGH alk phos, normal Ca/PO4. Skull enlargement (↑ hat size), hearing loss, high-output CHF. Treatment: bisphosphonates if symptomatic."
        }
    }
];

export default endocrineDiseases;

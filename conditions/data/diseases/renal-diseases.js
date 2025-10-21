// Renal diseases
const renalDiseases = [
    // ===== ACUTE KIDNEY INJURY =====
    {
        id: "prerenal-aki",
        name: "Prerenal Acute Kidney Injury",
        system: "renal",
        categories: ["acute-kidney-injury"],
        symptoms: ["oliguria", "fatigue", "confusion", "thirst"],
        tags: ["aki", "prerenal", "hypovolemia", "hypoperfusion", "reversible"],
        severity: "moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Acute kidney injury from decreased renal perfusion without intrinsic kidney damage. Most common cause of AKI (60-70%). Reversible with restoration of perfusion. Kidneys are structurally intact but hypoperfused → ↓ GFR → ↑ Cr, ↓ urine output.",
            pathophysiology: "↓ Effective circulating volume → ↓ renal perfusion pressure → afferent arteriolar vasoconstriction and RAAS activation → ↓ GFR → ↑ BUN and Cr. Tubules remain intact → avid Na and water reabsorption → concentrated urine (↑ Uosm), low urine Na (<20), low FENa (<1%). BUN rises disproportionately to Cr (BUN/Cr ratio >20) due to increased proximal tubular urea reabsorption. Prolonged hypoperfusion → ATN (intrarenal injury).",
            epidemiology: "Most common cause of AKI (60-70%). Occurs in hospitalized patients (especially ICU, post-operative), elderly, volume-depleted states. Risk factors: advanced age, CHF, cirrhosis, sepsis, diuretic use, NSAIDs/ACE inhibitors (impair autoregulation).",
            riskFactors: [
                "Hypovolemia: hemorrhage, GI losses (vomiting, diarrhea), renal losses (diuretics, osmotic diuresis), third-spacing (burns, pancreatitis)",
                "↓ Cardiac output: CHF, MI, cardiogenic shock, PE",
                "Systemic vasodilation: sepsis, anaphylaxis, cirrhosis (hepatorenal syndrome)",
                "Renal vasoconstriction: NSAIDs (↓ PG → afferent constriction), ACE inhibitors/ARBs (↓ efferent tone), contrast, hypercalcemia",
                "Advanced age, CKD, diabetes"
            ],
            presentation: [
                "Oliguria (<400 mL/day or <0.5 mL/kg/hr): early and prominent sign",
                "Signs of volume depletion: dry mucous membranes, ↓ skin turgor, orthostatic hypotension, tachycardia",
                "Thirst, dizziness, fatigue",
                "Confusion, altered mental status (if severe uremia)",
                "Symptoms of underlying cause: chest pain (MI), abdominal pain (pancreatitis, GI bleed), fever (sepsis)"
            ],
            physicalExam: [
                "Hypotension, orthostatic vital signs (BP ↓ >20 mmHg, HR ↑ >20 bpm on standing)",
                "Tachycardia",
                "Dry mucous membranes, ↓ skin turgor",
                "Flat neck veins (vs distended in cardiogenic shock)",
                "Cool extremities (↓ perfusion)",
                "Altered mental status if severe"
            ],
            diagnosticCriteria: "AKI criteria (KDIGO): ↑ Cr ≥0.3 mg/dL in 48h OR ↑ Cr ≥1.5× baseline in 7 days OR urine output <0.5 mL/kg/hr × 6h. Prerenal diagnosis: FENa <1%, urine Na <20, BUN/Cr >20, Uosm >500, rapid improvement with volume repletion. Distinguish from intrarenal (ATN has FENa >2%, muddy brown casts) and postrenal (hydronephrosis on imaging).",
            labs: [
                "BMP: ↑ Cr (compare to baseline), ↑ BUN, BUN/Cr ratio >20 (hallmark of prerenal)",
                "Urinalysis: typically bland (no casts, minimal protein), high specific gravity (concentrated urine)",
                "Urine electrolytes: urine Na <20 mEq/L (avid Na reabsorption), FENa <1% (gold standard for prerenal)",
                "FENa = [(Urine Na × Serum Cr) / (Serum Na × Urine Cr)] × 100. FENa <1% = prerenal, >2% = ATN.",
                "Urine osmolality: >500 mOsm/kg (concentrated)",
                "CBC: hemoconcentration (↑ Hct if volume depleted), anemia (if bleeding)",
                "Lactate: if sepsis or shock suspected"
            ],
            imaging: [
                "Renal ultrasound: normal kidney size and echogenicity (rules out CKD, obstruction), no hydronephrosis",
                "CXR: if CHF suspected (pulmonary edema)",
                "Echocardiography: if cardiogenic shock suspected (assess LV function)"
            ],
            differentialDiagnosis: [
                "Acute tubular necrosis (ATN): FENa >2%, urine Na >40, muddy brown granular casts, slower recovery than prerenal",
                "Acute interstitial nephritis (AIN): WBC casts, eosinophiluria, rash, fever, recent drug exposure",
                "Postrenal (obstruction): bilateral hydronephrosis on ultrasound, anuria or fluctuating oliguria",
                "Chronic kidney disease: baseline ↑ Cr, small kidneys on imaging, anemia, hyperphosphatemia",
                "Hepatorenal syndrome: cirrhosis, ascites, type 1 (rapid) or type 2 (slower), very low urine Na (<10)"
            ],
            management: {
                acute: [
                    "Volume repletion (if hypovolemic): IV isotonic saline (0.9% NaCl) 1-2 L bolus, then reassess. Goal: restore euvolemia, normalize BP, improve urine output.",
                    "Treat underlying cause: stop bleeding, antibiotics for sepsis, inotropes for cardiogenic shock (dobutamine)",
                    "Discontinue nephrotoxic agents: NSAIDs, ACE inhibitors/ARBs (transiently), contrast",
                    "Fluid challenge: give 500-1000 mL NS over 1-2 hours, measure urine output. If improves → prerenal confirmed.",
                    "Monitor: daily weights, ins/outs, BMP (Cr should improve in 24-48h if prerenal)",
                    "Avoid: aggressive diuresis (worsens prerenal), nephrotoxic antibiotics (aminoglycosides, vancomycin high trough)"
                ],
                chronic: [
                    "Prevention: avoid volume depletion in high-risk patients (elderly, CKD)",
                    "Medication adjustment: hold ACE/ARB, NSAIDs during acute illness or dehydration",
                    "Treat underlying conditions: optimize CHF management (ACE/ARB, beta-blockers, diuretics once stable), manage cirrhosis",
                    "Patient education: hydration importance, recognize early symptoms (dizziness, decreased urination)"
                ]
            },
            complications: [
                "Progression to ATN if prolonged hypoperfusion (ischemic ATN)",
                "Acute tubular injury: if prerenal not corrected in hours-days",
                "Electrolyte abnormalities: hyperkalemia, metabolic acidosis (if severe AKI)",
                "Uremia: if prolonged (rare in pure prerenal)",
                "Multi-organ dysfunction: if shock persists"
            ],
            prognosis: "Excellent if promptly recognized and treated. Cr typically normalizes within 24-48 hours after restoration of perfusion. Prolonged prerenal state (>24-48h) → risk of ATN (irreversible tubular damage). Mortality depends on underlying cause (septic shock >40%, volume depletion <5%).",
            clinicalPearls: [
                "Prerenal AKI = kidneys are normal but underperfused. FENa <1%, BUN/Cr >20, concentrated urine (Uosm >500).",
                "BUN/Cr ratio >20 is classic for prerenal (BUN reabsorbed more than Cr in proximal tubule when hypovolemic).",
                "FENa <1% = kidneys avidly retaining Na (prerenal). FENa >2% = tubules damaged (ATN), can't reabsorb Na.",
                "FENa less reliable if patient on diuretics (causes Na wasting → falsely elevated FENa). Use FEurea instead (FEurea <35% = prerenal).",
                "Fluid challenge test: give 500-1000 mL NS, if Cr improves in 24-48h → prerenal confirmed. If no improvement → intrarenal (ATN, GN).",
                "Prerenal + prolonged hypoperfusion → ATN (ischemic). Prevention is key: early volume resuscitation in shock, sepsis.",
                "NSAIDs + ACE inhibitors = 'double whammy' for prerenal AKI (NSAIDs ↓ afferent dilation, ACE inhibitors ↓ efferent constriction → ↓↓ GFR).",
                "Hepatorenal syndrome = extreme prerenal AKI in cirrhosis. Very low urine Na (<10), FENa <1%, refractory to fluids. Treat with midodrine + octreotide + albumin, or liver transplant.",
                "Cardiorenal syndrome = prerenal AKI from CHF. Treat underlying CHF (diuretics, ACE/ARB once stabilized), avoid aggressive diuresis (worsens prerenal).",
                "Prerenal AKI is REVERSIBLE if caught early. Monitor urine output, Cr, volume status closely."
            ]
        }
    },
    {
        id: "acute-tubular-necrosis",
        name: "Acute Tubular Necrosis (ATN)",
        system: "renal",
        categories: ["acute-kidney-injury"],
        symptoms: ["oliguria", "anuria", "edema", "confusion", "nausea"],
        tags: ["aki", "intrarenal", "atn", "ischemic", "nephrotoxic", "muddy-brown-casts"],
        severity: "severe",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Intrarenal AKI from tubular epithelial cell injury and necrosis, most commonly due to ischemia or nephrotoxins. Most common cause of intrarenal AKI (85%). Characterized by muddy brown granular casts, FENa >2%, and recovery over 1-3 weeks with supportive care.",
            pathophysiology: "Ischemic ATN: prolonged renal hypoperfusion → tubular cell ischemia → necrosis and apoptosis → tubular obstruction from cellular debris and casts → backleak of filtrate → ↓ GFR. Nephrotoxic ATN: direct tubular toxicity (aminoglycosides, contrast, myoglobin, hemoglobin) → cell necrosis. Tubular injury → loss of epithelial polarity → impaired Na reabsorption → FENa >2%, urine Na >40. Three phases: (1) Initiation (hours-days): injury occurs, Cr rises. (2) Maintenance/oliguric (1-3 weeks): established ATN, Cr plateaus, oliguria. (3) Recovery/polyuric: tubular regeneration, diuresis, Cr improves.",
            epidemiology: "Most common intrarenal AKI (85%). Occurs in hospitalized patients, ICU (sepsis, shock), post-operative (cardiac surgery, major surgery), contrast exposure, rhabdomyolysis. Risk factors: CKD, diabetes, elderly, volume depletion, nephrotoxic medications.",
            riskFactors: [
                "Ischemic ATN (50%): prolonged prerenal state (shock, sepsis, hypovolemia), cardiac surgery, aortic surgery, prolonged hypotension",
                "Nephrotoxic ATN (35%): aminoglycosides (gentamicin, tobramycin), contrast (iodinated), amphotericin B, cisplatin, NSAIDs, vancomycin",
                "Pigment-induced ATN: rhabdomyolysis (myoglobin, CPK >5000), hemolysis (hemoglobin), tumor lysis syndrome (uric acid crystals)",
                "Advanced age, CKD, diabetes, volume depletion, multiple nephrotoxins",
                "Sepsis (most common cause of ATN in ICU)"
            ],
            presentation: [
                "Oliguria (urine output <400 mL/day): develops over hours to days, can be non-oliguric ATN (25%)",
                "Anuria: rare in ATN (suggests obstruction, vascular catastrophe, or severe ATN)",
                "Edema: peripheral, pulmonary (volume overload from ↓ urine output)",
                "Nausea, vomiting, anorexia (uremia)",
                "Confusion, altered mental status (uremic encephalopathy)",
                "Symptoms of underlying cause: muscle pain (rhabdomyolysis), fever (sepsis), recent contrast exposure"
            ],
            physicalExam: [
                "Edema: peripheral (legs, sacrum), periorbital, pulmonary crackles (volume overload)",
                "Hypertension (volume overload)",
                "Altered mental status, asterixis (uremia)",
                "Pericardial friction rub (uremic pericarditis, rare)",
                "Evidence of underlying cause: muscle tenderness (rhabdomyolysis), signs of sepsis"
            ],
            diagnosticCriteria: "AKI criteria + evidence of tubular injury: FENa >2%, urine Na >40, muddy brown granular casts on urinalysis, isosthenuria (Uosm ~300, unable to concentrate urine). Distinguish from prerenal (FENa <1%, BUN/Cr >20, concentrated urine) and postrenal (hydronephrosis on imaging).",
            labs: [
                "BMP: ↑ Cr (progressive over days), ↑ BUN, BUN/Cr ratio <15 (both rise proportionally), hyperkalemia, metabolic acidosis, hyperphosphatemia",
                "Urinalysis: muddy brown granular casts (pathognomonic for ATN), epithelial cell casts, low specific gravity (isosthenuria)",
                "Urine electrolytes: urine Na >40 mEq/L, FENa >2% (tubules damaged, can't reabsorb Na)",
                "Urine osmolality: 250-350 mOsm/kg (isosthenuria, unable to concentrate)",
                "CBC: anemia (dilutional from volume overload, ↓ EPO if prolonged)",
                "CPK, urine myoglobin (if rhabdomyolysis suspected): CPK >5000, dark urine positive for blood but no RBCs (myoglobin)",
                "LDH, haptoglobin (if hemolysis suspected): ↑ LDH, ↓ haptoglobin"
            ],
            imaging: [
                "Renal ultrasound: normal kidney size (rules out CKD), increased echogenicity (edema), no hydronephrosis (rules out obstruction)",
                "Doppler ultrasound: if vascular occlusion suspected (rare)",
                "CXR: pulmonary edema if volume overload"
            ],
            differentialDiagnosis: [
                "Prerenal AKI: FENa <1%, BUN/Cr >20, concentrated urine, rapid improvement with fluids",
                "Acute interstitial nephritis (AIN): WBC casts, eosinophiluria, rash, fever, recent drug (beta-lactams, NSAIDs, PPIs)",
                "Glomerulonephritis: RBC casts, dysmorphic RBCs, proteinuria, hematuria, low complement (post-infectious, lupus)",
                "Postrenal AKI: bilateral hydronephrosis, anuria or fluctuating oliguria",
                "Vascular: renal artery occlusion (sudden anuria, flank pain, LDH ↑), renal vein thrombosis (flank pain, hematuria)",
                "Hepatorenal syndrome: cirrhosis, very low urine Na (<10), FENa <1%, no improvement with fluids"
            ],
            management: {
                acute: [
                    "Supportive care (mainstay): no specific treatment for ATN, supportive until tubular regeneration (1-3 weeks)",
                    "Discontinue nephrotoxins: aminoglycosides, NSAIDs, contrast, adjust drug doses for GFR",
                    "Volume management: monitor daily weights, ins/outs. If oliguric → fluid restriction (match urine output + 500 mL/day). If volume overload → furosemide 40-80 mg IV (may convert oliguric to non-oliguric, does NOT improve outcomes but easier to manage).",
                    "Electrolyte management: restrict K+ (<40 mEq/day), restrict phosphate, treat hyperkalemia (calcium gluconate, insulin + glucose, albuterol, kayexalate, dialysis if severe)",
                    "Treat metabolic acidosis: if severe (pH <7.2), give sodium bicarbonate or dialysis",
                    "Dialysis indications (AEIOU): Acidosis (refractory pH <7.1), Electrolytes (hyperkalemia >6.5 or symptomatic), Ingestion/toxins (methanol, ethylene glycol, lithium), Overload (volume overload, pulmonary edema refractory to diuretics), Uremia (pericarditis, encephalopathy, bleeding)",
                    "Nutrition: adequate calories (30-35 kcal/kg/day), protein restriction (0.8-1 g/kg/day if not on dialysis, 1.2-1.5 if on dialysis)",
                    "Prophylaxis: PPI (GI bleeding), DVT prophylaxis (heparin, SCDs)"
                ],
                chronic: [
                    "Recovery phase (1-3 weeks): tubular regeneration, polyuric phase (urine output ↑↑, may need fluid/electrolyte replacement)",
                    "Monitor: Cr (should trend down), electrolytes (hypokalemia, hypomagnesemia during polyuric phase)",
                    "Discontinue or dose-adjust medications: renally cleared drugs, nephrotoxins",
                    "Nephrology follow-up: 10-20% develop CKD after ATN (especially if severe, prolonged, recurrent)",
                    "Prevention: avoid nephrotoxins, IV fluids before contrast (if high risk), optimize hemodynamics in ICU/perioperative period"
                ]
            },
            complications: [
                "Hyperkalemia: life-threatening arrhythmias (peaked T waves, wide QRS, sine wave → VF/asystole)",
                "Volume overload: pulmonary edema, hypertension, CHF exacerbation",
                "Metabolic acidosis: severe (pH <7.1) → myocardial depression, arrhythmias, Kussmaul breathing",
                "Uremia: pericarditis (uremic rub), encephalopathy (confusion, asterixis, seizures), platelet dysfunction (bleeding)",
                "Infections: increased risk (uremia impairs immune function), catheter-associated UTI/BSI",
                "CKD: 10-20% do not fully recover, develop CKD (especially elderly, diabetic, CKD baseline, severe ATN)",
                "Death: 40-50% mortality in ICU ATN (mostly from underlying illness, not AKI itself)"
            ],
            prognosis: "Recovery in 1-3 weeks with supportive care in 80-90%. Non-oliguric ATN has better prognosis than oliguric. Mortality 10-20% (community-acquired) to 40-60% (ICU, septic shock). Predictors of poor prognosis: advanced age, oliguria, sepsis, multi-organ failure, need for dialysis. 10-20% develop CKD (incomplete recovery). Complete recovery more likely if young, no CKD, monofactorial (e.g., contrast alone).",
            clinicalPearls: [
                "ATN = tubular cell necrosis from ischemia (most common) or nephrotoxins. Muddy brown granular casts pathognomonic.",
                "FENa >2% = damaged tubules can't reabsorb Na (vs FENa <1% in prerenal where tubules intact).",
                "Three phases of ATN: (1) Initiation (injury), (2) Maintenance/oliguric (1-3 weeks, Cr plateaus), (3) Recovery/polyuric (diuresis, Cr improves).",
                "Muddy brown granular casts = sloughed tubular epithelial cells + Tamm-Horsfall protein. Classic for ATN.",
                "Non-oliguric ATN (25%): urine output maintained (>400 mL/day) but Cr still rises. Better prognosis than oliguric.",
                "Furosemide may convert oliguric → non-oliguric ATN (easier to manage volume), but does NOT improve renal recovery or mortality.",
                "Ischemic ATN: cardiac surgery, sepsis, prolonged hypotension. Nephrotoxic ATN: aminoglycosides (dose-dependent, trough >2 = toxic), contrast (esp. if CKD, volume depleted), amphotericin B.",
                "Rhabdomyolysis → pigment-induced ATN: myoglobin toxic to tubules. CPK >5000, dark urine (myoglobin), prevent with aggressive IV fluids + alkalinization (sodium bicarbonate).",
                "Contrast-induced nephropathy (CIN): Cr rises 24-48h post-contrast, peaks day 3-5. Prevent with IV fluids (0.9% NS 1 mL/kg/hr × 12h pre/post), N-acetylcysteine (debated), avoid NSAIDs.",
                "Dialysis indications = AEIOU: Acidosis, Electrolytes (hyperkalemia), Ingestion/toxin, Overload (volume), Uremia.",
                "ATN vs prerenal: both ↑ Cr, but ATN has FENa >2%, muddy brown casts, isosthenuria, does NOT improve with fluids in 24-48h.",
                "Recovery: tubular cells regenerate in 1-3 weeks. Polyuric phase → risk of dehydration, hypokalemia (replace losses)."
            ]
        }
    },
    {
        id: "acute-interstitial-nephritis",
        name: "Acute Interstitial Nephritis (AIN)",
        system: "renal",
        categories: ["acute-kidney-injury"],
        symptoms: ["rash", "fever", "oliguria", "flank-pain", "arthralgias"],
        tags: ["aki", "intrarenal", "ain", "drug-induced", "eosinophiluria", "wbc-casts"],
        severity: "moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Intrarenal AKI from immune-mediated inflammation of the renal interstitium and tubules, most commonly caused by medications (70-80%). Classic triad (in only 10%): fever, rash, eosinophilia. Diagnosis: WBC casts, eosinophiluria, temporal association with offending drug. Treatment: discontinue drug, corticosteroids if severe.",
            pathophysiology: "Drug-induced (most common): Type IV hypersensitivity (delayed, T-cell mediated) against drug hapten bound to tubular cells → interstitial inflammation (lymphocytes, eosinophils, plasma cells) → tubular injury → AKI. Infection-induced: direct microbial invasion or immune-mediated (post-infectious). Autoimmune: Sjögren, SLE, sarcoidosis → granulomatous interstitial inflammation. Interstitial edema and inflammation → tubular obstruction, compression → ↓ GFR.",
            epidemiology: "Accounts for 10-15% of AKI cases. Drug-induced AIN most common (70-80%). Can occur at any age, but more common in elderly (polypharmacy). Onset typically 7-10 days after drug exposure (can be days to months). Risk factors: multiple medications, elderly, underlying CKD.",
            riskFactors: [
                "Medications (70-80%): beta-lactam antibiotics (penicillins, cephalosporins, especially methicillin), NSAIDs (can cause AIN + nephrotic syndrome), PPIs (omeprazole, pantoprazole), rifampin, sulfonamides, allopurinol, 5-ASA (mesalamine)",
                "Infections (10-15%): legionella, leptospirosis, Mycoplasma, CMV, EBV, streptococcus",
                "Autoimmune: Sjögren syndrome, SLE, sarcoidosis (granulomatous AIN), IgG4-related disease",
                "Idiopathic (5%)"
            ],
            presentation: [
                "Acute kidney injury: ↑ Cr over days-weeks, oliguria (may be non-oliguric)",
                "Classic triad (only 10% of cases): fever, maculopapular rash, eosinophilia (think drug allergy)",
                "Fever (30-35%): low-grade, occurs days-weeks after drug initiation",
                "Rash (15%): maculopapular, pruritic, diffuse (allergic reaction)",
                "Flank pain (rare): from renal capsular distension/edema",
                "Arthralgias, myalgias (drug reaction)",
                "Gross hematuria (rare)",
                "Symptoms develop 7-10 days after drug exposure (can be days to months)"
            ],
            physicalExam: [
                "Fever (low-grade)",
                "Maculopapular rash: diffuse, erythematous, may be pruritic",
                "Flank tenderness (mild)",
                "Hypertension (from volume retention)",
                "Edema (peripheral, if volume overload)"
            ],
            diagnosticCriteria: "Clinical diagnosis: AKI + temporal association with offending drug (started 7-10 days prior) + urinary findings (WBC casts, eosinophiluria, sterile pyuria). Gold standard: renal biopsy (interstitial inflammation with eosinophils, lymphocytes, tubulitis). Classic triad (fever, rash, eosinophilia) present in <10%, so absence does NOT rule out AIN.",
            labs: [
                "BMP: ↑ Cr (acute rise over days-weeks), ↑ BUN, possible hyperkalemia or metabolic acidosis",
                "CBC: eosinophilia (>5%, present in 30-40%), leukocytosis",
                "Urinalysis: WBC casts (pathognomonic for AIN), eosinophiluria (Hansel stain, >1% eosinophils), sterile pyuria (WBCs but negative culture), mild proteinuria (<1.5 g/day), hematuria (microscopic), RBC casts rare",
                "Urine culture: negative (sterile pyuria, vs UTI which has positive culture)",
                "FENa: variable (usually >1% but can be <1% with NSAIDs)",
                "IgE: may be elevated (allergic reaction)",
                "Complement levels: normal (vs low in GN)"
            ],
            imaging: [
                "Renal ultrasound: normal to enlarged kidneys (interstitial edema), increased echogenicity, no hydronephrosis",
                "Gallium-67 scan: increased bilateral renal uptake (historically used, rarely done now)"
            ],
            differentialDiagnosis: [
                "Acute tubular necrosis (ATN): muddy brown granular casts, no eosinophiluria, FENa >2%, no rash/fever",
                "Glomerulonephritis: RBC casts, dysmorphic RBCs, significant proteinuria (>3.5 g/day), low complement (post-infectious, lupus)",
                "Pyelonephritis: fever, flank pain, CVA tenderness, positive urine culture (vs sterile pyuria in AIN), pyuria without eosinophils",
                "Prerenal AKI: FENa <1%, BUN/Cr >20, bland urinalysis, improves with fluids",
                "Postrenal AKI: hydronephrosis on ultrasound, anuria or fluctuating oliguria",
                "NSAID-induced nephrotic syndrome: heavy proteinuria (>3.5 g/day), edema, hypoalbuminemia (vs mild proteinuria in AIN)"
            ],
            management: {
                acute: [
                    "Discontinue offending medication (most critical step): identify and stop the causative drug immediately. Recovery expected in 1-3 weeks if caught early.",
                    "Supportive care: fluid management, monitor electrolytes, avoid nephrotoxins",
                    "Corticosteroids: prednisone 1 mg/kg/day × 4-6 weeks, then taper. Indications: severe AKI (Cr >3, oliguria), prolonged AIN (>2 weeks), biopsy-proven AIN not improving after stopping drug. May improve recovery if given early (<1-2 weeks), less effective if delayed.",
                    "Dialysis: if severe AKI with AEIOU indications (acidosis, electrolytes, ingestion, overload, uremia)",
                    "Monitor: daily BMP, urine output, ins/outs. Cr should improve in 1-3 weeks after stopping drug."
                ],
                chronic: [
                    "Avoid re-exposure: document drug allergy, patient education (avoid future use of offending drug or related class)",
                    "Follow-up: nephrology, monitor Cr (10-40% develop residual CKD, especially if delayed treatment)",
                    "Screen for CKD complications: proteinuria, anemia, bone disease if Cr doesn't normalize",
                    "Medication review: avoid nephrotoxins, adjust doses for GFR"
                ]
            },
            complications: [
                "Chronic kidney disease (CKD): 10-40% have incomplete recovery, especially if delayed diagnosis/treatment, prolonged AIN (>3 weeks), elderly, CKD baseline",
                "Interstitial fibrosis: chronic inflammation → scarring → CKD",
                "Papillary necrosis: rare complication of NSAID-induced AIN",
                "Need for dialysis: if severe AKI (rare, <5%)",
                "Recurrence: if re-exposed to same or cross-reactive drug"
            ],
            prognosis: "Generally good if drug stopped early. Complete recovery in 60-90% if drug discontinued within 1-2 weeks. Recovery slower than ATN (weeks to months). Residual CKD in 10-40%, especially if delayed treatment (>3 weeks), elderly, biopsy showing fibrosis. Corticosteroids may improve recovery if given early, but controversial. Mortality low (<5%).",
            clinicalPearls: [
                "AIN = drug-induced allergic reaction in kidneys. Classic triad (fever, rash, eosinophilia) in <10%, so don't wait for it!",
                "WBC casts on urinalysis = AIN (vs RBC casts = GN, muddy brown = ATN, no casts = prerenal).",
                "Eosinophiluria (Hansel stain >1%) suggests AIN, but only 60-70% sensitive. Absence doesn't rule out AIN.",
                "Most common drugs: beta-lactams (penicillins, cephalosporins), NSAIDs, PPIs, rifampin, allopurinol.",
                "NSAIDs → two patterns: (1) AIN (common), (2) AIN + nephrotic syndrome (minimal change disease) - unique to NSAIDs.",
                "Onset: typically 7-10 days after starting drug, but can be days to months (especially NSAIDs, which can cause AIN after months-years).",
                "Sterile pyuria = pyuria (WBCs in urine) but negative culture. DDx: AIN, TB, chlamydia, appendicitis near ureter.",
                "Treatment: STOP THE DRUG (most important). Corticosteroids (prednisone 1 mg/kg/day) if severe or not improving in 1-2 weeks.",
                "Biopsy findings: interstitial edema, inflammatory infiltrate (lymphocytes, eosinophils, plasma cells), tubulitis (inflammation of tubules).",
                "PPI-induced AIN: increasingly recognized (omeprazole, pantoprazole), can occur months-years after starting PPI. Consider in anyone on chronic PPI with unexplained AKI.",
                "Prognosis: 60-90% recover if drug stopped early. Delayed treatment (>3 weeks) → risk of CKD from interstitial fibrosis.",
                "Document drug allergy in chart and educate patient to avoid re-exposure (can cause recurrent AIN, worse prognosis)."
            ]
        }
    },
    {
        id: "postrenal-aki",
        name: "Postrenal Acute Kidney Injury (Obstructive Uropathy)",
        system: "renal",
        categories: ["acute-kidney-injury"],
        symptoms: ["anuria", "flank-pain", "suprapubic-pain", "urinary-retention", "hematuria"],
        tags: ["aki", "postrenal", "obstruction", "hydronephrosis", "bph", "stones"],
        severity: "moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Acute kidney injury from obstruction of urinary flow anywhere from renal pelvis to urethra. Requires bilateral obstruction (or unilateral if single functioning kidney) to cause AKI. Reversible if relieved within hours-days. Causes: BPH (most common in men >50), stones, malignancy, retroperitoneal fibrosis, neurogenic bladder.",
            pathophysiology: "Urinary obstruction → ↑ intratubular pressure → ↓ net filtration pressure → ↓ GFR → AKI. Early (hours): afferent arteriolar dilation → maintained RBF but ↑ pressure. Late (>24h): afferent vasoconstriction → ↓ RBF → ischemia. Prolonged obstruction (days-weeks) → tubular atrophy, interstitial fibrosis → irreversible CKD. Must be bilateral (or unilateral if single kidney) to cause AKI. Upper tract (ureters): hydronephrosis. Lower tract (bladder/urethra): bladder distension, bilateral hydroureteronephrosis.",
            epidemiology: "Accounts for 5-10% of AKI. More common in elderly men (BPH), patients with pelvic malignancy, neurologic disease (neurogenic bladder). Bilateral ureteral obstruction rare (malignancy, retroperitoneal fibrosis). Bladder outlet obstruction most common (BPH, urethral stricture).",
            riskFactors: [
                "Benign prostatic hyperplasia (BPH): most common in men >50, progressive urinary retention",
                "Urolithiasis: bilateral stones or unilateral in single kidney, staghorn calculi",
                "Malignancy: prostate, bladder, cervical, colon (extrinsic compression of ureters), retroperitoneal lymphoma/lymphadenopathy",
                "Retroperitoneal fibrosis: idiopathic or drug-induced (methysergide, beta-blockers), compresses ureters",
                "Neurogenic bladder: diabetes, spinal cord injury, MS (detrusor-sphincter dyssynergia)",
                "Urethral stricture: prior instrumentation, infection, trauma",
                "Papillary necrosis: diabetes, sickle cell, analgesic nephropathy (sloughed papillae obstruct ureter)",
                "Blood clots: trauma, anticoagulation, gross hematuria"
            ],
            presentation: [
                "Anuria or severe oliguria: sudden onset, fluctuating pattern (intermittent obstruction)",
                "Bilateral flank pain: dull, aching (hydronephrosis stretches renal capsule)",
                "Suprapubic pain, bladder fullness: bladder outlet obstruction (BPH, stricture)",
                "Urinary retention: inability to void, urgency, dribbling, hesitancy (BPH symptoms)",
                "Hematuria: gross or microscopic (stones, malignancy, papillary necrosis)",
                "Polyuria after relief: post-obstructive diuresis (osmotic, tubular dysfunction)",
                "No symptoms: chronic partial obstruction can be asymptomatic"
            ],
            physicalExam: [
                "Suprapubic mass: palpable distended bladder (bladder outlet obstruction)",
                "Flank tenderness: CVA tenderness (hydronephrosis)",
                "Digital rectal exam (DRE): enlarged prostate (BPH), nodular/hard (prostate cancer)",
                "Pelvic exam (women): pelvic mass (cervical/ovarian cancer compressing ureters)",
                "Abdominal exam: palpable kidneys (hydronephrosis, rare unless severe)",
                "Neurologic exam: sensory level, rectal tone (spinal cord injury → neurogenic bladder)"
            ],
            diagnosticCriteria: "AKI + evidence of obstruction: bilateral hydronephrosis on renal ultrasound OR bladder distension with elevated post-void residual (>200-300 mL). Bladder scan or catheterization confirms bladder outlet obstruction. CT abdomen/pelvis (if ultrasound equivocal): identifies level and cause of obstruction (stone, mass, RPF).",
            labs: [
                "BMP: ↑ Cr (acute rise with obstruction), ↑ BUN, hyperkalemia (if severe AKI), metabolic acidosis",
                "Urinalysis: variable (bland if obstruction alone, hematuria if stones/malignancy, pyuria if infection), pH often neutral",
                "Urine culture: if pyuria or fever (obstructive uropathy + infection = emergency)",
                "FENa: variable (prerenal picture early if partial obstruction, >2% if prolonged)",
                "BUN/Cr ratio: variable (can be <15 or >20 depending on chronicity)",
                "PSA (men >50): if BPH or prostate cancer suspected (↑ in cancer, mildly ↑ in BPH)"
            ],
            imaging: [
                "Renal ultrasound (first-line): bilateral hydronephrosis (dilated collecting system, calyces), hydroureter, bladder distension. Sensitivity ~90% for obstruction. Can be false-negative if early (<24h), volume depleted, or retroperitoneal fibrosis (non-dilated system).",
                "Bladder scan: post-void residual (PVR) >200-300 mL = bladder outlet obstruction. Non-invasive, bedside.",
                "CT abdomen/pelvis without contrast (if ultrasound equivocal or need to identify cause): identifies stones (radiopaque), masses, retroperitoneal fibrosis, level of obstruction. Gold standard for stones.",
                "CT with contrast (if malignancy suspected): better visualization of masses, lymphadenopathy",
                "Retrograde pyelogram: if CT equivocal, defines level and cause of ureteral obstruction",
                "Voiding cystourethrogram (VCUG): if urethral stricture or bladder dysfunction suspected"
            ],
            differentialDiagnosis: [
                "Prerenal AKI: no hydronephrosis, FENa <1%, BUN/Cr >20, improves with fluids",
                "Acute tubular necrosis (ATN): muddy brown casts, FENa >2%, no hydronephrosis",
                "Acute interstitial nephritis: WBC casts, eosinophiluria, rash, fever, no hydronephrosis",
                "Chronic kidney disease: bilateral small kidneys, baseline ↑ Cr, no acute obstruction",
                "Bilateral renal artery stenosis: severe hypertension, flash pulmonary edema, bruit, no hydronephrosis",
                "Neurogenic bladder (chronic): bladder distension but no acute obstruction, history of neurologic disease"
            ],
            management: {
                acute: [
                    "Urgent decompression (if bilateral obstruction or infected obstructed system):",
                    "- Foley catheter: if bladder outlet obstruction (BPH, stricture). Immediate relief if successful.",
                    "- Percutaneous nephrostomy: if upper tract obstruction (stones, malignancy, RPF), performed by interventional radiology",
                    "- Ureteral stent: if ureteral obstruction (stones, malignancy), placed by urology via cystoscopy",
                    "Treat infection urgently: if obstructed + infected (pyonephrosis, obstructive pyelonephritis) → sepsis risk. Antibiotics (broad-spectrum, e.g., ceftriaxone + metronidazole) + decompression emergently.",
                    "Manage post-obstructive diuresis: after relief, expect polyuria (urine output >200 mL/hr). Replace losses with 0.45% NaCl IV (half normal saline) to match urine output (mL for mL) - 50-75% replacement. Monitor electrolytes (hypokalemia, hyponatremia, hypomagnesemia). Usually self-limited in 24-48h.",
                    "Monitor: BMP (Cr should improve in 24-72h after decompression), urine output, volume status",
                    "Pain control: NSAIDs, opioids (if stones)"
                ],
                chronic: [
                    "Treat underlying cause:",
                    "- BPH: alpha-blockers (tamsulosin, terazosin), 5-alpha-reductase inhibitors (finasteride), TURP if refractory",
                    "- Stones: ureteroscopy, lithotripsy, percutaneous nephrolithotomy (if large), hydration, stone prevention (citrate, thiazides)",
                    "- Malignancy: chemotherapy, radiation, surgery, palliative stenting",
                    "- Retroperitoneal fibrosis: corticosteroids, ureterolysis (surgical)",
                    "- Neurogenic bladder: intermittent self-catheterization, anticholinergics (oxybutynin), Botox injections",
                    "Follow-up: urology, nephrology if CKD develops (incomplete recovery)",
                    "Monitor for recurrence: repeat imaging if symptoms recur"
                ]
            },
            complications: [
                "Chronic kidney disease (CKD): if obstruction prolonged (>1-2 weeks), irreversible tubular atrophy and fibrosis → CKD",
                "Post-obstructive diuresis: polyuria (urine output >200 mL/hr) after relief, can lead to severe volume depletion and electrolyte abnormalities (hypokalemia, hyponatremia) if not replaced",
                "Infection: obstructed + infected system = pyonephrosis → sepsis (life-threatening). Requires emergent decompression + antibiotics.",
                "Bladder rupture: if severe bladder distension (rare)",
                "Recurrent obstruction: if underlying cause not treated (BPH, malignancy)",
                "Urosepsis: if infected obstructed kidney (pyonephrosis) not decompressed → septic shock, multi-organ failure"
            ],
            prognosis: "Excellent if obstruction relieved promptly (<48h). Cr typically normalizes in 24-72h. Prolonged obstruction (>1-2 weeks) → risk of incomplete recovery and CKD (10-30%). Bilateral obstruction >4 weeks → high risk of ESRD. Post-obstructive diuresis usually self-limited in 24-48h. Prognosis depends on underlying cause (stones = good, malignancy = poor).",
            clinicalPearls: [
                "Postrenal AKI = obstruction. Must be bilateral (or unilateral if single kidney) to cause AKI. Only 5-10% of AKI.",
                "Sudden anuria = think postrenal (or bilateral renal artery occlusion, but rare). Immediate bladder scan or Foley catheter.",
                "Renal ultrasound: first-line imaging. Bilateral hydronephrosis = postrenal AKI. Can be false-negative if early (<24h), volume depleted, or RPF.",
                "Bladder scan (PVR >200-300 mL) or Foley catheter: confirms bladder outlet obstruction (BPH, stricture). Immediate relief if BPH.",
                "Fluctuating oliguria/anuria = intermittent obstruction (stone moving, clot, extrinsic compression).",
                "Post-obstructive diuresis: polyuria (>200 mL/hr) after relief of obstruction. Osmotic (urea, glucose) + tubular dysfunction (can't concentrate urine). Replace 50-75% of urine output with 0.45% NaCl to prevent volume depletion.",
                "Obstructed + infected = pyonephrosis = EMERGENCY. Sepsis risk. Decompression (nephrostomy, stent, Foley) + antibiotics urgently.",
                "BPH: most common cause of postrenal AKI in men >50. Symptoms: hesitancy, weak stream, dribbling, nocturia, retention.",
                "Malignancy: cervical, prostate, bladder, colon → extrinsic compression of ureters. Retroperitoneal lymphadenopathy (lymphoma) can compress both ureters.",
                "Retroperitoneal fibrosis (RPF): idiopathic or drug-induced (methysergide, beta-blockers). Medial deviation of ureters on imaging (vs lateral deviation in malignancy).",
                "Papillary necrosis: diabetes, sickle cell, analgesic abuse. Sloughed renal papillae → ureteral obstruction. Imaging: 'ring sign' (sloughed papilla in collecting system).",
                "Treatment: decompress urgently (Foley, nephrostomy, stent), treat infection, manage post-obstructive diuresis, treat underlying cause (BPH, stones, malignancy)."
            ]
        }
    },

    // ===== CHRONIC KIDNEY DISEASE =====
    {
        id: "ckd-stage-3",
        name: "Chronic Kidney Disease Stage 3 (Moderate)",
        system: "renal",
        categories: ["chronic-kidney-disease"],
        symptoms: ["fatigue", "mild-edema", "hypertension"],
        tags: ["ckd", "gfr-30-59", "moderate", "progressive"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "CKD Stage 3 = GFR 30-59 mL/min/1.73m² for ≥3 months. Subdivided into 3a (GFR 45-59) and 3b (GFR 30-44). Moderate reduction in kidney function. Often asymptomatic or mild symptoms. Focus: slow progression, manage complications (HTN, anemia, bone disease), prepare for Stage 4-5.",
            pathophysiology: "Progressive nephron loss (from DM, HTN, GN, PKD, etc.) → remaining nephrons hyperfiltrate and hypertrophy → glomerular capillary HTN and proteinuria → further nephron loss (vicious cycle). Stage 3: ~50-70% nephron loss. Complications begin: ↓ EPO → anemia, ↓ calcitriol → hyperparathyroidism, ↓ phosphate excretion → hyperphosphatemia. HTN from Na retention and RAAS activation. Uremia minimal at this stage.",
            epidemiology: "Most common CKD stage (~7% of US adults). Prevalence increases with age (25% in adults >70). Often discovered incidentally on routine labs. Stage 3a often asymptomatic, 3b may have mild symptoms. Risk factors: diabetes (40%), hypertension (30%), family history, age >60, African American, obesity.",
            riskFactors: [
                "Diabetes mellitus (most common cause, 40% of CKD)",
                "Hypertension (second most common, 30%)",
                "Glomerulonephritis (IgA nephropathy, FSGS, lupus)",
                "Polycystic kidney disease (PKD)",
                "Chronic pyelonephritis, reflux nephropathy",
                "Nephrolithiasis (recurrent)",
                "Prolonged NSAID use, analgesic nephropathy",
                "Age >60, African American, family history, obesity, smoking"
            ],
            presentation: [
                "Often asymptomatic (especially 3a): discovered on routine labs (↑ Cr)",
                "Fatigue: mild, from early anemia (↓ EPO)",
                "Hypertension: from Na/water retention and RAAS activation",
                "Mild edema: lower extremity, periorbital (from impaired Na excretion)",
                "Nocturia: loss of concentrating ability (isosthenuria)",
                "Foamy urine: if significant proteinuria (diabetic nephropathy, GN)",
                "Bone pain (rare at Stage 3, more common in 4-5): if secondary hyperparathyroidism severe"
            ],
            physicalExam: [
                "Hypertension (present in >75%)",
                "Mild peripheral edema (lower extremities)",
                "Pallor (if anemia)",
                "Normal exam otherwise (no uremic signs at Stage 3)"
            ],
            diagnosticCriteria: "GFR 30-59 mL/min/1.73m² for ≥3 months. Calculate GFR using CKD-EPI equation (based on Cr, age, sex, race). Stage 3a: GFR 45-59 (mild-moderate). Stage 3b: GFR 30-44 (moderate-severe, higher risk). Also assess albuminuria: A1 (<30 mg/g), A2 (30-300), A3 (>300) → higher albumin = worse prognosis.",
            labs: [
                "BMP: ↑ Cr (1.5-3.0 mg/dL typically), calculate GFR (30-59), mild metabolic acidosis (HCO3 20-24), K+ usually normal (hyperkalemia rare until Stage 4-5)",
                "GFR calculation: CKD-EPI equation (most accurate), based on Cr, age, sex, race",
                "Urinalysis: proteinuria (if diabetic or GN), hematuria (if GN), sediment usually bland in Stage 3",
                "Albumin/creatinine ratio (spot urine): A1 (<30 mg/g = normal), A2 (30-300 = microalbuminuria), A3 (>300 = macroalbuminuria)",
                "CBC: normocytic anemia (Hb 10-12 g/dL) from ↓ EPO, may be normal in early Stage 3",
                "Phosphate, calcium, PTH: ↑ phosphate (mild), ↓ calcium (mild), ↑ PTH (secondary hyperparathyroidism)",
                "Hemoglobin A1c (if diabetic): goal <7% to slow progression"
            ],
            imaging: [
                "Renal ultrasound: kidney size (normal or slightly small in Stage 3, <9 cm suggests chronicity), echogenicity (increased = fibrosis), cysts (PKD), hydronephrosis (obstruction)",
                "No routine imaging needed unless evaluating cause (PKD, obstruction, masses)"
            ],
            differentialDiagnosis: [
                "Acute kidney injury (AKI): rapid rise in Cr (days-weeks), reversible, normal kidney size on ultrasound",
                "CKD Stage 2 (GFR 60-89): milder, often asymptomatic, no anemia",
                "CKD Stage 4 (GFR 15-29): more severe, symptomatic uremia, worse anemia/bone disease",
                "Acute-on-chronic kidney disease: baseline CKD with superimposed AKI (infection, volume depletion, contrast)"
            ],
            management: {
                acute: [
                    "Identify and treat reversible causes: volume depletion, obstruction, nephrotoxic drugs (NSAIDs, contrast), infection (UTI, pyelonephritis)",
                    "Hold nephrotoxic medications: NSAIDs, aminoglycosides, contrast (use with caution, pre-hydrate if necessary)",
                    "Optimize volume status: avoid dehydration (worsens GFR), avoid overload (worsens HTN, edema)"
                ],
                chronic: [
                    "Slow progression (most important goal):",
                    "- BP control: goal <130/80 (or <120/80 if albuminuria >300). ACE inhibitors (lisinopril, enalapril) or ARBs (losartan, valsartan) FIRST-LINE (reduce proteinuria, slow progression). Avoid if K+ >5.5 or GFR <30.",
                    "- Proteinuria reduction: ACE/ARB reduces proteinuria (renoprotective), goal <500 mg/day",
                    "- Diabetes control: A1c <7%, SGLT2 inhibitors (empagliflozin, dapagliflozin) slow CKD progression in diabetics",
                    "- Avoid nephrotoxins: NSAIDs, aminoglycosides, chronic PPIs (AIN risk)",
                    "Manage complications:",
                    "- Anemia (if Hb <10): erythropoiesis-stimulating agents (ESA) - epoetin alfa, darbepoetin. Goal Hb 10-11.5 g/dL. Also give iron supplementation (ferrous sulfate 325 mg TID or IV iron if oral intolerant).",
                    "- Bone disease (CKD-MBD): phosphate binders (calcium acetate, sevelamer) if phosphate >4.5, vitamin D (calcitriol) if ↓, calcimimetics (cinacalcet) if PTH >300.",
                    "- Hyperkalemia: low-K+ diet (<2 g/day), avoid K-sparing diuretics, kayexalate or patiromer if K+ >5.5",
                    "- Metabolic acidosis: sodium bicarbonate 650 mg PO TID if HCO3 <22 (slows CKD progression)",
                    "Cardiovascular risk reduction: statin (atorvastatin 40-80 mg), aspirin (if CAD), smoking cessation",
                    "Dietary modification: protein restriction (0.8 g/kg/day, not too low or risk malnutrition), low Na (<2 g/day), low K+ if hyperkalemia",
                    "Vaccinations: influenza (annual), pneumococcal (PPSV23 + PCV13), hepatitis B (for future dialysis)",
                    "Nephrology referral: all Stage 3b (GFR <45), rapidly declining GFR (>5 mL/min/year), heavy proteinuria (>500 mg/day), refractory HTN, anemia"
                ]
            },
            complications: [
                "Progression to Stage 4-5 ESRD: 1-2% per year for Stage 3a, 5-10% per year for Stage 3b",
                "Cardiovascular disease (most common cause of death): MI, stroke, CHF (uremia accelerates atherosclerosis)",
                "Anemia: normocytic, from ↓ EPO production",
                "CKD-mineral bone disease (CKD-MBD): secondary hyperparathyroidism, renal osteodystrophy, vascular calcification",
                "Hyperkalemia: risk increases with ACE/ARB use, dietary K+ intake",
                "Metabolic acidosis: ↓ HCO3 reabsorption and ↓ H+ excretion",
                "Volume overload: HTN, edema, CHF exacerbation",
                "Acute-on-chronic kidney disease: baseline CKD with superimposed AKI (NSAIDs, contrast, sepsis)"
            ],
            prognosis: "Highly variable depending on cause, rate of progression, and management. Stage 3a: low risk of progression to ESRD (1-2%/year), higher risk of CV death than ESRD. Stage 3b: moderate risk of ESRD (5-10%/year). Predictors of rapid progression: heavy proteinuria (>1 g/day), uncontrolled DM/HTN, African American, younger age at diagnosis. ACE/ARB and BP control significantly slow progression. 10-year ESRD risk: Stage 3a ~5%, Stage 3b ~15-20%.",
            clinicalPearls: [
                "Stage 3 CKD = GFR 30-59. Subdivided: 3a (45-59), 3b (30-44). 3b is higher risk for progression.",
                "CKD-EPI equation: most accurate GFR estimate (based on Cr, age, sex, race). Don't use Cockcroft-Gault (overestimates).",
                "ACE inhibitors or ARBs: FIRST-LINE for CKD with proteinuria or diabetes. Slow progression by reducing proteinuria and glomerular HTN. Monitor K+ and Cr (expect Cr to rise 10-30% initially, acceptable).",
                "SGLT2 inhibitors (empagliflozin, dapagliflozin): slow CKD progression in diabetics, reduce CV events. Use even if GFR 25-60.",
                "Anemia of CKD: normocytic, hypoproliferative (low reticulocyte count). Check iron studies (ferritin, TSAT), start ESA if Hb <10, goal 10-11.5 (NOT >13, risk of thrombosis).",
                "CKD-MBD starts in Stage 3: ↑ phosphate → ↓ calcitriol → ↑ PTH (secondary hyperparathyroidism). Treat with phosphate binders, vitamin D, calcimimetics if PTH >300.",
                "Most common cause of death in CKD Stage 3: cardiovascular disease (MI, stroke), NOT kidney failure. Aggressive CV risk reduction (statin, aspirin, BP control).",
                "Progression risk: proteinuria >1 g/day, uncontrolled DM/HTN, African American, rapid GFR decline (>5 mL/min/year). Refer to nephrology if Stage 3b or any high-risk features.",
                "Avoid nephrotoxins: NSAIDs (↓ GFR, worsen HTN), aminoglycosides, contrast (pre-hydrate with 0.9% NS if needed). Adjust drug doses for GFR (vancomycin, metformin, gabapentin).",
                "Sodium bicarbonate: if HCO3 <22, give 650 mg PO TID. Slows CKD progression and bone disease (prevents buffering by bone → osteodystrophy).",
                "Stage 3 is often asymptomatic. Screen high-risk patients (DM, HTN, age >60) with Cr and urinalysis annually."
            ]
        }
    },
    {
        id: "ckd-stage-4",
        name: "Chronic Kidney Disease Stage 4 (Severe)",
        system: "renal",
        categories: ["chronic-kidney-disease"],
        symptoms: ["fatigue", "nausea", "edema", "dyspnea", "pruritus", "metallic-taste"],
        tags: ["ckd", "gfr-15-29", "severe", "pre-esrd", "uremia"],
        severity: "severe",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "CKD Stage 4 = GFR 15-29 mL/min/1.73m² for ≥3 months. Severe reduction in kidney function (~85-90% nephron loss). Symptomatic uremia common. Focus: prepare for renal replacement therapy (dialysis or transplant), manage complications aggressively, slow progression to ESRD.",
            pathophysiology: "Advanced nephron loss → severe ↓ GFR → accumulation of uremic toxins (urea, creatinine, phosphate, K+, organic acids) → symptomatic uremia. Complications: severe anemia (↓ EPO), CKD-MBD (↑↑ PTH, ↑ phosphate, ↓ calcitriol → renal osteodystrophy, vascular calcification), metabolic acidosis, hyperkalemia, volume overload (↓ Na excretion), cardiovascular disease accelerated by uremia. Progression to Stage 5 ESRD often inevitable (median 1-2 years).",
            epidemiology: "Less common than Stage 3 (~0.5-1% of US adults). Progression from Stage 3 (5-10% of Stage 3 patients progress per year). Mean time to ESRD: 1-2 years. Risk factors same as earlier stages: diabetes (40%), hypertension (30%), glomerulonephritis, PKD.",
            riskFactors: [
                "Diabetes mellitus (most common, 40%)",
                "Hypertension (30%)",
                "Glomerulonephritis (IgA, FSGS, lupus)",
                "Polycystic kidney disease (PKD)",
                "Reflux nephropathy, chronic pyelonephritis",
                "Prolonged NSAID use, analgesic nephropathy",
                "African American, family history, age >60"
            ],
            presentation: [
                "Fatigue: severe, from anemia and uremia (most common symptom)",
                "Nausea, vomiting, anorexia: uremic gastropathy, ↑ BUN → ammonia → GI irritation",
                "Metallic taste (dysgeusia): uremia affects taste buds",
                "Pruritus: severe, from phosphate retention and uremia (can be debilitating)",
                "Edema: lower extremity, periorbital, pulmonary (volume overload from ↓ Na excretion)",
                "Dyspnea: pulmonary edema (volume overload), anemia, metabolic acidosis (Kussmaul breathing if severe)",
                "Nocturia, polyuria: loss of concentrating ability (isosthenuria)",
                "Bone pain: renal osteodystrophy (secondary hyperparathyroidism → bone resorption)",
                "Restless legs syndrome: uremia (↑ in CKD)",
                "Cognitive impairment: uremic encephalopathy (confusion, poor concentration, memory issues)"
            ],
            physicalExam: [
                "Hypertension (>90% of patients)",
                "Peripheral edema (legs, sacral), periorbital edema",
                "Pulmonary crackles (volume overload → pulmonary edema)",
                "Pallor (severe anemia, Hb often 8-10 g/dL)",
                "Uremic frost (rare): white crystalline urea on skin (very advanced uremia)",
                "Asterixis (uremic encephalopathy): flapping tremor of hands",
                "Pericardial friction rub (uremic pericarditis, if severe)",
                "Excoriations from scratching (pruritus)",
                "Yellow-brown skin discoloration (urochrome deposition)"
            ],
            diagnosticCriteria: "GFR 15-29 mL/min/1.73m² for ≥3 months. Calculate GFR using CKD-EPI equation. Also assess albuminuria (A1-A3) → worse prognosis with higher albumin. Evidence of kidney damage (proteinuria, hematuria, abnormal imaging) for ≥3 months.",
            labs: [
                "BMP: ↑ Cr (typically 3-6 mg/dL), GFR 15-29, ↑ BUN (often >50-100 mg/dL), hyperkalemia (K+ >5-5.5), metabolic acidosis (HCO3 <18-20)",
                "Urinalysis: proteinuria (if diabetic or GN), hematuria (if GN), broad waxy casts (advanced CKD)",
                "Albumin/creatinine ratio: A2 (30-300) or A3 (>300) common",
                "CBC: normocytic anemia (Hb 8-10 g/dL typical), ↓ reticulocyte count (hypoproliferative from ↓ EPO)",
                "Phosphate: ↑ (often >5-6 mg/dL, kidneys can't excrete)",
                "Calcium: ↓ (often 7-8 mg/dL, from ↓ calcitriol)",
                "PTH: ↑↑ (>300 pg/mL, secondary hyperparathyroidism from ↓ calcium, ↑ phosphate, ↓ calcitriol)",
                "Vitamin D (25-OH): often low (malnutrition, ↓ calcitriol)",
                "Albumin: low (malnutrition from uremia, proteinuria if nephrotic)",
                "Hemoglobin A1c (if diabetic): goal <7%"
            ],
            imaging: [
                "Renal ultrasound: small kidneys (<9 cm = chronicity), increased echogenicity (fibrosis), bilateral (unless PKD → large cystic kidneys)",
                "Echocardiography: assess LV function (uremia → CHF), pericardial effusion (uremic pericarditis)",
                "X-ray bones (if symptomatic): renal osteodystrophy (subperiosteal resorption in phalanges, 'rugger jersey spine'), vascular calcification"
            ],
            differentialDiagnosis: [
                "CKD Stage 3 (GFR 30-59): less severe, fewer symptoms, less uremia",
                "CKD Stage 5/ESRD (GFR <15): more severe uremia, dialysis usually needed",
                "Acute kidney injury (AKI): rapid rise in Cr (days-weeks), reversible, normal kidney size",
                "Acute-on-chronic kidney disease: baseline CKD with superimposed AKI"
            ],
            management: {
                acute: [
                    "Treat acute complications:",
                    "- Hyperkalemia (if K+ >6 or EKG changes): calcium gluconate 10% 10 mL IV (stabilize membrane), insulin 10 units + dextrose 50% 50 mL IV (shift K+ into cells), albuterol 10-20 mg nebulized, kayexalate 15-30 g PO or patiromer (remove K+), dialysis if refractory",
                    "- Volume overload/pulmonary edema: furosemide 40-80 mg IV (often require high doses, 160-200 mg if severe), dialysis if refractory",
                    "- Metabolic acidosis (if pH <7.2): sodium bicarbonate 50-100 mEq IV, dialysis if refractory",
                    "- Uremic pericarditis: urgent dialysis (definitive treatment), NSAIDs contraindicated (worsen kidney function)",
                    "Identify and treat reversible causes: infection (UTI, sepsis), volume depletion, nephrotoxic drugs, obstruction"
                ],
                chronic: [
                    "Prepare for renal replacement therapy (RRT):",
                    "- Dialysis access: place AV fistula (preferred, needs 3-6 months to mature) or AV graft when GFR <25. Tunneled catheter if urgent dialysis needed.",
                    "- Transplant evaluation: refer to transplant center, evaluate donor options (living vs deceased)",
                    "- Patient education: dialysis modalities (hemodialysis vs peritoneal dialysis), transplant options, conservative management (if patient prefers no RRT)",
                    "Slow progression:",
                    "- BP control: goal <130/80. ACE inhibitors (lisinopril, enalapril) or ARBs (losartan, valsartan) if GFR >30 and K+ <5.5. If GFR <30 or K+ >5.5, use other agents (amlodipine, hydralazine, clonidine).",
                    "- SGLT2 inhibitors (empagliflozin, dapagliflozin): slow CKD progression in diabetics, safe even at GFR 20-30",
                    "- Avoid nephrotoxins: NSAIDs (absolute contraindication), aminoglycosides, contrast (if necessary, pre-hydrate aggressively with 0.9% NS)",
                    "Manage complications:",
                    "- Anemia: ESAs (epoetin alfa 50-100 units/kg 3×/week SC, or darbepoetin 0.45 mcg/kg weekly). Goal Hb 10-11.5 g/dL (NOT >13, risk of thrombosis). Also IV iron (iron sucrose 100 mg IV weekly) if ferritin <200 or TSAT <20%.",
                    "- CKD-MBD: phosphate binders (sevelamer 800 mg TID with meals, calcium acetate 667 mg TID if corrected Ca <9.5), calcitriol 0.25 mcg/day if ↓ vitamin D, calcimimetics (cinacalcet 30-90 mg/day) if PTH >300.",
                    "- Hyperkalemia: low-K+ diet (<2 g/day), avoid K-sparing diuretics, kayexalate 15 g PO daily or patiromer 8.4 g PO daily",
                    "- Metabolic acidosis: sodium bicarbonate 650-1300 mg PO TID, goal HCO3 >22",
                    "- Pruritus: phosphate binders (if ↑ phosphate), antihistamines (hydroxyzine), gabapentin 100-300 mg post-dialysis, UV light therapy",
                    "- Volume overload: furosemide 80-160 mg PO daily (often require high doses), dietary Na restriction (<2 g/day), fluid restriction (<1.5 L/day)",
                    "Cardiovascular risk reduction: statin (atorvastatin 40-80 mg), aspirin (if CAD), smoking cessation",
                    "Dietary modification: protein restriction (0.6-0.8 g/kg/day, but risk malnutrition), low Na (<2 g/day), low K+ (<2 g/day), low phosphate (<1000 mg/day)",
                    "Vaccinations: hepatitis B (for future dialysis), influenza, pneumococcal",
                    "Nephrology follow-up: every 1-3 months, monitor progression, prepare for dialysis"
                ]
            },
            complications: [
                "Progression to Stage 5 ESRD: median time 1-2 years, 20-50% per year progression rate",
                "Cardiovascular disease (leading cause of death): MI, stroke, CHF, arrhythmias (accelerated atherosclerosis from uremia, ↑ phosphate → vascular calcification)",
                "Hyperkalemia: life-threatening arrhythmias (VF, asystole), especially with ACE/ARB use",
                "Volume overload: pulmonary edema, hypertensive emergency, CHF exacerbation",
                "Uremic complications: pericarditis (uremic rub → tamponade), encephalopathy (confusion, seizures), platelet dysfunction (bleeding → GI bleed, epistaxis)",
                "Severe anemia: Hb <8 g/dL, transfusion-dependent if ESAs inadequate",
                "CKD-MBD: renal osteodystrophy (bone pain, fractures), vascular calcification (calciphylaxis if severe → skin necrosis)",
                "Malnutrition: uremia → anorexia, protein restriction → muscle wasting",
                "Infections: uremia impairs immune function → ↑ risk UTI, pneumonia, sepsis",
                "Death: 5-year mortality 20-40% (mostly CV death)"
            ],
            prognosis: "Poor without RRT. Median progression to ESRD (GFR <15): 1-2 years. Progression rate 20-50% per year (faster with diabetes, heavy proteinuria, uncontrolled HTN). 5-year survival without dialysis: 50-60%. With dialysis or transplant: survival improves significantly. Most patients will need RRT within 2-3 years. CV disease is leading cause of death (50%), not kidney failure itself.",
            clinicalPearls: [
                "Stage 4 CKD = GFR 15-29. Symptomatic uremia common (fatigue, nausea, pruritus, cognitive impairment).",
                "Time to ESRD: median 1-2 years. Prepare for dialysis NOW (AV fistula when GFR <25, needs 3-6 months to mature).",
                "AV fistula = BEST dialysis access (lower infection, longer patency). Place when GFR <25. Catheter = LAST resort (high infection).",
                "Most common symptoms: fatigue (anemia + uremia), nausea (uremic gastropathy), pruritus (phosphate retention).",
                "Anemia: Hb goal 10-11.5 g/dL with ESAs (epoetin alfa, darbepoetin). Do NOT target Hb >13 (↑ thrombosis, stroke, CV death).",
                "CKD-MBD: ↑ phosphate → ↓ calcitriol → ↑ PTH → bone resorption (osteodystrophy) + vascular calcification. Treat with phosphate binders (sevelamer, calcium acetate), calcitriol, calcimimetics (cinacalcet) if PTH >300.",
                "Hyperkalemia: common in Stage 4 (↓ K+ excretion). Low-K+ diet, avoid ACE/ARB if K+ >5.5, use kayexalate or patiromer. Dialysis if refractory.",
                "ACE/ARB: renoprotective in earlier CKD, but risky in Stage 4 (hyperkalemia, ↓ GFR). Use if K+ <5.5 and GFR >20, otherwise switch to amlodipine, hydralazine.",
                "SGLT2 inhibitors (empagliflozin, dapagliflozin): slow CKD progression even at GFR 20-30 in diabetics. Safe and effective.",
                "Uremic pericarditis = DIALYSIS URGENTLY. Do NOT give NSAIDs (worsen kidney). Look for pericardial friction rub, chest pain, ECG (diffuse ST elevation).",
                "Furosemide dose: often need high doses (80-160 mg PO, 40-80 mg IV) because ↓ GFR → ↓ delivery to loop of Henle. 'Loop diuretic resistance' common.",
                "Pruritus: severe, disabling. Treat with phosphate binders (if ↑ phosphate), gabapentin 100-300 mg post-dialysis, UV light therapy. Often refractory until dialysis started.",
                "Protein restriction: 0.6-0.8 g/kg/day may slow progression, but risk malnutrition (uremia → anorexia). Monitor albumin, weight, muscle mass.",
                "Metabolic acidosis: treat with sodium bicarbonate if HCO3 <22. Slows CKD progression (prevents bone buffering → osteodystrophy).",
                "Dialysis indications in Stage 4: severe volume overload (refractory to diuretics), hyperkalemia (refractory), metabolic acidosis (pH <7.1), uremic pericarditis, uremic encephalopathy (confusion, seizures).",
                "Transplant evaluation: start when GFR <30. Living donor transplant = BEST (better outcomes, shorter wait time).",
                "Leading cause of death in CKD Stage 4: cardiovascular disease (MI, stroke), NOT kidney failure. Aggressive CV risk reduction (statin, aspirin, BP control).",
                "Conservative management (no dialysis): option for elderly, frail, or patient preference. Supportive care, symptom management, palliative care.",
                "Nephrology referral: ALL Stage 4 patients should be followed by nephrology (prepare for RRT, manage complications)."
            ]
        }
    },
    {
        id: "ckd-stage-5-esrd",
        name: "Chronic Kidney Disease Stage 5 (ESRD)",
        system: "renal",
        categories: ["chronic-kidney-disease"],
        symptoms: ["severe-fatigue", "nausea", "vomiting", "dyspnea", "confusion", "pruritus", "edema"],
        tags: ["ckd", "esrd", "gfr-less-than-15", "dialysis", "uremia", "end-stage"],
        severity: "severe",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "CKD Stage 5 = GFR <15 mL/min/1.73m² (or on dialysis regardless of GFR). End-stage renal disease (ESRD). >90% nephron loss. Severe uremia, life-threatening complications without renal replacement therapy (dialysis or transplant). Requires RRT for survival in most patients.",
            pathophysiology: "Massive nephron loss → GFR <15 → severe accumulation of uremic toxins (urea, Cr, K+, phosphate, organic acids, β2-microglobulin, advanced glycation end-products) → multi-organ uremic syndrome. Kidneys unable to maintain homeostasis: fluid/electrolyte balance, acid-base balance, toxin clearance, hormone production (EPO, calcitriol, renin). Without RRT → death from hyperkalemia (arrhythmia), volume overload (pulmonary edema), uremic pericarditis, or uremic encephalopathy.",
            epidemiology: "~0.2% of US adults (~800,000 patients). Incidence: 120 per million population per year. 70% on hemodialysis, 10% on peritoneal dialysis, 20% with functioning transplant. Median age at ESRD: 60-65 years. Leading causes: diabetes (40%), hypertension (30%), GN (15%), PKD (5%).",
            riskFactors: [
                "Diabetes mellitus (40% of ESRD)",
                "Hypertension (30%)",
                "Glomerulonephritis (IgA, FSGS, lupus) 15%",
                "Polycystic kidney disease (PKD) 5%",
                "African American (3-4× higher risk than Caucasian)",
                "Family history of ESRD",
                "Age >60"
            ],
            presentation: [
                "Severe fatigue, weakness: anemia (Hb 6-9 g/dL) + uremia",
                "Nausea, vomiting, anorexia: severe uremic gastropathy (BUN >100-150 mg/dL → ammonia)",
                "Dyspnea: pulmonary edema (volume overload), anemia, metabolic acidosis (Kussmaul breathing)",
                "Confusion, altered mental status: uremic encephalopathy (accumulation of neurotoxins)",
                "Severe pruritus: phosphate retention, uremia (often worst symptom for patients)",
                "Edema: peripheral (legs, sacrum), periorbital, pulmonary",
                "Chest pain: uremic pericarditis (pericardial friction rub)",
                "Bleeding tendency: uremic platelet dysfunction (epistaxis, GI bleed, easy bruising)",
                "Hiccups: uremic (phrenic nerve irritation)",
                "Restless legs syndrome: severe in ESRD",
                "Seizures: uremic encephalopathy, severe electrolyte imbalance (hyponatremia, hypocalcemia)",
                "Oliguria or anuria: <400 mL/day (anuric ESRD common)"
            ],
            physicalExam: [
                "Severe hypertension (>90% of patients, often >160/100)",
                "Pulmonary crackles: volume overload, uremic pneumonitis",
                "Pericardial friction rub: uremic pericarditis (3-component rub)",
                "Asterixis: flapping tremor (uremic encephalopathy)",
                "Uremic frost: white crystalline urea on skin (eyebrows, face, axilla)",
                "Pallor: severe anemia",
                "Peripheral edema: 3-4+ pitting edema (legs, sacrum)",
                "Yellow-brown skin: urochrome deposition",
                "Excoriations: severe pruritus → scratching",
                "Uremic fetor: ammonia smell on breath (from BUN → ammonia)",
                "AV fistula or dialysis catheter: if on hemodialysis",
                "Peritoneal dialysis catheter: if on PD"
            ],
            diagnosticCriteria: "GFR <15 mL/min/1.73m² for ≥3 months (or on dialysis regardless of GFR). Evidence of kidney damage (proteinuria, hematuria, small kidneys on imaging) for ≥3 months. Clinical uremia (nausea, confusion, pericarditis, bleeding).",
            labs: [
                "BMP: ↑ Cr (typically >6-10 mg/dL), GFR <15, ↑ BUN (>100-150 mg/dL), severe hyperkalemia (K+ >6-6.5), metabolic acidosis (HCO3 <15)",
                "CBC: severe normocytic anemia (Hb 6-9 g/dL, transfusion-dependent if inadequate ESA), thrombocytopenia or platelet dysfunction (bleeding time prolonged)",
                "Phosphate: ↑↑ (>6-8 mg/dL)",
                "Calcium: ↓↓ (ionized Ca often <1 mmol/L)",
                "PTH: ↑↑↑ (often >500-1000 pg/mL, tertiary hyperparathyroidism if very high)",
                "Albumin: low (malnutrition, inflammation, proteinuria)",
                "PT/PTT: usually normal, but bleeding time prolonged (platelet dysfunction from uremia)",
                "Troponin: may be chronically elevated (uremia, not always ACS)",
                "Urinalysis: variable (proteinuria if diabetic/GN, broad waxy casts)"
            ],
            imaging: [
                "Renal ultrasound: bilateral small kidneys (<9 cm, end-stage), increased echogenicity (fibrosis), cortical thinning. Exception: PKD (large cystic kidneys).",
                "Echocardiography: LV hypertrophy (HTN, volume overload), pericardial effusion (uremic pericarditis), cardiomyopathy",
                "CXR: pulmonary edema ('bat wing' pattern), cardiomegaly, pleural effusions"
            ],
            differentialDiagnosis: [
                "CKD Stage 4 (GFR 15-29): less severe uremia, may not need dialysis yet",
                "Acute kidney injury (AKI): rapid rise in Cr, normal kidney size, reversible",
                "Acute-on-chronic kidney disease: baseline ESRD with superimposed AKI"
            ],
            management: {
                acute: [
                    "Urgent/emergent dialysis indications (AEIOU):",
                    "- Acidosis: refractory metabolic acidosis (pH <7.1)",
                    "- Electrolytes: hyperkalemia >6.5 or symptomatic (EKG changes, arrhythmia)",
                    "- Ingestion/Intoxication: methanol, ethylene glycol, lithium, salicylates (dialyzable toxins)",
                    "- Overload: volume overload with pulmonary edema refractory to diuretics",
                    "- Uremia: symptomatic uremia (pericarditis, encephalopathy, bleeding, seizures)",
                    "Hyperkalemia management (before dialysis):",
                    "- Stabilize membrane: calcium gluconate 10% 10 mL IV over 2-3 min (onset 1-3 min, duration 30-60 min)",
                    "- Shift K+ into cells: insulin 10 units + dextrose 50% 50 mL IV (onset 15-30 min, duration 4-6h), albuterol 10-20 mg nebulized (onset 30 min)",
                    "- Remove K+: kayexalate 15-30 g PO/PR, patiromer 8.4 g PO, dialysis (definitive)",
                    "Volume overload management: furosemide 80-200 mg IV (often ineffective at GFR <15), ultrafiltration or dialysis",
                    "Uremic pericarditis: URGENT dialysis (only effective treatment), pericardiocentesis if tamponade"
                ],
                chronic: [
                    "Renal replacement therapy (RRT) - required for survival:",
                    "1. Hemodialysis (HD, 70% of ESRD patients):",
                    "   - Frequency: 3×/week, 3-4 hours per session",
                    "   - Access: AV fistula (preferred, low infection), AV graft (if fistula not feasible), tunneled catheter (last resort, high infection)",
                    "   - Complications: hypotension during dialysis, access thrombosis, infection (catheter-related bacteremia), dialysis disequilibrium (cerebral edema from rapid urea clearance)",
                    "2. Peritoneal dialysis (PD, 10%):",
                    "   - CAPD (continuous ambulatory PD): 4-5 exchanges/day, 7 days/week",
                    "   - APD (automated PD/cycler): overnight exchanges",
                    "   - Advantages: better hemodynamic stability, home-based, preserve residual renal function longer",
                    "   - Complications: peritonitis (Staph aureus, Staph epidermidis, gram-negatives), catheter infection, hyperglycemia (glucose-based dialysate), loss of ultrafiltration over time",
                    "3. Kidney transplant (20%, BEST long-term outcome):",
                    "   - Living donor (50% of transplants, better outcomes, 10-20 year graft survival)",
                    "   - Deceased donor (50%, 5-10 year graft survival)",
                    "   - Immunosuppression: tacrolimus + mycophenolate + prednisone (standard triple therapy)",
                    "   - Complications: rejection (acute, chronic), infection (CMV, BK virus, PCP), malignancy (PTLD, skin cancer), medication toxicity (tacrolimus nephrotoxicity)",
                    "Manage complications:",
                    "- Anemia: ESAs (epoetin alfa 100-150 units/kg 3×/week, darbepoetin 0.75 mcg/kg weekly), goal Hb 10-11.5 g/dL. IV iron (iron sucrose 100 mg IV weekly). Transfuse if Hb <7 or symptomatic.",
                    "- CKD-MBD: phosphate binders (sevelamer 1600 mg TID, calcium acetate 1334 mg TID, lanthanum carbonate 500-1000 mg TID), calcitriol 0.5-1 mcg 3×/week on dialysis days, calcimimetics (cinacalcet 30-180 mg/day) if PTH >300. Parathyroidectomy if refractory tertiary hyperparathyroidism (PTH >800).",
                    "- Hyperkalemia: low-K+ diet (<2 g/day), avoid K-sparing diuretics, kayexalate or patiromer, adequate dialysis",
                    "- Volume overload: strict fluid restriction (500-1000 mL/day + urine output), dietary Na restriction (<2 g/day), ultrafiltration goals on dialysis (dry weight)",
                    "- Metabolic acidosis: corrected by dialysis (bicarbonate in dialysate)",
                    "- Bleeding (uremic platelet dysfunction): desmopressin (DDAVP 0.3 mcg/kg IV), conjugated estrogens (Premarin 0.6 mg/kg IV daily × 5 days), cryoprecipitate, dialysis (improves platelet function)",
                    "Cardiovascular risk reduction: statin, aspirin, BP control (goal <140/90 on dialysis, <130/80 if transplant)",
                    "Nutrition: HD patients: protein 1.2 g/kg/day (higher due to dialysis losses), low K/phosphate. PD patients: protein 1.2-1.5 g/kg/day (even higher losses in dialysate).",
                    "Vaccinations: hepatitis B (all dialysis patients), influenza, pneumococcal, COVID-19",
                    "Nephrology follow-up: weekly to monthly depending on modality and stability"
                ]
            },
            complications: [
                "Cardiovascular disease (leading cause of death, 50%): MI, stroke, CHF, arrhythmias (LV hypertrophy, vascular calcification, accelerated atherosclerosis)",
                "Hyperkalemia: sudden cardiac death (VF, asystole)",
                "Uremic pericarditis: pericardial effusion → cardiac tamponade",
                "Uremic encephalopathy: confusion, seizures, coma",
                "Bleeding: uremic platelet dysfunction → GI bleed, epistaxis, intracranial hemorrhage",
                "Infections: leading cause of death after CV (20%). Dialysis catheter infections (bacteremia, endocarditis), PD peritonitis, pneumonia, UTI.",
                "Vascular access complications: thrombosis (AV fistula/graft), steal syndrome (hand ischemia), high-output CHF (from large fistula)",
                "Dialysis-related: hypotension during HD, dialysis disequilibrium syndrome (cerebral edema), amyloidosis (β2-microglobulin deposition → carpal tunnel, bone cysts)",
                "Malnutrition: uremia → anorexia, protein restriction → muscle wasting (protein-energy wasting)",
                "Calciphylaxis: vascular calcification → skin necrosis (very high mortality, 60-80%)",
                "Renal osteodystrophy: bone pain, fractures (osteomalacia, osteitis fibrosa cystica)",
                "Death: 5-year survival on dialysis ~40% (worse than many cancers)"
            ],
            prognosis: "Without RRT: death within weeks-months from hyperkalemia, pulmonary edema, or uremia. With dialysis: median survival 5-10 years (5-year survival ~40%). Transplant: BEST prognosis (10-year survival 70-80%, graft survival 50-60%). Mortality on dialysis: 15-20% per year. Leading causes of death: cardiovascular (50%), infection (20%), withdrawal from dialysis (20%). Younger patients, non-diabetics, transplant recipients have better prognosis.",
            clinicalPearls: [
                "ESRD = GFR <15 or on dialysis. Life-threatening without RRT (dialysis or transplant). Median survival on dialysis: 5-10 years.",
                "Dialysis indications = AEIOU: Acidosis (pH <7.1), Electrolytes (K+ >6.5), Ingestion (methanol, ethylene glycol, lithium), Overload (pulmonary edema), Uremia (pericarditis, encephalopathy, bleeding).",
                "Uremic pericarditis = URGENT dialysis (only effective treatment). Pericardial friction rub (3-component), chest pain, ECG (diffuse ST elevation). Do NOT give NSAIDs (worsen kidney).",
                "Hyperkalemia in ESRD: life-threatening. EKG changes: peaked T waves → wide QRS → sine wave → VF/asystole. Treat: calcium gluconate (membrane stabilization), insulin + dextrose (shift K+ into cells), albuterol, kayexalate/patiromer, DIALYSIS.",
                "AV fistula = GOLD STANDARD for HD access. Lower infection, longer patency. Catheter = last resort (high infection → bacteremia → endocarditis → death).",
                "Peritoneal dialysis: home-based, better hemodynamic stability, preserve residual function. Complication: peritonitis (Staph aureus, Staph epidermidis). Treat: intraperitoneal antibiotics (vancomycin + ceftazidime).",
                "Transplant = BEST outcome (10-year survival 70-80% vs 35% on dialysis). Living donor > deceased donor. Immunosuppression: tacrolimus + mycophenolate + prednisone.",
                "Anemia in ESRD: Hb 6-9 g/dL typical. ESAs (epoetin alfa, darbepoetin), goal Hb 10-11.5 (NOT >13 → ↑ thrombosis, stroke). IV iron needed (ferritin goal >200).",
                "CKD-MBD in ESRD: ↑↑ phosphate, ↓↓ calcium, ↑↑↑ PTH (>500-1000). Phosphate binders (sevelamer, calcium acetate), calcitriol, cinacalcet. Parathyroidectomy if PTH >800 refractory.",
                "Uremic bleeding: platelet dysfunction (prolonged bleeding time). Treat: DDAVP (desmopressin 0.3 mcg/kg IV), conjugated estrogens (Premarin), cryoprecipitate, dialysis.",
                "Calciphylaxis: vascular calcification → painful skin necrosis (violaceous lesions, eschar). Very high mortality (60-80%). Risk factors: ↑↑ Ca×Phos product (>70), warfarin, obesity. Treat: stop Ca-based binders, start SNF (sodium thiosulfate 25 g IV 3×/week on dialysis), wound care.",
                "Dialysis disequilibrium syndrome: cerebral edema from rapid ↓ urea during first few dialysis sessions (urea clears faster from blood than brain → osmotic gradient → brain swelling). Symptoms: headache, nausea, confusion, seizures. Prevent: slow, gentle first dialysis.",
                "β2-microglobulin amyloidosis: long-term dialysis (>10 years) → β2M accumulation → amyloid deposits in joints (carpal tunnel), bones (cysts, fractures).",
                "Leading causes of death in ESRD: cardiovascular (50%), infection (20%), withdrawal from dialysis (20%). Dialysis is a life-sustaining treatment, not a cure.",
                "Dry weight on dialysis: target weight after ultrafiltration (euvolemic). Set by trial and error (BP, edema, BNP). Underdialysis (volume overload) → HTN, pulmonary edema. Overdialysis → hypotension, cramps.",
                "Kt/V: dialysis adequacy measure (K = clearance, t = time, V = volume of distribution). Goal: Kt/V >1.2 for HD, >1.7 for PD. Inadequate dialysis → ↑ mortality.",
                "Vascular steal syndrome: large AV fistula → blood 'steals' from hand → hand ischemia (pain, coldness, ulcers). Treat: fistula ligation or banding.",
                "Nephrology referral: ALL ESRD patients managed by nephrology + dialysis team. Transplant evaluation ongoing.",
                "Conservative management (no dialysis): option for elderly, frail, severe comorbidities, patient preference. Supportive care, symptom management, hospice. Median survival 6-12 months."
            ]
        }
    },
    {
        id: "ckd-mineral-bone-disease",
        name: "CKD-Mineral and Bone Disorder (CKD-MBD)",
        system: "renal",
        categories: ["chronic-kidney-disease"],
        symptoms: ["bone-pain", "fractures", "muscle-weakness", "pruritus"],
        tags: ["ckd-mbd", "secondary-hyperparathyroidism", "renal-osteodystrophy", "vascular-calcification", "hyperphosphatemia"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "CKD-MBD = systemic disorder of mineral and bone metabolism in CKD. Triad: (1) abnormal Ca/phosphate/PTH/vitamin D metabolism, (2) bone abnormalities (renal osteodystrophy), (3) vascular/soft tissue calcification. Begins in CKD Stage 3, worsens with progression. Major cause of morbidity (fractures, CV disease) and mortality.",
            pathophysiology: "Progressive CKD → ↓ GFR → multiple disruptions: (1) ↓ phosphate excretion → ↑ phosphate → binds Ca²⁺ → ↓ ionized Ca. (2) ↓ calcitriol (active vitamin D) production → ↓ GI Ca absorption → ↓ Ca. (3) ↑ FGF-23 (phosphaturic hormone, ↓ calcitriol). (4) Hypocalcemia + hyperphosphatemia + ↓ calcitriol → ↑ PTH (secondary hyperparathyroidism). (5) ↑ PTH → bone resorption (osteitis fibrosa cystica), ↑ Ca/phosphate release → high Ca×Phos product → vascular calcification (medial arterial calcification, coronary calcification) → CV disease, calciphylaxis. (6) Over time, parathyroid hyperplasia → autonomous PTH secretion (tertiary hyperparathyroidism, PTH >800-1000).",
            epidemiology: "Universal in CKD Stage 4-5 (nearly 100%). Begins in Stage 3 (50-70% have ↑ PTH or ↑ phosphate). Complications increase with severity of CKD. Risk factors: longer duration of CKD, ESRD on dialysis, poor control of phosphate/PTH.",
            riskFactors: [
                "CKD Stage 3-5 (universal)",
                "ESRD on dialysis (most severe)",
                "Poor medication adherence (phosphate binders, vitamin D)",
                "High dietary phosphate intake (dairy, processed foods, cola)",
                "Vitamin D deficiency (malnutrition, lack of sun exposure)",
                "African American (↑ risk of secondary hyperparathyroidism)"
            ],
            presentation: [
                "Often asymptomatic in early CKD (Stage 3-4): incidental lab findings (↑ phosphate, ↑ PTH)",
                "Bone pain: diffuse, aching (renal osteodystrophy from ↑ PTH, bone resorption)",
                "Fractures: pathologic (vertebral compression, hip, ribs) from osteomalacia or osteitis fibrosa",
                "Muscle weakness: proximal muscle weakness (vitamin D deficiency)",
                "Pruritus: severe (phosphate retention → Ca-phosphate deposition in skin)",
                "Bone deformities: rare, advanced CKD (rickets-like in children, 'rugger jersey spine' in adults)",
                "Soft tissue calcification: vascular (coronary, peripheral arteries), skin (calciphylaxis), joints (pseudogout)",
                "Cardiovascular symptoms: if vascular calcification severe (angina, claudication, stroke)"
            ],
            physicalExam: [
                "Often normal in early CKD",
                "Bone tenderness: chest wall (ribs), spine (vertebrae), hips",
                "Muscle weakness: proximal (difficulty standing from chair, climbing stairs)",
                "Soft tissue masses: ectopic calcification (rare, advanced CKD)",
                "Calciphylaxis: violaceous, painful skin lesions with necrosis (very advanced, ESRD)"
            ],
            diagnosticCriteria: "Diagnosis based on lab abnormalities in CKD patient: ↑ phosphate, ↓ calcium, ↑ PTH, ↓ vitamin D (25-OH-D, 1,25-OH-D). Bone disease confirmed by imaging (X-ray, DXA) or biopsy (gold standard, rarely done). Vascular calcification on imaging (CT, echo, X-ray).",
            labs: [
                "Phosphate: ↑ (>4.5 mg/dL in Stage 3-4, >5.5 mg/dL in Stage 5). Kidneys unable to excrete phosphate.",
                "Calcium: ↓ ionized Ca (from ↓ calcitriol, binding by phosphate). Total Ca may be low-normal.",
                "PTH: ↑↑ (secondary hyperparathyroidism). Stage 3: PTH >70 pg/mL. Stage 4: PTH >110. Stage 5: PTH >300-600 (target <300 on dialysis, but often >500-1000).",
                "Vitamin D 25-OH-D: often low (<30 ng/mL, from malnutrition, lack of sun)",
                "Vitamin D 1,25-OH-D (calcitriol): ↓ (kidneys can't activate vitamin D)",
                "Alkaline phosphatase: ↑ (bone turnover from ↑ PTH, osteitis fibrosa)",
                "FGF-23: ↑↑ (elevated early in CKD, suppresses calcitriol, phosphaturic hormone)",
                "Ca × Phosphate product: >55 mg²/dL² = high risk of vascular calcification. Goal <55."
            ],
            imaging: [
                "X-ray bones: renal osteodystrophy patterns:",
                "- Osteitis fibrosa cystica (high PTH): subperiosteal resorption (phalanges, distal clavicle), brown tumors (lytic bone lesions), 'salt and pepper skull' (mottled appearance)",
                "- Osteomalacia (low vitamin D): Looser zones (pseudofractures), coarse trabecular pattern",
                "- Adynamic bone disease (oversuppressed PTH): normal or osteopenic, low bone turnover",
                "'Rugger jersey spine': alternating sclerotic and lucent bands in vertebrae (osteitis fibrosa)",
                "Vascular calcification (CT, X-ray): coronary artery calcification (CT calcium score), abdominal aortic calcification, peripheral arterial calcification",
                "DXA scan: low bone mineral density (osteopenia/osteoporosis), but does NOT predict fracture risk well in CKD",
                "Echocardiography: valvular calcification (aortic, mitral)",
                "Bone biopsy (gold standard, rarely done): differentiates types of renal osteodystrophy (high vs low turnover)"
            ],
            differentialDiagnosis: [
                "Primary hyperparathyroidism: ↑ PTH, ↑ Ca (vs ↓ Ca in secondary), parathyroid adenoma on imaging, normal kidney function",
                "Vitamin D deficiency (isolated): ↓ vitamin D, normal phosphate, mild ↑ PTH, normal kidney function",
                "Osteoporosis (primary): low bone density, normal Ca/phosphate/PTH, no CKD",
                "Paget's disease: ↑ alk phos, normal Ca/phosphate/PTH, localized bone lesions on X-ray",
                "Tertiary hyperparathyroidism: autonomous PTH secretion (PTH >800-1000), ↑↑ Ca (vs ↓ in secondary), parathyroid hyperplasia, occurs after prolonged secondary hyperparathyroidism"
            ],
            management: {
                acute: [
                    "Severe hypocalcemia (ionized Ca <0.9 mmol/L, symptomatic):",
                    "- Calcium gluconate 10% 10-20 mL IV over 10 min (for tetany, seizures, arrhythmia)",
                    "- Maintenance: calcium gluconate infusion 10-15 mg/kg/hr, monitor Ca q4-6h",
                    "Severe hyperphosphatemia (>8-10 mg/dL, acute):",
                    "- Phosphate binders: sevelamer 800-1600 mg PO TID with meals",
                    "- Dialysis if ESRD (removes phosphate effectively)",
                    "Tertiary hyperparathyroidism (PTH >800-1000, ↑ Ca, refractory to medical therapy):",
                    "- Parathyroidectomy (subtotal or total with autotransplantation)"
                ],
                chronic: [
                    "Goals by CKD stage:",
                    "- Stage 3-4: phosphate <4.5 mg/dL, Ca 8.5-10.5 mg/dL, PTH 35-70 pg/mL (Stage 3) or 70-110 (Stage 4)",
                    "- Stage 5/dialysis: phosphate <5.5 mg/dL, Ca 8.4-9.5 mg/dL, PTH 150-300 pg/mL (NOT <150, risk adynamic bone)",
                    "Dietary phosphate restriction: <800-1000 mg/day. Avoid: dairy (milk, cheese, yogurt), processed foods (additives), cola (phosphoric acid), nuts, beans.",
                    "Phosphate binders (first-line therapy):",
                    "- Non-calcium-based (preferred if Ca >9.5 or vascular calcification): sevelamer (Renagel 800-1600 mg TID with meals), lanthanum carbonate (Fosrenol 500-1000 mg TID)",
                    "- Calcium-based (if Ca <9.5, no vascular calcification): calcium acetate (PhosLo 667-1334 mg TID with meals), calcium carbonate (Tums 500-1000 mg TID)",
                    "- Take with meals (binds dietary phosphate in GI tract)",
                    "Vitamin D supplementation:",
                    "- Nutritional vitamin D (if 25-OH-D <30): ergocalciferol (vitamin D2) 50,000 IU weekly × 8-12 weeks, then monthly. Cholecalciferol (vitamin D3) 1000-2000 IU daily.",
                    "- Active vitamin D (calcitriol, for ↑ PTH): calcitriol 0.25-0.5 mcg PO daily (Stage 3-4), or 0.5-1 mcg IV 3×/week on dialysis (Stage 5). Paricalcitol (Zemplar) 1-2 mcg IV 3×/week on dialysis (less hypercalcemia than calcitriol).",
                    "Calcimimetics (if PTH >300 despite vitamin D):",
                    "- Cinacalcet (Sensipar 30-90 mg PO daily, max 180 mg): sensitizes parathyroid Ca-sensing receptor → ↓ PTH. Also ↓ Ca and ↓ phosphate. Monitor Ca (risk hypocalcemia). Used in Stage 4-5.",
                    "- Etelcalcetide (Parsabiv 5-15 mg IV 3×/week on dialysis): IV calcimimetic, similar to cinacalcet.",
                    "Parathyroidectomy (if refractory tertiary hyperparathyroidism):",
                    "- Indications: PTH >800-1000, hypercalcemia (Ca >10.5), severe bone disease, calciphylaxis, refractory pruritus",
                    "- Procedure: subtotal parathyroidectomy (remove 3.5 glands) or total parathyroidectomy with autotransplantation (forearm)",
                    "Monitor labs:",
                    "- Stage 3: Ca/phosphate/PTH every 6-12 months",
                    "- Stage 4: every 3-6 months",
                    "- Stage 5/dialysis: monthly Ca/phosphate, PTH every 3 months",
                    "Treat bone disease (if osteopenia/osteoporosis):",
                    "- Optimize vitamin D, calcium, PTH first",
                    "- Bisphosphonates (alendronate, risedronate): generally AVOIDED in CKD Stage 4-5 (risk of adynamic bone disease, accumulation). May use cautiously in Stage 3 with severe osteoporosis.",
                    "Prevent vascular calcification:",
                    "- Keep Ca × Phosphate product <55 mg²/dL²",
                    "- Prefer non-calcium binders (sevelamer, lanthanum) over calcium-based if vascular calcification present",
                    "- SNF (sodium thiosulfate 25 g IV 3×/week on dialysis) for calciphylaxis treatment"
                ]
            },
            complications: [
                "Renal osteodystrophy (bone disease): fractures (vertebral, hip, ribs), bone pain, deformities",
                "Vascular calcification: coronary artery calcification → MI, valvular calcification → stenosis, peripheral arterial calcification → claudication, stroke",
                "Calciphylaxis (calcific uremic arteriolopathy): vascular calcification → skin ischemia/necrosis (violaceous painful lesions, eschar). Very high mortality (60-80%).",
                "Cardiovascular disease: leading cause of death in CKD (50%). Vascular calcification accelerates atherosclerosis.",
                "Tertiary hyperparathyroidism: autonomous PTH secretion (PTH >800-1000), hypercalcemia, refractory to medical therapy → need parathyroidectomy",
                "Hypercalcemia: from excessive calcium-based binders or calcitriol → arrhythmias, nephrocalcinosis (worsens CKD), soft tissue calcification",
                "Adynamic bone disease: oversuppression of PTH (PTH <100 in dialysis) → low bone turnover, fractures, hypercalcemia (bone can't buffer Ca load)",
                "Pruritus: severe, debilitating (from phosphate retention, Ca-phosphate deposition in skin)",
                "Soft tissue calcification: joints (pseudogout, periarticular calcification), eyes (band keratopathy, red eye), vessels"
            ],
            prognosis: "CKD-MBD is progressive and universal in advanced CKD. Early intervention (Stage 3-4) can prevent severe complications. Untreated → renal osteodystrophy (fractures), vascular calcification (CV death), calciphylaxis (high mortality). With treatment (phosphate binders, vitamin D, calcimimetics): slower progression, reduced CV events. Vascular calcification is often IRREVERSIBLE (SNF may slow, not reverse). CV disease from vascular calcification = leading cause of death in CKD.",
            clinicalPearls: [
                "CKD-MBD = triad: (1) abnormal Ca/phosphate/PTH/vitamin D, (2) renal osteodystrophy (bone disease), (3) vascular calcification (CV disease).",
                "Pathophysiology: ↓ GFR → ↑ phosphate + ↓ calcitriol + ↓ Ca → ↑ PTH (secondary hyperparathyroidism) → bone resorption + vascular calcification.",
                "Begins in CKD Stage 3 (↑ FGF-23, ↑ PTH), worsens in Stage 4-5. Nearly 100% of dialysis patients have CKD-MBD.",
                "Key labs: ↑ phosphate, ↓ Ca, ↑ PTH, ↓ vitamin D. Ca × Phosphate product: goal <55 mg²/dL² (if >55 → vascular calcification).",
                "Phosphate binders: FIRST-LINE. Take with meals (bind dietary phosphate). Non-Ca-based (sevelamer, lanthanum) preferred if Ca >9.5 or vascular calcification. Ca-based (calcium acetate) OK if Ca <9.5.",
                "Calcitriol (active vitamin D): treats secondary hyperparathyroidism (↓ PTH). Also ↑ Ca and ↑ phosphate (↑ GI absorption). Monitor Ca/phosphate closely. Paricalcitol = less hypercalcemia.",
                "Cinacalcet (calcimimetic): if PTH >300 despite vitamin D. Sensitizes parathyroid Ca-receptor → ↓ PTH. Also ↓ Ca, ↓ phosphate. Monitor Ca (risk hypocalcemia).",
                "PTH targets: Stage 3 (35-70 pg/mL), Stage 4 (70-110), Stage 5/dialysis (150-300). Do NOT oversuppress PTH (<100 on dialysis) → adynamic bone disease.",
                "Tertiary hyperparathyroidism: prolonged secondary hyperparathyroidism → parathyroid hyperplasia → autonomous PTH secretion (PTH >800-1000), ↑ Ca. Treat: parathyroidectomy.",
                "Renal osteodystrophy types: (1) Osteitis fibrosa cystica (high PTH, high turnover): subperiosteal resorption, 'rugger jersey spine', brown tumors. (2) Osteomalacia (low vitamin D): Looser zones, coarse trabeculae. (3) Adynamic bone (low PTH, oversuppressed): low turnover, fractures.",
                "Vascular calcification: medial arterial calcification (Mönckeberg sclerosis) vs intimal (atherosclerosis). CKD → medial calcification → stiff vessels → ↑ pulse pressure, LV hypertrophy, CV death.",
                "Calciphylaxis = calcific uremic arteriolopathy. Vascular calcification → arteriolar occlusion → skin ischemia/necrosis. Violaceous painful skin lesions, eschar (legs, abdomen, buttocks). Mortality 60-80%. Risk: ↑ Ca×Phos >70, warfarin, obesity, Ca-based binders. Treat: SNF (sodium thiosulfate), wound care, stop Ca-based binders, cinacalcet, pain control.",
                "Sodium thiosulfate (SNF): 25 g IV 3×/week on dialysis. For calciphylaxis treatment. May slow vascular calcification progression.",
                "Dietary phosphate: <800-1000 mg/day. High-phosphate foods: dairy (milk, cheese, yogurt), processed foods (phosphate additives), cola (phosphoric acid), nuts, beans. Low-phosphate: rice, pasta, fruits, vegetables.",
                "Ca-based vs non-Ca-based binders: Ca-based (calcium acetate, calcium carbonate) cheaper, but risk hypercalcemia + vascular calcification if Ca >9.5. Non-Ca-based (sevelamer, lanthanum) safer for vascular calcification, but more expensive.",
                "Vitamin D (nutritional vs active): 25-OH-D (calcidiol) = storage form, from diet/sun. 1,25-OH-D (calcitriol) = active form, from kidney. CKD → ↓ 1α-hydroxylase → can't activate vitamin D → need calcitriol supplementation.",
                "Adynamic bone disease: low bone turnover from oversuppressed PTH (PTH <100). Bone can't buffer Ca/phosphate load → hypercalcemia, hyperphosphatemia, vascular calcification. Prevent: don't oversuppress PTH, target PTH 150-300 on dialysis.",
                "FGF-23: phosphaturic hormone, ↑ early in CKD (Stage 2-3) to compensate for ↓ phosphate excretion. Also ↓ calcitriol. ↑↑ FGF-23 associated with ↑ CV mortality, LV hypertrophy. No treatment currently (experimental).",
                "Bisphosphonates: generally AVOIDED in CKD Stage 4-5 (risk of adynamic bone, accumulation → osteonecrosis of jaw). May use cautiously in Stage 3 with severe osteoporosis + low fracture risk from CKD-MBD.",
                "Parathyroidectomy: subtotal (remove 3.5 glands) or total + autotransplant (forearm). Post-op: 'hungry bone syndrome' (severe hypocalcemia from rapid bone remineralization) → need IV calcium, calcitriol.",
                "Monitor CKD-MBD: Stage 3 (Ca/phosphate/PTH q6-12mo), Stage 4 (q3-6mo), Stage 5 (Ca/phosphate monthly, PTH q3mo)."
            ]
        }
    },

    // ===== GLOMERULAR DISEASES =====
    {
        id: "minimal-change-disease",
        name: "Minimal Change Disease (MCD)",
        system: "renal",
        categories: ["glomerular-diseases"],
        symptoms: ["edema", "foamy-urine", "fatigue"],
        tags: ["nephrotic-syndrome", "podocyte-injury", "steroid-responsive", "childhood"],
        severity: "moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Minimal change disease = most common cause of nephrotic syndrome in children (90% of cases <10 years). Podocyte foot process effacement on electron microscopy, normal light microscopy (hence 'minimal change'). Presents with sudden onset nephrotic syndrome (proteinuria >3.5 g/day, hypoalbuminemia, edema, hyperlipidemia). Highly responsive to corticosteroids (90% remission). Excellent prognosis.",
            pathophysiology: "T-cell dysfunction → release of circulating factors (permeability factors, likely cytokines) → podocyte injury → effacement of foot processes (on electron microscopy) → loss of glomerular charge barrier → massive proteinuria (selective, mostly albumin). Podocytes maintain GBM integrity; injury → increased permeability but NO structural GBM damage (normal light microscopy, no immune deposits on immunofluorescence). Mechanism unclear (idiopathic in most), may be triggered by infections, NSAIDs, or malignancy (Hodgkin lymphoma in adults).",
            epidemiology: "Most common cause of nephrotic syndrome in children (80-90% of cases age 2-6 years). Accounts for 10-15% of nephrotic syndrome in adults. Bimodal age distribution: peak at 2-6 years, second smaller peak in adults 30-50 years. More common in males (2:1). Associated with atopy (asthma, eczema, allergies) in 30-40%.",
            riskFactors: [
                "Childhood age 2-6 years (highest risk)",
                "Atopy: asthma, eczema, allergic rhinitis (30-40% of children with MCD)",
                "Recent infection (URI, gastroenteritis): may trigger relapse",
                "NSAIDs: can cause MCD + AKI (rare)",
                "Malignancy (adults): Hodgkin lymphoma (10-20% of adult MCD associated with Hodgkin)",
                "Male sex (2:1)"
            ],
            presentation: [
                "Sudden onset periorbital edema: most common presenting symptom (especially in morning)",
                "Generalized edema: peripheral (legs, ankles), scrotal/labial edema, ascites, pleural effusions (if severe)",
                "Foamy urine: from massive proteinuria (>3.5 g/day)",
                "Fatigue, lethargy: from hypoalbuminemia",
                "Weight gain: from fluid retention",
                "No hematuria (vs nephritic syndromes like PSGN, IgA nephropathy)",
                "No hypertension (vs other glomerular diseases): BP typically normal",
                "Symptoms develop over days to weeks"
            ],
            physicalExam: [
                "Periorbital edema (puffiness around eyes, especially morning)",
                "Peripheral edema: 2-4+ pitting edema (legs, sacrum, ankles)",
                "Ascites: if severe nephrotic syndrome",
                "Normal blood pressure (key differentiator from other glomerular diseases)",
                "Scrotal or labial edema (in severe cases)",
                "Pleural effusions (rare, severe cases)"
            ],
            diagnosticCriteria: "Clinical diagnosis in children: nephrotic syndrome (proteinuria >3.5 g/day or urine protein/Cr ratio >2, hypoalbuminemia <3 g/dL, edema, hyperlipidemia) + age 1-10 years + normal BP + no hematuria → empiric steroid trial (biopsy NOT needed if typical presentation). Biopsy indications: atypical features (age <1 or >10, hematuria, hypertension, low C3, renal insufficiency, steroid resistance). Biopsy findings: light microscopy NORMAL, immunofluorescence NEGATIVE, electron microscopy shows podocyte foot process effacement.",
            labs: [
                "Urinalysis: massive proteinuria (3-4+), NO hematuria (bland sediment), oval fat bodies (lipiduria)",
                "24-hour urine protein or spot urine protein/creatinine ratio: >3.5 g/day (nephrotic range), selective proteinuria (mostly albumin)",
                "Serum albumin: <3 g/dL (often <2 g/dL, severe hypoalbuminemia)",
                "Lipid panel: hyperlipidemia (↑ total cholesterol >200 mg/dL, ↑ LDL, ↑ triglycerides)",
                "BMP: Cr usually normal (GFR preserved unless severe hypovolemia), normal K+, may have ↑ BUN if volume depleted",
                "Complement (C3, C4): NORMAL (vs low in post-infectious GN, lupus)",
                "Serum protein electrophoresis: ↓ albumin, ↑ alpha-2 globulins",
                "Antistreptolysin O (ASO), anti-DNase B: negative (vs elevated in PSGN)",
                "ANA, anti-dsDNA: negative (rule out lupus nephritis)",
                "Hepatitis B/C serology: negative (rule out membranous nephropathy association)"
            ],
            imaging: [
                "Renal ultrasound: normal kidney size and echogenicity (rules out CKD)",
                "CXR: if dyspnea (check for pleural effusions from severe nephrotic syndrome)"
            ],
            differentialDiagnosis: [
                "Focal segmental glomerulosclerosis (FSGS): nephrotic syndrome, steroid-resistant (50%), hematuria common, hypertension, worse prognosis. Biopsy: segmental sclerosis on light microscopy.",
                "Membranous nephropathy: nephrotic syndrome in adults (most common in Caucasians >40), associated with solid tumors, hepatitis B, NSAIDs, SLE. Biopsy: GBM thickening, subepithelial immune deposits ('spike and dome').",
                "Post-infectious glomerulonephritis (PSGN): nephritic syndrome (hematuria, HTN, edema), ↓ C3, recent strep infection (ASO+), periorbital edema. Biopsy: 'humps' (subepithelial deposits).",
                "IgA nephropathy: nephritic syndrome, episodic gross hematuria (days after URI), normal C3. Biopsy: mesangial IgA deposits.",
                "Lupus nephritis: nephrotic or nephritic, ANA+, anti-dsDNA+, ↓ C3/C4, systemic lupus features (rash, arthritis).",
                "Acute tubular necrosis (ATN): AKI without massive proteinuria, muddy brown casts, FENa >2%"
            ],
            management: {
                acute: [
                    "Corticosteroids (first-line, 90% remission rate):",
                    "- Children: prednisone 60 mg/m²/day (or 2 mg/kg/day, max 60 mg) × 4-6 weeks, then alternate-day taper over 2-6 months",
                    "- Adults: prednisone 1 mg/kg/day (max 80 mg) × 4-8 weeks, then taper over 6 months",
                    "- Remission (complete): urine protein <300 mg/day or trace on dipstick × 3 consecutive days. Typically within 4-8 weeks.",
                    "- Relapse rate: 30-40% after first remission, higher if relapse occurs during steroid taper",
                    "Supportive management:",
                    "- Edema: sodium restriction (<2 g/day), loop diuretics (furosemide 20-40 mg PO daily, may need higher doses due to hypoalbuminemia)",
                    "- Hypovolemia risk: aggressive diuresis can cause prerenal AKI (monitor Cr, urine output)",
                    "- Hyperlipidemia: statin (atorvastatin 10-20 mg daily) if persistent after remission",
                    "- Infection prophylaxis: increased risk of infections (encapsulated organisms: Strep pneumoniae, H. influenzae) from urinary IgG loss. Consider pneumococcal vaccine. Avoid live vaccines while on high-dose steroids.",
                    "- Hypercoagulability: increased thrombosis risk (DVT, renal vein thrombosis) from urinary loss of antithrombin III. Anticoagulation (heparin, warfarin) if severe hypoalbuminemia (<2 g/dL) or prior thrombosis.",
                    "Monitor: urine protein (daily dipstick), serum albumin, Cr, BP, weight"
                ],
                chronic: [
                    "Steroid-responsive disease (majority):",
                    "- Taper steroids slowly after remission (alternate-day dosing, then discontinue over 2-6 months)",
                    "- Monitor for relapses (proteinuria recurrence): treat relapse with same prednisone regimen",
                    "Frequent relapsers (≥2 relapses in 6 months) or steroid-dependent (relapse during taper):",
                    "- Steroid-sparing agents: cyclophosphamide 2 mg/kg/day × 8-12 weeks (induces long-term remission in 60-70%, but gonadal toxicity), OR",
                    "- Calcineurin inhibitors: cyclosporine 3-5 mg/kg/day or tacrolimus 0.1 mg/kg/day (maintain remission, but relapse common after discontinuation)",
                    "- Rituximab (anti-CD20): 375 mg/m² weekly × 4 weeks (for steroid-dependent or frequent relapsers, increasingly used, ~80% remission)",
                    "- Mycophenolate mofetil (CellCept): 1000-2000 mg/day (alternative steroid-sparing agent)",
                    "Steroid-resistant MCD (10%, rare):",
                    "- Consider biopsy if not done (may be FSGS misdiagnosed as MCD)",
                    "- Calcineurin inhibitors (cyclosporine or tacrolimus) × 6 months trial",
                    "- Rituximab if calcineurin inhibitors fail",
                    "Long-term monitoring: annual urinalysis, Cr, BP (most children achieve permanent remission by adolescence)"
                ]
            },
            complications: [
                "Infections: increased risk (urinary IgG loss → ↓ immunity). Bacterial peritonitis (Strep pneumoniae, E. coli), cellulitis, sepsis. Leading cause of morbidity/mortality in nephrotic syndrome.",
                "Thromboembolism: hypercoagulable state (urinary loss of antithrombin III, protein C/S, increased liver synthesis of clotting factors). DVT, PE, renal vein thrombosis (presents with flank pain, hematuria, sudden ↑ proteinuria). Risk highest if albumin <2 g/dL.",
                "Acute kidney injury (AKI): prerenal from hypovolemia (aggressive diuresis, diarrhea), or ATN from prolonged hypoperfusion",
                "Hyperlipidemia: ↑ cholesterol, ↑ LDL (liver compensatory synthesis due to hypoalbuminemia). Long-term CV risk if chronic/relapsing disease.",
                "Steroid side effects: weight gain, hyperglycemia (steroid-induced diabetes), hypertension, osteoporosis, growth retardation (children), cataracts, avascular necrosis (if prolonged high-dose)",
                "Relapse: 30-40% after first remission, 50-70% have ≥1 relapse. Triggered by infections, medications, stress.",
                "Progression to FSGS: rare (<5%), if steroid-resistant MCD → may actually be FSGS on repeat biopsy"
            ],
            prognosis: "Excellent, especially in children. 90% achieve complete remission with corticosteroids. Relapse rate: 30-40% after first remission, higher in children (50-70% relapse at least once). Most children achieve permanent remission by adolescence (no relapses). Adults: higher relapse rate, may require long-term steroid-sparing agents. Steroid-resistant MCD (10%): consider FSGS misdiagnosis, poorer prognosis. Progression to ESRD: <5%, rare (mostly in true steroid-resistant cases or FSGS). No long-term kidney damage if remission achieved. Mortality rare (<1%), mostly from infections or thromboembolism.",
            clinicalPearls: [
                "MCD = most common nephrotic syndrome in children (80-90% of cases age 2-6 years). Adults: 10-15% of nephrotic syndrome.",
                "Classic presentation: sudden periorbital edema + foamy urine + normal BP + NO hematuria in a child age 2-6 years.",
                "Nephrotic syndrome tetrad: (1) proteinuria >3.5 g/day, (2) hypoalbuminemia <3 g/dL, (3) edema, (4) hyperlipidemia.",
                "Light microscopy NORMAL (hence 'minimal change'). Electron microscopy: podocyte foot process effacement. Immunofluorescence: NEGATIVE (no immune deposits).",
                "Selective proteinuria: mostly albumin (vs non-selective in FSGS, membranous). Bland urinalysis (no RBCs, no RBC casts).",
                "Normal complement (C3, C4) vs low C3 in post-infectious GN, membranoproliferative GN, lupus.",
                "Steroid-responsive = 90% remission with prednisone 60 mg/m²/day × 4-6 weeks (children). Remission within 4-8 weeks = diagnostic (supports MCD diagnosis).",
                "Biopsy NOT needed if typical presentation in children (age 1-10, normal BP, no hematuria, normal C3). Biopsy if atypical or steroid-resistant.",
                "Relapse rate: 30-40% overall, higher in children (50-70%). Triggered by infections (URI), medications, stress. Treat relapse same as initial episode.",
                "Frequent relapsers (≥2 relapses in 6 months) or steroid-dependent: use steroid-sparing agents (cyclophosphamide, cyclosporine, tacrolimus, rituximab).",
                "Steroid-resistant MCD (10%): may be FSGS misdiagnosed as MCD. Repeat biopsy, try calcineurin inhibitors (cyclosporine, tacrolimus) or rituximab.",
                "Infection risk: urinary IgG loss → ↓ immunity to encapsulated organisms (Strep pneumoniae, H. influenzae). Give pneumococcal vaccine. Watch for bacterial peritonitis (abdominal pain, fever).",
                "Hypercoagulable: urinary loss of antithrombin III → ↑ thrombosis risk (DVT, PE, renal vein thrombosis). Anticoagulate if albumin <2 g/dL or prior thrombosis.",
                "Renal vein thrombosis: flank pain, hematuria, sudden ↑ proteinuria. Diagnose with Doppler ultrasound or CT. Treat with anticoagulation (heparin → warfarin).",
                "Furosemide doses: may need high doses (40-80 mg) because hypoalbuminemia → ↓ drug delivery to loop of Henle. Monitor for hypovolemia (prerenal AKI).",
                "Associated with Hodgkin lymphoma in adults: 10-20% of adult MCD associated with Hodgkin. Screen if adult with MCD (CXR, CT chest).",
                "Prognosis: excellent in children (90% remission, most achieve permanent remission by adolescence). Adults: higher relapse rate, may need long-term immunosuppression. Progression to ESRD rare (<5%).",
                "MCD vs FSGS: MCD = steroid-responsive (90%), normal light microscopy, excellent prognosis. FSGS = steroid-resistant (50%), segmental sclerosis on biopsy, worse prognosis (30% progress to ESRD)."
            ]
        }
    },
    {
        id: "focal-segmental-glomerulosclerosis",
        name: "Focal Segmental Glomerulosclerosis (FSGS)",
        system: "renal",
        categories: ["glomerular-diseases"],
        symptoms: ["edema", "foamy-urine", "hypertension", "hematuria"],
        tags: ["nephrotic-syndrome", "podocyte-injury", "steroid-resistant", "progressive"],
        severity: "severe",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "FSGS = glomerular disease characterized by sclerosis (scarring) affecting some glomeruli (focal) and only segments of affected glomeruli (segmental). Most common cause of nephrotic syndrome in adults (especially African Americans). Presents with nephrotic syndrome ± hematuria ± hypertension. 50% steroid-resistant. Poor prognosis: 30-50% progress to ESRD in 5-10 years.",
            pathophysiology: "Podocyte injury (from various causes) → podocyte foot process effacement + detachment from GBM → segmental scarring (sclerosis) of glomerular capillaries → progressive nephron loss → ESRD. Pathogenesis varies by subtype: (1) Primary FSGS: idiopathic podocyte injury (circulating permeability factors, genetic mutations in podocyte proteins like podocin, nephrin). (2) Secondary FSGS: adaptive hyperfiltration (obesity, reduced nephron mass, reflux nephropathy, sickle cell) → glomerular hypertension → podocyte stress → sclerosis. (3) Genetic FSGS: mutations in podocyte genes (NPHS2/podocin, ACTN4/actinin, TRPC6). Sclerosis initially focal/segmental → becomes global over time → progressive GFR decline.",
            epidemiology: "Most common cause of primary nephrotic syndrome in adults in US (35-40%, especially African Americans). Second most common in children (10-15%, after minimal change disease). Bimodal age: children/young adults (primary) and older adults (secondary). African Americans have 3-4× higher risk (APOL1 gene variants increase risk). HIV-associated FSGS: collapsing variant, rapid progression to ESRD.",
            riskFactors: [
                "African American ancestry (APOL1 gene variants G1/G2, 3-4× risk)",
                "Obesity (secondary FSGS from hyperfiltration, 'obesity-related glomerulopathy')",
                "HIV infection (collapsing variant, aggressive course)",
                "Heroin use (collapsing variant, 'heroin nephropathy')",
                "Reflux nephropathy, congenital renal anomalies (reduced nephron mass → hyperfiltration)",
                "Sickle cell disease (glomerular hyperfiltration, sickling)",
                "Prior kidney injury (adaptive FSGS)",
                "Family history (genetic FSGS, autosomal recessive or dominant)"
            ],
            presentation: [
                "Nephrotic syndrome (proteinuria >3.5 g/day, hypoalbuminemia, edema, hyperlipidemia): most common presentation (70-80%)",
                "Edema: peripheral, periorbital, ascites (from hypoalbuminemia)",
                "Foamy urine: from massive proteinuria",
                "Hypertension (50-70%, more common than minimal change disease): from progressive renal damage",
                "Hematuria: microscopic (30-50%), occasionally gross (vs minimal change which has no hematuria)",
                "Acute kidney injury: can present with AKI (collapsing variant)",
                "Asymptomatic proteinuria: found incidentally on urinalysis",
                "Progressive decline in kidney function: gradual ↑ Cr over months-years"
            ],
            physicalExam: [
                "Hypertension (present in 50-70%)",
                "Peripheral edema: 2-4+ pitting edema (legs, ankles, sacrum)",
                "Periorbital edema",
                "Ascites (if severe nephrotic syndrome)",
                "Normal to slightly enlarged kidneys on exam (vs small kidneys in CKD)"
            ],
            diagnosticCriteria: "Kidney biopsy required for diagnosis (cannot be diagnosed clinically). Light microscopy: segmental sclerosis and hyalinosis in some glomeruli (focal) and affecting only part of the glomerular tuft (segmental). Immunofluorescence: IgM and C3 deposits in sclerotic segments (non-specific trapping). Electron microscopy: podocyte foot process effacement (diffuse). Distinguish from minimal change (normal light microscopy) and membranous (GBM thickening, subepithelial deposits).",
            labs: [
                "Urinalysis: massive proteinuria (3-4+), hematuria (30-50%, dysmorphic RBCs), oval fat bodies (lipiduria)",
                "24-hour urine protein or spot protein/creatinine ratio: >3.5 g/day (nephrotic range), non-selective proteinuria (albumin + globulins)",
                "Serum albumin: <3 g/dL (often <2 g/dL)",
                "Lipid panel: hyperlipidemia (↑ total cholesterol, ↑ LDL, ↑ triglycerides)",
                "BMP: ↑ Cr (common at presentation, 30-50% have some renal insufficiency), GFR often reduced",
                "Complement (C3, C4): NORMAL (vs low in post-infectious GN, lupus)",
                "HIV test: all patients (rule out HIV-associated FSGS)",
                "ANA, anti-dsDNA: negative (rule out lupus nephritis)",
                "Hepatitis B/C serology: negative",
                "Genetic testing: if family history, pediatric onset, or steroid-resistant (NPHS2/podocin, ACTN4, TRPC6 mutations)"
            ],
            imaging: [
                "Renal ultrasound: normal to slightly increased kidney size (early), normal echogenicity. If advanced → small kidneys, increased echogenicity (CKD)",
                "Kidney biopsy (diagnostic): percutaneous, light + immunofluorescence + electron microscopy"
            ],
            differentialDiagnosis: [
                "Minimal change disease (MCD): nephrotic syndrome, steroid-responsive (90%), normal light microscopy (vs segmental sclerosis in FSGS), excellent prognosis. Biopsy distinguishes.",
                "Membranous nephropathy: nephrotic syndrome in older adults, associated with malignancy/hepatitis B. Biopsy: GBM thickening, subepithelial 'spike and dome' deposits.",
                "IgA nephropathy: nephritic syndrome, episodic gross hematuria (days after URI), normal C3. Biopsy: mesangial IgA deposits.",
                "Diabetic nephropathy: nephrotic syndrome in diabetic (10-20 year history), retinopathy often present. Biopsy: Kimmelstiel-Wilson nodules (nodular glomerulosclerosis), GBM thickening.",
                "Lupus nephritis: nephrotic or nephritic, ANA+, anti-dsDNA+, ↓ C3/C4. Biopsy: 'full house' immune deposits (IgG, IgM, IgA, C3, C1q).",
                "HIV-associated nephropathy (HIVAN): collapsing FSGS variant, rapid progression, African Americans. HIV+, high viral load."
            ],
            management: {
                acute: [
                    "Supportive management (all patients):",
                    "- Edema: sodium restriction (<2 g/day), loop diuretics (furosemide 40-80 mg PO daily, higher doses due to hypoalbuminemia)",
                    "- Hypertension: ACE inhibitors (lisinopril 10-40 mg daily) or ARBs (losartan 50-100 mg daily) - FIRST-LINE (reduce proteinuria + slow progression). Goal BP <130/80.",
                    "- Proteinuria reduction: ACE/ARB (renoprotective, goal proteinuria <500 mg/day)",
                    "- Hyperlipidemia: statin (atorvastatin 40-80 mg daily) for CV risk reduction",
                    "- Hypercoagulability: anticoagulation (warfarin INR 2-3) if albumin <2 g/dL or prior thrombosis (renal vein thrombosis, DVT)",
                    "- Infection prophylaxis: pneumococcal vaccine (urinary IgG loss → ↓ immunity)",
                    "Immunosuppression (primary FSGS):",
                    "- Corticosteroids: prednisone 1 mg/kg/day (max 80 mg) × 4-16 weeks, then taper over 6-12 months. Only 30-50% respond (vs 90% in MCD). Longer trial (4-6 months) may be needed.",
                    "- Remission: proteinuria <300 mg/day (complete) or >50% reduction (partial). Time to remission: 4-16 weeks (slower than MCD).",
                    "Monitor: urine protein (weekly), serum albumin, Cr, BP, weight"
                ],
                chronic: [
                    "Steroid-responsive FSGS (30-50%):",
                    "- Taper steroids slowly after remission (alternate-day, then discontinue over 6-12 months)",
                    "- Monitor for relapses: treat relapse with same prednisone regimen",
                    "- Relapse common (30-50%), may require steroid-sparing agents",
                    "Steroid-resistant FSGS (50-70%, poor prognosis):",
                    "- Calcineurin inhibitors (CNIs): cyclosporine 3-5 mg/kg/day or tacrolimus 0.1-0.2 mg/kg/day × 6-12 months. Response rate 40-60%. Monitor levels, nephrotoxicity (can worsen Cr).",
                    "- Mycophenolate mofetil (CellCept): 2000-3000 mg/day × 6-12 months (alternative, less effective than CNIs, ~30% response)",
                    "- Rituximab (anti-CD20): 375 mg/m² weekly × 4 weeks (emerging therapy, mixed results, ~30-50% response in some studies)",
                    "- Combination therapy: steroids + CNI or steroids + mycophenolate (if monotherapy fails)",
                    "Secondary FSGS (treat underlying cause):",
                    "- Obesity: weight loss, bariatric surgery if BMI >40",
                    "- HIV: antiretroviral therapy (ART) - can slow or reverse HIVAN",
                    "- Reflux nephropathy: surgical correction if indicated",
                    "- Avoid nephrotoxins: NSAIDs (worsen proteinuria, ↓ GFR)",
                    "Genetic FSGS (poor response to immunosuppression):",
                    "- Supportive care (ACE/ARB, BP control), consider early transplant evaluation",
                    "- Immunosuppression usually ineffective (podocin mutations)",
                    "Progressive CKD/ESRD:",
                    "- Manage CKD complications: anemia (ESAs), bone disease (phosphate binders, vitamin D), hyperkalemia",
                    "- Dialysis: if GFR <15 or symptomatic uremia",
                    "- Kidney transplant: definitive treatment. Recurrence risk: 30-50% in primary FSGS (higher if rapid progression to ESRD, treat recurrence with plasmapheresis + rituximab + high-dose cyclosporine).",
                    "Long-term monitoring: urinalysis, Cr, BP every 3-6 months. Nephrology follow-up."
                ]
            },
            complications: [
                "Progression to ESRD: 30-50% within 5-10 years (vs <5% in MCD). Worse prognosis if steroid-resistant, heavy proteinuria (>10 g/day), ↑ Cr at presentation, collapsing variant.",
                "Chronic kidney disease: progressive GFR decline, require dialysis or transplant",
                "Infections: increased risk (urinary IgG loss). Bacterial peritonitis, cellulitis, sepsis.",
                "Thromboembolism: hypercoagulable state. DVT, PE, renal vein thrombosis (flank pain, hematuria, sudden ↑ proteinuria). Risk highest if albumin <2 g/dL.",
                "Acute kidney injury: prerenal (hypovolemia from aggressive diuresis) or ATN (collapsing variant can present with AKI)",
                "Cardiovascular disease: hyperlipidemia, hypertension → accelerated atherosclerosis, MI, stroke",
                "Steroid side effects: weight gain, hyperglycemia, hypertension, osteoporosis, avascular necrosis (if prolonged high-dose)",
                "Recurrence post-transplant: 30-50% in primary FSGS, can be aggressive (early graft loss). Treat with plasmapheresis, rituximab, cyclosporine.",
                "Medication toxicity: cyclosporine/tacrolimus nephrotoxicity (can worsen renal function)"
            ],
            prognosis: "Poor compared to minimal change disease. 30-50% progress to ESRD within 5-10 years. 50% are steroid-resistant (worse prognosis). Predictors of poor prognosis: steroid resistance, heavy proteinuria (>10 g/day), ↑ Cr at diagnosis, collapsing variant (rapid progression, 2-3 years to ESRD), African American race, delayed treatment. Steroid-responsive patients: better prognosis, but relapse common (30-50%). Genetic FSGS: poor response to immunosuppression, progress to ESRD. HIV-associated (collapsing variant): rapid progression to ESRD (months-2 years) if untreated, ART can slow progression. Post-transplant recurrence: 30-50%, can recur within days (treat aggressively with plasmapheresis).",
            clinicalPearls: [
                "FSGS = most common cause of nephrotic syndrome in adults (especially African Americans). 50% steroid-resistant, 30-50% progress to ESRD in 5-10 years.",
                "Biopsy required for diagnosis: segmental sclerosis on light microscopy (focal = some glomeruli, segmental = part of tuft). Cannot diagnose clinically.",
                "FSGS vs MCD: both cause nephrotic syndrome. MCD = normal light microscopy, steroid-responsive (90%), excellent prognosis. FSGS = segmental sclerosis, steroid-resistant (50%), poor prognosis (30-50% ESRD).",
                "Hypertension + hematuria common in FSGS (50-70%), rare in MCD. Clue: nephrotic syndrome + HTN + hematuria = likely FSGS, not MCD.",
                "Primary vs secondary FSGS: primary (idiopathic, circulating permeability factors, genetic) vs secondary (obesity, HIV, reflux, reduced nephron mass). Secondary FSGS responds poorly to immunosuppression, treat underlying cause.",
                "Steroid trial: prednisone 1 mg/kg/day × 4-16 weeks. Only 30-50% respond (vs 90% in MCD). Takes longer to respond (4-16 weeks vs 4-8 weeks in MCD).",
                "Steroid-resistant FSGS: try calcineurin inhibitors (cyclosporine or tacrolimus) × 6-12 months, 40-60% response. Mycophenolate or rituximab if CNIs fail.",
                "Collapsing variant: worst prognosis (rapid ESRD in 2-3 years). Associated with HIV (HIVAN), heroin use. African Americans. On biopsy: global collapse of glomerular tuft, podocyte hyperplasia.",
                "APOL1 gene variants (G1/G2): African Americans, 3-4× ↑ risk of FSGS. Also ↑ risk of HIVAN, hypertensive nephrosclerosis. Homozygous or compound heterozygous = high risk.",
                "HIV-associated nephropathy (HIVAN): collapsing FSGS, rapid progression to ESRD. African Americans, high HIV viral load. Treat with ART (antiretroviral therapy) - can stabilize or reverse.",
                "ACE/ARB: FIRST-LINE for all FSGS (reduce proteinuria, slow progression). Goal proteinuria <500 mg/day, BP <130/80.",
                "Renal vein thrombosis: complication of nephrotic syndrome (hypercoagulable if albumin <2). Flank pain, hematuria, sudden ↑ proteinuria. Diagnose with Doppler ultrasound or CT. Treat with anticoagulation (heparin → warfarin).",
                "Genetic FSGS: podocin (NPHS2, most common), actinin (ACTN4), TRPC6 mutations. Autosomal recessive (NPHS2) or dominant (ACTN4, TRPC6). Steroid-resistant, poor response to immunosuppression. Family history, pediatric onset.",
                "Post-transplant recurrence: 30-50% in primary FSGS (circulating permeability factors recur immediately post-transplant). Can recur within days → nephrotic syndrome → graft loss. Treat: plasmapheresis (remove permeability factors) + rituximab + high-dose cyclosporine.",
                "Prognosis predictors: steroid resistance (poor), heavy proteinuria >10 g/day (poor), ↑ Cr at diagnosis (poor), collapsing variant (very poor, 2-3 years to ESRD), African American (poor), delayed treatment (poor).",
                "Obesity-related FSGS: secondary to hyperfiltration from increased body mass. Perihilar variant on biopsy. Treat with weight loss, ACE/ARB. Immunosuppression ineffective.",
                "Furosemide doses: may need very high doses (80-200 mg) because hypoalbuminemia → ↓ drug delivery to loop of Henle. Monitor for hypovolemia (prerenal AKI).",
                "FSGS = second most common nephrotic syndrome in children (10-15%, after MCD). If child with nephrotic syndrome doesn't respond to steroids in 4-8 weeks → likely FSGS, not MCD. Biopsy to confirm."
            ]
        }
    },
    {
        id: "membranous-nephropathy",
        name: "Membranous Nephropathy",
        system: "renal",
        categories: ["glomerular-diseases"],
        symptoms: ["edema", "foamy-urine", "fatigue"],
        tags: ["nephrotic-syndrome", "thickened-gbm", "spike-and-dome", "pla2r"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Membranous nephropathy = glomerular disease characterized by diffuse thickening of the glomerular basement membrane (GBM) from immune complex deposition. Most common cause of primary nephrotic syndrome in Caucasian adults >40 years. Presents with nephrotic syndrome. Classic biopsy finding: 'spike and dome' appearance on silver stain (subepithelial immune deposits). 30% spontaneous remission, 30% progressive CKD.",
            pathophysiology: "Immune complexes deposit in subepithelial space (between podocytes and GBM) → complement activation → GBM damage and thickening → proteinuria. Primary (75%): autoantibodies against podocyte antigens, most commonly PLA2R (M-type phospholipase A2 receptor, 70-80% of primary cases) or THSD7A (5-10%). Anti-PLA2R binds to PLA2R on podocytes → in situ immune complex formation → C5b-9 (membrane attack complex) activation → podocyte injury → proteinuria. Secondary (25%): immune complexes from exogenous antigens: infections (hepatitis B, C, syphilis), drugs (NSAIDs, penicillamine, gold), malignancy (solid tumors: lung, breast, colon, prostate), autoimmune (SLE, thyroiditis). Biopsy: subepithelial deposits → GBM 'spikes' grow around deposits → 'spike and dome' pattern.",
            epidemiology: "Most common cause of primary nephrotic syndrome in Caucasian adults (30-40%). Mean age 50-60 years, M:F = 2:1. Less common in children (<5%). African Americans: more likely FSGS. Associated with solid tumors in 10-20% of adults >60 years (paraneoplastic). Hepatitis B endemic areas: HBV-associated membranous common.",
            riskFactors: [
                "Age >40 years (peak 50-60 years)",
                "Male sex (2:1)",
                "Caucasian race",
                "Hepatitis B or C infection (especially in endemic areas)",
                "Solid malignancy (lung, breast, colon, prostate, gastric): 10-20% of adults >60",
                "Autoimmune disease: SLE (Class V lupus nephritis), thyroiditis",
                "Medications: NSAIDs (especially in elderly), penicillamine (Wilson disease treatment), gold (rheumatoid arthritis)",
                "Infections: syphilis, schistosomiasis, malaria"
            ],
            presentation: [
                "Nephrotic syndrome (proteinuria >3.5 g/day, hypoalbuminemia, edema, hyperlipidemia): most common presentation (80%)",
                "Edema: peripheral (legs, ankles), periorbital, ascites, pleural effusions",
                "Foamy urine: from massive proteinuria (often >10 g/day, heavy proteinuria)",
                "Fatigue, lethargy: from hypoalbuminemia",
                "Asymptomatic proteinuria: found incidentally (20%)",
                "No hematuria (typically bland sediment, vs nephritic syndromes)",
                "Normal blood pressure (50-70%, vs hypertension in FSGS)",
                "Gradual onset: symptoms develop over weeks-months"
            ],
            physicalExam: [
                "Peripheral edema: 2-4+ pitting edema (legs, sacrum)",
                "Periorbital edema (especially morning)",
                "Ascites (if severe nephrotic syndrome)",
                "Normal blood pressure (50-70%, vs HTN in FSGS)",
                "Pleural effusions (rare, severe cases)"
            ],
            diagnosticCriteria: "Kidney biopsy required for diagnosis. Light microscopy: diffuse GBM thickening, 'spike and dome' on silver stain (GBM spikes between subepithelial deposits). Immunofluorescence: granular IgG and C3 deposits along GBM (subepithelial, 'granular' pattern). Electron microscopy: subepithelial electron-dense deposits ('humps'). Stages: I (small deposits), II (spike formation), III (deposits surrounded by GBM), IV (dense deposits/sclerosis). Serology: Anti-PLA2R antibody positive in 70-80% of primary membranous (specific for primary, absent in secondary).",
            labs: [
                "Urinalysis: massive proteinuria (3-4+), NO hematuria (bland sediment), oval fat bodies (lipiduria)",
                "24-hour urine protein or spot protein/creatinine ratio: >3.5 g/day (nephrotic range), often >10 g/day (heavy proteinuria)",
                "Serum albumin: <3 g/dL (often <2 g/dL)",
                "Lipid panel: hyperlipidemia (↑ total cholesterol >200, ↑ LDL, ↑ triglycerides)",
                "BMP: Cr usually normal at presentation (GFR preserved), may have ↑ Cr if advanced",
                "Complement (C3, C4): NORMAL (vs low in lupus, post-infectious GN)",
                "Anti-PLA2R antibody: positive in 70-80% of primary membranous (negative in secondary). Titer correlates with disease activity.",
                "Anti-THSD7A antibody: positive in 5-10% of primary membranous (if PLA2R negative)",
                "Hepatitis B surface antigen (HBsAg), anti-HCV: rule out viral hepatitis (secondary membranous)",
                "ANA, anti-dsDNA, complement: rule out SLE (Class V lupus nephritis)",
                "Age-appropriate cancer screening: if >60 years (rule out malignancy-associated membranous): CXR, colonoscopy, mammography, PSA"
            ],
            imaging: [
                "Renal ultrasound: normal kidney size and echogenicity (early disease)",
                "Kidney biopsy (diagnostic): percutaneous, light + immunofluorescence + electron microscopy",
                "Malignancy workup (if >60 years or concerning features): CT chest/abdomen/pelvis, colonoscopy, mammography (women), PSA (men)"
            ],
            differentialDiagnosis: [
                "Minimal change disease: nephrotic syndrome, steroid-responsive, normal light microscopy (vs GBM thickening in membranous), younger patients. Biopsy distinguishes.",
                "FSGS: nephrotic syndrome, steroid-resistant, segmental sclerosis on biopsy, hypertension common, hematuria common. Biopsy distinguishes.",
                "Diabetic nephropathy: nephrotic syndrome in diabetic (10-20 year history), retinopathy often present. Biopsy: Kimmelstiel-Wilson nodules, GBM thickening (diffuse, not spike/dome).",
                "Lupus nephritis (Class V): membranous pattern on biopsy, ANA+, anti-dsDNA+, ↓ C3/C4, 'full house' IF (IgG, IgM, IgA, C3, C1q). Anti-PLA2R negative.",
                "Amyloidosis: nephrotic syndrome, Congo red positive (apple-green birefringence), systemic features (heart, liver). Biopsy: amyloid deposits in glomeruli, mesangium.",
                "Post-infectious glomerulonephritis: nephritic syndrome (hematuria, HTN), ↓ C3, recent strep infection. Biopsy: subepithelial 'humps' (similar to membranous but different clinical context)."
            ],
            management: {
                acute: [
                    "Supportive management (all patients):",
                    "- Edema: sodium restriction (<2 g/day), loop diuretics (furosemide 40-80 mg PO daily, higher doses due to hypoalbuminemia)",
                    "- Proteinuria reduction: ACE inhibitors (lisinopril 10-40 mg daily) or ARBs (losartan 50-100 mg daily) - reduce proteinuria, slow progression. Goal BP <130/80, goal proteinuria <500 mg/day.",
                    "- Hyperlipidemia: statin (atorvastatin 40-80 mg daily) for CV risk reduction",
                    "- Hypercoagulability: anticoagulation (warfarin INR 2-3 or DOAC) if albumin <2-2.5 g/dL or prior thrombosis (renal vein thrombosis, DVT). Membranous has HIGHEST thrombosis risk among nephrotic syndromes.",
                    "- Infection prophylaxis: pneumococcal vaccine",
                    "Risk stratification for immunosuppression:",
                    "- Low risk (conservative management): proteinuria <4 g/day, normal Cr, no symptoms. Observation × 6 months (30% spontaneous remission).",
                    "- High risk (immunosuppression): proteinuria >8 g/day, ↑ Cr, symptomatic nephrotic syndrome, no spontaneous remission after 6 months observation.",
                    "Treat secondary causes (if identified):",
                    "- Hepatitis B: antiviral therapy (entecavir, tenofovir)",
                    "- Malignancy: treat underlying cancer (chemotherapy, surgery)",
                    "- Medications: discontinue offending drug (NSAIDs, penicillamine, gold)",
                    "- SLE: treat lupus nephritis (steroids + mycophenolate or cyclophosphamide)",
                    "Monitor: urine protein, serum albumin, Cr, BP, anti-PLA2R titer (if positive)"
                ],
                chronic: [
                    "Primary membranous nephropathy (anti-PLA2R positive):",
                    "Immunosuppression (if high risk: proteinuria >8 g/day, ↑ Cr, symptomatic, or no remission after 6 months):",
                    "- First-line: Cyclophosphamide + corticosteroids (Ponticelli regimen, modified): Alternate monthly cycles × 6 months. Months 1, 3, 5: methylprednisolone 1 g IV × 3 days, then prednisone 0.5 mg/kg/day PO × 27 days. Months 2, 4, 6: cyclophosphamide 2 mg/kg/day PO × 30 days. Remission rate: 60-80%.",
                    "- Alternative: Calcineurin inhibitors (CNIs): cyclosporine 3-5 mg/kg/day or tacrolimus 0.05-0.1 mg/kg/day × 6-12 months. Remission rate: 60-70%, but relapse common after discontinuation (50%).",
                    "- Rituximab (anti-CD20): 375 mg/m² weekly × 4 weeks (or 1 g × 2 doses 2 weeks apart). Emerging first-line therapy, remission rate 60-70%, fewer side effects than cyclophosphamide. Preferred in many centers now.",
                    "- ACTH (adrenocorticotropic hormone): synthetic ACTH 1 mg SC twice weekly × 6 months. Alternative for patients who can't tolerate other agents.",
                    "Observation (if low risk: proteinuria <4 g/day, normal Cr, asymptomatic):",
                    "- Conservative management with ACE/ARB, monitor × 6 months",
                    "- 30% spontaneous remission (complete or partial) within 1 year",
                    "Remission definitions:",
                    "- Complete remission: proteinuria <0.3 g/day, normal albumin, stable Cr",
                    "- Partial remission: proteinuria <3.5 g/day (or >50% reduction), stable Cr",
                    "Secondary membranous nephropathy (anti-PLA2R negative):",
                    "- Treat underlying cause (hepatitis B antiviral, treat malignancy, stop offending drug)",
                    "- Immunosuppression generally NOT indicated (unless severe, then treat as primary)",
                    "Long-term monitoring: urinalysis, Cr, anti-PLA2R titer (correlates with disease activity, rising titer = relapse risk) every 3-6 months. Nephrology follow-up."
                ]
            },
            complications: [
                "Thromboembolism: HIGHEST risk among nephrotic syndromes (25-35%). Renal vein thrombosis (most common, 5-60% depending on series, often asymptomatic), DVT, PE, arterial thrombosis. Risk factors: albumin <2-2.5 g/dL, heavy proteinuria >10 g/day. Anticoagulate prophylactically if albumin <2-2.5.",
                "Progression to ESRD: 30-40% within 10-15 years. Predictors: persistent proteinuria >8 g/day, ↑ Cr, no remission, male sex, older age.",
                "Chronic kidney disease: progressive GFR decline despite treatment",
                "Infections: increased risk (urinary IgG loss). Bacterial peritonitis, cellulitis, sepsis.",
                "Acute kidney injury: prerenal (hypovolemia from aggressive diuresis), or ATN (rarely)",
                "Cardiovascular disease: hyperlipidemia, hypercoagulability → accelerated atherosclerosis, MI, stroke",
                "Malignancy: 10-20% of adults >60 have underlying solid tumor (paraneoplastic membranous). Screen appropriately.",
                "Medication toxicity: cyclophosphamide (hemorrhagic cystitis, bladder cancer, infertility), cyclosporine/tacrolimus nephrotoxicity",
                "Relapse after immunosuppression: 30-50%, especially with CNIs (relapse after discontinuation common)"
            ],
            prognosis: "Variable. Natural history (untreated): 30% spontaneous remission (complete or partial), 30% persistent proteinuria without progression, 30-40% progressive CKD → ESRD in 10-15 years. With immunosuppression (high-risk patients): 60-80% remission rate, slower progression to ESRD. Predictors of poor prognosis: male sex, older age, persistent heavy proteinuria (>8 g/day), ↑ Cr at diagnosis, no remission after treatment, high anti-PLA2R titer. Anti-PLA2R titer decline correlates with remission; persistent high titer = poor prognosis. Secondary membranous (malignancy, hepatitis B): prognosis depends on underlying cause; treating underlying disease improves renal outcomes.",
            clinicalPearls: [
                "Membranous nephropathy = most common primary nephrotic syndrome in Caucasian adults >40 years (vs FSGS in African Americans).",
                "Biopsy: 'spike and dome' on silver stain (GBM spikes around subepithelial deposits). Granular IgG/C3 on IF. Subepithelial deposits on EM.",
                "Anti-PLA2R antibody: 70-80% sensitive and HIGHLY specific for primary membranous. Negative = consider secondary causes (malignancy, hepatitis B, SLE, drugs).",
                "Secondary causes (25%): malignancy (solid tumors, 10-20% in adults >60), hepatitis B (endemic areas), SLE (Class V lupus nephritis), NSAIDs, penicillamine, gold.",
                "Malignancy screening essential in adults >60: CXR, CT chest/abdomen/pelvis, colonoscopy, mammography (women), PSA (men). Paraneoplastic membranous often resolves with cancer treatment.",
                "Highest thrombosis risk among nephrotic syndromes: 25-35%. Renal vein thrombosis most common (often asymptomatic). Anticoagulate prophylactically if albumin <2-2.5 g/dL.",
                "Renal vein thrombosis: flank pain, hematuria, sudden ↑ proteinuria, LDH ↑. Diagnose with Doppler ultrasound or CT venography. Many asymptomatic (found incidentally). Treat with anticoagulation (warfarin or DOAC).",
                "Risk stratification: Low risk (proteinuria <4 g/day, normal Cr) → observe × 6 months (30% spontaneous remission). High risk (proteinuria >8 g/day, ↑ Cr, symptomatic) → immunosuppression.",
                "Immunosuppression options: (1) Cyclophosphamide + steroids (Ponticelli regimen, 60-80% remission), (2) Rituximab (60-70% remission, emerging first-line, fewer side effects), (3) CNIs (cyclosporine/tacrolimus, 60-70% remission but relapse after stopping).",
                "Rituximab increasingly preferred as first-line: similar efficacy to cyclophosphamide, fewer side effects (no bladder toxicity, infertility), easier dosing (375 mg/m² weekly × 4 weeks).",
                "Anti-PLA2R titer: monitor disease activity. Titer decline = good response, persistent high titer = poor prognosis. Rising titer after remission = impending relapse.",
                "Spontaneous remission: 30% within 1 year (especially if proteinuria <4 g/day). Can observe low-risk patients with ACE/ARB for 6 months before starting immunosuppression.",
                "Lupus membranous (Class V lupus nephritis): biopsy looks similar to primary membranous, but 'full house' on IF (IgG, IgM, IgA, C3, C1q), anti-PLA2R negative, ANA+, anti-dsDNA+, ↓ C3/C4. Treat lupus nephritis (steroids + mycophenolate).",
                "Hepatitis B-associated membranous: endemic areas (Asia, Africa), children > adults. HBsAg+. Treat with antiviral (entecavir, tenofovir) → often resolves.",
                "NSAID-induced membranous: elderly, chronic NSAID use. Often combined with AIN (WBC casts). Stop NSAIDs → may resolve.",
                "Prognosis: 30% spontaneous remission, 30% persistent proteinuria (stable), 30-40% progress to ESRD in 10-15 years. With treatment: 60-80% remission, slower progression.",
                "Membranous vs minimal change vs FSGS: All nephrotic. MCD = children, steroid-responsive, normal light microscopy. FSGS = adults (African Americans), steroid-resistant, segmental sclerosis. Membranous = adults (Caucasians >40), GBM thickening, spike/dome, variable response."
            ]
        }
    },
    {
        id: "iga-nephropathy",
        name: "IgA Nephropathy (Berger Disease)",
        system: "renal",
        categories: ["glomerular-diseases"],
        symptoms: ["hematuria", "flank-pain", "hypertension"],
        tags: ["nephritic-syndrome", "mesangial-iga", "synpharyngitic", "henoch-schonlein"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "IgA nephropathy (Berger disease) = most common primary glomerulonephritis worldwide. Characterized by mesangial IgA immune complex deposition. Classic presentation: episodic gross hematuria concurrent with or within 1-2 days of upper respiratory infection ('synpharyngitic hematuria'). Young adults (teens-30s), males > females. Biopsy: mesangial IgA deposits. Variable prognosis: 20-40% progress to ESRD over 20 years.",
            pathophysiology: "Abnormal IgA1 glycosylation (galactose-deficient IgA1) → recognized as foreign → anti-glycan antibodies form immune complexes → deposit in glomerular mesangium → mesangial cell proliferation + matrix expansion + complement activation (alternative pathway, C3) → glomerular injury → hematuria, proteinuria. Mucosal immune system activation (URI, GI infection) → ↑ IgA production → ↑ circulating immune complexes → glomerular deposition. Biopsy: mesangial hypercellularity, mesangial IgA and C3 deposits on immunofluorescence. Progressive disease → focal segmental sclerosis → ESRD.",
            epidemiology: "Most common primary glomerulonephritis worldwide (40% of GN). More common in Asians (especially Japan, Korea, China) and Native Americans. Peak age 20-30 years (teens to 40s). Male:female = 2-3:1. Rare in African Americans. Often diagnosed incidentally on urinalysis (asymptomatic microscopic hematuria) or during episode of gross hematuria.",
            riskFactors: [
                "Asian ancestry (especially East Asian)",
                "Native American ancestry",
                "Male sex (2-3:1)",
                "Age 20-30 years (peak incidence)",
                "Family history (genetic susceptibility, clustering in families)",
                "Recent upper respiratory infection or GI infection"
            ],
            presentation: [
                "Episodic gross hematuria (40-50%): cola-colored or tea-colored urine, occurs during or 1-2 days after URI or GI infection ('synpharyngitic' - concurrent with pharyngitis). Hallmark of IgA nephropathy. Lasts 2-3 days, resolves spontaneously.",
                "Asymptomatic microscopic hematuria (30-40%): found incidentally on urinalysis (most common presentation in US)",
                "Flank pain (during gross hematuria episodes): from renal capsular distension",
                "Hypertension (20-30% at presentation, increases with progression)",
                "Proteinuria: mild-moderate (usually <1-2 g/day), can be nephrotic range (10-20%)",
                "Nephritic syndrome (rare): hematuria + hypertension + edema + ↑ Cr (acute GN presentation)",
                "Acute kidney injury (rare): crescentic IgA nephropathy, rapidly progressive",
                "No pharyngitis symptoms: URI triggers hematuria but may have minimal throat symptoms"
            ],
            physicalExam: [
                "Hypertension (20-30% at presentation)",
                "Edema (mild, if nephritic syndrome)",
                "Normal exam otherwise (no rash, no systemic features vs Henoch-Schönlein purpura)"
            ],
            diagnosticCriteria: "Kidney biopsy required for definitive diagnosis. Light microscopy: mesangial hypercellularity and matrix expansion, focal segmental sclerosis (if advanced). Immunofluorescence: mesangial IgA deposits (dominant or co-dominant, hallmark) with C3, often with IgG/IgM. Electron microscopy: mesangial electron-dense deposits. Diagnosis: mesangial IgA on biopsy + clinical presentation (episodic gross hematuria, microscopic hematuria, proteinuria). Normal complement (C3, C4) - distinguishes from post-infectious GN.",
            labs: [
                "Urinalysis: hematuria (gross or microscopic, dysmorphic RBCs), RBC casts (glomerular origin), proteinuria (mild-moderate, usually <2 g/day)",
                "24-hour urine protein or spot protein/creatinine ratio: usually <1-2 g/day (can be nephrotic >3.5 g/day in 10-20%)",
                "BMP: Cr usually normal at presentation (can be ↑ if severe or crescentic)",
                "Complement (C3, C4): NORMAL (vs low C3 in post-infectious GN, MPGN, lupus). Key distinguishing feature.",
                "Serum IgA: elevated in 50% (not diagnostic, not required for diagnosis)",
                "ANA, anti-dsDNA: negative (rule out lupus nephritis)",
                "ASO titer: may be elevated if recent strep infection, but timing of hematuria distinguishes from PSGN (IgA = 1-2 days after URI, PSGN = 1-3 weeks after infection)",
                "Hepatitis B/C serology: negative"
            ],
            imaging: [
                "Renal ultrasound: normal kidney size and echogenicity (unless advanced CKD)",
                "Kidney biopsy (diagnostic): percutaneous, light + immunofluorescence + electron microscopy"
            ],
            differentialDiagnosis: [
                "Post-streptococcal glomerulonephritis (PSGN): nephritic syndrome, ↓ C3, hematuria 1-3 weeks AFTER strep infection (vs 1-2 days in IgA), resolves spontaneously. Children > adults. Biopsy: subepithelial 'humps'.",
                "Henoch-Schönlein purpura (HSP, IgA vasculitis): IgA-mediated systemic vasculitis, palpable purpura (lower extremities, buttocks), abdominal pain, arthritis, hematuria. Children > adults. Biopsy identical to IgA nephropathy (mesangial IgA). HSP = systemic IgA nephropathy.",
                "Alport syndrome: hereditary nephritis, hematuria (persistent, not episodic), sensorineural hearing loss, ocular abnormalities (lenticonus, macular flecks). X-linked (males worse). Biopsy: GBM splitting, no IgA deposits.",
                "Thin basement membrane disease: benign familial hematuria, persistent microscopic hematuria, normal Cr, no progression. Biopsy: thinned GBM (<250 nm), no IgA.",
                "Lupus nephritis: ANA+, anti-dsDNA+, ↓ C3/C4, systemic lupus features. Biopsy: 'full house' IF (IgG, IgM, IgA, C3, C1q).",
                "ANCA vasculitis: rapidly progressive GN, ANCA+ (PR3 or MPO), systemic vasculitis (lungs, sinuses). Biopsy: crescentic GN, pauci-immune (no Ig deposits)."
            ],
            management: {
                acute: [
                    "Supportive management (all patients):",
                    "- Blood pressure control: ACE inhibitors (lisinopril 10-40 mg daily) or ARBs (losartan 50-100 mg daily) - FIRST-LINE (reduce proteinuria, slow progression). Goal BP <130/80.",
                    "- Proteinuria reduction: ACE/ARB (renoprotective, goal proteinuria <500 mg/day or <1 g/day)",
                    "- Dietary sodium restriction: <2 g/day",
                    "- Avoid nephrotoxins: NSAIDs (can worsen hematuria, GFR)",
                    "Observation (if low risk: proteinuria <0.5-1 g/day, normal BP, normal Cr):",
                    "- Conservative management with ACE/ARB, monitor × 6-12 months",
                    "- Many patients remain stable for years without immunosuppression",
                    "Treat acute episodes:",
                    "- Gross hematuria episodes: supportive care, hydration, resolves spontaneously in 2-3 days",
                    "- No antibiotics needed (viral URI trigger, not bacterial infection)",
                    "Monitor: urinalysis, Cr, BP, proteinuria every 3-6 months"
                ],
                chronic: [
                    "Risk stratification:",
                    "- Low risk: proteinuria <0.5-1 g/day, normal Cr, normal BP → observation with ACE/ARB",
                    "- High risk: proteinuria >1 g/day (especially >3 g/day), ↑ Cr, hypertension, severe histology (crescents, sclerosis) → immunosuppression",
                    "Immunosuppression (if high risk):",
                    "- Corticosteroids: prednisone 0.5-1 mg/kg/day (max 60-80 mg) × 2-3 months, then taper over 3-6 months. Indications: proteinuria >1 g/day despite ACE/ARB × 3-6 months, Cr <3 mg/dL. May slow progression. STOP Study: benefit if proteinuria >1 g/day.",
                    "- Fish oil (omega-3 fatty acids): 12 g/day (4 g EPA + DHA). Some evidence for slowing progression, reduce proteinuria. Safe, often used adjunct.",
                    "- Mycophenolate mofetil (CellCept): 1000-2000 mg/day × 6-12 months (if steroids contraindicated or ineffective, mixed evidence)",
                    "Crescentic IgA nephropathy (rapidly progressive, >50% crescents on biopsy):",
                    "- Aggressive immunosuppression: methylprednisolone 500-1000 mg IV × 3 days, then prednisone 1 mg/kg/day",
                    "- Cyclophosphamide 2 mg/kg/day × 2-3 months (or rituximab)",
                    "- Plasmapheresis (if severe, dialysis-dependent)",
                    "Progressive CKD/ESRD:",
                    "- Manage CKD complications: anemia (ESAs), bone disease (phosphate binders, vitamin D), hyperkalemia",
                    "- Dialysis: if GFR <15 or symptomatic uremia",
                    "- Kidney transplant: recurrence in graft 30-50%, but often mild. Not a contraindication to transplant. Continue ACE/ARB post-transplant.",
                    "Long-term monitoring: urinalysis, Cr, proteinuria, BP every 3-6 months. Nephrology follow-up."
                ]
            },
            complications: [
                "Progression to ESRD: 20-40% within 20 years. Predictors: persistent proteinuria >1 g/day, hypertension, ↑ Cr at diagnosis, severe histology (crescents, >50% sclerosis), male sex.",
                "Chronic kidney disease: progressive GFR decline over years-decades",
                "Hypertension: develops in 50% during course of disease (accelerates CKD progression)",
                "Nephrotic syndrome: 10-20% develop heavy proteinuria (>3.5 g/day), worse prognosis",
                "Acute kidney injury: rare, crescentic IgA nephropathy (rapidly progressive GN)",
                "Recurrence post-transplant: 30-50% in graft, usually mild, rarely causes graft loss. Recurrence rate similar to original disease.",
                "Cardiovascular disease: from hypertension, CKD"
            ],
            prognosis: "Variable. Overall: 60-80% have stable disease or slow progression, 20-40% progress to ESRD within 20 years (median time to ESRD if progressive: 20-25 years). Predictors of poor prognosis: persistent proteinuria >1 g/day (especially >3 g/day), hypertension, ↑ Cr at diagnosis, severe histology on biopsy (>50% crescents, >50% sclerosis, severe tubulointerstitial fibrosis), male sex, older age at diagnosis. Favorable prognosis: minimal proteinuria (<0.5 g/day), normal BP, normal Cr, mild histology. Episodic gross hematuria alone (without proteinuria or ↑ Cr) → excellent prognosis, rarely progresses.",
            clinicalPearls: [
                "IgA nephropathy = most common primary glomerulonephritis worldwide (40% of GN). More common in Asians.",
                "Classic presentation: episodic gross hematuria (cola/tea-colored urine) concurrent with or 1-2 days after URI ('synpharyngitic hematuria'). Lasts 2-3 days, resolves spontaneously.",
                "Synpharyngitic hematuria = hallmark of IgA nephropathy. Hematuria occurs 1-2 days after URI (vs PSGN where hematuria occurs 1-3 weeks after strep infection).",
                "Biopsy: mesangial IgA deposits (dominant or co-dominant) on immunofluorescence. Mesangial hypercellularity on light microscopy.",
                "Normal complement (C3, C4) - distinguishes from PSGN (↓ C3), MPGN (↓ C3), lupus (↓ C3/C4). Key diagnostic feature.",
                "IgA nephropathy vs Henoch-Schönlein purpura (HSP): same disease (IgA-mediated), different distribution. IgA nephropathy = isolated renal. HSP = systemic (palpable purpura, abdominal pain, arthritis) + renal. Biopsy identical (mesangial IgA). HSP more common in children.",
                "ACE/ARB: FIRST-LINE for all IgA nephropathy (reduce proteinuria, slow progression). Goal BP <130/80, proteinuria <500 mg/day.",
                "Risk stratification: Low risk (proteinuria <1 g/day, normal Cr, normal BP) → observation with ACE/ARB. High risk (proteinuria >1 g/day, ↑ Cr, HTN) → steroids.",
                "Corticosteroids: if proteinuria >1 g/day despite ACE/ARB × 3-6 months and Cr <3 mg/dL. STOP Study showed benefit. Prednisone 0.5-1 mg/kg/day × 2-3 months, then taper.",
                "Fish oil (omega-3): 12 g/day (4 g EPA + DHA). Some evidence for slowing progression, safe adjunct therapy.",
                "Crescentic IgA nephropathy: rapidly progressive (>50% crescents on biopsy). Treat aggressively: methylprednisolone IV pulse, cyclophosphamide, plasmapheresis. Can progress to dialysis in weeks-months.",
                "Prognosis predictors: proteinuria >1 g/day (poor), hypertension (poor), ↑ Cr (poor), severe histology (poor), male sex (poor). Isolated hematuria without proteinuria → excellent prognosis.",
                "Recurrence post-transplant: 30-50%, but usually mild, rarely causes graft loss. Not a contraindication to transplant.",
                "IgA nephropathy vs PSGN: Both hematuria after infection. IgA = 1-2 days after URI (synpharyngitic), normal C3, chronic disease. PSGN = 1-3 weeks after strep, ↓ C3, acute self-limited, resolves.",
                "IgA nephropathy vs Alport: Both hematuria. IgA = episodic gross hematuria, mesangial IgA on biopsy. Alport = persistent microscopic hematuria, hearing loss, ocular abnormalities, X-linked, GBM splitting on EM.",
                "Thin basement membrane disease: benign familial hematuria, persistent microscopic hematuria, no proteinuria, no progression. Biopsy: thinned GBM, no IgA deposits. Excellent prognosis.",
                "Gross hematuria episodes: supportive care, hydration, resolves in 2-3 days. No antibiotics (viral URI trigger). Flank pain from renal capsular distension.",
                "20-40% progress to ESRD over 20 years. Median time to ESRD if progressive: 20-25 years. Slow progression allows for long-term management and transplant planning."
            ]
        }
    },
    {
        id: "post-infectious-glomerulonephritis",
        name: "Post-Infectious Glomerulonephritis (PSGN)",
        system: "renal",
        categories: ["glomerular-diseases"],
        symptoms: ["hematuria", "edema", "hypertension", "oliguria"],
        tags: ["nephritic-syndrome", "post-streptococcal", "low-complement", "subepithelial-humps"],
        severity: "moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Post-infectious glomerulonephritis (PSGN) = acute nephritic syndrome occurring 1-3 weeks after infection, most commonly group A beta-hemolytic streptococcus (post-streptococcal GN). Classic presentation: hematuria, hypertension, edema, oliguria 1-3 weeks after pharyngitis or impetigo. Children > adults. Biopsy: subepithelial 'humps' (immune deposits), low C3. Self-limited: >95% complete recovery in children. Excellent prognosis.",
            pathophysiology: "Immune complex-mediated glomerulonephritis. Infection (Strep pyogenes pharyngitis/impetigo) → immune response against streptococcal antigens → antibodies form immune complexes with streptococcal antigens (nephritogenic strains: M protein types 12, 49, others) → immune complexes deposit in subepithelial space of GBM → complement activation (classical pathway, C3) → glomerular inflammation → acute proliferative GN → hematuria, proteinuria, ↓ GFR → nephritic syndrome. Latent period: 1-3 weeks after pharyngitis (10-14 days), 3-6 weeks after skin infection (impetigo). Biopsy: subepithelial electron-dense deposits ('humps'), diffuse proliferative GN with endocapillary proliferation and neutrophil infiltration. Low C3 (consumption by immune complexes), returns to normal in 6-8 weeks.",
            epidemiology: "More common in children (peak age 5-12 years, rare <2 years). Male:female = 2:1. More common in developing countries (crowding, poor hygiene). Rare in developed countries due to antibiotic treatment of strep infections. Pharyngitis-associated PSGN: winter-spring (temperate climates). Impetigo-associated PSGN: summer-fall, tropical/subtropical climates. Declining incidence with improved hygiene and antibiotics.",
            riskFactors: [
                "Recent streptococcal infection: pharyngitis (1-3 weeks prior) or impetigo (3-6 weeks prior)",
                "Age 5-12 years (peak incidence in children)",
                "Male sex (2:1)",
                "Crowded living conditions (dormitories, military barracks)",
                "Poor hygiene, lack of clean water",
                "Developing countries (more common)",
                "Nephritogenic strep strains: group A beta-hemolytic strep, M protein types 12, 49, 1, 4, 25"
            ],
            presentation: [
                "Acute nephritic syndrome (classic tetrad): hematuria + hypertension + edema + oliguria",
                "Gross hematuria (30-50%): cola-colored or smoky urine, 1-3 weeks AFTER strep pharyngitis (vs 1-2 days in IgA nephropathy). Hallmark timing.",
                "Microscopic hematuria (universal): dysmorphic RBCs, RBC casts",
                "Periorbital edema (most common presenting symptom in children): puffy eyes in morning",
                "Hypertension (60-90%): from volume overload (Na/water retention), can be severe (hypertensive urgency/emergency)",
                "Oliguria (30-50%): ↓ urine output from ↓ GFR",
                "Proteinuria: mild-moderate (usually <2 g/day), can be nephrotic range (10-20%)",
                "Malaise, fatigue, flank pain",
                "Symptoms develop 1-3 weeks after pharyngitis, 3-6 weeks after skin infection (impetigo)",
                "History of recent sore throat (strep pharyngitis) or skin infection (impetigo)"
            ],
            physicalExam: [
                "Hypertension (60-90%, can be severe >160/100)",
                "Periorbital edema (puffy eyes, especially morning)",
                "Peripheral edema: lower extremity, sacral",
                "Pulmonary crackles (if volume overload, pulmonary edema)",
                "Jugular venous distension (JVD, if volume overload)",
                "Normal exam otherwise (no rash, no pharyngitis at time of presentation - infection occurred weeks prior)"
            ],
            diagnosticCriteria: "Clinical diagnosis in most cases (children with classic presentation): nephritic syndrome (hematuria, HTN, edema, oliguria) + recent strep infection (1-3 weeks pharyngitis, 3-6 weeks impetigo) + low C3 + elevated ASO/anti-DNase B → diagnosis without biopsy. Biopsy indications: atypical features (adults, no strep infection, prolonged low C3 >8 weeks, progressive renal failure, nephrotic-range proteinuria). Biopsy findings: light microscopy = diffuse proliferative GN with endocapillary hypercellularity and neutrophil infiltration. Immunofluorescence = granular C3 and IgG deposits ('starry sky' pattern). Electron microscopy = subepithelial electron-dense deposits ('humps').",
            labs: [
                "Urinalysis: hematuria (gross or microscopic, dysmorphic RBCs), RBC casts (glomerular origin, pathognomonic for GN), mild-moderate proteinuria (usually <2 g/day), WBCs (sterile pyuria)",
                "BMP: ↑ Cr (mild-moderate, from ↓ GFR), ↑ BUN, hyperkalemia (if oliguria), metabolic acidosis (if severe)",
                "Complement C3: LOW (↓ C3 in 90%, consumption by immune complexes). Hallmark of PSGN. Returns to normal in 6-8 weeks. Persistent low C3 >8 weeks suggests other diagnosis (MPGN, lupus).",
                "Complement C4: normal (vs low in lupus, cryoglobulinemia)",
                "ASO titer (antistreptolysin O): elevated >200 Todd units in 80% of pharyngitis-associated PSGN (peaks 3-5 weeks after infection). May be normal if impetigo (skin infection doesn't induce strong ASO response).",
                "Anti-DNase B: elevated in 90% (more sensitive than ASO for skin infections/impetigo). Check if ASO negative.",
                "Throat culture or rapid strep test: usually negative by time of presentation (infection occurred 1-3 weeks prior)",
                "ANA, anti-dsDNA: negative (rule out lupus nephritis)",
                "Streptozyme test: detects multiple strep antibodies (ASO, anti-DNase B, anti-hyaluronidase), useful if individual titers equivocal"
            ],
            imaging: [
                "Renal ultrasound: normal to slightly enlarged kidneys (acute inflammation), increased echogenicity (edema)",
                "CXR: if pulmonary edema suspected (pulmonary congestion, Kerley B lines, pleural effusions)",
                "Echocardiography: if heart failure suspected (volume overload → LV dysfunction)"
            ],
            differentialDiagnosis: [
                "IgA nephropathy: episodic gross hematuria 1-2 days after URI ('synpharyngitic', vs 1-3 weeks in PSGN), normal C3 (vs low in PSGN), chronic disease (vs self-limited PSGN). Biopsy: mesangial IgA deposits.",
                "Lupus nephritis: ANA+, anti-dsDNA+, ↓ C3 AND C4 (vs normal C4 in PSGN), systemic lupus features (rash, arthritis, serositis). Biopsy: 'full house' IF (IgG, IgM, IgA, C3, C1q).",
                "Membranoproliferative GN (MPGN): persistent low C3 >8 weeks (vs transient in PSGN), chronic progressive disease, nephrotic-range proteinuria. Biopsy: 'tram-track' GBM, mesangial interposition.",
                "ANCA vasculitis (granulomatosis with polyangiitis, microscopic polyangiitis): ANCA+ (PR3 or MPO), systemic vasculitis (lungs, sinuses), rapidly progressive GN. Biopsy: crescentic GN, pauci-immune (no Ig deposits).",
                "Alport syndrome: hereditary nephritis, persistent hematuria (not episodic), hearing loss, ocular abnormalities, normal C3. Biopsy: GBM splitting on EM.",
                "Acute interstitial nephritis (AIN): AKI with pyuria, WBC casts (vs RBC casts in GN), eosinophiluria, recent drug exposure, normal C3."
            ],
            management: {
                acute: [
                    "Supportive care (mainstay, self-limited disease):",
                    "- Sodium and fluid restriction: <2 g Na/day, fluid restriction to match urine output + 500 mL/day (reduce edema, hypertension)",
                    "- Diuretics: furosemide 20-40 mg PO daily (reduce edema, volume overload, hypertension). Higher doses if oliguria.",
                    "- Antihypertensives: if BP persistently elevated despite diuretics. Calcium channel blockers (amlodipine 5-10 mg daily) or ACE inhibitors (lisinopril 5-10 mg daily). Goal BP <130/80 in children, <140/90 in adults.",
                    "- Monitor: daily weights, ins/outs, BP, urinalysis, BMP (Cr should improve in 1-2 weeks)",
                    "Antibiotics (if active strep infection at presentation):",
                    "- Penicillin V 250-500 mg PO QID × 10 days OR amoxicillin 500 mg PO TID × 10 days (if pharyngitis or impetigo still active)",
                    "- Does NOT alter course of GN (immune complexes already formed), but prevents spread to contacts",
                    "- Usually not needed (infection occurred weeks prior, already resolved)",
                    "Dialysis (if severe complications, rare <5%):",
                    "- Indications: severe volume overload (pulmonary edema refractory to diuretics), hyperkalemia (K+ >6.5, refractory), uremia (rare), severe hypertension (refractory)",
                    "Avoid:",
                    "- Immunosuppression NOT indicated (self-limited disease, excellent prognosis in children)",
                    "- Corticosteroids NOT effective (already immune-mediated, past infection)",
                    "Monitor recovery:",
                    "- Hematuria resolves in 6-12 months (may persist as microscopic hematuria for 1-2 years)",
                    "- C3 normalizes in 6-8 weeks (if persistent low C3 >8 weeks → consider MPGN, lupus)",
                    "- Cr normalizes in 1-2 weeks",
                    "- Proteinuria resolves in 6-12 months"
                ],
                chronic: [
                    "Follow-up monitoring:",
                    "- Urinalysis, Cr, C3 at 2 weeks, 6 weeks, 3 months, 6 months, 1 year",
                    "- Expect complete resolution in children (>95% by 1 year)",
                    "- If persistent abnormalities >1 year (proteinuria, ↑ Cr, low C3) → nephrology referral, consider biopsy (may be MPGN or other chronic GN)",
                    "Prevention (close contacts):",
                    "- Screen household/close contacts for strep infection (throat culture)",
                    "- Prophylactic penicillin for contacts if high risk (crowded living, outbreak)",
                    "Patient education:",
                    "- Excellent prognosis in children (>95% complete recovery)",
                    "- Adults: higher risk of CKD (10-20% develop persistent proteinuria, hypertension)",
                    "- Annual urinalysis, BP check for 5 years (monitor for late complications)"
                ]
            },
            complications: [
                "Hypertensive emergency (5-10%): severe hypertension (>180/120) with end-organ damage (hypertensive encephalopathy, seizures, headache, vision changes). Treat urgently with IV antihypertensives (labetalol, nicardipine).",
                "Acute pulmonary edema (5-10%): volume overload → CHF, dyspnea, pulmonary crackles. Treat with IV furosemide, dialysis if refractory.",
                "Acute kidney injury (5-10%): severe ↑ Cr, oliguria/anuria. Usually reversible with supportive care. Dialysis if severe.",
                "Hyperkalemia (5-10%): from oliguria, ↓ GFR. Life-threatening if K+ >6.5. Treat with calcium gluconate, insulin/dextrose, kayexalate, dialysis.",
                "Congestive heart failure (rare, 5%): volume overload, LV dysfunction from hypertension. Treat with diuretics, afterload reduction.",
                "Seizures (rare, <5%): from hypertensive encephalopathy or electrolyte abnormalities (hyponatremia from volume overload). Treat underlying cause.",
                "Chronic kidney disease (rare in children <5%, more common in adults 10-20%): persistent proteinuria, hypertension, ↓ GFR. Risk factors: adults, prolonged oliguria, crescents on biopsy, nephrotic-range proteinuria.",
                "ESRD (very rare <1%): progression to dialysis, almost never in children"
            ],
            prognosis: "Excellent in children: >95% complete recovery (hematuria, proteinuria, hypertension, Cr all normalize). Recovery timeline: Cr normalizes in 1-2 weeks, C3 normalizes in 6-8 weeks, gross hematuria resolves in days-weeks, microscopic hematuria may persist 6-12 months (up to 2 years), proteinuria resolves in 6-12 months, hypertension resolves in weeks-months. Predictors of poor prognosis (rare in children, more common in adults): age >40 years, prolonged oliguria (>2 weeks), severe proteinuria (nephrotic-range >3.5 g/day), crescents on biopsy (>50%), delayed recovery (persistent ↑ Cr >1 month, low C3 >8 weeks). Adults: 10-20% develop persistent proteinuria, hypertension, or CKD. Recurrence rare (different strep infection can cause PSGN again, but uncommon with antibiotics).",
            clinicalPearls: [
                "PSGN = acute nephritic syndrome 1-3 weeks AFTER strep pharyngitis (or 3-6 weeks after impetigo). Timing is key: IgA nephropathy = 1-2 days after URI (synpharyngitic), PSGN = 1-3 weeks after (latent period).",
                "Classic presentation: child with cola-colored urine, puffy eyes (periorbital edema), hypertension, oliguria, 1-3 weeks after sore throat.",
                "Nephritic syndrome tetrad: hematuria + hypertension + edema + oliguria (vs nephrotic = proteinuria + hypoalbuminemia + edema + hyperlipidemia).",
                "Low C3 = hallmark of PSGN (↓ C3 in 90%). Normal C4 (vs low C3 AND C4 in lupus). C3 returns to normal in 6-8 weeks. Persistent low C3 >8 weeks → consider MPGN, lupus.",
                "ASO titer: elevated in 80% if pharyngitis-associated. May be normal if impetigo (skin infection doesn't induce strong ASO). Check anti-DNase B (more sensitive for skin infections, elevated in 90%).",
                "Biopsy: subepithelial 'humps' on EM (electron-dense deposits), diffuse proliferative GN with endocapillary hypercellularity, granular C3/IgG on IF ('starry sky').",
                "Biopsy NOT needed if classic presentation in child: nephritic syndrome + recent strep + low C3 + elevated ASO/anti-DNase B. Biopsy if atypical (adults, no strep, prolonged low C3 >8 weeks).",
                "Self-limited: supportive care only (Na/fluid restriction, diuretics, antihypertensives). Antibiotics if active infection (prevent spread, don't alter GN course). NO immunosuppression.",
                "Prognosis: excellent in children (>95% complete recovery). Adults: worse (10-20% develop CKD, persistent proteinuria, hypertension).",
                "Recovery timeline: Cr normalizes 1-2 weeks, C3 normalizes 6-8 weeks, hematuria resolves 6-12 months (microscopic may persist up to 2 years), proteinuria resolves 6-12 months.",
                "Hypertensive emergency: severe HTN (>180/120) with encephalopathy (headache, seizures, vision changes). Treat urgently with IV labetalol, nicardipine. Lower BP gradually (10-20% in first hour, avoid precipitous drop → stroke).",
                "Pulmonary edema: volume overload from ↓ GFR + Na/water retention. Treat with IV furosemide 40-80 mg (or higher), dialysis if refractory.",
                "PSGN vs IgA nephropathy: Both post-infectious hematuria. PSGN = 1-3 weeks after strep, low C3, self-limited, children. IgA = 1-2 days after URI, normal C3, chronic, young adults.",
                "PSGN vs MPGN: Both low C3. PSGN = transient low C3 (normalizes 6-8 weeks), acute self-limited. MPGN = persistent low C3 (>8 weeks), chronic progressive, nephrotic-range proteinuria.",
                "PSGN vs lupus: Both low C3. PSGN = normal C4, no systemic features, self-limited. Lupus = low C3 AND C4, ANA+, anti-dsDNA+, systemic features (rash, arthritis).",
                "RBC casts on urinalysis = pathognomonic for glomerulonephritis (PSGN, IgA, lupus, ANCA vasculitis). Distinguishes from AIN (WBC casts) or ATN (muddy brown casts).",
                "Nephritogenic strep strains: group A beta-hemolytic strep, M protein types 12, 49 (pharyngitis), types 2, 49, 55, 57, 60 (impetigo). Not all strep infections cause PSGN.",
                "Declining incidence: improved hygiene, antibiotics for strep pharyngitis → less PSGN in developed countries. Still common in developing countries.",
                "Antibiotics for contacts: screen household/close contacts for strep. Prophylactic penicillin if outbreak (dormitories, barracks) to prevent spread."
            ]
        }
    },
    {
        id: "rpgn",
        name: "Rapidly Progressive Glomerulonephritis (RPGN)",
        system: "renal",
        categories: ["glomerular-diseases"],
        symptoms: ["hematuria", "oliguria", "dyspnea", "edema", "fatigue", "hemoptysis", "arthralgias"],
        tags: ["rpgn", "crescentic-gn", "anca-vasculitis", "goodpasture", "nephritic", "rapidly-progressive", "urgent"],
        severity: "severe",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "RPGN = rapidly progressive decline in GFR over days to weeks, with >50% glomerular crescents on kidney biopsy. Presents as nephritic syndrome (hematuria, RBC casts, HTN, edema, oliguria, ↑ Cr). Medical emergency requiring urgent diagnosis and immunosuppression to prevent irreversible kidney damage. Three types: pauci-immune (ANCA+, most common), anti-GBM (Goodpasture syndrome), and immune complex-mediated (lupus, PSGN, IgA).",
            pathophysiology: "Severe glomerular injury → disruption of glomerular capillary walls → leakage of fibrin/inflammatory cells into Bowman's space → crescent formation (proliferating epithelial cells + macrophages). Crescents compress glomerular tuft → ↓ GFR. If untreated, crescents become fibrotic (irreversible scarring). Pauci-immune (50-60%): ANCA-mediated neutrophil activation → necrotizing vasculitis of glomeruli. No immune deposits on immunofluorescence (hence \"pauci-immune\"). Anti-GBM (10-20%): autoantibodies to type IV collagen in glomerular and alveolar basement membranes → linear IgG on immunofluorescence. Goodpasture syndrome = anti-GBM + pulmonary hemorrhage. Immune complex (30-40%): deposition of immune complexes in glomeruli → granular immunofluorescence. Causes: lupus, PSGN, IgA nephropathy, cryoglobulinemia. Timeline: untreated RPGN → 50% loss of GFR in weeks → dialysis-dependent in months.",
            epidemiology: "Peak incidence: 50-75 years (pauci-immune), 20-30 years (anti-GBM), any age (immune complex). Male predominance: 2:1 (ANCA vasculitis), 9:1 (Goodpasture). Prevalence: rare (1-2 cases/million/year for anti-GBM, 10-20 cases/million/year for ANCA vasculitis). Mortality: high if untreated (50% die or require dialysis within 6 months). Prognosis: depends on severity of renal injury at diagnosis (% crescents, Cr level, dialysis requirement), treatment response, type (anti-GBM worst, immune complex best).",
            riskFactors: [
                "Age >50 years (ANCA vasculitis: granulomatosis with polyangiitis, microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis)",
                "Smoking (anti-GBM disease: triggers pulmonary hemorrhage, increases risk 5-fold)",
                "Hydrocarbon exposure (solvents, gasoline: anti-GBM)",
                "Recent infection (upper respiratory infection often precedes ANCA vasculitis)",
                "Autoimmune disease (lupus, rheumatoid arthritis: immune complex RPGN)",
                "Medications (hydralazine, allopurinol, propylthiouracil → ANCA vasculitis; penicillamine → anti-GBM)",
                "Male sex (anti-GBM 9:1, ANCA 2:1)",
                "White/Asian ethnicity (ANCA vasculitis more common)",
                "Genetic: HLA-DR15 (anti-GBM), HLA-DPB1 (ANCA vasculitis)",
                "Family history of vasculitis or autoimmune disease"
            ],
            presentation: [
                "Renal: rapidly worsening AKI over days-weeks (↑ Cr 0.5-1 mg/dL/day). Oliguria (<400 mL/day) or anuria. Gross hematuria (\"tea-colored\", \"cola-colored\") or microscopic hematuria (100% of cases). Foamy urine (proteinuria, but <3.5 g/day → nephritic, not nephrotic). Edema (periorbital, lower extremity) from Na/water retention. Hypertension (volume overload + RAAS activation). Flank pain (rare, suggests renal infarct or hemorrhage).",
                "Pulmonary (anti-GBM or ANCA vasculitis): hemoptysis (blood-streaked sputum → massive hemorrhage). Dyspnea, hypoxemia (diffuse alveolar hemorrhage). Cough, chest pain. Diffuse alveolar infiltrates on CXR (\"pulmonary-renal syndrome\" = RPGN + pulmonary hemorrhage → anti-GBM, ANCA vasculitis, lupus).",
                "Systemic (ANCA vasculitis): fever, fatigue, weight loss (constitutional symptoms). Arthralgias/myalgias (inflammatory). Rash (palpable purpura from leukocytoclastic vasculitis). Sinusitis, epistaxis, saddle-nose deformity (granulomatosis with polyangiitis). Mononeuritis multiplex (foot drop, wrist drop). Abdominal pain (mesenteric vasculitis). Scleritis, uveitis.",
                "Lupus nephritis: malar rash, photosensitivity, oral ulcers, arthritis, serositis (pleuritis, pericarditis). Neuropsychiatric symptoms (seizures, psychosis).",
                "Timeline: symptoms develop over days-weeks (vs months-years in chronic GN). Often preceded by flu-like illness (URI, fever, malaise)."
            ],
            physicalExam: [
                "Vital signs: hypertension (140-180/90-110, from volume overload), tachypnea (pulmonary hemorrhage or pulmonary edema), tachycardia",
                "General: ill-appearing, pallor (anemia from GN or pulmonary hemorrhage)",
                "HEENT: saddle-nose deformity (granulomatosis with polyangiitis), nasal ulcers/crusting, epistaxis. Conjunctival pallor. Scleritis (red, painful eye). Malar rash (lupus).",
                "Lungs: crackles (pulmonary edema or hemorrhage). Decreased breath sounds (pleural effusion).",
                "Cardiac: S3 gallop (volume overload), elevated JVP. Pericardial friction rub (lupus, uremic pericarditis).",
                "Abdomen: non-tender, no organomegaly. Ascites (severe volume overload, rare).",
                "Extremities: pitting edema (periorbital, pretibial, sacral). Palpable purpura (vasculitis). Livedo reticularis (vasculitis).",
                "Neuro: mononeuritis multiplex (foot drop from peroneal nerve, wrist drop from radial nerve). Altered mental status (uremic encephalopathy, CNS vasculitis, lupus cerebritis).",
                "Skin: palpable purpura (leukocytoclastic vasculitis, non-blanching, lower extremities), ulcers (vasculitis), splinter hemorrhages (vasculitis)"
            ],
            diagnosticCriteria: "Histologic diagnosis (kidney biopsy): >50% glomeruli with crescents (cellular crescents = acute, fibrous crescents = chronic/irreversible). Light microscopy: necrotizing GN (segmental necrosis, crescent formation). Immunofluorescence: pauci-immune (no/minimal immune deposits, \"ANCA-negative\" or p-ANCA/c-ANCA+), anti-GBM (linear IgG along GBM), immune complex (granular IgG/C3 deposits). Electron microscopy: no deposits (pauci-immune), electron-dense deposits along GBM (anti-GBM), subepithelial/subendothelial/mesangial deposits (immune complex). Clinical criteria: rapid ↑ Cr (>0.5 mg/dL/week), hematuria with RBC casts (nephritic syndrome), +/- pulmonary hemorrhage (pulmonary-renal syndrome). Biopsy required for definitive diagnosis and treatment planning.",
            labs: [
                "Urinalysis: gross or microscopic hematuria (100%), RBC casts (pathognomonic for GN), dysmorphic RBCs (glomerular origin). Proteinuria (1-2 g/day, nephritic-range, not nephrotic). WBCs/WBC casts (if concurrent infection or AIN).",
                "BMP: ↑ Cr (baseline → 4-8 mg/dL over weeks), ↑ BUN, hyperkalemia (↓ GFR), metabolic acidosis (↓ HCO3 from ↓ acid excretion). BUN/Cr ratio often >20 (like prerenal, from ↑ protein catabolism).",
                "CBC: anemia (normocytic from chronic disease + GN + dilution, or microcytic if pulmonary hemorrhage), leukocytosis (inflammatory).",
                "Serologies (to determine RPGN type):",
                "  - ANCA: 80-90% positive in pauci-immune RPGN. c-ANCA (PR3) = granulomatosis with polyangiitis. p-ANCA (MPO) = microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis. ANCA-negative vasculitis: 10-20% (still treat as ANCA if biopsy shows pauci-immune).",
                "  - Anti-GBM antibody: positive in anti-GBM disease (linear IgG on IF + circulating anti-GBM Ab). Titers correlate with disease activity.",
                "  - ANA, anti-dsDNA, C3/C4: if suspect lupus nephritis (immune complex RPGN). Low C3 + low C4 = lupus. Normal complement = ANCA or anti-GBM.",
                "  - Cryoglobulins: if suspect cryoglobulinemic vasculitis (hepatitis C-associated).",
                "  - ASO, anti-DNase B: if suspect post-infectious GN (immune complex).",
                "ESR/CRP: markedly elevated (>50-100 mm/hr, reflects systemic inflammation in vasculitis).",
                "Albumin: normal or mildly low (nephritic, not nephrotic → <3.5 g/day proteinuria → albumin usually >3 g/dL).",
                "LDH: elevated if hemolysis or pulmonary hemorrhage.",
                "Iron studies: low iron, low ferritin (pulmonary hemorrhage sequestration)."
            ],
            imaging: [
                "Renal ultrasound: normal or mildly enlarged kidneys (acute disease), normal cortical thickness (distinguishes from CKD with small, shrunken kidneys). No hydronephrosis (rules out postrenal AKI). Increased echogenicity (acute inflammation). Doppler: patent renal arteries/veins (rules out thrombosis).",
                "Chest X-ray: diffuse bilateral alveolar infiltrates (\"fluffy\" opacities, perihilar, or patchy) if pulmonary hemorrhage or pulmonary edema. Pleural effusions (volume overload). Cavitary lesions (granulomatosis with polyangiitis). Hemosiderin-laden macrophages on BAL (confirms pulmonary hemorrhage).",
                "CT chest (if suspect pulmonary hemorrhage): ground-glass opacities (acute hemorrhage), consolidation, nodules/cavities (granulomatosis with polyangiitis). Helps exclude infection, malignancy.",
                "CT sinuses: mucosal thickening, bone erosion, saddle-nose deformity (granulomatosis with polyangiitis).",
                "Kidney biopsy (REQUIRED): percutaneous (ultrasound-guided) or transjugular (if bleeding risk). Adequate sample: ≥10 glomeruli for light microscopy. Immunofluorescence and electron microscopy mandatory to classify RPGN type (pauci-immune vs anti-GBM vs immune complex)."
            ],
            differentialDiagnosis: [
                "AKI from other causes: ATN (muddy brown casts, FENa >2%, no RBC casts), AIN (WBC casts, eosinophils, rash/fever/eosinophilia), prerenal (FENa <1%, responds to fluids), postrenal (hydronephrosis on ultrasound). RPGN distinguished by RBC casts + rapid progression + nephritic syndrome.",
                "Other glomerulonephritides: PSGN (self-limited, low C3 normalizes in 6-8 weeks, children), IgA nephropathy (chronic, normal C3, synpharyngitic hematuria), membranoproliferative GN (chronic, persistent low C3). RPGN distinguished by rapid progression (days-weeks, not months) + >50% crescents on biopsy.",
                "Hemolytic uremic syndrome (HUS): microangiopathic hemolytic anemia (schistocytes) + thrombocytopenia + AKI. Follows diarrheal illness (E. coli O157:H7). No RBC casts, no crescents on biopsy.",
                "Thrombotic thrombocytopenic purpura (TTP): fever + pentad (microangiopathic hemolytic anemia, thrombocytopenia, AKI, neurologic changes, fever). ADAMTS13 deficiency. No RBC casts.",
                "Atheroembolic disease: elderly with recent catheterization/vascular procedure. Livedo reticularis, purple toes, eosinophilia, hypocomplementemia. Biopsy shows cholesterol clefts (not crescents).",
                "Malignant hypertension: severe HTN (>180/120) + AKI + microangiopathic hemolytic anemia. Retinal hemorrhages/papilledema on fundoscopy. Biopsy shows arteriolar necrosis (not crescents).",
                "Pulmonary-renal syndromes (RPGN + pulmonary hemorrhage): anti-GBM (Goodpasture), ANCA vasculitis (granulomatosis with polyangiitis, microscopic polyangiitis), lupus, cryoglobulinemia. Differentiate by serology (ANCA vs anti-GBM vs ANA)."
            ],
            management: {
                acute: [
                    "URGENT NEPHROLOGY CONSULT + kidney biopsy within 24-48 hours. RPGN is a medical emergency → delay in treatment = irreversible kidney damage.",
                    "Immunosuppression (start ASAP, often before biopsy if high clinical suspicion):",
                    "  - Pulse steroids: methylprednisolone 500-1000 mg IV daily x 3 days, then prednisone 1 mg/kg/day PO (taper over 6-12 months). Reduces inflammation, prevents crescent formation.",
                    "  - Cyclophosphamide 0.5-1 g/m² IV monthly x 6 months (or 2 mg/kg/day PO) for induction. Cytotoxic → kills autoreactive B/T cells. Side effects: bone marrow suppression (neutropenia, infection risk), hemorrhagic cystitis (give mesna + hydration), infertility (discuss egg/sperm banking), bladder cancer (long-term risk).",
                    "  - Rituximab 375 mg/m² IV weekly x 4 weeks (or 1 g IV x 2 doses 2 weeks apart): alternative to cyclophosphamide (preferred if fertility concerns, elderly, or cyclophosphamide contraindicated). Depletes CD20+ B cells → ↓ ANCA or anti-GBM production. Non-inferior to cyclophosphamide for ANCA vasculitis.",
                    "  - Plasmapheresis (plasma exchange): for severe RPGN (dialysis-dependent, pulmonary hemorrhage, anti-GBM disease). Removes circulating ANCA or anti-GBM antibodies. 7-14 sessions over 2-3 weeks. Complications: hypotension, infection (central line), citrate toxicity (hypocalcemia). MANDATORY for anti-GBM disease. Consider for severe ANCA vasculitis (Cr >4-6 mg/dL, pulmonary hemorrhage).",
                    "Maintenance immunosuppression (after induction): azathioprine 2 mg/kg/day PO or mycophenolate mofetil 1000-1500 mg PO BID or rituximab (re-dose q6 months based on CD19 count or ANCA titers). Continue for 18-24 months (longer if relapse). Monitor for infections (PJP prophylaxis with trimethoprim-sulfamethoxazole 1 SS tab PO daily, consider antifungal/antiviral prophylaxis).",
                    "Supportive care for AKI: IV fluids if volume-depleted (but cautious, risk of pulmonary edema). Loop diuretics (furosemide 40-120 mg IV) for volume overload/oliguria. Antihypertensives (amlodipine, lisinopril, labetalol) for BP <140/90. Dietary: low Na (<2 g/day), low K+ (<2 g/day if hyperkalemic), low protein (0.8 g/kg/day to ↓ uremic toxins). Treat hyperkalemia (calcium gluconate, insulin/dextrose, kayexalate, patiromer).",
                    "Dialysis (urgent hemodialysis): indications = volume overload refractory to diuretics, severe hyperkalemia (>6.5 or EKG changes), metabolic acidosis (pH <7.1), uremic symptoms (pericarditis, encephalopathy, bleeding), pulmonary hemorrhage with respiratory failure. Temporary HD catheter (jugular or femoral). May transition to chronic HD if no renal recovery.",
                    "Pulmonary hemorrhage management: high-dose pulse steroids (methylprednisolone 1000 mg IV daily x 3 days). Plasmapheresis (removes anti-GBM or ANCA). Mechanical ventilation (ARDS protocol: low tidal volume 6 mL/kg, high PEEP). Transfuse PRBCs if Hgb <7 g/dL. Avoid platelet transfusion (worsens hemorrhage). Bronchoscopy with BAL (confirms hemorrhage, rules out infection).",
                    "Monitor disease activity: serial Cr, urinalysis (hematuria, RBC casts), ANCA titers (correlate with relapse in ANCA vasculitis), anti-GBM titers (should become undetectable with treatment). ESR/CRP (↓ with treatment). Repeat biopsy if no improvement (assess % crescents, fibrous vs cellular)."
                ],
                chronic: [
                    "Maintenance immunosuppression: azathioprine 2 mg/kg/day PO or mycophenolate mofetil 1000 mg PO BID (continue 18-24 months after remission). Rituximab re-dosing (375 mg/m² IV when CD19 >0.01% or ANCA titers rising). Prednisone taper to 5-10 mg/day (or discontinue if tolerated). Goal: prevent relapse while minimizing steroid toxicity.",
                    "Monitor for relapse: rising Cr, return of hematuria/RBC casts, rising ANCA/anti-GBM titers, constitutional symptoms (fever, fatigue, arthralgias). Relapse common in ANCA vasculitis (30-50% within 5 years), rare in anti-GBM (if anti-GBM Ab remain undetectable). Trigger for relapse: infection, medication non-adherence, immunosuppression taper.",
                    "CKD management (if residual kidney damage): ACE inhibitor (lisinopril 10-40 mg/day) or ARB (losartan 50-100 mg/day) for proteinuria/HTN (target BP <130/80). Avoid if hyperkalemia (common in RPGN). Statins for dyslipidemia (atorvastatin 20-40 mg/day). Treat anemia (epoetin alfa if Hgb <10 g/dL, target 10-11 g/dL). Phosphate binders (sevelamer, calcium acetate) if hyperphosphatemia. Vitamin D (ergocalciferol) if deficient.",
                    "Dialysis (chronic HD or PD): if ESRD (GFR <15, irreversible kidney damage). Arteriovenous fistula creation (preferred access for HD). Continue immunosuppression (prevents systemic vasculitis recurrence in ANCA, but not needed for renal protection in anti-GBM once Ab undetectable).",
                    "Kidney transplant: eligible once disease in remission (anti-GBM Ab undetectable x 6 months, ANCA negative/low + no active vasculitis x 12 months). Recurrence risk: anti-GBM <5% (if Ab undetectable), ANCA vasculitis 10-20%, immune complex GN 20-50% (lupus, IgA). Delay transplant until remission to ↓ recurrence risk.",
                    "Infection prophylaxis: trimethoprim-sulfamethoxazole 1 SS tab PO daily (PJP prophylaxis while on cyclophosphamide, rituximab, or prednisone >20 mg/day). Consider antifungal (fluconazole) if high-dose steroids. Vaccinations: inactivated vaccines OK (influenza, pneumococcal), avoid live vaccines (MMR, varicella) while immunosuppressed. Screen for latent TB (PPD, IGRA) before immunosuppression.",
                    "Bone health: calcium 1200 mg/day + vitamin D 800-1000 IU/day (steroid-induced osteoporosis prevention). Bisphosphonate (alendronate 70 mg weekly) if T-score <-2.5 or chronic steroid use (>3 months prednisone ≥5 mg/day).",
                    "Medication toxicity monitoring: CBC (cyclophosphamide/azathioprine → cytopenias), LFTs (azathioprine/mycophenolate → hepatotoxicity), urinalysis (cyclophosphamide → hemorrhagic cystitis, microscopic hematuria), glucose (steroids → hyperglycemia), lipids (steroids → dyslipidemia). DEXA scan q2 years (osteoporosis). Eye exam (steroids → cataracts, glaucoma).",
                    "Lifestyle: smoking cessation (CRITICAL for anti-GBM, ↓ pulmonary hemorrhage risk). Avoid NSAIDs (worsen kidney function). Low-sodium diet (<2 g/day) for HTN/edema. Exercise (↓ cardiovascular risk, steroid-induced weight gain). Avoid live vaccines."
                ]
            },
            complications: [
                "ESRD (irreversible kidney failure requiring dialysis/transplant): 30-50% of RPGN patients progress to ESRD despite treatment. Risk factors: delayed diagnosis (>2-4 weeks), dialysis-dependent at presentation, >80% crescents on biopsy (most fibrous/sclerotic), anti-GBM disease (worse prognosis than ANCA or immune complex), older age (>60 years). ESRD permanent if fibrous crescents (irreversible scarring).",
                "Death: 10-20% mortality within 1 year (untreated RPGN or severe disease). Causes: pulmonary hemorrhage (asphyxiation, ARDS), infection (immunosuppression-related: PJP, CMV, fungal), cardiovascular (MI, stroke from vasculitis or uremia), malignancy (cyclophosphamide-induced bladder cancer, lymphoma).",
                "Pulmonary hemorrhage: life-threatening if massive (hemoptysis >200 mL/day, respiratory failure). Occurs in 40-60% of anti-GBM (Goodpasture syndrome), 10-30% of ANCA vasculitis, rare in immune complex GN. Management: mechanical ventilation, high-dose steroids, plasmapheresis. Mortality 20-50% if severe.",
                "Relapse (recurrent RPGN): common in ANCA vasculitis (30-50% within 5 years), rare in anti-GBM (<5% if Ab undetectable), variable in immune complex GN (lupus 50%, IgA 20%). Triggered by infection, medication taper, stress. Presents as rising Cr, hematuria, ANCA/anti-GBM titers. Requires re-induction immunosuppression (pulse steroids, cyclophosphamide or rituximab).",
                "Infection (opportunistic infections from immunosuppression): PJP (fever, dyspnea, hypoxemia, ground-glass opacities on CT), CMV (fever, diarrhea, retinitis), invasive fungal (Aspergillus, Candida), bacterial (UTI, pneumonia, sepsis). Prevention: PJP prophylaxis (trimethoprim-sulfamethoxazole), antiviral (valganciclovir if CMV high-risk), vaccinations. Treat promptly (↓ immunosuppression, empiric antibiotics).",
                "Malignancy: cyclophosphamide → bladder cancer (5-10% risk, cumulative dose-dependent, monitor with urinalysis, cystoscopy if hematuria), lymphoma (rare). Rituximab → PML (progressive multifocal leukoencephalopathy, JC virus reactivation, rare but fatal).",
                "Cardiovascular disease: accelerated atherosclerosis from chronic inflammation (vasculitis), steroids (hypertension, dyslipidemia, hyperglycemia), CKD (uremia, hyperphosphatemia → vascular calcification). MI, stroke, CHF. Prevention: statin, aspirin (if no bleeding risk), BP/glucose control.",
                "Cyclophosphamide toxicity: hemorrhagic cystitis (10-20%, bladder fibrosis/bleeding from acrolein metabolite, prevented with mesna + hydration), bone marrow suppression (neutropenia → infection risk, anemia, thrombocytopenia), infertility (dose-dependent, irreversible if cumulative dose >10 g; offer egg/sperm banking), bladder cancer (long-term risk), myelodysplasia/AML (rare).",
                "Steroid toxicity: osteoporosis (vertebral compression fractures), avascular necrosis (femoral head, humeral head), hyperglycemia/diabetes, hypertension, weight gain, Cushingoid features, cataracts, glaucoma, psychosis, adrenal insufficiency (if abrupt discontinuation). Prevention: calcium/vitamin D, bisphosphonate, glucose/BP monitoring, gradual taper.",
                "Alveolar hemorrhage sequelae: pulmonary fibrosis (chronic), hemosiderin deposition in lungs (restrictive lung disease)."
            ],
            prognosis: "Prognosis depends on RPGN type, severity at diagnosis, and treatment timing. Anti-GBM disease: worst prognosis. If dialysis-dependent at diagnosis → 90% remain on dialysis (irreversible). If Cr <5 mg/dL at diagnosis → 80% renal recovery. If treated early (<2 weeks) → 50% renal recovery. Relapses rare (<5%) if anti-GBM Ab undetectable. ANCA vasculitis: intermediate prognosis. 80-90% achieve remission with immunosuppression. 30-50% progress to ESRD. Relapse common (30-50% within 5 years). Mortality 10-15% at 1 year (infection, pulmonary hemorrhage). Immune complex RPGN: best prognosis (if underlying disease controlled). Lupus nephritis: 60-80% remission with treatment, 20-30% progress to ESRD. PSGN: excellent (self-limited, >95% recovery in children). Overall predictors of poor prognosis: dialysis-dependent at diagnosis (50% remain on dialysis permanently), >80% crescents (especially fibrous), delayed treatment (>4 weeks from symptom onset), older age (>60 years), pulmonary hemorrhage. 5-year patient survival: anti-GBM 70%, ANCA vasculitis 75-80%, immune complex 80-90%. 5-year renal survival (dialysis-free): anti-GBM 40-50%, ANCA vasculitis 50-60%, immune complex 60-70%. Key message: RPGN is reversible if caught early (cellular crescents). Irreversible if delayed (fibrous crescents, glomerulosclerosis). URGENT diagnosis + treatment = key to preventing ESRD.",
            clinicalPearls: [
                "RPGN = rapid ↑ Cr over days-weeks + RBC casts (nephritic) + >50% crescents on biopsy. Medical emergency → urgent nephrology consult + kidney biopsy + immunosuppression.",
                "Three types: pauci-immune (ANCA+, no immune deposits, most common), anti-GBM (linear IgG, Goodpasture syndrome), immune complex (granular deposits, lupus/PSGN/IgA).",
                "Pulmonary-renal syndrome (RPGN + pulmonary hemorrhage) = anti-GBM, ANCA vasculitis, lupus. Differentiate by serology: anti-GBM Ab (Goodpasture), c-ANCA/p-ANCA (vasculitis), ANA/anti-dsDNA (lupus).",
                "Anti-GBM disease: worst prognosis. Dialysis-dependent at diagnosis → 90% remain on dialysis. Linear IgG on IF. Plasmapheresis MANDATORY (removes anti-GBM Ab). Smoking triggers pulmonary hemorrhage.",
                "ANCA vasculitis: c-ANCA (PR3) = granulomatosis with polyangiitis (sinusitis, saddle-nose, cavitary lung lesions). p-ANCA (MPO) = microscopic polyangiitis (no upper airway/granulomas). Treatment: pulse steroids + cyclophosphamide (or rituximab). Relapse common (30-50%).",
                "Treatment: induction = pulse methylprednisolone 1000 mg IV x 3 days + cyclophosphamide 0.5-1 g/m² IV monthly x 6 months (or rituximab 375 mg/m² weekly x 4). Maintenance = azathioprine or mycophenolate x 18-24 months. Plasmapheresis if dialysis-dependent, pulmonary hemorrhage, or anti-GBM.",
                "Cyclophosphamide toxicity: hemorrhagic cystitis (prevent with mesna + hydration), bone marrow suppression (neutropenia), infertility (offer egg/sperm banking), bladder cancer (long-term). Monitor CBC, urinalysis.",
                "PJP prophylaxis (trimethoprim-sulfamethoxazole 1 SS tab daily) while on cyclophosphamide, rituximab, or prednisone >20 mg/day. Infection = leading cause of death in RPGN (immunosuppression).",
                "Dialysis-dependent at diagnosis = poor prognostic sign (50% remain on dialysis permanently). Cellular crescents = reversible (if treated early). Fibrous crescents = irreversible (scarring). >80% crescents → high ESRD risk.",
                "Kidney transplant: eligible once remission (anti-GBM Ab undetectable x 6 months, ANCA negative x 12 months). Recurrence risk: anti-GBM <5%, ANCA 10-20%, lupus/IgA 20-50%.",
                "Biopsy findings: Light microscopy = crescents (proliferating epithelial cells in Bowman's space), necrotizing GN. Immunofluorescence = pauci-immune (no deposits), linear IgG (anti-GBM), granular IgG/C3 (immune complex). IF distinguishes RPGN types.",
                "Urinalysis: RBC casts = pathognomonic for glomerulonephritis (RPGN, PSGN, IgA, lupus). Distinguishes from ATN (muddy brown casts) or AIN (WBC casts).",
                "RPGN vs PSGN: Both nephritic with RBC casts. RPGN = rapid progression (days-weeks), >50% crescents, requires immunosuppression. PSGN = self-limited (resolves 6-12 months), <50% crescents, supportive care only.",
                "RPGN vs IgA nephropathy: Both nephritic. RPGN = rapid progression, >50% crescents, urgent treatment. IgA = chronic/indolent (months-years), <50% crescents, ACE inhibitor + supportive care.",
                "Complement levels: Low C3 + normal C4 = PSGN, MPGN, C3 glomerulopathy. Low C3 + low C4 = lupus, cryoglobulinemia, endocarditis. Normal C3 + C4 = ANCA vasculitis, anti-GBM, IgA nephropathy. Complement normal in most RPGN (except immune complex).",
                "Timeline of treatment response: Cr stabilizes/improves 2-4 weeks (if responsive). Anti-GBM Ab titers drop 4-8 weeks (goal undetectable). ANCA titers drop 3-6 months (don't correlate perfectly with disease activity, use clinical + Cr + urinalysis). Hematuria resolves 1-3 months.",
                "ANCA-negative vasculitis: 10-20% of pauci-immune RPGN are ANCA-negative (biopsy shows pauci-immune, but serology negative). Still treat as ANCA vasculitis (pulse steroids + cyclophosphamide). Prognosis similar to ANCA-positive.",
                "Granulomatosis with polyangiitis (GPA, formerly Wegener's): c-ANCA+ (PR3). Upper airway (sinusitis, saddle-nose, subglottic stenosis) + lung (nodules, cavities) + kidney (RPGN). Treat with cyclophosphamide or rituximab + steroids.",
                "Microscopic polyangiitis (MPA): p-ANCA+ (MPO). No upper airway involvement, no granulomas. Kidney (RPGN) + lung (pulmonary hemorrhage). Treat same as GPA.",
                "Eosinophilic granulomatosis with polyangiitis (EGPA, formerly Churg-Strauss): p-ANCA+ (MPO, 40-60%). Asthma + eosinophilia (>10% or >1500/μL) + vasculitis. Sinusitis, mononeuritis multiplex, skin (purpura). RPGN less common than GPA/MPA. Treat with steroids + cyclophosphamide (if severe vasculitis).",
                "Goodpasture syndrome = anti-GBM disease + pulmonary hemorrhage. Young males, smokers. Hemoptysis + rapidly progressive AKI. Linear IgG on IF. Urgent plasmapheresis + pulse steroids + cyclophosphamide. Mortality 20-50% if severe pulmonary hemorrhage."
            ]
        }
    },
    // TUBULOINTERSTITIAL DISEASES
    {
        id: "rta-type-1",
        name: "Renal Tubular Acidosis Type 1 (Distal RTA)",
        system: "renal",
        categories: ["tubulointerstitial-diseases"],
        symptoms: ["fatigue", "weakness", "polyuria", "polydipsia", "bone-pain", "growth-failure"],
        tags: ["rta", "distal-rta", "type-1-rta", "metabolic-acidosis", "hypokalemia", "nephrolithiasis", "nephrocalcinosis"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Distal RTA (type 1) = defective distal tubule/collecting duct H+ secretion → inability to acidify urine (urine pH >5.5 despite systemic acidosis) → chronic metabolic acidosis with normal anion gap. Classic triad: non-anion gap metabolic acidosis (↓ HCO3, normal Cl), hypokalemia (paradoxical alkaline urine → ↑ K+ wasting), nephrolithiasis/nephrocalcinosis (alkaline urine → Ca phosphate precipitation). Most common RTA in adults (vs type 2 in children). Can be primary (hereditary) or secondary (autoimmune, drugs, obstruction).",
            pathophysiology: "Normal distal tubule: intercalated cells secrete H+ (via H+-ATPase) into lumen → acidifies urine to pH 4.5-5.5 → regenerates HCO3 (returns to blood). Distal RTA defect: α-intercalated cells cannot secrete H+ (or increased H+ permeability back into blood) → urine pH remains >5.5 (alkaline) despite systemic acidosis. Mechanisms: (1) defective H+-ATPase (primary genetic mutations in ATP6V1B1, ATP6V0A4), (2) increased H+ backleak (amphotericin B damages tubule), (3) impaired H+ gradient (urinary obstruction). Consequences: (1) Chronic acidosis: ↓ HCO3 reabsorption → normal anion gap metabolic acidosis (hyperchloremic). (2) Hypokalemia: alkaline urine → ↑ K+/H+ exchange in collecting duct → K+ wasting. Also, chronic acidosis → K+ shifts out of cells (to buffer H+), then lost in urine. (3) Hypercalciuria: chronic acidosis → bone buffering (Ca release from bone) + ↓ proximal tubule Ca reabsorption → ↑ urine Ca. Alkaline urine (pH >6) + ↑ Ca → Ca phosphate precipitation → nephrolithiasis (Ca phosphate stones), nephrocalcinosis (renal parenchymal calcification). (4) Bone disease: chronic acidosis + bone buffering → osteomalacia (adults), rickets (children). (5) Growth failure (children): acidosis impairs GH secretion + bone growth.",
            epidemiology: "Prevalence: rare (1-2 per 100,000). Most common RTA in adults (vs type 2 in children, type 4 in diabetics/CKD). Age: bimodal. Primary/hereditary RTA: presents in infancy/childhood (failure to thrive, growth retardation, rickets). Secondary RTA: adults (autoimmune diseases like Sjögren's, lupus; medications like amphotericin B, lithium). Female predominance (autoimmune causes). Geographic: endemic in Southeast Asia (genetic variants). Associated conditions: autoimmune disease (Sjögren's 30%, lupus), hypercalciuria/nephrolithiasis (70%), medullary sponge kidney, sickle cell disease.",
            riskFactors: [
                "Autoimmune diseases: Sjögren's syndrome (most common cause of acquired distal RTA in adults, 30% of Sjögren's patients develop RTA), systemic lupus erythematus (SLE), rheumatoid arthritis, autoimmune hepatitis, primary biliary cholangitis",
                "Medications: amphotericin B (damages tubular epithelium, increases H+ backleak), lithium (impairs H+ secretion), ifosfamide (chemotherapy), NSAIDs (chronic use), topiramate (carbonic anhydrase inhibitor, technically proximal RTA but can affect distal)",
                "Genetic/hereditary: autosomal dominant (milder, later onset, AD mutations in SLC4A1 gene → Cl-/HCO3 exchanger defect) or autosomal recessive (severe, early infancy, AR mutations in ATP6V1B1 or ATP6V0A4 → H+-ATPase defect, often with sensorineural deafness)",
                "Hypercalciuria/nephrocalcinosis: primary hyperparathyroidism, vitamin D intoxication, idiopathic hypercalciuria → Ca deposits damage distal tubule → RTA (vicious cycle: RTA → more nephrocalcinosis)",
                "Obstructive uropathy: chronic urinary obstruction (BPH, neurogenic bladder) → tubular damage",
                "Medullary sponge kidney: congenital disorder → dilated collecting ducts → impaired H+ secretion + nephrocalcinosis",
                "Sickle cell disease/trait: sickling in hypoxic renal medulla → tubular damage → RTA (also causes papillary necrosis, isosthenuria)",
                "Chronic interstitial nephritis: any cause of chronic tubulointerstitial damage (analgesic nephropathy, reflux nephropathy)",
                "Liver disease: autoimmune hepatitis, primary biliary cholangitis (overlap with Sjögren's)",
                "Toxins: toluene (glue sniffing), lead, mercury"
            ],
            presentation: [
                "Acidosis symptoms: fatigue, weakness, anorexia. Chronic acidosis usually well-compensated (pH 7.30-7.35) → minimal symptoms (vs acute acidosis). Bone pain (osteomalacia, pathologic fractures). Muscle weakness (hypokalemia + acidosis).",
                "Hypokalemia symptoms: muscle weakness, cramps, paresthesias, palpitations, constipation. Severe: flaccid paralysis, rhabdomyolysis, arrhythmias (rare). Polyuria/polydipsia (hypokalemia causes nephrogenic DI → impaired urine concentration).",
                "Nephrolithiasis: recurrent kidney stones (Ca phosphate stones). Flank pain, hematuria, nausea/vomiting. Stones often bilateral/recurrent (vs single episode in typical Ca oxalate stones). Nephrocalcinosis: often asymptomatic (found incidentally on imaging), progressive CKD (from Ca deposition in parenchyma).",
                "Growth failure (children): poor weight gain, short stature, failure to thrive (from chronic acidosis impairing GH secretion). Rickets: bowing of legs, rachitic rosary (enlarged costochondral junctions), widened wrists/ankles.",
                "Bone disease (adults): osteomalacia (bone pain, proximal muscle weakness, fractures). Osteoporosis (chronic acidosis → bone resorption).",
                "Autoimmune symptoms (if Sjögren's or lupus): dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia), parotid gland enlargement (Sjögren's). Malar rash, photosensitivity, arthritis (lupus).",
                "Deafness (hereditary AR type): sensorineural hearing loss (ATP6V1B1 or ATP6V0A4 mutations affect inner ear H+ secretion). Presents in infancy with both RTA + deafness.",
                "Symptoms often insidious/chronic (vs acute). May be discovered incidentally on labs (low HCO3, low K+). Diagnosis often delayed (months-years) due to nonspecific symptoms."
            ],
            physicalExam: [
                "Vital signs: usually normal. Blood pressure normal (vs hypertension in type 4 RTA).",
                "General: failure to thrive (children), short stature (children), cachexia (chronic illness)",
                "HEENT: dry eyes (Sjögren's, ask about gritty sensation, foreign body sensation), dry mucous membranes (Sjögren's, lupus), parotid enlargement (Sjögren's)",
                "Musculoskeletal: bone tenderness (osteomalacia), pathologic fractures. Rickets (children): bowing of legs (genu varum), widened wrists/ankles (metaphyseal widening), rachitic rosary (beading along costochondral junctions), frontal bossing, delayed dentition.",
                "Neuro: muscle weakness (proximal > distal, from hypokalemia), hyporeflexia (hypokalemia). Flaccid paralysis if severe hypokalemia (K+ <2.5 mEq/L). Sensorineural deafness (AR hereditary type).",
                "Abdomen: non-tender. Costovertebral angle tenderness (if nephrolithiasis with acute obstruction, rare).",
                "Extremities: no edema (GFR usually normal, unless advanced CKD from chronic nephrocalcinosis). Muscle atrophy (chronic hypokalemia).",
                "Skin: no specific findings (unless underlying lupus → malar rash, photosensitivity)"
            ],
            diagnosticCriteria: "Diagnosis requires ALL of the following: (1) Normal anion gap metabolic acidosis (↓ HCO3 <21 mEq/L, normal anion gap <12, ↑ Cl). (2) Urine pH >5.5 despite systemic acidosis (inability to acidify urine below 5.5, even when HCO3 <15). (3) Positive urine anion gap (UAG = Na + K - Cl, normally negative in non-RTA acidosis, positive in RTA because low NH4+ excretion). (4) Exclude other causes of non-AG acidosis (diarrhea → negative UAG, type 2/4 RTA). Confirmatory test: NH4Cl loading test (oral NH4Cl 0.1 g/kg → induces acidosis → normal kidney acidifies urine to pH <5.3, distal RTA cannot acidify below 5.5). Alternative: furosemide + fludrocortisone test (induces alkaline urine in normal kidneys → distal RTA already has alkaline urine, no change). Additional supportive findings: hypokalemia (K+ <3.5), hypercalciuria (urine Ca/Cr >0.2), nephrocalcinosis on imaging.",
            labs: [
                "BMP: non-anion gap metabolic acidosis. pH 7.30-7.35 (chronic, compensated), HCO3 12-18 mEq/L (low), anion gap = Na - (Cl + HCO3) = <12 (normal, hyperchloremic acidosis). Cl elevated (100-110, to maintain electroneutrality). Hypokalemia: K+ 2.5-3.5 mEq/L (from urinary K+ wasting in alkaline urine). Cr usually normal (unless chronic nephrocalcinosis → CKD). Na normal.",
                "ABG: metabolic acidosis with respiratory compensation. pH 7.30-7.35, PCO2 25-30 mmHg (↓ from hyperventilation), HCO3 12-18 mEq/L. Expected PCO2 = 1.5 × HCO3 + 8 (±2). If PCO2 higher → concurrent respiratory acidosis.",
                "Urinalysis: pH >5.5 (KEY finding, alkaline urine despite acidosis). Normal in type 1 RTA: no protein, no glucose, no blood (unless concurrent nephrolithiasis → hematuria). Ca phosphate crystals (if alkaline urine).",
                "Urine anion gap (UAG): UAG = urine (Na + K - Cl). Positive UAG (>0, typically +10 to +30) in distal RTA (indicates low NH4+ excretion, because kidney cannot secrete H+ to trap NH3 as NH4+). Negative UAG (<0, typically -20 to -40) in GI losses (diarrhea) → normal kidney compensates by ↑ NH4+ excretion (unmeasured anion → ↑ Cl in urine). UAG distinguishes RTA (positive) from diarrhea (negative).",
                "Urine osmolal gap (alternative to UAG): Uosm gap = measured Uosm - calculated Uosm (2×[Na+K] + urea/2.8 + glucose/18). Uosm gap reflects unmeasured solutes (mainly NH4+). Normal/low Uosm gap in RTA (↓ NH4+), high Uosm gap in diarrhea (↑ NH4+).",
                "24-hour urine: hypercalciuria (urine Ca >250 mg/day in women, >300 mg/day in men, or Ca/Cr ratio >0.2). Urine citrate low (hypocitraturia <320 mg/day) → ↓ Ca stone inhibitor → ↑ stone risk. NH4+ excretion low (normal 30-50 mEq/day, RTA <20 mEq/day).",
                "Serum: Phosphate low-normal (from bone buffering, ↑ PTH). Ca normal or mildly low (from bone resorption → normal serum Ca despite bone loss). Albumin normal (unless concurrent nephrotic syndrome from other cause). PTH elevated (secondary hyperparathyroidism from chronic acidosis + bone disease).",
                "Autoimmune serologies (if suspect Sjögren's/lupus): ANA (positive 95% lupus, 70% Sjögren's), anti-Ro/SSA and anti-La/SSB (Sjögren's-specific, 70% positive), rheumatoid factor (60% Sjögren's), anti-dsDNA (lupus-specific). Complement (C3, C4) low in lupus.",
                "Genetic testing (if hereditary suspected): sequencing of SLC4A1 (AD), ATP6V1B1 (AR with deafness), ATP6V0A4 (AR with deafness)."
            ],
            imaging: [
                "Renal ultrasound: nephrocalcinosis (echogenic medullary pyramids from Ca deposition, bilateral, \"bright kidneys\"). Nephrolithiasis (echogenic foci with posterior acoustic shadowing, may be bilateral/multiple). Kidney size usually normal (unless chronic CKD from nephrocalcinosis → small kidneys). No hydronephrosis (unless acute stone obstruction).",
                "CT abdomen/pelvis (non-contrast): more sensitive for nephrocalcinosis (medullary calcifications) and nephrolithiasis (Ca phosphate stones, radiopaque). Helpful if ultrasound equivocal. Avoid IV contrast (risk of contrast nephropathy if CKD).",
                "Plain abdominal X-ray (KUB): may show radiopaque stones (Ca phosphate), but less sensitive than ultrasound/CT. Useful for tracking stone burden over time.",
                "DEXA scan: if chronic RTA → assess for osteomalacia/osteoporosis (T-score <-2.5). Especially important in adults with long-standing untreated RTA.",
                "Skeletal survey (children with rickets): metaphyseal widening/fraying (wrists, knees, ankles), bowing of long bones (femur, tibia), delayed epiphyseal closure, rachitic rosary (costochondral junctions)."
            ],
            differentialDiagnosis: [
                "GI losses (diarrhea): most common cause of non-AG metabolic acidosis. HCO3 loss in stool → acidosis + hypokalemia (similar to RTA). Distinguished by negative urine anion gap (UAG <0, from ↑ NH4+ excretion) vs positive UAG in RTA. Urine pH can acidify <5.5 (normal kidney response). History of diarrhea.",
                "Proximal RTA (type 2): also non-AG acidosis + hypokalemia. Distinguished by urine pH <5.5 (distal tubule can still acidify once HCO3 <15). Fractional excretion of HCO3 >15% (vs <5% in distal RTA). Associated with Fanconi syndrome (glucosuria, phosphaturia, aminoaciduria). More common in children (vs distal RTA in adults).",
                "Hyperkalemic RTA (type 4): non-AG acidosis, but hyperkalemia (K+ >5.5, opposite of distal RTA). Urine pH <5.5 (can acidify urine). Caused by aldosterone deficiency/resistance (↓ K+ secretion, ↓ H+ secretion). Common in diabetics, CKD, ACE inhibitors/ARBs.",
                "Ureteral diversion (ileal conduit, ureterosigmoidostomy): colon reabsorbs urinary Cl (exchanges HCO3) → non-AG acidosis + hypokalemia. History of urologic surgery. Urine pH variable.",
                "Acetazolamide use: carbonic anhydrase inhibitor → proximal RTA-like (bicarbonaturia, non-AG acidosis). Medication history (used for glaucoma, altitude sickness, pseudotumor cerebri).",
                "Early CKD: can cause non-AG acidosis (↓ NH4+ excretion, ↓ H+ secretion). But CKD typically has ↑ Cr (vs normal Cr in isolated RTA), and acidosis is milder (HCO3 18-22).",
                "Toluene toxicity (glue sniffing): causes distal RTA-like syndrome (non-AG acidosis, hypokalemia, urine pH >5.5). History of inhalant abuse. Toluene metabolites (hippuric acid) cause osmolal gap.",
                "Primary hyperparathyroidism: hypercalcemia + hypercalciuria → nephrocalcinosis → secondary distal RTA. Distinguished by ↑ Ca (vs normal Ca in primary RTA), ↑ PTH, low phosphate."
            ],
            management: {
                acute: [
                    "Alkali therapy (correct acidosis): potassium citrate 20-40 mEq PO BID-TID (or sodium citrate/sodium bicarbonate if K+ normal/high). Goal HCO3 >22 mEq/L, pH >7.35. Potassium citrate preferred (treats both acidosis + hypokalemia + ↑ urine citrate → prevents stones). Start 1-2 mEq/kg/day, titrate based on HCO3. Liquid form (Polycitra-K) or tablets (Urocit-K 10 mEq tabs). Side effects: GI upset (nausea, diarrhea), hyperkalemia (monitor K+).",
                    "Sodium bicarbonate 650-1300 mg (8-15 mEq) PO TID-QID: alternative if potassium citrate unavailable or hyperkalemia. Corrects acidosis but does NOT treat hypokalemia (need separate K+ supplementation). Also does NOT increase urine citrate (vs citrate salts). Dose: 1-2 mEq/kg/day divided TID-QID. Side effects: bloating, gas, Na/volume overload (if CHF/CKD).",
                    "Potassium supplementation (if hypokalemia despite alkali): potassium chloride 20-40 mEq PO daily-BID (if using sodium bicarbonate). Potassium citrate covers both needs (preferred). Goal K+ >3.5 mEq/L. Monitor closely (risk of overcorrection → hyperkalemia once acidosis corrected).",
                    "Treat underlying cause: discontinue offending medications (amphotericin B, lithium). Treat autoimmune disease (Sjögren's, lupus) with immunosuppression (hydroxychloroquine, prednisone, azathioprine) → may improve RTA in some cases (but often RTA persists). Relieve urinary obstruction if present.",
                    "Nephrolithiasis management (if acute stone): hydration (IV fluids), analgesia (ketorolac 15-30 mg IV, morphine 2-4 mg IV), antiemetics (ondansetron 4-8 mg IV). Urology consult if large stone (>5 mm), hydronephrosis, infection, solitary kidney. Interventions: ESWL (extracorporeal shock wave lithotripsy), ureteroscopy, percutaneous nephrolithotomy.",
                    "Monitor labs: check BMP, K+ weekly initially (adjust alkali dose to normalize HCO3 and K+). Once stable, check q3-6 months. Goal: HCO3 >22 mEq/L, K+ >3.5 mEq/L, Cr stable.",
                    "Vitamin D supplementation (if rickets/osteomalacia): ergocalciferol (vitamin D2) 50,000 IU weekly x 8 weeks, then monthly (if deficient, 25-OH vitamin D <20 ng/mL). Calcitriol (1,25-OH vitamin D) 0.25-0.5 mcg daily if severe bone disease. Monitor Ca, phosphate (avoid hypercalcemia → worsens nephrocalcinosis).",
                    "Growth hormone (children with growth failure): consider if persistent short stature despite correction of acidosis. Acidosis correction alone often improves growth velocity."
                ],
                chronic: [
                    "Lifelong alkali therapy: potassium citrate 20-60 mEq/day PO divided BID-TID (or sodium bicarbonate 1-3 g/day PO divided TID-QID). Compliance critical (non-compliance → recurrent stones, bone disease, growth failure). Adjust dose based on HCO3 (goal >22 mEq/L). Higher doses needed in children (1-3 mEq/kg/day) vs adults (0.5-1 mEq/kg/day).",
                    "Stone prevention: potassium citrate (↑ urine citrate → inhibits Ca stone formation, ↑ urine pH → dissolves uric acid stones but promotes Ca phosphate precipitation, so balance is key). Target urine citrate >320 mg/day. Hydration (≥2 L fluid/day, urine output >2 L/day). Low-sodium diet (<2 g/day, ↓ urinary Ca). Normal calcium diet (1000-1200 mg/day, paradoxically low-Ca diet ↑ oxalate absorption → ↑ stones). Thiazide diuretics (hydrochlorothiazide 25 mg daily) if persistent hypercalciuria despite citrate → ↓ urine Ca.",
                    "Monitor for nephrocalcinosis progression: annual renal ultrasound or CT (assess for new/worsening calcifications, stones). Serial Cr (nephrocalcinosis can → CKD over years). If progressive CKD (Cr rising, GFR <60), consider nephrology referral.",
                    "Bone health: ensure adequate vitamin D (25-OH vitamin D >30 ng/mL), calcium (1200 mg/day), phosphate (if low). DEXA scan q2 years (monitor osteoporosis). Bisphosphonates (alendronate 70 mg weekly) if osteoporosis (T-score <-2.5), but cautious (bisphosphonates can worsen adynamic bone disease if CKD). Weight-bearing exercise.",
                    "Pediatric monitoring: growth charts (height, weight) q3-6 months. Skeletal survey if rickets (monitor healing). Audiometry (annual) if hereditary AR type (sensorineural deafness progressive). Dental care (acidosis can impair enamel formation).",
                    "Autoimmune disease management (if Sjögren's/lupus): hydroxychloroquine 200-400 mg daily (Sjögren's, lupus), artificial tears (dry eyes), saliva substitutes (dry mouth). Prednisone 5-20 mg daily or azathioprine 1-2 mg/kg/day if severe systemic symptoms. Rheumatology co-management.",
                    "Genetic counseling (if hereditary): discuss inheritance pattern (AD vs AR), risk to siblings/offspring. Prenatal testing available for ATP6V1B1/ATP6V0A4 mutations.",
                    "Labs monitoring: BMP, K+ q3-6 months (ensure HCO3 >22, K+ >3.5, Cr stable). 24-hour urine q6-12 months (Ca, citrate, pH). Vitamin D, PTH, phosphate annually. Adjust alkali dose as needed (may ↑ with growth in children, or ↓ with age in adults).",
                    "Patient education: importance of medication compliance (prevent stones, bone disease), hydration, dietary sodium restriction. Symptom monitoring (fatigue, weakness, bone pain → check labs). Nephrolithiasis prevention (report flank pain, hematuria early)."
                ]
            },
            complications: [
                "Nephrolithiasis: recurrent Ca phosphate kidney stones (60-80% of distal RTA patients). Flank pain, hematuria, hydronephrosis, urinary tract infections (from obstruction). Stones often bilateral/multiple (\"stone formers\"). Staghorn calculi (large branching stones filling renal pelvis) if untreated. Complications: chronic obstruction → hydronephrosis → CKD, infected stones (struvite) → pyelonephritis/sepsis.",
                "Nephrocalcinosis: Ca phosphate deposition in renal parenchyma (medullary pyramids). Progressive CKD (GFR declines 1-2 mL/min/year if untreated). ESRD possible in severe/untreated cases (20-30 years). Irreversible even with alkali therapy (calcifications remain, but progression slows).",
                "Chronic kidney disease: from nephrocalcinosis, recurrent stones/obstruction, chronic interstitial nephritis. GFR <60 mL/min/1.73m² in 20-30% of patients (long-term follow-up). Accelerated by poor compliance with alkali therapy.",
                "Bone disease: osteomalacia (adults) → bone pain, proximal muscle weakness, pathologic fractures (vertebral compression, hip). Rickets (children) → bowing of legs, growth failure, delayed motor milestones (walking). Osteoporosis (chronic acidosis → bone resorption → ↓ bone density → fragility fractures). Secondary hyperparathyroidism (chronic acidosis + low Ca → ↑ PTH → renal osteodystrophy if concurrent CKD).",
                "Growth failure (children): short stature, failure to thrive (if untreated acidosis impairs GH secretion). Catch-up growth possible if acidosis corrected early (before epiphyseal closure). Permanent short stature if delayed treatment.",
                "Hypokalemia complications: muscle weakness, rhabdomyolysis (if severe K+ <2.0), cardiac arrhythmias (prolonged QT, U waves, ventricular tachycardia, torsades de pointes). Nephrogenic diabetes insipidus (chronic hypokalemia → ↓ ADH responsiveness → polyuria, polydipsia).",
                "Hypercalciuria complications: osteopenia/osteoporosis (↑ bone resorption to maintain serum Ca), recurrent stones, nephrocalcinosis.",
                "Sensorineural hearing loss (AR hereditary type): progressive deafness (ATP6V1B1/ATP6V0A4 mutations affect inner ear). Requires hearing aids, cochlear implants.",
                "Dental problems: enamel hypoplasia (acidosis impairs enamel formation), increased dental caries. More common in children with untreated RTA.",
                "Medication side effects: GI upset (nausea, diarrhea from citrate), hyperkalemia (if overcorrecting with K+ citrate), volume overload (if Na bicarbonate in CHF patients)."
            ],
            prognosis: "Prognosis excellent with early diagnosis and lifelong alkali therapy. HCO3 normalization (>22 mEq/L) prevents/slows complications. Bone disease: reversible if treated early (children with rickets → normal growth if corrected before epiphyseal closure). Osteomalacia in adults improves (bone pain resolves, fractures heal). Nephrolithiasis: recurrence prevented by alkali + citrate + hydration (stone rate ↓ 80-90%). Existing stones may dissolve if uric acid component, but Ca phosphate stones persist. Nephrocalcinosis: existing calcifications irreversible, but progression slows/halts with alkali. CKD risk ↓ if early treatment. Growth: catch-up growth in children if treated before puberty. Normal adult height achievable. Untreated RTA: progressive CKD (50% develop ESRD over 20-30 years), recurrent stones (100%), severe bone disease (pathologic fractures, wheelchair-bound), growth failure (permanent short stature). Hereditary RTA: lifelong treatment required, compliance critical. Deafness (AR type) progressive but treatable with hearing aids. Secondary RTA (Sjögren's, lupus): prognosis depends on underlying disease. RTA often persists even with immunosuppression, requiring lifelong alkali. Mortality: low (near-normal lifespan) if treated. Increased mortality if ESRD, severe arrhythmias (hypokalemia), or complications of underlying autoimmune disease. Key message: Distal RTA is chronic but manageable. Lifelong alkali therapy + monitoring prevents most complications. Non-compliance → recurrent stones, CKD, bone disease.",
            clinicalPearls: [
                "Distal RTA triad: non-anion gap metabolic acidosis + hypokalemia + urine pH >5.5 (cannot acidify urine despite acidosis). Also nephrolithiasis/nephrocalcinosis (Ca phosphate stones from alkaline urine).",
                "Most common RTA in adults (vs type 2 in children, type 4 in diabetics). Classic cause: Sjögren's syndrome (30% of Sjögren's patients develop RTA). Also: amphotericin B, lithium, lupus, hereditary.",
                "Urine anion gap (UAG): positive (>0) in distal RTA (low NH4+ excretion). Negative (<0) in diarrhea (high NH4+ excretion). UAG = urine (Na + K - Cl). Critical to distinguish RTA from GI losses.",
                "Urine pH >5.5 despite acidosis = hallmark of distal RTA. Normal kidney acidifies urine to pH 4.5-5.5 when systemic acidosis. Distal RTA cannot acidify below 5.5 (defective H+ secretion).",
                "Hypokalemia in distal RTA: paradoxical (alkaline urine yet K+ wasting). Mechanism: alkaline urine → ↑ K+/H+ exchange in collecting duct → K+ lost in urine. Also chronic acidosis → K+ shifts from cells.",
                "Ca phosphate stones (vs Ca oxalate in general population). Alkaline urine (pH >6) + hypercalciuria (acidosis → bone Ca release) → Ca phosphate precipitation. Stones often bilateral/recurrent.",
                "Nephrocalcinosis = medullary Ca deposition (\"bright kidneys\" on ultrasound). Distinguishes distal RTA from other causes of acidosis (diarrhea, type 2/4 RTA rarely have nephrocalcinosis).",
                "Treatment: potassium citrate 20-60 mEq/day PO (treats acidosis + hypokalemia + ↑ urine citrate → prevents stones). Alternative: sodium bicarbonate (but doesn't treat K+ or stones). Lifelong therapy required.",
                "Rickets/osteomalacia: chronic acidosis → bone buffering (Ca release) → bone disease. Children: growth failure, bowing of legs. Adults: bone pain, fractures. Reversible with alkali therapy (if early).",
                "Hereditary distal RTA: autosomal recessive (severe, infancy, deafness) from ATP6V1B1/ATP6V0A4 mutations (H+-ATPase defect). Autosomal dominant (milder, later onset) from SLC4A1 mutations (Cl-/HCO3 exchanger defect).",
                "Sjögren's RTA: dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia), parotid enlargement + distal RTA. Check ANA, anti-Ro/SSA, anti-La/SSB. RTA often precedes Sjögren's diagnosis (screen for RTA in Sjögren's patients).",
                "Amphotericin B → distal RTA by damaging tubular epithelium (↑ H+ backleak). Reversible if drug stopped. Liposomal amphotericin less nephrotoxic.",
                "Medullary sponge kidney → distal RTA + nephrocalcinosis (congenital dilated collecting ducts). Diagnosed on IVP (\"bouquet of flowers\" appearance, contrast-filled dilated ducts).",
                "Type 1 vs type 2 RTA: Type 1 (distal) = urine pH >5.5 always, hypokalemia, stones/nephrocalcinosis. Type 2 (proximal) = urine pH <5.5 (once HCO3 <15), Fanconi syndrome (glucosuria, phosphaturia), no stones.",
                "Type 1 vs type 4 RTA: Type 1 = hypokalemia, urine pH >5.5, stones. Type 4 = hyperkalemia (opposite), urine pH <5.5 (can acidify), no stones. Type 4 from aldosterone deficiency (↓ K+ secretion).",
                "Distal RTA + sensorineural deafness = AR hereditary RTA (ATP6V1B1 or ATP6V0A4 mutations). H+-ATPase needed for endolymph pH regulation in inner ear. Progressive hearing loss, needs hearing aids/cochlear implants.",
                "Toluene (glue sniffing) → distal RTA-like syndrome (non-AG acidosis, hypokalemia, urine pH >5.5). Also causes rhabdomyolysis, hypokalemic paralysis, osmolal gap (hippuric acid). Suspect in young patients with unexplained RTA.",
                "Urine citrate: low in distal RTA (<320 mg/day, hypocitraturia). Citrate normally inhibits Ca stone formation. Low citrate + alkaline urine + hypercalciuria = triple threat for Ca phosphate stones.",
                "Compliance: critical for lifelong alkali therapy. Non-compliance → recurrent stones (painful, costly lithotripsy), CKD (dialysis), bone fractures. Emphasize to patients: daily medication = prevention.",
                "Alkali dose: children need higher doses (1-3 mEq/kg/day, acidosis from growth + bone buffering). Adults need 0.5-1 mEq/kg/day. Titrate to HCO3 >22 mEq/L. Monitor K+ (avoid hyperkalemia).",
                "Thiazide diuretics (HCTZ 25 mg daily) → ↓ urinary Ca (paradoxically, despite being diuretic). Useful if persistent hypercalciuria despite citrate. Mechanism: ↑ proximal Ca reabsorption (volume contraction → ↑ Na/Ca reabsorption)."
            ]
        }
    },
    {
        id: "rta-type-2",
        name: "Renal Tubular Acidosis Type 2 (Proximal RTA)",
        system: "renal",
        categories: ["tubulointerstitial-diseases"],
        symptoms: ["fatigue", "weakness", "polyuria", "polydipsia", "bone-pain", "growth-failure"],
        tags: ["rta", "proximal-rta", "type-2-rta", "fanconi-syndrome", "metabolic-acidosis", "hypokalemia", "bicarbonaturia"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Proximal RTA (type 2) = defective proximal tubule HCO3 reabsorption → bicarbonaturia (HCO3 wasting in urine) → chronic non-anion gap metabolic acidosis. KEY feature: urine pH can acidify <5.5 once serum HCO3 drops below threshold (~15 mEq/L, distal tubule overwhelmed). Often part of Fanconi syndrome (generalized proximal tubular dysfunction → bicarbonaturia + glucosuria + phosphaturia + aminoaciduria). Most common RTA in children (vs type 1 in adults). Causes: hereditary (cystinosis, Wilson's disease), acquired (multiple myeloma, tenofovir, ifosfamide, acetazolamide).",
            pathophysiology: "Normal proximal tubule: reabsorbs 80-90% of filtered HCO3 (via Na-H exchanger NHE3 + H+-ATPase → HCO3 returns to blood). Proximal RTA defect: impaired HCO3 reabsorption → HCO3 spills into urine (bicarbonaturia) → serum HCO3 drops → metabolic acidosis. Mechanism: (1) genetic defects in NHE3 (SLC9A3), Na-HCO3 cotransporter (NBC1/SLC4A4), carbonic anhydrase II (CA-II), or H+-ATPase, (2) acquired tubular damage (drugs, toxins, dysproteinemias). Once serum HCO3 drops to ~15 mEq/L, filtered HCO3 load ↓ → proximal tubule reabsorbs all remaining HCO3 → no more bicarbonaturia → distal tubule can acidify urine to pH <5.5 (\"new steady state\"). Fanconi syndrome: generalized proximal tubular dysfunction (not just HCO3). Impaired reabsorption of glucose (glucosuria despite normal blood glucose), phosphate (phosphaturia → rickets/osteomalacia), amino acids (aminoaciduria), uric acid (hypouricemia), low-molecular-weight proteins (β2-microglobulinuria). Consequences: (1) Chronic acidosis (HCO3 12-18 mEq/L, non-anion gap). (2) Hypokalemia: HCO3 delivery to distal tubule → ↑ Na reabsorption → ↑ K+ secretion (same as distal RTA). (3) Bone disease (if Fanconi): phosphate wasting → hypophosphatemia → rickets (children), osteomalacia (adults). Acidosis + bone buffering worsens bone disease. (4) Growth failure (children): acidosis + hypophosphatemia → impaired bone growth. (5) Dehydration/polyuria: osmotic diuresis from glucosuria.",
            epidemiology: "Prevalence: rare (1 per 100,000). Most common RTA in children (vs type 1 in adults, type 4 in diabetics). Age: peak incidence in infancy/childhood (hereditary causes: cystinosis, Wilson's, Dent's disease, Lowe syndrome). Adults: acquired causes (multiple myeloma, light chain deposition, tenofovir, ifosfamide, topiramate, acetazolamide). Male predominance (X-linked Dent's disease, Lowe syndrome). Cystinosis: most common hereditary cause (1 in 100,000-200,000 births, AR). Multiple myeloma: leading cause in adults >60 years (light chains damage proximal tubule).",
            riskFactors: [
                "Genetic/hereditary causes: Cystinosis (AR, CTNS gene, lysosomal cystine accumulation → proximal tubular damage, Fanconi syndrome, presents infancy, blonde hair/photophobia from corneal cystine crystals, ESRD by age 10 if untreated). Wilson's disease (AR, ATP7B gene, copper accumulation → hepatic + proximal tubular toxicity, Fanconi syndrome, KF rings, liver disease). Dent's disease (X-linked, CLCN5 or OCRL1 genes, Fanconi syndrome + hypercalciuria + nephrolithiasis + CKD, males only). Lowe syndrome (X-linked, OCRL1 gene, Fanconi syndrome + cataracts + intellectual disability, males only). Carbonic anhydrase II deficiency (AR, CA2 gene, osteopetrosis + RTA + cerebral calcifications). Hereditary fructose intolerance (AR, ALDOB gene, fructose-1-phosphate accumulation → proximal tubular toxicity, Fanconi syndrome if fructose ingestion).",
                "Multiple myeloma/light chain deposition: monoclonal light chains (especially κ) directly toxic to proximal tubule → Fanconi syndrome. Suspect in elderly with anemia, bone pain, hypercalcemia, ↑ protein gap. Also: MGUS, amyloidosis, heavy chain disease.",
                "Medications: Tenofovir (antiretroviral for HIV, most common drug cause, dose-dependent nephrotoxicity, Fanconi syndrome + AKI), ifosfamide (chemotherapy, dose-dependent, Fanconi syndrome, often irreversible), cisplatin (chemotherapy, Fanconi + hypomagnesemia), valproic acid (anticonvulsant, Fanconi in children), topiramate (carbonic anhydrase inhibitor, for epilepsy/migraines/weight loss, proximal RTA + metabolic acidosis + kidney stones), aminoglycosides (gentamicin, tobramycin, Fanconi rare), acetazolamide (carbonic anhydrase inhibitor, iatrogenic proximal RTA, used for glaucoma/altitude sickness).",
                "Heavy metal poisoning: Lead (paint, contaminated water, Fanconi syndrome + anemia + abdominal pain + encephalopathy), cadmium (industrial exposure, smoking, Itai-itai disease, Fanconi + osteomalacia), mercury (occupational, dental amalgam, Fanconi rare), uranium (occupational, Fanconi).",
                "Vitamin D deficiency/dependency: prolonged severe deficiency → rickets/osteomalacia + secondary Fanconi (mechanism unclear, possibly from hypophosphatemia).",
                "Paraproteinemias: multiple myeloma, MGUS, amyloidosis (AL amyloid), light chain deposition disease, cryoglobulinemia. Light chains deposit in proximal tubule → toxicity.",
                "Sjögren's syndrome: less common than distal RTA (type 1), but proximal RTA can occur (generalized tubular dysfunction).",
                "Post-kidney transplant: calcineurin inhibitors (tacrolimus, cyclosporine) can cause Fanconi syndrome (rare).",
                "Outdated tetracyclines: degraded tetracycline produces toxic metabolites (anhydrotetracycline) → Fanconi syndrome (historical, less common with modern formulations).",
                "Paroxysmal nocturnal hemoglobinuria (PNH): chronic hemolysis → hemosiderin deposition in proximal tubule → Fanconi (rare)."
            ],
            presentation: [
                "Acidosis symptoms: fatigue, weakness, anorexia (similar to distal RTA). Chronic acidosis usually compensated (pH 7.30-7.35) → minimal acute symptoms.",
                "Hypokalemia symptoms: muscle weakness, cramps, paresthesias, polyuria/polydipsia (nephrogenic DI from hypokalemia). Severe: flaccid paralysis, rhabdomyolysis (rare).",
                "Fanconi syndrome features (if generalized proximal tubular dysfunction):",
                "  - Glucosuria despite normal blood glucose (euglycemic glucosuria): no specific symptoms, found on urinalysis. Can mimic diabetes (polyuria/polydipsia from osmotic diuresis).",
                "  - Phosphaturia → hypophosphatemia → rickets (children): bowing of legs, rachitic rosary, widened wrists/ankles, growth failure, bone pain. Osteomalacia (adults): bone pain, proximal muscle weakness, pathologic fractures.",
                "  - Aminoaciduria: no specific symptoms (neutral amino acids lost, but nutritional status usually maintained).",
                "  - Hypouricemia (↓ serum uric acid <2 mg/dL): usually asymptomatic. Rarely causes renal hypouricemia syndrome (exercise-induced AKI, rare).",
                "  - Low-molecular-weight proteinuria (β2-microglobulin, retinol-binding protein): no symptoms, detected on urine protein electrophoresis.",
                "Growth failure (children): poor weight gain, short stature (from acidosis + hypophosphatemia). More severe than isolated distal RTA.",
                "Polyuria/polydipsia: from osmotic diuresis (glucosuria, bicarbonaturia, phosphaturia) + hypokalemia (nephrogenic DI). Urine output often >3 L/day. Dehydration if inadequate fluid intake.",
                "Bone pain (rickets/osteomalacia): weight-bearing bones (legs, hips, spine). Pathologic fractures (vertebral compression, hip).",
                "Specific syndromic features:",
                "  - Cystinosis: blonde hair, photophobia (corneal cystine crystals → pain in bright light), retinopathy (pigmentary changes), hypothyroidism, hepatosplenomegaly. ESRD by age 10 if untreated.",
                "  - Wilson's disease: KF rings (greenish-brown corneal rings), liver disease (hepatitis, cirrhosis), neuropsychiatric symptoms (tremor, dysarthria, personality changes), hemolytic anemia.",
                "  - Dent's disease: nephrolithiasis (Ca oxalate stones), hematuria, hypercalciuria. Progressive CKD (ESRD by age 30-50). Rickets.",
                "  - Lowe syndrome: congenital cataracts (present at birth), hypotonia, intellectual disability, seizures, Fanconi syndrome. X-linked, males only.",
                "Symptoms often insidious. Diagnosis may be delayed (months-years) due to nonspecific presentation."
            ],
            physicalExam: [
                "Vital signs: usually normal. Blood pressure normal. Tachycardia if dehydrated (polyuria).",
                "General: failure to thrive (children), short stature, cachexia (chronic illness). Dehydration (dry mucous membranes, decreased skin turgor) if severe polyuria.",
                "HEENT: conjunctival pallor (anemia if myeloma, cystinosis). Corneal crystals (cystinosis, slit-lamp exam required, pathognomonic). Kayser-Fleischer rings (Wilson's disease, greenish-brown corneal rings, best seen with slit lamp). Cataracts (Lowe syndrome, congenital).",
                "Musculoskeletal: Rickets (children): bowing of legs (genu varum or valgum), widened wrists/ankles (metaphyseal widening), rachitic rosary (beading along costochondral junctions), frontal bossing, delayed dentition, Harrison's groove (indentation along lower ribs from diaphragm pull). Osteomalacia (adults): bone tenderness, proximal muscle weakness (waddling gait, difficulty rising from chair), pathologic fractures.",
                "Neuro: muscle weakness (proximal > distal, from hypokalemia + osteomalacia), hyporeflexia (hypokalemia). Hypotonia (Lowe syndrome, cystinosis in infants). Tremor, dysarthria (Wilson's disease). Intellectual disability (Lowe syndrome).",
                "Abdomen: hepatosplenomegaly (cystinosis, Wilson's disease, amyloidosis). Non-tender unless hepatitis (Wilson's).",
                "Extremities: no edema (unless advanced CKD). Muscle atrophy (chronic weakness).",
                "Skin: blonde/fair hair (cystinosis, due to tyrosine wasting). Jaundice (Wilson's disease with acute liver failure)."
            ],
            diagnosticCriteria: "Diagnosis of proximal RTA: (1) Normal anion gap metabolic acidosis (↓ HCO3 <21 mEq/L, normal AG <12). (2) Fractional excretion of HCO3 (FEHCO3) >15% when serum HCO3 normalized (via NaHCO3 infusion). Normal FEHCO3 <5%, proximal RTA >15-20% (impaired HCO3 reabsorption). (3) Urine pH <5.5 during steady-state acidosis (once HCO3 ~15 mEq/L, distal tubule can acidify urine). Distinguishes from distal RTA (urine pH >5.5 always). (4) Positive urine anion gap (like distal RTA, due to ↓ NH4+ excretion in acidosis). Fanconi syndrome diagnosis (if proximal RTA + other proximal tubular defects): Glucosuria despite euglycemia (urine glucose positive, blood glucose <100 mg/dL). Phosphaturia with hypophosphatemia (phosphate <2.5 mg/dL, urine phosphate elevated, TmP/GFR <2.5 mg/dL). Aminoaciduria (generalized neutral aminoaciduria on urine amino acid chromatography). Hypouricemia (uric acid <2 mg/dL). Low-molecular-weight proteinuria (β2-microglobulin >300 μg/L, retinol-binding protein elevated). Proximal RTA without other defects = isolated proximal RTA (rare, usually Fanconi syndrome present).",
            labs: [
                "BMP: non-anion gap metabolic acidosis. pH 7.30-7.35, HCO3 12-18 mEq/L (lower than distal RTA, often 12-15), anion gap <12, Cl elevated (100-115, hyperchloremic). Hypokalemia: K+ 2.5-3.5 mEq/L (from distal K+ secretion). Cr usually normal (unless advanced cystinosis, Dent's disease, myeloma kidney). Na normal.",
                "ABG: metabolic acidosis with respiratory compensation. pH 7.30-7.35, PCO2 25-30 mmHg, HCO3 12-18 mEq/L. Expected PCO2 = 1.5 × HCO3 + 8.",
                "Urinalysis: pH <5.5 (KEY finding, distinguishes from distal RTA). Glucosuria (2-4+ glucose on dipstick despite normal blood glucose, if Fanconi). Protein trace-1+ (low-MW proteinuria, not detected by dipstick which detects albumin; need urine protein electrophoresis). No blood (unless stones in Dent's disease). Hyaline casts.",
                "Urine anion gap (UAG): positive (>0, +10 to +30) in chronic acidosis (similar to distal RTA). Negative during bicarbonaturia (when HCO3 supplemented → ↑ HCO3 in urine → ↑ Na in urine → UAG negative/positive depending on HCO3 excretion).",
                "Fractional excretion of HCO3 (FEHCO3): FEHCO3 = (urine HCO3 × plasma Cr) / (plasma HCO3 × urine Cr) × 100. >15-20% in proximal RTA (when HCO3 infused to normalize serum HCO3 to ~24 mEq/L). Test: infuse NaHCO3 IV (to raise serum HCO3 >20 mEq/L) → measure FEHCO3 → proximal RTA cannot reabsorb HCO3 → massive bicarbonaturia. Normal FEHCO3 <5%. Diagnostic test for proximal RTA.",
                "Serum phosphate: low (hypophosphatemia, <2.5 mg/dL) if Fanconi syndrome (phosphaturia). Normal in isolated proximal RTA.",
                "Serum uric acid: low (hypouricemia, <2 mg/dL) if Fanconi syndrome (uric acid wasting). Normal/high in isolated proximal RTA.",
                "Serum glucose: normal (fasting glucose <100 mg/dL). Euglycemic glucosuria (glucose in urine despite normal blood glucose) = hallmark of Fanconi.",
                "24-hour urine: phosphate elevated (if Fanconi, >1 g/day), TmP/GFR <2.5 mg/dL (↓ tubular max for phosphate reabsorption). Glucose elevated (>500 mg/day if Fanconi). Amino acids elevated (neutral aminoaciduria). Calcium variable (normal or ↑ in Dent's disease).",
                "Urine protein electrophoresis: low-molecular-weight proteins (β2-microglobulin >300 μg/L, retinol-binding protein, α1-microglobulin). Distinguished from glomerular proteinuria (albumin) or tubular proteinuria (Tamm-Horsfall protein).",
                "Serum protein electrophoresis (SPEP) + urine protein electrophoresis (UPEP): if suspect multiple myeloma. M-spike on SPEP (monoclonal gammopathy), Bence Jones proteinuria on UPEP (monoclonal light chains κ or λ).",
                "Serum calcium, PTH: Ca normal, PTH elevated (secondary hyperparathyroidism from hypophosphatemia + acidosis + vitamin D deficiency). 25-OH vitamin D often low.",
                "Ceruloplasmin (if suspect Wilson's): low (<20 mg/dL). 24-hour urine copper elevated (>100 μg/day). Slit-lamp exam (KF rings).",
                "Genetic testing: cystinosis (CTNS gene, ↑ WBC cystine >2 nmol half-cystine/mg protein), Wilson's (ATP7B), Dent's (CLCN5, OCRL1), Lowe (OCRL1), CA-II deficiency (CA2)."
            ],
            imaging: [
                "Renal ultrasound: usually normal kidney size (unless advanced cystinosis → shrunken kidneys, or Dent's disease → CKD). Nephrolithiasis (Dent's disease, topiramate). Increased echogenicity (cystinosis, cystine crystal deposition). Nephrocalcinosis (rare in proximal RTA, vs common in distal RTA).",
                "Skeletal X-rays (if rickets/osteomalacia): Rickets (children): metaphyseal widening/fraying (wrists, knees, ankles), cupping (concave metaphysis), bowing of long bones (femur, tibia), delayed epiphyseal closure, rachitic rosary (costochondral beading), Harrison's groove. Osteomalacia (adults): Looser zones/pseudofractures (radiolucent lines perpendicular to cortex, femoral neck, ribs, scapula, pubic rami), osteopenia, pathologic fractures, codfish vertebrae (biconcave vertebral bodies).",
                "DEXA scan: osteopenia/osteoporosis (T-score <-2.5). More severe in Fanconi syndrome (acidosis + hypophosphatemia).",
                "Slit-lamp eye exam: corneal cystine crystals (cystinosis, pathognomonic, refractile crystals in cornea). Kayser-Fleischer rings (Wilson's, greenish-brown rings at corneal limbus). Cataracts (Lowe syndrome).",
                "Bone scan (technetium-99m): if suspect lytic lesions (multiple myeloma). Skull \"punched-out\" lesions, vertebral compression fractures, pathologic fractures.",
                "Liver ultrasound/MRI (Wilson's disease): hepatomegaly, cirrhosis, nodular liver (regenerative nodules).",
                "Brain MRI (Wilson's disease, Lowe syndrome): basal ganglia T2 hyperintensity (Wilson's, copper deposition), cerebral atrophy (Lowe)."
            ],
            differentialDiagnosis: [
                "Distal RTA (type 1): key differences: proximal RTA has urine pH <5.5 (can acidify once HCO3 low), FEHCO3 >15%, Fanconi syndrome features. Distal RTA has urine pH >5.5 (cannot acidify), FEHCO3 <5%, nephrocalcinosis/nephrolithiasis (rare in proximal). Both have non-AG acidosis + hypokalemia.",
                "Type 4 RTA: hyperkalemia (K+ >5.5, opposite of type 2). Non-AG acidosis. Urine pH <5.5 (like type 2). Caused by aldosterone deficiency/resistance. No Fanconi features. Common in diabetics, CKD, elderly on ACE inhibitors.",
                "Diarrhea (GI losses): non-AG acidosis + hypokalemia (similar to RTA). Distinguished by negative urine anion gap (UAG <0, ↑ NH4+ excretion) vs positive UAG in RTA. Urine pH <5.5 (normal kidney response). No glucosuria/phosphaturia. History of diarrhea.",
                "Diabetes mellitus: glucosuria (similar to Fanconi). Distinguished by hyperglycemia (fasting glucose >126 mg/dL) vs euglycemia in Fanconi. No acidosis (unless DKA). No phosphaturia/aminoaciduria.",
                "Primary hyperparathyroidism: hypophosphatemia (↑ PTH → ↑ phosphate wasting). Distinguished by hypercalcemia (Ca >10.5 mg/dL) vs normal Ca in Fanconi. ↑ PTH (primary, >100 pg/mL) vs secondary ↑ PTH in Fanconi (from hypophosphatemia + acidosis). No acidosis, no glucosuria.",
                "Vitamin D deficiency rickets/osteomalacia: hypophosphatemia, rickets/osteomalacia (similar to Fanconi). Distinguished by ↓ 25-OH vitamin D (<20 ng/mL), ↓ Ca (mild), ↑ PTH, ↑ alkaline phosphatase. No acidosis, no glucosuria. Responds to vitamin D supplementation.",
                "X-linked hypophosphatemic rickets (XLH): hypophosphatemia, rickets, phosphaturia. Distinguished by ↓ FGF23-mediated phosphate wasting, normal HCO3 (no acidosis), no glucosuria/aminoaciduria. Bowing of legs out of proportion to biochemical abnormalities.",
                "Acute tubular necrosis (ATN): can cause transient Fanconi-like syndrome (glucosuria, phosphaturia) during recovery phase. Distinguished by ↑ Cr (AKI), muddy brown casts, history of ischemia/nephrotoxin. Resolves as ATN recovers.",
                "Acetazolamide use: iatrogenic proximal RTA (carbonic anhydrase inhibitor → ↓ HCO3 reabsorption). Medication history (used for glaucoma, altitude sickness, pseudotumor cerebri, seizures). Reversible if drug stopped. No other Fanconi features."
            ],
            management: {
                acute: [
                    "High-dose alkali therapy: proximal RTA requires much higher doses of HCO3 than distal RTA (5-15 mEq/kg/day vs 1-2 mEq/kg/day). Sodium bicarbonate 2-4 g (24-48 mEq) PO QID (total 10-20 g/day, 120-240 mEq/day) or potassium citrate 40-80 mEq PO TID-QID (total 120-320 mEq/day). Goal HCO3 >22 mEq/L (difficult to achieve, often plateau at 18-20 mEq/L despite high doses). Side effects: volume overload (massive Na load from bicarbonate), hypernatremia, hypertension. Monitor weight, BP, edema.",
                    "Potassium supplementation: potassium citrate 40-80 mEq PO daily-BID (or potassium chloride if using sodium bicarbonate). Goal K+ >3.5 mEq/L. Higher doses needed than distal RTA (more K+ wasting from ↑ distal HCO3 delivery).",
                    "Thiazide diuretics (paradoxical use to ↓ alkali requirement): hydrochlorothiazide 25-50 mg PO daily. Mechanism: induces volume contraction → ↑ proximal Na/HCO3 reabsorption → ↓ HCO3 wasting → ↓ alkali dose needed (↓ from 10-15 mEq/kg/day to 2-5 mEq/kg/day). Monitor for hypokalemia (exacerbated by thiazide), hyperuricemia (gout).",
                    "Phosphate supplementation (if Fanconi syndrome with hypophosphatemia): Neutra-Phos or K-Phos Neutral 1-2 packets PO TID-QID (250-500 mg elemental phosphorus per packet, total 1-2 g/day). Goal phosphate >2.5 mg/dL. Side effects: diarrhea (limit dose), hyperphosphatemia (if CKD). Monitor Ca×PO4 product (<55 to avoid metastatic calcification).",
                    "Vitamin D supplementation (if rickets/osteomalacia or vitamin D deficiency): Ergocalciferol (vitamin D2) 50,000 IU weekly x 8 weeks (if 25-OH vitamin D <20 ng/mL). Calcitriol (1,25-OH vitamin D, active form) 0.25-0.5 mcg PO daily (if severe rickets/osteomalacia, bypasses 1α-hydroxylation which may be impaired in Fanconi). Monitor Ca, phosphate (avoid hypercalcemia).",
                    "Treat underlying cause:",
                    "  - Cystinosis: cysteamine 50-90 mg/kg/day PO divided q6h (depletes lysosomal cystine, slows progression to ESRD, start ASAP in infancy). Cysteamine eye drops (for corneal crystals, ↓ photophobia). Thyroid hormone replacement (levothyroxine if hypothyroidism). Monitor WBC cystine levels (<1 nmol half-cystine/mg protein target).",
                    "  - Wilson's disease: D-penicillamine 1-2 g/day PO divided BID-QID (chelates copper, ↑ urinary excretion) or trientine 1-2 g/day PO (alternative if penicillamine intolerant). Zinc 150 mg elemental zinc/day PO TID (blocks intestinal copper absorption, maintenance). Low-copper diet. Liver transplant if fulminant hepatic failure.",
                    "  - Multiple myeloma: chemotherapy (bortezomib, lenalidomide, dexamethasone) for myeloma. Stem cell transplant if eligible. Fanconi may improve with myeloma control (but often irreversible tubular damage).",
                    "  - Medications: discontinue offending drugs (tenofovir → switch to TAF [tenofovir alafenamide, less nephrotoxic], ifosfamide, topiramate, valproic acid). Fanconi may reverse if caught early (weeks-months), but often irreversible if prolonged exposure.",
                    "  - Lead poisoning: chelation therapy (EDTA, dimercaprol, succimer). Remove lead source (paint abatement, water filters). Fanconi may reverse with chelation.",
                    "Monitor labs: BMP, K+, phosphate weekly initially (titrate alkali/K+/phosphate doses). Once stable, q3-6 months. Goal: HCO3 >20 mEq/L, K+ >3.5, phosphate >2.5. Urine glucose, urine phosphate q6-12 months (assess Fanconi severity)."
                ],
                chronic: [
                    "Lifelong high-dose alkali therapy: sodium bicarbonate 5-15 mEq/kg/day PO divided QID or potassium citrate 5-15 mEq/kg/day PO divided TID-QID. Children need highest doses (10-15 mEq/kg/day, acidosis worsens during growth spurts). Adults need 5-10 mEq/kg/day. Compliance difficult (large volume of pills/liquid, QID dosing, GI side effects). HCO3 often plateaus at 18-20 mEq/L despite therapy (due to ongoing HCO3 wasting).",
                    "Thiazide diuretics (long-term use to ↓ alkali requirement): HCTZ 25 mg daily (or chlorthalidone 25 mg daily). Allows ↓ alkali dose by 50-70%. Monitor K+ (hypokalemia from thiazide + RTA), uric acid (hyperuricemia/gout).",
                    "Phosphate supplementation (if Fanconi): Neutra-Phos 1-2 packets PO TID (lifelong). Monitor phosphate q3-6 months. Rickets/osteomalacia may take years to heal (bone remodeling slow).",
                    "Vitamin D: ergocalciferol 50,000 IU monthly (maintenance if vitamin D sufficient, >30 ng/mL). Calcitriol 0.25 mcg daily (if active rickets/osteomalacia). Monitor 25-OH vitamin D, Ca, phosphate annually.",
                    "Disease-specific management:",
                    "  - Cystinosis: lifelong cysteamine 50-90 mg/kg/day PO q6h. Doses q6h critical (cystine reaccumulates quickly). Cysteamine eye drops q1-2h while awake. Monitor WBC cystine q3 months (goal <1 nmol/half-cystine/mg protein). Thyroid function q6-12 months (hypothyroidism common). Annual ophthalmology (corneal crystals, retinopathy). Renal transplant when ESRD (often age 10-20 despite cysteamine). Cystinosis does NOT recur in transplant (graft has normal CTNS gene).",
                    "  - Wilson's disease: lifelong chelation (penicillamine or trientine) or zinc. Monitor 24-hour urine copper annually (goal <500 μg/day on chelation). LFTs q3-6 months. Neurologic/psychiatric monitoring (Wilson's can progress despite treatment). Liver transplant if cirrhosis/hepatic failure. Fanconi may persist despite copper control.",
                    "  - Dent's disease: monitor for nephrolithiasis (annual renal ultrasound, urology if stones), CKD (Cr, GFR q6-12 months). Thiazide diuretics (HCTZ 25 mg daily) ↓ hypercalciuria → ↓ stone risk. Citrate supplementation. Progressive CKD common (ESRD age 30-50). Kidney transplant when ESRD (Dent's does NOT recur in transplant, X-linked).",
                    "  - Lowe syndrome: multidisciplinary care (nephrology, ophthalmology, neurology). Cataract surgery (infancy). Developmental support (PT, OT, special education). Seizure control (anticonvulsants). High mortality (50% die by age 30-40 from infections, CKD).",
                    "Bone health: ensure adequate Ca (1200 mg/day), phosphate (if supplemented), vitamin D (>30 ng/mL). DEXA scan q2 years. Weight-bearing exercise. Bisphosphonates (alendronate 70 mg weekly) if osteoporosis (T-score <-2.5), but cautious in CKD (adynamic bone disease risk).",
                    "Growth monitoring (children): growth charts q3-6 months. Growth hormone therapy (somatropin 0.3 mg/kg/week SC divided daily) if persistent growth failure despite correction of acidosis/hypophosphatemia (off-label, limited data).",
                    "CKD management (if progressive kidney disease from cystinosis, Dent's, myeloma): ACE inhibitor (lisinopril 10-40 mg daily) if proteinuria (but cautious if hyperkalemia). Treat CKD complications (anemia → epoetin alfa, CKD-MBD → phosphate binders). Dialysis/transplant if ESRD.",
                    "Labs monitoring: BMP, K+, phosphate q3-6 months. 24-hour urine (glucose, phosphate, amino acids) annually (assess Fanconi severity, improvement if underlying cause treated). Vitamin D, PTH, alkaline phosphatase annually. Disease-specific: WBC cystine (cystinosis), 24-hour urine copper (Wilson's), SPEP/UPEP (myeloma).",
                    "Patient/family education: compliance critical (high-dose alkali difficult but necessary for bone health, growth). Genetic counseling (cystinosis, Wilson's, Dent's, Lowe → AR or X-linked). Sibling screening (genetic testing, urinalysis for Fanconi features)."
                ]
            },
            complications: [
                "Rickets (children): bowing of legs, growth failure, delayed motor milestones (sitting, walking), bone pain, pathologic fractures, dental problems (delayed dentition, enamel hypoplasia). Severe cases: wheelchair-bound, severe short stature. Reversible if treated early (before epiphyseal closure), but deformities may persist.",
                "Osteomalacia (adults): bone pain, proximal muscle weakness (waddling gait, difficulty rising from chair), pathologic fractures (vertebral compression → kyphosis, hip fractures → immobility/death). Looser zones (pseudofractures). Chronic pain, disability. Healing slow (months-years of treatment).",
                "Growth failure (children): permanent short stature if acidosis/hypophosphatemia untreated. Average adult height often <5th percentile. Psychosocial impact (bullying, low self-esteem). Catch-up growth possible if treated early (infancy).",
                "Chronic kidney disease (cystinosis, Dent's disease, myeloma kidney): progressive GFR decline. Cystinosis: ESRD by age 10-20 (even with cysteamine, delays but doesn't prevent). Dent's disease: ESRD age 30-50. Myeloma kidney: often irreversible tubular damage despite myeloma control. Requires dialysis/transplant.",
                "Hypokalemia complications: muscle weakness, rhabdomyolysis (if severe K+ <2.0), cardiac arrhythmias (prolonged QT, U waves, ventricular tachycardia, torsades de pointes). Nephrogenic DI (polyuria/polydipsia).",
                "Dehydration: from polyuria (osmotic diuresis: glucosuria, bicarbonaturia). Risk of volume depletion (hypotension, ↑ Cr), especially in children. Hypernatremia (if inadequate free water intake).",
                "Cystinosis-specific complications: ESRD (by age 10-20), hypothyroidism (70%, from cystine accumulation in thyroid), diabetes mellitus (30%, pancreatic β-cell damage), hypogonadism (delayed puberty, infertility), retinopathy (pigmentary changes, ↓ vision), photophobia (corneal crystals, painful in bright light), myopathy (muscle wasting, swallowing difficulty in adulthood), CNS involvement (cerebral atrophy, cognitive decline in 30s-40s if untreated). Even with cysteamine, complications accumulate over decades.",
                "Wilson's disease complications: cirrhosis (30%, from chronic liver inflammation), fulminant hepatic failure (10%, acute liver necrosis, high mortality), neuropsychiatric (tremor, dysarthria, dystonia, parkinsonism, psychiatric symptoms, personality changes, depression, psychosis), hemolytic anemia (copper-induced RBC lysis), Fanconi syndrome (irreversible tubular damage). Death by age 30-40 if untreated.",
                "Dent's disease complications: nephrolithiasis (80%, recurrent Ca oxalate stones, staghorn calculi), nephrocalcinosis (medullary Ca deposits), CKD/ESRD (progressive, age 30-50), rickets/osteomalacia, short stature. Progressive despite treatment.",
                "Lowe syndrome complications: cataracts (100%, congenital, bilateral, require surgery), glaucoma (50%, secondary to cataract surgery), intellectual disability (moderate-severe), seizures (50%), behavioral problems (aggression, self-injury), hypotonia (muscle weakness, delayed motor milestones), Fanconi syndrome/CKD, short stature, scoliosis, dental problems. High mortality (50% die by age 30-40 from infections [pneumonia], CKD).",
                "Multiple myeloma complications: cast nephropathy (myeloma kidney, AKI from light chain casts), hypercalcemia (bone resorption), bone disease (lytic lesions, pathologic fractures), anemia (marrow infiltration), infections (hypogammaglobulinemia), spinal cord compression (vertebral collapse). Fanconi from light chains often irreversible.",
                "Medication side effects: Volume overload (from high-dose Na bicarbonate → edema, hypertension, CHF if predisposed). Hypernatremia (Na >145 mEq/L). Hypercalcemia (from vitamin D supplementation → nephrocalcinosis, worsens CKD). Diarrhea (from phosphate supplementation, limits dose). Cysteamine toxicity (nausea, vomiting, bad breath/body odor [sulfur], GI ulcers, rash, compliance poor due to smell/GI upset)."
            ],
            prognosis: "Prognosis depends on underlying cause, severity of Fanconi syndrome, and compliance. Isolated proximal RTA (no Fanconi): good prognosis with alkali therapy. Rickets/osteomalacia heal (slowly, over months-years). Growth normal if treated early. Lifespan normal. Cystinosis: poor prognosis without cysteamine. Untreated: ESRD by age 10, death by age 20 (uremia). With cysteamine (started in infancy): ESRD delayed to age 20-30, but inevitable (70% on dialysis by age 20, 90% by age 30). Lifespan extended to 40-50 years (vs 20 without treatment). Multiorgan complications accumulate (hypothyroidism, diabetes, myopathy, CNS involvement). Quality of life impaired (photophobia, muscle weakness, cognitive decline in 30s-40s). Compliance critical (q6h dosing, bad taste/smell → poor adherence → faster progression). Wilson's disease: excellent prognosis if diagnosed early and treated with chelation. Liver disease stabilizes/improves, neurologic symptoms may improve (50%), Fanconi may persist (tubular damage often irreversible). Untreated: death by age 30-40 (liver failure, neurologic decline). Delay in diagnosis → irreversible neurologic/hepatic damage. Dent's disease: progressive CKD despite treatment. ESRD by age 30-50 in 50-80%. Recurrent nephrolithiasis (painful, costly interventions). Short stature common. Lifespan near-normal with transplant. Lowe syndrome: poor prognosis. Severe intellectual disability, seizures, blindness (cataracts/glaucoma), CKD. High mortality (50% die by age 30-40 from infections, CKD). No cure, supportive care only. Multiple myeloma: prognosis depends on myeloma stage, response to chemotherapy. Fanconi often irreversible (tubular damage). Median survival 5-10 years (improved with novel agents: bortezomib, lenalidomide). CKD common (50%), dialysis in 20-30%. Drug-induced Fanconi (tenofovir, ifosfamide): variable prognosis. If drug stopped early → Fanconi may reverse (weeks-months, but often incomplete). If prolonged exposure → irreversible tubular damage, CKD. Tenofovir: switch to TAF (less nephrotoxic) → stabilization. Key message: Proximal RTA prognosis depends on etiology. Isolated RTA: excellent with alkali. Hereditary syndromes (cystinosis, Lowe, Dent's): poor prognosis (progressive CKD, multiorgan complications). Acquired causes (drugs, myeloma): variable (reversible if caught early, irreversible if delayed). Compliance with high-dose alkali critical for bone health/growth.",
            clinicalPearls: [
                "Proximal RTA triad: non-anion gap metabolic acidosis + Fanconi syndrome (glucosuria, phosphaturia, aminoaciduria, hypouricemia) + urine pH <5.5 (can acidify once HCO3 low). Distinguishes from distal RTA (urine pH >5.5 always).",
                "Urine pH <5.5 in steady-state acidosis = hallmark of proximal RTA. Mechanism: once serum HCO3 drops to ~15 mEq/L, filtered HCO3 load ↓ → proximal tubule reabsorbs all HCO3 → distal tubule can acidify urine. Distal RTA cannot acidify <5.5 ever.",
                "FEHCO3 >15% = diagnostic test for proximal RTA. Infuse NaHCO3 to raise serum HCO3 >20 mEq/L → measure urine HCO3 → proximal RTA cannot reabsorb HCO3 → massive bicarbonaturia (FEHCO3 >15-20%). Normal <5%.",
                "Euglycemic glucosuria = glucose in urine despite normal blood glucose. Hallmark of Fanconi syndrome. Mimics diabetes (polyuria/polydipsia), but fasting glucose normal (<100 mg/dL). Proximal tubule cannot reabsorb glucose.",
                "Most common RTA in children (vs type 1 in adults, type 4 in diabetics). Classic causes: cystinosis (most common hereditary, blonde hair/photophobia/ESRD), tenofovir (HIV medication, most common acquired in adults), multiple myeloma (elderly, light chain deposition).",
                "Proximal RTA requires 5-15 mEq/kg/day alkali (vs 1-2 mEq/kg/day in distal RTA). High doses needed because ongoing HCO3 wasting. HCO3 often plateaus at 18-20 mEq/L despite therapy (incomplete correction).",
                "Thiazide diuretics ↓ alkali requirement by 50-70% (paradoxical use in RTA). Mechanism: volume contraction → ↑ proximal Na/HCO3 reabsorption → ↓ HCO3 wasting. Allows ↓ alkali dose (↓ volume overload, ↑ compliance).",
                "Cystinosis: AR, CTNS gene (lysosomal cystine transporter defect). Blonde hair, photophobia (corneal cystine crystals), Fanconi syndrome, ESRD by age 10-20. Treat with cysteamine (depletes cystine, slows progression). Compliance poor (q6h dosing, bad smell/taste).",
                "Wilson's disease: AR, ATP7B gene (copper transporter defect). KF rings (greenish-brown corneal rings), liver disease (hepatitis → cirrhosis), neuropsychiatric symptoms, Fanconi syndrome. Diagnose with ↓ ceruloplasmin (<20 mg/dL), ↑ 24-hour urine copper (>100 μg/day). Treat with penicillamine (chelation) or zinc.",
                "Dent's disease: X-linked, CLCN5 or OCRL1 genes. Fanconi syndrome + hypercalciuria + nephrolithiasis + CKD. Males only (X-linked). Progressive CKD → ESRD age 30-50. No cure. Thiazide ↓ hypercalciuria → ↓ stones.",
                "Lowe syndrome: X-linked, OCRL1 gene. Fanconi + congenital cataracts + intellectual disability. Males only. Diagnosed at birth (cataracts). Poor prognosis (50% die by age 30-40). No cure, supportive care.",
                "Multiple myeloma: elderly (>60 years) with anemia, bone pain, hypercalcemia, ↑ protein gap, Fanconi syndrome. Monoclonal light chains (κ or λ) directly toxic to proximal tubule. Diagnose with SPEP (M-spike), UPEP (Bence Jones proteinuria), bone marrow biopsy (>10% plasma cells). Treat myeloma (bortezomib, lenalidomide) → Fanconi may improve (often irreversible).",
                "Tenofovir (TDF) → Fanconi syndrome (dose-dependent, risk ↑ with prolonged use, low weight, older age, CKD). Proximal tubular toxicity. Switch to TAF (tenofovir alafenamide, less nephrotoxic) → stabilization/improvement. Monitor Cr, phosphate, urine glucose q3-6 months on TDF.",
                "Ifosfamide (chemotherapy) → Fanconi syndrome (dose-dependent, cumulative dose >60 g/m²). Often irreversible (tubular damage). Children at higher risk (developing tubules). Monitor for Fanconi during/after chemotherapy.",
                "Topiramate (anticonvulsant, migraine prophylaxis, weight loss) → proximal RTA + metabolic acidosis + kidney stones (Ca phosphate). Carbonic anhydrase inhibitor → ↓ HCO3 reabsorption. Reversible if stopped. Counsel patients on stone risk.",
                "Fanconi syndrome features: \"5 Ps\" = Phosphaturia, Proteinuria (low-MW), Polyuria, renal tubuloPathies, Poor growth. Also glucosuria, aminoaciduria, hypouricemia, bicarbonaturia.",
                "Hypophosphatemia in Fanconi → rickets/osteomalacia. Children: bowing of legs (genu varum), rachitic rosary, widened wrists/ankles. Adults: bone pain, proximal muscle weakness (waddling gait), Looser zones (pseudofractures). Treat with phosphate supplementation (Neutra-Phos 1-2 g/day) + vitamin D.",
                "Low-molecular-weight proteinuria (β2-microglobulin, retinol-binding protein) = hallmark of proximal tubular dysfunction. NOT detected by urine dipstick (detects albumin only). Need urine protein electrophoresis. Distinguishes Fanconi (tubular proteinuria) from glomerular disease (albuminuria).",
                "Hypouricemia (uric acid <2 mg/dL) in Fanconi → uric acid wasting. Usually asymptomatic. Rarely causes exercise-induced AKI (renal hypouricemia syndrome, from uric acid crystal precipitation in tubules after strenuous exercise).",
                "Proximal RTA + osteopetrosis + cerebral calcifications = carbonic anhydrase II deficiency (AR, CA2 gene). Marble bone disease (dense bones, fractures), renal tubular acidosis, developmental delay. Rare.",
                "Type 2 vs type 1 RTA: Type 2 (proximal) = urine pH <5.5, FEHCO3 >15%, Fanconi syndrome, requires high-dose alkali (5-15 mEq/kg/day), no stones. Type 1 (distal) = urine pH >5.5, FEHCO3 <5%, nephrocalcinosis/stones, requires low-dose alkali (1-2 mEq/kg/day).",
                "Acetazolamide (Diamox) → iatrogenic proximal RTA (carbonic anhydrase inhibitor → ↓ HCO3 reabsorption in proximal tubule). Used for glaucoma, altitude sickness, pseudotumor cerebri, seizures. Reversible if stopped. Patients on chronic acetazolamide → expect low HCO3 (therapeutic effect for ICP reduction)."
            ]
        }
    },
    {
        id: "rta-type-4",
        name: "Renal Tubular Acidosis Type 4 (Hyperkalemic RTA)",
        system: "renal",
        categories: ["tubulointerstitial-diseases"],
        symptoms: ["fatigue", "weakness", "muscle-cramps", "palpitations"],
        tags: ["rta", "type-4-rta", "hyperkalemic-rta", "hyporeninemic-hypoaldosteronism", "metabolic-acidosis", "hyperkalemia"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Type 4 RTA = non-anion gap metabolic acidosis + hyperkalemia (K+ >5.5 mEq/L) from aldosterone deficiency or resistance. Most common RTA overall (especially in adults >50 years). Classic causes: diabetic nephropathy (most common, hyporeninemic hypoaldosteronism), CKD, medications (ACE inhibitors, ARBs, NSAIDs, K+-sparing diuretics, heparin, calcineurin inhibitors). Urine pH <5.5 (can acidify urine, unlike type 1). Mechanism: ↓ aldosterone → ↓ distal tubule K+ secretion (hyperkalemia) + ↓ H+ secretion (acidosis). Mild acidosis (HCO3 17-22 mEq/L) compared to types 1/2. Often asymptomatic, discovered on routine labs.",
            pathophysiology: "Normal aldosterone action: binds mineralocorticoid receptor in principal cells of collecting duct → ↑ ENaC (epithelial Na channel) → ↑ Na reabsorption → creates lumen-negative potential → drives K+ secretion (via ROMK) + H+ secretion (via α-intercalated cells). Type 4 RTA defect: aldosterone deficiency or resistance → ↓ Na reabsorption → ↓ lumen-negative potential → ↓ K+ secretion (hyperkalemia) + ↓ H+ secretion (acidosis). Hyperkalemia also directly inhibits NH3 synthesis in proximal tubule → ↓ NH4+ excretion → ↓ acid excretion (worsens acidosis). Two subtypes: (1) Hyporeninemic hypoaldosteronism (most common, 70%): ↓ renin → ↓ angiotensin II → ↓ aldosterone. Caused by diabetic nephropathy (autonomic neuropathy → ↓ renin release), chronic interstitial nephritis, NSAIDs (↓ renin release), elderly (↓ renin with age). (2) Hyperreninemic hypoaldosteronism (30%): ↑ renin but ↓ aldosterone. Caused by primary adrenal insufficiency (Addison's disease, autoimmune, TB, hemorrhage → ↓ cortisol + ↓ aldosterone), aldosterone synthase deficiency (genetic), heparin (blocks aldosterone synthesis), ACE inhibitors/ARBs (↓ angiotensin II → ↓ aldosterone). (3) Aldosterone resistance (rare): normal/↑ aldosterone but kidney doesn't respond. Caused by K+-sparing diuretics (amiloride, triamterene, spironolactone, eplerenone), calcineurin inhibitors (tacrolimus, cyclosporine), urinary obstruction, lupus nephritis, sickle cell disease. Consequences: (1) Hyperkalemia (K+ 5.5-7.0 mEq/L, life-threatening arrhythmias if >7.5). (2) Mild metabolic acidosis (HCO3 17-22 mEq/L, non-anion gap). Acidosis is mild because GFR usually preserved (vs severe acidosis in CKD Stage 4-5). (3) Normal urine pH (<5.5, distal tubule can still acidify urine once H+ secretion partially impaired, unlike type 1 which cannot acidify at all). (4) Low NH4+ excretion (hyperkalemia → ↓ NH3 synthesis).",
            epidemiology: "Most common RTA (prevalence 5-10% in diabetics with CKD, 10-20% in CKD Stage 3-4). Age: typically >50 years (diabetic nephropathy, CKD, elderly). Male = female (except drug-induced, more common in elderly on polypharmacy). Race: more common in African Americans (↑ diabetes, ↑ hypertension → CKD). Associated conditions: diabetes mellitus (type 1 or 2, especially with diabetic nephropathy), CKD (GFR 30-60 mL/min), medications (ACE inhibitors, ARBs, NSAIDs, K+-sparing diuretics in 80% of cases), adrenal insufficiency (Addison's disease), HIV (adrenal insufficiency from infections, medications). Often coexists with CKD-related metabolic acidosis (hard to distinguish).",
            riskFactors: [
                "Diabetes mellitus (most common cause): diabetic nephropathy → hyporeninemic hypoaldosteronism (autonomic neuropathy → ↓ JG apparatus renin release). Risk ↑ with longer diabetes duration (>10 years), poor glycemic control (HbA1c >8%), diabetic neuropathy (peripheral, autonomic).",
                "Chronic kidney disease (GFR 30-60 mL/min, Stage 3-4): ↓ renin production (damaged JG apparatus), ↓ aldosterone responsiveness (tubular damage). More common in tubulointerstitial disease (diabetic nephropathy, chronic interstitial nephritis, obstructive uropathy) vs glomerular disease.",
                "Medications (most common precipitant in diabetics/CKD): ACE inhibitors (lisinopril, enalapril, ramipril) or ARBs (losartan, valsartan) → ↓ angiotensin II → ↓ aldosterone. Risk ↑ if combined with other meds (NSAIDs, K+-sparing diuretics). NSAIDs (ibuprofen, naproxen, indomethacin, ketorolac) → ↓ renin release + ↓ aldosterone. K+-sparing diuretics (spironolactone, eplerenone [mineralocorticoid receptor antagonists], amiloride, triamterene [ENaC blockers]) → aldosterone resistance. Heparin (unfractionated or LMWH, dose-dependent, reversible) → ↓ aldosterone synthesis (blocks aldosterone synthase). Calcineurin inhibitors (tacrolimus, cyclosporine, post-transplant) → aldosterone resistance + ↓ renin. Trimethoprim (high-dose, >20 mg/kg/day) → ENaC blockade (amiloride-like). Pentamidine (for PJP) → aldosterone resistance.",
                "Primary adrenal insufficiency (Addison's disease): autoimmune (70%, anti-21-hydroxylase antibodies), tuberculosis (developing countries), adrenal hemorrhage (Waterhouse-Friderichsen syndrome, meningococcemia), adrenal metastases (lung, breast, melanoma), HIV (CMV adrenalitis, MAC), medications (ketoconazole, etomidate, rifampin → ↓ cortisol synthesis). Presents with ↓ cortisol + ↓ aldosterone → hyperkalemia, acidosis, hypotension, hyperpigmentation.",
                "Elderly (>70 years): ↓ renin with aging (↓ JG cells), ↓ aldosterone responsiveness. Polypharmacy (ACE inhibitors + NSAIDs + K+-sparing diuretics → additive hyperkalemia).",
                "Urinary tract obstruction (chronic): BPH, neurogenic bladder, bilateral ureteral obstruction → aldosterone resistance (tubular damage), ↓ renin (↓ renal perfusion).",
                "Chronic interstitial nephritis: analgesic nephropathy, reflux nephropathy, chronic pyelonephritis → tubulointerstitial damage → ↓ renin, aldosterone resistance.",
                "Sickle cell disease/trait: sickling in renal medulla → tubulointerstitial damage → aldosterone resistance + ↓ renin.",
                "Lupus nephritis (tubulointerstitial variant): aldosterone resistance from tubular damage.",
                "HIV infection: adrenal insufficiency (CMV, MAC, TB, toxoplasmosis, hemorrhage), medications (ketoconazole, pentamidine, trimethoprim).",
                "Congenital causes (rare): pseudohypoaldosteronism type 1 (PHA1, AR or AD, aldosterone resistance from ENaC or mineralocorticoid receptor mutations), aldosterone synthase deficiency (CYP11B2 mutations), congenital adrenal hyperplasia (21-hydroxylase deficiency).",
                "Dietary: high K+ intake (supplements, salt substitutes with KCl, high-K+ foods like bananas/oranges) in setting of impaired K+ excretion (CKD, meds)."
            ],
            presentation: [
                "Often asymptomatic: mild acidosis (HCO3 17-22) + mild hyperkalemia (K+ 5.5-6.5) → no acute symptoms. Discovered on routine labs (BMP).",
                "Hyperkalemia symptoms (if K+ >6.5 mEq/L): muscle weakness (ascending paralysis, legs → trunk → arms), paresthesias (perioral, fingers), palpitations (arrhythmias). Severe (K+ >7.5): flaccid paralysis, bradycardia, cardiac arrest (sine wave on EKG → ventricular fibrillation/asystole).",
                "Acidosis symptoms: fatigue, weakness, anorexia (usually mild, chronic acidosis well-compensated). Rarely: bone pain (chronic acidosis → bone buffering → osteomalacia).",
                "Adrenal insufficiency symptoms (if Addison's disease): fatigue, weakness, anorexia, weight loss, nausea/vomiting, abdominal pain, hypotension (orthostatic, systolic <100 mmHg), hyperpigmentation (increased ACTH → melanocyte stimulation, affects palmar creases, buccal mucosa, scars), salt craving. Adrenal crisis (if stressed: infection, surgery, trauma): hypotension (shock), hyperkalemia, hypoglycemia, altered mental status (life-threatening).",
                "CKD symptoms (if underlying CKD): uremia (fatigue, pruritus, nausea), edema (volume overload), hypertension, oliguria.",
                "Diabetes symptoms (if diabetic nephropathy): polyuria, polydipsia, neuropathy (peripheral: numbness/tingling in feet; autonomic: orthostatic hypotension, gastroparesis, erectile dysfunction).",
                "Presentation often insidious. Patients may have been on ACE inhibitor/ARB for years, then develop hyperkalemia after adding NSAID or K+ supplement."
            ],
            physicalExam: [
                "Vital signs: hypertension (140-180/90-110, common in diabetics/CKD, vs hypotension in Addison's). Orthostatic hypotension (if Addison's or autonomic neuropathy). Bradycardia (if severe hyperkalemia, K+ >7.5).",
                "General: usually well-appearing (mild disease). Cachexia, weight loss (if Addison's).",
                "Skin: hyperpigmentation (Addison's disease, increased ACTH, bronze skin, palmar creases, buccal mucosa, scars, areolae). No hyperpigmentation in secondary adrenal insufficiency (pituitary failure → ↓ ACTH).",
                "Neuro: muscle weakness (proximal, if K+ >6.5), hyporeflexia (hyperkalemia). Flaccid paralysis (if K+ >7.5). Peripheral neuropathy (diabetics, stocking-glove distribution, ↓ vibration/proprioception, absent ankle reflexes).",
                "Cardiac: regular rate/rhythm (unless arrhythmia from hyperkalemia). S3 gallop (if CHF from CKD). Pericardial friction rub (if uremic pericarditis).",
                "Extremities: pitting edema (if CKD, volume overload). No edema in Addison's (volume depletion).",
                "Abdomen: non-tender. Epigastric tenderness (if Addison's with GI symptoms).",
                "HEENT: no specific findings unless diabetic retinopathy (cotton-wool spots, hemorrhages, neovascularization)."
            ],
            diagnosticCriteria: "Diagnosis of type 4 RTA requires ALL: (1) Normal anion gap metabolic acidosis (HCO3 17-22 mEq/L, AG <12). (2) Hyperkalemia (K+ >5.5 mEq/L, distinguishes from types 1/2 which have hypokalemia). (3) Urine pH <5.5 during acidosis (can acidify urine, unlike type 1). (4) Positive urine anion gap (UAG >0, ↓ NH4+ excretion from hyperkalemia). (5) Exclude other causes of hyperkalemia (pseudohyperkalemia from hemolysis, thrombocytosis; transcellular shifts from acidosis, insulin deficiency, β-blockers; ↑ K+ intake). (6) Determine subtype: check renin, aldosterone, cortisol (↓ renin + ↓ aldosterone = hyporeninemic hypoaldosteronism. ↑ renin + ↓ aldosterone = Addison's or ACE inhibitor. Normal/↑ aldosterone + hyperkalemia = aldosterone resistance).",
            labs: [
                "BMP: non-anion gap metabolic acidosis. pH 7.30-7.38 (mild acidosis), HCO3 17-22 mEq/L (higher than types 1/2, which have HCO3 12-18), AG <12, Cl elevated (100-110, hyperchloremic). Hyperkalemia: K+ 5.5-7.0 mEq/L (hallmark, distinguishes from types 1/2). Cr elevated (if CKD, Cr 1.5-4 mg/dL, GFR 30-60). Na low-normal or low (135-140, if Addison's → hyponatremia from ↓ aldosterone + ↓ cortisol).",
                "ABG: metabolic acidosis with respiratory compensation. pH 7.32-7.38, PCO2 28-35 mmHg, HCO3 17-22 mEq/L. Expected PCO2 = 1.5 × HCO3 + 8.",
                "Urinalysis: pH <5.5 (KEY finding, can acidify urine unlike type 1 which has pH >5.5). Protein 1-2+ (if diabetic nephropathy or CKD). RBCs (if CKD from glomerular disease). WBCs (if chronic interstitial nephritis). No glucose (unless uncontrolled diabetes).",
                "Urine anion gap (UAG): positive (UAG >0, +10 to +30) due to ↓ NH4+ excretion. Mechanism: hyperkalemia → ↓ proximal tubule NH3 synthesis → ↓ NH4+ in urine → positive UAG (unmeasured cation). Distinguished from diarrhea (negative UAG).",
                "Transtubular K+ gradient (TTKG): TTKG = (urine K / plasma K) / (urine Osm / plasma Osm). Normal TTKG in hyperkalemia >10 (kidney trying to excrete K+). Type 4 RTA: TTKG <5 (inappropriately low K+ excretion despite hyperkalemia → aldosterone deficiency/resistance). TTKG test validates aldosterone problem (vs other causes of hyperkalemia).",
                "Renin and aldosterone levels (measure after stopping ACE inhibitors/ARBs/K+-sparing diuretics x 2-4 weeks if possible, or interpret with caution): Hyporeninemic hypoaldosteronism (most common): ↓ renin (<1 ng/mL/hr), ↓ aldosterone (<5 ng/dL). Addison's disease: ↑ renin (>5 ng/mL/hr), ↓ aldosterone (<5 ng/dL), ↓ cortisol (<5 μg/dL), ↑ ACTH (>100 pg/mL). ACE inhibitor/ARB: ↑ renin, ↓ aldosterone. Aldosterone resistance (K+-sparing diuretics): normal or ↑ aldosterone (>10 ng/dL), hyperkalemia.",
                "Cortisol and ACTH (if suspect Addison's): AM cortisol <5 μg/dL + ACTH >100 pg/mL = primary adrenal insufficiency. Confirmatory test: ACTH stimulation test (cosyntropin 250 μg IV → measure cortisol at 0, 30, 60 min → normal cortisol rises >18-20 μg/dL, Addison's has blunted response <18 μg/dL).",
                "Glucose: normal (unless diabetes → hyperglycemia, or Addison's → hypoglycemia <70 mg/dL from ↓ cortisol).",
                "CBC: anemia (normocytic, if CKD from ↓ EPO). Eosinophilia (Addison's, from ↓ cortisol).",
                "Fasting lipids: dyslipidemia (if diabetic nephropathy).",
                "HbA1c: if diabetic (goal <7%, often >8% in poorly controlled diabetics with nephropathy).",
                "Urine albumin-to-creatinine ratio (UACR): if diabetic nephropathy, >30 mg/g (microalbuminuria >30-300 mg/g, macroalbuminuria >300 mg/g)."
            ],
            imaging: [
                "Renal ultrasound: assess kidney size (normal or small kidneys in CKD), echogenicity (increased in diabetic nephropathy, CKD), hydronephrosis (if obstructive uropathy). Bilateral small kidneys (<9 cm) suggest chronic CKD. Asymmetric kidneys suggest renovascular disease or chronic pyelonephritis.",
                "CT abdomen (if suspect adrenal pathology in Addison's): small adrenal glands (autoimmune Addison's, chronic), enlarged adrenals (hemorrhage, TB, metastases, acute), calcifications (TB, hemorrhage). Normal adrenal size doesn't exclude Addison's (autoimmune causes atrophy over time).",
                "EKG (if hyperkalemia, especially K+ >6.5): peaked T waves (tall, narrow, \"tented\"), prolonged PR interval, widened QRS (>120 ms), loss of P wave, sine wave pattern (pre-terminal, K+ >8.5 → ventricular fibrillation/asystole imminent). URGENT treatment if EKG changes present.",
                "No specific imaging for type 4 RTA itself. Imaging based on underlying cause (CKD, obstruction, adrenal insufficiency)."
            ],
            differentialDiagnosis: [
                "Distal RTA (type 1): non-AG acidosis, but hypokalemia (K+ <3.5, opposite of type 4). Urine pH >5.5 (cannot acidify, vs type 4 can acidify to <5.5). Nephrocalcinosis/stones. No CKD.",
                "Proximal RTA (type 2): non-AG acidosis, hypokalemia (opposite of type 4). Urine pH <5.5 (like type 4). Fanconi syndrome (glucosuria, phosphaturia). FEHCO3 >15%. No CKD.",
                "CKD metabolic acidosis (without type 4 RTA): CKD Stage 4-5 (GFR <30) causes acidosis from ↓ NH4+ excretion + ↓ HCO3 regeneration. Distinguished by normal K+ or hyperkalemia without aldosterone deficiency (K+ ↑ from ↓ GFR, not from ↓ aldosterone). Renin/aldosterone normal (unless concurrent type 4 RTA). Acidosis more severe (HCO3 <15 mEq/L if GFR <20).",
                "Pseudohyperkalemia: hemolysis (RBC lysis releases K+), thrombocytosis (>1 million platelets release K+ during clotting), leukocytosis (>100,000 WBCs), prolonged tourniquet time, fist clenching during blood draw. Distinguished by repeat K+ with careful venipuncture → K+ normal. Plasma K+ (not serum) avoids platelet/clot-related elevation.",
                "Hyperkalemia from transcellular shifts: acidosis (H+ into cells, K+ out, but type 4 RTA acidosis is mild), insulin deficiency (DKA, hyperglycemia → K+ out of cells), β-blockers (↓ cellular K+ uptake), digoxin toxicity (↓ Na-K-ATPase), hyperglycemia (osmotic K+ shift), rhabdomyolysis (muscle breakdown → K+ release), tumor lysis syndrome (cell lysis → K+ release). Distinguished by history, glucose, CPK.",
                "Hyperkalemia from ↑ K+ intake: supplements (KCl tablets), salt substitutes (KCl), high-K+ diet (bananas, oranges, potatoes, salt-free foods). Usually requires impaired K+ excretion (CKD, meds) to cause hyperkalemia. Distinguish by dietary history, improvement with dietary restriction.",
                "Primary hyperaldosteronism (Conn's syndrome): hypokalemia (opposite of type 4 RTA), metabolic alkalosis (opposite), hypertension. ↑ aldosterone (>15 ng/dL), ↓ renin (<1 ng/mL/hr). Adrenal adenoma or bilateral adrenal hyperplasia.",
                "Bartter/Gitelman syndromes: hypokalemia (opposite), metabolic alkalosis (opposite), normal/low BP. Genetic tubular defects (Bartter = loop of Henle, Gitelman = distal convoluted tubule). Present in childhood/adolescence."
            ],
            management: {
                acute: [
                    "URGENT if severe hyperkalemia (K+ >6.5 or EKG changes): Immediate treatment to prevent cardiac arrest. Order: (1) Calcium gluconate 1-2 g (10-20 mL of 10% solution) IV over 2-5 min → stabilizes cardiac membrane (no ↓ K+, but prevents arrhythmias). Repeat q5-10 min if EKG changes persist. Effect: immediate (1-3 min), duration 30-60 min. (2) Insulin + dextrose: regular insulin 10 units IV + 25 g dextrose (50 mL D50W) IV over 5 min → shifts K+ into cells (↓ serum K+ by 0.5-1.5 mEq/L). Check glucose q1h x 4h (risk of hypoglycemia). Effect: 15-30 min, duration 4-6 hours. (3) Sodium bicarbonate 50-100 mEq (1-2 amps) IV over 5 min → shifts K+ into cells (↓ K+ by 0.5-1 mEq/L). Most effective if acidosis present (corrects acidosis + shifts K+). Effect: 15-30 min, duration 1-2 hours. (4) Albuterol nebulized 10-20 mg (4-8 times normal dose) over 10 min → β2-agonist shifts K+ into cells (↓ K+ by 0.5-1 mEq/L). Effect: 30 min, duration 2-4 hours. (5) Kayexalate (sodium polystyrene sulfonate) 15-30 g PO/PR (with sorbitol to ↓ constipation) → binds K+ in GI tract, removes K+ from body (↓ K+ by 0.5-1 mEq/L over hours). Effect: 1-2 hours, duration: ongoing (actually removes K+, vs shifting). Side effects: intestinal necrosis (rare, avoid in post-op/ileus), volume overload (Na load). Patiromer (Veltassa) 8.4-25.2 g PO daily or sodium zirconium cyclosilicate (Lokelma) 10 g PO TID: newer K+ binders, safer than kayexalate, slower onset (days). (6) Dialysis (urgent hemodialysis): if K+ >7.5, refractory to medical therapy, EKG changes persist, AKI with oliguria/anuria, or severe CKD (GFR <15). Removes K+ directly. Most effective treatment (↓ K+ by 1-2 mEq/L per hour).",
                    "Discontinue offending medications: ACE inhibitors, ARBs, NSAIDs, K+-sparing diuretics (spironolactone, amiloride, triamterene, eplerenone), heparin, trimethoprim, calcineurin inhibitors. Stop K+ supplements, salt substitutes.",
                    "Dietary K+ restriction: <2 g/day (50 mEq/day). Avoid high-K+ foods (bananas, oranges, potatoes, tomatoes, spinach, beans, nuts, salt substitutes). Educate patient on food labels (low-sodium products often use KCl → high K+).",
                    "Treat underlying acidosis (improves K+ excretion): sodium bicarbonate 650-1300 mg (8-15 mEq) PO TID (or IV if severe acidosis). Goal HCO3 >22 mEq/L. Correcting acidosis → ↓ hyperkalemia (K+ shifts back into cells, ↑ renal K+ excretion). NOTE: use cautiously in volume-overloaded patients (Na load).",
                    "Loop diuretics (if volume overload or CKD): furosemide 40-120 mg IV/PO daily-BID → ↑ distal Na delivery → ↑ K+ secretion (↓ K+ by 0.5-1 mEq/L over hours-days). Effective even with ↓ aldosterone (Na delivery drives K+ secretion). Monitor volume status (avoid dehydration).",
                    "Fludrocortisone (mineralocorticoid replacement if aldosterone deficiency): fludrocortisone 0.1-0.2 mg PO daily → replaces aldosterone → ↑ K+ secretion, corrects acidosis. Indications: Addison's disease, hyporeninemic hypoaldosteronism refractory to other measures. Side effects: hypertension (80%, monitor BP), edema (volume retention), hypokalemia (if overcorrected). Contraindicated in CHF (worsens volume overload).",
                    "Hydrocortisone (if Addison's disease/adrenal crisis): hydrocortisone 100 mg IV q6-8h (stress dose) for adrenal crisis, taper to maintenance 15-25 mg PO divided BID (AM larger dose, mimics diurnal cortisol). Fludrocortisone 0.05-0.2 mg PO daily (mineralocorticoid). Adrenal crisis management: IV fluids (normal saline 1-2 L rapid bolus), dextrose (if hypoglycemia), treat precipitant (infection → antibiotics).",
                    "Monitor labs: BMP, K+ daily initially until K+ <5.5 mEq/L and stable. EKG if K+ >6.5 or symptomatic. Once stable, BMP q1 week x 1 month, then q1-3 months."
                ],
                chronic: [
                    "Avoid offending medications: ACE inhibitors, ARBs, NSAIDs, K+-sparing diuretics (unless absolutely necessary). If ACE inhibitor/ARB needed for CKD/proteinuria (cardioprotective), use lowest dose + close monitoring (BMP q1-2 weeks after starting, then q3 months). Consider alternatives: hydralazine + nitrate (CHF), amlodipine (HTN).",
                    "Chronic K+ restriction: dietary <2 g/day (50 mEq/day). Nutrition consultation. Avoid salt substitutes (KCl), low-sodium processed foods (often use KCl). Read labels (\"No Salt Added\" may have KCl).",
                    "Chronic alkali therapy: sodium bicarbonate 650-1300 mg (8-15 mEq) PO TID or sodium citrate 10-30 mEq PO TID. Goal HCO3 >22 mEq/L. Corrects acidosis + improves K+ excretion. Side effects: volume overload (monitor weight, BP, edema), hypernatremia. Use cautiously in CHF/CKD.",
                    "Loop diuretics (chronic use if needed): furosemide 20-80 mg PO daily-BID or bumetanide 1-4 mg PO daily. ↑ distal Na delivery → ↑ K+ secretion. Monitor Cr (can worsen CKD if volume depletion), K+ (goal 4-5 mEq/L), Mg (hypomagnesemia common, replace PRN).",
                    "Fludrocortisone (if persistent hyperkalemia despite above measures): 0.05-0.2 mg PO daily. Start low (0.05 mg), titrate q1-2 weeks based on K+. Monitor BP q1-2 weeks (hypertension common, may need antihypertensive), weight (edema from volume retention), K+ q1-2 weeks until stable. Goal K+ <5.5 mEq/L. Contraindicated in CHF (worsens volume overload, pulmonary edema). Alternative if BP elevated: combine low-dose fludrocortisone (0.05 mg) + loop diuretic (furosemide 20-40 mg) → balances K+ excretion and volume.",
                    "Chronic K+ binders (if refractory hyperkalemia or cannot use fludrocortisone): Patiromer (Veltassa) 8.4-16.8 g PO daily with food (start low, titrate weekly based on K+, max 25.2 g/day). Sodium zirconium cyclosilicate (Lokelma) 10 g PO TID x 48h (acute phase), then 5-10 g daily (maintenance). Bind K+ in GI tract → ↑ fecal K+ excretion. Side effects: constipation, hypomagnesemia (patiromer binds Mg, supplement PRN), edema (sodium load from lokelma). Drug interactions: patiromer binds other meds (take other meds 3h before patiromer). More expensive than kayexalate but safer (no intestinal necrosis risk).",
                    "Treat underlying disease: Diabetes: optimize glycemic control (HbA1c <7%, slows diabetic nephropathy progression). ACE inhibitor/ARB (lisinopril 10-40 mg daily, losartan 50-100 mg daily) → ↓ proteinuria, slows CKD (but monitor K+ closely, may need dose ↓ or discontinue if persistent hyperkalemia >6 mEq/L). CKD: slow progression (BP <130/80, ACE inhibitor/ARB if proteinuria, SGLT2 inhibitor [empagliflozin, dapagliflozin] → cardio/renal protection). Prepare for dialysis if GFR <20 (fistula creation, transplant evaluation). Addison's disease: lifelong hydrocortisone 15-25 mg PO divided BID + fludrocortisone 0.05-0.2 mg daily. Increase hydrocortisone during stress (infection, surgery: triple dose). Medical alert bracelet. Urinary obstruction: relieve obstruction (TURP for BPH, intermittent catheterization for neurogenic bladder, ureteral stent for ureteral obstruction).",
                    "Monitor labs: BMP, K+ q3 months (or q1 month if unstable, on fludrocortisone, titrating meds). HbA1c q3 months (diabetics). UACR annually (diabetic nephropathy). Renin/aldosterone q6-12 months (if on fludrocortisone, ensure not overcorrecting → hypokalemia). BP q1-3 months (fludrocortisone → hypertension).",
                    "Patient education: dietary K+ restriction (food list, salt substitute avoidance). Medication compliance (avoid NSAIDs, OTC meds with K+). Symptoms of hyperkalemia (weakness, palpitations → seek care). Symptoms of hypoadrenalism (if Addison's: fatigue, nausea, hypotension → stress dosing of steroids). Importance of regular lab monitoring."
                ]
            },
            complications: [
                "Cardiac arrhythmias (life-threatening): hyperkalemia (K+ >7.5) → peaked T waves → widened QRS → sine wave → ventricular fibrillation or asystole (sudden cardiac death). Risk factors: rapid ↑ K+ (acute), underlying heart disease (CAD, CHF), medications (digoxin → ↑ sensitivity to hyperkalemia). Bradycardia, heart block (AV block, bundle branch block). Mortality high if untreated (20-30%).",
                "Muscle weakness/paralysis: ascending paralysis (legs → trunk → arms, like Guillain-Barré). Severe: flaccid paralysis, respiratory failure (diaphragm weakness, need mechanical ventilation). Rhabdomyolysis (if severe weakness + immobility).",
                "Chronic metabolic acidosis complications: osteomalacia/osteoporosis (chronic acidosis → bone buffering → Ca release → bone loss). Muscle wasting (acidosis → ↑ protein catabolism). CKD progression (acidosis accelerates nephron loss).",
                "Adrenal crisis (if untreated Addison's disease): severe hypotension (shock, systolic <80 mmHg), hyperkalemia (K+ >7), hypoglycemia (<50 mg/dL), altered mental status (confusion, coma). Precipitated by stress (infection, surgery, trauma, stopping steroids abruptly). Mortality 5-10% if untreated. Requires urgent IV hydrocortisone + fluids.",
                "CKD progression: chronic hyperkalemia + acidosis accelerate CKD (tubulointerstitial damage). Diabetic nephropathy → ESRD (20-30% of diabetics with nephropathy progress to ESRD over 10-20 years). Stopping ACE inhibitor/ARB (to treat hyperkalemia) → ↓ renoprotection → faster CKD progression (dilemma).",
                "Medication-related complications: Fludrocortisone → hypertension (80%, may require additional antihypertensives), edema (volume overload), hypokalemia (if overcorrected), CHF exacerbation (if used in CHF patients). Kayexalate → intestinal necrosis (rare but fatal, avoid in post-op/ileus), constipation, fecal impaction. Patiromer/lokelma → constipation (10-20%), hypomagnesemia (patiromer), drug interactions (patiromer binds other meds).",
                "Hyperkalemia refractory to treatment: if noncompliant (dietary K+ intake, medications), advanced CKD (GFR <15), severe hypoaldosteronism. May require chronic dialysis (even if GFR >15) for K+ control alone (\"dialysis for hyperkalemia\")."
            ],
            prognosis: "Prognosis depends on underlying cause, severity of hyperkalemia, and compliance. Hyporeninemic hypoaldosteronism (diabetic nephropathy, most common): good prognosis if hyperkalemia controlled (K+ <5.5 mEq/L). Morbidity from underlying diabetes/CKD (cardiovascular disease, ESRD). 5-year survival 70-80% (diabetic nephropathy). ESRD common (20-30% progress to dialysis over 10-20 years). Stopping ACE inhibitor/ARB (to treat hyperkalemia) → faster CKD progression → worse prognosis. Addison's disease: excellent prognosis with lifelong steroid replacement (hydrocortisone + fludrocortisone). Near-normal lifespan if compliant. Adrenal crisis mortality 5-10% if untreated, <1% if treated promptly. Drug-induced (ACE inhibitor, NSAID): excellent prognosis if medication stopped. Hyperkalemia resolves 1-2 weeks after stopping. No long-term sequelae. CKD Stage 3-4: prognosis depends on CKD progression. Hyperkalemia managed with diet, fludrocortisone, K+ binders. Eventual ESRD (GFR <15) → dialysis/transplant. 5-year survival on dialysis 40-50%. Severe hyperkalemia (K+ >7.5): high mortality if untreated (20-30% from arrhythmias). With treatment (calcium, insulin, dialysis), mortality <5%. Key message: Type 4 RTA prognosis is good with dietary restriction, medication adjustments, and monitoring. Hyperkalemia is manageable. Morbidity/mortality driven by underlying disease (diabetes, CKD, Addison's). Cardiac arrest from severe hyperkalemia is preventable with close K+ monitoring.",
            clinicalPearls: [
                "Type 4 RTA = non-anion gap metabolic acidosis + hyperkalemia (K+ >5.5 mEq/L). Most common RTA overall. Classic patient: elderly diabetic on ACE inhibitor + NSAID → K+ 6.5 mEq/L.",
                "Triad: mild acidosis (HCO3 17-22, higher than types 1/2), hyperkalemia (distinguishes from types 1/2 which have hypokalemia), urine pH <5.5 (can acidify urine, unlike type 1 which has pH >5.5).",
                "Most common cause: diabetic nephropathy (hyporeninemic hypoaldosteronism from autonomic neuropathy → ↓ renin release). Second most common: medications (ACE inhibitors, ARBs, NSAIDs, K+-sparing diuretics).",
                "TTKG <5 in setting of hyperkalemia = aldosterone deficiency/resistance. Normal TTKG >10 (kidney should be excreting K+ when hyperkalemic). TTKG = (urine K / plasma K) / (urine Osm / plasma Osm).",
                "Renin/aldosterone pattern: Hyporeninemic hypoaldosteronism (diabetics, CKD, NSAIDs, elderly) = ↓ renin + ↓ aldosterone. Addison's disease = ↑ renin + ↓ aldosterone + ↓ cortisol + hyperpigmentation. ACE inhibitor/ARB = ↑ renin + ↓ aldosterone. Aldosterone resistance (K+-sparing diuretics) = normal/↑ aldosterone + hyperkalemia.",
                "Treatment: (1) Stop offending meds (ACE inhibitor, ARB, NSAID, K+-sparing diuretics, heparin). (2) Dietary K+ restriction (<2 g/day, avoid bananas, oranges, salt substitutes). (3) Alkali therapy (sodium bicarbonate 8-15 mEq TID → corrects acidosis + ↓ K+). (4) Loop diuretics (furosemide 40-80 mg daily → ↑ distal Na delivery → ↑ K+ secretion). (5) Fludrocortisone 0.05-0.2 mg daily (mineralocorticoid replacement if refractory, monitor BP). (6) K+ binders (patiromer, lokelma if refractory).",
                "URGENT treatment if K+ >6.5 or EKG changes: (1) Calcium gluconate 1-2 g IV (stabilizes cardiac membrane, immediate). (2) Insulin 10 units IV + D50W 50 mL (shifts K+ into cells, ↓ K+ by 1 mEq/L in 15-30 min). (3) Sodium bicarbonate 50-100 mEq IV (shifts K+, corrects acidosis). (4) Albuterol nebulized 10-20 mg (shifts K+). (5) Kayexalate 15-30 g PO/PR (removes K+, slow onset). (6) Dialysis if refractory (most effective, ↓ K+ by 1-2 mEq/L per hour).",
                "EKG changes of hyperkalemia (in order of severity): peaked T waves (tall, narrow, K+ 6-7) → prolonged PR (K+ 6.5-7.5) → loss of P wave (K+ 7-8) → widened QRS (>120 ms, K+ 7.5-8.5) → sine wave (pre-terminal, K+ >8.5) → VFib/asystole (death). Peaked T waves = treat urgently. Sine wave = cardiac arrest imminent.",
                "Addison's disease (primary adrenal insufficiency): hyperpigmentation (bronze skin, palmar creases, buccal mucosa, scars) + hyperkalemia + hyponatremia + hypotension. Caused by autoimmune (70%), TB, adrenal hemorrhage. Diagnose with ↓ AM cortisol (<5 μg/dL), ↑ ACTH (>100 pg/mL), ACTH stim test (cosyntropin 250 μg IV → cortisol fails to rise >18-20 μg/dL). Treat with hydrocortisone 15-25 mg PO divided BID + fludrocortisone 0.05-0.2 mg daily. Adrenal crisis (stress, infection) → IV hydrocortisone 100 mg q6-8h + IV fluids + dextrose (if hypoglycemia).",
                "Heparin → hyperkalemia by ↓ aldosterone synthesis (blocks aldosterone synthase in adrenal zona glomerulosa). Dose-dependent, reversible. Occurs in 5-10% on heparin (UFH or LMWH). Monitor K+ in patients on heparin >5 days.",
                "Trimethoprim (high-dose, >20 mg/kg/day) → hyperkalemia by ENaC blockade (amiloride-like effect). Mechanism: trimethoprim structurally similar to amiloride → blocks ENaC → ↓ K+ secretion. Occurs with TMP-SMX for PJP treatment (not prophylaxis dose). Monitor K+ during high-dose TMP.",
                "Calcineurin inhibitors (tacrolimus, cyclosporine) → hyperkalemia + type 4 RTA by aldosterone resistance + ↓ renin. Common post-transplant (30-50% of patients). Monitor K+ closely, may need fludrocortisone.",
                "Fludrocortisone side effects: hypertension (80%, from volume retention + vasoconstriction). Monitor BP q1-2 weeks, may need antihypertensive (amlodipine, hydralazine). Edema (volume overload, limit Na intake, loop diuretic if needed). Contraindicated in CHF (worsens volume overload → pulmonary edema).",
                "Dilemma in diabetic nephropathy: ACE inhibitor/ARB (renoprotective, ↓ proteinuria, slows CKD) vs hyperkalemia. Options: (1) Continue ACE inhibitor at lower dose + add fludrocortisone/loop diuretic/K+ binder to manage K+. (2) Stop ACE inhibitor → accept faster CKD progression. (3) SGLT2 inhibitor (empagliflozin, dapagliflozin) → renoprotective + ↓ K+ (natriuretic effect). Individualize based on K+ severity, CKD stage.",
                "Type 4 RTA vs type 1 RTA: Type 4 = hyperkalemia (K+ >5.5), urine pH <5.5 (can acidify), mild acidosis (HCO3 17-22), common in diabetics/CKD/elderly. Type 1 = hypokalemia (K+ <3.5), urine pH >5.5 (cannot acidify), severe acidosis (HCO3 12-18), nephrocalcinosis/stones, common in autoimmune (Sjögren's).",
                "Type 4 RTA vs CKD acidosis: Type 4 RTA = hyperkalemia out of proportion to GFR (K+ >5.5 with GFR 30-60), ↓ renin/aldosterone, responds to fludrocortisone. CKD acidosis (no type 4) = K+ normal or mildly ↑ (proportional to GFR), normal renin/aldosterone, acidosis worsens as GFR <30 (HCO3 <15).",
                "Salt substitutes = KCl (not NaCl). Marketed as \"No Salt\", \"Salt-Free\", \"Lite Salt\" → contain 10-15 mEq K+ per 1/4 tsp (vs banana 10 mEq, orange 5 mEq). Major source of K+ in diabetics/CKD trying to ↓ Na. Educate patients: read labels (\"potassium chloride\" as ingredient = avoid).",
                "Pseudohyperkalemia: hemolyzed blood sample (RBC lysis → K+ release). Clues: K+ >>7 mEq/L with no symptoms, serum K+ elevated but plasma K+ normal, hemolysis flag on lab result. Repeat K+ with careful venipuncture (no fist clenching, no tourniquet prolonged, send to lab immediately). If plasma K+ normal → pseudohyperkalemia (no treatment needed).",
                "Kayexalate (sodium polystyrene sulfonate) controversial: efficacy uncertain (removes ~1 mEq K+ per gram, but takes hours-days), risk of intestinal necrosis (rare but fatal, especially with sorbitol in post-op/ileus patients). Newer agents (patiromer, lokelma) safer but expensive ($300-500/month). Kayexalate still used in acute setting (ER), but avoid chronic use."
            ]
        }
    },
    {
        id: "rta-type-3",
        name: "Renal Tubular Acidosis Type 3 (Mixed RTA)",
        system: "renal",
        categories: ["tubulointerstitial-diseases"],
        symptoms: ["fatigue", "weakness", "bone-pain", "growth-failure", "polyuria"],
        tags: ["rta", "type-3-rta", "mixed-rta", "carbonic-anhydrase-deficiency", "metabolic-acidosis", "hypokalemia", "osteopetrosis"],
        severity: "severe",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Type 3 RTA (mixed RTA) = rare disorder combining features of type 1 (distal) and type 2 (proximal) RTA. Originally described as transient mixed RTA in infants, but now reclassified. Modern use: carbonic anhydrase II (CA-II) deficiency = AR genetic disorder (CA2 gene mutations) causing proximal + distal RTA. Classic triad: RTA (mixed proximal + distal features) + osteopetrosis (marble bone disease, dense bones) + cerebral calcifications (basal ganglia). Extremely rare (1 in 1 million). Historical note: Type 3 RTA originally referred to transient RTA in infants (now recognized as severe type 1 RTA that improves with age). CA-II deficiency is the only true \"mixed\" RTA.",
            pathophysiology: "Carbonic anhydrase II (CA-II): enzyme catalyzes reversible reaction: CO2 + H2O ↔ H2CO3 ↔ H+ + HCO3-. Present in multiple tissues: (1) Proximal tubule: CA-II facilitates HCO3 reabsorption (converts HCO3 to CO2 → diffuses into cell → reconverted to HCO3 by CA-II → returns to blood). (2) Distal tubule/collecting duct: CA-II facilitates H+ secretion (generates H+ from CO2 + H2O → secreted into lumen). (3) Osteoclasts: CA-II generates H+ → acidifies resorption lacuna → dissolves bone mineral (Ca phosphate). (4) Brain: CA-II regulates CSF pH, ion transport. CA-II deficiency (AR, CA2 gene mutations): (1) Proximal RTA: ↓ HCO3 reabsorption → bicarbonaturia (similar to type 2). FEHCO3 >15% when HCO3 normalized. (2) Distal RTA: ↓ H+ secretion → urine pH >5.5 despite acidosis (similar to type 1). Nephrocalcinosis/nephrolithiasis (from alkaline urine + hypercalciuria). (3) Osteopetrosis: ↓ osteoclast function (cannot acidify resorption lacuna) → ↓ bone resorption → dense bones (\"marble bone disease\"). Bones are abnormally dense but brittle (pathologic fractures). Narrow marrow cavity → pancytopenia (anemia, thrombocytopenia, leukopenia) from marrow failure. Skull thickening → cranial nerve compression (optic nerve → blindness, facial nerve → facial palsy, vestibulocochlear → deafness). (4) Cerebral calcifications: ↓ CA-II in brain → abnormal Ca deposition in basal ganglia, periventricular regions. Mechanism unclear. Associated with developmental delay, intellectual disability. (5) Hypokalemia: similar to types 1/2 (distal K+ wasting from alkaline urine). (6) Chronic metabolic acidosis: non-anion gap, HCO3 12-18 mEq/L. (7) Growth failure: acidosis + hypophosphatemia (from Fanconi-like features) + bone disease.",
            epidemiology: "Extremely rare: 1 in 1 million births. Autosomal recessive (CA2 gene, chromosome 8q22). Consanguinity common in reported cases (North Africa, Middle East, Mediterranean). Equal male:female. Presents in early childhood (infancy to age 5): failure to thrive, developmental delay, fractures, visual impairment. Diagnosed via genetic testing (CA2 sequencing), bone X-rays (osteopetrosis), brain imaging (calcifications). Few hundred cases reported worldwide. Most patients are from consanguineous families.",
            riskFactors: [
                "Consanguinity (parents are blood relatives): AR inheritance, both parents carriers (heterozygotes asymptomatic). Consanguinity ↑ risk of homozygous CA2 mutations.",
                "Family history: siblings with CA-II deficiency (25% recurrence risk if both parents carriers).",
                "Ethnicity: more common in populations with high consanguinity rates (North Africa, Middle East, Saudi Arabia, Turkey, Mediterranean).",
                "Genetic: CA2 gene mutations (>30 different mutations described, most are missense/nonsense mutations → absent or nonfunctional CA-II enzyme)."
            ],
            presentation: [
                "RTA features: fatigue, weakness, failure to thrive (poor weight gain, poor linear growth). Polyuria/polydipsia (osmotic diuresis from bicarbonaturia, hypokalemia). Bone pain (osteomalacia + osteopetrosis). Nephrolithiasis (Ca phosphate stones from alkaline urine). Fractures (pathologic, from brittle osteopetrotic bones despite high density).",
                "Osteopetrosis features: fractures (pathologic, despite dense bones, because bones are brittle). Bone pain (marrow expansion, fractures). Pancytopenia: anemia (fatigue, pallor), thrombocytopenia (bruising, petechiae, bleeding), neutropenia (recurrent infections). Cranial nerve compression: optic nerve → vision loss/blindness (most common, progressive, often irreversible). Facial nerve → facial palsy. Vestibulocochlear nerve → sensorineural deafness. Trigeminal nerve → facial numbness. Hydrocephalus (rarely, from skull thickening → ↓ CSF resorption). Macrocephaly (large head from skull thickening). Frontal bossing.",
                "Developmental delay/intellectual disability: delayed motor milestones (sitting, walking, talking). Intellectual disability (mild-moderate in most, severe in some). Seizures (10-20%, from cerebral calcifications or hypocalcemia). Behavioral problems.",
                "Cerebral calcifications: often asymptomatic (incidental finding on CT). Can cause seizures, movement disorders (dystonia, choreoathetosis), developmental delay.",
                "Dental problems: delayed tooth eruption, malformed teeth (enamel hypoplasia), dental caries.",
                "Short stature: from acidosis (↓ GH secretion) + bone disease + Fanconi-like features (hypophosphatemia). Most patients <5th percentile for height.",
                "Presentation typically in infancy or early childhood (age 1-5 years): failure to thrive, developmental delay, fractures, vision problems. Diagnosis often delayed (years) due to rarity."
            ],
            physicalExam: [
                "General: failure to thrive (weight/height <5th percentile), short stature, macrocephaly (large head), frontal bossing (prominent forehead). Pallor (anemia).",
                "HEENT: macrocephaly (skull thickening). Frontal bossing. Vision loss/blindness (optic nerve compression, assess visual acuity). Facial palsy (CN VII compression). Hearing loss (audiometry). Dental: delayed dentition, malformed teeth.",
                "Musculoskeletal: bone tenderness (fractures, marrow expansion). Deformities from healed fractures. Limited range of motion (fractures, bone pain). Proximal muscle weakness (rickets/osteomalacia).",
                "Neuro: developmental delay (assess milestones: sitting, walking, talking). Hypotonia or hypertonia (cerebral calcifications, basal ganglia involvement). Hyporeflexia (hypokalemia). Seizures (if cerebral calcifications). Ataxia, movement disorders (basal ganglia calcifications).",
                "Skin: pallor (anemia), petechiae/bruising (thrombocytopenia).",
                "Abdomen: hepatosplenomegaly (extramedullary hematopoiesis from marrow failure, compensatory).",
                "Extremities: no edema (unless advanced CKD). Bruising (thrombocytopenia).",
                "Growth charts: weight/height <5th percentile, head circumference >95th percentile (macrocephaly)."
            ],
            diagnosticCriteria: "Diagnosis of CA-II deficiency requires: (1) RTA features: non-anion gap metabolic acidosis + hypokalemia + urine pH >5.5 (distal component) + FEHCO3 >15% (proximal component, when HCO3 normalized). (2) Osteopetrosis on bone X-rays: diffuse osteosclerosis (increased bone density), \"bone-in-bone\" appearance (endobone), vertebral \"rugger jersey\" spine (alternating dense/lucent bands), \"Erlenmeyer flask\" deformity of long bones (widened metaphysis). (3) Cerebral calcifications on CT/MRI: basal ganglia, periventricular, thalamus (bilateral, symmetric). (4) Genetic confirmation: CA2 gene sequencing → homozygous or compound heterozygous mutations. (5) Enzyme assay (if available): ↓ CA-II activity in RBCs (<10% of normal). Clinical triad: RTA + osteopetrosis + cerebral calcifications = pathognomonic for CA-II deficiency.",
            labs: [
                "BMP: non-anion gap metabolic acidosis (pH 7.25-7.35, HCO3 12-18 mEq/L, AG <12, Cl 105-115). Hypokalemia (K+ 2.5-3.5 mEq/L, from distal K+ wasting). Cr usually normal (unless nephrocalcinosis → CKD). Na normal.",
                "ABG: metabolic acidosis with respiratory compensation. pH 7.28-7.35, PCO2 25-30 mmHg, HCO3 12-18 mEq/L.",
                "Urinalysis: pH >5.5 (distal RTA component, cannot acidify urine despite acidosis). Glucosuria (if Fanconi-like features). Ca phosphate crystals. Protein trace (low-MW proteinuria if Fanconi-like).",
                "Urine anion gap (UAG): positive (UAG >0, +10 to +30) due to ↓ NH4+ excretion (similar to types 1/2).",
                "Fractional excretion of HCO3 (FEHCO3): >15% (proximal RTA component, when serum HCO3 normalized with IV NaHCO3 infusion). Test: infuse NaHCO3 IV to raise HCO3 >20 mEq/L → measure FEHCO3 → CA-II deficiency shows bicarbonaturia (similar to type 2 RTA).",
                "Serum phosphate: low (hypophosphatemia <2.5 mg/dL) if Fanconi-like features. Normal in pure RTA.",
                "Serum calcium: normal or mildly low. PTH elevated (secondary hyperparathyroidism from acidosis + vitamin D deficiency).",
                "Alkaline phosphatase: elevated (bone disease: osteopetrosis + rickets/osteomalacia).",
                "CBC: pancytopenia (from marrow failure due to narrow marrow cavity). Anemia (normocytic, Hgb 8-10 g/dL), thrombocytopenia (platelets 50,000-100,000), leukopenia (WBC 2,000-4,000). Peripheral smear: nucleated RBCs (extramedullary hematopoiesis).",
                "CA-II enzyme activity (RBC CA-II assay, if available): <10% of normal (diagnostic, but assay not widely available).",
                "Genetic testing: CA2 gene sequencing → homozygous or compound heterozygous mutations (definitive diagnosis). >30 mutations described (missense, nonsense, frameshift, splice site). Both parents should be heterozygous carriers (asymptomatic).",
                "Urine Ca/Cr ratio: elevated (hypercalciuria >0.2) from acidosis + bone buffering (similar to type 1 RTA).",
                "Vitamin D (25-OH vitamin D): often low (<20 ng/mL) from malabsorption, poor intake (failure to thrive)."
            ],
            imaging: [
                "Skeletal X-rays (REQUIRED for diagnosis): Osteopetrosis = diffusely increased bone density (\"marble bones\"). Skull: thickened calvarium, skull base thickening → cranial nerve foramina narrowing → nerve compression. Spine: \"rugger jersey\" appearance (alternating dense/lucent bands of vertebral endplates). Long bones: \"bone-in-bone\" appearance (endobone, bone within bone), Erlenmeyer flask deformity (widened, club-shaped distal femur/proximal tibia), sandwich vertebrae. Pelvis: dense iliac wings, narrow pelvic inlet. Fractures: pathologic fractures (despite dense bones, brittle). Delayed healing.",
                "Brain CT (REQUIRED for diagnosis): Cerebral calcifications in basal ganglia (bilateral, symmetric), periventricular white matter, thalamus, dentate nuclei. Calcifications appear as hyperdense foci on CT. Hydrocephalus (rare, from ↓ CSF resorption).",
                "Brain MRI: cerebral calcifications (hypointense on T2, \"blooming\" on GRE/SWI sequences). Basal ganglia signal abnormalities (T2 hyperintensity). Assess for optic nerve compression (thick optic canal → optic nerve atrophy). Developmental abnormalities (cortical malformations in some patients).",
                "Renal ultrasound: nephrocalcinosis (echogenic medullary pyramids, \"bright kidneys\", similar to type 1 RTA). Nephrolithiasis (Ca phosphate stones). Kidneys usually normal size (unless CKD from chronic nephrocalcinosis).",
                "Bone marrow biopsy (if pancytopenia severe, to assess marrow): narrow marrow cavity (from osteopetrosis → ↓ marrow space). Fibrosis, extramedullary hematopoiesis. Excludes leukemia, aplastic anemia.",
                "Ophthalmology exam: optic nerve assessment (optic atrophy from compression), visual field testing, fundoscopy (papilledema if ↑ ICP). Baseline for monitoring (optic nerve compression progressive).",
                "Audiometry: sensorineural hearing loss (CN VIII compression). Baseline and serial monitoring.",
                "Skeletal survey (if fractures, bone pain): assess for fractures (pathologic), bone deformities, healing."
            ],
            differentialDiagnosis: [
                "Distal RTA (type 1): urine pH >5.5 (like type 3), but no proximal component (FEHCO3 <5%, vs >15% in type 3). No osteopetrosis or cerebral calcifications (distinguishes from CA-II deficiency). Nephrocalcinosis common (like type 3).",
                "Proximal RTA (type 2): FEHCO3 >15% (like type 3), but urine pH <5.5 once HCO3 low (can acidify, vs type 3 cannot). No osteopetrosis or cerebral calcifications.",
                "Other osteopetrosis syndromes: Infantile malignant osteopetrosis (AR, severe, presents birth-infancy, early death from infections/marrow failure, no RTA or cerebral calcifications, caused by TCIRG1, CLCN7, OSTM1 mutations). Adult (benign) osteopetrosis (AD, milder, presents adulthood, fractures, no RTA, no cerebral calcifications, caused by CLCN7, LRP5 mutations). Osteopetrosis with RTA = only CA-II deficiency (triad: RTA + osteopetrosis + cerebral calcifications).",
                "Cerebral calcifications from other causes: Fahr disease (familial idiopathic basal ganglia calcification, no RTA, no osteopetrosis), hypoparathyroidism (hypocalcemia, hyperphosphatemia, ↑ PTH, basal ganglia calcifications, no RTA), TORCH infections (toxoplasma, CMV → periventricular calcifications in neonates, no RTA), tuberous sclerosis (subependymal nodules, no RTA).",
                "Fanconi syndrome (type 2 RTA): bicarbonaturia (FEHCO3 >15%, like type 3), but urine pH <5.5 (can acidify). Glucosuria, phosphaturia, aminoaciduria. No osteopetrosis, no cerebral calcifications.",
                "Vitamin D-resistant rickets (X-linked hypophosphatemic rickets): hypophosphatemia, rickets, bone pain, short stature. Distinguished by normal HCO3 (no acidosis), ↑ FGF23, no osteopetrosis, no cerebral calcifications.",
                "Acetazolamide use: iatrogenic CA inhibition (mimics CA-II deficiency RTA). Medication history. Reversible if stopped. No osteopetrosis, no cerebral calcifications, no genetic mutation."
            ],
            management: {
                acute: [
                    "High-dose alkali therapy: CA-II deficiency has mixed proximal + distal RTA → requires very high doses of alkali (higher than type 2 alone). Sodium bicarbonate 5-20 mEq/kg/day PO divided QID or potassium citrate 5-20 mEq/kg/day PO divided TID-QID. Start at 5-10 mEq/kg/day, titrate q1-2 weeks based on HCO3. Goal HCO3 >22 mEq/L (difficult to achieve, often plateau at 18-20). Side effects: volume overload (massive Na load), hypernatremia, GI upset.",
                    "Potassium supplementation: potassium citrate preferred (treats acidosis + hypokalemia + ↑ urine citrate). If using sodium bicarbonate, add potassium chloride 2-4 mEq/kg/day PO divided BID. Goal K+ >3.5 mEq/L.",
                    "Thiazide diuretics (paradoxical use to ↓ alkali requirement, similar to type 2 RTA): hydrochlorothiazide 1-2 mg/kg/day PO daily. Induces volume contraction → ↑ proximal HCO3 reabsorption → ↓ alkali requirement. Monitor K+ (thiazide worsens hypokalemia), adjust K+ supplementation.",
                    "Phosphate supplementation (if hypophosphatemia from Fanconi-like features): Neutra-Phos 30-60 mg/kg/day elemental phosphorus PO divided TID-QID. Goal phosphate >3 mg/dL. Monitor Ca×PO4 product (<55).",
                    "Vitamin D supplementation (if deficiency or rickets): ergocalciferol 50,000 IU weekly x 8 weeks (if 25-OH vitamin D <20 ng/mL), then monthly. Calcitriol 0.25-1 mcg/day PO (if active rickets). Monitor Ca, phosphate (avoid hypercalcemia → worsens nephrocalcinosis).",
                    "Treat pancytopenia: Transfusions (PRBCs if Hgb <7 g/dL symptomatic, platelets if <10,000 or bleeding). Growth factors: epoetin alfa (if anemia, Hgb <10 g/dL), G-CSF (if neutropenia <500, recurrent infections). Bone marrow transplant (hematopoietic stem cell transplant, HSCT): curative for osteopetrosis (replaces defective osteoclasts with donor-derived functional osteoclasts). Indications: severe pancytopenia, progressive vision loss (optic nerve decompression), recurrent infections. Timing: early childhood (best outcomes if age <2 years, before irreversible optic nerve damage). Success rate: 70-80% engraftment, reverses bone marrow failure, halts vision loss (if early), improves bone density (partially). Does NOT cure RTA or cerebral calcifications (need lifelong alkali therapy). Complications: graft-vs-host disease (GVHD), infections, graft failure.",
                    "Optic nerve decompression (neurosurgical): if progressive vision loss from optic nerve compression. Surgical decompression of optic canal (widen foramen to relieve pressure on optic nerve). Timing: URGENT if acute vision loss. Controversial efficacy (limited by dense skull bone, reossification). HSCT preferred (prevents progression).",
                    "Monitor labs: BMP, K+, phosphate weekly initially (titrate alkali/K+/phosphate doses). Once stable, q1 month x 3 months, then q3 months. CBC q1 month (monitor pancytopenia, transfusion needs). Goal: HCO3 >20 mEq/L, K+ >3.5, phosphate >3, Hgb >8 g/dL.",
                    "Genetic counseling: AR inheritance, both parents carriers (heterozygotes). 25% recurrence risk in future pregnancies. Prenatal testing available (amniocentesis/CVS → CA2 sequencing). Sibling screening (genetic testing, RTA labs, bone imaging)."
                ],
                chronic: [
                    "Lifelong high-dose alkali therapy: sodium bicarbonate or potassium citrate 5-20 mEq/kg/day PO divided QID. Compliance difficult (large pill burden, QID dosing, GI side effects). HCO3 often plateaus at 18-20 mEq/L (incomplete correction due to ongoing proximal + distal HCO3 wasting). Adjust dose based on growth (↑ dose during growth spurts in children).",
                    "Thiazide diuretics (long-term use): HCTZ 1-2 mg/kg/day PO daily. Allows ↓ alkali dose by 30-50%. Monitor K+ (hypokalemia from thiazide + RTA), uric acid (hyperuricemia/gout), glucose (hyperglycemia).",
                    "Phosphate + vitamin D (long-term): Neutra-Phos 30-60 mg/kg/day + calcitriol 0.25-1 mcg/day (if rickets/osteomalacia persists). Monitor q3-6 months. Rickets may improve (slowly), but osteopetrosis persists (bone density remains high).",
                    "Bone marrow transplant (if not done in infancy): consider if severe pancytopenia, progressive vision loss, recurrent infections. Best outcomes if age <5 years. Post-HSCT: monitor engraftment (CBC, chimerism), GVHD (rash, diarrhea, LFTs), infections (PJP prophylaxis, CMV monitoring). Continue lifelong alkali therapy (HSCT does NOT cure RTA).",
                    "Ophthalmology (long-term monitoring): visual acuity, visual fields, fundoscopy q6-12 months. Monitor for progressive optic atrophy (irreversible if untreated). If vision loss progressing despite HSCT → consider optic nerve decompression (salvage, limited efficacy).",
                    "Audiology: audiometry q12 months (monitor for progressive sensorineural hearing loss from CN VIII compression). Hearing aids if needed. Cochlear implants if profound deafness.",
                    "Neurodevelopmental monitoring: developmental assessments q6-12 months (PT, OT, speech therapy). Special education if intellectual disability. Seizure control (anticonvulsants if seizures from cerebral calcifications). Behavioral interventions if behavioral problems.",
                    "Nephrolithiasis prevention: hydration (≥2 L fluid/day), urine citrate supplementation (potassium citrate ↑ urine citrate → inhibits Ca stone formation), monitor for stones (annual renal ultrasound). Thiazide diuretics ↓ urinary Ca (if persistent hypercalciuria). Urology if stones (ESWL, ureteroscopy).",
                    "Dental care: regular dental exams (q6 months, delayed dentition, dental caries common). Fluoride supplementation. Early orthodontic intervention (malformed teeth).",
                    "Fracture prevention: avoid contact sports (high fracture risk despite dense bones). Calcium 1200 mg/day, vitamin D >30 ng/mL. Orthopedic care if fractures (rodding of long bones if recurrent fractures).",
                    "Growth monitoring: growth charts q3-6 months. Growth hormone therapy (somatropin 0.3 mg/kg/week SC) if persistent growth failure despite RTA correction (off-label, limited data in CA-II deficiency).",
                    "CKD management (if progressive nephrocalcinosis → CKD): ACE inhibitor if proteinuria (lisinopril 0.1-0.6 mg/kg/day PO daily, monitor K+). Treat CKD complications (anemia, CKD-MBD). Dialysis/transplant if ESRD (rare, most patients maintain GFR >30).",
                    "Labs monitoring: BMP, K+, phosphate q3 months. CBC q3 months (post-HSCT: monthly x 1 year, then q3 months). Ca, PTH, alkaline phosphatase, vitamin D annually. Urine Ca/Cr ratio annually. Skeletal survey q2-5 years (monitor osteopetrosis, fractures).",
                    "Patient/family education: lifelong alkali therapy critical (non-compliance → growth failure, bone disease, CKD). Genetic counseling (AR inheritance, prenatal testing available). Support groups (rare disease, psychological support for families)."
                ]
            },
            complications: [
                "Blindness (most devastating): optic nerve compression from skull thickening → progressive optic atrophy → irreversible vision loss. Occurs in 50-70% of patients if untreated. Risk ↑ with age (progressive skull thickening). Prevention: early HSCT (before age 2 years, halts skull thickening, prevents/stabilizes vision loss). Once blind, irreversible (optic nerve decompression rarely effective).",
                "Deafness: sensorineural hearing loss from CN VIII (vestibulocochlear nerve) compression. Occurs in 30-50%. Progressive. Hearing aids, cochlear implants.",
                "Facial palsy: CN VII (facial nerve) compression → facial weakness (unilateral or bilateral). Occurs in 10-20%. Usually permanent.",
                "Pathologic fractures: despite dense bones, bones are brittle (abnormal bone architecture) → fractures from minor trauma. Common sites: long bones (femur, tibia), vertebrae, ribs. Delayed healing. Recurrent fractures → chronic pain, disability.",
                "Pancytopenia complications: Anemia (fatigue, ↓ exercise tolerance, ↓ growth). Thrombocytopenia (bleeding: epistaxis, GI bleed, intracranial hemorrhage if severe). Neutropenia (recurrent infections: pneumonia, sepsis, osteomyelitis). Mortality from infections 10-20% (if severe pancytopenia, no HSCT).",
                "Chronic kidney disease: from nephrocalcinosis (Ca deposition in renal parenchyma) → progressive GFR decline. ESRD rare (<10%, vs 30% in isolated type 1 RTA). If ESRD → dialysis/transplant.",
                "Intellectual disability/developmental delay: mild-moderate in most (70%), severe in 20%. Mechanism: cerebral calcifications (basal ganglia dysfunction), chronic hypoxia (anemia), metabolic derangements (acidosis, hypophosphatemia). Non-progressive (but neurodevelopmental milestones delayed).",
                "Seizures: 10-20% develop seizures (from cerebral calcifications or hypocalcemia). Types: focal (basal ganglia), generalized tonic-clonic. Controlled with anticonvulsants (levetiracetam, valproic acid). Rarely refractory.",
                "Movement disorders: dystonia, choreoathetosis, parkinsonism (from basal ganglia calcifications). Occurs in 10-20%. Usually mild, non-progressive. L-DOPA, baclofen for symptomatic treatment.",
                "Hydrocephalus: rare (<5%), from skull thickening → ↓ CSF resorption at arachnoid granulations. Presents with ↑ ICP (headache, vomiting, papilledema). Requires VP shunt.",
                "Dental problems: delayed tooth eruption, malformed teeth, dental caries, malocclusion. Requires extensive dental work (fillings, extractions, orthodontics).",
                "Short stature: permanent if RTA untreated during growth. Average adult height <5th percentile (140-150 cm). Psychosocial impact. Growth hormone may help (if treated early).",
                "HSCT complications: graft-vs-host disease (acute: rash, diarrhea, LFT elevation; chronic: scleroderma-like skin changes, bronchiolitis obliterans), infections (bacterial, viral [CMV, EBV], fungal [Aspergillus, Candida], PJP), graft failure (5-10%, requires second HSCT or chronic transfusions), veno-occlusive disease (hepatic sinusoidal obstruction syndrome), infertility (from conditioning chemotherapy).",
                "Rickets/osteomalacia: bone pain, deformities (bowing of legs), proximal muscle weakness, pathologic fractures. Superimposed on osteopetrosis (dense but brittle bones + soft bones = complex bone disease). Difficult to treat (requires high-dose phosphate + vitamin D, but risk of hypercalcemia → worsens nephrocalcinosis)."
            ],
            prognosis: "Prognosis variable, depends on severity of pancytopenia, vision loss, and timing of HSCT. Untreated: poor prognosis. Blindness (50-70% by age 10), severe anemia/thrombocytopenia (transfusion-dependent), recurrent infections (10-20% mortality from sepsis), pathologic fractures, growth failure (<5th percentile), intellectual disability (70%). Median survival ~20-30 years (death from infections, intracranial hemorrhage, complications of anemia). With HSCT (before age 2 years): excellent prognosis for hematologic/skeletal features. Reverses pancytopenia (>70% cure rate, transfusion-independent), halts vision loss (if done before optic nerve damage), improves bone density (partially, bone remodeling slow). Lifespan near-normal (>50 years). Complications despite HSCT: RTA persists (lifelong alkali therapy required), cerebral calcifications persist (developmental delay/seizures in 20-30%), vision loss if HSCT delayed (irreversible), hearing loss progressive (30-50% need hearing aids), fractures (less common post-HSCT but still occur). Vision: if HSCT before age 2 years → 70-80% retain vision. If HSCT after age 5 years → 50% already blind, no improvement. Optic nerve decompression (salvage): limited efficacy (20-30% stabilize vision, rarely improves). Growth: with aggressive alkali therapy + phosphate/vitamin D → catch-up growth possible (final height 5th-25th percentile). Without treatment → severe short stature (<5th percentile). Intellectual disability: non-progressive, but 70% have mild-moderate disability (special education needs). Key message: Early HSCT (before age 2) = best prognosis (prevents blindness, cures pancytopenia). Delayed HSCT or no HSCT → poor prognosis (blindness, transfusion-dependent, infections). RTA requires lifelong management regardless of HSCT. Rare disease, multidisciplinary care (nephrology, hematology, ophthalmology, neurology, genetics) essential.",
            clinicalPearls: [
                "Type 3 RTA (CA-II deficiency) = classic triad: RTA (mixed proximal + distal) + osteopetrosis (dense bones) + cerebral calcifications (basal ganglia). Extremely rare (1 in 1 million).",
                "Mixed RTA features: urine pH >5.5 (distal component, cannot acidify) + FEHCO3 >15% (proximal component, bicarbonaturia). Requires very high-dose alkali (5-20 mEq/kg/day, higher than types 1 or 2 alone).",
                "Osteopetrosis = \"marble bone disease\". Dense bones on X-ray (bone-in-bone, rugger jersey spine, Erlenmeyer flask deformity). BUT bones are brittle → pathologic fractures. Narrow marrow cavity → pancytopenia (anemia, thrombocytopenia, neutropenia).",
                "Blindness = most devastating complication. Optic nerve compression from skull thickening → progressive optic atrophy → irreversible vision loss (50-70% if untreated). Prevention: early HSCT (before age 2 years).",
                "Bone marrow transplant (HSCT) = curative for osteopetrosis (reverses pancytopenia, halts vision loss). Does NOT cure RTA or cerebral calcifications (lifelong alkali therapy still required). Best outcomes if age <2 years (before irreversible optic nerve damage).",
                "Carbonic anhydrase II (CA-II): enzyme present in proximal tubule (HCO3 reabsorption), distal tubule (H+ secretion), osteoclasts (bone resorption), brain (CSF pH regulation). CA-II deficiency → RTA (proximal + distal), osteopetrosis (↓ osteoclast function), cerebral calcifications (mechanism unclear).",
                "AR inheritance (CA2 gene, chromosome 8q22). Consanguinity common (North Africa, Middle East, Mediterranean). Both parents heterozygous carriers (asymptomatic). 25% recurrence risk. Prenatal testing available (amniocentesis → CA2 sequencing).",
                "Cerebral calcifications: basal ganglia (bilateral, symmetric), periventricular, thalamus. Appear as hyperdense foci on CT. Associated with developmental delay (70% mild-moderate intellectual disability), seizures (10-20%), movement disorders (dystonia, choreoathetosis).",
                "Diagnosis: clinical triad (RTA + osteopetrosis + cerebral calcifications) + genetic testing (CA2 sequencing). RBC CA-II enzyme assay (<10% of normal, if available). Bone X-rays (diffuse osteosclerosis). Brain CT (basal ganglia calcifications).",
                "Historical note: \"Type 3 RTA\" originally described transient mixed RTA in infants (1960s-1970s). Now recognized as severe type 1 RTA that improves with age (not a separate entity). Modern use of \"type 3\" = CA-II deficiency only (true mixed RTA).",
                "Acetazolamide (Diamox) = carbonic anhydrase inhibitor → mimics CA-II deficiency RTA (proximal + distal features). Used for glaucoma, altitude sickness, pseudotumor cerebri. Iatrogenic RTA reversible if stopped. No osteopetrosis or cerebral calcifications.",
                "Pancytopenia management: transfusions (PRBCs if Hgb <7, platelets if <10,000), growth factors (EPO, G-CSF), HSCT (definitive cure). Without HSCT → transfusion-dependent, recurrent infections (10-20% mortality from sepsis).",
                "Fracture risk: pathologic fractures common despite dense bones (brittle, abnormal architecture). Avoid contact sports. Orthopedic care if recurrent fractures (intramedullary rodding of long bones).",
                "Nephrocalcinosis: similar to type 1 RTA (alkaline urine + hypercalciuria → Ca phosphate deposition). Monitor with annual renal ultrasound. Thiazide diuretics ↓ urinary Ca. Hydration + citrate supplementation → prevent stones.",
                "Growth failure: multifactorial (acidosis → ↓ GH secretion, hypophosphatemia → rickets, chronic anemia → ↓ oxygen delivery, bone disease → ↓ linear growth). Aggressive alkali therapy + phosphate/vitamin D → catch-up growth possible. Growth hormone (off-label) if persistent short stature.",
                "Thiazide diuretics (paradoxical use): induce volume contraction → ↑ proximal HCO3 reabsorption → ↓ alkali requirement (similar to type 2 RTA). HCTZ 1-2 mg/kg/day → ↓ alkali dose by 30-50%. Monitor K+ (worsens hypokalemia).",
                "Differential diagnosis: isolated osteopetrosis (no RTA, no cerebral calcifications). Fahr disease (basal ganglia calcifications, no RTA, no osteopetrosis). Distal RTA + osteopetrosis = CA-II deficiency (only cause of this combination).",
                "Optic nerve decompression (neurosurgery): widening optic canal to relieve optic nerve compression. Controversial efficacy (reossification common, dense skull difficult to decompress). HSCT preferred (prevents progression). Decompression = salvage if HSCT not available or vision loss acute.",
                "Supportive care: multidisciplinary (nephrology, hematology, ophthalmology, neurology, genetics, orthopedics, dentistry). Developmental support (PT, OT, speech therapy). Special education (70% have intellectual disability). Genetic counseling. Support groups (rare disease).",
                "Key to prognosis: early HSCT (before age 2 years) → prevents blindness (70-80% retain vision), cures pancytopenia, improves bone density. Delayed/no HSCT → blindness (50-70%), transfusion-dependent, recurrent infections. RTA requires lifelong alkali therapy regardless of HSCT."
            ]
        }
    },
    {
        id: "fanconi-syndrome",
        name: "Fanconi Syndrome",
        system: "renal",
        categories: ["tubulointerstitial-diseases"],
        symptoms: ["fatigue", "weakness", "polyuria", "polydipsia", "bone-pain", "growth-failure", "muscle-weakness"],
        tags: ["fanconi", "proximal-tubule-dysfunction", "glucosuria", "phosphaturia", "aminoaciduria", "metabolic-acidosis", "rickets", "osteomalacia"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Fanconi syndrome = generalized proximal tubular dysfunction causing multiple reabsorption defects (glucose, phosphate, bicarbonate, amino acids, uric acid, low-MW proteins). Results in euglycemic glucosuria, hypophosphatemia, proximal RTA (type 2), aminoaciduria, hypouricemia. Consequences: rickets/osteomalacia (phosphate wasting), growth failure, metabolic acidosis. Hereditary (cystinosis most common, Wilson disease, Dent disease, Lowe syndrome) or acquired (multiple myeloma, drugs: tenofovir/ifosfamide, heavy metals). Distinguished from isolated proximal RTA by multiple solute defects.",
            pathophysiology: "Proximal tubule normally reabsorbs 60-80% of filtered load: glucose (100% via SGLT2/SGLT1), phosphate (80-90% via NaPi-IIa/IIc), HCO3 (80-90% via NHE3/NBC1), amino acids (95-99% via multiple transporters), uric acid (URAT1), low-MW proteins (megalin/cubilin endocytosis). Fanconi syndrome: generalized transporter dysfunction → all solutes spill into urine. Mechanisms: (1) Genetic: mutations in specific transporters (SGLT2, NaPi-IIa) or global proximal tubule damage (cystinosis → lysosomal cystine crystals, Wilson → copper toxicity, Dent/Lowe → endosomal trafficking defects). (2) Acquired: direct tubular toxicity (tenofovir mitochondrial damage, ifosfamide, cisplatin, aminoglycosides), light chain deposition (myeloma κ/λ chains → tubular obstruction + toxicity), heavy metals (lead, cadmium → enzyme inhibition). Consequences: Phosphaturia → hypophosphatemia → rickets (children, impaired mineralization at growth plates → bowing, widened metaphyses) or osteomalacia (adults, undermineralized osteoid → bone pain, fractures). Bicarbonaturia → proximal RTA → non-AG metabolic acidosis (HCO3 12-18) → further bone buffering worsens bone disease. Glucosuria → osmotic diuresis → polyuria/polydipsia. Aminoaciduria → usually minimal clinical impact (adequate dietary intake compensates). Hypouricemia (uric acid <2 mg/dL) → usually asymptomatic. Growth failure (children): acidosis + hypophosphatemia + calorie loss (glucosuria) → poor growth.",
            epidemiology: "Prevalence: rare (<1 per 100,000). Age: hereditary causes present in infancy/childhood (cystinosis most common, 1 in 100,000-200,000). Acquired causes: adults (myeloma >60 years, tenofovir in HIV patients, ifosfamide in cancer patients). Sex: male predominance for X-linked disorders (Dent disease, Lowe syndrome affect males only). Geography: cystinosis more common in Brittany (France), Iceland (founder effect). Tenofovir: 2-5% of HIV patients develop Fanconi syndrome (dose-dependent, risk ↑ with TDF vs TAF formulation).",
            riskFactors: [
                "Cystinosis (AR, CTNS gene): most common hereditary cause. Lysosomal cystine accumulation → proximal tubular crystals → dysfunction. Presents infancy (6-12 months) with failure to thrive, vomiting, polyuria, photophobia (corneal cystine crystals, blonde hair). Fanconi syndrome → ESRD by age 10 if untreated. Diagnosis: ↑ WBC cystine (>2 nmol half-cystine/mg protein), genetic testing. Treatment: cysteamine (depletes cystine, slows progression).",
                "Wilson disease (AR, ATP7B gene): copper accumulation in liver + kidney + brain. Hepatic copper overflow → proximal tubular toxicity → Fanconi syndrome. Age 5-40 years. Features: KF rings (corneal copper), liver disease (hepatitis, cirrhosis), neuropsychiatric (tremor, dysarthria, personality changes), hemolytic anemia. Labs: ↓ ceruloplasmin (<20 mg/dL), ↑ urine copper (>100 μg/day). Treatment: chelators (penicillamine, trientine).",
                "Dent disease (X-linked, CLCN5 or OCRL1 genes): Fanconi syndrome + hypercalciuria + nephrolithiasis + CKD. Males only (females carriers). Presents childhood with stones, proteinuria (low-MW). Progressive CKD → ESRD by age 30-50. No specific treatment (supportive, manage stones/CKD).",
                "Lowe syndrome (X-linked, OCRL1 gene): Fanconi + congenital cataracts + intellectual disability + hypotonia. Males only. Diagnosis at birth (cataracts). Severe disability, death by age 30-40. Supportive care only.",
                "Galactosemia (AR, GALT gene): galactose-1-phosphate accumulation → Fanconi (reversible if galactose eliminated). Infants with jaundice, hepatomegaly, cataracts, intellectual disability if untreated. Treatment: galactose-free diet.",
                "Hereditary fructose intolerance (AR, ALDOB gene): fructose-1-phosphate accumulation → acute Fanconi syndrome upon fructose ingestion. Vomiting, hypoglycemia, hepatomegaly. Avoidance of fructose/sucrose prevents symptoms.",
                "Tyrosinemia type 1 (AR, FAH gene): fumarylacetoacetate → Fanconi + liver failure + hepatocellular carcinoma. Presents infancy. Treatment: nitisinone + low-protein diet.",
                "Mitochondrial cytopathies: MELAS, Kearns-Sayre, Pearson syndrome. Fanconi + multiorgan dysfunction (myopathy, neuropathy, encephalopathy). Maternal inheritance or spontaneous mutations. No specific treatment.",
                "Multiple myeloma: most common acquired cause in adults >60 years. Monoclonal light chains (esp. κ) toxic to proximal tubule → Fanconi + AKI. Suspect if anemia, bone pain, hypercalcemia, ↑ protein gap. Diagnosis: SPEP/UPEP (M-spike, Bence Jones proteinuria), bone marrow biopsy (>10% plasma cells). Treatment: chemotherapy (bortezomib, lenalidomide), autologous stem cell transplant.",
                "Medications: Tenofovir disoproxil fumarate (TDF, antiretroviral for HIV/HBV, most common drug cause, 2-5% develop Fanconi, dose-dependent mitochondrial toxicity, reversible if switched to TAF formulation). Ifosfamide (chemotherapy, dose-dependent, cumulative >60 g/m² → 30-50% risk, often irreversible Fanconi). Cisplatin (chemotherapy, Fanconi + hypomagnesemia, dose-dependent). Aminoglycosides (gentamicin, tobramycin, rare Fanconi). Valproic acid (anticonvulsant, Fanconi in children, rare). Expired tetracyclines (degraded → toxic metabolites, historical). Adefovir (antiretroviral, Fanconi at high doses). Topiramate (carbonic anhydrase inhibitor, proximal RTA ± Fanconi).",
                "Heavy metals: Lead (paint chips, contaminated water, Fanconi + anemia + abdominal pain + encephalopathy, basophilic stippling on blood smear, ↑ blood lead >10 μg/dL, treatment: chelation with EDTA/succimer). Cadmium (industrial/smoking, Itai-itai disease, Fanconi + osteomalacia, urine cadmium elevated). Mercury (occupational, Fanconi rare). Uranium (occupational, Fanconi).",
                "Amyloidosis (AL, light chain): amyloid deposition in proximal tubule → Fanconi + nephrotic syndrome. Associated with myeloma/MGUS. Diagnosis: Congo red staining (apple-green birefringence), fat pad/rectal biopsy. Treatment: treat underlying plasma cell disorder.",
                "Sjögren syndrome: autoimmune (anti-Ro/La antibodies). More commonly causes distal RTA, but can cause Fanconi (rare). Dry eyes/mouth, parotid enlargement. Treatment: immunosuppression."
            ],
            presentation: "Infants/children: failure to thrive, poor weight gain, vomiting, polyuria/polydipsia (osmotic diuresis), dehydration. Rickets: bowing of legs (genu varum/valgum), widened wrists/ankles, rachitic rosary (beaded costochondral junctions), frontal bossing, delayed walking/dentition, bone pain. Growth failure (short stature for age). Photophobia + blonde hair (cystinosis, corneal crystals). Adults: bone pain (osteomalacia), proximal muscle weakness (difficulty rising from chair, waddling gait), pathologic fractures (hip, spine, ribs). Fatigue, weakness (acidosis + hypokalemia). Polyuria (3-5 L/day). Specific features: KF rings + liver disease + tremor (Wilson). Nephrolithiasis + hematuria (Dent). Cataracts + intellectual disability (Lowe). Jaundice + hepatomegaly (galactosemia, tyrosinemia). Anemia + bone pain + hypercalcemia (myeloma). Insidious onset in acquired causes (months-years).",
            physicalExam: [
                "Vital signs: normal BP. Tachycardia if dehydrated (polyuria).",
                "Growth: short stature (children, <5th percentile), failure to thrive (weight <3rd percentile).",
                "HEENT: corneal cystine crystals (cystinosis, require slit-lamp, refractile crystals). KF rings (Wilson, greenish-brown, slit-lamp). Congenital cataracts (Lowe, galactosemia). Conjunctival pallor (anemia from myeloma, cystinosis). Photophobia (cystinosis).",
                "Musculoskeletal: Rickets: bowing of legs, widened wrists/ankles (metaphyseal widening), rachitic rosary (palpable beading along ribs), frontal bossing, Harrison groove (indentation along lower ribs). Osteomalacia: bone tenderness (ribs, hips, spine), proximal muscle weakness, antalgic gait. Pathologic fractures (vertebral compression, hip).",
                "Neurologic: hypotonia (infants with Lowe, cystinosis). Muscle weakness (proximal > distal, from hypokalemia + osteomalacia). Tremor, dysarthria, rigidity (Wilson). Intellectual disability (Lowe, galactosemia). Peripheral neuropathy (mitochondrial cytopathies).",
                "Abdomen: hepatosplenomegaly (cystinosis, Wilson, galactosemia, tyrosinemia, amyloidosis). Non-tender unless acute hepatitis (Wilson, galactosemia).",
                "Skin: blonde/fair hair (cystinosis, tyrosine wasting). Jaundice (Wilson acute liver failure, galactosemia, tyrosinemia). Lead lines (blue-black gingival discoloration, lead poisoning).",
                "Extremities: no edema (unless nephrotic from amyloidosis). Muscle wasting (chronic illness)."
            ],
            diagnosticCriteria: "Fanconi syndrome diagnosis requires ≥2 of the following proximal tubular defects: (1) Euglycemic glucosuria: urine glucose positive (≥2+ on dipstick) despite normal fasting blood glucose (<100 mg/dL). (2) Hypophosphatemia with phosphaturia: serum phosphate <2.5 mg/dL, ↑ urine phosphate, TmP/GFR <2.5 mg/dL (normal 2.5-4.2). (3) Proximal RTA: non-AG metabolic acidosis (HCO3 12-18 mEq/L, pH 7.30-7.35), urine pH <5.5, FEHCO3 >15% when HCO3 normalized. (4) Generalized aminoaciduria: ↑ neutral amino acids in urine (glycine, alanine, serine) on chromatography. (5) Hypouricemia: serum uric acid <2 mg/dL with ↑ fractional excretion of uric acid (FEUA >10%, normal <5%). (6) Low-MW proteinuria: ↑ β2-microglobulin (>300 μg/L), retinol-binding protein, α1-microglobulin on urine protein electrophoresis. Gold standard: all 6 defects present (complete Fanconi). Incomplete Fanconi: 2-5 defects. Isolated defects (e.g., only glucosuria) ≠ Fanconi syndrome.",
            labs: [
                "BMP: non-AG metabolic acidosis (pH 7.30-7.35, HCO3 12-18 mEq/L, anion gap <12, Cl 100-115). Hypokalemia (K+ 2.5-3.5 mEq/L). Hypophosphatemia (phosphate <2.5 mg/dL). Hypouricemia (uric acid <2 mg/dL). Normal glucose (fasting <100 mg/dL). Cr variable (normal early, ↑ if CKD from cystinosis/Dent/myeloma kidney).",
                "Urinalysis: pH <5.5 (proximal RTA, can acidify once HCO3 low). Glucose 2-4+ (despite euglycemia). Protein trace-1+ (low-MW proteins, dipstick doesn't detect β2-microglobulin). Hyaline casts. Blood trace (if Dent disease, stones).",
                "Urine anion gap: positive (+10 to +30, ↓ NH4+ excretion in chronic acidosis).",
                "FEHCO3: >15-20% when serum HCO3 normalized to >20 mEq/L via NaHCO3 infusion (diagnostic for proximal RTA). Normal <5%.",
                "24-hour urine: phosphate elevated (>1 g/day), glucose elevated (>500 mg/day), amino acids elevated (generalized aminoaciduria). Calcium variable (↑ in Dent disease, hypercalciuria >4 mg/kg/day).",
                "TmP/GFR: <2.5 mg/dL (↓ tubular max for phosphate, normal 2.5-4.2). Formula: TmP/GFR = serum phosphate - (urine phosphate × serum Cr / urine Cr).",
                "Fractional excretion of uric acid (FEUA): >10-15% (normal <5%). FEUA = (urine uric acid × plasma Cr) / (plasma uric acid × urine Cr) × 100.",
                "Urine protein electrophoresis: ↑ low-MW proteins (β2-microglobulin >300 μg/L, retinol-binding protein, α1-microglobulin). Distinguished from glomerular proteinuria (albumin predominates).",
                "Urine amino acid chromatography: generalized neutral aminoaciduria (↑ glycine, alanine, serine, threonine, histidine). Distinguished from specific aminoacidurias (cystinuria → only cystine, Hartnup → only neutral amino acids without acidosis).",
                "Serum calcium, PTH: Ca normal to low-normal, PTH elevated (secondary hyperparathyroidism from hypophosphatemia + acidosis). 25-OH vitamin D often low (<20 ng/mL). 1,25-OH vitamin D low-normal (proximal tubule dysfunction impairs 1α-hydroxylase).",
                "Alkaline phosphatase: elevated (↑ bone turnover from rickets/osteomalacia + secondary hyperparathyroidism, often >500 U/L).",
                "Cause-specific labs:",
                "  - Cystinosis: WBC cystine >2 nmol half-cystine/mg protein (diagnostic). Genetic testing (CTNS gene). Slit-lamp (corneal crystals).",
                "  - Wilson: ↓ ceruloplasmin (<20 mg/dL), ↑ 24h urine copper (>100 μg/day), ↑ liver copper on biopsy. KF rings on slit-lamp.",
                "  - Myeloma: SPEP/UPEP (M-spike, Bence Jones proteinuria κ or λ), ↑ Ca (hypercalcemia), ↑ protein gap (total protein - albumin >4 g/dL), anemia (Hgb <10), ↑ Cr (myeloma kidney). Bone marrow biopsy (>10% plasma cells).",
                "  - Lead: blood lead >10 μg/dL (normal <5), basophilic stippling on blood smear, ↑ free erythrocyte protoporphyrin. X-ray long bones (lead lines at metaphyses).",
                "  - Genetic testing: CTNS (cystinosis), ATP7B (Wilson), CLCN5/OCRL1 (Dent/Lowe), GALT (galactosemia), ALDOB (HFI), FAH (tyrosinemia type 1)."
            ],
            imaging: [
                "Renal ultrasound: usually normal size early. Increased echogenicity (cystinosis, crystal deposition). Nephrolithiasis (Dent disease, Ca oxalate stones). Small kidneys (advanced cystinosis, Dent → CKD). No nephrocalcinosis (unlike distal RTA).",
                "Skeletal X-rays: Rickets (children): metaphyseal widening/fraying (wrists, knees, ankles), cupping (concave metaphysis), bowing of long bones (femur, tibia, genu varum/valgum), delayed epiphyseal closure, rachitic rosary (costochondral beading), Harrison groove (indentation along lower ribs from diaphragm pull). Osteomalacia (adults): Looser zones (pseudofractures, radiolucent lines perpendicular to cortex in femoral neck, ribs, scapula, pubic rami, pathognomonic), osteopenia, pathologic fractures, codfish vertebrae (biconcave vertebral bodies from compression). Lead poisoning: dense metaphyseal bands (lead lines) in long bones (knees, wrists).",
                "DEXA scan: osteopenia/osteoporosis (T-score <-2.5, Z-score <-2 in children). Severe in Fanconi (acidosis + hypophosphatemia + vitamin D deficiency).",
                "Slit-lamp ophthalmologic exam: corneal cystine crystals (cystinosis, refractile crystals in cornea, pathognomonic, present by age 1 year). KF rings (Wilson, greenish-brown rings at corneal limbus, 95% in neurologic Wilson). Cataracts (Lowe, galactosemia).",
                "Bone marrow biopsy (if myeloma suspected): >10% clonal plasma cells (diagnostic of myeloma). Serum free light chains (κ/λ ratio abnormal).",
                "Skeletal survey (myeloma): lytic lesions (punched-out lesions in skull, vertebral compression fractures, pathologic fractures). Bone scan negative (lytic lesions don't take up tracer).",
                "Liver biopsy: copper deposition (Wilson, >250 μg/g dry weight, normal <50). Cirrhosis, bridging fibrosis.",
                "Brain MRI: basal ganglia T2 hyperintensity (Wilson, copper deposition in putamen, caudate). Cerebral atrophy (Lowe)."
            ],
            differentialDiagnosis: [
                "Isolated proximal RTA (type 2): only bicarbonaturia (non-AG acidosis + hypokalemia), no glucosuria/phosphaturia/aminoaciduria. Rare as isolated entity (most proximal RTA is part of Fanconi). Causes: carbonic anhydrase inhibitors (acetazolamide, topiramate), hereditary (SLC4A4, CA-II deficiency). Treatment: high-dose alkali therapy.",
                "Diabetes mellitus: glucosuria (similar to Fanconi). Distinguished by hyperglycemia (fasting glucose >126 mg/dL, HbA1c >6.5%) vs euglycemia in Fanconi. No acidosis (unless DKA), no phosphaturia, no aminoaciduria. Polyuria from osmotic diuresis.",
                "Primary hyperparathyroidism: hypophosphatemia (↑ PTH → ↑ phosphate wasting). Distinguished by hypercalcemia (Ca >10.5 mg/dL, often >11) vs normal Ca in Fanconi. ↑ PTH (primary, >100 pg/mL, suppressed PTH with hypercalcemia) vs secondary ↑ PTH in Fanconi (from hypophosphatemia, normal/low Ca). No acidosis, no glucosuria, no aminoaciduria.",
                "X-linked hypophosphatemic rickets (XLH): hypophosphatemia, rickets, phosphaturia. Distinguished by FGF23-mediated mechanism (↑ FGF23 → ↓ renal phosphate reabsorption + ↓ calcitriol synthesis). Normal HCO3 (no acidosis), no glucosuria, no aminoaciduria. Bowing legs out of proportion to biochemical severity. Family history (X-linked dominant). Treatment: phosphate + calcitriol.",
                "Vitamin D deficiency rickets/osteomalacia: hypophosphatemia, rickets/osteomalacia. Distinguished by ↓ 25-OH vitamin D (<20 ng/mL), ↓ Ca (mild, 8-9 mg/dL), ↑ PTH, ↑ alk phos. No acidosis, no glucosuria, no aminoaciduria. Responds to vitamin D supplementation (ergocalciferol 50,000 IU weekly).",
                "Tumor-induced osteomalacia (TIO): hypophosphatemia, osteomalacia from FGF23-secreting tumor (mesenchymal tumors, often benign). Adults, sudden onset bone pain. No acidosis, no glucosuria. ↑ FGF23. Cure with tumor resection.",
                "Cystinuria: aminoaciduria (cystine, lysine, arginine, ornithine only, COAL mnemonic). Distinguished by selective dibasic aminoaciduria vs generalized in Fanconi. Normal phosphate, normal HCO3 (no acidosis). Cystine stones (hexagonal crystals, radiopaque). AR inheritance. Treatment: hydration, urine alkalinization, tiopronin.",
                "Hartnup disease: neutral aminoaciduria (tryptophan, phenylalanine, etc). Distinguished by isolated aminoaciduria vs multiple defects in Fanconi. No acidosis, no glucosuria. Pellagra-like rash (niacin deficiency from ↓ tryptophan absorption). AR. Treatment: high-protein diet, niacin supplementation.",
                "Diarrhea: non-AG acidosis + hypokalemia (mimics proximal RTA component of Fanconi). Distinguished by negative urine anion gap (UAG <0, ↑ NH4+ excretion) vs positive in Fanconi. No glucosuria, no phosphaturia. History of diarrhea.",
                "Distal RTA (type 1): non-AG acidosis + hypokalemia. Distinguished by inability to acidify urine (pH >5.5 always) vs can acidify in Fanconi/proximal RTA (pH <5.5 once HCO3 low). Nephrocalcinosis/stones common in distal RTA, rare in Fanconi. FEHCO3 <5% in distal RTA vs >15% in proximal RTA. No glucosuria, no phosphaturia."
            ],
            management: {
                acute: [
                    "Treat underlying cause (MOST IMPORTANT):",
                    "  - Cystinosis: cysteamine 50-90 mg/kg/day PO divided q6h (depletes lysosomal cystine, delays ESRD onset from age 10 to 20-30 years if started early). Cysteamine eye drops 0.1-0.5% q1h while awake (dissolves corneal crystals, ↓ photophobia). Monitor WBC cystine (<1 nmol half-cystine/mg protein target). Side effects: body odor (sulfur), GI upset, dose-dependent. Compliance critical (q6h dosing challenging).",
                    "  - Wilson disease: D-penicillamine 1-1.5 g/day PO divided BID-TID (copper chelator, first-line) or trientine 1-1.5 g/day PO divided BID-TID (if penicillamine intolerant). Zinc acetate 150 mg elemental zinc daily (maintenance, blocks intestinal copper absorption). Pyridoxine 25-50 mg daily (prevent B6 deficiency from penicillamine). Monitor 24h urine copper (expect ↑ with chelators), ceruloplasmin (expect ↑ with treatment). Liver transplant if fulminant hepatic failure. Fanconi usually resolves with copper depletion (6-12 months).",
                    "  - Multiple myeloma: chemotherapy (bortezomib + lenalidomide + dexamethasone induction → autologous stem cell transplant if eligible). Renal recovery possible if light chain production suppressed. Dialysis if ESRD. Plasmapheresis if acute cast nephropathy.",
                    "  - Tenofovir nephrotoxicity: STOP tenofovir disoproxil fumarate (TDF). Switch to tenofovir alafenamide (TAF, lower renal toxicity, 90% ↓ plasma levels vs TDF) or alternative antiretroviral (abacavir, emtricitabine). Fanconi usually improves/resolves 1-3 months after stopping TDF (earlier if switched to TAF). Monitor Cr, phosphate q1-2 weeks.",
                    "  - Ifosfamide-induced Fanconi: STOP ifosfamide (often irreversible damage if cumulative dose >60 g/m²). Supportive care. Consider alternative chemotherapy. Partial recovery possible if caught early.",
                    "  - Lead poisoning: chelation therapy. Succimer (DMSA) 10 mg/kg PO q8h x 5 days, then q12h x 14 days (first-line for children, blood lead >45 μg/dL or symptomatic). EDTA (CaNa2EDTA) 1000 mg/m²/day IV continuous infusion x 5 days (severe lead >70 μg/dL or encephalopathy, must give with BAL if lead >100). Remove lead source. Monitor blood lead. Fanconi resolves weeks-months after lead removal.",
                    "  - Galactosemia: eliminate galactose/lactose from diet (no milk, dairy products). Use soy-based formula (infants). Fanconi resolves days-weeks after galactose elimination.",
                    "  - Hereditary fructose intolerance: eliminate fructose, sucrose, sorbitol from diet. Fanconi resolves hours-days after fructose avoidance. Lifelong dietary restriction.",
                    "  - Sjögren syndrome: immunosuppression (hydroxychloroquine 200-400 mg daily, azathioprine, mycophenolate, rituximab for severe). Treat sicca symptoms.",
                    "High-dose alkali therapy (proximal RTA component): Sodium bicarbonate 2-4 g (24-48 mEq) PO QID or potassium citrate 40-80 mEq PO TID-QID. Total 10-20 mEq/kg/day (much higher than distal RTA). Goal HCO3 >20 mEq/L (often plateau at 18-20 despite high doses). Monitor volume overload (weight, BP, edema from Na load). Consider thiazide diuretic (HCTZ 25-50 mg daily) to ↓ alkali requirement via volume contraction → ↑ proximal HCO3 reabsorption.",
                    "Phosphate supplementation: Neutra-Phos or K-Phos Neutral 1-2 packets (250-500 mg elemental phosphorus) PO TID-QID. Goal phosphate >2.5 mg/dL. Monitor for diarrhea (dose-limiting side effect), hyperphosphatemia (if CKD). Avoid if Ca×PO4 product >55 (metastatic calcification risk).",
                    "Potassium supplementation: potassium citrate 40-80 mEq PO daily-BID (preferred, provides both K+ and alkali). Goal K+ >3.5 mEq/L. Higher doses needed than distal RTA (more distal HCO3 delivery → ↑ K+ secretion).",
                    "Vitamin D supplementation: Ergocalciferol (vitamin D2) 50,000 IU weekly x 8 weeks if 25-OH vitamin D <20 ng/mL. Calcitriol (1,25-OH vitamin D) 0.25-0.5 mcg PO daily (active form, bypasses defective proximal 1α-hydroxylation, use for severe rickets/osteomalacia). Monitor Ca (risk hypercalcemia with calcitriol), phosphate. Goal 25-OH vitamin D >30 ng/mL.",
                    "Calcium supplementation (if ↓ Ca or on calcitriol): calcium carbonate 500-1000 mg elemental Ca PO BID-TID with meals. Monitor Ca (goal 8.5-10.5 mg/dL, avoid hypercalcemia).",
                    "Hydration: encourage PO fluids 2-3 L/day (compensate for polyuria). IV fluids (normal saline) if dehydrated (especially children). Monitor urine output, weight."
                ],
                chronic: [
                    "Lifelong alkali therapy: continue sodium bicarbonate or potassium citrate indefinitely (unless Fanconi resolves, e.g., galactosemia after dietary restriction, Wilson after copper depletion, tenofovir after drug cessation). Dose adjust based on serum HCO3 (goal >20 mEq/L). Consider thiazide to ↓ pill burden.",
                    "Lifelong phosphate + vitamin D: continue Neutra-Phos and calcitriol to prevent rickets/osteomalacia progression. Monitor growth (children, height/weight curves), bone density (DEXA q1-2 years), alk phos (goal normalize), PTH (goal <100 pg/mL).",
                    "Monitor for CKD progression: q3-6 month BMP, Cr, GFR. Cystinosis → ESRD by age 20-30 even with cysteamine (delayed from age 10). Dent disease → ESRD by age 30-50. Prepare for dialysis/transplant if GFR <20.",
                    "Cause-specific monitoring:",
                    "  - Cystinosis: WBC cystine q3 months (goal <1 nmol/mg protein), thyroid function q6-12 months (hypothyroidism common by age 10), ophthalmology q6-12 months (retinopathy, corneal crystals), nephrology q3 months. Kidney transplant when ESRD (cysteamine continues to protect other organs post-transplant).",
                    "  - Wilson: 24h urine copper, ceruloplasmin q6-12 months. Neuropsychiatric assessment q6-12 months. Liver ultrasound q6-12 months (cirrhosis surveillance). Lifelong chelation or zinc.",
                    "  - Myeloma: monitor for relapse (SPEP/UPEP q3-6 months, bone marrow biopsy if relapse suspected). Continue chemotherapy per oncology. Monitor renal function (may improve with myeloma control).",
                    "  - Dent disease: monitor for stones (annual renal ultrasound), manage hypercalciuria (HCTZ 25-50 mg daily to ↓ urine Ca, ↑ PO fluids). CKD management (ACE inhibitors if proteinuria, avoid NSAIDs).",
                    "Orthopedic management (severe rickets): surgical correction of bowing (osteotomy) once rickets biochemically controlled (prevent recurrence). Physical therapy (strengthen muscles, prevent contractures). Bracing (ankle-foot orthoses for genu varum).",
                    "Developmental/educational support (Lowe, cystinosis, tyrosinemia with intellectual disability): special education, PT/OT/speech therapy. Monitor developmental milestones.",
                    "Genetic counseling: AR conditions (cystinosis, Wilson, galactosemia, HFI, tyrosinemia) → 25% recurrence risk for future siblings. X-linked (Dent, Lowe) → 50% risk for male offspring of carrier mothers. Prenatal diagnosis available (chorionic villus sampling, amniocentesis for genetic testing).",
                    "Dietary modifications: low-protein diet if tyrosinemia (↓ tyrosine accumulation). Galactose-free diet lifelong if galactosemia. Fructose-free diet lifelong if HFI. High-calorie diet if failure to thrive (glucosuria causes calorie loss)."
                ]
            },
            complications: [
                "Rickets (children): bowing of legs (genu varum/valgum, often severe requiring osteotomy), delayed growth (short stature, <3rd percentile), delayed dentition, enamel hypoplasia (↑ cavities), Harrison groove (permanent chest wall deformity), pathologic fractures (rare in children, more common in adults with osteomalacia).",
                "Osteomalacia (adults): pathologic fractures (hip, spine, ribs, Looser zones), chronic bone pain (debilitating, limits mobility), proximal muscle weakness (waddling gait, wheelchair-dependent if severe), vertebral compression fractures (kyphosis, height loss).",
                "Growth failure (children): short stature (final adult height <5th percentile), delayed puberty (acidosis suppresses GH/IGF-1 axis), failure to thrive (weight <3rd percentile from calorie loss via glucosuria + anorexia from acidosis).",
                "Chronic kidney disease/ESRD: cystinosis (ESRD by age 20-30 despite cysteamine, 100% eventual progression), Dent disease (ESRD by age 30-50, 30-80% progress), myeloma kidney (ESRD if irreversible tubular damage, 20-50% require dialysis). Complications: anemia (↓ EPO), bone disease (CKD-MBD, worsened by pre-existing Fanconi osteomalacia), hyperkalemia, uremia (dialysis/transplant needed).",
                "Nephrolithiasis: Dent disease (Ca oxalate stones, recurrent, 80% of males, hypercalciuria), Wilson disease (uric acid stones from hypouricosuria). Complications: hydronephrosis, UTI, hematuria.",
                "Dehydration: severe polyuria (3-5 L/day osmotic diuresis from glucosuria, bicarbonaturia, phosphaturia) + inadequate PO intake → hypovolemia, AKI (prerenal), hypernatremia. High risk in infants (unable to communicate thirst), elderly (impaired thirst), immobile patients.",
                "Severe metabolic acidosis: pH <7.2 can cause arrhythmias, ↓ myocardial contractility, bone buffering (worsens osteomalacia), impaired growth. Rare with treatment (adequate alkali therapy prevents).",
                "Hypokalemia complications: arrhythmias (prolonged QT, U waves, PVCs, ventricular tachycardia if K+ <2.5), muscle weakness (flaccid paralysis if K+ <2), rhabdomyolysis (rare, if severe hypokalemia + strenuous exercise), nephrogenic DI (polyuria worsened).",
                "Blindness (cystinosis): retinopathy (pigmentary changes, macular degeneration) by age 20-30 years (50-70% if untreated, 20-30% if cysteamine started early). Corneal crystals cause photophobia but not blindness.",
                "Neurologic complications (Wilson): progressive neurodegeneration if untreated (tremor, dysarthria, dysphagia, Parkinsonism, ataxia, seizures), psychiatric (depression, psychosis, personality changes), death by age 30-40 if untreated. Reversible with chelation if caught early.",
                "Liver failure (Wilson, galactosemia, tyrosinemia): fulminant hepatic failure (jaundice, coagulopathy, encephalopathy, death), cirrhosis (portal hypertension, varices, ascites), hepatocellular carcinoma (tyrosinemia type 1, 35% risk by age 20 if untreated).",
                "Intellectual disability (Lowe syndrome, galactosemia, tyrosinemia if untreated): moderate to severe (IQ 30-50 in Lowe, variable in galactosemia/tyrosinemia depending on treatment timing). Seizures (galactosemia, Lowe).",
                "Hypothyroidism (cystinosis): 50-70% by age 10-15 years (cystine accumulation in thyroid). Requires levothyroxine replacement lifelong.",
                "Diabetes mellitus (cystinosis): 20-30% by age 20-30 years (cystine destroys pancreatic β cells). Insulin-dependent. Poor glycemic control common (gastroparesis from neuropathy)."
            ],
            prognosis: "Varies by etiology. Hereditary causes: Cystinosis: ESRD by age 10 if untreated (median survival 9 years), age 20-30 if cysteamine started early (median survival 28 years). Eventual ESRD in 100% despite treatment (cysteamine delays but doesn't prevent). Kidney transplant feasible (5-year graft survival 70-80%, disease doesn't recur in graft, cysteamine continues for other organs). Death by age 30-40 from uremia, infections (if no transplant) or cardiovascular disease (post-transplant). Wilson disease: excellent prognosis if diagnosed/treated before irreversible cirrhosis or neurologic damage. Lifelong chelation required. Liver transplant curative. Fanconi resolves 6-12 months after copper depletion. Normal lifespan if compliant. Dent disease: progressive CKD, ESRD by age 30-50 in 30-80% (variable penetrance). Median age ESRD 40 years. Kidney transplant curative (X-linked, graft from female donor normal). Lowe syndrome: severe disability, death by age 30-40 from infections, seizures, or renal failure. Acquired causes: Myeloma-induced Fanconi: guarded prognosis (5-year survival 40-50% for myeloma). Renal recovery possible if myeloma controlled (20-40% regain renal function). Tenofovir-induced Fanconi: excellent prognosis (resolves 1-3 months after stopping TDF). Switch to TAF or alternative antiretroviral. No long-term sequelae if caught early. Ifosfamide-induced Fanconi: often irreversible (especially if cumulative dose >60 g/m²). CKD may progress. Rickets/osteomalacia prognosis: reversible if treated (phosphate + vitamin D + alkali therapy). Bone deformities may persist (require orthopedic surgery). Growth catch-up possible if treated before epiphyseal closure (age <14-16 years). Adults: bone pain improves 3-6 months, fracture risk ↓ 12-24 months.",
            clinicalPearls: [
                "Fanconi syndrome = multiple proximal tubular defects. Classic triad: euglycemic glucosuria + hypophosphatemia + proximal RTA. Complete Fanconi = all 6 defects (glucose, phosphate, HCO3, amino acids, uric acid, low-MW proteins).",
                "Cystinosis = most common hereditary cause. Blonde hair + photophobia (corneal crystals) + Fanconi syndrome in infant = cystinosis until proven otherwise. Diagnose with WBC cystine (>2 nmol/mg protein), slit-lamp (corneal crystals). Treat with cysteamine immediately (delays ESRD from age 10 to 20-30).",
                "Wilson disease = Fanconi + KF rings + liver disease + neurologic symptoms. Screen with ceruloplasmin (<20 mg/dL), 24h urine copper (>100 μg/day). Treat with penicillamine or trientine. Fanconi reversible with copper depletion (6-12 months).",
                "Tenofovir (TDF) = most common drug cause (2-5% HIV patients). Monitor Cr, phosphate q3-6 months in all patients on TDF. Switch to TAF (↓ renal toxicity) if Fanconi develops. Usually reversible 1-3 months after stopping.",
                "Proximal RTA in Fanconi: urine pH <5.5 (CAN acidify once HCO3 low) vs distal RTA pH >5.5 (CANNOT acidify). FEHCO3 >15% diagnostic (massive bicarbonaturia when HCO3 normalized). Requires high-dose alkali (10-20 mEq/kg/day vs 1-2 for distal RTA).",
                "Rickets vs osteomalacia: same disease, different age. Rickets = children (open growth plates → bowing, metaphyseal widening, rachitic rosary). Osteomalacia = adults (closed plates → bone pain, Looser zones, pathologic fractures). Both from ↓ bone mineralization (hypophosphatemia in Fanconi).",
                "TmP/GFR <2.5 mg/dL = phosphate wasting (diagnostic for Fanconi or other causes of renal phosphate leak like XLH, tumor-induced osteomalacia). Normal 2.5-4.2 mg/dL. Easier than 24h urine phosphate.",
                "Euglycemic glucosuria: urine glucose positive despite normal blood glucose (<100 mg/dL). Fanconi = SGLT2 defect (acquired). Familial renal glucosuria = SGLT2 mutation (isolated, benign, no treatment needed). Diabetes = hyperglycemia (glucose >126 mg/dL → overwhelms SGLT2).",
                "Low-MW proteinuria: β2-microglobulin, retinol-binding protein, α1-microglobulin. Dipstick negative (detects albumin only). Need urine protein electrophoresis. Indicates proximal tubular dysfunction (defective megalin/cubilin endocytosis). Distinguished from glomerular proteinuria (albumin predominates, nephrotic range).",
                "Dent disease = X-linked (males affected, females carriers). Fanconi + hypercalciuria + nephrolithiasis + CKD. Diagnosis: genetic testing (CLCN5, OCRL1 mutations). No specific treatment (manage stones, CKD). ESRD by age 30-50 (30-80%).",
                "Thiazide paradox: thiazides (HCTZ) ↓ alkali requirement in proximal RTA despite ↑ HCO3 loss. Mechanism: volume contraction → ↑ proximal HCO3 reabsorption → ↓ bicarbonaturia → ↓ alkali dose needed (from 10-15 mEq/kg/day to 2-5 mEq/kg/day). Monitor for hypokalemia (exacerbated).",
                "Lead poisoning: Fanconi + microcytic anemia (basophilic stippling) + abdominal pain + constipation + encephalopathy (irritability, seizures). Blood lead >10 μg/dL (normal <5). Chelation with succimer (kids) or EDTA (severe). Remove lead source. Fanconi resolves weeks-months.",
                "Multiple myeloma: most common acquired cause in adults >60. Fanconi from light chain (κ or λ) tubular toxicity. Suspect if anemia + bone pain + hypercalcemia + ↑ protein gap. Diagnose: SPEP/UPEP (M-spike, Bence Jones), bone marrow (>10% plasma cells). Treat myeloma → may reverse Fanconi (20-40% renal recovery)."
            ]
        }
    },
// ELECTROLYTE DISORDERS
{
    id: "hyponatremia",
    name: "Hyponatremia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["nausea", "headache", "confusion", "fatigue", "seizures", "altered-mental-status"],
    tags: ["hyponatremia", "low-sodium", "siadh", "euvolemic", "hypovolemic", "hypervolemic", "cerebral-edema"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum Na <135 mEq/L, most common electrolyte disorder (15-30% hospitalized patients). Reflects water excess relative to Na. Acute (<48h) causes cerebral edema, chronic (>48h) allows brain adaptation.",
        pathophysiology: "Caused by excess ADH (SIADH, volume depletion), excess water intake (polydipsia), impaired free water excretion (thiazides, CKD), or Na loss with hypotonic replacement. Classified by volume status: hypovolemic (GI/renal losses), euvolemic (SIADH most common), hypervolemic (CHF/cirrhosis). Rapid correction (>10-12 mEq/L in 24h) causes osmotic demyelination syndrome.",
        epidemiology: "Prevalence 15-30% hospitalized, 7% elderly. SIADH causes 30-40% of cases. Thiazides cause 10-20% (especially elderly women). Osmotic demyelination rare if corrected appropriately.",
        riskFactors: [
            "Thiazide diuretics (most common drug, impairs free water excretion)",
            "SSRIs (sertraline, fluoxetine → SIADH)",
            "Carbamazepine, vincristine, cyclophosphamide (→ SIADH)",
            "Small cell lung cancer (ectopic ADH production)",
            "Pneumonia, TB, positive-pressure ventilation (↑ ADH)",
            "CNS disorders: meningitis, SAH, TBI, stroke",
            "Postoperative (anesthesia + hypotonic fluids)",
            "Adrenal insufficiency, hypothyroidism",
            "CHF (↓ cardiac output → ↑ ADH)",
            "Cirrhosis (splanchnic vasodilation → ↑ ADH)",
            "Marathon runners (exercise-associated hyponatremia)",
            "Psychogenic polydipsia (>10-15 L/day water intake)"
        ],
        presentation: "Mild (130-134): often asymptomatic. Moderate (125-129): nausea, headache, confusion, lethargy. Severe (<125): seizures, coma, respiratory arrest. Acute hyponatremia: symptoms at higher Na levels due to cerebral edema. Chronic: fewer symptoms (brain adapted with osmolyte loss).",
        physicalExam: [
            "Volume status CRITICAL: hypovolemic (dry mucous membranes, orthostatic hypotension, ↓ skin turgor), euvolemic (normal exam), hypervolemic (edema, ascites, ↑ JVP)",
            "Neurologic: confusion, lethargy, decreased reflexes (mild), seizures, coma (severe)",
            "Signs of underlying cause: hyperpigmentation (Addison), myxedema (hypothyroid), asterixis (liver disease)"
        ],
        diagnosticCriteria: "Serum Na <135 mEq/L. Workup: (1) Assess volume status, (2) Measure urine osmolality (>100 = ↑ ADH, <100 = dilute/polydipsia), (3) Measure urine Na if Uosm >100 (UNa >20 = SIADH/diuretics, UNa <20 = volume depletion/CHF). SIADH criteria: hyponatremia + euvolemia + Uosm >100 + UNa >20 + normal thyroid/adrenal/renal function.",
        labs: [
            "Serum Na <135 mEq/L (severity: mild 130-134, moderate 125-129, severe <125)",
            "Serum osmolality ↓ (<280 mOsm/kg, normal 275-295)",
            "Urine osmolality: >100 mOsm/kg (↑ ADH), <100 (dilute urine, polydipsia)",
            "Urine Na: >20 mEq/L (SIADH, diuretics, salt-wasting), <20 (volume depletion, CHF, cirrhosis)",
            "TSH, AM cortisol (rule out hypothyroid, adrenal insufficiency)",
            "Lipids, protein (rule out pseudohyponatremia if Na unexpectedly low)"
        ],
        imaging: ["CT/MRI head if acute symptomatic (rule out SAH, stroke, mass)", "Chest X-ray if suspect SCLC (SIADH)"],
        differentialDiagnosis: [
            "SIADH (euvolemic, Uosm >100, UNa >20): lung cancer, pneumonia, CNS disease, drugs",
            "Hypovolemic (dry mucous membranes, orthostatic): thiazides, vomiting, diarrhea, adrenal insufficiency",
            "Hypervolemic (edema): CHF, cirrhosis, nephrotic syndrome",
            "Psychogenic polydipsia (Uosm <100, psychiatric history)",
            "Beer potomania (chronic EtOH, low solute diet, Uosm variable)",
            "Hypothyroidism (↓ TSH, ↓ cardiac output → ↑ ADH)",
            "Pseudohyponatremia (hyperlipidemia, hyperproteinemia, no ↓ osmolality)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe symptomatic (seizures, coma, Na <120) = EMERGENCY",
                "Hypertonic saline 3% (100 mL bolus over 10 min, can repeat x2-3) if severe symptoms. Goal: ↑ Na by 4-6 mEq/L acutely to stop seizures",
                "CORRECTION LIMITS: ↑ Na ≤10-12 mEq/L in 24h, ≤18 mEq/L in 48h (prevent osmotic demyelination)",
                "Hypovolemic: normal saline until euvolemic, then restrict fluids",
                "SIADH: fluid restriction (<800-1000 mL/day), salt tabs (1-2g TID), consider tolvaptan if severe",
                "CHF/cirrhosis: fluid restriction, loop diuretics, treat underlying disease",
                "Adrenal insufficiency: hydrocortisone 100 mg IV (Na corrects within hours)",
                "Monitor Na q2-4h during active correction, discontinue hypertonic saline once Na >120 or symptoms resolve"
            ],
            chronic: [
                "Treat underlying cause: stop thiazides, treat hypothyroid/adrenal insufficiency, reduce SSRI dose",
                "SIADH: fluid restriction (<1 L/day), salt tabs 1-2g TID, consider demeclocycline 300-600 mg BID or tolvaptan 15-60 mg daily",
                "CHF: fluid restriction, ACE inhibitors, loop diuretics",
                "Cirrhosis: fluid restriction (<1.5 L/day), spironolactone, consider TIPS if refractory",
                "Monitor Na weekly until stable, then monthly"
            ]
        },
        complications: [
            "Cerebral edema (acute hyponatremia, Na <120): seizures, herniation, death",
            "Osmotic demyelination syndrome (overcorrection >10-12 mEq/L in 24h): quadriparesis, dysphagia, locked-in syndrome, often irreversible",
            "Falls/fractures (chronic hyponatremia, gait instability)",
            "Attention/cognitive deficits (even mild chronic hyponatremia)"
        ],
        prognosis: "Acute severe: mortality 5-10% if untreated, <1% if treated appropriately. Chronic: usually benign if corrected slowly. Osmotic demyelination: 50% mortality or severe disability if occurs. ↑ mortality in hospitalized patients reflects underlying disease severity.",
        clinicalPearls: [
            "Assess volume status FIRST: dry (hypovolemic), normal (euvolemic/SIADH), edema (hypervolemic)",
            "Urine osmolality differentiates: >100 (↑ ADH), <100 (polydipsia). Then check urine Na if Uosm >100",
            "SIADH = euvolemic + Uosm >100 + UNa >20 + normal thyroid/adrenal. Treat with fluid restriction",
            "Correction limits: ≤10-12 mEq/L in 24h, ≤18 mEq/L in 48h. Monitor q2-4h",
            "Severe symptoms (seizures, coma): 3% saline 100 mL bolus, goal ↑ Na 4-6 mEq/L acutely",
            "Thiazides most common drug cause (elderly women, low BMI at highest risk)",
            "Premenopausal women: highest risk cerebral edema (estrogen impairs Na-K-ATPase)",
            "Pseudohyponatremia: hyperlipidemia/hyperproteinemia, normal osmolality, no treatment needed"
        ]
    }
},
{
    id: "hypernatremia",
    name: "Hypernatremia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["confusion", "lethargy", "seizures", "altered-mental-status", "weakness"],
    tags: ["hypernatremia", "high-sodium", "diabetes-insipidus", "dehydration", "hyperosmolality"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum Na >145 mEq/L (normal 135-145 mEq/L). Always indicates water deficit relative to Na (hyperosmolar state). Less common than hyponatremia (occurs in 1-3% hospitalized patients).",
        pathophysiology: "Caused by water loss exceeding Na loss (dehydration, insensible losses, diabetes insipidus) or Na gain (hypertonic saline, salt tablets, mineralocorticoid excess). Hyperosmolality causes water to shift from cells to ECF, leading to cellular dehydration. Brain most vulnerable: rapid correction can cause cerebral edema (water shifts into brain too quickly).",
        epidemiology: "Prevalence 1-3% hospitalized patients, higher in ICU (9%), elderly (impaired thirst), infants (cannot access water). Mortality 40-60% if severe (Na >160 mEq/L). Usually reflects severe underlying illness or inadequate water access.",
        riskFactors: [
            "Diabetes insipidus (central: ↓ ADH production, nephrogenic: renal resistance to ADH)",
            "Elderly (impaired thirst, difficulty accessing water)",
            "Infants (cannot communicate thirst)",
            "Altered mental status, intubated patients (cannot access water)",
            "Diuretics (loop > thiazide for hypernatremia, cause water loss)",
            "GI losses: diarrhea, vomiting (hypotonic fluid loss)",
            "Insensible losses: fever, burns, mechanical ventilation",
            "Osmotic diuresis: hyperglycemia, mannitol, urea",
            "Lithium (causes nephrogenic DI)",
            "Hypercalcemia, hypokalemia (impair ADH response)",
            "Hypertonic saline, sodium bicarbonate infusion",
            "Primary hyperaldosteronism, Cushing syndrome (rare)"
        ],
        presentation: "Severity based on Na level and rapidity. Mild (145-150): often asymptomatic, thirst. Moderate (150-160): lethargy, confusion, irritability, muscle twitching. Severe (>160): seizures, coma, intracerebral hemorrhage (brain shrinkage tears bridging veins).",
        physicalExam: [
            "Volume status: hypovolemic (dry mucous membranes, ↓ skin turgor, orthostatic hypotension, tachycardia), euvolemic (normal exam, diabetes insipidus), hypervolemic (edema, rare)",
            "Neurologic: confusion, lethargy, hyperreflexia, muscle twitching, seizures, coma (severe cases)",
            "Signs of underlying cause: polyuria/polydipsia (DI), fever (insensible losses), diarrhea (GI losses)"
        ],
        diagnosticCriteria: "Serum Na >145 mEq/L. Workup: (1) Assess volume status, (2) Measure urine osmolality: >600-800 mOsm/kg (appropriate renal response to dehydration, extrarenal water loss), <300 (diabetes insipidus). (3) If urine osm <300, perform water deprivation test + desmopressin to differentiate central vs nephrogenic DI.",
        labs: [
            "Serum Na >145 mEq/L (severity: mild 145-150, moderate 150-160, severe >160)",
            "Serum osmolality ↑ (>295 mOsm/kg, normal 275-295)",
            "Urine osmolality: >600-800 (extrarenal water loss, hypovolemia), <300 (diabetes insipidus)",
            "Urine Na: >20 mEq/L (renal losses, diuretics), <20 (extrarenal losses, GI/skin)",
            "BUN/Cr: ↑ BUN/Cr ratio >20 suggests hypovolemia",
            "Glucose (rule out hyperglycemia causing osmotic diuresis)",
            "Calcium, potassium (hypercalcemia/hypokalemia can impair ADH response)"
        ],
        imaging: ["MRI brain if central DI suspected (look for pituitary bright spot loss, tumor, infiltration)", "CT head if altered mental status (rule out hemorrhage, stroke)"],
        differentialDiagnosis: [
            "Hypovolemic (most common): GI losses (diarrhea, vomiting), insensible losses (fever, burns), osmotic diuresis (hyperglycemia)",
            "Euvolemic: central DI (trauma, surgery, tumor, infiltration), nephrogenic DI (lithium, hypercalcemia, hypokalemia)",
            "Hypervolemic (rare): hypertonic saline, sodium bicarbonate, primary hyperaldosteronism, Cushing syndrome",
            "Inadequate water access: elderly, altered mental status, intubated, infants"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY AND VOLUME STATUS: Severe (Na >160) or symptomatic = monitor closely",
                "CORRECTION RATE CRITICAL: ↓ Na by ≤10-12 mEq/L in 24h, ≤18 mEq/L in 48h (prevent cerebral edema from rapid correction)",
                "Hypovolemic: IV normal saline (0.9% NaCl 154 mEq/L) until hemodynamically stable, then switch to hypotonic fluid (0.45% saline or D5W)",
                "Euvolemic (diabetes insipidus): free water (PO or D5W IV), treat underlying cause. Central DI: desmopressin 0.5-2 mcg IV/SQ. Nephrogenic DI: stop offending drug (lithium), correct hypercalcemia/hypokalemia, thiazide + amiloride",
                "Calculate water deficit: Water deficit (L) = 0.6 × body weight (kg) × [(serum Na / 140) - 1]. Replace over 48-72h.",
                "Monitor Na q2-4h during active correction, adjust fluids accordingly"
            ],
            chronic: [
                "Central DI: desmopressin 0.1-0.4 mg PO daily or nasal spray, adjust to urine output",
                "Nephrogenic DI: thiazide diuretics (paradoxically reduce urine output by causing volume depletion → ↑ proximal Na/water reabsorption), low-salt diet, amiloride (if lithium-induced)",
                "Ensure adequate free water access, educate on thirst mechanism",
                "Treat underlying causes: pituitary tumor (surgery, radiation), hypercalcemia, hypokalemia"
            ]
        },
        complications: [
            "Cerebral hemorrhage, subdural hematoma (acute hypernatremia causes brain shrinkage, tears bridging veins)",
            "Seizures, coma (severe hyperosmolality)",
            "Cerebral edema (iatrogenic, from too-rapid correction with hypotonic fluids)",
            "Rhabdomyolysis (severe cases)",
            "Mortality 40-60% if Na >160 mEq/L (reflects severity of underlying illness)"
        ],
        prognosis: "Mortality 40-60% if severe (Na >160), reflects underlying disease severity. Acute hypernatremia in previously healthy (e.g., salt ingestion): good prognosis if corrected appropriately. Chronic hypernatremia in elderly/disabled: poor prognosis due to comorbidities and recurrence risk.",
        clinicalPearls: [
            "Hypernatremia = water deficit (always hyperosmolar). Assess volume status: hypovolemic (GI/insensible losses), euvolemic (DI), hypervolemic (rare, Na overload)",
            "Correction rate: ↓ Na ≤10-12 mEq/L in 24h. Too rapid → cerebral edema",
            "Urine osmolality differentiates: >600-800 (extrarenal losses), <300 (diabetes insipidus)",
            "Central DI: responds to desmopressin. Nephrogenic DI: does not respond to desmopressin",
            "Water deficit formula: 0.6 × weight (kg) × [(Na/140) - 1]. Replace over 48-72h",
            "Elderly/disabled: most vulnerable (impaired thirst, cannot access water). High mortality.",
            "Acute symptomatic: use 0.9% saline initially (less hypotonic than patient), then switch to 0.45% or D5W",
            "Nephrogenic DI paradox: thiazides reduce urine output (cause volume depletion → ↑ proximal reabsorption)"
        ]
    }
},
{
    id: "hypokalemia",
    name: "Hypokalemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["weakness", "fatigue", "muscle-cramps", "palpitations", "constipation"],
    tags: ["hypokalemia", "low-potassium", "arrhythmia", "muscle-weakness", "ekg-changes"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum K <3.5 mEq/L (normal 3.5-5.0 mEq/L). Most common electrolyte abnormality in hospitalized patients (20%). Total body K depletion often more severe than serum level suggests (98% K is intracellular).",
        pathophysiology: "Caused by GI losses (diarrhea, vomiting), renal losses (diuretics, hyperaldosteronism), or transcellular shift (insulin, beta-agonists, alkalosis). K critical for membrane potential: hypokalemia hyperpolarizes cells, impairing muscle/nerve function. Cardiac effects: prolonged repolarization (U waves, ↑ QT), increased automaticity (arrhythmias, especially if on digoxin).",
        epidemiology: "Prevalence 20% hospitalized patients, 10-40% on diuretics. Most common in elderly, CHF patients on loop diuretics, cirrhosis with diuretics. Severe hypokalemia (K <2.5) increases mortality 10-fold in MI patients.",
        riskFactors: [
            "Diuretics: loop (furosemide, impairs K reabsorption in thick ascending limb), thiazides (impairs distal tubule reabsorption)",
            "GI losses: diarrhea (most common), vomiting (loss + metabolic alkalosis → renal K wasting), laxative abuse",
            "Hyperaldosteronism: primary (Conn syndrome, adrenal adenoma), secondary (CHF, cirrhosis, renal artery stenosis)",
            "Renal tubular acidosis Type 1 (distal) or Type 2 (proximal)",
            "Hypomagnesemia (Mg required for K reabsorption, refractory hypokalemia if Mg low)",
            "Medications: insulin (shifts K into cells), beta-2 agonists (albuterol), amphotericin B (tubular toxicity)",
            "Vomiting, NG suction (metabolic alkalosis → renal K wasting)",
            "Bartter syndrome, Gitelman syndrome (genetic tubular defects)",
            "Alkalosis (shifts K into cells)",
            "Poor intake (rare alone, usually with other factors)"
        ],
        presentation: "Severity correlates with K level. Mild (3.0-3.5): often asymptomatic. Moderate (2.5-3.0): muscle weakness (proximal > distal), fatigue, cramps, constipation (ileus), palpitations. Severe (<2.5): flaccid paralysis, respiratory failure, rhabdomyolysis, cardiac arrhythmias.",
        physicalExam: [
            "Neuromuscular: muscle weakness (proximal), hyporeflexia, tetany (if concurrent hypocalcemia/hypomagnesemia)",
            "Cardiac: irregular pulse (PVCs, atrial fibrillation), tachycardia",
            "GI: decreased bowel sounds (ileus), abdominal distension",
            "Volume status: signs of dehydration (vomiting, diarrhea) or volume overload (CHF, cirrhosis on diuretics)"
        ],
        diagnosticCriteria: "Serum K <3.5 mEq/L. Workup: (1) Rule out pseudohypokalemia (rare, leukemia with high WBC count). (2) Check urine K: <15 mEq/day (extrarenal losses, GI), >15 mEq/day (renal losses, diuretics, hyperaldosteronism). (3) Assess acid-base status: metabolic acidosis (RTA, diarrhea) vs alkalosis (vomiting, diuretics). (4) Check Mg (hypokalemia refractory if Mg low).",
        labs: [
            "Serum K <3.5 mEq/L (mild 3.0-3.5, moderate 2.5-3.0, severe <2.5)",
            "Urine K: <15 mEq/day (GI losses), >15 mEq/day (renal losses)",
            "Mg (always check, hypokalemia refractory if Mg <1.5 mg/dL)",
            "ABG/VBG: metabolic alkalosis (vomiting, diuretics, hyperaldosteronism) vs acidosis (diarrhea, RTA)",
            "Aldosterone, renin (if suspect hyperaldosteronism: ↑ aldo, ↓ renin = primary, ↑ aldo, ↑ renin = secondary)",
            "Digoxin level (if on digoxin, hypokalemia predisposes to toxicity)"
        ],
        imaging: ["EKG: U waves (most sensitive), flattened T waves, ST depression, prolonged QT, PVCs. Risk of torsades if QT prolonged.", "CT adrenal if suspect Conn syndrome (adrenal adenoma)"],
        differentialDiagnosis: [
            "GI losses (most common): diarrhea, vomiting, laxative abuse, NG suction",
            "Diuretics: loop (furosemide), thiazides (HCTZ), osmotic (mannitol)",
            "Hyperaldosteronism: primary (Conn syndrome, adrenal adenoma), secondary (CHF, cirrhosis, renal artery stenosis)",
            "RTA Type 1 (distal, urine pH >5.5) or Type 2 (proximal, urine pH <5.5)",
            "Hypomagnesemia (refractory hypokalemia)",
            "Transcellular shift: insulin, beta-2 agonists (albuterol), alkalosis, refeeding syndrome",
            "Bartter/Gitelman syndrome (genetic, present in childhood/young adults)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (K <2.5) or symptomatic (arrhythmias, weakness) = aggressive replacement",
                "Oral replacement preferred if able (safer): K chloride 40-80 mEq PO, can repeat q4-6h. Max 20 mEq/h PO.",
                "IV replacement if severe/symptomatic: 10 mEq/h via peripheral IV (max 10 mEq/h peripheral, 20 mEq/h central line). Rate >20 mEq/h risks cardiac arrest.",
                "ALWAYS replace Mg first if low (hypokalemia refractory without Mg): Mg sulfate 2g IV over 15 min, then 1-2g q4-6h",
                "Monitor K q2-4h during replacement, continuous telemetry if severe",
                "Correct underlying cause: stop diuretics if possible, treat diarrhea, replace losses"
            ],
            chronic: [
                "Oral K supplementation: K chloride 20-40 mEq daily (if on diuretics)",
                "K-sparing diuretics: spironolactone 25-50 mg daily, amiloride 5-10 mg daily (if on loop/thiazide diuretics)",
                "Dietary K: bananas, oranges, potatoes, spinach (difficult to correct by diet alone)",
                "Treat underlying cause: adrenalectomy (Conn syndrome), ACE inhibitor (↓ aldosterone)",
                "Monitor K weekly until stable, then monthly if on diuretics"
            ]
        },
        complications: [
            "Cardiac arrhythmias: PVCs, atrial fibrillation, ventricular tachycardia, torsades de pointes (if QT prolonged). Risk increased 10-fold if on digoxin.",
            "Rhabdomyolysis (severe hypokalemia <2.0, muscle necrosis)",
            "Respiratory failure (respiratory muscle weakness)",
            "Ileus, constipation (smooth muscle dysfunction)",
            "Nephrogenic diabetes insipidus (chronic hypokalemia impairs ADH response)",
            "Sudden cardiac death (K <3.0 in MI patients)"
        ],
        prognosis: "Mild hypokalemia (3.0-3.5): benign if corrected. Moderate (2.5-3.0): increased arrhythmia risk, especially if on digoxin or recent MI. Severe (<2.5): mortality 10-fold higher in MI patients. Chronic hypokalemia: associated with HTN, CKD progression.",
        clinicalPearls: [
            "Urine K differentiates: <15 mEq/day (GI losses), >15 mEq/day (renal losses, diuretics)",
            "ALWAYS check Mg. Hypokalemia refractory if Mg low. Replace Mg first.",
            "EKG: U waves most sensitive. Flattened T, ST depression, prolonged QT → arrhythmias.",
            "Digoxin toxicity risk: hypokalemia displaces digoxin from Na-K-ATPase, ↑ toxicity",
            "IV K replacement: max 10 mEq/h peripheral, 20 mEq/h central. >20 mEq/h → cardiac arrest",
            "K drops 0.3 mEq/L for each 100 mEq total body deficit (approximate)",
            "Transcellular shift causes: insulin (↑ Na-K-ATPase), beta-2 agonists, alkalosis (H+ exits cells, K+ enters)",
            "Refractory hypokalemia: think hypomagnesemia, ongoing losses (diarrhea, NG suction), hyperaldosteronism"
        ]
    }
},
{
    id: "hyperkalemia",
    name: "Hyperkalemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["weakness", "palpitations", "paresthesias", "nausea"],
    tags: ["hyperkalemia", "high-potassium", "arrhythmia", "peaked-t-waves", "cardiac-arrest"],
    severity: "severe",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum K >5.0 mEq/L (normal 3.5-5.0 mEq/L). Severe hyperkalemia (K >6.5) is life-threatening due to cardiac arrest risk. Pseudohyperkalemia (hemolysis, thrombocytosis, leukocytosis) must be ruled out.",
        pathophysiology: "Caused by impaired renal excretion (AKI, CKD, hypoaldosteronism), K load (diet, IV, hemolysis), or transcellular shift (acidosis, insulin deficiency, cell lysis). K depolarizes cell membranes: mild hyperkalemia increases excitability (peaked T waves), severe hyperkalemia reduces excitability (wide QRS, sine wave, asystole). Cardiac arrest can occur at any K >6.5-7.0.",
        epidemiology: "Prevalence 2-3% hospitalized, 10% CKD patients, up to 50% ESRD. Most common in elderly on ACE inhibitors/ARBs + NSAIDs. Mortality 1-5% if severe (K >7.0) despite treatment. Pseudohyperkalemia accounts for 15-30% of cases.",
        riskFactors: [
            "Chronic kidney disease, ESRD (↓ renal K excretion)",
            "Acute kidney injury (↓ GFR → ↓ K excretion)",
            "Medications: ACE inhibitors, ARBs (↓ aldosterone), K-sparing diuretics (spironolactone, amiloride), NSAIDs (↓ renin → ↓ aldosterone), trimethoprim, heparin",
            "Hypoaldosteronism: Addison disease, Type 4 RTA (diabetic nephropathy)",
            "Acidosis (metabolic or respiratory, H+ enters cells, K+ exits)",
            "Insulin deficiency (DKA, ↓ Na-K-ATPase activity)",
            "Cell lysis: rhabdomyolysis, tumor lysis syndrome, massive hemolysis, burns",
            "K load: K supplements, K-rich foods (if CKD), blood transfusions (stored blood releases K)",
            "Pseudohyperkalemia: hemolysis (most common), thrombocytosis, leukocytosis (K released from cells during clotting)"
        ],
        presentation: "Often asymptomatic until severe. Mild (5.0-5.5): asymptomatic. Moderate (5.5-6.5): muscle weakness, paresthesias, nausea. Severe (>6.5): flaccid paralysis, palpitations, cardiac arrest (can occur without warning).",
        physicalExam: [
            "Neuromuscular: muscle weakness (flaccid), hyporeflexia, paresthesias (often ascending from legs)",
            "Cardiac: bradycardia, irregular pulse (PVCs, heart block), cardiac arrest",
            "Volume status: assess for AKI (oliguria) vs ESRD (dialysis patient)",
            "Often normal exam until K >6.5"
        ],
        diagnosticCriteria: "Serum K >5.0 mEq/L. MUST rule out pseudohyperkalemia (repeat non-hemolyzed sample). If true hyperkalemia, assess: (1) EKG immediately (life-threatening if changes present), (2) Renal function (Cr, BUN, eGFR), (3) Acid-base status, (4) Medications (ACE/ARB, K-sparing diuretics, NSAIDs), (5) Urine K (assess renal K excretion).",
        labs: [
            "Serum K >5.0 mEq/L (mild 5.0-5.5, moderate 5.5-6.5, severe >6.5)",
            "RULE OUT pseudohyperkalemia: repeat non-hemolyzed sample, check platelet/WBC count (thrombocytosis >500k, leukocytosis >100k can cause pseudohyperkalemia)",
            "BUN, Cr, eGFR (assess renal function)",
            "ABG/VBG: acidosis (shifts K out of cells), pH <7.2 worsens hyperkalemia",
            "Glucose (rule out DKA, insulin deficiency)",
            "CK (rhabdomyolysis), uric acid, phosphate, LDH (tumor lysis syndrome)",
            "Aldosterone, renin, cortisol (if suspect Addison, hypoaldosteronism)"
        ],
        imaging: ["EKG IMMEDIATELY: peaked T waves (earliest, K 5.5-6.5), prolonged PR, loss of P waves, widened QRS (K 6.5-7.5), sine wave pattern (K >8, pre-arrest), bradycardia, heart block, VF, asystole"],
        differentialDiagnosis: [
            "Pseudohyperkalemia (15-30% of cases): hemolysis (most common), thrombocytosis, leukocytosis, delayed processing, traumatic blood draw",
            "CKD/ESRD (most common true cause, ↓ renal K excretion)",
            "Medications: ACE/ARB + NSAIDs (elderly), K-sparing diuretics, trimethoprim, heparin",
            "Hypoaldosteronism: Addison disease, Type 4 RTA (diabetic nephropathy, elderly)",
            "Acidosis: DKA, lactic acidosis, respiratory acidosis (shifts K out of cells)",
            "Cell lysis: rhabdomyolysis (trauma, statins), tumor lysis syndrome (chemotherapy), massive hemolysis",
            "K load: supplements, salt substitutes (KCl), IV penicillin (K salt), blood transfusions"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (K >6.5) or EKG changes (peaked T, wide QRS) = EMERGENCY",
                "STEP 1 - CARDIAC PROTECTION (if EKG changes): Calcium gluconate 10% 10 mL (1g) IV over 2-3 min. Stabilizes myocardium, no effect on K level. Repeat if EKG changes persist. Lasts 30-60 min.",
                "STEP 2 - SHIFT K INTO CELLS (↓ K by 0.5-1.5 mEq/L): (a) Insulin 10 units IV + dextrose 25g (D50 50 mL) if glucose <250. Monitor glucose q1h for 6h (hypoglycemia risk). (b) Albuterol 10-20 mg nebulized (↓ K by 0.5-1.0). (c) Sodium bicarbonate 50-100 mEq IV (only if acidosis, effect modest).",
                "STEP 3 - REMOVE K FROM BODY: (a) Loop diuretics: furosemide 40-80 mg IV (if eGFR >30). (b) Patiromer 8.4g PO or sodium zirconium cyclosilicate 10g PO (K binders, onset 1-7h, safe alternative to kayexalate). (c) Hemodialysis (if ESRD, severe hyperkalemia unresponsive to above, or AKI with oliguria).",
                "AVOID: Kayexalate (sodium polystyrene sulfonate) - risk of intestinal necrosis, limited efficacy",
                "Monitor K q2-4h, continuous telemetry, stop K supplements/ACE/ARB/NSAIDs"
            ],
            chronic: [
                "Dietary K restriction (<2-3g/day if CKD): avoid bananas, oranges, potatoes, tomatoes, salt substitutes (KCl)",
                "Adjust medications: stop/reduce ACE/ARB/K-sparing diuretics/NSAIDs if possible",
                "Loop diuretics: furosemide 40-80 mg daily (enhances renal K excretion if eGFR >30)",
                "K binders: patiromer 8.4g daily or sodium zirconium cyclosilicate 10g daily (if recurrent hyperkalemia)",
                "Treat underlying cause: fludrocortisone 0.1-0.2 mg daily (if hypoaldosteronism, Type 4 RTA), correct acidosis (NaHCO3 650 mg TID)",
                "Monitor K weekly initially, then monthly once stable"
            ]
        },
        complications: [
            "Cardiac arrest (ventricular fibrillation, asystole, can occur without warning if K >6.5-7.0)",
            "Heart block (prolonged PR, loss of P waves, wide QRS → sine wave → arrest)",
            "Sudden cardiac death (most feared complication)",
            "Muscle weakness, paralysis (can progress to respiratory failure)"
        ],
        prognosis: "Mild hyperkalemia (5.0-5.5): benign if corrected, recurrence common in CKD. Severe (>6.5): mortality 1-5% despite treatment if EKG changes present. Cardiac arrest can occur suddenly without warning. Recurrence common in ESRD (40-50% within 1 year) requiring chronic K binders or dialysis.",
        clinicalPearls: [
            "Rule out pseudohyperkalemia FIRST (hemolysis most common). Repeat non-hemolyzed sample.",
            "EKG IMMEDIATELY if K >6.0. Peaked T waves → wide QRS → sine wave → arrest. Treat if ANY EKG changes.",
            "Cardiac protection: Ca gluconate 1g IV if EKG changes (stabilizes myocardium, no effect on K)",
            "Shift K into cells: Insulin 10 U + D50 (↓ K 0.5-1.5), albuterol 10-20 mg neb (↓ K 0.5-1.0)",
            "Remove K: Furosemide 40-80 mg IV (if eGFR >30), patiromer/ZS-9 (K binders), hemodialysis (ESRD)",
            "AVOID kayexalate (risk of intestinal necrosis, limited efficacy). Use patiromer or ZS-9 instead.",
            "ACE/ARB + NSAIDs = common cause in elderly. Stop both if possible.",
            "K >6.5 with EKG changes = impending cardiac arrest. Act immediately."
        ]
    }
},
{
    id: "hypocalcemia",
    name: "Hypocalcemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["paresthesias", "muscle-cramps", "tetany", "seizures", "confusion"],
    tags: ["hypocalcemia", "low-calcium", "chvostek-sign", "trousseau-sign", "qt-prolongation"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Total serum Ca <8.5 mg/dL or ionized Ca <4.5 mg/dL (normal total 8.5-10.5, ionized 4.5-5.5 mg/dL). Ionized Ca is physiologically active form (50% of total Ca). Severe hypocalcemia (Ca <7.0 mg/dL) can cause life-threatening arrhythmias, laryngospasm, seizures.",
        pathophysiology: "Caused by decreased Ca intake/absorption (vitamin D deficiency), increased Ca loss (hypoparathyroidism, hungry bone syndrome post-parathyroidectomy), or Ca chelation (acute pancreatitis, massive blood transfusions with citrate). PTH and vitamin D regulate Ca: PTH increases bone resorption, renal Ca reabsorption, and activates vitamin D. Vitamin D increases intestinal Ca absorption. Low Ca causes increased neuromuscular excitability (decreased threshold for action potentials).",
        epidemiology: "Prevalence 15-88% hospitalized patients depending on definition. Vitamin D deficiency most common cause outpatient (30-50% general population). Post-thyroidectomy hypoparathyroidism 1-2%. Hungry bone syndrome occurs in 25-50% post-parathyroidectomy if severe hyperparathyroidism pre-op.",
        riskFactors: [
            "Vitamin D deficiency (most common outpatient: inadequate sun exposure, dark skin, malabsorption)",
            "Hypoparathyroidism: post-surgical (thyroidectomy, parathyroidectomy most common), autoimmune (polyglandular syndrome), genetic (DiGeorge syndrome)",
            "CKD (↓ 1,25-vitamin D production, hyperphosphatemia → Ca-PO4 precipitation)",
            "Hypomagnesemia (Mg required for PTH secretion and action, refractory hypocalcemia if Mg low)",
            "Acute pancreatitis (saponification of fat → Ca sequestration)",
            "Massive blood transfusions (citrate binds Ca)",
            "Tumor lysis syndrome (hyperphosphatemia → Ca-PO4 precipitation)",
            "Loop diuretics (furosemide, increase renal Ca excretion)",
            "Medications: bisphosphonates, denosumab, calcitonin, cinacalcet",
            "Hungry bone syndrome (rapid bone Ca uptake post-parathyroidectomy)",
            "Sepsis, critical illness (multifactorial)"
        ],
        presentation: "Severity correlates with Ca level and rapidity of decline. Mild (Ca 7.5-8.5): often asymptomatic or paresthesias (perioral, fingers, toes). Moderate (Ca 7.0-7.5): muscle cramps, tetany (carpopedal spasm), Chvostek sign, Trousseau sign. Severe (Ca <7.0): seizures, laryngospasm (life-threatening), bronchospasm, heart failure, prolonged QT → arrhythmias.",
        physicalExam: [
            "Chvostek sign: tap facial nerve anterior to ear → facial muscle twitching (75% sensitive, 10% false positive in normal)",
            "Trousseau sign: inflate BP cuff above SBP for 3 min → carpopedal spasm (more specific than Chvostek, 94% specific)",
            "Tetany: carpopedal spasm (flexed wrist, extended fingers), muscle cramps",
            "Laryngospasm: stridor, difficulty breathing (medical emergency)",
            "Neurologic: hyperreflexia, confusion, seizures (if severe)",
            "Signs of underlying cause: surgical scar (thyroidectomy), signs of CKD, rickets/osteomalacia (vitamin D deficiency)"
        ],
        diagnosticCriteria: "Total Ca <8.5 mg/dL OR ionized Ca <4.5 mg/dL. ALWAYS check ionized Ca if abnormal total Ca (more accurate, not affected by albumin). Correct total Ca for albumin: Corrected Ca = measured Ca + 0.8 × (4.0 - albumin). Workup: (1) Check PTH, (2) Check vitamin D (25-OH), (3) Check Mg, PO4, (4) Check renal function.",
        labs: [
            "Total Ca <8.5 mg/dL or ionized Ca <4.5 mg/dL (ionized more accurate)",
            "Corrected Ca for albumin: add 0.8 mg/dL for every 1 g/dL albumin below 4.0",
            "PTH: ↑ (vitamin D deficiency, CKD, malabsorption), ↓ (hypoparathyroidism)",
            "25-OH vitamin D: <20 ng/mL (deficiency), 20-30 (insufficiency), >30 (sufficient)",
            "Mg: check ALWAYS (hypomagnesemia causes refractory hypocalcemia)",
            "PO4: ↑ (hypoparathyroidism, CKD, tumor lysis), ↓ (vitamin D deficiency)",
            "BUN, Cr (assess for CKD)",
            "Albumin (to correct total Ca)"
        ],
        imaging: ["EKG: prolonged QT interval (increased risk torsades de pointes, ventricular arrhythmias)"],
        differentialDiagnosis: [
            "Vitamin D deficiency (most common outpatient, ↑ PTH, ↓ 25-OH vitamin D, ↓ PO4)",
            "Hypoparathyroidism (↓ PTH, ↑ PO4): post-surgical, autoimmune, genetic (DiGeorge)",
            "CKD (↓ 1,25-vitamin D, ↑ PO4, ↑ PTH secondary hyperparathyroidism)",
            "Hypomagnesemia (↓ PTH secretion/action, check Mg always)",
            "Acute pancreatitis (Ca sequestration in necrotic fat, ↑ lipase/amylase)",
            "Pseudohypocalcemia (↓ albumin, normal ionized Ca, no treatment needed)",
            "Hungry bone syndrome (post-parathyroidectomy, rapid bone uptake)",
            "Tumor lysis syndrome (↑ PO4 → Ca-PO4 precipitation, ↑ uric acid, ↑ K)",
            "Medication-induced: loop diuretics, bisphosphonates, denosumab, cinacalcet"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe symptomatic (tetany, seizures, laryngospasm, Ca <7.0) = EMERGENCY",
                "IV calcium if symptomatic or Ca <7.5: Calcium gluconate 10% 1-2 amps (1-2g) IV over 10-20 min. Can repeat if symptoms persist. Avoid extravasation (tissue necrosis).",
                "Continuous IV calcium if severe: Calcium gluconate 10% 10 amps (10g) in 1L D5W at 50 mL/h (0.5-1 mg/kg/h elemental Ca)",
                "ALWAYS replace Mg first if low (hypocalcemia refractory without Mg): Mg sulfate 2g IV over 15 min, then 1-2g q4-6h",
                "Monitor ionized Ca q4-6h, continuous telemetry if QT prolonged",
                "Avoid bicarbonate, hyperventilation (alkalosis decreases ionized Ca fraction)"
            ],
            chronic: [
                "Treat underlying cause: vitamin D deficiency (ergocalciferol 50,000 IU weekly × 8 weeks, then 1000-2000 IU daily), hypoparathyroidism (see below)",
                "Hypoparathyroidism: (1) Calcitriol 0.25-2 mcg/day (active vitamin D, bypass PTH), (2) Calcium carbonate 1-3g elemental Ca daily in divided doses, (3) Goal: Ca low-normal (8-8.5 mg/dL) to avoid hypercalciuria/nephrolithiasis",
                "CKD: calcitriol 0.25 mcg daily, control hyperphosphatemia with phosphate binders",
                "Monitor Ca weekly until stable, then monthly. Monitor 24h urine Ca to avoid nephrolithiasis (keep <250-300 mg/day)",
                "Thiazide diuretics (if hypercalciuria): HCTZ 25 mg daily (↓ renal Ca excretion)",
                "Recombinant PTH (teriparatide) if refractory hypoparathyroidism, but not FDA-approved for this indication"
            ]
        },
        complications: [
            "Seizures (hypocalcemia lowers seizure threshold)",
            "Laryngospasm, bronchospasm (life-threatening airway obstruction)",
            "Cardiac arrhythmias (prolonged QT → torsades de pointes, heart failure)",
            "Tetany, muscle spasms (painful, can impair function)",
            "Hypocalcemic cardiomyopathy (chronic severe hypocalcemia)",
            "Basal ganglia calcifications (chronic hypoparathyroidism, Parkinsonism)",
            "Cataracts (chronic hypocalcemia)",
            "Iatrogenic hypercalcemia (overtreatment with vitamin D/Ca supplements)"
        ],
        prognosis: "Acute severe: life-threatening if untreated (laryngospasm, arrhythmias), excellent prognosis if treated promptly. Vitamin D deficiency: easily corrected with supplementation. Hypoparathyroidism: lifelong treatment required, increased risk nephrolithiasis, cataracts, basal ganglia calcifications despite treatment.",
        clinicalPearls: [
            "ALWAYS check ionized Ca (more accurate, not affected by albumin). Correct total Ca for albumin.",
            "Check Mg ALWAYS. Hypocalcemia refractory if Mg low. Replace Mg first.",
            "Chvostek sign: 75% sensitive, 10% false positive. Trousseau sign: more specific (94%).",
            "EKG: prolonged QT. Risk torsades de pointes. Monitor telemetry if symptomatic.",
            "IV calcium if symptomatic or Ca <7.5: Ca gluconate 1-2g IV over 10-20 min. Avoid extravasation.",
            "PTH differentiates: ↑ PTH (vitamin D deficiency, CKD), ↓ PTH (hypoparathyroidism)",
            "Hypoparathyroidism treatment: calcitriol (active vitamin D) + Ca supplements. Goal Ca 8-8.5 (low-normal) to avoid hypercalciuria.",
            "Hungry bone syndrome: post-parathyroidectomy, severe hypocalcemia for weeks. Requires aggressive Ca/vitamin D replacement."
        ]
    }
},
{
    id: "hypercalcemia",
    name: "Hypercalcemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["fatigue", "confusion", "constipation", "nausea", "polyuria", "weakness"],
    tags: ["hypercalcemia", "high-calcium", "hyperparathyroidism", "malignancy", "stones-bones-groans"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Total serum Ca >10.5 mg/dL or ionized Ca >5.5 mg/dL (normal total 8.5-10.5, ionized 4.5-5.5 mg/dL). Severe hypercalcemia (Ca >14 mg/dL) is life-threatening (arrhythmias, coma). Hypercalcemic crisis (Ca >14-15 mg/dL) requires urgent treatment.",
        pathophysiology: "Caused by increased bone resorption (primary hyperparathyroidism, malignancy with PTHrP or bony mets), increased GI absorption (vitamin D intoxication, granulomatous disease), or decreased renal excretion (thiazide diuretics, familial hypocalciuric hypercalcemia). Elevated Ca causes nephrogenic DI (impairs ADH response), shortened QT interval, neuromuscular depression, constipation. Hypercalcemia worsens itself: dehydration from nephrogenic DI → decreased renal Ca excretion → further ↑ Ca.",
        epidemiology: "Prevalence 1-2% general population. Outpatient: primary hyperparathyroidism most common (90%). Inpatient: malignancy most common (50%), primary hyperparathyroidism (25%). Hypercalcemia of malignancy portends poor prognosis (median survival 1-3 months).",
        riskFactors: [
            "Primary hyperparathyroidism (most common outpatient: parathyroid adenoma 85%, hyperplasia 15%, carcinoma <1%)",
            "Malignancy (most common inpatient): lung (squamous cell), breast, multiple myeloma, renal cell carcinoma. Mechanisms: PTHrP (humoral hypercalcemia), osteolytic mets, 1,25-vitamin D production (lymphoma).",
            "Vitamin D intoxication (>10,000 IU/day chronic use)",
            "Granulomatous disease: sarcoidosis, TB (↑ 1,25-vitamin D production by activated macrophages)",
            "Medications: thiazide diuretics (↓ renal Ca excretion), lithium (↑ PTH), vitamin A intoxication",
            "Immobilization (increased bone resorption)",
            "Familial hypocalciuric hypercalcemia (FHH, inactivating mutation in calcium-sensing receptor)",
            "Milk-alkali syndrome (excessive Ca + alkali ingestion, now rare)",
            "Hyperthyroidism (increased bone turnover)",
            "Pheochromocytoma, adrenal insufficiency (MEN syndromes)"
        ],
        presentation: "Mnemonic: 'Stones, bones, groans, psychiatric overtones.' Severity correlates with Ca level and rapidity. Mild (Ca 10.5-12): often asymptomatic. Moderate (Ca 12-14): fatigue, constipation, polyuria/polydipsia (nephrogenic DI), nausea, confusion. Severe (Ca >14): confusion, stupor, coma, severe dehydration, cardiac arrhythmias.",
        physicalExam: [
            "Volume status: dehydration (dry mucous membranes, orthostatic hypotension, tachycardia) from nephrogenic DI",
            "Neurologic: confusion, lethargy, hyporeflexia, weakness, stupor/coma (if severe)",
            "GI: constipation (decreased gut motility), abdominal pain (if pancreatitis or PUD)",
            "Cardiac: bradycardia (severe cases), irregular pulse (arrhythmias)",
            "Signs of underlying cause: neck mass (parathyroid adenoma rare), lymphadenopathy (lymphoma), bone pain (myeloma, mets)"
        ],
        diagnosticCriteria: "Total Ca >10.5 mg/dL OR ionized Ca >5.5 mg/dL. Correct total Ca for albumin. Workup: (1) Repeat Ca to confirm, (2) Check PTH (differentiate PTH-mediated vs non-PTH-mediated), (3) If PTH low, check PTHrP, vitamin D, SPEP/UPEP, imaging for malignancy.",
        labs: [
            "Total Ca >10.5 mg/dL or ionized Ca >5.5 mg/dL",
            "Corrected Ca for albumin: add 0.8 mg/dL for every 1 g/dL albumin below 4.0",
            "PTH: ↑ or high-normal (primary hyperparathyroidism, FHH, lithium), ↓ (malignancy, vitamin D intoxication, granulomatous disease)",
            "PTHrP: ↑ (humoral hypercalcemia of malignancy, lung/breast/renal cell carcinoma)",
            "25-OH vitamin D: ↑ (vitamin D intoxication), 1,25-vitamin D: ↑ (granulomatous disease, lymphoma)",
            "PO4: ↓ (primary hyperparathyroidism, PTHrP), ↑ or normal (vitamin D intoxication, myeloma)",
            "Urine Ca/Cr ratio: ↑ (primary hyperparathyroidism), ↓ <0.01 (FHH)",
            "SPEP/UPEP, serum free light chains (rule out multiple myeloma)"
        ],
        imaging: ["EKG: shortened QT interval, bradycardia, heart block (severe cases)", "Parathyroid sestamibi scan (if primary hyperparathyroidism confirmed, localize adenoma pre-op)", "CT chest/abdomen/pelvis (if malignancy suspected)", "Bone scan or skeletal survey (if myeloma suspected)"],
        differentialDiagnosis: [
            "Primary hyperparathyroidism (most common outpatient, ↑ PTH, ↓ PO4, mild Ca elevation 10.5-12 mg/dL)",
            "Hypercalcemia of malignancy (most common inpatient, ↓ PTH, ↑ PTHrP, Ca often >12 mg/dL): lung, breast, myeloma, renal cell",
            "Vitamin D intoxication (↓ PTH, ↑ 25-OH vitamin D, history of high-dose supplements)",
            "Granulomatous disease (↓ PTH, ↑ 1,25-vitamin D): sarcoidosis, TB, fungal",
            "Familial hypocalciuric hypercalcemia (↑ or high-normal PTH, urine Ca/Cr <0.01, family history, benign)",
            "Thiazide diuretics (mild ↑ Ca, ↑ PTH, resolves 1-2 weeks after stopping)",
            "Immobilization (↓ PTH, young patients or Paget disease)",
            "Milk-alkali syndrome (history excessive Ca/antacid use, metabolic alkalosis, renal insufficiency)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (Ca >14) or symptomatic (confusion, dehydration) = URGENT treatment",
                "IV hydration (FIRST-LINE): Normal saline 200-300 mL/h (4-6L over 24h) to restore volume, increase renal Ca excretion. Goal UOP 100-150 mL/h. Monitor volume status, avoid overload.",
                "Calcitonin 4 IU/kg IM/SQ q12h (rapid onset 4-6h, ↓ Ca by 1-3 mg/dL). Tachyphylaxis after 48h. Use for severe symptomatic hypercalcemia while waiting for bisphosphonate to work.",
                "Bisphosphonates (MAINSTAY): Zoledronic acid 4 mg IV over 15 min OR pamidronate 60-90 mg IV over 2-4h. Onset 2-4 days, peak effect 7 days, lasts weeks. Hold if CrCl <30.",
                "Glucocorticoids (if lymphoma, myeloma, granulomatous disease): Prednisone 40-60 mg daily. ↓ 1,25-vitamin D production. NOT effective for primary hyperparathyroidism or PTHrP-mediated.",
                "Hemodialysis (if severe refractory hypercalcemia with renal failure, Ca >18 mg/dL)",
                "Monitor Ca q6-12h during treatment"
            ],
            chronic: [
                "Primary hyperparathyroidism: parathyroidectomy (curative, indicated if Ca >11.5, age <50, CrCl <60, osteoporosis, nephrolithiasis, or symptomatic). If surgery declined: cinacalcet 30-90 mg daily (calcimimetic, ↓ PTH), bisphosphonates (if osteoporosis), hydration, avoid thiazides.",
                "Hypercalcemia of malignancy: treat underlying cancer, bisphosphonates q3-4 weeks PRN, denosumab 120 mg SQ monthly (if bisphosphonate-refractory)",
                "Vitamin D intoxication: stop vitamin D, hydration, glucocorticoids if severe",
                "Granulomatous disease: glucocorticoids (prednisone 20-40 mg daily), hydroxychloroquine (↓ 1,25-vitamin D production in sarcoidosis)",
                "Thiazides: discontinue, switch to loop diuretic if needed",
                "Monitor Ca monthly until stable"
            ]
        },
        complications: [
            "Nephrolithiasis (calcium oxalate/phosphate stones), nephrocalcinosis",
            "Chronic kidney disease (hypercalcemia causes renal vasoconstriction, nephrocalcinosis)",
            "Osteoporosis, pathologic fractures (primary hyperparathyroidism → cortical bone loss)",
            "Peptic ulcer disease, pancreatitis (hypercalcemia stimulates gastrin secretion)",
            "Cardiac arrhythmias, heart block (shortened QT, bradycardia)",
            "Hypercalcemic crisis (Ca >14-15, stupor/coma, mortality 50% if untreated)",
            "Band keratopathy (calcium deposition in cornea, chronic hypercalcemia)"
        ],
        prognosis: "Primary hyperparathyroidism: excellent prognosis, cured with surgery (95% success), minimal symptoms if mild. Hypercalcemia of malignancy: poor prognosis, median survival 1-3 months, reflects advanced cancer. Hypercalcemic crisis: mortality 50% if untreated, <10% if treated promptly.",
        clinicalPearls: [
            "Mnemonic: 'Stones, bones, groans, psychiatric overtones' (nephrolithiasis, bone pain, constipation, confusion)",
            "PTH differentiates: ↑ PTH (primary hyperparathyroidism, FHH, lithium), ↓ PTH (malignancy, vitamin D, granulomatous)",
            "Hypercalcemia of malignancy: ↓ PTH, ↑ PTHrP. Most common inpatient. Poor prognosis (median survival 1-3 months).",
            "Primary hyperparathyroidism: ↑ PTH, ↓ PO4, mild Ca 10.5-12. Most common outpatient. Treat with parathyroidectomy.",
            "FHH: ↑ PTH, urine Ca/Cr <0.01, benign. DO NOT operate (will not cure). Distinguished from primary hyperparathyroidism by low urine Ca.",
            "Acute treatment: (1) IV fluids (NS 200-300 mL/h), (2) Calcitonin 4 IU/kg q12h (rapid, transient), (3) Bisphosphonates (zoledronic acid, onset 2-4d)",
            "Glucocorticoids ONLY effective in lymphoma, myeloma, granulomatous disease (↓ 1,25-vitamin D). NOT effective in primary hyperparathyroidism or PTHrP.",
            "Hypercalcemia worsens itself: nephrogenic DI → dehydration → ↓ renal Ca excretion → further ↑ Ca. HYDRATION critical."
        ]
    }
},
{
    id: "hypophosphatemia",
    name: "Hypophosphatemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["weakness", "fatigue", "confusion", "bone-pain", "dyspnea"],
    tags: ["hypophosphatemia", "low-phosphate", "refeeding-syndrome", "respiratory-failure", "rhabdomyolysis"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum phosphate <2.5 mg/dL (normal 2.5-4.5 mg/dL). Severe hypophosphatemia (<1.0 mg/dL) is life-threatening (respiratory failure, rhabdomyolysis, heart failure, altered mental status). Phosphate critical for ATP production, 2,3-DPG (oxygen delivery), bone mineralization.",
        pathophysiology: "Caused by decreased intake/absorption (malnutrition, vitamin D deficiency), transcellular shift (refeeding syndrome, respiratory alkalosis, insulin), or increased renal loss (hyperparathyroidism, Fanconi syndrome, diuretics). Hypophosphatemia impairs ATP production → muscle weakness (respiratory failure, rhabdomyolysis), decreased 2,3-DPG → leftward shift of oxygen-hemoglobin curve (tissue hypoxia), impaired WBC/platelet function (infections, bleeding).",
        epidemiology: "Prevalence 2-3% hospitalized, up to 30% ICU patients. Refeeding syndrome occurs in 0.4-1.5% hospitalized, higher in chronic alcoholics, anorexia nervosa, prolonged fasting. Severe hypophosphatemia mortality 5-30% if respiratory failure develops.",
        riskFactors: [
            "Refeeding syndrome (MOST DANGEROUS: after prolonged fasting, chronic alcoholism, anorexia nervosa, rapid glucose/TPN administration)",
            "Chronic alcoholism (malnutrition + vomiting + Mg depletion → renal PO4 wasting)",
            "DKA treatment (insulin + hydration → PO4 shifts into cells, nadir at 24-48h)",
            "Respiratory alkalosis (hyperventilation, sepsis, salicylate overdose → PO4 shifts into cells)",
            "Primary hyperparathyroidism (↑ PTH → renal PO4 wasting)",
            "Vitamin D deficiency (↓ intestinal PO4 absorption)",
            "Fanconi syndrome (proximal tubule dysfunction → PO4 wasting)",
            "Medications: phosphate binders (sevelamer, calcium acetate in CKD), antacids (aluminum hydroxide), diuretics (acetazolamide)",
            "Hungry bone syndrome (post-parathyroidectomy, rapid bone PO4 uptake)",
            "Burns, sepsis (transcellular shift + increased utilization)"
        ],
        presentation: "Severity correlates with PO4 level. Mild (2.0-2.5): usually asymptomatic. Moderate (1.0-2.0): weakness, anorexia, bone pain. Severe (<1.0): profound weakness, respiratory failure (diaphragm weakness), rhabdomyolysis, hemolytic anemia, altered mental status (confusion, seizures, coma), heart failure.",
        physicalExam: [
            "Neuromuscular: generalized weakness, hyporeflexia, confusion, lethargy, seizures (severe)",
            "Respiratory: tachypnea, shallow breathing, difficulty weaning from ventilator (diaphragm weakness)",
            "Cardiac: tachycardia, heart failure (if severe, impaired myocardial contractility)",
            "Hematologic: pallor (hemolytic anemia), petechiae/bruising (platelet dysfunction)",
            "Musculoskeletal: bone pain/tenderness (chronic hypophosphatemia, osteomalacia), muscle tenderness (rhabdomyolysis)"
        ],
        diagnosticCriteria: "Serum PO4 <2.5 mg/dL. Workup: (1) Assess severity (mild/moderate/severe), (2) Check urine PO4 and FE-PO4: <100 mg/24h or FE-PO4 <5% (appropriate renal conservation, GI/transcellular cause), >100 mg/24h or FE-PO4 >5% (renal PO4 wasting). (3) Check PTH, vitamin D, Ca, Mg. (4) Assess for refeeding risk (chronic malnutrition, alcoholism, anorexia).",
        labs: [
            "Serum PO4 <2.5 mg/dL (mild 2.0-2.5, moderate 1.0-2.0, severe <1.0)",
            "24h urine PO4: <100 mg/day (GI loss, transcellular shift), >100 mg/day (renal wasting)",
            "FE-PO4 = (urine PO4 × serum Cr) / (serum PO4 × urine Cr) × 100: <5% (appropriate renal conservation), >5% (renal wasting)",
            "PTH: ↑ (primary hyperparathyroidism, vitamin D deficiency), normal (transcellular shift, malnutrition)",
            "Ca: ↓ (vitamin D deficiency, often coexists), ↑ (primary hyperparathyroidism)",
            "Mg: ↓ (chronic alcoholism, refeeding, often coexists)",
            "CK (if suspect rhabdomyolysis, may be elevated)",
            "ABG (respiratory alkalosis → transcellular PO4 shift)"
        ],
        imaging: ["X-rays (if chronic): osteomalacia (Looser zones/pseudofractures), rickets in children"],
        differentialDiagnosis: [
            "Refeeding syndrome (transcellular shift after prolonged fasting, alcoholism, anorexia nervosa)",
            "Primary hyperparathyroidism (↑ PTH, ↑ Ca, ↓ PO4, renal PO4 wasting)",
            "Vitamin D deficiency (↓ vitamin D, ↓ Ca, ↓ PO4, ↑ PTH secondary)",
            "Chronic alcoholism (malnutrition + vomiting + Mg depletion → renal wasting)",
            "DKA treatment (insulin + fluids → PO4 shifts into cells, nadir 24-48h)",
            "Respiratory alkalosis (hyperventilation, sepsis, salicylate overdose)",
            "Fanconi syndrome (renal tubular defect, also ↓ K, metabolic acidosis, glucosuria)",
            "Medications: phosphate binders (CKD patients), antacids (aluminum hydroxide)",
            "Hungry bone syndrome (post-parathyroidectomy, rapid bone PO4 uptake)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (PO4 <1.0) or symptomatic (respiratory failure, confusion, rhabdomyolysis) = URGENT",
                "IV phosphate if severe or unable to take PO: Sodium phosphate or potassium phosphate 0.08-0.32 mmol/kg (max 80 mmol) IV over 6h. Infuse slowly (risk hypocalcemia, hyperphosphatemia if too rapid). Monitor PO4 q6h.",
                "Oral phosphate if moderate/asymptomatic: Sodium phosphate or potassium phosphate 1-2g (30-60 mmol) PO divided TID-QID. Causes diarrhea (dose-limiting).",
                "REFEEDING SYNDROME PREVENTION (CRITICAL): (1) Identify high-risk patients (prolonged fasting >7-10d, chronic alcoholism, anorexia, BMI <16), (2) Start nutrition SLOWLY (10-20 kcal/kg/day, advance gradually over 4-7 days), (3) Replete PO4, K, Mg BEFORE starting nutrition, (4) Monitor electrolytes daily × 7 days.",
                "Replace Mg, K concurrently (often coexist, required for PO4 repletion)",
                "Monitor: PO4 q6-12h, Ca (risk hypocalcemia with rapid PO4 repletion), Mg, K"
            ],
            chronic: [
                "Oral phosphate supplements: Sodium/potassium phosphate 1-3g daily divided doses (if chronic renal PO4 wasting)",
                "Treat underlying cause: vitamin D supplementation (ergocalciferol 50,000 IU weekly × 8 weeks if deficient), parathyroidectomy (primary hyperparathyroidism), stop offending meds (phosphate binders, antacids)",
                "High-phosphate diet: dairy (milk, yogurt, cheese), meat, nuts, legumes (difficult to correct by diet alone)",
                "Calcitriol (if vitamin D deficiency, ↑ intestinal PO4 absorption): 0.25-0.5 mcg daily",
                "Monitor PO4 weekly until stable, then monthly"
            ]
        },
        complications: [
            "Respiratory failure (diaphragm/intercostal muscle weakness, may require mechanical ventilation)",
            "Rhabdomyolysis (muscle weakness → necrosis, ↑ CK, myoglobinuria, AKI)",
            "Hemolytic anemia (RBC rigidity from ↓ ATP, spherocytosis)",
            "Platelet dysfunction, bleeding (impaired platelet aggregation)",
            "WBC dysfunction, infections (impaired chemotaxis, phagocytosis)",
            "Heart failure, arrhythmias (impaired myocardial contractility from ↓ ATP)",
            "Altered mental status, seizures, coma (severe cases)",
            "Osteomalacia, rickets (chronic hypophosphatemia, impaired bone mineralization)"
        ],
        prognosis: "Mild-moderate: excellent prognosis if corrected. Severe with respiratory failure: mortality 5-30%. Refeeding syndrome: mortality 5-10% if severe, preventable with slow refeeding and electrolyte monitoring. Chronic hypophosphatemia: osteomalacia, fractures if untreated.",
        clinicalPearls: [
            "Refeeding syndrome = MOST DANGEROUS cause. After prolonged fasting/alcoholism, rapid glucose/TPN → PO4/K/Mg shift into cells → severe deficiencies.",
            "Refeeding prevention: (1) Replete PO4/K/Mg BEFORE nutrition, (2) Start nutrition slowly (10-20 kcal/kg/day), (3) Monitor daily × 7 days.",
            "Severe hypophosphatemia (<1.0): respiratory failure (diaphragm weakness), rhabdomyolysis, hemolysis, altered mental status.",
            "DKA: PO4 often normal initially, drops 24-48h after insulin treatment. Monitor and replace PRN.",
            "FE-PO4 differentiates: <5% (GI loss, transcellular shift), >5% (renal wasting, hyperparathyroidism, Fanconi)",
            "IV phosphate: infuse slowly over 6h, max 80 mmol/dose. Rapid infusion → hypocalcemia (Ca-PO4 precipitation).",
            "Always replace Mg and K concurrently (often coexist, required for PO4 correction).",
            "2,3-DPG decreased → leftward shift of O2-Hgb curve → impaired tissue oxygen delivery (despite normal PaO2)."
        ]
    }
},
{
    id: "hyperphosphatemia",
    name: "Hyperphosphatemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["asymptomatic", "pruritus", "tetany", "muscle-cramps", "confusion"],
    tags: ["hyperphosphatemia", "high-phosphate", "ckd", "tumor-lysis-syndrome", "renal-failure"],
    severity: "moderate",
    acuity: "chronic",
    pageType: "disease",
    detail: {
        definition: "Serum phosphate >4.5 mg/dL (normal 2.5-4.5 mg/dL). Usually asymptomatic unless severe (>7-8 mg/dL) or associated with hypocalcemia. Chronic hyperphosphatemia in CKD causes CKD-MBD (mineral and bone disorder): secondary hyperparathyroidism, vascular calcification, increased mortality.",
        pathophysiology: "Caused by decreased renal PO4 excretion (CKD, AKI, hypoparathyroidism), increased PO4 load (tumor lysis syndrome, rhabdomyolysis, phosphate-containing laxatives), or transcellular shift (acidosis, cell lysis). Hyperphosphatemia causes hypocalcemia via Ca-PO4 precipitation (Ca × PO4 product >55 → soft tissue/vascular calcification). In CKD, ↑ PO4 suppresses calcitriol production and stimulates FGF-23 → secondary hyperparathyroidism → renal osteodystrophy.",
        epidemiology: "Prevalence increases with declining renal function: 10% CKD stage 3, 40% stage 4, 70% stage 5/ESRD. Acute hyperphosphatemia occurs in 40% tumor lysis syndrome, 20% severe rhabdomyolysis. Chronic hyperphosphatemia in CKD associated with increased cardiovascular mortality (vascular calcification).",
        riskFactors: [
            "CKD/ESRD (most common cause, impaired renal PO4 excretion)",
            "Tumor lysis syndrome (chemotherapy for bulky lymphoma, leukemia → massive cell death → PO4 release)",
            "Rhabdomyolysis (muscle necrosis → PO4 release, also ↑ K, ↑ CK, myoglobinuria)",
            "Hypoparathyroidism (↓ PTH → ↓ renal PO4 excretion, also ↓ Ca)",
            "Acute kidney injury (↓ GFR → ↓ PO4 excretion)",
            "Phosphate-containing laxatives (Fleet enema, oral sodium phosphate, especially in elderly/CKD)",
            "Vitamin D intoxication (↑ intestinal PO4 absorption)",
            "Acidosis (metabolic or respiratory → PO4 shifts out of cells)",
            "Pseudohyperphosphatemia (hemolysis, multiple myeloma with paraprotein interference)"
        ],
        presentation: "Usually asymptomatic unless severe or with hypocalcemia. Acute severe hyperphosphatemia: symptoms of hypocalcemia (tetany, paresthesias, seizures) due to Ca-PO4 precipitation. Chronic hyperphosphatemia: pruritus (uremic pruritus from CKD-MBD), bone pain, fractures (renal osteodystrophy), vascular calcification (asymptomatic until MI/stroke).",
        physicalExam: [
            "Often normal exam (asymptomatic)",
            "Signs of hypocalcemia (if Ca-PO4 precipitation): Chvostek sign, Trousseau sign, tetany, hyperreflexia",
            "Signs of CKD-MBD: uremic pruritus (scratch marks), bone tenderness, muscle weakness",
            "Vascular calcification: palpable calcified vessels (rare), signs of atherosclerotic disease",
            "Signs of underlying cause: dialysis catheter (ESRD), chemotherapy port (tumor lysis), muscle tenderness (rhabdomyolysis)"
        ],
        diagnosticCriteria: "Serum PO4 >4.5 mg/dL. Workup: (1) Check renal function (Cr, eGFR), (2) Check Ca (hypocalcemia often coexists), (3) Check PTH (↑ in CKD secondary hyperparathyroidism, ↓ in hypoparathyroidism), (4) Rule out pseudohyperphosphatemia (hemolyzed sample), (5) Assess for tumor lysis (↑ uric acid, ↑ K, ↑ LDH) or rhabdomyolysis (↑ CK).",
        labs: [
            "Serum PO4 >4.5 mg/dL (severity: mild 4.5-6.0, moderate 6.0-8.0, severe >8.0)",
            "BUN, Cr, eGFR (assess renal function, CKD most common cause)",
            "Ca: ↓ (Ca-PO4 precipitation, especially if PO4 >8 mg/dL)",
            "PTH: ↑ (CKD secondary hyperparathyroidism), ↓ (hypoparathyroidism)",
            "Ca × PO4 product: >55 mg²/dL² (risk of soft tissue/vascular calcification)",
            "Uric acid, LDH, K (if suspect tumor lysis syndrome: ↑ uric acid >8 mg/dL, ↑ LDH, ↑ K)",
            "CK (if suspect rhabdomyolysis: CK >5000 U/L)",
            "Rule out pseudohyperphosphatemia: repeat non-hemolyzed sample"
        ],
        imaging: ["X-rays: vascular calcification (arterial walls), soft tissue calcification, renal osteodystrophy (if chronic CKD-MBD)", "Echocardiogram: valvular calcification (aortic stenosis from CKD-MBD)", "CT: metastatic calcifications if severe (Ca × PO4 >70)"],
        differentialDiagnosis: [
            "CKD/ESRD (most common, impaired renal PO4 excretion, also ↑ PTH, ↓ Ca, ↓ calcitriol)",
            "Tumor lysis syndrome (↑ uric acid, ↑ K, ↑ LDH, ↓ Ca, follows chemotherapy)",
            "Rhabdomyolysis (↑ CK, ↑ K, myoglobinuria, muscle trauma/statins/drugs)",
            "Hypoparathyroidism (↓ PTH, ↓ Ca, ↑ PO4)",
            "Acute kidney injury (↑ Cr, oliguria, ↓ GFR)",
            "Phosphate-containing laxatives (history of Fleet enema/oral sodium phosphate, elderly)",
            "Vitamin D intoxication (↑ Ca, ↑ PO4, ↑ 25-OH vitamin D)",
            "Acidosis (metabolic or respiratory, PO4 shifts out of cells)",
            "Pseudohyperphosphatemia (hemolysis, multiple myeloma, no true ↑ PO4)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (PO4 >8) + hypocalcemia = risk of Ca-PO4 precipitation, tetany",
                "IV hydration: Normal saline 150-200 mL/h (promotes renal PO4 excretion if GFR adequate)",
                "Treat hypocalcemia cautiously: If symptomatic (tetany, seizures), give Ca gluconate 1-2g IV slowly. AVOID aggressive Ca repletion if PO4 >7 mg/dL (risk metastatic calcification).",
                "Phosphate binders: Sevelamer 800-1600 mg PO with meals (non-Ca-based, preferred if Ca × PO4 >55), OR calcium acetate 667-1334 mg PO with meals (if Ca × PO4 <55)",
                "Hemodialysis: if severe refractory hyperphosphatemia (PO4 >10-12 mg/dL) + AKI/ESRD, or tumor lysis syndrome",
                "Tumor lysis syndrome: aggressive hydration (150-200 mL/h), rasburicase (↓ uric acid), phosphate binders, hemodialysis if refractory",
                "Monitor PO4, Ca, Ca × PO4 product q6-12h"
            ],
            chronic: [
                "Dietary PO4 restriction: <800-1000 mg/day (avoid dairy, meat, nuts, cola). Difficult to achieve, requires dietitian.",
                "Phosphate binders (MAINSTAY in CKD): taken with meals to bind dietary PO4. (1) Sevelamer 800-3200 mg TID with meals (non-Ca, preferred if Ca × PO4 >55 or vascular calcification), (2) Calcium acetate 667-2001 mg TID (if Ca × PO4 <55, risk hypercalcemia), (3) Lanthanum carbonate 500-1000 mg TID, (4) Ferric citrate 210 mg TID (also treats anemia).",
                "Calcitriol 0.25-0.5 mcg daily (↓ PTH in CKD secondary hyperparathyroidism, but may ↑ PO4 absorption)",
                "Cinacalcet 30-180 mg daily (calcimimetic, ↓ PTH in CKD, ↓ Ca and PO4)",
                "Hemodialysis 3× weekly (removes PO4 in ESRD)",
                "Goal PO4: 3.5-5.5 mg/dL (CKD stage 3-4), 3.5-5.5 mg/dL (ESRD per KDOQI)",
                "Monitor PO4, Ca, PTH monthly in CKD stage 4-5"
            ]
        },
        complications: [
            "Hypocalcemia, tetany (Ca-PO4 precipitation, if Ca × PO4 >55-60)",
            "Vascular calcification (coronary arteries, valves → CAD, aortic stenosis, increased CV mortality)",
            "Soft tissue calcification, calcinosis cutis (if Ca × PO4 >70)",
            "CKD-MBD: secondary hyperparathyroidism, renal osteodystrophy (osteitis fibrosa cystica, fractures)",
            "Pruritus (uremic pruritus, severely impacts quality of life)",
            "Acute phosphate nephropathy (phosphate-containing laxatives, AKI from tubular calcium phosphate deposition)"
        ],
        prognosis: "Acute hyperphosphatemia (tumor lysis, rhabdomyolysis): good prognosis if treated promptly with hydration/dialysis. Chronic hyperphosphatemia in CKD: associated with increased mortality (vascular calcification → MI/stroke). Every 1 mg/dL ↑ PO4 above 5.5 mg/dL associated with 23% ↑ mortality in dialysis patients.",
        clinicalPearls: [
            "CKD most common cause. Hyperphosphatemia in CKD → secondary hyperparathyroidism + vascular calcification → increased CV mortality.",
            "Ca × PO4 product critical: >55 mg²/dL² → risk soft tissue calcification, >70 → metastatic calcification.",
            "Phosphate binders with meals: Sevelamer (non-Ca, preferred if Ca × PO4 >55), calcium acetate (if Ca × PO4 <55).",
            "AVOID aggressive Ca repletion if PO4 >7 mg/dL (risk Ca-PO4 precipitation → metastatic calcification).",
            "Tumor lysis syndrome: ↑ PO4, ↑ uric acid, ↑ K, ↓ Ca, ↑ LDH. Treat with hydration, rasburicase, hemodialysis.",
            "Dietary PO4 restriction difficult (800-1000 mg/day). Requires dietitian. Phosphate binders ESSENTIAL in CKD.",
            "Vascular calcification in CKD: coronary arteries, valves → CAD, aortic stenosis. Every 1 mg/dL ↑ PO4 → 23% ↑ mortality.",
            "Fleet enema/oral sodium phosphate → acute hyperphosphatemia + AKI (acute phosphate nephropathy). Avoid in elderly/CKD."
        ]
    }
},
{
    id: "hypomagnesemia",
    name: "Hypomagnesemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["weakness", "tremor", "muscle-cramps", "tetany", "palpitations", "seizures"],
    tags: ["hypomagnesemia", "low-magnesium", "refractory-hypokalemia", "torsades", "ppi"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum Mg <1.5 mg/dL (normal 1.5-2.5 mg/dL). Often underdiagnosed (prevalence 10-20% hospitalized). Serum Mg reflects only 1% of total body Mg (98% intracellular, 1% bone). Severe hypomagnesemia (<1.0 mg/dL) causes refractory hypokalemia, hypocalcemia, arrhythmias (torsades de pointes).",
        pathophysiology: "Caused by decreased intake/absorption (PPI, malabsorption), increased GI losses (diarrhea), or increased renal losses (diuretics, aminoglycosides, cisplatin, alcohol). Mg critical for >300 enzymatic reactions, including Na-K-ATPase, PTH secretion/action, K channel function. Hypomagnesemia causes: (1) refractory hypokalemia (impaired Na-K-ATPase → K wasting), (2) hypocalcemia (impaired PTH secretion + end-organ PTH resistance), (3) prolonged QT interval + torsades de pointes (impaired K channel repolarization).",
        epidemiology: "Prevalence 10-20% hospitalized, 40-60% ICU patients, 30-80% chronic alcoholics. PPI use causes hypomagnesemia in 1-2% (but prevalent due to widespread PPI use). Gitelman syndrome prevalence 1:40,000 (genetic cause).",
        riskFactors: [
            "Medications: PPI (omeprazole, lansoprazole, impairs intestinal Mg absorption), loop diuretics (furosemide), thiazides, aminoglycosides, amphotericin B, cisplatin, cyclosporin",
            "Chronic diarrhea: Crohn disease, ulcerative colitis, celiac disease, short bowel syndrome",
            "Chronic alcoholism (↓ intake, ↑ GI losses from vomiting/diarrhea, ↑ renal losses)",
            "DM (osmotic diuresis → renal Mg wasting)",
            "Hypercalcemia (competes with Mg for renal reabsorption)",
            "Hungry bone syndrome (post-parathyroidectomy, rapid bone Mg uptake)",
            "Gitelman syndrome (genetic, thiazide-like effect: hypokalemia, hypomagnesemia, metabolic alkalosis, hypocalciuria)",
            "Bartter syndrome (genetic, loop diuretic-like effect)",
            "Post-renal transplant (calcineurin inhibitor toxicity)"
        ],
        presentation: "Severity correlates with Mg level. Mild (1.2-1.5 mg/dL): often asymptomatic. Moderate (0.8-1.2 mg/dL): muscle cramps, tremor, weakness, fatigue, anorexia. Severe (<0.8 mg/dL): tetany (Chvostek/Trousseau signs), seizures, altered mental status, cardiac arrhythmias (torsades de pointes, atrial fibrillation).",
        physicalExam: [
            "Neuromuscular: muscle cramps, tremor (fine, especially hands), weakness, hyperreflexia",
            "Tetany: Chvostek sign (tap facial nerve → facial twitch), Trousseau sign (inflate BP cuff → carpopedal spasm)",
            "Cardiac: irregular pulse (atrial fibrillation, PVCs), tachycardia",
            "Neurologic: confusion, irritability, seizures (if severe)",
            "Signs of underlying cause: surgical scar (bowel resection), signs of chronic alcoholism"
        ],
        diagnosticCriteria: "Serum Mg <1.5 mg/dL. Workup: (1) Check K and Ca (often coexist), (2) Measure 24h urine Mg or FE-Mg to differentiate GI vs renal losses. Urine Mg >24 mg/day (or FE-Mg >2%) despite hypomagnesemia = renal Mg wasting. Urine Mg <12 mg/day = GI loss or decreased intake.",
        labs: [
            "Serum Mg <1.5 mg/dL (mild 1.2-1.5, moderate 0.8-1.2, severe <0.8)",
            "K: ↓ (coexists in 40-60%, refractory to repletion without Mg)",
            "Ca: ↓ (coexists in 20-30%, impaired PTH secretion/action)",
            "PTH: ↓ or inappropriately normal (if hypocalcemia + hypomagnesemia)",
            "24h urine Mg: <12 mg/day (GI loss, decreased intake), >24 mg/day (renal wasting)",
            "FE-Mg = (urine Mg × serum Cr) / (0.7 × serum Mg × urine Cr) × 100: <2% (GI loss), >2% (renal wasting)",
            "Note: 0.7 factor accounts for protein-bound Mg (only 70% filtered)"
        ],
        imaging: ["EKG: prolonged QT interval, flattened T waves, prominent U waves, torsades de pointes (polymorphic VT with QT prolongation)"],
        differentialDiagnosis: [
            "PPI use (most common outpatient, impairs intestinal Mg absorption)",
            "Loop diuretics (furosemide, impairs thick ascending limb Mg reabsorption)",
            "Chronic diarrhea (Crohn, ulcerative colitis, celiac, short bowel syndrome)",
            "Chronic alcoholism (↓ intake, ↑ GI/renal losses)",
            "DM with osmotic diuresis (hyperglycemia → renal Mg wasting)",
            "Gitelman syndrome (hypokalemia, hypomagnesemia, metabolic alkalosis, hypocalciuria, presents young adults)",
            "Post-renal transplant (calcineurin inhibitors → renal Mg wasting)",
            "Medications: aminoglycosides, amphotericin B, cisplatin, cyclosporin",
            "Hungry bone syndrome (post-parathyroidectomy)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (Mg <0.8) or symptomatic (tetany, seizures, torsades) = URGENT",
                "IV magnesium if severe/symptomatic: Magnesium sulfate 2g (16 mEq) IV over 15 min, then 1-2g IV q4-6h. For torsades de pointes: 2g IV push over 1-2 min, then infusion 1-2g/h.",
                "Oral magnesium if mild-moderate/asymptomatic: Magnesium oxide 400-800 mg PO BID (cheap, 60% elemental Mg, causes diarrhea), OR magnesium chloride 535 mg PO TID (better absorbed, less diarrhea).",
                "ALWAYS replace K and Ca concurrently (hypokalemia and hypocalcemia refractory without Mg replacement)",
                "Continuous telemetry if QT prolonged or arrhythmias",
                "Monitor Mg q6-12h during replacement"
            ],
            chronic: [
                "Oral magnesium supplementation: Magnesium oxide 400 mg PO BID-TID, OR magnesium chloride 535 mg PO BID-TID. Titrate to serum Mg >1.5 mg/dL. Diarrhea dose-limiting.",
                "Treat underlying cause: stop PPI if possible (switch to H2 blocker), stop loop diuretics or add K-sparing diuretic (amiloride 5-10 mg daily, ↓ renal Mg loss), treat diarrhea/malabsorption",
                "High-Mg diet: green leafy vegetables, nuts, seeds, whole grains, legumes (difficult to correct by diet alone)",
                "Gitelman syndrome: high-dose oral Mg (800-1200 mg elemental Mg daily) + K-sparing diuretics (amiloride or spironolactone)",
                "Monitor Mg monthly until stable"
            ]
        },
        complications: [
            "Refractory hypokalemia (40-60% coexist, K repletion fails without Mg)",
            "Refractory hypocalcemia (20-30% coexist, impaired PTH secretion + PTH resistance)",
            "Torsades de pointes (polymorphic VT from prolonged QT, can degenerate to VF, sudden cardiac death)",
            "Atrial fibrillation, PVCs (hypomagnesemia proarrhythmic)",
            "Seizures (severe hypomagnesemia, <0.8 mg/dL)",
            "Increased digitalis toxicity (hypomagnesemia sensitizes myocardium to digitalis)"
        ],
        prognosis: "Mild-moderate hypomagnesemia: benign if corrected, recurrence common if underlying cause not addressed (e.g., PPI use). Severe with arrhythmias: life-threatening (torsades can cause sudden cardiac death), excellent prognosis if Mg repleted promptly. Gitelman syndrome: lifelong treatment, generally benign.",
        clinicalPearls: [
            "ALWAYS check Mg in patients with refractory hypokalemia or hypocalcemia. Hypokalemia/hypocalcemia will NOT correct without Mg.",
            "Coexists with hypokalemia (40-60%) and hypocalcemia (20-30%). Replace Mg FIRST, then K and Ca.",
            "PPI most common outpatient cause. Consider stopping if chronic use (>1 year) and hypomagnesemia develops.",
            "FE-Mg differentiates: <2% (GI loss, PPI, diarrhea), >2% (renal wasting, diuretics, Gitelman)",
            "Torsades de pointes: treat with IV Mg 2g push over 1-2 min (even if normal Mg level, Mg is antiarrhythmic).",
            "Gitelman syndrome: presents young adults, hypokalemia + hypomagnesemia + metabolic alkalosis + hypocalciuria. Treat with high-dose oral Mg + K-sparing diuretics.",
            "Oral Mg: magnesium oxide (cheap, causes diarrhea) vs magnesium chloride (better absorbed, less diarrhea). Titrate to avoid diarrhea.",
            "Serum Mg underestimates deficiency (only 1% total body Mg). Severe intracellular depletion can occur with normal serum Mg."
        ]
    }
},
{
    id: "hypermagnesemia",
    name: "Hypermagnesemia",
    system: "renal",
    categories: ["electrolyte-disorders"],
    symptoms: ["weakness", "hypotension", "bradycardia", "respiratory-depression", "confusion"],
    tags: ["hypermagnesemia", "high-magnesium", "renal-failure", "eclampsia-treatment", "areflexia"],
    severity: "severe",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Serum Mg >2.5 mg/dL (normal 1.5-2.5 mg/dL). Rare (prevalence <1% hospitalized) due to efficient renal Mg excretion. Severe hypermagnesemia (>4-6 mg/dL) causes life-threatening hypotension, bradycardia, respiratory depression, cardiac arrest. Typically requires both Mg load AND renal impairment.",
        pathophysiology: "Caused by excessive Mg intake (laxatives, antacids, IV Mg for eclampsia) in setting of impaired renal excretion (CKD, AKI). Normal kidneys can excrete up to 5g Mg/day. Mg acts as physiologic Ca channel blocker: blocks neuromuscular transmission (weakness, areflexia), vasodilation (hypotension), cardiac conduction delay (bradycardia, heart block), respiratory depression (blocks acetylcholine release at neuromuscular junction).",
        epidemiology: "Prevalence <1% hospitalized, 5-10% ESRD patients. Iatrogenic causes most common: Mg for eclampsia/pre-eclampsia (therapeutic range 4-6 mg/dL, toxicity >8 mg/dL), Mg-containing laxatives in elderly with CKD. Mortality 10-30% if Mg >8-10 mg/dL and untreated (cardiac arrest).",
        riskFactors: [
            "CKD/ESRD (impaired renal Mg excretion, especially if taking Mg-containing meds)",
            "Acute kidney injury (decreased GFR → decreased Mg excretion)",
            "Iatrogenic Mg administration: IV Mg for eclampsia/pre-eclampsia (therapeutic 4-6 mg/dL, toxic >8 mg/dL), IV Mg for torsades de pointes",
            "Mg-containing laxatives/antacids: milk of magnesia, magnesium citrate, magnesium hydroxide (especially elderly with CKD)",
            "Hypothyroidism (decreased GFR)",
            "Addison disease (hypoaldosteronism → decreased renal Mg excretion)",
            "Lithium therapy (can impair renal Mg excretion)",
            "Tumor lysis syndrome (rare cause, massive cell lysis)"
        ],
        presentation: "Severity correlates with Mg level. Mild (2.5-4 mg/dL): nausea, flushing, warmth. Moderate (4-6 mg/dL): hyporeflexia (lost DTRs at 5-7 mg/dL, earliest reliable sign), hypotension, bradycardia, drowsiness. Severe (>6-8 mg/dL): respiratory depression (8-10 mg/dL), complete heart block, cardiac arrest (>12-15 mg/dL).",
        physicalExam: [
            "Neuromuscular: hyporeflexia to areflexia (DTRs lost at Mg 5-7 mg/dL, most reliable sign), generalized weakness, flaccid paralysis (if severe)",
            "Respiratory: respiratory depression (shallow breathing, hypoventilation, Mg 8-10 mg/dL), apnea (if severe)",
            "Cardiac: bradycardia, hypotension, irregular pulse (heart block)",
            "Neurologic: drowsiness, lethargy, confusion (Mg 6-8 mg/dL), coma (Mg >10 mg/dL)",
            "Skin: flushing, warmth (vasodilation from Mg)"
        ],
        diagnosticCriteria: "Serum Mg >2.5 mg/dL in clinical context. Workup: (1) Check renal function (Cr, eGFR), (2) Check Ca (hypocalcemia may coexist, Mg inhibits PTH secretion), (3) Medication history (Mg-containing laxatives/antacids, IV Mg), (4) Monitor DTRs (lost at Mg 5-7 mg/dL).",
        labs: [
            "Serum Mg >2.5 mg/dL (mild 2.5-4, moderate 4-6, severe >6)",
            "BUN, Cr, eGFR (assess renal function, nearly all cases have renal impairment)",
            "Ca: ↓ (Mg inhibits PTH secretion)",
            "K: variable"
        ],
        imaging: ["EKG: prolonged PR interval, prolonged QRS, bradycardia, heart block (if Mg >6-8 mg/dL), asystole (if Mg >12-15 mg/dL)"],
        differentialDiagnosis: [
            "Iatrogenic IV Mg (eclampsia treatment, torsades treatment, excessive infusion)",
            "Mg-containing laxatives/antacids in CKD (elderly patients most vulnerable)",
            "CKD/ESRD with Mg-containing meds (impaired excretion)",
            "Acute kidney injury (decreased GFR + Mg load)",
            "Hypothyroidism (decreased GFR, rare cause)",
            "Addison disease (hypoaldosteronism, rare cause)",
            "Tumor lysis syndrome (rare, massive cell lysis)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (Mg >6) or symptomatic (areflexia, respiratory depression, bradycardia, hypotension) = EMERGENCY",
                "STOP all Mg-containing medications/supplements immediately",
                "Calcium gluconate 10% 1-2g (10-20 mL) IV over 5-10 min (antagonizes Mg at neuromuscular junction and heart, immediate but transient effect). Repeat q15min PRN until DTRs return or symptoms improve.",
                "IV hydration + loop diuretics (if adequate renal function): Normal saline 150-200 mL/h + furosemide 20-40 mg IV (promotes renal Mg excretion)",
                "Hemodialysis: if severe (Mg >8-10 mg/dL) OR renal failure OR refractory symptoms. Mg efficiently removed by dialysis (rapid ↓ Mg within hours).",
                "Supportive care: mechanical ventilation if respiratory depression, vasopressors if severe hypotension, temporary pacing if complete heart block",
                "Monitor: Mg q2-4h, DTRs (earliest sign of Mg toxicity, return indicates improvement), continuous telemetry, respiratory rate"
            ],
            chronic: [
                "Avoid Mg-containing medications: laxatives (milk of magnesia, magnesium citrate), antacids (Maalox, Mylanta), supplements",
                "CKD/ESRD patients: educate to avoid Mg-containing OTC products, read labels",
                "Adjust dialysate Mg concentration if on hemodialysis (use low-Mg dialysate if recurrent hypermagnesemia)",
                "Monitor Mg monthly in CKD patients on dialysis"
            ]
        },
        complications: [
            "Respiratory failure (Mg 8-10 mg/dL, blocks acetylcholine at neuromuscular junction)",
            "Cardiac arrest (Mg >12-15 mg/dL, asystole or severe bradycardia)",
            "Complete heart block (Mg >8-10 mg/dL)",
            "Profound hypotension (vasodilation, myocardial depression)",
            "Coma (Mg >10 mg/dL)",
            "Death (mortality 10-30% if Mg >8-10 mg/dL and untreated)"
        ],
        prognosis: "Mild hypermagnesemia (2.5-4 mg/dL): benign, resolves with stopping Mg source and adequate renal function. Severe (Mg >8 mg/dL): life-threatening (cardiac arrest, respiratory failure), mortality 10-30% if untreated, excellent prognosis if Ca gluconate + hemodialysis given promptly.",
        clinicalPearls: [
            "Hypermagnesemia rare (<1% hospitalized), requires Mg load + renal impairment. Normal kidneys can excrete up to 5g Mg/day.",
            "DTRs lost at Mg 5-7 mg/dL (earliest reliable sign of toxicity). Monitor DTRs in patients receiving IV Mg (eclampsia treatment).",
            "Progression: DTRs lost (5-7) → respiratory depression (8-10) → heart block (8-10) → cardiac arrest (>12-15 mg/dL)",
            "Calcium gluconate 1-2g IV is immediate antidote (antagonizes Mg at neuromuscular junction, transient effect). Repeat q15min PRN.",
            "Hemodialysis is definitive treatment for severe hypermagnesemia (Mg >8-10 mg/dL) or renal failure. Mg efficiently removed.",
            "Eclampsia treatment: therapeutic Mg 4-6 mg/dL, toxic >8 mg/dL. Monitor DTRs, respiratory rate, UOP during infusion.",
            "Elderly + CKD + Mg-containing laxatives = classic scenario for severe hypermagnesemia. Educate patients to avoid Mg-containing OTC products.",
            "EKG: prolonged PR, prolonged QRS, bradycardia, heart block. Severe → asystole."
        ]
    }
},
// ACID-BASE DISORDERS
{
    id: "metabolic-acidosis-high-ag",
    name: "Metabolic Acidosis (High Anion Gap)",
    system: "renal",
    categories: ["acid-base-disorders"],
    symptoms: ["confusion", "dyspnea", "tachypnea", "nausea", "fatigue"],
    tags: ["metabolic-acidosis", "anion-gap", "mudpiles", "dka", "lactic-acidosis", "kussmaul-breathing"],
    severity: "severe",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Arterial pH <7.35 with HCO3 <22 mEq/L and elevated anion gap >12 mEq/L. Anion gap = Na - (Cl + HCO3), normal 8-12 mEq/L. High AG indicates accumulation of unmeasured anions (lactate, ketones, toxins, uremic acids). Severe acidosis (pH <7.2) is life-threatening.",
        pathophysiology: "High AG acidosis results from addition of acid (H+ + organic anion) that consumes HCO3. H+ is buffered by HCO3 → ↓ HCO3, but Cl unchanged → ↑ AG. Respiratory compensation: hyperventilation (Kussmaul breathing) to ↓ CO2. Expected compensation: PCO2 = (1.5 × HCO3) + 8 ± 2. If PCO2 higher than expected = concurrent respiratory acidosis, if lower = concurrent respiratory alkalosis.",
        epidemiology: "Lactic acidosis most common (prevalence 1-10% hospitalized, up to 30% ICU, mortality 50-80% if severe). DKA prevalence 5-8% type 1 diabetics annually. Toxic alcohol ingestion rare but deadly (mortality 20-30% methanol/ethylene glycol if untreated). Uremic acidosis universal in ESRD.",
        riskFactors: [
            "Lactic acidosis: sepsis/shock (tissue hypoperfusion), metformin (especially if CrCl <30), liver failure, malignancy, seizures, thiamine deficiency",
            "DKA: type 1 diabetes (insulin omission, infection, MI trigger), type 2 diabetes (severe illness)",
            "AKA (alcoholic ketoacidosis): chronic alcoholism + recent binge + starvation + vomiting",
            "Uremic acidosis: CKD stage 4-5, ESRD (↓ acid excretion, ↓ HCO3 regeneration)",
            "Toxic ingestions: methanol (windshield fluid), ethylene glycol (antifreeze), salicylates (aspirin overdose), propylene glycol (IV lorazepam/diazepam)",
            "Renal tubular acidosis (RTA) Type 1 or 4 can have mild ↑ AG in severe cases"
        ],
        presentation: "Severity correlates with pH. Mild (pH 7.25-7.35): often asymptomatic, mild tachypnea. Moderate (pH 7.1-7.25): Kussmaul breathing (deep, rapid respirations), nausea, vomiting, confusion, lethargy. Severe (pH <7.1): altered mental status, shock, arrhythmias, coma. DKA: polyuria, polydipsia, fruity breath (acetone). Toxins: visual changes (methanol), flank pain (ethylene glycol with oxalate crystals).",
        physicalExam: [
            "Respiratory: Kussmaul breathing (deep, rapid, labored respirations), tachypnea",
            "Neurologic: confusion, lethargy, stupor, coma (if pH <7.1)",
            "Cardiovascular: hypotension (sepsis, shock), tachycardia, arrhythmias (ventricular if severe acidosis)",
            "Volume status: dehydration (DKA, AKA from vomiting/polyuria), signs of shock (sepsis, lactic acidosis)",
            "Specific signs: fruity breath (DKA from acetone), uremic fetor (uremia), visual disturbance (methanol), flank pain (ethylene glycol)"
        ],
        diagnosticCriteria: "ABG: pH <7.35, HCO3 <22 mEq/L. Calculate AG: Na - (Cl + HCO3) >12 mEq/L. Workup: (1) Calculate osmolar gap if suspect toxic alcohol (measured osm - calculated osm >10 suggests methanol/ethylene glycol), (2) Check lactate (lactic acidosis), glucose + ketones (DKA/AKA), (3) Check Cr (uremia), salicylate level (aspirin OD), (4) Calculate delta-delta (ΔAG/ΔHCO3) to detect concurrent acid-base disorders.",
        labs: [
            "ABG: pH <7.35, HCO3 <22 mEq/L, PCO2 ↓ (respiratory compensation)",
            "Anion gap >12 mEq/L (AG = Na - [Cl + HCO3], normal 8-12)",
            "Lactate: >2 mmol/L (mild), >4 (severe lactic acidosis, mortality 50%)",
            "Glucose, ketones (serum beta-hydroxybutyrate >3 mmol/L in DKA, urine ketones positive)",
            "BUN, Cr (uremia if Cr >8-10 mg/dL)",
            "Osmolar gap >10 mOsm/kg (toxic alcohols: methanol, ethylene glycol, propylene glycol). Osmolar gap = measured osm - calculated osm. Calculated osm = 2×Na + glucose/18 + BUN/2.8 + ethanol/4.6.",
            "Salicylate level (aspirin OD, also causes respiratory alkalosis → mixed disorder)",
            "Delta-delta = ΔAG / ΔHCO3 = (AG - 12) / (24 - HCO3). If 1-2: pure high AG acidosis. If <1: concurrent normal AG acidosis. If >2: concurrent metabolic alkalosis."
        ],
        imaging: ["CT head if altered mental status (rule out stroke, hemorrhage)", "Chest X-ray if suspect sepsis/pneumonia (source of lactic acidosis)"],
        differentialDiagnosis: [
            "MUDPILES mnemonic: Methanol, Uremia, DKA/AKA, Propylene glycol/Paraldehyde, Iron/INH, Lactic acidosis, Ethylene glycol, Salicylates",
            "Lactic acidosis (most common): sepsis, shock, tissue hypoperfusion, metformin, liver failure, seizures, malignancy",
            "DKA: type 1 diabetes, glucose >250 mg/dL, serum beta-hydroxybutyrate >3 mmol/L, AG typically 20-30",
            "AKA: chronic alcoholism, recent binge + starvation, vomiting, glucose often low-normal, beta-hydroxybutyrate >3 mmol/L",
            "Uremia: CKD stage 5/ESRD, Cr >8-10 mg/dL, AG typically 15-20",
            "Methanol: visual changes (snow vision, blindness from optic nerve damage), osmolar gap >10, AG >20",
            "Ethylene glycol: flank pain (oxalate crystals → AKI), osmolar gap >10, AG >20, calcium oxalate crystals in urine",
            "Salicylates: tinnitus, tachypnea (mixed respiratory alkalosis + metabolic acidosis), salicylate level >30 mg/dL",
            "Propylene glycol: IV lorazepam/diazepam (solvent), osmolar gap >10"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (pH <7.1) or symptomatic (altered mental status, shock, arrhythmias) = EMERGENCY",
                "Treat underlying cause (PRIORITY): (1) Lactic acidosis: aggressive fluid resuscitation (NS bolus 30 mL/kg), vasopressors (norepinephrine), treat sepsis (antibiotics), stop metformin. (2) DKA: insulin 0.1 U/kg/h IV + fluids (NS 500 mL/h) + K repletion. (3) AKA: dextrose 5-10% + thiamine 100 mg IV (substrate for metabolism, stimulates insulin → ketone clearance). (4) Uremia: hemodialysis. (5) Toxic alcohols: fomepizole (alcohol dehydrogenase inhibitor, prevents toxic metabolite formation) + hemodialysis.",
                "Sodium bicarbonate (CONTROVERSIAL, limited indications): Consider ONLY if pH <7.1 AND hemodynamically unstable despite treating underlying cause. Dose: 50-100 mEq IV (1-2 amps) over 30-60 min. Goal: pH >7.2 (NOT full correction). Avoid in lactic acidosis (worsens lactate production), DKA (worsens hypokalemia, cerebral edema).",
                "Hemodialysis: if severe refractory acidosis (pH <7.0-7.1), toxic alcohols (methanol, ethylene glycol), salicylate OD (level >100 mg/dL or severe acidosis), uremia",
                "Supportive care: mechanical ventilation if respiratory failure (do NOT over-ventilate, maintain compensatory hypocapnia), fluid resuscitation, correct electrolytes (K, Mg, PO4)",
                "Monitor: ABG q1-2h, electrolytes q2-4h, lactate q2-4h (goal lactate clearance >10% per hour)"
            ],
            chronic: [
                "Uremic acidosis in CKD: oral sodium bicarbonate 650 mg (7.7 mEq) TID to goal HCO3 >22 mEq/L. Prevents CKD progression, bone disease, muscle wasting.",
                "Treat underlying CKD: ACE inhibitors/ARBs (slow progression), control BP/glucose, dialysis if ESRD",
                "Prevent DKA: patient education on insulin compliance, sick-day management, ketone monitoring",
                "Prevent AKA: alcohol cessation, nutrition support, thiamine supplementation",
                "Metformin: avoid if CrCl <30 mL/min (lactic acidosis risk)"
            ]
        },
        complications: [
            "Cardiovascular: arrhythmias (ventricular, risk of cardiac arrest if pH <7.1), myocardial depression, hypotension refractory to pressors",
            "Neurologic: altered mental status, seizures, coma, cerebral edema (if DKA treated too rapidly)",
            "Respiratory failure (if respiratory compensation inadequate)",
            "Hyperkalemia (acidosis causes K shift out of cells, risk of cardiac arrest)",
            "Death (mortality 50-80% severe lactic acidosis, 1-5% DKA if treated, 20-30% toxic alcohols if untreated)"
        ],
        prognosis: "Lactic acidosis: mortality 50-80% if severe (pH <7.1, lactate >4 mmol/L), reflects underlying disease severity. DKA: mortality 1-5% if treated appropriately, <1% in experienced centers. AKA: excellent prognosis with dextrose + thiamine. Uremia: controlled with dialysis. Toxic alcohols: mortality 20-30% if untreated, <5% with fomepizole + hemodialysis.",
        clinicalPearls: [
            "MUDPILES mnemonic: Methanol, Uremia, DKA/AKA, Propylene glycol, Iron/INH, Lactic acidosis, Ethylene glycol, Salicylates",
            "Anion gap >20: think lactic acidosis, DKA, toxic alcohols. AG 15-20: think uremia, salicylates.",
            "Check lactate FIRST (most common cause). Lactate >4 mmol/L = severe, mortality 50%.",
            "Osmolar gap >10 suggests toxic alcohol (methanol, ethylene glycol, propylene glycol). Osmolar gap = measured osm - calculated osm.",
            "Delta-delta (ΔAG/ΔHCO3) detects mixed disorders: 1-2 (pure high AG), <1 (concurrent normal AG acidosis), >2 (concurrent metabolic alkalosis).",
            "Sodium bicarb CONTROVERSIAL. Consider ONLY if pH <7.1 AND hemodynamically unstable. AVOID in lactic acidosis (worsens lactate), DKA (worsens hypokalemia, cerebral edema).",
            "Treat underlying cause FIRST: lactic acidosis (fluids, pressors, treat sepsis), DKA (insulin + fluids + K), AKA (dextrose + thiamine), uremia/toxins (hemodialysis).",
            "DKA: glucose >250, beta-hydroxybutyrate >3 mmol/L, AG 20-30. AKA: glucose low-normal, beta-hydroxybutyrate >3, AG 15-25.",
            "Methanol: visual changes, optic nerve damage, osmolar gap. Ethylene glycol: flank pain (oxalate crystals → AKI), osmolar gap. Both treated with fomepizole + hemodialysis."
        ]
    }
},
{
    id: "metabolic-acidosis-normal-ag",
    name: "Metabolic Acidosis (Normal Anion Gap)",
    system: "renal",
    categories: ["acid-base-disorders"],
    symptoms: ["weakness", "fatigue", "bone-pain", "confusion"],
    tags: ["metabolic-acidosis", "normal-anion-gap", "non-gap", "hyperchloremic", "diarrhea", "rta"],
    severity: "moderate",
    acuity: "chronic",
    pageType: "disease",
    detail: {
        definition: "Arterial pH <7.35 with HCO3 <22 mEq/L and normal anion gap 8-12 mEq/L. Also called hyperchloremic or non-anion gap acidosis. Caused by HCO3 loss (GI, renal) or impaired renal acid excretion (RTA). Cl increases to maintain electroneutrality → AG unchanged.",
        pathophysiology: "Caused by HCO3 loss or inability to excrete H+. (1) GI HCO3 loss: diarrhea (HCO3-rich fluid lost, Cl retained to maintain electroneutrality). (2) Renal HCO3 loss: RTA Type 2 (proximal tubule fails to reabsorb HCO3). (3) Impaired H+ excretion: RTA Type 1 (distal tubule fails to secrete H+), RTA Type 4 (hypoaldosteronism → ↓ H+ secretion). (4) Exogenous acid load with Cl (HCl, NH4Cl). Hyperchloremia maintains AG normal.",
        epidemiology: "Diarrhea most common cause globally (especially severe/chronic diarrhea). RTA prevalence varies: Type 1 (rare, 1:100,000), Type 2 (rare, associated with Fanconi syndrome), Type 4 (common in diabetic nephropathy, 10-20% CKD patients). Typically chronic, less life-threatening than high AG acidosis.",
        riskFactors: [
            "GI HCO3 loss: diarrhea (most common cause), ileostomy, ureterosigmoidostomy, cholestyramine (bile acid sequestrant)",
            "RTA Type 1 (distal): Sjögren syndrome, autoimmune diseases, amphotericin B, ifosfamide, hereditary",
            "RTA Type 2 (proximal): Fanconi syndrome (multiple myeloma, tenofovir, ifosfamide, acetazolamide), carbonic anhydrase inhibitors",
            "RTA Type 4 (hyperkalemic): diabetic nephropathy, CKD, hypoaldosteronism (Addison), medications (NSAIDs, ACE inhibitors, ARBs, heparin, K-sparing diuretics, trimethoprim, calcineurin inhibitors)",
            "Exogenous acid load: IV normal saline (dilutional acidosis), total parenteral nutrition, hydrochloric acid ingestion (rare)"
        ],
        presentation: "Usually chronic and mild (pH 7.25-7.35), often asymptomatic. Symptoms typically from underlying cause or chronic acidosis effects: weakness, fatigue, bone pain (chronic acidosis → bone buffering → osteomalacia), growth retardation (children). RTA Type 1: nephrolithiasis (calcium phosphate stones from alkaline urine), nephrocalcinosis, hypokalemia. RTA Type 4: hyperkalemia, mild acidosis.",
        physicalExam: [
            "Often normal exam (chronic, compensated acidosis)",
            "Volume status: dehydration if severe diarrhea",
            "Neurologic: mild confusion, weakness (if severe acidosis pH <7.2)",
            "Musculoskeletal: bone pain/tenderness (chronic acidosis, osteomalacia)",
            "Signs of underlying cause: chronic diarrhea, signs of autoimmune disease (Sjögren: dry eyes/mouth), CKD"
        ],
        diagnosticCriteria: "ABG: pH <7.35, HCO3 <22 mEq/L, AG 8-12 mEq/L (normal). Workup: (1) Check urine pH: >5.5 (RTA Type 1 or 2, bicarbonaturia), <5.5 (diarrhea, RTA Type 4, appropriate renal response). (2) Urine AG = (UNa + UK) - UCl: negative (diarrhea, HCO3 loss via GI), positive (RTA, HCO3 loss via kidneys). (3) Check K: ↓ K (RTA Type 1 or 2), ↑ K (RTA Type 4). (4) Fractional excretion of HCO3 (if RTA Type 2 suspected).",
        labs: [
            "ABG: pH <7.35, HCO3 <22 mEq/L, PCO2 ↓ (respiratory compensation)",
            "Anion gap 8-12 mEq/L (normal, AG = Na - [Cl + HCO3])",
            "Serum Cl ↑ (hyperchloremic acidosis, Cl typically >105-110 mEq/L)",
            "K: ↓ (RTA Type 1, 2, diarrhea), ↑ (RTA Type 4, hypoaldosteronism)",
            "Urine pH: >5.5 (RTA Type 1 = distal, unable to acidify urine despite acidosis), <5.5 (RTA Type 4, diarrhea)",
            "Urine AG (UNa + UK - UCl): negative (diarrhea, extrarenal HCO3 loss), positive (RTA, renal HCO3 loss)",
            "FE-HCO3 >15% (RTA Type 2, proximal tubule fails to reabsorb HCO3 after bicarb load)",
            "Plasma aldosterone, renin (if suspect RTA Type 4/hypoaldosteronism)"
        ],
        imaging: ["KUB or renal ultrasound: nephrocalcinosis (RTA Type 1, chronic hypercalciuria from alkaline urine)", "Bone X-rays (if chronic): osteomalacia, fractures from chronic acidosis"],
        differentialDiagnosis: [
            "Diarrhea (most common): severe/chronic diarrhea, ileostomy, laxative abuse. Urine pH <5.5, urine AG negative, ↓ K.",
            "RTA Type 1 (distal): urine pH >5.5 despite acidosis, ↓ K, nephrolithiasis/nephrocalcinosis. Causes: Sjögren, autoimmune, amphotericin B.",
            "RTA Type 2 (proximal): urine pH <5.5 (can acidify, but only after bicarb wasted), FE-HCO3 >15%, Fanconi syndrome (also glucosuria, phosphaturia, aminoaciduria). Causes: multiple myeloma, tenofovir.",
            "RTA Type 4 (hyperkalemic): mild acidosis (HCO3 usually 17-20 mEq/L), ↑ K, urine pH <5.5. Causes: diabetic nephropathy, CKD, hypoaldosteronism, ACE/ARB/NSAIDs.",
            "Dilutional acidosis: rapid IV normal saline (Cl load), transient, self-limited",
            "Early CKD: before uremic acidosis develops (high AG), may have normal AG acidosis",
            "Ureterosigmoidostomy: sigmoid colon reabsorbs urinary Cl, secretes HCO3 → hyperchloremic acidosis"
        ],
        management: {
            acute: [
                "Usually chronic/mild, rarely requires urgent treatment (pH typically >7.2)",
                "Treat underlying cause: (1) Diarrhea: fluid resuscitation (NS), antidiarrheals, treat infection. (2) Stop offending medications (acetazolamide, tenofovir). (3) RTA: see chronic management."
            ],
            chronic: [
                "Oral sodium bicarbonate (MAINSTAY): 650 mg (7.7 mEq) TID to QID. Goal: HCO3 >22 mEq/L. Prevents bone disease, growth retardation (children), CKD progression.",
                "RTA Type 1: high-dose alkali (1-3 mEq/kg/day), K supplementation (often needed), thiazide diuretics (↓ urinary Ca, prevent stones)",
                "RTA Type 2: very high-dose alkali (10-20 mEq/kg/day, often impractical), thiazide diuretics (induce volume depletion → ↑ proximal HCO3 reabsorption), K supplementation",
                "RTA Type 4: (1) Fludrocortisone 0.1-0.2 mg daily (if hypoaldosteronism), (2) Loop diuretics (furosemide 40 mg daily, ↑ renal K excretion), (3) Dietary K restriction, (4) Stop ACE/ARB/NSAIDs if possible. Alkali often not needed (mild acidosis).",
                "Treat complications: vitamin D + Ca (osteomalacia), citrate (nephrolithiasis prevention in RTA Type 1)"
            ]
        },
        complications: [
            "Nephrolithiasis, nephrocalcinosis (RTA Type 1, alkaline urine + hypercalciuria → calcium phosphate stones)",
            "Osteomalacia, pathologic fractures (chronic acidosis → bone buffering → Ca/PO4 loss from bone)",
            "Growth retardation (children with chronic acidosis, inadequate bone mineralization)",
            "Hypokalemia complications (RTA Type 1, 2, diarrhea): arrhythmias, weakness",
            "Hyperkalemia complications (RTA Type 4): arrhythmias, cardiac arrest if K >6.5 mEq/L",
            "CKD progression (chronic acidosis accelerates kidney disease)"
        ],
        prognosis: "Generally good if underlying cause treated and alkali replacement adequate. Diarrhea: resolves with treatment. RTA: lifelong treatment required, good prognosis with adequate alkali/electrolyte management. Complications (nephrolithiasis, osteomalacia) preventable with treatment.",
        clinicalPearls: [
            "Normal AG acidosis = hyperchloremic acidosis (Cl ↑ to replace lost HCO3). Think diarrhea (most common) vs RTA.",
            "Urine pH differentiates: >5.5 (RTA Type 1, unable to acidify), <5.5 (RTA Type 4, diarrhea, appropriate acidification)",
            "Urine AG (UNa + UK - UCl) differentiates: negative (diarrhea, extrarenal HCO3 loss), positive (RTA, renal HCO3 loss)",
            "K level differentiates RTAs: ↓ K (Type 1 distal, Type 2 proximal), ↑ K (Type 4 hypoaldosteronism)",
            "RTA Type 1: urine pH >5.5 + nephrolithiasis/nephrocalcinosis + ↓ K. Treat with alkali + K + thiazide.",
            "RTA Type 2: FE-HCO3 >15%, Fanconi syndrome (glucosuria, phosphaturia, aminoaciduria). Needs very high alkali doses (10-20 mEq/kg/day).",
            "RTA Type 4: ↑ K + mild acidosis (HCO3 17-20) + CKD/diabetes. Treat hyperkalemia (fludrocortisone, loop diuretics, K restriction), alkali usually not needed.",
            "Chronic acidosis → bone buffering → osteomalacia. Alkali replacement prevents bone disease and slows CKD progression.",
            "Diarrhea: most common cause worldwide. Urine pH <5.5 (appropriate), urine AG negative, ↓ K from GI losses."
        ]
    }
},
{
    id: "metabolic-alkalosis",
    name: "Metabolic Alkalosis",
    system: "renal",
    categories: ["acid-base-disorders"],
    symptoms: ["confusion", "muscle-cramps", "tetany", "weakness", "paresthesias"],
    tags: ["metabolic-alkalosis", "contraction-alkalosis", "vomiting", "diuretics", "hypokalemia"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Arterial pH >7.45 with HCO3 >26 mEq/L. Caused by H+ loss (vomiting, NG suction), HCO3 gain (alkali ingestion), or contraction alkalosis (diuretics, volume depletion). Severe alkalosis (pH >7.6) can cause arrhythmias, seizures, decreased consciousness.",
        pathophysiology: "Requires both generation and maintenance. Generation: (1) H+ loss (vomiting, NG suction → lose gastric HCl), (2) HCO3 gain (alkali ingestion, citrate in blood products), (3) Contraction alkalosis (volume loss concentrates existing HCO3). Maintenance: kidneys normally excrete excess HCO3 rapidly, but maintenance factors prevent this: hypovolemia (↑ proximal HCO3 reabsorption), hypokalemia (↑ H+ secretion, ↑ HCO3 reabsorption), hypochloremia (Cl needed for HCO3 excretion).",
        epidemiology: "Prevalence 50% ICU patients (diuretics, NG suction). Vomiting/NG suction common in postoperative patients. Diuretic use (loop/thiazides) most common outpatient cause. Severe alkalosis (pH >7.6) rare but mortality 40-80% (reflects critical illness severity).",
        riskFactors: [
            "Vomiting, NG suction (lose HCl → ↑ HCO3, volume depletion maintains alkalosis)",
            "Diuretics: loop (furosemide) or thiazides (HCTZ) → volume contraction + hypokalemia + hypochloremia → maintain alkalosis",
            "Villous adenoma (colon tumor secretes Cl-rich, K-rich fluid → lose Cl/K, retain HCO3)",
            "Congenital chloride diarrhea (rare, lose Cl in stool)",
            "Hyperaldosteronism: primary (Conn syndrome, adrenal adenoma), secondary (CHF, cirrhosis, renal artery stenosis) → ↑ H+ excretion → ↑ HCO3",
            "Cushing syndrome (↑ cortisol → mineralocorticoid effect)",
            "Bartter/Gitelman syndrome (genetic, mimic loop/thiazide diuretics)",
            "Alkali ingestion: milk-alkali syndrome (Ca carbonate + milk), massive blood transfusion (citrate → HCO3), sodium bicarbonate therapy",
            "Post-hypercapnia: chronic respiratory acidosis (COPD) → compensatory ↑ HCO3, then acute correction of hypercapnia (mechanical ventilation) → HCO3 remains ↑"
        ],
        presentation: "Often asymptomatic if mild (pH 7.45-7.5). Moderate (pH 7.5-7.6): confusion, lethargy, paresthesias (perioral, fingers), muscle cramps, tetany (↓ ionized Ca from alkalosis). Severe (pH >7.6): seizures, arrhythmias (ventricular, atrial fibrillation), altered mental status, coma.",
        physicalExam: [
            "Volume status CRITICAL: hypovolemic (dry mucous membranes, orthostatic hypotension, tachycardia) = saline-responsive. Euvolemic/hypervolemic (edema, ↑ JVP) = saline-resistant (hyperaldosteronism).",
            "Neuromuscular: Chvostek/Trousseau signs (↓ ionized Ca from alkalosis), hyperreflexia, tetany, muscle cramps",
            "Neurologic: confusion, lethargy, seizures (if severe)",
            "Cardiovascular: arrhythmias (if severe alkalosis or hypokalemia)"
        ],
        diagnosticCriteria: "ABG: pH >7.45, HCO3 >26 mEq/L. Workup: (1) Assess volume status (hypovolemic vs euvolemic/hypervolemic), (2) Check urine Cl: <20 mEq/L (saline-responsive: vomiting, diuretics remote use, contraction), >20 mEq/L (saline-resistant: hyperaldosteronism, current diuretics, Bartter/Gitelman), (3) Check K (usually ↓), (4) Respiratory compensation: expected PCO2 = 40 + 0.7 × (HCO3 - 24). If PCO2 higher than expected = concurrent respiratory acidosis.",
        labs: [
            "ABG: pH >7.45, HCO3 >26 mEq/L, PCO2 ↑ (respiratory compensation, hypoventilation)",
            "K: ↓ (coexists in 90%, shifts into cells with alkalosis, also lost via kidneys/GI)",
            "Cl: ↓ (hypochloremia from vomiting, diuretics, maintains alkalosis)",
            "Urine Cl <20 mEq/L (saline-responsive): vomiting, NG suction, remote diuretics, contraction alkalosis. Treat with NS.",
            "Urine Cl >20 mEq/L (saline-resistant): current diuretics, hyperaldosteronism, Bartter/Gitelman, alkali load. Treat underlying cause.",
            "Plasma aldosterone, renin (if suspect hyperaldosteronism): ↑ aldo + ↓ renin (primary), ↑ aldo + ↑ renin (secondary)",
            "Ionized Ca (often ↓ from alkalosis, ↑ Ca binding to albumin)"
        ],
        imaging: ["EKG: flattened T waves, prominent U waves (from hypokalemia), prolonged QT, arrhythmias", "CT adrenal (if suspect Conn syndrome, primary hyperaldosteronism)"],
        differentialDiagnosis: [
            "SALINE-RESPONSIVE (urine Cl <20 mEq/L, hypovolemic): Vomiting/NG suction (most common), remote diuretic use (stopped >24h ago), contraction alkalosis, congenital chloride diarrhea",
            "SALINE-RESISTANT (urine Cl >20 mEq/L, normovolemic/hypervolemic): Current diuretic use (loop/thiazides), primary hyperaldosteronism (Conn syndrome, ↑ aldo, ↓ renin), secondary hyperaldosteronism (CHF, cirrhosis, renal artery stenosis, ↑ aldo, ↑ renin), Cushing syndrome, Bartter/Gitelman syndrome, exogenous steroids",
            "Alkali ingestion: milk-alkali syndrome (Ca carbonate), sodium bicarbonate therapy, massive transfusion (citrate)",
            "Post-hypercapnia: chronic COPD with compensatory ↑ HCO3, then acute correction → persistent ↑ HCO3"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Severe (pH >7.6) or symptomatic (seizures, arrhythmias, altered mental status) = URGENT",
                "Saline-responsive (urine Cl <20, hypovolemic): IV normal saline 100-200 mL/h (provides Cl for renal HCO3 excretion, restores volume). Usually corrects alkalosis within 24-48h.",
                "Potassium repletion (CRITICAL): Correct hypokalemia FIRST before alkalosis (alkalosis worsens with K repletion initially, but necessary). KCl 40-80 mEq PO or 10-20 mEq/h IV.",
                "Saline-resistant (urine Cl >20): (1) Stop diuretics if possible, (2) Treat hyperaldosteronism: spironolactone 25-50 mg daily (if primary/secondary hyperaldosteronism), (3) Acetazolamide 250-500 mg PO/IV daily (carbonic anhydrase inhibitor, ↑ renal HCO3 excretion). Use cautiously, causes K loss.",
                "Hydrochloric acid (0.1-0.2 N HCl) via central line: ONLY if severe refractory alkalosis (pH >7.6) AND life-threatening (seizures, arrhythmias). Rarely used, high complication risk.",
                "Hemodialysis: if severe refractory alkalosis + renal failure",
                "Monitor: ABG q2-4h, electrolytes q4-6h, continuous telemetry if arrhythmias"
            ],
            chronic: [
                "Treat underlying cause: stop diuretics or reduce dose, H2 blocker/PPI (if chronic vomiting from PUD), parathyroidectomy (primary hyperaldosteronism if indicated)",
                "KCl supplementation: 40-80 mEq daily (if chronic diuretic use)",
                "Spironolactone 25-100 mg daily (if hyperaldosteronism or chronic diuretic use)",
                "Acetazolamide 250 mg daily (if chronic diuretic-induced alkalosis, ↑ renal HCO3 excretion)",
                "Monitor electrolytes monthly"
            ]
        },
        complications: [
            "Hypokalemia (nearly universal, shifts into cells with alkalosis, also lost via kidneys/GI) → arrhythmias, muscle weakness",
            "Hypocalcemia (↑ Ca-albumin binding with alkalosis) → tetany, seizures",
            "Arrhythmias (atrial fibrillation, ventricular arrhythmias from alkalosis + hypokalemia)",
            "Seizures (severe alkalosis pH >7.6, ↓ ionized Ca)",
            "Altered mental status, confusion, coma (severe alkalosis)",
            "Hypoventilation (respiratory compensation) → hypoxemia (especially if underlying lung disease)"
        ],
        prognosis: "Mild-moderate (pH 7.45-7.55): benign if corrected, usually resolves with treatment. Severe (pH >7.6): mortality 40-80% (reflects critical illness, not alkalosis per se). Saline-responsive: excellent prognosis with NS + KCl. Saline-resistant: depends on underlying cause (hyperaldosteronism, CHF).",
        clinicalPearls: [
            "Urine Cl differentiates: <20 mEq/L (saline-responsive: vomiting, diuretics remote), >20 mEq/L (saline-resistant: hyperaldosteronism, current diuretics)",
            "Saline-responsive: treat with NS + KCl. Saline-resistant: treat underlying cause (stop diuretics, spironolactone if hyperaldosteronism).",
            "ALWAYS correct hypokalemia (coexists in 90%). Alkalosis will NOT correct without K repletion.",
            "Maintenance factors: hypovolemia, hypokalemia, hypochloremia. All must be corrected for alkalosis to resolve.",
            "Vomiting: lose HCl → ↑ HCO3 + volume depletion + hypokalemia. Classic triad: metabolic alkalosis + hypokalemia + hypochloremia.",
            "Contraction alkalosis: volume loss (diuretics, vomiting) concentrates existing HCO3 → ↑ HCO3 concentration. Treat with NS.",
            "Post-hypercapnia alkalosis: chronic COPD → compensatory ↑ HCO3, then intubation/mechanical ventilation rapidly ↓ CO2, but HCO3 remains ↑ for days.",
            "Milk-alkali syndrome: Ca carbonate (antacid/supplement) + milk → hypercalcemia + metabolic alkalosis + renal insufficiency. Treat by stopping Ca.",
            "Severe alkalosis (pH >7.6) rarely requires HCl infusion. Treat underlying cause + NS + KCl usually sufficient."
        ]
    }
},
{
    id: "respiratory-acidosis-alkalosis",
    name: "Respiratory Acidosis & Alkalosis",
    system: "renal",
    categories: ["acid-base-disorders"],
    symptoms: ["dyspnea", "confusion", "headache", "tachypnea", "somnolence"],
    tags: ["respiratory-acidosis", "respiratory-alkalosis", "hypercapnia", "hypocapnia", "hypoventilation", "hyperventilation"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "RESPIRATORY ACIDOSIS: pH <7.35 with PCO2 >45 mmHg. Caused by alveolar hypoventilation (↓ CO2 excretion). RESPIRATORY ALKALOSIS: pH >7.45 with PCO2 <35 mmHg. Caused by alveolar hyperventilation (↑ CO2 excretion). Both can be acute (minutes-hours) or chronic (days-weeks) with different compensation.",
        pathophysiology: "ACIDOSIS: Hypoventilation → ↑ PCO2 → ↑ H+ (CO2 + H2O ⇄ H2CO3 ⇄ H+ + HCO3). Compensation: (1) Acute (cellular buffering, minimal HCO3 ↑): HCO3 ↑ by 1 mEq/L per 10 mmHg ↑ PCO2. (2) Chronic (renal HCO3 retention): HCO3 ↑ by 3.5 mEq/L per 10 mmHg ↑ PCO2 (takes 3-5 days). ALKALOSIS: Hyperventilation → ↓ PCO2 → ↓ H+. Compensation: (1) Acute (cellular buffering): HCO3 ↓ by 2 mEq/L per 10 mmHg ↓ PCO2. (2) Chronic (renal HCO3 excretion): HCO3 ↓ by 5 mEq/L per 10 mmHg ↓ PCO2 (takes 2-3 days).",
        epidemiology: "ACIDOSIS: Common in COPD (prevalence 10-20% stable COPD, up to 40% exacerbations), obesity hypoventilation syndrome (5-10% obese patients). Acute hypercapnic respiratory failure mortality 10-30% depending on cause. ALKALOSIS: Very common (prevalence 20-30% hospitalized). Sepsis, liver disease, pregnancy, anxiety/panic attacks. Usually benign unless severe (PCO2 <20 mmHg).",
        riskFactors: [
            "RESPIRATORY ACIDOSIS - ACUTE: Sedative overdose (opioids, benzodiazepines → CNS depression), acute airway obstruction (foreign body, anaphylaxis, laryngospasm), severe asthma/COPD exacerbation, pneumonia, pulmonary edema, neuromuscular weakness (myasthenia crisis, GBS, botulism), chest trauma (flail chest, pneumothorax)",
            "RESPIRATORY ACIDOSIS - CHRONIC: COPD (emphysema, chronic bronchitis, most common), obesity hypoventilation syndrome (Pickwickian syndrome, BMI >30), kyphoscoliosis, chronic neuromuscular disease (ALS, muscular dystrophy), central hypoventilation (tumor, stroke affecting respiratory center)",
            "RESPIRATORY ALKALOSIS - ACUTE: Anxiety/panic attack, pain, sepsis, pulmonary embolism, pneumonia, asthma, CHF (pulmonary edema), high altitude, salicylate overdose (direct stimulation of respiratory center)",
            "RESPIRATORY ALKALOSIS - CHRONIC: Liver cirrhosis, pregnancy, chronic hypoxemia (interstitial lung disease, CHF), CNS disease (tumor, stroke), mechanical over-ventilation"
        ],
        presentation: "ACIDOSIS - ACUTE: dyspnea, confusion, headache, somnolence → stupor → coma (CO2 narcosis if PCO2 >70-80 mmHg), asterixis, papilledema (↑ ICP from cerebral vasodilation). ACIDOSIS - CHRONIC: often minimal symptoms (compensated), dyspnea on exertion, fatigue, morning headaches, cor pulmonale (RV failure from pulmonary hypertension). ALKALOSIS: lightheadedness, paresthesias (perioral, fingers), tetany, muscle cramps, chest pain, palpitations, confusion (if severe PCO2 <20 mmHg).",
        physicalExam: [
            "ACIDOSIS: Tachypnea (trying to compensate), paradoxical respirations (diaphragm fatigue), use of accessory muscles, cyanosis, altered mental status (confusion, stupor, coma), asterixis (flapping tremor), papilledema (↑ ICP), signs of RV failure (↑ JVP, peripheral edema from cor pulmonale if chronic)",
            "ALKALOSIS: Tachypnea (hyperventilation), Chvostek/Trousseau signs (↓ ionized Ca), hyperreflexia, carpopedal spasm, signs of underlying cause (fever in sepsis, signs of liver disease)"
        ],
        diagnosticCriteria: "ABG CRITICAL. ACIDOSIS: pH <7.35, PCO2 >45 mmHg. Assess compensation: Acute (HCO3 ↑ 1 per 10 ↑ PCO2), Chronic (HCO3 ↑ 3.5 per 10 ↑ PCO2). If HCO3 less than expected = concurrent metabolic acidosis. If HCO3 more than expected = concurrent metabolic alkalosis. ALKALOSIS: pH >7.45, PCO2 <35 mmHg. Assess compensation: Acute (HCO3 ↓ 2 per 10 ↓ PCO2), Chronic (HCO3 ↓ 5 per 10 ↓ PCO2).",
        labs: [
            "ABG: ACIDOSIS (pH <7.35, PCO2 >45 mmHg), ALKALOSIS (pH >7.45, PCO2 <35 mmHg)",
            "PaO2: ↓ if ventilation-perfusion mismatch (COPD, pneumonia, PE)",
            "HCO3: compensatory ↑ (chronic acidosis) or ↓ (chronic alkalosis)",
            "Serum electrolytes: ↑ K (acidosis shifts K out of cells), ↓ ionized Ca (alkalosis ↑ Ca-albumin binding)",
            "Lactate (if acidosis + ↑ AG → mixed metabolic + respiratory acidosis)"
        ],
        imaging: ["Chest X-ray: COPD (hyperinflation, bullae, flattened diaphragms), pneumonia, pulmonary edema, pneumothorax, pleural effusion", "CT chest (if suspect PE): filling defects in pulmonary arteries", "ABG (MOST IMPORTANT DIAGNOSTIC TEST)"],
        differentialDiagnosis: [
            "RESPIRATORY ACIDOSIS - ACUTE: Sedative/opioid overdose (depressed respirations, miosis), acute airway obstruction (stridor, inability to speak), severe asthma/COPD exacerbation (wheezing, prolonged expiration, accessory muscle use), pulmonary edema (CHF, rales, ↑ JVP), neuromuscular crisis (myasthenia, GBS: weakness, diplopia, areflexia), pneumothorax (↓ breath sounds, hyperresonance)",
            "RESPIRATORY ACIDOSIS - CHRONIC: COPD (most common, smoking history, wheezing, barrel chest), obesity hypoventilation (BMI >30, daytime hypersomnolence, snoring), kyphoscoliosis (visible spinal deformity), chronic neuromuscular disease (ALS, muscular dystrophy: progressive weakness)",
            "RESPIRATORY ALKALOSIS - ACUTE: Anxiety/panic (hyperventilation, perioral paresthesias, carpopedal spasm), sepsis (fever, hypotension, ↑ WBC), PE (pleuritic chest pain, tachycardia, hypoxemia), salicylate overdose (tinnitus, also causes metabolic acidosis → mixed disorder), high altitude",
            "RESPIRATORY ALKALOSIS - CHRONIC: Liver cirrhosis (ascites, spider angiomas, progesterone-mediated hyperventilation), pregnancy (progesterone), chronic hypoxemia (ILD, CHF), mechanical over-ventilation"
        ],
        management: {
            acute: [
                "RESPIRATORY ACIDOSIS - TREAT UNDERLYING CAUSE (PRIORITY):",
                "(1) Sedative overdose: naloxone 0.4-2 mg IV (opioids), flumazenil 0.2 mg IV (benzos, but risk seizures)",
                "(2) Acute airway obstruction: intubation, cricothyrotomy if cannot intubate, remove foreign body",
                "(3) COPD/asthma exacerbation: bronchodilators (albuterol, ipratropium), glucocorticoids (prednisone 40-60 mg), antibiotics if infection",
                "(4) Neuromuscular: intubation + mechanical ventilation, treat underlying (pyridostigmine for myasthenia, IVIG for GBS)",
                "Non-invasive ventilation (BiPAP): if alert, cooperative, PCO2 50-70 mmHg, pH 7.25-7.35. AVOID in ↓ consciousness, hemodynamic instability.",
                "Intubation + mechanical ventilation: if severe (pH <7.2, PCO2 >70-80 mmHg), altered mental status, hemodynamic instability, respiratory arrest. CAUTION: Avoid rapid correction of chronic hypercapnia (risk post-hypercapnic alkalosis, seizures). Aim PCO2 60-65 mmHg if chronic.",
                "RESPIRATORY ALKALOSIS - TREAT UNDERLYING CAUSE:",
                "(1) Anxiety: reassurance, breathe into paper bag (↑ rebreathing CO2), benzodiazepines if severe",
                "(2) Sepsis: antibiotics, fluids, vasopressors",
                "(3) PE: anticoagulation (heparin, LMWH), thrombolytics if massive PE",
                "(4) Salicylate overdose: activated charcoal, alkalinize urine (sodium bicarb), hemodialysis if severe",
                "(5) Mechanical ventilation: ↓ respiratory rate or tidal volume"
            ],
            chronic: [
                "RESPIRATORY ACIDOSIS:",
                "(1) COPD: inhaled bronchodilators (LABA/LAMA), inhaled glucocorticoids, smoking cessation, pulmonary rehabilitation, supplemental O2 if hypoxemic (goal SpO2 88-92%, avoid high O2 in chronic hypercapnia)",
                "(2) Obesity hypoventilation: weight loss, CPAP/BiPAP at night, bariatric surgery if BMI >40",
                "(3) Neuromuscular: non-invasive ventilation (BiPAP) at night, diaphragm pacing (experimental)",
                "Acetazolamide 250 mg BID (↑ renal HCO3 excretion, ↓ metabolic compensation, stimulates ventilation). Used in chronic hypercapnia, central sleep apnea.",
                "RESPIRATORY ALKALOSIS: Treat underlying cause (liver disease, pregnancy supportive care). Usually benign, no specific treatment needed."
            ]
        },
        complications: [
            "RESPIRATORY ACIDOSIS: CO2 narcosis (altered mental status, coma from PCO2 >70-80 mmHg), cerebral edema (CO2 → cerebral vasodilation → ↑ ICP), arrhythmias, cor pulmonale (chronic hypoxemia → pulmonary hypertension → RV failure), respiratory arrest",
            "RESPIRATORY ALKALOSIS: Decreased cerebral blood flow (CO2 → cerebral vasoconstriction, risk ischemia/seizures if severe PCO2 <20 mmHg), hypocalcemia (↑ Ca-albumin binding → tetany, seizures), hypokalemia (K shifts into cells), arrhythmias (if severe)"
        ],
        prognosis: "ACIDOSIS - ACUTE: Mortality 10-30% (depends on cause, COPD exacerbation 3-10%, opioid overdose 1-5% if treated). ACIDOSIS - CHRONIC: Variable (COPD median survival 3-5 years with chronic hypercapnia, worse than normocapnic COPD). ALKALOSIS: Usually benign, excellent prognosis unless severe (PCO2 <20 mmHg). Mortality reflects underlying disease (sepsis, liver failure).",
        clinicalPearls: [
            "ACIDOSIS: Always distinguish acute vs chronic by compensation. Acute: HCO3 ↑ 1 per 10 ↑ PCO2. Chronic: HCO3 ↑ 3.5 per 10 ↑ PCO2 (takes 3-5 days).",
            "Chronic hypercapnia (COPD): DO NOT over-oxygenate (goal SpO2 88-92%). High O2 → ↓ hypoxic drive → worsening hypercapnia.",
            "BiPAP indications: alert, cooperative, PCO2 50-70 mmHg, pH 7.25-7.35. Intubation: pH <7.2, PCO2 >70-80 mmHg, altered mental status.",
            "AVOID rapid correction of chronic hypercapnia (risk post-hypercapnic alkalosis, seizures). Aim PCO2 60-65 mmHg if chronic.",
            "CO2 narcosis: altered mental status, stupor, coma from PCO2 >70-80 mmHg. Treat with ventilation (BiPAP or intubation).",
            "ALKALOSIS: Usually benign. Anxiety → hyperventilation → paresthesias, carpopedal spasm. Treat with paper bag rebreathing.",
            "Salicylate overdose: mixed disorder (respiratory alkalosis from direct CNS stimulation + high AG metabolic acidosis from salicylate). Treat with alkalinize urine, hemodialysis.",
            "Pregnancy: chronic respiratory alkalosis (progesterone stimulates respiratory center, PCO2 ~30 mmHg normal in pregnancy).",
            "ABG is CRITICAL for diagnosis. Always calculate expected compensation to detect mixed disorders."
        ]
    }
},
{
    id: "mixed-acid-base-disorders",
    name: "Mixed Acid-Base Disorders",
    system: "renal",
    categories: ["acid-base-disorders"],
    symptoms: ["variable", "depends-on-components", "confusion", "dyspnea"],
    tags: ["mixed-disorders", "triple-disorders", "compensation", "delta-delta", "anion-gap"],
    severity: "severe",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Presence of two or more primary acid-base disturbances simultaneously (e.g., metabolic acidosis + respiratory alkalosis). Occurs in 10-30% hospitalized patients with acid-base disorders. Can be double (2 disorders) or triple (3 disorders, rare but possible). Triple disorders always include respiratory disorder + 2 metabolic disorders (e.g., respiratory acidosis + high AG metabolic acidosis + metabolic alkalosis).",
        pathophysiology: "Mixed disorders result when multiple pathologic processes affect acid-base status simultaneously. The key is that compensation is PHYSIOLOGIC (predictable, never overcompensates) while mixed disorders represent SEPARATE PATHOLOGIC processes. Example: DKA (metabolic acidosis) causes respiratory compensation (↓ PCO2), but if PCO2 drops MORE than predicted by compensation formula, this indicates a second pathologic process (respiratory alkalosis from sepsis/pain). Delta-delta helps detect hidden metabolic disorders when high AG metabolic acidosis is present.",
        epidemiology: "Prevalence 10-30% of patients with acid-base disorders. Most common: (1) High AG metabolic acidosis + respiratory alkalosis (sepsis, salicylate OD, 40-50% of high AG acidosis patients), (2) Respiratory acidosis + metabolic alkalosis (COPD on diuretics, 30-40% COPD patients), (3) High AG metabolic acidosis + metabolic alkalosis (DKA + vomiting, 10-20% DKA). Triple disorders rare (<5% of mixed disorders) but possible.",
        riskFactors: [
            "Sepsis (lactic acidosis + respiratory alkalosis from hyperventilation + metabolic alkalosis from vomiting/NG suction)",
            "COPD on diuretics (respiratory acidosis + metabolic alkalosis)",
            "DKA + vomiting (high AG metabolic acidosis + metabolic alkalosis from H+ loss)",
            "Alcoholic patient with pancreatitis (metabolic acidosis from lactic acidosis, metabolic alkalosis from vomiting, respiratory alkalosis from pain/hyperventilation)",
            "Renal failure + CHF on diuretics (high AG metabolic acidosis from uremia + metabolic alkalosis from diuretics + respiratory acidosis from pulmonary edema)",
            "Salicylate overdose (respiratory alkalosis from direct CNS stimulation + high AG metabolic acidosis from salicylate)",
            "Cirrhosis (respiratory alkalosis from progesterone + metabolic alkalosis from diuretics/vomiting + possible lactic acidosis if hypotensive)"
        ],
        presentation: "Presentation depends on dominant disorder and severity. pH may be normal, acidemic, or alkalemic depending on relative contributions of each disorder. Clues to mixed disorder: (1) pH normal despite abnormal HCO3 and PCO2, (2) Compensation greater or less than predicted, (3) Delta-delta ≠1-2, (4) Clinical scenario suggests multiple processes (e.g., COPD patient on diuretics).",
        physicalExam: [
            "Physical exam reflects underlying conditions causing each disorder",
            "Respiratory: tachypnea (metabolic acidosis compensation or respiratory alkalosis), bradypnea (respiratory acidosis)",
            "Cardiovascular: hypotension (sepsis, lactic acidosis), signs of CHF (pulmonary edema → respiratory acidosis)",
            "Neurologic: confusion, altered mental status (severe acidosis or alkalosis)",
            "Volume status: dehydration (metabolic alkalosis from vomiting, DKA), edema (CHF, cirrhosis)"
        ],
        diagnosticCriteria: "ABG + systematic analysis REQUIRED. STEP-BY-STEP APPROACH: (1) Look at pH: acidemia (<7.35), alkalemia (>7.45), or normal (suggests mixed disorder). (2) Identify PRIMARY disorder: if pH <7.35, primary is acidosis (check HCO3 vs PCO2 to determine metabolic vs respiratory). If pH >7.45, primary is alkalosis. (3) Calculate expected compensation. If compensation not as expected → MIXED DISORDER. (4) Calculate anion gap. If AG >12 → high AG acidosis present. (5) Calculate delta-delta if AG elevated. (6) Integrate clinical context.",
        labs: [
            "ABG: pH, HCO3, PCO2 (CRITICAL for diagnosis)",
            "Anion gap = Na - (Cl + HCO3), normal 8-12 mEq/L",
            "COMPENSATION FORMULAS:",
            "  - Metabolic acidosis: Expected PCO2 = (1.5 × HCO3) + 8 ± 2 (Winter formula)",
            "  - Metabolic alkalosis: Expected PCO2 = 40 + 0.7 × (HCO3 - 24)",
            "  - Respiratory acidosis ACUTE: Expected HCO3 = 24 + [(PCO2 - 40) / 10]",
            "  - Respiratory acidosis CHRONIC: Expected HCO3 = 24 + [3.5 × (PCO2 - 40) / 10]",
            "  - Respiratory alkalosis ACUTE: Expected HCO3 = 24 - [2 × (40 - PCO2) / 10]",
            "  - Respiratory alkalosis CHRONIC: Expected HCO3 = 24 - [5 × (40 - PCO2) / 10]",
            "DELTA-DELTA = ΔAG / ΔHCO3 = (AG - 12) / (24 - HCO3):",
            "  - If 1-2: pure high AG metabolic acidosis",
            "  - If <1: concurrent normal AG metabolic acidosis (AG rose but HCO3 dropped more than expected)",
            "  - If >2: concurrent metabolic alkalosis (AG rose but HCO3 didn't drop as much as expected)",
            "Lactate, glucose, ketones, BUN, Cr (identify causes of each disorder)"
        ],
        imaging: ["Chest X-ray (pneumonia, CHF, COPD)", "CT chest if suspect PE (respiratory alkalosis)"],
        differentialDiagnosis: [
            "COMMON MIXED DISORDERS:",
            "1. High AG metabolic acidosis + respiratory alkalosis: Sepsis (lactic acidosis + hyperventilation), salicylate OD (direct CNS stimulation + salicylate acidosis), liver failure (lactic acidosis + hyperventilation)",
            "2. Respiratory acidosis + metabolic alkalosis: COPD on diuretics (hypoventilation + diuretic-induced alkalosis), obesity hypoventilation on diuretics",
            "3. High AG metabolic acidosis + metabolic alkalosis: DKA + vomiting (ketoacidosis + H+ loss), uremia + diuretics (uremic acidosis + diuretic alkalosis), lactic acidosis + NG suction",
            "4. High AG metabolic acidosis + normal AG metabolic acidosis: DKA + diarrhea (ketoacidosis + HCO3 loss), uremia + RTA",
            "5. Respiratory alkalosis + metabolic alkalosis: Cirrhosis on diuretics (progesterone-mediated hyperventilation + diuretics), pregnancy + vomiting",
            "6. Metabolic acidosis + metabolic alkalosis with normal AG: Diarrhea + vomiting (HCO3 loss GI + H+ loss GI), RTA + diuretics",
            "TRIPLE DISORDERS (respiratory + 2 metabolic, rare):",
            "7. Respiratory acidosis + high AG metabolic acidosis + metabolic alkalosis: COPD + renal failure + diuretics, COPD + DKA + vomiting"
        ],
        management: {
            acute: [
                "IDENTIFY AND TREAT EACH COMPONENT DISORDER SEPARATELY (CRITICAL):",
                "Step 1: Stabilize patient (ABCs, IV access, monitor)",
                "Step 2: Treat life-threatening component first: (1) Severe acidosis (pH <7.1): treat lactic acidosis (fluids, pressors, treat sepsis), DKA (insulin + fluids), toxic ingestions (hemodialysis, fomepizole). (2) Severe alkalosis (pH >7.6): treat metabolic alkalosis (NS + KCl if saline-responsive), (3) Respiratory failure: BiPAP or intubation if PCO2 >70-80 mmHg or PCO2 <20 mmHg with symptoms.",
                "Step 3: Address EACH disorder systematically:",
                "  - High AG metabolic acidosis: treat cause (sepsis, DKA, uremia, toxins)",
                "  - Normal AG metabolic acidosis: treat diarrhea, give alkali if RTA",
                "  - Metabolic alkalosis: give NS + KCl if saline-responsive (vomiting), stop diuretics, treat hyperaldosteronism",
                "  - Respiratory acidosis: treat COPD exacerbation, reverse sedation (naloxone), BiPAP/intubation",
                "  - Respiratory alkalosis: treat sepsis, anxiety (reassurance, benzos), pain control, PE (anticoagulation)",
                "AVOID: Treating only one disorder and ignoring others. Example: Giving bicarbonate for metabolic acidosis without treating concurrent respiratory acidosis will worsen CO2 retention.",
                "Monitor: ABG q1-2h until stable, electrolytes q2-4h, lactate (if lactic acidosis), continuous telemetry"
            ],
            chronic: [
                "Treat underlying causes of each disorder chronologically",
                "Monitor ABG periodically to ensure resolution of all components",
                "Patient education on avoiding precipitants (e.g., COPD patient on diuretics: minimize diuretic dose, ensure adequate K repletion)"
            ]
        },
        complications: [
            "Severe acidosis (pH <7.1): arrhythmias, myocardial depression, shock, death",
            "Severe alkalosis (pH >7.6): seizures, arrhythmias, death",
            "Mixed disorders may have NORMAL pH but severe underlying pathology (e.g., pH 7.40 but patient has DKA + vomiting → both disorders need treatment despite normal pH)",
            "Failure to recognize mixed disorder → inadequate treatment of one or more components"
        ],
        prognosis: "Depends on underlying causes and severity of each component. Mixed disorders generally indicate more severe illness (higher mortality than single disorders). Mortality 20-40% if triple disorder present (reflects critical illness). Outcome depends on prompt recognition and treatment of ALL components.",
        clinicalPearls: [
            "KEY PRINCIPLE: Compensation is PHYSIOLOGIC (predictable, never overcompensates). If compensation greater or less than expected → MIXED DISORDER (second pathologic process).",
            "pH may be NORMAL in mixed disorders (e.g., metabolic acidosis + metabolic alkalosis, respiratory acidosis + metabolic alkalosis). DO NOT assume normal pH = no acid-base disorder.",
            "SYSTEMATIC APPROACH: (1) pH, (2) Primary disorder, (3) Calculate expected compensation, (4) Calculate AG, (5) Delta-delta if AG ↑, (6) Clinical context.",
            "Winter formula (metabolic acidosis): Expected PCO2 = (1.5 × HCO3) + 8 ± 2. If PCO2 higher → concurrent respiratory acidosis. If PCO2 lower → concurrent respiratory alkalosis.",
            "Delta-delta: <1 (concurrent normal AG acidosis), 1-2 (pure high AG acidosis), >2 (concurrent metabolic alkalosis).",
            "COMMON EXAM SCENARIOS: (1) Sepsis (lactic acidosis + respiratory alkalosis), (2) COPD on diuretics (respiratory acidosis + metabolic alkalosis), (3) DKA + vomiting (high AG acidosis + metabolic alkalosis), (4) Salicylate OD (respiratory alkalosis + high AG acidosis).",
            "Triple disorders: ALWAYS respiratory + 2 metabolic (e.g., COPD + uremia + diuretics = respiratory acidosis + high AG metabolic acidosis + metabolic alkalosis).",
            "AVOID treating only pH: Patient with pH 7.40 from DKA (acidosis) + vomiting (alkalosis) NEEDS treatment for BOTH disorders despite normal pH.",
            "Salicylate overdose: Classic mixed disorder. Respiratory alkalosis (direct CNS stimulation, occurs first) + high AG metabolic acidosis (salicylate accumulation, occurs later).",
            "Delta-delta example: AG 30, HCO3 10. ΔAG = 30-12 = 18. ΔHCO3 = 24-10 = 14. Delta-delta = 18/14 = 1.3 (pure high AG acidosis). If delta-delta = 3 → concurrent metabolic alkalosis (HCO3 only dropped 14 but AG rose 18, something is raising HCO3)."
        ]
    }
},
// NEPHROLITHIASIS
{
    id: "calcium-oxalate-stones",
    name: "Calcium Oxalate/Phosphate Stones",
    system: "renal",
    categories: ["nephrolithiasis"],
    symptoms: ["flank-pain", "hematuria", "nausea", "vomiting", "dysuria"],
    tags: ["kidney-stones", "renal-colic", "calcium-oxalate", "calcium-phosphate", "hypercalciuria", "hyperoxaluria", "colicky-pain"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Calcium stones (oxalate + phosphate) = 75-85% of all kidney stones, most common type. Radiopaque (visible on X-ray). Forms at any urine pH but calcium phosphate favors alkaline. Driven by hypercalciuria (idiopathic 50%, hyperparathyroidism, RTA Type 1), hyperoxaluria (dietary, enteric from Crohn/short bowel, primary genetic), or hypocitraturia (acidosis, diarrhea). Calcium oxalate crystals: envelope-shaped or dumbbell. Calcium phosphate: amorphous. Classic presentation: acute severe colicky flank pain radiating to groin, hematuria (90%), nausea/vomiting. Recurrence 50% at 5 years if untreated.",
        pathophysiology: "Stone formation: urine supersaturation with calcium salts → crystal nucleation → aggregation → stone. Three main mechanisms: (1) Hypercalciuria (>250 mg/day women, >300 mg/day men): Idiopathic (50%, absorptive vs renal leak), hyperparathyroidism (↑ PTH → ↑ bone resorption + ↑ GI Ca absorption + ↑ renal Ca reabsorption → ↑ serum Ca → ↑ filtered Ca → hypercalciuria), RTA Type 1 (alkaline urine favors calcium phosphate precipitation + ↑ bone buffering → ↑ Ca release), vitamin D intoxication, sarcoidosis (↑ 1,25-OH vitamin D). (2) Hyperoxaluria (>40 mg/day): Dietary (spinach, rhubarb, nuts, chocolate, tea, vitamin C), enteric (Crohn, short bowel, gastric bypass → fat malabsorption → Ca binds fat → free oxalate absorbed in colon), primary hyperoxaluria (genetic, AGXT gene, oxalate overproduction). (3) Hypocitraturia (<320 mg/day): citrate inhibits Ca crystallization. Causes: metabolic acidosis (citrate consumed as buffer), chronic diarrhea (↓ HCO3), RTA, K depletion, high animal protein diet. Calcium oxalate forms at any pH. Calcium phosphate favors alkaline pH (>6.5, seen in RTA Type 1, distal tubular defects).",
        epidemiology: "Calcium stones = 75-85% of all kidney stones. Lifetime prevalence 8-12% overall. Peak age 30-50 years. Male:female ratio 2-3:1. Recurrence rate 50% at 5 years, 80% at 10 years if untreated (preventable with fluids + dietary modifications). Geographic variation: higher in hot/dry climates (dehydration), \"stone belt\" in southeastern US. Calcium oxalate > calcium phosphate (oxalate 60%, phosphate 15%, mixed 10%). Family history positive in 25-30% (genetic hypercalciuria).",
        riskFactors: [
            "Low fluid intake, dehydration (concentrated urine, most important modifiable risk factor)",
            "Hypercalciuria (idiopathic most common, hyperparathyroidism, vitamin D intoxication, sarcoidosis, RTA Type 1, loop diuretics)",
            "Hyperoxaluria: dietary (spinach, rhubarb, nuts, chocolate, tea), enteric (Crohn disease, short bowel syndrome, ↑ oxalate absorption), primary hyperoxaluria (genetic, rare)",
            "Hypocitraturia (metabolic acidosis, chronic diarrhea, RTA, K depletion, high animal protein diet)",
            "Hyperuricosuria (gout, high purine diet, myeloproliferative disorders, tumor lysis syndrome)",
            "Family history (genetic predisposition, 2-3× increased risk)",
            "Chronic UTI with urease-producing organisms (Proteus, Klebsiella → struvite stones)",
            "Cystinuria (autosomal recessive, defect in cystine reabsorption)",
            "Metabolic syndrome, diabetes, obesity (↑ risk uric acid stones from acidic urine)",
            "Medications: topiramate, acetazolamide (↓ citrate), vitamin C (→ oxalate), calcium/vitamin D supplements",
            "Diet: high Na (↑ Ca excretion), high animal protein (↑ Ca/uric acid excretion, ↓ citrate), low Ca paradoxically increases stones (↓ GI oxalate binding)"
        ],
        presentation: "ACUTE RENAL COLIC: Sudden onset severe colicky flank pain (10/10, waxing/waning) radiating from costovertebral angle to ipsilateral groin/testicle/labia. Patient unable to find comfortable position (vs peritonitis patient lying still). Associated: nausea, vomiting, diaphoresis, hematuria (gross or microscopic 85-90%). Pain corresponds to stone location: proximal ureter (flank), mid ureter (anterior abdomen), distal ureter (groin, dysuria, urinary frequency). Small stones (<5 mm): often pass spontaneously (90% pass within 4 weeks). Large stones (>10 mm): unlikely to pass, may cause obstruction. Staghorn calculi (struvite): often asymptomatic until obstruction/infection occurs.",
        physicalExam: [
            "Renal colic: patient writhing in pain, unable to lie still (vs peritonitis), costovertebral angle tenderness",
            "Vital signs: tachycardia, hypertension (from pain), fever if concurrent pyelonephritis/urosepsis (EMERGENCY)",
            "Abdominal exam: normal bowel sounds (no peritoneal signs), suprapubic tenderness if distal stone",
            "Urinalysis: hematuria (gross or microscopic in 85-90%, absence does NOT rule out stones)"
        ],
        diagnosticCriteria: "Clinical diagnosis (renal colic + hematuria) confirmed by imaging. Gold standard: Non-contrast CT abdomen/pelvis (95-98% sensitivity, detects all stone types including radiolucent uric acid, measures size/location, rules out other causes). KUB X-ray: detects radiopaque stones (calcium 90%, struvite 60%, but misses uric acid/cystine, low sensitivity 45-60%). Renal ultrasound: safe in pregnancy, detects hydronephrosis but may miss small stones (sensitivity 70%). Workup for recurrent stones: 24h urine (volume, Ca, oxalate, uric acid, citrate, pH, Na, Cr), serum Ca/PTH (hyperparathyroidism), uric acid (gout).",
        labs: [
            "Urinalysis: hematuria (microscopic in 85-90%, gross in 30%), pH (acidic <5.5 suggests uric acid/cystine, alkaline >7.2 suggests struvite), crystals (calcium oxalate envelope/dumbbell, uric acid rhomboid, struvite coffin-lid, cystine hexagonal)",
            "Urine culture if fever (rule out infected obstructed kidney → urosepsis, EMERGENCY)",
            "Serum Cr, BUN (rule out AKI from bilateral obstruction or solitary kidney)",
            "CBC (leukocytosis if pyelonephritis/urosepsis)",
            "Serum Ca, PTH (hyperparathyroidism screening), uric acid (gout screening)",
            "24-HOUR URINE (for recurrent stones): volume (<2 L/day = risk), Ca (>250 mg/day women, >300 mg/day men = hypercalciuria), oxalate (>40 mg/day = hyperoxaluria), uric acid (>800 mg/day = hyperuricosuria), citrate (<320 mg/day = hypocitraturia), pH, Na, Cr",
            "Stone analysis (if stone passed or retrieved): definitive diagnosis of stone type"
        ],
        imaging: ["Non-contrast CT abdomen/pelvis (GOLD STANDARD): 95-98% sensitive, detects all stone types, measures size/location, Hounsfield units differentiate composition", "KUB X-ray: detects radiopaque stones (calcium 90%, struvite 60%), misses uric acid/cystine (radiolucent)", "Renal ultrasound: safe in pregnancy, detects hydronephrosis +/- stones (70% sensitive), use Doppler to check for ureteral jets", "IVP (intravenous pyelogram): rarely used now (replaced by CT), shows filling defects"],
        differentialDiagnosis: [
            "Idiopathic hypercalciuria (50% of calcium stones): ↑ urine Ca (>250 mg/day women, >300 mg/day men) with normal serum Ca. Absorptive type (↑ GI Ca absorption) vs renal leak type (↓ renal tubular Ca reabsorption). Treat with thiazides (↓ urine Ca), ↑ fluids, normal dietary Ca (NOT low Ca).",
            "Primary hyperparathyroidism: ↑ serum Ca (>10.5 mg/dL), ↑ PTH (>65 pg/mL), hypercalciuria. Causes 3-5% of calcium stones. Distinguished by ↑ serum Ca (normal in idiopathic). Treat: parathyroidectomy (curative). Stones resolve after surgery.",
            "Enteric hyperoxaluria (Crohn, short bowel, gastric bypass): fat malabsorption → Ca binds fat → free oxalate absorbed in colon → hyperoxaluria. Urine oxalate >40 mg/day. Normal serum Ca. Treat: low-fat low-oxalate diet, oral Ca supplements with meals (bind oxalate), cholestyramine.",
            "RTA Type 1 (distal RTA): calcium phosphate stones (alkaline urine pH >5.5 → Ca phosphate precipitation) + nephrocalcinosis. Hypokalemia, non-AG metabolic acidosis. Treat underlying RTA with alkali (potassium citrate).",
            "Vitamin D intoxication: ↑ 25-OH vitamin D (>150 ng/mL), hypercalcemia, hypercalciuria. History of megadose vitamin D supplements. Treat: stop vitamin D, hydration, calcitonin if severe.",
            "Sarcoidosis: ↑ 1,25-OH vitamin D (granulomas produce 1α-hydroxylase), hypercalcemia, hypercalciuria. CXR: bilateral hilar lymphadenopathy. Treat: corticosteroids (↓ granuloma vitamin D production).",
            "Uric acid stones: radiolucent (invisible on KUB X-ray, seen on CT), acidic urine pH <5.5. Can DISSOLVE with urine alkalinization. See uric acid stones entry.",
            "Struvite stones: radiopaque, alkaline urine pH >7.2, staghorn calculi, urease-producing bacteria (Proteus). See struvite stones entry.",
            "Cystine stones: hexagonal crystals, cystinuria (genetic), young patients. See cystine stones entry.",
            "Cholelithiasis (gallstones): RUQ pain (NOT flank), Murphy's sign, no hematuria, ultrasound shows gallstones in gallbladder. Pain after fatty meals. Biliary colic <6h, no fever.",
            "Acute cholecystitis: RUQ pain >6h, fever, Murphy's sign, leukocytosis, ultrasound shows gallbladder wall thickening. Requires cholecystectomy. No hematuria or flank pain.",
            "Other renal colic mimics: pyelonephritis (fever, CVA tenderness, pyuria), renal infarct (AF, flank pain, ↑ LDH), AAA (elderly, pulsatile mass), appendicitis, ovarian torsion, ectopic pregnancy"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Infected obstructed kidney (fever + hydronephrosis) = EMERGENCY (urosepsis risk, urgent decompression). Bilateral obstruction or solitary kidney with obstruction = EMERGENCY (AKI risk).",
                "PAIN CONTROL (PRIORITY): NSAIDs first-line (ketorolac 30 mg IV or ibuprofen 800 mg PO, superior to opioids, also ↓ ureteral spasm). Opioids second-line (morphine 4-8 mg IV, hydromorphone 0.5-1 mg IV) if NSAIDs contraindicated (CKD, GI bleed).",
                "Antiemetics: ondansetron 4-8 mg IV (nausea/vomiting common)",
                "Hydration: oral fluids preferred (no benefit to aggressive IV fluids, may ↑ ureteral distension/pain). Avoid excessive fluids.",
                "Medical expulsive therapy (MET): Tamsulosin (alpha-blocker) 0.4 mg daily (relaxes distal ureter, ↑ stone passage rate 30-40%, especially stones 5-10 mm in distal ureter). Use for 4 weeks trial.",
                "Urology consultation if: (1) Infected obstructed kidney (fever + hydronephrosis → emergent decompression with ureteral stent or percutaneous nephrostomy), (2) Bilateral obstruction or solitary kidney, (3) AKI, (4) Intractable pain/vomiting, (5) Stone >10 mm (unlikely to pass spontaneously)",
                "Expectant management if: stone <5 mm (90% pass within 4 weeks), no infection, pain controlled, normal renal function, patient reliable for follow-up"
            ],
            chronic: [
                "STONE-SPECIFIC PREVENTION (based on stone analysis + 24h urine):",
                "CALCIUM STONES (most common):",
                "  - Increase fluid intake to 2.5-3 L/day (goal urine output >2 L/day, MOST IMPORTANT intervention, ↓ recurrence 50%)",
                "  - Thiazide diuretics (HCTZ 25-50 mg daily or chlorthalidone 25 mg daily) if hypercalciuria → ↓ urinary Ca excretion, ↓ recurrence 50%",
                "  - Potassium citrate 20-60 mEq daily if hypocitraturia (citrate inhibits calcium crystallization, alkalinizes urine)",
                "  - Normal dietary calcium 1000-1200 mg/day (low Ca diet INCREASES stone risk by ↑ oxalate absorption)",
                "  - Low sodium diet <2300 mg/day (↓ urinary Ca excretion)",
                "  - Low animal protein <1 g/kg/day (↓ urinary Ca/uric acid, ↑ citrate)",
                "  - Low oxalate diet if hyperoxaluria (avoid spinach, rhubarb, nuts, chocolate, tea)",
                "  - Treat hyperparathyroidism (parathyroidectomy if symptomatic)",
                "URIC ACID STONES:",
                "  - Alkalinize urine with potassium citrate 30-60 mEq daily (goal urine pH 6.5-7.0, dissolves uric acid stones within weeks-months)",
                "  - Allopurinol 100-300 mg daily (if hyperuricosuria, ↓ uric acid production)",
                "  - Low purine diet (avoid red meat, organ meats, seafood, alcohol)",
                "  - Increase fluids to 2.5-3 L/day",
                "STRUVITE STONES:",
                "  - Treat chronic UTI (long-term antibiotics if recurrent infections)",
                "  - Urease inhibitor: acetohydroxamic acid 250 mg TID (inhibits bacterial urease, high side effects, rarely used)",
                "  - Surgical removal (PCNL or open surgery for staghorn calculi, medical management ineffective)",
                "CYSTINE STONES:",
                "  - Increase fluids to 3-4 L/day (goal urine cystine <250 mg/L)",
                "  - Alkalinize urine with potassium citrate 60-90 mEq daily (goal pH >7.0, ↑ cystine solubility)",
                "  - Tiopronin 800-1200 mg/day or D-penicillamine 1-2 g/day (cystine-binding drugs, reduce cystine concentration)",
                "  - Low methionine diet (cystine precursor: avoid red meat, eggs, dairy)",
                "SURGICAL INTERVENTION (for stones that fail to pass):",
                "  - Shock wave lithotripsy (SWL): non-invasive, for stones <20 mm in kidney/proximal ureter, 60-80% success",
                "  - Ureteroscopy (URS) with laser lithotripsy: for ureteral stones, 90-95% success, can retrieve fragments for analysis",
                "  - Percutaneous nephrolithotomy (PCNL): for large stones >20 mm, staghorn calculi, 90% success",
                "Follow-up imaging: KUB or ultrasound at 4 weeks (confirm stone passage), then periodically for recurrent stones"
            ]
        },
        complications: [
            "Obstructive uropathy: hydronephrosis → AKI (if bilateral or solitary kidney)",
            "Infected obstructed kidney: pyonephrosis, urosepsis (EMERGENCY, mortality 20-40% if delayed treatment)",
            "Chronic kidney disease (recurrent obstruction, staghorn calculi)",
            "Ureteral stricture (from chronic irritation, instrumentation)",
            "Hematuria, clot retention",
            "Perinephric abscess (rare, from infected stone)"
        ],
        prognosis: "Small stones <5 mm: 90% pass spontaneously within 4 weeks. Stones 5-10 mm: 50% pass (tamsulosin ↑ passage rate). Stones >10 mm: <10% pass, require intervention. Recurrence rate 50% at 5 years, 80% at 10 years if untreated. Prevention (increased fluids, dietary modification, medications) ↓ recurrence by 50-70%. Staghorn calculi: poor prognosis (chronic infection, renal damage) if not removed surgically.",
        clinicalPearls: [
            "Renal colic: sudden severe colicky flank pain radiating to groin, patient writhing/unable to lie still (vs peritonitis patient lying still), hematuria 85-90%",
            "Non-contrast CT abdomen/pelvis = GOLD STANDARD (95-98% sensitive, detects all stone types including radiolucent uric acid)",
            "Stone passage: <5 mm (90% pass), 5-10 mm (50% pass, use tamsulosin), >10 mm (<10% pass, needs intervention)",
            "Calcium stones (75-85%, most common): radiopaque, any pH. Prevent with ↑ fluids, thiazides (if hypercalciuria), citrate (if hypocitraturia), normal dietary Ca (NOT low Ca)",
            "Uric acid stones (5-10%): radiolucent (invisible on X-ray), acidic urine pH <5.5. Treat with alkalinize urine (K citrate, goal pH 6.5-7.0), allopurinol. DISSOLVE with alkalinization!",
            "Struvite stones (10-15%): radiopaque, alkaline pH >7.2, staghorn calculi. Caused by urease-producing bacteria (Proteus). Treat with surgical removal + antibiotics.",
            "Cystine stones (1-2%): radiolucent/faintly radiopaque, hexagonal crystals, autosomal recessive. Treat with ↑ fluids, alkalinize urine (pH >7.0), tiopronin/D-penicillamine.",
            "INFECTED OBSTRUCTED KIDNEY = EMERGENCY (fever + hydronephrosis → urosepsis). Urgent decompression (ureteral stent or nephrostomy) + antibiotics.",
            "Pain control: NSAIDs first-line (ketorolac 30 mg IV, superior to opioids, ↓ ureteral spasm). Opioids second-line.",
            "Prevention MOST IMPORTANT: ↑ fluid intake to 2.5-3 L/day (goal urine output >2 L/day) ↓ recurrence 50%. Low Na, normal Ca, low animal protein diet.",
            "Urine pH clues: acidic <5.5 (uric acid, cystine), alkaline >7.2 (struvite), neutral (calcium oxalate)",
            "Low dietary Ca INCREASES stone risk (↑ GI oxalate absorption). Recommend NORMAL Ca intake 1000-1200 mg/day.",
            "STONE LOCATION: Kidney stones → FLANK pain radiating to groin + hematuria + CT/ultrasound. Gallstones → RUQ pain + Murphy's sign + no hematuria + ultrasound. Both cause colicky pain but different locations."
        ]
    }
},
{
    id: "uric-acid-stones",
    name: "Uric Acid Stones",
    system: "renal",
    categories: ["nephrolithiasis"],
    symptoms: ["flank-pain", "hematuria", "nausea", "vomiting", "dysuria"],
    tags: ["kidney-stones", "uric-acid", "radiolucent", "gout", "acidic-urine", "dissolvable-stones"],
    severity: "moderate",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Uric acid stones = 5-10% of kidney stones. RADIOLUCENT (invisible on X-ray, seen on CT). Forms in acidic urine (pH <5.5) regardless of uric acid level. KEY: can DISSOLVE with urine alkalinization (pH 6.5-7.0 goal). Risk factors: gout, high purine diet, metabolic syndrome (insulin resistance → acidic urine), chronic diarrhea, ileostomy, myeloproliferative disorders, tumor lysis syndrome. Presentation: renal colic identical to calcium stones. Distinguished by radiolucent on X-ray + acidic urine pH.",
        pathophysiology: "Uric acid = end product of purine metabolism. Normally 10% filtered, 90% secreted in proximal tubule, 90% reabsorbed in distal tubule. Two mechanisms for uric acid stones: (1) Persistently acidic urine (pH <5.5, MOST IMPORTANT): uric acid solubility ↓ dramatically at low pH (pKa 5.35). At pH 5.0, uric acid poorly soluble → crystallizes. At pH 6.5-7.0, uric acid highly soluble (>10× more soluble than at pH 5). Causes of acidic urine: metabolic syndrome/insulin resistance (defective NH4+ excretion → ↓ urine pH, even without hyperuricemia), chronic diarrhea (↓ HCO3 → acidic urine), ileostomy (↓ HCO3 loss), high animal protein diet (sulfur amino acids → H+ production). (2) Hyperuricosuria (>800 mg/day): gout (purine overproduction), high purine diet (red meat, seafood, alcohol esp. beer), myeloproliferative disorders (↑ cell turnover), tumor lysis syndrome (massive purine release). Uric acid crystals: rhomboid/rosette-shaped, yellow-brown color. Unlike calcium stones, uric acid stones can DISSOLVE with urine alkalinization (reversible).",
        epidemiology: "5-10% of all kidney stones. Male:female ratio 2-3:1. Peak age 40-60 years (older than calcium stones). More common in: metabolic syndrome (50% of uric acid stone formers have metabolic syndrome), diabetes (30-40%), gout (10-25% of gout patients develop uric acid stones). Geographic: more common in hot/dry climates (dehydration → concentrated acidic urine). Recurrence rate 50% at 5 years if untreated, but preventable with urine alkalinization + fluids.",
        riskFactors: [
            "Metabolic syndrome, diabetes, obesity (insulin resistance → defective renal NH4+ excretion → persistently acidic urine pH <5.5, even with normal uric acid)",
            "Gout, hyperuricemia (serum uric acid >7 mg/dL men, >6 mg/dL women). 10-25% of gout patients develop stones.",
            "High purine diet: red meat, organ meats, seafood, alcohol (especially beer), fructose",
            "Chronic diarrhea (Crohn, IBS, laxative abuse): ↓ HCO3 loss → acidic urine + dehydration",
            "Ileostomy, urostomy: ↓ HCO3 loss → acidic urine + ↓ urine volume",
            "Myeloproliferative disorders (polycythemia vera, essential thrombocythemia): ↑ cell turnover → hyperuricosuria",
            "Tumor lysis syndrome (chemo for leukemia/lymphoma): massive purine release → acute hyperuricosuria",
            "Medications: probenecid (↑ uric acid excretion), high-dose aspirin, diuretics (volume depletion → concentrated urine)",
            "Low fluid intake, dehydration (concentrated acidic urine)",
            "Family history (genetic predisposition to acidic urine)"
        ],
        presentation: "RENAL COLIC: Identical to calcium stones. Sudden severe colicky flank pain (10/10) radiating to groin, patient unable to lie still, hematuria (80-90%), nausea/vomiting. May have history of gout (podagra, tophi), metabolic syndrome (obesity, diabetes, hypertension). Chronic diarrhea or ileostomy history suggests acidic urine mechanism. Acute tumor lysis: recent chemotherapy for leukemia/lymphoma, AKI, hyperkalemia, hyperphosphatemia.",
        physicalExam: [
            "Renal colic: patient writhing in pain, CVA tenderness",
            "Vital signs: tachycardia, hypertension (from pain), fever if concurrent infection (rare in uric acid stones)",
            "Gout stigmata: tophi (ears, fingers, elbows), podagra (1st MTP joint swelling/erythema), synovial effusions",
            "Metabolic syndrome: obesity (BMI >30), acanthosis nigricans (insulin resistance)",
            "Abdominal exam: normal bowel sounds, suprapubic tenderness if distal stone, ileostomy/colostomy bag if present"
        ],
        diagnosticCriteria: "Clinical: renal colic + radiolucent stone on X-ray (invisible on KUB, seen on CT) + acidic urine pH <5.5. Gold standard: Non-contrast CT (detects radiolucent stones, low Hounsfield units <500). Diagnosis confirmed by: (1) Stone analysis (if passed/retrieved): 100% uric acid or mixed uric acid/calcium. (2) Urinalysis: pH <5.5 (KEY finding), rhomboid/rosette crystals (uric acid). (3) 24-hour urine (recurrent stones): uric acid >800 mg/day (hyperuricosuria), pH <5.5 throughout day. Serum uric acid may be normal (50% of uric acid stone formers have normal serum uric acid, driven by acidic pH not hyperuricemia).",
        labs: [
            "Urinalysis: pH <5.5 (DIAGNOSTIC, persistently acidic), rhomboid/rosette uric acid crystals (yellow-brown), hematuria (80-90%)",
            "Serum uric acid: may be normal (50% of cases) or elevated (>7 mg/dL men, >6 mg/dL women). Normal uric acid does NOT rule out uric acid stones.",
            "24-HOUR URINE (for recurrent stones): uric acid (>800 mg/day = hyperuricosuria), pH (<5.5 throughout day = acidic), volume (<2 L/day = risk), Cr",
            "Serum Cr, BUN (rule out AKI from obstruction or tumor lysis syndrome)",
            "If tumor lysis suspected: ↑ K (>6), ↑ phosphate (>6), ↑ uric acid (>10-15 mg/dL), ↑ Cr, ↓ Ca (Ca-phosphate precipitation)",
            "Fasting glucose, HbA1c (screen for diabetes/metabolic syndrome if uric acid stone)",
            "Stone analysis (if stone passed): 100% uric acid or mixed"
        ],
        imaging: [
            "Non-contrast CT abdomen/pelvis (GOLD STANDARD): detects radiolucent stones (sensitivity 95-98%). Low Hounsfield units (<500 HU for uric acid vs >1000 HU for calcium). Measures size/location.",
            "KUB X-ray: NEGATIVE (radiolucent, invisible on X-ray). If stone visible on X-ray, NOT pure uric acid (likely calcium or struvite).",
            "Renal ultrasound: detects stones + hydronephrosis (70% sensitive). Cannot differentiate stone composition. Safe in pregnancy.",
            "IVP: rarely used (replaced by CT), shows filling defects"
        ],
        differentialDiagnosis: [
            "Calcium oxalate stones: radiopaque (visible on X-ray), any urine pH. Distinguish by KUB X-ray (radiopaque) vs uric acid (radiolucent).",
            "Cystine stones: radiolucent/faintly radiopaque, hexagonal crystals, autosomal recessive cystinuria, young patients (<30 years). Distinguish by urine cystine crystals (hexagonal vs rhomboid for uric acid).",
            "Gout without stones: podagra, tophi, synovial urate crystals (needle-shaped, negatively birefringent). No renal colic. Serum uric acid >7 mg/dL.",
            "Tumor lysis syndrome: hyperuricemia (>15 mg/dL), hyperkalemia, hyperphosphatemia, AKI, within 1-5 days of chemotherapy for leukemia/lymphoma. Prophylaxis: rasburicase (recombinant urate oxidase, converts uric acid → allantoin, more soluble).",
            "Xanthine stones (rare): radiolucent, caused by allopurinol (xanthine oxidase inhibitor → ↓ uric acid, ↑ xanthine). Xanthine less soluble than uric acid → stones if high-dose allopurinol + low fluids.",
            "Cholelithiasis (gallstones): RUQ pain (NOT flank), Murphy's sign, no hematuria, ultrasound shows gallstones. Cholesterol gallstones (80%) also radiolucent like uric acid stones, but in gallbladder not kidney.",
            "Acute cholecystitis: RUQ pain >6h, fever, Murphy's sign, leukocytosis, gallbladder wall thickening on ultrasound. Distinguished from kidney stones by location (RUQ vs flank).",
            "Other radiolucent stones: indinavir stones (HIV protease inhibitor, rare now), 2,8-dihydroxyadenine stones (adenine phosphoribosyltransferase deficiency, very rare)"
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Infected obstructed kidney (fever + hydronephrosis) = EMERGENCY (urgent decompression). Bilateral obstruction or solitary kidney = EMERGENCY (AKI risk). Tumor lysis syndrome = EMERGENCY (rasburicase + dialysis).",
                "PAIN CONTROL: NSAIDs first-line (ketorolac 30 mg IV or ibuprofen 800 mg PO). Opioids second-line (morphine 4-8 mg IV) if NSAIDs contraindicated.",
                "HYDRATION: IV normal saline 1-2 L bolus, then 150-200 mL/hr (dilute urine, facilitate stone passage). Goal urine output >100 mL/hr.",
                "URINE ALKALINIZATION (KEY TREATMENT): Potassium citrate 30-60 mEq PO BID-TID (goal urine pH 6.5-7.0) or sodium bicarbonate 2-4 g PO TID. Can DISSOLVE small uric acid stones (weeks-months). Monitor urine pH q4-6h initially.",
                "Medical expulsive therapy (distal stones 5-10 mm): tamsulosin (α-blocker) 0.4 mg PO daily x 28 days (↑ stone passage rate from 50% to 80%). Ineffective for proximal stones.",
                "Expectant management (stones <10 mm): 90% pass spontaneously within 4 weeks if <5 mm, 50% if 5-10 mm (with tamsulosin). Outpatient if pain controlled, no infection, no AKI. Follow-up in 2 weeks.",
                "Urgent intervention (stones >10 mm or failure to pass): Extracorporeal shock wave lithotripsy (ESWL, first-line for renal stones <2 cm, 70-90% stone-free rate). Ureteroscopy with laser lithotripsy (for ureteral stones, 90-95% success). Percutaneous nephrolithotomy (PCNL, for large stones >2 cm, 85-90% success).",
                "Infected obstructed kidney: emergent decompression (ureteral stent or percutaneous nephrostomy) + IV antibiotics (ceftriaxone 1-2 g IV daily or pip-tazo 3.375 g IV q6h). Delay definitive stone treatment until infection cleared.",
                "Tumor lysis syndrome: rasburicase 0.2 mg/kg IV x 1 dose (recombinant urate oxidase, converts uric acid → allantoin). Do NOT give allopurinol (worsens xanthine stones). Dialysis if AKI."
            ],
            chronic: [
                "URINE ALKALINIZATION (MOST IMPORTANT): Potassium citrate 30-60 mEq PO BID (goal urine pH 6.5-7.0, NOT >7.5 to avoid calcium phosphate precipitation). Check urine pH daily at home (litmus paper). Dissolves existing stones + prevents new ones.",
                "INCREASE FLUIDS: 2.5-3 L/day (goal urine output >2 L/day, >2.5 L if hyperuricosuria). ↓ recurrence by 50%. Distribute throughout day (avoid overnight concentrated urine).",
                "Allopurinol (if hyperuricosuria >800 mg/day or gout): 300 mg PO daily (xanthine oxidase inhibitor, ↓ uric acid production). Titrate to serum uric acid <6 mg/dL. Side effects: rash (1-5%, Stevens-Johnson syndrome rare), hepatotoxicity. Alternative: febuxostat 40-80 mg daily (if allopurinol intolerant).",
                "DIETARY MODIFICATIONS: Low purine diet (↓ red meat, organ meats, seafood, alcohol esp. beer). Limit fructose (high-fructose corn syrup → ↑ uric acid). Normal protein intake 0.8-1 g/kg/day (excess animal protein → acidic urine). Encourage fruits/vegetables (alkalinize urine).",
                "Treat underlying conditions: Metabolic syndrome (weight loss, exercise, metformin). Diabetes (glycemic control). Gout (allopurinol, colchicine for flares). Chronic diarrhea (anti-diarrheals, treat IBD).",
                "Monitor: Urine pH daily at home (goal 6.5-7.0). Serum uric acid q6-12 months (goal <6 mg/dL if on allopurinol). 24-hour urine annually (uric acid, pH, volume). Renal ultrasound or CT q1-2 years (stone size, new stones).",
                "Stone surveillance: Repeat CT 3-6 months after initial stone to assess dissolution (if urine alkalinization successful, stone should shrink/dissolve). If no shrinkage, consider ureteroscopy."
            ]
        },
        complications: [
            "Recurrent stones (50% at 5 years if untreated): preventable with urine alkalinization + fluids + allopurinol (if hyperuricosuria). ↓ recurrence to <10% with compliance.",
            "AKI (bilateral obstruction or solitary kidney with stone): oliguria, ↑ Cr, hyperkalemia. Emergent decompression required. Reversible if treated promptly.",
            "Urosepsis (infected obstructed kidney): fever, hypotension, ↑ lactate, ↑ WBC. Mortality 10-20% if delayed treatment. Emergent decompression + IV antibiotics.",
            "Chronic kidney disease (recurrent stones → obstruction → parenchymal damage): ↓ GFR, proteinuria. Prevent with stone prevention strategies.",
            "Gout (if hyperuricemia): podagra, tophi, erosive arthritis. Treat with allopurinol.",
            "Tumor lysis syndrome complications (if malignancy): AKI requiring dialysis (20-30%), cardiac arrhythmias (hyperkalemia), seizures (hypocalcemia), death (5-10%)."
        ],
        prognosis: "Excellent with treatment. Uric acid stones can DISSOLVE with urine alkalinization (pH 6.5-7.0), unlike calcium/struvite/cystine stones which cannot dissolve. Small stones (<10 mm): 50-70% dissolve completely within 3-6 months of urine alkalinization. Prevention: urine alkalinization + fluids + allopurinol (if hyperuricosuria) → ↓ recurrence from 50% to <10%. Without treatment: recurrence 50% at 5 years, 80% at 10 years. Patients with metabolic syndrome: higher recurrence risk (need aggressive medical management). Tumor lysis syndrome: high mortality (5-10%) if not prevented with rasburicase.",
        clinicalPearls: [
            "Uric acid stones = RADIOLUCENT (invisible on KUB X-ray, seen on CT). If stone visible on X-ray, NOT pure uric acid.",
            "KEY: Driven by acidic urine pH <5.5, NOT hyperuricemia. 50% of uric acid stone formers have normal serum uric acid.",
            "Can DISSOLVE with urine alkalinization (potassium citrate, goal pH 6.5-7.0). Only stone type that dissolves (calcium/struvite/cystine do not).",
            "Metabolic syndrome = most common cause (insulin resistance → defective NH4+ excretion → acidic urine). Screen uric acid stone formers for diabetes/obesity/hypertension.",
            "Gout patients: 10-25% develop uric acid stones. Treat with allopurinol 300 mg daily (↓ uric acid production) + urine alkalinization.",
            "Tumor lysis syndrome prophylaxis: rasburicase (recombinant urate oxidase) before chemo for high-risk leukemia/lymphoma. Do NOT use allopurinol alone (↑ xanthine stones).",
            "24-hour urine: hyperuricosuria >800 mg/day (treat with allopurinol), pH <5.5 throughout day (treat with potassium citrate).",
            "Chronic diarrhea/ileostomy: ↓ HCO3 loss → acidic urine + dehydration → uric acid stones. Treat with fluids + urine alkalinization.",
            "Distinguish from cystine stones: both radiolucent. Uric acid = rhomboid crystals, pH <5.5, older patients. Cystine = hexagonal crystals, young patients, family history.",
            "Stone passage rates: <5 mm (90% pass), 5-10 mm (50% pass with tamsulosin), >10 mm (<10% pass, needs ESWL/ureteroscopy).",
            "Urine pH goal 6.5-7.0 (NOT >7.5, to avoid calcium phosphate precipitation). Monitor daily with litmus paper at home.",
            "Hounsfield units on CT: <500 HU = uric acid, >1000 HU = calcium. Helps predict stone composition pre-lithotripsy."
        ]
    }
},
{
    id: "struvite-stones",
    name: "Struvite Stones (Infection Stones)",
    system: "renal",
    categories: ["nephrolithiasis"],
    symptoms: ["flank-pain", "fever", "hematuria", "dysuria", "nausea", "vomiting"],
    tags: ["kidney-stones", "struvite", "infection-stones", "staghorn-calculi", "proteus", "alkaline-urine", "urease"],
    severity: "high",
    acuity: "acute",
    pageType: "disease",
    detail: {
        definition: "Struvite stones (magnesium ammonium phosphate) = 10-15% of kidney stones. Also called \"infection stones\" or \"triple phosphate stones.\" Caused by urease-producing bacteria (Proteus most common, also Klebsiella, Pseudomonas, Staphylococcus) → split urea → alkaline urine (pH >7.2) → struvite precipitation. Radiopaque (visible on X-ray). Rapidly growing, often form staghorn calculi (fill renal pelvis + calyces, branching appearance). Women > men (2:1, more UTIs). Complications: recurrent UTI, obstruction, sepsis, renal damage. Requires complete surgical removal + antibiotics (cannot dissolve medically).",
        pathophysiology: "Normal urine: urea excreted, pH 5-6. Urease-producing bacteria (Proteus mirabilis most common 70%, also Klebsiella, Pseudomonas, Staph saprophyticus, Ureaplasma) colonize urinary tract → produce urease enzyme → hydrolyze urea to ammonia (NH3) + CO2. Ammonia + H2O → ammonium (NH4+) + OH- → alkaline urine (pH >7.2, often 8-9). Alkaline environment: magnesium ammonium phosphate (struvite, MgNH4PO4·6H2O) + calcium carbonate apatite (CaCO3) precipitate → stone formation. Staghorn calculi: stones grow to fill renal pelvis + extend into calyces (branching \"staghorn\" or \"coral\" appearance), can occupy entire collecting system. Growth rate: rapid (weeks-months vs years for calcium stones), can enlarge from microscopic to staghorn in 3-6 months. Matrix: bacteria + inflammatory debris embedded in stone (biofilm) → stones act as nidus for persistent infection → antibiotics cannot eradicate bacteria within stone → recurrent UTI/pyelonephritis until stone completely removed. Complications: obstruction (staghorn blocks pelvis → hydronephrosis → AKI), chronic pyelonephritis (persistent infection → scarring → ↓ GFR), pyonephrosis (infected obstructed kidney, pus-filled, high sepsis risk), xanthogranulomatous pyelonephritis (rare, severe chronic infection → kidney destruction).",
        epidemiology: "10-15% of all kidney stones (↓ from 30% in 1970s due to better antibiotic treatment of UTI). Female:male ratio 2:1 (women have more UTIs from shorter urethra, pregnancy, sexual activity). Peak age: 40-60 years (chronic UTI). More common in: chronic UTI patients, neurogenic bladder (urinary stasis → bacterial colonization), spinal cord injury, chronic indwelling catheters, ileal conduits, urinary diversions, chronic kidney stones (stones → stasis → infection). Rare in children (except with congenital urinary anomalies). Staghorn calculi: 50-70% of struvite stones form staghorns (vs <5% for calcium/uric acid stones).",
        riskFactors: [
            "Chronic or recurrent UTI with urease-producing organisms (Proteus mirabilis 70%, Klebsiella, Pseudomonas, Staph saprophyticus)",
            "Female sex (2:1 ratio, more UTIs from anatomy + sexual activity + pregnancy)",
            "Neurogenic bladder (spinal cord injury, multiple sclerosis, diabetic neuropathy): urinary stasis + incomplete emptying → bacterial colonization",
            "Chronic indwelling Foley catheter (biofilm formation on catheter → bacterial colonization → alkaline urine)",
            "Urinary diversion (ileal conduit, urostomy): bowel bacteria (E. coli, Proteus) colonize urinary tract → chronic alkaline urine",
            "Obstructive uropathy (BPH, urethral stricture): urinary stasis → UTI",
            "Previous kidney stones (calcium, uric acid): stones → stasis → infection → struvite formation on pre-existing stones",
            "Chronic pyelonephritis: recurrent infections → scarring → urinary stasis",
            "Congenital urinary tract anomalies (vesicoureteral reflux, ureteropelvic junction obstruction): stasis + recurrent UTI",
            "Immunocompromised (diabetes, HIV, chronic steroids): ↑ UTI risk",
            "Post-urologic procedures (cystoscopy, TURP, lithotripsy): bacterial seeding → UTI"
        ],
        presentation: "ACUTE INFECTION: Fever (>38.5°C), flank pain, dysuria, urinary frequency, cloudy/foul-smelling urine, hematuria. Pyuria always present (WBCs in urine). Symptoms of obstructive pyelonephritis (fever + flank pain + CVA tenderness + nausea/vomiting). CHRONIC/STAGHORN: Often asymptomatic until complications occur (many staghorn stones discovered incidentally on imaging). Recurrent UTI (same organism, Proteus most common). Dull flank pain (chronic, not colicky). Hematuria (gross or microscopic). COMPLICATIONS: Pyonephrosis (infected obstructed kidney → high fever, sepsis, hypotension, EMERGENCY). Urosepsis (bacteremia, shock, ↑ lactate, mortality 10-20%). AKI (bilateral staghorns or solitary kidney with obstruction). Chronic kidney disease (recurrent infections + obstruction → scarring → ↓ GFR).",
        physicalExam: [
            "Vital signs: fever (>38.5°C, often >39°C with pyonephrosis), tachycardia, hypotension if sepsis",
            "Renal: CVA tenderness (pyelonephritis), flank mass (large staghorn, rare)",
            "Abdominal: suprapubic tenderness (cystitis component), no peritoneal signs unless peritonitis",
            "Genitourinary: foul-smelling urine, cloudy urine visible in catheter bag (if catheterized)",
            "Neurologic: assess for neurogenic bladder (spinal cord injury, assess rectal tone, perineal sensation)"
        ],
        diagnosticCriteria: "Clinical: recurrent UTI + alkaline urine (pH >7.2) + radiopaque stone on imaging. Gold standard diagnosis: (1) Imaging: non-contrast CT shows staghorn or large stone, radiopaque (500-800 HU). (2) Urine culture: urease-producing organism (Proteus mirabilis most common, also Klebsiella, Pseudomonas, Staph saprophyticus). (3) Urinalysis: alkaline pH >7.2 (DIAGNOSTIC), coffin-lid crystals (struvite, magnesium ammonium phosphate), pyuria (>10 WBC/hpf), bacteria. (4) Stone analysis (if retrieved): magnesium ammonium phosphate (struvite) ± calcium carbonate apatite. Staghorn calculus definition: stone fills renal pelvis + ≥2 calyces (branching appearance). Complete staghorn: fills entire collecting system.",
        labs: [
            "Urinalysis: pH >7.2 (DIAGNOSTIC, often 8-9, alkaline from ammonia), coffin-lid crystals (struvite, rectangular prisms), pyuria (>50 WBC/hpf, always present), bacteriuria (>100,000 CFU/mL), hematuria (50-70%)",
            "Urine culture: Proteus mirabilis (70%), Klebsiella pneumoniae (10-15%), Pseudomonas aeruginosa (5-10%), Staph saprophyticus (5%), Ureaplasma urealyticum. Urease test positive. Sensitivity testing (guide antibiotic choice).",
            "CBC: leukocytosis (WBC >15,000, left shift with bands if sepsis), anemia (chronic disease if recurrent UTI)",
            "BMP: ↑ Cr if AKI (bilateral obstruction or solitary kidney), normal if unilateral",
            "Blood cultures (if fever >38.5°C or sepsis suspected): positive in 20-40% with pyelonephritis, 70-90% with urosepsis",
            "Serum calcium, PTH (if recurrent stones): rule out hyperparathyroidism (↑ Ca, ↑ PTH) which predisposes to mixed calcium-struvite stones",
            "Stone analysis (after surgical removal): struvite (magnesium ammonium phosphate) + carbonate apatite. May have calcium oxalate core (pre-existing calcium stone → infection → struvite overgrowth)."
        ],
        imaging: [
            "Non-contrast CT abdomen/pelvis (GOLD STANDARD): radiopaque stone (500-800 HU), staghorn calculus (fills pelvis + calyces, branching), hydronephrosis (if obstructive), perinephric fat stranding (pyelonephritis), gas in collecting system (emphysematous pyelonephritis, severe).",
            "KUB X-ray: radiopaque (90% visible), staghorn appearance (dense branching filling defect in renal pelvis), laminated/layered appearance (alternating struvite + apatite layers).",
            "Renal ultrasound: echogenic stone with posterior acoustic shadowing, staghorn (fills pelvis, may see branching into calyces), hydronephrosis, perinephric fluid collection (abscess). Useful for follow-up (avoid repeated CT radiation).",
            "IVP (rarely used): filling defects in collecting system, delayed excretion if obstruction, non-functioning kidney if chronic obstruction/infection.",
            "DMSA renal scan (if chronic): assess differential renal function (affected kidney often <30% function if chronic staghorn with scarring)."
        ],
        differentialDiagnosis: [
            "Calcium phosphate stones: radiopaque, alkaline urine (pH >6.5), but no UTI, no urease-producing bacteria. Caused by RTA Type 1 (distal RTA, hypokalemia, metabolic acidosis), hyperparathyroidism. Treat underlying cause.",
            "Xanthogranulomatous pyelonephritis: severe chronic bacterial infection (usually E. coli or Proteus) + obstruction → kidney destruction with granulomas. Mimics renal malignancy. CT: enlarged kidney, staghorn stone, hypoattenuating masses (pus-filled). Nephrectomy required.",
            "Pyonephrosis: infected obstructed kidney (pus-filled collecting system). Any stone type + infection can cause. CT: hydronephrosis + debris/layering, perinephric fluid. EMERGENCY: urgent decompression (nephrostomy or stent) + IV antibiotics.",
            "Renal cell carcinoma: renal mass, hematuria, flank pain. Staghorn stones can mimic RCC on imaging. Distinguish by CT characteristics (solid enhancing mass vs non-enhancing stone).",
            "Calcium oxalate/uric acid/cystine stones with secondary infection: primary metabolic stone → UTI → bacteria colonize stone but don't cause stone formation. Urine pH depends on primary stone type. Treat primary stone + infection.",
            "Acute cholecystitis: RUQ pain, fever, Murphy's sign, but no staghorn calculi in kidney. Gallstones in gallbladder on ultrasound. Emphysematous cholecystitis (gas in GB wall) can mimic emphysematous pyelonephritis.",
            "Ascending cholangitis: fever, RUQ pain, jaundice (Charcot's triad). Bile duct stones cause obstruction + infection, but different from kidney infection. Requires ERCP not nephrostomy.",
            "Chronic pyelonephritis without stones: recurrent UTI → renal scarring, ↓ kidney size, cortical thinning. No stones on imaging. ↓ GFR."
        ],
        management: {
            acute: [
                "ASSESS SEVERITY: Pyonephrosis (infected obstructed kidney, fever + hydronephrosis) = EMERGENCY (high sepsis/mortality risk). Urosepsis (fever + hypotension + ↑ lactate) = EMERGENCY. Complete staghorn (fills entire collecting system) = high-risk even if asymptomatic (20-30% mortality if untreated within 5 years from sepsis/renal failure).",
                "EMERGENT DECOMPRESSION (if pyonephrosis/urosepsis): Percutaneous nephrostomy (preferred, immediate drainage) OR ureteral stent (if no frank pus, less drainage than nephrostomy). Do NOT attempt stone removal during acute infection (↑ sepsis risk). Drain infection first, definitive stone removal once stable.",
                "IV ANTIBIOTICS (broad-spectrum initially, then targeted): Ceftriaxone 1-2 g IV daily OR cefepime 1-2 g IV q8-12h OR piperacillin-tazobactam 3.375-4.5 g IV q6h (covers Proteus, Klebsiella, Pseudomonas). Adjust based on culture sensitivities. Duration: 7-14 days IV (pyonephrosis/urosepsis), then 2-4 weeks PO to sterilize urine before surgery.",
                "Supportive care: IV fluids (2-3 L/day, maintain urine output >100 mL/hr), antipyretics (acetaminophen), pain control (NSAIDs or opioids). Monitor vitals (sepsis watch), CBC, BMP, blood cultures.",
                "PLAN DEFINITIVE SURGICAL REMOVAL (after infection controlled, urine sterile): ALL struvite stones require complete surgical removal (antibiotics alone cannot eradicate bacteria within stone biofilm). Delay surgery 2-4 weeks after acute infection resolved (allow inflammation to subside, sterilize urine with prolonged antibiotics)."
            ],
            chronic: [
                "COMPLETE SURGICAL STONE REMOVAL (DEFINITIVE TREATMENT): Required for all struvite stones (cannot dissolve with medication, antibiotics cannot penetrate stone biofilm). Goals: remove 100% of stone fragments (any residual → persistent infection → recurrence). Modality choice based on stone size/location:",
                "  - Percutaneous nephrolithotomy (PCNL, GOLD STANDARD for staghorn): large-bore nephrostomy tract → nephroscope → ultrasonic/pneumatic lithotripsy → basket extraction. Best for large/staghorn stones. Stone-free rate 70-90% single session, 85-95% with re-PCNL for residual. Complications: bleeding (5-10%, transfusion 1-5%), infection (5%), adjacent organ injury (<1%).",
                "  - PCNL + flexible nephroscopy (for complete staghorn): access multiple calyces, remove all fragments. May require multiple tracts or staged procedures.",
                "  - Combination PCNL + ESWL (sandwich therapy): PCNL for bulk removal → residual fragments treated with ESWL 1-2 weeks later. ↑ stone-free rate to 90-95%.",
                "  - ESWL alone: NOT recommended for struvite (hard stone, poor fragmentation, infection risk). Reserve for small non-staghorn struvite (<2 cm) after PCNL contraindicated.",
                "  - Nephrectomy (if non-functioning kidney): <20% function on DMSA scan, chronic infection/pyonephrosis, xanthogranulomatous pyelonephritis. Curative (removes infected nidus). Assess contralateral kidney function first.",
                "Perioperative antibiotics: Continue antibiotics peri-op (cover Proteus/Pseudomonas). Start 24-48h before surgery, continue 7-14 days post-op until fragments cleared.",
                "Stone fragment clearance: Repeat CT 4-6 weeks post-op (assess for residual fragments, \"clinically insignificant residual fragments\" <4 mm acceptable if urine sterile, but monitor closely as struvite can rapidly grow). Second-look PCNL if residual >4 mm or persistent UTI.",
                "LONG-TERM UTI PROPHYLAXIS (after complete stone removal): Suppressive antibiotics 3-6 months (or longer if recurrent UTI risk factors persist). Nitrofurantoin 50-100 mg PO qHS OR trimethoprim-sulfamethoxazole (TMP-SMX) SS PO qHS. Goal: keep urine sterile while any micro-fragments dissolve/pass. Discontinue only if: (1) Imaging shows no residual fragments, (2) Urine culture sterile x2 (1 month apart), (3) No UTI risk factors (catheter removed, neurogenic bladder managed).",
                "Urine acidification (adjunct, NOT definitive): Ascorbic acid (vitamin C) 500-1000 mg PO TID or methionine 200-500 mg PO TID (acidify urine → ↓ struvite solubility → prevent growth of micro-residual fragments). Goal pH <6.5. NOT a substitute for complete surgical removal. Side effects: vitamin C can cause hyperoxaluria/calcium oxalate stones if overdosed.",
                "Treat underlying risk factors: Remove/change chronic Foley catheter (if possible), treat neurogenic bladder (intermittent catheterization preferred over indwelling), manage BPH (TURP if obstruction), repair VUR (if congenital anomaly), optimize diabetes control (↓ UTI risk).",
                "Surveillance: Urine culture q1-3 months for first year post-op (early detection of recurrence). Renal ultrasound or low-dose CT q6-12 months for 2 years (monitor for recurrence). Recurrence rate 10-30% despite complete removal (if risk factors persist, e.g., neurogenic bladder, chronic catheter). Prompt treatment of any UTI (prevent re-formation)."
            ]
        },
        complications: [
            "Recurrent UTI/pyelonephritis: struvite stones harbor bacteria in biofilm → antibiotics cannot eradicate → persistent/recurrent infection until stone removed. 50-70% have recurrent UTI pre-op.",
            "Pyonephrosis (infected obstructed kidney): pus-filled collecting system, high fever, sepsis risk. Mortality 10-30% if not emergently drained. Requires urgent nephrostomy + IV antibiotics. May need nephrectomy if kidney non-functioning.",
            "Urosepsis: bacteremia → septic shock (hypotension, ↑ lactate, multi-organ failure). Mortality 10-20% even with treatment. Higher risk with instrumentation of infected stone (ESWL, ureteroscopy) → bacteria shower into bloodstream.",
            "Chronic kidney disease/ESRD: recurrent infections + obstruction + staghorn → chronic pyelonephritis → scarring → ↓ GFR. 10-20% progress to CKD. Bilateral staghorns → ESRD requiring dialysis if untreated.",
            "Xanthogranulomatous pyelonephritis: severe chronic infection (Proteus/E. coli) + obstruction → granulomatous inflammation → kidney destruction. CT: enlarged kidney, staghorn, hypoattenuating masses. Requires nephrectomy (non-functioning kidney). Can extend beyond Gerota's fascia (psoas abscess, fistulas).",
            "Perinephric abscess: infection extends beyond kidney capsule → abscess in perinephric fat. CT: fluid collection with rim enhancement. Requires drainage (percutaneous or surgical) + antibiotics.",
            "Post-PCNL complications: bleeding requiring transfusion (1-5%), adjacent organ injury (colon, liver, spleen, lung <1%), infection/sepsis (5%), arteriovenous fistula or pseudoaneurysm (rare, can cause delayed hematuria, requires embolization).",
            "Stone recurrence (10-30% at 5 years): despite complete removal, if risk factors persist (neurogenic bladder, chronic catheter, urinary diversion). Recurrent stones often at prior PCNL tract site or residual micro-fragments.",
            "Emphysematous pyelonephritis (rare, life-threatening): gas-forming organisms (E. coli, Klebsiella) in diabetics → gas in renal parenchyma. CT: gas in kidney/collecting system. Mortality 20-40%. Requires emergent nephrectomy + antibiotics (medical management alone → 50% mortality)."
        ],
        prognosis: "Depends on completeness of stone removal + underlying risk factors. Complete surgical removal + sterile urine → cure (recurrence <10% if no risk factors). Incomplete removal or residual fragments → persistent infection → recurrence 30-70%. Staghorn calculi if untreated: 20-30% mortality at 5 years (from sepsis, urosepsis, or renal failure). PCNL stone-free rate: 70-90% single session, 85-95% with re-PCNL. Neurogenic bladder/chronic catheter patients: high recurrence (50-70% at 5 years) despite surgery (persistent UTI risk). CKD/ESRD: 10-20% if recurrent bilateral stones or delayed treatment. Post-nephrectomy (if non-functioning kidney): curative, excellent prognosis if contralateral kidney normal.",
        clinicalPearls: [
            "Struvite stones = \"infection stones\" caused by urease-producing bacteria (Proteus 70%, Klebsiella, Pseudomonas). Alkaline urine pH >7.2 DIAGNOSTIC.",
            "Staghorn calculi: 50-70% of struvite stones. Fill renal pelvis + calyces (branching appearance). High morbidity (recurrent UTI, sepsis, CKD). 20-30% mortality at 5 years if untreated.",
            "Complete surgical removal REQUIRED (antibiotics alone cannot eradicate bacteria in stone biofilm). PCNL = gold standard for staghorn (70-90% stone-free rate).",
            "Pyonephrosis = EMERGENCY (infected obstructed kidney, pus-filled). Urgent percutaneous nephrostomy + IV antibiotics. Do NOT attempt stone removal during acute infection (↑ sepsis risk). Drain first, remove stone later.",
            "Women > men (2:1) due to ↑ UTI from anatomy. Risk factors: neurogenic bladder, chronic Foley catheter, urinary diversion, spinal cord injury.",
            "Urine culture: Proteus mirabilis most common (70%). Produces urease → urea → ammonia → alkaline pH (8-9) → struvite precipitation.",
            "Coffin-lid crystals on urinalysis = struvite (magnesium ammonium phosphate, rectangular prisms). pH >7.2.",
            "Radiopaque on X-ray (90% visible), but less dense than calcium stones. CT Hounsfield units 500-800 HU (vs >1000 for calcium).",
            "ANY residual fragments → recurrence risk (struvite grows rapidly, weeks-months). Repeat imaging 4-6 weeks post-PCNL. Second-look PCNL if residual >4 mm.",
            "Long-term suppressive antibiotics (nitrofurantoin or TMP-SMX) for 3-6 months post-op (keep urine sterile while micro-fragments clear).",
            "Urine acidification (vitamin C, methionine) can ↓ struvite growth but NOT definitive treatment (surgery required).",
            "Recurrence 10-30% despite complete removal (higher if neurogenic bladder, chronic catheter). Monitor with urine culture q1-3 months, imaging q6-12 months.",
            "Xanthogranulomatous pyelonephritis: chronic Proteus/E. coli infection + staghorn → kidney destruction. Mimics RCC. Requires nephrectomy."
        ]
    }
},
{
    id: "cystine-stones",
    name: "Cystine Stones (Cystinuria)",
    system: "renal",
    categories: ["nephrolithiasis"],
    symptoms: ["flank-pain", "hematuria", "nausea", "vomiting", "dysuria"],
    tags: ["kidney-stones", "cystine", "cystinuria", "genetic", "hexagonal-crystals", "radiolucent", "autosomal-recessive"],
    severity: "moderate",
    acuity: "chronic",
    pageType: "disease",
    detail: {
        definition: "Cystine stones = 1-2% of all kidney stones, but 6-8% in pediatric stones. Caused by cystinuria (autosomal recessive defect in renal tubular reabsorption of dibasic amino acids: cystine, ornithine, lysine, arginine - COLA mnemonic). Cystine poorly soluble in acidic urine (pH <7.0) → crystallizes → hexagonal crystals → stones. Radiolucent or faintly radiopaque (seen on CT, often invisible on KUB X-ray). Young age onset (10-30 years). Recurrent, often bilateral, staghorn calculi common. Requires lifelong management: high fluid intake (3-4 L/day), urine alkalinization (pH >7.0), thiol agents (tiopronin, D-penicillamine) if refractory.",
        pathophysiology: "Normal: cystine (disulfide form of cysteine) filtered by glomerulus → 98-99% reabsorbed in proximal tubule via rBAT-b0,+AT transporter (also reabsorbs ornithine, lysine, arginine). Cystinuria: autosomal recessive mutations in SLC3A1 (type A, rBAT subunit, 65%) or SLC7A9 (type B, b0,+AT subunit, 35%) → defective reabsorption → cystine + COLA amino acids excreted in urine. Cystine solubility: pH-dependent. At pH <7.0 (normal urine), cystine solubility ~250 mg/L (low). Cystinuria patients excrete 480-3600 mg/day (far exceeds solubility) → supersaturation → crystallization. At pH 7.0-7.5, cystine solubility ↑ to 300-500 mg/L. At pH >7.5, solubility >500 mg/L. Hexagonal crystals: pathognomonic for cystinuria (flat six-sided plates, look like benzene rings under microscopy). Stone formation: rapid in homozygotes (age 10-30), slower in heterozygotes (some heterozygotes never form stones, others form in 40s-50s). Staghorn calculi common (30-40% of cystine stones, bilateral in 15-20%). Complications: recurrent stones (50-100% recurrence if untreated), CKD (10-20% progress to ESRD by age 40-60 from recurrent obstruction/infections/surgeries), hypertension (10-15%, from renal damage).",
        epidemiology: "Prevalence: 1 in 7,000-15,000 (cystinuria carrier frequency). Accounts for 1-2% of all kidney stones, but 6-8% of pediatric stones. Autosomal recessive (both parents carriers). Male:female ratio 1.5:1 (males form stones earlier/more frequently). Age of onset: peak 10-30 years (median age first stone 12-25 years). Homozygotes: >80% form stones by age 20. Heterozygotes: 10-20% form stones (milder phenotype, later onset). Recurrence rate: 50-100% if untreated (most recur within 1-3 years). Geographic: no significant variation (genetic, not environmental). Life expectancy: near-normal if stones managed (prevent CKD), but ↓ quality of life (recurrent stones, surgeries, chronic pain).",
        riskFactors: [
            "Family history (autosomal recessive): both parents carriers → 25% chance homozygous affected child. Siblings of affected individual → 25% risk.",
            "Consanguinity (cousin marriages): ↑ risk homozygous recessive disorders",
            "Ethnicity: slightly higher in Libyan Jews, Swedish, Australians (founder effect in isolated populations)",
            "Low fluid intake (concentrated urine → ↑ cystine concentration → ↑ crystallization risk)",
            "Acidic urine (pH <7.0): ↓ cystine solubility → ↑ stone formation. Normal diet → pH 5.5-6.5.",
            "High sodium diet: ↑ cystine excretion (Na-cystine cotransport in proximal tubule, high Na → ↑ cystine loss)",
            "High animal protein diet: ↑ cystine/methionine load → ↑ cystine excretion + acidic urine (from sulfur amino acids)",
            "Homozygous (type A or B): severe phenotype, age <20 years onset, large stone burden, bilateral/staghorn common",
            "Heterozygous (carriers): usually asymptomatic, but 10-20% form stones (milder, later onset age 40-50)",
            "Prior stone formers: 50-100% recurrence if compliance poor (inadequate fluids, no alkalinization, no thiols)"
        ],
        presentation: "RENAL COLIC: Identical to other stone types. Sudden severe colicky flank pain radiating to groin, hematuria (70-90%), nausea/vomiting. YOUNG AGE: First stone often in childhood/adolescence (age 10-25), suspicious for cystinuria if no other metabolic cause. RECURRENT STONES: Hallmark of cystinuria (50-100% recur if untreated, often within 1-3 years). Multiple stones (bilateral in 25-30%, staghorn in 30-40%). FAMILY HISTORY: Often positive for kidney stones (siblings, parents if carriers). HEXAGONAL CRYSTALS: Pathognomonic on urinalysis (flat six-sided plates, yellow-brown color). May be asymptomatic until complications (staghorn, obstruction, CKD).",
        physicalExam: [
            "Renal colic: patient writhing in pain, CVA tenderness (if acute stone)",
            "Vital signs: usually normal unless concurrent infection (fever rare in cystine stones unless infected)",
            "Abdominal: normal bowel sounds, suprapubic tenderness if distal stone",
            "Flank: CVA tenderness, may have surgical scars (prior lithotripsy/PCNL if recurrent stones)",
            "Young age + recurrent stones → suspect genetic cause (cystinuria, primary hyperoxaluria, Dent disease)"
        ],
        diagnosticCriteria: "Diagnosis of cystinuria: (1) Urinalysis: hexagonal crystals (pathognomonic, flat six-sided plates, polarize). (2) 24-hour urine cystine: >250 mg/day diagnostic (normal <30 mg/day). Homozygotes: 480-3600 mg/day. Heterozygotes: 100-500 mg/day (some asymptomatic). (3) Urine amino acid chromatography: ↑ cystine + COLA (ornithine, lysine, arginine). (4) Sodium cyanide-nitroprusside test (screening): positive (purple color) if urine cystine >75 mg/day. False negatives if <75 mg/day (use 24h urine). (5) Stone analysis: 100% cystine (pure) or mixed cystine-calcium (20-30%). (6) Genetic testing: SLC3A1 (type A, 65%) or SLC7A9 (type B, 35%) mutations. Confirms diagnosis, allows family screening.",
        labs: [
            "Urinalysis: pH 5.5-6.5 (acidic, normal for diet, but need alkalinization to pH >7.0), hexagonal crystals (PATHOGNOMONIC, flat six-sided plates, yellow-brown), hematuria (70-90%)",
            "24-HOUR URINE CYSTINE (DIAGNOSTIC): >250 mg/day = cystinuria (normal <30 mg/day). Homozygotes: 480-3600 mg/day. Heterozygotes: 100-500 mg/day. Also measure: volume (<3 L/day = inadequate), pH (<7.0 = needs alkalinization), Na (>150 mEq/day = high, ↑ cystine excretion), protein (>1 g/day suggests coexisting glomerular disease).",
            "Urine amino acid chromatography: ↑ cystine + COLA (ornithine, lysine, arginine). Confirms cystinuria vs isolated cystinuria (rare, only cystine ↑).",
            "Sodium cyanide-nitroprusside test (qualitative screening): purple color if cystine >75 mg/day. False negatives if <75 mg/day. Use 24h urine cystine for definitive diagnosis.",
            "Serum Cr, BMP: assess for CKD (↑ Cr if recurrent stones → obstruction → scarring). GFR may be ↓ in long-standing disease.",
            "Serum cystine: normal (cystinuria affects renal reabsorption, not serum levels). Do NOT measure (not diagnostic).",
            "Stone analysis (if passed/retrieved): 100% cystine or mixed cystine-calcium (20-30% have calcium core → cystine overgrowth). Faintly radiopaque.",
            "Genetic testing: SLC3A1 (type A, chromosome 2, rBAT subunit, 65% of cases) or SLC7A9 (type B, chromosome 19, b0,+AT subunit, 35%). Confirms diagnosis. Allows family screening (identify carriers, predict offspring risk). Type A often more severe."
        ],
        imaging: [
            "Non-contrast CT abdomen/pelvis (GOLD STANDARD): detects cystine stones (radiolucent or faintly radiopaque, 600-900 HU vs >1000 for calcium). Measures size/location. Staghorn in 30-40%. Bilateral in 25-30%. Smooth/ground-glass appearance (vs rough for calcium).",
            "KUB X-ray: radiolucent or faintly radiopaque (50-60% invisible on X-ray, less dense than calcium). If visible, appear smooth/homogeneous (vs laminated for struvite, spiculated for calcium oxalate).",
            "Renal ultrasound: echogenic stone with posterior shadowing. Useful for pediatric follow-up (avoid radiation). Cannot differentiate stone composition.",
            "IVP: rarely used (replaced by CT). Shows filling defects if radiopaque enough.",
            "Follow-up imaging: ultrasound q6-12 months (monitor stone growth, new stones) or low-dose CT q12-24 months if ultrasound inadequate."
        ],
        differentialDiagnosis: [
            "Uric acid stones: also radiolucent, but rhomboid crystals (vs hexagonal for cystine), older age (40-60 vs 10-30), acidic urine pH <5.5, gout/metabolic syndrome. 24h urine: ↑ uric acid (>800 mg/day) vs ↑ cystine in cystinuria.",
            "Primary hyperoxaluria: genetic (AGXT gene), young age, recurrent calcium oxalate stones (radiopaque vs radiolucent cystine), nephrocalcinosis, CKD/ESRD by age 20-30. 24h urine: ↑ oxalate (>80 mg/day) vs ↑ cystine. Crystals: calcium oxalate envelope/dumbbell (vs hexagonal cystine).",
            "Dent disease: X-linked (males), Fanconi syndrome + hypercalciuria + nephrolithiasis + CKD. Calcium oxalate stones (radiopaque), low-MW proteinuria, hypophosphatemia. 24h urine: ↑ Ca (>4 mg/kg/day) vs ↑ cystine.",
            "Adenine phosphoribosyltransferase (APRT) deficiency: rare autosomal recessive, 2,8-dihydroxyadenine (DHA) stones (radiolucent, mimic cystine), young age. Crystals: round brown DHA (vs hexagonal cystine). Stone analysis: DHA. Genetic testing: APRT gene.",
            "Xanthine stones (rare): allopurinol-induced (xanthine oxidase inhibitor → ↓ uric acid, ↑ xanthine), radiolucent. History of allopurinol use. 24h urine: ↑ xanthine, ↓ uric acid.",
            "Calcium stones (mixed cystine-calcium): 20-30% of cystine stones have calcium core → cystine overgrowth. Radiopaque core, radiolucent rim. 24h urine: ↑ cystine + hypercalciuria or hyperoxaluria. Treat both metabolic abnormalities.",
            "Cholelithiasis (gallstones): RUQ pain (not flank), Murphy's sign, no hematuria, no hexagonal crystals. Gallstones in gallbladder on ultrasound. Young patient with recurrent stones (both cystine + gallstones can occur in same patient if genetic predisposition)."
        ],
        management: {
            acute: [
                "PAIN CONTROL: NSAIDs first-line (ketorolac 30 mg IV or ibuprofen 800 mg PO). Opioids second-line (morphine 4-8 mg IV) if NSAIDs contraindicated.",
                "HYDRATION: IV normal saline 1-2 L bolus, then 150-200 mL/hr. Goal urine output >150 mL/hr (dilute cystine, facilitate passage).",
                "URINE ALKALINIZATION (acutely + long-term): Potassium citrate 30-60 mEq PO TID or sodium bicarbonate 2-4 g PO TID. Goal urine pH >7.0 (ideally 7.5-8.0 to maximize cystine solubility). Can partially dissolve small cystine stones over weeks-months (unlike calcium/struvite which do NOT dissolve).",
                "Medical expulsive therapy (distal stones 5-10 mm): tamsulosin 0.4 mg PO daily x 28 days. ↑ passage rate from 50% to 70-80%.",
                "Expectant management (stones <10 mm): 60-80% pass spontaneously (cystine harder/smoother than calcium → slower passage). Outpatient with close follow-up (2 weeks) if pain controlled, no infection, no AKI. Continue hydration + alkalinization.",
                "Urgent intervention (stones >10 mm, failure to pass, or complications): Ureteroscopy with laser lithotripsy (preferred for ureteral cystine stones, 85-90% success, holmium laser fragments hard cystine). Extracorporeal shock wave lithotripsy (ESWL, 50-70% success for renal stones <2 cm, but cystine HARD → requires multiple sessions, ↑ retreatment rate 30-50%). Percutaneous nephrolithotomy (PCNL, for large/staghorn >2 cm, 75-85% stone-free rate, higher residual rate than calcium stones).",
                "Infected stones: rare (cystine does NOT predispose to infection like struvite). If concurrent UTI, IV antibiotics (ceftriaxone 1-2 g daily) + drainage/stone removal."
            ],
            chronic: [
                "LIFELONG MANAGEMENT REQUIRED (cystinuria incurable, genetic). Goals: prevent stone formation, ↓ recurrence, preserve renal function.",
                "HIGH FLUID INTAKE (MOST IMPORTANT): 3-4 L/day PO (goal urine output >3 L/day, dilute cystine <250 mg/L). Distribute throughout day + overnight (set alarm to drink water 2-3 times at night, cystine concentration peaks overnight). Monitor with 24h urine volume. Compliance challenging (↑ urinary frequency, nocturia).",
                "URINE ALKALINIZATION: Potassium citrate 30-90 mEq PO BID-TID (preferred, provides K+ + alkali) or sodium bicarbonate 2-4 g PO TID. Goal urine pH >7.0 (ideally 7.5-8.0). Check urine pH at home 2-3x/day (first morning, afternoon, bedtime) with litmus paper. Avoid excessive alkalinization (pH >8.5 → calcium phosphate precipitation). Side effects: GI upset, metabolic alkalosis (if overdosed).",
                "THIOL AGENTS (if fluids + alkalinization fail, i.e., recurrent stones despite compliance): Tiopronin (α-mercaptopropionylglycine, Thiola) 800-1200 mg/day PO divided TID (15-20 mg/kg/day, start 400 mg BID, titrate up) OR D-penicillamine (Cuprimine) 1-2 g/day PO divided QID (less effective, more toxic than tiopronin). Mechanism: thiol group (-SH) binds cystine → mixed disulfide (cysteine-thiol) 50× more soluble than cystine → ↓ stone formation. Efficacy: ↓ cystine excretion 40-60%, ↓ stone recurrence 60-80%. Side effects (20-50%): rash (most common, dose-reduce or switch thiol), nephrotic syndrome (proteinuria, dose-related, reversible if stopped), leukopenia (monitor CBC), GI upset, vitamin B6 deficiency (supplement B6 25-50 mg daily). Start only if: (1) Urine cystine >500 mg/day despite fluids + alkalinization, (2) Recurrent stones (≥1 stone/year), (3) Staghorn or bilateral stones.",
                "DIETARY MODIFICATIONS: Low sodium (<2 g/day, 100 mEq/day): ↓ cystine excretion (Na-cystine cotransport). Monitor 24h urine Na (goal <100 mEq/day). Low animal protein (0.8 g/kg/day): ↓ cystine/methionine load → ↓ cystine excretion + ↓ acidic urine. Encourage fruits/vegetables (alkalinize urine). Normal calcium intake 1000-1200 mg/day (low Ca does NOT help cystine stones, may ↑ oxalate absorption → calcium oxalate stones).",
                "MONITORING: 24-hour urine q3-6 months (cystine <250 mg/L ideally, volume >3 L, pH >7.0, Na <100 mEq/day). Urine pH at home daily (litmus paper). Renal ultrasound or low-dose CT q6-12 months (monitor for new stones, stone growth). Serum Cr, BMP annually (assess renal function, prevent CKD). If on thiols: CBC, urinalysis (proteinuria) q3-6 months.",
                "SURGICAL MANAGEMENT (recurrent stones despite medical therapy): Ureteroscopy (for ureteral/small renal stones <2 cm, 85-90% success, may need multiple procedures). ESWL (50-70% success, cystine hard → ↑ retreatment, use adjunct alkalinization to dissolve fragments). PCNL (for large/staghorn >2 cm, 75-85% stone-free rate). Combination PCNL + ESWL (sandwich therapy, ↑ success to 80-90%). Goal: complete stone removal (any residual → nidus for growth). Perioperative: continue fluids + alkalinization ± thiols (dissolve residual fragments).",
                "GENETIC COUNSELING: Autosomal recessive → siblings 25% risk, offspring risk depends on partner carrier status. Prenatal testing available (chorionic villus sampling, amniocentesis, SLC3A1/SLC7A9 mutation analysis). Carrier screening (family members)."
            ]
        },
        complications: [
            "Recurrent stones (50-100% if untreated): most recur within 1-3 years. Lifelong risk. ↓ to 10-30% with strict compliance (fluids + alkalinization ± thiols).",
            "Chronic kidney disease/ESRD: 10-20% progress to CKD by age 40-60 (from recurrent obstruction, infections, surgical trauma, nephrocalcinosis). Bilateral staghorns highest risk. Dialysis if ESRD (cystinuria persists post-transplant in native kidneys, but transplant kidney normal).",
            "Staghorn calculi: 30-40% of cystine stones. Bilateral in 15-20%. Require PCNL. High recurrence rate 30-50%.",
            "Obstruction → AKI: bilateral obstruction or solitary kidney with stone → acute renal failure. Emergent decompression (stent or nephrostomy).",
            "Post-surgical complications: Ureteroscopy (ureteral stricture 1-5%, perforation <1%). ESWL (steinstrasse 5-10% if >2 cm stone, fragments obstruct ureter → stent). PCNL (bleeding 5-10%, transfusion 1-5%, infection 5%).",
            "Nephrocalcinosis (rare): calcium deposition in renal medulla from chronic alkalinization (pH >8.0) or thiol-induced hypercalciuria. ↓ GFR.",
            "Hypertension (10-15%): from chronic renal damage (scarring, CKD). Monitor BP, treat with ACE inhibitors/ARBs.",
            "Thiol agent side effects (20-50%): rash (dose-reduce or switch), nephrotic syndrome (proteinuria, reversible), leukopenia (monitor CBC), pyridoxine deficiency (supplement B6).",
            "Psychosocial impact: chronic disease, recurrent stones/surgeries/pain, ↓ quality of life, anxiety/depression (20-30%). Support groups, counseling."
        ],
        prognosis: "Lifelong disease (genetic, incurable). With strict compliance (fluids 3-4 L/day + alkalinization pH >7.0 ± thiols): ↓ stone recurrence from 50-100% to 10-30%. Stone-free intervals: 2-5 years if compliant vs 1-2 years if non-compliant. CKD: 10-20% progress to ESRD by age 40-60 (higher if bilateral staghorns, recurrent surgeries, poor compliance). Life expectancy: near-normal if stones managed (prevent CKD progression). Quality of life: impaired (recurrent stones, surgeries, chronic pain, nocturia from high fluid intake, dietary restrictions). Kidney transplant: curative for ESRD (transplant kidney has normal transporter, no cystinuria in graft), but native kidneys continue to form stones (may need bilateral nephrectomy if recurrent infections/pain). Genetic counseling: 25% recurrence risk for siblings (AR), 50% offspring are carriers if partner not carrier.",
        clinicalPearls: [
            "Cystine stones = 1-2% of adult stones, but 6-8% of pediatric stones. Suspect in young patients (<30 years) with recurrent stones.",
            "Autosomal recessive cystinuria (SLC3A1 or SLC7A9 genes). Defective reabsorption of COLA amino acids (Cystine, Ornithine, Lysine, Arginine).",
            "Hexagonal crystals on urinalysis = PATHOGNOMONIC (flat six-sided plates, yellow-brown, polarize). Diagnose with 24h urine cystine >250 mg/day (normal <30).",
            "Radiolucent or faintly radiopaque on X-ray (invisible 40-50%, seen on CT). Hounsfield units 600-900 (vs >1000 for calcium).",
            "Staghorn calculi in 30-40%, bilateral in 25-30%. Hard/smooth stones (harder than calcium, slower passage, harder to fragment with ESWL).",
            "TREATMENT: Fluids 3-4 L/day (goal urine output >3 L, dilute cystine <250 mg/L) + urine alkalinization (potassium citrate, goal pH >7.0, ideally 7.5-8.0). Can partially dissolve small cystine stones (unlike calcium/struvite).",
            "Thiol agents (tiopronin or D-penicillamine) if fluids + alkalinization fail. ↓ cystine excretion 40-60%, ↓ recurrence 60-80%. Side effects: rash (20%), nephrotic syndrome, leukopenia. Monitor CBC, urinalysis q3-6 months.",
            "Low sodium diet (<2 g/day): ↓ cystine excretion (Na-cystine cotransport). 24h urine Na goal <100 mEq/day.",
            "OVERNIGHT HYDRATION CRITICAL: set alarm to drink water 2-3x at night (cystine concentration peaks overnight). Compliance challenging (nocturia).",
            "Ureteroscopy preferred over ESWL for cystine (hard stones → ↑ ESWL retreatment rate 30-50%). Holmium laser fragments hard cystine. PCNL for staghorn.",
            "Recurrence 50-100% if untreated, ↓ to 10-30% with strict compliance. Monitor: 24h urine q3-6 months, imaging q6-12 months.",
            "10-20% progress to CKD/ESRD by age 40-60. Bilateral staghorns highest risk. Kidney transplant curative for ESRD (graft has normal transporter).",
            "Distinguish from uric acid stones (also radiolucent): cystine = hexagonal crystals, young age, family history. Uric acid = rhomboid crystals, older age (40-60), gout/metabolic syndrome."
        ]
    }
}
];

export default renalDiseases;

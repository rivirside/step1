// Organ systems
const systems = [
    {
        id: "cardiovascular",
        name: "Cardiovascular",
        categoryIds: [
            "chest-pain",
            "dyspnea",
            "syncope-palpitations",
            "valvular-disease",
            "hypertension",
            "cardiomyopathies",
            "pericardial-disease",
            "vascular-disease"
        ],
        pageType: "system",
        detail: {
            overview: "The cardiovascular system consists of the heart, blood vessels, and blood. Diseases can affect cardiac muscle (cardiomyopathies), valves, conduction system (arrhythmias), coronary arteries (ischemic disease), pericardium, or systemic vessels.",
            keyAnatomy: [
                "Heart chambers: RA, RV, LA, LV",
                "Valves: tricuspid, pulmonic, mitral, aortic",
                "Conduction: SA node → AV node → Bundle of His → Purkinje fibers",
                "Coronary arteries: RCA, LAD, LCx"
            ],
            commonThemes: [
                "Chest pain often indicates ischemia, pericarditis, or aortic pathology",
                "Dyspnea suggests heart failure or pulmonary edema",
                "Syncope may indicate arrhythmia or valvular disease",
                "Edema indicates right heart failure or systemic volume overload"
            ]
        }
    },
    {
        id: "respiratory",
        name: "Respiratory",
        categoryIds: [
            "dyspnea-respiratory",
            "cough",
            "hemoptysis",
            "wheezing-stridor",
            "obstructive-lung-disease",
            "restrictive-lung-disease",
            "infectious-lung-disease",
            "pulmonary-vascular-disease",
            "lung-neoplasms",
            "pleural-disease"
        ],
        pageType: "system",
        detail: {
            overview: "The respiratory system consists of the airways, lungs, pleura, and chest wall. Diseases can affect airways (obstructive), lung parenchyma (restrictive), pulmonary vasculature, pleura, or involve infectious or neoplastic processes.",
            keyAnatomy: [
                "Upper airway: nose, pharynx, larynx",
                "Lower airway: trachea, bronchi, bronchioles",
                "Alveoli: gas exchange units",
                "Pleura: visceral and parietal layers",
                "Pulmonary circulation: pulmonary arteries and veins"
            ],
            commonThemes: [
                "Dyspnea suggests obstructive disease, restrictive disease, or vascular pathology",
                "Cough can be acute (infection) or chronic (asthma, COPD, malignancy)",
                "Hemoptysis indicates infection (TB, pneumonia), malignancy, or vascular disease (PE)",
                "Wheezing indicates lower airway obstruction; stridor indicates upper airway obstruction",
                "Hypoxemia results from V/Q mismatch, shunt, hypoventilation, or diffusion impairment"
            ]
        }
    },
    {
        id: "gastrointestinal",
        name: "Gastrointestinal",
        categoryIds: [
            "abdominal-pain-acute",
            "gi-bleeding",
            "diarrhea",
            "dysphagia",
            "jaundice",
            "nausea-vomiting",
            "hepatobiliary-disorders",
            "inflammatory-bowel-disease",
            "peptic-ulcer-disease-disorders",
            "malabsorption-syndromes",
            "gi-malignancies"
        ],
        pageType: "system",
        detail: {
            overview: "The gastrointestinal system consists of the GI tract (mouth to anus) and accessory organs (liver, gallbladder, pancreas). Diseases can affect hollow organs (esophagus, stomach, intestines), solid organs (liver, pancreas), or both. Presentations include abdominal pain, bleeding, diarrhea, dysphagia, jaundice, and systemic manifestations.",
            keyAnatomy: [
                "Upper GI: esophagus, stomach, duodenum",
                "Lower GI: small intestine (jejunum, ileum), colon, rectum, anus",
                "Hepatobiliary: liver, gallbladder, bile ducts, pancreas",
                "Blood supply: celiac artery, SMA, IMA",
                "Peritoneum: visceral and parietal layers"
            ],
            commonThemes: [
                "Acute abdominal pain: surgical emergency (appendicitis, cholecystitis, perforation, obstruction) vs medical (pancreatitis, diverticulitis)",
                "GI bleeding: upper (peptic ulcer, varices, Mallory-Weiss) vs lower (diverticulosis, angiodysplasia, malignancy)",
                "Diarrhea: acute infectious vs chronic (IBD, celiac, malabsorption)",
                "Dysphagia: solids > liquids (mechanical obstruction) vs solids = liquids (motility disorder like achalasia)",
                "Jaundice: prehepatic (hemolysis), hepatic (cirrhosis, hepatitis), posthepatic (obstruction)",
                "Chronic liver disease → cirrhosis → portal hypertension, varices, ascites, encephalopathy, HCC"
            ]
        }
    },
    {
        id: "psychiatry",
        name: "Psychiatry",
        categoryIds: [
            "mood-disorders",
            "anxiety-disorders",
            "obsessive-compulsive-related-disorders",
            "psychotic-disorders",
            "substance-use-disorders",
            "eating-disorders",
            "personality-disorders",
            "neurodevelopmental-disorders",
            "trauma-stressor-disorders",
            "sleep-wake-disorders",
            "somatic-symptom-disorders",
            "dissociative-disorders",
            "disruptive-impulse-control-disorders",
            "neurocognitive-disorders",
            "gender-dysphoria"
        ],
        pageType: "system",
        detail: {
            overview: "Psychiatry encompasses disorders of mood, thought, behavior, and cognition. Major categories include mood disorders (depression, bipolar), anxiety disorders (GAD, panic, OCD, PTSD), psychotic disorders (schizophrenia, schizoaffective), personality disorders, substance use disorders, eating disorders, and neurodevelopmental disorders (ADHD, autism).",
            keyAnatomy: [
                "Neurotransmitters: serotonin, norepinephrine, dopamine, GABA, glutamate",
                "Brain regions: prefrontal cortex (executive function), amygdala (fear/emotion), hippocampus (memory), striatum (reward/motivation)",
                "HPA axis: hypothalamus-pituitary-adrenal (stress response)",
                "Monoamine pathways: mesolimbic (reward, positive symptoms), mesocortical (cognition, negative symptoms), nigrostriatal (motor), tuberoinfundibular (prolactin)"
            ],
            commonThemes: [
                "Mood disorders: depression (low mood, anhedonia, neurovegetative symptoms), mania (elevated mood, decreased sleep, impulsivity)",
                "Anxiety disorders: excessive fear/worry with autonomic symptoms, avoidance behaviors. SSRIs/SNRIs first-line, CBT equally effective.",
                "Psychotic disorders: delusions, hallucinations, disorganized thinking. Antipsychotics target dopamine pathways.",
                "Suicide risk assessment CRITICAL: ask directly about SI, plan, intent, means. Highest risk in MDD, bipolar, schizophrenia.",
                "Comorbidity common: depression + anxiety (60%), substance abuse (50%), medical conditions (bidirectional)",
                "Medications: SSRIs (depression, anxiety), mood stabilizers (bipolar - lithium, valproate), antipsychotics (schizophrenia, acute mania)",
                "Psychotherapy: CBT most evidence-based for depression, anxiety. Exposure therapy for phobias, PTSD. DBT for borderline PD."
            ]
        }
    },
    {
        id: "hematology-oncology",
        name: "Hematology/Oncology",
        categoryIds: [
            "anemia",
            "hemolytic-anemia",
            "bleeding-disorders",
            "thrombotic-disorders",
            "leukemia",
            "lymphoma",
            "myeloproliferative-disorders",
            "plasma-cell-disorders",
            "transfusion-medicine"
        ],
        pageType: "system",
        detail: {
            overview: "Hematology/Oncology encompasses disorders of blood cells, coagulation, and hematologic malignancies. Major categories include anemias (microcytic, normocytic, macrocytic), hemolytic anemias, bleeding disorders (platelet vs coagulation factor defects), thrombotic disorders, leukemias (acute vs chronic, myeloid vs lymphoid), lymphomas (Hodgkin vs non-Hodgkin), myeloproliferative neoplasms, and plasma cell disorders.",
            keyAnatomy: [
                "Hematopoiesis: bone marrow → pluripotent stem cells → myeloid/lymphoid lineages",
                "RBCs: oxygen delivery (hemoglobin), lifespan 120 days",
                "WBCs: neutrophils (bacterial defense), lymphocytes (adaptive immunity), monocytes/macrophages (phagocytosis)",
                "Platelets: primary hemostasis (platelet plug formation)",
                "Coagulation cascade: intrinsic (PTT), extrinsic (PT), common pathway (fibrin clot)"
            ],
            commonThemes: [
                "Anemia approach: MCV → microcytic (iron, thalassemia, sideroblastic), normocytic (blood loss, hemolysis, chronic disease), macrocytic (B12/folate, myelodysplasia)",
                "Hemolytic anemia: ↑ LDH, ↑ indirect bilirubin, ↑ reticulocytes, ↓ haptoglobin. Intravascular (hemoglobinuria) vs extravascular (splenomegaly).",
                "Bleeding: platelet disorder (mucocutaneous bleeding, petechiae, normal PT/PTT) vs coagulation disorder (deep tissue bleeding, hemarthrosis, ↑ PT/PTT)",
                "Thrombosis: Virchow's triad (stasis, hypercoagulability, endothelial injury). Arterial (platelet-mediated) vs venous (fibrin-mediated).",
                "Leukemia: acute (blasts >20%, rapid onset) vs chronic (mature cells, indolent). Myeloid (Auer rods, myeloperoxidase+) vs lymphoid (TdT+).",
                "Lymphoma: painless lymphadenopathy. Hodgkin (Reed-Sternberg cells, bimodal age) vs NHL (diverse subtypes, older age).",
                "Pancytopenia DDx: bone marrow failure (aplastic anemia, MDS), marrow infiltration (leukemia, myelofibrosis), peripheral destruction (hypersplenism, autoimmune)"
            ]
        }
    },
    {
        id: "renal",
        name: "Renal",
        categoryIds: [
            "acute-kidney-injury",
            "chronic-kidney-disease",
            "glomerular-diseases",
            "tubulointerstitial-diseases",
            "electrolyte-disorders",
            "acid-base-disorders",
            "nephrolithiasis"
        ],
        pageType: "system",
        detail: {
            overview: "The renal system consists of the kidneys, ureters, bladder, and urethra. The kidneys regulate fluid/electrolyte balance, acid-base homeostasis, waste excretion (urea, creatinine), blood pressure (RAAS), and produce hormones (EPO, calcitriol, renin). Diseases include acute kidney injury (prerenal, intrarenal, postrenal), chronic kidney disease (progressive loss of GFR), glomerular diseases (nephrotic vs nephritic syndromes), tubulointerstitial diseases (interstitial nephritis, renal tubular acidosis), electrolyte disorders, acid-base disorders, and nephrolithiasis.",
            keyAnatomy: [
                "Nephron: glomerulus (filtration) → proximal tubule (reabsorption) → loop of Henle (concentration) → distal tubule (fine-tuning) → collecting duct (ADH action)",
                "Glomerulus: podocytes, GBM, mesangium. Filtration barrier prevents protein loss.",
                "Juxtaglomerular apparatus: macula densa + JG cells → renin secretion → RAAS activation",
                "RAAS: renin → angiotensin I → ACE → angiotensin II → vasoconstriction + aldosterone → Na/water retention",
                "Acid-base regulation: proximal tubule (HCO3 reabsorption), distal tubule/collecting duct (H+ secretion)"
            ],
            commonThemes: [
                "AKI approach: prerenal (FENa <1%, BUN/Cr >20, responds to fluids) vs intrarenal (FENa >2%, muddy brown casts in ATN, WBC casts in AIN, RBC casts in GN) vs postrenal (hydronephrosis on ultrasound)",
                "CKD stages by GFR: Stage 1 (>90), 2 (60-89), 3 (30-59), 4 (15-29), 5/ESRD (<15). Complications: anemia (↓ EPO), CKD-MBD (↑ PTH, ↑ phosphate, ↓ calcium), metabolic acidosis, hyperkalemia.",
                "Nephrotic syndrome: proteinuria >3.5 g/day, hypoalbuminemia, edema, hyperlipidemia. Causes: minimal change (children), FSGS, membranous, diabetic nephropathy. Complications: infections, thrombosis.",
                "Nephritic syndrome: hematuria (RBC casts), proteinuria <3.5 g/day, hypertension, edema, ↑ Cr. Causes: post-infectious GN (↓ C3), IgA nephropathy, RPGN, lupus.",
                "Electrolytes: hyponatremia (assess volume status: hypovolemic, euvolemic SIADH, hypervolemic CHF/cirrhosis), hyperkalemia (EKG changes, treat with Ca gluconate + insulin/dextrose + kayexalate)",
                "Acid-base: anion gap = Na - (Cl + HCO3). ↑ AG metabolic acidosis = MUDPILES (methanol, uremia, DKA, propylene glycol, iron/INH, lactic acidosis, ethylene glycol, salicylates). Normal AG = diarrhea, RTA.",
                "Urinalysis critical: RBC casts (glomerulonephritis), WBC casts (pyelonephritis, AIN), muddy brown casts (ATN), waxy casts (CKD), dysmorphic RBCs (glomerular origin)"
            ]
        }
    },
    {
        id: "endocrine",
        name: "Endocrine",
        categoryIds: [
            "thyroid-disorders",
            "diabetes-glucose-disorders",
            "adrenal-disorders",
            "pituitary-disorders",
            "calcium-bone-disorders"
        ],
        pageType: "system",
        detail: {
            overview: "The endocrine system consists of glands that secrete hormones to regulate metabolism, growth, reproduction, and homeostasis. Major glands include thyroid, parathyroid, adrenal, pituitary, pancreas, and gonads. Diseases result from hormone excess (hyperfunction) or deficiency (hypofunction).",
            keyAnatomy: [
                "Hypothalamic-pituitary axis: hypothalamus → pituitary → target glands (thyroid, adrenal, gonads)",
                "Thyroid: T4/T3 production (metabolism), calcitonin (calcium regulation)",
                "Parathyroid: PTH (calcium/phosphate regulation)",
                "Adrenal cortex: cortisol (stress), aldosterone (volume/BP), androgens",
                "Adrenal medulla: catecholamines (epinephrine, norepinephrine)",
                "Pancreas: insulin (glucose uptake), glucagon (glucose release)",
                "Pituitary: anterior (GH, ACTH, TSH, FSH/LH, prolactin), posterior (ADH, oxytocin)"
            ],
            commonThemes: [
                "Hormone excess vs deficiency: most endocrine diseases present as hyper- or hypofunction",
                "Feedback loops: negative feedback regulates hormone levels (TSH suppressed by high T4, ACTH suppressed by high cortisol)",
                "Primary vs secondary vs tertiary: primary = gland problem, secondary = pituitary, tertiary = hypothalamus",
                "Thyroid: hypothyroid (weight gain, fatigue, cold intolerance) vs hyperthyroid (weight loss, anxiety, heat intolerance)",
                "Diabetes: Type 1 (autoimmune, insulin deficiency, DKA) vs Type 2 (insulin resistance, obesity, HHS)",
                "Adrenal: Cushing (cortisol excess), Addison (cortisol deficiency), hyperaldosteronism (HTN, hypokalemia), pheochromocytoma (episodic HTN)",
                "Pituitary: anterior (hormone excess/deficiency syndromes), posterior (DI vs SIADH)",
                "Calcium: PTH ↑ calcium (bones, kidneys, gut via vitamin D). Hypercalcemia (stones, bones, groans, psychiatric overtones). Hypocalcemia (tetany, Chvostek/Trousseau signs)"
            ]
        }
    },
    {
        id: "neurology",
        name: "Neurology",
        categoryIds: [
            "headache",
            "seizures-epilepsy",
            "stroke-tia",
            "movement-disorders",
            "dementia-cognitive-disorders",
            "neuromuscular-disorders",
            "demyelinating-diseases",
            "sleep-disorders-neuro",
            "neuro-infections",
            "neuro-oncology"
        ],
        pageType: "system",
        detail: {
            overview: "Neurology encompasses disorders of the brain, spinal cord, peripheral nerves, and muscles. Major categories include stroke/TIA, seizures, headaches, movement disorders (Parkinson's, tremor), dementia, neuromuscular disorders (myasthenia gravis, ALS, neuropathy), demyelinating diseases (MS), and neuroinfections (meningitis, encephalitis).",
            keyAnatomy: [
                "CNS: brain (cerebrum, cerebellum, brainstem), spinal cord, meninges (dura, arachnoid, pia)",
                "PNS: cranial nerves (12 pairs), spinal nerves, autonomic nervous system (sympathetic, parasympathetic)",
                "Motor pathway: upper motor neuron (corticospinal tract) → lower motor neuron (anterior horn cells) → neuromuscular junction → muscle",
                "Sensory pathway: peripheral receptors → dorsal root ganglia → dorsal columns (proprioception, vibration) or spinothalamic tract (pain, temperature) → thalamus → sensory cortex",
                "Circle of Willis: anterior circulation (ACA, MCA via ICA), posterior circulation (PCA, basilar, vertebral)"
            ],
            commonThemes: [
                "UMN vs LMN: UMN (spastic paralysis, hyperreflexia, Babinski+, no atrophy) vs LMN (flaccid paralysis, hyporeflexia, fasciculations, atrophy)",
                "Stroke localization: MCA (contralateral hemiparesis/sensory loss, aphasia if dominant hemisphere), ACA (contralateral leg weakness), PCA (homonymous hemianopsia), basilar (locked-in syndrome, cranial nerve palsies)",
                "Headache red flags: sudden onset (SAH), fever/meningismus (meningitis), focal neuro deficits (mass, stroke), papilledema (↑ ICP), temporal tenderness (temporal arteritis >50yo)",
                "Seizure types: focal (aware vs impaired awareness) vs generalized (tonic-clonic, absence, myoclonic, tonic, atonic). First seizure → MRI, EEG, labs.",
                "Movement disorders: Parkinson's (resting tremor, bradykinesia, rigidity, postural instability), essential tremor (postural/action tremor, improved with alcohol), Huntington's (chorea, psychiatric, autosomal dominant CAG repeats)",
                "Dementia: Alzheimer's (memory > executive, amyloid/tau), vascular (stepwise decline, strokes), Lewy body (visual hallucinations, parkinsonism, fluctuating cognition), frontotemporal (behavior/language)",
                "MS: young women, relapsing-remitting, optic neuritis, internuclear ophthalmoplegia, Lhermitte sign, MRI periventricular white matter lesions, oligoclonal bands in CSF"
            ]
        }
    },
    {
        id: "rheumatology",
        name: "Rheumatology",
        categoryIds: [
            "inflammatory-arthritis",
            "osteoarthritis-crystal-arthropathy",
            "connective-tissue-diseases",
            "vasculitis",
            "spondyloarthropathies",
            "myopathies-myositis"
        ],
        pageType: "system",
        detail: {
            overview: "Rheumatology encompasses autoimmune and inflammatory disorders affecting joints, muscles, and connective tissue. Major categories include inflammatory arthritis (RA, psoriatic), crystal arthropathies (gout, pseudogout), connective tissue diseases (SLE, scleroderma, Sjögren's), vasculitis (GPA, PAN, Takayasu), and spondyloarthropathies (ankylosing spondylitis).",
            keyAnatomy: [
                "Joints: synovial (diarthrosis - freely movable) vs fibrous vs cartilaginous",
                "Synovium: synovial membrane produces synovial fluid for lubrication",
                "Connective tissue: collagen, elastin, ground substance (proteoglycans)",
                "Immune system: B cells (antibodies), T cells (cell-mediated), macrophages, complement"
            ],
            commonThemes: [
                "Inflammatory vs non-inflammatory arthritis: inflammatory (morning stiffness >1hr, improves with activity, ESR/CRP elevated, warm/swollen joints) vs OA (pain worsens with activity, stiffness <30min, normal ESR/CRP)",
                "Symmetric vs asymmetric: RA (symmetric small joints), psoriatic/reactive (asymmetric, sausage digits)",
                "Serology: RF + anti-CCP (RA), ANA (lupus, scleroderma), anti-dsDNA (lupus), anti-Smith (lupus, specific), anti-Scl-70 (scleroderma), anti-centromere (limited scleroderma), ANCA (vasculitis - c-ANCA/PR3 for GPA, p-ANCA/MPO for MPA)",
                "Lupus criteria: malar rash, discoid rash, photosensitivity, oral ulcers, arthritis, serositis, renal, neuro, hematologic, immunologic (ANA, anti-dsDNA), need 4/11",
                "Gout vs pseudogout: gout (negatively birefringent needle-shaped crystals, 1st MTP podagra, ↑ uric acid) vs pseudogout (positively birefringent rhomboid crystals, knee, calcium pyrophosphate)",
                "Spondyloarthropathies: HLA-B27, sacroiliitis, inflammatory back pain (improves with activity), enthesitis, uveitis, dactylitis. Includes AS, psoriatic, reactive, IBD-associated.",
                "Treatment: NSAIDs, corticosteroids (bridge), DMARDs (MTX, hydroxychloroquine), biologics (TNF-alpha inhibitors, IL-6/IL-17 inhibitors)"
            ]
        }
    },
    {
        id: "infectious-disease",
        name: "Infectious Disease",
        categoryIds: [
            "fever-sepsis",
            "respiratory-infections",
            "uti-kidney-infections",
            "gi-infections",
            "skin-soft-tissue-infections",
            "cns-infections",
            "sexually-transmitted-infections",
            "opportunistic-infections",
            "systemic-infections",
            "tropical-infections"
        ],
        pageType: "system",
        detail: {
            overview: "Infectious Disease encompasses bacterial, viral, fungal, and parasitic infections. Presentations vary by organism and site of infection. Key concepts include empiric antibiotic selection based on most likely pathogen, antimicrobial stewardship, and management of immunocompromised hosts.",
            keyAnatomy: [
                "Immune system: innate (neutrophils, macrophages, complement, NK cells) vs adaptive (T cells, B cells, antibodies)",
                "Barriers: skin, mucosa, respiratory cilia, gastric acid, normal flora",
                "Lymphoid organs: lymph nodes, spleen, thymus, MALT",
                "Reticuloendothelial system: liver (Kupffer cells), spleen (removes encapsulated bacteria if absent)"
            ],
            commonThemes: [
                "Sepsis: SIRS (2+ of: temp >38 or <36, HR >90, RR >20, WBC >12k or <4k) + infection. Severe sepsis = organ dysfunction. Septic shock = hypotension despite fluids. Treat: broad-spectrum antibiotics within 1 hour, IV fluids, source control.",
                "Pneumonia: CAP (Strep pneumo, H flu, atypicals - Mycoplasma, Legionella) vs HAP/VAP (Pseudomonas, MRSA, GNRs). CURB-65 for severity. CXR infiltrate, sputum culture, blood cultures x2, procalcitonin.",
                "UTI: cystitis (dysuria, frequency, urgency) vs pyelonephritis (CVA tenderness, fever, N/V). E coli most common. Nitrites, leukocyte esterase on UA. >100k CFU/mL on culture. Treat uncomplicated cystitis 3-5 days, pyelo 7-14 days.",
                "Meningitis: bacterial (S pneumo, N meningitidis, L mono if <1mo or >50yo) vs viral (enteroviruses, HSV-2). CSF: bacterial (↓ glucose, ↑ protein, ↑ PMNs) vs viral (normal glucose, ↑ protein, ↑ lymphocytes). Treat empirically: ceftriaxone + vancomycin ± ampicillin if Listeria.",
                "Endocarditis: fever + new murmur + positive blood cultures. Duke criteria. S aureus (acute, IV drug use), Strep viridans (subacute, poor dentition), S epidermidis (prosthetic valves). Echo (TTE → TEE if negative), 3 sets blood cultures.",
                "STIs: chlamydia/gonorrhea (urethritis, cervicitis, PID), syphilis (primary chancre → secondary rash → tertiary gummas/neuro/cardiovascular), HSV (painful vesicles), HIV (acute retroviral syndrome → latency → AIDS)",
                "Opportunistic infections: CD4 count matters. <200 (PCP), <100 (toxoplasma, cryptococcus), <50 (CMV, MAC). Prophylaxis: TMP-SMX for PCP, azithromycin for MAC."
            ]
        }
    },
    {
        id: "musculoskeletal",
        name: "Musculoskeletal",
        categoryIds: [
            "fractures-trauma",
            "sports-injuries",
            "bone-disorders",
            "spine-disorders",
            "joint-disorders",
            "muscle-disorders-msk"
        ],
        pageType: "system",
        detail: {
            overview: "The musculoskeletal system includes bones, joints, ligaments, tendons, and muscles. Disorders range from acute trauma (fractures, dislocations) to chronic degenerative diseases (osteoarthritis), metabolic bone disease (osteoporosis), and inflammatory conditions.",
            keyAnatomy: [
                "Bone: cortical (compact) vs trabecular (cancellous). Remodeling: osteoblasts (build) vs osteoclasts (resorb)",
                "Joints: ball-and-socket (hip, shoulder), hinge (knee, elbow), pivot (atlantoaxial), saddle (thumb CMC)",
                "Ligaments: connect bone to bone (ACL, PCL, MCL, LCL in knee)",
                "Tendons: connect muscle to bone (rotator cuff, Achilles)",
                "Muscles: skeletal muscle (voluntary, striated), organized into compartments"
            ],
            commonThemes: [
                "Fractures: open vs closed, displaced vs non-displaced, comminuted, pathologic (minimal trauma - osteoporosis, malignancy). Complications: compartment syndrome, fat embolism, osteomyelitis (open), nonunion/malunion.",
                "Ottawa rules: ankle (malleolar tenderness, navicular/5th metatarsal tenderness, unable to walk) and knee (age >55, isolated patellar tenderness, fibular head tenderness, unable to flex 90°, unable to walk)",
                "Osteoporosis: low bone density, fragility fractures (hip, vertebral, Colles). DEXA scan T-score: <-2.5 = osteoporosis. Risk factors: postmenopausal, steroids, smoking, alcohol. Treat: bisphosphonates, denosumab, teriparatide.",
                "Compartment syndrome: 5 P's (pain out of proportion, pressure, paresthesias, pallor, pulselessness, paralysis). Measure compartment pressure >30 mmHg. Surgical emergency → fasciotomy.",
                "Spine: herniated disc (radiculopathy - sciatica L5/S1, foot drop L4/L5), spinal stenosis (neurogenic claudication - improves with forward flexion), cauda equina (saddle anesthesia, bowel/bladder dysfunction - surgical emergency)",
                "Rotator cuff: supraspinatus (abduction, most commonly torn), infraspinatus/teres minor (external rotation), subscapularis (internal rotation). Impingement → bursitis → tears. Neer/Hawkins tests.",
                "Knee: meniscal tear (McMurray test, locking/clicking), ACL tear (anterior drawer, Lachman, pivot shift, heard 'pop'), MCL tear (valgus stress), PCL tear (posterior drawer, dashboard injury)"
            ]
        }
    },
    {
        id: "dermatology",
        name: "Dermatology",
        categoryIds: [
            "rashes-dermatitis",
            "infections-skin",
            "autoimmune-bullous",
            "neoplasms-skin",
            "drug-reactions-skin",
            "pigmentation-disorders",
            "hair-nail-disorders"
        ],
        pageType: "system",
        detail: {
            overview: "Dermatology encompasses disorders of skin, hair, and nails. Major categories include inflammatory dermatoses (eczema, psoriasis), infections (bacterial, viral, fungal), autoimmune conditions (pemphigus, pemphigoid), neoplasms (melanoma, basal cell, squamous cell), and drug reactions.",
            keyAnatomy: [
                "Skin layers: epidermis (keratinocytes, melanocytes, Langerhans cells), dermis (collagen, blood vessels, nerves), subcutaneous fat",
                "Epidermis layers: stratum corneum (dead keratinocytes) → granulosum → spinosum → basale (stem cells, melanocytes)",
                "Appendages: hair follicles, sebaceous glands, eccrine sweat glands, apocrine glands",
                "Immune cells: Langerhans cells (antigen presentation), mast cells (allergic reactions)"
            ],
            commonThemes: [
                "Lesion morphology: macule/patch (flat), papule/plaque (raised), vesicle/bulla (fluid-filled), pustule (pus), nodule (deep), wheal (edema - urticaria)",
                "Distribution: sun-exposed (photosensitivity - lupus, porphyria), flexural (atopic dermatitis), extensor (psoriasis), palms/soles (secondary syphilis, RMSF), dermatome (herpes zoster)",
                "Eczema: atopic dermatitis (flexural, itchy, xerosis, personal/family atopy), contact dermatitis (allergic vs irritant), dyshidrotic (palms/soles vesicles), seborrheic (scalp, nasolabial folds, dandruff)",
                "Psoriasis: well-demarcated erythematous plaques with silvery scale, extensor surfaces (knees, elbows), Auspitz sign (bleeding when scale removed), nail pitting. Associated with psoriatic arthritis.",
                "Bacterial: impetigo (honey-crusted lesions, S aureus/Strep), cellulitis (erythema, warmth, induration), erysipelas (well-demarcated, face), SSSS (scalded skin, S aureus exfoliative toxin), necrotizing fasciitis (pain out of proportion, crepitus, surgical emergency)",
                "Viral: HSV (grouped vesicles on erythematous base), VZV (dermatomal distribution - shingles), molluscum (umbilicated papules, poxvirus), warts (HPV, verrucous papules)",
                "Fungal: tinea corporis (ringworm - annular), tinea pedis (athlete's foot), tinea cruris (jock itch), tinea capitis (scalp - kerion), onychomycosis (nails), candidiasis (intertrigo, satellite lesions)",
                "Melanoma: ABCDE (asymmetry, border irregular, color variegated, diameter >6mm, evolving). Subtypes: superficial spreading (most common), nodular (worst prognosis), lentigo maligna (sun-exposed elderly), acral lentiginous (palms/soles, more common in darker skin)"
            ]
        }
    },
    {
        id: "genitourinary",
        name: "Genitourinary",
        categoryIds: [
            "urinary-tract-disorders",
            "prostate-disorders",
            "scrotal-testicular-disorders",
            "erectile-dysfunction",
            "urologic-oncology"
        ],
        pageType: "system",
        detail: {
            overview: "The genitourinary system encompasses kidneys, ureters, bladder, urethra, and male reproductive organs (prostate, testes, penis). Common presentations include UTI, urinary retention, hematuria, scrotal pain/mass, and erectile dysfunction.",
            keyAnatomy: [
                "Upper urinary tract: kidneys, ureters",
                "Lower urinary tract: bladder (detrusor muscle), urethra (longer in males)",
                "Male reproductive: testes (spermatogenesis, testosterone), epididymis, vas deferens, prostate (periurethral zone, peripheral zone), seminal vesicles",
                "Bladder: detrusor muscle (parasympathetic contracts, sympathetic relaxes), internal sphincter (smooth muscle, sympathetic), external sphincter (skeletal muscle, voluntary)"
            ],
            commonThemes: [
                "Hematuria workup: microscopic (>3 RBCs/hpf) vs gross. Rule out infection, then imaging (CT urogram) + cystoscopy. DDx: UTI, nephrolithiasis, malignancy (bladder, kidney, prostate), glomerulonephritis, trauma.",
                "Urinary retention: acute (painful, suprapubic distension, unable to void) vs chronic (painless, overflow incontinence). Causes: BPH (most common in men), neurogenic bladder, medications (anticholinergics, opioids), stricture. Treat: Foley catheter, relieve obstruction.",
                "BPH: obstructive (hesitancy, weak stream, incomplete emptying, retention) vs irritative (frequency, urgency, nocturia). IPSS score. DRE (enlarged, smooth). PSA (may be elevated). Treat: alpha blockers (tamsulosin), 5-alpha reductase inhibitors (finasteride), TURP.",
                "Prostate cancer: most common cancer in men, often asymptomatic until advanced. PSA screening controversial. DRE (hard, nodular). Biopsy (Gleason score). Low risk → active surveillance, intermediate/high → prostatectomy or radiation.",
                "Testicular torsion: acute onset scrotal pain, high-riding testis, absent cremasteric reflex. Doppler shows decreased flow. Surgical emergency (detorsion within 6hrs to save testis).",
                "Epididymitis: gradual onset scrotal pain, +/- dysuria/discharge, Prehn sign (pain relieved by elevation). <35yo think STI (chlamydia/gonorrhea), >35yo think E coli. Treat: doxycycline + ceftriaxone if <35yo, fluoroquinolone if >35yo.",
                "Erectile dysfunction: psychogenic vs organic (vascular, neurogenic, hormonal, medication). Assess cardiovascular risk. PDE5 inhibitors (sildenafil) first-line if no contraindications (nitrates)."
            ]
        }
    },
    {
        id: "reproductive-obgyn",
        name: "Reproductive/OB-GYN",
        categoryIds: [
            "pregnancy-complications",
            "labor-delivery",
            "menstrual-disorders",
            "contraception-infertility",
            "gynecologic-infections",
            "pelvic-pain-masses",
            "gynecologic-oncology",
            "menopause-disorders"
        ],
        pageType: "system",
        detail: {
            overview: "Reproductive Medicine and OB-GYN encompasses pregnancy, labor/delivery, menstrual disorders, contraception, infertility, gynecologic infections, pelvic masses, and gynecologic malignancies. Key concepts include normal pregnancy physiology, complications (preeclampsia, gestational diabetes, placental disorders), and screening/prevention.",
            keyAnatomy: [
                "Female reproductive: ovaries (oocytes, estrogen/progesterone), fallopian tubes, uterus (endometrium, myometrium), cervix, vagina",
                "Menstrual cycle: follicular phase (FSH → follicle development, estrogen rises), ovulation (LH surge), luteal phase (corpus luteum → progesterone → thickened endometrium)",
                "Pregnancy: fertilization (fallopian tube) → implantation (endometrium day 6-7) → placenta (O2/nutrients, hCG, progesterone, estrogen)",
                "Pelvis: uterus (anteverted, anteflexed), ovaries (lateral), bladder (anterior), rectum (posterior)"
            ],
            commonThemes: [
                "Pregnancy dating: last menstrual period (LMP) + 280 days = EDD. First trimester ultrasound most accurate (crown-rump length).",
                "Prenatal screening: 1st trimester (nuchal translucency, PAPP-A, β-hCG for trisomy 21/18), 2nd trimester (quad screen - AFP, hCG, estriol, inhibin A). Cell-free DNA (NIPT) highly sensitive/specific. Definitive: CVS (10-13wks) or amniocentesis (15-20wks).",
                "Hypertensive disorders: gestational HTN (≥140/90 after 20wks, no proteinuria), preeclampsia (HTN + proteinuria or end-organ damage), eclampsia (seizures), HELLP (hemolysis, elevated LFTs, low platelets). Treat: magnesium sulfate (seizure prophylaxis), delivery if severe or ≥37wks.",
                "Gestational diabetes: screening 24-28wks (1hr glucose challenge test 50g → if ≥140 do 3hr 100g GTT). Complications: macrosomia, shoulder dystocia, neonatal hypoglycemia. Treat: diet → insulin if needed.",
                "Placental disorders: placenta previa (painless bleeding, placenta over cervical os), placental abruption (painful bleeding, rigid uterus, fetal distress), vasa previa (fetal vessels over os, rupture of membranes → fetal bleeding).",
                "Menstrual disorders: amenorrhea (primary - never menstruated by 15-16yo, secondary - absent x3 cycles or 6mo. Rule out pregnancy! Then prolactin, TSH, FSH/LH, androgens), dysmenorrhea (primary - prostaglandins, NSAIDs; secondary - endometriosis, fibroids), menorrhagia (>80mL or >7 days, rule out bleeding disorder, anovulation, structural)",
                "PID: lower abdominal pain + cervical motion tenderness + adnexal tenderness. Caused by STIs (chlamydia/gonorrhea) ascending. Complications: tubo-ovarian abscess, ectopic pregnancy, infertility. Treat: ceftriaxone + doxycycline ± metronidazole.",
                "Gynecologic cancers: ovarian (CA-125, pelvic mass, abdominal distension, early satiety), endometrial (postmenopausal bleeding, most common gynecologic cancer), cervical (HPV → dysplasia → cancer, Pap smear screening)"
            ]
        }
    },
    {
        id: "ophthalmology",
        name: "Ophthalmology",
        categoryIds: [
            "red-eye",
            "vision-loss",
            "glaucoma",
            "cataracts-lens-disorders",
            "retinal-disorders",
            "optic-nerve-disorders",
            "ocular-trauma",
            "eye-infections"
        ],
        pageType: "system",
        detail: {
            overview: "Ophthalmology encompasses disorders of the eye and visual system. Major categories include glaucoma, cataracts, retinal disorders (diabetic retinopathy, macular degeneration, retinal detachment), optic nerve disorders, uveitis, infections (conjunctivitis, keratitis, endophthalmitis), and trauma.",
            keyAnatomy: [
                "Anterior segment: cornea, anterior chamber (aqueous humor), iris, lens, posterior chamber",
                "Posterior segment: vitreous, retina (rods/cones, macula, fovea), choroid, optic disc",
                "Visual pathway: retina → optic nerve → optic chiasm (crossing of nasal fibers) → optic tract → LGN → optic radiations → visual cortex (occipital lobe)",
                "Cranial nerves: CN II (optic - vision), III (oculomotor - pupil, most EOMs), IV (trochlear - SO), VI (abducens - LR)",
                "Aqueous humor production: ciliary body → posterior chamber → through pupil → anterior chamber → trabecular meshwork → canal of Schlemm"
            ],
            commonThemes: [
                "Red eye: conjunctivitis (discharge, normal vision), keratitis (pain, photophobia, ↓ vision), uveitis (pain, photophobia, miosis), acute angle-closure glaucoma (severe pain, N/V, mid-dilated pupil, halos, ↑ IOP)",
                "Vision loss: acute (retinal artery occlusion, retinal vein occlusion, retinal detachment, vitreous hemorrhage, optic neuritis, GCA, acute angle-closure) vs gradual (cataracts, glaucoma, macular degeneration, diabetic retinopathy)",
                "Glaucoma: open-angle (most common, gradual peripheral vision loss, ↑ IOP, cupping of optic disc) vs angle-closure (acute, painful, N/V, halos, mid-dilated pupil). Treat: prostaglandin analogs (latanoprost), beta blockers (timolol), laser iridotomy for angle-closure.",
                "Diabetic retinopathy: nonproliferative (microaneurysms, dot-blot hemorrhages, hard exudates, cotton-wool spots) vs proliferative (neovascularization → vitreous hemorrhage, retinal detachment). Macular edema = vision loss. Treat: laser photocoagulation, anti-VEGF.",
                "Pupil abnormalities: Argyll Robertson (syphilis - accommodates but doesn't react to light), Marcus Gunn (afferent pupillary defect - optic nerve lesion, swinging flashlight test), Adie tonic pupil (dilated, slow accommodation), Horner syndrome (ptosis, miosis, anhidrosis - sympathetic disruption)",
                "Visual field defects: optic nerve (monocular blindness), optic chiasm (bitemporal hemianopsia), optic tract (contralateral homonymous hemianopsia), optic radiations (quadrantanopia - temporal lobe inferior, parietal lobe superior), occipital cortex (macular sparing)",
                "Eye infections: conjunctivitis (bacterial, viral, allergic), keratitis (bacterial, HSV, Acanthamoeba from contacts), endophthalmitis (post-surgical emergency), orbital cellulitis (preseptal vs postseptal - proptosis, ophthalmoplegia, vision changes)"
            ]
        }
    },
    {
        id: "ent",
        name: "ENT (Otolaryngology)",
        categoryIds: [
            "ear-disorders",
            "hearing-loss",
            "vertigo-dizziness",
            "nasal-sinus-disorders",
            "pharyngeal-disorders",
            "laryngeal-voice-disorders",
            "neck-masses",
            "salivary-gland-disorders"
        ],
        pageType: "system",
        detail: {
            overview: "Otolaryngology (ENT) encompasses disorders of the ear, nose, throat, and head/neck. Major categories include hearing loss, vertigo, otitis media, sinusitis, pharyngitis, laryngitis, neck masses, and salivary gland disorders.",
            keyAnatomy: [
                "Ear: external (pinna, external auditory canal), middle (tympanic membrane, ossicles - malleus/incus/stapes, eustachian tube), inner (cochlea - hearing, vestibular apparatus - balance)",
                "Nose/sinuses: nasal cavity, paranasal sinuses (maxillary, frontal, ethmoid, sphenoid)",
                "Pharynx: nasopharynx, oropharynx (tonsils, soft palate, uvula), hypopharynx",
                "Larynx: vocal cords, epiglottis, cricoid cartilage",
                "Cranial nerve VIII: cochlear division (hearing), vestibular division (balance)"
            ],
            commonThemes: [
                "Hearing loss: conductive (external/middle ear - Weber lateralizes to affected ear, Rinne BC>AC) vs sensorineural (inner ear/nerve - Weber lateralizes to unaffected ear, Rinne AC>BC). Causes: conductive (cerumen, otitis media, otosclerosis, TM perforation), sensorineural (presbycusis, noise-induced, Meniere's, acoustic neuroma, ototoxicity).",
                "Vertigo: peripheral (BPPV, Meniere's, vestibular neuritis, labyrinthitis - horizontal nystagmus, hearing loss variable) vs central (stroke, MS - vertical/direction-changing nystagmus, other brainstem signs). Dix-Hallpike test for BPPV. Epley maneuver treats BPPV.",
                "Otitis media: acute (bulging TM, fever, ear pain in children) vs OM with effusion (TM retraction/fluid, conductive hearing loss, no infection). Complications: mastoiditis, cholesteatoma (chronic OM with keratin debris - destructive, surgery). Treat: amoxicillin, amoxicillin-clavulanate if recurrent.",
                "Pharyngitis: viral (most common) vs bacterial (Group A Strep - Centor criteria: fever, tonsillar exudates, tender anterior cervical LAD, absence of cough. Rapid strep/throat culture. Complications: rheumatic fever, post-strep GN, peritonsillar abscess. Treat: penicillin or amoxicillin).",
                "Epiglottitis: H. influenzae type B (rare post-vaccine). Acute onset sore throat, dysphagia, drooling, tripod position, stridor. Cherry-red epiglottis. DO NOT examine throat if suspected (can precipitate obstruction). Lateral neck X-ray (thumbprint sign). Airway emergency: intubation in OR, IV antibiotics (ceftriaxone).",
                "Neck mass: congenital (thyroglossal duct cyst - midline, moves with swallowing/tongue protrusion; branchial cleft cyst - lateral, anterior to SCM) vs acquired (lymphadenopathy, thyroid nodule, salivary tumor). Adult >40 with persistent neck mass = cancer until proven otherwise (smoking/alcohol = HNSCC, FNA biopsy).",
                "Salivary gland: stones (sialolithiasis - submandibular, pain with eating), infections (bacterial sialadenitis - S aureus, viral parotitis - mumps), tumors (parotid - pleomorphic adenoma most common benign, mucoepidermoid carcinoma most common malignant; CN VII palsy suggests malignancy)"
            ]
        }
    },
    {
        id: "immunology",
        name: "Immunology",
        categoryIds: [
            "primary-immunodeficiencies",
            "hypersensitivity-reactions",
            "autoimmunity",
            "transplant-immunology",
            "immunosuppression"
        ],
        pageType: "system",
        detail: {
            overview: "Immunology encompasses disorders of immune system function, including primary immunodeficiencies (congenital defects in immune components), hypersensitivity reactions (allergic/immune-mediated damage), autoimmune diseases, transplant rejection, and immunosuppression.",
            keyAnatomy: [
                "Immune cells: neutrophils (bacterial defense, phagocytosis), macrophages (phagocytosis, antigen presentation), T cells (CD4 helper, CD8 cytotoxic), B cells (antibody production), NK cells (viral/tumor surveillance)",
                "Lymphoid organs: thymus (T cell maturation), bone marrow (B cell maturation, hematopoiesis), spleen (removes encapsulated bacteria), lymph nodes (antigen presentation)",
                "Antibodies: IgM (first response, pentamer), IgG (most abundant, crosses placenta), IgA (mucosal immunity - secretory IgA), IgE (allergic reactions, parasites), IgD (B cell receptor)",
                "Complement: classical pathway (antibody-mediated), alternative pathway (direct pathogen recognition), lectin pathway (mannose-binding)"
            ],
            commonThemes: [
                "Primary immunodeficiencies: B cell (recurrent bacterial sinopulmonary infections, encapsulated organisms), T cell (viral/fungal/opportunistic infections, failure to thrive), phagocytic (bacterial/fungal infections, catalase+ organisms if CGD), complement (Neisseria infections if C5-C9, SLE-like if C1q/C2/C4).",
                "Hypersensitivity: Type I (immediate, IgE-mediated - anaphylaxis, atopy, asthma), Type II (antibody-mediated - hemolytic anemia, Goodpasture, Graves, myasthenia gravis), Type III (immune complex - SLE, serum sickness, post-strep GN, Arthus reaction), Type IV (delayed, T cell-mediated - TB skin test, contact dermatitis, transplant rejection).",
                "Common primary immunodeficiencies: SCID (absent T and B cells, bubble boy), Bruton agammaglobulinemia (X-linked, no B cells, ↓↓ all Ig, boys), CVID (↓ Ig, adults, recurrent infections, autoimmunity), DiGeorge (thymic aplasia, no T cells, cardiac defects, hypocalcemia - 22q11 deletion), Wiskott-Aldrich (thrombocytopenia, eczema, recurrent infections, ↓ IgM, X-linked), hyper-IgE (Job syndrome - eczema, cold abscesses, retained primary teeth, ↑↑ IgE, ↑ eosinophils), CGD (chronic granulomatous disease - defective NADPH oxidase, catalase+ organisms, negative NBT test, X-linked).",
                "Transplant rejection: hyperacute (minutes-hours, pre-formed antibodies, thrombosis), acute (weeks-months, T cell-mediated, reversible with immunosuppression), chronic (months-years, fibrosis, irreversible). Graft-versus-host disease (bone marrow transplant - donor T cells attack host).",
                "Immunosuppression: glucocorticoids (broad anti-inflammatory), calcineurin inhibitors (cyclosporine, tacrolimus - block T cell activation), antimetabolites (azathioprine, mycophenolate - inhibit DNA synthesis), mTOR inhibitors (sirolimus), anti-CD3 (OKT3), anti-IL-2R (basiliximab)"
            ]
        }
    },
    {
        id: "pediatrics",
        name: "Pediatrics",
        categoryIds: [
            "neonatal-disorders",
            "congenital-syndromes",
            "growth-development",
            "pediatric-infectious-diseases",
            "pediatric-emergencies",
            "child-abuse-neglect"
        ],
        pageType: "system",
        detail: {
            overview: "Pediatrics encompasses disorders specific to infants, children, and adolescents. Major categories include neonatal disorders (prematurity, RDS, hyperbilirubinemia), congenital syndromes (chromosomal, genetic), developmental disorders, pediatric infections (childhood exanthems), and growth/nutrition.",
            keyAnatomy: [
                "Development: gross motor, fine motor, language, social milestones",
                "Growth: weight, height, head circumference (growth charts, percentiles)",
                "Vital signs: vary by age (higher HR/RR, lower BP in children)",
                "Fetal circulation: foramen ovale, ductus arteriosus, ductus venosus, umbilical vessels"
            ],
            commonThemes: [
                "Neonatal: RDS (surfactant deficiency, preterm, ground-glass CXR, grunting/retractions), TTN (retained fetal lung fluid, term C-section, resolves 1-2 days), meconium aspiration (post-term, fetal distress, chemical pneumonitis), hyperbilirubinemia (physiologic vs pathologic - <24hrs, Rh/ABO incompatibility, G6PD, sepsis), necrotizing enterocolitis (preterm, feeding intolerance, pneumatosis intestinalis), patent ductus arteriosus (continuous machine-like murmur, indomethacin closes).",
                "Congenital syndromes: Down (trisomy 21 - flat facies, single palmar crease, AV canal defect, duodenal atresia, Alzheimer's, ALL), Edwards (trisomy 18 - clenched fists, rocker-bottom feet, severe ID, death <1yr), Patau (trisomy 13 - cleft lip/palate, holoprosencephaly, polydactyly, death <1yr), Turner (45,X - short stature, webbed neck, shield chest, coarctation, amenorrhea, streaked ovaries), Klinefelter (47,XXY - tall, gynecomastia, small testes, infertile, ↓ testosterone, ↑ FSH/LH).",
                "Childhood exanthems: measles (3 C's - cough, coryza, conjunctivitis + Koplik spots → maculopapular rash head→toe), rubella (mild, postauricular LAD, arthritis in adults, congenital rubella syndrome), roseola (HHV-6, high fever 3-5 days → rash when fever breaks), fifth disease (parvovirus B19, slapped cheek → lacy reticular rash, arthritis in adults, aplastic crisis in sickle cell), scarlet fever (Strep pyogenes, sandpaper rash, strawberry tongue, circumoral pallor).",
                "Developmental milestones: 2 months (social smile), 4-6 months (rolls over, reaches for objects), 9 months (sits unsupported, stranger anxiety), 12 months (walks with support, says mama/dada), 18 months (walks independently, 10-25 words), 2 years (runs, 2-word sentences, parallel play), 3 years (tricycle, 3-word sentences, knows name/age), 4 years (hops, copies shapes), 5 years (skips, prints letters).",
                "APGAR score: Appearance (color), Pulse (HR), Grimace (reflex), Activity (tone), Respiration. 7-10 normal, 4-6 moderate depression, 0-3 severe depression. Assess at 1 and 5 minutes.",
                "Child abuse: unexplained injuries (bruises in non-ambulatory infant, patterned injuries, burns), metaphyseal fractures (corner fractures from shaking), posterior rib fractures (squeezing), retinal hemorrhages (shaken baby syndrome). Mandatory reporting."
            ]
        }
    },
    {
        id: "toxicology",
        name: "Toxicology",
        categoryIds: [
            "overdose-poisoning",
            "antidotes-reversal-agents",
            "substance-withdrawal",
            "environmental-exposures"
        ],
        pageType: "system",
        detail: {
            overview: "Toxicology encompasses acute poisonings, overdoses, withdrawal syndromes, and environmental exposures. Key concepts include recognizing toxic syndromes (toxidromes), antidote administration, supportive care, and decontamination strategies.",
            keyAnatomy: [
                "Routes of exposure: ingestion (most common), inhalation, dermal, injection",
                "Metabolism: liver (CYP450 enzymes), kidney (excretion), first-pass effect",
                "Toxidromes: constellation of signs/symptoms suggesting drug class"
            ],
            commonThemes: [
                "Toxidromes: anticholinergic (hot as hare, dry as bone, red as beet, mad as hatter, blind as bat - mydriasis, flushing, hyperthermia, delirium, urinary retention), cholinergic (DUMBBELSS - diarrhea, urination, miosis, bronchospasm, bradycardia, emesis, lacrimation, salivation, sweating), sympathomimetic (agitation, tachycardia, hypertension, hyperthermia, mydriasis - cocaine, amphetamines), opioid (CNS depression, miosis, respiratory depression), sedative-hypnotic (CNS depression, respiratory depression, normal pupils), serotonin syndrome (hyperthermia, rigidity, clonus, agitation, autonomic instability).",
                "Common overdoses: acetaminophen (↑ AST/ALT, hepatotoxicity - N-acetylcysteine antidote), aspirin (tinnitus, respiratory alkalosis → metabolic acidosis, hyperthermia - treat with alkalinization, dialysis), TCA (wide QRS, anticholinergic, seizures, arrhythmias - treat with sodium bicarbonate), beta blocker (bradycardia, hypotension - glucagon), calcium channel blocker (bradycardia, hypotension - calcium, glucagon, insulin), digoxin (N/V, yellow vision, arrhythmias - Digibind), iron (GI bleed, metabolic acidosis, hepatotoxicity - deferoxamine), organophosphates (cholinergic toxidrome - atropine + pralidoxime).",
                "Antidotes: naloxone (opioids), flumazenil (benzodiazepines - caution: seizures), N-acetylcysteine (acetaminophen), fomepizole (methanol, ethylene glycol), glucagon (beta blockers, CCB), calcium (CCB, fluoride, black widow), Digibind (digoxin), atropine (cholinergic), pralidoxime (organophosphates), methylene blue (methemoglobinemia), hydroxocobalamin/sodium thiosulfate (cyanide), dimercaprol/EDTA/succimer (heavy metals).",
                "Withdrawal: alcohol (tremor, tachycardia, hypertension, seizures, DTs - treat with benzodiazepines, thiamine/folate/glucose), benzodiazepines (similar to alcohol, can be fatal - taper), opioids (myalgias, lacrimation, rhinorrhea, diarrhea, yawning, piloerection - not life-threatening, treat with clonidine, buprenorphine).",
                "Carbon monoxide: binds Hb (left-shift O2 curve), headache, cherry-red skin, ↑ carboxyhemoglobin. Treat: 100% O2, hyperbaric O2 if severe. Methemoglobinemia: oxidized Fe3+ (can't bind O2), chocolate-brown blood, cyanosis unresponsive to O2, ↑ methemoglobin. Causes: nitrates, dapsone, benzocaine. Treat: methylene blue.",
                "Heavy metals: lead (abdominal pain, peripheral neuropathy, basophilic stippling, Burton lines on gums, ↑ protoporphyrin - chelation with succimer or EDTA), mercury (tremor, neuropsychiatric, acrodynia, Minamata disease - dimercaprol), arsenic (garlic breath, GI symptoms, peripheral neuropathy, Mees lines on nails - dimercaprol)"
            ]
        }
    }
];

export default systems;

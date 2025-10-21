// Respiratory categories, symptoms, and syndromes
const respiratoryCategories = [
    {
        id: "dyspnea-respiratory",
        name: "Dyspnea (Respiratory)",
        system: "respiratory",
        type: "symptom",
        diseaseIds: [
            "asthma",
            "copd",
            "pulmonary-embolism",
            "pneumothorax",
            "pleural-effusion",
            "ards",
            "pulmonary-hypertension",
            "ipf",
            "sarcoidosis"
        ],
        pageType: "category",
        detail: {
            approach: "Dyspnea from respiratory causes: focus on acute vs chronic, obstructive vs restrictive, unilateral vs bilateral. Key distinguishing features: wheezing (obstructive), crackles (restrictive/pulmonary edema), absent breath sounds (pneumothorax/effusion).",
            redFlags: [
                "Sudden onset with pleuritic chest pain suggests PE or pneumothorax",
                "Hypoxia refractory to oxygen suggests shunt (PE, pneumonia, pulmonary edema)",
                "Unilateral absent breath sounds suggests pneumothorax or massive effusion",
                "Stridor suggests upper airway obstruction (emergency)",
                "Tripod positioning suggests severe obstruction (asthma, COPD exacerbation)"
            ],
            initialWorkup: [
                "Vital signs including O2 saturation, respiratory rate",
                "CXR (infiltrates, pneumothorax, effusion, hyperinflation)",
                "ABG if severe (assess hypoxia, hypercapnia, A-a gradient)",
                "Spirometry if chronic (FEV1/FVC ratio)",
                "D-dimer if PE suspected (age-adjusted, Wells score)",
                "BNP to distinguish cardiac vs pulmonary dyspnea"
            ],
            differentialCategories: [
                "Obstructive: asthma, COPD, foreign body",
                "Restrictive: ILD (IPF, sarcoidosis), chest wall, neuromuscular",
                "Vascular: PE, pulmonary HTN",
                "Infectious: pneumonia, TB",
                "Acute: pneumothorax, ARDS, severe asthma",
                "Cardiac: CHF, pulmonary edema (see cardiovascular)"
            ]
        }
    },
    {
        id: "cough",
        name: "Cough",
        system: "respiratory",
        type: "symptom",
        diseaseIds: [
            "acute-bronchitis",
            "asthma",
            "copd",
            "pneumonia-cap",
            "pneumonia-hap",
            "tuberculosis",
            "lung-cancer-nsclc",
            "lung-cancer-sclc",
            "bronchiectasis",
            "ipf"
        ],
        pageType: "category",
        detail: {
            approach: "Acute (<3 weeks) vs chronic (>8 weeks) cough. Acute: think infection (bronchitis, pneumonia). Chronic: think asthma, COPD, GERD, ACE inhibitor, postnasal drip, lung cancer. Productive vs dry narrows differential.",
            redFlags: [
                "Hemoptysis suggests TB, lung cancer, PE, bronchiectasis",
                "Weight loss + chronic cough suggests TB or malignancy",
                "Night sweats suggests TB",
                "Chronic cough in smoker >40 years: think lung cancer",
                "Cough after choking episode: foreign body aspiration"
            ],
            initialWorkup: [
                "Duration: <3 weeks (acute), 3-8 weeks (subacute), >8 weeks (chronic)",
                "CXR if: chronic cough, hemoptysis, smoker, systemic symptoms",
                "Spirometry if COPD or asthma suspected",
                "Trial of therapy: PPI (GERD), nasal steroids (postnasal drip), stop ACEi",
                "Sputum culture if productive + fever",
                "CT chest if CXR abnormal or high suspicion for malignancy"
            ],
            differentialCategories: [
                "Acute cough: URI, acute bronchitis, pneumonia, aspiration",
                "Chronic cough: asthma, COPD, GERD, ACE inhibitor, postnasal drip, lung cancer",
                "Productive: bronchitis, pneumonia, bronchiectasis, COPD",
                "Dry: asthma, ACE inhibitor, ILD, early pneumonia"
            ]
        }
    },
    {
        id: "hemoptysis",
        name: "Hemoptysis",
        system: "respiratory",
        type: "symptom",
        diseaseIds: [
            "tuberculosis",
            "lung-cancer-nsclc",
            "lung-cancer-sclc",
            "bronchiectasis",
            "pulmonary-embolism",
            "pneumonia-cap",
            "lung-abscess",
            "goodpasture-syndrome"
        ],
        pageType: "category",
        detail: {
            approach: "Hemoptysis is coughing up blood from respiratory tract. Distinguish from hematemesis (GI) and epistaxis. Massive hemoptysis (>200-600 mL/24h) is life-threatening. Most common causes: bronchitis, TB, lung cancer, bronchiectasis.",
            redFlags: [
                "Massive hemoptysis (>200 mL in 24h) - airway emergency, high mortality",
                "Risk of asphyxiation > risk of exsanguination",
                "Chronic smoker: high suspicion for lung cancer",
                "TB risk factors: immigration, immunosuppression, incarceration",
                "Concurrent hematuria + hemoptysis: Goodpasture syndrome or granulomatosis with polyangiitis"
            ],
            initialWorkup: [
                "Confirm true hemoptysis (not hematemesis or epistaxis)",
                "Volume assessment: mild (<20 mL), moderate (20-200 mL), massive (>200 mL)",
                "CXR: mass (cancer), cavitation (TB, abscess), infiltrate (pneumonia)",
                "CT chest with IV contrast: localize bleeding source, evaluate mass",
                "Bronchoscopy: identify bleeding source, therapeutic (if massive)",
                "Labs: CBC, coagulation studies, type and cross if massive"
            ],
            differentialCategories: [
                "Infection: TB (most common worldwide), pneumonia, lung abscess, bronchitis",
                "Neoplasm: lung cancer (squamous > others)",
                "Vascular: PE, pulmonary AVM, elevated pulmonary venous pressure",
                "Airway: bronchiectasis, foreign body",
                "Systemic: Goodpasture, GPA (Wegener's), coagulopathy"
            ]
        }
    },
    {
        id: "wheezing-stridor",
        name: "Wheezing & Stridor",
        system: "respiratory",
        type: "symptom",
        diseaseIds: [
            "asthma",
            "copd",
            "bronchiolitis",
            "anaphylaxis"
        ],
        pageType: "category",
        detail: {
            approach: "Wheezing = expiratory, musical, polyphonic sound from lower airway obstruction (asthma, COPD). Stridor = inspiratory, monophonic sound from upper airway obstruction (croup, epiglottitis, foreign body, anaphylaxis). Stridor is always concerning and may be an emergency.",
            redFlags: [
                "Stridor is an airway emergency - consider intubation",
                "Biphasic stridor suggests critical airway narrowing",
                "Silent chest in asthmatic suggests severe obstruction, impending respiratory failure",
                "Drooling, tripod position, unable to speak: epiglottitis or severe obstruction",
                "New wheezing + urticaria + hypotension: anaphylaxis"
            ],
            initialWorkup: [
                "Assess severity: respiratory rate, O2 sat, accessory muscle use, ability to speak",
                "Peak flow or spirometry if stable (helps assess asthma/COPD severity)",
                "CXR: hyperinflation (asthma/COPD), foreign body",
                "If stridor: DO NOT examine throat (may precipitate complete obstruction in epiglottitis)",
                "Lateral neck X-ray if croup or epiglottitis suspected (but don't delay treatment)"
            ],
            differentialCategories: [
                "Wheezing (expiratory, lower airway): asthma, COPD, bronchiolitis, CHF (cardiac asthma), foreign body, anaphylaxis",
                "Stridor (inspiratory, upper airway): croup, epiglottitis, foreign body, anaphylaxis, retropharyngeal abscess, angioedema"
            ]
        }
    },
    {
        id: "obstructive-lung-disease",
        name: "Obstructive Lung Disease",
        system: "respiratory",
        type: "pathophysiologic",
        diseaseIds: [
            "asthma",
            "copd",
            "bronchiectasis",
            "cystic-fibrosis",
            "bronchiolitis"
        ],
        pageType: "category",
        detail: {
            overview: "Obstructive lung diseases are characterized by airflow limitation. FEV1/FVC ratio <0.70 diagnostic. Decreased expiratory flow rates, air trapping, hyperinflation.",
            classification: [
                "Reversible: Asthma (responds to bronchodilators)",
                "Irreversible: COPD, bronchiectasis, CF (fixed obstruction)",
                "FEV1/FVC <0.70 defines obstruction",
                "DLCO: normal in asthma, decreased in emphysema"
            ],
            generalPrinciples: [
                "Spirometry is diagnostic: FEV1/FVC <0.70",
                "Bronchodilator response distinguishes asthma (reversible) from COPD (irreversible)",
                "CXR shows hyperinflation (flattened diaphragms, increased AP diameter)",
                "Chronic hypoxia → pulmonary HTN → cor pulmonale",
                "Exacerbations often triggered by infections (viral > bacterial)"
            ]
        }
    },
    {
        id: "restrictive-lung-disease",
        name: "Restrictive Lung Disease",
        system: "respiratory",
        type: "pathophysiologic",
        diseaseIds: [
            "ipf",
            "sarcoidosis",
            "hypersensitivity-pneumonitis",
            "asbestosis",
            "silicosis",
            "ards"
        ],
        pageType: "category",
        detail: {
            overview: "Restrictive lung diseases are characterized by reduced lung volumes (TLC, FRC, RV). FEV1/FVC ratio normal or increased (both reduced proportionally). Stiff, non-compliant lungs.",
            classification: [
                "Intrinsic (parenchymal): ILD (IPF, sarcoidosis, HP, pneumoconioses), ARDS",
                "Extrinsic (extraparenchymal): Chest wall (kyphoscoliosis, obesity), Neuromuscular (ALS, myasthenia), Pleural (effusion, fibrosis)",
                "FEV1/FVC >0.70 (or normal) with reduced TLC",
                "DLCO usually decreased (impaired gas exchange)"
            ],
            generalPrinciples: [
                "Spirometry: FEV1 and FVC both decreased, ratio normal/increased, TLC decreased",
                "DLCO decreased (except chest wall/neuromuscular causes)",
                "CXR/CT: reticular or nodular infiltrates, honeycombing (IPF)",
                "Rapid shallow breathing pattern (increased respiratory rate, low tidal volume)",
                "Hypoxemia common, hypercapnia rare (until end-stage)"
            ]
        }
    },
    {
        id: "infectious-lung-disease",
        name: "Infectious Lung Disease",
        system: "respiratory",
        type: "pathophysiologic",
        diseaseIds: [
            "pneumonia-cap",
            "pneumonia-hap",
            "pneumonia-aspiration",
            "tuberculosis",
            "atypical-pneumonia-mycoplasma",
            "atypical-pneumonia-legionella",
            "atypical-pneumonia-chlamydia",
            "lung-abscess"
        ],
        pageType: "category",
        detail: {
            overview: "Infections of the lung parenchyma, airways, or pleura. Distinguished by organism (bacterial, viral, fungal, mycobacterial), location (CAP vs HAP), and patient factors (immunocompetent vs immunocompromised).",
            classification: [
                "Community-acquired pneumonia (CAP): S. pneumoniae most common",
                "Hospital-acquired pneumonia (HAP): MRSA, Pseudomonas, Gram-negatives",
                "Atypical pneumonia: Mycoplasma, Legionella, Chlamydia (no typical lobar consolidation)",
                "Aspiration pneumonia: anaerobes, right lower lobe",
                "TB: granulomatous infection, upper lobe cavitation"
            ],
            generalPrinciples: [
                "Fever + cough + sputum production + infiltrate on CXR = pneumonia",
                "Typical: sudden onset, lobar consolidation, S. pneumoniae",
                "Atypical: gradual onset, interstitial pattern, Mycoplasma/Legionella/Chlamydia",
                "Sputum culture low yield in outpatient CAP (empiric treatment)",
                "Blood cultures + sputum culture if hospitalized",
                "Duration: CAP 5-7 days, HAP 7-14 days, TB 6 months"
            ]
        }
    },
    {
        id: "pulmonary-vascular-disease",
        name: "Pulmonary Vascular Disease",
        system: "respiratory",
        type: "pathophysiologic",
        diseaseIds: [
            "pulmonary-embolism",
            "pulmonary-hypertension"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of the pulmonary vasculature affecting blood flow through the lungs. Includes thromboembolic disease (PE) and elevated pulmonary artery pressures (pulmonary HTN).",
            classification: [
                "Thromboembolic: PE (acute obstruction), chronic thromboembolic pulmonary HTN",
                "Pulmonary hypertension: elevated PA pressure (mean PAP >20 mmHg)",
                "WHO Group 1: Pulmonary arterial HTN (idiopathic, connective tissue disease, drugs)",
                "WHO Group 2: Left heart disease (most common cause of pulm HTN overall)",
                "WHO Group 3: Lung disease/hypoxia (COPD, ILD)",
                "WHO Group 4: Chronic thromboembolic",
                "WHO Group 5: Multifactorial"
            ],
            generalPrinciples: [
                "PE: sudden dyspnea + pleuritic chest pain + hypoxia, Wells score guides testing",
                "Pulmonary HTN: progressive dyspnea, loud P2, RV heave, eventual cor pulmonale",
                "V/Q mismatch: PE causes high V/Q (ventilation without perfusion)",
                "Diagnosis PE: CTPA (gold standard), V/Q scan if contrast CI",
                "Diagnosis pulm HTN: echo (estimate PA pressure), right heart cath (definitive)"
            ]
        }
    },
    {
        id: "lung-neoplasms",
        name: "Lung Neoplasms",
        system: "respiratory",
        type: "pathophysiologic",
        diseaseIds: [
            "lung-cancer-nsclc",
            "lung-cancer-sclc",
            "mesothelioma",
            "carcinoid-tumor"
        ],
        pageType: "category",
        detail: {
            overview: "Primary lung malignancies. Leading cause of cancer death worldwide. Smoking is #1 risk factor. Divided into small cell (SCLC, 15%) and non-small cell (NSCLC, 85%).",
            classification: [
                "NSCLC (85%): Adenocarcinoma (most common, peripheral), Squamous cell (central, cavitates), Large cell (least common)",
                "SCLC (15%): Central, aggressive, paraneoplastic syndromes, metastasizes early",
                "Other: Mesothelioma (asbestos, pleural), Carcinoid (neuroendocrine)"
            ],
            generalPrinciples: [
                "Smoking is #1 risk factor (85-90% of lung cancers)",
                "Presentation: chronic cough, hemoptysis, weight loss, often asymptomatic until late",
                "SVC syndrome: facial swelling, dilated neck/chest veins (SCLC or lymphoma)",
                "Pancoast tumor: apical tumor → Horner syndrome + shoulder pain + C8-T1 nerve involvement",
                "Diagnosis: CT chest, PET scan for staging, biopsy (bronchoscopy or CT-guided)",
                "SCLC: extensive at diagnosis, chemo/radiation (not surgical), poor prognosis",
                "NSCLC: surgical resection if early stage (I-II), chemo/radiation if advanced"
            ]
        }
    },
    {
        id: "pleural-disease",
        name: "Pleural Disease",
        system: "respiratory",
        type: "anatomical",
        diseaseIds: [
            "pneumothorax",
            "pleural-effusion",
            "hemothorax",
            "mesothelioma"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of the pleural space (potential space between visceral and parietal pleura). Includes air (pneumothorax), fluid (effusion), or blood (hemothorax) accumulation.",
            classification: [
                "Pneumothorax: primary spontaneous (tall thin males), secondary (COPD), traumatic, tension (emergency)",
                "Pleural effusion: transudate (CHF, cirrhosis, nephrotic) vs exudate (pneumonia, malignancy, PE)",
                "Light's criteria distinguish transudate vs exudate",
                "Hemothorax: trauma, malignancy, anticoagulation"
            ],
            generalPrinciples: [
                "Presentation: sudden pleuritic chest pain + dyspnea + unilateral absent breath sounds",
                "CXR: absent lung markings (pneumothorax), blunted costophrenic angle (effusion)",
                "Tension pneumothorax: tracheal deviation, hypotension, JVD - EMERGENCY (needle decompression)",
                "Pleural effusion workup: thoracentesis → Light's criteria → if exudate → cell count, culture, cytology",
                "Small pneumothorax (<20%): observation, O2. Large: chest tube"
            ]
        }
    }
];

export default respiratoryCategories;

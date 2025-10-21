// Cardiovascular categories, symptoms, and syndromes
const cvCategories = [
    {
        id: "chest-pain",
        name: "Chest Pain",
        system: "cardiovascular",
        type: "symptom",
        diseaseIds: [
            "stemi",
            "nstemi",
            "unstable-angina",
            "stable-angina",
            "pericarditis",
            "myocarditis",
            "aortic-dissection",
            "costochondritis"
        ],
        pageType: "category",
        detail: {
            approach: "Chest pain requires rapid assessment to rule out life-threatening causes (ACS, PE, aortic dissection, tension pneumothorax). Use OPQRST: Onset, Provocation, Quality, Radiation, Severity, Timing.",
            redFlags: [
                "Severe, sudden onset suggests dissection or PE",
                "Radiation to arm/jaw suggests cardiac ischemia",
                "Associated dyspnea, diaphoresis, nausea suggest ACS",
                "Positional changes suggest pericarditis or MSK",
                "Tearing pain radiating to back suggests dissection"
            ],
            initialWorkup: [
                "Vital signs (BP both arms for dissection)",
                "ECG within 10 minutes",
                "Troponin (serial if suspecting ACS)",
                "CXR (pneumothorax, widened mediastinum)",
                "D-dimer if PE suspected",
                "CT angiography if dissection suspected"
            ],
            differentialCategories: [
                "Cardiac: ACS, pericarditis, myocarditis",
                "Vascular: aortic dissection, PE",
                "Pulmonary: pneumothorax, pneumonia, pleuritis",
                "GI: GERD, esophageal spasm, PUD",
                "MSK: costochondritis, rib fracture",
                "Psych: panic attack, anxiety"
            ]
        }
    },
    {
        id: "dyspnea",
        name: "Dyspnea",
        system: "cardiovascular",
        type: "symptom",
        diseaseIds: [
            "hfref",
            "hfpef",
            "acute-decompensated-hf",
            "pulmonary-edema",
            "cardiogenic-shock"
        ],
        pageType: "category",
        detail: {
            approach: "Dyspnea differential is broad. Cardiac causes include heart failure, ischemia, valvular disease. Pulmonary causes include COPD, asthma, pneumonia, PE. Focus on acuity, associated symptoms, and risk factors.",
            redFlags: [
                "Hypoxia with normal or low BP suggests cardiogenic shock or PE",
                "Orthopnea and PND highly specific for heart failure",
                "Chest pain with dyspnea suggests ACS or PE",
                "Unilateral leg swelling suggests PE"
            ],
            initialWorkup: [
                "Vital signs including O2 saturation",
                "ECG",
                "CXR (cardiomegaly, pulmonary edema, infiltrates)",
                "BNP (>400 suggests heart failure)",
                "Troponin if concern for ACS",
                "D-dimer if PE suspected"
            ],
            differentialCategories: [
                "Cardiac: heart failure, ACS, valvular disease, pericardial effusion",
                "Pulmonary: COPD, asthma, pneumonia, PE, pneumothorax",
                "Other: anemia, metabolic acidosis, anxiety"
            ]
        }
    },
    {
        id: "syncope-palpitations",
        name: "Syncope & Palpitations",
        system: "cardiovascular",
        type: "symptom",
        diseaseIds: [
            "atrial-fibrillation",
            "atrial-flutter",
            "ventricular-tachycardia",
            "svt",
            "ventricular-fibrillation",
            "first-degree-av-block",
            "second-degree-av-block-mobitz-i",
            "second-degree-av-block-mobitz-ii",
            "third-degree-av-block",
            "sick-sinus-syndrome"
        ],
        pageType: "category",
        detail: {
            approach: "Syncope is transient loss of consciousness from cerebral hypoperfusion. Cardiac causes (arrhythmia, structural) are most concerning. Palpitations are awareness of heartbeat - may indicate arrhythmia.",
            redFlags: [
                "Syncope with exertion suggests cardiac cause (HOCM, AS, arrhythmia)",
                "Syncope without prodrome suggests arrhythmia",
                "Family history of sudden death",
                "Abnormal cardiac exam or ECG",
                "Chest pain, dyspnea with palpitations"
            ],
            initialWorkup: [
                "ECG (always!): look for arrhythmias, conduction abnormalities, pre-excitation, QT prolongation, Brugada pattern",
                "Orthostatic vital signs",
                "Holter monitor or event monitor if recurrent",
                "Echo if structural heart disease suspected",
                "Electrophysiology study if high-risk features"
            ],
            differentialCategories: [
                "Arrhythmias: tachy (VT, SVT, Afib) or brady (AV blocks, SSS)",
                "Structural: AS, HOCM, cardiac tamponade",
                "Vascular: PE, aortic dissection",
                "Neurologic: seizure, TIA",
                "Reflex: vasovagal, situational",
                "Orthostatic: volume depletion, autonomic dysfunction"
            ]
        }
    },
    {
        id: "valvular-disease",
        name: "Valvular Disease",
        system: "cardiovascular",
        type: "anatomical",
        diseaseIds: [
            "aortic-stenosis",
            "aortic-regurgitation",
            "mitral-stenosis",
            "mitral-regurgitation",
            "mitral-valve-prolapse",
            "tricuspid-regurgitation"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of cardiac valves affecting opening (stenosis) or closing (regurgitation). Can lead to heart failure, arrhythmias, and sudden death if severe.",
            classification: [
                "Stenosis: obstruction to forward flow, pressure overload on proximal chamber",
                "Regurgitation: incomplete closure, volume overload on proximal chamber",
                "Left-sided (aortic, mitral): cause pulmonary congestion",
                "Right-sided (tricuspid, pulmonic): cause systemic congestion"
            ],
            generalPrinciples: [
                "Acute regurgitation worse than chronic (no time for compensation)",
                "Murmur intensity doesn't correlate with severity",
                "Echo is gold standard for diagnosis and severity assessment",
                "Surgical intervention based on symptoms + echo parameters"
            ]
        }
    },
    {
        id: "hypertension",
        name: "Hypertension",
        system: "cardiovascular",
        type: "category",
        diseaseIds: [
            "essential-hypertension",
            "hypertensive-emergency",
            "secondary-hypertension"
        ],
        pageType: "category",
        detail: {
            overview: "Sustained elevation of blood pressure ≥130/80. Leading cause of stroke, MI, heart failure, and CKD. Often asymptomatic 'silent killer'.",
            classification: [
                "Stage 1: 130-139/80-89",
                "Stage 2: ≥140/90",
                "Hypertensive urgency: BP >180/120 without end-organ damage",
                "Hypertensive emergency: BP >180/120 WITH end-organ damage"
            ],
            generalPrinciples: [
                "Essential (primary) HTN: 95% of cases, idiopathic",
                "Secondary HTN: 5%, identifiable cause (renal, endocrine, vascular)",
                "Screen for secondary HTN if: age <30, resistant HTN, sudden onset, hypokalemia",
                "Target BP <130/80 for most patients"
            ]
        }
    },
    {
        id: "cardiomyopathies",
        name: "Cardiomyopathies",
        system: "cardiovascular",
        type: "category",
        diseaseIds: [
            "dilated-cardiomyopathy",
            "hypertrophic-cardiomyopathy",
            "restrictive-cardiomyopathy",
            "takotsubo-cardiomyopathy"
        ],
        pageType: "category",
        detail: {
            overview: "Primary diseases of the myocardium affecting structure and function. Can be dilated, hypertrophic, restrictive, or stress-induced (Takotsubo).",
            classification: [
                "Dilated: systolic dysfunction, enlarged ventricles, reduced EF",
                "Hypertrophic: diastolic dysfunction, thickened walls, preserved/hyperdynamic EF",
                "Restrictive: diastolic dysfunction, stiff ventricles, normal wall thickness",
                "Takotsubo (stress): transient apical ballooning mimicking MI"
            ],
            generalPrinciples: [
                "Leading cause of heart transplantation",
                "Sudden cardiac death risk highest in hypertrophic cardiomyopathy",
                "Echo is diagnostic modality of choice",
                "Genetic testing important in hypertrophic and some dilated cardiomyopathies"
            ]
        }
    },
    {
        id: "pericardial-disease",
        name: "Pericardial Disease",
        system: "cardiovascular",
        type: "anatomical",
        diseaseIds: [
            "pericarditis",
            "pericardial-effusion",
            "cardiac-tamponade"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of the pericardial sac including inflammation (pericarditis), fluid accumulation (effusion), and hemodynamic compromise (tamponade).",
            classification: [
                "Pericarditis: inflammation",
                "Pericardial effusion: fluid accumulation in pericardial space",
                "Cardiac tamponade: hemodynamic compromise from effusion"
            ],
            generalPrinciples: [
                "Effusion develops slowly: usually asymptomatic until large",
                "Rapid effusion: even small amounts can cause tamponade",
                "Tamponade is life-threatening emergency requiring pericardiocentesis",
                "Beck's triad: hypotension, elevated JVP, muffled heart sounds"
            ]
        }
    },
    {
        id: "vascular-disease",
        name: "Vascular Disease",
        system: "cardiovascular",
        type: "anatomical",
        diseaseIds: [
            "aortic-dissection",
            "abdominal-aortic-aneurysm",
            "peripheral-arterial-disease",
            "deep-vein-thrombosis"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of blood vessels including arterial and venous disease. Can affect aorta, peripheral arteries, or venous system.",
            classification: [
                "Aortic: aneurysm, dissection",
                "Peripheral arterial: PAD, acute limb ischemia",
                "Venous: DVT, superficial thrombophlebitis",
                "Vasculitis: inflammatory vascular disease"
            ],
            generalPrinciples: [
                "Atherosclerosis is systemic: PAD patients have high risk of CAD and stroke",
                "DVT can lead to PE (life-threatening) and post-thrombotic syndrome",
                "Abdominal aortic aneurysm: screen men >65 with smoking history",
                "Anticoagulation key for venous disease, antiplatelet for arterial"
            ]
        }
    }
];

export default cvCategories;

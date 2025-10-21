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
    }
    // Future: neurological, renal, endocrine, etc.
];

export default systems;

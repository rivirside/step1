// Hematology/Oncology diseases
const hematologyOncologyDiseases = [
    // ===== ANEMIA =====
    {
        id: "iron-deficiency-anemia",
        name: "Iron Deficiency Anemia",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "weakness", "pallor"],
        tags: ["microcytic", "anemia", "iron", "common"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Anemia caused by insufficient iron for hemoglobin synthesis, resulting in microcytic hypochromic RBCs.",
            pathophysiology: "Iron deficiency → impaired heme synthesis → reduced hemoglobin production → microcytic hypochromic anemia. Body prioritizes iron for hemoglobin over ferritin (storage) and myoglobin.",
            epidemiology: "Most common cause of anemia worldwide. Affects 20% of women, 50% of pregnant women, 3% of men. Prevalence higher in developing countries due to malnutrition and parasitic infections.",
            riskFactors: [
                "Blood loss: menstruation (most common in premenopausal women), GI bleeding (most common in men and postmenopausal women)",
                "Increased demand: pregnancy, lactation, rapid growth (infants, adolescents)",
                "Decreased intake: vegetarian/vegan diet, malnutrition, elderly",
                "Malabsorption: celiac disease, Crohn's, gastric bypass, H. pylori",
                "Medications: PPIs (↓ iron absorption), aspirin/NSAIDs (GI bleeding)"
            ],
            presentation: "Fatigue, weakness, dyspnea on exertion, palpitations. Pica (ice = pagophagia, clay, starch). Restless leg syndrome. Angular cheilitis, glossitis. Koilonychia (spoon nails) in severe cases.",
            physicalExam: [
                "Pallor (conjunctival, palmar creases)",
                "Tachycardia, systolic flow murmur (high output state)",
                "Koilonychia (spoon-shaped nails) - rare but specific",
                "Angular cheilitis, glossitis (smooth tongue)",
                "In severe cases: high-output heart failure"
            ],
            diagnosticCriteria: "Microcytic anemia (MCV <80) with low ferritin (<30 ng/mL) and low iron, high TIBC, low transferrin saturation (<20%).",
            labs: [
                "CBC: ↓ Hb/Hct, ↓ MCV (<80), ↓ MCH, ↓ MCHC, ↑ RDW (anisocytosis)",
                "Iron studies: ↓ serum iron, ↓ ferritin (<30), ↑ TIBC (>400), ↓ transferrin saturation (<20%)",
                "Peripheral smear: microcytic hypochromic RBCs, anisocytosis, poikilocytosis, occasional target cells",
                "Reticulocyte count: low (inappropriate response)",
                "Ferritin: most specific test (but acute phase reactant, may be falsely elevated in inflammation)"
            ],
            imaging: [
                "Not routinely needed",
                "If chronic GI blood loss suspected: EGD, colonoscopy (screen for malignancy, celiac, IBD)",
                "Capsule endoscopy if upper and lower GI normal but occult bleeding suspected"
            ],
            differentialDiagnosis: [
                "Thalassemia: microcytic but normal/high RBC count, normal/high ferritin, hemoglobin electrophoresis abnormal",
                "Anemia of chronic disease: microcytic/normocytic, ↑ ferritin, ↓ TIBC, ↓ serum iron",
                "Sideroblastic anemia: microcytic, ringed sideroblasts on bone marrow, ↑ ferritin, ↑ iron",
                "Lead poisoning: microcytic, basophilic stippling, ↑ lead levels"
            ],
            management: {
                acute: [
                    "Identify and treat underlying cause (most important)",
                    "Oral iron: ferrous sulfate 325mg TID (take with vitamin C to enhance absorption, on empty stomach)",
                    "IV iron: if intolerant to oral, malabsorption, or need rapid repletion (pregnancy, severe anemia)",
                    "Transfusion: only if symptomatic (angina, dyspnea) or Hb <7 g/dL"
                ],
                chronic: [
                    "Continue oral iron for 3-6 months after normalization to replete stores",
                    "Monitor CBC, ferritin at 1 month, then q3-6 months",
                    "Treat underlying cause: menorrhagia (hormonal therapy), GI bleeding (endoscopy, treat H. pylori, celiac)",
                    "Dietary counseling: red meat, dark leafy greens, fortified cereals",
                    "Avoid tea/coffee with meals (tannins inhibit absorption)"
                ]
            },
            complications: [
                "High-output heart failure (severe chronic anemia)",
                "Restless leg syndrome",
                "Impaired cognitive function, especially in children",
                "Increased risk of infections (iron needed for immune function)",
                "Pregnancy complications: preterm delivery, low birth weight, maternal/fetal mortality"
            ],
            prognosis: "Excellent with treatment. Hb should increase by 1 g/dL every 2-3 weeks with oral iron. Failure to respond suggests ongoing blood loss, malabsorption, or incorrect diagnosis.",
            clinicalPearls: [
                "Ferritin <30 = iron deficiency. Ferritin 30-100 with inflammation may still represent iron deficiency.",
                "Menstruating women: most common cause is menorrhagia. Men and postmenopausal women: GI bleeding until proven otherwise (requires endoscopy).",
                "RDW (red cell distribution width) is elevated early, reflects anisocytosis.",
                "Oral iron causes black stools, constipation. Take with vitamin C, avoid with dairy/antacids.",
                "Reticulocyte count should ↑ within 1 week of starting iron (confirms diagnosis). Hb normalizes in 1-2 months.",
                "Always investigate cause in men and postmenopausal women - consider GI malignancy."
            ]
        }
    },
    {
        id: "anemia-of-chronic-disease",
        name: "Anemia of Chronic Disease",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "weakness"],
        tags: ["normocytic", "microcytic", "anemia", "inflammatory"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Anemia associated with chronic inflammatory, infectious, or malignant conditions due to hepcidin-mediated iron sequestration.",
            pathophysiology: "Chronic inflammation → ↑ IL-6 → ↑ hepcidin (liver) → ↓ ferroportin (blocks iron release from macrophages and enterocytes) → iron trapped in macrophages → unavailable for erythropoiesis. Also ↓ EPO production and RBC lifespan.",
            epidemiology: "Second most common anemia after iron deficiency. Occurs in 30-50% of patients with chronic inflammatory conditions, chronic kidney disease, malignancy, or chronic infections.",
            riskFactors: [
                "Chronic infections: HIV, TB, osteomyelitis, endocarditis",
                "Autoimmune: RA, SLE, IBD",
                "Malignancy: solid tumors, lymphoma",
                "Chronic kidney disease",
                "Heart failure"
            ],
            presentation: "Symptoms of underlying disease predominate. Fatigue and weakness from anemia usually mild-moderate.",
            physicalExam: [
                "Pallor (mild)",
                "Signs of underlying disease: arthritis, rash, weight loss, lymphadenopathy"
            ],
            diagnosticCriteria: "Normocytic or mildly microcytic anemia with ↑ ferritin, ↓ TIBC, ↓ serum iron, normal/↓ transferrin saturation in setting of chronic inflammatory condition.",
            labs: [
                "CBC: normocytic (MCV 80-100) or mildly microcytic (>70), mild anemia (Hb usually >9)",
                "Iron studies: ↓ serum iron, ↓ TIBC (<400), ↑ ferritin (>100), normal/↓ transferrin saturation (usually >20%)",
                "Markers of inflammation: ↑ ESR, ↑ CRP, ↑ IL-6",
                "Reticulocyte count: low (inappropriate for degree of anemia)"
            ],
            imaging: [
                "Not needed for diagnosis",
                "Imaging for underlying condition (CT, PET for malignancy, etc.)"
            ],
            differentialDiagnosis: [
                "Iron deficiency anemia: ↓ ferritin (<30), ↑ TIBC, microcytic",
                "Combined iron deficiency + chronic disease: ↓ ferritin, ↓ TIBC (treat iron deficiency first)",
                "Thalassemia: normal/↑ ferritin, normal iron studies, hemoglobin electrophoresis abnormal",
                "Myelodysplastic syndrome: cytopenias, high-risk populations, requires bone marrow biopsy"
            ],
            management: {
                acute: [
                    "Treat underlying disease (most important - resolves anemia in many cases)",
                    "Iron supplementation NOT helpful (iron is sequestered, not deficient)",
                    "Transfusion if symptomatic or Hb <7 g/dL"
                ],
                chronic: [
                    "Treat underlying inflammatory condition",
                    "EPO (erythropoietin) if CKD with Hb <10 g/dL",
                    "Consider IV iron if concurrent true iron deficiency (ferritin <100 in CKD)",
                    "Monitor for iron overload if chronic transfusions (ferritin >1000 → iron chelation)"
                ]
            },
            complications: [
                "Rarely severe enough to cause complications",
                "Reduced quality of life from fatigue",
                "May worsen heart failure or ischemic heart disease"
            ],
            prognosis: "Anemia typically resolves with treatment of underlying condition. If underlying disease is chronic/incurable, anemia persists but usually mild-moderate.",
            clinicalPearls: [
                "Key lab finding: ↑ ferritin with ↓ TIBC (opposite of iron deficiency)",
                "Transferrin saturation >20% suggests anemia of chronic disease, <20% suggests iron deficiency",
                "Soluble transferrin receptor (sTfR) can differentiate: normal in ACD, elevated in iron deficiency",
                "If both conditions coexist (ferritin 30-100), trial of iron supplementation is reasonable",
                "Hepcidin levels (if available) are ↑ in ACD, ↓ in iron deficiency",
                "Do NOT give iron supplementation alone - won't help and may worsen inflammation"
            ]
        }
    },
    {
        id: "b12-deficiency",
        name: "Vitamin B12 Deficiency",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "weakness", "paresthesias", "ataxia"],
        tags: ["macrocytic", "anemia", "megaloblastic", "neurologic"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Anemia caused by insufficient vitamin B12 (cobalamin), resulting in impaired DNA synthesis and macrocytic anemia with neurologic complications.",
            pathophysiology: "B12 deficiency → impaired DNA synthesis → ineffective erythropoiesis → megaloblastic anemia. Also → ↑ methylmalonic acid and homocysteine → demyelination of dorsal columns and lateral corticospinal tracts (subacute combined degeneration).",
            epidemiology: "Affects 10-15% of adults >60 years. More common with pernicious anemia (autoimmune), malabsorption, or strict vegan diet. B12 stores last 3-5 years, so deficiency develops slowly.",
            riskFactors: [
                "Pernicious anemia: anti-intrinsic factor antibodies, anti-parietal cell antibodies (most common cause in developed countries)",
                "Malabsorption: Crohn's disease, celiac, pancreatic insufficiency, bacterial overgrowth",
                "Dietary: strict vegan diet (no animal products)",
                "Medications: metformin, PPIs (long-term use), H2 blockers",
                "Post-surgical: gastrectomy, terminal ileum resection (B12 absorbed in ileum)",
                "Elderly: achlorhydria (can't cleave B12 from food proteins)"
            ],
            presentation: "Fatigue, weakness, pallor. Glossitis (beefy red tongue), diarrhea. Neurologic: paresthesias (hands/feet), ataxia, loss of vibration/proprioception, cognitive impairment, dementia.",
            physicalExam: [
                "Pallor",
                "Glossitis: smooth, beefy red tongue",
                "Neurologic: ↓ vibration sense, ↓ proprioception, ataxia, positive Romberg, hyperreflexia (UMN signs), hyporeflexia (peripheral neuropathy), Babinski sign",
                "Cognitive impairment, depression"
            ],
            diagnosticCriteria: "Macrocytic anemia with low serum B12 (<200 pg/mL) and ↑ methylmalonic acid (MMA) and/or ↑ homocysteine.",
            labs: [
                "CBC: macrocytic anemia (MCV >100), ↓ Hb, ↓ Hct, may have pancytopenia",
                "Peripheral smear: macro-ovalocytes, hypersegmented neutrophils (>5 lobes), anisocytosis",
                "Serum B12: <200 pg/mL (definite deficiency), 200-300 (borderline)",
                "Methylmalonic acid (MMA): elevated (most sensitive/specific for B12 deficiency)",
                "Homocysteine: elevated (but also elevated in folate deficiency)",
                "Reticulocyte count: low (ineffective erythropoiesis)",
                "LDH: markedly elevated (intramedullary hemolysis)",
                "Indirect bilirubin: elevated",
                "Anti-intrinsic factor antibodies: specific for pernicious anemia (50% sensitive)",
                "Anti-parietal cell antibodies: sensitive but not specific for pernicious anemia"
            ],
            imaging: [
                "MRI brain/spine: T2 hyperintensity in dorsal columns (subacute combined degeneration) if neurologic symptoms"
            ],
            differentialDiagnosis: [
                "Folate deficiency: macrocytic anemia, normal MMA, ↑ homocysteine, NO neurologic symptoms",
                "Hypothyroidism: macrocytic anemia, normal B12/folate, ↑ TSH",
                "Myelodysplastic syndrome: macrocytic anemia, dysplastic cells on smear, requires bone marrow biopsy",
                "Alcohol: macrocytic anemia (often concurrent folate deficiency), ↑ AST, ↑ GGT",
                "Medications: methotrexate, hydroxyurea, zidovudine (macrocytic)"
            ],
            management: {
                acute: [
                    "Vitamin B12 supplementation: IM cyanocobalamin 1000 mcg daily × 1 week, then weekly × 4 weeks, then monthly for life",
                    "Oral B12 1000-2000 mcg daily is alternative if compliance good and no severe malabsorption",
                    "If severe or neurologic symptoms: start immediately, do NOT wait for test results",
                    "Important: Give B12 BEFORE folate to avoid precipitating subacute combined degeneration"
                ],
                chronic: [
                    "Lifelong B12 supplementation if pernicious anemia or malabsorption",
                    "Monthly IM injections or daily high-dose oral (1000-2000 mcg)",
                    "Monitor CBC, B12 levels at 1-3 months, then annually",
                    "Screen for gastric cancer in pernicious anemia (3× increased risk)"
                ]
            },
            complications: [
                "Subacute combined degeneration: dorsal column (vibration, proprioception) + lateral corticospinal tract (weakness, spasticity). MAY BE IRREVERSIBLE if not treated early.",
                "Cognitive impairment, dementia (reversible with treatment)",
                "Peripheral neuropathy",
                "Increased homocysteine → ↑ risk of thrombosis",
                "Gastric cancer (in pernicious anemia)",
                "Pancytopenia (severe cases)"
            ],
            prognosis: "Anemia improves within days-weeks with treatment. Reticulocytosis occurs in 3-5 days. Neurologic symptoms may improve over months but can be irreversible if prolonged deficiency. Lifelong treatment required for pernicious anemia.",
            clinicalPearls: [
                "Hypersegmented neutrophils (>5 lobes) are hallmark finding on smear",
                "MMA is most sensitive/specific confirmatory test (elevated in B12 def, normal in folate def)",
                "ALWAYS give B12 before folate in macrocytic anemia to avoid precipitating neurologic symptoms",
                "Neurologic symptoms can occur WITHOUT anemia in 25% of cases",
                "Schilling test (historical): not commonly used anymore, replaced by MMA/homocysteine",
                "Pernicious anemia: autoimmune destruction of parietal cells → ↓ intrinsic factor → ↓ B12 absorption",
                "Vegans need B12 supplementation (no animal products = no dietary B12)",
                "Nitrous oxide inactivates B12 → can precipitate deficiency"
            ]
        }
    },
    {
        id: "folate-deficiency",
        name: "Folate Deficiency",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "weakness"],
        tags: ["macrocytic", "anemia", "megaloblastic"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Anemia caused by insufficient folate (vitamin B9), resulting in impaired DNA synthesis and macrocytic anemia WITHOUT neurologic complications.",
            pathophysiology: "Folate deficiency → impaired DNA synthesis → ineffective erythropoiesis → megaloblastic anemia. Unlike B12, folate deficiency does NOT cause demyelination or neurologic symptoms.",
            epidemiology: "Less common since food fortification started in 1998. Folate stores last only 3-4 months (vs 3-5 years for B12), so deficiency develops faster. Common in alcoholics, pregnant women, malabsorption.",
            riskFactors: [
                "Alcoholism (most common cause - ↓ intake, ↓ absorption, ↑ excretion)",
                "Malnutrition, poor diet (elderly, homeless)",
                "Malabsorption: celiac disease, Crohn's disease (jejunum absorption)",
                "Increased demand: pregnancy, lactation, hemolytic anemia, malignancy, dialysis",
                "Medications: methotrexate (folate antagonist), phenytoin, trimethoprim, sulfasalazine"
            ],
            presentation: "Fatigue, weakness, pallor. Glossitis. NO neurologic symptoms (key difference from B12 deficiency). Diarrhea. In pregnancy: neural tube defects in fetus.",
            physicalExam: [
                "Pallor",
                "Glossitis: beefy red tongue (similar to B12)",
                "No neurologic findings (helps distinguish from B12 deficiency)"
            ],
            diagnosticCriteria: "Macrocytic anemia with low serum folate (<2 ng/mL) or low RBC folate (<140 ng/mL) and normal B12, normal MMA, ↑ homocysteine.",
            labs: [
                "CBC: macrocytic anemia (MCV >100), ↓ Hb/Hct",
                "Peripheral smear: macro-ovalocytes, hypersegmented neutrophils (>5 lobes), identical to B12 deficiency",
                "Serum folate: <2 ng/mL (but fluctuates with recent intake, not as reliable)",
                "RBC folate: <140 ng/mL (more reliable, reflects tissue stores)",
                "Homocysteine: elevated (↑ in both B12 and folate deficiency)",
                "MMA: NORMAL (key difference from B12 deficiency)",
                "LDH: elevated (intramedullary hemolysis)",
                "Indirect bilirubin: elevated",
                "Reticulocyte count: low"
            ],
            imaging: [
                "None needed"
            ],
            differentialDiagnosis: [
                "B12 deficiency: ↑ MMA, neurologic symptoms (main difference)",
                "Alcohol: often concurrent folate deficiency, but also causes macrocytosis independently",
                "Hypothyroidism: macrocytic, normal folate/B12, ↑ TSH",
                "Myelodysplastic syndrome: dysplastic cells, cytopenias, bone marrow biopsy needed",
                "Medications: methotrexate, hydroxyurea (macrocytic)"
            ],
            management: {
                acute: [
                    "Folic acid supplementation: 1-5 mg PO daily",
                    "Treat underlying cause: alcoholism treatment, celiac disease management",
                    "IMPORTANT: Always check B12 level first and supplement if low. Giving folate alone in B12 deficiency can precipitate neurologic symptoms.",
                    "In pregnancy: prenatal vitamins with folate to prevent neural tube defects"
                ],
                chronic: [
                    "Continue folate supplementation if ongoing risk (hemolytic anemia, dialysis, malabsorption)",
                    "Dietary counseling: leafy greens, legumes, fortified grains",
                    "Alcohol cessation if applicable",
                    "Pregnancy: folic acid 400-800 mcg daily starting before conception to prevent neural tube defects"
                ]
            },
            complications: [
                "Neural tube defects in fetus (spina bifida, anencephaly) if deficiency during pregnancy",
                "Increased homocysteine → ↑ risk of thrombosis, cardiovascular disease",
                "Pancytopenia (severe cases)",
                "No neurologic complications (unlike B12)"
            ],
            prognosis: "Excellent with treatment. Anemia improves within weeks. Reticulocytosis in 3-5 days. No long-term sequelae if treated.",
            clinicalPearls: [
                "Hypersegmented neutrophils look identical to B12 deficiency - cannot distinguish on smear alone",
                "KEY: MMA is NORMAL in folate deficiency, ELEVATED in B12 deficiency",
                "Homocysteine is elevated in BOTH folate and B12 deficiency (not helpful for differentiation)",
                "NEVER give folate without checking B12 first - can precipitate subacute combined degeneration in undiagnosed B12 deficiency",
                "Folate stores deplete in 3-4 months (vs 3-5 years for B12), so deficiency develops faster",
                "Methotrexate toxicity: give leucovorin (folinic acid) rescue, not folic acid",
                "All women of childbearing age should take folate 400 mcg daily to prevent neural tube defects",
                "Alcohol is most common cause of folate deficiency"
            ]
        }
    },
    {
        id: "sickle-cell-disease",
        name: "Sickle Cell Disease",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia"],
        symptoms: ["pain", "fatigue", "jaundice"],
        tags: ["hemolytic", "genetic", "emergency", "vaso-occlusive"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Autosomal recessive hemoglobinopathy caused by mutation in β-globin gene (Glu→Val at position 6), resulting in HbS that polymerizes when deoxygenated, causing RBC sickling, hemolysis, and vaso-occlusion.",
            pathophysiology: "HbS (α2β2S) polymerizes when deoxygenated → sickled RBCs → chronic hemolysis (extravascular) + vaso-occlusion (ischemia, infarction). Triggers: hypoxia, dehydration, infection, cold, acidosis. Sickled cells damage spleen → autosplenectomy by age 5 → ↑ infection risk.",
            epidemiology: "Most common in people of African, Mediterranean, Middle Eastern, Indian descent. 1 in 365 African Americans. Sickle cell trait (HbAS) is protective against severe malaria. Median survival ~45 years.",
            riskFactors: [
                "Genetic: HbSS (homozygous, most severe), HbSC (milder), HbS-β-thalassemia",
                "Triggers for crises: infection, dehydration, hypoxia, cold, stress, acidosis, menses"
            ],
            presentation: "Chronic hemolytic anemia with episodic acute crises. Vaso-occlusive crisis: severe bone pain (hands, feet, long bones, chest, abdomen). Acute chest syndrome: fever, cough, chest pain, hypoxia. Splenic sequestration: acute splenomegaly, ↓ Hb, shock. Aplastic crisis: parvovirus B19 infection → transient red cell aplasia.",
            physicalExam: [
                "Pallor, jaundice (chronic hemolysis)",
                "Splenomegaly (young children), then autosplenectomy (older children/adults)",
                "Dactylitis (hand-foot syndrome in infants): swelling, pain",
                "Leg ulcers (chronic, especially medial malleolus)",
                "Priapism (males)",
                "During acute chest syndrome: fever, tachypnea, crackles, hypoxia"
            ],
            diagnosticCriteria: "Hemoglobin electrophoresis showing HbSS (>90% HbS, no HbA) or HbSC (50% HbS, 50% HbC). Newborn screening identifies at birth.",
            labs: [
                "CBC: normocytic anemia (Hb 6-9 g/dL baseline), ↑ reticulocytes (hemolysis), ↑ WBC (chronic inflammation)",
                "Peripheral smear: sickled cells (irreversibly sickled cells even when oxygenated), target cells, Howell-Jolly bodies (asplenia)",
                "Hemoglobin electrophoresis: HbSS (>90% HbS, no HbA, <2% HbA2, high HbF in infants)",
                "Hemolysis markers: ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin, ↑ reticulocytes",
                "During crisis: ↑ WBC, ↑ LDH, ↑ bilirubin, CRP",
                "Acute chest syndrome: ↓ O2 sat, ↑ WBC, infiltrate on CXR"
            ],
            imaging: [
                "CXR: during acute chest syndrome (infiltrate, often multilobar)",
                "MRI/MRA brain: stroke or silent cerebral infarcts (affects 25% by adulthood)",
                "Transcranial Doppler ultrasound: screen for stroke risk in children (annually ages 2-16)",
                "X-ray: during vaso-occlusive crisis if osteomyelitis suspected"
            ],
            differentialDiagnosis: [
                "Sickle cell trait (HbAS): asymptomatic, no sickling except extreme conditions",
                "HbSC disease: milder than HbSS, less frequent crises",
                "Other hemoglobinopathies: HbE, β-thalassemia",
                "Vaso-occlusive crisis vs osteomyelitis: both have bone pain and fever (osteomyelitis often Salmonella)"
            ],
            management: {
                acute: [
                    "Vaso-occlusive crisis: aggressive hydration (IV fluids), pain control (opioids often needed - hydromorphone, morphine), oxygen if hypoxic, treat precipitating cause (infection)",
                    "Acute chest syndrome: oxygen, incentive spirometry, antibiotics (ceftriaxone + azithromycin), transfusion if severe, consider exchange transfusion if deteriorating",
                    "Splenic sequestration: urgent transfusion, may need splenectomy",
                    "Aplastic crisis (parvovirus B19): supportive care, transfusion if needed, reticulocyte count will recover in 1-2 weeks",
                    "Stroke: urgent exchange transfusion to ↓ HbS to <30%",
                    "Priapism: hydration, analgesia, urology consult if >4 hours (aspiration, shunt)"
                ],
                chronic: [
                    "Hydroxyurea: ↑ HbF (fetal hemoglobin doesn't sickle), ↓ frequency of crises, ↓ acute chest syndrome, ↓ mortality. Indicated for recurrent crises, acute chest syndrome, or severe anemia.",
                    "Chronic transfusions: for stroke prevention (if abnormal TCD), recurrent acute chest syndrome. Goal Hb 10 g/dL, HbS <30%. Requires iron chelation (deferasirox).",
                    "L-glutamine: ↓ oxidative stress, ↓ frequency of crises (alternative to hydroxyurea)",
                    "Crizanlizumab: monoclonal antibody (↓ P-selectin, ↓ vaso-occlusion)",
                    "Voxelotor: ↑ Hb oxygen affinity, ↓ sickling",
                    "Hematopoietic stem cell transplant: only curative option, high risk, usually reserved for severe cases",
                    "Vaccinations: pneumococcal (asplenia), H. influenzae, meningococcal, annual flu",
                    "Penicillin prophylaxis: until age 5 (↓ pneumococcal sepsis)",
                    "Folic acid supplementation: 1 mg daily (chronic hemolysis → increased demand)",
                    "Avoid triggers: stay hydrated, avoid extreme temperatures, altitude"
                ]
            },
            complications: [
                "Acute chest syndrome: most common cause of death in adults (pneumonia-like, can progress to ARDS)",
                "Stroke: 10% of children, 25% by adulthood (ischemic > hemorrhagic)",
                "Pulmonary hypertension: chronic complication, poor prognosis",
                "Avascular necrosis: hip, shoulder (vaso-occlusion of bone)",
                "Renal: papillary necrosis, chronic kidney disease, inability to concentrate urine",
                "Retinopathy: proliferative retinopathy, vitreous hemorrhage, retinal detachment",
                "Leg ulcers: chronic, difficult to heal",
                "Infections: encapsulated organisms (S. pneumoniae, H. influenzae, Salmonella osteomyelitis) due to functional asplenia",
                "Priapism: 30-45% of males, can lead to erectile dysfunction",
                "Gallstones: pigmented stones from chronic hemolysis (30-70%)",
                "Aplastic crisis: parvovirus B19 infection → transient red cell aplasia"
            ],
            prognosis: "Median survival ~45 years (improving with modern treatment). Worse prognosis with recurrent acute chest syndrome, stroke, pulmonary hypertension. HbSS more severe than HbSC. Higher HbF levels → better prognosis.",
            clinicalPearls: [
                "Acute chest syndrome: fever + chest pain + pulmonary infiltrate + hypoxia. Can rapidly deteriorate. Start antibiotics + transfusion early.",
                "Dactylitis (hand-foot syndrome) in infants is often first presentation of sickle cell disease",
                "Howell-Jolly bodies on smear indicate functional asplenia → high infection risk",
                "Salmonella osteomyelitis is classically associated with sickle cell (vs S. aureus in general population)",
                "Hydroxyurea ↑ HbF (fetal hemoglobin doesn't sickle) → ↓ crises, ↓ mortality",
                "Transcranial Doppler: screen for stroke risk in children annually (ages 2-16). If high risk → chronic transfusions.",
                "Pain crisis: treat aggressively with opioids. Patients are NOT drug-seeking - chronic pain is real.",
                "Exchange transfusion (not simple transfusion) for acute stroke or severe acute chest syndrome",
                "Parvovirus B19 → aplastic crisis (↓↓ reticulocytes, ↓↓ Hb, no hemolysis). Self-limited, supportive care.",
                "Sickle cell trait (HbAS) is usually asymptomatic, except renal medullary carcinoma, exertional rhabdomyolysis, hematuria"
            ]
        }
    },
    {
        id: "ttp",
        name: "Thrombotic Thrombocytopenic Purpura (TTP)",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia", "bleeding-disorders"],
        symptoms: ["fever", "confusion", "bleeding", "weakness"],
        tags: ["hemolytic", "microangiopathic", "emergency", "thrombocytopenia"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Life-threatening thrombotic microangiopathy characterized by microangiopathic hemolytic anemia (MAHA), severe thrombocytopenia, and organ ischemia due to ADAMTS13 deficiency causing uncleaved vWF multimers.",
            pathophysiology: "ADAMTS13 deficiency (acquired autoantibody or congenital) → uncleaved ultra-large vWF multimers → spontaneous platelet adhesion → microthrombi in arterioles/capillaries → organ ischemia (brain, kidney, heart) + mechanical RBC destruction (schistocytes) + platelet consumption (thrombocytopenia).",
            epidemiology: "Rare: 3-4 cases per million per year. More common in women, African Americans. Acquired > congenital. Peak age 30-40 years. Mortality >90% untreated, <20% with plasma exchange.",
            riskFactors: [
                "Autoimmune diseases: SLE, RA",
                "Pregnancy/postpartum",
                "Medications: ticlopidine, clopidogrel, quinine, chemotherapy (gemcitabine, mitomycin C)",
                "HIV infection",
                "Hematopoietic stem cell transplant",
                "Malignancy"
            ],
            presentation: "Classic pentad (only 40% have all): (1) microangiopathic hemolytic anemia, (2) thrombocytopenia, (3) neurologic symptoms (confusion, headache, seizures, stroke, coma - fluctuating), (4) renal failure, (5) fever. Diagnosis requires only MAHA + thrombocytopenia.",
            physicalExam: [
                "Petechiae, purpura, mucosal bleeding (thrombocytopenia)",
                "Pallor, jaundice (hemolysis)",
                "Neurologic: confusion, altered mental status, focal deficits, seizures (fluctuating is classic)",
                "Fever (not always present)",
                "Tachycardia, hypertension",
                "Oliguria (renal failure)"
            ],
            diagnosticCriteria: "MAHA (schistocytes, ↑ LDH, ↓ haptoglobin) + thrombocytopenia WITHOUT other clear cause. ADAMTS13 activity <10% confirms diagnosis (but don't wait for results to start treatment).",
            labs: [
                "CBC: severe thrombocytopenia (<30,000, often <20,000), ↓ Hb (hemolytic anemia)",
                "Peripheral smear: SCHISTOCYTES (helmet cells, fragmented RBCs) - hallmark finding",
                "Hemolysis markers: ↑ LDH (markedly elevated, often >1000), ↑ indirect bilirubin, ↓ haptoglobin, ↑ reticulocytes",
                "ADAMTS13 activity: <10% (send before plasma exchange, but don't delay treatment)",
                "ADAMTS13 inhibitor: autoantibodies (acquired TTP)",
                "Coagulation studies: PT/PTT NORMAL, fibrinogen normal (unlike DIC)",
                "BMP: ↑ creatinine (acute kidney injury), electrolyte abnormalities",
                "Troponin: may be elevated (cardiac ischemia)",
                "Direct Coombs: negative (not autoimmune hemolysis)"
            ],
            imaging: [
                "CT/MRI brain: if neurologic symptoms (may show ischemia/infarcts, but often normal)"
            ],
            differentialDiagnosis: [
                "HUS (hemolytic uremic syndrome): similar presentation, but more renal failure, less neurologic involvement, often preceded by diarrhea (STEC-HUS), ADAMTS13 >10%",
                "DIC: ↑ PT/PTT, ↓ fibrinogen, ↑ D-dimer (unlike TTP where coags are normal)",
                "ITP: isolated thrombocytopenia without hemolysis or schistocytes",
                "HELLP syndrome: pregnancy, ↑ liver enzymes (unlike TTP)",
                "Malignant hypertension: can cause MAHA + renal failure, but BP >180/120",
                "Evans syndrome: autoimmune hemolytic anemia + ITP (Coombs positive)"
            ],
            management: {
                acute: [
                    "URGENT PLASMA EXCHANGE (plasmapheresis): start immediately, don't wait for ADAMTS13 results. Remove autoantibodies, replenish ADAMTS13. Daily until platelets >150,000 and LDH normalizing.",
                    "Corticosteroids: prednisone 1 mg/kg/day (suppress autoantibody production)",
                    "Rituximab: if refractory or relapsing (anti-CD20, depletes B cells producing autoantibodies)",
                    "Caplacizumab: anti-vWF antibody, prevents platelet adhesion (newer, expensive, reduces time to remission)",
                    "Supportive: transfuse RBCs if Hb <7, folate supplementation",
                    "AVOID platelet transfusion (can worsen thrombosis) unless life-threatening bleeding",
                    "AVOID antiplatelet agents (aspirin, clopidogrel)",
                    "Monitor: daily CBC, LDH, creatinine, neurologic exams"
                ],
                chronic: [
                    "Rituximab maintenance in some patients to prevent relapse",
                    "Monitor for relapse: CBC, LDH every 1-2 weeks × 3 months, then monthly",
                    "Relapse rate 30-50%, highest in first year",
                    "If congenital TTP (ADAMTS13 mutation): plasma infusions as needed"
                ]
            },
            complications: [
                "Death (>90% if untreated, <20% with plasma exchange)",
                "Stroke, seizures, permanent neurologic deficits",
                "Myocardial infarction",
                "Acute kidney injury, chronic kidney disease",
                "Relapse (30-50%, usually within first year)",
                "Complications of plasma exchange: catheter infections, bleeding, allergic reactions"
            ],
            prognosis: "Mortality >90% without treatment. With plasma exchange, mortality <20%. Most patients recover fully if treated promptly. Relapse rate 30-50%. Neurologic symptoms usually resolve with treatment.",
            clinicalPearls: [
                "Classic pentad (MAHA, thrombocytopenia, neuro, renal, fever) only in 40%. Diagnosis requires only MAHA + thrombocytopenia.",
                "SCHISTOCYTES on smear are hallmark - fragmented RBCs (helmet cells) from mechanical destruction in microthrombi",
                "PT/PTT are NORMAL (unlike DIC). This is key to differentiate TTP from DIC.",
                "ADAMTS13 <10% confirms TTP, but START plasma exchange immediately without waiting for results",
                "Do NOT transfuse platelets (worsens thrombosis) unless life-threatening bleeding",
                "Neurologic symptoms are fluctuating (wax and wane) - classic for TTP",
                "HUS vs TTP: HUS has more renal failure, less neuro symptoms, often post-diarrheal (E. coli O157:H7), ADAMTS13 >10%",
                "Caplacizumab is newer treatment - anti-vWF antibody, prevents platelet binding to vWF",
                "Plasma exchange must be DAILY until platelets >150,000 and LDH normalizing (usually 5-7 days, sometimes weeks)",
                "Relapse is common (30-50%), usually within 1 year. Monitor closely."
            ]
        }
    },
    {
        id: "multiple-myeloma",
        name: "Multiple Myeloma",
        system: "hematology-oncology",
        categories: ["plasma-cell-disorders"],
        symptoms: ["bone-pain", "fatigue", "weakness", "infections"],
        tags: ["malignancy", "plasma-cell", "monoclonal", "CRAB"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Malignant clonal proliferation of plasma cells in bone marrow producing monoclonal immunoglobulin (M-protein), causing bone destruction, renal failure, anemia, and hypercalcemia (CRAB criteria).",
            pathophysiology: "Clonal plasma cells proliferate in bone marrow → produce monoclonal Ig (IgG > IgA > light chains only) → (1) bone destruction via RANKL activation of osteoclasts → lytic lesions, hypercalcemia, (2) light chain deposition → renal failure, (3) crowding out normal hematopoiesis → anemia, (4) ↓ normal Ig → infections.",
            epidemiology: "Median age 65 years (rare <40). More common in African Americans (2×). Accounts for 10% of hematologic malignancies. Median survival 5-7 years (improving with newer therapies).",
            riskFactors: [
                "Age >65",
                "African American",
                "MGUS (monoclonal gammopathy of undetermined significance): 1% per year progress to myeloma",
                "Family history (2× risk if first-degree relative)",
                "Obesity"
            ],
            presentation: "CRAB criteria: hyperCalcemia, Renal failure, Anemia, Bone lesions. Bone pain (especially back, ribs - worse with movement). Pathologic fractures. Recurrent infections (encapsulated organisms). Fatigue, weakness. Hyperviscosity symptoms (rare): blurred vision, headache, bleeding.",
            physicalExam: [
                "Pallor (anemia)",
                "Bone tenderness (ribs, spine)",
                "Pathologic fractures",
                "Hepatomegaly, splenomegaly (uncommon)",
                "Signs of hypercalcemia: confusion, polyuria, constipation",
                "Signs of renal failure: edema, oliguria",
                "Hyperviscosity (rare): retinal hemorrhages, papilledema"
            ],
            diagnosticCriteria: "≥10% clonal plasma cells on bone marrow biopsy PLUS one or more myeloma-defining events: (1) CRAB criteria (hyperCalcemia >11 mg/dL, Renal Cr >2 or CrCl <40, Anemia Hb <10 or 2 below normal, Bone lytic lesions), (2) plasma cells ≥60%, (3) serum free light chain ratio ≥100, (4) >1 focal lesion on MRI.",
            labs: [
                "SPEP (serum protein electrophoresis): M-spike (monoclonal spike)",
                "Serum immunofixation: identify type of M-protein (IgG 60%, IgA 20%, light chains only 20%)",
                "Serum free light chains: ↑ kappa or lambda, abnormal κ/λ ratio (normal 0.26-1.65)",
                "UPEP (urine protein electrophoresis): Bence Jones protein (light chains in urine)",
                "Quantitative Ig: ↓ uninvolved immunoglobulins (immunoparesis)",
                "CBC: anemia (normocytic), rouleaux formation on smear (RBCs stacked like coins)",
                "BMP: ↑ creatinine (renal failure), ↑ calcium (>11 mg/dL), ↑ BUN, ↑ creatinine",
                "β2-microglobulin: prognostic marker (higher = worse prognosis)",
                "LDH: prognostic",
                "Bone marrow biopsy: ≥10% clonal plasma cells (CD138+, CD38+)",
                "↑ ESR (from hyperglobulinemia)"
            ],
            imaging: [
                "Skeletal survey (X-rays): lytic bone lesions (punched-out lesions, especially skull, spine, ribs, long bones). No PET or bone scan (lytic lesions don't show on bone scan).",
                "Whole-body low-dose CT or PET-CT: more sensitive than skeletal survey",
                "MRI spine: if concern for cord compression or to detect focal lesions"
            ],
            differentialDiagnosis: [
                "MGUS: M-protein <3 g/dL, plasma cells <10%, no CRAB, no myeloma-defining events. 1% per year progress to myeloma.",
                "Smoldering myeloma: M-protein ≥3 g/dL or plasma cells 10-60%, but NO CRAB or myeloma-defining events. 10% per year progress.",
                "Waldenstrom macroglobulinemia: IgM paraprotein, hyperviscosity, lymphoplasmacytic lymphoma",
                "Metastatic bone disease: lytic lesions from solid tumor (breast, lung, kidney, thyroid), but no M-protein",
                "Primary amyloidosis (AL): light chain deposition in organs (heart, kidney, liver, nerves), Congo red staining"
            ],
            management: {
                acute: [
                    "Hypercalcemia: aggressive IV hydration (NS), bisphosphonates (zoledronic acid), calcitonin if severe",
                    "Spinal cord compression: urgent MRI, dexamethasone, radiation therapy, possible neurosurgery",
                    "Renal failure: hydration, avoid NSAIDs, treat hypercalcemia, plasmapheresis if cast nephropathy",
                    "Hyperviscosity: plasmapheresis (if symptoms)",
                    "Pathologic fractures: orthopedic surgery, kyphoplasty/vertebroplasty for vertebral compression fractures"
                ],
                chronic: [
                    "Chemotherapy (if symptomatic or CRAB present):",
                    "  - Transplant candidates (<65, fit): induction with VRd (bortezomib, lenalidomide, dexamethasone) → autologous stem cell transplant → lenalidomide maintenance",
                    "  - Non-transplant candidates (>65, frail): VRd or DRd (daratumumab, lenalidomide, dexamethasone)",
                    "  - Relapsed/refractory: daratumumab, carfilzomib, pomalidomide, CAR-T therapy (ide-cel, cilta-cel)",
                    "Supportive care:",
                    "  - Bisphosphonates: zoledronic acid or pamidronate monthly (↓ bone events, treat hypercalcemia). Monitor for osteonecrosis of jaw.",
                    "  - EPO if anemic",
                    "  - IVIG if recurrent infections",
                    "  - Radiation therapy for painful bone lesions",
                    "  - Prophylaxis: acyclovir (if on bortezomib), levofloxacin (if high infection risk), PJP prophylaxis if on steroids"
                ]
            },
            complications: [
                "Renal failure: light chain cast nephropathy, hypercalcemia, amyloidosis (20-50% at diagnosis)",
                "Pathologic fractures: vertebral compression, long bones",
                "Spinal cord compression: oncologic emergency, urgent MRI and treatment",
                "Hypercalcemia: confusion, polyuria, constipation, renal failure",
                "Recurrent infections: S. pneumoniae, H. influenzae (encapsulated organisms), VZV reactivation",
                "Hyperviscosity syndrome (rare, <5%): visual changes, headache, bleeding",
                "Neuropathy: from chemotherapy (bortezomib, thalidomide) or from myeloma itself",
                "Osteonecrosis of jaw: from bisphosphonates (avoid dental procedures)",
                "Secondary amyloidosis (AL): light chain deposition in heart, kidney, liver",
                "Anemia: from marrow infiltration, renal failure, chronic disease"
            ],
            prognosis: "Median survival 5-7 years (improving). ISS (International Staging System) based on β2-microglobulin and albumin. R-ISS includes cytogenetics. Worse prognosis: del(17p), t(4;14), t(14;16), high β2-microglobulin, high LDH. Not curable, but treatable. Autologous stem cell transplant extends survival.",
            clinicalPearls: [
                "CRAB criteria: hyperCalcemia, Renal failure, Anemia, Bone lesions - defines symptomatic myeloma requiring treatment",
                "M-spike on SPEP is hallmark, but 20% have light chains only (no heavy chain) → need UPEP for Bence Jones protein",
                "Skeletal survey (X-rays), NOT bone scan. Lytic lesions don't show on bone scan (no osteoblastic activity).",
                "Rouleaux formation on smear: RBCs stacked like coins (from hyperglobulinemia)",
                "Back pain in elderly → always consider myeloma, especially if anemia, ↑ creatinine, ↑ calcium",
                "MGUS → smoldering myeloma → multiple myeloma (progression spectrum)",
                "Bortezomib is proteasome inhibitor (kills plasma cells), lenalidomide is immunomodulator, daratumumab is anti-CD38 monoclonal antibody",
                "Autologous (not allogeneic) stem cell transplant is standard for fit patients <65",
                "Bisphosphonates: ↓ bone events, but watch for osteonecrosis of jaw (avoid dental procedures)",
                "Light chain cast nephropathy: treat with hydration, avoid NSAIDs, plasmapheresis if severe",
                "IgG myeloma most common (60%), then IgA (20%), light chains only (20%), IgD and IgE rare"
            ]
        }
    },
    // ===== MORE ANEMIA CONDITIONS =====
    {
        id: "thalassemia",
        name: "Thalassemia",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "pallor", "splenomegaly"],
        tags: ["microcytic", "anemia", "genetic", "hemoglobin"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Inherited disorder of impaired globin chain synthesis causing microcytic anemia. β-thalassemia (↓ β-globin) is most common, α-thalassemia (↓ α-globin) less severe.",
            pathophysiology: "Deficient globin chain synthesis → imbalanced α/β chains → unpaired chains precipitate → ineffective erythropoiesis + hemolysis. β-thalassemia major (homozygous): no β-globin → severe anemia. β-thalassemia minor (heterozygous): mild anemia. α-thalassemia: gene deletions (4 genes, 2 on each chromosome 16).",
            epidemiology: "Most common in Mediterranean, Middle Eastern, African, Southeast Asian populations. β-thalassemia major presents in first year of life. Thalassemia trait is protective against malaria.",
            riskFactors: [
                "Ethnicity: Mediterranean (β-thalassemia), Southeast Asian (α-thalassemia)",
                "Family history",
                "Consanguinity"
            ],
            presentation: "β-thalassemia major: severe anemia in infancy, failure to thrive, hepatosplenomegaly, bone deformities (chipmunk facies, crew cut skull). β-thalassemia minor: mild microcytic anemia, often asymptomatic. α-thalassemia trait: usually asymptomatic.",
            physicalExam: [
                "Pallor, jaundice (hemolysis)",
                "Splenomegaly, hepatomegaly",
                "Bone deformities: frontal bossing, maxillary overgrowth (chipmunk facies)",
                "Growth retardation",
                "Iron overload (in transfusion-dependent): hepatic cirrhosis, cardiomyopathy, diabetes"
            ],
            diagnosticCriteria: "Microcytic anemia with normal/high RBC count, target cells on smear, hemoglobin electrophoresis showing ↑ HbA2 (β-thalassemia minor) or ↑ HbF (β-thalassemia major).",
            labs: [
                "CBC: microcytic anemia (MCV <70), normal/high RBC count (key difference from iron deficiency), ↑ reticulocytes",
                "Peripheral smear: target cells, basophilic stippling, nucleated RBCs",
                "Hemoglobin electrophoresis:",
                "  - β-thalassemia minor: ↑ HbA2 (>3.5%), normal HbF",
                "  - β-thalassemia major: ↑ HbF (>90%), absent/low HbA",
                "  - α-thalassemia: normal (diagnosis by gene testing)",
                "Iron studies: normal or high ferritin (NOT iron deficient)",
                "Hemolysis markers: ↑ indirect bilirubin, ↑ LDH, ↓ haptoglobin"
            ],
            imaging: [
                "X-ray skull: \"hair-on-end\" or \"crew cut\" appearance (marrow expansion)",
                "MRI/T2* for cardiac and hepatic iron overload assessment"
            ],
            differentialDiagnosis: [
                "Iron deficiency: ↓ ferritin, ↑ TIBC, ↓ RBC count (thalassemia has normal/high RBC count)",
                "Anemia of chronic disease: ↑ ferritin, ↓ TIBC",
                "Sideroblastic anemia: ringed sideroblasts, ↑ iron",
                "Lead poisoning: basophilic stippling, ↑ lead level"
            ],
            management: {
                acute: [
                    "β-thalassemia major: chronic transfusions to maintain Hb >9-10 g/dL",
                    "Iron chelation therapy (deferasirox, deferoxamine, deferiprone) to prevent iron overload from transfusions",
                    "Folic acid supplementation: 1 mg daily",
                    "Splenectomy if hypersplenism causing increased transfusion requirements"
                ],
                chronic: [
                    "β-thalassemia minor: no treatment needed (asymptomatic), avoid iron supplementation",
                    "Hematopoietic stem cell transplant: only curative option for β-thalassemia major",
                    "Gene therapy (newer): for β-thalassemia major",
                    "Luspatercept: ↑ RBC production, ↓ transfusion burden",
                    "Vaccinations: pneumococcal, H. influenzae, meningococcal (if splenectomy)",
                    "Monitor for complications: cardiac iron overload (MRI T2*), endocrine dysfunction, bone disease"
                ]
            },
            complications: [
                "Iron overload (from chronic transfusions): cardiac (heart failure, arrhythmias), hepatic (cirrhosis), endocrine (diabetes, hypogonadism, hypothyroidism)",
                "Bone deformities and osteoporosis",
                "Splenomegaly, hypersplenism",
                "Gallstones (pigmented stones)",
                "Infections (if splenectomy): encapsulated organisms",
                "Extramedullary hematopoiesis: spinal cord compression"
            ],
            prognosis: "β-thalassemia major: lifelong transfusions required. Median survival >50 years with modern treatment (chelation therapy). β-thalassemia minor: normal lifespan, asymptomatic. Stem cell transplant can be curative.",
            clinicalPearls: [
                "Microcytic anemia with NORMAL/HIGH RBC count suggests thalassemia (vs iron deficiency with low RBC count)",
                "Hemoglobin electrophoresis: ↑ HbA2 >3.5% = β-thalassemia minor. ↑ HbF = β-thalassemia major.",
                "α-thalassemia: normal hemoglobin electrophoresis, requires gene testing for diagnosis",
                "Do NOT give iron to thalassemia patients (already iron overloaded from transfusions)",
                "Mentzer index: MCV/RBC. <13 = thalassemia, >13 = iron deficiency (not 100% sensitive/specific)",
                "Target cells on smear are classic",
                "Transfusion-dependent patients need iron chelation to prevent cardiac/hepatic iron overload",
                "Chipmunk facies and crew cut skull from marrow expansion (extramedullary hematopoiesis)"
            ]
        }
    },
    {
        id: "aplastic-anemia",
        name: "Aplastic Anemia",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "bleeding", "infections", "pallor"],
        tags: ["pancytopenia", "bone-marrow-failure", "anemia"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Life-threatening bone marrow failure syndrome characterized by pancytopenia (anemia, thrombocytopenia, neutropenia) and hypocellular bone marrow WITHOUT fibrosis or malignancy.",
            pathophysiology: "Immune-mediated destruction of hematopoietic stem cells by cytotoxic T cells → bone marrow hypoplasia → pancytopenia. Acquired (most common) or inherited (Fanconi anemia).",
            epidemiology: "Rare: 2-3 cases per million per year. Bimodal age distribution (peaks at 20s and 60s). More common in Asia. 70% idiopathic, 30% secondary causes.",
            riskFactors: [
                "Medications: chloramphenicol, NSAIDs, carbamazepine, gold, sulfonamides",
                "Toxins: benzene, insecticides, solvents",
                "Viral infections: EBV, CMV, HIV, hepatitis (especially non-A, non-B, non-C hepatitis)",
                "Radiation exposure",
                "Autoimmune diseases: SLE, eosinophilic fasciitis",
                "Pregnancy",
                "Inherited: Fanconi anemia, dyskeratosis congenita"
            ],
            presentation: "Fatigue, weakness (anemia). Easy bruising, petechiae, bleeding (thrombocytopenia). Recurrent infections (neutropenia). NO hepatosplenomegaly or lymphadenopathy (unlike leukemia).",
            physicalExam: [
                "Pallor (anemia)",
                "Petechiae, purpura, mucosal bleeding (thrombocytopenia)",
                "NO hepatosplenomegaly, NO lymphadenopathy (key - helps exclude leukemia)",
                "Signs of infection if neutropenic"
            ],
            diagnosticCriteria: "Pancytopenia with hypocellular bone marrow (<25% cellularity) without fibrosis, malignancy, or myelodysplasia.",
            labs: [
                "CBC: pancytopenia (anemia, thrombocytopenia <50k, neutropenia <1500)",
                "Reticulocyte count: low (inappropriately low for degree of anemia)",
                "Peripheral smear: normocytic anemia, NO blasts, NO dysplasia",
                "Bone marrow biopsy: hypocellular (<25% cellularity), fatty replacement, NO fibrosis, NO malignant cells",
                "Flow cytometry: rule out PNH (CD55/CD59 deficiency)",
                "Chromosomal breakage test: for Fanconi anemia (if young patient)",
                "Viral serologies: EBV, CMV, hepatitis, HIV",
                "Vitamin B12, folate: to rule out other causes of pancytopenia"
            ],
            imaging: [
                "Not needed for diagnosis"
            ],
            differentialDiagnosis: [
                "Myelodysplastic syndrome: pancytopenia, but hypercellular marrow with dysplasia",
                "Acute leukemia: pancytopenia with blasts on smear/marrow, hypercellular marrow",
                "Paroxysmal nocturnal hemoglobinuria (PNH): hemolytic anemia, thrombosis, pancytopenia (check flow cytometry)",
                "Hypersplenism: pancytopenia with splenomegaly (not in aplastic anemia)",
                "B12/folate deficiency: macrocytic anemia, hypersegmented neutrophils, megaloblastic marrow"
            ],
            management: {
                acute: [
                    "Supportive care: transfuse RBCs if Hb <7, platelets if <10k or bleeding, neutropenic precautions",
                    "Growth factors: EPO, G-CSF if needed (but does NOT treat underlying disease)",
                    "Antibiotics for neutropenic fever",
                    "AVOID platelet transfusions if planning stem cell transplant (alloimmunization)"
                ],
                chronic: [
                    "Age <40 with matched sibling donor: allogeneic hematopoietic stem cell transplant (CURATIVE)",
                    "Age >40 or no matched donor: immunosuppressive therapy",
                    "  - Horse anti-thymocyte globulin (ATG) + cyclosporine (60-70% response rate)",
                    "  - Eltrombopag: thrombopoietin agonist, may restore hematopoiesis",
                    "Refractory cases: consider matched unrelated donor transplant",
                    "Monitor for relapse and evolution to MDS/AML (10-15% risk)"
                ]
            },
            complications: [
                "Bleeding (intracranial hemorrhage - most common cause of death)",
                "Infections (fungal, bacterial - second most common cause of death)",
                "Transfusion complications: iron overload, alloimmunization, infections",
                "Evolution to MDS or AML (10-15% risk)",
                "PNH (paroxysmal nocturnal hemoglobinuria) can occur in same patient",
                "Graft-versus-host disease (if transplant)"
            ],
            prognosis: "Without treatment, severe aplastic anemia is fatal. With stem cell transplant: 80-90% long-term survival. With immunosuppression: 60-70% response rate, but 30-40% relapse risk. Risk of evolution to MDS/AML.",
            clinicalPearls: [
                "Pancytopenia WITHOUT hepatosplenomegaly or lymphadenopathy → think aplastic anemia (vs leukemia which has organomegaly)",
                "Bone marrow biopsy shows HYPOCELLULAR marrow (vs leukemia/MDS which are hypercellular)",
                "Reticulocyte count is inappropriately LOW (bone marrow not responding to anemia)",
                "Severe aplastic anemia: ANC <500, platelets <20k, reticulocytes <1%",
                "Young patients (<40) with matched sibling donor → stem cell transplant (curative)",
                "Older patients or no donor → ATG + cyclosporine",
                "Check flow cytometry to rule out PNH (CD55/CD59 deficiency) - can coexist",
                "Do NOT give platelet transfusions unnecessarily if planning transplant (causes alloimmunization)",
                "Fanconi anemia (inherited): young age, short stature, thumb/radius abnormalities, café-au-lait spots, chromosomal breakage test positive"
            ]
        }
    },
    {
        id: "sideroblastic-anemia",
        name: "Sideroblastic Anemia",
        system: "hematology-oncology",
        categories: ["anemia"],
        symptoms: ["fatigue", "weakness"],
        tags: ["microcytic", "anemia", "iron-overload", "ringed-sideroblasts"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Anemia caused by impaired heme synthesis despite adequate iron, resulting in iron accumulation in mitochondria (ringed sideroblasts) and microcytic anemia with iron overload.",
            pathophysiology: "Defective δ-ALA synthase (rate-limiting enzyme in heme synthesis) → impaired heme synthesis despite adequate iron → iron accumulates in mitochondria forming ring around nucleus (ringed sideroblasts) → ineffective erythropoiesis → microcytic anemia + iron overload.",
            epidemiology: "Rare. Hereditary form (X-linked) presents in young males. Acquired form more common, associated with myelodysplasia, alcohol, drugs.",
            riskFactors: [
                "Hereditary: X-linked mutation in ALAS2 gene",
                "Acquired: myelodysplastic syndrome (refractory anemia with ringed sideroblasts - RARS)",
                "Medications: isoniazid, chloramphenicol, linezolid",
                "Alcohol",
                "Lead poisoning",
                "Copper deficiency (zinc toxicity)"
            ],
            presentation: "Fatigue, weakness, pallor (anemia). Iron overload symptoms if chronic: hepatomegaly, cardiac dysfunction, diabetes, bronze skin.",
            physicalExam: [
                "Pallor",
                "Hepatomegaly (iron overload)",
                "Bronze skin (hemochromatosis-like)"
            ],
            diagnosticCriteria: "Microcytic anemia with ↑ iron/ferritin and ringed sideroblasts on bone marrow stain (Prussian blue).",
            labs: [
                "CBC: microcytic anemia (MCV <80), normal/low reticulocytes",
                "Iron studies: ↑ serum iron, ↑ ferritin (>500), ↑ transferrin saturation (>50%)",
                "Peripheral smear: dimorphic RBC population (microcytic + normal), basophilic stippling, pappenheimer bodies",
                "Bone marrow: ringed sideroblasts (iron-laden mitochondria encircling nucleus) on Prussian blue stain",
                "Genetic testing: ALAS2 mutation (if hereditary suspected)"
            ],
            imaging: [
                "MRI liver/heart: assess iron overload if chronic"
            ],
            differentialDiagnosis: [
                "Iron deficiency: ↓ iron, ↓ ferritin (opposite of sideroblastic)",
                "Thalassemia: normal/high iron, target cells, ↑ HbA2",
                "Anemia of chronic disease: ↑ ferritin but ↓ iron, ↓ TIBC",
                "Lead poisoning: basophilic stippling, ↑ lead level, ringed sideroblasts also present"
            ],
            management: {
                acute: [
                    "Pyridoxine (vitamin B6): trial in hereditary form (some respond)",
                    "Remove offending agent if medication-induced (isoniazid, alcohol)",
                    "Transfusions if symptomatic anemia"
                ],
                chronic: [
                    "Hereditary: pyridoxine 50-200 mg daily (30-50% respond)",
                    "Acquired (MDS-associated): supportive care, may progress to AML, consider stem cell transplant if eligible",
                    "Iron chelation therapy (deferasirox) if transfusion-dependent to prevent iron overload",
                    "Treat underlying cause: stop alcohol, treat copper deficiency (if present)"
                ]
            },
            complications: [
                "Iron overload: cardiac (heart failure, arrhythmias), hepatic (cirrhosis), endocrine (diabetes)",
                "Transformation to AML (if MDS-associated)",
                "Transfusion dependence"
            ],
            prognosis: "Hereditary form: good response to pyridoxine in 30-50%. Acquired form (MDS-associated): variable, risk of progression to AML. Medication-induced: reversible if drug stopped.",
            clinicalPearls: [
                "Microcytic anemia with HIGH iron/ferritin (opposite of iron deficiency)",
                "Ringed sideroblasts on bone marrow Prussian blue stain = diagnostic",
                "Hereditary: X-linked, young males, may respond to pyridoxine (vitamin B6)",
                "Acquired: associated with MDS (RARS subtype), alcohol, isoniazid",
                "Basophilic stippling and pappenheimer bodies on smear (iron granules in RBCs)",
                "Dimorphic RBC population: some microcytic, some normal (dual population)",
                "Lead poisoning can also cause ringed sideroblasts - check lead level",
                "Iron overload from ineffective erythropoiesis + transfusions → need chelation therapy"
            ]
        }
    },
    // ===== MORE HEMOLYTIC ANEMIA =====
    {
        id: "hereditary-spherocytosis",
        name: "Hereditary Spherocytosis",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia"],
        symptoms: ["jaundice", "fatigue", "splenomegaly"],
        tags: ["hemolytic", "genetic", "spherocytes", "extravascular"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Inherited RBC membrane disorder causing loss of membrane surface area → spherical RBCs → extravascular hemolysis in spleen.",
            pathophysiology: "Mutations in spectrin, ankyrin, band 3, or protein 4.2 → RBC membrane instability → loss of membrane surface area → spherocytes (can't deform) → trapped and destroyed in splenic cords → extravascular hemolysis.",
            epidemiology: "Most common inherited hemolytic anemia in Northern Europeans. Autosomal dominant (75%) or de novo mutations (25%). Prevalence 1 in 2000.",
            riskFactors: [
                "Family history (autosomal dominant)",
                "Northern European ancestry"
            ],
            presentation: "Hemolytic anemia, jaundice, splenomegaly (classic triad). Presentation varies: mild (compensated hemolysis) to severe (transfusion-dependent). Hemolytic crises triggered by infections (parvovirus B19). Gallstones common.",
            physicalExam: [
                "Jaundice (chronic hemolysis)",
                "Splenomegaly (mild to moderate)",
                "Pallor if anemia severe"
            ],
            diagnosticCriteria: "Hemolytic anemia with spherocytes on smear, ↑ MCHC, positive osmotic fragility test or eosin-5-maleimide (EMA) binding test.",
            labs: [
                "CBC: anemia (variable severity), ↑ reticulocytes, ↑ MCHC (>35) - spherocytes have less membrane per volume",
                "Peripheral smear: spherocytes (small, round RBCs without central pallor)",
                "Hemolysis markers: ↑ indirect bilirubin, ↑ LDH, ↓ haptoglobin",
                "Osmotic fragility test: RBCs lyse at higher NaCl concentrations than normal (less surface area)",
                "EMA binding test: flow cytometry, more sensitive/specific than osmotic fragility",
                "Direct Coombs: negative (not autoimmune)"
            ],
            imaging: [
                "Ultrasound abdomen: splenomegaly, gallstones"
            ],
            differentialDiagnosis: [
                "Autoimmune hemolytic anemia: spherocytes present, but Coombs positive",
                "G6PD deficiency: hemolysis after oxidant stress, bite cells, Heinz bodies",
                "ABO incompatibility (newborns): spherocytes, but Coombs positive",
                "Other membrane defects: elliptocytosis, stomatocytosis"
            ],
            management: {
                acute: [
                    "Folic acid supplementation: 1 mg daily (chronic hemolysis → increased demand)",
                    "Transfusions during hemolytic crises or aplastic crises (parvovirus B19)",
                    "Treat infections promptly"
                ],
                chronic: [
                    "Splenectomy: curative for hemolysis (RBCs still abnormal but not destroyed). Indicated for severe anemia, frequent transfusions, or symptomatic gallstones.",
                    "Pre-splenectomy vaccinations: pneumococcal, H. influenzae, meningococcal, annual flu",
                    "Post-splenectomy antibiotic prophylaxis: penicillin or amoxicillin lifelong",
                    "Cholecystectomy if symptomatic gallstones",
                    "Monitor for post-splenectomy complications: thrombosis, infections"
                ]
            },
            complications: [
                "Gallstones (pigmented stones from chronic hemolysis - 50% by adulthood)",
                "Aplastic crisis: parvovirus B19 → transient red cell aplasia → severe anemia",
                "Hemolytic crisis: infection triggers ↑ hemolysis",
                "Folate deficiency (from chronic hemolysis)",
                "Post-splenectomy: overwhelming sepsis (encapsulated organisms), thrombosis"
            ],
            prognosis: "Generally good. Mild cases may not require splenectomy. Splenectomy cures hemolysis (but RBCs remain spherocytic). Normal lifespan after splenectomy with proper vaccinations/prophylaxis.",
            clinicalPearls: [
                "Classic triad: hemolytic anemia + jaundice + splenomegaly",
                "Spherocytes on smear: small, round, no central pallor. Also seen in AIHA (but Coombs negative in HS).",
                "↑ MCHC (>35) is clue - spherocytes have high Hb concentration per volume",
                "Osmotic fragility test historically used, but EMA binding test more sensitive/specific",
                "Parvovirus B19 → aplastic crisis (↓↓ reticulocytes, severe anemia)",
                "Splenectomy cures hemolysis but does NOT fix the RBC defect (still spherocytes)",
                "Must vaccinate BEFORE splenectomy and give lifelong penicillin prophylaxis after",
                "Gallstones very common (50% by adulthood) - pigmented stones from bilirubin"
            ]
        }
    },
    {
        id: "g6pd-deficiency",
        name: "G6PD Deficiency",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia"],
        symptoms: ["jaundice", "dark-urine", "fatigue"],
        tags: ["hemolytic", "X-linked", "oxidant-stress", "heinz-bodies"],
        severity: "medium",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "X-linked RBC enzyme deficiency causing episodic hemolytic anemia triggered by oxidant stress (infections, drugs, fava beans).",
            pathophysiology: "G6PD deficiency → ↓ NADPH production → ↓ reduced glutathione → RBCs vulnerable to oxidative damage → Heinz bodies (denatured hemoglobin) → hemolysis (intravascular + extravascular). Older RBCs more affected (lower G6PD levels).",
            epidemiology: "Most common enzyme deficiency worldwide (400 million affected). X-linked recessive. Protective against malaria. Common in Mediterranean, African, Middle Eastern, Southeast Asian populations. Males affected, females carriers (but can have symptoms due to lyonization).",
            riskFactors: [
                "Male sex (X-linked)",
                "Ethnicity: African, Mediterranean, Middle Eastern, Southeast Asian",
                "Oxidant stressors: infections, certain drugs, fava beans"
            ],
            presentation: "Usually asymptomatic until exposed to oxidant stress. Acute hemolytic crisis: sudden onset jaundice, dark urine (hemoglobinuria), back/abdominal pain, fatigue. Neonatal jaundice common.",
            physicalExam: [
                "Jaundice, pallor",
                "Splenomegaly (mild)",
                "Dark urine (hemoglobinuria)"
            ],
            diagnosticCriteria: "Low G6PD enzyme activity, hemolytic anemia after oxidant exposure, bite cells and Heinz bodies on smear.",
            labs: [
                "CBC: normocytic anemia during crisis, ↑ reticulocytes",
                "Peripheral smear: bite cells (RBCs with 'bite' taken out by spleen), Heinz bodies (denatured Hb precipitates, seen with supravital stain)",
                "Hemolysis markers: ↑ indirect bilirubin, ↑ LDH, ↓ haptoglobin, hemoglobinuria",
                "G6PD enzyme assay: LOW (but may be falsely normal during crisis due to reticulocytosis - recheck 2-3 months after crisis)",
                "Direct Coombs: negative"
            ],
            imaging: [
                "None needed"
            ],
            differentialDiagnosis: [
                "Other hemolytic anemias: hereditary spherocytosis, sickle cell, AIHA",
                "Pyruvate kinase deficiency: chronic hemolysis, no specific triggers",
                "Drug-induced hemolytic anemia",
                "Paroxysmal nocturnal hemoglobinuria (PNH)"
            ],
            management: {
                acute: [
                    "Stop offending agent (drug, fava beans)",
                    "Supportive care: hydration, transfusions if severe anemia",
                    "Treat underlying infection",
                    "Avoid oxidant drugs in future"
                ],
                chronic: [
                    "Avoidance of triggers:",
                    "  - Medications: sulfa drugs, dapsone, primaquine, nitrofurantoin, rasburicase, methylene blue",
                    "  - Fava beans (favism - especially in Mediterranean variant)",
                    "  - Infections: treat promptly",
                    "Folic acid supplementation: 1 mg daily",
                    "Neonatal jaundice: phototherapy if needed (common in G6PD newborns)",
                    "Genetic counseling"
                ]
            },
            complications: [
                "Acute hemolytic crisis: can be severe, require transfusions",
                "Neonatal jaundice: kernicterus if severe (bilirubin encephalopathy)",
                "Acute kidney injury (from hemoglobinuria)",
                "Favism: severe hemolysis after fava bean ingestion (Mediterranean variant)"
            ],
            prognosis: "Excellent with trigger avoidance. Normal lifespan. Hemolytic episodes self-limited (older RBCs destroyed, younger RBCs with higher G6PD survive).",
            clinicalPearls: [
                "X-linked recessive: males affected, females carriers (but can have symptoms due to lyonization)",
                "Bite cells and Heinz bodies on smear are classic (Heinz bodies seen with supravital stain)",
                "G6PD assay may be falsely NORMAL during hemolytic crisis (reticulocytes have higher G6PD) → recheck 2-3 months later",
                "Common triggers: sulfa drugs, antimalarials (primaquine), dapsone, fava beans, infections",
                "Favism: severe hemolysis after fava bean ingestion (Mediterranean variant)",
                "Self-limited hemolysis: older RBCs destroyed first, younger RBCs (higher G6PD) survive",
                "Neonatal jaundice common → phototherapy may be needed",
                "NEVER give rasburicase (for tumor lysis) to G6PD-deficient patients → massive hemolysis",
                "Protective against malaria (like sickle cell trait)"
            ]
        }
    },
    {
        id: "autoimmune-hemolytic-anemia",
        name: "Autoimmune Hemolytic Anemia (AIHA)",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia"],
        symptoms: ["fatigue", "jaundice", "pallor"],
        tags: ["hemolytic", "autoimmune", "coombs-positive", "spherocytes"],
        severity: "medium",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Hemolytic anemia caused by autoantibodies against RBCs. Warm AIHA (IgG, 37°C) most common. Cold agglutinin disease (IgM, <30°C) less common.",
            pathophysiology: "Warm AIHA: IgG antibodies bind RBCs at body temperature → splenic macrophages remove antibody-coated RBCs → extravascular hemolysis. Cold agglutinin: IgM antibodies bind RBCs in cold → complement activation → intravascular hemolysis or extravascular (liver).",
            epidemiology: "Incidence 1-3 per 100,000 per year. Warm AIHA more common (70%). Can be primary (idiopathic) or secondary (autoimmune diseases, lymphoma, drugs).",
            riskFactors: [
                "Autoimmune diseases: SLE, rheumatoid arthritis",
                "Lymphoproliferative disorders: CLL, lymphoma",
                "Infections: Mycoplasma, EBV, HIV",
                "Medications: penicillin, cephalosporins, methyldopa, quinidine",
                "Post-stem cell transplant"
            ],
            presentation: "Fatigue, dyspnea, jaundice, pallor. Warm AIHA: gradual onset. Cold agglutinin: acrocyanosis (blue fingers/toes) in cold, hemoglobinuria. Drug-induced: hemolysis days-weeks after drug exposure.",
            physicalExam: [
                "Pallor, jaundice",
                "Splenomegaly (warm AIHA)",
                "Acrocyanosis (cold agglutinin - blue discoloration of fingers/toes/nose in cold)",
                "Hepatomegaly (cold agglutinin)"
            ],
            diagnosticCriteria: "Hemolytic anemia with positive Direct Coombs test (DAT). Warm AIHA: IgG and/or C3 positive. Cold agglutinin: C3 positive (IgG negative).",
            labs: [
                "CBC: normocytic anemia, ↑ reticulocytes",
                "Peripheral smear: spherocytes (warm AIHA), agglutination (cold agglutinin)",
                "Hemolysis markers: ↑ indirect bilirubin, ↑ LDH, ↓ haptoglobin",
                "Direct Coombs test (DAT): POSITIVE",
                "  - Warm AIHA: IgG positive ± C3",
                "  - Cold agglutinin: C3 positive, IgG negative",
                "  - Drug-induced: IgG positive",
                "Cold agglutinin titer: elevated in cold agglutinin disease",
                "Underlying disease workup: ANA, lymph node biopsy, bone marrow if CLL suspected"
            ],
            imaging: [
                "CT chest/abdomen/pelvis: if lymphoma suspected"
            ],
            differentialDiagnosis: [
                "Hereditary spherocytosis: spherocytes, but Coombs negative, family history",
                "Drug-induced hemolytic anemia: positive Coombs, drug exposure",
                "Transfusion reaction: acute hemolysis, recent transfusion",
                "Microangiopathic hemolytic anemia (TTP, HUS): schistocytes, thrombocytopenia, Coombs negative"
            ],
            management: {
                acute: [
                    "Warm AIHA:",
                    "  - Corticosteroids: prednisone 1 mg/kg/day (first-line)",
                    "  - IVIG if severe",
                    "  - Transfusions if life-threatening (least incompatible blood)",
                    "Cold agglutinin:",
                    "  - Avoid cold exposure (keep warm)",
                    "  - Rituximab (anti-CD20) for chronic/severe cases",
                    "  - Treat underlying cause (Mycoplasma, lymphoma)",
                    "Drug-induced: stop offending drug"
                ],
                chronic: [
                    "Warm AIHA refractory to steroids:",
                    "  - Rituximab (anti-CD20)",
                    "  - Splenectomy (if rituximab fails)",
                    "  - Immunosuppressants: azathioprine, cyclophosphamide, mycophenolate",
                    "Cold agglutinin:",
                    "  - Rituximab ± bendamustine",
                    "  - Treat underlying lymphoma if present",
                    "  - Avoid cold",
                    "Folic acid supplementation: 1 mg daily"
                ]
            },
            complications: [
                "Severe anemia requiring transfusions",
                "Thromboembolic events",
                "Infection risk (from immunosuppression)",
                "Refractory disease",
                "Underlying malignancy (CLL, lymphoma)"
            ],
            prognosis: "Variable. Warm AIHA: 70-80% respond to steroids initially, but many relapse. Cold agglutinin: chronic, often responds to rituximab. Drug-induced: resolves with drug cessation.",
            clinicalPearls: [
                "Positive Direct Coombs test = AIHA until proven otherwise",
                "Warm AIHA (70%): IgG antibodies, extravascular hemolysis (spleen), treat with steroids",
                "Cold agglutinin (30%): IgM antibodies, acrocyanosis in cold, treat with rituximab + avoid cold",
                "Spherocytes seen in warm AIHA (similar to hereditary spherocytosis, but Coombs positive)",
                "Drug-induced: penicillin, cephalosporins, methyldopa → stop drug, hemolysis resolves",
                "Transfusion challenge: hard to find compatible blood (antibodies react with all RBCs) → transfuse least incompatible",
                "Evans syndrome: AIHA + ITP (autoimmune thrombocytopenia)",
                "Cold agglutinin associated with Mycoplasma pneumoniae, EBV, lymphoma"
            ]
        }
    },
    {
        id: "paroxysmal-nocturnal-hemoglobinuria",
        name: "Paroxysmal Nocturnal Hemoglobinuria (PNH)",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia"],
        symptoms: ["dark-urine", "fatigue", "abdominal-pain", "dysphagia"],
        tags: ["hemolytic", "intravascular", "thrombosis", "CD55-CD59"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Acquired clonal disorder causing loss of complement-regulating proteins (CD55, CD59) on RBC surface → complement-mediated intravascular hemolysis and thrombosis.",
            pathophysiology: "Somatic mutation in PIG-A gene (X-linked) in hematopoietic stem cell → loss of GPI anchor → loss of CD55 (DAF) and CD59 (MIRL) → uncontrolled complement activation → intravascular hemolysis + platelet activation → thrombosis. Classic triad: hemolytic anemia, pancytopenia, thrombosis.",
            epidemiology: "Rare: 1-2 cases per million per year. Median age 30-40 years. Can occur with aplastic anemia or MDS (up to 50% of aplastic anemia patients have small PNH clone).",
            riskFactors: [
                "Aplastic anemia (10-25% develop PNH)",
                "Myelodysplastic syndrome",
                "Prior immunosuppressive therapy"
            ],
            presentation: "Classic triad: hemolytic anemia + pancytopenia + thrombosis. Dark urine (hemoglobinuria), especially morning (nocturnal hemolysis). Abdominal pain (mesenteric thrombosis). Dysphagia, erectile dysfunction (smooth muscle dystonia from nitric oxide depletion). Fatigue.",
            physicalExam: [
                "Pallor, jaundice",
                "Dark urine (hemoglobinuria)",
                "Abdominal tenderness if thrombosis",
                "No splenomegaly (key difference from other hemolytic anemias)"
            ],
            diagnosticCriteria: "Intravascular hemolytic anemia + flow cytometry showing loss of CD55/CD59 on RBCs, granulocytes, or monocytes.",
            labs: [
                "CBC: normocytic anemia, reticulocytopenia (marrow failure component), leukopenia, thrombocytopenia (pancytopenia)",
                "Peripheral smear: normocytic RBCs, NO schistocytes",
                "Hemolysis markers: ↑ LDH (markedly elevated), ↑ indirect bilirubin, ↓ haptoglobin, hemoglobinuria, hemosiderinuria",
                "Flow cytometry: loss of CD55 and CD59 on RBCs, granulocytes, monocytes (DIAGNOSTIC)",
                "Direct Coombs: negative",
                "Iron studies: low iron (chronic hemoglobinuria → iron loss)",
                "D-dimer: elevated (thrombosis risk)"
            ],
            imaging: [
                "Doppler ultrasound: hepatic vein (Budd-Chiari), portal vein, mesenteric vessels if thrombosis suspected",
                "MRI/MRV: cerebral venous thrombosis if headache/neuro symptoms"
            ],
            differentialDiagnosis: [
                "Aplastic anemia: pancytopenia, but no hemolysis (can coexist with PNH)",
                "Other intravascular hemolysis: TTP, HUS, DIC (but have schistocytes)",
                "Autoimmune hemolytic anemia: Coombs positive (PNH is negative)",
                "Myelodysplastic syndrome: cytopenias, dysplasia on marrow"
            ],
            management: {
                acute: [
                    "Eculizumab (anti-C5 monoclonal antibody): blocks terminal complement → ↓ hemolysis, ↓ thrombosis. Most effective treatment.",
                    "Ravulizumab: longer-acting C5 inhibitor (newer)",
                    "Meningococcal vaccination REQUIRED before starting complement inhibitors (↑ meningitis risk)",
                    "Anticoagulation: warfarin or LMWH for thrombosis (lifelong if major thrombosis)",
                    "Transfusions: washed RBCs if needed (avoid complement activation)",
                    "Folic acid supplementation"
                ],
                chronic: [
                    "Eculizumab or ravulizumab indefinitely (dramatically improves survival)",
                    "Anticoagulation: consider prophylaxis if high-risk (platelet count >100k, large PNH clone)",
                    "Iron supplementation: replace urinary iron losses",
                    "Hematopoietic stem cell transplant: only curative option, but high risk (reserved for severe cases or bone marrow failure)",
                    "Monitor for evolution to aplastic anemia or MDS/AML"
                ]
            },
            complications: [
                "Thrombosis (leading cause of death): hepatic vein (Budd-Chiari), portal vein, mesenteric, cerebral venous, renal",
                "Chronic kidney disease (from iron deposition)",
                "Pulmonary hypertension",
                "Evolution to aplastic anemia, MDS, or AML (10-20%)",
                "Smooth muscle dystonias: dysphagia, abdominal pain, erectile dysfunction (from NO depletion)",
                "Meningococcal infection (if on eculizumab)"
            ],
            prognosis: "Without treatment: median survival 10-15 years (thrombosis is main cause of death). With eculizumab: near-normal lifespan, dramatically reduced hemolysis and thrombosis.",
            clinicalPearls: [
                "Classic triad: hemolytic anemia + pancytopenia + thrombosis",
                "Dark urine in morning (hemoglobinuria) is classic but only in 25% of patients",
                "Flow cytometry showing loss of CD55/CD59 is DIAGNOSTIC",
                "Intravascular hemolysis WITHOUT schistocytes (vs TTP/HUS which have schistocytes)",
                "Thrombosis in unusual sites: hepatic vein (Budd-Chiari), mesenteric, cerebral venous",
                "Eculizumab (anti-C5) is transformative treatment - ↓ hemolysis, ↓ thrombosis, ↑ survival",
                "MUST vaccinate against meningococcus before starting eculizumab (blocks C5 → ↑ infection risk)",
                "Can coexist with aplastic anemia (10-25% of aplastic anemia patients have PNH clone)",
                "Hemosiderinuria (iron in urine) from chronic hemoglobinuria → iron deficiency"
            ]
        }
    },
    {
        id: "hus",
        name: "Hemolytic Uremic Syndrome (HUS)",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia"],
        symptoms: ["diarrhea", "bleeding", "oliguria", "pallor"],
        tags: ["hemolytic", "microangiopathic", "pediatric", "renal-failure"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Thrombotic microangiopathy characterized by microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury. STEC-HUS (diarrhea-associated, children) most common. Atypical HUS (complement-mediated) less common.",
            pathophysiology: "STEC-HUS: Shiga toxin (from E. coli O157:H7, Shigella) → endothelial damage in kidney → microthrombi → renal failure + MAHA. Atypical HUS: complement dysregulation → endothelial damage → microthrombi.",
            epidemiology: "STEC-HUS: most common in children <5 years, peak summer months (contaminated food/water). Atypical HUS: any age, genetic mutations in complement regulatory proteins.",
            riskFactors: [
                "STEC-HUS: contaminated food (undercooked beef, unpasteurized milk), contaminated water, contact with farm animals",
                "Atypical HUS: genetic mutations (complement factor H, I, B), pregnancy, autoimmune diseases, medications (calcineurin inhibitors, gemcitabine)"
            ],
            presentation: "STEC-HUS: prodrome of bloody diarrhea (E. coli O157:H7) → 5-7 days later → triad of MAHA, thrombocytopenia, acute kidney injury. Pallor, petechiae, oliguria, edema. Atypical HUS: similar presentation but NO diarrhea prodrome.",
            physicalExam: [
                "Pallor, jaundice",
                "Petechiae, purpura",
                "Edema, oliguria (renal failure)",
                "Hypertension",
                "Neurologic symptoms if severe (seizures, altered mental status)"
            ],
            diagnosticCriteria: "Triad of MAHA (schistocytes), thrombocytopenia, and acute kidney injury. STEC-HUS: preceded by bloody diarrhea. Atypical HUS: no diarrhea, often recurrent.",
            labs: [
                "CBC: severe anemia, severe thrombocytopenia (<50k)",
                "Peripheral smear: schistocytes (fragmented RBCs)",
                "Hemolysis markers: ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin, ↑ reticulocytes",
                "BMP: ↑ creatinine (AKI), ↑ BUN, hyperkalemia, metabolic acidosis",
                "Urinalysis: hematuria, proteinuria, RBC casts",
                "Coagulation studies: PT/PTT NORMAL (unlike DIC)",
                "Stool culture: E. coli O157:H7 (STEC-HUS)",
                "Shiga toxin assay: positive (STEC-HUS)",
                "ADAMTS13 activity: >10% (helps differentiate from TTP)",
                "Complement levels: low C3, normal C4 (atypical HUS)",
                "Genetic testing: complement mutations (atypical HUS)"
            ],
            imaging: [
                "Renal ultrasound: enlarged kidneys (acute tubular necrosis)"
            ],
            differentialDiagnosis: [
                "TTP: more neurologic symptoms, less renal failure, ADAMTS13 <10%",
                "DIC: ↑ PT/PTT, ↓ fibrinogen (unlike HUS where coags normal)",
                "HELLP syndrome: pregnancy, ↑ liver enzymes",
                "Malignant hypertension: severe HTN (>180/120), MAHA, renal failure"
            ],
            management: {
                acute: [
                    "STEC-HUS: supportive care (NO antibiotics - may worsen toxin release, NO antidiarrheals)",
                    "  - Dialysis if severe AKI (50% require dialysis)",
                    "  - Transfuse RBCs if Hb <7, platelets if life-threatening bleeding (platelets may worsen microthrombi)",
                    "  - Fluid/electrolyte management, hypertension control",
                    "Atypical HUS:",
                    "  - Eculizumab (anti-C5 monoclonal antibody) - blocks complement, prevents recurrence",
                    "  - Plasma exchange (less effective than eculizumab)",
                    "  - Meningococcal vaccination before eculizumab",
                    "AVOID: antibiotics (STEC-HUS), platelet transfusions (may worsen thrombosis)"
                ],
                chronic: [
                    "Atypical HUS: lifelong eculizumab (prevents relapses)",
                    "Monitor for chronic kidney disease",
                    "Kidney transplant if ESRD (but high recurrence risk in atypical HUS unless on eculizumab)"
                ]
            },
            complications: [
                "Acute kidney injury → chronic kidney disease (30% of STEC-HUS, higher in atypical)",
                "End-stage renal disease (10-25%)",
                "Hypertension",
                "Neurologic: seizures, stroke, coma (10%)",
                "Death (3-5% mortality in STEC-HUS)",
                "Recurrence (rare in STEC-HUS, common in atypical HUS without treatment)"
            ],
            prognosis: "STEC-HUS: 90-95% recover fully with supportive care, but 30% have residual CKD. Atypical HUS: 50% mortality or ESRD without treatment. With eculizumab: excellent prognosis, prevents relapses.",
            clinicalPearls: [
                "HUS vs TTP: HUS has MORE renal failure, LESS neuro symptoms. TTP has MORE neuro, LESS renal.",
                "STEC-HUS: preceded by bloody diarrhea (E. coli O157:H7) 5-7 days before. Most common in children <5.",
                "NEVER give antibiotics in STEC-HUS (worsens Shiga toxin release) or antidiarrheals (prolongs toxin exposure)",
                "PT/PTT are NORMAL (unlike DIC). This helps differentiate HUS from DIC.",
                "ADAMTS13 >10% (helps differentiate from TTP where ADAMTS13 <10%)",
                "Atypical HUS: NO diarrhea prodrome, complement dysregulation, treat with eculizumab",
                "Eculizumab (anti-C5) is game-changer for atypical HUS - prevents relapses, allows transplant",
                "Shiga toxin-producing E. coli (STEC): O157:H7 most common, but also O104:H4",
                "Hemolytic anemia + thrombocytopenia + acute renal failure = HUS until proven otherwise"
            ]
        }
    },
    {
        id: "dic",
        name: "Disseminated Intravascular Coagulation (DIC)",
        system: "hematology-oncology",
        categories: ["hemolytic-anemia", "bleeding-disorders"],
        symptoms: ["bleeding", "bruising", "confusion"],
        tags: ["coagulopathy", "microangiopathic", "emergency", "thrombosis"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Life-threatening coagulopathy with simultaneous widespread microvascular thrombosis and consumption of clotting factors/platelets → bleeding and organ ischemia. Always secondary to underlying condition.",
            pathophysiology: "Tissue factor release → widespread thrombin generation → diffuse microvascular thrombosis + consumption of platelets, fibrinogen, clotting factors → bleeding. Fibrinolysis activated → ↑ fibrin degradation products (D-dimer) → further bleeding.",
            epidemiology: "Always secondary to underlying condition. Common causes: sepsis (most common), trauma, malignancy, obstetric complications, transfusion reactions.",
            riskFactors: [
                "Sepsis (especially gram-negative) - most common cause",
                "Trauma, major surgery, burns",
                "Malignancy: AML (especially APL-M3), adenocarcinomas (mucin-secreting)",
                "Obstetric: placental abruption, amniotic fluid embolism, HELLP, retained dead fetus",
                "Transfusion reactions, snake bites, heat stroke"
            ],
            presentation: "Bleeding (oozing from IV sites, venipuncture sites, mucous membranes, GI, GU) + thrombosis (acral cyanosis, gangrene, organ failure). Petechiae, purpura, ecchymoses. Altered mental status, dyspnea, oliguria.",
            physicalExam: [
                "Bleeding: petechiae, purpura, oozing from wounds/IV sites, mucosal bleeding",
                "Thrombosis: acral cyanosis (blue fingers/toes), gangrene",
                "Organ failure: altered mental status, dyspnea, oliguria",
                "Signs of underlying cause: septic shock, trauma, abdominal pain (abruption)"
            ],
            diagnosticCriteria: "No single test diagnostic. Score-based systems (ISTH DIC score). Lab findings: ↓ platelets, ↓ fibrinogen, ↑ PT/PTT, ↑ D-dimer, schistocytes on smear.",
            labs: [
                "CBC: thrombocytopenia (<100k), anemia, schistocytes on smear (microangiopathic hemolysis)",
                "Coagulation: ↑ PT/PTT, ↓ fibrinogen (<100 mg/dL is severe), ↑ D-dimer (markedly elevated)",
                "Peripheral smear: schistocytes (fragmented RBCs from fibrin strands)",
                "Hemolysis markers: ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin",
                "ISTH DIC score: platelets, PT, fibrinogen, D-dimer → score ≥5 = DIC",
                "Serial labs: progressive decline in platelets/fibrinogen confirms DIC"
            ],
            imaging: [
                "Imaging for underlying cause: CT for trauma, abruption, malignancy"
            ],
            differentialDiagnosis: [
                "TTP/HUS: normal PT/PTT, normal fibrinogen (vs DIC with ↑ PT/PTT, ↓ fibrinogen)",
                "Liver failure: ↑ PT/PTT, but ↓ fibrinogen less pronounced, no schistocytes",
                "Massive transfusion: dilutional coagulopathy, but D-dimer not elevated",
                "Thrombocytopenia from other causes: ITP, HIT, drugs"
            ],
            management: {
                acute: [
                    "Treat underlying cause (MOST IMPORTANT): antibiotics for sepsis, delivery for obstetric, ATRA for APL",
                    "Supportive care:",
                    "  - Platelets: transfuse if <50k and bleeding or <10-20k",
                    "  - FFP: if bleeding or before procedures (replaces clotting factors)",
                    "  - Cryoprecipitate: if fibrinogen <100 mg/dL",
                    "  - RBC transfusions: if severe anemia",
                    "  - Avoid heparin in most cases (controversial, may worsen bleeding)",
                    "APL-specific: ATRA + chemotherapy (treat DIC at same time)"
                ],
                chronic: [
                    "Chronic DIC (cancer-associated): may benefit from low-dose heparin",
                    "Treat underlying malignancy",
                    "Monitor for recurrence"
                ]
            },
            complications: [
                "Hemorrhage (major bleeding - GI, intracranial)",
                "Thrombosis: acral gangrene, organ infarction (kidneys, lungs, brain)",
                "Acute kidney injury, ARDS, liver failure",
                "Death (mortality 30-50% depending on underlying cause)"
            ],
            prognosis: "Depends entirely on underlying cause. Septic DIC: 30-50% mortality. Obstetric DIC: good prognosis if promptly treated. APL-associated DIC: excellent with ATRA + chemotherapy.",
            clinicalPearls: [
                "DIC is ALWAYS secondary - find and treat the underlying cause",
                "KEY labs: ↓ platelets, ↓ fibrinogen, ↑ PT/PTT, ↑ D-dimer. Progressive decline confirms DIC.",
                "Schistocytes on smear (MAHA) help confirm diagnosis",
                "DIC vs TTP/HUS: DIC has ↑ PT/PTT and ↓ fibrinogen (TTP/HUS have normal PT/PTT/fibrinogen)",
                "Most common cause: sepsis (gram-negative bacteria release endotoxin → tissue factor)",
                "APL (M3 subtype of AML): DIC at presentation. Treat with ATRA immediately → stops DIC",
                "Obstetric causes: placental abruption, amniotic fluid embolism, HELLP, retained dead fetus",
                "Treatment priority: (1) Treat underlying cause, (2) Supportive transfusions",
                "Heparin controversial in DIC - only consider in chronic low-grade DIC (cancer) or if thrombosis predominates",
                "Fibrinogen <100 mg/dL = severe DIC → transfuse cryoprecipitate"
            ]
        }
    },

    // ===== BLEEDING DISORDERS =====
    {
        id: "itp",
        name: "Immune Thrombocytopenic Purpura (ITP)",
        system: "hematology-oncology",
        categories: ["bleeding-disorders"],
        symptoms: ["petechiae", "purpura", "easy-bruising", "epistaxis", "gingival-bleeding"],
        tags: ["platelet-disorder", "autoimmune", "thrombocytopenia", "bleeding"],
        severity: "medium",
        acuity: "acute-or-chronic",
        pageType: "disease",
        detail: {
            definition: "Autoimmune disorder characterized by isolated thrombocytopenia due to antiplatelet antibodies causing platelet destruction in the spleen.",
            pathophysiology: "IgG antibodies (anti-GPIIb/IIIa or anti-GPIb/IX) bind to platelets → splenic macrophages recognize antibody-coated platelets → phagocytosis and destruction → thrombocytopenia. Antibodies may also impair megakaryocyte platelet production.",
            epidemiology: "Incidence 2-4/100,000. Bimodal: children (2-6 years, often post-viral, self-limited) and adults (20-40 years, chronic). Female > male (2-3:1) in adults.",
            riskFactors: [
                "Children: recent viral infection (EBV, CMV, varicella, HIV), post-vaccination",
                "Adults: autoimmune diseases (SLE, thyroid disease), HIV, HCV",
                "Pregnancy (gestational thrombocytopenia vs ITP)",
                "Medications: quinine, sulfonamides, heparin (though HIT is different mechanism)"
            ],
            presentation: "Mucocutaneous bleeding: petechiae, purpura, easy bruising, epistaxis, gingival bleeding, menorrhagia. Most patients asymptomatic even with very low platelets (<20K). Life-threatening bleeding (intracranial hemorrhage) rare (<1%).",
            physicalExam: [
                "Petechiae (pinpoint hemorrhages, especially on lower extremities)",
                "Purpura (larger areas of bleeding into skin)",
                "Ecchymoses (bruises)",
                "Mucosal bleeding: oral petechiae, gingival bleeding",
                "NO splenomegaly (if present, consider alternative diagnosis like lymphoma)",
                "NO lymphadenopathy (if present, workup for lymphoproliferative disorder)"
            ],
            diagnosticCriteria: "Isolated thrombocytopenia (platelets <100K, often <20K) with normal WBC, Hb, and peripheral smear. Diagnosis of exclusion - must rule out other causes of thrombocytopenia.",
            labs: [
                "CBC: isolated ↓ platelets (<100K, often <20K), normal Hb/Hct, normal WBC",
                "Peripheral smear: decreased platelets, large platelets (young), NO schistocytes, NO blasts",
                "Normal PT/PTT (platelet disorder, not coagulation)",
                "Antiplatelet antibodies: NOT routinely tested (low sensitivity/specificity)",
                "HIV, HCV testing (screen for secondary causes)",
                "Direct Coombs if anemia present (rule out Evans syndrome = AIHA + ITP)"
            ],
            imaging: [
                "Not routinely needed",
                "CT head if severe thrombocytopenia + headache or neurologic symptoms (rule out ICH)"
            ],
            differentialDiagnosis: [
                "Pseudothrombocytopenia: platelet clumping on EDTA tubes → falsely low count. Check peripheral smear.",
                "Drug-induced thrombocytopenia: heparin (HIT), quinine, sulfa drugs",
                "TTP/HUS: thrombocytopenia + MAHA (schistocytes) + renal/neurologic symptoms",
                "DIC: ↓ platelets + ↑ PT/PTT + ↓ fibrinogen + ↑ D-dimer",
                "Bone marrow failure: pancytopenia (aplastic anemia, MDS, leukemia)",
                "Hypersplenism: splenomegaly + cytopenias",
                "HIV, HCV: can cause thrombocytopenia directly"
            ],
            management: {
                acute: [
                    "Treatment indicated if:",
                    "  - Platelets <30K with bleeding",
                    "  - Platelets <10K (even without bleeding, high risk ICH)",
                    "  - Need for surgery/invasive procedure",
                    "First-line:",
                    "  - Corticosteroids: prednisone 1 mg/kg/day OR dexamethasone 40 mg/day × 4 days",
                    "  - IVIG 1 g/kg (if severe bleeding or urgent increase needed) - works within 24-48h",
                    "  - Anti-D (WinRho) if Rh+ (not first-line anymore due to risk of hemolysis)",
                    "Emergency (life-threatening bleeding, ICH):",
                    "  - IVIG + high-dose corticosteroids + platelet transfusion",
                    "  - Consider splenectomy if refractory"
                ],
                chronic: [
                    "Observation if platelets >30K and no bleeding",
                    "Second-line (refractory to steroids):",
                    "  - Thrombopoietin receptor agonists: romiplostim (SubQ weekly), eltrombopag (oral daily)",
                    "  - Rituximab (anti-CD20) - 60-70% response rate",
                    "  - Splenectomy: 60-70% cure rate, but risk of overwhelming post-splenectomy infection (need vaccines: pneumococcal, meningococcal, H. influenzae)",
                    "Third-line:",
                    "  - Immunosuppressants: azathioprine, cyclosporine, mycophenolate",
                    "  - Fostamatinib (spleen tyrosine kinase inhibitor)",
                    "Avoid: aspirin, NSAIDs, anticoagulants (increase bleeding risk)"
                ]
            },
            complications: [
                "Intracranial hemorrhage (<1%, but life-threatening) - risk highest if platelets <10K",
                "Major bleeding (GI, genitourinary) - rare",
                "Steroid complications: hyperglycemia, weight gain, infection, osteoporosis",
                "Post-splenectomy complications: OPSI (overwhelming post-splenectomy infection), thrombosis"
            ],
            prognosis: "Children: 80% spontaneous remission within 6 months. Adults: 30% spontaneous remission, 70% chronic disease requiring treatment. Good response to treatment in most cases.",
            clinicalPearls: [
                "ITP = diagnosis of EXCLUSION. Must rule out TTP, DIC, drug-induced, HIV, bone marrow failure.",
                "KEY: isolated thrombocytopenia with NORMAL smear (no schistocytes, no blasts) and NORMAL PT/PTT",
                "If splenomegaly present → NOT ITP. Consider lymphoma, CLL, portal hypertension.",
                "Treatment threshold: platelets <30K with bleeding, or <10K even without bleeding",
                "Platelet transfusion generally NOT indicated (antibodies destroy transfused platelets) UNLESS life-threatening bleeding",
                "IVIG works faster than steroids (24-48h vs 3-7 days) - use if urgent increase needed",
                "Splenectomy: 60-70% cure but permanent risk of OPSI → vaccinate BEFORE surgery (pneumococcal, meningococcal, H. influenzae)",
                "Children: usually post-viral, self-limited (80% resolve spontaneously). Avoid steroids unless severe bleeding.",
                "Adults: chronic disease (70%), need long-term management",
                "Evans syndrome: ITP + autoimmune hemolytic anemia (positive Coombs + thrombocytopenia)",
                "Romiplostim/eltrombopag (TPO agonists): stimulate platelet production, useful in chronic refractory ITP"
            ]
        }
    },
    {
        id: "hemophilia-a",
        name: "Hemophilia A",
        system: "hematology-oncology",
        categories: ["bleeding-disorders"],
        symptoms: ["hemarthrosis", "muscle-hematomas", "easy-bruising", "prolonged-bleeding"],
        tags: ["coagulation-disorder", "X-linked", "factor-VIII", "bleeding"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "X-linked recessive bleeding disorder caused by deficiency or dysfunction of clotting factor VIII, leading to impaired intrinsic coagulation pathway.",
            pathophysiology: "Factor VIII deficiency → impaired intrinsic pathway → inadequate thrombin generation → weak fibrin clot → bleeding into joints (hemarthrosis), muscles, and deep tissues. Factor VIII is cofactor for factor IX in activating factor X.",
            epidemiology: "Prevalence 1:5,000 males. Most common severe inherited bleeding disorder. 30% new mutations (no family history). Affects males almost exclusively (X-linked recessive).",
            riskFactors: [
                "Male sex (X-linked recessive)",
                "Family history (70% have positive family history, 30% new mutations)",
                "Carrier mothers (50% chance of affected male offspring)"
            ],
            presentation: "Severity depends on factor VIII level: Severe (<1%): spontaneous bleeding (hemarthrosis, muscle hematomas) in infancy/childhood. Moderate (1-5%): bleeding with minor trauma. Mild (5-40%): bleeding only after major trauma/surgery. Prolonged bleeding after circumcision may be first sign.",
            physicalExam: [
                "Hemarthrosis (bleeding into joints): swollen, warm, painful joints (knees, elbows, ankles most common)",
                "Chronic arthropathy: joint deformities from recurrent bleeding",
                "Muscle hematomas: large, palpable masses, may compress nerves/vessels",
                "Ecchymoses (deep bruises), NOT petechiae (platelet disorders cause petechiae)",
                "Intracranial hemorrhage (if severe head trauma or spontaneous in severe cases)"
            ],
            diagnosticCriteria: "Prolonged PTT with normal PT and platelet count + decreased factor VIII activity (<40%).",
            labs: [
                "PTT: ↑ (intrinsic pathway affected)",
                "PT: normal (extrinsic pathway intact)",
                "Platelets: normal",
                "Bleeding time: normal (platelet function intact)",
                "Mixing study: PTT corrects with normal plasma (factor deficiency, NOT inhibitor)",
                "Factor VIII activity: decreased (<40% = hemophilia A)",
                "  - Severe: <1%",
                "  - Moderate: 1-5%",
                "  - Mild: 5-40%",
                "vWF antigen: normal (helps distinguish from vWD type 3, which also has low factor VIII)"
            ],
            imaging: [
                "X-ray of affected joints: chronic arthropathy (joint space narrowing, cartilage loss, bone erosions)",
                "MRI: early detection of joint damage before X-ray changes",
                "CT head if head trauma or neurologic symptoms (rule out intracranial hemorrhage)"
            ],
            differentialDiagnosis: [
                "Hemophilia B (factor IX deficiency): clinically identical, distinguish by factor assays",
                "Von Willebrand disease type 3: low factor VIII + low vWF",
                "Acquired hemophilia: factor VIII inhibitor (autoantibody), PTT doesn't correct with mixing study",
                "Vitamin K deficiency: ↑ PT/PTT, normal with vitamin K supplementation",
                "Liver disease: ↑ PT/PTT, multiple factor deficiencies"
            ],
            management: {
                acute: [
                    "Bleeding episodes:",
                    "  - Factor VIII replacement (recombinant factor VIII preferred)",
                    "  - Target factor VIII levels:",
                    "    • Life-threatening (ICH, GI): 80-100%",
                    "    • Major surgery, severe muscle/joint: 50-80%",
                    "    • Minor bleeding (epistaxis, oral): 30-50%",
                    "  - Dosing: Factor VIII 1 unit/kg raises level by 2%",
                    "  - DDAVP (desmopressin): for mild hemophilia A (increases factor VIII release from endothelium) - can raise factor VIII 2-4×",
                    "  - Antifibrinolytics: tranexamic acid, aminocaproic acid (for mucosal bleeding)",
                    "Hemarthrosis:",
                    "  - Factor VIII replacement + RICE (rest, ice, compression, elevation)",
                    "  - NO aspirin/NSAIDs (increase bleeding)",
                    "  - Early physical therapy to prevent joint contractures"
                ],
                chronic: [
                    "Prophylaxis (severe hemophilia, factor VIII <1%):",
                    "  - Recombinant factor VIII: 25-40 units/kg 3× weekly (or every other day)",
                    "  - Prevents spontaneous bleeding and joint damage",
                    "  - Extended half-life factor VIII products: dosed less frequently",
                    "Newer therapies:",
                    "  - Emicizumab (Hemlibra): bispecific antibody mimics factor VIII, SubQ weekly/biweekly (for patients with inhibitors or prophylaxis)",
                    "  - Gene therapy: emerging (AAV-mediated factor VIII gene transfer)",
                    "Avoid: aspirin, NSAIDs, IM injections, contact sports",
                    "Vaccinate for hepatitis A/B (if receiving plasma-derived products)",
                    "Genetic counseling for family planning"
                ]
            },
            complications: [
                "Hemophilic arthropathy: chronic joint damage from recurrent hemarthrosis → disability",
                "Intracranial hemorrhage (leading cause of death in severe hemophilia)",
                "Muscle hematomas: compartment syndrome, nerve compression (e.g., femoral nerve)",
                "Inhibitor development: 20-30% develop anti-factor VIII antibodies (most serious complication) → refractory bleeding",
                "Transfusion-transmitted infections: HIV, hepatitis (historical with older plasma products, rare now with recombinant)"
            ],
            prognosis: "With prophylaxis and modern factor replacement: near-normal life expectancy. Without treatment: frequent bleeding, chronic arthropathy, reduced lifespan. Inhibitor development worsens prognosis.",
            clinicalPearls: [
                "Hemophilia A (factor VIII) is 5× more common than hemophilia B (factor IX), but clinically identical",
                "KEY: ↑ PTT, normal PT, normal platelets → think intrinsic pathway defect (hemophilia, vWD)",
                "Deep tissue bleeding (hemarthrosis, muscle hematomas) is CLASSIC for coagulation disorders. Platelet disorders cause mucocutaneous bleeding (petechiae, purpura).",
                "Mixing study differentiates: corrects = factor deficiency (hemophilia), doesn't correct = inhibitor (acquired hemophilia)",
                "DDAVP only works in MILD hemophilia A (increases factor VIII 2-4×). Useless in severe (<1% baseline).",
                "Hemarthrosis: knee > elbow > ankle. Recurrent bleeding → chronic arthropathy (target joint) → irreversible damage.",
                "Inhibitors: 20-30% develop antibodies to factor VIII → treat with bypassing agents (rFVIIa, FEIBA) or emicizumab",
                "Emicizumab (Hemlibra): bispecific antibody bridging factor IXa and factor X (mimics factor VIII). SubQ weekly. Game-changer for patients with inhibitors.",
                "Avoid IM injections (risk of hematoma). Give all vaccines SubQ.",
                "Genetic counseling: 50% of male offspring of carrier mothers affected. 100% of daughters of affected males are carriers.",
                "CNS bleeding: most feared complication. Any head trauma → factor VIII replacement immediately (before imaging)."
            ]
        }
    },
    {
        id: "hemophilia-b",
        name: "Hemophilia B (Christmas Disease)",
        system: "hematology-oncology",
        categories: ["bleeding-disorders"],
        symptoms: ["hemarthrosis", "muscle-hematomas", "easy-bruising", "prolonged-bleeding"],
        tags: ["coagulation-disorder", "X-linked", "factor-IX", "bleeding"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "X-linked recessive bleeding disorder caused by deficiency or dysfunction of clotting factor IX, leading to impaired intrinsic coagulation pathway. Clinically identical to hemophilia A.",
            pathophysiology: "Factor IX deficiency → impaired intrinsic pathway → inadequate thrombin generation → weak fibrin clot → bleeding into joints (hemarthrosis), muscles, and deep tissues. Factor IX (activated to IXa) works with factor VIII to activate factor X.",
            epidemiology: "Prevalence 1:25,000 males (5× less common than hemophilia A). Affects males almost exclusively (X-linked recessive). 30% new mutations.",
            riskFactors: [
                "Male sex (X-linked recessive)",
                "Family history (70% have positive family history, 30% new mutations)",
                "Carrier mothers"
            ],
            presentation: "Clinically IDENTICAL to hemophilia A. Severity depends on factor IX level: Severe (<1%): spontaneous bleeding. Moderate (1-5%): bleeding with minor trauma. Mild (5-40%): bleeding only after major trauma/surgery.",
            physicalExam: [
                "Hemarthrosis (bleeding into joints): swollen, warm, painful joints",
                "Chronic arthropathy from recurrent bleeding",
                "Muscle hematomas",
                "Ecchymoses (deep bruises), NOT petechiae",
                "Intracranial hemorrhage (if severe head trauma)"
            ],
            diagnosticCriteria: "Prolonged PTT with normal PT and platelet count + decreased factor IX activity (<40%).",
            labs: [
                "PTT: ↑ (intrinsic pathway affected)",
                "PT: normal",
                "Platelets: normal",
                "Mixing study: PTT corrects with normal plasma",
                "Factor IX activity: decreased (<40%)",
                "  - Severe: <1%",
                "  - Moderate: 1-5%",
                "  - Mild: 5-40%",
                "Factor VIII: normal (helps distinguish from hemophilia A)"
            ],
            imaging: [
                "X-ray: chronic arthropathy in affected joints",
                "MRI: early joint damage detection",
                "CT head if head trauma"
            ],
            differentialDiagnosis: [
                "Hemophilia A (factor VIII deficiency): clinically identical, distinguish by factor assays",
                "Von Willebrand disease",
                "Vitamin K deficiency",
                "Liver disease"
            ],
            management: {
                acute: [
                    "Bleeding episodes:",
                    "  - Factor IX replacement (recombinant factor IX preferred)",
                    "  - Target factor IX levels same as hemophilia A targets for factor VIII",
                    "  - Dosing: Factor IX 1 unit/kg raises level by 1% (note: different from factor VIII which raises 2%)",
                    "  - DDAVP does NOT work in hemophilia B (only increases factor VIII, not IX)",
                    "  - Antifibrinolytics: tranexamic acid for mucosal bleeding",
                    "Hemarthrosis: factor IX replacement + RICE"
                ],
                chronic: [
                    "Prophylaxis (severe hemophilia B):",
                    "  - Recombinant factor IX: 50-100 units/kg 2× weekly",
                    "  - Extended half-life products: less frequent dosing",
                    "Gene therapy:",
                    "  - AAV-mediated factor IX gene transfer (more successful than factor VIII gene therapy due to smaller gene size)",
                    "  - Several approved gene therapies for hemophilia B (e.g., etranacogene dezaparvovec)",
                    "Avoid: aspirin, NSAIDs, IM injections, contact sports"
                ]
            },
            complications: [
                "Hemophilic arthropathy",
                "Intracranial hemorrhage",
                "Muscle hematomas, compartment syndrome",
                "Inhibitor development: 2-5% (MUCH less common than hemophilia A)",
                "Transfusion-transmitted infections (historical)"
            ],
            prognosis: "Similar to hemophilia A. With prophylaxis: near-normal life expectancy. Inhibitors less common than hemophilia A (2-5% vs 20-30%).",
            clinicalPearls: [
                "Hemophilia B is clinically IDENTICAL to hemophilia A - only distinguish by factor assays",
                "Factor IX dosing: 1 unit/kg → ↑ 1% (vs factor VIII: 1 unit/kg → ↑ 2%)",
                "DDAVP does NOT work in hemophilia B (only increases factor VIII, not IX)",
                "Inhibitors LESS common in hemophilia B (2-5%) compared to hemophilia A (20-30%)",
                "Gene therapy more advanced for hemophilia B than A (smaller gene, easier to package in AAV vector)",
                "Named 'Christmas disease' after Stephen Christmas, the first patient described",
                "Remember: hemophilia B = factor IX = Christmas (9 letters)",
                "Vitamin K deficiency can also cause low factor IX, but also affects other factors (II, VII, X) → ↑ PT/PTT"
            ]
        }
    },
    {
        id: "von-willebrand-disease",
        name: "Von Willebrand Disease (vWD)",
        system: "hematology-oncology",
        categories: ["bleeding-disorders"],
        symptoms: ["easy-bruising", "epistaxis", "menorrhagia", "gingival-bleeding", "prolonged-bleeding"],
        tags: ["platelet-disorder", "vWF", "bleeding", "most-common-inherited"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common inherited bleeding disorder, caused by quantitative or qualitative deficiency of von Willebrand factor (vWF), leading to impaired platelet adhesion and factor VIII stability.",
            pathophysiology: "vWF has two functions: (1) Mediates platelet adhesion to endothelium (primary hemostasis), (2) Carrier protein for factor VIII (protects from degradation). Deficiency → mucocutaneous bleeding (impaired platelet function) + possible ↑ PTT (low factor VIII in severe cases).",
            epidemiology: "Most common inherited bleeding disorder: prevalence up to 1% of population. Usually autosomal dominant (types 1 and 2), rarely recessive (type 3). Affects males and females equally (unlike hemophilia).",
            riskFactors: [
                "Family history (autosomal dominant in types 1 and 2)",
                "Type O blood (20-30% lower vWF levels than non-O)",
                "Acquired vWD: aortic stenosis (shear stress destroys vWF multimers), hypothyroidism, Wilms tumor, lymphoproliferative disorders"
            ],
            presentation: "Mucocutaneous bleeding: easy bruising, epistaxis (nosebleeds), gingival bleeding, menorrhagia (heavy periods - most common presentation in women), prolonged bleeding after dental work or surgery. Symptoms often mild and may go unrecognized.",
            physicalExam: [
                "Ecchymoses (bruises)",
                "Petechiae (less common than in ITP)",
                "Mucosal bleeding (gums, nose)",
                "Usually NO hemarthrosis (unless severe type 3)"
            ],
            diagnosticCriteria: "Clinical bleeding history + low vWF antigen or activity, +/- low factor VIII. Type-specific criteria vary.",
            labs: [
                "Initial screening:",
                "  - PTT: normal or ↑ (if factor VIII low in type 3)",
                "  - PT: normal",
                "  - Platelets: normal (except type 2B, may be mildly low)",
                "  - Bleeding time: ↑ (platelet function affected) - rarely used now",
                "Confirmatory tests:",
                "  - vWF antigen (vWF:Ag): ↓ (measures vWF quantity)",
                "  - vWF ristocetin cofactor activity (vWF:RCo): ↓ (measures vWF function - platelet binding)",
                "  - Factor VIII activity: normal or ↓ (low in type 3 and some type 1)",
                "  - vWF multimer analysis: identifies type 2 variants (abnormal multimer pattern)",
                "Classification:",
                "  - Type 1 (70-80%): partial quantitative deficiency (30-50% vWF)",
                "  - Type 2 (15-20%): qualitative defects (abnormal vWF function)",
                "    • 2A: decreased high-molecular-weight multimers",
                "    • 2B: increased affinity for platelets → platelet aggregation, mild thrombocytopenia",
                "    • 2M: decreased platelet binding without loss of multimers",
                "    • 2N: decreased factor VIII binding → low factor VIII (mimics hemophilia A)",
                "  - Type 3 (rare, <5%): complete deficiency (<3% vWF), severe bleeding"
            ],
            imaging: [
                "Not routinely needed",
                "Pelvic ultrasound in women with menorrhagia (rule out structural causes)"
            ],
            differentialDiagnosis: [
                "Hemophilia A: low factor VIII but normal vWF (type 2N vWD can mimic this)",
                "ITP: isolated thrombocytopenia (platelets normal in vWD except type 2B)",
                "Platelet function disorders: Glanzmann thrombasthenia, Bernard-Soulier",
                "Acquired vWD: aortic stenosis, Wilms tumor, hypothyroidism"
            ],
            management: {
                acute: [
                    "Minor bleeding (epistaxis, menorrhagia):",
                    "  - DDAVP (desmopressin): increases vWF and factor VIII release from endothelium (2-5× increase)",
                    "    • Intranasal (Stimate) or IV (0.3 mcg/kg)",
                    "    • Works in type 1 and some type 2 (NOT type 2B - can worsen thrombocytopenia, NOT type 3 - no vWF to release)",
                    "  - Tranexamic acid (antifibrinolytic): especially for oral/mucosal bleeding",
                    "  - Aminocaproic acid: alternative antifibrinolytic",
                    "Major bleeding or surgery:",
                    "  - vWF/factor VIII concentrates (Humate-P, Alphanate): contain both vWF and factor VIII",
                    "  - Target vWF activity >50% for surgery",
                    "  - Recombinant vWF (Vonvendi) + factor VIII",
                    "Menorrhagia:",
                    "  - Hormonal contraceptives (OCPs, IUD): reduce menstrual blood loss",
                    "  - Tranexamic acid during menses",
                    "  - DDAVP"
                ],
                chronic: [
                    "Type 1 (mild):",
                    "  - No treatment unless bleeding or before procedures",
                    "  - DDAVP trial (check response - some patients don't respond)",
                    "  - Avoid aspirin, NSAIDs",
                    "Type 2:",
                    "  - vWF/factor VIII concentrates for bleeding or surgery",
                    "  - DDAVP may work in types 2A, 2M, 2N (but NOT 2B)",
                    "Type 3 (severe):",
                    "  - Prophylaxis with vWF/factor VIII concentrates 1-3× weekly",
                    "  - DDAVP does NOT work (no vWF to release)",
                    "Menorrhagia management:",
                    "  - Hormonal contraceptives (first-line for long-term)",
                    "  - Tranexamic acid during menses",
                    "Avoid: aspirin, NSAIDs (impair platelet function further)"
                ]
            },
            complications: [
                "Major bleeding (rare except type 3): GI, intracranial",
                "Joint bleeding (hemarthrosis) - only in type 3 (mimics hemophilia)",
                "Postpartum hemorrhage (vWF levels rise during pregnancy but drop postpartum)",
                "Anemia from chronic menorrhagia or GI bleeding",
                "DDAVP side effects: hyponatremia (water retention), flushing, headache"
            ],
            prognosis: "Excellent for types 1 and 2 (mild-moderate bleeding). Type 3: more severe, requires prophylaxis, but good outcomes with treatment. Most patients live normal lives.",
            clinicalPearls: [
                "vWD is the MOST COMMON inherited bleeding disorder (1% of population)",
                "vWF has dual role: (1) platelet adhesion (primary hemostasis), (2) factor VIII carrier",
                "Presentation: mucocutaneous bleeding (epistaxis, menorrhagia, easy bruising) - NOT deep tissue/joint bleeding (unless type 3)",
                "Type 1 (most common, 70-80%): partial quantitative deficiency, mild symptoms, treat with DDAVP",
                "Type 2B: DDAVP contraindicated (increases platelet binding → worsens thrombocytopenia)",
                "Type 3 (rare): severe, clinically like hemophilia A (low factor VIII), needs prophylaxis",
                "DDAVP: first-line for type 1 and some type 2 (but NOT 2B or type 3). Trial response before relying on it.",
                "Menorrhagia: most common presentation in women. Treat with OCPs or tranexamic acid.",
                "Type O blood: lower baseline vWF (20-30%) → harder to diagnose mild vWD",
                "Acquired vWD: aortic stenosis (shear stress destroys high-MW multimers) → bleeding improves after valve replacement",
                "Pregnancy: vWF levels rise during pregnancy (may mask diagnosis), but drop postpartum → risk of postpartum hemorrhage",
                "Type 2N mimics hemophilia A (low factor VIII, X-linked inheritance pattern) - check vWF:FVIIIB assay",
                "PTT may be normal in vWD (only elevated if factor VIII low)"
            ]
        }
    },
    {
        id: "vitamin-k-deficiency",
        name: "Vitamin K Deficiency",
        system: "hematology-oncology",
        categories: ["bleeding-disorders"],
        symptoms: ["easy-bruising", "bleeding", "prolonged-bleeding"],
        tags: ["coagulation-disorder", "vitamin-deficiency", "bleeding", "warfarin"],
        severity: "medium",
        acuity: "acute-or-chronic",
        pageType: "disease",
        detail: {
            definition: "Bleeding disorder caused by insufficient vitamin K, leading to impaired synthesis of vitamin K-dependent clotting factors (II, VII, IX, X) and regulatory proteins (protein C, S).",
            pathophysiology: "Vitamin K is required for γ-carboxylation of glutamic acid residues on factors II, VII, IX, X (and proteins C, S). Without vitamin K → non-functional (PIVKA = proteins induced by vitamin K absence) → impaired coagulation. Factor VII (shortest half-life, 6h) drops first → ↑ PT early, then PTT.",
            epidemiology: "Common in neonates (hemorrhagic disease of the newborn), ICU patients, malnourished/elderly, patients on warfarin or broad-spectrum antibiotics. Rare in healthy adults (gut bacteria produce vitamin K2).",
            riskFactors: [
                "Neonates: low placental transfer, sterile gut (no bacterial synthesis), breast milk low in vitamin K",
                "Malabsorption: celiac disease, Crohn's, cystic fibrosis, cholestasis (bile needed for fat-soluble vitamin absorption)",
                "Antibiotics: kill gut flora (especially broad-spectrum like cephalosporins)",
                "Warfarin: inhibits vitamin K epoxide reductase (iatrogenic deficiency)",
                "Liver disease: impaired synthesis even with adequate vitamin K",
                "Malnutrition, prolonged NPO status, TPN without vitamin K supplementation",
                "Chronic diarrhea, laxative abuse"
            ],
            presentation: "Bleeding: easy bruising, ecchymoses, GI bleeding, hematuria, mucosal bleeding. In neonates: umbilical stump bleeding, intracranial hemorrhage (rare but severe). Usually no spontaneous bleeding unless severe deficiency.",
            physicalExam: [
                "Ecchymoses, purpura",
                "Mucosal bleeding (GI, gingival)",
                "Neonates: umbilical bleeding, cephalohematoma, intracranial hemorrhage signs"
            ],
            diagnosticCriteria: "Prolonged PT/PTT that corrects with vitamin K administration, in the appropriate clinical context (malabsorption, antibiotics, warfarin).",
            labs: [
                "PT/INR: ↑ (extrinsic pathway - factor VII has shortest half-life, drops first)",
                "PTT: ↑ (if severe, affects factors II, IX, X)",
                "Factor VII: ↓ (earliest, shortest half-life = 6 hours)",
                "Factors II, IX, X: ↓",
                "Platelets: normal",
                "Fibrinogen: normal (not vitamin K-dependent)",
                "Mixing study: corrects (factor deficiency, not inhibitor)",
                "Response to vitamin K: PT/PTT normalize within 6-24h (diagnostic)"
            ],
            imaging: [
                "Not routinely needed",
                "CT head if concern for intracranial hemorrhage (especially neonates)"
            ],
            differentialDiagnosis: [
                "Warfarin effect (iatrogenic vitamin K deficiency)",
                "Liver disease: ↑ PT/PTT but does NOT correct with vitamin K alone (impaired synthesis)",
                "DIC: ↑ PT/PTT + ↓ fibrinogen + ↑ D-dimer + ↓ platelets",
                "Hemophilia: ↑ PTT only, normal PT",
                "Factor VII deficiency (isolated): ↑ PT, normal PTT"
            ],
            management: {
                acute: [
                    "Active bleeding or urgent surgery:",
                    "  - Fresh frozen plasma (FFP): contains all clotting factors, immediate correction",
                    "  - Prothrombin complex concentrate (PCC): concentrated factors II, VII, IX, X - faster than FFP, lower volume",
                    "  - Vitamin K (phytonadione): IV/PO 10 mg (takes 6-24h for effect, not immediate)",
                    "Major bleeding:",
                    "  - 4-factor PCC (Kcentra) preferred over FFP (faster, no volume overload)",
                    "  - Vitamin K 10 mg IV (slow infusion to avoid anaphylaxis)",
                    "Minor bleeding or elevated INR without bleeding:",
                    "  - Vitamin K 2.5-10 mg PO/IV",
                    "  - Hold warfarin if applicable",
                    "Neonatal hemorrhagic disease:",
                    "  - Vitamin K 1 mg IM (or IV if life-threatening bleeding)",
                    "  - FFP or PCC if severe bleeding"
                ],
                chronic: [
                    "Prevention:",
                    "  - All neonates: vitamin K 1 mg IM at birth (prevents hemorrhagic disease of the newborn)",
                    "  - Malabsorption: oral vitamin K supplementation (2.5-25 mg/week)",
                    "  - TPN: ensure vitamin K included",
                    "  - Prolonged antibiotic use: consider vitamin K supplementation",
                    "Warfarin reversal protocols:",
                    "  - INR >10 but no bleeding: hold warfarin, oral vitamin K 2.5-5 mg",
                    "  - Major bleeding: 4-factor PCC + vitamin K 10 mg IV",
                    "Monitor: PT/INR after vitamin K administration (normalize within 6-24h)"
                ]
            },
            complications: [
                "Hemorrhagic disease of the newborn: early (0-24h), classical (2-7 days), late (2-12 weeks) - can cause intracranial hemorrhage",
                "Intracranial hemorrhage (especially neonates, warfarin over-anticoagulation)",
                "GI bleeding, retroperitoneal hematoma",
                "Warfarin skin necrosis (paradoxical thrombosis from protein C/S deficiency early in warfarin therapy)"
            ],
            prognosis: "Excellent with treatment. Vitamin K supplementation rapidly corrects deficiency (6-24h). Hemorrhagic disease of newborn: prevented with routine IM vitamin K at birth.",
            clinicalPearls: [
                "Vitamin K-dependent factors: II, VII, IX, X (extrinsic pathway + part of intrinsic). Also proteins C and S (anticoagulants).",
                "Factor VII has the shortest half-life (6h) → PT rises FIRST, before PTT",
                "KEY: ↑ PT/PTT that CORRECTS with vitamin K (unlike liver disease, which doesn't fully correct)",
                "Vitamin K sources: leafy greens (K1 = phylloquinone), gut bacteria (K2 = menaquinone)",
                "Hemorrhagic disease of newborn: prevented with routine vitamin K 1 mg IM at birth (standard of care)",
                "  - Early (0-24h): maternal drugs (warfarin, phenytoin, rifampin)",
                "  - Classical (2-7d): breastfed infants not given vitamin K at birth",
                "  - Late (2-12 weeks): breastfeeding + malabsorption → intracranial hemorrhage risk",
                "Warfarin mechanism: inhibits vitamin K epoxide reductase → functional vitamin K deficiency",
                "Warfarin reversal: Major bleeding → 4-factor PCC (immediate) + vitamin K 10 mg IV (long-term correction)",
                "FFP vs PCC: PCC faster (concentrated), less volume overload. FFP: alternative if PCC unavailable.",
                "Malabsorption causes: vitamin K is fat-soluble → needs bile for absorption (cholestasis, celiac, CF impair absorption)",
                "Liver disease vs vitamin K deficiency: both ↑ PT/PTT, but liver disease doesn't fully correct with vitamin K (impaired synthesis)",
                "Warfarin skin necrosis: paradoxical thrombosis early in therapy (protein C/S drop before II, IX, X) → prevent with heparin bridge",
                "Antibiotics kill gut flora → decreased vitamin K2 production (especially cephalosporins, fluoroquinolones)"
            ]
        }
    },

    // ===== THROMBOTIC DISORDERS =====
    {
        id: "dvt",
        name: "Deep Vein Thrombosis (DVT)",
        system: "hematology-oncology",
        categories: ["thrombotic-disorders"],
        symptoms: ["leg-pain", "leg-swelling", "warmth", "erythema"],
        tags: ["thrombosis", "venous", "VTE", "virchow-triad"],
        severity: "medium",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Formation of blood clot in a deep vein, most commonly in the lower extremities, due to venous stasis, hypercoagulability, or endothelial injury (Virchow's triad).",
            pathophysiology: "Virchow's triad: (1) Stasis (immobility, venous insufficiency), (2) Hypercoagulability (cancer, pregnancy, thrombophilia), (3) Endothelial injury (trauma, surgery, central lines). Thrombus formation → venous obstruction → leg swelling, pain. Risk of embolization to lungs (PE).",
            epidemiology: "Incidence 1-2/1,000 per year. Risk increases with age. VTE (DVT + PE) is third most common cardiovascular disease after MI and stroke. 50% of untreated DVT develop PE.",
            riskFactors: [
                "Immobility: prolonged travel (>4h flight), bed rest, paralysis, casting",
                "Surgery: especially orthopedic (hip/knee replacement), pelvic, abdominal",
                "Malignancy: pancreatic, lung, GI cancers (highest risk), metastatic disease",
                "Pregnancy and postpartum (6-week period)",
                "Oral contraceptives, hormone replacement therapy (estrogen increases clotting factors)",
                "Thrombophilia: Factor V Leiden, prothrombin G20210A, protein C/S deficiency, antithrombin deficiency, antiphospholipid syndrome",
                "Prior VTE (most important risk factor for recurrence)",
                "Obesity, smoking, advanced age",
                "Central venous catheter, pacemaker leads",
                "Inflammatory conditions: IBD, nephrotic syndrome"
            ],
            presentation: "Unilateral leg pain, swelling, warmth, erythema. Often asymptomatic (50% of DVT are clinically silent). May have palpable cord (thrombosed vein). Homan's sign (calf pain with dorsiflexion) - not sensitive or specific, no longer recommended.",
            physicalExam: [
                "Unilateral leg swelling (measure calf circumference - >3 cm difference is significant)",
                "Warmth, erythema over affected area",
                "Tenderness along deep venous system",
                "Palpable cord (superficial vein thrombosis)",
                "Pitting edema",
                "Phlegmasia cerulea dolens (massive DVT): painful, swollen, cyanotic leg with arterial compromise (emergency)"
            ],
            diagnosticCriteria: "Clinical probability (Wells score) + D-dimer (if low-intermediate probability) + compression ultrasound (gold standard for diagnosis).",
            labs: [
                "D-dimer: sensitive but NOT specific. Elevated in DVT, but also in infection, malignancy, pregnancy, trauma, post-op.",
                "  - Use to RULE OUT DVT if low pretest probability (negative D-dimer + low Wells score → DVT excluded)",
                "  - Do NOT order D-dimer if high pretest probability (go straight to imaging)",
                "Wells score for DVT: risk stratifies (low <1, moderate 1-2, high ≥3)",
                "  - Active cancer (+1), paralysis/immobilization (+1), bedridden >3 days or major surgery in past 4 weeks (+1)",
                "  - Tenderness along deep veins (+1), entire leg swollen (+1), calf swelling >3 cm (+1)",
                "  - Pitting edema (+1), collateral superficial veins (+1)",
                "  - Alternative diagnosis as likely (-2)"
            ],
            imaging: [
                "Compression ultrasound with Doppler (first-line):",
                "  - Sensitivity 95% for proximal DVT (popliteal, femoral, iliac)",
                "  - Less sensitive for calf DVT (repeat in 1 week if negative but high suspicion)",
                "  - Findings: non-compressible vein, visible thrombus, absent flow on Doppler",
                "CT or MR venography: if pelvic or IVC thrombus suspected",
                "Venography (gold standard): rarely used (invasive)"
            ],
            differentialDiagnosis: [
                "Cellulitis: erythema, warmth, systemic signs (fever), bilateral possible",
                "Ruptured Baker's cyst: popliteal cyst rupture → calf pain/swelling, history of knee arthritis",
                "Chronic venous insufficiency: bilateral, chronic edema, stasis dermatitis, varicose veins",
                "Superficial thrombophlebitis: palpable tender cord, erythema, less risk of PE",
                "Muscle strain/tear, compartment syndrome",
                "Lymphedema: chronic, non-pitting initially, bilateral possible"
            ],
            management: {
                acute: [
                    "Anticoagulation (start immediately if high suspicion, before imaging if delay expected):",
                    "First-line options:",
                    "  - DOAC (direct oral anticoagulants): rivaroxaban, apixaban (no need for bridge therapy, start immediately)",
                    "  - LMWH (enoxaparin 1 mg/kg SubQ BID) → bridge to warfarin",
                    "  - Unfractionated heparin IV (if renal failure, high bleeding risk, or need for rapid reversal)",
                    "Warfarin:",
                    "  - Start with LMWH or heparin bridge (warfarin takes 5 days to reach therapeutic INR)",
                    "  - Target INR 2-3, overlap with LMWH until INR therapeutic × 24h",
                    "  - Continue for at least 3-6 months",
                    "DOACs (preferred for most patients):",
                    "  - Rivaroxaban: 15 mg BID × 21 days, then 20 mg daily",
                    "  - Apixaban: 10 mg BID × 7 days, then 5 mg BID",
                    "  - Edoxaban, dabigatran: require LMWH bridge for 5-10 days",
                    "Thrombolysis or thrombectomy:",
                    "  - Reserved for massive DVT with limb-threatening ischemia (phlegmasia cerulea dolens)",
                    "  - Catheter-directed thrombolysis preferred over systemic",
                    "IVC filter:",
                    "  - Only if absolute contraindication to anticoagulation (active bleeding)",
                    "  - Retrievable filters preferred"
                ],
                chronic: [
                    "Duration of anticoagulation:",
                    "  - Provoked DVT (surgery, trauma, temporary risk factor): 3 months",
                    "  - Unprovoked DVT: minimum 3-6 months, consider indefinite (high recurrence risk 10% per year)",
                    "  - Cancer-associated: LMWH preferred over warfarin (more effective), continue while cancer active",
                    "  - Recurrent VTE: indefinite anticoagulation",
                    "Compression stockings: 30-40 mmHg for 2 years (reduce post-thrombotic syndrome)",
                    "Thrombophilia workup (if unprovoked, recurrent, or positive family history):",
                    "  - Factor V Leiden, prothrombin G20210A mutation",
                    "  - Protein C, protein S, antithrombin levels",
                    "  - Lupus anticoagulant, anticardiolipin antibodies, anti-β2-glycoprotein I",
                    "  - Test AFTER acute treatment (levels affected during acute DVT)",
                    "Avoid: prolonged immobility, dehydration, smoking, OCPs (if recurrent VTE)"
                ]
            },
            complications: [
                "Pulmonary embolism (50% if untreated, 5% if treated)",
                "Post-thrombotic syndrome (20-50%): chronic leg pain, swelling, skin changes, venous ulcers",
                "Phlegmasia cerulea dolens: massive DVT → venous gangrene, limb loss",
                "Recurrent VTE (10% per year if unprovoked and anticoagulation stopped)",
                "Bleeding from anticoagulation (major bleeding 1-3% per year)"
            ],
            prognosis: "With anticoagulation: low mortality (<5%), PE risk reduced from 50% to 5%. Post-thrombotic syndrome develops in 20-50% despite treatment. Recurrence risk high in unprovoked DVT (10% per year off anticoagulation).",
            clinicalPearls: [
                "Virchow's triad: stasis, hypercoagulability, endothelial injury",
                "D-dimer: rule OUT test (high sensitivity, low specificity). Negative D-dimer + low Wells score → DVT excluded.",
                "D-dimer always elevated in pregnancy, cancer, hospitalized patients → not useful in these populations → go straight to imaging",
                "DOACs (rivaroxaban, apixaban) are preferred over warfarin for most patients (no monitoring, no bridge therapy)",
                "Compression ultrasound: 95% sensitive for PROXIMAL DVT (femoral, popliteal), less sensitive for calf DVT",
                "Proximal DVT (above knee): high PE risk, always treat. Distal DVT (calf): controversial, some advocate observation with serial ultrasounds.",
                "Cancer-associated VTE: LMWH superior to warfarin (CLOT trial). Consider malignancy workup in unprovoked DVT (especially age >50).",
                "Duration of anticoagulation: provoked = 3 months, unprovoked = at least 6 months, consider indefinite",
                "IVC filter: ONLY if contraindication to anticoagulation. Does NOT prevent DVT, only prevents PE. Increased risk of recurrent DVT.",
                "Post-thrombotic syndrome: chronic venous insufficiency from valve damage. Prevent with compression stockings 30-40 mmHg × 2 years.",
                "Homan's sign: neither sensitive nor specific, no longer recommended",
                "Superficial thrombophlebitis: palpable cord, erythema, low PE risk. Treat with NSAIDs or anticoagulation if extensive.",
                "Phlegmasia cerulea dolens: massive iliofemoral DVT → venous obstruction → arterial compromise → blue, swollen, painful leg → emergency (thrombectomy)",
                "Wells score <1 + negative D-dimer = DVT excluded (>99% NPV). Wells ≥3 = go straight to ultrasound."
            ]
        }
    },
    {
        id: "factor-v-leiden",
        name: "Factor V Leiden",
        system: "hematology-oncology",
        categories: ["thrombotic-disorders"],
        symptoms: ["DVT", "PE", "recurrent-thrombosis"],
        tags: ["thrombophilia", "hypercoagulable", "inherited", "APC-resistance"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Most common inherited thrombophilia, caused by a point mutation in Factor V gene (Factor V Leiden) that makes Factor V resistant to inactivation by activated protein C (APC resistance).",
            pathophysiology: "Normal: activated protein C (APC) cleaves and inactivates Factor Va → limits clot formation. Factor V Leiden mutation (R506Q): Factor Va resistant to APC → prolonged Factor Va activity → hypercoagulability → increased VTE risk. Autosomal dominant with variable penetrance.",
            epidemiology: "Prevalence: 5% of Caucasians, 1-2% overall population. Much less common in Asians, Africans. Most common inherited thrombophilia. Accounts for 20-40% of unexplained VTE.",
            riskFactors: [
                "Heterozygous carrier: 5-7× increased VTE risk",
                "Homozygous: 50-80× increased VTE risk",
                "Combined with other risks (OCPs, pregnancy, immobility) → much higher risk",
                "Family history of VTE"
            ],
            presentation: "Most carriers asymptomatic (lifetime VTE risk ~10% for heterozygotes). Present with DVT/PE, often at younger age (<50). Recurrent VTE. Pregnancy complications (preeclampsia, placental abruption, recurrent miscarriage).",
            physicalExam: [
                "No specific physical exam findings",
                "Exam findings of DVT or PE if presenting with thrombosis"
            ],
            diagnosticCriteria: "Genetic testing for Factor V Leiden mutation (G1691A). Functional assay: APC resistance assay (Factor V activity remains high after adding APC).",
            labs: [
                "Thrombophilia workup (when to test):",
                "  - Unprovoked VTE at age <50",
                "  - Recurrent VTE",
                "  - VTE in unusual sites (cerebral sinus, mesenteric, hepatic veins)",
                "  - Strong family history of VTE",
                "  - VTE during pregnancy or on OCPs",
                "Factor V Leiden mutation: PCR-based genetic test (G1691A mutation)",
                "  - Can test during acute VTE (mutation doesn't change)",
                "APC resistance assay: functional test (Factor V activity after adding APC)",
                "  - Less specific than genetic test (other causes of APC resistance)",
                "Other thrombophilia tests: prothrombin G20210A, protein C/S, antithrombin, lupus anticoagulant, anticardiolipin antibodies"
            ],
            imaging: [
                "No specific imaging for diagnosis",
                "Imaging for VTE when clinically indicated (Doppler ultrasound, CTPA)"
            ],
            differentialDiagnosis: [
                "Other inherited thrombophilias: prothrombin G20210A mutation, protein C/S deficiency, antithrombin deficiency",
                "Acquired thrombophilias: antiphospholipid syndrome, cancer, pregnancy",
                "Combined thrombophilias (Factor V Leiden + other mutations) → much higher risk"
            ],
            management: {
                acute: [
                    "Acute VTE: treat same as non-Factor V Leiden patients",
                    "  - Anticoagulation with DOACs, LMWH, or warfarin (standard duration)",
                    "Factor V Leiden does NOT change acute VTE management"
                ],
                chronic: [
                    "After first unprovoked VTE:",
                    "  - Standard 3-6 months anticoagulation",
                    "  - Consider extended/indefinite anticoagulation (same as general population with unprovoked VTE)",
                    "  - Heterozygous Factor V Leiden alone does NOT mandate indefinite anticoagulation",
                    "  - Homozygous or recurrent VTE → indefinite anticoagulation",
                    "Asymptomatic carriers:",
                    "  - No prophylactic anticoagulation (lifetime VTE risk only ~10% for heterozygotes)",
                    "  - Thromboprophylaxis during high-risk situations:",
                    "    • Surgery: LMWH prophylaxis",
                    "    • Pregnancy/postpartum: consider LMWH prophylaxis (especially if homozygous or other risks)",
                    "    • Prolonged immobility: avoid if possible, consider prophylaxis",
                    "  - Avoid estrogen-containing contraceptives (OCPs, HRT) → use progesterone-only or non-hormonal methods",
                    "Family screening:",
                    "  - Test first-degree relatives if family member has VTE + Factor V Leiden",
                    "  - Genetic counseling"
                ]
            },
            complications: [
                "Recurrent VTE (heterozygotes: 2-3× general population, homozygotes: much higher)",
                "Pregnancy complications: preeclampsia, placental abruption, recurrent pregnancy loss, fetal growth restriction",
                "Unusual site thrombosis: cerebral sinus thrombosis, mesenteric vein thrombosis (rare)",
                "Post-thrombotic syndrome from DVT"
            ],
            prognosis: "Most heterozygous carriers remain asymptomatic (lifetime VTE risk ~10%). If VTE occurs, prognosis similar to general population with VTE. Homozygotes have much higher VTE risk and recurrence.",
            clinicalPearls: [
                "Factor V Leiden = MOST COMMON inherited thrombophilia (5% of Caucasians)",
                "Accounts for 20-40% of unexplained VTE, but most carriers never develop VTE (low penetrance)",
                "Mechanism: Factor V Leiden resistant to APC inactivation → prolonged clotting → hypercoagulability",
                "Risk: heterozygous 5-7×, homozygous 50-80× increased VTE risk",
                "Testing: only test if unprovoked VTE <50 years, recurrent VTE, unusual site thrombosis, or strong family history",
                "Asymptomatic carriers: NO prophylactic anticoagulation. Only prophylaxis during high-risk situations (surgery, pregnancy).",
                "OCPs + Factor V Leiden = VERY high VTE risk (30-50×) → AVOID estrogen contraceptives, use progesterone-only",
                "Pregnancy: consider LMWH prophylaxis if homozygous, prior VTE, or additional risk factors",
                "Duration of anticoagulation after VTE: Factor V Leiden alone does NOT change duration. Treat based on provoked vs unprovoked VTE.",
                "Homozygous or recurrent VTE → consider indefinite anticoagulation",
                "Arterial thrombosis (stroke, MI): NOT significantly increased in Factor V Leiden (venous only)",
                "Combined thrombophilia (Factor V Leiden + prothrombin G20210A) → much higher VTE risk than either alone",
                "Do NOT test during acute VTE treatment for protein C/S/antithrombin (levels affected by anticoagulation). OK to test for Factor V Leiden mutation (genetic test, doesn't change).",
                "APC resistance assay: less specific than genetic test. Can have false positives (pregnancy, OCPs, lupus anticoagulant)."
            ]
        }
    },
    {
        id: "prothrombin-g20210a",
        name: "Prothrombin G20210A Mutation",
        system: "hematology-oncology",
        categories: ["thrombotic-disorders"],
        symptoms: ["DVT", "PE", "recurrent-thrombosis"],
        tags: ["thrombophilia", "hypercoagulable", "inherited", "prothrombin"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Second most common inherited thrombophilia, caused by a point mutation in the 3' untranslated region of the prothrombin gene, leading to elevated prothrombin levels and increased VTE risk.",
            pathophysiology: "G20210A mutation in prothrombin gene → increased prothrombin (Factor II) production → elevated plasma prothrombin levels (20-30% higher) → hypercoagulability → increased VTE risk. Autosomal dominant.",
            epidemiology: "Prevalence: 2-3% of Caucasians, <1% overall population. Rare in Asians, Africans. Second most common inherited thrombophilia after Factor V Leiden. Accounts for 5-10% of unexplained VTE.",
            riskFactors: [
                "Heterozygous carrier: 2-5× increased VTE risk (lower than Factor V Leiden)",
                "Homozygous: very rare, much higher VTE risk",
                "Combined with Factor V Leiden → 20× increased VTE risk",
                "Combined with OCPs, pregnancy, immobility → higher risk"
            ],
            presentation: "Most carriers asymptomatic. Present with DVT/PE, often at younger age. Recurrent VTE. Pregnancy complications. Clinical presentation very similar to Factor V Leiden.",
            physicalExam: [
                "No specific physical exam findings",
                "Exam findings of DVT or PE if thrombosis present"
            ],
            diagnosticCriteria: "Genetic testing for prothrombin G20210A mutation (PCR-based). Elevated prothrombin activity (20-30% above normal) can suggest mutation but not diagnostic.",
            labs: [
                "Thrombophilia workup (same indications as Factor V Leiden):",
                "  - Unprovoked VTE at age <50",
                "  - Recurrent VTE",
                "  - Unusual site thrombosis",
                "  - Strong family history",
                "Prothrombin G20210A mutation: PCR-based genetic test",
                "  - Can test during acute VTE (genetic test doesn't change)",
                "Prothrombin activity: may be elevated (20-30% above normal), but NOT diagnostic",
                "Complete thrombophilia panel: Factor V Leiden, protein C/S, antithrombin, antiphospholipid antibodies"
            ],
            imaging: [
                "No specific imaging for diagnosis",
                "Imaging for VTE when indicated"
            ],
            differentialDiagnosis: [
                "Factor V Leiden (more common, clinically identical)",
                "Other inherited thrombophilias: protein C/S deficiency, antithrombin deficiency",
                "Acquired thrombophilias: antiphospholipid syndrome, cancer"
            ],
            management: {
                acute: [
                    "Acute VTE: treat same as general population",
                    "  - Standard anticoagulation (DOACs, LMWH, warfarin)",
                    "Mutation does NOT change acute VTE management"
                ],
                chronic: [
                    "After first VTE:",
                    "  - Standard 3-6 months anticoagulation",
                    "  - Consider extended anticoagulation based on provoked vs unprovoked (NOT based on mutation alone)",
                    "  - Recurrent VTE → indefinite anticoagulation",
                    "Asymptomatic carriers:",
                    "  - No prophylactic anticoagulation",
                    "  - Thromboprophylaxis during high-risk situations (surgery, pregnancy, immobility)",
                    "  - Avoid estrogen-containing contraceptives (OCPs, HRT)",
                    "  - Use progesterone-only or non-hormonal contraception",
                    "Pregnancy:",
                    "  - Consider LMWH prophylaxis if prior VTE or additional risk factors",
                    "  - Postpartum prophylaxis (6 weeks)",
                    "Family screening and genetic counseling"
                ]
            },
            complications: [
                "Recurrent VTE (2-3× increased risk)",
                "Pregnancy complications: preeclampsia, placental abruption, recurrent pregnancy loss",
                "Unusual site thrombosis (cerebral sinus, mesenteric)",
                "Post-thrombotic syndrome"
            ],
            prognosis: "Similar to Factor V Leiden. Most carriers asymptomatic. VTE risk lower than Factor V Leiden (2-5× vs 5-7×). With VTE, prognosis similar to general population.",
            clinicalPearls: [
                "Prothrombin G20210A = second most common inherited thrombophilia after Factor V Leiden",
                "Prevalence 2-3% of Caucasians. Accounts for 5-10% of unexplained VTE.",
                "Mechanism: mutation → ↑ prothrombin production → hypercoagulability",
                "VTE risk lower than Factor V Leiden: 2-5× (vs 5-7× for Factor V Leiden heterozygous)",
                "Combined Factor V Leiden + prothrombin G20210A → 20× increased VTE risk (synergistic)",
                "Testing: same indications as Factor V Leiden (unprovoked VTE <50, recurrent VTE, family history)",
                "Asymptomatic carriers: NO prophylactic anticoagulation. Only prophylaxis during high-risk situations.",
                "OCPs + prothrombin mutation = high VTE risk → avoid estrogen, use progesterone-only",
                "Duration of anticoagulation: mutation alone does NOT mandate indefinite treatment. Base on provoked vs unprovoked VTE.",
                "Arterial thrombosis: NOT significantly increased (venous thrombosis only)",
                "Genetic test can be done during acute VTE (doesn't change with anticoagulation)",
                "Elevated prothrombin activity (20-30% above normal) can suggest mutation, but genetic test needed for confirmation"
            ]
        }
    },
    {
        id: "antiphospholipid-syndrome",
        name: "Antiphospholipid Syndrome (APS)",
        system: "hematology-oncology",
        categories: ["thrombotic-disorders"],
        symptoms: ["DVT", "PE", "stroke", "recurrent-miscarriage"],
        tags: ["thrombophilia", "autoimmune", "acquired", "hypercoagulable"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Acquired autoimmune thrombophilia characterized by arterial/venous thrombosis and/or pregnancy morbidity in the presence of persistent antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-β2-glycoprotein I).",
            pathophysiology: "Antiphospholipid antibodies (aPL) bind to phospholipid-binding proteins (β2-glycoprotein I, prothrombin) → endothelial activation, platelet activation, complement activation → hypercoagulability. Paradox: lupus anticoagulant PROLONGS PTT in vitro (interferes with phospholipid-dependent coagulation tests) but causes THROMBOSIS in vivo.",
            epidemiology: "Prevalence of aPL antibodies: 1-5% of general population (most asymptomatic). APS (antibodies + clinical events): 0.5%. Female > male (5:1). Can be primary (idiopathic) or secondary (associated with SLE - 30-40% of SLE patients have aPL).",
            riskFactors: [
                "SLE or other autoimmune diseases (40% of APS is secondary to SLE)",
                "Infections: HIV, HCV, syphilis (can cause transient aPL antibodies)",
                "Medications: procainamide, hydralazine, phenytoin (drug-induced lupus → aPL)",
                "Malignancy"
            ],
            presentation: "Venous thrombosis (DVT, PE) - most common (60%). Arterial thrombosis (stroke, MI, limb ischemia) - 30%, unusual for typical thrombophilias. Recurrent pregnancy loss (≥3 early losses or ≥1 late loss). Thrombocytopenia (20-50%, usually mild 50-100K). Livedo reticularis (mottled skin discoloration). Catastrophic APS (rare): multi-organ thrombosis, high mortality.",
            physicalExam: [
                "Livedo reticularis (net-like purplish skin pattern, especially on extremities)",
                "Signs of thrombosis: unilateral leg swelling (DVT), neurologic deficits (stroke)",
                "Cardiac valve abnormalities: Libman-Sacks endocarditis (non-bacterial vegetations)",
                "Thrombocytopenia (mild, usually 50-100K)",
                "Signs of SLE if secondary APS (malar rash, arthritis, etc.)"
            ],
            diagnosticCriteria: "Revised Sapporo criteria: At least 1 clinical criterion + at least 1 laboratory criterion (antibodies positive on 2 occasions ≥12 weeks apart).",
            labs: [
                "Clinical criteria (at least 1):",
                "  - Vascular thrombosis: ≥1 episode of arterial, venous, or small vessel thrombosis",
                "  - Pregnancy morbidity:",
                "    • ≥3 consecutive spontaneous abortions <10 weeks, OR",
                "    • ≥1 unexplained fetal death ≥10 weeks, OR",
                "    • ≥1 premature birth <34 weeks due to preeclampsia, eclampsia, or placental insufficiency",
                "Laboratory criteria (at least 1, positive on 2 occasions ≥12 weeks apart):",
                "  - Lupus anticoagulant (LA): functional assay",
                "    • PTT prolonged, does NOT correct with mixing study (inhibitor)",
                "    • Corrects with excess phospholipid (confirms phospholipid-dependent inhibitor)",
                "  - Anticardiolipin antibodies (aCL): IgG or IgM, medium-high titer (>40 units or >99th percentile)",
                "  - Anti-β2-glycoprotein I antibodies (anti-β2GPI): IgG or IgM, medium-high titer",
                "Triple positive (LA + aCL + anti-β2GPI) = highest thrombosis risk",
                "Other labs:",
                "  - CBC: mild thrombocytopenia (50-100K) in 20-50%",
                "  - RPR/VDRL: false-positive syphilis test (aPL cross-reacts with cardiolipin in RPR)",
                "  - ANA, anti-dsDNA, complement (if SLE suspected)"
            ],
            imaging: [
                "Imaging based on clinical presentation:",
                "  - Doppler ultrasound for DVT",
                "  - CTPA for PE",
                "  - MRI/CT brain for stroke",
                "  - Echocardiography: valve abnormalities (Libman-Sacks endocarditis)"
            ],
            differentialDiagnosis: [
                "Other thrombophilias: Factor V Leiden, prothrombin mutation (but these cause only VENOUS thrombosis, not arterial)",
                "SLE (APS can be secondary to SLE or overlap)",
                "Other causes of recurrent pregnancy loss: chromosomal abnormalities, uterine anomalies, hormonal",
                "Heparin-induced thrombocytopenia (HIT): thrombocytopenia + thrombosis, but different antibody"
            ],
            management: {
                acute: [
                    "Acute thrombosis:",
                    "  - Anticoagulation: heparin (UFH or LMWH) → warfarin (target INR 2-3)",
                    "  - DOACs controversial in APS (some studies show higher recurrence vs warfarin) → warfarin preferred",
                    "  - High-risk APS (arterial thrombosis, triple positive): target INR 3-4 (some experts)",
                    "Catastrophic APS (CAPS): multi-organ thrombosis, high mortality",
                    "  - Anticoagulation + high-dose steroids + IVIG or plasmapheresis",
                    "  - Treat precipitant (infection, surgery, medication)"
                ],
                chronic: [
                    "After first thrombosis:",
                    "  - Lifelong anticoagulation with warfarin (INR 2-3)",
                    "  - APS thrombosis = unprovoked → indefinite anticoagulation",
                    "  - DOACs: avoid in triple-positive or high-risk APS (warfarin superior in trials)",
                    "  - Low-dose aspirin 81 mg may be added in high-risk cases",
                    "Pregnancy:",
                    "  - History of thrombosis: LMWH (therapeutic dose) + aspirin 81 mg throughout pregnancy and 6 weeks postpartum",
                    "  - History of pregnancy loss only (no thrombosis): LMWH (prophylactic dose) + aspirin 81 mg",
                    "  - Warfarin is teratogenic → switch to LMWH when planning pregnancy",
                    "  - Monitor closely for preeclampsia, fetal growth restriction",
                    "Asymptomatic aPL carriers (antibodies but no events):",
                    "  - Low-dose aspirin 81 mg may reduce first thrombosis risk (controversial)",
                    "  - Avoid OCPs, smoking, prolonged immobility",
                    "  - Thromboprophylaxis during high-risk situations (surgery, pregnancy)",
                    "Associated SLE: treat underlying SLE (hydroxychloroquine may reduce thrombosis risk)"
                ]
            },
            complications: [
                "Recurrent thrombosis (high risk even on anticoagulation)",
                "Catastrophic APS (CAPS): <1% of APS, multi-organ thrombosis (kidneys, lungs, brain, heart), mortality 50%",
                "Pregnancy complications: recurrent miscarriage, preeclampsia, placental abruption, fetal death, IUGR",
                "Valvular heart disease: Libman-Sacks endocarditis (non-bacterial vegetations on mitral/aortic valves)",
                "Pulmonary hypertension (from chronic PE or pulmonary vasculopathy)",
                "Stroke, MI, limb ischemia (arterial thrombosis)"
            ],
            prognosis: "Variable. Recurrent thrombosis common even on anticoagulation. CAPS mortality 50%. Pregnancy outcomes improved with LMWH + aspirin (70-80% live birth rate vs 10% untreated).",
            clinicalPearls: [
                "APS = antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-β2GPI) + thrombosis or pregnancy morbidity",
                "Paradox: lupus anticoagulant PROLONGS PTT in vitro but causes THROMBOSIS in vivo",
                "Only thrombophilia that causes BOTH arterial and venous thrombosis (most thrombophilias = venous only)",
                "Triple positive (LA + aCL + anti-β2GPI) = highest thrombosis risk",
                "Diagnosis requires antibodies positive on 2 occasions ≥12 weeks apart (transient antibodies after infection don't count)",
                "Warfarin preferred over DOACs in APS (DOACs associated with higher recurrence in some studies, especially triple-positive)",
                "Target INR 2-3 for venous thrombosis, some experts use 3-4 for arterial or high-risk APS",
                "Pregnancy: LMWH + aspirin throughout pregnancy and 6 weeks postpartum (warfarin is teratogenic)",
                "Catastrophic APS (CAPS): multi-organ thrombosis, precipitated by infection/surgery/pregnancy. Treat with anticoagulation + steroids + IVIG/plasmapheresis.",
                "False-positive RPR/VDRL: aPL antibodies cross-react with cardiolipin in syphilis test",
                "Livedo reticularis: net-like purplish skin discoloration (Sneddon syndrome if + stroke)",
                "Libman-Sacks endocarditis: non-bacterial vegetations on mitral/aortic valves (sterile, but can embolize)",
                "Thrombocytopenia in APS: usually mild (50-100K), rarely causes bleeding (thrombosis is the problem)",
                "Secondary APS: 30-40% of SLE patients have aPL antibodies. Hydroxychloroquine (for SLE) may reduce thrombosis risk.",
                "Mixing study: PTT doesn't correct (inhibitor), but DOES correct with excess phospholipid → confirms LA",
                "Asymptomatic aPL carriers: consider low-dose aspirin, avoid OCPs, thromboprophylaxis during high-risk situations"
            ]
        }
    },

    // ===== LEUKEMIA =====
    {
        id: "aml",
        name: "Acute Myeloid Leukemia (AML)",
        system: "hematology-oncology",
        categories: ["leukemia"],
        symptoms: ["fatigue", "fever", "bleeding", "bone-pain", "infections"],
        tags: ["leukemia", "acute", "myeloid", "malignancy", "auer-rods"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Clonal malignant proliferation of myeloid precursors (blasts) in bone marrow, peripheral blood, or other tissues, with ≥20% blasts required for diagnosis.",
            pathophysiology: "Genetic mutations → differentiation block in myeloid progenitors → accumulation of immature blasts → crowding out of normal hematopoiesis → pancytopenia (anemia, thrombocytopenia, neutropenia).",
            epidemiology: "Incidence 4/100,000, median age 68. Most common acute leukemia in adults. 20% of childhood leukemias.",
            riskFactors: [
                "Prior chemotherapy (alkylating agents, topoisomerase II inhibitors)",
                "Myelodysplastic syndrome (MDS)",
                "Genetic syndromes: Down syndrome, Fanconi anemia",
                "Benzene exposure, smoking"
            ],
            presentation: "Fatigue, infections, easy bruising/bleeding. Fever, weight loss. Bone pain. Gingival hypertrophy (monocytic M4/M5). DIC (APL).",
            physicalExam: [
                "Pallor, petechiae, purpura",
                "Fever",
                "Hepatosplenomegaly (25-50%)",
                "Gingival hypertrophy (monocytic AML)",
                "Leukemia cutis"
            ],
            diagnosticCriteria: "≥20% blasts in bone marrow or peripheral blood. t(15;17), t(8;21), or inv(16) diagnostic regardless of blast count.",
            labs: [
                "CBC: anemia, thrombocytopenia, variable WBC",
                "Peripheral smear: Auer rods (pathognomonic for AML)",
                "Bone marrow: ≥20% blasts, hypercellular",
                "Flow cytometry: CD13, CD33, CD117, MPO+",
                "Cytogenetics:",
                "  - APL: t(15;17) PML-RARA",
                "  - Core binding factor: t(8;21), inv(16) (favorable)",
                "  - FLT3-ITD: poor prognosis",
                "  - NPM1 without FLT3-ITD: favorable",
                "Coagulation: PT/PTT, fibrinogen (DIC in APL)",
                "Uric acid, LDH (tumor lysis risk)"
            ],
            imaging: [
                "Chest X-ray: infection screening",
                "CT: if extramedullary disease suspected"
            ],
            differentialDiagnosis: [
                "ALL: TdT+, no Auer rods, CD10+",
                "MDS: <20% blasts",
                "Leukemoid reaction: infection, no blasts"
            ],
            management: {
                acute: [
                    "Oncologic emergencies:",
                    "  - Hyperleukocytosis (WBC >100K): leukapheresis, hydroxyurea",
                    "  - DIC (APL): FFP, platelets, ATRA immediately",
                    "  - Tumor lysis: IV fluids, allopurinol or rasburicase",
                    "Induction chemotherapy:",
                    "  - Standard 7+3: cytarabine × 7 days + daunorubicin × 3 days",
                    "  - APL: ATRA (tretinoin) + arsenic trioxide",
                    "  - FLT3+: add midostaurin or gilteritinib",
                    "  - Favorable risk: add gemtuzumab ozogamicin",
                    "Supportive:",
                    "  - Transfusions: PRBCs, platelets",
                    "  - Prophylaxis: fluoroquinolone, acyclovir, fluconazole",
                    "  - G-CSF after chemotherapy"
                ],
                chronic: [
                    "Consolidation:",
                    "  - High-dose cytarabine (HiDAC) × 3-4 cycles",
                    "  - APL: ATRA + arsenic trioxide maintenance",
                    "Allogeneic stem cell transplant:",
                    "  - For intermediate/poor-risk AML in first remission",
                    "Relapsed/refractory:",
                    "  - Re-induction, targeted therapies (gilteritinib, ivosidenib, enasidenib, venetoclax)",
                    "Elderly/unfit:",
                    "  - Azacitidine or decitabine + venetoclax"
                ]
            },
            complications: [
                "Tumor lysis syndrome",
                "Leukostasis (WBC >100K)",
                "DIC (especially APL)",
                "Infections (leading cause of death)",
                "Chemotherapy toxicity",
                "Relapse (50%)"
            ],
            prognosis: "Overall 5-year survival ~30%. APL: >90% cure. Favorable risk: 60-70%. Poor risk: 10-20%. Age >60: <10%.",
            clinicalPearls: [
                "Auer rods = pathognomonic for AML",
                "APL (t(15;17)): DIC at presentation, ATRA + arsenic trioxide curative (>90%)",
                "ATRA syndrome: fever, dyspnea, pulmonary infiltrates → treat with dexamethasone",
                "Favorable: t(8;21), inv(16), t(15;17). Poor: complex karyotype, -5, -7",
                "FLT3-ITD: 30%, poor prognosis. Treat with FLT3 inhibitors.",
                "7+3 induction: cytarabine × 7 + anthracycline × 3",
                "Leukostasis: WBC >100K → leukapheresis + hydroxyurea",
                "Allo-SCT: only cure for high-risk AML",
                "Therapy-related AML: after chemo/radiation, poor prognosis",
                "CNS prophylaxis NOT routine (unlike ALL), except monocytic M4/M5"
            ]
        }
    },
    {
        id: "all",
        name: "Acute Lymphoblastic Leukemia (ALL)",
        system: "hematology-oncology",
        categories: ["leukemia"],
        symptoms: ["fatigue", "fever", "bleeding", "bone-pain", "infections"],
        tags: ["leukemia", "acute", "lymphoid", "malignancy", "children"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Malignant clonal proliferation of lymphoid precursors (lymphoblasts) in bone marrow, blood, and extramedullary sites. Most common cancer in children.",
            pathophysiology: "Chromosomal translocations/mutations (BCR-ABL, MLL rearrangements, hyperdiploidy) → differentiation arrest in B or T lymphoid progenitors → accumulation of lymphoblasts → bone marrow failure → pancytopenia.",
            epidemiology: "Most common childhood malignancy (25% of pediatric cancers), peak age 2-5 years. Incidence 1.5/100,000. Bimodal: peak in children, second peak >50 years. 80% B-cell ALL, 20% T-cell ALL.",
            riskFactors: [
                "Age: peak 2-5 years, second peak >50",
                "Down syndrome (20× risk)",
                "Prior radiation exposure",
                "Philadelphia chromosome t(9;22): BCR-ABL fusion, poor prognosis",
                "Genetic syndromes: Down, Fanconi, Bloom"
            ],
            presentation: "Bone marrow failure symptoms: fatigue, infections, bleeding. Bone pain (70%, from marrow infiltration). Mediastinal mass (T-cell ALL). CNS involvement (5-10%): headache, cranial nerve palsies. Testicular involvement (boys). B symptoms.",
            physicalExam: [
                "Pallor, petechiae, purpura",
                "Fever",
                "Lymphadenopathy (50%)",
                "Hepatosplenomegaly (60-70%)",
                "Mediastinal mass (T-ALL): SVC syndrome",
                "Testicular enlargement"
            ],
            diagnosticCriteria: "≥20% lymphoblasts in bone marrow or peripheral blood.",
            labs: [
                "CBC: anemia, thrombocytopenia, variable WBC (high, normal, or low)",
                "Peripheral smear: lymphoblasts (NO Auer rods)",
                "Bone marrow: ≥20% lymphoblasts",
                "Flow cytometry:",
                "  - B-ALL: CD19+, CD10+ (common ALL antigen), TdT+",
                "  - T-ALL: CD2+, CD3+, CD5+, CD7+, TdT+",
                "  - Both: TdT+ (terminal deoxynucleotidyl transferase, absent in mature lymphocytes)",
                "Cytogenetics/molecular:",
                "  - Philadelphia chromosome t(9;22) BCR-ABL: 25% adult ALL, 3% pediatric ALL (worst prognosis in children, better in adults with TKI)",
                "  - t(12;21) TEL-AML1: 25% pediatric B-ALL (best prognosis)",
                "  - MLL rearrangements t(4;11): infants, poor prognosis",
                "  - Hyperdiploidy (>50 chromosomes): favorable in children",
                "Lumbar puncture: CNS involvement (5-10%, requires intrathecal chemotherapy)",
                "Uric acid, LDH: tumor lysis risk"
            ],
            imaging: [
                "Chest X-ray: mediastinal mass (T-ALL, 50-70%)",
                "CT chest: if mediastinal mass (risk of airway compression during anesthesia)",
                "MRI brain: if CNS symptoms"
            ],
            differentialDiagnosis: [
                "AML: Auer rods, MPO+, CD13/33+, TdT-",
                "Lymphoma: solid masses, less marrow involvement",
                "Infectious mononucleosis: atypical lymphocytes, positive monospot",
                "Aplastic anemia: pancytopenia, hypocellular marrow (no blasts)"
            ],
            management: {
                acute: [
                    "Risk stratification: age, WBC, cytogenetics, response to therapy",
                    "  - High-risk: age <1 or >10 (pediatric), WBC >50K, t(9;22) Ph+, CNS/testicular involvement, slow response",
                    "Oncologic emergencies:",
                    "  - Tumor lysis syndrome: IV fluids, allopurinol or rasburicase",
                    "  - Mediastinal mass with SVC syndrome: avoid sedation (airway collapse risk), start steroids + chemotherapy urgently",
                    "  - Hyperleukocytosis: leukapheresis",
                    "Induction chemotherapy (4-6 weeks, goal: remission):",
                    "  - Vincristine, prednisone or dexamethasone, asparaginase, anthracycline (daunorubicin)",
                    "  - ± cyclophosphamide (high-risk)",
                    "  - Ph+ ALL: add TKI (imatinib, dasatinib, or ponatinib)",
                    "CNS prophylaxis (ALL has high CNS relapse risk):",
                    "  - Intrathecal chemotherapy (methotrexate, cytarabine, hydrocortisone)",
                    "  - High-dose IV methotrexate",
                    "  - Cranial radiation (reserved for high-risk or CNS+ disease)",
                    "Supportive:",
                    "  - Transfusions, infection prophylaxis",
                    "  - PCP prophylaxis: trimethoprim-sulfamethoxazole (steroids + chemotherapy immunosuppressive)"
                ],
                chronic: [
                    "Consolidation/intensification (months):",
                    "  - High-dose methotrexate, cytarabine, cyclophosphamide, asparaginase",
                    "  - Continue intrathecal chemotherapy",
                    "Maintenance (2-3 years total therapy):",
                    "  - Daily 6-mercaptopurine (6-MP) + weekly methotrexate",
                    "  - Monthly vincristine + prednisone pulses",
                    "  - Continue intrathecal chemotherapy periodically",
                    "Allogeneic stem cell transplant:",
                    "  - High-risk ALL (Ph+, MLL rearrangements, slow response, relapse)",
                    "  - In first remission for very high-risk, or second remission for others",
                    "Ph+ ALL:",
                    "  - TKI (imatinib, dasatinib, ponatinib) + chemotherapy",
                    "  - Allo-SCT in first remission",
                    "Relapsed ALL:",
                    "  - Re-induction, blinatumomab (BiTE antibody, CD19-directed), inotuzumab ozogamicin (anti-CD22)",
                    "  - CAR T-cell therapy (tisagenlecleucel for B-ALL)"
                ]
            },
            complications: [
                "Tumor lysis syndrome (high risk, large tumor burden)",
                "CNS relapse (prevented by intrathecal chemotherapy)",
                "Testicular relapse (boys, sanctuary site)",
                "Infections: neutropenic fever, PCP (on steroids)",
                "Chemotherapy toxicity: asparaginase (pancreatitis, hepatotoxicity, thrombosis), vincristine (peripheral neuropathy), anthracyclines (cardiotoxicity)",
                "Steroid side effects: hyperglycemia, avascular necrosis (femoral head)",
                "Relapse: 15-20% in children (curable with SCT), 50% in adults"
            ],
            prognosis: "Children: 85-90% cure rate (excellent prognosis). Adults: 40% cure rate. High-risk features (Ph+, age <1 or >10, high WBC, MLL rearrangements) worsen prognosis. Ph+ ALL: improved with TKI, 50-60% cure. Relapse after initial remission: poor prognosis, requires SCT.",
            clinicalPearls: [
                "ALL = most common childhood cancer (25% of pediatric cancers)",
                "Peak age 2-5 years. Children have MUCH better prognosis than adults (85-90% vs 40% cure).",
                "TdT+ = marker for ALL (absent in AML and mature lymphocytes)",
                "B-ALL: CD19+, CD10+ (common ALL antigen). T-ALL: CD3+, CD7+, mediastinal mass.",
                "Philadelphia chromosome t(9;22) BCR-ABL: worst prognosis in children, improved with TKI in adults",
                "CNS prophylaxis REQUIRED in ALL (high CNS relapse risk) - intrathecal chemo + high-dose methotrexate",
                "Testicular relapse: sanctuary site in boys (blood-testis barrier)",
                "Bone pain common (70%) from marrow infiltration (vs AML where less common)",
                "Mediastinal mass in T-ALL: risk of airway compression during anesthesia → avoid sedation, start treatment urgently",
                "Maintenance therapy 2-3 years: daily 6-MP + weekly methotrexate (unlike AML, which has no maintenance)",
                "Hyperdiploidy (>50 chromosomes): favorable in children, unfavorable in adults",
                "Asparaginase side effects: pancreatitis, hepatotoxicity, thrombosis (depletes asparagine needed for protein synthesis)",
                "Vincristine toxicity: peripheral neuropathy (dose-limiting)",
                "Steroids: avascular necrosis of femoral head (especially adolescents)",
                "CAR T-cell therapy (tisagenlecleucel): targets CD19, approved for relapsed/refractory B-ALL",
                "Blinatumomab: BiTE (bispecific T-cell engager) antibody targeting CD19, effective in relapsed B-ALL"
            ]
        }
    },
    {
        id: "cml",
        name: "Chronic Myeloid Leukemia (CML)",
        system: "hematology-oncology",
        categories: ["leukemia"],
        symptoms: ["fatigue", "abdominal-fullness", "weight-loss", "night-sweats"],
        tags: ["leukemia", "chronic", "myeloid", "philadelphia-chromosome", "BCR-ABL"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Myeloproliferative neoplasm characterized by t(9;22) Philadelphia chromosome (BCR-ABL fusion gene), leading to uncontrolled proliferation of mature myeloid cells.",
            pathophysiology: "t(9;22) translocation → BCR-ABL fusion gene → constitutively active tyrosine kinase → uncontrolled proliferation of granulocytes (neutrophils, basophils, eosinophils) → massive splenomegaly from extramedullary hematopoiesis. Three phases: chronic (years), accelerated (months), blast crisis (acute leukemia).",
            epidemiology: "Incidence 1-2/100,000, median age 65. Male > female (1.4:1). Accounts for 15% of adult leukemias. Rare in children.",
            riskFactors: [
                "Radiation exposure (atomic bomb survivors, radiation therapy)",
                "Age (median 65)",
                "No strong genetic predisposition"
            ],
            presentation: "Often asymptomatic (40%, found incidentally on CBC). Chronic phase: fatigue, weight loss, night sweats, abdominal fullness/early satiety (splenomegaly). Left upper quadrant pain (splenic infarct). Accelerated/blast crisis: fever, bone pain, bleeding, infections (acute leukemia symptoms).",
            physicalExam: [
                "Massive splenomegaly (90%, most common physical finding)",
                "Hepatomegaly (50%)",
                "Pallor (anemia)",
                "Sternal tenderness (uncommon)"
            ],
            diagnosticCriteria: "Leukocytosis with left shift + Philadelphia chromosome t(9;22) or BCR-ABL fusion gene.",
            labs: [
                "CBC: ↑↑ WBC (often >100K), all stages of granulocyte maturation (left shift), ↑ basophils, ↑ eosinophils",
                "  - Chronic phase: Hb >10, platelets normal or high, <10% blasts",
                "  - Accelerated phase: 10-19% blasts, basophils >20%, platelets <100K or >1 million, new cytogenetic abnormalities",
                "  - Blast crisis: ≥20% blasts (acute leukemia, 70% myeloid, 30% lymphoid)",
                "Peripheral smear: granulocytes at all stages (myelocytes, metamyelocytes, bands, neutrophils), ↑ basophils",
                "Philadelphia chromosome: t(9;22) by cytogenetics (95%)",
                "BCR-ABL by PCR: detects fusion transcript (more sensitive, used for monitoring)",
                "Bone marrow: hypercellular, <10% blasts (chronic phase)",
                "LAP (leukocyte alkaline phosphatase): ↓ in CML (vs leukemoid reaction where ↑)",
                "Uric acid: ↑ (high cell turnover)"
            ],
            imaging: [
                "Abdominal ultrasound or CT: massive splenomegaly"
            ],
            differentialDiagnosis: [
                "Leukemoid reaction: very high WBC from infection/inflammation, but LAP ↑ (CML has ↓ LAP), no basophilia, no Ph chromosome",
                "Other myeloproliferative neoplasms: PV (↑ RBCs), ET (↑ platelets), PMF (fibrosis, teardrop cells)",
                "AML: ≥20% blasts from onset, Auer rods, no Ph chromosome (except rare Ph+ AML)"
            ],
            management: {
                acute: [
                    "Chronic phase (90% at diagnosis):",
                    "  - First-line: TKI (tyrosine kinase inhibitor) targeting BCR-ABL",
                    "    • Imatinib (Gleevec): first-generation TKI, 400 mg daily",
                    "    • Second-generation TKIs (if imatinib intolerant/resistant): dasatinib, nilotinib, bosutinib",
                    "  - Goal: complete hematologic response → complete cytogenetic response → major molecular response",
                    "  - Hydroxyurea: temporary cytoreduction before starting TKI or if TKI unavailable",
                    "Accelerated phase:",
                    "  - Higher-dose TKI or second-generation TKI (dasatinib, nilotinib)",
                    "  - Consider allo-SCT if suitable candidate",
                    "Blast crisis (acute leukemia):",
                    "  - TKI + chemotherapy (AML-like or ALL-like regimen depending on phenotype)",
                    "  - Allo-SCT if achieve remission",
                    "  - Poor prognosis (median survival <1 year)"
                ],
                chronic: [
                    "TKI therapy (lifelong):",
                    "  - Monitor BCR-ABL transcript by PCR every 3 months",
                    "  - Goal: major molecular response (BCR-ABL <0.1%) by 12 months",
                    "  - If suboptimal response: switch to second-generation TKI",
                    "  - Some patients achieve deep molecular response and can attempt TKI discontinuation (treatment-free remission, 50% success)",
                    "Allogeneic stem cell transplant:",
                    "  - Reserved for TKI-resistant disease, blast crisis, or T315I mutation (resistant to most TKIs)",
                    "  - Only curative option, but high morbidity/mortality → second-line with TKI era",
                    "Mutation testing if TKI resistance:",
                    "  - T315I mutation: resistant to imatinib, dasatinib, nilotinib → use ponatinib or asciminib"
                ]
            },
            complications: [
                "Blast crisis: transformation to acute leukemia (myeloid 70%, lymphoid 30%), median time 3-5 years without TKI",
                "Leukostasis (if WBC >200-300K): stroke, respiratory failure → hydroxyurea, leukapheresis",
                "Splenic rupture (rare, from massive splenomegaly or infarct)",
                "Gout (high cell turnover → hyperuricemia)",
                "TKI side effects: fluid retention (dasatinib), QT prolongation (nilotinib), myelosuppression"
            ],
            prognosis: "Before TKI era: median survival 3-5 years, inevitable blast crisis. With TKI (imatinib): 10-year survival 80-90%, near-normal life expectancy if good response. Chronic phase: excellent prognosis. Accelerated/blast crisis: poor prognosis despite TKI.",
            clinicalPearls: [
                "CML = Philadelphia chromosome t(9;22) BCR-ABL fusion → constitutive tyrosine kinase activity",
                "Classic presentation: asymptomatic patient with WBC >100K + massive splenomegaly",
                "Three phases: chronic (years, mature cells) → accelerated → blast crisis (acute leukemia)",
                "LAP score: ↓ in CML (differentiates from leukemoid reaction where LAP ↑)",
                "Peripheral smear: all stages of granulocytes (left shift), ↑ basophils, ↑ eosinophils",
                "Imatinib (Gleevec): first TKI, revolutionized CML treatment. Targets BCR-ABL tyrosine kinase.",
                "TKI side effects: imatinib (GI upset, edema), dasatinib (pleural effusion, pulmonary HTN), nilotinib (QT prolongation, hyperglycemia)",
                "Monitor response: BCR-ABL transcript by quantitative PCR every 3 months",
                "Complete cytogenetic response: 0% Ph+ cells. Major molecular response: BCR-ABL <0.1%.",
                "T315I mutation: 'gatekeeper' mutation resistant to imatinib, dasatinib, nilotinib → use ponatinib or asciminib",
                "Blast crisis: ≥20% blasts. Treat like acute leukemia (AML or ALL regimen) + TKI. Poor prognosis.",
                "Allo-SCT: only cure, but with TKI now second-line (reserved for TKI failure/resistance)",
                "Treatment-free remission: some patients with deep molecular response can stop TKI, 50% remain in remission",
                "Leukemoid reaction vs CML: both have high WBC, but leukemoid has ↑ LAP, no basophilia, no Ph chromosome, resolves when underlying cause treated"
            ]
        }
    },
    {
        id: "cll",
        name: "Chronic Lymphocytic Leukemia (CLL)",
        system: "hematology-oncology",
        categories: ["leukemia"],
        symptoms: ["asymptomatic", "fatigue", "infections", "lymphadenopathy"],
        tags: ["leukemia", "chronic", "lymphoid", "smudge-cells", "elderly"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Monoclonal proliferation of mature but functionally incompetent B lymphocytes accumulating in blood, bone marrow, lymph nodes, and spleen. Most common leukemia in adults (Western countries).",
            pathophysiology: "Accumulation of clonal mature B cells (CD5+/CD19+/CD20+) due to impaired apoptosis (BCL-2 overexpression) rather than increased proliferation → crowding of bone marrow → cytopenias. Impaired humoral immunity → recurrent infections.",
            epidemiology: "Most common adult leukemia in Western countries (30% of all leukemias). Median age 70, rare <40. Male > female (2:1). Incidence increases with age.",
            riskFactors: [
                "Age (median 70, rare <40)",
                "Family history (genetic component, familial clustering)",
                "Male sex (2:1)",
                "Caucasian (rare in Asians)"
            ],
            presentation: "Often asymptomatic (25%, incidental finding on routine CBC). Painless lymphadenopathy (generalized). Fatigue (anemia). Recurrent infections (hypogammaglobulinemia). B symptoms (late stage): fever, night sweats, weight loss >10%.",
            physicalExam: [
                "Painless lymphadenopathy (cervical, axillary, inguinal) - generalized (vs focal in lymphoma)",
                "Hepatomegaly (25-50%)",
                "Splenomegaly (25-50%, less massive than CML)",
                "Pallor (anemia in advanced stages)"
            ],
            diagnosticCriteria: "Absolute lymphocyte count ≥5,000/μL × 3 months + clonal B cells (CD5+/CD19+/CD20+) on flow cytometry.",
            labs: [
                "CBC: ↑ lymphocytes (>5,000/μL, often 50-200K), late: ↓ Hb, ↓ platelets (marrow infiltration)",
                "Peripheral smear: mature small lymphocytes + smudge cells (Gumprecht shadows, fragile lymphocytes ruptured during smear preparation, characteristic)",
                "Flow cytometry (diagnostic): CD5+/CD19+/CD20+ (dim), CD23+",
                "  - CD5 normally on T cells, NOT B cells → CLL is CD5+ B cell",
                "  - Monoclonal light chain restriction (kappa or lambda)",
                "Immunoglobulin levels: ↓ (hypogammaglobulinemia → recurrent infections)",
                "Direct Coombs test: may be positive (10-20% develop autoimmune hemolytic anemia)",
                "Prognostic markers:",
                "  - FISH: del(17p) or TP53 mutation (worst prognosis, resistant to chemo), del(11q) (intermediate), del(13q) (best prognosis)",
                "  - IGHV mutation status: mutated IGHV (favorable), unmutated (poor)",
                "  - ZAP-70, CD38 expression: high = poor prognosis",
                "  - β2-microglobulin: ↑ = advanced disease",
                "Bone marrow biopsy: not required for diagnosis, but shows lymphocytic infiltration"
            ],
            imaging: [
                "CT chest/abdomen/pelvis: if staging or planning treatment (lymphadenopathy, splenomegaly)"
            ],
            differentialDiagnosis: [
                "Monoclonal B-cell lymphocytosis (MBL): CLL-like cells but <5,000/μL, no symptoms → precursor to CLL",
                "Mantle cell lymphoma: CD5+ B cell, but CD23-, aggressive, needs treatment",
                "Hairy cell leukemia: 'hairy' projections, TRAP+, splenomegaly, pancytopenia",
                "Follicular lymphoma: lymph node masses, painless lymphadenopathy, CD10+, t(14;18)",
                "Reactive lymphocytosis: polyclonal, transient, due to infection"
            ],
            management: {
                acute: [
                    "Observation ('watch and wait') if asymptomatic Rai 0-I or Binet A:",
                    "  - 30% never require treatment (indolent, slow progression)",
                    "  - Monitor CBC every 3-6 months",
                    "Indications for treatment:",
                    "  - Progressive marrow failure (worsening cytopenias)",
                    "  - Massive lymphadenopathy or splenomegaly (symptomatic)",
                    "  - Constitutional symptoms (B symptoms)",
                    "  - Autoimmune complications (AIHA, ITP)",
                    "  - Lymphocyte doubling time <6 months",
                    "First-line therapy (fit patients):",
                    "  - Chemoimmunotherapy: FCR (fludarabine, cyclophosphamide, rituximab) - young, fit patients, IGHV-mutated",
                    "  - Targeted therapy (preferred, especially del(17p)/TP53 mutation):",
                    "    • Ibrutinib (BTK inhibitor) + obinutuzumab (anti-CD20)",
                    "    • Venetoclax (BCL-2 inhibitor) + obinutuzumab",
                    "    • Acalabrutinib (BTK inhibitor, fewer side effects than ibrutinib)",
                    "Elderly/unfit patients:",
                    "  - Chlorambucil + obinutuzumab (less toxic)",
                    "  - Ibrutinib monotherapy",
                    "Autoimmune complications:",
                    "  - AIHA: prednisone, rituximab",
                    "  - ITP: IVIG, prednisone"
                ],
                chronic: [
                    "Relapsed/refractory CLL:",
                    "  - Venetoclax ± rituximab (BCL-2 inhibitor)",
                    "  - Ibrutinib or acalabrutinib (BTK inhibitors)",
                    "  - Idelalisib (PI3K inhibitor) + rituximab (if relapsed/refractory)",
                    "  - CAR T-cell therapy (investigational)",
                    "Allogeneic stem cell transplant:",
                    "  - Reserved for young, high-risk patients with del(17p)/TP53 mutation, refractory disease",
                    "  - Only potentially curative option, but high morbidity/mortality",
                    "Supportive care:",
                    "  - IVIG for recurrent infections due to hypogammaglobulinemia",
                    "  - Vaccines: pneumococcal, influenza (response suboptimal due to impaired immunity)",
                    "  - PCP prophylaxis if on fludarabine or ibrutinib (trimethoprim-sulfamethoxazole)",
                    "Monitor for Richter transformation (5-10%): CLL transforms to aggressive DLBCL → sudden lymph node enlargement, B symptoms, ↑ LDH → biopsy, treat as lymphoma"
                ]
            },
            complications: [
                "Infections: leading cause of death (hypogammaglobulinemia, T-cell dysfunction) - pneumonia, sinusitis, UTI",
                "Autoimmune cytopenias (10-20%): AIHA (most common), ITP, pure red cell aplasia",
                "Richter transformation (5-10%): transformation to aggressive DLBCL → median survival <1 year",
                "Hyperviscosity syndrome (rare, if very high lymphocyte count)",
                "Secondary malignancies (skin cancer most common)",
                "Tumor lysis syndrome (rare, can occur with treatment)"
            ],
            prognosis: "Highly variable: median survival ranges 2-20 years depending on stage and risk factors. Rai 0: median survival 10-20 years. Rai IV: 2-4 years. Del(17p)/TP53 mutation: poor prognosis, median survival 2-3 years with chemo (improved with ibrutinib/venetoclax). IGHV-mutated: favorable, slower progression. Richter transformation: poor prognosis, median survival <1 year.",
            clinicalPearls: [
                "CLL = most common adult leukemia in Western countries. Median age 70.",
                "Smudge cells (Gumprecht shadows) on peripheral smear = characteristic of CLL (fragile lymphocytes rupture during smear prep)",
                "Flow cytometry: CD5+/CD19+/CD20+ (dim), CD23+ → diagnostic. CD5 is normally T-cell marker, not B-cell.",
                "Diagnosis: absolute lymphocyte count ≥5,000 × 3 months + clonal B cells on flow",
                "Watch and wait: 30% never need treatment. Treat only if symptomatic or progressive.",
                "Hypogammaglobulinemia → recurrent infections (sinopulmonary) → leading cause of death",
                "Autoimmune complications common (10-20%): AIHA (Coombs+), ITP, pure red cell aplasia",
                "Richter transformation (5-10%): CLL → aggressive DLBCL. Sudden lymph node growth, B symptoms, ↑ LDH. Poor prognosis.",
                "Prognostic markers: del(17p)/TP53 mutation worst (resistant to chemo, use ibrutinib/venetoclax). Del(13q) best.",
                "IGHV mutation: mutated = favorable (slower progression), unmutated = poor",
                "FCR (fludarabine, cyclophosphamide, rituximab): young, fit, IGHV-mutated. High response but myelosuppression.",
                "Ibrutinib (BTK inhibitor): preferred for del(17p)/TP53 mutation. Side effects: AFib, bleeding (inhibits platelet adhesion), diarrhea.",
                "Venetoclax (BCL-2 inhibitor): effective in relapsed/refractory CLL. Risk of tumor lysis syndrome (start low, ramp up slowly).",
                "Mantle cell lymphoma mimic: also CD5+ B cell, but CD23- (CLL is CD23+), more aggressive, cyclin D1+, t(11;14)",
                "Rai staging (US): 0 = lymphocytosis only, I = +lymphadenopathy, II = +splenomegaly, III = +anemia, IV = +thrombocytopenia",
                "Monoclonal B-cell lymphocytosis (MBL): precursor to CLL, <5,000 clonal B cells, no symptoms, 1% per year progress to CLL"
            ]
        }
    },

    // ===== LYMPHOMA =====
    {
        id: "hodgkin-lymphoma",
        name: "Hodgkin Lymphoma",
        system: "hematology-oncology",
        categories: ["lymphoma"],
        symptoms: ["painless-lymphadenopathy", "fever", "night-sweats", "weight-loss"],
        tags: ["lymphoma", "reed-sternberg", "B-symptoms", "curable"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Malignant lymphoma characterized by Reed-Sternberg cells (multinucleated giant cells) in a background of inflammatory cells. Highly curable with chemotherapy and radiation.",
            pathophysiology: "Malignant Reed-Sternberg cells (CD15+/CD30+, derived from germinal center B cells) secrete cytokines → recruitment of inflammatory cells (eosinophils, histiocytes, plasma cells) → tumor microenvironment. Spreads in contiguous lymph node fashion (vs non-Hodgkin spreads non-contiguously).",
            epidemiology: "Incidence 3/100,000. Bimodal age distribution: peak 15-35 years (young adults) and >55 years. Male > female (1.5:1). EBV association in 40%.",
            riskFactors: [
                "Age: bimodal (20s and 60s)",
                "EBV infection (40% of cases, especially mixed cellularity subtype)",
                "Immunosuppression (HIV, post-transplant)",
                "Family history (first-degree relative 3-5× risk)"
            ],
            presentation: "Painless lymphadenopathy (cervical/supraclavicular most common 70-80%). B symptoms (30%): fever, drenching night sweats, weight loss >10% in 6 months. Pruritus (10-15%). Alcohol-induced lymph node pain (rare but specific). Mediastinal mass (60%): cough, chest pain, SVC syndrome.",
            physicalExam: [
                "Painless, rubbery, non-tender lymphadenopathy (cervical, supraclavicular most common)",
                "Mediastinal mass on exam (dullness to percussion)",
                "Hepatosplenomegaly (late stage)",
                "Cachexia, fever (B symptoms)"
            ],
            diagnosticCriteria: "Excisional lymph node biopsy showing Reed-Sternberg cells in appropriate cellular background.",
            labs: [
                "Excisional lymph node biopsy (NOT fine needle aspiration - need architecture):",
                "  - Reed-Sternberg cells: large multinucleated cells with 'owl's eye' nuclei, CD15+/CD30+, CD20- (usually)",
                "  - Background: inflammatory infiltrate (lymphocytes, eosinophils, histiocytes, plasma cells)",
                "Subtypes (classical Hodgkin lymphoma):",
                "  - Nodular sclerosis (70%): young women, mediastinal mass, fibrous bands, lacunar cells",
                "  - Mixed cellularity (20-25%): older age, EBV+, abundant Reed-Sternberg cells",
                "  - Lymphocyte-rich (5%): best prognosis, few Reed-Sternberg cells",
                "  - Lymphocyte-depleted (<1%): worst prognosis, HIV-associated",
                "Nodular lymphocyte-predominant Hodgkin (5%): CD20+/CD15-/CD30-, 'popcorn cells', indolent",
                "CBC: anemia (chronic disease), eosinophilia, lymphopenia (poor prognosis)",
                "ESR: elevated (prognostic marker)",
                "LDH: elevated (tumor burden)",
                "Albumin: low (poor prognosis)"
            ],
            imaging: [
                "CT chest/abdomen/pelvis with contrast: staging, mediastinal mass (bulky if >10 cm or >1/3 thoracic diameter)",
                "PET-CT: most sensitive for staging and assessing treatment response (Deauville score)",
                "CXR: mediastinal widening (60%)"
            ],
            differentialDiagnosis: [
                "Non-Hodgkin lymphoma: no Reed-Sternberg cells, non-contiguous spread",
                "Infectious mononucleosis: young adults, lymphadenopathy, atypical lymphocytes, positive monospot",
                "Sarcoidosis: bilateral hilar lymphadenopathy, non-caseating granulomas",
                "Tuberculosis: caseating granulomas, AFB stain positive"
            ],
            management: {
                acute: [
                    "Staging (Ann Arbor):",
                    "  - Stage I: single lymph node region. Stage II: ≥2 regions, same side of diaphragm",
                    "  - Stage III: both sides of diaphragm. Stage IV: extranodal (liver, bone marrow, lung)",
                    "  - A = no B symptoms, B = fever/night sweats/weight loss, X = bulky disease",
                    "Early stage favorable (IA, IIA without bulk/risk factors):",
                    "  - ABVD (doxorubicin, bleomycin, vinblastine, dacarbazine) × 2-4 cycles + involved-field radiation therapy (20 Gy)",
                    "Early stage unfavorable (IB, IIB, or bulky disease):",
                    "  - ABVD × 4-6 cycles + radiation therapy",
                    "Advanced stage (III, IV):",
                    "  - ABVD × 6 cycles (standard)",
                    "  - Escalated BEACOPP (bleomycin, etoposide, doxorubicin, cyclophosphamide, vincristine, procarbazine, prednisone): more toxic, used in Europe",
                    "  - BV-AVD (brentuximab vedotin replacing bleomycin): if high-risk, reduces pulmonary toxicity",
                    "Monitor response: PET-CT after 2 cycles (Deauville score ≤3 = good response)"
                ],
                chronic: [
                    "Relapsed/refractory Hodgkin:",
                    "  - Salvage chemotherapy: ICE (ifosfamide, carboplatin, etoposide), DHAP (dexamethasone, cytarabine, cisplatin), GDP (gemcitabine, dexamethasone, cisplatin)",
                    "  - Autologous stem cell transplant (if chemosensitive relapse)",
                    "  - Brentuximab vedotin (anti-CD30 antibody-drug conjugate): relapsed/refractory after auto-SCT",
                    "  - PD-1 inhibitors: nivolumab, pembrolizumab (checkpoint inhibitors, effective in relapsed Hodgkin)",
                    "Surveillance:",
                    "  - PET-CT at end of treatment, then clinical follow-up",
                    "  - Monitor for late effects: secondary malignancies (breast, lung, thyroid), cardiac toxicity (anthracyclines), pulmonary fibrosis (bleomycin)",
                    "Fertility preservation: discuss before chemotherapy (alkylating agents cause infertility)"
                ]
            },
            complications: [
                "B symptoms: fever, night sweats, weight loss (30%, worse prognosis)",
                "Superior vena cava syndrome (mediastinal mass)",
                "Chemotherapy toxicity: bleomycin (pulmonary fibrosis), doxorubicin (cardiotoxicity), vinblastine (neuropathy)",
                "Long-term: secondary malignancies (AML, NHL, solid tumors), cardiac disease, infertility",
                "Radiation toxicity: hypothyroidism, breast cancer (young women), coronary artery disease"
            ],
            prognosis: "Overall cure rate 80-90% (one of the most curable cancers). Early stage: >90% cure. Advanced stage: 70-80% cure. Poor prognostic factors (IPS score): male, age >45, stage IV, low albumin, low Hb, high WBC, low lymphocytes.",
            clinicalPearls: [
                "Reed-Sternberg cells: large binucleated/multinucleated cells with 'owl's eye' nuclei, CD15+/CD30+",
                "Bimodal age: peak in 20s (nodular sclerosis) and 60s (mixed cellularity)",
                "Contiguous spread: spreads to adjacent lymph node groups (vs NHL which spreads non-contiguously)",
                "B symptoms: fever, night sweats, weight loss >10%. Present in 30%, indicate worse prognosis.",
                "Alcohol-induced lymph node pain: rare but highly specific for Hodgkin lymphoma",
                "Nodular sclerosis (70%): most common, young women, mediastinal mass, fibrous bands",
                "Excisional biopsy required (NOT FNA) - need to see architecture and Reed-Sternberg cells in context",
                "ABVD: standard chemotherapy (doxorubicin, bleomycin, vinblastine, dacarbazine)",
                "Bleomycin toxicity: pulmonary fibrosis. Monitor PFTs, d/c if decline. Avoid high FiO2 (worsens toxicity).",
                "PET-CT: Deauville score ≤3 after 2 cycles ABVD = excellent prognosis",
                "Cure rate 80-90%, one of most curable cancers even in advanced stage",
                "Brentuximab vedotin: anti-CD30 antibody-drug conjugate, effective in relapsed/refractory",
                "PD-1 inhibitors (nivolumab, pembrolizumab): very effective in relapsed Hodgkin (Reed-Sternberg cells upregulate PD-L1)",
                "Late effects: secondary malignancies (breast, lung, AML), cardiac disease, hypothyroidism. Screen long-term survivors.",
                "Mediastinal bulky disease: >10 cm or >1/3 thoracic diameter. Requires radiation therapy.",
                "EBV association: 40% of cases (especially mixed cellularity subtype)"
            ]
        }
    },
    {
        id: "diffuse-large-b-cell-lymphoma",
        name: "Diffuse Large B-Cell Lymphoma (DLBCL)",
        system: "hematology-oncology",
        categories: ["lymphoma"],
        symptoms: ["rapidly-enlarging-lymph-nodes", "B-symptoms", "abdominal-mass"],
        tags: ["lymphoma", "NHL", "aggressive", "curable"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Most common type of non-Hodgkin lymphoma (30-40%), characterized by aggressive proliferation of large B cells. Curable with chemotherapy in 60-70%.",
            pathophysiology: "Clonal proliferation of large activated B cells (centroblasts/immunoblasts) → diffuse effacement of lymph node architecture. Mutations: BCL2, BCL6, MYC. 'Double-hit' (MYC + BCL2 or BCL6) or 'triple-hit' lymphomas have worse prognosis.",
            epidemiology: "Most common NHL (30-40% of NHL). Median age 65, but can occur at any age. Incidence increases with age. Male > female.",
            riskFactors: [
                "Age (median 65)",
                "Immunosuppression: HIV, post-transplant, autoimmune disease (rheumatoid arthritis, Sjögren's)",
                "EBV, HHV-8 (in some subtypes)",
                "Prior low-grade lymphoma (transformed follicular lymphoma)"
            ],
            presentation: "Rapidly enlarging painless lymphadenopathy (weeks-months, vs Hodgkin over months-years). Extranodal involvement common (40%): GI (stomach, intestine), CNS, bone, testis, thyroid. B symptoms (30%): fever, night sweats, weight loss. Bulky disease, abdominal mass.",
            physicalExam: [
                "Rapidly enlarging painless lymphadenopathy (any site)",
                "Abdominal mass, hepatosplenomegaly",
                "Waldeyer's ring involvement (tonsil, nasopharynx)",
                "Testicular mass",
                "B symptoms: fever, cachexia"
            ],
            diagnosticCriteria: "Excisional lymph node biopsy showing diffuse proliferation of large B cells (centroblasts/immunoblasts), CD20+.",
            labs: [
                "Excisional lymph node biopsy:",
                "  - Large B cells (>2× normal lymphocyte), diffuse growth pattern (effacement of normal architecture)",
                "  - Immunohistochemistry: CD20+, CD19+, often BCL2+, BCL6+",
                "  - Ki-67 proliferation index high (>40%)",
                "FISH/molecular:",
                "  - MYC rearrangement (10-15%, worse prognosis)",
                "  - BCL2 rearrangement t(14;18) (20-30%, from transformed follicular lymphoma)",
                "  - Double-hit lymphoma: MYC + BCL2 or BCL6 rearrangements (very aggressive, poor prognosis)",
                "  - Triple-hit: MYC + BCL2 + BCL6 (worst prognosis)",
                "Cell of origin (gene expression profiling):",
                "  - Germinal center B-cell (GCB) subtype: better prognosis",
                "  - Activated B-cell (ABC) subtype: worse prognosis",
                "CBC: anemia, thrombocytopenia if marrow involvement, ↑ LDH (tumor burden, poor prognosis)",
                "β2-microglobulin: ↑ (poor prognosis)",
                "HIV testing (if risk factors)"
            ],
            imaging: [
                "PET-CT: staging and response assessment (Deauville score)",
                "CT chest/abdomen/pelvis",
                "MRI brain if CNS symptoms or high-risk features (testicular, bone marrow, paranasal sinus involvement)"
            ],
            differentialDiagnosis: [
                "Hodgkin lymphoma: Reed-Sternberg cells, contiguous spread, mediastinal mass",
                "Follicular lymphoma: indolent, follicular pattern, t(14;18), CD10+",
                "Burkitt lymphoma: smaller cells, starry-sky pattern, MYC+ (100%), very high Ki-67 (>95%)",
                "Mantle cell lymphoma: CD5+, cyclin D1+, t(11;14)"
            ],
            management: {
                acute: [
                    "Staging (Ann Arbor): same as Hodgkin",
                    "Risk stratification: International Prognostic Index (IPI)",
                    "  - Age >60, stage III/IV, elevated LDH, ECOG PS ≥2, >1 extranodal site",
                    "  - 0-1 factors = low risk, 2 = low-intermediate, 3 = high-intermediate, 4-5 = high risk",
                    "Limited stage (I, II):",
                    "  - R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone) × 3-4 cycles + involved-site radiation therapy",
                    "Advanced stage (III, IV):",
                    "  - R-CHOP × 6 cycles (standard, curative in 60-70%)",
                    "  - Dose-dense R-CHOP (every 14 days instead of 21 days) if young, fit",
                    "CNS prophylaxis (high-risk patients):",
                    "  - Intrathecal methotrexate or high-dose IV methotrexate",
                    "  - Indications: testicular, paranasal sinus, bone marrow, kidney/adrenal involvement, high IPI",
                    "Double/triple-hit lymphoma:",
                    "  - More intensive regimens (DA-EPOCH-R: dose-adjusted etoposide, prednisone, vincristine, cyclophosphamide, doxorubicin, rituximab)",
                    "Tumor lysis syndrome prophylaxis: allopurinol or rasburicase, IV hydration"
                ],
                chronic: [
                    "Relapsed/refractory DLBCL:",
                    "  - Salvage chemotherapy: R-ICE, R-DHAP, R-GDP",
                    "  - Autologous stem cell transplant if chemosensitive relapse (only potential cure)",
                    "  - CAR T-cell therapy: axicabtagene ciloleucel (Yescarta), tisagenlecleucel (Kymriah) - for relapsed/refractory after ≥2 lines",
                    "  - Polatuzumab vedotin + bendamustine + rituximab (if not transplant candidate)",
                    "  - Tafasitamab + lenalidomide",
                    "Surveillance: PET-CT at end of treatment, then clinical follow-up every 3-6 months"
                ]
            },
            complications: [
                "Tumor lysis syndrome (high tumor burden, aggressive growth)",
                "CNS involvement (5-10%): headache, cranial nerve palsies, seizures",
                "Bulky disease: GI obstruction, SVC syndrome, cord compression",
                "Chemotherapy toxicity: cardiotoxicity (doxorubicin), neuropathy (vincristine), infection (rituximab, cyclophosphamide)",
                "Relapse (30-40%)"
            ],
            prognosis: "Cure rate 60-70% with R-CHOP. Low-risk IPI (0-1): 90% cure. High-risk IPI (4-5): 50% cure. Double/triple-hit lymphomas: 30-40% cure. Relapsed/refractory: poor prognosis, median survival 6-12 months without CAR T.",
            clinicalPearls: [
                "DLBCL = most common NHL (30-40%), aggressive but curable",
                "Rapidly enlarging lymph nodes (weeks-months), vs Hodgkin (slower, months-years)",
                "Extranodal involvement common (40%): GI, CNS, bone, testis, thyroid",
                "R-CHOP: standard therapy (rituximab + cyclophosphamide, doxorubicin, vincristine, prednisone), cures 60-70%",
                "IPI score: age >60, stage III/IV, ↑ LDH, poor performance status, >1 extranodal site",
                "Double-hit lymphoma: MYC + BCL2 or BCL6. Very aggressive, poor prognosis with R-CHOP → use DA-EPOCH-R.",
                "Triple-hit: MYC + BCL2 + BCL6. Worst prognosis.",
                "CNS prophylaxis: intrathecal methotrexate if testicular, paranasal sinus, bone marrow, kidney involvement",
                "CAR T-cell therapy (axicabtagene ciloleucel, tisagenlecleucel): targets CD19, effective in relapsed/refractory DLBCL",
                "Cytokine release syndrome: CAR T side effect (fever, hypotension, hypoxia) → treat with tocilizumab (anti-IL-6)",
                "Primary mediastinal B-cell lymphoma: subtype of DLBCL, young women, mediastinal mass, good prognosis",
                "Transformed follicular lymphoma: follicular → DLBCL (Richter-like transformation). Worse prognosis than de novo DLBCL.",
                "LDH: tumor burden marker, prognostic (high LDH = poor prognosis)",
                "PET-CT: Deauville score ≤3 at end of treatment = excellent prognosis, >4 = consider intensification",
                "Rituximab: anti-CD20 monoclonal antibody, added to CHOP in 2002 → improved cure rate from 40% to 60-70%",
                "Auto-SCT: only curative option for relapsed DLBCL if chemosensitive"
            ]
        }
    },
    {
        id: "follicular-lymphoma",
        name: "Follicular Lymphoma",
        system: "hematology-oncology",
        categories: ["lymphoma"],
        symptoms: ["painless-lymphadenopathy", "waxing-waning-nodes"],
        tags: ["lymphoma", "NHL", "indolent", "incurable", "t(14;18)"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Second most common NHL (20%), indolent B-cell lymphoma characterized by follicular growth pattern and t(14;18) translocation (BCL2 overexpression). Incurable but long survival.",
            pathophysiology: "t(14;18) translocation → BCL2 overexpression → inhibition of apoptosis → accumulation of malignant B cells in germinal centers. Follicular pattern (vs diffuse in DLBCL). Can transform to DLBCL (Richter-like) in 25-30%.",
            epidemiology: "Second most common NHL (20%). Median age 60. Female > male. Very rare in children/young adults.",
            riskFactors: [
                "Age (median 60)",
                "Environmental: pesticides, organic solvents"
            ],
            presentation: "Painless waxing/waning lymphadenopathy (months-years, slow growing). Often asymptomatic at diagnosis. B symptoms uncommon (10%, suggests transformation). Generalized lymphadenopathy, hepatosplenomegaly.",
            physicalExam: [
                "Painless lymphadenopathy (cervical, axillary, inguinal) - often generalized",
                "Hepatosplenomegaly",
                "Waxing/waning adenopathy over time"
            ],
            diagnosticCriteria: "Excisional lymph node biopsy showing follicular growth pattern + t(14;18) translocation.",
            labs: [
                "Lymph node biopsy:",
                "  - Follicular architecture (malignant follicles effacing normal node)",
                "  - Small cleaved lymphocytes (centrocytes) + centroblasts",
                "  - CD20+, CD10+, BCL2+ (BCL2 positive in follicles is abnormal)",
                "  - t(14;18) translocation by FISH (85-90%): BCL2 rearrangement",
                "Grading (based on centroblast count per high-power field):",
                "  - Grade 1-2: 0-15 centroblasts/hpf (indolent, most common)",
                "  - Grade 3A: >15 centroblasts/hpf with centrocytes (indolent)",
                "  - Grade 3B: sheets of centroblasts, no centrocytes (aggressive, treat like DLBCL)",
                "Bone marrow biopsy: involved in 40-70% at diagnosis (paratrabecular pattern)"
            ],
            imaging: [
                "PET-CT: staging",
                "CT chest/abdomen/pelvis: lymphadenopathy, organomegaly"
            ],
            differentialDiagnosis: [
                "Reactive follicular hyperplasia: polyclonal, BCL2- in follicles",
                "Marginal zone lymphoma: monocytoid B cells, no follicles",
                "Mantle cell lymphoma: CD5+, cyclin D1+, t(11;14), more aggressive",
                "CLL/SLL: CD5+/CD23+, diffuse pattern, smudge cells"
            ],
            management: {
                acute: [
                    "Watch and wait (asymptomatic, low tumor burden):",
                    "  - 20% never require treatment (indolent)",
                    "  - Monitor every 3-6 months",
                    "Indications for treatment:",
                    "  - B symptoms, cytopenias, bulky disease (>7 cm), rapid progression, organ dysfunction",
                    "First-line (if treatment needed):",
                    "  - Rituximab + bendamustine (preferred for older/frail)",
                    "  - R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone)",
                    "  - Obinutuzumab + chemotherapy (anti-CD20, may be superior to rituximab)",
                    "Maintenance rituximab: every 2-3 months × 2 years after induction (prolongs remission)",
                    "Radiation therapy: localized disease (stage I), palliative for symptomatic masses"
                ],
                chronic: [
                    "Relapsed follicular lymphoma (inevitable, multiple relapses expected):",
                    "  - Re-treatment with rituximab-based chemotherapy",
                    "  - Radioimmunotherapy: 90Y-ibritumomab tiuxetan (Zevalin) - anti-CD20 + radioactive isotope",
                    "  - Lenalidomide + rituximab",
                    "  - PI3K inhibitors: idelalisib, copanlisib (if ≥2 prior therapies)",
                    "  - EZH2 inhibitor: tazemetostat (if EZH2 mutation)",
                    "High-risk relapse or transformation to DLBCL:",
                    "  - Treat as DLBCL (R-CHOP)",
                    "  - Consider autologous SCT if young, fit",
                    "Surveillance: watch for transformation (sudden lymph node growth, B symptoms, ↑ LDH)"
                ]
            },
            complications: [
                "Transformation to DLBCL (25-30%, 2-3% per year): sudden lymph node growth, B symptoms, ↑ LDH, worse prognosis",
                "Bone marrow involvement → cytopenias",
                "Immunosuppression → infections (rituximab depletes B cells)",
                "Progressive disease despite treatment (refractory)"
            ],
            prognosis: "Median survival 15-20 years (indolent, long survival but incurable). FLIPI score (prognostic): age >60, stage III/IV, Hb <12, LDH elevated, >4 nodal areas. Transformation to DLBCL: worse prognosis, median survival 2-5 years.",
            clinicalPearls: [
                "Follicular lymphoma = second most common NHL (20%), indolent, incurable but long survival",
                "t(14;18) translocation (85-90%): BCL2 overexpression → inhibits apoptosis",
                "BCL2+ follicles on biopsy = abnormal (normal germinal centers are BCL2-)",
                "Follicular pattern on histology (vs diffuse in DLBCL, mantle zone pattern in MCL)",
                "Waxing/waning lymphadenopathy: characteristic of indolent lymphomas",
                "Watch and wait: 20% never need treatment, observe asymptomatic patients",
                "Incurable but median survival 15-20 years (multiple relapses, re-treat each time)",
                "Transformation to DLBCL (25-30%): sudden node growth, B symptoms, ↑ LDH → biopsy → treat as DLBCL",
                "Rituximab maintenance: after induction, continue rituximab every 2 months × 2 years → prolongs remission",
                "Grade 3B: sheets of centroblasts → treat like DLBCL (aggressive)",
                "FLIPI score: age >60, stage III/IV, Hb <12, ↑ LDH, >4 nodal areas → prognostic",
                "Bone marrow: paratrabecular infiltration (characteristic pattern)",
                "CD10+: germinal center marker, positive in follicular lymphoma",
                "Bendamustine: alkylating agent, preferred in older patients (less toxic than CHOP)",
                "Radioimmunotherapy (Zevalin): anti-CD20 antibody + 90Y radioisotope, effective in relapsed disease"
            ]
        }
    },
    {
        id: "burkitt-lymphoma",
        name: "Burkitt Lymphoma",
        system: "hematology-oncology",
        categories: ["lymphoma"],
        symptoms: ["rapidly-growing-mass", "jaw-mass", "abdominal-mass"],
        tags: ["lymphoma", "NHL", "aggressive", "MYC", "starry-sky"],
        severity: "high",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Highly aggressive B-cell lymphoma characterized by MYC translocation, very high proliferation rate, and 'starry-sky' appearance on histology. Oncologic emergency.",
            pathophysiology: "MYC translocation t(8;14), t(2;8), or t(8;22) (100%) → constitutive MYC expression → uncontrolled cell proliferation. Ki-67 >95% (fastest-growing human tumor). Apoptotic bodies phagocytosed by macrophages → 'starry-sky' pattern.",
            epidemiology: "Three variants: Endemic (Africa, children, EBV+, jaw mass), Sporadic (US/Europe, children/young adults, abdominal mass), Immunodeficiency-associated (HIV). Accounts for 30-50% of childhood lymphomas in Africa. Rare in adults.",
            riskFactors: [
                "EBV infection (endemic Burkitt, 100% EBV+)",
                "HIV/AIDS (immunodeficiency-associated)",
                "Malaria (endemic Africa)",
                "Age: children (endemic, sporadic), young adults (HIV-associated)"
            ],
            presentation: "Rapidly growing mass (doubles in days-weeks). Endemic (Africa): jaw/facial mass (60%), orbital involvement. Sporadic (US): abdominal mass (ileocecal region, ovaries), intestinal obstruction, intussusception. B symptoms common. CNS involvement (25%, poor prognosis).",
            physicalExam: [
                "Jaw mass (endemic Burkitt)",
                "Abdominal mass, distension (sporadic)",
                "Lymphadenopathy (generalized)",
                "Hepatosplenomegaly",
                "Testicular mass (boys)"
            ],
            diagnosticCriteria: "Lymph node or mass biopsy showing small non-cleaved lymphocytes with 'starry-sky' pattern + MYC translocation.",
            labs: [
                "Biopsy:",
                "  - Small non-cleaved lymphocytes (monotonous, medium-sized)",
                "  - 'Starry-sky' appearance: tingible body macrophages (phagocytosed apoptotic tumor cells) scattered among sheets of lymphoma cells",
                "  - CD20+, CD10+, BCL6+, BCL2- (important: negative BCL2 differentiates from DLBCL)",
                "  - Ki-67 >95% (near 100%, highest proliferation rate)",
                "  - MYC translocation (100%): t(8;14) most common (80%), t(2;8) or t(8;22)",
                "CBC: anemia, thrombocytopenia, ↑↑ LDH (very high, tumor burden), ↑ uric acid",
                "Tumor lysis syndrome labs: hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia, ↑ Cr",
                "Lumbar puncture: CNS involvement in 25% (contraindication to LP if mass effect or ↑ ICP)"
            ],
            imaging: [
                "CT chest/abdomen/pelvis: abdominal mass (ileocecal), lymphadenopathy",
                "MRI brain/spine: CNS involvement (25%)",
                "PET-CT: staging"
            ],
            differentialDiagnosis: [
                "DLBCL: larger cells, lower Ki-67 (<90%), BCL2+ often, MYC- (except double-hit)",
                "Lymphoblastic lymphoma/ALL: TdT+, pre-B or T-cell markers",
                "Small bowel adenocarcinoma: older age, mucin-producing"
            ],
            management: {
                acute: [
                    "Oncologic emergency (fastest-growing tumor, high risk of tumor lysis):",
                    "  - Tumor lysis syndrome prophylaxis: IV hydration, rasburicase (not allopurinol, too slow), frequent monitoring (q4-6h K, phosphate, Ca, uric acid, Cr)",
                    "  - Admit to ICU if high tumor burden",
                    "Intensive chemotherapy (high-dose, short-duration, CNS-directed):",
                    "  - Children/young adults: CODOX-M/IVAC (cyclophosphamide, vincristine, doxorubicin, methotrexate / ifosfamide, etoposide, cytarabine)",
                    "  - Hyper-CVAD (hyperfractionated cyclophosphamide, vincristine, doxorubicin, dexamethasone) alternating with high-dose methotrexate/cytarabine",
                    "  - Rituximab added to chemotherapy",
                    "CNS prophylaxis (required):",
                    "  - Intrathecal chemotherapy (methotrexate, cytarabine)",
                    "  - High-dose IV methotrexate",
                    "  - Involved CNS: intrathecal chemotherapy + cranial radiation",
                    "Short duration: 3-6 months of intensive chemo (vs DLBCL 4-6 months R-CHOP)"
                ],
                chronic: [
                    "Relapsed/refractory Burkitt (rare if achieve remission):",
                    "  - Re-induction with intensive chemotherapy",
                    "  - Autologous or allogeneic SCT if chemosensitive",
                    "  - Very poor prognosis if relapse",
                    "Surveillance: frequent follow-up, but most relapses occur within first year"
                ]
            },
            complications: [
                "Tumor lysis syndrome (nearly universal, life-threatening): hyperkalemia → arrhythmias, AKI from uric acid nephropathy, hypocalcemia → tetany/seizures",
                "CNS involvement (25%): seizures, cranial nerve palsies, meningeal lymphoma",
                "Intestinal obstruction, perforation, intussusception (abdominal Burkitt)",
                "Bone marrow involvement → pancytopenia",
                "Treatment-related toxicity: high-dose methotrexate (renal toxicity, mucositis), cyclophosphamide (hemorrhagic cystitis, cardiotoxicity)"
            ],
            prognosis: "Children/young adults with limited-stage disease: 80-90% cure with intensive chemotherapy. Advanced-stage or CNS involvement: 60-70% cure. Adults >40: worse prognosis, 40-50% cure. Relapse: very poor prognosis, <20% salvage.",
            clinicalPearls: [
                "Burkitt = fastest-growing human tumor, Ki-67 near 100%, doubles in days-weeks",
                "MYC translocation (100%): t(8;14) most common. Remember '8 and 14 go to heaven' (Burkitt).",
                "'Starry-sky' pattern: tingible body macrophages (phagocytosed apoptotic cells) scattered among lymphoma cells",
                "BCL2-: negative BCL2 helps differentiate Burkitt (BCL2-) from DLBCL (BCL2+ often)",
                "Tumor lysis syndrome: UNIVERSAL in Burkitt (large tumor burden, rapid turnover) → rasburicase, NOT allopurinol",
                "CNS prophylaxis REQUIRED: intrathecal chemo + high-dose IV methotrexate (25% have CNS involvement)",
                "Endemic Burkitt (Africa): EBV+ (100%), jaw mass, children, associated with malaria",
                "Sporadic Burkitt (US): abdominal mass (ileocecal), children/young adults, 20% EBV+",
                "HIV-associated Burkitt: young adults, extranodal, aggressive",
                "Short intensive chemotherapy (3-6 months) can cure 80-90% (vs indolent lymphomas which are incurable)",
                "Jaw mass in African child = Burkitt until proven otherwise",
                "Ileocecal mass with intussusception in child = Burkitt",
                "Rasburicase: recombinant urate oxidase, immediately lowers uric acid (vs allopurinol which takes days)",
                "High-dose methotrexate: give leucovorin rescue, monitor methotrexate levels, ensure good urine output",
                "Relapse: very poor prognosis (<20% salvage), most relapses in first year"
            ]
        }
    },
    {
        id: "mantle-cell-lymphoma",
        name: "Mantle Cell Lymphoma",
        system: "hematology-oncology",
        categories: ["lymphoma"],
        symptoms: ["lymphadenopathy", "splenomegaly", "GI-polyps"],
        tags: ["lymphoma", "NHL", "aggressive", "CD5+", "cyclin-D1", "t(11;14)"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Aggressive B-cell NHL characterized by t(11;14) translocation (cyclin D1 overexpression) and CD5+/CD23- immunophenotype. Median survival 3-5 years, generally incurable.",
            pathophysiology: "t(11;14) translocation → CCND1/cyclin D1 overexpression → unregulated cell cycle progression (G1→S transition) → uncontrolled proliferation of B cells in mantle zone of lymphoid follicles.",
            epidemiology: "Accounts for 5-7% of NHL. Median age 60-65, male predominance (3:1). Rare in young adults.",
            riskFactors: [
                "Age (median 60-65)",
                "Male sex (3:1)"
            ],
            presentation: "Widespread lymphadenopathy, splenomegaly (common). GI involvement (lymphomatous polyposis, 10-20%): multiple polyps throughout GI tract. Waldeyer's ring involvement. B symptoms (25%). Bone marrow involvement (>90%). Blood involvement (50-70%, 'leukemic phase').",
            physicalExam: [
                "Generalized lymphadenopathy",
                "Splenomegaly (50%)",
                "Hepatomegaly",
                "Waldeyer's ring involvement (tonsil/pharynx)"
            ],
            diagnosticCriteria: "Lymph node biopsy showing mantle zone pattern + CD5+/CD23- immunophenotype + cyclin D1+ or t(11;14).",
            labs: [
                "Lymph node biopsy:",
                "  - Mantle zone pattern (nodular or diffuse effacement)",
                "  - Small to medium lymphocytes with irregular nuclei",
                "  - CD20+, CD5+, CD23- (KEY: CD5+ differentiates from most NHL, CD23- differentiates from CLL)",
                "  - Cyclin D1+ (nuclear staining, >90%)",
                "  - t(11;14) translocation (90-95%): CCND1 (cyclin D1 gene) rearrangement",
                "  - Ki-67: variable (low <10% = indolent variant, high >30% = blastoid variant, aggressive)",
                "Variants:",
                "  - Classic MCL: median survival 3-5 years",
                "  - Blastoid/pleomorphic variant: large cells, high Ki-67, very aggressive (median survival 1-2 years)",
                "CBC: lymphocytosis (leukemic phase in 50%), anemia, thrombocytopenia",
                "Bone marrow: involved in >90%",
                "GI endoscopy: lymphomatous polyposis (multiple polyps throughout GI tract)"
            ],
            imaging: [
                "PET-CT: staging",
                "CT chest/abdomen/pelvis: lymphadenopathy, splenomegaly",
                "Endoscopy: if GI symptoms (lymphomatous polyposis)"
            ],
            differentialDiagnosis: [
                "CLL/SLL: CD5+/CD23+ (MCL is CD23-), smudge cells, cyclin D1-, more indolent",
                "Follicular lymphoma: CD5-, CD10+, t(14;18), follicular pattern, indolent",
                "DLBCL: larger cells, CD5-, more aggressive but curable",
                "Marginal zone lymphoma: CD5-, monocytoid cells, MALT sites"
            ],
            management: {
                acute: [
                    "Young fit patients (<65 years):",
                    "  - Intensive chemotherapy: Hyper-CVAD (cyclophosphamide, vincristine, doxorubicin, dexamethasone) alternating with high-dose methotrexate/cytarabine + rituximab",
                    "  - Alternative: Nordic regimen (rituximab, cyclophosphamide, vincristine, doxorubicin, prednisone alternating with high-dose cytarabine)",
                    "  - Consolidation: autologous stem cell transplant in first remission (prolongs remission but not curative)",
                    "  - CNS prophylaxis: intrathecal chemotherapy or high-dose methotrexate/cytarabine",
                    "Elderly/unfit patients (>65 years):",
                    "  - Bendamustine + rituximab (BR)",
                    "  - R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone)",
                    "  - VR-CAP (bortezomib, rituximab, cyclophosphamide, doxorubicin, prednisone)",
                    "Maintenance rituximab: after induction, every 2 months × 2-3 years (prolongs PFS)",
                    "Asymptomatic indolent MCL (rare, non-nodal, low Ki-67):",
                    "  - Watch and wait (similar to follicular lymphoma approach)"
                ],
                chronic: [
                    "Relapsed/refractory MCL (inevitable):",
                    "  - BTK inhibitors: ibrutinib, acalabrutinib (highly effective, median PFS 1-2 years)",
                    "  - Lenalidomide + rituximab",
                    "  - Venetoclax (BCL-2 inhibitor)",
                    "  - Bortezomib-based regimens",
                    "  - CAR T-cell therapy: brexucabtagene autoleucel (Tecartus) - approved for relapsed/refractory MCL",
                    "Allogeneic SCT:",
                    "  - Consider for young patients with chemosensitive relapse (only potential cure, but high morbidity/mortality)",
                    "Surveillance: frequent relapses expected, watch for blastoid transformation"
                ]
            },
            complications: [
                "Blastoid transformation: more aggressive, worse prognosis",
                "GI bleeding from lymphomatous polyposis",
                "CNS involvement (5%, especially blastoid variant)",
                "Bone marrow failure → cytopenias",
                "Treatment resistance (inevitable relapse)"
            ],
            prognosis: "Median survival 3-5 years (aggressive but incurable). Blastoid variant: 1-2 years. Indolent variant: >10 years. MIPI score (prognostic): age, performance status, LDH, WBC. Autologous SCT in first remission may prolong survival to 7-10 years but not curative.",
            clinicalPearls: [
                "Mantle cell lymphoma = CD5+ B-cell NHL (like CLL) but CD23- (unlike CLL)",
                "t(11;14) translocation (90-95%): cyclin D1 (CCND1) overexpression → unregulated cell cycle",
                "Cyclin D1+: nuclear staining, diagnostic for MCL (>90% cases)",
                "Mantle zone pattern: lymphoma cells surround residual germinal centers",
                "Aggressive but incurable: median survival 3-5 years (vs DLBCL which is aggressive but curable)",
                "Lymphomatous polyposis: multiple polyps throughout GI tract (colon, stomach, small bowel), pathognomonic for MCL",
                "Bone marrow involvement >90% at diagnosis (vs other NHL where less common)",
                "Blastoid variant: large blast-like cells, high Ki-67 (>30%), very aggressive (median survival 1-2 years)",
                "Ibrutinib: BTK inhibitor, highly effective in relapsed MCL (ORR 70%, median PFS 1-2 years)",
                "CAR T (brexucabtagene autoleucel): approved for relapsed/refractory MCL, targets CD19",
                "Auto-SCT in first remission: prolongs survival to 7-10 years but not curative (vs auto-SCT in DLBCL which can cure)",
                "Allo-SCT: only potential cure, but high morbidity/mortality, reserved for young fit patients",
                "Hyper-CVAD + rituximab: intensive regimen for young patients, includes CNS prophylaxis",
                "CNS prophylaxis: high-dose methotrexate/cytarabine or intrathecal chemo (CNS involvement 5%)",
                "MIPI score: prognostic index (age, ECOG, LDH, WBC)",
                "Watch and wait: only for asymptomatic indolent variant (non-nodal, Ki-67 <10%, very rare)"
            ]
        }
    },
    {
        id: "marginal-zone-lymphoma",
        name: "Marginal Zone Lymphoma",
        system: "hematology-oncology",
        categories: ["lymphoma"],
        symptoms: ["painless-lymphadenopathy", "extranodal-mass", "splenomegaly"],
        tags: ["lymphoma", "NHL", "indolent", "MALT", "extranodal"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Indolent extranodal B-cell NHL arising from mucosa-associated lymphoid tissue (MALT). Three subtypes: extranodal MALT, nodal, splenic. Often associated with chronic inflammation.",
            pathophysiology: "Chronic antigenic stimulation (H. pylori, autoimmune diseases, HCV) → chronic inflammation → reactive lymphoid proliferation → acquired genetic mutations → autonomous lymphoma growth (no longer requires antigen). Cells resemble marginal zone B cells (memory B cells at edge of follicles).",
            epidemiology: "Accounts for 5-8% of NHL. Median age 60. Extranodal MALT most common subtype (50-70%). Geographic variation (H. pylori prevalence affects gastric MALT incidence).",
            riskFactors: [
                "Gastric MALT: H. pylori infection (90%)",
                "Salivary gland MALT: Sjögren's syndrome",
                "Thyroid MALT: Hashimoto's thyroiditis",
                "Ocular adnexal MALT: Chlamydia psittaci (controversial)",
                "Pulmonary MALT: autoimmune diseases",
                "HCV infection (splenic marginal zone lymphoma)",
                "Immunosuppression"
            ],
            presentation: "Extranodal MALT: localized mass at MALT site (stomach, salivary gland, thyroid, lung, ocular adnexa, skin). Gastric MALT (most common): dyspepsia, epigastric pain, nausea. Splenic MZL: splenomegaly, cytopenias. Nodal MZL: lymphadenopathy. Often indolent, slow-growing.",
            physicalExam: [
                "Extranodal mass (stomach, salivary gland, thyroid, orbit, lung)",
                "Splenomegaly (splenic MZL, often massive)",
                "Lymphadenopathy (nodal MZL)",
                "Signs of autoimmune disease (Sjögren's, Hashimoto's)"
            ],
            diagnosticCriteria: "Biopsy of involved site showing marginal zone B-cell infiltrate + immunophenotype (CD20+/CD5-/CD10-/CD23-).",
            labs: [
                "Tissue biopsy (stomach, lymph node, spleen, etc.):",
                "  - Small lymphocytes with monocytoid appearance (abundant pale cytoplasm)",
                "  - Marginal zone pattern (surrounds reactive follicles)",
                "  - Lymphoepithelial lesions (invasion of epithelium by lymphoma cells, characteristic of MALT)",
                "  - CD20+, CD5-, CD10-, CD23-, cyclin D1-",
                "  - Monoclonal (kappa or lambda light chain restriction)",
                "Cytogenetics (variable, no single defining translocation):",
                "  - t(11;18) API2-MALT1 (gastric MALT, 20-40%): associated with antibiotic resistance",
                "  - t(14;18) IGH-MALT1 (not same as follicular lymphoma BCL2)",
                "  - t(1;14) BCL10",
                "  - Trisomy 3, 18",
                "Gastric MALT: H. pylori testing (serology, stool antigen, urea breath test, biopsy)",
                "HCV testing (if splenic MZL)",
                "Autoimmune workup: ANA, RF, SSA/SSB (Sjögren's), anti-thyroid antibodies"
            ],
            imaging: [
                "Endoscopy (gastric MALT): mucosal thickening, erosions, ulcers",
                "CT chest/abdomen/pelvis: staging, splenomegaly",
                "PET-CT: less avid than aggressive lymphomas (indolent)"
            ],
            differentialDiagnosis: [
                "Reactive lymphoid hyperplasia: polyclonal, no monoclonality",
                "Follicular lymphoma: CD10+, t(14;18) BCL2, follicular pattern",
                "Mantle cell lymphoma: CD5+, cyclin D1+, t(11;14), more aggressive",
                "CLL/SLL: CD5+/CD23+, diffuse pattern, blood involvement",
                "Gastritis: H. pylori gastritis without lymphoma"
            ],
            management: {
                acute: [
                    "Gastric MALT lymphoma (localized, H. pylori+):",
                    "  - H. pylori eradication: triple therapy (PPI + clarithromycin + amoxicillin) × 14 days",
                    "  - 70-80% complete remission with antibiotics alone (if t(11;18)-, stage IE)",
                    "  - Re-check endoscopy at 3, 6, 12 months (complete response may take 12-18 months)",
                    "  - Radiation therapy if H. pylori- or persistent after eradication",
                    "Localized extranodal MALT (non-gastric):",
                    "  - Radiation therapy (20-30 Gy): highly effective for localized disease",
                    "  - Treat underlying condition: Sjögren's, Hashimoto's, HCV",
                    "Splenic MZL:",
                    "  - Observation if asymptomatic",
                    "  - Splenectomy if symptomatic (massive splenomegaly, cytopenias)",
                    "  - HCV treatment (if HCV+): may induce lymphoma regression",
                    "  - Rituximab ± chemotherapy if disseminated",
                    "Advanced/disseminated disease:",
                    "  - Watch and wait if asymptomatic (indolent)",
                    "  - Rituximab monotherapy or rituximab + chemotherapy (bendamustine, chlorambucil, CVP) if symptomatic"
                ],
                chronic: [
                    "Relapsed MALT lymphoma:",
                    "  - Re-treatment with rituximab-based therapy",
                    "  - Repeat radiation therapy (if localized relapse)",
                    "  - Ibrutinib (BTK inhibitor) for relapsed/refractory",
                    "Transformation to DLBCL (5-10%):",
                    "  - Treat as DLBCL (R-CHOP)",
                    "Surveillance: endoscopy for gastric MALT, imaging for other sites"
                ]
            },
            complications: [
                "Transformation to DLBCL (5-10%): sudden mass growth, B symptoms, ↑ LDH",
                "Gastric perforation (rare, from lymphoma or treatment)",
                "Autoimmune complications (Sjögren's can lead to higher-grade lymphoma)",
                "Dissemination (bone marrow, other MALT sites)"
            ],
            prognosis: "Excellent (indolent, median survival >10 years). Localized gastric MALT with H. pylori eradication: 70-80% cure. Transformation to DLBCL worsens prognosis. Splenic MZL: good prognosis, median survival >10 years.",
            clinicalPearls: [
                "Marginal zone lymphoma = indolent extranodal NHL arising from MALT (mucosa-associated lymphoid tissue)",
                "Three subtypes: extranodal MALT (most common, stomach #1), nodal MZL, splenic MZL",
                "Gastric MALT: H. pylori-associated (90%). Antibiotics CURE 70-80% of localized disease!",
                "Lymphoepithelial lesions: lymphoma cells invading epithelial glands, characteristic of MALT lymphoma",
                "MALT sites: stomach (most common), salivary gland, thyroid, lung, ocular adnexa, skin",
                "H. pylori eradication: triple therapy (PPI + clarithromycin + amoxicillin) × 14 days → regression takes 12-18 months",
                "t(11;18) API2-MALT1: predicts antibiotic resistance (won't respond to H. pylori eradication alone) → needs radiation/chemotherapy",
                "Sjögren's syndrome → salivary gland MALT lymphoma → 5% transform to DLBCL (higher-grade)",
                "Hashimoto's thyroiditis → thyroid MALT lymphoma → can transform to thyroid DLBCL",
                "Splenic MZL: massive splenomegaly, villous lymphocytes in blood, HCV-associated (treat HCV → lymphoma regression)",
                "Radiation therapy: very effective for localized MALT (20-30 Gy, >90% local control)",
                "CD5-/CD10-/CD23-: helps differentiate from CLL (CD5+/CD23+) and follicular (CD10+)",
                "Indolent: watch and wait if asymptomatic, median survival >10 years",
                "Transformation to DLBCL: 5-10%, sudden mass growth, treat as DLBCL",
                "Ocular adnexal MALT: orbit, conjunctiva. Chlamydia psittaci association controversial. Treat with radiation.",
                "Monocytoid B cells: abundant pale cytoplasm, characteristic appearance"
            ]
        }
    },

    // ===== MYELOPROLIFERATIVE DISORDERS =====
    {
        id: "polycythemia-vera",
        name: "Polycythemia Vera (PV)",
        system: "hematology-oncology",
        categories: ["myeloproliferative-disorders"],
        symptoms: ["headache", "pruritus", "erythromelalgia", "plethora"],
        tags: ["myeloproliferative", "JAK2", "erythrocytosis", "thrombosis"],
        severity: "medium",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Myeloproliferative neoplasm characterized by clonal proliferation of erythroid, myeloid, and megakaryocytic lineages with predominant erythrocytosis. JAK2 V617F mutation in 95%.",
            pathophysiology: "JAK2 V617F mutation (95%) or JAK2 exon 12 mutation (5%) → constitutive JAK-STAT signaling → EPO-independent erythropoiesis → ↑ RBC mass → hyperviscosity → thrombosis risk. Also ↑ WBC, ↑ platelets.",
            epidemiology: "Incidence 1-2/100,000. Median age 60. Male = female. Rare <40 years.",
            riskFactors: [
                "Age (median 60)",
                "JAK2 V617F mutation (acquired, not inherited)"
            ],
            presentation: "Hyperviscosity symptoms: headache, dizziness, blurred vision, tinnitus. Pruritus (40%, especially after warm bath - aquagenic pruritus, from histamine release). Erythromelalgia (burning pain in hands/feet, responds to aspirin). Plethora (ruddy complexion). Thrombosis (arterial or venous): stroke, MI, DVT, Budd-Chiari. Gout (high cell turnover). Peptic ulcers (↑ histamine).",
            physicalExam: [
                "Plethora (ruddy, red face)",
                "Splenomegaly (70%)",
                "Hepatomegaly (30%)",
                "Erythromelalgia (red, warm, painful extremities)",
                "Hypertension"
            ],
            diagnosticCriteria: "WHO 2016 criteria: Major: (1) Hb >16.5 g/dL (men) or >16 g/dL (women) OR Hct >49% (men) or >48% (women), (2) Bone marrow hypercellularity with trilineage proliferation, (3) JAK2 V617F or JAK2 exon 12 mutation. Minor: Subnormal EPO. Diagnosis requires all 3 major OR 2 major + minor.",
            labs: [
                "CBC: ↑ Hb/Hct (primary finding), ↑ RBC mass, often ↑ WBC, ↑ platelets (50%)",
                "  - Hb >16.5 g/dL (men) or >16 g/dL (women)",
                "  - Hct >49% (men) or >48% (women)",
                "JAK2 V617F mutation: positive in 95% (exon 14)",
                "JAK2 exon 12 mutation: positive in 5% (if JAK2 V617F negative)",
                "EPO level: low or low-normal (key differentiator from secondary polycythemia where EPO is high)",
                "Bone marrow biopsy: hypercellular (>80%), panmyelosis (trilineage proliferation), ↓ iron stores (iron deficiency common from phlebotomy or GI bleeding)",
                "Uric acid: ↑ (high cell turnover)",
                "Vitamin B12: ↑ (↑ transcobalamin from granulocytes)",
                "Leukocyte alkaline phosphatase (LAP): ↑ (vs CML where ↓)"
            ],
            imaging: [
                "Abdominal ultrasound: splenomegaly, assess for Budd-Chiari syndrome (hepatic vein thrombosis)"
            ],
            differentialDiagnosis: [
                "Secondary polycythemia: ↑ EPO (hypoxia, smoking, COPD, sleep apnea, renal cell carcinoma, hepatocellular carcinoma, renal cysts, EPO-secreting tumors)",
                "Relative polycythemia (Gaisböck syndrome): ↓ plasma volume, normal RBC mass, dehydration, diuretics",
                "Other MPNs: ET (↑ platelets predominant), PMF (fibrosis, teardrop cells), CML (↑ WBC, Ph chromosome)",
                "Congenital polycythemia: VHL mutations, high-affinity hemoglobin variants"
            ],
            management: {
                acute: [
                    "Risk stratification:",
                    "  - Low risk: age <60, no thrombosis history → goal Hct <45%",
                    "  - High risk: age ≥60 or prior thrombosis → goal Hct <45%, add cytoreductive therapy",
                    "Phlebotomy (all patients):",
                    "  - Goal: Hct <45% (reduces thrombosis risk by 50%)",
                    "  - Frequency: weekly initially until goal reached, then PRN",
                    "  - Caution: causes iron deficiency (intentional, limits erythropoiesis), but can worsen thrombocytosis",
                    "Aspirin 81 mg daily (all patients unless contraindicated):",
                    "  - Reduces thrombosis and erythromelalgia",
                    "  - Avoid if platelets >1.5 million (acquired von Willebrand syndrome → bleeding risk)",
                    "Cytoreductive therapy (high-risk patients: age ≥60 or prior thrombosis):",
                    "  - Hydroxyurea: first-line cytoreductive agent, targets WBC and platelets",
                    "  - Interferon-alpha or pegylated interferon (younger patients, pregnancy-safe)",
                    "  - Ruxolitinib (JAK1/2 inhibitor): if intolerant/resistant to hydroxyurea, controls splenomegaly and symptoms",
                    "Symptom management:",
                    "  - Pruritus: antihistamines, SSRIs (paroxetine), interferon, ruxolitinib",
                    "  - Hyperuricemia: allopurinol"
                ],
                chronic: [
                    "Monitoring: CBC every 3-6 months, maintain Hct <45%",
                    "Thrombosis prophylaxis: aspirin, Hct control, cytoreduction if high-risk",
                    "Transformation: monitor for progression to myelofibrosis (10-15%) or AML (5-10%, increased with alkylating agents)",
                    "Avoid: iron supplementation (worsens polycythemia), smoking (worsens hypoxia)"
                ]
            },
            complications: [
                "Thrombosis (arterial or venous): stroke, MI, DVT, PE, Budd-Chiari syndrome (hepatic vein thrombosis, classic association with PV)",
                "Bleeding: paradoxical, if platelets >1.5 million (acquired vWD from ADAMTS13 consumption)",
                "Transformation to myelofibrosis (post-PV MF, 10-15%): splenomegaly, cytopenias, fibrosis",
                "Transformation to AML (5-10%, risk ↑ with alkylating agents like chlorambucil, busulfan)",
                "Peptic ulcer disease, gout"
            ],
            prognosis: "Median survival 15-20 years with treatment. Low-risk: near-normal life expectancy. High-risk or untreated: increased thrombosis mortality. Transformation to MF or AML worsens prognosis.",
            clinicalPearls: [
                "PV = JAK2 V617F mutation (95%) → ↑ RBCs (predominant), ↑ WBC, ↑ platelets → hyperviscosity and thrombosis",
                "Aquagenic pruritus: itching after warm bath/shower, characteristic of PV (40%), from histamine release",
                "Erythromelalgia: burning pain, redness, warmth in hands/feet → responds to aspirin",
                "Plethora: ruddy red face from ↑ RBCs",
                "EPO low or low-normal: key to differentiate PV (low EPO) from secondary polycythemia (high EPO)",
                "Hct goal <45%: reduces thrombosis risk by 50% (CYTO-PV trial)",
                "Phlebotomy: first-line for all patients, causes intentional iron deficiency to limit erythropoiesis",
                "Budd-Chiari syndrome: hepatic vein thrombosis, classic association with PV (and PNH)",
                "JAK2 V617F: acquired somatic mutation (not inherited), present in 95% of PV, also in 50% of ET and PMF",
                "Hydroxyurea: first-line cytoreductive therapy for high-risk patients (age ≥60 or prior thrombosis)",
                "Ruxolitinib: JAK1/2 inhibitor, for hydroxyurea-resistant PV, controls splenomegaly and symptoms",
                "Transformation: 10-15% → myelofibrosis (post-PV MF), 5-10% → AML (especially with alkylating agents)",
                "High platelets (>1.5 million): acquired vWD → bleeding paradoxically (ADAMTS13 consumed by excess platelets)",
                "Avoid aspirin if platelets >1.5 million (bleeding risk)",
                "LAP score ↑ in PV (vs CML where ↓)"
            ]
        }
    },
    {
        id: "essential-thrombocythemia",
        name: "Essential Thrombocythemia (ET)",
        system: "hematology-oncology",
        categories: ["myeloproliferative-disorders"],
        symptoms: ["headache", "erythromelalgia", "thrombosis", "bleeding"],
        tags: ["myeloproliferative", "JAK2", "thrombocytosis", "platelets"],
        severity: "low",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Myeloproliferative neoplasm characterized by sustained thrombocytosis (>450K) with megakaryocytic proliferation. JAK2, CALR, or MPL mutations.",
            pathophysiology: "JAK2 V617F (50%), CALR mutation (25%), or MPL mutation (5%) → clonal megakaryocytic proliferation → ↑ platelets. 20% triple-negative. Thrombosis from platelet activation and microvascular dysfunction.",
            epidemiology: "Incidence 1-2/100,000. Median age 60. Female > male (2:1). Can occur in young adults.",
            riskFactors: [
                "Age (median 60, but can occur in young)",
                "Female sex (2:1)"
            ],
            presentation: "Often asymptomatic (50%, incidental thrombocytosis). Vasomotor symptoms: headache, lightheadedness, visual disturbances, erythromelalgia (burning hands/feet). Thrombosis (arterial or venous): stroke, MI, DVT. Bleeding (paradoxical, if platelets >1-1.5 million): mucocutaneous, GI, acquired vWD. Splenomegaly (mild, 20-50%).",
            physicalExam: [
                "Erythromelalgia (red, warm, painful hands/feet)",
                "Splenomegaly (mild, 20-50%)",
                "Signs of thrombosis or bleeding"
            ],
            diagnosticCriteria: "WHO 2016: Platelet count ≥450K + bone marrow megakaryocytic proliferation + JAK2/CALR/MPL mutation + exclusion of other myeloid neoplasms (CML, PV, PMF, MDS).",
            labs: [
                "CBC: ↑ platelets (≥450K, often 600K-1 million), normal Hb, normal WBC",
                "Peripheral smear: large platelets, platelet clumps, megakaryocyte fragments",
                "Mutations:",
                "  - JAK2 V617F: positive in 50%",
                "  - CALR (calreticulin) mutation: 25% (mutually exclusive with JAK2)",
                "  - MPL (thrombopoietin receptor) mutation: 5%",
                "  - Triple-negative: 20% (no JAK2, CALR, or MPL mutation)",
                "Bone marrow biopsy: hypercellular with megakaryocytic proliferation, large mature megakaryocytes with hyperlobulated nuclei ('stag horn' or 'cloud-like')",
                "Iron studies, ferritin: rule out iron deficiency (reactive thrombocytosis)",
                "CRP: rule out inflammation (reactive thrombocytosis)",
                "BCR-ABL: negative (rule out CML)"
            ],
            imaging: [
                "Abdominal ultrasound: splenomegaly (if symptomatic)"
            ],
            differentialDiagnosis: [
                "Reactive (secondary) thrombocytosis: infection, inflammation, iron deficiency, post-splenectomy, malignancy, bleeding, surgery. Platelets usually <1 million, resolves when underlying cause treated.",
                "Other MPNs: PV (↑ RBCs), PMF (fibrosis, teardrop cells, leukoerythroblastosis), CML (Ph chromosome)",
                "MDS: dysplastic features, cytopenias",
                "CML: Ph chromosome, ↑ WBC, basophilia"
            ],
            management: {
                acute: [
                    "Risk stratification (for thrombosis):",
                    "  - Very low risk: age <60, no JAK2 V617F, no thrombosis history → observation",
                    "  - Low risk: age <60, JAK2 V617F+, no thrombosis history → aspirin",
                    "  - Intermediate risk: age ≥60, no JAK2 V617F, no thrombosis history → aspirin ± cytoreduction",
                    "  - High risk: age ≥60 or prior thrombosis → aspirin + cytoreduction",
                    "Aspirin 81 mg daily (most patients):",
                    "  - Reduces thrombosis and erythromelalgia",
                    "  - Avoid if platelets >1.5 million + bleeding symptoms (acquired vWD)",
                    "Cytoreductive therapy (high-risk: age ≥60 or prior thrombosis, or extreme thrombocytosis >1.5 million):",
                    "  - Hydroxyurea: first-line, target platelets <400-450K",
                    "  - Anagrelide: platelet-specific, if hydroxyurea intolerant (side effects: headache, palpitations, heart failure)",
                    "  - Interferon-alpha or pegylated interferon: younger patients, pregnancy",
                    "Extreme thrombocytosis (>1.5 million) with bleeding:",
                    "  - Hold aspirin (acquired vWD → bleeding risk)",
                    "  - Cytoreduction to lower platelets",
                    "Pregnancy:",
                    "  - Aspirin throughout pregnancy",
                    "  - LMWH if prior thrombosis or high-risk",
                    "  - Interferon if cytoreduction needed (hydroxyurea/anagrelide teratogenic)"
                ],
                chronic: [
                    "Monitoring: CBC every 3-6 months",
                    "Goal: maintain platelets <400-450K in high-risk patients",
                    "Transformation: monitor for progression to myelofibrosis (5-10%) or AML (<5%)",
                    "Low-risk patients: may never need treatment (excellent prognosis, near-normal life expectancy)"
                ]
            },
            complications: [
                "Thrombosis (arterial or venous): stroke, MI, DVT, PE, digital ischemia",
                "Bleeding (paradoxical, if platelets >1-1.5 million): acquired vWD from ADAMTS13 consumption, mucocutaneous bleeding, GI bleeding",
                "Transformation to myelofibrosis (post-ET MF, 5-10%)",
                "Transformation to AML (<5%)",
                "Pregnancy complications: miscarriage, placental insufficiency"
            ],
            prognosis: "Near-normal life expectancy in low-risk patients. Median survival >20 years. CALR-mutated: best prognosis. JAK2 V617F: higher thrombosis risk. Triple-negative: intermediate risk. Transformation to MF or AML worsens prognosis.",
            clinicalPearls: [
                "ET = sustained thrombocytosis (≥450K) with megakaryocytic proliferation and JAK2/CALR/MPL mutation",
                "JAK2 V617F (50%), CALR (25%), MPL (5%), triple-negative (20%)",
                "CALR mutation: best prognosis, lower thrombosis risk, younger age, higher platelets",
                "Erythromelalgia: burning pain in hands/feet, responds to aspirin (platelet-mediated microvascular occlusion)",
                "Paradox: ↑ thrombosis (if platelets <1.5 million) AND ↑ bleeding (if platelets >1.5 million, acquired vWD)",
                "Acquired vWD: extreme thrombocytosis → ADAMTS13 consumption → vWF cleavage → bleeding",
                "Aspirin: for most patients (reduces thrombosis), but AVOID if platelets >1.5 million + bleeding",
                "Hydroxyurea: first-line cytoreduction for high-risk (age ≥60 or prior thrombosis)",
                "Anagrelide: platelet-specific agent, alternative to hydroxyurea. Side effects: palpitations, headache, heart failure.",
                "Risk stratification: very low/low risk → observation or aspirin alone. High risk → aspirin + cytoreduction.",
                "Reactive thrombocytosis: platelets usually <1 million, resolves when cause treated (infection, iron deficiency, inflammation)",
                "Bone marrow: 'stag horn' or 'cloud-like' megakaryocytes (hyperlobulated nuclei)",
                "Pregnancy: high risk for miscarriage. Treat with aspirin ± LMWH. Interferon if cytoreduction needed (hydroxyurea teratogenic).",
                "Transformation: 5-10% → post-ET myelofibrosis, <5% → AML",
                "Low-risk young patients: may never need treatment, excellent prognosis",
                "Very different from PV: ET is mostly ↑ platelets, PV is mostly ↑ RBCs (though PV can also have ↑ platelets)"
            ]
        }
    },
    {
        id: "primary-myelofibrosis",
        name: "Primary Myelofibrosis (PMF)",
        system: "hematology-oncology",
        categories: ["myeloproliferative-disorders"],
        symptoms: ["fatigue", "night-sweats", "weight-loss", "abdominal-fullness"],
        tags: ["myeloproliferative", "JAK2", "fibrosis", "teardrop-cells"],
        severity: "high",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Myeloproliferative neoplasm characterized by bone marrow fibrosis, extramedullary hematopoiesis (massive splenomegaly), leukoerythroblastosis, and teardrop cells. Worst prognosis among MPNs.",
            pathophysiology: "JAK2 V617F (50%), CALR (25%), or MPL (5%) mutation → dysregulated megakaryocyte proliferation → release of fibrogenic cytokines (TGF-β, PDGF) → bone marrow fibrosis → marrow failure → extramedullary hematopoiesis (spleen, liver) → massive splenomegaly.",
            epidemiology: "Incidence 0.5-1/100,000. Median age 65. Male = female. Least common MPN.",
            riskFactors: [
                "Age (median 65)",
                "Can occur de novo (primary) or transform from PV or ET (post-PV/ET myelofibrosis, secondary)"
            ],
            presentation: "Constitutional symptoms (50%): fatigue, night sweats, weight loss, low-grade fever. Massive splenomegaly (90%): abdominal fullness, early satiety, LUQ pain (splenic infarct). Hepatomegaly (50%). Cytopenias: anemia (fatigue, dyspnea), thrombocytopenia (bleeding). Bone pain. Portal hypertension, ascites (from extramedullary hematopoiesis in liver).",
            physicalExam: [
                "Massive splenomegaly (90%, often extends into pelvis)",
                "Hepatomegaly (50%)",
                "Cachexia (constitutional symptoms)",
                "Pallor (anemia)",
                "Petechiae (thrombocytopenia)"
            ],
            diagnosticCriteria: "WHO 2016: Major: (1) Megakaryocytic proliferation and atypia with reticulin/collagen fibrosis, (2) JAK2/CALR/MPL mutation or other clonal marker, (3) Exclusion of PV, ET, CML, MDS. Minor: anemia, leukocytosis, palpable splenomegaly, LDH ↑, leukoerythroblastosis. Requires all 3 major + ≥1 minor.",
            labs: [
                "CBC: anemia (common), variable WBC (can be ↑ or ↓), variable platelets (initially ↑, later ↓ as fibrosis worsens)",
                "Peripheral smear (diagnostic clues):",
                "  - Teardrop cells (dacrocytes, from RBCs squeezing through fibrotic marrow)",
                "  - Leukoerythroblastosis: nucleated RBCs + immature myeloid cells (left shift) in blood (from extramedullary hematopoiesis)",
                "  - Giant platelets, platelet anisocytosis",
                "Mutations:",
                "  - JAK2 V617F: 50%",
                "  - CALR mutation: 25%",
                "  - MPL mutation: 5%",
                "  - Triple-negative: 20% (worse prognosis)",
                "  - High molecular risk mutations: ASXL1, EZH2, SRSF2, IDH1/2 (poor prognosis)",
                "Bone marrow biopsy:",
                "  - Hypercellular with megakaryocytic proliferation and atypia",
                "  - Reticulin fibrosis (grade 2-3) or collagen fibrosis on reticulin stain",
                "  - 'Dry tap' (unable to aspirate marrow due to fibrosis)",
                "LDH: ↑ (high cell turnover)",
                "Uric acid: ↑"
            ],
            imaging: [
                "Abdominal CT or ultrasound: massive splenomegaly (often >20 cm), hepatomegaly"
            ],
            differentialDiagnosis: [
                "Secondary myelofibrosis: post-PV or post-ET myelofibrosis (same treatment)",
                "Other causes of marrow fibrosis: CML, hairy cell leukemia, metastatic cancer, tuberculosis, autoimmune (SLE)",
                "CML: Ph chromosome, younger age, ↑ basophils, ↓ LAP",
                "MDS with fibrosis: dysplastic features, cytopenias",
                "Splenic lymphoma: lymphadenopathy, no teardrop cells"
            ],
            management: {
                acute: [
                    "Risk stratification: IPSS or DIPSS score (age, WBC, Hb, blasts, constitutional symptoms) → determines prognosis and treatment",
                    "  - Low risk: median survival >10 years → observation or symptom management",
                    "  - Intermediate-1: median survival 6-8 years → symptom management",
                    "  - Intermediate-2/high risk: median survival 2-4 years → consider JAK inhibitor or transplant",
                    "Anemia management:",
                    "  - Transfusion support (if Hb <7-8)",
                    "  - Danazol (androgen): stimulates erythropoiesis",
                    "  - Erythropoietin (if EPO level low)",
                    "  - Thalidomide or lenalidomide + prednisone (if transfusion-dependent)",
                    "Splenomegaly/constitutional symptoms:",
                    "  - Ruxolitinib (JAK1/2 inhibitor): reduces spleen size (35% of patients), improves symptoms, prolongs survival",
                    "  - Fedratinib (JAK2 inhibitor): alternative if ruxolitinib intolerant",
                    "  - Hydroxyurea: cytoreduction for symptomatic splenomegaly or high WBC/platelets",
                    "  - Splenectomy or splenic radiation: if refractory symptomatic splenomegaly (high morbidity/mortality)",
                    "Allogeneic stem cell transplant:",
                    "  - ONLY curative option",
                    "  - Consider for intermediate-2/high-risk, age <70, good performance status",
                    "  - High transplant-related mortality (30-40%), but offers cure"
                ],
                chronic: [
                    "Monitoring: CBC, symptoms, spleen size every 3-6 months",
                    "Transformation: monitor for progression to AML (blast phase, 10-20%, poor prognosis)",
                    "Supportive care: transfusions, allopurinol for hyperuricemia",
                    "Clinical trials for high-risk patients"
                ]
            },
            complications: [
                "Transformation to AML (blast phase, 10-20%): poor prognosis, median survival <6 months",
                "Portal hypertension: from extramedullary hematopoiesis in liver, varices, ascites",
                "Splenic complications: infarction, rupture (rare)",
                "Cytopenias: anemia, thrombocytopenia → transfusion-dependence, bleeding",
                "Gout, hyperuricemia",
                "Infections (from cytopenias, splenectomy)"
            ],
            prognosis: "Worst prognosis among MPNs. Median survival 5-7 years. Low-risk: >10 years. High-risk (triple-negative, high molecular risk mutations, transfusion-dependent): 2-4 years. Transformation to AML: <6 months. Allo-SCT offers cure but high mortality.",
            clinicalPearls: [
                "PMF = bone marrow fibrosis + massive splenomegaly + teardrop cells + leukoerythroblastosis",
                "Teardrop cells (dacrocytes): pathognomonic for myelofibrosis (RBCs squeezed through fibrotic marrow)",
                "Leukoerythroblastosis: nucleated RBCs + immature myeloid cells in blood (from extramedullary hematopoiesis)",
                "'Dry tap': unable to aspirate bone marrow due to fibrosis (diagnostic clue)",
                "Massive splenomegaly: from extramedullary hematopoiesis (spleen compensating for failed marrow)",
                "JAK2 V617F (50%), CALR (25%), MPL (5%), triple-negative (20%)",
                "Triple-negative: worse prognosis than mutated",
                "High molecular risk mutations (ASXL1, EZH2, SRSF2, IDH1/2): poor prognosis, higher transformation to AML",
                "Ruxolitinib: JAK1/2 inhibitor, reduces spleen size, improves symptoms, prolongs survival (first drug to show survival benefit in PMF)",
                "Allo-SCT: ONLY cure, but high mortality (30-40%). Reserve for intermediate-2/high-risk, young, fit patients.",
                "DIPSS score: age >65, Hb <10, WBC >25K, blasts ≥1%, constitutional symptoms. Predicts survival.",
                "Post-PV/ET myelofibrosis: secondary MF after PV or ET, treated same as primary PMF",
                "Splenectomy: for refractory splenomegaly, but high morbidity (infection, thrombosis, portal hypertension worsens)",
                "Transformation to AML (blast phase): 10-20%, poor prognosis (median survival <6 months), treat with AML chemotherapy",
                "Portal hypertension: from extramedullary hematopoiesis in liver sinusoids → varices, ascites",
                "Reticulin stain: shows fibrosis in bone marrow (reticulin or collagen fibrosis grade 2-3 required for diagnosis)"
            ]
        }
    },
    {
        id: "myelodysplastic-syndrome",
        name: "Myelodysplastic Syndrome (MDS)",
        system: "hematology-oncology",
        categories: ["myeloproliferative-disorders"],
        symptoms: ["fatigue", "weakness", "dyspnea", "pallor", "bleeding", "bruising", "recurrent infections"],
        tags: ["hematology", "bone-marrow-failure", "preleukemic", "macrocytic-anemia", "pancytopenia"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Clonal hematopoietic stem cell disorder characterized by ineffective hematopoiesis → cytopenias (especially anemia), dysplastic changes in bone marrow cells, and risk of transformation to AML (10-30%). Considered 'preleukemia' due to genetic instability and blast accumulation over time.",
            pathophysiology: "Acquired mutations in hematopoietic stem cells (commonly SF3B1, TET2, ASXL1, DNMT3A, TP53) → dysplastic maturation and apoptosis of progenitor cells in bone marrow (ineffective hematopoiesis) → peripheral cytopenias despite hypercellular marrow. Genetic instability → accumulation of additional mutations → progression to AML (blasts ≥20%).",
            epidemiology: "Median age 70 years (rare <50). Incidence 4-5 per 100,000. More common in men. Risk factors: prior chemotherapy (alkylating agents, topoisomerase inhibitors) or radiation (therapy-related MDS), benzene exposure, smoking.",
            riskFactors: [
                "Age >60 (most common)",
                "Prior chemotherapy (alkylating agents like cyclophosphamide; topoisomerase inhibitors like etoposide) → therapy-related MDS, worse prognosis",
                "Prior radiation therapy",
                "Benzene or heavy metal exposure",
                "Smoking",
                "Congenital syndromes: Fanconi anemia, Down syndrome, familial platelet disorder"
            ],
            presentation: [
                "Anemia (most common): fatigue, weakness, pallor, dyspnea on exertion",
                "Thrombocytopenia: easy bruising, petechiae, mucosal bleeding (epistaxis, gingival bleeding)",
                "Neutropenia: recurrent bacterial infections (pneumonia, UTI, cellulitis)",
                "Pancytopenia: combination of above symptoms",
                "Asymptomatic: often discovered incidentally on routine CBC",
                "B symptoms (low-grade fever, night sweats, weight loss): may occur but less common than in AML"
            ],
            physicalExam: [
                "Pallor (anemia)",
                "Petechiae, purpura, ecchymoses (thrombocytopenia)",
                "Splenomegaly: mild, in minority of patients (contrast with MPNs where splenomegaly is prominent)",
                "No lymphadenopathy (unlike leukemia/lymphoma)",
                "Signs of infection if neutropenic"
            ],
            diagnosticCriteria: "WHO 2016 classification requires: (1) Persistent cytopenia (Hb <10, ANC <1.8K, platelets <100K), (2) Dysplasia in ≥10% of cells in ≥1 myeloid lineage (erythroid, myeloid, megakaryocytic) on bone marrow, (3) <20% blasts (≥20% = AML), (4) Exclusion of other causes (B12/folate deficiency, alcohol, medications). Subtypes: MDS with ring sideroblasts (MDS-RS), MDS with multilineage dysplasia, MDS with excess blasts (MDS-EB).",
            labs: [
                "CBC: macrocytic anemia (MCV >100), thrombocytopenia, neutropenia (pancytopenia common)",
                "Peripheral smear: macrocytes, ovalocytes, hypogranular neutrophils, pseudo-Pelger-Huët cells (hypolobated nuclei), circulating blasts (<20%)",
                "Reticulocyte count: inappropriately low for degree of anemia (ineffective erythropoiesis)",
                "Iron studies: ↑ ferritin (ineffective erythropoiesis → iron overload), ↑ transferrin saturation",
                "B12, folate: normal (exclude other causes of macrocytic anemia)",
                "EPO level: often elevated (but cells don't respond due to dysplasia)",
                "LDH: may be mildly elevated (cell turnover)"
            ],
            imaging: [
                "Usually not required for diagnosis",
                "CT chest/abdomen/pelvis: if lymphadenopathy or organomegaly on exam (to rule out lymphoma or other malignancy)"
            ],
            differentialDiagnosis: [
                "Aplastic anemia: pancytopenia but hypocellular marrow (vs hypercellular in MDS), no dysplasia",
                "Megaloblastic anemia (B12/folate deficiency): macrocytic anemia with hypersegmented neutrophils, corrects with replacement",
                "AML: blasts ≥20% (vs <20% in MDS)",
                "Myelofibrosis: teardrop cells, dry tap, marked splenomegaly, JAK2/CALR/MPL mutations",
                "Alcohol-induced bone marrow suppression: macrocytosis, vacuolated erythroid precursors, improves with abstinence",
                "Medication-induced: methotrexate, hydroxyurea, azathioprine → macrocytosis and dysplasia",
                "Paroxysmal nocturnal hemoglobinuria (PNH): hemolysis + cytopenias, flow cytometry shows CD55/CD59 deficiency"
            ],
            management: {
                acute: [
                    "Transfusion support: PRBCs for symptomatic anemia (Hb <7-8), platelets if bleeding or platelets <10K",
                    "Iron chelation: if >20 units PRBCs transfused (deferoxamine, deferasirox) to prevent iron overload (cardiac, hepatic toxicity)",
                    "Infection management: antibiotics for neutropenic fever, G-CSF (filgrastim) if severe neutropenia"
                ],
                chronic: [
                    "Risk stratification: IPSS-R score (blasts, cytogenetics, cytopenias) → low risk vs high risk",
                    "Low-risk MDS (IPSS-R <3.5): supportive care + disease-modifying therapy",
                    "- Erythropoietin (EPO) or darbepoetin: if EPO level <500 and no del(5q), improves anemia in 20-30%",
                    "- Lenalidomide: if del(5q) cytogenetic abnormality, transfusion independence in 60-70%, thrombocytopenia common side effect",
                    "- Luspatercept: if ring sideroblasts (SF3B1 mutation), improves anemia",
                    "High-risk MDS (IPSS-R ≥3.5): hypomethylating agents or allogeneic stem cell transplant",
                    "- Azacitidine or decitabine: hypomethylating agents, improve survival and delay AML transformation in high-risk MDS",
                    "- Allogeneic stem cell transplant: ONLY curative therapy, consider in younger patients (<65-70) with high-risk disease, 40-50% cure rate",
                    "Growth factors: G-CSF (filgrastim) for neutropenia, EPO for anemia (if low-risk)"
                ]
            },
            complications: [
                "Progression to AML: 10-30% over 1-5 years (higher risk with TP53 mutations, complex karyotype, elevated blasts)",
                "Bleeding: from thrombocytopenia (intracranial hemorrhage if platelets <10K)",
                "Infections: from neutropenia (pneumonia, sepsis)",
                "Iron overload: from chronic transfusions → cardiac dysfunction, liver cirrhosis, diabetes (treat with chelation)",
                "Bone marrow failure: progressive cytopenias despite treatment"
            ],
            prognosis: "Median survival varies by IPSS-R: low-risk 5-8 years, intermediate 3-5 years, high-risk <1 year. Adverse prognostic factors: TP53 mutation (very poor, median survival 6-12 months), complex karyotype (≥3 abnormalities), elevated blasts (especially >10%), severe cytopenias, therapy-related MDS (worse than de novo). Allogeneic stem cell transplant is ONLY curative option.",
            clinicalPearls: [
                "MDS = ineffective hematopoiesis: hypercellular marrow but peripheral cytopenias (contrast with aplastic anemia: hypocellular marrow + cytopenias)",
                "Ring sideroblasts (MDS-RS): iron-laden mitochondria encircling nucleus on Prussian blue stain, associated with SF3B1 mutation, better prognosis, treat with luspatercept",
                "Del(5q) MDS: isolated deletion of chromosome 5q, excellent response to lenalidomide (60-70% transfusion independence)",
                "Pseudo-Pelger-Huët cells: neutrophils with hypolobated nuclei (look like 'pince-nez' eyeglasses), classic dysplastic finding in MDS",
                "IPSS-R (Revised International Prognostic Scoring System): incorporates blast %, cytogenetics, and cytopenias → guides treatment (low-risk = supportive, high-risk = transplant)",
                "Therapy-related MDS (t-MDS): after chemotherapy (especially alkylating agents) or radiation, presents 5-10 years later, worse prognosis, often has TP53 mutations and complex karyotype",
                "Hypomethylating agents (azacitidine, decitabine): improve survival in high-risk MDS by promoting differentiation and apoptosis of dysplastic cells, but NOT curative"
            ]
        }
    },
    {
        id: "waldenstrom-macroglobulinemia",
        name: "Waldenström Macroglobulinemia",
        system: "hematology-oncology",
        categories: ["plasma-cell-disorders"],
        symptoms: ["fatigue", "bleeding", "blurred vision", "headache", "nosebleeds", "weight loss", "lymphadenopathy"],
        tags: ["hematology", "lymphoma", "IgM", "hyperviscosity", "paraprotein", "lymphoplasmacytic"],
        severity: "moderate",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Lymphoplasmacytic lymphoma (LPL) characterized by monoclonal IgM paraprotein secretion → hyperviscosity syndrome, cryoglobulinemia, and lymphadenopathy. MYD88 L265P mutation present in 90-95% of cases. Indolent B-cell malignancy distinct from multiple myeloma (which produces IgG/IgA, not IgM).",
            pathophysiology: "MYD88 L265P mutation (90-95%) → constitutive activation of NF-κB pathway → B-cell proliferation and differentiation into IgM-secreting lymphoplasmacytic cells. CXCR4 mutation (30-40%) confers resistance to ibrutinib. Monoclonal IgM accumulation → hyperviscosity (blurred vision, bleeding, neurologic symptoms), cryoglobulinemia (Raynaud's, purpura), and tissue infiltration (lymph nodes, bone marrow, spleen).",
            epidemiology: "Median age 70 years. Rare (<1% of hematologic malignancies). Slightly more common in men. 20% have family history of WM or related B-cell disorders.",
            riskFactors: [
                "Age >60",
                "Family history of WM or B-cell lymphoproliferative disorders (20%)",
                "IgM MGUS (precursor condition, 1-2% annual risk of progression to WM)"
            ],
            presentation: [
                "Hyperviscosity syndrome (30%): blurred vision, headache, dizziness, epistaxis, mucosal bleeding, confusion, altered mental status",
                "Anemia: fatigue, pallor (normocytic anemia from bone marrow infiltration)",
                "B symptoms: fever, night sweats, weight loss (25%)",
                "Lymphadenopathy (15-20%): painless, generalized",
                "Hepatosplenomegaly (20-30%)",
                "Peripheral neuropathy (20%): from anti-MAG antibody (IgM targets myelin-associated glycoprotein) → demyelinating neuropathy",
                "Cryoglobulinemia: Raynaud's phenomenon, acrocyanosis, purpura, glomerulonephritis with cold exposure",
                "Bleeding diathesis: IgM coating platelets and interfering with coagulation factors"
            ],
            physicalExam: [
                "Fundoscopy: 'sausage-link' retinal veins (venous dilation and segmentation from hyperviscosity)",
                "Retinal hemorrhages (hyperviscosity)",
                "Lymphadenopathy: painless, rubbery (15-20%)",
                "Hepatosplenomegaly (20-30%)",
                "Purpura (cryoglobulinemia or thrombocytopenia)",
                "Peripheral neuropathy: glove-and-stocking sensory loss, diminished DTRs"
            ],
            diagnosticCriteria: "Revised WHO criteria: (1) IgM monoclonal paraprotein (any amount), (2) ≥10% lymphoplasmacytic infiltration in bone marrow, (3) Intertrabecular pattern of infiltration, (4) Immunophenotype: surface IgM+, CD19+, CD20+, CD22+, CD25+, CD27+. MYD88 L265P mutation supportive (90-95%). Exclude other IgM-producing lymphomas.",
            labs: [
                "SPEP/immunofixation: IgM monoclonal spike (M-spike), often >3 g/dL",
                "Serum IgM quantification: elevated (often >3000 mg/dL, normal <150)",
                "Serum viscosity: if >4.0 cP (normal 1.4-1.8) → symptomatic hyperviscosity",
                "CBC: normocytic anemia, rouleaux formation on smear (RBCs stack like coins from ↑ proteins)",
                "β2-microglobulin: prognostic (elevated = worse prognosis)",
                "LDH: may be elevated (tumor burden)",
                "Cryoglobulins: if symptoms of cryoglobulinemia",
                "Bone marrow biopsy: ≥10% lymphoplasmacytic cells, immunophenotyping, MYD88 L265P testing",
                "BMP: renal function (cryoglobulinemia can cause glomerulonephritis)",
                "Peripheral neuropathy workup: anti-MAG antibodies if neuropathy present"
            ],
            imaging: [
                "CT chest/abdomen/pelvis: lymphadenopathy, hepatosplenomegaly (20-30%)",
                "No lytic bone lesions (contrast with multiple myeloma)"
            ],
            differentialDiagnosis: [
                "Multiple myeloma: IgG or IgA paraprotein (not IgM), lytic bone lesions (CRAB criteria), plasma cells (not lymphoplasmacytic)",
                "IgM MGUS: IgM <3 g/dL, <10% lymphoplasmacytic cells, no symptoms, no end-organ damage",
                "Marginal zone lymphoma: can produce IgM but lacks MYD88 L265P, different immunophenotype",
                "Chronic lymphocytic leukemia (CLL): CD5+, CD23+ (vs CD5-, CD23- in WM), no IgM spike",
                "Cryoglobulinemia (non-malignant): hepatitis C-associated, mixed cryoglobulins, no bone marrow lymphoplasmacytic infiltration"
            ],
            management: {
                acute: [
                    "Hyperviscosity syndrome (medical emergency): plasmapheresis URGENTLY to reduce IgM and improve symptoms (blurred vision, bleeding, altered mental status)",
                    "Transfusion support: PRBCs for symptomatic anemia (Hb <7-8), avoid if hyperviscosity present (can worsen)",
                    "Cryoglobulinemia: avoid cold exposure, treat underlying WM"
                ],
                chronic: [
                    "Indications for treatment ('symptomatic WM'): hyperviscosity, anemia (Hb <10), thrombocytopenia, bulky lymphadenopathy/organomegaly, symptomatic neuropathy, cryoglobulinemia, amyloidosis",
                    "First-line therapy (MYD88 L265P mutated, CXCR4 wild-type): Ibrutinib (BTK inhibitor) ± rituximab, excellent response rate 90%+",
                    "First-line therapy (CXCR4 mutated or ibrutinib-intolerant): Bendamustine + rituximab (BR regimen), or DRC (dexamethasone, rituximab, cyclophosphamide)",
                    "Rituximab monotherapy: avoid initially (can cause IgM flare → worsening hyperviscosity), combine with chemotherapy",
                    "Plasmapheresis: for hyperviscosity symptoms, temporary measure while starting systemic therapy",
                    "Watch-and-wait: if asymptomatic and no end-organ damage (similar to CLL), median time to treatment 5-7 years"
                ]
            },
            complications: [
                "Hyperviscosity syndrome: blurred vision, bleeding, stroke, altered mental status (most common serious complication)",
                "Transformation to high-grade lymphoma: rare (1-2%), Richter transformation",
                "Peripheral neuropathy: anti-MAG-related demyelinating neuropathy, can be progressive",
                "Amyloidosis: AL type (light chain), rare complication (1-5%)",
                "Cryoglobulinemia: vasculitis, glomerulonephritis, skin ulcers",
                "Bing-Neel syndrome: rare CNS infiltration by lymphoplasmacytic cells → confusion, ataxia, cranial neuropathies"
            ],
            prognosis: "Median survival 10-12 years. Indolent disease with chronic relapsing course. Adverse prognostic factors: age >65, β2-microglobulin >3 mg/L, hemoglobin <11.5 g/dL, platelet count <100K, elevated LDH (IPSS-WM score). MYD88 wild-type (5-10%): worse prognosis, more aggressive. Ibrutinib has significantly improved outcomes in MYD88-mutated disease.",
            clinicalPearls: [
                "WM = IgM paraprotein + lymphoplasmacytic lymphoma. Multiple myeloma = IgG/IgA + plasma cells + lytic bone lesions. WM does NOT have bone lesions.",
                "MYD88 L265P mutation: present in 90-95% of WM, highly specific, predicts excellent response to ibrutinib",
                "Hyperviscosity syndrome: IgM is pentamer (largest immunoglobulin) → ↑ serum viscosity more than IgG. Symptoms occur when viscosity >4.0 cP → plasmapheresis urgently.",
                "'Sausage-link' retinal veins on fundoscopy: pathognomonic for hyperviscosity",
                "IgM flare: rituximab can transiently increase IgM in first 1-3 months → worsening hyperviscosity. Avoid rituximab monotherapy initially; combine with chemotherapy or delay until IgM controlled.",
                "Anti-MAG neuropathy: IgM targets myelin-associated glycoprotein → slowly progressive demyelinating neuropathy. Treat underlying WM (ibrutinib, rituximab).",
                "CXCR4 mutation (30-40%): confers resistance to ibrutinib → use bendamustine + rituximab instead",
                "Bing-Neel syndrome: CNS involvement in WM (rare), presents with confusion, ataxia, cranial nerve palsies. MRI shows periventricular white matter lesions. CSF shows lymphoplasmacytic cells."
            ]
        }
    },
    {
        id: "mgus",
        name: "MGUS (Monoclonal Gammopathy of Undetermined Significance)",
        system: "hematology-oncology",
        categories: ["plasma-cell-disorders"],
        symptoms: ["asymptomatic"],
        tags: ["hematology", "paraprotein", "precursor", "asymptomatic", "IgG", "IgM", "IgA"],
        severity: "mild",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Asymptomatic premalignant clonal plasma cell disorder characterized by monoclonal protein (M-protein) in serum or urine WITHOUT evidence of end-organ damage (no myeloma, lymphoma, or amyloidosis). Precursor to multiple myeloma (1% annual risk), Waldenström macroglobulinemia (IgM MGUS), or AL amyloidosis.",
            pathophysiology: "Clonal expansion of plasma cells producing monoclonal immunoglobulin (IgG 70%, IgM 15%, IgA 12%, biclonal 3%). Genetic mutations accumulate over time (KRAS, NRAS, MYC translocations) → potential progression to multiple myeloma (1% per year), WM (if IgM), or AL amyloidosis. Majority remain stable (70-80% never progress).",
            epidemiology: "Prevalence increases with age: 3% of adults >50 years, 5% of adults >70. More common in African Americans (2x). Most common cause of monoclonal protein on SPEP (far more common than multiple myeloma).",
            riskFactors: [
                "Age >50 (prevalence increases with age)",
                "African American ethnicity (2× risk vs Caucasian)",
                "Family history of MGUS or multiple myeloma"
            ],
            presentation: [
                "Asymptomatic: discovered incidentally on SPEP done for unrelated reasons (e.g., elevated total protein, high ESR, unexplained anemia workup)",
                "No symptoms of myeloma (no bone pain, anemia, renal failure, hypercalcemia)",
                "No symptoms of hyperviscosity, lymphadenopathy, or neuropathy (if present, consider WM or other lymphoproliferative disorder)"
            ],
            physicalExam: [
                "Normal physical exam (by definition)",
                "No lymphadenopathy, hepatosplenomegaly, or bone tenderness"
            ],
            diagnosticCriteria: "International Myeloma Working Group criteria: (1) Serum M-protein <3 g/dL, (2) Clonal bone marrow plasma cells <10%, (3) No end-organ damage (no CRAB criteria: hyperCalcemia, Renal failure, Anemia, Bone lesions), (4) No other B-cell lymphoproliferative disorder. Subtypes: IgG MGUS (most common), IgA MGUS, IgM MGUS (risk of WM), light-chain MGUS.",
            labs: [
                "SPEP (serum protein electrophoresis): M-spike <3 g/dL (usually <1.5 g/dL)",
                "Immunofixation: identifies M-protein type (IgG, IgA, IgM, kappa vs lambda light chain)",
                "Serum free light chains (FLC): kappa/lambda ratio may be abnormal, but not severely (vs myeloma where ratio >100 or <0.01)",
                "CBC: normal hemoglobin (>10 g/dL), normal platelets (vs anemia/thrombocytopenia in myeloma)",
                "BMP: normal creatinine, normal calcium (vs renal failure/hypercalcemia in myeloma)",
                "24-hour urine protein electrophoresis (UPEP): Bence Jones protein may be present but <500 mg/24h",
                "Bone marrow biopsy: NOT routinely required unless clinical suspicion for myeloma (clonal plasma cells <10% if done)",
                "β2-microglobulin: normal (vs elevated in myeloma)"
            ],
            imaging: [
                "Skeletal survey or whole-body CT: NOT routinely required for MGUS (no lytic lesions by definition)",
                "Consider if bone pain or elevated calcium (to rule out myeloma)"
            ],
            differentialDiagnosis: [
                "Multiple myeloma: M-protein >3 g/dL or clonal plasma cells ≥10% or CRAB criteria (end-organ damage)",
                "Smoldering multiple myeloma (SMM): M-protein ≥3 g/dL or clonal plasma cells 10-60%, but NO end-organ damage (intermediate between MGUS and myeloma, higher progression risk 10% per year)",
                "Waldenström macroglobulinemia: IgM M-protein + lymphoplasmacytic lymphoma + symptoms (hyperviscosity, lymphadenopathy)",
                "AL amyloidosis: monoclonal protein + tissue deposition (heart, kidney, liver, nerves) → organ dysfunction",
                "Chronic lymphocytic leukemia (CLL): lymphocytosis, smudge cells, lymphadenopathy (can have paraprotein)",
                "Reactive polyclonal hypergammaglobulinemia: broad-based increase in gammaglobulins (vs sharp M-spike in MGUS), seen in chronic infections, autoimmune disease, liver disease"
            ],
            management: {
                acute: [
                    "No treatment required (asymptomatic, no end-organ damage)",
                    "Education: explain low risk of progression (1% per year), importance of monitoring"
                ],
                chronic: [
                    "Surveillance: annual SPEP, serum free light chains, CBC, BMP, calcium",
                    "Risk stratification (Mayo Clinic criteria): high-risk MGUS → ≥2 of: M-protein ≥1.5 g/dL, non-IgG type (IgA or IgM), abnormal FLC ratio. High-risk = 5-10% progression over 10 years (vs 5% for low-risk).",
                    "Follow-up schedule: low-risk → annual monitoring, high-risk → every 6 months",
                    "Indications to repeat bone marrow or imaging: ↑ M-protein >25%, new symptoms (bone pain, fatigue), anemia, hypercalcemia, renal dysfunction",
                    "No role for prophylactic chemotherapy or bisphosphonates"
                ]
            },
            complications: [
                "Progression to multiple myeloma: 1% per year (cumulative 10% at 10 years, 20% at 20 years)",
                "Progression to Waldenström macroglobulinemia: if IgM MGUS, 1-2% per year",
                "Progression to AL amyloidosis: 0.3% per year",
                "Increased fracture risk: slight increase even without myeloma (2-fold vs general population)",
                "Peripheral neuropathy: rare, can occur with IgM MGUS (anti-MAG neuropathy)",
                "Acquired von Willebrand disease: rare, M-protein binds vWF → bleeding"
            ],
            prognosis: "Majority (70-80%) never progress. Median time to progression (if it occurs) is 10-15 years. Overall survival similar to age-matched controls without MGUS. High-risk MGUS (M-protein ≥1.5, non-IgG, abnormal FLC ratio) has 60% risk of progression at 20 years (vs 15% for low-risk).",
            clinicalPearls: [
                "MGUS is NOT cancer, but a precursor condition. 1% annual progression risk to multiple myeloma.",
                "Most common cause of M-spike on SPEP (prevalence 3% in adults >50). Rule out multiple myeloma with: M-protein <3 g/dL, no CRAB criteria, plasma cells <10%.",
                "CRAB criteria (myeloma-defining events): hyperCalcemia (>11 mg/dL), Renal failure (Cr >2 or CrCl <40), Anemia (Hb <10), Bone lesions (lytic lesions on imaging). If ANY are present → not MGUS, it's myeloma.",
                "Mayo Clinic risk stratification: M-protein ≥1.5 g/dL, non-IgG type (IgA/IgM), abnormal FLC ratio. 0 factors = low risk (5% progression at 20y), ≥2 factors = high risk (60% progression at 20y).",
                "Light-chain MGUS: no heavy chain (IgG/IgA/IgM), only free kappa or lambda. Higher risk of progression to AL amyloidosis (0.3% per year) vs myeloma.",
                "IgM MGUS: risk of progression to Waldenström macroglobulinemia (1-2% per year). Check for lymphadenopathy, hepatosplenomegaly, hyperviscosity symptoms.",
                "No role for treatment or bone-directed therapy (bisphosphonates) in MGUS. Monitor and treat only if progression to myeloma.",
                "Distinguish from smoldering myeloma (SMM): MGUS has M-protein <3 g/dL and plasma cells <10%. SMM has M-protein ≥3 g/dL or plasma cells 10-60%, but still no CRAB criteria. SMM has higher progression risk (10% per year)."
            ]
        }
    },
    {
        id: "amyloidosis",
        name: "Amyloidosis (AL Amyloidosis)",
        system: "hematology-oncology",
        categories: ["plasma-cell-disorders"],
        symptoms: ["fatigue", "weight loss", "dyspnea", "edema", "paresthesias", "diarrhea", "macroglossia"],
        tags: ["hematology", "light-chain", "restrictive-cardiomyopathy", "nephrotic-syndrome", "neuropathy", "paraprotein"],
        severity: "severe",
        acuity: "chronic",
        pageType: "disease",
        detail: {
            definition: "Systemic deposition of misfolded monoclonal immunoglobulin light chains (kappa or lambda) as insoluble amyloid fibrils in tissues → progressive organ dysfunction. AL (light chain) amyloidosis is most common type (primary amyloidosis), associated with plasma cell dyscrasia (multiple myeloma, MGUS). Distinct from AA amyloidosis (chronic inflammation) and ATTR amyloidosis (transthyretin, hereditary or senile).",
            pathophysiology: "Clonal plasma cells produce abnormal free light chains (kappa or lambda, lambda >> kappa in AL) → misfolding into β-pleated sheets → extracellular deposition as amyloid fibrils in organs (heart, kidney, liver, GI, nerves). Amyloid deposits → tissue architecture disruption and organ dysfunction. Heart: restrictive cardiomyopathy, arrhythmias. Kidney: nephrotic syndrome, renal failure. Nerves: axonal neuropathy.",
            epidemiology: "Median age 65 years. Rare (8-12 per million per year). Associated with plasma cell dyscrasias: 10-15% have overt multiple myeloma, 50% have MGUS, remainder have low clonal burden. Lambda light chain predominates (75% vs 25% kappa, opposite of myeloma where kappa > lambda).",
            riskFactors: [
                "MGUS or smoldering myeloma (50% of AL amyloidosis patients have underlying MGUS)",
                "Multiple myeloma (10-15% of AL amyloidosis patients have myeloma)",
                "Age >60",
                "Lambda light chain predominance (vs kappa)"
            ],
            presentation: [
                "Cardiac (50%): dyspnea on exertion, orthopnea, edema (restrictive cardiomyopathy), syncope (arrhythmias, heart block), fatigue",
                "Renal (30%): edema, foamy urine (nephrotic syndrome), fatigue (renal failure)",
                "Peripheral neuropathy (20%): paresthesias (glove-and-stocking), autonomic dysfunction (orthostatic hypotension, early satiety, diarrhea/constipation, erectile dysfunction)",
                "GI involvement (10%): macroglossia (enlarged tongue, pathognomonic), dysphagia, early satiety, diarrhea, GI bleeding, hepatomegaly",
                "Soft tissue: periorbital purpura ('raccoon eyes', especially after Valsalva like coughing/straining), shoulder pad sign (amyloid deposition in deltoids)",
                "Bleeding diathesis: factor X deficiency (amyloid binds factor X) → easy bruising, mucosal bleeding",
                "Weight loss, fatigue (nonspecific)"
            ],
            physicalExam: [
                "Macroglossia (enlarged, stiff tongue with lateral indentations): pathognomonic for AL amyloidosis",
                "Periorbital purpura ('raccoon eyes'): spontaneous or after minor trauma/Valsalva",
                "Hepatomegaly (20-30%): firm, nontender",
                "Peripheral edema (cardiac or renal involvement)",
                "Orthostatic hypotension (autonomic neuropathy)",
                "Jugular venous distension (restrictive cardiomyopathy)",
                "S4 gallop, soft S1 (cardiac amyloidosis)",
                "Peripheral neuropathy: glove-and-stocking sensory loss, diminished DTRs"
            ],
            diagnosticCriteria: "Requires: (1) Tissue biopsy showing amyloid (Congo red stain → apple-green birefringence under polarized light), (2) Amyloid typing (immunohistochemistry or mass spectrometry) confirming light chain origin (kappa or lambda), (3) Evidence of clonal plasma cell disorder (monoclonal protein on SPEP/UPEP or abnormal serum free light chain ratio or bone marrow clonal plasma cells). Preferred biopsy sites: abdominal fat pad (easiest, 70-80% sensitive), bone marrow, affected organ (kidney, heart).",
            labs: [
                "Serum free light chains (FLC): MOST SENSITIVE screening test, abnormal kappa/lambda ratio in 90%+, ↑ involved light chain (usually lambda)",
                "SPEP/UPEP + immunofixation: detect monoclonal protein in 50-70% (often low or undetectable, vs high in myeloma)",
                "24-hour urine protein: nephrotic range proteinuria (>3.5 g/day) if renal involvement",
                "BNP or NT-proBNP: markedly elevated if cardiac involvement (restrictive cardiomyopathy), prognostic",
                "Troponin I or T: elevated if cardiac involvement, prognostic",
                "Bone marrow biopsy: clonal plasma cells (usually <10%, vs ≥10% in myeloma), Congo red stain on marrow specimen",
                "Alkaline phosphatase: may be elevated (liver involvement)",
                "CBC: anemia if renal failure or myeloma",
                "BMP: elevated creatinine if renal involvement"
            ],
            imaging: [
                "Echocardiography: thickened ventricular walls (despite low voltage on ECG, 'pseudo-hypertrophy'), biatrial enlargement, small pericardial effusion, 'sparkling' granular appearance of myocardium, restrictive filling pattern (E/A ratio >2), reduced longitudinal strain (with apical sparing on strain imaging)",
                "ECG: low voltage QRS (<0.5 mV in limb leads) despite thick ventricles on echo, pseudo-infarct pattern (Q waves), heart block, atrial fibrillation",
                "Cardiac MRI: late gadolinium enhancement (circumferential subendocardial pattern, diffuse), helps differentiate from hypertrophic cardiomyopathy",
                "Fat pad biopsy: easiest, 70-80% sensitive (fine needle aspirate of abdominal subcutaneous fat → Congo red stain)",
                "Technetium-99m pyrophosphate (PYP) scan: cardiac uptake suggests ATTR amyloidosis (vs AL), helps differentiate types"
            ],
            differentialDiagnosis: [
                "ATTR amyloidosis (transthyretin): hereditary or senile, presents with cardiomyopathy and neuropathy, NO monoclonal protein, PYP scan positive, treated with tafamidis (stabilizes TTR)",
                "AA amyloidosis (secondary): chronic inflammation (RA, IBD, chronic infection like TB, FMF), serum amyloid A protein deposits, treat underlying inflammation",
                "Multiple myeloma without amyloidosis: high M-protein (>3 g/dL), lytic bone lesions, ≥10% plasma cells, no amyloid on biopsy",
                "Nephrotic syndrome (other causes): diabetes, minimal change, FSGS → no monoclonal protein, no cardiac involvement, kidney biopsy shows specific glomerular disease",
                "Restrictive cardiomyopathy (other causes): sarcoidosis, hemochromatosis, eosinophilic myocarditis → endomyocardial biopsy differentiates",
                "Hypertrophic cardiomyopathy (HCM): thick ventricles but HIGH voltage on ECG (vs low voltage in amyloid), asymmetric septal hypertrophy, no systemic symptoms"
            ],
            management: {
                acute: [
                    "Heart failure management: diuretics (furosemide) for volume overload, AVOID digoxin (binds amyloid fibrils → toxicity), AVOID calcium channel blockers (bind amyloid → hypotension)",
                    "Arrhythmia management: pacemaker/ICD if high-degree heart block or ventricular arrhythmias",
                    "Renal failure: dialysis if ESRD, hold nephrotoxic agents",
                    "Bleeding: if factor X deficiency, fresh frozen plasma or recombinant factor VIIa for severe bleeding"
                ],
                chronic: [
                    "Chemotherapy to reduce clonal plasma cells and light chain production (goal: deep hematologic response → organ stabilization/improvement):",
                    "- CyBorD (cyclophosphamide, bortezomib, dexamethasone): first-line, bortezomib-based regimens most effective, 60-70% hematologic response",
                    "- Daratumumab + CyBorD: for higher-risk or refractory disease, anti-CD38 monoclonal antibody",
                    "- Melphalan + dexamethasone: older regimen, less commonly used now",
                    "Autologous stem cell transplant (ASCT): in selected younger patients (<65-70) with good performance status and limited cardiac involvement (BNP <5000, troponin <0.06), 40-50% achieve complete hematologic response, improves survival",
                    "Supportive care:",
                    "- Diuretics (furosemide) for volume overload",
                    "- Midodrine or fludrocortisone for orthostatic hypotension (autonomic neuropathy)",
                    "- AVOID ACE inhibitors/ARBs (can cause severe hypotension in cardiac amyloidosis)",
                    "- Nutrition support (GI involvement can cause malnutrition)",
                    "Organ transplant:",
                    "- Heart transplant: consider if isolated cardiac involvement and complete hematologic response on chemotherapy (rare, high-risk)",
                    "- Kidney transplant: after achieving hematologic response, can consider if isolated renal involvement"
                ]
            },
            complications: [
                "Cardiac: heart failure (most common cause of death, median survival <6 months if advanced), arrhythmias (atrial fibrillation, ventricular tachycardia, heart block), sudden cardiac death",
                "Renal: nephrotic syndrome → hypoalbuminemia, edema, hyperlipidemia, thromboembolism risk. Progression to ESRD requiring dialysis.",
                "Autonomic neuropathy: severe orthostatic hypotension, syncope, GI dysmotility",
                "Bleeding: factor X deficiency (amyloid binds factor X) → spontaneous bleeding, GI bleeding",
                "Hepatic: hepatomegaly, cholestasis, portal hypertension (rare)",
                "GI: malabsorption, chronic diarrhea, GI bleeding, obstruction"
            ],
            prognosis: "Median survival 12-18 months if untreated. Survival determined by cardiac involvement (Mayo staging based on BNP and troponin): Stage I (both normal) median survival >4 years, Stage II (one elevated) 2-3 years, Stage III (both elevated) <6 months. Hematologic response to chemotherapy (≥50% reduction in serum free light chains) → improves survival to 5-10 years. Early diagnosis and aggressive treatment critical.",
            clinicalPearls: [
                "AL amyloidosis = light chain amyloidosis from plasma cell dyscrasia. Congo red stain → apple-green birefringence (diagnostic). Must type amyloid (kappa vs lambda) with immunohistochemistry or mass spectrometry.",
                "Macroglossia + periorbital purpura ('raccoon eyes') + restrictive cardiomyopathy = pathognomonic triad for AL amyloidosis",
                "Low voltage ECG + thick ventricles on echo = 'pseudo-hypertrophy' (amyloid deposits, not true muscle hypertrophy). Classic for cardiac amyloidosis.",
                "Serum free light chains (FLC): MOST SENSITIVE screening test (abnormal kappa/lambda ratio in 90%+). SPEP/UPEP may be negative or low M-spike (vs high in myeloma).",
                "Lambda > kappa in AL amyloidosis (75% lambda vs 25% kappa). Opposite of multiple myeloma (where kappa > lambda).",
                "Fat pad biopsy: easiest, least invasive, 70-80% sensitive. Fine needle aspirate of abdominal subcutaneous fat → Congo red stain.",
                "AVOID digoxin and calcium channel blockers in cardiac amyloidosis: bind amyloid fibrils → toxicity/severe hypotension.",
                "CyBorD (cyclophosphamide, bortezomib, dexamethasone): first-line chemotherapy. Goal: deep hematologic response (complete response or very good partial response) → light chain reduction → halt/reverse organ damage.",
                "Mayo staging (cardiac involvement): BNP and troponin. Both normal = Stage I (best prognosis, >4y survival), both elevated = Stage III (worst prognosis, <6mo survival).",
                "Distinguish AL vs ATTR amyloidosis: AL has monoclonal protein (SPEP/FLC), plasma cell dyscrasia. ATTR has NO monoclonal protein, positive PYP scan, treated with tafamidis (TTR stabilizer)."
            ]
        }
    },
    {
        id: "acute-hemolytic-transfusion-reaction",
        name: "Acute Hemolytic Transfusion Reaction (AHTR)",
        system: "hematology-oncology",
        categories: ["transfusion-medicine"],
        symptoms: ["fever", "chills", "flank pain", "chest pain", "dyspnea", "hypotension", "dark urine"],
        tags: ["hematology", "transfusion", "ABO-incompatibility", "hemolysis", "emergency"],
        severity: "severe",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Life-threatening immune-mediated intravascular hemolysis occurring within minutes to hours of transfusion, most commonly due to ABO incompatibility from clerical error. Preformed antibodies (IgM anti-A or anti-B) bind donor RBCs → complement activation → intravascular hemolysis → hemoglobinemia, hemoglobinuria, DIC, renal failure.",
            pathophysiology: "ABO mismatch (e.g., type A blood given to type O patient) → recipient's preformed IgM antibodies (anti-A, anti-B) bind donor RBC antigens → complement-mediated intravascular hemolysis → release of free hemoglobin, inflammatory cytokines (IL-1, TNF-α), and tissue factor → DIC (consumptive coagulopathy), acute tubular necrosis (hemoglobin precipitates in renal tubules), hypotension/shock. Rarely due to other antibodies (Rh, Kidd, Duffy) causing extravascular hemolysis.",
            epidemiology: "Rare (1 in 40,000-70,000 transfusions). Mortality 10-20%. Most commonly due to clerical errors (wrong patient identification, mislabeled sample, ABO testing error). ABO incompatibility is most severe due to preformed IgM antibodies and complement activation.",
            riskFactors: [
                "Clerical errors: wrong patient identification, mislabeled sample, failure to verify patient ID at bedside",
                "ABO testing errors in blood bank",
                "Emergency transfusions without proper crossmatch",
                "Prior transfusions or pregnancy → alloantibodies (Rh, Kidd, Duffy)"
            ],
            presentation: [
                "Onset within minutes to hours of transfusion start (typically <15 minutes)",
                "Fever >1°C rise from baseline (most common symptom, 80%)",
                "Chills, rigors",
                "Flank pain (renal ischemia from hemoglobinuria)",
                "Chest pain, dyspnea",
                "Hypotension, tachycardia (shock from cytokine release, DIC)",
                "Dark urine (hemoglobinuria, 'Coca-Cola colored')",
                "Sense of impending doom, anxiety",
                "Altered mental status (if severe)",
                "If patient under anesthesia: may only see hypotension, hemoglobinuria, diffuse oozing (DIC)"
            ],
            physicalExam: [
                "Fever, tachycardia, hypotension (shock)",
                "Tachypnea, respiratory distress",
                "Jaundice (hemolysis)",
                "Diffuse bleeding (oozing from IV sites, mucous membranes) if DIC",
                "Oliguria, anuria (acute renal failure)"
            ],
            diagnosticCriteria: "Clinical diagnosis: fever, hypotension, flank pain, hemoglobinuria within minutes-hours of transfusion. Confirmed by: (1) Positive direct Coombs test (DAT) on post-transfusion sample (antibodies coating donor RBCs), (2) ABO incompatibility on clerical review or repeat typing, (3) Hemolysis labs (↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin, free hemoglobin in plasma/urine), (4) Comparison of pre- and post-transfusion samples.",
            labs: [
                "STOP transfusion immediately and return blood bag to blood bank with post-transfusion sample",
                "Direct Coombs test (DAT): positive (antibodies coating donor RBCs)",
                "Repeat ABO/Rh typing and crossmatch: identify incompatibility",
                "Hemolysis labs: ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin (<25 mg/dL), ↑ free hemoglobin in serum (pink plasma)",
                "Urinalysis: hemoglobinuria (positive for blood but no RBCs on microscopy), myoglobin negative (vs rhabdomyolysis)",
                "CBC: ↓ hemoglobin (acute drop), ↑ reticulocytes (compensatory)",
                "Coagulation studies: prolonged PT/PTT, ↓ fibrinogen, ↑ D-dimer (DIC)",
                "BMP: ↑ creatinine (acute renal failure from hemoglobin precipitation in tubules), ↑ potassium (hemolysis)",
                "Blood cultures: if fever (to rule out bacterial contamination)"
            ],
            imaging: [
                "CXR: if dyspnea, to rule out TRALI (bilateral infiltrates) or TACO (pulmonary edema)",
                "Renal ultrasound: if anuric, to rule out obstruction"
            ],
            differentialDiagnosis: [
                "Febrile non-hemolytic transfusion reaction (FNHTR): fever/chills but NO hemolysis, NO hypotension, benign, treat with acetaminophen",
                "Bacterial contamination: fever, rigors, hypotension (septic shock), positive blood cultures from bag and patient, more common with platelets (stored at room temperature)",
                "TRALI: dyspnea, hypoxemia, bilateral infiltrates on CXR within 6h, NO hemolysis, NO fever usually",
                "TACO: dyspnea, hypertension, pulmonary edema, ↑ BNP, NO hemolysis",
                "Allergic transfusion reaction: urticaria, pruritus, no hemolysis, no hypotension (unless anaphylaxis)",
                "Delayed hemolytic transfusion reaction: hemolysis 3-14 days post-transfusion, milder, extravascular, due to anamnestic antibody response"
            ],
            management: {
                acute: [
                    "STOP transfusion IMMEDIATELY (most critical step)",
                    "Maintain IV access (do NOT remove IV, may need for resuscitation), change tubing",
                    "Notify blood bank and ordering physician immediately",
                    "Aggressive IV fluid resuscitation: 0.9% saline at 200-300 mL/hr to maintain urine output >100 mL/hr (prevent acute tubular necrosis)",
                    "Diuretics: furosemide 40-80 mg IV to maintain urine output (prevent hemoglobin precipitation in tubules)",
                    "Vasopressors: if hypotension despite fluids (norepinephrine, dopamine)",
                    "Monitor urine output, vitals, coagulation studies every 4-6 hours",
                    "Treat DIC if present: fresh frozen plasma for coagulopathy with active bleeding, platelets if <10-20K and bleeding, cryoprecipitate if fibrinogen <100",
                    "Alkalinize urine: sodium bicarbonate IV (goal urine pH >7) to prevent hemoglobin precipitation (controversial, not routinely done)",
                    "Dialysis: if severe renal failure with hyperkalemia, volume overload, or uremia"
                ],
                chronic: [
                    "Investigate cause: clerical review, repeat typing, crossmatch with pre-transfusion sample",
                    "Document reaction in patient chart and blood bank records (prevent future reactions)",
                    "If antibody identified (other than ABO): provide patient with antibody card, notify blood bank for future transfusions (antigen-negative blood required)",
                    "Monitor renal function: Cr, BUN, electrolytes for days to weeks (ATN may be reversible)",
                    "Psychological support: patient and staff involved in error"
                ]
            },
            complications: [
                "Acute renal failure: acute tubular necrosis from hemoglobin precipitation in tubules (most common serious complication), may require dialysis",
                "DIC: consumptive coagulopathy from tissue factor release → bleeding (GI, ICH, diffuse oozing)",
                "Shock: from cytokine storm (IL-1, TNF-α) and DIC → hypotension, end-organ damage",
                "Death: 10-20% mortality, usually from renal failure, DIC, or multi-organ failure",
                "Chronic kidney disease: if severe ATN, may not fully recover renal function"
            ],
            prognosis: "Mortality 10-20%. Prognosis depends on volume of incompatible blood transfused (more blood = worse), severity of hypotension, and development of DIC or renal failure. Early recognition and aggressive IV fluids improve outcomes. Renal failure may be reversible with supportive care.",
            clinicalPearls: [
                "AHTR is medical emergency. If ANY suspicion → STOP transfusion immediately (before confirmation).",
                "Most common cause: ABO incompatibility from clerical error (wrong patient, mislabeled sample). Always verify patient ID at bedside before transfusion.",
                "Classic triad: fever, flank pain, hemoglobinuria (dark urine) within minutes of transfusion.",
                "Intravascular hemolysis: free hemoglobin in serum (pink plasma), hemoglobinuria (positive urine dipstick but no RBCs), ↓ haptoglobin, ↑ LDH, ↑ indirect bilirubin.",
                "Direct Coombs test (DAT): positive in AHTR (antibodies coating donor RBCs). Negative in FNHTR.",
                "ABO incompatibility is WORST: preformed IgM antibodies → complement activation → rapid intravascular hemolysis. Rh/Kidd/Duffy incompatibility is less severe (IgG, extravascular).",
                "Aggressive IV fluids (0.9% saline) + furosemide: maintain urine output >100 mL/hr to prevent hemoglobin precipitation in renal tubules (ATN).",
                "If patient under anesthesia: may only see unexplained hypotension, hemoglobinuria, or diffuse oozing (DIC). High index of suspicion.",
                "Return blood bag to blood bank with post-transfusion sample for clerical review, repeat typing, Coombs testing, and culture (rule out bacterial contamination).",
                "Prevention: strict adherence to pretransfusion verification (two patient identifiers, bedside check), proper labeling of samples."
            ]
        }
    },
    {
        id: "febrile-nonhemolytic-transfusion-reaction",
        name: "Febrile Non-Hemolytic Transfusion Reaction (FNHTR)",
        system: "hematology-oncology",
        categories: ["transfusion-medicine"],
        symptoms: ["fever", "chills", "rigors"],
        tags: ["hematology", "transfusion", "cytokines", "benign"],
        severity: "mild",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Benign transfusion reaction characterized by fever (≥1°C rise or ≥38°C) and/or chills without hemolysis, occurring during or within 4 hours of transfusion. Most common transfusion reaction (1-3% of transfusions). Due to recipient antibodies against donor leukocytes or cytokines accumulated in stored blood products.",
            pathophysiology: "Two mechanisms: (1) Recipient antibodies (anti-HLA or anti-granulocyte) bind donor leukocytes → cytokine release (IL-1, IL-6, TNF-α) → fever, chills. (2) Cytokines accumulated in stored blood products (IL-1, IL-6, IL-8) from donor leukocyte degradation → infused directly → fever. More common with platelet transfusions (stored at room temperature, more leukocyte degradation) and in multi-transfused/multiparous patients (alloimmunization).",
            epidemiology: "Most common transfusion reaction (1-3% of RBC transfusions, up to 10-30% of platelet transfusions). More common in multi-transfused patients (leukemia, sickle cell disease) or multiparous women (alloimmunization to HLA or granulocyte antigens).",
            riskFactors: [
                "Prior transfusions (alloimmunization to HLA or granulocyte antigens)",
                "Multiparity (exposure to fetal antigens → anti-HLA antibodies)",
                "Platelet transfusions (higher leukocyte content, stored at room temperature)",
                "Older stored blood products (more cytokine accumulation)"
            ],
            presentation: [
                "Fever ≥1°C rise from baseline or ≥38°C (100.4°F) during or within 4h of transfusion",
                "Chills, rigors (often precede fever)",
                "No hypotension (vs AHTR or septic transfusion reaction)",
                "No hemoglobinuria or dark urine (vs AHTR)",
                "No dyspnea or hypoxemia (vs TRALI or TACO)",
                "No rash or urticaria (vs allergic reaction)",
                "Symptoms resolve spontaneously within hours (self-limited)"
            ],
            physicalExam: [
                "Fever (≥38°C)",
                "Tachycardia (from fever)",
                "No hypotension (BP stable)",
                "No respiratory distress",
                "No rash, urticaria, or angioedema"
            ],
            diagnosticCriteria: "Diagnosis of exclusion: (1) Fever ≥1°C rise or ≥38°C during or within 4h of transfusion, (2) Exclusion of hemolytic transfusion reaction (negative DAT, no hemolysis labs), (3) Exclusion of bacterial contamination (negative blood cultures from bag and patient), (4) Exclusion of TRALI (no hypoxemia, no bilateral infiltrates on CXR), (5) Exclusion of TACO (no pulmonary edema, normal BNP). FNHTR is diagnosis after ruling out serious reactions.",
            labs: [
                "STOP transfusion temporarily (precautionary, until serious reactions ruled out)",
                "Direct Coombs test (DAT): negative (vs positive in AHTR)",
                "Hemolysis labs: normal LDH, bilirubin, haptoglobin (vs abnormal in AHTR)",
                "Blood cultures from bag and patient: negative (vs positive in bacterial contamination)",
                "CBC: stable hemoglobin (vs drop in AHTR)",
                "BMP: stable creatinine (vs ↑ in AHTR with renal failure)",
                "Coagulation studies: normal PT/PTT, fibrinogen (vs abnormal in DIC from AHTR)"
            ],
            imaging: [
                "CXR: normal (vs bilateral infiltrates in TRALI, pulmonary edema in TACO)",
                "Not routinely required unless respiratory symptoms present"
            ],
            differentialDiagnosis: [
                "Acute hemolytic transfusion reaction (AHTR): fever + hypotension + hemoglobinuria + positive DAT + hemolysis labs (life-threatening)",
                "Bacterial contamination: fever + rigors + hypotension (septic shock) + positive blood cultures (life-threatening)",
                "TRALI: fever + dyspnea + hypoxemia + bilateral infiltrates on CXR within 6h (life-threatening)",
                "Allergic reaction: urticaria, pruritus, no fever (unless anaphylaxis)",
                "Underlying infection unrelated to transfusion: pneumonia, UTI, line infection (temporal association with transfusion may be coincidental)"
            ],
            management: {
                acute: [
                    "STOP transfusion temporarily (precautionary, until serious reactions ruled out)",
                    "Antipyretics: acetaminophen 650 mg PO or IV (treat fever and chills)",
                    "Meperidine 25-50 mg IV if severe rigors (stops shivering)",
                    "Rule out serious reactions: check DAT, hemolysis labs, blood cultures, vitals (BP, O2 sat)",
                    "If FNHTR confirmed (DAT negative, hemolysis labs normal, BP stable, no dyspnea): transfusion can be resumed slowly or with new unit",
                    "Monitor vitals every 15 minutes until stable"
                ],
                chronic: [
                    "Prevention of future FNHTRs:",
                    "- Premedication: acetaminophen 650 mg PO 30 minutes before transfusion (reduces fever)",
                    "- Leukoreduction: use leukocyte-reduced blood products (removes donor WBCs → reduces cytokines and alloimmunization risk). Standard practice in most blood banks now.",
                    "- Washed RBCs or platelets: if recurrent FNHTRs despite leukoreduction (removes cytokines from supernatant)",
                    "Document reaction in patient chart and blood bank records (for future transfusions)"
                ]
            },
            complications: [
                "Generally benign and self-limited",
                "Delayed transfusion if reaction leads to unnecessary workup or hesitation to transfuse",
                "Anxiety/distress for patient"
            ],
            prognosis: "Excellent. Self-limited, resolves within hours. No long-term sequelae. Leukoreduction and premedication (acetaminophen) reduce recurrence.",
            clinicalPearls: [
                "FNHTR is diagnosis of EXCLUSION. Must rule out AHTR (hemolysis, positive DAT), bacterial contamination (blood cultures), TRALI (hypoxemia), TACO (pulmonary edema) before diagnosing FNHTR.",
                "Fever alone is NOT diagnostic of FNHTR. Fever can occur in AHTR, bacterial contamination, TRALI. Always check DAT, hemolysis labs, BP, O2 sat, blood cultures.",
                "FNHTR vs AHTR: FNHTR has fever/chills but STABLE BP, NEGATIVE DAT, NO hemolysis. AHTR has fever/chills + HYPOTENSION + POSITIVE DAT + hemolysis.",
                "Most common transfusion reaction (1-3% RBCs, 10-30% platelets). More common with platelets (stored at room temperature, more cytokine accumulation).",
                "Leukoreduction: standard practice in most blood banks, reduces FNHTR by 50-75% (removes donor WBCs and cytokines).",
                "Premedication with acetaminophen 650 mg PO 30 min before transfusion reduces fever (does NOT prevent reaction, just treats symptoms).",
                "Meperidine 25-50 mg IV: treats severe rigors (shivering) by central thermoregulatory effect. Use sparingly (can cause seizures, serotonin syndrome).",
                "Washed blood products: if recurrent FNHTRs despite leukoreduction, washing removes cytokines from supernatant (labor-intensive, reserved for refractory cases).",
                "FNHTR does NOT increase risk of future hemolytic reactions or other serious complications. Purely symptomatic (fever/chills)."
            ]
        }
    },
    {
        id: "allergic-transfusion-reaction",
        name: "Allergic Transfusion Reaction",
        system: "hematology-oncology",
        categories: ["transfusion-medicine"],
        symptoms: ["urticaria", "pruritus", "flushing", "wheezing", "angioedema"],
        tags: ["hematology", "transfusion", "allergy", "anaphylaxis", "IgE"],
        severity: "mild-moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Allergic reaction to plasma proteins in transfused blood products, ranging from mild urticaria (most common, 1-3% of transfusions) to severe anaphylaxis (rare, 1 in 20,000-50,000). Mild reactions: urticaria, pruritus. Severe reactions (anaphylaxis): bronchospasm, angioedema, hypotension. IgA deficiency is classic cause of anaphylactic transfusion reactions.",
            pathophysiology: "Mild allergic reactions: recipient IgE antibodies against donor plasma proteins (allergens) → mast cell/basophil degranulation → histamine release → urticaria, pruritus, flushing. Anaphylactic reactions: (1) IgA-deficient recipients with anti-IgA antibodies receive IgA-containing plasma → type I hypersensitivity → anaphylaxis. (2) Passive transfer of donor IgE against allergen that recipient recently exposed to (rare). Complement activation → bradykinin, histamine, leukotrienes → bronchospasm, vasodilation, hypotension.",
            epidemiology: "Mild allergic reactions: 1-3% of transfusions (common). Anaphylactic reactions: rare (1 in 20,000-50,000). More common with plasma-rich products (FFP, platelets) vs RBCs (less plasma). IgA deficiency: 1 in 700 population, 30-40% develop anti-IgA antibodies, subset at risk for anaphylaxis.",
            riskFactors: [
                "IgA deficiency (selective IgA <7 mg/dL): 30-40% have anti-IgA antibodies → risk of anaphylaxis",
                "Prior allergic transfusion reactions (30% recurrence risk)",
                "Atopic conditions: asthma, allergic rhinitis, eczema, food allergies",
                "Plasma-rich products: FFP, platelets (more donor plasma proteins vs RBCs)"
            ],
            presentation: [
                "Mild allergic reaction (most common):",
                "- Urticaria (hives): raised, erythematous, pruritic wheals on skin",
                "- Pruritus (itching) without rash",
                "- Flushing",
                "- No fever (vs FNHTR), no respiratory symptoms, no hypotension",
                "Severe allergic reaction (anaphylaxis, rare):",
                "- Onset within minutes of transfusion start",
                "- Bronchospasm: wheezing, dyspnea, chest tightness, stridor",
                "- Angioedema: swelling of lips, tongue, face, uvula (airway compromise)",
                "- Hypotension, tachycardia (shock)",
                "- GI symptoms: nausea, vomiting, abdominal cramps, diarrhea",
                "- Loss of consciousness (if severe)"
            ],
            physicalExam: [
                "Mild:",
                "- Urticarial rash: raised, erythematous, blanching wheals",
                "- Flushing",
                "- Stable vitals (BP, HR, O2 sat normal)",
                "Severe (anaphylaxis):",
                "- Wheezing, prolonged expiratory phase, use of accessory muscles",
                "- Stridor (upper airway edema)",
                "- Angioedema: swollen lips, tongue, face",
                "- Hypotension, tachycardia",
                "- Altered mental status (hypoperfusion)"
            ],
            diagnosticCriteria: "Clinical diagnosis: (1) Mild: urticaria or pruritus during or within 1-2 hours of transfusion, no respiratory symptoms, no hypotension. (2) Severe (anaphylaxis): ≥2 organ systems involved (skin: urticaria; respiratory: bronchospasm, stridor; cardiovascular: hypotension; GI: vomiting, diarrhea) within minutes-hours of transfusion. Consider IgA deficiency if anaphylaxis (check serum IgA level).",
            labs: [
                "Mild allergic reaction: no labs required (clinical diagnosis)",
                "Severe (anaphylaxis): ",
                "- Serum tryptase: elevated within 1-2 hours of anaphylaxis (mast cell degranulation), confirms diagnosis",
                "- Serum IgA level: if anaphylaxis, check for IgA deficiency (<7 mg/dL)",
                "- Anti-IgA antibodies: if IgA deficient, send for anti-IgA IgG antibodies (indicates high risk for recurrent anaphylaxis)",
                "- CBC, BMP: monitor for complications (shock, renal failure)",
                "- Blood cultures: if fever, to rule out bacterial contamination"
            ],
            imaging: [
                "CXR: if wheezing, to rule out TRALI (bilateral infiltrates), TACO (pulmonary edema), or aspiration",
                "Not routinely required for mild urticaria"
            ],
            differentialDiagnosis: [
                "FNHTR: fever, chills, no rash (vs urticaria in allergic reaction)",
                "AHTR: fever, hypotension, hemoglobinuria, positive DAT (vs negative in allergic reaction)",
                "TRALI: dyspnea, hypoxemia, bilateral infiltrates on CXR, no urticaria",
                "TACO: dyspnea, hypertension, pulmonary edema, ↑ BNP, no urticaria",
                "Bacterial contamination: fever, rigors, hypotension (septic shock), no urticaria",
                "Underlying allergic reaction unrelated to transfusion: food allergy, medication allergy (temporal association may be coincidental)"
            ],
            management: {
                acute: [
                    "Mild allergic reaction (urticaria only, stable vitals):",
                    "- PAUSE transfusion temporarily",
                    "- Antihistamines: diphenhydramine 25-50 mg IV or PO",
                    "- If symptoms resolve: may resume transfusion slowly and monitor closely",
                    "- If symptoms worsen or respiratory symptoms develop: STOP transfusion and treat as anaphylaxis",
                    "Severe (anaphylaxis):",
                    "- STOP transfusion IMMEDIATELY",
                    "- Epinephrine 0.3-0.5 mg IM (1:1000, anterolateral thigh), repeat every 5-15 min if needed (FIRST-LINE, life-saving)",
                    "- Airway management: supplemental O2, consider intubation if stridor or severe angioedema",
                    "- IV fluid resuscitation: 0.9% saline 1-2 L bolus for hypotension",
                    "- Antihistamines: diphenhydramine 50 mg IV (adjunct, NOT first-line)",
                    "- H2 blocker: ranitidine 50 mg IV or famotidine 20 mg IV (adjunct)",
                    "- Bronchodilators: albuterol nebulizer if wheezing",
                    "- Corticosteroids: methylprednisolone 125 mg IV or hydrocortisone 200 mg IV (prevent biphasic reaction, NOT for acute symptoms)",
                    "- Vasopressors: if hypotension refractory to fluids (epinephrine infusion, norepinephrine)",
                    "- Monitor in ICU for 24h (risk of biphasic reaction in 10-20%)"
                ],
                chronic: [
                    "Mild recurrent allergic reactions:",
                    "- Premedication: diphenhydramine 25-50 mg PO 30 min before transfusion (reduces urticaria)",
                    "- Washed RBCs or platelets: removes plasma proteins (reduces allergen exposure), use if recurrent despite premedication",
                    "IgA deficiency with anti-IgA antibodies (anaphylaxis risk):",
                    "- Use IgA-deficient blood products (from IgA-deficient donors) OR washed cellular products (removes IgA-containing plasma)",
                    "- Document IgA deficiency in chart and blood bank (critical for future transfusions)",
                    "- Provide patient with medical alert bracelet (IgA deficiency, risk of anaphylaxis with transfusions)",
                    "Consider allergy/immunology referral for IgA-deficient patients"
                ]
            },
            complications: [
                "Mild: discomfort, delayed transfusion, anxiety",
                "Severe (anaphylaxis): airway compromise (laryngeal edema), respiratory failure, shock, death (if untreated)",
                "Biphasic anaphylaxis: recurrence of symptoms 4-12 hours after initial resolution (10-20% of anaphylaxis cases), prevented by corticosteroids"
            ],
            prognosis: "Mild allergic reactions: benign, self-limited, excellent prognosis. Anaphylaxis: excellent prognosis if recognized early and treated with epinephrine. Mortality rare with prompt treatment. Recurrence risk 30% if no preventive measures (premedication, washed products, IgA-deficient blood).",
            clinicalPearls: [
                "Allergic transfusion reaction = urticaria/pruritus during transfusion. Mild (urticaria only) vs severe (anaphylaxis: bronchospasm, angioedema, hypotension).",
                "Mild reaction: PAUSE transfusion, give diphenhydramine 25-50 mg, may resume if symptoms resolve. Severe reaction: STOP transfusion, give epinephrine IM immediately.",
                "Anaphylaxis: epinephrine 0.3-0.5 mg IM is FIRST-LINE (NOT antihistamines). Repeat every 5-15 min if needed. Airway management and IV fluids critical.",
                "IgA deficiency (1 in 700): 30-40% have anti-IgA antibodies → risk of anaphylaxis with transfusions. Check serum IgA if anaphylaxis during transfusion.",
                "IgA-deficient patients with anti-IgA antibodies: use IgA-deficient blood products OR washed RBCs/platelets (removes plasma IgA). Document in chart, provide medical alert bracelet.",
                "Urticaria alone (no respiratory/CV symptoms): low-risk, can pause and treat with antihistamines, may resume transfusion if resolves.",
                "Biphasic anaphylaxis: 10-20% have recurrence of symptoms 4-12h later. Give corticosteroids (methylprednisolone 125 mg IV) and observe 24h in anaphylaxis.",
                "Premedication with diphenhydramine 25-50 mg PO 30 min before transfusion: reduces mild urticarial reactions in patients with prior allergic reactions.",
                "Washed blood products: removes plasma proteins (allergens). Use for recurrent allergic reactions despite premedication or IgA-deficient patients.",
                "Allergic reactions more common with plasma-rich products (FFP, platelets) vs RBCs (less plasma)."
            ]
        }
    },
    {
        id: "transfusion-related-acute-lung-injury",
        name: "Transfusion-Related Acute Lung Injury (TRALI)",
        system: "hematology-oncology",
        categories: ["transfusion-medicine"],
        symptoms: ["dyspnea", "hypoxemia", "tachypnea", "fever", "hypotension"],
        tags: ["hematology", "transfusion", "ARDS", "pulmonary-edema", "antibody-mediated", "emergency"],
        severity: "severe",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Acute respiratory distress within 6 hours of transfusion characterized by bilateral pulmonary infiltrates, hypoxemia (PaO2/FiO2 <300), and no evidence of volume overload. Leading cause of transfusion-related mortality. Non-cardiogenic pulmonary edema from antibody-mediated or inflammatory neutrophil activation → increased pulmonary capillary permeability.",
            pathophysiology: "Two-hit hypothesis: (1) First hit: underlying patient condition (sepsis, surgery, trauma) → neutrophil priming and pulmonary sequestration. (2) Second hit: donor anti-HLA or anti-neutrophil antibodies (from multiparous women donors) bind recipient leukocytes → neutrophil activation → release of proteases, reactive oxygen species → pulmonary capillary endothelial damage → non-cardiogenic pulmonary edema (↑ capillary permeability, protein-rich fluid in alveoli). Alternative: biologic response modifiers (lipids, cytokines) in stored blood activate neutrophils.",
            epidemiology: "Incidence 1 in 5,000-12,000 transfusions. Leading cause of transfusion-related death (40-50% of transfusion fatalities). More common with plasma-rich products (FFP, platelets, whole blood) from multiparous female donors (anti-HLA antibodies). Mortality 5-10% (vs 40% for ARDS).",
            riskFactors: [
                "Transfusion of plasma-rich products: FFP, platelets, whole blood (vs RBCs)",
                "Multiparous female donors (anti-HLA or anti-granulocyte antibodies from pregnancy)",
                "Underlying critical illness: sepsis, shock, surgery, trauma, massive transfusion (neutrophil priming, 'first hit')",
                "Liver disease, alcohol use disorder (increased susceptibility)",
                "Positive pressure ventilation (may unmask TRALI)"
            ],
            presentation: [
                "Onset within 6 hours of transfusion (typically 1-2 hours, median 2h)",
                "Dyspnea, tachypnea (respiratory distress)",
                "Hypoxemia: O2 saturation <90% on room air, PaO2/FiO2 ratio <300 (ARDS definition)",
                "Fever (50-70%): moderate (38-39°C)",
                "Hypotension (25-50%): from capillary leak, vasodilation (vs hypertension in TACO)",
                "Frothy pink sputum (pulmonary edema)",
                "Cyanosis (severe hypoxemia)",
                "No signs of volume overload: no JVD, no peripheral edema, no hypertension (vs TACO)"
            ],
            physicalExam: [
                "Tachypnea, use of accessory muscles, respiratory distress",
                "Hypoxemia: O2 sat <90%, cyanosis",
                "Bilateral crackles on lung auscultation (pulmonary edema)",
                "Hypotension or normal BP (vs hypertension in TACO)",
                "No JVD, no peripheral edema (vs TACO where volume overload present)",
                "Fever (50-70%)"
            ],
            diagnosticCriteria: "TRALI consensus definition (2004): (1) Acute onset within 6 hours of transfusion, (2) Hypoxemia: PaO2/FiO2 ≤300 or O2 sat <90% on room air with bilateral infiltrates on CXR, (3) No evidence of left atrial hypertension (PCWP <18 mmHg if measured, BNP normal or mildly elevated, no cardiogenic pulmonary edema), (4) No temporal relationship with alternative ARDS risk factors. Possible TRALI: meets criteria but has alternative ARDS risk factor (sepsis, aspiration).",
            labs: [
                "ABG: hypoxemia (PaO2 <60 mmHg), hypocapnia (↓ PaCO2 from tachypnea), PaO2/FiO2 ratio <300 (ARDS definition)",
                "BNP or NT-proBNP: normal or mildly elevated (<200-300 pg/mL) (vs markedly elevated >1000 in TACO)",
                "CBC: transient leukopenia in first 1-2 hours (neutrophil sequestration in lungs), followed by leukocytosis",
                "Blood cultures: to rule out bacterial contamination (sepsis can mimic TRALI)",
                "HLA and HNA antibody testing: in DONOR serum/plasma (send donor bag to blood bank), positive in 80-90% of antibody-mediated TRALI",
                "Recipient HLA/HNA typing: if donor antibodies present, check if recipient has corresponding antigens (confirms antibody-mediated TRALI)"
            ],
            imaging: [
                "CXR: bilateral patchy infiltrates (alveolar opacities), often with perihilar distribution, normal cardiac silhouette (vs enlarged in TACO), no pleural effusions (or small if present, vs large in TACO)",
                "CT chest (if diagnosis uncertain): bilateral ground-glass opacities, consolidation, no cardiomegaly",
                "Echocardiography: normal or hyperdynamic LV function (vs reduced in cardiogenic pulmonary edema), normal LA size, may show RV strain"
            ],
            differentialDiagnosis: [
                "TACO (transfusion-associated circulatory overload): dyspnea, hypertension, ↑ BNP (>1000), cardiomegaly, pleural effusions on CXR, responds to diuretics (vs TRALI: hypotension, normal BNP, does NOT respond to diuretics)",
                "ARDS (non-transfusion related): bilateral infiltrates, hypoxemia, but no temporal relationship with transfusion, underlying cause (sepsis, pneumonia, aspiration)",
                "Bacterial contamination of blood product: fever, hypotension, but positive blood cultures, septic shock picture",
                "Acute hemolytic transfusion reaction: fever, hypotension, hemoglobinuria, positive DAT, hemolysis labs",
                "Cardiogenic pulmonary edema: dyspnea, hypertension, ↑ BNP, cardiomegaly, responds to diuretics, history of CHF",
                "Anaphylaxis: bronchospasm, urticaria, angioedema, no bilateral infiltrates on CXR"
            ],
            management: {
                acute: [
                    "STOP transfusion immediately",
                    "Supportive respiratory care (mainstay of treatment):",
                    "- Supplemental O2: 100% non-rebreather mask, goal O2 sat >90%",
                    "- Mechanical ventilation: if severe hypoxemia (PaO2/FiO2 <200) or respiratory failure, use lung-protective ventilation (tidal volume 6 mL/kg IBW, PEEP 5-15 cmH2O, plateau pressure <30 cmH2O)",
                    "- AVOID diuretics (not volume overload, may worsen hypotension). Exception: if possible TACO overlap, cautious trial of furosemide 20-40 mg IV.",
                    "IV fluid resuscitation: if hypotensive, cautious 250-500 mL boluses of 0.9% saline (avoid aggressive fluids, may worsen pulmonary edema)",
                    "Vasopressors: if hypotension refractory to fluids (norepinephrine preferred)",
                    "Avoid further transfusions unless absolutely necessary (use single-donor products if needed)",
                    "Corticosteroids: NOT routinely recommended (no proven benefit in TRALI, unlike ARDS where debated)"
                ],
                chronic: [
                    "Most cases resolve within 48-96 hours with supportive care",
                    "Investigate: send donor blood bag to blood bank for HLA/HNA antibody testing (identify implicated donor, defer from future plasma donations)",
                    "Document reaction in patient chart and national hemovigilance system",
                    "Prevention strategies (blood bank level):",
                    "- Male-predominant plasma strategy: use plasma from male donors or nulliparous females (reduces anti-HLA antibodies, decreased TRALI by 80%)",
                    "- HLA antibody screening: test multiparous female donors for anti-HLA antibodies, defer if positive from plasma/platelet donations",
                    "Patient-level: no specific prevention for individual patients, avoid unnecessary transfusions"
                ]
            },
            complications: [
                "Acute respiratory failure requiring mechanical ventilation (70-80%)",
                "Prolonged ICU stay",
                "Death (5-10% mortality, lower than ARDS 40% but still significant)",
                "Rare: progression to refractory ARDS, multi-organ failure"
            ],
            prognosis: "Most cases (90%) resolve within 48-96 hours with supportive care. Mortality 5-10% (lower than classic ARDS 40%). Rapid improvement in oxygenation within 24-48h is typical. No long-term pulmonary sequelae in survivors. Recurrence risk with future transfusions is LOW (reaction is donor-specific, not patient-specific).",
            clinicalPearls: [
                "TRALI = acute respiratory distress within 6 hours of transfusion: bilateral infiltrates, hypoxemia (PaO2/FiO2 <300), NO volume overload (BNP normal, hypotension).",
                "TRALI vs TACO: TRALI has hypotension or normal BP, normal BNP, no response to diuretics. TACO has hypertension, ↑ BNP >1000, responds to diuretics.",
                "Leading cause of transfusion-related death (40-50% of transfusion fatalities). High index of suspicion if dyspnea + bilateral infiltrates within 6h of transfusion.",
                "Antibody-mediated TRALI (80-90%): donor anti-HLA or anti-neutrophil antibodies (from multiparous women) bind recipient leukocytes → neutrophil activation → lung injury.",
                "Two-hit hypothesis: first hit (patient sepsis, surgery, trauma) primes neutrophils, second hit (transfusion with antibodies or bioactive lipids) triggers TRALI.",
                "BNP <200-300: suggests TRALI (non-cardiogenic). BNP >1000: suggests TACO (volume overload). BNP 300-1000: gray zone, consider overlap or use echo.",
                "Treatment: supportive (O2, mechanical ventilation if needed). AVOID diuretics (not volume overload, may worsen hypotension). Most resolve in 48-96h.",
                "Male-predominant plasma strategy: using plasma from male donors or nulliparous females reduced TRALI by 80% (fewer anti-HLA antibodies).",
                "HLA/HNA antibody testing: send DONOR bag to blood bank. If positive, defer donor from future plasma/platelet donations (can still donate RBCs).",
                "Recurrence risk LOW: TRALI is donor-specific (donor antibodies), not patient-specific. Patient can receive future transfusions safely."
            ]
        }
    },
    {
        id: "transfusion-associated-circulatory-overload",
        name: "Transfusion-Associated Circulatory Overload (TACO)",
        system: "hematology-oncology",
        categories: ["transfusion-medicine"],
        symptoms: ["dyspnea", "orthopnea", "tachypnea", "hypertension", "headache"],
        tags: ["hematology", "transfusion", "volume-overload", "pulmonary-edema", "CHF"],
        severity: "moderate",
        acuity: "acute",
        pageType: "disease",
        detail: {
            definition: "Cardiogenic pulmonary edema from rapid transfusion or excessive volume in patients with impaired cardiac reserve or renal dysfunction. Hypervolemia → increased hydrostatic pressure in pulmonary capillaries → fluid transudation into alveoli. Most common serious transfusion complication (1 in 100-700 transfusions). Distinct from TRALI (non-cardiogenic edema).",
            pathophysiology: "Rapid transfusion or large volume → hypervolemia → ↑ left atrial pressure and pulmonary capillary wedge pressure (PCWP) → ↑ hydrostatic pressure overcomes oncotic pressure → transudation of fluid into pulmonary interstitium and alveoli → cardiogenic pulmonary edema. Impaired cardiac reserve (CHF, AS, diastolic dysfunction) or renal failure (cannot excrete volume) → cannot compensate for volume load.",
            epidemiology: "Incidence 1-8% of transfusions (1 in 100-700, varies by population). Most common in elderly, patients with CHF, renal failure, or small body size. More common than previously recognized (often underdiagnosed, misdiagnosed as TRALI or pneumonia).",
            riskFactors: [
                "Cardiac dysfunction: CHF (systolic or diastolic), severe aortic stenosis, cardiomyopathy, prior MI",
                "Renal failure: acute or chronic (cannot excrete volume), anuria, dialysis-dependent",
                "Extremes of age: elderly (impaired cardiac reserve), neonates (small blood volume)",
                "Small body size: low blood volume, less able to tolerate large volumes",
                "Rapid transfusion rate: >2-4 mL/kg/hr or >1 unit in <2 hours",
                "Large transfusion volume: >4 units or >15 mL/kg",
                "Positive fluid balance: concurrent IV fluids, recent fluid resuscitation"
            ],
            presentation: [
                "Onset during or within 6 hours of transfusion (typically within 1-2 hours)",
                "Dyspnea, orthopnea (cannot lie flat)",
                "Tachypnea, respiratory distress",
                "Hypertension (from volume overload, vs hypotension in TRALI)",
                "Headache (from hypertension)",
                "Jugular venous distension (JVD)",
                "Peripheral edema (if chronic volume overload)",
                "Cough with frothy pink or white sputum (pulmonary edema)",
                "Chest discomfort, palpitations"
            ],
            physicalExam: [
                "Hypertension (vs hypotension or normal BP in TRALI)",
                "Tachycardia, tachypnea",
                "JVD (elevated CVP, vs flat in TRALI)",
                "Bilateral crackles on lung auscultation (pulmonary edema)",
                "S3 gallop (volume overload)",
                "Peripheral edema (lower extremities, sacral if bedbound)",
                "Hypoxemia: O2 sat <90%"
            ],
            diagnosticCriteria: "International consensus (2019): (1) Acute respiratory distress within 6 hours of transfusion, (2) ≥3 of: acute respiratory distress (dyspnea, orthopnea, cough), elevated BNP/NT-proBNP (BNP ≥1.5× baseline or NT-proBNP ≥1.3× baseline), elevated CVP, evidence of positive fluid balance, cardiogenic pulmonary edema on imaging (cardiomegaly, vascular congestion, pleural effusions), (3) Improvement with diuretics.",
            labs: [
                "BNP or NT-proBNP: markedly elevated (typically >1000 pg/mL for BNP, >1800 for NT-proBNP), ≥1.5× baseline (vs normal <200-300 in TRALI)",
                "ABG: hypoxemia (↓ PaO2), often normal or ↓ PaCO2 (tachypnea)",
                "CBC: may see hemodilution (↓ Hct if large volume transfused)",
                "BMP: ↑ creatinine if renal failure (predisposing factor), electrolyte abnormalities",
                "Troponin: may be elevated if myocardial strain or underlying ACS"
            ],
            imaging: [
                "CXR: cardiomegaly (enlarged cardiac silhouette), bilateral pulmonary edema (perihilar 'bat-wing' pattern, Kerley B lines), pleural effusions (bilateral), vascular congestion (cephalization of pulmonary vessels)",
                "CXR in TRALI: normal cardiac silhouette, bilateral infiltrates, minimal/no pleural effusions",
                "Echocardiography: elevated left atrial pressure (dilated LA), LV systolic or diastolic dysfunction, elevated PCWP if measured, mitral regurgitation, pericardial effusion (if volume overload)"
            ],
            differentialDiagnosis: [
                "TRALI: dyspnea, hypoxemia, bilateral infiltrates, but hypotension or normal BP, normal BNP (<200-300), normal cardiac silhouette on CXR, does NOT respond to diuretics",
                "ARDS (non-transfusion): bilateral infiltrates, hypoxemia, but no temporal relationship with transfusion, underlying cause (sepsis, pneumonia, aspiration)",
                "Cardiogenic pulmonary edema (non-transfusion): same presentation as TACO, but not temporally related to transfusion (e.g., MI, acute CHF exacerbation)",
                "Pneumonia: dyspnea, fever, cough, but focal infiltrate on CXR (vs bilateral in TACO), no hypertension, no JVD",
                "Acute coronary syndrome: dyspnea, chest pain, troponin elevation, but ECG changes, no direct relationship with transfusion"
            ],
            management: {
                acute: [
                    "STOP or SLOW transfusion immediately",
                    "Sit patient upright (reduces venous return, improves dyspnea)",
                    "Supplemental O2: 100% non-rebreather mask, goal O2 sat >90%",
                    "Diuretics (FIRST-LINE, definitive treatment):",
                    "- Furosemide 40-80 mg IV push (higher dose if renal failure or already on diuretics)",
                    "- Repeat every 2-4 hours until improvement in dyspnea and O2 sat",
                    "- Goal: negative fluid balance 0.5-2 L",
                    "Vasodilators (if hypertensive):",
                    "- Nitroglycerin 0.4 mg SL or IV infusion (reduces preload and afterload)",
                    "- ACE inhibitor (if not already on)",
                    "Mechanical ventilation: if severe hypoxemia or respiratory failure (use PEEP to recruit alveoli, may need high PEEP 10-15 cmH2O)",
                    "Ultrafiltration or dialysis: if refractory to diuretics or anuric (ESRD patients)",
                    "Monitor: vitals, urine output, daily weights, fluid balance"
                ],
                chronic: [
                    "Prevention of future TACO:",
                    "- Slow transfusion rate: ≤2 mL/kg/hr or 1 unit over 2-4 hours (vs standard 1-2 hours)",
                    "- Prophylactic diuretics: furosemide 20-40 mg IV between or after each unit (especially if CHF, renal failure, or small body size)",
                    "- Minimize transfusion volume: transfuse only when necessary, use restrictive transfusion thresholds (Hb <7-8 g/dL)",
                    "- Split units: give half unit, wait 4-6 hours, reassess before second half",
                    "- Avoid concurrent IV fluids during transfusion",
                    "- Monitor vitals closely during transfusion (BP, RR, O2 sat every 15-30 min)",
                    "Document reaction in patient chart (for future transfusions)"
                ]
            },
            complications: [
                "Acute respiratory failure requiring mechanical ventilation",
                "Myocardial ischemia or infarction (if underlying CAD, from increased myocardial oxygen demand)",
                "Acute pulmonary edema refractory to diuretics (may need ultrafiltration/dialysis)",
                "Death (rare if recognized and treated, but mortality 5-15% in severe cases)"
            ],
            prognosis: "Excellent with prompt recognition and diuretics. Most cases resolve within hours to days with diuretic therapy. Mortality 5-15% (higher in elderly, severe CHF, or delayed recognition). Prevention is key (slow transfusion, prophylactic diuretics in high-risk patients).",
            clinicalPearls: [
                "TACO = cardiogenic pulmonary edema from volume overload during transfusion. Hypertension, ↑ BNP (>1000), JVD, responds to diuretics.",
                "TACO vs TRALI: TACO has hypertension, ↑ BNP, cardiomegaly/pleural effusions on CXR, responds to diuretics. TRALI has hypotension, normal BNP, normal cardiac silhouette, does NOT respond to diuretics.",
                "Most common serious transfusion complication (1 in 100-700), but often underdiagnosed. High index of suspicion if dyspnea + hypertension during transfusion in elderly or CHF patients.",
                "BNP: TACO >1000 (or ≥1.5× baseline), TRALI <200-300. BNP 300-1000 = gray zone, consider overlap or mixed picture.",
                "First-line treatment: DIURETICS (furosemide 40-80 mg IV). Dramatic improvement within 1-2 hours if TACO. No response → consider TRALI or other diagnosis.",
                "Prevention: slow transfusion (1 unit over 2-4h), prophylactic diuretics (furosemide 20-40 mg IV) in high-risk patients (CHF, renal failure, elderly, small body size).",
                "Risk factors: elderly, CHF, renal failure, rapid rate (>1 unit in <2h), large volume (>4 units), positive fluid balance.",
                "CXR: cardiomegaly, bilateral pulmonary edema, pleural effusions (vs normal cardiac silhouette in TRALI).",
                "Prophylactic furosemide: give 20-40 mg IV between or after units in high-risk patients. Reduces TACO risk by 50%.",
                "Restrictive transfusion strategy: Hb threshold <7-8 g/dL (vs liberal <10) reduces transfusion volume → reduces TACO risk."
            ]
        }
    }
];

export default hematologyOncologyDiseases;

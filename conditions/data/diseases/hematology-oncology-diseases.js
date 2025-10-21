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
    }
];

export default hematologyOncologyDiseases;

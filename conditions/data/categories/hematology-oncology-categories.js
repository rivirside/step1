// Hematology/Oncology categories
const hematologyOncologyCategories = [
    {
        id: "anemia",
        name: "Anemia",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "iron-deficiency-anemia",
            "anemia-of-chronic-disease",
            "thalassemia",
            "sideroblastic-anemia",
            "b12-deficiency",
            "folate-deficiency",
            "aplastic-anemia"
        ],
        pageType: "category",
        detail: {
            approach: "Approach to anemia: check MCV first. Microcytic (MCV <80): iron deficiency, thalassemia, chronic disease, sideroblastic. Normocytic (80-100): blood loss, hemolysis, chronic disease, aplastic anemia. Macrocytic (>100): B12/folate deficiency, alcohol, myelodysplasia, medications.",
            redFlags: [
                "Severe anemia (Hb <7) may require transfusion",
                "Acute onset suggests hemolysis or bleeding",
                "Pancytopenia suggests bone marrow failure or infiltration",
                "Neurologic symptoms (B12) suggest subacute combined degeneration"
            ],
            initialWorkup: [
                "CBC with differential and MCV",
                "Reticulocyte count (low = decreased production, high = hemolysis/bleeding)",
                "Peripheral smear",
                "Iron studies (Fe, TIBC, ferritin) if microcytic",
                "B12, folate if macrocytic",
                "LDH, haptoglobin, indirect bilirubin if hemolysis suspected"
            ],
            differentialCategories: [
                "Microcytic: iron deficiency, thalassemia, chronic disease, sideroblastic",
                "Normocytic: acute blood loss, hemolysis, chronic disease, bone marrow failure",
                "Macrocytic: B12/folate deficiency, myelodysplasia, alcohol, medications (methotrexate, hydroxyurea)"
            ]
        }
    },
    {
        id: "hemolytic-anemia",
        name: "Hemolytic Anemia",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "hereditary-spherocytosis",
            "g6pd-deficiency",
            "sickle-cell-disease",
            "autoimmune-hemolytic-anemia",
            "paroxysmal-nocturnal-hemoglobinuria",
            "ttp",
            "hus",
            "dic"
        ],
        pageType: "category",
        detail: {
            approach: "Hemolytic anemia presents with ↑ reticulocytes, ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin. Intravascular (hemoglobinuria, hemosiderinuria) vs extravascular (splenomegaly, spherocytes). Acquired (autoimmune, TTP, DIC) vs hereditary (spherocytosis, G6PD, sickle cell).",
            redFlags: [
                "Dark urine (hemoglobinuria) suggests intravascular hemolysis",
                "Fever, neurologic changes, renal failure → TTP/HUS (medical emergency)",
                "Acute chest syndrome in sickle cell disease is life-threatening",
                "Cold exposure triggering hemolysis suggests cold agglutinin disease"
            ],
            initialWorkup: [
                "Hemolysis labs: ↑ LDH, ↑ indirect bilirubin, ↑ reticulocytes, ↓ haptoglobin",
                "Peripheral smear (spherocytes, schistocytes, sickle cells)",
                "Direct Coombs test (positive in autoimmune hemolytic anemia)",
                "Hemoglobin electrophoresis if sickle cell suspected",
                "G6PD level (check when patient NOT actively hemolyzing)"
            ],
            differentialCategories: [
                "Intrinsic RBC defects: hereditary spherocytosis, G6PD, sickle cell, PNH",
                "Extrinsic: autoimmune (warm vs cold), microangiopathic (TTP, HUS, DIC), infections (malaria)"
            ]
        }
    },
    {
        id: "bleeding-disorders",
        name: "Bleeding Disorders",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "itp",
            "hemophilia-a",
            "hemophilia-b",
            "von-willebrand-disease",
            "vitamin-k-deficiency"
        ],
        pageType: "category",
        detail: {
            approach: "Bleeding disorders: platelet vs coagulation defect. Platelet disorders: mucocutaneous bleeding (petechiae, purpura, epistaxis), normal PT/PTT, ↓ platelets or ↑ bleeding time. Coagulation disorders: deep tissue bleeding (hemarthrosis, muscle hematomas), ↑ PT/PTT.",
            redFlags: [
                "Intracranial hemorrhage with thrombocytopenia is life-threatening",
                "Hemarthrosis suggests hemophilia (factor VIII or IX deficiency)",
                "New onset bleeding in elderly → consider acquired hemophilia or malignancy"
            ],
            initialWorkup: [
                "CBC with platelet count",
                "PT/INR (extrinsic pathway, factor VII, warfarin)",
                "PTT (intrinsic pathway, factors VIII, IX, XI, XII)",
                "Peripheral smear (platelet clumping, schistocytes)",
                "Mixing study if prolonged PT/PTT (corrects = factor deficiency, doesn't correct = inhibitor)",
                "vWF antigen, ristocetin cofactor if vWD suspected"
            ],
            differentialCategories: [
                "Platelet disorders: ITP, TTP, HUS, DIC, medications (heparin-induced thrombocytopenia)",
                "Coagulation factor deficiencies: hemophilia A (VIII), hemophilia B (IX), vWD, vitamin K deficiency"
            ]
        }
    },
    {
        id: "thrombotic-disorders",
        name: "Thrombotic Disorders",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "dvt",
            "pulmonary-embolism",
            "factor-v-leiden",
            "prothrombin-g20210a",
            "antiphospholipid-syndrome"
        ],
        pageType: "category",
        detail: {
            approach: "Thrombosis: Virchow's triad (stasis, hypercoagulability, endothelial injury). Arterial (platelet-mediated, white clot) vs venous (fibrin-mediated, red clot). Evaluate for provoked (surgery, immobility, pregnancy) vs unprovoked (thrombophilia).",
            redFlags: [
                "Recurrent thrombosis or family history → consider thrombophilia workup",
                "Thrombosis in unusual site (mesenteric, cerebral sinus) → consider PNH, antiphospholipid syndrome",
                "Pregnant patient with thrombosis → high risk for maternal/fetal complications"
            ],
            initialWorkup: [
                "D-dimer (sensitive but not specific, useful for ruling out DVT/PE if low pretest probability)",
                "Doppler ultrasound for DVT",
                "CT pulmonary angiography for PE",
                "Thrombophilia workup if recurrent or unprovoked: Factor V Leiden, prothrombin G20210A mutation, protein C/S, antithrombin, lupus anticoagulant, anticardiolipin antibodies"
            ],
            differentialCategories: [
                "Venous thrombosis: DVT, PE, cerebral sinus thrombosis, portal/hepatic vein thrombosis (Budd-Chiari)",
                "Arterial thrombosis: MI, stroke, limb ischemia"
            ]
        }
    },
    {
        id: "leukemia",
        name: "Leukemia",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "aml",
            "all",
            "cml",
            "cll"
        ],
        pageType: "category",
        detail: {
            approach: "Leukemia classification: acute (blasts ≥20%, rapid onset) vs chronic (mature cells, indolent). Myeloid (granulocytes/monocytes) vs lymphoid (lymphocytes). Acute: AML (Auer rods, MPO+) vs ALL (TdT+, younger). Chronic: CML (BCR-ABL, Philadelphia chromosome) vs CLL (smudge cells, older adults).",
            redFlags: [
                "Blast crisis in CML is oncologic emergency",
                "Tumor lysis syndrome (hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia) → life-threatening",
                "DIC in APL (M3 subtype of AML) → treat with ATRA immediately",
                "CNS involvement in ALL requires intrathecal chemotherapy"
            ],
            initialWorkup: [
                "CBC with differential (leukocytosis, anemia, thrombocytopenia)",
                "Peripheral smear (blasts, Auer rods, smudge cells)",
                "Bone marrow biopsy with flow cytometry, cytogenetics, molecular studies",
                "Metabolic panel, uric acid, LDH (tumor lysis syndrome risk)",
                "Coagulation studies (DIC in APL)"
            ],
            differentialCategories: [
                "Acute leukemias: AML (adults, Auer rods), ALL (children, mediastinal mass)",
                "Chronic leukemias: CML (BCR-ABL, massive splenomegaly), CLL (older adults, smudge cells, lymphadenopathy)"
            ]
        }
    },
    {
        id: "lymphoma",
        name: "Lymphoma",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "hodgkin-lymphoma",
            "diffuse-large-b-cell-lymphoma",
            "follicular-lymphoma",
            "burkitt-lymphoma",
            "mantle-cell-lymphoma",
            "marginal-zone-lymphoma"
        ],
        pageType: "category",
        detail: {
            approach: "Lymphoma presents with painless lymphadenopathy. Hodgkin (Reed-Sternberg cells, bimodal age 20s and 60s, contiguous spread, B symptoms common) vs Non-Hodgkin (diverse subtypes, older age, non-contiguous, variable prognosis). Excisional lymph node biopsy required for diagnosis.",
            redFlags: [
                "Superior vena cava syndrome (mediastinal mass) is oncologic emergency",
                "B symptoms (fever, night sweats, weight loss >10%) suggest advanced disease",
                "Rapidly growing mass or LDH >3× normal suggests high-grade NHL (Burkitt)",
                "Painful lymphadenopathy after alcohol ingestion is classic for Hodgkin"
            ],
            initialWorkup: [
                "Excisional lymph node biopsy (NOT fine needle aspiration - need architecture)",
                "CT chest/abdomen/pelvis for staging",
                "PET scan (especially for Hodgkin)",
                "Bone marrow biopsy if stage III/IV suspected",
                "LDH, β2-microglobulin (prognostic)",
                "HIV testing (NHL associated with HIV)"
            ],
            differentialCategories: [
                "Hodgkin lymphoma: Classical (nodular sclerosis, mixed cellularity, lymphocyte-rich, lymphocyte-depleted) vs nodular lymphocyte-predominant",
                "Non-Hodgkin lymphoma: Indolent (follicular, marginal zone) vs aggressive (DLBCL, Burkitt, mantle cell)"
            ]
        }
    },
    {
        id: "myeloproliferative-disorders",
        name: "Myeloproliferative Disorders",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "polycythemia-vera",
            "essential-thrombocythemia",
            "primary-myelofibrosis",
            "myelodysplastic-syndrome"
        ],
        pageType: "category",
        detail: {
            approach: "Myeloproliferative neoplasms: clonal proliferation of mature myeloid cells. Polycythemia vera (↑ RBCs, JAK2 mutation), essential thrombocythemia (↑ platelets), primary myelofibrosis (bone marrow fibrosis, teardrop cells, JAK2/CALR/MPL mutations). Risk of thrombosis and transformation to acute leukemia.",
            redFlags: [
                "Thrombotic events (stroke, MI, Budd-Chiari) may be presenting sign",
                "Transformation to acute leukemia (blast phase) is poor prognosis",
                "Severe splenomegaly can cause hypersplenism and cytopenias",
                "Aquagenic pruritus (itching after warm shower) is classic for polycythemia vera"
            ],
            initialWorkup: [
                "CBC with differential",
                "JAK2 V617F mutation (90% PV, 50% ET, 50% PMF)",
                "EPO level (low in PV, normal/high in secondary polycythemia)",
                "Bone marrow biopsy (fibrosis in PMF, hypercellularity in PV/ET)",
                "Peripheral smear (teardrop cells in PMF)",
                "Abdominal ultrasound (splenomegaly, portal vein thrombosis)"
            ],
            differentialCategories: [
                "Myeloproliferative neoplasms: PV, ET, PMF, CML",
                "Myelodysplastic syndromes: refractory anemia, RARS, RAEB (precursors to AML)"
            ]
        }
    },
    {
        id: "plasma-cell-disorders",
        name: "Plasma Cell Disorders",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "multiple-myeloma",
            "waldenstrom-macroglobulinemia",
            "mgus",
            "amyloidosis"
        ],
        pageType: "category",
        detail: {
            approach: "Plasma cell disorders: clonal proliferation of plasma cells producing monoclonal immunoglobulin. MGUS (asymptomatic, <10% plasma cells) → smoldering myeloma → multiple myeloma (CRAB criteria: hyperCalcemia, Renal failure, Anemia, Bone lesions). Waldenstrom: IgM paraprotein, hyperviscosity. Amyloidosis: organ deposition of misfolded proteins.",
            redFlags: [
                "Hyperviscosity syndrome (blurred vision, bleeding, neurologic symptoms) → plasmapheresis urgently",
                "Spinal cord compression from vertebral lesions → neurosurgical emergency",
                "Hypercalcemia (>14 mg/dL) → aggressive IV fluids, bisphosphonates",
                "Acute renal failure from light chain deposition or hypercalcemia"
            ],
            initialWorkup: [
                "SPEP/UPEP (serum/urine protein electrophoresis) - M-spike",
                "Serum free light chains (kappa/lambda ratio)",
                "Bone marrow biopsy (≥10% plasma cells for myeloma)",
                "Skeletal survey or PET-CT (lytic bone lesions)",
                "CBC, BMP, calcium, LDH, β2-microglobulin",
                "24-hour urine for Bence Jones protein"
            ],
            differentialCategories: [
                "MGUS (monoclonal gammopathy of undetermined significance): asymptomatic, low risk of progression",
                "Multiple myeloma: CRAB criteria, ≥10% plasma cells",
                "Waldenstrom macroglobulinemia: IgM paraprotein, hyperviscosity, lymphoplasmacytic lymphoma",
                "AL amyloidosis: light chain deposition in organs (heart, kidney, liver, nerves)"
            ]
        }
    },
    {
        id: "transfusion-medicine",
        name: "Transfusion Medicine",
        system: "hematology-oncology",
        type: "category",
        diseaseIds: [
            "acute-hemolytic-transfusion-reaction",
            "febrile-nonhemolytic-transfusion-reaction",
            "allergic-transfusion-reaction",
            "transfusion-related-acute-lung-injury",
            "transfusion-associated-circulatory-overload"
        ],
        pageType: "category",
        detail: {
            approach: "Transfusion reactions: immediate (within 24h) vs delayed (>24h). Immediate: acute hemolytic (ABO incompatibility), FNHTR (cytokine release), allergic (urticaria), anaphylactic, TRALI (acute lung injury), TACO (volume overload), bacterial contamination. Delayed: delayed hemolytic, iron overload, GVHD.",
            redFlags: [
                "Fever, hypotension, flank pain during transfusion → acute hemolytic reaction → STOP transfusion immediately",
                "Dyspnea, hypoxemia within 6h → TRALI vs TACO (differentiate by BNP, CVP)",
                "Anaphylaxis (hypotension, bronchospasm, angioedema) → IgA deficiency, stop transfusion, epinephrine",
                "Fever >1°C rise suggests FNHTR or bacterial contamination"
            ],
            initialWorkup: [
                "STOP transfusion immediately if acute reaction suspected",
                "Recheck blood type, direct Coombs test (hemolytic reaction)",
                "CBC, coagulation studies, LDH, haptoglobin, indirect bilirubin, urinalysis (hemoglobinuria)",
                "CXR (TRALI vs TACO)",
                "Blood cultures if fever (bacterial contamination)",
                "Return blood bag to blood bank for analysis"
            ],
            differentialCategories: [
                "Immediate reactions: acute hemolytic (ABO mismatch), FNHTR, allergic, TRALI, TACO, bacterial sepsis",
                "Delayed reactions: delayed hemolytic (minor antigen mismatch), iron overload, GVHD (immunocompromised patients)"
            ]
        }
    }
];

export default hematologyOncologyCategories;

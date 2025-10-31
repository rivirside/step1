// Hematology/Oncology - Drugs
// Auto-generated from modularize-data.js

const drugs = [

    {
        "id": "warfarin",
        "name": "Warfarin",
        "pharmacologicClass": "vitamin-k-antagonists",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Inhibit vitamin K epoxide reductase, preventing synthesis of factors II, VII, IX, X.",
        "features": "Requires INR monitoring, reversible with vitamin K.",
        "clinicalChoice": "Long-term anticoagulation, mechanical valves.",
        "indications": [
            "Atrial Fibrillation",
            "DVT/PE",
            "Mechanical Heart Valves"
        ],
        "contraindications": [
            "Pregnancy",
            "Active Bleeding"
        ],
        "sideEffects": [
            "Bleeding",
            "Teratogenic",
            "Skin necrosis"
        ],
        "interactions": "Many drugs affect INR - antibiotics, NSAIDs, amiodarone.",
        "interactionDetails": "ANTIBIOTICS: MECHANISM - Antibiotics kill gut bacteria that produce vitamin K, reducing vitamin K availability. CONSEQUENCE - Enhanced anticoagulation and increased bleeding risk. NSAIDS: MECHANISM - NSAIDs inhibit platelet function and increase GI bleeding risk. CONSEQUENCE - Additive bleeding risk, especially GI bleeding.",
        "pageType": "drug"
    },
    {
        "id": "unfractionated-heparin",
        "name": "Unfractionated Heparin",
        "pharmacologicClass": "heparins",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Bind antithrombin III, enhancing inactivation of thrombin and factor Xa.",
        "features": "IV/SC, requires aPTT monitoring.",
        "clinicalChoice": "Acute anticoagulation, surgery.",
        "indications": [
            "DVT/PE",
            "ACS",
            "Perioperative"
        ],
        "contraindications": [
            "HIT History",
            "Active Bleeding"
        ],
        "sideEffects": [
            "Bleeding",
            "HIT (heparin-induced thrombocytopenia)",
            "Osteoporosis"
        ],
        "interactions": "Antiplatelet agents (increased bleeding).",
        "interactionDetails": "ANTIPLATELET AGENTS: MECHANISM - Heparins prevent fibrin formation while antiplatelets prevent platelet aggregation. CONSEQUENCE - Synergistic bleeding risk affecting both primary and secondary hemostasis.",
        "pageType": "drug"
    },
    {
        "id": "enoxaparin-lmwh",
        "name": "Enoxaparin (LMWH)",
        "pharmacologicClass": "heparins",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Bind antithrombin III, enhancing inactivation of thrombin and factor Xa.",
        "features": "Subcutaneous, predictable dosing.",
        "clinicalChoice": "Outpatient DVT treatment, prophylaxis.",
        "indications": [
            "DVT/PE",
            "ACS",
            "VTE Prophylaxis"
        ],
        "contraindications": [
            "Severe Renal Impairment",
            "Active Bleeding"
        ],
        "sideEffects": [
            "Bleeding",
            "HIT (heparin-induced thrombocytopenia)",
            "Osteoporosis"
        ],
        "interactions": "Antiplatelet agents (increased bleeding).",
        "interactionDetails": "ANTIPLATELET AGENTS: MECHANISM - Heparins prevent fibrin formation while antiplatelets prevent platelet aggregation. CONSEQUENCE - Synergistic bleeding risk affecting both primary and secondary hemostasis.",
        "pageType": "drug"
    },
    {
        "id": "argatroban",
        "name": "Argatroban",
        "pharmacologicClass": "parenteral-direct-thrombin-inhibitors",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Directly inhibit thrombin independent of antithrombin III.",
        "features": "IV, hepatic clearance.",
        "clinicalChoice": "Anticoagulation in HIT.",
        "indications": [
            "Heparin-Induced Thrombocytopenia"
        ],
        "contraindications": [
            "Severe Hepatic Impairment"
        ],
        "sideEffects": [
            "Bleeding",
            "Hematoma",
            "GI upset"
        ],
        "interactions": "Additive bleeding with antiplatelets/anticoagulants.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "bivalirudin",
        "name": "Bivalirudin",
        "pharmacologicClass": "parenteral-direct-thrombin-inhibitors",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Directly inhibit thrombin independent of antithrombin III.",
        "features": "Short half-life, renal clearance.",
        "clinicalChoice": "PCI in patients with HIT history.",
        "indications": [
            "Percutaneous Coronary Intervention",
            "HIT"
        ],
        "contraindications": [
            "Severe Renal Impairment"
        ],
        "sideEffects": [
            "Bleeding",
            "Hematoma",
            "GI upset"
        ],
        "interactions": "Additive bleeding with antiplatelets/anticoagulants.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "dabigatran",
        "name": "Dabigatran",
        "pharmacologicClass": "direct-oral-anticoagulants-doacs",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Direct inhibition of thrombin (dabigatran) or factor Xa (rivaroxaban, apixaban).",
        "features": "Direct thrombin inhibitor, reversible with idarucizumab.",
        "clinicalChoice": "A-fib with normal renal function.",
        "indications": [
            "Atrial Fibrillation",
            "DVT/PE"
        ],
        "contraindications": [
            "Mechanical Heart Valves",
            "Severe Renal Impairment"
        ],
        "sideEffects": [
            "Bleeding",
            "GI upset",
            "No easy reversal (except dabigatran)"
        ],
        "interactions": "P-gp inhibitors (increased levels), rifampin (decreased levels).",
        "interactionDetails": "P-GLYCOPROTEIN INHIBITORS: MECHANISM - DOACs are substrates for P-gp efflux pump. Inhibitors like amiodarone, verapamil increase DOAC levels. CONSEQUENCE - Increased bleeding risk requiring dose reduction.",
        "pageType": "drug"
    },
    {
        "id": "rivaroxaban",
        "name": "Rivaroxaban",
        "pharmacologicClass": "direct-oral-anticoagulants-doacs",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Direct inhibition of thrombin (dabigatran) or factor Xa (rivaroxaban, apixaban).",
        "features": "Factor Xa inhibitor, once daily dosing.",
        "clinicalChoice": "A-fib, VTE treatment/prophylaxis.",
        "indications": [
            "Atrial Fibrillation",
            "DVT/PE",
            "VTE Prophylaxis"
        ],
        "contraindications": [
            "Severe Hepatic Impairment"
        ],
        "sideEffects": [
            "Bleeding",
            "GI upset",
            "No easy reversal (except dabigatran)"
        ],
        "interactions": "P-gp inhibitors (increased levels), rifampin (decreased levels).",
        "interactionDetails": "P-GLYCOPROTEIN INHIBITORS: MECHANISM - DOACs are substrates for P-gp efflux pump. Inhibitors like amiodarone, verapamil increase DOAC levels. CONSEQUENCE - Increased bleeding risk requiring dose reduction.",
        "pageType": "drug"
    },
    {
        "id": "apixaban",
        "name": "Apixaban",
        "pharmacologicClass": "direct-oral-anticoagulants-doacs",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Direct inhibition of thrombin (dabigatran) or factor Xa (rivaroxaban, apixaban).",
        "features": "Factor Xa inhibitor, twice daily, lowest bleeding risk.",
        "clinicalChoice": "A-fib in elderly, bleeding-prone patients.",
        "indications": [
            "Atrial Fibrillation",
            "DVT/PE"
        ],
        "contraindications": [
            "Active Bleeding"
        ],
        "sideEffects": [
            "Bleeding",
            "GI upset",
            "No easy reversal (except dabigatran)"
        ],
        "interactions": "P-gp inhibitors (increased levels), rifampin (decreased levels).",
        "interactionDetails": "P-GLYCOPROTEIN INHIBITORS: MECHANISM - DOACs are substrates for P-gp efflux pump. Inhibitors like amiodarone, verapamil increase DOAC levels. CONSEQUENCE - Increased bleeding risk requiring dose reduction.",
        "pageType": "drug"
    },
    {
        "id": "aspirin",
        "name": "Aspirin",
        "pharmacologicClasses": [
            "cyclooxygenase-inhibitors",
            "nsaids"
        ],
        "pharmacologicClass": "cyclooxygenase-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Irreversibly inhibit COX-1, preventing thromboxane A2 synthesis and platelet aggregation.",
        "features": "Irreversible COX inhibition, low-dose cardioprotective, antiplatelet.",
        "clinicalChoice": "Primary/secondary CVD prevention, antipyretic, analgesic.",
        "indications": [
            "ACS",
            "Stroke Prevention",
            "MI Prevention",
            "Cardiovascular Protection",
            "Fever",
            "Pain"
        ],
        "contraindications": [
            "Active GI Bleeding",
            "Children with Viral Illness"
        ],
        "sideEffects": [
            "GI bleeding",
            "Peptic ulcers",
            "Reye syndrome (children)",
            "Platelet dysfunction"
        ],
        "interactions": "Warfarin (increased bleeding), methotrexate (increased toxicity), ACE inhibitors, lithium.",
        "interactionDetails": "WARFARIN: MECHANISM - Aspirin affects platelet function while warfarin affects coagulation cascade. NSAIDs also displace warfarin from protein binding sites. CONSEQUENCE - Additive bleeding risk affecting both primary and secondary hemostasis. ACE INHIBITORS: MECHANISM - NSAIDs block cyclooxygenase, reducing prostaglandin E2 and prostacyclin production. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury. LITHIUM: MECHANISM - NSAIDs reduce renal blood flow and GFR, decreasing lithium clearance. CONSEQUENCE - Lithium toxicity.",
        "pageType": "drug"
    },
    {
        "id": "clopidogrel",
        "name": "Clopidogrel",
        "pharmacologicClass": "p2y12-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block P2Y12 receptors on platelets, preventing ADP-induced platelet aggregation.",
        "features": "Prodrug, requires CYP2C19 activation.",
        "clinicalChoice": "Dual antiplatelet therapy with aspirin.",
        "indications": [
            "ACS",
            "PCI",
            "Stroke Prevention"
        ],
        "contraindications": [
            "Active Bleeding",
            "Severe Hepatic Impairment"
        ],
        "sideEffects": [
            "Bleeding",
            "Thrombotic thrombocytopenic purpura (TTP)"
        ],
        "interactions": "CYP2C19 inhibitors affect clopidogrel efficacy.",
        "interactionDetails": "CYP2C19 INHIBITORS: MECHANISM - Clopidogrel is a prodrug requiring CYP2C19 activation. Inhibitors like omeprazole reduce active metabolite formation. CONSEQUENCE - Reduced antiplatelet efficacy and increased thrombotic risk.",
        "pageType": "drug"
    },
    {
        "id": "ticagrelor",
        "name": "Ticagrelor",
        "pharmacologicClass": "p2y12-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block P2Y12 receptors on platelets, preventing ADP-induced platelet aggregation.",
        "features": "Reversible inhibitor, more potent than clopidogrel.",
        "clinicalChoice": "ACS, high thrombotic risk patients.",
        "indications": [
            "ACS",
            "High-Risk CAD"
        ],
        "contraindications": [
            "Active Bleeding",
            "History of ICH"
        ],
        "sideEffects": [
            "Bleeding",
            "Thrombotic thrombocytopenic purpura (TTP)"
        ],
        "interactions": "CYP2C19 inhibitors affect clopidogrel efficacy.",
        "interactionDetails": "CYP2C19 INHIBITORS: MECHANISM - Clopidogrel is a prodrug requiring CYP2C19 activation. Inhibitors like omeprazole reduce active metabolite formation. CONSEQUENCE - Reduced antiplatelet efficacy and increased thrombotic risk.",
        "pageType": "drug"
    },
    {
        "id": "abciximab",
        "name": "Abciximab",
        "pharmacologicClass": "gpiib-iiia-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block platelet glycoprotein IIb/IIIa receptors, preventing fibrinogen binding and aggregation.",
        "features": "Monoclonal antibody, reversible with platelet transfusion.",
        "clinicalChoice": "PCI with high thrombotic risk.",
        "indications": [
            "Percutaneous Coronary Intervention"
        ],
        "contraindications": [
            "Active Bleeding",
            "Recent Stroke"
        ],
        "sideEffects": [
            "Bleeding",
            "Thrombocytopenia"
        ],
        "interactions": "Additive bleeding with anticoagulants.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "eptifibatide",
        "name": "Eptifibatide",
        "pharmacologicClass": "gpiib-iiia-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block platelet glycoprotein IIb/IIIa receptors, preventing fibrinogen binding and aggregation.",
        "features": "Peptide inhibitor, renal clearance.",
        "clinicalChoice": "NSTEMI/UA undergoing PCI.",
        "indications": [
            "Acute Coronary Syndrome"
        ],
        "contraindications": [
            "Renal Failure",
            "Active Bleeding"
        ],
        "sideEffects": [
            "Bleeding",
            "Thrombocytopenia"
        ],
        "interactions": "Additive bleeding with anticoagulants.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "tirofiban",
        "name": "Tirofiban",
        "pharmacologicClass": "gpiib-iiia-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block platelet glycoprotein IIb/IIIa receptors, preventing fibrinogen binding and aggregation.",
        "features": "Non-peptide small molecule.",
        "clinicalChoice": "Unstable angina with planned PCI.",
        "indications": [
            "Acute Coronary Syndrome"
        ],
        "contraindications": [
            "Active Bleeding",
            "History of Intracranial Hemorrhage"
        ],
        "sideEffects": [
            "Bleeding",
            "Thrombocytopenia"
        ],
        "interactions": "Additive bleeding with anticoagulants.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "cilostazol",
        "name": "Cilostazol",
        "pharmacologicClass": "phosphodiesterase-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Increase cAMP in platelets and cause vasodilation to reduce aggregation.",
        "features": "Also causes vasodilation, improves claudication distance.",
        "clinicalChoice": "Peripheral arterial disease with claudication.",
        "indications": [
            "Peripheral Arterial Disease"
        ],
        "contraindications": [
            "Heart Failure"
        ],
        "sideEffects": [
            "Headache",
            "Flushing",
            "Hypotension"
        ],
        "interactions": "Other vasodilators increase risk of symptomatic hypotension.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "dipyridamole",
        "name": "Dipyridamole",
        "pharmacologicClass": "phosphodiesterase-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Increase cAMP in platelets and cause vasodilation to reduce aggregation.",
        "features": "Also adenosine reuptake inhibitor.",
        "clinicalChoice": "Stroke prevention with aspirin, stress testing.",
        "indications": [
            "Stroke Prevention",
            "Pharmacologic Stress Testing"
        ],
        "contraindications": [
            "Hypotension",
            "Unstable Angina"
        ],
        "sideEffects": [
            "Headache",
            "Flushing",
            "Hypotension"
        ],
        "interactions": "Other vasodilators increase risk of symptomatic hypotension.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "cyclophosphamide",
        "name": "Cyclophosphamide",
        "pharmacologicClass": "alkylating-agents",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Cross-link DNA strands, preventing replication and causing cell death.",
        "features": "Requires hepatic activation, hemorrhagic cystitis risk.",
        "clinicalChoice": "Lymphomas, autoimmune diseases.",
        "indications": [
            "Lymphoma",
            "Breast Cancer",
            "Autoimmune Diseases"
        ],
        "contraindications": [
            "Severe Myelosuppression",
            "Pregnancy"
        ],
        "sideEffects": [
            "Myelosuppression",
            "Secondary malignancies",
            "Infertility"
        ],
        "interactions": "Live vaccines (immunosuppression).",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "mechlorethamine",
        "name": "Mechlorethamine",
        "pharmacologicClass": "alkylating-agents",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Cross-link DNA strands, preventing replication and causing cell death.",
        "features": "Nitrogen mustard, vesicant.",
        "clinicalChoice": "Hodgkin lymphoma.",
        "indications": [
            "Hodgkin Lymphoma"
        ],
        "contraindications": [
            "Pregnancy",
            "Severe Myelosuppression"
        ],
        "sideEffects": [
            "Myelosuppression",
            "Secondary malignancies",
            "Infertility"
        ],
        "interactions": "Live vaccines (immunosuppression).",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "doxorubicin",
        "name": "Doxorubicin",
        "pharmacologicClass": "antitumor-antibiotics",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Intercalate DNA or generate free radicals to inhibit replication.",
        "features": "Anthracycline generating free radicals.",
        "clinicalChoice": "Breast cancer, lymphomas.",
        "indications": [
            "Breast Cancer",
            "Lymphoma"
        ],
        "contraindications": [
            "Pre-existing Cardiac Dysfunction"
        ],
        "sideEffects": [
            "Cardiotoxicity (doxorubicin)",
            "Pulmonary fibrosis (bleomycin)",
            "Myelosuppression"
        ],
        "interactions": "Dexrazoxane mitigates doxorubicin cardiotoxicity.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "bleomycin",
        "name": "Bleomycin",
        "pharmacologicClass": "antitumor-antibiotics",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Intercalate DNA or generate free radicals to inhibit replication.",
        "features": "Induces DNA strand breaks via free radicals.",
        "clinicalChoice": "Testicular cancer, Hodgkin lymphoma.",
        "indications": [
            "Testicular Cancer",
            "Hodgkin Lymphoma"
        ],
        "contraindications": [
            "Pulmonary Fibrosis"
        ],
        "sideEffects": [
            "Cardiotoxicity (doxorubicin)",
            "Pulmonary fibrosis (bleomycin)",
            "Myelosuppression"
        ],
        "interactions": "Dexrazoxane mitigates doxorubicin cardiotoxicity.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "methotrexate",
        "name": "Methotrexate",
        "pharmacologicClass": "antimetabolites",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Mimic normal metabolites, interfere with DNA/RNA synthesis.",
        "features": "Folate analog, requires leucovorin rescue. | Folate analog, requires folate supplementation.",
        "clinicalChoice": "ALL, rheumatoid arthritis.",
        "indications": [
            "Crohn Disease",
            "Leukemia",
            "Psoriasis",
            "Psoriatic Arthritis",
            "Rheumatoid Arthritis"
        ],
        "contraindications": [
            "Pregnancy",
            "Severe Renal/Hepatic Impairment"
        ],
        "sideEffects": [
            "Myelosuppression",
            "Mucositis",
            "Hepatotoxicity"
        ],
        "interactions": "Folate supplements reduce methotrexate efficacy.",
        "interactionDetails": "",
        "pageType": "drug",
        "pharmacologicClasses": [
            "antimetabolites",
            "disease-modifying-antirheumatic-drugs-dmards"
        ]
    },
    {
        "id": "5-fluorouracil-5-fu",
        "name": "5-Fluorouracil (5-FU)",
        "pharmacologicClass": "antimetabolites",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Mimic normal metabolites, interfere with DNA/RNA synthesis.",
        "features": "Pyrimidine analog, S-phase specific.",
        "clinicalChoice": "Colorectal, breast cancer.",
        "indications": [
            "Colorectal Cancer",
            "Breast Cancer"
        ],
        "contraindications": [
            "DPD Deficiency",
            "Pregnancy"
        ],
        "sideEffects": [
            "Myelosuppression",
            "Mucositis",
            "Hepatotoxicity"
        ],
        "interactions": "Folate supplements reduce methotrexate efficacy.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "vincristine",
        "name": "Vincristine",
        "pharmacologicClass": "microtubule-inhibitors",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Disrupt microtubule dynamics to arrest cells in metaphase.",
        "features": "Prevents microtubule polymerization.",
        "clinicalChoice": "Leukemias, lymphomas (part of CHOP).",
        "indications": [
            "Leukemia",
            "Lymphoma"
        ],
        "contraindications": [
            "Charcot-Marie-Tooth Disease"
        ],
        "sideEffects": [
            "Peripheral neuropathy",
            "Myelosuppression",
            "Alopecia"
        ],
        "interactions": "Strong CYP3A4 inhibitors increase toxicity.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "paclitaxel",
        "name": "Paclitaxel",
        "pharmacologicClass": "microtubule-inhibitors",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Disrupt microtubule dynamics to arrest cells in metaphase.",
        "features": "Stabilizes microtubules, preventing depolymerization.",
        "clinicalChoice": "Breast and ovarian cancers.",
        "indications": [
            "Breast Cancer",
            "Ovarian Cancer"
        ],
        "contraindications": [
            "Baseline Neutropenia"
        ],
        "sideEffects": [
            "Peripheral neuropathy",
            "Myelosuppression",
            "Alopecia"
        ],
        "interactions": "Strong CYP3A4 inhibitors increase toxicity.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "etoposide",
        "name": "Etoposide",
        "pharmacologicClass": "topoisomerase-inhibitors",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Inhibit topoisomerase II or I to prevent DNA unwinding and replication.",
        "features": "Topoisomerase II inhibitor.",
        "clinicalChoice": "Testicular cancer, small cell lung cancer.",
        "indications": [
            "Testicular Cancer",
            "Small Cell Lung Cancer"
        ],
        "contraindications": [
            "Severe Myelosuppression"
        ],
        "sideEffects": [
            "Myelosuppression",
            "Alopecia",
            "Diarrhea (irinotecan)"
        ],
        "interactions": "CYP3A4 modulators alter irinotecan levels.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "irinotecan",
        "name": "Irinotecan",
        "pharmacologicClass": "topoisomerase-inhibitors",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Inhibit topoisomerase II or I to prevent DNA unwinding and replication.",
        "features": "Topoisomerase I inhibitor, prodrug.",
        "clinicalChoice": "Metastatic colorectal cancer (FOLFIRI).",
        "indications": [
            "Colorectal Cancer"
        ],
        "contraindications": [
            "UGT1A1 Deficiency"
        ],
        "sideEffects": [
            "Myelosuppression",
            "Alopecia",
            "Diarrhea (irinotecan)"
        ],
        "interactions": "CYP3A4 modulators alter irinotecan levels.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "imatinib",
        "name": "Imatinib",
        "pharmacologicClass": "targeted-therapies",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Monoclonal antibodies or tyrosine kinase inhibitors directed at specific oncogenic drivers.",
        "features": "BCR-ABL tyrosine kinase inhibitor.",
        "clinicalChoice": "Chronic myelogenous leukemia.",
        "indications": [
            "Chronic Myelogenous Leukemia",
            "GIST"
        ],
        "contraindications": [
            "Severe Hepatic Impairment"
        ],
        "sideEffects": [
            "Cardiotoxicity (trastuzumab)",
            "Fluid retention (imatinib)",
            "Bleeding (bevacizumab)"
        ],
        "interactions": "Concomitant cardiotoxic or anticoagulant therapy increases adverse effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "trastuzumab",
        "name": "Trastuzumab",
        "pharmacologicClass": "targeted-therapies",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Monoclonal antibodies or tyrosine kinase inhibitors directed at specific oncogenic drivers.",
        "features": "HER2/neu monoclonal antibody.",
        "clinicalChoice": "HER2-positive breast cancer.",
        "indications": [
            "Breast Cancer"
        ],
        "contraindications": [
            "Pre-existing Cardiac Dysfunction"
        ],
        "sideEffects": [
            "Cardiotoxicity (trastuzumab)",
            "Fluid retention (imatinib)",
            "Bleeding (bevacizumab)"
        ],
        "interactions": "Concomitant cardiotoxic or anticoagulant therapy increases adverse effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "bevacizumab",
        "name": "Bevacizumab",
        "pharmacologicClass": "targeted-therapies",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Monoclonal antibodies or tyrosine kinase inhibitors directed at specific oncogenic drivers.",
        "features": "VEGF inhibitor reducing angiogenesis.",
        "clinicalChoice": "Colorectal, renal cell carcinoma.",
        "indications": [
            "Colorectal Cancer",
            "Renal Cell Carcinoma"
        ],
        "contraindications": [
            "Uncontrolled Hypertension",
            "Recent Surgery"
        ],
        "sideEffects": [
            "Cardiotoxicity (trastuzumab)",
            "Fluid retention (imatinib)",
            "Bleeding (bevacizumab)"
        ],
        "interactions": "Concomitant cardiotoxic or anticoagulant therapy increases adverse effects.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "filgrastim-g-csf",
        "name": "Filgrastim (G-CSF)",
        "pharmacologicClass": "colony-stimulating-factors",
        "therapeuticClass": "hematopoietic-growth-factors",
        "system": "hematology-oncology",
        "mechanism": "Stimulate bone marrow production and differentiation of blood cells.",
        "features": "Stimulates neutrophil production.",
        "clinicalChoice": "Chemotherapy-induced neutropenia.",
        "indications": [
            "Chemotherapy-Induced Neutropenia",
            "Bone Marrow Transplant"
        ],
        "contraindications": [
            "Hypersensitivity"
        ],
        "sideEffects": [
            "Bone pain",
            "Splenomegaly",
            "Injection site reactions"
        ],
        "interactions": "Lithium may potentiate neutrophil production.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "epoetin-alfa-epo",
        "name": "Epoetin alfa (EPO)",
        "pharmacologicClass": "colony-stimulating-factors",
        "therapeuticClass": "hematopoietic-growth-factors",
        "system": "hematology-oncology",
        "mechanism": "Stimulate bone marrow production and differentiation of blood cells.",
        "features": "Stimulates red blood cell production.",
        "clinicalChoice": "Anemia in CKD, chemotherapy.",
        "indications": [
            "CKD Anemia",
            "Chemotherapy-Induced Anemia"
        ],
        "contraindications": [
            "Uncontrolled Hypertension",
            "Pure Red Cell Aplasia"
        ],
        "sideEffects": [
            "Bone pain",
            "Splenomegaly",
            "Injection site reactions"
        ],
        "interactions": "Lithium may potentiate neutrophil production.",
        "interactionDetails": "",
        "pageType": "drug"
    },
    {
        "id": "edoxaban",
        "name": "Edoxaban",
        "pharmacologicClass": "direct-factor-xa-inhibitors",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Directly inhibit Factor Xa, preventing thrombin generation and clot formation.",
        "features": "Once-daily dosing, renal dose adjustment required, NO reversal agent (andexanet alfa for class).",
        "clinicalChoice": "Non-valvular atrial fibrillation, VTE treatment (after 5-10 days of heparin).",
        "indications": [
            "Non-Valvular Atrial Fibrillation (stroke prevention)",
            "Venous Thromboembolism (DVT/PE treatment)"
        ],
        "contraindications": [
            "Active Bleeding",
            "Severe Hepatic Impairment",
            "CrCl >95 mL/min (paradoxically CONTRAINDICATED in A-fib due to ↓ efficacy)"
        ],
        "sideEffects": [
            "Bleeding (major/minor)",
            "Anemia",
            "Rash",
            "Liver enzyme elevations"
        ],
        "interactions": "P-glycoprotein inhibitors/inducers (alter edoxaban levels), antiplatelet agents (↑ bleeding).",
        "interactionDetails": "P-GLYCOPROTEIN INHIBITORS: MECHANISM - Edoxaban is a P-gp substrate. Inhibitors (quinidine, verapamil, dronedarone) increase edoxaban levels. CONSEQUENCE - Increased bleeding risk. Reduce edoxaban dose by 50% with potent P-gp inhibitors. P-GLYCOPROTEIN INDUCERS: MECHANISM - Inducers (rifampin, phenytoin) decrease edoxaban levels. CONSEQUENCE - Reduced anticoagulant efficacy, increased thrombosis risk. Avoid concurrent use. ANTIPLATELETS: MECHANISM - Additive antiplatelet and anticoagulant effects. CONSEQUENCE - Significantly increased bleeding risk. Use caution with aspirin, NSAIDs, or P2Y12 inhibitors.",
        "pageType": "drug"
    },
    {
        "id": "prasugrel",
        "name": "Prasugrel",
        "pharmacologicClass": "p2y12-inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Irreversibly inhibit P2Y12 receptor on platelets, preventing ADP-mediated platelet activation and aggregation.",
        "features": "More potent and faster onset than clopidogrel, prodrug requiring activation.",
        "clinicalChoice": "ACS managed with PCI, patients with clopidogrel resistance (CYP2C19 poor metabolizers).",
        "indications": [
            "Acute Coronary Syndrome (with PCI)",
            "STEMI/NSTEMI"
        ],
        "contraindications": [
            "Active Bleeding",
            "History of Stroke/TIA (increased bleeding risk)",
            "Age ≥75 years (relative contraindication)",
            "Body weight <60 kg (relative contraindication)"
        ],
        "sideEffects": [
            "Bleeding (higher risk than clopidogrel)",
            "Thrombotic thrombocytopenic purpura (rare)",
            "Anemia",
            "Bruising"
        ],
        "interactions": "Anticoagulants (warfarin, DOACs - ↑ bleeding), NSAIDs (↑ bleeding), fibrinolytics.",
        "interactionDetails": "ANTICOAGULANTS: MECHANISM - Prasugrel inhibits platelet aggregation. Anticoagulants inhibit coagulation cascade. Combined effects are additive. CONSEQUENCE - Significantly increased bleeding risk. Use with caution, especially triple therapy (DAPT + anticoagulant). Monitor closely. NSAIDS: MECHANISM - NSAIDs inhibit COX-1, reducing thromboxane A2 and platelet function. Additive with prasugrel. CONSEQUENCE - Increased GI and systemic bleeding. Avoid concurrent NSAIDs when possible, use PPIs if necessary.",
        "pageType": "drug"
    }

];export default drugs;

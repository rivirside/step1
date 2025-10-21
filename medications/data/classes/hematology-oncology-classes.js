// Hematology/Oncology - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "vitamin-k-antagonists",
        "name": "Vitamin K Antagonists",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Inhibit vitamin K epoxide reductase, preventing synthesis of factors II, VII, IX, X.",
        "sideEffects": [
            "Bleeding",
            "Teratogenic",
            "Skin necrosis"
        ],
        "interactions": "Many drugs affect INR - antibiotics, NSAIDs, amiodarone.",
        "interactionDetails": "ANTIBIOTICS: MECHANISM - Antibiotics kill gut bacteria that produce vitamin K, reducing vitamin K availability. CONSEQUENCE - Enhanced anticoagulation and increased bleeding risk. NSAIDS: MECHANISM - NSAIDs inhibit platelet function and increase GI bleeding risk. CONSEQUENCE - Additive bleeding risk, especially GI bleeding.",
        "drugIds": [
            "warfarin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "heparins",
        "name": "Heparins",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Bind antithrombin III, enhancing inactivation of thrombin and factor Xa.",
        "sideEffects": [
            "Bleeding",
            "HIT (heparin-induced thrombocytopenia)",
            "Osteoporosis"
        ],
        "interactions": "Antiplatelet agents (increased bleeding).",
        "interactionDetails": "ANTIPLATELET AGENTS: MECHANISM - Heparins prevent fibrin formation while antiplatelets prevent platelet aggregation. CONSEQUENCE - Synergistic bleeding risk affecting both primary and secondary hemostasis.",
        "drugIds": [
            "unfractionated-heparin",
            "enoxaparin-lmwh"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "parenteral-direct-thrombin-inhibitors",
        "name": "Parenteral Direct Thrombin Inhibitors",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Directly inhibit thrombin independent of antithrombin III.",
        "sideEffects": [
            "Bleeding",
            "Hematoma",
            "GI upset"
        ],
        "interactions": "Additive bleeding with antiplatelets/anticoagulants.",
        "interactionDetails": "",
        "drugIds": [
            "argatroban",
            "bivalirudin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "direct-oral-anticoagulants-doacs",
        "name": "Direct Oral Anticoagulants (DOACs)",
        "therapeuticClass": "anticoagulants",
        "system": "hematology-oncology",
        "mechanism": "Direct inhibition of thrombin (dabigatran) or factor Xa (rivaroxaban, apixaban).",
        "sideEffects": [
            "Bleeding",
            "GI upset",
            "No easy reversal (except dabigatran)"
        ],
        "interactions": "P-gp inhibitors (increased levels), rifampin (decreased levels).",
        "interactionDetails": "P-GLYCOPROTEIN INHIBITORS: MECHANISM - DOACs are substrates for P-gp efflux pump. Inhibitors like amiodarone, verapamil increase DOAC levels. CONSEQUENCE - Increased bleeding risk requiring dose reduction.",
        "drugIds": [
            "dabigatran",
            "rivaroxaban",
            "apixaban"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anticoagulants",
        "name": "Anticoagulants",
        "system": "hematology-oncology",
        "pharmacologicClassIds": [
            "vitamin-k-antagonists",
            "heparins",
            "parenteral-direct-thrombin-inhibitors",
            "direct-oral-anticoagulants-doacs"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "cyclooxygenase-inhibitors",
        "name": "Cyclooxygenase Inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Irreversibly inhibit COX-1, preventing thromboxane A2 synthesis and platelet aggregation.",
        "sideEffects": [
            "GI bleeding",
            "Peptic ulcers",
            "Reye syndrome (children)"
        ],
        "interactions": "Warfarin (increased bleeding), methotrexate (increased toxicity).",
        "interactionDetails": "WARFARIN: MECHANISM - Aspirin affects platelet function while warfarin affects coagulation cascade. CONSEQUENCE - Additive bleeding risk affecting both primary and secondary hemostasis.",
        "drugIds": [
            "aspirin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "p2y12-inhibitors",
        "name": "P2Y12 Inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block P2Y12 receptors on platelets, preventing ADP-induced platelet aggregation.",
        "sideEffects": [
            "Bleeding",
            "Thrombotic thrombocytopenic purpura (TTP)"
        ],
        "interactions": "CYP2C19 inhibitors affect clopidogrel efficacy.",
        "interactionDetails": "CYP2C19 INHIBITORS: MECHANISM - Clopidogrel is a prodrug requiring CYP2C19 activation. Inhibitors like omeprazole reduce active metabolite formation. CONSEQUENCE - Reduced antiplatelet efficacy and increased thrombotic risk.",
        "drugIds": [
            "clopidogrel",
            "ticagrelor"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "gpiib-iiia-inhibitors",
        "name": "GPIIb/IIIa Inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Block platelet glycoprotein IIb/IIIa receptors, preventing fibrinogen binding and aggregation.",
        "sideEffects": [
            "Bleeding",
            "Thrombocytopenia"
        ],
        "interactions": "Additive bleeding with anticoagulants.",
        "interactionDetails": "",
        "drugIds": [
            "abciximab",
            "eptifibatide",
            "tirofiban"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "phosphodiesterase-inhibitors",
        "name": "Phosphodiesterase Inhibitors",
        "therapeuticClass": "antiplatelet-agents",
        "system": "hematology-oncology",
        "mechanism": "Increase cAMP in platelets and cause vasodilation to reduce aggregation.",
        "sideEffects": [
            "Headache",
            "Flushing",
            "Hypotension"
        ],
        "interactions": "Other vasodilators increase risk of symptomatic hypotension.",
        "interactionDetails": "",
        "drugIds": [
            "cilostazol",
            "dipyridamole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antiplatelet-agents",
        "name": "Antiplatelet Agents",
        "system": "hematology-oncology",
        "pharmacologicClassIds": [
            "cyclooxygenase-inhibitors",
            "p2y12-inhibitors",
            "gpiib-iiia-inhibitors",
            "phosphodiesterase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "alkylating-agents",
        "name": "Alkylating Agents",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Cross-link DNA strands, preventing replication and causing cell death.",
        "sideEffects": [
            "Myelosuppression",
            "Secondary malignancies",
            "Infertility"
        ],
        "interactions": "Live vaccines (immunosuppression).",
        "interactionDetails": "",
        "drugIds": [
            "cyclophosphamide",
            "mechlorethamine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antitumor-antibiotics",
        "name": "Antitumor Antibiotics",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Intercalate DNA or generate free radicals to inhibit replication.",
        "sideEffects": [
            "Cardiotoxicity (doxorubicin)",
            "Pulmonary fibrosis (bleomycin)",
            "Myelosuppression"
        ],
        "interactions": "Dexrazoxane mitigates doxorubicin cardiotoxicity.",
        "interactionDetails": "",
        "drugIds": [
            "doxorubicin",
            "bleomycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antimetabolites",
        "name": "Antimetabolites",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Mimic normal metabolites, interfere with DNA/RNA synthesis.",
        "sideEffects": [
            "Myelosuppression",
            "Mucositis",
            "Hepatotoxicity"
        ],
        "interactions": "Folate supplements reduce methotrexate efficacy.",
        "interactionDetails": "",
        "drugIds": [
            "methotrexate",
            "5-fluorouracil-5-fu"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "microtubule-inhibitors",
        "name": "Microtubule Inhibitors",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Disrupt microtubule dynamics to arrest cells in metaphase.",
        "sideEffects": [
            "Peripheral neuropathy",
            "Myelosuppression",
            "Alopecia"
        ],
        "interactions": "Strong CYP3A4 inhibitors increase toxicity.",
        "interactionDetails": "",
        "drugIds": [
            "vincristine",
            "paclitaxel"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "topoisomerase-inhibitors",
        "name": "Topoisomerase Inhibitors",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Inhibit topoisomerase II or I to prevent DNA unwinding and replication.",
        "sideEffects": [
            "Myelosuppression",
            "Alopecia",
            "Diarrhea (irinotecan)"
        ],
        "interactions": "CYP3A4 modulators alter irinotecan levels.",
        "interactionDetails": "",
        "drugIds": [
            "etoposide",
            "irinotecan"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "targeted-therapies",
        "name": "Targeted Therapies",
        "therapeuticClass": "chemotherapy-agents",
        "system": "hematology-oncology",
        "mechanism": "Monoclonal antibodies or tyrosine kinase inhibitors directed at specific oncogenic drivers.",
        "sideEffects": [
            "Cardiotoxicity (trastuzumab)",
            "Fluid retention (imatinib)",
            "Bleeding (bevacizumab)"
        ],
        "interactions": "Concomitant cardiotoxic or anticoagulant therapy increases adverse effects.",
        "interactionDetails": "",
        "drugIds": [
            "imatinib",
            "trastuzumab",
            "bevacizumab"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "chemotherapy-agents",
        "name": "Chemotherapy Agents",
        "system": "hematology-oncology",
        "pharmacologicClassIds": [
            "alkylating-agents",
            "antitumor-antibiotics",
            "antimetabolites",
            "microtubule-inhibitors",
            "topoisomerase-inhibitors",
            "targeted-therapies"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "colony-stimulating-factors",
        "name": "Colony Stimulating Factors",
        "therapeuticClass": "hematopoietic-growth-factors",
        "system": "hematology-oncology",
        "mechanism": "Stimulate bone marrow production and differentiation of blood cells.",
        "sideEffects": [
            "Bone pain",
            "Splenomegaly",
            "Injection site reactions"
        ],
        "interactions": "Lithium may potentiate neutrophil production.",
        "interactionDetails": "",
        "drugIds": [
            "filgrastim-g-csf",
            "epoetin-alfa-epo"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "hematopoietic-growth-factors",
        "name": "Hematopoietic Growth Factors",
        "system": "hematology-oncology",
        "pharmacologicClassIds": [
            "colony-stimulating-factors"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

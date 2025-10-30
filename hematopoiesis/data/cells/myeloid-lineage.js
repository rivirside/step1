// Myeloid Lineage Cells - Granulocytes and Monocytes

const cells = [
    {
        "id": "neutrophil",
        "name": "Neutrophil (Segmented)",
        "lineage": "granulocyte",
        "system": "hematopoietic",
        "markers": ["CD11b+", "CD16+", "CD66b+", "CD15+"],
        "morphology": "3-5 nuclear lobes (segmented), pale cytoplasm with fine pink/purple granules on Wright-Giemsa stain",
        "location": "Blood (40-70% of WBCs, absolute count 2,500-7,000/μL), tissues during acute inflammation",
        "size": "12-15 μm diameter",
        "function": "First responder to bacterial infection. Phagocytosis, degranulation, oxidative burst (respiratory burst), NETosis.",
        "lifespan": "6-8 hours in circulation, 1-2 days in tissues",
        "transcriptionFactors": ["C/EBPα", "C/EBPε", "PU.1"],
        "cytokines": {
            "differentiation": ["G-CSF (granulocyte colony-stimulating factor)"],
            "recruitment": ["IL-8 (CXCL8)", "C5a", "LTB4", "fMLP"]
        },
        "differentiatesFrom": "band-cell",
        "precursors": ["myeloblast", "promyelocyte", "myelocyte", "metamyelocyte", "band cell"],
        "granuleContents": {
            "primary": ["Myeloperoxidase (MPO)", "Defensins", "Lysozyme", "Elastase", "Proteinase 3"],
            "secondary": ["Lactoferrin", "Collagenase", "Vitamin B12 binding protein", "NADPH oxidase"],
            "tertiary": ["Gelatinase", "Cathepsins"]
        },
        "metabolism": {
            "respiratoryBurst": "NADPH oxidase (in secondary granules) generates superoxide → hydrogen peroxide → hypochlorous acid (via MPO)",
            "energySource": "Primarily glycolysis (can function in anaerobic conditions)"
        },
        "clinicalRelevance": [
            "Elevated in bacterial infections, appendicitis, MI, burns, stress",
            "Left shift = increased band cells (immature neutrophils) indicates acute infection",
            "Target of G-CSF therapy (filgrastim) for chemotherapy-induced neutropenia",
            "Deficiency (<500/μL) = high risk of severe bacterial infections",
            "First cells to arrive at acute inflammation site (within 30 min-1 hr)"
        ],
        "diseases": [
            "Neutropenia - chemotherapy, aplastic anemia, Kostmann syndrome",
            "Leukocytosis - infection, CML, leukemoid reaction",
            "Chronic granulomatous disease (CGD) - defective NADPH oxidase (no respiratory burst)",
            "Leukocyte adhesion deficiency (LAD) - can't migrate to tissues (CD18/CD11 defect)",
            "Chediak-Higashi syndrome - giant granules, impaired degranulation",
            "Myeloperoxidase deficiency - usually asymptomatic, increased Candida risk"
        ],
        "crossLinks": {
            "conditions": ["chronic-granulomatous-disease", "leukocyte-adhesion-deficiency"],
            "medications": ["filgrastim"]
        },
        "step1Pearls": [
            "Band cells = horseshoe-shaped nucleus. 'Left shift' (increased bands) = acute infection",
            "MPO stain POSITIVE (distinguishes from monocytes which are non-specific esterase+)",
            "Hypersegmented neutrophils (>5 lobes) = vitamin B12 or folate deficiency",
            "First responders to acute inflammation (hours), then replaced by monocytes/macrophages (days)",
            "Respiratory burst: NADPH oxidase → O2- → H2O2 → HOCl (bleach!). Kills bacteria.",
            "CGD: Nitroblue tetrazolium (NBT) test is NEGATIVE (can't make superoxide)",
            "LAD: Increased neutrophils in blood but can't get to tissues (recurrent infections without pus)",
            "G-CSF (filgrastim) increases neutrophil production - use after chemotherapy",
            "Toxic granulations = dark granules in infection. Döhle bodies = blue cytoplasmic inclusions",
            "Mnemonic: 'Neutrophils are the NEW kids on the block' (arrive first to infection)"
        ],
        "pageType": "cell"
    },
    {
        "id": "eosinophil",
        "name": "Eosinophil",
        "lineage": "granulocyte",
        "system": "hematopoietic",
        "markers": ["CD11b+", "CCR3+", "Siglec-8+"],
        "morphology": "Bi-lobed nucleus, bright red/orange (eosinophilic) granules on Wright-Giemsa stain",
        "location": "Blood (1-4% of WBCs), tissues (GI tract, lungs, skin)",
        "size": "12-17 μm diameter",
        "function": "Defense against parasitic infections (helminths), allergic responses, tissue remodeling. Release cytotoxic granule proteins.",
        "lifespan": "8-12 hours in blood, days to weeks in tissues",
        "transcriptionFactors": ["GATA1", "C/EBP family", "PU.1"],
        "cytokines": {
            "differentiation": ["IL-5 (primary eosinophil growth factor)", "IL-3", "GM-CSF"],
            "recruitment": ["Eotaxin (CCL11, CCL24, CCL26)", "IL-5", "RANTES"]
        },
        "differentiatesFrom": "eosinophil-myelocyte",
        "granuleContents": {
            "specific": ["Major basic protein (MBP) - toxic to parasites and epithelium", "Eosinophil cationic protein (ECP)", "Eosinophil peroxidase (EPO)", "Eosinophil-derived neurotoxin (EDN)"],
            "cytokines": ["IL-4", "IL-5", "IL-13", "TNF-α"]
        },
        "clinicalRelevance": [
            "Elevated in parasitic infections (helminths), allergic conditions, drug reactions",
            "Eosinophilia = >500 cells/μL (absolute count)",
            "Hypereosinophilia = >1,500 cells/μL → can cause tissue damage",
            "Major basic protein (MBP) damages respiratory epithelium in asthma"
        ],
        "diseases": [
            "Parasitic infections - ascariasis, strongyloidiasis, trichinosis, schistosomiasis",
            "Allergic conditions - asthma, atopic dermatitis, allergic rhinitis",
            "Drug reactions - sulfonamides, penicillins, NSAIDs",
            "Hypereosinophilic syndrome (HES) - idiopathic eosinophilia >1,500/μL with organ damage",
            "Eosinophilic granulomatosis with polyangiitis (Churg-Strauss) - asthma + eosinophilia + vasculitis",
            "Acute eosinophilic pneumonia",
            "Hodgkin lymphoma - reactive eosinophilia"
        ],
        "crossLinks": {
            "conditions": ["asthma", "eosinophilic-granulomatosis-with-polyangiitis"]
        },
        "step1Pearls": [
            "Eosinophils = 'Parasites And Allergies' (increased in both)",
            "IL-5 is THE eosinophil growth factor - mepolizumab (anti-IL-5) treats severe eosinophilic asthma",
            "MBP (major basic protein) = crystalloid core of granule, toxic to parasites AND host tissue",
            "Bilobed nucleus = 'spectacles' or 'eyeglasses' appearance",
            "Bright RED/ORANGE granules (eosin = red dye)",
            "NAACP mnemonic for eosinophilia: Neoplasm, Allergy/Asthma, Addison's disease, Collagen vascular disease (Churg-Strauss), Parasites",
            "Churg-Strauss (EGPA): Asthma + Eosinophilia + p-ANCA + Granulomas",
            "Hypereosinophilic syndrome: Eosinophils infiltrate heart → endomyocardial fibrosis",
            "Classic vignette: Patient with asthma + eosinophilia + pANCA + neuropathy → Churg-Strauss"
        ],
        "pageType": "cell"
    },
    {
        "id": "basophil",
        "name": "Basophil",
        "lineage": "granulocyte",
        "system": "hematopoietic",
        "markers": ["CD11b+", "FcεRI+", "CD123+"],
        "morphology": "Bi-lobed or irregular nucleus (often obscured by granules), large dark purple/blue basophilic granules on Wright-Giemsa stain",
        "location": "Blood (0.5-1% of WBCs, least common granulocyte)",
        "size": "10-14 μm diameter",
        "function": "Mediate allergic reactions (Type I hypersensitivity). Release histamine and heparin. Similar to mast cells but circulating.",
        "lifespan": "Hours to a few days in blood",
        "transcriptionFactors": ["GATA2", "C/EBPα"],
        "cytokines": {
            "differentiation": ["IL-3 (most important for basophil development)", "GM-CSF"],
            "activation": ["IgE cross-linking via FcεRI"]
        },
        "differentiatesFrom": "basophil-myelocyte",
        "granuleContents": {
            "mediators": ["Histamine (vasodilation, increased vascular permeability)", "Heparin (anticoagulant)", "Leukotrienes (LTC4, LTD4, LTE4)", "Prostaglandins"],
            "cytokines": ["IL-4", "IL-13"]
        },
        "degranulation": "IgE binds to FcεRI receptor. Upon re-exposure to allergen, IgE cross-links → degranulation → release of histamine, heparin, leukotrienes",
        "clinicalRelevance": [
            "Key players in Type I hypersensitivity (allergic) reactions",
            "Degranulation causes anaphylaxis symptoms",
            "Less important clinically than mast cells (same function but tissue-based)",
            "Increased in myeloproliferative disorders (especially CML)"
        ],
        "diseases": [
            "Basophilia - CML, polycythemia vera, allergic reactions",
            "Anaphylaxis - massive basophil/mast cell degranulation",
            "Chronic myeloid leukemia (CML) - often see basophilia",
            "Mast cell activation syndrome"
        ],
        "crossLinks": {
            "conditions": ["anaphylaxis", "chronic-myeloid-leukemia"]
        },
        "step1Pearls": [
            "Basophils = 'Blood mast cells' (circulating version of tissue mast cells)",
            "DARK PURPLE/BLUE granules (basophilic = loves basic dyes)",
            "FcεRI receptor binds IgE → allergen cross-links IgE → degranulation",
            "Contain HISTAMINE (vasodilation) and HEPARIN (anticoagulant)",
            "IL-3 promotes basophil development",
            "Least common WBC in normal blood (<1%)",
            "CML classically has basophilia (increased basophils)",
            "Mast cells vs basophils: Mast cells in TISSUES, basophils in BLOOD. Both have granules with histamine/heparin.",
            "Mnemonic: 'BAesophils contain Histamine and Heparin' (B-H-H)"
        ],
        "pageType": "cell"
    },
    {
        "id": "mast-cell",
        "name": "Mast Cell",
        "lineage": "granulocyte",
        "system": "hematopoietic",
        "markers": ["c-Kit (CD117)+", "FcεRI+", "Tryptase+"],
        "morphology": "Large cell with abundant cytoplasm filled with dark purple/blue granules. Nucleus often obscured by granules.",
        "location": "TISSUES (NOT blood) - especially near blood vessels, nerves, and mucosal surfaces (skin, lungs, GI tract)",
        "size": "20-30 μm diameter",
        "function": "Tissue-based mediator of allergic reactions (Type I hypersensitivity). Defense against parasites. Wound healing.",
        "lifespan": "Weeks to months in tissues",
        "transcriptionFactors": ["GATA2", "MITF (micropthalmia transcription factor)"],
        "cytokines": {
            "differentiation": ["SCF (stem cell factor) - binds to c-Kit/CD117"],
            "activation": ["IgE cross-linking via FcεRI", "Complement (C3a, C5a)", "Neuropeptides"]
        },
        "differentiatesFrom": "myeloid-progenitor-that-migrates-to-tissues",
        "granuleContents": {
            "preformed": ["Histamine", "Heparin", "Tryptase (mast cell-specific marker)", "Chymase"],
            "synthesized": ["Leukotrienes (LTC4, LTD4, LTE4 = 'slow-reacting substance of anaphylaxis')", "Prostaglandin D2"],
            "cytokines": ["TNF-α", "IL-4", "IL-5", "IL-13"]
        },
        "degranulation": "IgE binds FcεRI. Allergen cross-links IgE → Ca2+ influx → degranulation in seconds to minutes",
        "clinicalRelevance": [
            "Central mediators of anaphylaxis and allergic reactions",
            "Tryptase levels elevated in systemic mastocytosis and anaphylaxis",
            "Histamine release causes vasodilation, bronchoconstriction, increased vascular permeability",
            "Leukotrienes cause prolonged bronchoconstriction (leukotriene inhibitors for asthma)"
        ],
        "diseases": [
            "Anaphylaxis - systemic mast cell degranulation",
            "Urticaria (hives) - localized mast cell degranulation",
            "Mastocytosis - clonal proliferation of mast cells (c-Kit D816V mutation)",
            "Systemic mastocytosis - infiltration of organs with mast cells",
            "Mast cell activation syndrome (MCAS)"
        ],
        "crossLinks": {
            "conditions": ["anaphylaxis", "mastocytosis"],
            "medications": ["epinephrine", "diphenhydramine", "montelukast"]
        },
        "step1Pearls": [
            "Mast cells are in TISSUES (especially connective tissue near vessels). Basophils are in BLOOD.",
            "Both have FcεRI (binds IgE) and contain histamine/heparin",
            "TRYPTASE = mast cell-specific marker. Elevated in anaphylaxis and mastocytosis.",
            "c-Kit (CD117) mutation (D816V) causes mastocytosis",
            "Leukotrienes = LTC4, LTD4, LTE4 = 'SRS-A' (slow-reacting substance of anaphylaxis)",
            "Cromoglycate stabilizes mast cells (prevents degranulation)",
            "Urticaria pigmentosa (skin mastocytosis) - reddish-brown spots, Darier sign (urtication with rubbing)",
            "Anaphylaxis treatment: Epinephrine (α1 vasoconstriction, β2 bronchodilation), antihistamines",
            "Classic vignette: Peanut allergy → IgE on mast cells → re-exposure → degranulation → anaphylaxis",
            "Mnemonic: 'Mast cells Make Tissue reactions' (in tissues, not blood)"
        ],
        "pageType": "cell"
    },
    {
        "id": "monocyte",
        "name": "Monocyte",
        "lineage": "monocyte-macrophage",
        "system": "hematopoietic",
        "markers": ["CD14+", "CD16+/- (classical vs non-classical)", "CD11b+", "HLA-DR+"],
        "morphology": "Large cell with kidney bean or horseshoe-shaped nucleus, abundant gray-blue cytoplasm with ground-glass appearance",
        "location": "Blood (2-10% of WBCs), migrate to tissues to become macrophages or dendritic cells",
        "size": "15-20 μm diameter (largest WBC in blood)",
        "function": "Phagocytosis, antigen presentation, cytokine production. Precursor to tissue macrophages and dendritic cells.",
        "lifespan": "1-3 days in blood, then migrate to tissues",
        "transcriptionFactors": ["PU.1 (high levels)", "IRF8", "KLF4"],
        "cytokines": {
            "differentiation": ["M-CSF (monocyte colony-stimulating factor)", "GM-CSF"],
            "recruitment": ["MCP-1 (CCL2)", "MIP-1α"]
        },
        "differentiatesFrom": "monoblast",
        "differentiatesTo": ["macrophage", "dendritic-cell"],
        "clinicalRelevance": [
            "Monocytosis (>800-1,000/μL) seen in chronic infections, autoimmune diseases, malignancies",
            "Non-specific esterase stain POSITIVE (distinguishes from neutrophils which are MPO+)",
            "Second wave of acute inflammation (arrive days after neutrophils)",
            "Give rise to tissue-resident macrophages"
        ],
        "diseases": [
            "Monocytosis - TB, subacute bacterial endocarditis, chronic infections, Hodgkin lymphoma",
            "Acute monocytic leukemia (AML-M5) - malignant proliferation of monoblasts/monocytes",
            "Chronic myelomonocytic leukemia (CMML)",
            "Infectious mononucleosis (reactive monocytosis)"
        ],
        "crossLinks": {
            "conditions": ["tuberculosis", "acute-monocytic-leukemia"]
        },
        "step1Pearls": [
            "LARGEST WBC in blood (15-20 μm)",
            "Kidney bean or horseshoe-shaped nucleus (vs neutrophil segmented nucleus)",
            "Non-specific esterase stain POSITIVE (monocyte marker)",
            "M-CSF drives monocyte differentiation",
            "Monocytes arrive LATER in acute inflammation (days) vs neutrophils (hours)",
            "Differentiate into: Macrophages (tissues), Dendritic cells (antigen presentation)",
            "AML-M5 (acute monocytic leukemia) - gingival hyperplasia (monocytes infiltrate gums)",
            "CD14+ = classical monocyte marker",
            "Mnemonic: 'MONOcytes arrive on MONday' (later than neutrophils in inflammation)"
        ],
        "pageType": "cell"
    },
    {
        "id": "macrophage",
        "name": "Macrophage",
        "lineage": "monocyte-macrophage",
        "system": "hematopoietic",
        "markers": ["CD68+", "CD14+", "CD11b+", "HLA-DR+", "F4/80+ (in mice)"],
        "morphology": "Large cell (20-80 μm) with abundant cytoplasm, often containing phagocytosed material. Nucleus is round to oval.",
        "location": "ALL tissues - specialized names by location (alveolar macrophages in lungs, Kupffer cells in liver, microglia in brain, osteoclasts in bone)",
        "size": "20-80 μm (highly variable)",
        "function": "Professional phagocyte, antigen presentation (MHC class II), cytokine production, tissue remodeling, iron recycling",
        "lifespan": "Months to years in tissues (can be very long-lived)",
        "transcriptionFactors": ["PU.1", "C/EBPβ", "IRF8", "MITF (osteoclasts)"],
        "cytokines": {
            "M1activation": ["IFN-γ", "LPS", "TNF-α → pro-inflammatory, microbicidal"],
            "M2activation": ["IL-4", "IL-13 → anti-inflammatory, tissue repair"]
        },
        "differentiatesFrom": "monocyte",
        "polarization": {
            "M1": "Pro-inflammatory, microbicidal. Produce IL-12, TNF-α, NO, ROS. Kill pathogens and tumor cells.",
            "M2": "Anti-inflammatory, tissue repair. Produce IL-10, TGF-β, arginase. Promote wound healing, angiogenesis."
        },
        "tissueSpecificNames": {
            "lung": "Alveolar macrophages (dust cells)",
            "liver": "Kupffer cells",
            "brain": "Microglia",
            "bone": "Osteoclasts (bone resorption)",
            "skin": "Histiocytes/Langerhans cells",
            "kidney": "Mesangial cells",
            "spleen": "Splenic macrophages (filter blood, remove old RBCs)"
        },
        "clinicalRelevance": [
            "First-line defense in tissues against pathogens",
            "Antigen presentation to T cells (professional APCs)",
            "Remove apoptotic cells and cellular debris",
            "Granuloma formation in chronic infections (TB, sarcoidosis)",
            "Iron recycling from senescent RBCs in spleen"
        ],
        "diseases": [
            "Granulomatous diseases - TB, sarcoidosis, Crohn's disease (epithelioid macrophages)",
            "Gaucher disease - glucocerebrosidase deficiency → 'Gaucher cells' (lipid-laden macrophages)",
            "Niemann-Pick disease - sphingomyelinase deficiency → 'foam cells'",
            "Hemophagocytic lymphohistiocytosis (HLH) - activated macrophages phagocytose blood cells",
            "Atherosclerosis - foam cells (macrophages with oxidized LDL)"
        ],
        "crossLinks": {
            "conditions": ["tuberculosis", "sarcoidosis", "gaucher-disease"]
        },
        "step1Pearls": [
            "CD68+ is THE macrophage marker",
            "Monocytes in blood → Macrophages in tissues",
            "M1 (classical) = pro-inflammatory, kill bugs. M2 (alternative) = anti-inflammatory, repair",
            "Granulomas = organized collection of epithelioid macrophages (TB, sarcoidosis, Crohn's)",
            "Epithelioid macrophages = activated macrophages with abundant pink cytoplasm",
            "Multinucleated giant cells = fused macrophages in granulomas (Langhans giant cells in TB)",
            "Kupffer cells = liver macrophages (RES, phagocytose bacteria and old RBCs)",
            "Alveolar macrophages = 'dust cells' (phagocytose inhaled particles)",
            "Hemosiderin-laden macrophages ('heart failure cells') in lungs after pulmonary edema",
            "Foam cells in atherosclerosis = macrophages engorged with oxidized LDL",
            "Gaucher cells = 'crumpled tissue paper' macrophages (glucocerebroside accumulation)",
            "Classic vignette: Caseating granuloma with Langhans giant cells → TB"
        ],
        "pageType": "cell"
    }
];

export default cells;

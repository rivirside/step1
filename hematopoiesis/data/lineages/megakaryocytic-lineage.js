// Megakaryocytic Lineage - Platelet Development
// From Megakaryoblast to Platelets

const megakaryocyticLineage = {
    "id": "megakaryocytic-lineage",
    "name": "Megakaryocytic Lineage",
    "fullName": "Platelet Development via Megakaryocytes",
    "parentCell": "megakaryocyte-erythroid-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "Unique maturation process where progenitor cells undergo endomitosis (nuclear replication without cell division) to become giant polyploid megakaryocytes that fragment into thousands of platelets. One megakaryocyte produces 2,000-10,000 platelets.",
        "keyTranscriptionFactors": [
            "GATA1 (master regulator - shared with erythroid)",
            "FLI-1 (Friend Leukemia Integration 1 - megakaryocyte-specific)",
            "NF-E2 (Nuclear Factor Erythroid 2 - required for proplatelet formation)",
            "RUNX1 (required for megakaryocyte maturation)"
        ],
        "keyCytokines": [
            "TPO (Thrombopoietin) - primary driver, produced by liver and kidney",
            "IL-3 (Interleukin-3) - supports early progenitors",
            "IL-6 and IL-11 - secondary stimulators"
        ],
        "keyMechanism": "TPO binds to MPL receptor (c-Mpl) → JAK2/STAT activation → promotes: (1) Endomitosis (DNA replication without cytokinesis) → polyploidy (4N, 8N, 16N, up to 128N), (2) Cytoplasmic maturation and granule formation, (3) Proplatelet formation and fragmentation into platelets. Unique among blood cells for polyploidy.",
        "timeline": "~5-7 days from megakaryoblast to platelet release. Platelet lifespan: 7-10 days in circulation."
    },

    "stages": [
        {
            "stageNumber": 1,
            "id": "megakaryoblast",
            "name": "Megakaryoblast",
            "alternateName": "Stage I Megakaryocyte",
            "markers": ["CD34+", "CD41+ (GPIIb/IIIa, early)", "CD42- (GPIb-IX-V complex, absent)", "CD61+", "MPL+ (TPO receptor)"],
            "size": "15-25 μm (similar to other blasts)",
            "ploidy": "2N or 4N (diploid or early tetraploid)",
            "morphology": "Large blast-like cell with basophilic cytoplasm (high RNA content). Single large nucleus with fine chromatin and prominent nucleoli. Difficult to distinguish from other blasts morphologically - requires immunophenotyping. No platelet-specific granules yet.",
            "location": "Bone marrow, near sinusoids",
            "function": "Earliest committed megakaryocyte progenitor. Responds to TPO by initiating endomitosis (DNA replication without cell division). Begins expressing platelet-specific surface markers.",
            "mechanisticDetail": "TPO binding to c-Mpl receptor activates JAK2/STAT5 pathway → upregulates cyclin D and prevents cytokinesis while allowing nuclear division. This is endomitosis: DNA replicates, nucleus becomes polyploid, but cell doesn't divide. Also begins transcription of genes for platelet-specific proteins (GPIIb/IIIa, von Willebrand factor receptor).",
            "divides": false,
            "endomitosis": true,
            "clinicalRelevance": [
                "TPO (romiplostim, eltrombopag) stimulates this stage in immune thrombocytopenia (ITP)",
                "Acute megakaryoblastic leukemia (AMKL, AML-M7): Malignant proliferation blocked at this stage",
                "Congenital amegakaryocytic thrombocytopenia (CAMT): MPL receptor mutation prevents TPO signaling"
            ],
            "step1Pearls": [
                "Earliest megakaryocyte - looks like a blast (large nucleus, basophilic)",
                "CD41 appears EARLY (distinguishes from other blasts)",
                "Begins endomitosis: DNA replicates without cell division → polyploidy",
                "AMKL (AML-M7): Megakaryoblast leukemia, seen in Down syndrome children"
            ]
        },
        {
            "stageNumber": 2,
            "id": "promegakaryocyte",
            "name": "Promegakaryocyte",
            "alternateName": "Stage II Megakaryocyte, Basophilic Megakaryocyte",
            "markers": ["CD34-", "CD41++", "CD42+ (GPIb appears)", "CD61++", "MPL++"],
            "size": "30-50 μm (getting larger)",
            "ploidy": "8N to 16N (polyploid)",
            "morphology": "Larger than megakaryoblast with deeply basophilic cytoplasm (abundant ribosomes for protein synthesis). Nucleus is irregular, may appear multilobed or have multiple nuclei (but it's ONE polyploid nucleus, not separate nuclei). Chromatin is more condensed than megakaryoblast. No distinct granules visible yet.",
            "location": "Bone marrow, migrating toward sinusoids",
            "function": "Active protein synthesis for platelet-specific proteins and membranes. Continuing endomitosis to increase ploidy. Building the machinery needed for platelet production.",
            "mechanisticDetail": "Massive protein synthesis: von Willebrand factor, fibrinogen receptors (GPIIb/IIIa), GPIb-IX-V complex, P-selectin, and granule contents (ADP, serotonin, platelet factor 4, β-thromboglobulin). Demarcation membrane system (DMS) begins forming - invaginations of plasma membrane that will separate into individual platelets. Golgi is hyperactive producing α-granules and dense granules.",
            "divides": false,
            "endomitosis": true,
            "clinicalRelevance": [
                "Bernard-Soulier syndrome: GPIb mutation - promegakaryocytes can't form functional platelets",
                "Gray platelet syndrome: Defective α-granule formation at this stage",
                "Wiskott-Aldrich syndrome: Small platelets due to abnormal cytoskeleton formation"
            ],
            "step1Pearls": [
                "Basophilic megakaryocyte - blue cytoplasm from ribosomes making platelet proteins",
                "Nucleus appears multilobed but is ONE polyploid nucleus (8N-16N)",
                "GPIb-IX-V complex appears here (Bernard-Soulier syndrome if defective)",
                "Demarcation membrane system (DMS) starts forming - future platelet boundaries"
            ]
        },
        {
            "stageNumber": 3,
            "id": "mature-megakaryocyte",
            "name": "Mature Megakaryocyte",
            "alternateName": "Stage III Megakaryocyte, Granular Megakaryocyte",
            "markers": ["CD41+++", "CD42+++", "CD61+++", "P-selectin+ (in α-granules)", "vWF+", "PF4+"],
            "size": "50-100 μm (GIANT - largest cell in bone marrow)",
            "ploidy": "16N to 64N (highly polyploid, can reach 128N)",
            "morphology": "Massive cell with abundant pink/granular cytoplasm (hemoglobin-like color from granules). Multilobed polyploid nucleus. Cytoplasm is filled with granules (α-granules, dense granules, lysosomes) and extensive demarcation membrane system visible as pale areas or zones. The 'platelet fields' are visible - future platelets outlined by DMS.",
            "location": "Bone marrow, adjacent to sinusoidal endothelium (protrudes processes into sinusoids)",
            "function": "Final maturation and granule formation complete. Extends long cytoplasmic processes (proplatelets) through sinusoidal endothelium into bloodstream. Proplatelets fragment via shear forces and cytoskeletal reorganization into individual platelets.",
            "mechanisticDetail": "Demarcation membrane system (DMS) fully developed - creates boundaries for 2,000-10,000 future platelets. α-granules contain: vWF, fibrinogen, platelet factor 4 (PF4), β-thromboglobulin, P-selectin. Dense granules (δ-granules) contain: ADP, ATP, serotonin, calcium. The megakaryocyte extends pseudopodia (proplatelets, 2-4 μm diameter) through sinusoidal gaps into circulation. Shear stress + cytoskeletal rearrangement fragment proplatelets into individual platelets. Leftover megakaryocyte nucleus is phagocytosed by macrophages or swept to lungs.",
            "divides": false,
            "endomitosis": false,
            "clinicalRelevance": [
                "Immune thrombocytopenia (ITP): Increased megakaryocytes (compensatory) but platelets destroyed in periphery",
                "Myelofibrosis: Abnormal megakaryocytes with dysplastic features, release fibroblast-stimulating factors",
                "Essential thrombocythemia: JAK2 V617F or MPL mutations → excessive megakaryocyte proliferation",
                "Bone marrow biopsy: Megakaryocyte number/morphology helps diagnose thrombocytopenia cause"
            ],
            "step1Pearls": [
                "LARGEST cell in bone marrow (50-100 μm) - easily spotted on biopsy",
                "Highly polyploid (16N-64N) - multilobed nucleus",
                "One megakaryocyte makes 2,000-10,000 platelets",
                "Extends proplatelets into sinusoids → fragment into platelets",
                "ITP: Increased megakaryocytes (compensation) but peripheral platelet destruction",
                "Myelofibrosis: Bizarre dysplastic megakaryocytes"
            ]
        },
        {
            "stageNumber": 4,
            "id": "platelet",
            "name": "Platelet",
            "alternateName": "Thrombocyte",
            "markers": ["CD41+++", "CD42+++ (GPIb-IX-V)", "CD61+++ (GPIIIa)", "P-selectin (activated)", "Glycoprotein receptors"],
            "size": "2-4 μm diameter (smallest 'cell' in blood, actually a cytoplasmic fragment)",
            "ploidy": "N/A (anucleate fragment)",
            "morphology": "Small, anucleate, disc-shaped cytoplasmic fragment with granular appearance on Wright-Giemsa stain. Purple granules visible. No nucleus. Discoid shape when inactive, changes shape when activated (spreads, forms pseudopodia).",
            "location": "Circulates in bloodstream. Normal count: 150,000-400,000 per μL. Stored in spleen (~1/3 of total platelet mass).",
            "function": "Primary hemostasis - forms platelet plug to stop bleeding. Adhesion (to exposed collagen via vWF-GPIb), Activation (shape change, degranulation), Aggregation (via fibrinogen-GPIIb/IIIa crosslinks). Also releases growth factors for wound healing.",
            "mechanisticDetail": "Hemostasis steps: (1) ADHESION: Injury exposes subendothelial collagen → vWF binds collagen → Platelet GPIb-IX-V binds vWF → platelet tethers to injury site. (2) ACTIVATION: Collagen binding + thrombin + ADP → Intracellular signaling (PLC, Ca²⁺ release) → Shape change (discoid → spiky), degranulation (release ADP, serotonin, TXA₂), GPIIb/IIIa conformational change (activated). (3) AGGREGATION: Fibrinogen binds to GPIIb/IIIa on adjacent platelets → crosslinks platelets → platelet plug forms. Platelets also provide phospholipid surface for coagulation cascade (Factor Xa, Va, prothrombinase complex).",
            "lifespan": "7-10 days. Removed by splenic macrophages when senescent.",
            "contents": [
                "α-granules: vWF, fibrinogen, Factor V, platelet factor 4 (PF4), β-thromboglobulin, P-selectin, platelet-derived growth factor (PDGF)",
                "Dense granules (δ-granules): ADP, ATP, serotonin, calcium, pyrophosphate",
                "Lysosomes: Hydrolytic enzymes",
                "Mitochondria: ATP production",
                "Open canalicular system: Invaginations for degranulation"
            ],
            "clinicalRelevance": [
                "Thrombocytopenia (<150,000/μL): Bleeding risk increases significantly when <50,000; spontaneous bleeding when <10,000",
                "Immune thrombocytopenia (ITP): Autoantibodies against GPIIb/IIIa or GPIb → splenic destruction",
                "Thrombotic thrombocytopenic purpura (TTP): ADAMTS13 deficiency → uncleaved vWF multimers → excessive platelet aggregation → microthrombi + thrombocytopenia",
                "Hemolytic uremic syndrome (HUS): Similar to TTP, often from Shiga toxin (E. coli O157:H7)",
                "Glanzmann thrombasthenia: GPIIb/IIIa deficiency → no aggregation",
                "Bernard-Soulier syndrome: GPIb deficiency → no adhesion, GIANT platelets",
                "Von Willebrand disease: vWF deficiency → impaired adhesion → bleeding",
                "Aspirin irreversibly inhibits COX → blocks TXA₂ → impaired platelet activation (lasts 7-10 days)",
                "Clopidogrel/ticagrelor: Block ADP receptors (P2Y12) → impaired activation",
                "Abciximab/eptifibatide: Block GPIIb/IIIa → prevent aggregation"
            ],
            "step1Pearls": [
                "Platelet = cytoplasmic fragment, NOT a cell (no nucleus)",
                "Normal count: 150,000-400,000/μL (150-400 K/μL)",
                "Lifespan: 7-10 days (that's why aspirin effect lasts ~7 days)",
                "Hemostasis: Adhesion (vWF-GPIb) → Activation (ADP, TXA₂) → Aggregation (fibrinogen-GPIIb/IIIa)",
                "Bernard-Soulier: Defective GPIb → no adhesion, GIANT platelets, ↓ count",
                "Glanzmann: Defective GPIIb/IIIa → no aggregation, normal size/count",
                "vWF disease: ↑ bleeding time, normal PT/PTT, ↓ vWF, ↓ Factor VIII",
                "ITP: Isolated thrombocytopenia, antiplatelet antibodies, treat with steroids/IVIG/splenectomy",
                "TTP pentad: Thrombocytopenia, Microangiopathic hemolytic anemia (schistocytes), Neurologic symptoms, Renal failure, Fever. Treat with plasmapheresis.",
                "HUS: Like TTP but more renal-focused, often in kids after bloody diarrhea (STEC)",
                "Aspirin: Irreversibly acetylates COX-1 → blocks TXA₂ synthesis → platelet dysfunction for platelet lifespan",
                "Uremia causes platelet dysfunction despite normal count → bleeding",
                "Platelet transfusion threshold: <10K (spontaneous bleeding risk), <50K before surgery"
            ]
        }
    ],

    "clinicalCorrelations": [
        {
            "disease": "Immune Thrombocytopenia (ITP)",
            "mechanism": "Autoantibodies (usually IgG) against platelet surface proteins (GPIIb/IIIa most common) → opsonization → splenic macrophage destruction",
            "affectedStages": "Mature platelets destroyed in periphery. Bone marrow shows increased/normal megakaryocytes (compensatory).",
            "labs": "Isolated thrombocytopenia (<100K, often <30K), normal/increased megakaryocytes on BMA, antiplatelet antibodies (if tested)",
            "treatment": "First-line: Corticosteroids, IVIG. Second-line: Splenectomy, rituximab, TPO agonists (romiplostim, eltrombopag)"
        },
        {
            "disease": "Thrombotic Thrombocytopenic Purpura (TTP)",
            "mechanism": "ADAMTS13 deficiency (autoantibody or congenital) → failure to cleave ultra-large vWF multimers → excessive platelet adhesion → microthrombi throughout microvasculature → thrombocytopenia + MAHA + organ ischemia",
            "affectedStages": "Platelets consumed in microthrombi formation",
            "labs": "Thrombocytopenia, schistocytes (MAHA), ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin, ADAMTS13 activity <10%, normal PT/PTT, normal fibrinogen (not DIC)",
            "treatment": "URGENT plasmapheresis (removes antibodies, replaces ADAMTS13), corticosteroids, rituximab, caplacizumab (anti-vWF)"
        },
        {
            "disease": "Essential Thrombocythemia (ET)",
            "mechanism": "Myeloproliferative neoplasm with mutations (JAK2 V617F 50-60%, CALR 20-30%, MPL 5%) → excessive megakaryocyte proliferation → thrombocytosis (platelets >450K, often >1 million)",
            "affectedStages": "Clonal proliferation of megakaryocyte-erythroid progenitors",
            "labs": "Platelets >450K (often >600K), large/dysplastic megakaryocytes on BMA, JAK2 V617F or CALR mutation",
            "treatment": "Low-dose aspirin, hydroxyurea (if high risk), anagrelide (platelet-lowering)"
        },
        {
            "disease": "Bernard-Soulier Syndrome",
            "mechanism": "Autosomal recessive deficiency of GPIb-IX-V complex → platelets cannot bind vWF → impaired adhesion to injury site",
            "affectedStages": "Platelets form but are dysfunctional; often have GIANT platelets (>4μm)",
            "labs": "Mild-moderate thrombocytopenia, GIANT platelets on smear, ↑ bleeding time, abnormal ristocetin cofactor assay, flow cytometry shows absent GPIb",
            "treatment": "Platelet transfusions for bleeding, desmopressin usually ineffective"
        },
        {
            "disease": "Glanzmann Thrombasthenia",
            "mechanism": "Autosomal recessive deficiency of GPIIb/IIIa (integrin αIIbβ3) → platelets cannot bind fibrinogen → no aggregation",
            "affectedStages": "Platelets form normally but cannot aggregate",
            "labs": "Normal platelet count and size, ↑ bleeding time, absent platelet aggregation to all agonists EXCEPT ristocetin, flow cytometry shows absent GPIIb/IIIa",
            "treatment": "Platelet transfusions, recombinant Factor VIIa for severe bleeding"
        },
        {
            "disease": "Gray Platelet Syndrome",
            "mechanism": "Defective α-granule formation/packaging during megakaryocyte maturation → platelets lack α-granules → appear gray on smear",
            "affectedStages": "Promegakaryocyte and mature megakaryocyte - defective α-granule formation",
            "labs": "Mild thrombocytopenia, large gray platelets on smear (no purple granules), ↓ platelet factor 4 and β-thromboglobulin",
            "treatment": "Supportive, platelet transfusions if needed"
        },
        {
            "disease": "Congenital Amegakaryocytic Thrombocytopenia (CAMT)",
            "mechanism": "Autosomal recessive MPL (TPO receptor) mutation → megakaryoblasts cannot respond to TPO → absent/markedly reduced megakaryocytes",
            "affectedStages": "Block at megakaryoblast stage - no progression without TPO signaling",
            "labs": "Severe thrombocytopenia from birth, bone marrow shows absent/very few megakaryocytes, high TPO levels (no negative feedback)",
            "treatment": "Hematopoietic stem cell transplant (curative)"
        }
    ],

    "step1HighYieldConcepts": [
        "Megakaryocytes are POLYPLOID (endomitosis) - unique among blood cells",
        "One megakaryocyte makes 2,000-10,000 platelets",
        "Largest cell in bone marrow (50-100 μm) - easy to spot on biopsy",
        "TPO (thrombopoietin) is primary regulator - made in liver/kidney",
        "Platelets have NO nucleus but have mitochondria, granules, and can make TXA₂",
        "Platelet lifespan: 7-10 days (why aspirin effect lasts 7-10 days)",
        "Normal platelet count: 150,000-400,000/μL",
        "Bleeding risk: <50K (with trauma), <10K (spontaneous)",
        "Hemostasis steps: Adhesion (vWF-GPIb) → Activation (ADP, TXA₂, shape change) → Aggregation (fibrinogen-GPIIb/IIIa)",
        "Bernard-Soulier: GPIb defect → GIANT platelets, ↓ adhesion",
        "Glanzmann: GPIIb/IIIa defect → no aggregation, normal size/count",
        "ITP: Antiplatelet antibodies → splenic destruction → isolated thrombocytopenia, increased BM megakaryocytes",
        "TTP: ADAMTS13 deficiency → ultra-large vWF multimers → microthrombi → pentad (thrombocytopenia, MAHA, neuro, renal, fever)",
        "TTP vs HUS: TTP = more neurologic, HUS = more renal + often post-diarrheal in kids",
        "Aspirin: Irreversibly inhibits COX-1 → ↓ TXA₂ → platelet dysfunction for entire platelet lifespan",
        "NSAID: Reversibly inhibits COX → platelet function recovers when drug cleared",
        "Essential thrombocythemia: JAK2 V617F mutation → ↑↑ platelets (>450K)"
    ]
};

export default megakaryocyticLineage;

// Granulocyte Lineage - Development of Neutrophils, Eosinophils, Basophils, and Mast Cells
// From Myeloblast to Mature Granulocytes

const granulocyteLineage = {
    "id": "granulocyte-lineage",
    "name": "Granulocyte Lineage",
    "fullName": "Development of Granulocytes (Neutrophils, Eosinophils, Basophils, Mast Cells)",
    "parentCell": "granulocyte-monocyte-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "Maturation from myeloblast through promyelocyte, myelocyte, metamyelocyte, and band cell to segmented granulocytes. Each granulocyte type (neutrophil, eosinophil, basophil) follows similar stages but with distinct granule contents and functions. Mast cells branch earlier and mature in tissues. Total maturation time: ~10-14 days.",
        "keyTranscriptionFactors": [
            "C/EBPα (CCAAT/Enhancer Binding Protein α) - CRITICAL for granulocyte commitment; mutations cause AML",
            "C/EBPε (CCAAT/Enhancer Binding Protein ε) - required for late granulocyte maturation",
            "PU.1 (at high levels) - promotes myeloid/monocyte differentiation",
            "GATA-1 (low) - if high, goes to erythroid/megakaryocyte instead",
            "GFI1 (Growth Factor Independence 1) - neutrophil vs monocyte fate"
        ],
        "keyCytokines": [
            "G-CSF (Granulocyte Colony-Stimulating Factor) - drives neutrophil production, mobilizes from marrow",
            "GM-CSF (Granulocyte-Monocyte Colony-Stimulating Factor) - supports both granulocytes and monocytes",
            "IL-3 (Interleukin-3, Multi-CSF) - supports early progenitors",
            "IL-5 (Interleukin-5) - specifically stimulates eosinophil production",
            "SCF (Stem Cell Factor) - supports mast cell development"
        ],
        "keyMechanism": "Cytokine binding (G-CSF to G-CSFR) → JAK/STAT activation → transcription factors drive: (1) Progressive nuclear lobulation (blast → band → segmented), (2) Granule formation (primary → secondary → tertiary), (3) Loss of proliferative capacity, (4) Acquisition of functional capabilities (phagocytosis, oxidative burst, chemotaxis).",
        "timeline": "~10-14 days from myeloblast to mature neutrophil. Neutrophils spend ~5-7 days in marrow maturation pool before release. Once in blood, neutrophils circulate for 6-12 hours, then migrate to tissues (lifespan 1-2 days total)."
    },

    "commonStages": [
        {
            "stageNumber": 1,
            "id": "myeloblast",
            "name": "Myeloblast",
            "markers": ["CD34+", "CD13+", "CD33+", "MPO+ (Myeloperoxidase, weak)", "HLA-DR+"],
            "size": "15-20 μm",
            "morphology": "Large blast cell with high nuclear-to-cytoplasmic ratio. Round nucleus with fine, open chromatin and 2-3 prominent nucleoli. Basophilic cytoplasm (blue due to ribosomes). NO granules visible (or occasionally few azurophilic granules forming). Difficult to distinguish from other blasts without immunophenotyping.",
            "location": "Bone marrow",
            "function": "Earliest morphologically recognizable granulocyte precursor. Committed to granulocyte lineage. Actively dividing and preparing for granule synthesis.",
            "mechanisticDetail": "C/EBPα expression is CRITICAL at this stage - activates genes for granulocyte-specific proteins. PU.1 and C/EBPα work together to drive myeloid fate. Ribosomes are produced for upcoming protein synthesis (granule proteins). MPO gene transcription begins. Maintains proliferative capacity (can divide).",
            "granules": "No visible granules, or rare azurophilic (primary) granules just beginning to form",
            "nucleus": "Round, large, fine chromatin, 2-3 nucleoli",
            "divides": true,
            "clinicalRelevance": [
                "Acute Myeloid Leukemia (AML): Proliferation block at myeloblast stage → >20% blasts in marrow",
                "AML-M2 (with maturation): C/EBPα mutation → partial block at myeloblast with some maturation",
                "Auer rods: Abnormal fusion of azurophilic granules, pathognomonic for AML (especially APL)",
                "APL (M3): t(15;17) PML-RARα fusion → block at promyelocyte stage"
            ],
            "step1Pearls": [
                "Earliest recognizable granulocyte precursor",
                "C/EBPα mutations → AML (failure to progress beyond this stage)",
                "MPO positive (distinguishes from lymphoblasts which are MPO negative)",
                "Auer rods = fused primary granules = pathognomonic for AML",
                "AML diagnosis: ≥20% blasts in bone marrow",
                "Can still divide (unlike later stages which are post-mitotic)"
            ]
        },
        {
            "stageNumber": 2,
            "id": "promyelocyte",
            "name": "Promyelocyte",
            "markers": ["CD33+", "CD13+", "CD15+ (appears)", "MPO+++ (high)", "HLA-DR+", "CD34-"],
            "size": "18-25 μm (largest granulocyte precursor)",
            "morphology": "Large cell with abundant basophilic cytoplasm PACKED with large, dark AZUROPHILIC (primary) granules. These granules are purple/red and can obscure the nucleus. Nucleus is round to oval with coarse chromatin, nucleoli may still be visible but less prominent than myeloblast.",
            "location": "Bone marrow",
            "function": "Primary (azurophilic) granule synthesis. These granules contain microbicidal proteins and enzymes. Last stage with nucleoli. Can still divide (but proliferation is decreasing).",
            "mechanisticDetail": "MASSIVE synthesis of primary granule contents: Myeloperoxidase (MPO), Defensins, Lysozyme, Azurin, Elastase, Cathepsins, Proteinase 3. Primary granules are peroxidase-POSITIVE. The Golgi apparatus is hyperactive producing these granules. Ribosomes remain abundant (basophilic cytoplasm). This is typically the last or second-to-last dividing stage.",
            "granules": "Primary (azurophilic) granules: Large, purple/red, contain MPO, defensins, lysozyme, elastase, acid hydrolases",
            "nucleus": "Round to oval, coarse chromatin, nucleoli fading",
            "divides": "Yes, but less than myeloblast",
            "clinicalRelevance": [
                "Acute Promyelocytic Leukemia (APL, AML-M3): t(15;17) PML-RARα → block at promyelocyte stage",
                "APL cells packed with azurophilic granules → release of procoagulants → DIC",
                "APL treatment: All-trans retinoic acid (ATRA) induces differentiation, Arsenic trioxide (ATO)",
                "Hypergranular vs microgranular variants of APL",
                "Auer rods very common in APL (stacks of Auer rods = 'faggot cells')"
            ],
            "step1Pearls": [
                "LARGEST granulocyte precursor",
                "Loaded with primary (azurophilic) granules - dark purple/red",
                "Primary granules = MPO+, contain defensins, elastase, lysozyme",
                "APL (M3): t(15;17) PML-RARα fusion → block at promyelocyte",
                "APL causes DIC from release of granule contents (procoagulants)",
                "ATRA treats APL by inducing differentiation (overrides the block)",
                "'Faggot cells' = bundles of Auer rods in APL",
                "Last stage with visible nucleoli (usually)"
            ]
        },
        {
            "stageNumber": 3,
            "id": "myelocyte",
            "name": "Myelocyte",
            "markers": ["CD33+", "CD13+", "CD15++", "CD11b+ (begins)", "MPO++"],
            "size": "12-18 μm",
            "morphology": "Smaller than promyelocyte. Cytoplasm less basophilic (pink-gray). SECONDARY (specific) granules appear alongside primary granules. Secondary granules are smaller, lighter, and specific to the cell type (neutrophilic, eosinophilic, or basophilic). Nucleus is round to oval, eccentric, with clumped chromatin. No nucleoli.",
            "location": "Bone marrow",
            "function": "Secondary (specific) granule synthesis. This is where lineage divergence becomes morphologically visible - neutrophilic myelocyte, eosinophilic myelocyte, or basophilic myelocyte can be distinguished. Last stage that divides.",
            "mechanisticDetail": "Secondary granule synthesis begins: NEUTROPHILS (lactoferrin, lysozyme, collagenase, NADPH oxidase components), EOSINOPHILS (major basic protein, eosinophil peroxidase, eosinophil cationic protein), BASOPHILS (histamine, heparin). Secondary granules are peroxidase-NEGATIVE (except eosinophil peroxidase). This is definitively the LAST dividing stage. After this, cells enter post-mitotic maturation.",
            "granules": "Primary (azurophilic) + Secondary (specific) granules. Secondary type depends on lineage: neutrophilic (fine pink), eosinophilic (large red-orange), basophilic (dark blue-black)",
            "nucleus": "Round to oval, eccentric, clumped chromatin, NO nucleoli",
            "divides": "Yes - LAST dividing stage",
            "clinicalRelevance": [
                "Left shift: Increased myelocytes in blood indicates increased granulocyte production (infection, inflammation)",
                "Chronic Myeloid Leukemia (CML): Increased myelocytes in blood (along with all stages)",
                "Specific granule deficiency: Rare disorder with absent secondary granules",
                "Chediak-Higashi syndrome: Giant abnormal granules, impaired bactericidal function"
            ],
            "step1Pearls": [
                "LAST stage that divides (definitive post-mitotic after this)",
                "Secondary (specific) granules appear here",
                "Lineage becomes morphologically distinguishable: neutrophilic vs eosinophilic vs basophilic myelocyte",
                "Neutrophil secondary granules: Lactoferrin, lysozyme, NADPH oxidase",
                "Eosinophil secondary granules: Major basic protein (MBP), eosinophil peroxidase",
                "Basophil secondary granules: Histamine, heparin",
                "Left shift = myelocytes in blood = infection or marrow stimulation",
                "CML: 'Full house' of granulocytes (blasts through mature) in blood"
            ]
        },
        {
            "stageNumber": 4,
            "id": "metamyelocyte",
            "name": "Metamyelocyte",
            "markers": ["CD33+", "CD13+", "CD15++", "CD11b++", "CD16+ (begins)", "MPO+"],
            "size": "10-15 μm",
            "morphology": "Nucleus begins indentation - KIDNEY BEAN or HORSESHOE shape (no longer round). This is the key distinguishing feature. Cytoplasm is more mature, less basophilic. Granules are mature (primary + secondary in their final forms). Size continues to decrease.",
            "location": "Bone marrow (normally). Can appear in blood during 'left shift'.",
            "function": "Nuclear remodeling begins. Continued maturation of cytoplasm and granule contents. Acquiring functional capabilities (motility, chemotaxis).",
            "mechanisticDetail": "Nuclear lobulation begins via remodeling of nuclear envelope and chromatin condensation. Lamin B receptor concentrates at the nuclear indentation. Cytoskeleton reorganizes for motility. Granule maturation completes. Post-mitotic - cannot divide. Transit time through this stage is ~1-2 days.",
            "granules": "Mature primary and secondary granules",
            "nucleus": "INDENTED - kidney bean or horseshoe shape. Key distinguishing feature from myelocyte (round) and band (more elongated)",
            "divides": false,
            "clinicalRelevance": [
                "Metamyelocytes in blood = 'left shift' = sign of marrow stress (infection, inflammation, G-CSF therapy)",
                "Pelger-Huët anomaly: Failure of nuclear segmentation → neutrophils look like bands/metamyelocytes but are functionally normal",
                "Pseudo-Pelger-Huët: Acquired hyposegmentation in MDS"
            ],
            "step1Pearls": [
                "Nucleus starts to indent - KIDNEY BEAN or HORSESHOE shape",
                "Post-mitotic (cannot divide)",
                "Not normally in blood (only in marrow)",
                "Left shift = metamyelocytes + bands in blood = infection/inflammation",
                "Pelger-Huët anomaly: Genetic failure to segment → bilobed neutrophils (benign)"
            ]
        },
        {
            "stageNumber": 5,
            "id": "band-cell",
            "name": "Band Cell",
            "alternateName": "Stab Cell",
            "markers": ["CD33+", "CD13+", "CD15+++", "CD11b+++", "CD16++", "MPO+"],
            "size": "10-15 μm",
            "morphology": "Nucleus is elongated and curved (band-like, horseshoe-shaped) but NOT segmented (no distinct lobes separated by filaments). If you can see a continuous connection across the nucleus, it's a band. Cytoplasm is mature with abundant granules.",
            "location": "Bone marrow and peripheral blood. Normally 0-5% of WBCs in blood. Increases during 'left shift'.",
            "function": "Nearly mature granulocyte. Fully functional - can perform chemotaxis, phagocytosis, and respiratory burst. Just needs final nuclear segmentation.",
            "mechanisticDetail": "Final maturation step before segmentation. All functional capabilities present: Chemotaxis (follows chemoattractants like IL-8, C5a, LTB4), Phagocytosis (via FcγR and complement receptors), Oxidative burst (NADPH oxidase assembled), Degranulation (granules ready). Nuclear segmentation proteins accumulate. Release from marrow is accelerated during infection (G-CSF, IL-8 signaling).",
            "granules": "Mature primary, secondary, and tertiary (secretory vesicles) granules",
            "nucleus": "Band-shaped or horseshoe-shaped, NOT segmented (no distinct lobes)",
            "divides": false,
            "clinicalRelevance": [
                "Increased bands (>10%) = 'left shift' = acute infection or inflammation",
                "Bandemia is a sensitive marker of bacterial infection",
                "G-CSF therapy → early release of bands and metamyelocytes from marrow",
                "Bands are fully functional neutrophils (not 'immature' functionally, just morphologically)"
            ],
            "step1Pearls": [
                "Band = horseshoe nucleus WITHOUT distinct lobes (continuous connection)",
                "Normal in blood: 0-5% of WBCs",
                "Bandemia (>10%) = LEFT SHIFT = acute bacterial infection",
                "Fully functional (can phagocytose, kill bacteria) - not truly 'immature'",
                "Left shift = ↑ bands and younger forms (metamyelocytes, myelocytes)",
                "G-CSF accelerates band release from marrow"
            ]
        }
    ],

    "matureGranulocytes": [
        {
            "cellType": "neutrophil",
            "id": "segmented-neutrophil",
            "name": "Segmented Neutrophil",
            "alternateName": "Polymorphonuclear Leukocyte (PMN), Segmented Neutrophil, 'Seg', Polymorphonuclear Neutrophil",
            "markers": ["CD15+++", "CD16+++", "CD11b/CD18 (Mac-1, CR3)+++", "CD66b+++", "CD33+ (dim)", "CD13+", "MPO+++"],
            "size": "12-15 μm diameter",
            "morphology": "Nucleus with 3-5 distinct lobes connected by thin chromatin filaments. Pale pink cytoplasm with fine pink-purple granules (secondary granules predominate, primary granules also present but harder to see). Granules give a 'dusty' appearance.",
            "location": "Bone marrow (5-7 day maturation/storage pool), peripheral blood (6-12 hours circulating), tissues (1-2 days). Most abundant WBC in blood (40-70% of WBCs, 1,500-7,500 cells/μL).",
            "function": "First responder to acute bacterial and fungal infections. Phagocytosis and intracellular killing via oxidative burst (reactive oxygen species) and non-oxidative mechanisms (granule contents). Forms NETs (Neutrophil Extracellular Traps) - extruded DNA with antimicrobial proteins to trap bacteria.",
            "mechanisticDetail": "CHEMOTAXIS: Follows gradients of IL-8, C5a, LTB4, fMLP → integrin activation → adhesion to endothelium → transmigration into tissues. PHAGOCYTOSIS: Opsonins (IgG, C3b) bind bacteria → FcγR and CR3 recognize opsonins → actin polymerization forms phagosome. OXIDATIVE BURST: NADPH oxidase (gp91phox + p22phox + p47phox + p67phox + Rac2) assembles → reduces O2 to O2- (superoxide) → spontaneously/SOD converts to H2O2 → MPO converts H2O2 + Cl- to HOCl (hypochlorous acid/bleach) → kills bacteria. NON-OXIDATIVE: Granule fusion with phagosome → release defensins, lysozyme, elastase, cathepsins. NETs: DNA extrusion with histones, MPO, elastase → traps extracellular bacteria.",
            "granules": {
                "primary": "Azurophilic: MPO, defensins, elastase, cathepsins, lysozyme, acid hydrolases",
                "secondary": "Specific: Lactoferrin, lysozyme, collagenase, NADPH oxidase components (gp91phox, p22phox)",
                "tertiary": "Gelatinase granules: Gelatinase, acetyltransferase",
                "secretory": "Secretory vesicles: Alkaline phosphatase, complement receptors, adhesion molecules"
            },
            "nucleus": "3-5 lobes connected by thin filaments (average ~3 lobes in healthy people)",
            "lifespan": "Total ~8-10 days: 5-7 days in marrow → 6-12 hours in blood → 1-2 days in tissues",
            "clinicalRelevance": [
                "Neutrophilia (>7,500/μL): Bacterial infection, inflammation, corticosteroids, G-CSF, stress, smoking, CML",
                "Neutropenia (<1,500/μL): Chemotherapy, aplastic anemia, autoimmune destruction, severe infection (consumption), drugs",
                "Severe neutropenia (<500/μL): High risk for life-threatening bacterial/fungal infections",
                "Chronic Granulomatous Disease (CGD): NADPH oxidase defect → no O2- production → recurrent catalase+ infections (Staph aureus, Aspergillus, Serratia, Nocardia, Burkholderia)",
                "Leukocyte Adhesion Deficiency (LAD): CD18 defect → integrins don't work → can't migrate to tissues → recurrent skin/mucosal infections, delayed umbilical cord separation, leukocytosis",
                "Myeloperoxidase deficiency: Usually asymptomatic (redundant killing mechanisms), Candida infections in diabetics",
                "Chediak-Higashi syndrome: Defective granule formation → giant granules, impaired degranulation → recurrent pyogenic infections, albinism, peripheral neuropathy",
                "Specific granule deficiency: Bilobed nuclei, absent secondary granules → recurrent infections",
                "Hypersegmentation (≥5 lobes): B12/folate deficiency (megaloblastic anemia)"
            ],
            "step1Pearls": [
                "Most abundant WBC in blood (40-70%, 1,500-7,500 cells/μL)",
                "First responder to acute bacterial/fungal infections",
                "3-5 nuclear lobes (average ~3). ≥5 lobes = hypersegmentation (B12/folate deficiency)",
                "Oxidative burst: NADPH oxidase → O2- → H2O2 → MPO + Cl- → HOCl (bleach) → kills bacteria",
                "CGD: Defective NADPH oxidase → no superoxide → recurrent catalase+ infections (Staph, Aspergillus, Serratia, Nocardia, Burkholderia)",
                "CGD diagnosis: Nitroblue tetrazolium (NBT) test NEGATIVE, flow cytometry for oxidative burst",
                "LAD: CD18 defect → can't leave blood vessels → recurrent infections + delayed cord separation + leukocytosis",
                "Chediak-Higashi: Giant granules, partial albinism, recurrent infections, peripheral neuropathy",
                "NETs (Neutrophil Extracellular Traps): DNA + histones + MPO/elastase → trap bacteria",
                "Bone marrow reserve: 5-7 day storage pool → rapid release during infection (left shift)",
                "Neutropenia <500/μL = severe = high infection risk → prophylactic antibiotics, G-CSF",
                "G-CSF (filgrastim) stimulates neutrophil production → treat chemotherapy-induced neutropenia"
            ]
        },
        {
            "cellType": "eosinophil",
            "id": "segmented-eosinophil",
            "name": "Eosinophil",
            "markers": ["CD15+", "CD11b+", "CD16+ (dim)", "CCR3+ (eotaxin receptor)", "Siglec-8+", "IL-5Rα+"],
            "size": "12-17 μm (slightly larger than neutrophil)",
            "morphology": "Bilobed nucleus (usually 2 lobes, occasionally 3). Cytoplasm packed with large, refractile, red-orange granules (eosinophilic - 'loves eosin' stain). Granules often obscure the nucleus.",
            "location": "Peripheral blood (1-4% of WBCs, 50-500 cells/μL), but most eosinophils are in TISSUES (GI tract, respiratory tract, genitourinary tract). Blood:tissue ratio = 1:100.",
            "function": "Defense against PARASITES (especially helminths). Modulation of allergic/hypersensitivity responses (can be protective or pathologic). Regulate mast cell responses. Can cause tissue damage via release of toxic granule proteins.",
            "mechanisticDetail": "ANTI-PARASITIC: Major Basic Protein (MBP), Eosinophil Cationic Protein (ECP), and Eosinophil Peroxidase are directly toxic to parasites (damage parasite membrane). Antibody-dependent cellular cytotoxicity (ADCC): IgE or IgG on parasite surface → eosinophil FcεRII or FcγR binding → degranulation onto parasite. ALLERGY: Activated by IL-5 from Th2 cells → degranulation releases MBP, ECP → tissue damage (asthma, allergic rhinitis). Leukotrienes (LTC4) production → bronchoconstriction. REGULATION: Can also dampen allergic responses by degrading histamine, inactivating leukotrienes.",
            "granules": {
                "specific": "Major Basic Protein (MBP) - toxic to parasites and host tissues, Eosinophil Cationic Protein (ECP) - ribonuclease, neurotoxic, Eosinophil Peroxidase (EPO) - generates reactive oxygen species, Eosinophil-Derived Neurotoxin (EDN)",
                "crystalloid": "Crystalloid core containing MBP (gives red-orange color)",
                "lipid": "Arachidonic acid metabolites: LTC4, LTD4, LTE4, PAF, PGD2"
            },
            "nucleus": "Usually bilobed (2 lobes)",
            "lifespan": "~8-12 hours in blood, several days in tissues",
            "clinicalRelevance": [
                "Eosinophilia (>500/μL): NAACP mnemonic - Neoplasm (Hodgkin, T-cell lymphoma), Asthma/Allergy, Addison's disease, Collagen vascular disease (Churg-Strauss), Parasites (helminths)",
                "Parasitic infections: Ascariasis, hookworm, strongyloidiasis, schistosomiasis, trichinosis, toxocariasis, filariasis",
                "Allergic disorders: Asthma, allergic rhinitis, atopic dermatitis, drug reactions",
                "Churg-Strauss syndrome (EGPA): Eosinophilic granulomatosis with polyangiitis → asthma + eosinophilia + vasculitis",
                "Hypereosinophilic syndrome: Persistent eosinophilia (>1,500/μL for >6 months) → organ damage (heart, lungs, skin, nerves)",
                "Eosinophilic esophagitis: Food allergies → eosinophil infiltration → dysphagia, food impaction",
                "Löffler syndrome: Transient pulmonary infiltrates + eosinophilia (often from parasites)",
                "Tropical eosinophilia: Filarial infection → massive eosinophilia + lung involvement"
            ],
            "step1Pearls": [
                "Bilobed nucleus + red-orange granules",
                "Defense against PARASITES (especially helminths)",
                "Eosinophilia causes: NAACP - Neoplasm, Asthma/Allergy, Addison's, Collagen vascular, Parasites",
                "Most eosinophils are in TISSUES (GI, respiratory), not blood (1:100 ratio)",
                "IL-5 from Th2 cells stimulates eosinophil production and activation",
                "Major Basic Protein (MBP): Toxic to parasites AND host tissues (asthma pathology)",
                "Churg-Strauss (EGPA): Asthma + eosinophilia + vasculitis + p-ANCA (sometimes)",
                "Hypereosinophilic syndrome: >1,500/μL for >6 months → cardiac damage (endomyocardial fibrosis)",
                "Eosinophilic esophagitis: Food allergies → dysphagia + eosinophils on biopsy",
                "Normal count: 50-500/μL (1-4% of WBCs)"
            ]
        },
        {
            "cellType": "basophil",
            "id": "segmented-basophil",
            "name": "Basophil",
            "markers": ["CD11b+", "CD123+ (IL-3Rα)", "FcεRI+++ (high-affinity IgE receptor)", "CD203c+"],
            "size": "10-14 μm",
            "morphology": "Bilobed or trilobed nucleus (often obscured by granules). Cytoplasm packed with large, dark blue-black granules (basophilic - 'loves basic stains'). Granules can overlay the nucleus making it hard to see.",
            "location": "Peripheral blood (0.5-1% of WBCs, <100 cells/μL - LEAST common WBC). Some migrate to tissues during allergic reactions.",
            "function": "Immediate hypersensitivity reactions (Type I). Similar to mast cells but circulating. Release histamine, heparin, and other mediators during allergic responses. Promote Th2 responses via IL-4 secretion.",
            "mechanisticDetail": "IgE antibodies bind to FcεRI receptors on basophil surface. Upon re-exposure, antigen crosslinks IgE → FcεRI aggregation → tyrosine kinase activation (Lyn, Syk) → PLC activation → Ca²⁺ influx + IP3/DAG → degranulation + eicosanoid synthesis. DEGRANULATION: Release of preformed mediators (histamine, heparin, tryptase). LIPID MEDIATORS: Synthesis of leukotrienes (LTC4, LTD4 - slow-reacting substance of anaphylaxis) and PAF (platelet-activating factor). CYTOKINES: IL-4 (promotes Th2 differentiation), IL-13 (IgE class switching).",
            "granules": {
                "contents": "Histamine (vasodilation, bronchoconstriction, increased vascular permeability), Heparin (anticoagulant, gives metachromasia on toluidine blue stain), Tryptase (protease), Chondroitin sulfate, Eosinophil chemotactic factors",
                "lipidMediator": "Leukotrienes (LTC4, LTD4, LTE4 - 'slow-reacting substance of anaphylaxis'), PAF (Platelet-Activating Factor)",
                "cytokines": "IL-4 (Th2 differentiation), IL-13 (IgE class switching, goblet cell hyperplasia)"
            },
            "nucleus": "Bilobed or trilobed, often obscured by dark granules",
            "lifespan": "Few hours to 1-2 days in blood",
            "clinicalRelevance": [
                "Basophilia (>100/μL): CML (can be prominent), polycythemia vera, chronic inflammatory conditions, hypersensitivity reactions",
                "Type I hypersensitivity: IgE-mediated allergic reactions (anaphylaxis, allergic rhinitis, asthma)",
                "Anaphylaxis: Massive basophil/mast cell degranulation → histamine + leukotrienes → vasodilation, bronchoconstriction, shock",
                "CML: Basophilia is a characteristic feature (along with all other myeloid cells)"
            ],
            "step1Pearls": [
                "LEAST common WBC (<1%, <100 cells/μL)",
                "Dark blue-black granules that obscure nucleus",
                "Similar to mast cells but circulates in blood (mast cells are in tissues)",
                "IgE-mediated degranulation (Type I hypersensitivity)",
                "Release histamine (vasodilation, bronchoconstriction) and leukotrienes (SRS-A)",
                "Basophilia seen in CML (characteristic finding)",
                "Heparin in granules → metachromasia with toluidine blue stain",
                "IL-4 from basophils promotes Th2 response → more IgE production"
            ]
        },
        {
            "cellType": "mast-cell",
            "id": "mast-cell",
            "name": "Mast Cell",
            "markers": ["CD117+ (c-Kit)+++", "FcεRI+++", "CD203c+", "Tryptase+++", "Chymase+ (in some mast cells)"],
            "size": "20-30 μm (larger than basophils)",
            "morphology": "Large cell with round or oval nucleus. Cytoplasm densely packed with large metachromatic granules (purple with toluidine blue stain due to heparin). Granules are more uniform than basophil granules.",
            "location": "TISSUES ONLY (not in blood). Found near blood vessels, nerves, and epithelial surfaces. Abundant in: Skin, respiratory tract mucosa, GI tract mucosa, connective tissues.",
            "function": "Immediate hypersensitivity (Type I) - main effector cell. Defense against parasites and venoms. Tissue repair and angiogenesis. Innate immune responses to pathogens.",
            "mechanisticDetail": "Similar to basophils but tissue-resident and more important clinically. Mast cell progenitors leave bone marrow → circulate briefly → home to tissues → mature under influence of SCF (Stem Cell Factor) binding to CD117 (c-Kit). Two types: Tryptase+ Chymase+ (MCᴛᴄ, in skin/GI submucosa) and Tryptase+ Chymase- (MCᴛ, in lungs/GI mucosa). Activation: IgE crosslinking (allergic), complement (C3a, C5a - anaphylatoxins), substance P, or direct mast cell activators (morphine, radiocontrast). Degranulation mechanism identical to basophils. Mast cells are long-lived in tissues.",
            "granules": {
                "preformed": "Histamine, Heparin (highly sulfated, gives metachromasia), Tryptase (mast cell-specific, marker for mastocytosis/anaphylaxis), Chymase (in MCᴛᴄ subtype), TNF-α (preformed!), Proteoglycans",
                "lipidMediator": "Leukotrienes (LTC4, LTD4, LTE4), Prostaglandin D2 (PGD2), PAF",
                "cytokines": "IL-4, IL-5, IL-6, IL-13, TNF-α, VEGF, TGF-β"
            },
            "nucleus": "Round or oval, central",
            "lifespan": "Weeks to months in tissues (long-lived)",
            "clinicalRelevance": [
                "Anaphylaxis: Systemic mast cell degranulation → histamine + leukotrienes → vasodilation + increased permeability + bronchoconstriction → hypotension + airway compromise. Treat with epinephrine IM.",
                "Urticaria (hives): Localized mast cell degranulation → histamine → wheal and flare. Treat with antihistamines.",
                "Mastocytosis: Clonal proliferation of mast cells (often c-Kit D816V mutation). Urticaria pigmentosa (skin lesions), systemic symptoms (flushing, diarrhea, hypotension). Darier sign: Stroking skin lesion → urticaria.",
                "Serum tryptase: Elevated in anaphylaxis (1-4 hours after event) and mastocytosis (chronically elevated)",
                "Drugs causing mast cell degranulation (non-IgE): Morphine, vancomycin, radiocontrast, NSAIDs (in aspirin-sensitive patients)"
            ],
            "step1Pearls": [
                "Tissue-resident (NOT in blood), unlike basophils",
                "Larger than basophils (20-30 μm)",
                "Metachromatic granules (purple on toluidine blue due to heparin)",
                "Main effector of Type I hypersensitivity (IgE-mediated)",
                "Tryptase is mast cell-specific → elevated in anaphylaxis and mastocytosis",
                "Anaphylaxis treatment: EPINephrine IM (α1 → vasoconstriction, β2 → bronchodilation)",
                "Mastocytosis: c-Kit D816V mutation → ↑ mast cells → urticaria pigmentosa + Darier sign",
                "Preformed TNF-α in granules (rapid inflammation)",
                "Two subtypes: MCᴛᴄ (tryptase + chymase, skin/GI) and MCᴛ (tryptase only, lungs)",
                "C3a and C5a (anaphylatoxins) trigger mast cell degranulation → complement-mediated anaphylaxis"
            ]
        }
    ],

    "clinicalCorrelations": [
        {
            "disease": "Chronic Granulomatous Disease (CGD)",
            "mechanism": "Defective NADPH oxidase (usually gp91phox, X-linked) → no superoxide production → impaired intracellular killing of catalase-positive organisms",
            "affectedStages": "Mature neutrophils (and monocytes/macrophages)",
            "infections": "Recurrent infections with catalase+ organisms: Staph aureus, Aspergillus (most common cause of death), Serratia, Nocardia, Burkholderia cepacia",
            "labs": "Nitroblue tetrazolium (NBT) test negative (cannot reduce NBT dye), Flow cytometry for dihydrorhodamine (DHR) assay (more sensitive)",
            "treatment": "Prophylactic TMP-SMX and itraconazole, IFN-γ, aggressive treatment of infections, possible stem cell transplant"
        },
        {
            "disease": "Leukocyte Adhesion Deficiency (LAD)",
            "mechanism": "LAD-1: CD18 deficiency (β2 integrin defect) → can't form Mac-1 (CD11b/CD18) → impaired adhesion to endothelium → neutrophils can't leave blood vessels. LAD-2: Sialyl-Lewis X deficiency (selectin ligand) → impaired rolling.",
            "affectedStages": "Mature neutrophils",
            "presentation": "Recurrent bacterial infections (skin, mucosal), poor wound healing, delayed umbilical cord separation (>3 weeks), LEUKOCYTOSIS (neutrophils trapped in blood)",
            "labs": "High WBC (>20K), flow cytometry shows absent CD18 (LAD-1)",
            "treatment": "Prophylactic antibiotics, stem cell transplant"
        },
        {
            "disease": "Chediak-Higashi Syndrome",
            "mechanism": "Autosomal recessive LYST gene mutation → defective vesicle trafficking → GIANT GRANULES in all granule-containing cells (neutrophils, eosinophils, melanocytes, neurons)",
            "affectedStages": "All granulocytes (and other granule-containing cells)",
            "presentation": "Recurrent pyogenic infections, partial albinism (melanocyte defect), peripheral neuropathy, bleeding tendency (platelet dense granule defect), 'accelerated phase' (hemophagocytic lymphohistiocytosis-like syndrome)",
            "labs": "Giant granules on blood smear, neutropenia",
            "treatment": "Prophylactic antibiotics, stem cell transplant before accelerated phase"
        }
    ],

    "step1HighYieldConcepts": [
        "Granulocyte maturation: Myeloblast → Promyelocyte → Myelocyte → Metamyelocyte → Band → Segmented",
        "Primary granules (azurophilic) form at promyelocyte stage: MPO, defensins, elastase",
        "Secondary granules (specific) form at myelocyte stage: Lactoferrin (neutrophil), MBP (eosinophil), Histamine (basophil)",
        "Last dividing stage: Myelocyte. After this = post-mitotic maturation",
        "Left shift = bands + metamyelocytes + myelocytes in blood = bacterial infection or G-CSF",
        "Neutrophil oxidative burst: NADPH oxidase → O2- → H2O2 → MPO + Cl- → HOCl (bleach)",
        "CGD: No NADPH oxidase → no O2- → recurrent catalase+ infections (Staph, Aspergillus, Serratia, Nocardia, Burkholderia)",
        "LAD: No CD18 → can't adhere to endothelium → delayed cord separation + leukocytosis + recurrent infections",
        "Chediak-Higashi: Giant granules + albinism + infections + neuropathy",
        "Eosinophils: Bilobed, red-orange granules, anti-parasitic (MBP), IL-5 stimulated, Th2 response",
        "Eosinophilia: NAACP - Neoplasm, Asthma/Allergy, Addison's, Collagen vascular, Parasites",
        "Basophils: Least common WBC, dark blue-black granules, IgE-mediated degranulation, histamine + leukotrienes",
        "Mast cells: Tissue-only, NOT in blood, Type I hypersensitivity, tryptase elevated in anaphylaxis/mastocytosis",
        "Anaphylaxis treatment: Epinephrine IM (vasoconstriction + bronchodilation)",
        "AML diagnosis: ≥20% blasts, Auer rods pathognomonic",
        "APL (M3): t(15;17) PML-RARα → promyelocyte block → DIC. Treat with ATRA + ATO"
    ]
};

export default granulocyteLineage;

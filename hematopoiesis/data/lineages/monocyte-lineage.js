// Monocyte/Macrophage Lineage - Development of Monocytes, Macrophages, and Dendritic Cells
// From Monoblast to Tissue Macrophages and Dendritic Cells

const monocyteLineage = {
    "id": "monocyte-lineage",
    "name": "Monocyte/Macrophage Lineage",
    "fullName": "Development of Monocytes, Macrophages, and Dendritic Cells",
    "parentCell": "granulocyte-monocyte-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "Maturation from monoblast through promonocyte to circulating monocyte, which then migrates to tissues and differentiates into tissue-specific macrophages or dendritic cells. Monocytes/macrophages are professional phagocytes and antigen-presenting cells critical for innate and adaptive immunity.",
        "keyTranscriptionFactors": [
            "PU.1 (at high levels) - master regulator of monocyte/macrophage development",
            "C/EBPα - promotes myeloid differentiation (shared with granulocytes)",
            "IRF8 (Interferon Regulatory Factor 8) - drives monocyte over granulocyte fate",
            "KLF4 (Kruppel-like Factor 4) - promotes M2 macrophage polarization",
            "STAT1 - promotes M1 macrophage polarization"
        ],
        "keyCytokines": [
            "M-CSF (Macrophage Colony-Stimulating Factor, CSF-1) - primary driver of monocyte/macrophage production",
            "GM-CSF (Granulocyte-Monocyte Colony-Stimulating Factor) - supports monocyte and granulocyte production",
            "IL-3 (Interleukin-3) - supports early progenitors",
            "IFN-γ - polarizes macrophages to M1 (classically activated)",
            "IL-4 and IL-13 - polarize macrophages to M2 (alternatively activated)"
        ],
        "keyMechanism": "M-CSF binding to CSF-1R → promotes monocyte survival, proliferation, and differentiation. Monocytes circulate 1-3 days → migrate to tissues via chemokine gradients → differentiate into tissue-resident macrophages under local microenvironmental signals. Macrophage polarization: M1 (pro-inflammatory, microbicidal) vs M2 (anti-inflammatory, tissue repair).",
        "timeline": "~3-5 days from monoblast to circulating monocyte. Monocytes circulate 1-3 days. Tissue macrophages can live for months to years (some are long-lived tissue residents)."
    },

    "stages": [
        {
            "stageNumber": 1,
            "id": "monoblast",
            "name": "Monoblast",
            "markers": ["CD34+", "CD33+", "CD13+", "CD14- (absent)", "CD11b+ (low)", "HLA-DR+"],
            "size": "12-20 μm",
            "morphology": "Large blast cell with round to slightly irregular nucleus. Fine chromatin with 1-2 nucleoli. Abundant basophilic (blue-gray) cytoplasm with no granules or only rare fine azurophilic granules. Cannot be reliably distinguished from myeloblast morphologically - requires immunophenotyping (CD14, CD64, lysozyme).",
            "location": "Bone marrow",
            "function": "Earliest committed monocyte precursor. Responds to M-CSF by proliferating and initiating monocyte-specific gene expression.",
            "mechanisticDetail": "PU.1 at HIGH levels drives monocyte fate (vs low levels for granulocytes). IRF8 collaborates with PU.1 to activate monocyte genes while repressing granulocyte genes. Begins expressing lysozyme (muramidase) - a marker of monocytic differentiation. M-CSFR (CD115, CSF-1R) expression critical for survival signals.",
            "granules": "None or rare fine azurophilic granules",
            "nucleus": "Round to oval, fine chromatin, 1-2 nucleoli",
            "divides": true,
            "clinicalRelevance": [
                "Acute Monocytic Leukemia (AML-M5): Proliferation block at monoblast/promonocyte stage → >80% monocytic cells",
                "AML-M5a (monoblastic without maturation) vs M5b (monocytic with maturation)",
                "Elevated serum/urine lysozyme in monocytic leukemias",
                "Non-specific esterase (NSE) positive - distinguishes from myeloblasts"
            ],
            "step1Pearls": [
                "Earliest monocyte precursor - looks like a blast",
                "Cannot distinguish from myeloblast by morphology alone",
                "PU.1 HIGH + IRF8 → monocyte fate",
                "Non-specific esterase (NSE) POSITIVE (fluoride-sensitive) - key to identify monocytic lineage",
                "Lysozyme positive",
                "AML-M5: Monocytic leukemia, high serum/urine lysozyme",
                "CD14 is absent at this stage (appears later)"
            ]
        },
        {
            "stageNumber": 2,
            "id": "promonocyte",
            "name": "Promonocyte",
            "markers": ["CD34-", "CD33+", "CD13+", "CD14+ (begins to express)", "CD11b++", "CD64+", "HLA-DR+++"],
            "size": "12-20 μm",
            "morphology": "Large cell with irregular, indented, or folded nucleus (beginning to look kidney-shaped or horseshoe-shaped). Chromatin more condensed than monoblast. Abundant gray-blue cytoplasm with fine azurophilic granules and vacuoles. Cytoplasm may have a 'ground-glass' appearance.",
            "location": "Bone marrow",
            "function": "Intermediate stage between monoblast and monocyte. Active synthesis of lysosomal enzymes, cytokines, and surface receptors. Acquires phagocytic capability.",
            "mechanisticDetail": "CD14 expression begins - will become the defining marker of mature monocytes. CD14 is the LPS (lipopolysaccharide) receptor (works with TLR4 and MD-2). Fc receptors (FcγRI/CD64) and complement receptors (CR3/CD11b) expressed for phagocytosis. Lysosomes and granules form containing: lysozyme, acid hydrolases, elastase, myeloperoxidase (less than neutrophils). Can divide but proliferation decreasing.",
            "granules": "Azurophilic granules and lysosomes: Lysozyme, acid phosphatase, arylsulfatase, peroxidase (weak)",
            "nucleus": "Irregular, indented, folded, or kidney-shaped. Condensed chromatin.",
            "divides": "Yes, but less than monoblast",
            "clinicalRelevance": [
                "AML-M5b: Promonocytes and mature monocytes present (monocytic with maturation)",
                "Promonocytes in peripheral blood seen in monocytic leukemias and severe infections (left shift)",
                "High lysozyme can cause renal tubular damage in monocytic leukemias"
            ],
            "step1Pearls": [
                "Indented or folded nucleus (transitional morphology)",
                "CD14 begins to appear (LPS receptor)",
                "CD64 (FcγRI) expressed - high-affinity IgG receptor for phagocytosis",
                "Non-specific esterase positive (fluoride-sensitive)",
                "Seen in blood in monocytic leukemias or severe infections"
            ]
        },
        {
            "stageNumber": 3,
            "id": "monocyte",
            "name": "Monocyte",
            "alternateName": "Circulating Monocyte",
            "markers": ["CD14+++", "CD16+/- (classical vs non-classical)", "CD11b+++", "CD64+++", "HLA-DR+++", "CD33+", "CCR2+"],
            "size": "12-20 μm (largest circulating WBC)",
            "morphology": "Large cell with characteristic kidney-bean or horseshoe-shaped nucleus (may be folded or lobed). Abundant gray-blue cytoplasm with fine azurophilic granules giving a 'ground-glass' appearance. Cytoplasmic vacuoles often present. Pseudopodia may be visible.",
            "location": "Peripheral blood (2-10% of WBCs, 200-1,000 cells/μL). Short transit time: 1-3 days before migrating to tissues.",
            "function": "Circulating precursor to tissue macrophages and dendritic cells. Active phagocyte in blood. Produces cytokines (TNF-α, IL-1, IL-6, IL-12). Migrates to tissues in response to chemokines (CCL2/MCP-1) and inflammatory signals.",
            "mechanisticDetail": "THREE MONOCYTE SUBSETS: (1) Classical (CD14++ CD16-): 85% of monocytes, high phagocytic activity, migrate to inflamed tissues → inflammatory macrophages. (2) Intermediate (CD14++ CD16+): 5%, high antigen presentation, pro-inflammatory cytokines. (3) Non-classical (CD14+ CD16++): 10%, patrol vasculature, 'patrolling monocytes', anti-inflammatory. MIGRATION: Inflammation → endothelial cells express adhesion molecules (VCAM-1, ICAM-1) + produce CCL2/MCP-1 → monocyte integrins (VLA-4, LFA-1) bind → transmigration → differentiate in tissues.",
            "granules": "Lysosomes with acid hydrolases, peroxidase (weak), lysozyme, elastase",
            "nucleus": "Kidney-bean or horseshoe-shaped, folded, or lobed",
            "divides": false,
            "lifespan": "1-3 days in circulation before tissue migration",
            "clinicalRelevance": [
                "Monocytosis (>1,000/μL): Chronic infections (TB, endocarditis), autoimmune diseases, malignancies, CMML, recovery from neutropenia",
                "Monocytopenia (<200/μL): Hairy cell leukemia (classic finding), bone marrow failure, corticosteroids",
                "Chronic Myelomonocytic Leukemia (CMML): Persistent monocytosis (>1,000/μL for >3 months) + dysplasia",
                "Infectious mononucleosis: Atypical lymphocytes (NOT monocytes despite name)",
                "Sarcoidosis: Monocytes differentiate into epithelioid histiocytes → non-caseating granulomas"
            ],
            "step1Pearls": [
                "Largest circulating WBC (12-20 μm)",
                "Kidney-bean nucleus, gray-blue 'ground-glass' cytoplasm",
                "Non-specific esterase POSITIVE (fluoride-sensitive)",
                "CD14 high = classical monocyte (85%) - migrate to inflamed tissues",
                "Monocyte → tissue → becomes macrophage or dendritic cell",
                "Lifespan in blood: 1-3 days (then migrate to tissues)",
                "CMML: Chronic myelomonocytic leukemia = persistent monocytosis + dysplasia",
                "Hairy cell leukemia: Classic finding is monocytopenia"
            ]
        }
    ],

    "tissueMacrophages": [
        {
            "id": "tissue-macrophage",
            "name": "Tissue Macrophage",
            "alternateName": "Histiocyte",
            "markers": ["CD68+++", "CD163+", "CD14+", "CD11b+", "HLA-DR+++", "F4/80+ (mice)", "Tissue-specific markers vary"],
            "size": "15-80 μm (variable, can be very large)",
            "morphology": "Large cell with abundant pale cytoplasm (often vacuolated from phagocytosed material). Eccentric kidney-shaped or oval nucleus. Cytoplasm may contain phagocytosed debris, lipids, or foreign material. Morphology varies by tissue and activation state.",
            "location": "ALL TISSUES. Named differently by tissue: Alveolar macrophages (lung), Kupffer cells (liver), Microglia (CNS), Osteoclasts (bone), Langerhans cells (skin), Splenic macrophages, Peritoneal macrophages, etc.",
            "function": "Professional phagocyte - removes apoptotic cells, pathogens, debris. Antigen presentation via MHC class II. Cytokine production (inflammatory or anti-inflammatory depending on polarization). Tissue homeostasis and repair. Iron recycling (splenic macrophages). Bone resorption (osteoclasts).",
            "mechanisticDetail": "MACROPHAGE POLARIZATION: (1) M1 (Classically Activated): Stimulated by IFN-γ + LPS/TNF → produces iNOS, ROS, TNF-α, IL-1, IL-12 → microbicidal, pro-inflammatory, presents antigen to Th1 cells. (2) M2 (Alternatively Activated): Stimulated by IL-4 + IL-13 → produces Arginase-1, TGF-β, IL-10 → tissue repair, anti-inflammatory, allergy, parasite defense. PHAGOCYTOSIS: Opsonins (IgG, C3b, MBL) → bind FcγR, complement receptors, pattern recognition receptors (TLRs, Dectin, Mannose receptor) → actin polymerization → phagosome formation → lysosome fusion → degradation via ROS, NO, acid hydrolases, proteases.",
            "subtypes": {
                "alveolarMacrophage": "Lung alveoli - clear surfactant, pathogens, particulates. Black pigment in smokers (anthracotic pigment).",
                "kupfferCell": "Liver sinusoids - clear gut-derived bacteria/endotoxin, recycle RBC iron, produce acute phase proteins.",
                "microglia": "CNS - brain resident macrophages, immune surveillance, synaptic pruning. Activation in neuroinflammation/neurodegeneration.",
                "osteoclast": "Bone - multinucleated giant cell from monocyte fusion, bone resorption via acid and cathepsin K. RANK-RANKL signaling.",
                "langerhansCell": "Skin epidermis - dendritic morphology, high HLA-DR, migrates to lymph nodes for antigen presentation. Birbeck granules.",
                "splenicMacrophage": "Red pulp - removes senescent RBCs, recycles iron (transferrin). Extramedullary hematopoiesis in disease.",
                "peritonealMacrophage": "Peritoneal cavity - resident 'large peritoneal macrophages', rapid response to infection.",
                "histiocyte": "Generic term for tissue macrophages in connective tissue."
            },
            "clinicalRelevance": [
                "Hemophagocytic Lymphohistiocytosis (HLH): Uncontrolled macrophage activation → cytokine storm (IFN-γ), hemophagocytosis, cytopenias, fever, splenomegaly, ferritin >10,000",
                "Gaucher disease: Glucocerebrosidase deficiency → glucocerebroside accumulation in macrophages → 'Gaucher cells' (crinkled tissue paper), hepatosplenomegaly, bone pain",
                "Niemann-Pick disease: Sphingomyelinase deficiency → sphingomyelin accumulation → 'foam cells', hepatosplenomegaly, cherry-red spot",
                "Langerhans Cell Histiocytosis (LCH): Clonal proliferation of Langerhans cells (BRAF V600E) → lytic bone lesions, diabetes insipidus, rash. Birbeck granules on EM.",
                "Sarcoidosis: Non-caseating granulomas from macrophage/epithelioid cell aggregation → lung, lymph nodes, skin, eyes",
                "Tuberculosis: Caseating granulomas - macrophages wall off Mycobacterium tuberculosis",
                "Chronic granulomatous disease: Defective NADPH oxidase in macrophages (and neutrophils) → recurrent infections, granulomas",
                "Macrophage activation syndrome (MAS): Secondary HLH, seen in systemic JIA, lupus, infections"
            ],
            "step1Pearls": [
                "Monocyte → tissue → macrophage (tissue-resident form)",
                "CD68 positive (pan-macrophage marker)",
                "Different names in different tissues (Kupffer = liver, Alveolar = lung, Microglia = brain, Osteoclast = bone)",
                "M1 macrophages: IFN-γ activated → iNOS, ROS, IL-12 → kill intracellular pathogens",
                "M2 macrophages: IL-4/IL-13 activated → Arginase-1, TGF-β, IL-10 → tissue repair",
                "Osteoclasts: Multinucleated giant cells, RANK-RANKL signaling, bone resorption, 'Howship lacunae'",
                "Gaucher cells: Crinkled tissue paper cytoplasm, glucocerebroside accumulation",
                "HLH: Ferritin >10,000, hemophagocytosis, pancytopenia, fever, splenomegaly",
                "Langerhans Cell Histiocytosis: BRAF V600E, Birbeck granules (tennis racket on EM), lytic bone lesions",
                "Sarcoidosis: Non-caseating granulomas, elevated ACE, elevated Ca²⁺",
                "TB granulomas: CASEATING (central necrosis), Langhans giant cells (peripheral nuclei)"
            ]
        },
        {
            "id": "dendritic-cell",
            "name": "Dendritic Cell",
            "alternateName": "Professional Antigen-Presenting Cell (APC)",
            "markers": ["CD11c+ (conventional DC)", "HLA-DR+++", "CD80+ (B7-1)", "CD86+ (B7-2)", "CD40+", "CD83+ (mature DC)", "CD123+ (plasmacytoid DC)"],
            "size": "15-20 μm with long dendrites",
            "morphology": "Stellate shape with long cytoplasmic processes (dendrites). Large nucleus with abundant cytoplasm. Immature DCs have less prominent dendrites and more phagocytic. Mature DCs have extensive dendrites and reduced phagocytosis.",
            "location": "Two main types by origin: (1) Conventional DCs (cDCs): From monocytes/DC precursors, found in tissues (skin = Langerhans cells, lymph nodes, spleen). (2) Plasmacytoid DCs (pDCs): From lymphoid precursors, in blood and lymphoid organs.",
            "function": "MOST POTENT antigen-presenting cell. Bridge between innate and adaptive immunity. Capture antigens in tissues (immature state) → migrate to lymph nodes (mature state) → present antigens to naive T cells via MHC class I and II → activate T cells (provide signals 1, 2, and 3).",
            "mechanisticDetail": "ANTIGEN CAPTURE (Immature DC): High phagocytic activity, express PRRs (TLRs, NLRs, C-type lectins) → recognize PAMPs/DAMPs → endocytose antigens. Located in peripheral tissues (sentinels). MATURATION: Pathogen recognition → upregulate CCR7 (lymph node homing) → migrate via lymphatics → upregulate MHC II, CD80/CD86, CD40 → lose phagocytic ability. ANTIGEN PRESENTATION: Process antigens into peptides → load onto MHC I (cross-presentation of exogenous antigens) or MHC II (endogenous pathway) → present to CD8+ or CD4+ T cells. THREE SIGNALS: (1) MHC-peptide to TCR, (2) CD80/CD86 to CD28 (co-stimulation), (3) Cytokines (IL-12 for Th1, IL-4 for Th2, TGF-β+IL-6 for Th17). Without signal 2 → T cell anergy.",
            "subtypes": {
                "cDC1": "CD8α+ in mice, CD141+ in humans. Excel at cross-presentation (MHC I) → activate CD8+ T cells. Produce IL-12 → Th1 response.",
                "cDC2": "CD11b+ in mice, CD1c+ in humans. Excel at MHC II presentation → activate CD4+ T cells. Support Th2, Th17 responses.",
                "plasmacytoidDC": "CD123+, produce massive amounts of Type I IFN (IFN-α/β) in viral infections. 'Natural interferon-producing cells'.",
                "langerhansCell": "Skin epidermis, migrate to draining lymph nodes, Birbeck granules, cross-present antigens.",
                "followicularDC": "NOT from bone marrow (different origin). In lymph node follicles, present antigens to B cells via immune complexes."
            },
            "clinicalRelevance": [
                "DC-based cancer vaccines: Load DCs with tumor antigens ex vivo → reinfuse → activate anti-tumor T cells (e.g., sipuleucel-T for prostate cancer)",
                "HIV targets DCs (via DC-SIGN receptor) → impairs T cell priming",
                "Contact dermatitis: Langerhans cells capture haptens (poison ivy, nickel) → present to T cells → Type IV hypersensitivity",
                "Plasmacytoid DCs in SLE: Produce excessive Type I IFN → contributes to lupus pathology",
                "Langerhans Cell Histiocytosis: Clonal proliferation of abnormal Langerhans cells"
            ],
            "step1Pearls": [
                "MOST POTENT antigen-presenting cell (better than macrophages or B cells)",
                "Immature DC: High phagocytosis, in tissues, capture antigens",
                "Mature DC: Low phagocytosis, in lymph nodes, high MHC/costimulation, activate naive T cells",
                "Express CD80/CD86 (B7) → binds CD28 on T cells → co-stimulation (Signal 2)",
                "Without CD80/CD86 → T cell anergy (tolerance)",
                "Cross-presentation: DCs present exogenous antigens on MHC I → activate CD8+ T cells (unique ability)",
                "Plasmacytoid DCs: Produce massive Type I interferon (IFN-α/β) in viral infections",
                "Langerhans cells: Dendritic cells in skin, migrate to lymph nodes, Birbeck granules",
                "Type IV hypersensitivity: DCs present antigen → activate memory T cells → delayed (48-72 hr) reaction",
                "Three signals for T cell activation: (1) MHC-TCR, (2) CD80/86-CD28, (3) Cytokines (IL-12, etc.)"
            ]
        }
    ],

    "clinicalCorrelations": [
        {
            "disease": "Chronic Myelomonocytic Leukemia (CMML)",
            "mechanism": "Myelodysplastic/myeloproliferative overlap syndrome with clonal monocytosis. TET2, SRSF2, ASXL1 mutations common.",
            "affectedStages": "Monocyte progenitors and mature monocytes",
            "labs": "Persistent monocytosis (>1,000/μL for >3 months), dysplasia in ≥1 lineages, <20% blasts (not AML), usually anemia/thrombocytopenia",
            "treatment": "Azacitidine (hypomethylating agent), stem cell transplant (only curative option)"
        },
        {
            "disease": "Hemophagocytic Lymphohistiocytosis (HLH)",
            "mechanism": "Primary (genetic: perforin, syntaxin defects → impaired NK/CTL killing) or Secondary (infection, malignancy, autoimmune). Results in uncontrolled macrophage activation → cytokine storm.",
            "affectedStages": "Tissue macrophages become hyperactivated",
            "labs": "HLH diagnostic criteria (5/8): Fever, splenomegaly, cytopenias (≥2 lineages), hemophagocytosis, ferritin >500 (usually >10,000), low/absent NK activity, high soluble CD25 (sIL-2R), hypertriglyceridemia/hypofibrinogenemia",
            "treatment": "HLH-94 protocol: Dexamethasone + etoposide ± cyclosporine, treat underlying trigger, stem cell transplant for primary HLH"
        },
        {
            "disease": "Gaucher Disease",
            "mechanism": "Glucocerebrosidase deficiency (autosomal recessive) → glucocerebroside accumulation in macrophages",
            "affectedStages": "Tissue macrophages (especially splenic, hepatic, bone marrow)",
            "presentation": "Type 1 (most common): Hepatosplenomegaly, pancytopenia, bone pain/fractures, 'Gaucher cells' (crinkled tissue paper cytoplasm). Type 2/3: Neuronopathic.",
            "treatment": "Enzyme replacement therapy (imiglucerase), substrate reduction therapy (eliglustat)"
        },
        {
            "disease": "Langerhans Cell Histiocytosis (LCH)",
            "mechanism": "Clonal proliferation of Langerhans cells with BRAF V600E mutation (50-60%) or MAP2K1 mutation",
            "affectedStages": "Dendritic cells (Langerhans cell lineage)",
            "presentation": "Variable: Isolated bone lesions (skull, 'lytic lesions'), multisystem disease, diabetes insipidus (pituitary infiltration), skin rash, lung involvement. Birbeck granules on EM (tennis racket shape).",
            "treatment": "Mild: Observation or local therapy. Multisystem: Vinblastine + prednisone. BRAF inhibitors for refractory cases."
        }
    ],

    "step1HighYieldConcepts": [
        "Monocyte maturation: Monoblast → Promonocyte → Monocyte → Tissue Macrophage/DC",
        "Non-specific esterase (NSE) POSITIVE - key marker for monocytic lineage",
        "Monocyte is largest circulating WBC, kidney-bean nucleus, gray-blue ground-glass cytoplasm",
        "Classical monocytes (CD14++ CD16-): 85%, phagocytic, migrate to inflamed tissues",
        "Monocyte lifespan in blood: 1-3 days, then migrate to tissues",
        "Macrophages have different names in different tissues: Kupffer (liver), Alveolar (lung), Microglia (brain), Osteoclast (bone)",
        "M1 macrophages: IFN-γ activated, iNOS+, pro-inflammatory, microbicidal (Th1 response)",
        "M2 macrophages: IL-4/IL-13 activated, Arginase-1+, anti-inflammatory, tissue repair (Th2 response)",
        "Dendritic cells are MOST POTENT APCs - activate naive T cells",
        "DCs cross-present exogenous antigens on MHC I → activate CD8+ T cells",
        "Three signals for T cell activation: (1) MHC-TCR, (2) CD80/86-CD28, (3) Cytokines",
        "Without costimulation (signal 2) → T cell anergy",
        "CMML: Chronic myelomonocytic leukemia = persistent monocytosis (>1,000/μL) + dysplasia",
        "HLH: Hemophagocytic lymphohistiocytosis = ferritin >10,000, hemophagocytosis, cytokine storm",
        "Gaucher disease: Glucocerebrosidase deficiency → 'crinkled tissue paper' macrophages",
        "Langerhans Cell Histiocytosis: BRAF V600E, Birbeck granules, lytic bone lesions, diabetes insipidus",
        "Sarcoidosis: Non-caseating granulomas, elevated ACE",
        "TB: Caseating granulomas, Langhans giant cells"
    ]
};

export default monocyteLineage;

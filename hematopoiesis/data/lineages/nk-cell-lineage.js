// NK Cell Lineage - Natural Killer Cell Development
// From Common Lymphoid Progenitor to Mature NK Cells

const nkCellLineage = {
    "id": "nk-cell-lineage",
    "name": "NK Cell Lineage",
    "fullName": "Natural Killer Cell Development and Function",
    "parentCell": "common-lymphoid-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "NK (Natural Killer) cells are innate lymphoid cells that provide rapid immune responses against virus-infected cells and tumor cells WITHOUT prior sensitization. Unlike T cells, NK cells do NOT require antigen presentation via MHC and do NOT undergo clonal selection. They recognize 'missing self' (absent/reduced MHC I) and 'induced self' (stress ligands). Development occurs in bone marrow and secondary lymphoid organs.",
        "keyTranscriptionFactors": [
            "ID2 (Inhibitor of DNA binding 2) - required for NK cell commitment",
            "NFIL3 (Nuclear Factor IL-3 regulated) - early NK development",
            "T-bet (TBX21) - promotes NK maturation and IFN-γ production",
            "Eomes (Eomesodermin) - NK cell survival and function"
        ],
        "keyCytokines": [
            "IL-15 - ESSENTIAL for NK cell development, survival, and proliferation (most important cytokine)",
            "IL-2 - activates NK cells, enhances cytotoxicity (ADCC)",
            "IL-12 - induces IFN-γ production from NK cells",
            "IL-18 - synergizes with IL-12 to enhance NK activation",
            "Type I IFN (IFN-α/β) - activates NK cells during viral infections"
        ],
        "keyMechanism": "NK CELL RECOGNITION: Balance of activating and inhibitory signals. INHIBITORY RECEPTORS (KIR, CD94/NKG2A) recognize MHC class I → 'self' signal → inhibits killing. ACTIVATING RECEPTORS (NKG2D, NCRs, CD16) recognize stress ligands or antibody-coated cells → 'kill' signal. MISSING SELF: Virus-infected or tumor cells downregulate MHC I to evade CTLs → NK inhibitory receptors not engaged → NK cells activated → kill target. INDUCED SELF: Stress ligands (MICA/B, ULBP) expressed on stressed cells → activate NKG2D → kill target.",
        "timeline": "~7-10 days for bone marrow development. Mature NK cells circulate for weeks and can be rapidly recruited to tissues during infection/inflammation."
    },

    "stages": [
        {
            "stageNumber": 1,
            "id": "nk-progenitor",
            "name": "NK Progenitor",
            "alternateName": "Pre-NK Cell",
            "markers": ["CD34+", "CD117+ (c-Kit)", "IL-2Rβ+ (CD122)", "CD56-", "CD16-"],
            "size": "10-12 μm",
            "morphology": "Small lymphoid progenitor with high nuclear-to-cytoplasmic ratio. Cannot be distinguished morphologically from other lymphoid progenitors.",
            "location": "Bone marrow, lymph nodes, tonsils",
            "function": "Earliest NK-committed progenitor. Responds to IL-15 signaling for survival and proliferation. Begins expressing NK-specific transcription factors.",
            "mechanisticDetail": "IL-15 signaling is CRITICAL: IL-15 binds IL-15Rα on stromal cells → trans-presented to IL-2Rβ (CD122) + common γ chain on NK progenitor → JAK1/JAK3 → STAT5 activation → upregulates ID2, NFIL3, T-bet → NK commitment. Without IL-15 or IL-2Rβ → NK cells fail to develop. ID2 represses E2A → blocks B/T cell programs, promotes NK fate.",
            "divides": true,
            "clinicalRelevance": [
                "IL-2Rβ (CD122) deficiency: No NK cells (T- B+ NK- SCID phenotype if common γ chain defective)",
                "X-linked SCID (common γ chain deficiency): T- B+ NK- (no IL-15 signaling)",
                "JAK3 deficiency: T- B+ NK- SCID (similar to X-linked SCID)"
            ],
            "step1Pearls": [
                "Earliest NK progenitor - commits to NK lineage",
                "IL-15 is ESSENTIAL for NK cell development (most important cytokine)",
                "IL-2Rβ (CD122) required for IL-15 signaling",
                "X-linked SCID: Common γ chain defect → T- B+ NK-",
                "ID2 drives NK fate (represses B/T cell programs)"
            ]
        },
        {
            "stageNumber": 2,
            "id": "immature-nk-cell",
            "name": "Immature NK Cell",
            "markers": ["CD56bright", "CD16- (or low)", "CD94+", "NKG2A+", "KIR-", "IL-2Rβ+ (CD122)"],
            "size": "10-14 μm",
            "morphology": "Medium-sized lymphocyte with scant cytoplasm. Few azurophilic granules. Not yet fully cytotoxic.",
            "location": "Bone marrow, secondary lymphoid organs (lymph nodes, tonsils)",
            "function": "Immature NK cell acquiring inhibitory and activating receptors. High cytokine production (IFN-γ) but lower cytotoxicity compared to mature NK cells. Requires 'licensing' (education) to become fully functional.",
            "mechanisticDetail": "CD56bright = immature phenotype. Expresses CD94/NKG2A (inhibitory receptor recognizing HLA-E, a non-classical MHC I). Begins expressing activating receptors (NKG2D, NCRs). NK CELL EDUCATION (Licensing): NK cells that express inhibitory receptors matching self-MHC I become functionally competent ('licensed'). NK cells without matching inhibitory receptors remain hyporesponsive ('unlicensed') - prevents autoimmunity. This is opposite of T cell selection.",
            "divides": true,
            "clinicalRelevance": [
                "NK cell deficiencies: Rare, present with severe herpesvirus infections (HSV, VZV, CMV, EBV)",
                "Classical NK deficiency: Absent/dysfunctional NK cells → recurrent viral infections, ↑ risk of malignancy",
                "Functional NK deficiencies: Perforin defects (FHL), defective NK receptors"
            ],
            "step1Pearls": [
                "Immature NK: CD56bright CD16-",
                "High IFN-γ production, low cytotoxicity",
                "CD94/NKG2A inhibitory receptor (recognizes HLA-E)",
                "NK cell education (licensing): Must express inhibitory receptor matching self-MHC I",
                "Opposite of T cells: NK cells need to recognize self-MHC I to become functional"
            ]
        },
        {
            "stageNumber": 3,
            "id": "mature-nk-cell",
            "name": "Mature NK Cell",
            "markers": ["CD56dim", "CD16+++ (FcγRIIIA)", "CD94+", "NKG2D+", "KIR+ (various)", "CD2+", "CD57+ (terminally mature)"],
            "size": "12-15 μm (larger than T/B cells)",
            "morphology": "Large granular lymphocyte (LGL) with abundant cytoplasm containing azurophilic granules (perforin, granzymes). Kidney-shaped or indented nucleus. Distinct appearance on blood smear.",
            "location": "Peripheral blood (5-15% of lymphocytes), spleen, liver. Rapidly recruited to sites of infection/inflammation.",
            "function": "Potent cytotoxic cell that kills virus-infected cells, tumor cells, and antibody-coated cells (ADCC). Produces cytokines (IFN-γ, TNF-α, GM-CSF) to activate other immune cells. Provides rapid innate immunity without need for prior sensitization.",
            "mechanisticDetail": "CD56dim CD16+ = mature, highly cytotoxic phenotype. KILLING MECHANISMS: (1) PERFORIN/GRANZYME: NK cell releases perforin (forms pores) + granzymes (serine proteases) → granzymes enter target → activate caspases → apoptosis. (2) FAS-FASL: FasL on NK binds Fas on target → caspase-8 → apoptosis. (3) ANTIBODY-DEPENDENT CELLULAR CYTOTOXICITY (ADCC): CD16 (FcγRIIIA) binds IgG-coated target cells → activation → killing (used by therapeutic antibodies like rituximab, trastuzumab). RECOGNITION: MISSING SELF: Inhibitory receptors (KIR family, CD94/NKG2A) recognize MHC class I. If MHC I absent/reduced (virus/tumor) → no inhibition → NK activated. INDUCED SELF: Activating receptors (NKG2D, NCRs - NKp30, NKp44, NKp46) recognize stress ligands (MICA/B, ULBP) on infected/tumor cells → activation. Balance of inhibitory + activating signals determines response.",
            "receptors": {
                "inhibitory": {
                    "KIR": "Killer Immunoglobulin-like Receptors (multiple, recognize classical HLA-A/B/C)",
                    "CD94NKG2A": "Recognizes HLA-E (non-classical MHC I)",
                    "ILT2LIR1": "Recognizes broad range of HLA"
                },
                "activating": {
                    "NKG2D": "Recognizes stress ligands MICA/MICB, ULBP (induced by infection, DNA damage, transformation)",
                    "NCRs": "Natural Cytotoxicity Receptors (NKp30, NKp44, NKp46) - recognize viral proteins and tumor antigens",
                    "CD16": "FcγRIIIA - mediates ADCC (antibody-dependent cellular cytotoxicity)",
                    "2B4": "CD244 - recognizes CD48"
                }
            },
            "divides": "Can proliferate in response to cytokines (IL-2, IL-15)",
            "clinicalRelevance": [
                "NK cell deficiency: Recurrent severe herpesvirus infections (HSV, VZV, CMV, EBV), ↑ risk of lymphoma",
                "Familial Hemophagocytic Lymphohistiocytosis (FHL): Perforin defects → impaired NK/CTL cytotoxicity → HLH",
                "Chediak-Higashi syndrome: Giant granules, impaired degranulation → recurrent infections",
                "NK cell leukemia/lymphoma: Rare, aggressive, EBV-associated, more common in Asia",
                "Large Granular Lymphocyte (LGL) leukemia: Clonal expansion of NK or CTLs, chronic course, cytopenias",
                "Therapeutic ADCC: Rituximab (anti-CD20), trastuzumab (anti-HER2), cetuximab (anti-EGFR) rely on NK cell CD16 for efficacy"
            ],
            "step1Pearls": [
                "Mature NK: CD56dim CD16+ (FcγRIIIA) - highly cytotoxic",
                "Large granular lymphocyte (LGL) with azurophilic granules",
                "Kill virus-infected cells and tumor cells WITHOUT MHC restriction",
                "MISSING SELF: No MHC I on target → no inhibitory signal → NK kills",
                "INDUCED SELF: Stress ligands (MICA/B) → activate NKG2D → NK kills",
                "Perforin/granzyme pathway: Same as CD8+ CTLs, but NO antigen specificity",
                "ADCC: CD16 (FcγRIIIA) binds IgG-coated cells → NK kills → mechanism of rituximab, trastuzumab",
                "NK cells produce IFN-γ (activates macrophages, like Th1)",
                "NK cells are innate immunity (no memory, no MHC restriction, immediate response)",
                "FHL (Familial HLH): Perforin defect → NK/CTL cannot kill → hemophagocytosis",
                "Chediak-Higashi: Giant granules, impaired NK degranulation",
                "NK deficiency: Severe herpesvirus infections (HSV, VZV, CMV, EBV)"
            ]
        }
    ],

    "nkCellSubsets": [
        {
            "subset": "CD56bright CD16- NK cells",
            "percentage": "~10% of blood NK cells, ~90% of lymph node NK cells",
            "location": "Secondary lymphoid organs (lymph nodes, tonsils), tissues",
            "function": "Immunoregulatory - produce large amounts of cytokines (IFN-γ, TNF-α, GM-CSF) with minimal cytotoxicity. Respond to IL-12 and IL-18 from dendritic cells/macrophages.",
            "characteristics": "High proliferative capacity, express IL-2Rα (CD25) after activation, low perforin/granzyme",
            "step1Pearls": ["CD56bright = immature/regulatory NK cells", "High cytokine production (IFN-γ)", "Low cytotoxicity", "Found in lymph nodes"]
        },
        {
            "subset": "CD56dim CD16+ NK cells",
            "percentage": "~90% of blood NK cells",
            "location": "Peripheral blood, spleen, liver, recruited to inflamed tissues",
            "function": "Cytotoxic - potent killers via perforin/granzyme and ADCC. Lower cytokine production compared to CD56bright. Patrol circulation for infected/tumor cells.",
            "characteristics": "High perforin/granzyme content, express KIRs (killer Ig-like receptors), CD57+ when terminally mature",
            "step1Pearls": ["CD56dim = mature/cytotoxic NK cells", "High killing capacity", "Dominant in blood (90%)", "ADCC via CD16"]
        }
    ],

    "clinicalCorrelations": [
        {
            "disease": "Classical NK Cell Deficiency",
            "mechanism": "Rare genetic defects in NK cell development or function (MCM4 mutations, GATA2 deficiency, FCGR3A defects)",
            "affectedStages": "Absent or dysfunctional NK cells",
            "presentation": "Severe, recurrent, disseminated herpesvirus infections (HSV, VZV, CMV, EBV). EBV-associated lymphoproliferation or lymphoma. HPV-related warts. Increased malignancy risk.",
            "labs": "Absent or very low NK cells by flow cytometry, impaired NK cytotoxicity assays",
            "treatment": "Antiviral prophylaxis (acyclovir, valacyclovir), aggressive treatment of infections, possible stem cell transplant"
        },
        {
            "disease": "Familial Hemophagocytic Lymphohistiocytosis (FHL)",
            "mechanism": "Defects in perforin (PRF1), UNC13D, STX11, STXBP2 genes → impaired NK and CTL cytotoxic granule release → cannot kill activated immune cells → uncontrolled immune activation",
            "affectedStages": "Mature NK cells cannot degranulate properly",
            "presentation": "Early childhood onset (usually <2 years). Fever, hepatosplenomegaly, cytopenias, hemophagocytosis, neurologic symptoms. Often triggered by infections (especially EBV).",
            "labs": "Ferritin >10,000, hypertriglyceridemia, hypofibrinogenemia, hemophagocytosis on bone marrow, ↓/absent NK cell degranulation",
            "treatment": "HLH-94 protocol (dexamethasone + etoposide), stem cell transplant (curative)"
        },
        {
            "disease": "Chediak-Higashi Syndrome",
            "mechanism": "LYST gene mutation → defective vesicle trafficking → giant granules in NK cells (and neutrophils, melanocytes) → impaired degranulation",
            "affectedStages": "Mature NK cells have giant granules but cannot release them effectively",
            "presentation": "Recurrent pyogenic infections, partial albinism, peripheral neuropathy, bleeding tendency. 'Accelerated phase' (HLH-like) in 85% by age 10.",
            "labs": "Giant granules in leukocytes on blood smear, impaired NK cytotoxicity",
            "treatment": "Prophylactic antibiotics, stem cell transplant before accelerated phase"
        },
        {
            "disease": "Large Granular Lymphocyte (LGL) Leukemia",
            "mechanism": "Clonal proliferation of mature NK cells (NK-LGL) or cytotoxic T cells (T-LGL). STAT3 or STAT5B mutations common.",
            "affectedStages": "Clonal expansion of mature CD56dim CD16+ NK cells (or CD8+ CTLs)",
            "presentation": "Chronic indolent course. Cytopenias (especially neutropenia, anemia). Splenomegaly. Recurrent infections (due to neutropenia). Associated with rheumatoid arthritis in T-LGL.",
            "labs": "Persistent lymphocytosis (LGLs >2,000/μL for >6 months), clonality by flow or TCR gene rearrangement (T-LGL)",
            "treatment": "Observation if asymptomatic. Immunosuppression (methotrexate, cyclosporine, cyclophosphamide) if symptomatic cytopenias. G-CSF for neutropenia."
        },
        {
            "disease": "EBV-Associated NK/T-Cell Lymphoma",
            "mechanism": "EBV infection of NK cells → clonal expansion → aggressive lymphoma. More common in Asia and Latin America.",
            "affectedStages": "Malignant transformation of NK cells",
            "presentation": "Extranodal NK/T-cell lymphoma, nasal type: Destructive midline facial lesions ('lethal midline granuloma'). B symptoms, hemophagocytosis. Very aggressive.",
            "labs": "EBV+ tumor cells (EBER in situ hybridization), CD56+, CD3ε+ (cytoplasmic), CD16-, poor prognosis",
            "treatment": "Chemotherapy (L-asparaginase-based regimens), radiation, poor prognosis"
        }
    ],

    "step1HighYieldConcepts": [
        "NK cells are innate lymphocytes - NO antigen specificity, NO MHC restriction, NO memory",
        "IL-15 is ESSENTIAL for NK cell development and survival",
        "X-linked SCID (common γ chain defect): T- B+ NK-",
        "Mature NK cells: CD56dim CD16+ (FcγRIIIA) - large granular lymphocytes (LGLs)",
        "CD56bright NK cells: Regulatory, high IFN-γ, low cytotoxicity, in lymph nodes",
        "CD56dim NK cells: Cytotoxic, high perforin/granzyme, ADCC, in blood (90%)",
        "MISSING SELF: Tumor/virus downregulates MHC I → no inhibitory signal → NK kills",
        "Inhibitory receptors (KIR, CD94/NKG2A) recognize MHC I → 'don't kill' signal",
        "Activating receptors (NKG2D, NCRs) recognize stress ligands → 'kill' signal",
        "Balance of inhibitory + activating signals determines NK response",
        "NK cells kill via perforin/granzyme (same as CTLs) or Fas-FasL",
        "ADCC: CD16 binds IgG-coated cells → NK kills → rituximab, trastuzumab mechanism",
        "NK cell deficiency: Severe herpesvirus infections (HSV, VZV, CMV, EBV)",
        "FHL: Perforin defect → impaired NK/CTL killing → hemophagocytosis, ferritin >10,000",
        "Chediak-Higashi: Giant granules, impaired degranulation, albinism, recurrent infections",
        "LGL leukemia: Clonal NK or T cells, chronic indolent, cytopenias (neutropenia), LGLs >2,000/μL",
        "NK/T-cell lymphoma: EBV+, nasal type, destructive midline facial lesions, very aggressive"
    ]
};

export default nkCellLineage;

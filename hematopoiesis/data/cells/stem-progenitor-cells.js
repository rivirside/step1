// Hematopoietic Stem Cells and Progenitors

const cells = [
    {
        "id": "hematopoietic-stem-cell",
        "name": "Hematopoietic Stem Cell (HSC)",
        "lineage": "stem-cell",
        "system": "hematopoietic",
        "markers": ["CD34+ (stem cell marker)", "CD38- (negative, primitive marker)", "CD90+ (Thy-1)", "CD133+ (Prominin-1)", "Lin- (lineage negative - no committed lineage markers)"],
        "size": "10-12 μm",
        "morphology": "Small, round cell with high nuclear-to-cytoplasmic ratio, scant basophilic cytoplasm, large nucleus with fine chromatin",
        "location": "Bone marrow niches (endosteal niche near bone surface, vascular niche near sinusoids), small numbers in peripheral blood (~0.1% of nucleated cells)",
        "function": "Self-renewal (maintains stem cell pool) and multilineage differentiation into all blood cell types. Maintains lifelong hematopoiesis. Asymmetric division produces one HSC + one progenitor.",
        "mechanisticDetail": "HSCs balance self-renewal vs differentiation. Quiescent HSCs reside in bone marrow niches receiving survival signals (SCF, TPO, CXCL12/SDF-1). Notch signaling promotes self-renewal. Upon stress/demand → HSCs activate and differentiate. CXCR4 (on HSC) binds CXCL12/SDF-1 (in niche) → HSC retention in marrow. G-CSF mobilization disrupts this axis.",
        "transcriptionFactors": ["RUNX1 (Runt-related transcription factor 1 - essential for HSC emergence)", "SCL/TAL1 (Stem Cell Leukemia/T-cell Acute Lymphoblastic leukemia 1)", "GATA2 (GATA-binding factor 2 - HSC maintenance)", "c-MYB (myeloblastosis oncogene - regulates HSC proliferation)"],
        "cytokines": {
            "maintain": ["SCF (stem cell factor)", "TPO (thrombopoietin)", "FLT3 ligand"],
            "mobilize": ["G-CSF", "Plerixafor (CXCR4 antagonist)"]
        },
        "differentiatesTo": ["common-myeloid-progenitor", "common-lymphoid-progenitor"],
        "clinicalRelevance": [
            "Source for bone marrow/stem cell transplantation",
            "Target for gene therapy (sickle cell disease, thalassemia, SCID)",
            "CD34+ count used to assess transplant graft adequacy (goal >2-5 million CD34+ cells/kg)",
            "G-CSF mobilizes HSCs from marrow to blood for collection"
        ],
        "diseases": [
            "Aplastic anemia (HSC failure/destruction)",
            "Myelodysplastic syndromes (abnormal HSC differentiation)",
            "Fanconi anemia (DNA repair defect in HSCs)",
            "Paroxysmal nocturnal hemoglobinuria (PNH) - clonal HSC disorder"
        ],
        "crossLinks": {
            "conditions": ["aplastic-anemia", "fanconi-anemia"],
            "medications": ["filgrastim", "plerixafor"]
        },
        "step1Pearls": [
            "CD34+ CD38- defines the most primitive HSC population",
            "HSCs are Lin- (negative for lineage markers) = not committed yet",
            "G-CSF mobilizes HSCs from bone marrow to peripheral blood for collection",
            "Plerixafor (CXCR4 antagonist) also mobilizes HSCs - use with G-CSF",
            "HSCs home to bone marrow via CXCR4/SDF-1 axis",
            "Transplant patients need myeloablation (chemo/radiation) to make space for donor HSCs",
            "Classic vignette: Patient getting stem cell harvest → receive G-CSF then apheresis"
        ],
        "pageType": "cell"
    },
    {
        "id": "common-myeloid-progenitor",
        "name": "Common Myeloid Progenitor (CMP)",
        "lineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+ (stem cell marker)", "CD38+ (activated progenitor)", "IL-3Rα+ (Interleukin-3 receptor alpha, CD123)", "Lin- (lineage negative)"],
        "size": "10-12 μm",
        "morphology": "Similar to HSC but with slightly more cytoplasm, cannot be distinguished morphologically without immunophenotyping",
        "location": "Bone marrow",
        "function": "Committed to myeloid lineage. Differentiates into all non-lymphoid blood cells (erythrocytes, platelets, granulocytes, monocytes). Has lost self-renewal capacity.",
        "mechanisticDetail": "CMP fate decision is controlled by transcription factor balance: GATA1 high + PU.1 low → MEP (erythroid/megakaryocyte pathway). C/EBPα high + PU.1 high → GMP (granulocyte/monocyte pathway). IL-3 and GM-CSF (Granulocyte-Macrophage Colony-Stimulating Factor) promote CMP proliferation and survival.",
        "transcriptionFactors": ["PU.1 (PU box-binding myeloid transcription factor - low levels in CMP)", "C/EBPα (CCAAT/enhancer-binding protein alpha)", "GATA1 (GATA-binding factor 1)", "GATA2 (GATA-binding factor 2)"],
        "cytokines": {
            "stimulate": ["IL-3 (Interleukin-3, multi-CSF - supports all myeloid lineages)", "GM-CSF (Granulocyte-Macrophage Colony-Stimulating Factor)", "SCF (Stem Cell Factor)"]
        },
        "differentiatesFrom": "hematopoietic-stem-cell",
        "differentiatesTo": ["megakaryocyte-erythroid-progenitor", "granulocyte-monocyte-progenitor"],
        "clinicalRelevance": [
            "Target of dysregulation in myeloid malignancies",
            "IL-3 and GM-CSF stimulate expansion of this population",
            "BCR-ABL in CML causes uncontrolled CMP proliferation",
            "AML arises from blocks at CMP or later myeloid stages"
        ],
        "diseases": [
            "Chronic myeloid leukemia (CML) - BCR-ABL fusion protein causes constitutive tyrosine kinase activity → uncontrolled CMP proliferation",
            "Acute myeloid leukemia (AML) - mutations block further differentiation at CMP or downstream stages",
            "Myeloproliferative neoplasms (MPN) - JAK2 V617F or other mutations cause expansion of myeloid progenitors"
        ],
        "crossLinks": {
            "conditions": ["chronic-myeloid-leukemia", "acute-myeloid-leukemia"]
        },
        "step1Pearls": [
            "CMP gives rise to ALL myeloid cells (RBCs, platelets, granulocytes, monocytes)",
            "PU.1 at LOW levels → myeloid commitment. PU.1 at HIGH levels → lymphoid commitment",
            "GATA1 promotes erythroid/megakaryocyte lineage (MEP), C/EBPα promotes granulocyte/monocyte lineage (GMP)",
            "CML affects CMP via BCR-ABL → Philadelphia chromosome → constitutive tyrosine kinase activity",
            "CML presentation: Marked leukocytosis with LEFT SHIFT (all myeloid stages present), basophilia, splenomegaly",
            "Remember: CMP splits into MEP (platelets/RBCs) and GMP (granulocytes/monocytes)",
            "Classic vignette: Patient with WBC >100,000 with all stages of granulocytes → think CML affecting CMP"
        ],
        "pageType": "cell"
    },
    {
        "id": "common-lymphoid-progenitor",
        "name": "Common Lymphoid Progenitor (CLP)",
        "lineage": "lymphoid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+ (stem cell marker)", "CD38+ (activated progenitor)", "CD10+ (CALLA - Common Acute Lymphoblastic Leukemia Antigen, neprilysin)", "Lin- (lineage negative)"],
        "size": "10-12 μm",
        "morphology": "Cannot be distinguished morphologically from CMP, requires immunophenotyping for identification",
        "location": "Bone marrow initially, then T cell progenitors migrate to thymus via bloodstream, B cells continue development in marrow, NK cells develop in marrow and lymph nodes",
        "function": "Committed to lymphoid lineage. Gives rise to all lymphocytes (T cells, B cells, NK cells). Has lost self-renewal capacity and myeloid potential.",
        "mechanisticDetail": "CLP fate determination: High PU.1 expression commits to lymphoid lineage. IL-7 signaling via IL-7R → JAK1/JAK3 → STAT5 activation → promotes CLP survival and proliferation. Notch1 signaling (from thymic epithelium) → T cell fate. PAX5 expression → B cell fate. IL-15 → NK cell fate.",
        "transcriptionFactors": ["PU.1 (PU box-binding transcription factor - HIGH levels in lymphoid)", "Ikaros (IKZF1 - lymphoid commitment)", "E2A (E-box binding proteins - promotes lymphoid development)", "PAX5 (Paired box protein 5 - B cell commitment)", "Notch1 (transmembrane receptor - T cell commitment)"],
        "cytokines": {
            "stimulate": ["IL-7 (Interleukin-7 - CRITICAL for B and T cell development, binds IL-7R → JAK/STAT signaling)", "FLT3 ligand (FMS-like tyrosine kinase 3 ligand)", "IL-15 (promotes NK cell development)"]
        },
        "differentiatesFrom": "hematopoietic-stem-cell",
        "differentiatesTo": ["pro-b-cell", "pro-t-cell", "pro-nk-cell"],
        "clinicalRelevance": [
            "Requires IL-7 for survival and proliferation - IL-7R mutations cause T-B- SCID",
            "Target of dysregulation in lymphoid malignancies (ALL, lymphomas)",
            "T cell progenitors must migrate from marrow to thymus for maturation (CCR9/CCR7 chemokine receptors)",
            "CD10+ used as diagnostic marker for acute lymphoblastic leukemia (ALL)"
        ],
        "diseases": [
            "Acute lymphoblastic leukemia (ALL) - B-ALL (75%) and T-ALL (25%) arise from arrested lymphoid progenitor development",
            "Severe combined immunodeficiency (SCID) - IL-7R mutations (IL-7Rα or common gamma chain) block CLP development → T-B- NK+ SCID",
            "X-linked agammaglobulinemia (XLA, Bruton's disease) - BTK (Bruton tyrosine kinase) mutation blocks B cell development from CLP",
            "Omenn syndrome - hypomorphic RAG mutations allow some T cell development but abnormal"
        ],
        "crossLinks": {
            "conditions": ["acute-lymphoblastic-leukemia", "severe-combined-immunodeficiency"]
        },
        "step1Pearls": [
            "PU.1 at HIGH levels → lymphoid commitment (vs LOW levels → myeloid)",
            "IL-7 is ABSOLUTELY CRITICAL for CLP survival - IL-7R mutations cause T-B- SCID",
            "CLP expresses CD10 (CALLA) - CD10+ blast cells in blood/marrow → think ALL",
            "Pre-B ALL and Pre-T ALL arise from blocks at early lymphoid progenitor stages",
            "PAX5 drives B cell commitment (expressed throughout B cell development)",
            "Notch1 drives T cell commitment (requires thymic epithelial cell contact)",
            "T cell progenitors MUST migrate to THYMUS for maturation (positive/negative selection)",
            "Common gamma chain (γc, CD132) shared by IL-2, IL-4, IL-7, IL-9, IL-15, IL-21 receptors",
            "X-linked SCID = γc mutation → affects all these cytokine pathways",
            "Mnemonic: 'CLP Cells Like Patrolling' (lymphocytes patrol for pathogens)"
        ],
        "pageType": "cell"
    },
    {
        "id": "megakaryocyte-erythroid-progenitor",
        "name": "Megakaryocyte-Erythroid Progenitor (MEP)",
        "lineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+ (stem cell marker)", "CD38+ (activated progenitor)", "IL-3Rα+ (Interleukin-3 receptor alpha, CD123)", "CD41+ low (Integrin αIIb - early megakaryocyte marker)", "CD71+ (transferrin receptor - erythroid marker)"],
        "size": "10-14 μm",
        "morphology": "Not distinguishable morphologically from other progenitors, identified by immunophenotyping (flow cytometry) and colony-forming assays (CFU-GEMM, CFU-Meg, BFU-E)",
        "location": "Bone marrow, particularly in perivascular niches near sinusoids",
        "function": "Bipotent progenitor committed to erythroid (red blood cell) or megakaryocyte (platelet) lineage. Cannot produce granulocytes or monocytes. Last common progenitor for RBCs and platelets.",
        "mechanisticDetail": "MEP fate decision determined by cytokine signaling balance: EPO (Erythropoietin) signaling → EPO-R → JAK2 activation → STAT5 phosphorylation → erythroid fate (GATA1 + KLF1 upregulation). TPO (Thrombopoietin) signaling → c-MPL receptor → JAK2 activation → STAT3/STAT5 → megakaryocyte fate (GATA1 + FLI-1 upregulation). GATA1 is THE master transcription factor for both lineages.",
        "transcriptionFactors": ["GATA1 (GATA-binding factor 1 - MASTER regulator of both erythroid and megakaryocyte differentiation)", "GATA2 (GATA-binding factor 2 - maintains progenitor state)", "FOG-1 (Friend of GATA-1, ZFPM1 - GATA1 cofactor)", "KLF1 (Kruppel-like factor 1, EKLF - erythroid-specific)", "FLI-1 (Friend leukemia integration 1 - megakaryocyte-specific)"],
        "cytokines": {
            "erythroid": ["EPO (Erythropoietin - produced by kidney peritubular cells in response to hypoxia)"],
            "megakaryocyte": ["TPO (Thrombopoietin - produced by liver, binds c-MPL receptor)"],
            "both": ["IL-3 (Interleukin-3, multi-CSF)", "GM-CSF (Granulocyte-Macrophage Colony-Stimulating Factor)"]
        },
        "differentiatesFrom": "common-myeloid-progenitor",
        "differentiatesTo": ["erythroid-progenitors", "megakaryocyte"],
        "clinicalRelevance": [
            "EPO stimulates erythroid differentiation (targets MEP and all downstream erythroid stages)",
            "TPO stimulates megakaryocyte/platelet production (TPO agonists used for ITP)",
            "Target in anemia and thrombocytopenia therapies",
            "JAK2 V617F mutation causes constitutive signaling → polycythemia vera or essential thrombocythemia"
        ],
        "diseases": [
            "Diamond-Blackfan anemia (DBA) - ribosomal protein mutations (RPS19, others) cause defect in erythroid development from MEP → pure red cell aplasia",
            "Congenital amegakaryocytic thrombocytopenia (CAMT) - c-MPL (TPO receptor) mutation → isolated thrombocytopenia, may progress to aplastic anemia",
            "Essential thrombocythemia (ET) - JAK2 V617F (50%), CALR (25%), or MPL mutations → increased platelet production → thrombosis risk",
            "Polycythemia vera (PV) - JAK2 V617F mutation (>95%) → increased RBC production → high hematocrit, hyperviscosity",
            "Transient abnormal myelopoiesis (TAM) in Down syndrome - GATA1 mutations"
        ],
        "crossLinks": {
            "conditions": ["polycythemia-vera", "essential-thrombocythemia"],
            "medications": ["erythropoietin", "romiplostim", "eltrombopag"]
        },
        "step1Pearls": [
            "GATA1 is THE master regulator - loss causes failure of BOTH erythroid and megakaryocyte development",
            "EPO pushes MEP toward RBCs (via JAK2/STAT5), TPO pushes toward platelets (via JAK2/STAT3)",
            "JAK2 V617F mutation affects EPO and TPO signaling → PV (mainly RBCs ↑) or ET (mainly platelets ↑)",
            "Diamond-Blackfan anemia = pure red cell aplasia from ribosomal protein mutations (RPS19 most common)",
            "Recombinant EPO (epoetin alfa, darbepoetin) used for anemia of CKD (kidney no longer makes enough EPO)",
            "TPO receptor agonists: romiplostim (peptide, SC injection) and eltrombopag (oral) for ITP",
            "Classic vignette: Newborn with isolated anemia, triphalangeal thumbs → Diamond-Blackfan anemia",
            "Classic vignette: High hematocrit + low EPO + JAK2 V617F → polycythemia vera",
            "PV treatment: Phlebotomy (first-line) + hydroxyurea + JAK2 inhibitor (ruxolitinib)",
            "MEP gives rise to CFU-E (erythroid) and CFU-Meg (megakaryocyte) in colony assays"
        ],
        "pageType": "cell"
    },
    {
        "id": "granulocyte-monocyte-progenitor",
        "name": "Granulocyte-Monocyte Progenitor (GMP)",
        "lineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+ (stem cell marker)", "CD38+ (activated progenitor)", "IL-3Rα+ (Interleukin-3 receptor alpha, CD123)", "CD33+ (Siglec-3 - myeloid marker)"],
        "size": "10-14 μm",
        "morphology": "Not distinguishable morphologically from other progenitors, requires colony-forming assays (CFU-GM for granulocyte-monocyte colonies) or immunophenotyping",
        "location": "Bone marrow",
        "function": "Bipotent progenitor committed to granulocyte lineage (neutrophils, eosinophils, basophils, mast cells) or monocyte/macrophage lineage. Cannot produce erythrocytes or platelets.",
        "mechanisticDetail": "GMP fate determination: G-CSF (Granulocyte Colony-Stimulating Factor) signaling → G-CSF-R → JAK/STAT3 activation → C/EBPα upregulation → granulocyte fate (myeloblast). M-CSF (Macrophage Colony-Stimulating Factor) signaling → M-CSF-R (CD115, CSF1R) → PI3K/AKT pathway → IRF8 upregulation → monocyte fate (monoblast). High PU.1 + high C/EBPα = granulocytes. High PU.1 + high IRF8 = monocytes.",
        "transcriptionFactors": ["PU.1 (PU box-binding transcription factor - HIGH levels in GMP)", "C/EBPα (CCAAT/enhancer-binding protein alpha - CRITICAL for granulopoiesis)", "C/EBPε (CCAAT/enhancer-binding protein epsilon - terminal granulocyte maturation)", "IRF8 (Interferon Regulatory Factor 8 - monocyte/dendritic cell fate)", "GFI1 (Growth Factor Independent 1 - neutrophil development)"],
        "cytokines": {
            "granulocyte": ["G-CSF (Granulocyte Colony-Stimulating Factor - neutrophils)", "IL-5 (Interleukin-5 - eosinophils)", "IL-3 (Interleukin-3)"],
            "monocyte": ["M-CSF (Macrophage Colony-Stimulating Factor, CSF-1)", "IL-3 (Interleukin-3)"],
            "both": ["GM-CSF (Granulocyte-Macrophage Colony-Stimulating Factor)", "IL-3 (Interleukin-3, multi-CSF)"]
        },
        "differentiatesFrom": "common-myeloid-progenitor",
        "differentiatesTo": ["myeloblast", "monoblast"],
        "clinicalRelevance": [
            "G-CSF (filgrastim, pegfilgrastim) expands GMP → increases neutrophil production (used for chemotherapy-induced neutropenia)",
            "GM-CSF (sargramostim) expands GMP → increases both granulocytes and monocytes",
            "Target of dysregulation in AML (arrest at GMP/myeloblast stage) and CML (increased GMP proliferation)",
            "Chemotherapy depletes rapidly dividing GMP → neutropenia → infection risk"
        ],
        "diseases": [
            "Acute myeloid leukemia (AML) - mutations block differentiation at GMP or myeloblast stage. AML-M2 has C/EBPα mutations (favorable prognosis)",
            "Chronic myelomonocytic leukemia (CMML) - dysregulation of GMP with monocytosis",
            "Chronic myeloid leukemia (CML) - BCR-ABL causes increased GMP proliferation → leukocytosis with left shift",
            "Chemotherapy-induced neutropenia - GMP depletion → low neutrophil production",
            "Severe congenital neutropenia (Kostmann syndrome) - ELANE or HAX1 mutations block neutrophil maturation from GMP"
        ],
        "crossLinks": {
            "conditions": ["acute-myeloid-leukemia"],
            "medications": ["filgrastim", "sargramostim"]
        },
        "step1Pearls": [
            "C/EBPα is ABSOLUTELY CRITICAL for granulocyte development - biallelic mutations cause AML-M2",
            "PU.1 at high levels drives myeloid commitment. PU.1 + C/EBPα = granulocytes, PU.1 + IRF8 = monocytes",
            "G-CSF (filgrastim, Neupogen) specifically increases NEUTROPHIL production from GMP",
            "Pegfilgrastim = pegylated G-CSF with longer half-life (given once per chemo cycle)",
            "GM-CSF (sargramostim, Leukine) increases BOTH granulocytes AND monocytes",
            "M-CSF specifically drives monocyte/macrophage development",
            "Classic vignette: Post-chemo patient with ANC <500 and fever → give G-CSF + antibiotics",
            "Classic vignette: AML with Auer rods and t(8;21) → AML-M2, involves RUNX1-RUNX1T1 fusion",
            "C/EBPα mutations in AML-M2 have favorable prognosis (better than average AML)",
            "GMP gives rise to CFU-GM (mixed colonies) or CFU-G/CFU-M (pure colonies) in assays",
            "G-CSF also mobilizes HSCs (used for stem cell harvest along with plerixafor)"
        ],
        "pageType": "cell"
    }
];

export default cells;

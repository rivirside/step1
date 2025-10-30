// Hematopoietic Stem Cells and Progenitors

const cells = [
    {
        "id": "hematopoietic-stem-cell",
        "name": "Hematopoietic Stem Cell (HSC)",
        "lineage": "stem-cell",
        "system": "hematopoietic",
        "markers": ["CD34+", "CD38-", "CD90+", "CD133+", "Lin-"],
        "morphology": "Small, round cell with high nuclear-to-cytoplasmic ratio, scant cytoplasm",
        "location": "Bone marrow niches (endosteal and vascular), small numbers in peripheral blood",
        "function": "Self-renewal and differentiation into all blood cell types. Maintains lifelong hematopoiesis.",
        "transcriptionFactors": ["RUNX1", "SCL/TAL1", "GATA2", "c-MYB"],
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
        "markers": ["CD34+", "CD38+", "IL-3R+", "Lin-"],
        "morphology": "Similar to HSC but with slightly more cytoplasm, cannot be distinguished morphologically",
        "location": "Bone marrow",
        "function": "Committed to myeloid lineage. Differentiates into all non-lymphoid blood cells.",
        "transcriptionFactors": ["PU.1 (low levels)", "C/EBPα", "GATA1", "GATA2"],
        "cytokines": {
            "stimulate": ["IL-3 (multi-CSF)", "GM-CSF", "SCF"]
        },
        "differentiatesFrom": "hematopoietic-stem-cell",
        "differentiatesTo": ["megakaryocyte-erythroid-progenitor", "granulocyte-monocyte-progenitor"],
        "clinicalRelevance": [
            "Target of dysregulation in myeloid malignancies",
            "IL-3 and GM-CSF stimulate expansion of this population"
        ],
        "diseases": [
            "Chronic myeloid leukemia (CML) - increased proliferation, BCR-ABL mutation",
            "Acute myeloid leukemia (AML) - blocks further differentiation",
            "Myeloproliferative neoplasms (expansion of myeloid progenitors)"
        ],
        "crossLinks": {
            "conditions": ["chronic-myeloid-leukemia", "acute-myeloid-leukemia"]
        },
        "step1Pearls": [
            "CMP gives rise to ALL myeloid cells (RBCs, platelets, granulocytes, monocytes)",
            "PU.1 at LOW levels → myeloid. PU.1 at HIGH levels → lymphoid",
            "GATA1 promotes erythroid/megakaryocyte, C/EBPα promotes granulocyte/monocyte",
            "CML affects CMP → increased production of mature myeloid cells (especially neutrophils)",
            "Remember: CMP splits into MEP (platelets/RBCs) and GMP (granulocytes/monocytes)"
        ],
        "pageType": "cell"
    },
    {
        "id": "common-lymphoid-progenitor",
        "name": "Common Lymphoid Progenitor (CLP)",
        "lineage": "lymphoid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+", "CD38+", "CD10+", "Lin-"],
        "morphology": "Cannot be distinguished morphologically from CMP, requires immunophenotyping",
        "location": "Bone marrow, then migrate to thymus (for T cells) or stay in marrow (for B cells)",
        "function": "Committed to lymphoid lineage. Gives rise to T cells, B cells, and NK cells.",
        "transcriptionFactors": ["PU.1 (high levels)", "Ikaros", "E2A", "PAX5 (B cells)", "Notch1 (T cells)"],
        "cytokines": {
            "stimulate": ["IL-7 (critical for B and T cell development)", "FLT3 ligand"]
        },
        "differentiatesFrom": "hematopoietic-stem-cell",
        "differentiatesTo": ["pro-b-cell", "pro-t-cell", "pro-nk-cell"],
        "clinicalRelevance": [
            "Requires IL-7 for survival and proliferation",
            "Target of dysregulation in lymphoid malignancies",
            "T cell progenitors migrate from marrow to thymus for maturation"
        ],
        "diseases": [
            "Acute lymphoblastic leukemia (ALL) - B-ALL and T-ALL arise from CLPs",
            "Severe combined immunodeficiency (SCID) - IL-7R mutations block CLP development",
            "X-linked agammaglobulinemia (Bruton's) - BTK mutation blocks B cell development from CLP"
        ],
        "crossLinks": {
            "conditions": ["acute-lymphoblastic-leukemia", "severe-combined-immunodeficiency"]
        },
        "step1Pearls": [
            "PU.1 at HIGH levels → lymphoid commitment",
            "IL-7 is CRITICAL for CLP survival - IL-7R mutations cause SCID",
            "CLP expresses CD10 (CALLA - common ALL antigen) - used to diagnose ALL",
            "Pre-B ALL and Pre-T ALL arise from blocks at CLP stage",
            "PAX5 drives B cell commitment, Notch1 drives T cell commitment",
            "T cell progenitors must go to THYMUS for maturation (positive/negative selection)",
            "Mnemonic: 'CLP gives rise to Cells that Like to Patrol' (lymphocytes)"
        ],
        "pageType": "cell"
    },
    {
        "id": "megakaryocyte-erythroid-progenitor",
        "name": "Megakaryocyte-Erythroid Progenitor (MEP)",
        "lineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+", "CD38+", "IL-3R+", "CD41+ (low)"],
        "morphology": "Not distinguishable morphologically, identified by immunophenotyping and colony assays",
        "location": "Bone marrow",
        "function": "Bipotent progenitor committed to erythroid (RBC) or megakaryocyte (platelet) lineage",
        "transcriptionFactors": ["GATA1 (master regulator)", "GATA2", "FOG-1", "KLF1 (erythroid)", "FLI-1 (megakaryocyte)"],
        "cytokines": {
            "erythroid": ["Erythropoietin (EPO)"],
            "megakaryocyte": ["Thrombopoietin (TPO)"],
            "both": ["IL-3", "GM-CSF"]
        },
        "differentiatesFrom": "common-myeloid-progenitor",
        "differentiatesTo": ["erythroid-progenitors", "megakaryocyte"],
        "clinicalRelevance": [
            "EPO stimulates erythroid differentiation (targets this stage and beyond)",
            "TPO stimulates megakaryocyte/platelet production",
            "Target in anemia and thrombocytopenia therapies"
        ],
        "diseases": [
            "Diamond-Blackfan anemia (defect in erythroid development from MEP)",
            "Congenital amegakaryocytic thrombocytopenia (CAMT) - TPO receptor mutation",
            "Essential thrombocythemia (JAK2 V617F mutation increases platelet production)",
            "Polycythemia vera (JAK2 V617F mutation increases RBC production)"
        ],
        "crossLinks": {
            "conditions": ["polycythemia-vera", "essential-thrombocythemia"],
            "medications": ["erythropoietin", "romiplostim", "eltrombopag"]
        },
        "step1Pearls": [
            "GATA1 is THE master regulator - loss causes failure of both erythroid and megakaryocyte development",
            "EPO pushes MEP toward RBCs, TPO pushes toward platelets",
            "JAK2 V617F mutation affects this stage → polycythemia vera or essential thrombocythemia",
            "Diamond-Blackfan anemia = pure red cell aplasia from ribosomal protein mutations",
            "Recombinant EPO (epoetin alfa) used for anemia of chronic kidney disease",
            "TPO agonists (romiplostim, eltrombopag) used for immune thrombocytopenia (ITP)"
        ],
        "pageType": "cell"
    },
    {
        "id": "granulocyte-monocyte-progenitor",
        "name": "Granulocyte-Monocyte Progenitor (GMP)",
        "lineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "markers": ["CD34+", "CD38+", "IL-3R+", "CD33+"],
        "morphology": "Not distinguishable morphologically, requires colony-forming assays (CFU-GM)",
        "location": "Bone marrow",
        "function": "Bipotent progenitor committed to granulocyte (neutrophil, eosinophil, basophil) or monocyte lineage",
        "transcriptionFactors": ["PU.1 (high levels)", "C/EBPα", "C/EBPε", "IRF8 (monocyte)"],
        "cytokines": {
            "granulocyte": ["G-CSF", "IL-5 (eosinophils)", "IL-3"],
            "monocyte": ["M-CSF", "IL-3"],
            "both": ["GM-CSF", "IL-3"]
        },
        "differentiatesFrom": "common-myeloid-progenitor",
        "differentiatesTo": ["myeloblast", "monoblast"],
        "clinicalRelevance": [
            "G-CSF and GM-CSF expand this population to increase neutrophil production",
            "Target of dysregulation in AML and CML",
            "Chemotherapy reduces this population → neutropenia"
        ],
        "diseases": [
            "Acute myeloid leukemia (AML) - blocks differentiation at GMP or myeloblast stage",
            "Chronic myelomonocytic leukemia (CMML) - dysregulation of GMP",
            "Chemotherapy-induced neutropenia (GMP depletion)"
        ],
        "crossLinks": {
            "conditions": ["acute-myeloid-leukemia"],
            "medications": ["filgrastim", "sargramostim"]
        },
        "step1Pearls": [
            "C/EBPα is CRITICAL for granulocyte development - mutations cause AML-M2",
            "PU.1 at high levels drives myeloid/monocyte commitment",
            "G-CSF (filgrastim) specifically increases neutrophil production from GMP",
            "GM-CSF (sargramostim) increases BOTH granulocytes and monocytes",
            "M-CSF specifically drives monocyte/macrophage development",
            "Classic vignette: Chemotherapy patient with neutropenia → give G-CSF to stimulate GMP",
            "AML-M2 (acute myeloblastic leukemia with maturation) has C/EBPα mutations"
        ],
        "pageType": "cell"
    }
];

export default cells;

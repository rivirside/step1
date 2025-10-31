// T Cell Lineage - Development from Common Lymphoid Progenitor to Mature T Cells
// Thymic Development and Peripheral T Cell Subsets

const tCellLineage = {
    "id": "t-cell-lineage",
    "name": "T Cell Lineage",
    "fullName": "T Cell Development in Thymus and Peripheral Differentiation",
    "parentCell": "common-lymphoid-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "T cell progenitors migrate from bone marrow to thymus where they undergo positive and negative selection to ensure MHC restriction and self-tolerance. Mature naive T cells exit thymus, circulate through secondary lymphoid organs, and upon antigen encounter differentiate into effector T cells (CD4+ helper T cells or CD8+ cytotoxic T cells) or memory T cells. Total thymic development: ~3 weeks.",
        "keyTranscriptionFactors": [
            "Notch1 - CRITICAL for T cell fate commitment (vs B cell)",
            "GATA-3 - required for T cell development, promotes CD4+ lineage",
            "Runx3 - promotes CD8+ lineage",
            "T-bet - drives Th1 differentiation (IFN-γ production)",
            "GATA-3 - drives Th2 differentiation (IL-4, IL-5 production)",
            "RORγt - drives Th17 differentiation (IL-17 production)",
            "Foxp3 - master regulator of regulatory T cells (Tregs)"
        ],
        "keyCytokines": [
            "IL-7 - ESSENTIAL for T cell survival and proliferation in thymus (IL-7R mutations cause SCID)",
            "IL-2 - T cell growth factor, supports proliferation and survival",
            "IL-12 - promotes Th1 differentiation",
            "IL-4 - promotes Th2 differentiation",
            "TGF-β + IL-6 - promote Th17 differentiation",
            "TGF-β + IL-2 - promote Treg differentiation"
        ],
        "keyMechanism": "THYMIC SELECTION: (1) POSITIVE SELECTION (cortex): Thymocytes with TCRs that can bind self-MHC (with weak affinity) survive. Those that cannot bind MHC die by neglect (~90% die). (2) NEGATIVE SELECTION (medulla): Thymocytes with TCRs that bind self-MHC+self-peptide with HIGH affinity undergo apoptosis (prevents autoimmunity). AIRE (Autoimmune Regulator) in thymic epithelial cells presents tissue-specific antigens. Only 2-3% of thymocytes survive to exit thymus.",
        "timeline": "~3 weeks in thymus for development. Mature naive T cells circulate for weeks to years until antigen encounter. Effector T cells live days to weeks. Memory T cells can persist for decades."
    },

    "stages": [
        {
            "stageNumber": 1,
            "id": "pro-t-cell",
            "name": "Pro-T Cell (Early Thymic Progenitor, ETP)",
            "alternateName": "DN1 (Double Negative 1)",
            "markers": ["CD34+", "CD7+", "CD2+ (begins)", "CD4-", "CD8-", "CD3-", "CD117+ (c-Kit)"],
            "size": "10-15 μm",
            "morphology": "Large lymphoblast-like cell with high nuclear-to-cytoplasmic ratio. Large nucleus with fine chromatin and nucleoli. Basophilic cytoplasm. Indistinguishable from other lymphoblasts morphologically.",
            "location": "Thymus cortex (subcapsular zone). Originates in bone marrow, migrates to thymus via blood.",
            "function": "Earliest T cell progenitor in thymus. Committed to T cell lineage under influence of thymic environment. Notch1 signaling from thymic epithelial cells drives T cell fate (vs B cell fate).",
            "mechanisticDetail": "NOTCH1 SIGNALING is CRITICAL: Thymic epithelial cells express Notch ligands (DLL1, DLL4) → Notch1 on progenitor → cleavage → Notch intracellular domain (NICD) → nucleus → activates T cell genes, represses B cell genes. IL-7 signaling essential for survival and proliferation. Still retains some lineage plasticity at earliest DN1 stage. Begins TCR gene rearrangement preparation.",
            "TCRstatus": "No TCR rearrangement yet (germline configuration)",
            "selection": "Not yet subject to selection",
            "divides": true,
            "clinicalRelevance": [
                "DiGeorge Syndrome (22q11.2 deletion): Thymic aplasia/hypoplasia → absent/reduced T cells → T cell immunodeficiency",
                "SCID (Severe Combined Immunodeficiency): Multiple genetic causes block T cell development at various stages",
                "X-linked SCID: IL-2RG (common γ chain) mutation → defective IL-7 signaling → T cell development blocked",
                "T-ALL (T cell Acute Lymphoblastic Leukemia): Block at T cell progenitor stage, often with NOTCH1 mutations"
            ],
            "step1Pearls": [
                "Earliest T cell in thymus - progenitor migrates from bone marrow to thymus",
                "Notch1 signaling CRITICAL for T cell fate (vs B cell)",
                "IL-7 ESSENTIAL for T cell development (IL-7R mutations → SCID)",
                "CD4- CD8- (Double Negative, DN)",
                "DiGeorge syndrome: 22q11.2 deletion → thymic aplasia → no T cells",
                "X-linked SCID: Defective common γ chain → no IL-7 signaling → T- B+ NK- phenotype"
            ]
        },
        {
            "stageNumber": 2,
            "id": "pre-t-cell-dn",
            "name": "Pre-T Cell (Double Negative Stages)",
            "alternateName": "DN2, DN3, DN4",
            "markers": ["CD4-", "CD8-", "CD3+ (cytoplasmic, not surface)", "CD7+", "CD2+", "CD5+", "TdT+ (Terminal deoxynucleotidyl Transferase)"],
            "size": "10-15 μm",
            "morphology": "Lymphoblast appearance. High nuclear-to-cytoplasmic ratio. Active proliferation and DNA rearrangement occurring.",
            "location": "Thymus cortex",
            "function": "TCR gene rearrangement occurs. DN2 → DN3 transition involves TCR β chain rearrangement and β-selection checkpoint. DN3 → DN4 after successful β-selection.",
            "mechanisticDetail": "TCR GENE REARRANGEMENT: Uses RAG1/RAG2 (Recombination Activating Genes) to perform V(D)J recombination. DN2: TCR β chain D-J rearrangement begins. DN3: TCR β chain V-DJ rearrangement. β-SELECTION CHECKPOINT (DN3): Successfully rearranged TCR β chain pairs with pre-Tα (invariant) → forms pre-TCR → signals proliferation + CD4/CD8 expression. Cells without functional β chain die. TdT (Terminal deoxynucleotidyl Transferase) adds N-nucleotides → increases TCR diversity. DN4: Successful β-selection, stops proliferating, prepares for CD4/CD8 expression.",
            "TCRstatus": "TCR β chain rearrangement. Pre-TCR (β + pre-Tα) expressed at DN3 if successful.",
            "selection": "β-selection checkpoint at DN3 stage",
            "divides": true,
            "clinicalRelevance": [
                "RAG1/RAG2 deficiency: Cannot perform V(D)J recombination → SCID (T- B- NK+)",
                "Omenn syndrome: Partial RAG deficiency → oligoclonal T cell expansion → rash, eosinophilia, high IgE",
                "SCID variants: Multiple genes required for TCR rearrangement or signaling (Artemis, DNA-PKcs, JAK3)",
                "T-ALL often has block at DN stage with continued proliferation"
            ],
            "step1Pearls": [
                "DN = Double Negative (CD4- CD8-)",
                "TCR β chain rearrangement occurs here (V-D-J recombination)",
                "RAG1/RAG2 required for V(D)J recombination (RAG deficiency → SCID)",
                "TdT adds random nucleotides (N-nucleotides) → TCR diversity",
                "β-selection checkpoint: Pre-TCR (β + pre-Tα) must signal or cell dies",
                "Successful β-selection → proliferation + CD4/CD8 expression",
                "Omenn syndrome: Partial RAG deficiency → oligoclonal T cells + rash + eosinophilia"
            ]
        },
        {
            "stageNumber": 3,
            "id": "double-positive-thymocyte",
            "name": "Double Positive (DP) Thymocyte",
            "alternateName": "CD4+ CD8+ Thymocyte",
            "markers": ["CD4+", "CD8+", "CD3+ (low surface expression)", "TCR αβ+ (low)", "CD1a+"],
            "size": "8-10 μm (smaller, resting)",
            "morphology": "Small lymphocyte with scant cytoplasm and condensed chromatin. No longer proliferating - post-mitotic.",
            "location": "Thymus cortex (most abundant thymocyte population - ~80% of thymocytes)",
            "function": "TCR α chain rearrangement. Undergo POSITIVE SELECTION - test whether TCR can bind self-MHC. Most cells (~90%) fail positive selection and die by neglect.",
            "mechanisticDetail": "TCR α CHAIN REARRANGEMENT: V-J recombination (no D segment in α chain). Multiple attempts possible (α locus can rearrange many times). Pairs with β chain → complete TCR αβ on surface. POSITIVE SELECTION: DP thymocytes interact with cortical thymic epithelial cells (cTECs) expressing self-MHC + self-peptides. WEAK TCR-MHC interaction → survival signals (prevents apoptosis). NO interaction or VERY WEAK → death by neglect (~90%). TCR that binds MHC I → downregulate CD4, become CD8 SP. TCR that binds MHC II → downregulate CD8, become CD4 SP. This is MHC RESTRICTION.",
            "TCRstatus": "TCR αβ fully assembled and expressed on surface (low level)",
            "selection": "POSITIVE SELECTION - ensures MHC restriction. ~90% of DP cells die by neglect.",
            "divides": false,
            "clinicalRelevance": [
                "Bare Lymphocyte Syndrome Type II: MHC class II deficiency → no positive selection of CD4+ T cells → immunodeficiency",
                "TAP deficiency: Cannot load peptides on MHC I → no positive selection of CD8+ T cells",
                "Most thymocytes die at this stage (by neglect) - normal developmental process"
            ],
            "step1Pearls": [
                "DP = Double Positive (CD4+ CD8+) - most abundant thymocyte (~80%)",
                "TCR α chain rearrangement occurs here (V-J, no D segment)",
                "POSITIVE SELECTION: TCR must recognize self-MHC (weak affinity) to survive",
                "~90% of DP cells die by neglect (cannot bind MHC)",
                "Cortical thymic epithelial cells (cTECs) mediate positive selection",
                "MHC restriction established: TCR-MHC I → CD8 SP, TCR-MHC II → CD4 SP",
                "Bare Lymphocyte Syndrome II: No MHC II → no CD4+ T cells"
            ]
        },
        {
            "stageNumber": 4,
            "id": "single-positive-thymocyte",
            "name": "Single Positive (SP) Thymocyte",
            "alternateName": "CD4+ or CD8+ Thymocyte",
            "markers": ["CD4+ (or CD8+)", "CD3++", "TCR αβ++", "CD69+"],
            "size": "7-9 μm",
            "morphology": "Small lymphocyte with round nucleus and scant cytoplasm. Mature morphology.",
            "location": "Thymus medulla",
            "function": "Undergo NEGATIVE SELECTION - test whether TCR binds self-antigens with high affinity. High-affinity binding to self → apoptosis (prevents autoimmunity). Low/moderate affinity → survival, exit thymus as mature naive T cell.",
            "mechanisticDetail": "NEGATIVE SELECTION: SP thymocytes interact with medullary thymic epithelial cells (mTECs) and thymic dendritic cells. These cells express AIRE (Autoimmune Regulator) → promiscuous expression of tissue-specific antigens (insulin, thyroglobulin, myelin, etc.). HIGH AFFINITY TCR-self-peptide-MHC interaction → apoptosis (clonal deletion). Alternatively, some high-affinity self-reactive cells become regulatory T cells (Tregs, CD4+ Foxp3+). SP thymocytes also upregulate S1PR1 (sphingosine-1-phosphate receptor 1) to exit thymus. Only 2-3% of original thymocytes survive to exit.",
            "TCRstatus": "TCR αβ fully mature and functional",
            "selection": "NEGATIVE SELECTION - prevents autoimmunity by deleting self-reactive T cells",
            "divides": false,
            "clinicalRelevance": [
                "AIRE deficiency: Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy (APECED) - impaired negative selection → autoimmunity against endocrine organs (hypoparathyroidism, adrenal insufficiency, candidiasis)",
                "Failure of negative selection → autoimmunity (Type 1 diabetes, myasthenia gravis, etc.)",
                "FTY720 (fingolimod): S1PR1 antagonist → prevents T cell egress from thymus/lymph nodes → used in multiple sclerosis"
            ],
            "step1Pearls": [
                "SP = Single Positive (CD4+ OR CD8+, not both)",
                "NEGATIVE SELECTION: High-affinity TCR + self-antigen → apoptosis (prevents autoimmunity)",
                "Medullary thymic epithelial cells (mTECs) mediate negative selection",
                "AIRE protein: Allows mTECs to express tissue-specific antigens (insulin, thyroglobulin, etc.)",
                "AIRE deficiency → APECED: Autoimmune polyendocrinopathy, candidiasis, ectodermal dystrophy",
                "Some self-reactive T cells become Tregs (Foxp3+) instead of dying",
                "Only 2-3% of thymocytes survive to exit thymus (most die during selection)",
                "S1PR1 (sphingosine-1-phosphate receptor) required for thymic egress"
            ]
        },
        {
            "stageNumber": 5,
            "id": "naive-t-cell",
            "name": "Naive T Cell",
            "alternateName": "Recent Thymic Emigrant",
            "markers": ["CD3+", "TCR αβ+", "CD4+ (or CD8+)", "CD45RA+", "CD62L+ (L-selectin)", "CCR7+", "CD28+"],
            "size": "7-9 μm",
            "morphology": "Small lymphocyte with round nucleus, condensed chromatin, and scant cytoplasm. Resting state.",
            "location": "Circulate through blood and secondary lymphoid organs (lymph nodes, spleen, Peyer's patches). Home to T cell zones via high endothelial venules (HEVs).",
            "function": "Immunologically naive - never encountered cognate antigen. Circulates through secondary lymphoid organs scanning for antigen presented by dendritic cells. Upon antigen recognition with proper co-stimulation → activates, proliferates, differentiates into effector T cells.",
            "mechanisticDetail": "HOMING: CCR7 and CD62L allow naive T cells to enter lymph nodes via HEVs. Scan dendritic cells for MHC-peptide complexes matching their TCR. T CELL ACTIVATION requires THREE SIGNALS: (1) TCR recognition of MHC-peptide (Signal 1), (2) CD28 (on T cell) binding CD80/CD86 (on APC) - costimulation (Signal 2), (3) Cytokines from APC (IL-12, IL-4, TGF-β) - determines differentiation (Signal 3). Without Signal 2 → anergy (functional unresponsiveness). With all 3 signals → clonal expansion (1000-10000 fold) + differentiation into effector T cells.",
            "TCRstatus": "Mature, functional TCR αβ",
            "selection": "Passed both positive and negative selection",
            "divides": "Only after antigen recognition and activation",
            "clinicalRelevance": [
                "HIV targets CD4+ T cells via CD4 receptor and CCR5/CXCR4 coreceptors → progressive depletion → AIDS",
                "Live vaccines (MMR, varicella) can activate naive T cells → immunity",
                "Checkpoint inhibitors (anti-PD-1, anti-CTLA-4) prevent T cell exhaustion/anergy",
                "Naive T cell count decreases with age (thymic involution)"
            ],
            "step1Pearls": [
                "Naive T cells: CD45RA+, CD62L+, CCR7+ (home to lymph nodes)",
                "Never encountered antigen, circulate through secondary lymphoid organs",
                "Three signals for T cell activation: (1) MHC-TCR, (2) CD80/86-CD28, (3) Cytokines",
                "Without costimulation (Signal 2) → T cell anergy",
                "CD62L and CCR7 allow entry into lymph nodes via HEVs",
                "HIV infects CD4+ T cells (binds CD4 + CCR5 or CXCR4)",
                "After activation → lose CD62L, gain CD69 (early activation marker)"
            ]
        }
    ],

    "effectorTcells": [
        {
            "id": "cd4-th1",
            "name": "CD4+ Th1 Cell",
            "alternateName": "T Helper 1 Cell",
            "markers": ["CD3+", "CD4+", "CXCR3+", "CCR5+", "T-bet+", "CD45RO+"],
            "function": "Cell-mediated immunity against intracellular pathogens (viruses, intracellular bacteria like Mycobacterium, Listeria). Activates macrophages to enhance intracellular killing. Supports cytotoxic T cell responses.",
            "cytokinesProduced": ["IFN-γ (hallmark cytokine, activates macrophages)", "IL-2 (T cell growth factor)", "TNF-α"],
            "inducedBy": "IL-12 (from dendritic cells/macrophages) + IFN-γ. T-bet transcription factor drives differentiation.",
            "mechanisticDetail": "IFN-γ production is the DEFINING feature. IFN-γ → activates macrophages → upregulate MHC II, increase lysosome function, induce iNOS (NO production) → enhanced intracellular pathogen killing. Also activates NK cells and promotes IgG class switching in B cells (for opsonization). POSITIVE FEEDBACK: IFN-γ induces more T-bet → more IFN-γ. CROSS-INHIBITION: IFN-γ inhibits Th2, IL-4 inhibits Th1.",
            "diseases": {
                "deficiency": "Susceptibility to intracellular infections (Mycobacterium, Salmonella, Listeria)",
                "excess": "Type IV hypersensitivity (contact dermatitis, TB granulomas), autoimmune diseases (Type 1 diabetes, MS, Crohn's disease)"
            },
            "step1Pearls": [
                "Th1: IFN-γ production (hallmark), activates macrophages, cell-mediated immunity",
                "IL-12 from APCs drives Th1 differentiation (IL-12 → STAT4 → T-bet → IFN-γ)",
                "Defends against intracellular pathogens: Mycobacterium, Listeria, viruses",
                "IFN-γ → activates macrophages → ↑ MHC II, ↑ iNOS (NO), ↑ lysosomal killing",
                "Type IV hypersensitivity (delayed-type): Th1-mediated, tuberculin test, contact dermatitis",
                "Th1 diseases: Type 1 diabetes, MS, Crohn's, rheumatoid arthritis",
                "IFN-γ inhibits Th2 (reciprocal inhibition)"
            ]
        },
        {
            "id": "cd4-th2",
            "name": "CD4+ Th2 Cell",
            "alternateName": "T Helper 2 Cell",
            "markers": ["CD3+", "CD4+", "CCR4+", "CRTH2+", "GATA-3+", "CD45RO+"],
            "function": "Humoral immunity and defense against extracellular parasites (helminths). Activates eosinophils, mast cells, and basophils. Promotes B cell IgE class switching. Involved in allergic responses.",
            "cytokinesProduced": ["IL-4 (IgE class switching, Th2 differentiation)", "IL-5 (eosinophil activation)", "IL-10 (anti-inflammatory)", "IL-13 (IgE switching, goblet cell hyperplasia)"],
            "inducedBy": "IL-4 (autocrine) from early T cell activation. GATA-3 transcription factor drives differentiation.",
            "mechanisticDetail": "IL-4 is the DEFINING cytokine. IL-4 → B cells undergo IgE class switching → IgE binds mast cells/basophils via FcεRI → upon re-exposure to allergen → degranulation (Type I hypersensitivity). IL-5 → activates eosinophils → defense against helminths. IL-13 → goblet cell hyperplasia (mucus production), airway remodeling in asthma. POSITIVE FEEDBACK: IL-4 induces more GATA-3 → more IL-4. CROSS-INHIBITION: IL-4 inhibits Th1.",
            "diseases": {
                "deficiency": "Susceptibility to helminth infections",
                "excess": "Type I hypersensitivity (allergies, asthma, anaphylaxis, atopic dermatitis), hyper-IgE syndrome"
            },
            "step1Pearls": [
                "Th2: IL-4, IL-5, IL-13 production, defends against helminths (parasites)",
                "IL-4 drives Th2 differentiation (autocrine) and IgE class switching",
                "IL-5 activates eosinophils (anti-parasitic, also in asthma)",
                "IL-13 → goblet cell hyperplasia → mucus production (asthma)",
                "Type I hypersensitivity: Th2 → IL-4 → IgE → mast cell degranulation",
                "Th2 diseases: Asthma, allergic rhinitis, atopic dermatitis, helminth infections",
                "IL-4 inhibits Th1 (reciprocal inhibition)",
                "Hyper-IgE syndrome (Job syndrome): Excessive Th2 response → high IgE, eczema, recurrent Staph abscesses"
            ]
        },
        {
            "id": "cd4-th17",
            "name": "CD4+ Th17 Cell",
            "alternateName": "T Helper 17 Cell",
            "markers": ["CD3+", "CD4+", "CCR6+", "RORγt+", "CD45RO+"],
            "function": "Defense against extracellular bacteria and fungi at mucosal surfaces. Recruits neutrophils. Maintains epithelial barrier integrity. Involved in autoimmune diseases when dysregulated.",
            "cytokinesProduced": ["IL-17A and IL-17F (neutrophil recruitment)", "IL-21 (autocrine)", "IL-22 (epithelial antimicrobial peptides)", "GM-CSF"],
            "inducedBy": "TGF-β + IL-6 (or IL-21 or IL-23). RORγt transcription factor drives differentiation.",
            "mechanisticDetail": "IL-17 is the HALLMARK cytokine. IL-17 → epithelial cells and fibroblasts produce chemokines (CXCL8/IL-8, G-CSF) → neutrophil recruitment → defense against extracellular bacteria/fungi (Candida, Klebsiella, Citrobacter). IL-22 → epithelial cells produce antimicrobial peptides (β-defensins). Important at mucosal barriers (gut, lung, skin). IL-23 sustains Th17 cells. DYSREGULATION → autoimmunity (psoriasis, IBD, MS, RA).",
            "diseases": {
                "deficiency": "Chronic Mucocutaneous Candidiasis (CMC) - IL-17 pathway defects → recurrent Candida infections of mucosa and skin. Hyper-IgE syndrome (STAT3 mutations) → impaired Th17 → Candida/Staph infections.",
                "excess": "Psoriasis, inflammatory bowel disease (Crohn's), rheumatoid arthritis, multiple sclerosis, ankylosing spondylitis"
            },
            "step1Pearls": [
                "Th17: IL-17 production → neutrophil recruitment",
                "TGF-β + IL-6 (or IL-21/IL-23) drive Th17 differentiation",
                "Defends against extracellular bacteria and fungi (especially Candida, Klebsiella)",
                "IL-17 → epithelial cells → IL-8 and G-CSF → neutrophil chemotaxis",
                "IL-17 pathway defects → Chronic Mucocutaneous Candidiasis",
                "Th17 diseases: Psoriasis, IBD (Crohn's), rheumatoid arthritis, MS, ankylosing spondylitis",
                "Anti-IL-17 therapies (secukinumab, ixekizumab) for psoriasis, ankylosing spondylitis",
                "Hyper-IgE syndrome (STAT3 mutation): ↓ Th17 → Candida/Staph infections"
            ]
        },
        {
            "id": "cd4-treg",
            "name": "CD4+ Regulatory T Cell (Treg)",
            "alternateName": "Suppressor T Cell",
            "markers": ["CD3+", "CD4+", "CD25+++ (IL-2Rα, high)", "Foxp3+", "CTLA-4+", "CD45RO+"],
            "function": "Suppress immune responses to maintain self-tolerance and prevent autoimmunity. Limit inflammation and tissue damage. Essential for immune homeostasis.",
            "cytokinesProduced": ["IL-10 (anti-inflammatory)", "TGF-β (immunosuppressive)", "IL-35"],
            "inducedBy": "TGF-β + IL-2 drive peripheral Treg differentiation. Foxp3 is the MASTER REGULATOR (thymic Tregs develop during negative selection).",
            "mechanisticDetail": "TWO TYPES: (1) Natural Tregs (nTregs): Develop in thymus during negative selection (high-affinity self-reactive cells that escape deletion). (2) Induced Tregs (iTregs): Develop in periphery from naive CD4+ T cells exposed to TGF-β and IL-2. MECHANISMS OF SUPPRESSION: (a) CTLA-4 (CD152) binds CD80/CD86 on APCs → blocks costimulation of other T cells. (b) IL-10 and TGF-β suppress T cell activation and APC function. (c) IL-2 consumption → deprives effector T cells of growth factor. (d) Granzyme/perforin → direct killing of effector T cells. FOXP3 is ESSENTIAL - mutations cause IPEX syndrome.",
            "diseases": {
                "deficiency": "IPEX syndrome (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked): Foxp3 mutation → no Tregs → severe autoimmunity (diabetes, enteropathy, eczema, thyroiditis) in infancy.",
                "excess": "Cancer progression (Tregs suppress anti-tumor immunity), chronic infections (suppress pathogen clearance)"
            },
            "step1Pearls": [
                "Tregs: CD4+ CD25high Foxp3+ - suppress immune responses",
                "Foxp3 is MASTER REGULATOR of Tregs (Foxp3 mutation → IPEX syndrome)",
                "IPEX syndrome: No functional Tregs → severe autoimmunity in infancy",
                "CTLA-4 on Tregs binds CD80/86 → blocks T cell costimulation",
                "IL-10 and TGF-β from Tregs suppress inflammation",
                "Checkpoint inhibitors (anti-CTLA-4, anti-PD-1) can reduce Treg suppression → anti-tumor immunity",
                "Tregs develop in thymus (natural Tregs) or periphery (induced Tregs)",
                "Prevent graft-versus-host disease (GVHD) in transplantation"
            ]
        },
        {
            "id": "cd8-ctl",
            "name": "CD8+ Cytotoxic T Lymphocyte (CTL)",
            "alternateName": "Cytotoxic T Cell, Killer T Cell",
            "markers": ["CD3+", "CD8+", "Granzyme+", "Perforin+", "CD45RO+"],
            "function": "Kill virus-infected cells, tumor cells, and allogeneic cells. Recognize antigens presented on MHC class I. Critical for antiviral immunity and tumor surveillance.",
            "cytokinesProduced": ["IFN-γ", "TNF-α", "Lymphotoxin"],
            "inducedBy": "IL-12 and type I IFN from dendritic cells. CD8+ T cells require CD4+ T cell help (via IL-2 or CD40L-CD40 interaction).",
            "mechanisticDetail": "CTL recognizes antigen on MHC CLASS I (all nucleated cells express MHC I). Upon recognition: (1) PERFORIN/GRANZYME pathway: CTL releases perforin (pore-forming protein) and granzymes (serine proteases) → perforin creates pores → granzymes enter target cell → activate caspases → apoptosis. (2) FAS-FASL pathway: FasL on CTL binds Fas (CD95) on target cell → caspase-8 activation → apoptosis. Target cell undergoes apoptosis WITHOUT inflammation (clean death). SERIAL KILLING: One CTL can kill multiple target cells sequentially.",
            "diseases": {
                "deficiency": "Familial Hemophagocytic Lymphohistiocytosis (FHL): Perforin or other cytotoxic pathway defects → impaired CTL/NK function → uncontrolled immune activation. Recurrent viral infections (EBV, CMV, HSV).",
                "excess": "Type 1 diabetes (β-cell destruction), graft rejection, graft-versus-host disease"
            },
            "step1Pearls": [
                "CD8+ CTL: Recognize antigens on MHC class I (all nucleated cells)",
                "Kill via perforin/granzyme OR Fas-FasL pathways → target cell apoptosis",
                "Perforin makes pores → granzymes enter → activate caspases → apoptosis",
                "FasL on CTL binds Fas (CD95) on target → caspase-8 → apoptosis",
                "CTLs kill virus-infected cells, tumor cells, allogeneic cells",
                "Require CD4+ T cell help (IL-2 or CD40L-CD40 licensing of DCs)",
                "FHL (Familial HLH): Perforin defect → impaired CTL killing → HLH syndrome",
                "Graft rejection: Host CTLs recognize donor MHC I as foreign → kill graft cells",
                "GVHD: Donor CTLs recognize host MHC I as foreign → attack host tissues"
            ]
        }
    ],

    "memoryTcells": [
        {
            "id": "central-memory-t-cell",
            "name": "Central Memory T Cell (Tcm)",
            "markers": ["CD3+", "CD4+ or CD8+", "CD45RO+", "CD62L+", "CCR7+", "CD127+"],
            "location": "Secondary lymphoid organs (lymph nodes, spleen)",
            "function": "Long-lived memory T cells that reside in lymphoid organs. Upon antigen re-exposure → rapidly proliferate and differentiate into effector T cells. Provide long-term immunity.",
            "lifespan": "Years to decades",
            "step1Pearls": [
                "Tcm: CD45RO+ CD62L+ CCR7+ - home to lymph nodes",
                "Reside in secondary lymphoid organs, rapidly proliferate upon re-challenge",
                "Provide long-term protective immunity (vaccines induce memory T cells)"
            ]
        },
        {
            "id": "effector-memory-t-cell",
            "name": "Effector Memory T Cell (Tem)",
            "markers": ["CD3+", "CD4+ or CD8+", "CD45RO+", "CD62L-", "CCR7-", "CD127+"],
            "location": "Peripheral tissues (skin, gut, lungs), circulate in blood",
            "function": "Patrol peripheral tissues for pathogens. Upon antigen re-exposure → immediate effector function (cytokine production, cytotoxicity) without need for proliferation. Faster response than Tcm but shorter-lived.",
            "lifespan": "Weeks to months",
            "step1Pearls": [
                "Tem: CD45RO+ CD62L- CCR7- - patrol peripheral tissues",
                "Immediate effector function upon antigen re-encounter (no proliferation needed)",
                "Faster response than central memory but shorter-lived"
            ]
        }
    ],

    "clinicalCorrelations": [
        {
            "disease": "DiGeorge Syndrome (22q11.2 deletion)",
            "mechanism": "Deletion includes TBX1 gene → thymic and parathyroid aplasia/hypoplasia",
            "affectedStages": "No thymus → absent/severely reduced T cells at all stages",
            "presentation": "CATCH-22: Cardiac defects, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia (hypoparathyroidism), 22q11.2 deletion. Recurrent infections (T cell immunodeficiency), tetany (hypocalcemia).",
            "labs": "Lymphopenia (low T cells), normal/elevated B cells, hypocalcemia",
            "treatment": "Thymic transplant (some cases), calcium/vitamin D supplementation, prophylactic antibiotics, avoid live vaccines"
        },
        {
            "disease": "Severe Combined Immunodeficiency (SCID)",
            "mechanism": "Multiple genetic causes: X-linked (IL-2RG defect, most common), ADA deficiency, RAG1/RAG2 deficiency, JAK3 deficiency, Artemis deficiency",
            "affectedStages": "Blocks T cell development at various stages depending on defect",
            "presentation": "Severe infections in infancy (bacterial, viral, fungal, opportunistic). Failure to thrive. Chronic diarrhea. Absent thymic shadow on CXR. 'Bubble boy disease'.",
            "labs": "X-linked SCID: T- B+ NK-. ADA deficiency: T- B- NK-. RAG deficiency: T- B- NK+.",
            "treatment": "Hematopoietic stem cell transplant (curative), gene therapy (ADA deficiency), enzyme replacement (ADA), prophylactic antibiotics, IVIG, avoid live vaccines"
        },
        {
            "disease": "HIV/AIDS",
            "mechanism": "HIV infects CD4+ T cells via CD4 receptor and CCR5/CXCR4 coreceptors → progressive CD4+ T cell depletion",
            "affectedStages": "Primarily depletes mature CD4+ T cells (especially Th1 and Th17), thymic dysfunction",
            "presentation": "Acute HIV: Flu-like illness. Chronic: Progressive immunodeficiency. AIDS: CD4 <200 or opportunistic infections (PCP, CMV, Candida, Toxoplasma, Cryptococcus, MAC).",
            "labs": "↓ CD4+ T cell count (AIDS: <200 cells/μL), ↑ viral load, positive HIV antibody/antigen test",
            "treatment": "Antiretroviral therapy (ART): Combination of NRTI, NNRTI, PI, INSTI. Prophylaxis: TMP-SMX (PCP), azithromycin (MAC)"
        },
        {
            "disease": "IPEX Syndrome",
            "mechanism": "Foxp3 mutation (X-linked) → absent/dysfunctional Tregs → severe autoimmunity",
            "affectedStages": "Tregs cannot develop or function",
            "presentation": "Early-onset (infancy): Type 1 diabetes, severe enteropathy (watery diarrhea), eczema, autoimmune thyroiditis, cytopenias. Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked.",
            "labs": "Elevated IgE, eosinophilia, autoantibodies, absent Foxp3+ Tregs",
            "treatment": "Immunosuppression (steroids, tacrolimus), hematopoietic stem cell transplant (curative)"
        }
    ],

    "step1HighYieldConcepts": [
        "T cell development: Bone marrow → Thymus (positive/negative selection) → Peripheral naive T cells",
        "Positive selection (cortex): TCR must recognize self-MHC (weak affinity) → survival. ~90% die by neglect.",
        "Negative selection (medulla): TCR binds self-MHC+self-peptide with HIGH affinity → apoptosis. AIRE presents tissue antigens.",
        "Only 2-3% of thymocytes survive both selections",
        "MHC restriction: CD4+ T cells recognize MHC II, CD8+ T cells recognize MHC I",
        "Three signals for T cell activation: (1) MHC-TCR, (2) CD80/86-CD28 (costimulation), (3) Cytokines",
        "Without costimulation → T cell anergy",
        "Th1: IFN-γ, IL-12 induced, intracellular pathogens (Mycobacterium, viruses), activates macrophages",
        "Th2: IL-4/IL-5/IL-13, IL-4 induced, helminths, allergies, IgE class switching, eosinophils",
        "Th17: IL-17, TGF-β+IL-6 induced, extracellular bacteria/fungi (Candida), neutrophil recruitment",
        "Treg: CD25+ Foxp3+, suppress autoimmunity, IPEX if deficient",
        "CTL (CD8+): Kill via perforin/granzyme or Fas-FasL, recognize MHC I, antiviral immunity",
        "DiGeorge: 22q11.2 deletion → thymic aplasia → T cell deficiency + hypocalcemia",
        "SCID: Multiple causes, T cell deficiency, recurrent infections in infancy",
        "X-linked SCID: IL-2RG defect → T- B+ NK-",
        "HIV: Infects CD4+ T cells → CD4 <200 = AIDS → opportunistic infections",
        "AIRE deficiency → APECED: Autoimmunity (hypoparathyroidism, adrenal insufficiency, candidiasis)"
    ]
};

export default tCellLineage;

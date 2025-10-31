// B Cell Lineage - Development from Common Lymphoid Progenitor to Plasma Cells
// Bone Marrow and Peripheral B Cell Development

const bCellLineage = {
    "id": "b-cell-lineage",
    "name": "B Cell Lineage",
    "fullName": "B Cell Development and Antibody Production",
    "parentCell": "common-lymphoid-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "B cells develop in bone marrow through immunoglobulin gene rearrangement, undergo negative selection to remove self-reactive clones, then migrate to secondary lymphoid organs. Upon antigen encounter, mature B cells undergo clonal expansion, somatic hypermutation, and class switching in germinal centers to produce high-affinity antibodies. Differentiate into plasma cells (antibody factories) or memory B cells (long-term immunity).",
        "keyTranscriptionFactors": [
            "PAX5 - master regulator of B cell identity (maintains B cell program)",
            "EBF1 (Early B cell Factor 1) - initiates B cell commitment",
            "E2A (TCF3) - required for immunoglobulin gene rearrangement",
            "IRF4 - required for plasma cell differentiation",
            "Blimp-1 (PRDM1) - master regulator of plasma cells, represses PAX5"
        ],
        "keyCytokines": [
            "IL-7 - essential for early B cell development (pro-B to pre-B stage)",
            "BAFF (B cell Activating Factor) - B cell survival in periphery",
            "IL-4 - promotes IgE class switching, Th2 response",
            "IL-5 - promotes IgA class switching (mucosal immunity)",
            "IL-21 - supports germinal center reactions and plasma cell differentiation",
            "TGF-β - promotes IgA class switching"
        ],
        "keyMechanism": "IMMUNOGLOBULIN GENE REARRANGEMENT: Uses RAG1/RAG2 to perform V(D)J recombination. Heavy chain rearranges first (pro-B stage: D-J, then V-DJ), then light chain (pre-B stage: V-J). Successful rearrangement at each checkpoint required for survival. ANTIGEN ENCOUNTER: Mature B cells recognize antigen via BCR → with T cell help → migrate to germinal centers → somatic hypermutation (affinity maturation) + class switching → differentiate to plasma cells or memory B cells.",
        "timeline": "~1-2 weeks for bone marrow development. After antigen encounter: ~7-14 days for germinal center reaction. Plasma cells live days to weeks (short-lived) or lifelong (long-lived in bone marrow). Memory B cells persist for years to decades."
    },

    "stages": [
        {
            "stageNumber": 1,
            "id": "pro-b-cell",
            "name": "Pro-B Cell (Early Pre-B Cell)",
            "alternateName": "Progenitor B Cell, Early B Cell",
            "markers": ["CD34+", "CD19+", "CD10+ (CALLA)", "CD38+", "TdT+", "HLA-DR+", "cμ- (no cytoplasmic μ)"],
            "size": "10-15 μm",
            "morphology": "Large lymphoblast with high nuclear-to-cytoplasmic ratio. Large nucleus with fine chromatin and nucleoli. Basophilic cytoplasm. Cannot be distinguished from other lymphoblasts morphologically.",
            "location": "Bone marrow",
            "function": "Earliest committed B cell precursor. Begins immunoglobulin heavy chain gene rearrangement. Dependent on IL-7 for survival and proliferation.",
            "mechanisticDetail": "HEAVY CHAIN REARRANGEMENT: First, D-J recombination on heavy chain locus. Then V-D-J recombination. Uses RAG1/RAG2 recombinases + TdT (adds N-nucleotides for diversity). PAX5 and EBF1 activate B cell-specific genes while repressing alternative lineages. IL-7 signaling (via IL-7Rα/common γ chain) is CRITICAL for survival - defects cause SCID. Checkpoint: Must successfully rearrange heavy chain or die by apoptosis.",
            "BCRstatus": "No BCR. Heavy chain rearrangement in progress.",
            "divides": true,
            "clinicalRelevance": [
                "Pre-B ALL (Acute Lymphoblastic Leukemia): Most common childhood cancer. Block at pro-B or pre-B stage. CD19+, CD10+, TdT+.",
                "X-linked Agammaglobulinemia (Bruton's, XLA): BTK (Bruton Tyrosine Kinase) mutation → block at pro-B to pre-B transition → no mature B cells → recurrent bacterial infections after 6 months (maternal IgG gone).",
                "IL-7R deficiency: SCID phenotype (T- B+ NK+) - mainly affects T cells, but B cells can be dysfunctional."
            ],
            "step1Pearls": [
                "Earliest committed B cell - pro-B cell",
                "Heavy chain D-J and V-D-J rearrangement occurs here",
                "CD19+ and CD10+ (CALLA) - markers of B cell precursors",
                "TdT+ (Terminal deoxynucleotidyl Transferase) adds N-nucleotides → BCR diversity",
                "IL-7 essential for pro-B cell survival",
                "Bruton's agammaglobulinemia (XLA): BTK mutation → block at pro-B/pre-B → no B cells",
                "Pre-B ALL: Most common childhood leukemia, CD19+ CD10+ TdT+"
            ]
        },
        {
            "stageNumber": 2,
            "id": "pre-b-cell",
            "name": "Pre-B Cell (Large and Small Pre-B)",
            "alternateName": "Late Pre-B Cell",
            "markers": ["CD19+", "CD10+", "cμ+ (cytoplasmic μ heavy chain)", "Pre-BCR+", "CD34-", "TdT-"],
            "size": "Large Pre-B: 12-18 μm. Small Pre-B: 9-12 μm.",
            "morphology": "Large Pre-B: Larger, proliferating. Small Pre-B: Smaller, resting, condensed chromatin. Both have basophilic cytoplasm. Cytoplasmic μ heavy chain detectable (not on surface).",
            "location": "Bone marrow",
            "function": "Successfully rearranged heavy chain pairs with surrogate light chain (VpreB + λ5) to form pre-BCR. Pre-BCR signals proliferation and survival. Then light chain rearrangement begins.",
            "mechanisticDetail": "PRE-BCR CHECKPOINT: μ heavy chain + surrogate light chain (VpreB + λ5) + Igα/Igβ → pre-BCR. Pre-BCR signals via BTK, SYK, BLNK → NF-κB activation → proliferation + allelic exclusion (stops second heavy chain allele) + light chain rearrangement. LARGE PRE-B: Proliferating (4-6 divisions). SMALL PRE-B: Stops dividing, light chain rearrangement begins (κ first, then λ if κ fails). TdT expression turns OFF (no N-nucleotides in light chain). ",
            "BCRstatus": "Pre-BCR (μ heavy chain + surrogate light chain). No true BCR yet.",
            "divides": "Large Pre-B divides. Small Pre-B does not.",
            "clinicalRelevance": [
                "X-linked Agammaglobulinemia (XLA): BTK mutation blocks pre-BCR signaling → cannot progress past large pre-B stage → no mature B cells",
                "Pre-B ALL: Can have cytoplasmic μ heavy chain (cμ+) but no surface immunoglobulin",
                "μ heavy chain disease: Rare proliferation of cells making truncated μ chains"
            ],
            "step1Pearls": [
                "Pre-B cell has cytoplasmic μ heavy chain (cμ+) but NOT surface Ig",
                "Pre-BCR = μ heavy chain + surrogate light chain (VpreB + λ5) + Igα/Igβ",
                "Pre-BCR signals via BTK → proliferation and survival",
                "Bruton's (XLA): BTK defect → pre-BCR cannot signal → B cell development stops here",
                "Light chain rearrangement begins at small pre-B stage",
                "κ chain rearranges first; if unsuccessful, λ chain rearranges",
                "TdT turns OFF before light chain rearrangement (no N-nucleotides in light chain)"
            ]
        },
        {
            "stageNumber": 3,
            "id": "immature-b-cell",
            "name": "Immature B Cell",
            "markers": ["CD19+", "CD20+", "CD10+", "IgM+ (surface)", "IgD-", "CD21-", "CD23-"],
            "size": "8-10 μm",
            "morphology": "Small lymphocyte with scant cytoplasm and condensed chromatin. Surface IgM (BCR) present.",
            "location": "Bone marrow, then migrate to spleen",
            "function": "First B cell with complete functional BCR (IgM on surface). Undergoes negative selection in bone marrow to remove strongly self-reactive clones (central tolerance). Migrates to spleen for further maturation.",
            "mechanisticDetail": "COMPLETE BCR: μ heavy chain + κ or λ light chain + Igα/Igβ → functional IgM BCR on surface. NEGATIVE SELECTION (Bone Marrow): If BCR strongly binds self-antigen → three fates: (1) CLONAL DELETION: Apoptosis (most common). (2) RECEPTOR EDITING: Reactivate RAG → rearrange new light chain to change specificity (second chance). (3) ANERGY: Functional unresponsiveness if weakly self-reactive. Cells that pass negative selection migrate to spleen as 'transitional B cells'.",
            "BCRstatus": "IgM+ (surface) only. Complete functional BCR.",
            "divides": false,
            "clinicalRelevance": [
                "Failure of negative selection → autoimmunity (SLE, rheumatoid arthritis)",
                "Receptor editing defects → increased autoreactive B cells",
                "Immature B cell leukemias/lymphomas express IgM+ only (no IgD)"
            ],
            "step1Pearls": [
                "First B cell with surface IgM (complete BCR)",
                "IgM+ IgD- (only IgM, no IgD yet)",
                "Negative selection in bone marrow: Self-reactive B cells → deletion, receptor editing, or anergy",
                "Receptor editing: Reactivate RAG → new light chain rearrangement → change BCR specificity",
                "Anergic B cells: Weakly self-reactive, functionally unresponsive",
                "Migrate to spleen for final maturation"
            ]
        },
        {
            "stageNumber": 4,
            "id": "mature-naive-b-cell",
            "name": "Mature Naive B Cell",
            "alternateName": "Follicular B Cell",
            "markers": ["CD19+", "CD20+", "CD21+ (CR2, complement receptor)", "CD23+", "IgM+", "IgD+", "CD27-"],
            "size": "7-10 μm",
            "morphology": "Small lymphocyte with round nucleus, clumped chromatin, and scant basophilic cytoplasm. Resting state.",
            "location": "Secondary lymphoid organs (spleen, lymph nodes, Peyer's patches). Circulate through blood and lymph. Home to B cell follicles.",
            "function": "Immunologically naive - never encountered cognate antigen. Circulates and resides in B cell follicles scanning for antigen. Upon antigen recognition with T cell help → activated, proliferates, enters germinal center reaction.",
            "mechanisticDetail": "CO-EXPRESS IgM and IgD (same specificity, alternative splicing). BCR recognizes native antigen (not MHC-restricted). B CELL ACTIVATION requires TWO SIGNALS: (1) BCR crosslinking by antigen. (2) T CELL HELP: B cell internalizes antigen → processes → presents on MHC II → CD4+ T cell recognizes → CD40L-CD40 interaction + cytokines (IL-4, IL-21). Without T cell help → weak response or anergy. BAFF (from follicular dendritic cells) provides survival signals. CR2 (CD21) + CD19 + CD81 form 'co-receptor complex' - amplifies BCR signaling when complement-coated antigen binds.",
            "BCRstatus": "IgM+ IgD+ (co-expressed on surface)",
            "divides": "Only after antigen activation",
            "clinicalRelevance": [
                "Common Variable Immunodeficiency (CVID): Impaired B cell differentiation to plasma cells → low immunoglobulins (IgG, IgA, IgM) → recurrent bacterial infections",
                "Selective IgA Deficiency: Most common primary immunodeficiency. IgA <7 mg/dL. Often asymptomatic or recurrent sinopulmonary/GI infections.",
                "BAFF overexpression → B cell survival → autoimmunity (SLE, Sjögren's)",
                "Rituximab (anti-CD20) depletes B cells → treats lymphomas, autoimmune diseases"
            ],
            "step1Pearls": [
                "Mature naive B cell: IgM+ IgD+ (co-expressed)",
                "Never encountered antigen, resides in B cell follicles",
                "BCR activation requires: (1) Antigen binding, (2) T cell help (CD40L-CD40 + cytokines)",
                "CD40L deficiency (Hyper-IgM syndrome): No T cell help → no class switching → only IgM",
                "CD21 (CR2) is part of B cell co-receptor → amplifies BCR signaling",
                "CVID: Common Variable Immunodeficiency → low IgG, IgA, IgM → recurrent infections",
                "Selective IgA deficiency: Most common primary immunodeficiency, often asymptomatic"
            ]
        },
        {
            "stageNumber": 5,
            "id": "germinal-center-b-cell",
            "name": "Germinal Center B Cell",
            "alternateName": "Centroblast and Centrocyte",
            "markers": ["CD19+", "CD20+", "CD10+", "CD38+", "BCL6+", "Ki-67+ (proliferating)", "IgM or switched isotype"],
            "size": "Centroblast: 15-20 μm (large). Centrocyte: 10-15 μm (medium).",
            "morphology": "Centroblast: Large proliferating cell with open chromatin, prominent nucleoli, basophilic cytoplasm. Centrocyte: Medium-sized, irregular/cleaved nucleus (centrocyte = cleaved cell), less basophilic cytoplasm.",
            "location": "Germinal centers of secondary lymphoid organs (dark zone = centroblasts, light zone = centrocytes)",
            "function": "AFFINITY MATURATION and CLASS SWITCHING. Centroblasts undergo rapid proliferation and somatic hypermutation (SHM) in dark zone. Centrocytes undergo selection based on BCR affinity in light zone - high affinity clones survive and receive survival signals from follicular dendritic cells and Tfh cells.",
            "mechanisticDetail": "GERMINAL CENTER REACTION: (1) DARK ZONE: Centroblasts proliferate rapidly + SOMATIC HYPERMUTATION via AID (Activation-Induced Deaminase) → introduces point mutations in Ig V region → generates BCR diversity. (2) LIGHT ZONE: Centroblasts become centrocytes → present antigen on MHC II to Tfh (follicular helper T cells). HIGH-AFFINITY BCR → strong signal + Tfh help (CD40L + IL-21) → survival + proliferation. LOW-AFFINITY BCR → no help → apoptosis. (3) CLASS SWITCH RECOMBINATION (CSR): AID also mediates CSR → changes constant region (Cμ → Cγ, Cα, or Cε) → IgM becomes IgG, IgA, or IgE. Cytokines determine switch: IFN-γ → IgG, IL-4 → IgE, TGF-β → IgA.",
            "BCRstatus": "IgM initially, then class-switched to IgG, IgA, or IgE during germinal center reaction",
            "divides": true,
            "clinicalRelevance": [
                "Hyper-IgM Syndrome: CD40L deficiency (X-linked) or AID deficiency (autosomal) → no class switching → only IgM produced → recurrent pyogenic + opportunistic infections",
                "AID deficiency: Cannot perform somatic hypermutation or class switching → low IgG/IgA/IgE, lymph node hyperplasia",
                "Burkitt Lymphoma: MYC translocation t(8;14) → germinal center B cell origin → 'starry sky' appearance",
                "Follicular Lymphoma: t(14;18) BCL2-IgH fusion → germinal center B cell origin, indolent",
                "Diffuse Large B Cell Lymphoma (DLBCL): Germinal center or post-germinal center origin"
            ],
            "step1Pearls": [
                "Germinal center: Dark zone (centroblasts proliferate + somatic hypermutation) and Light zone (centrocytes + selection)",
                "Somatic hypermutation (SHM): AID introduces point mutations in V region → affinity maturation",
                "Class switch recombination (CSR): AID changes constant region → IgM to IgG/IgA/IgE",
                "Cytokines direct class switching: IFN-γ → IgG, IL-4 → IgE, TGF-β/IL-5 → IgA",
                "Tfh (follicular helper T cells) provide CD40L + IL-21 → B cell survival/differentiation",
                "Hyper-IgM syndrome: CD40L or AID deficiency → no class switching → only IgM, recurrent infections",
                "Burkitt lymphoma: t(8;14) MYC-IgH, germinal center origin, 'starry sky', rapidly growing",
                "Follicular lymphoma: t(14;18) BCL2-IgH, germinal center origin, indolent, 'follicular' architecture"
            ]
        },
        {
            "stageNumber": 6,
            "id": "plasma-cell",
            "name": "Plasma Cell",
            "alternateName": "Antibody-Secreting Cell, Effector B Cell",
            "markers": ["CD38+++", "CD138+ (Syndecan-1)", "CD19- (lost)", "CD20- (lost)", "Intracytoplasmic Ig+++", "IRF4+", "Blimp-1+"],
            "size": "15-20 μm",
            "morphology": "DISTINCTIVE: Eccentric nucleus ('clock-face' chromatin pattern), abundant basophilic cytoplasm (packed with rough ER for antibody production), perinuclear hof (Golgi apparatus appears as pale area near nucleus), 'fried egg' appearance. Looks like a protein factory.",
            "location": "Bone marrow (long-lived plasma cells), secondary lymphoid organs (short-lived), inflamed tissues",
            "function": "ANTIBODY PRODUCTION. Secretes massive amounts of antibodies (~2,000 molecules per second). Terminally differentiated - cannot divide, cannot present antigen (no MHC II). Sole purpose is antibody secretion.",
            "mechanisticDetail": "DIFFERENTIATION: Germinal center B cell → signals from Tfh (IL-21, CD40L) → upregulate IRF4 and Blimp-1 → Blimp-1 REPRESSES PAX5 (B cell identity) → becomes plasma cell. Loses CD19, CD20, surface BCR. Gains CD138. ANTIBODY SECRETION: Massively expanded rough ER produces immunoglobulin. Golgi packages and secretes antibodies. SHORT-LIVED PLASMA CELLS (days to weeks): In lymphoid organs, secrete antibodies during acute response. LONG-LIVED PLASMA CELLS (months to years): Migrate to bone marrow, receive survival signals (BAFF, APRIL, IL-6), maintain serum antibody levels without antigen. These provide lifelong immunity after vaccination/infection.",
            "BCRstatus": "No surface BCR (lost). Secretes soluble immunoglobulin.",
            "divides": false,
            "clinicalRelevance": [
                "Multiple Myeloma: Malignant proliferation of plasma cells in bone marrow → CRAB (hyperCalcemia, Renal failure, Anemia, Bone lesions). Monoclonal spike (M-protein) on SPEP, Bence Jones protein (light chains) in urine, rouleaux formation on smear.",
                "Waldenström Macroglobulinemia: Malignant lymphoplasmacytic lymphoma → IgM monoclonal gammopathy → hyperviscosity syndrome (blurry vision, bleeding, neurologic symptoms)",
                "MGUS (Monoclonal Gammopathy of Undetermined Significance): Benign clonal plasma cell proliferation → <3 g/dL M-protein, <10% plasma cells in marrow, no end-organ damage. 1%/year risk of progression to myeloma.",
                "Amyloidosis (AL): Light chain deposition → β-pleated sheets → organ dysfunction (heart, kidney, liver, nerves)"
            ],
            "step1Pearls": [
                "Plasma cell: Eccentric nucleus, 'clock-face' chromatin, abundant basophilic cytoplasm, perinuclear hof",
                "Antibody factory: Secretes ~2,000 antibody molecules per second",
                "CD138+, CD38+++, CD19-, CD20- (loses B cell markers)",
                "Long-lived plasma cells in bone marrow maintain serum antibody levels for years",
                "Multiple myeloma: Malignant plasma cells → CRAB (Calcium high, Renal failure, Anemia, Bone lytic lesions)",
                "M-protein (monoclonal spike) on serum protein electrophoresis (SPEP)",
                "Bence Jones protein: Light chains in urine (myeloma)",
                "Rouleaux formation: RBC stacking (high immunoglobulins in myeloma/Waldenström)",
                "Waldenström: IgM monoclonal → hyperviscosity syndrome",
                "Blimp-1 represses PAX5 → B cell loses identity → becomes plasma cell"
            ]
        },
        {
            "stageNumber": 7,
            "id": "memory-b-cell",
            "name": "Memory B Cell",
            "markers": ["CD19+", "CD20+", "CD27+", "IgG+, IgA+, or IgM+", "BCL6-"],
            "size": "8-12 μm",
            "morphology": "Small to medium lymphocyte, similar to naive B cell but slightly larger. May have more cytoplasm.",
            "location": "Circulate in blood and lymph. Reside in spleen marginal zone, lymph nodes. Some in tissues (tissue-resident memory).",
            "function": "Long-lived memory B cells that persist after antigen clearance. Upon antigen re-exposure → rapidly differentiate into plasma cells (faster and stronger secondary response). Pre-mutated high-affinity BCR, already class-switched.",
            "mechanisticDetail": "Arise from germinal center reaction. Have undergone somatic hypermutation (high-affinity BCR) and class switching (IgG+, IgA+, or IgM+). Express CD27 (memory marker). SECONDARY RESPONSE: Upon antigen re-encounter → rapidly proliferate and differentiate into plasma cells WITHOUT need for germinal center (faster than primary response). Can also re-enter germinal centers for further affinity maturation. Provide LONG-TERM IMMUNITY after infection or vaccination.",
            "BCRstatus": "High-affinity, class-switched BCR (IgG, IgA, or IgM)",
            "divides": "Upon antigen re-exposure",
            "clinicalRelevance": [
                "Vaccines induce memory B cells → long-lasting immunity",
                "Tetanus booster → memory B cells rapidly produce anti-tetanus IgG",
                "Rituximab (anti-CD20) depletes memory B cells → used in autoimmune diseases (RA, MS)",
                "EBV infects memory B cells → can cause lymphomas (Burkitt, DLBCL, Hodgkin)"
            ],
            "step1Pearls": [
                "Memory B cells: CD27+, pre-mutated (high affinity), class-switched (IgG/IgA)",
                "Provide rapid secondary antibody response upon antigen re-exposure",
                "No need for germinal center reaction (already optimized)",
                "Persist for years to decades → lifelong immunity from vaccines/infections",
                "CD27 is marker of memory B cells",
                "EBV (Epstein-Barr Virus) infects memory B cells"
            ]
        }
    ],

    "antibodyClasses": {
        "IgM": {
            "structure": "Pentamer (5 IgM units joined by J chain)",
            "function": "First antibody produced in primary response. Excellent at complement activation (classical pathway). Cannot cross placenta.",
            "location": "Blood (mainly intravascular)",
            "clinicalRelevance": "IgM antibodies indicate acute/recent infection. Natural IgM against ABO blood groups. Cold agglutinins (IgM anti-RBC) in Mycoplasma, EBV.",
            "step1Pearls": ["Pentamer, largest antibody", "First in primary response", "Best at complement activation", "Cannot cross placenta", "Acute infection marker"]
        },
        "IgG": {
            "structure": "Monomer. 4 subclasses (IgG1, IgG2, IgG3, IgG4)",
            "function": "Main antibody of secondary response. Opsonization, complement activation, ADCC, neutralization. Crosses placenta (passive immunity to fetus).",
            "location": "Blood and tissues (most abundant antibody in serum)",
            "clinicalRelevance": "IgG antibodies indicate past infection or immunity. Maternal IgG protects newborn for first 6 months. Warm autoimmune hemolytic anemia (IgG anti-RBC).",
            "step1Pearls": ["Monomer, most abundant in serum", "Secondary response", "Crosses placenta → fetal immunity", "Opsonization (FcγR)", "Chronic infection marker"]
        },
        "IgA": {
            "structure": "Monomer (serum) or Dimer with secretory component (secretory IgA)",
            "function": "Mucosal immunity. Neutralizes pathogens and toxins at mucosal surfaces. Prevents pathogen adherence.",
            "location": "Secretions (saliva, tears, breast milk, respiratory/GI mucosa)",
            "clinicalRelevance": "Selective IgA deficiency (most common immunodeficiency) → recurrent sinopulmonary/GI infections, increased autoimmunity. IgA nephropathy (Berger disease).",
            "step1Pearls": ["Dimer in secretions (with J chain + secretory component)", "Mucosal immunity", "In breast milk → passive immunity to infant", "IgA deficiency: Most common immunodeficiency", "IgA nephropathy: Mesangial IgA deposits"]
        },
        "IgE": {
            "structure": "Monomer",
            "function": "Allergy and anti-parasitic immunity. Binds mast cells/basophils via FcεRI. Antigen crosslinking → degranulation (Type I hypersensitivity).",
            "location": "Bound to mast cells/basophils. Very low in serum (<1 mg/dL).",
            "clinicalRelevance": "Elevated in: Allergies, asthma, atopic dermatitis, parasitic infections (helminths), Hyper-IgE syndrome (Job syndrome).",
            "step1Pearls": ["Lowest concentration in serum", "Binds FcεRI on mast cells/basophils", "Type I hypersensitivity (allergy, anaphylaxis)", "Anti-parasitic (helminths)", "Hyper-IgE syndrome: ↑↑ IgE + eczema + Staph abscesses + retained primary teeth"]
        },
        "IgD": {
            "structure": "Monomer",
            "function": "Co-expressed with IgM on mature naive B cells. Role unclear (may regulate B cell activation).",
            "location": "Surface of mature naive B cells. Very low in serum.",
            "clinicalRelevance": "Role not well understood. Lost after B cell activation.",
            "step1Pearls": ["Co-expressed with IgM on naive B cells", "Function unclear", "Lost after activation"]
        }
    },

    "clinicalCorrelations": [
        {
            "disease": "X-linked Agammaglobulinemia (XLA, Bruton's)",
            "mechanism": "BTK (Bruton Tyrosine Kinase) mutation → defective pre-BCR signaling → B cell development stops at pro-B/pre-B stage",
            "affectedStages": "Pro-B to Pre-B transition blocked",
            "presentation": "Recurrent bacterial infections after 6 months (when maternal IgG wanes). Sinopulmonary infections (Strep pneumoniae, H. influenzae, Staph). NO tonsils or lymph nodes (no B cells). Enterovirus infections (poliovirus, echovirus → chronic meningoencephalitis).",
            "labs": "Absent/very low B cells (<1%), all Ig isotypes low (IgG <100 mg/dL, IgM, IgA), normal T cells",
            "treatment": "Lifelong IVIG (intravenous immunoglobulin) every 3-4 weeks, prophylactic antibiotics, avoid live vaccines"
        },
        {
            "disease": "Common Variable Immunodeficiency (CVID)",
            "mechanism": "Heterogeneous disorder, various genetic causes. Impaired B cell differentiation to plasma cells → low immunoglobulin production",
            "affectedStages": "B cells present but cannot differentiate to plasma cells",
            "presentation": "Recurrent bacterial sinopulmonary/GI infections. Autoimmunity (ITP, AIHA, RA), lymphoproliferation, granulomas, ↑ risk of lymphoma. Usually presents in 20s-30s (vs XLA in infancy).",
            "labs": "Normal/low B cell count, low IgG (<400 mg/dL) + low IgA and/or IgM, poor vaccine response",
            "treatment": "IVIG, treat infections, monitor for lymphoma/autoimmunity"
        },
        {
            "disease": "Hyper-IgM Syndrome",
            "mechanism": "CD40L deficiency (X-linked, most common) or AID/UNG deficiency (autosomal). Cannot perform class switching → only IgM produced.",
            "affectedStages": "B cells cannot class switch in germinal centers",
            "presentation": "Recurrent pyogenic infections + opportunistic infections (Pneumocystis, Cryptosporidium, CMV - due to CD40L defect affecting T cell-macrophage interaction). Lymphoid hyperplasia.",
            "labs": "↑ IgM (normal to high), ↓↓ IgG, ↓↓ IgA, ↓↓ IgE, normal B/T cell counts",
            "treatment": "IVIG, prophylaxis for PCP (TMP-SMX), stem cell transplant (curative for CD40L deficiency)"
        },
        {
            "disease": "Selective IgA Deficiency",
            "mechanism": "Defect in IgA class switching or plasma cell differentiation. Most common primary immunodeficiency (1:600).",
            "affectedStages": "B cells cannot switch to IgA or differentiate to IgA-secreting plasma cells",
            "presentation": "Often ASYMPTOMATIC. Some: Recurrent sinopulmonary or GI infections, ↑ autoimmunity (celiac, SLE, ITP), ↑ atopy (allergies, asthma). Anaphylaxis to blood products containing IgA.",
            "labs": "IgA <7 mg/dL, normal IgG and IgM, normal B/T cells",
            "treatment": "Usually none needed. If infections: Prophylactic antibiotics. Avoid IgA-containing blood products (risk of anaphylaxis due to anti-IgA antibodies)."
        },
        {
            "disease": "Multiple Myeloma",
            "mechanism": "Malignant proliferation of clonal plasma cells in bone marrow. Produce monoclonal immunoglobulin (M-protein).",
            "affectedStages": "Malignant plasma cells",
            "presentation": "CRAB: HyperCalcemia (bone resorption), Renal failure (light chain cast nephropathy), Anemia (marrow replacement), Bone lytic lesions (osteolytic activity). Back pain, pathologic fractures, recurrent infections (low normal Ig).",
            "labs": "M-protein (monoclonal spike) on SPEP, Bence Jones protein (light chains) in urine, >10% plasma cells in bone marrow, rouleaux on smear, elevated β2-microglobulin, lytic lesions on skeletal survey",
            "treatment": "Bortezomib (proteasome inhibitor), lenalidomide (immunomodulator), dexamethasone, autologous stem cell transplant, bisphosphonates (for bone disease)"
        }
    ],

    "step1HighYieldConcepts": [
        "B cell development: Bone marrow (pro-B → pre-B → immature B → mature naive B) → Periphery (germinal center → plasma cell or memory B cell)",
        "Heavy chain rearranges first (pro-B: D-J, then V-D-J). Light chain rearranges at pre-B stage (V-J).",
        "Pre-BCR checkpoint: μ heavy chain + surrogate light chain → signals proliferation",
        "Bruton's (XLA): BTK mutation → block at pre-B → no B cells → recurrent bacterial infections after 6 months",
        "Negative selection in bone marrow: Self-reactive B cells → deletion, receptor editing, or anergy",
        "Mature naive B cell: IgM+ IgD+ (co-expressed), never encountered antigen",
        "B cell activation: (1) Antigen binding, (2) T cell help (CD40L-CD40 + cytokines)",
        "Hyper-IgM syndrome: CD40L or AID deficiency → no class switching → only IgM",
        "Germinal center: Somatic hypermutation (affinity maturation) + class switch recombination",
        "AID (Activation-Induced Deaminase): Mediates somatic hypermutation AND class switching",
        "Class switching: IFN-γ → IgG, IL-4 → IgE, TGF-β/IL-5 → IgA",
        "Plasma cell: CD138+, eccentric nucleus, clock-face chromatin, abundant basophilic cytoplasm, perinuclear hof",
        "Multiple myeloma: CRAB (Calcium high, Renal failure, Anemia, Bone lytic lesions), M-protein, Bence Jones protein",
        "Memory B cells: CD27+, pre-mutated, class-switched, rapid secondary response",
        "IgM: Pentamer, first antibody, best at complement activation, acute infection marker",
        "IgG: Monomer, most abundant, crosses placenta, opsonization, chronic infection marker",
        "IgA: Dimer in secretions (J chain + secretory component), mucosal immunity",
        "IgE: Lowest concentration, binds mast cells (FcεRI), Type I hypersensitivity, anti-parasitic",
        "CVID: Common Variable Immunodeficiency → low IgG + low IgA/IgM, presents in 20s-30s",
        "Selective IgA deficiency: Most common immunodeficiency, often asymptomatic, ↑ anaphylaxis to blood products"
    ]
};

export default bCellLineage;

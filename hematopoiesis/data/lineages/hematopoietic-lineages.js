// Hematopoietic Lineages - Similar to pharmacologic/therapeutic classes

const lineages = [
    {
        "id": "stem-cell",
        "name": "Stem Cells",
        "system": "hematopoietic",
        "description": "Pluripotent cells capable of self-renewal and differentiation into all blood cell types",
        "cellIds": ["hematopoietic-stem-cell"],
        "pageType": "lineage-group"
    },
    {
        "id": "myeloid-progenitor",
        "name": "Myeloid Progenitors",
        "parentLineage": "stem-cell",
        "system": "hematopoietic",
        "description": "Committed progenitors that give rise to all non-lymphoid blood cells",
        "cellIds": ["common-myeloid-progenitor", "megakaryocyte-erythroid-progenitor", "granulocyte-monocyte-progenitor"],
        "pageType": "lineage-group"
    },
    {
        "id": "lymphoid-progenitor",
        "name": "Lymphoid Progenitors",
        "parentLineage": "stem-cell",
        "system": "hematopoietic",
        "description": "Committed progenitors that give rise to T cells, B cells, and NK cells",
        "cellIds": ["common-lymphoid-progenitor"],
        "pageType": "lineage-group"
    },
    {
        "id": "granulocyte",
        "name": "Granulocytes",
        "parentLineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "description": "Cells with granular cytoplasm and multilobed nuclei. First responders to infection.",
        "sharedFeatures": [
            "Multilobed nuclei",
            "Cytoplasmic granules with antimicrobial/inflammatory mediators",
            "Arise from myeloblast in bone marrow",
            "Short lifespan (hours to days)"
        ],
        "cellIds": ["neutrophil", "eosinophil", "basophil", "mast-cell"],
        "pageType": "lineage-group"
    },
    {
        "id": "monocyte-macrophage",
        "name": "Monocyte/Macrophage Lineage",
        "parentLineage": "myeloid-progenitor",
        "system": "hematopoietic",
        "description": "Professional phagocytes and antigen-presenting cells",
        "sharedFeatures": [
            "Professional phagocytes",
            "Antigen presentation via MHC class II",
            "Produce inflammatory cytokines",
            "Non-specific esterase positive"
        ],
        "cellIds": ["monocyte", "macrophage"],
        "pageType": "lineage-group"
    },
    {
        "id": "hematopoietic-system",
        "name": "Hematopoietic System",
        "system": "hematopoietic",
        "lineageGroupIds": [
            "stem-cell",
            "myeloid-progenitor",
            "lymphoid-progenitor",
            "granulocyte",
            "monocyte-macrophage"
        ],
        "pageType": "system"
    }
];

export default lineages;

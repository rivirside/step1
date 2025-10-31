// Hematopoiesis Tree Structure
// Defines the hierarchical tree for navigation

const hematopoiesisTree = {
    "id": "hematopoiesis-root",
    "name": "Hematopoiesis",
    "type": "root",

    "children": [
        {
            "id": "hematopoietic-stem-cell",
            "name": "Hematopoietic Stem Cell (HSC)",
            "type": "progenitor-cell",
            "pageType": "cell",
            "children": [
                {
                    "id": "common-myeloid-progenitor",
                    "name": "Common Myeloid Progenitor (CMP)",
                    "type": "progenitor-cell",
                    "pageType": "cell",
                    "children": [
                        {
                            "id": "megakaryocyte-erythroid-progenitor",
                            "name": "Megakaryocyte-Erythroid Progenitor (MEP)",
                            "type": "progenitor-cell",
                            "pageType": "cell",
                            "children": [
                                {
                                    "id": "erythroid-lineage",
                                    "name": "Erythroid Lineage",
                                    "type": "lineage",
                                    "pageType": "lineage",
                                    "icon": "🔴"
                                },
                                {
                                    "id": "megakaryocytic-lineage",
                                    "name": "Megakaryocytic Lineage",
                                    "type": "lineage",
                                    "pageType": "lineage",
                                    "icon": "🩸"
                                }
                            ]
                        },
                        {
                            "id": "granulocyte-monocyte-progenitor",
                            "name": "Granulocyte-Monocyte Progenitor (GMP)",
                            "type": "progenitor-cell",
                            "pageType": "cell",
                            "children": [
                                {
                                    "id": "granulocyte-lineage",
                                    "name": "Granulocyte Lineage",
                                    "type": "lineage",
                                    "pageType": "lineage",
                                    "icon": "⚪"
                                },
                                {
                                    "id": "monocyte-lineage",
                                    "name": "Monocyte/Macrophage Lineage",
                                    "type": "lineage",
                                    "pageType": "lineage",
                                    "icon": "🔵"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "common-lymphoid-progenitor",
                    "name": "Common Lymphoid Progenitor (CLP)",
                    "type": "progenitor-cell",
                    "pageType": "cell",
                    "children": [
                        {
                            "id": "t-cell-lineage",
                            "name": "T Cell Lineage",
                            "type": "lineage",
                            "pageType": "lineage",
                            "icon": "🟢"
                        },
                        {
                            "id": "b-cell-lineage",
                            "name": "B Cell Lineage",
                            "type": "lineage",
                            "pageType": "lineage",
                            "icon": "🟣"
                        },
                        {
                            "id": "nk-cell-lineage",
                            "name": "NK Cell Lineage",
                            "type": "lineage",
                            "pageType": "lineage",
                            "icon": "🟡"
                        }
                    ]
                }
            ]
        }
    ]
};

export default hematopoiesisTree;

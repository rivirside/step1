// All Hematopoietic Lineages Aggregator
// Imports all lineage files for centralized access

import erythroidLineage from './erythroid-lineage.js';
import megakaryocyticLineage from './megakaryocytic-lineage.js';
import granulocyteLineage from './granulocyte-lineage.js';
import monocyteLineage from './monocyte-lineage.js';
import tCellLineage from './t-cell-lineage.js';
import bCellLineage from './b-cell-lineage.js';
import nkCellLineage from './nk-cell-lineage.js';

// Export all lineages as array
const allLineages = [
    erythroidLineage,
    megakaryocyticLineage,
    granulocyteLineage,
    monocyteLineage,
    tCellLineage,
    bCellLineage,
    nkCellLineage
];

export default allLineages;

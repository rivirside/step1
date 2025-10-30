// Hematopoiesis - All Cells
// Auto-aggregates from individual cell files

import stemProgenitorCells from './stem-progenitor-cells.js';
import myeloidLineage from './myeloid-lineage.js';

const allCells = [
    ...stemProgenitorCells,
    ...myeloidLineage
];

export default allCells;

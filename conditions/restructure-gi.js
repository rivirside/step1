// Script to restructure GI diseases from flat to nested detail structure
const fs = require('fs');

const filePath = './data/diseases/gi-diseases.js';
let content = fs.readFileSync(filePath, 'utf-8');

// The properties that should be nested under 'detail'
const detailProps = [
    'definition',
    'pathophysiology',
    'epidemiology',
    'riskFactors',
    'presentation',
    'physicalExam',
    'diagnosticCriteria',
    'labs',
    'imaging',
    'differentialDiagnosis',
    'management',
    'complications',
    'prognosis',
    'clinicalPearls'
];

// Replace pattern: find each disease object and restructure it
// This is complex, so we'll do a simpler approach: add detail: { before definition
// and close it before the closing brace

content = content.replace(/(\s+)(definition: )/g, '$1detail: {\n$1    $2');

// Now we need to close the detail object before the closing brace of each disease
// Find the pattern of clinicalPearls closing bracket followed by disease closing brace
content = content.replace(/(clinicalPearls: \[[^\]]+\])\n(\s+)\}/g, '$1\n$2},\n$2pageType: "disease"\n$2}');

// Also add pageType if not present
content = content.replace(/detail: \{/g, 'pageType: "disease",\n        detail: {');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Restructured GI diseases file');

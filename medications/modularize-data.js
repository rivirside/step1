#!/usr/bin/env node
/**
 * Modularize medication data from script.js into ES6 modules
 * Converts monolithic drugData array into modular structure matching conditions platform
 */

const fs = require('fs');
const path = require('path');

// Read the entire script.js file
const scriptPath = path.join(__dirname, 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf-8');

// Extract drugData array using regex
console.log('Extracting drugData from script.js...');
const drugDataMatch = scriptContent.match(/const drugData = (\[[\s\S]*?\n\]);/);

if (!drugDataMatch) {
    console.error('ERROR: Could not find drugData array in script.js');
    process.exit(1);
}

// Use eval to parse the JavaScript object (safe since it's our own code)
const drugDataString = drugDataMatch[1];
let drugData;

try {
    // Wrap in function to safely eval
    const evalFunc = new Function(`return ${drugDataString}`);
    drugData = evalFunc();
    console.log(`✓ Successfully parsed drugData: ${drugData.length} systems found`);
} catch (error) {
    console.error('ERROR: Failed to parse drugData:', error.message);
    process.exit(1);
}

// Helper function to create safe IDs
function createId(name) {
    return name
        .toLowerCase()
        .replace(/[()]/g, '')
        .replace(/\//g, '-')
        .replace(/\s+/g, '-')
        .replace(/&/g, 'and')
        .replace(/'/g, '')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');
}

// Process the data
console.log('\nProcessing systems...');

const systems = [];
const allTherapeuticClasses = [];
const allDrugs = [];

drugData.forEach((systemData, sysIdx) => {
    const systemId = createId(systemData.system);
    const therapeuticClassIds = [];

    console.log(`\n[${sysIdx + 1}/${drugData.length}] Processing: ${systemData.system}`);

    // Process therapeutic classes
    systemData.therapeutic_classes.forEach((tcData, tcIdx) => {
        const therapeuticClassId = createId(tcData.name);
        therapeuticClassIds.push(therapeuticClassId);

        const pharmacologicClassIds = [];

        console.log(`  ├─ Therapeutic Class: ${tcData.name}`);

        // Process pharmacologic classes
        tcData.pharma_classes.forEach((pcData, pcIdx) => {
            const pharmacologicClassId = createId(pcData.name);
            pharmacologicClassIds.push(pharmacologicClassId);

            console.log(`  │  ├─ Pharmacologic Class: ${pcData.name} (${pcData.drugs.length} drugs)`);

            // Process drugs
            const drugIds = [];
            pcData.drugs.forEach((drugData, drugIdx) => {
                const drugId = createId(drugData.name);
                drugIds.push(drugId);

                // Create drug object
                const drug = {
                    id: drugId,
                    name: drugData.name,
                    pharmacologicClass: pharmacologicClassId,
                    therapeuticClass: therapeuticClassId,
                    system: systemId,

                    mechanism: pcData.mechanism,
                    features: drugData.features || '',
                    clinicalChoice: drugData.choice || '',

                    indications: drugData.indications || [],
                    contraindications: drugData.contraindications || [],
                    sideEffects: pcData.side_effects || [],
                    interactions: pcData.interactions || '',
                    interactionDetails: pcData.interaction_explanation || '',

                    pageType: 'drug'
                };

                allDrugs.push(drug);
            });

            // Create pharmacologic class object
            const pharmacologicClass = {
                id: pharmacologicClassId,
                name: pcData.name,
                therapeuticClass: therapeuticClassId,
                system: systemId,

                mechanism: pcData.mechanism,
                sideEffects: pcData.side_effects || [],
                interactions: pcData.interactions || '',
                interactionDetails: pcData.interaction_explanation || '',

                drugIds: drugIds,
                pageType: 'pharmacologic-class'
            };

            allTherapeuticClasses.push(pharmacologicClass);
        });

        // Create therapeutic class summary object
        const therapeuticClass = {
            id: therapeuticClassId,
            name: tcData.name,
            system: systemId,
            pharmacologicClassIds: pharmacologicClassIds,
            pageType: 'therapeutic-class'
        };

        allTherapeuticClasses.push(therapeuticClass);
    });

    // Create system object
    const system = {
        id: systemId,
        name: systemData.system,
        therapeuticClassIds: therapeuticClassIds,
        pageType: 'system'
    };

    systems.push(system);
});

console.log('\n' + '='.repeat(60));
console.log('DATA EXTRACTION SUMMARY');
console.log('='.repeat(60));
console.log(`Systems: ${systems.length}`);
console.log(`Therapeutic + Pharmacologic Classes: ${allTherapeuticClasses.length}`);
console.log(`Drugs: ${allDrugs.length}`);
console.log('='.repeat(60));

// Create output directories
const dataDir = path.join(__dirname, 'data');
const systemsDir = path.join(dataDir, 'systems');
const classesDir = path.join(dataDir, 'classes');
const drugsDir = path.join(dataDir, 'drugs');

[dataDir, systemsDir, classesDir, drugsDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Write systems.js
console.log('\nWriting systems.js...');
const systemsContent = `// Medication systems
// Auto-generated from modularize-data.js

const systems = ${JSON.stringify(systems, null, 4)};

export default systems;
`;
fs.writeFileSync(path.join(systemsDir, 'systems.js'), systemsContent);
console.log(`✓ Wrote ${systems.length} systems to data/systems/systems.js`);

// Group therapeutic/pharmacologic classes by system
console.log('\nWriting class files by system...');
systems.forEach(system => {
    const systemClasses = allTherapeuticClasses.filter(tc => tc.system === system.id);

    const classesContent = `// ${system.name} - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = ${JSON.stringify(systemClasses, null, 4)};

export default classes;
`;

    const filename = `${system.id}-classes.js`;
    fs.writeFileSync(path.join(classesDir, filename), classesContent);
    console.log(`✓ Wrote ${systemClasses.length} classes to data/classes/${filename}`);
});

// Group drugs by system
console.log('\nWriting drug files by system...');
systems.forEach(system => {
    const systemDrugs = allDrugs.filter(drug => drug.system === system.id);

    const drugsContent = `// ${system.name} - Drugs
// Auto-generated from modularize-data.js

const drugs = ${JSON.stringify(systemDrugs, null, 4)};

export default drugs;
`;

    const filename = `${system.id}-drugs.js`;
    fs.writeFileSync(path.join(drugsDir, filename), drugsContent);
    console.log(`✓ Wrote ${systemDrugs.length} drugs to data/drugs/${filename}`);
});

// Create index files for easy importing
console.log('\nCreating index files...');

// All classes index
const allClassesImports = systems.map(sys =>
    `import ${sys.id.replace(/-/g, '_')}_classes from './${sys.id}-classes.js';`
).join('\n');
const allClassesExports = systems.map(sys =>
    `    ...${sys.id.replace(/-/g, '_')}_classes`
).join(',\n');
const allClassesContent = `// All medication classes
// Auto-generated from modularize-data.js

${allClassesImports}

const allClasses = [
${allClassesExports}
];

export default allClasses;
`;
fs.writeFileSync(path.join(classesDir, 'all-classes.js'), allClassesContent);
console.log(`✓ Created data/classes/all-classes.js`);

// All drugs index
const allDrugsImports = systems.map(sys =>
    `import ${sys.id.replace(/-/g, '_')}_drugs from './${sys.id}-drugs.js';`
).join('\n');
const allDrugsExports = systems.map(sys =>
    `    ...${sys.id.replace(/-/g, '_')}_drugs`
).join(',\n');
const allDrugsContent = `// All medication drugs
// Auto-generated from modularize-data.js

${allDrugsImports}

const allDrugs = [
${allDrugsExports}
];

export default allDrugs;
`;
fs.writeFileSync(path.join(drugsDir, 'all-drugs.js'), allDrugsContent);
console.log(`✓ Created data/drugs/all-drugs.js`);

console.log('\n' + '='.repeat(60));
console.log('✓ MODULARIZATION COMPLETE!');
console.log('='.repeat(60));
console.log('\nGenerated files:');
console.log('  data/systems/systems.js');
console.log(`  data/classes/*-classes.js (${systems.length} files)`);
console.log(`  data/drugs/*-drugs.js (${systems.length} files)`);
console.log('  data/classes/all-classes.js');
console.log('  data/drugs/all-drugs.js');
console.log('\nNext steps:');
console.log('  1. Review generated files for accuracy');
console.log('  2. Build data-loader.js to load modular data');
console.log('  3. Update UI to use DataLoader');
console.log('='.repeat(60));

// Generate statistics report
const statsReport = {
    timestamp: new Date().toISOString(),
    systems: systems.map(s => ({
        name: s.name,
        id: s.id,
        therapeuticClasses: s.therapeuticClassIds.length,
        drugs: allDrugs.filter(d => d.system === s.id).length
    })),
    totals: {
        systems: systems.length,
        classes: allTherapeuticClasses.length,
        drugs: allDrugs.length
    }
};

fs.writeFileSync(
    path.join(dataDir, 'modularization-stats.json'),
    JSON.stringify(statsReport, null, 2)
);
console.log('\n✓ Statistics saved to data/modularization-stats.json\n');

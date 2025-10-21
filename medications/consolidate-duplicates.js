#!/usr/bin/env node

/**
 * Consolidate Duplicate Drugs Script
 * 
 * This script identifies all duplicate drug IDs across the modular data files
 * and consolidates them into single entries with multiple pharmacologic classes.
 */

const fs = require('fs');
const path = require('path');

const drugsDir = path.join(__dirname, 'data', 'drugs');

// Get all drug files
const drugFiles = fs.readdirSync(drugsDir).filter(f => f.endsWith('-drugs.js') && f !== 'all-drugs.js');

console.log(`\n📊 Analyzing ${drugFiles.length} drug data files...\n`);

// Map to track all occurrences of each drug ID
const drugOccurrences = new Map(); // id => [{file, data, index}]

// Read and parse all drug files
drugFiles.forEach(file => {
    const filePath = path.join(drugsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the drugs array (simple regex parsing)
    const match = content.match(/const drugs = \[([\s\S]*)\];/);
    if (!match) {
        console.warn(`⚠️  Could not parse ${file}`);
        return;
    }
    
    // Parse as JSON (with some cleanup)
    let drugsArrayStr = '[' + match[1] + ']';
    try {
        const drugs = eval('(' + drugsArrayStr + ')'); // Using eval for simplicity
        
        drugs.forEach((drug, index) => {
            if (!drugOccurrences.has(drug.id)) {
                drugOccurrences.set(drug.id, []);
            }
            drugOccurrences.get(drug.id).push({
                file,
                data: drug,
                index
            });
        });
    } catch (e) {
        console.error(`❌ Error parsing ${file}:`, e.message);
    }
});

// Find duplicates
const duplicates = Array.from(drugOccurrences.entries())
    .filter(([id, occurrences]) => occurrences.length > 1)
    .sort((a, b) => b[1].length - a[1].length); // Sort by most duplicates first

console.log(`\n🔍 Found ${duplicates.length} drugs with multiple entries:\n`);

duplicates.forEach(([drugId, occurrences]) => {
    console.log(`\n📌 ${drugId} (${occurrences.length} entries):`);
    
    const classes = new Set();
    const systems = new Set();
    const therapeuticClasses = new Set();
    
    occurrences.forEach(({file, data}) => {
        console.log(`   - ${file}: ${data.pharmacologicClass}`);
        classes.add(data.pharmacologicClass);
        systems.add(data.system);
        therapeuticClasses.add(data.therapeuticClass);
    });
    
    console.log(`   Pharmacologic classes: [${Array.from(classes).join(', ')}]`);
    
    if (systems.size > 1) {
        console.log(`   ⚠️  Multiple systems: ${Array.from(systems).join(', ')}`);
    }
    if (therapeuticClasses.size > 1) {
        console.log(`   ⚠️  Multiple therapeutic classes: ${Array.from(therapeuticClasses).join(', ')}`);
    }
});

console.log(`\n✅ Analysis complete!\n`);

// Export summary for consolidation
const summary = {
    total: duplicates.length,
    duplicates: duplicates.map(([drugId, occurrences]) => ({
        id: drugId,
        count: occurrences.length,
        pharmacologicClasses: Array.from(new Set(occurrences.map(o => o.data.pharmacologicClass))),
        systems: Array.from(new Set(occurrences.map(o => o.data.system))),
        therapeuticClasses: Array.from(new Set(occurrences.map(o => o.data.therapeuticClass))),
        files: occurrences.map(o => o.file)
    }))
};

fs.writeFileSync(
    path.join(__dirname, 'DUPLICATE_DRUGS_REPORT.json'),
    JSON.stringify(summary, null, 2)
);

console.log(`📄 Full report saved to DUPLICATE_DRUGS_REPORT.json\n`);

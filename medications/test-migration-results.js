import dataLoader from './data-loader.js';

console.log('Loading data...');
dataLoader.load();

// Wait a moment for async loading
setTimeout(() => {
  // Test a few multi-class drugs
  const albuterol = dataLoader.getDrugById('albuterol');
  const ipratropium = dataLoader.getDrugById('ipratropium');
  const aspirin = dataLoader.getDrugById('aspirin');
  const carbamazepine = dataLoader.getDrugById('carbamazepine');

  console.log('\n✅ Multi-class drug examples:\n');
  console.log('albuterol:', albuterol?.pharmacologicClasses);
  console.log('ipratropium:', ipratropium?.pharmacologicClasses);
  console.log('aspirin:', aspirin?.pharmacologicClasses);
  console.log('carbamazepine:', carbamazepine?.pharmacologicClasses);

  // Count total drugs
  const totalDrugs = dataLoader.drugs.length;
  console.log('\n📊 Total drugs loaded:', totalDrugs);

  // Count multi-class drugs
  const multiClass = dataLoader.drugs.filter(d => d.pharmacologicClasses && d.pharmacologicClasses.length > 1);
  console.log('Multi-class drugs:', multiClass.length);
  console.log('\nMulti-class drug list:');
  multiClass.forEach(d => {
    const classes = d.pharmacologicClasses.join(', ');
    console.log('  - ' + d.name + ': [' + classes + ']');
  });

  // Verify backward compatibility - all drugs should have pharmacologicClass (singular)
  const missingCompat = dataLoader.drugs.filter(d => !d.pharmacologicClass);
  console.log('\n🔍 Drugs missing backward compatibility field: ' + missingCompat.length);
  if (missingCompat.length > 0) {
    console.log('Missing drugs:', missingCompat.map(d => d.name));
  }

  console.log('\n✅ Migration test complete!');
}, 1000);

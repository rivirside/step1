// Medication Data Loader
// Centralized data loading and indexing for modular medication data
// Matches architecture pattern from conditions platform

class MedicationDataLoader {
    constructor() {
        // Primary data stores
        this.systems = [];
        this.classes = [];  // Both therapeutic and pharmacologic classes
        this.drugs = [];

        // Indexes for fast lookup
        this.systemsById = new Map();
        this.classesById = new Map();
        this.drugsById = new Map();

        // Reverse indexes
        this.drugsBySystem = new Map();
        this.drugsByTherapeuticClass = new Map();
        this.drugsByPharmacologicClass = new Map();
        this.classesBySystem = new Map();

        // Search indexes
        this.drugsByIndication = new Map();
        this.drugsByContraindication = new Map();
        this.drugsBySideEffect = new Map();

        this.loaded = false;
    }

    async load() {
        if (this.loaded) {
            console.log('Data already loaded');
            return true;
        }

        console.log('Loading medication data...');

        try {
            // Load systems
            const systemsModule = await import('./data/systems/systems.js');
            this.systems = systemsModule.default;
            console.log(`✓ Loaded ${this.systems.length} systems`);

            // Load all classes
            const classesModule = await import('./data/classes/all-classes.js');
            this.classes = classesModule.default;
            console.log(`✓ Loaded ${this.classes.length} classes`);

            // Load all drugs
            const drugsModule = await import('./data/drugs/all-drugs.js');
            this.drugs = drugsModule.default;
            console.log(`✓ Loaded ${this.drugs.length} drugs`);

            // Build indexes
            this.buildIndexes();

            this.loaded = true;
            console.log('✓ Medication data loaded successfully');
            return true;

        } catch (error) {
            console.error('Failed to load medication data:', error);
            return false;
        }
    }

    buildIndexes() {
        console.log('Building indexes...');

        // Index systems
        this.systems.forEach(system => {
            this.systemsById.set(system.id, system);
        });

        // Index classes
        this.classes.forEach(cls => {
            // Normalize therapeutic classes to arrays (same pattern as drugs!)
            // Pharmacologic classes can belong to multiple therapeutic classes
            if (cls.pageType === 'pharmacologic-class') {
                if (!cls.therapeuticClasses) {
                    // Old format: single therapeuticClass string → convert to array
                    cls.therapeuticClasses = cls.therapeuticClass ? [cls.therapeuticClass] : [];
                } else if (!Array.isArray(cls.therapeuticClasses)) {
                    cls.therapeuticClasses = [cls.therapeuticClasses];
                }

                // Set therapeuticClass to first for backward compatibility
                cls.therapeuticClass = cls.therapeuticClasses[0] || null;
            }

            this.classesById.set(cls.id, cls);

            // Group classes by system
            if (!this.classesBySystem.has(cls.system)) {
                this.classesBySystem.set(cls.system, []);
            }
            this.classesBySystem.get(cls.system).push(cls);
        });

        // Index drugs
        this.drugs.forEach(drug => {
            // ALWAYS normalize to pharmacologicClasses array (even if single class)
            // This is simpler - all drugs work the same way!
            if (!drug.pharmacologicClasses) {
                // Old format: single pharmacologicClass string → convert to array
                drug.pharmacologicClasses = drug.pharmacologicClass ? [drug.pharmacologicClass] : [];
            } else if (!Array.isArray(drug.pharmacologicClasses)) {
                // Ensure it's an array
                drug.pharmacologicClasses = [drug.pharmacologicClasses];
            }

            // Set pharmacologicClass to first class for backward compatibility
            // (Even single-class drugs now use the array internally)
            drug.pharmacologicClass = drug.pharmacologicClasses[0] || null;

            this.drugsById.set(drug.id, drug);

            // Group by system
            if (!this.drugsBySystem.has(drug.system)) {
                this.drugsBySystem.set(drug.system, []);
            }
            this.drugsBySystem.get(drug.system).push(drug);

            // Group by therapeutic class
            if (!this.drugsByTherapeuticClass.has(drug.therapeuticClass)) {
                this.drugsByTherapeuticClass.set(drug.therapeuticClass, []);
            }
            this.drugsByTherapeuticClass.get(drug.therapeuticClass).push(drug);

            // Group by pharmacologic classes (NOW SUPPORTS MULTIPLE!)
            // Add drug to index for EACH of its pharmacologic classes
            drug.pharmacologicClasses.forEach(pharmaClass => {
                if (!this.drugsByPharmacologicClass.has(pharmaClass)) {
                    this.drugsByPharmacologicClass.set(pharmaClass, []);
                }
                this.drugsByPharmacologicClass.get(pharmaClass).push(drug);
            });

            // Index by indications
            if (drug.indications) {
                drug.indications.forEach(indication => {
                    const key = indication.toLowerCase();
                    if (!this.drugsByIndication.has(key)) {
                        this.drugsByIndication.set(key, []);
                    }
                    this.drugsByIndication.get(key).push(drug);
                });
            }

            // Index by contraindications
            if (drug.contraindications) {
                drug.contraindications.forEach(contraindication => {
                    const key = contraindication.toLowerCase();
                    if (!this.drugsByContraindication.has(key)) {
                        this.drugsByContraindication.set(key, []);
                    }
                    this.drugsByContraindication.get(key).push(drug);
                });
            }

            // Index by side effects (handle both array and object formats)
            if (drug.sideEffects) {
                let sideEffectsList = [];

                if (Array.isArray(drug.sideEffects)) {
                    // Old format: array of strings
                    sideEffectsList = drug.sideEffects;
                } else if (typeof drug.sideEffects === 'object') {
                    // New format: object with common/serious/rare arrays
                    if (drug.sideEffects.common) sideEffectsList.push(...drug.sideEffects.common);
                    if (drug.sideEffects.serious) sideEffectsList.push(...drug.sideEffects.serious);
                    if (drug.sideEffects.rare) sideEffectsList.push(...drug.sideEffects.rare);
                }

                sideEffectsList.forEach(sideEffect => {
                    const key = sideEffect.toLowerCase();
                    if (!this.drugsBySideEffect.has(key)) {
                        this.drugsBySideEffect.set(key, []);
                    }
                    this.drugsBySideEffect.get(key).push(drug);
                });
            }
        });

        console.log('✓ Indexes built');
    }

    // Getter methods
    getSystems() {
        return this.systems;
    }

    getSystemById(id) {
        return this.systemsById.get(id);
    }

    getClassById(id) {
        return this.classesById.get(id);
    }

    getDrugById(id) {
        return this.drugsById.get(id);
    }

    getDrugsBySystem(systemId) {
        return this.drugsBySystem.get(systemId) || [];
    }

    getDrugsByTherapeuticClass(classId) {
        return this.drugsByTherapeuticClass.get(classId) || [];
    }

    getDrugsByPharmacologicClass(classId) {
        return this.drugsByPharmacologicClass.get(classId) || [];
    }

    getClassesBySystem(systemId) {
        return this.classesBySystem.get(systemId) || [];
    }

    // Get therapeutic classes for a system
    getTherapeuticClassesBySystem(systemId) {
        const classes = this.classesBySystem.get(systemId) || [];
        return classes.filter(cls => cls.pageType === 'therapeutic-class');
    }

    // Get pharmacologic classes for a therapeutic class
    // NOW SUPPORTS MULTI-THERAPEUTIC-CLASS!
    getPharmacologicClassesByTherapeuticClass(therapeuticClassId) {
        return this.classes.filter(cls =>
            cls.pageType === 'pharmacologic-class' &&
            cls.therapeuticClasses &&  // Has therapeutic classes array
            cls.therapeuticClasses.includes(therapeuticClassId)  // Includes this one
        );
    }

    // Search methods
    searchDrugsByIndication(indication) {
        const key = indication.toLowerCase();
        return this.drugsByIndication.get(key) || [];
    }

    searchDrugsByContraindication(contraindication) {
        const key = contraindication.toLowerCase();
        return this.drugsByContraindication.get(key) || [];
    }

    searchDrugsBySideEffect(sideEffect) {
        const key = sideEffect.toLowerCase();
        return this.drugsBySideEffect.get(key) || [];
    }

    search(query) {
        if (!query || query.trim() === '') {
            return [];
        }

        const searchTerm = query.toLowerCase();
        const results = [];

        // Search drugs
        this.drugs.forEach(drug => {
            let score = 0;

            // Exact match on name
            if (drug.name.toLowerCase() === searchTerm) {
                score += 100;
            } else if (drug.name.toLowerCase().includes(searchTerm)) {
                score += 50;
            }

            // Match on indications
            if (drug.indications && drug.indications.some(ind =>
                ind.toLowerCase().includes(searchTerm))) {
                score += 20;
            }

            // Match on features/clinical choice
            if (drug.features && drug.features.toLowerCase().includes(searchTerm)) {
                score += 10;
            }
            if (drug.clinicalChoice && drug.clinicalChoice.toLowerCase().includes(searchTerm)) {
                score += 10;
            }

            // Match on mechanism
            if (drug.mechanism && drug.mechanism.toLowerCase().includes(searchTerm)) {
                score += 5;
            }

            if (score > 0) {
                results.push({ type: 'drug', item: drug, score });
            }
        });

        // Search classes
        this.classes.forEach(cls => {
            let score = 0;

            if (cls.name.toLowerCase() === searchTerm) {
                score += 80;
            } else if (cls.name.toLowerCase().includes(searchTerm)) {
                score += 40;
            }

            if (score > 0) {
                results.push({ type: 'class', item: cls, score });
            }
        });

        // Search systems
        this.systems.forEach(system => {
            let score = 0;

            if (system.name.toLowerCase() === searchTerm) {
                score += 60;
            } else if (system.name.toLowerCase().includes(searchTerm)) {
                score += 30;
            }

            if (score > 0) {
                results.push({ type: 'system', item: system, score });
            }
        });

        // Sort by score
        results.sort((a, b) => b.score - a.score);

        return results;
    }

    // Statistics
    getStats() {
        return {
            systems: this.systems.length,
            therapeuticClasses: this.classes.filter(c => c.pageType === 'therapeutic-class').length,
            pharmacologicClasses: this.classes.filter(c => c.pageType === 'pharmacologic-class').length,
            totalClasses: this.classes.length,
            drugs: this.drugs.length,
            indications: this.drugsByIndication.size,
            contraindications: this.drugsByContraindication.size,
            sideEffects: this.drugsBySideEffect.size
        };
    }
}

// Create singleton instance
const dataLoader = new MedicationDataLoader();

export default dataLoader;

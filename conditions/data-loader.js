// V3 Graph-based Data Loader with Indexing
// Loads all data and builds indexes for efficient access

class DataLoader {
    constructor() {
        this.systems = [];
        this.categories = [];
        this.diseases = [];

        // Primary indexes (by ID)
        this.systemIndex = new Map();
        this.categoryIndex = new Map();
        this.diseaseIndex = new Map();

        // Reverse indexes for navigation
        this.diseasesByCategory = new Map(); // categoryId -> [disease objects]
        this.diseasesBySystem = new Map();   // systemId -> [disease objects]
        this.diseasesByTag = new Map();      // tag -> [disease objects]
        this.diseasesBySymptom = new Map();  // symptom -> [disease objects]

        this.isLoaded = false;
    }

    async load() {
        try {
            // Import data from modules
            const systemsModule = await import('./data/systems/systems.js');
            const cvCategoriesModule = await import('./data/categories/cv-categories.js');
            const cvDiseasesModule = await import('./data/diseases/cv-diseases.js');
            const respiratoryCategoriesModule = await import('./data/categories/respiratory-categories.js');
            const respiratoryDiseasesModule = await import('./data/diseases/respiratory-diseases.js');
            const giCategoriesModule = await import('./data/categories/gi-categories.js');
            const giDiseasesModule = await import('./data/diseases/gi-diseases.js');
            const psychiatryCategoriesModule = await import('./data/categories/psychiatry-categories.js');
            const psychiatryDiseasesModule = await import('./data/diseases/psychiatry-diseases.js');
            const hematologyOncologyCategoriesModule = await import('./data/categories/hematology-oncology-categories.js');
            const hematologyOncologyDiseasesModule = await import('./data/diseases/hematology-oncology-diseases.js');
            const renalCategoriesModule = await import('./data/categories/renal-categories.js');
            const renalDiseasesModule = await import('./data/diseases/renal-diseases.js');
            const endocrineCategoriesModule = await import('./data/categories/endocrine-categories.js');
            const endocrineDiseasesModule = await import('./data/diseases/endocrine-diseases.js');
            const neurologyCategoriesModule = await import('./data/categories/neurology-categories.js');
            const neurologyDiseasesModule = await import('./data/diseases/neurology-diseases.js');
            const rheumatologyCategoriesModule = await import('./data/categories/rheumatology-categories.js');
            const rheumatologyDiseasesModule = await import('./data/diseases/rheumatology-diseases.js');
            const infectiousDiseaseCategoriesModule = await import('./data/categories/infectious-disease-categories.js');
            const infectiousDiseaseDiseasesModule = await import('./data/diseases/infectious-disease-diseases.js');
            const musculoskeletalCategoriesModule = await import('./data/categories/musculoskeletal-categories.js');
            const musculoskeletalDiseasesModule = await import('./data/diseases/musculoskeletal-diseases.js');
            const dermatologyCategoriesModule = await import('./data/categories/dermatology-categories.js');
            const dermatologyDiseasesModule = await import('./data/diseases/dermatology-diseases.js');
            const genitourinaryCategoriesModule = await import('./data/categories/genitourinary-categories.js');
            const genitourinaryDiseasesModule = await import('./data/diseases/genitourinary-diseases.js');
            const reproductiveObgynCategoriesModule = await import('./data/categories/reproductive-obgyn-categories.js');
            const reproductiveObgynDiseasesModule = await import('./data/diseases/reproductive-obgyn-diseases.js');
            const ophthalmologyCategoriesModule = await import('./data/categories/ophthalmology-categories.js');
            const ophthalmologyDiseasesModule = await import('./data/diseases/ophthalmology-diseases.js');
            const entCategoriesModule = await import('./data/categories/ent-categories.js');
            const entDiseasesModule = await import('./data/diseases/ent-diseases.js');
            const immunologyCategoriesModule = await import('./data/categories/immunology-categories.js');
            const immunologyDiseasesModule = await import('./data/diseases/immunology-diseases.js');
            const pediatricsCategoriesModule = await import('./data/categories/pediatrics-categories.js');
            const pediatricsDiseasesModule = await import('./data/diseases/pediatrics-diseases.js');
            const toxicologyCategoriesModule = await import('./data/categories/toxicology-categories.js');
            const toxicologyDiseasesModule = await import('./data/diseases/toxicology-diseases.js');

            this.systems = systemsModule.default || systemsModule.systems;

            // Combine all categories
            const cvCategories = cvCategoriesModule.default || cvCategoriesModule.cvCategories;
            const respiratoryCategories = respiratoryCategoriesModule.default || respiratoryCategoriesModule.respiratoryCategories;
            const giCategories = giCategoriesModule.default || giCategoriesModule.gastrointestinalCategories;
            const psychiatryCategories = psychiatryCategoriesModule.default || psychiatryCategoriesModule.psychiatryCategories;
            const hematologyOncologyCategories = hematologyOncologyCategoriesModule.default || hematologyOncologyCategoriesModule.hematologyOncologyCategories;
            const renalCategories = renalCategoriesModule.default || renalCategoriesModule.renalCategories;
            const endocrineCategories = endocrineCategoriesModule.default || endocrineCategoriesModule.endocrineCategories;
            const neurologyCategories = neurologyCategoriesModule.default || neurologyCategoriesModule.neurologyCategories;
            const rheumatologyCategories = rheumatologyCategoriesModule.default || rheumatologyCategoriesModule.rheumatologyCategories;
            const infectiousDiseaseCategories = infectiousDiseaseCategoriesModule.default || infectiousDiseaseCategoriesModule.infectiousDiseaseCategories;
            const musculoskeletalCategories = musculoskeletalCategoriesModule.default || musculoskeletalCategoriesModule.musculoskeletalCategories;
            const dermatologyCategories = dermatologyCategoriesModule.default || dermatologyCategoriesModule.dermatologyCategories;
            const genitourinaryCategories = genitourinaryCategoriesModule.default || genitourinaryCategoriesModule.genitourinaryCategories;
            const reproductiveObgynCategories = reproductiveObgynCategoriesModule.default || reproductiveObgynCategoriesModule.reproductiveObgynCategories;
            const ophthalmologyCategories = ophthalmologyCategoriesModule.default || ophthalmologyCategoriesModule.ophthalmologyCategories;
            const entCategories = entCategoriesModule.default || entCategoriesModule.entCategories;
            const immunologyCategories = immunologyCategoriesModule.default || immunologyCategoriesModule.immunologyCategories;
            const pediatricsCategories = pediatricsCategoriesModule.default || pediatricsCategoriesModule.pediatricsCategories;
            const toxicologyCategories = toxicologyCategoriesModule.default || toxicologyCategoriesModule.toxicologyCategories;
            this.categories = [...cvCategories, ...respiratoryCategories, ...giCategories, ...psychiatryCategories, ...hematologyOncologyCategories, ...renalCategories, ...endocrineCategories, ...neurologyCategories, ...rheumatologyCategories, ...infectiousDiseaseCategories, ...musculoskeletalCategories, ...dermatologyCategories, ...genitourinaryCategories, ...reproductiveObgynCategories, ...ophthalmologyCategories, ...entCategories, ...immunologyCategories, ...pediatricsCategories, ...toxicologyCategories];

            // Combine all diseases
            const cvDiseases = cvDiseasesModule.default || cvDiseasesModule.cvDiseases;
            const respiratoryDiseases = respiratoryDiseasesModule.default || respiratoryDiseasesModule.respiratoryDiseases;
            const giDiseases = giDiseasesModule.default || giDiseasesModule.gastrointestinalDiseases;
            const psychiatryDiseases = psychiatryDiseasesModule.default || psychiatryDiseasesModule.psychiatryDiseases;
            const hematologyOncologyDiseases = hematologyOncologyDiseasesModule.default || hematologyOncologyDiseasesModule.hematologyOncologyDiseases;
            const renalDiseases = renalDiseasesModule.default || renalDiseasesModule.renalDiseases;
            const endocrineDiseases = endocrineDiseasesModule.default || endocrineDiseasesModule.endocrineDiseases;
            const neurologyDiseases = neurologyDiseasesModule.default || neurologyDiseasesModule.neurologyDiseases;
            const rheumatologyDiseases = rheumatologyDiseasesModule.default || rheumatologyDiseasesModule.rheumatologyDiseases;
            const infectiousDiseases = infectiousDiseaseDiseasesModule.default || infectiousDiseaseDiseasesModule.infectiousDiseases;
            const musculoskeletalDiseases = musculoskeletalDiseasesModule.default || musculoskeletalDiseasesModule.musculoskeletalDiseases;
            const dermatologyDiseases = dermatologyDiseasesModule.default || dermatologyDiseasesModule.dermatologyDiseases;
            const genitourinaryDiseases = genitourinaryDiseasesModule.default || genitourinaryDiseasesModule.genitourinaryDiseases;
            const reproductiveObgynDiseases = reproductiveObgynDiseasesModule.default || reproductiveObgynDiseasesModule.reproductiveObgynDiseases;
            const ophthalmologyDiseases = ophthalmologyDiseasesModule.default || ophthalmologyDiseasesModule.ophthalmologyDiseases;
            const entDiseases = entDiseasesModule.default || entDiseasesModule.entDiseases;
            const immunologyDiseases = immunologyDiseasesModule.default || immunologyDiseasesModule.immunologyDiseases;
            const pediatricsDiseases = pediatricsDiseasesModule.default || pediatricsDiseasesModule.pediatricsDiseases;
            const toxicologyDiseases = toxicologyDiseasesModule.default || toxicologyDiseasesModule.toxicologyDiseases;
            this.diseases = [...cvDiseases, ...respiratoryDiseases, ...giDiseases, ...psychiatryDiseases, ...hematologyOncologyDiseases, ...renalDiseases, ...endocrineDiseases, ...neurologyDiseases, ...rheumatologyDiseases, ...infectiousDiseases, ...musculoskeletalDiseases, ...dermatologyDiseases, ...genitourinaryDiseases, ...reproductiveObgynDiseases, ...ophthalmologyDiseases, ...entDiseases, ...immunologyDiseases, ...pediatricsDiseases, ...toxicologyDiseases];

            // Build indexes
            this.buildIndexes();

            this.isLoaded = true;
            console.log('Data loaded successfully:', {
                systems: this.systems.length,
                categories: this.categories.length,
                diseases: this.diseases.length
            });

            return true;
        } catch (error) {
            console.error('Failed to load data:', error);
            return false;
        }
    }

    buildIndexes() {
        // Build primary indexes
        this.systems.forEach(system => {
            this.systemIndex.set(system.id, system);
        });

        this.categories.forEach(category => {
            this.categoryIndex.set(category.id, category);
        });

        this.diseases.forEach(disease => {
            this.diseaseIndex.set(disease.id, disease);
        });

        // Build reverse indexes
        this.buildDiseasesByCategoryIndex();
        this.buildDiseasesBySystemIndex();
        this.buildDiseasesByTagIndex();
        this.buildDiseasesBySymptomIndex();
    }

    buildDiseasesByCategoryIndex() {
        this.diseasesByCategory.clear();

        this.diseases.forEach(disease => {
            disease.categories.forEach(categoryId => {
                if (!this.diseasesByCategory.has(categoryId)) {
                    this.diseasesByCategory.set(categoryId, []);
                }
                this.diseasesByCategory.get(categoryId).push(disease);
            });
        });
    }

    buildDiseasesBySystemIndex() {
        this.diseasesBySystem.clear();

        this.diseases.forEach(disease => {
            // Normalize to systems array (support multiple systems per disease)
            // Same pattern as categories - diseases can belong to multiple systems
            if (!disease.systems) {
                // Old format: single system string → convert to array
                disease.systems = disease.system ? [disease.system] : [];
            } else if (!Array.isArray(disease.systems)) {
                // Ensure it's an array
                disease.systems = [disease.systems];
            }

            // Set system to first for backward compatibility
            disease.system = disease.systems[0] || null;

            // Add disease to index for EACH of its systems
            disease.systems.forEach(systemId => {
                if (!this.diseasesBySystem.has(systemId)) {
                    this.diseasesBySystem.set(systemId, []);
                }
                this.diseasesBySystem.get(systemId).push(disease);
            });
        });
    }

    buildDiseasesByTagIndex() {
        this.diseasesByTag.clear();

        this.diseases.forEach(disease => {
            if (disease.tags) {
                disease.tags.forEach(tag => {
                    if (!this.diseasesByTag.has(tag)) {
                        this.diseasesByTag.set(tag, []);
                    }
                    this.diseasesByTag.get(tag).push(disease);
                });
            }
        });
    }

    buildDiseasesBySymptomIndex() {
        this.diseasesBySymptom.clear();

        this.diseases.forEach(disease => {
            if (disease.symptoms) {
                disease.symptoms.forEach(symptom => {
                    if (!this.diseasesBySymptom.has(symptom)) {
                        this.diseasesBySymptom.set(symptom, []);
                    }
                    this.diseasesBySymptom.get(symptom).push(disease);
                });
            }
        });
    }

    // Getters for entities by ID
    getSystem(systemId) {
        return this.systemIndex.get(systemId);
    }

    getCategory(categoryId) {
        return this.categoryIndex.get(categoryId);
    }

    getDisease(diseaseId) {
        return this.diseaseIndex.get(diseaseId);
    }

    // Get all entities
    getAllSystems() {
        return this.systems;
    }

    getAllCategories() {
        return this.categories;
    }

    getAllDiseases() {
        return this.diseases;
    }

    // Get diseases by various criteria
    getDiseasesForCategory(categoryId) {
        return this.diseasesByCategory.get(categoryId) || [];
    }

    getDiseasesForSystem(systemId) {
        return this.diseasesBySystem.get(systemId) || [];
    }

    getDiseasesWithTag(tag) {
        return this.diseasesByTag.get(tag) || [];
    }

    getDiseasesWithSymptom(symptom) {
        return this.diseasesBySymptom.get(symptom) || [];
    }

    // Get categories for a system (with disease counts)
    getCategoriesForSystem(systemId) {
        const system = this.getSystem(systemId);
        if (!system || !system.categoryIds) return [];

        return system.categoryIds.map(catId => {
            const category = this.getCategory(catId);
            const diseases = this.getDiseasesForCategory(catId);
            return {
                ...category,
                diseaseCount: diseases.length
            };
        });
    }

    // Search functionality
    search(query) {
        if (!query || query.length < 2) return [];

        const lowerQuery = query.toLowerCase();
        const results = [];

        // Search diseases
        this.diseases.forEach(disease => {
            let score = 0;

            // Name match (highest priority)
            if (disease.name.toLowerCase().includes(lowerQuery)) {
                score += 10;
            }

            // ID match
            if (disease.id.includes(lowerQuery)) {
                score += 5;
            }

            // Tag match
            if (disease.tags && disease.tags.some(tag => tag.includes(lowerQuery))) {
                score += 3;
            }

            // Definition match
            if (disease.detail && disease.detail.definition &&
                disease.detail.definition.toLowerCase().includes(lowerQuery)) {
                score += 2;
            }

            if (score > 0) {
                results.push({
                    type: 'disease',
                    entity: disease,
                    score: score
                });
            }
        });

        // Search categories
        this.categories.forEach(category => {
            if (category.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'category',
                    entity: category,
                    score: 5
                });
            }
        });

        // Search systems
        this.systems.forEach(system => {
            if (system.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'system',
                    entity: system,
                    score: 3
                });
            }
        });

        // Sort by score (descending)
        results.sort((a, b) => b.score - a.score);

        return results;
    }

    // Filter diseases
    filterDiseases(filters) {
        let results = [...this.diseases];

        if (filters.severity) {
            results = results.filter(d => d.severity === filters.severity);
        }

        if (filters.acuity) {
            results = results.filter(d => d.acuity === filters.acuity);
        }

        if (filters.system) {
            results = results.filter(d => d.system === filters.system);
        }

        if (filters.category) {
            results = results.filter(d => d.categories.includes(filters.category));
        }

        if (filters.tag) {
            results = results.filter(d => d.tags && d.tags.includes(filters.tag));
        }

        if (filters.symptom) {
            results = results.filter(d => d.symptoms && d.symptoms.includes(filters.symptom));
        }

        return results;
    }

    // Get all unique tags
    getAllTags() {
        return Array.from(this.diseasesByTag.keys()).sort();
    }

    // Get all unique symptoms
    getAllSymptoms() {
        return Array.from(this.diseasesBySymptom.keys()).sort();
    }

    // Statistics
    getStats() {
        return {
            totalSystems: this.systems.length,
            totalCategories: this.categories.length,
            totalDiseases: this.diseases.length,
            totalTags: this.diseasesByTag.size,
            totalSymptoms: this.diseasesBySymptom.size,
            diseasesPerCategory: Array.from(this.diseasesByCategory.entries())
                .map(([catId, diseases]) => {
                    const category = this.getCategory(catId);
                    return {
                        category: category ? category.name : catId,
                        count: diseases.length
                    };
                })
                .filter(item => item.category) // Filter out any null entries
        };
    }
}

// Export singleton instance
const dataLoader = new DataLoader();
export default dataLoader;

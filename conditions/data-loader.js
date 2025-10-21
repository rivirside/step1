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

            this.systems = systemsModule.default || systemsModule.systems;

            // Combine all categories
            const cvCategories = cvCategoriesModule.default || cvCategoriesModule.cvCategories;
            const respiratoryCategories = respiratoryCategoriesModule.default || respiratoryCategoriesModule.respiratoryCategories;
            const giCategories = giCategoriesModule.default || giCategoriesModule.gastrointestinalCategories;
            const psychiatryCategories = psychiatryCategoriesModule.default || psychiatryCategoriesModule.psychiatryCategories;
            this.categories = [...cvCategories, ...respiratoryCategories, ...giCategories, ...psychiatryCategories];

            // Combine all diseases
            const cvDiseases = cvDiseasesModule.default || cvDiseasesModule.cvDiseases;
            const respiratoryDiseases = respiratoryDiseasesModule.default || respiratoryDiseasesModule.respiratoryDiseases;
            const giDiseases = giDiseasesModule.default || giDiseasesModule.gastrointestinalDiseases;
            const psychiatryDiseases = psychiatryDiseasesModule.default || psychiatryDiseasesModule.psychiatryDiseases;
            this.diseases = [...cvDiseases, ...respiratoryDiseases, ...giDiseases, ...psychiatryDiseases];

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
            const systemId = disease.system;
            if (!this.diseasesBySystem.has(systemId)) {
                this.diseasesBySystem.set(systemId, []);
            }
            this.diseasesBySystem.get(systemId).push(disease);
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

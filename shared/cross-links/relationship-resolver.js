/**
 * RELATIONSHIP RESOLVER
 *
 * Runtime resolution of cross-references between conditions and medications.
 * Provides methods to query the relationships database efficiently.
 */

import { relationships, relationshipTypes, priorityLevels } from './relationships.js';

class RelationshipResolver {
    constructor() {
        // Indexes for fast lookup (built on first query)
        this.conditionToMedsIndex = null;
        this.medToConditionsIndex = null;
        this.initialized = false;
    }

    /**
     * Build indexes for fast lookup
     */
    buildIndexes() {
        if (this.initialized) return;

        console.log('Building relationship indexes...');

        this.conditionToMedsIndex = new Map();
        this.medToConditionsIndex = new Map();

        relationships.forEach(rel => {
            // Only process bidirectional relationships for now
            if (rel.direction !== 'bidirectional') return;

            // Forward index: condition → medications
            if (rel.source.type === 'condition' && rel.target.type === 'drug') {
                if (!this.conditionToMedsIndex.has(rel.source.id)) {
                    this.conditionToMedsIndex.set(rel.source.id, []);
                }
                this.conditionToMedsIndex.get(rel.source.id).push({
                    drugId: rel.target.id,
                    drugName: rel.target.name,
                    relationshipType: rel.relationshipType,
                    context: rel.context,
                    priority: rel.priority
                });

                // Reverse index: medication → conditions
                if (!this.medToConditionsIndex.has(rel.target.id)) {
                    this.medToConditionsIndex.set(rel.target.id, []);
                }
                this.medToConditionsIndex.get(rel.target.id).push({
                    conditionId: rel.source.id,
                    conditionName: rel.source.name,
                    relationshipType: rel.relationshipType,
                    context: rel.context,
                    priority: rel.priority
                });
            }
        });

        this.initialized = true;
        console.log(`✓ Indexed ${relationships.length} relationships`);
        console.log(`  - ${this.conditionToMedsIndex.size} conditions linked`);
        console.log(`  - ${this.medToConditionsIndex.size} medications linked`);
    }

    /**
     * Get all medications related to a condition
     * @param {string} conditionId - Condition ID (e.g., 'stemi')
     * @returns {Array} Array of medication relationships
     */
    getMedicationsForCondition(conditionId) {
        this.buildIndexes();
        return this.conditionToMedsIndex.get(conditionId) || [];
    }

    /**
     * Get all conditions related to a medication
     * @param {string} drugId - Drug ID (e.g., 'aspirin')
     * @returns {Array} Array of condition relationships
     */
    getConditionsForMedication(drugId) {
        this.buildIndexes();
        return this.medToConditionsIndex.get(drugId) || [];
    }

    /**
     * Get medications for a condition, grouped by relationship type
     * @param {string} conditionId - Condition ID
     * @returns {Object} Medications grouped by type (acute, chronic, etc.)
     */
    getMedicationsGroupedByType(conditionId) {
        const meds = this.getMedicationsForCondition(conditionId);

        return {
            acuteTreatment: meds.filter(m => m.relationshipType === 'acute-treatment'),
            chronicManagement: meds.filter(m => m.relationshipType === 'chronic-management'),
            prophylaxis: meds.filter(m => m.relationshipType === 'prophylaxis'),
            contraindicated: meds.filter(m => m.relationshipType === 'contraindicated'),
            caution: meds.filter(m => m.relationshipType === 'caution')
        };
    }

    /**
     * Get conditions for a medication, grouped by relationship type
     * @param {string} drugId - Drug ID
     * @returns {Object} Conditions grouped by type
     */
    getConditionsGroupedByType(drugId) {
        const conditions = this.getConditionsForMedication(drugId);

        return {
            acuteTreatment: conditions.filter(c => c.relationshipType === 'acute-treatment'),
            chronicManagement: conditions.filter(c => c.relationshipType === 'chronic-management'),
            prophylaxis: conditions.filter(c => c.relationshipType === 'prophylaxis'),
            contraindicated: conditions.filter(c => c.relationshipType === 'contraindicated'),
            caution: conditions.filter(c => c.relationshipType === 'caution')
        };
    }

    /**
     * Get first-line medications for a condition
     * @param {string} conditionId - Condition ID
     * @returns {Array} First-line medications
     */
    getFirstLineMedications(conditionId) {
        const meds = this.getMedicationsForCondition(conditionId);
        return meds.filter(m => m.priority === 'first-line');
    }

    /**
     * Get medications by specific relationship type
     * @param {string} conditionId - Condition ID
     * @param {string} relationshipType - Type (e.g., 'acute-treatment')
     * @returns {Array} Filtered medications
     */
    getMedicationsByType(conditionId, relationshipType) {
        const meds = this.getMedicationsForCondition(conditionId);
        return meds.filter(m => m.relationshipType === relationshipType);
    }

    /**
     * Get conditions by specific relationship type
     * @param {string} drugId - Drug ID
     * @param {string} relationshipType - Type (e.g., 'contraindicated')
     * @returns {Array} Filtered conditions
     */
    getConditionsByType(drugId, relationshipType) {
        const conditions = this.getConditionsForMedication(drugId);
        return conditions.filter(c => c.relationshipType === relationshipType);
    }

    /**
     * Check if a condition has any related medications
     * @param {string} conditionId - Condition ID
     * @returns {boolean}
     */
    hasRelatedMedications(conditionId) {
        this.buildIndexes();
        return this.conditionToMedsIndex.has(conditionId);
    }

    /**
     * Check if a medication has any related conditions
     * @param {string} drugId - Drug ID
     * @returns {boolean}
     */
    hasRelatedConditions(drugId) {
        this.buildIndexes();
        return this.medToConditionsIndex.has(drugId);
    }

    /**
     * Get statistics about relationships
     * @returns {Object} Stats
     */
    getStats() {
        this.buildIndexes();
        return {
            totalRelationships: relationships.length,
            conditionsWithLinks: this.conditionToMedsIndex.size,
            medicationsWithLinks: this.medToConditionsIndex.size
        };
    }
}

// Export singleton instance
export default new RelationshipResolver();

/**
 * UNIFIED RELATIONSHIPS DATABASE
 *
 * Central source of truth for all cross-references between:
 * - Conditions ↔ Medications
 * - Conditions ↔ Bugs (future)
 * - Bugs ↔ Medications (future)
 *
 * This database supports bidirectional navigation and is designed
 * to scale to three-way relationships when Bugs Explorer is added.
 */

// Relationship types and their descriptions
export const relationshipTypes = {
    // Condition ↔ Drug
    'acute-treatment': 'Used in acute/emergency management',
    'chronic-management': 'Long-term disease management',
    'prophylaxis': 'Preventive therapy',
    'contraindicated': 'Drug is contraindicated in this condition',
    'caution': 'Use with caution in this condition',

    // Condition ↔ Bug (future)
    'caused-by': 'Condition is caused by this pathogen',
    'complicated-by': 'Condition may be complicated by this infection',

    // Bug ↔ Drug (future)
    'susceptible-to': 'Pathogen is susceptible to this drug',
    'resistant-to': 'Pathogen shows resistance to this drug',
    'first-line-for': 'Drug is first-line treatment for this pathogen',

    // Three-way (future)
    'treatment-pathway': 'Complete treatment pathway (condition → bug → drug)'
};

// Priority levels for relationships
export const priorityLevels = {
    'first-line': 'Primary treatment option',
    'second-line': 'Alternative if first-line fails or contraindicated',
    'alternative': 'Less commonly used option',
    'avoid': 'Generally avoided'
};

/**
 * Main relationships array
 * Each relationship connects two entities (source → target)
 * Direction: 'bidirectional' means both entities link to each other
 */
export const relationships = [
    // ============================================
    // STEMI (ST-Elevation Myocardial Infarction)
    // ============================================
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'aspirin', name: 'Aspirin' },
        relationshipType: 'acute-treatment',
        context: 'Chew 325mg immediately. Part of MONA protocol. Irreversibly inhibits platelet aggregation.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'clopidogrel', name: 'Clopidogrel' },
        relationshipType: 'acute-treatment',
        context: 'Dual antiplatelet therapy. 600mg loading dose, then 75mg daily for 12 months post-PCI.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'nitroglycerin', name: 'Nitroglycerin' },
        relationshipType: 'acute-treatment',
        context: 'Sublingual then IV if persistent pain. Avoid in RV infarction (preload dependent).',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'morphine', name: 'Morphine' },
        relationshipType: 'acute-treatment',
        context: 'For persistent chest pain not relieved by nitroglycerin. Use cautiously (may worsen outcomes in some studies).',
        priority: 'second-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'metoprolol', name: 'Metoprolol' },
        relationshipType: 'chronic-management',
        context: 'Start within 24h if hemodynamically stable. Proven mortality benefit. Continue indefinitely.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'lisinopril', name: 'Lisinopril' },
        relationshipType: 'chronic-management',
        context: 'Start within 24h, especially if anterior MI or EF <40%. Reduces remodeling and mortality.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'stemi', name: 'STEMI' },
        target: { type: 'drug', id: 'atorvastatin', name: 'Atorvastatin' },
        relationshipType: 'chronic-management',
        context: 'High-intensity statin, 80mg daily. Start immediately, continue indefinitely for plaque stabilization.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // HEART FAILURE (SYSTOLIC)
    // ============================================
    {
        source: { type: 'condition', id: 'heart-failure-systolic', name: 'Heart Failure (Systolic)' },
        target: { type: 'drug', id: 'lisinopril', name: 'Lisinopril' },
        relationshipType: 'chronic-management',
        context: 'ACE inhibitor reduces mortality and hospitalizations. Cornerstone of HFrEF therapy.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'heart-failure-systolic', name: 'Heart Failure (Systolic)' },
        target: { type: 'drug', id: 'carvedilol', name: 'Carvedilol' },
        relationshipType: 'chronic-management',
        context: 'Beta-blocker with proven mortality benefit in HFrEF. Titrate slowly to avoid decompensation.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'heart-failure-systolic', name: 'Heart Failure (Systolic)' },
        target: { type: 'drug', id: 'spironolactone', name: 'Spironolactone' },
        relationshipType: 'chronic-management',
        context: 'Aldosterone antagonist if EF <35%. Reduces mortality in NYHA class III-IV.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'heart-failure-systolic', name: 'Heart Failure (Systolic)' },
        target: { type: 'drug', id: 'furosemide', name: 'Furosemide' },
        relationshipType: 'acute-treatment',
        context: 'Loop diuretic for acute volume overload. Does not improve mortality, only symptoms.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // HYPERTENSION
    // ============================================
    {
        source: { type: 'condition', id: 'hypertension', name: 'Hypertension' },
        target: { type: 'drug', id: 'lisinopril', name: 'Lisinopril' },
        relationshipType: 'chronic-management',
        context: 'First-line ACE inhibitor, especially in diabetics or chronic kidney disease. Renoprotective.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'hypertension', name: 'Hypertension' },
        target: { type: 'drug', id: 'amlodipine', name: 'Amlodipine' },
        relationshipType: 'chronic-management',
        context: 'Dihydropyridine CCB. First-line, especially in African Americans or elderly.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'hypertension', name: 'Hypertension' },
        target: { type: 'drug', id: 'hydrochlorothiazide', name: 'Hydrochlorothiazide' },
        relationshipType: 'chronic-management',
        context: 'Thiazide diuretic. First-line monotherapy or combination with ACE-I/ARB.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'hypertension', name: 'Hypertension' },
        target: { type: 'drug', id: 'metoprolol', name: 'Metoprolol' },
        relationshipType: 'chronic-management',
        context: 'Beta-blocker. Not first-line unless compelling indication (MI, HF). Use with caution in COPD/asthma.',
        priority: 'second-line',
        direction: 'bidirectional'
    },

    // ============================================
    // ASTHMA
    // ============================================
    {
        source: { type: 'condition', id: 'asthma', name: 'Asthma' },
        target: { type: 'drug', id: 'albuterol', name: 'Albuterol' },
        relationshipType: 'acute-treatment',
        context: 'Short-acting beta-2 agonist (SABA). Rescue inhaler for acute bronchospasm.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'asthma', name: 'Asthma' },
        target: { type: 'drug', id: 'fluticasone', name: 'Fluticasone' },
        relationshipType: 'chronic-management',
        context: 'Inhaled corticosteroid (ICS). Controller medication for persistent asthma. Reduces inflammation.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'asthma', name: 'Asthma' },
        target: { type: 'drug', id: 'montelukast', name: 'Montelukast' },
        relationshipType: 'chronic-management',
        context: 'Leukotriene receptor antagonist. Add-on therapy or alternative to ICS in mild asthma.',
        priority: 'second-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'asthma', name: 'Asthma' },
        target: { type: 'drug', id: 'prednisone', name: 'Prednisone' },
        relationshipType: 'acute-treatment',
        context: 'Oral corticosteroid for severe exacerbations. 5-7 day course.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'asthma', name: 'Asthma' },
        target: { type: 'drug', id: 'metoprolol', name: 'Metoprolol' },
        relationshipType: 'contraindicated',
        context: 'Beta-blockers can cause bronchoconstriction. Avoid in asthma, even cardioselective ones.',
        priority: 'avoid',
        direction: 'bidirectional'
    },

    // ============================================
    // COPD
    // ============================================
    {
        source: { type: 'condition', id: 'copd', name: 'COPD' },
        target: { type: 'drug', id: 'albuterol', name: 'Albuterol' },
        relationshipType: 'acute-treatment',
        context: 'SABA for acute bronchospasm and exacerbations.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'copd', name: 'COPD' },
        target: { type: 'drug', id: 'ipratropium', name: 'Ipratropium' },
        relationshipType: 'chronic-management',
        context: 'Short-acting muscarinic antagonist (SAMA). Often combined with albuterol.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'copd', name: 'COPD' },
        target: { type: 'drug', id: 'tiotropium', name: 'Tiotropium' },
        relationshipType: 'chronic-management',
        context: 'Long-acting muscarinic antagonist (LAMA). First-line for stable COPD.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // GERD
    // ============================================
    {
        source: { type: 'condition', id: 'gerd', name: 'GERD' },
        target: { type: 'drug', id: 'omeprazole', name: 'Omeprazole' },
        relationshipType: 'chronic-management',
        context: 'Proton pump inhibitor (PPI). First-line for GERD, esophagitis, peptic ulcer disease.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'gerd', name: 'GERD' },
        target: { type: 'drug', id: 'famotidine', name: 'Famotidine' },
        relationshipType: 'chronic-management',
        context: 'H2 receptor antagonist. Less potent than PPIs. Alternative for mild GERD.',
        priority: 'second-line',
        direction: 'bidirectional'
    },

    // ============================================
    // MAJOR DEPRESSIVE DISORDER
    // ============================================
    {
        source: { type: 'condition', id: 'major-depressive-disorder', name: 'Major Depressive Disorder' },
        target: { type: 'drug', id: 'sertraline', name: 'Sertraline' },
        relationshipType: 'chronic-management',
        context: 'SSRI. First-line for depression. Favorable side effect profile.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'major-depressive-disorder', name: 'Major Depressive Disorder' },
        target: { type: 'drug', id: 'fluoxetine', name: 'Fluoxetine' },
        relationshipType: 'chronic-management',
        context: 'SSRI with long half-life. Good for patients with adherence issues.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'major-depressive-disorder', name: 'Major Depressive Disorder' },
        target: { type: 'drug', id: 'bupropion', name: 'Bupropion' },
        relationshipType: 'chronic-management',
        context: 'NDRI. No sexual side effects. Also helpful for smoking cessation.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // SCHIZOPHRENIA
    // ============================================
    {
        source: { type: 'condition', id: 'schizophrenia', name: 'Schizophrenia' },
        target: { type: 'drug', id: 'haloperidol', name: 'Haloperidol' },
        relationshipType: 'chronic-management',
        context: 'Typical antipsychotic. High potency D2 antagonist. High risk of EPS.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'schizophrenia', name: 'Schizophrenia' },
        target: { type: 'drug', id: 'risperidone', name: 'Risperidone' },
        relationshipType: 'chronic-management',
        context: 'Atypical antipsychotic. Lower EPS risk than typicals. Can cause hyperprolactinemia.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'schizophrenia', name: 'Schizophrenia' },
        target: { type: 'drug', id: 'clozapine', name: 'Clozapine' },
        relationshipType: 'chronic-management',
        context: 'Most effective antipsychotic for treatment-resistant schizophrenia. Requires monitoring (agranulocytosis risk).',
        priority: 'second-line',
        direction: 'bidirectional'
    }

    // TODO: Add more relationships as content expands
    // Prioritize high-yield conditions:
    // - Diabetes Type 2 → Metformin, Insulin
    // - Atrial Fibrillation → Warfarin, Apixaban, Metoprolol
    // - DVT/PE → Heparin, Warfarin, Apixaban
    // - Pneumonia → Azithromycin, Ceftriaxone
    // - UTI → Nitrofurantoin, TMP-SMX
    // - Seizures → Levetiracetam, Phenytoin, Valproic acid
];

/**
 * Statistics about current relationships
 */
export function getRelationshipStats() {
    const conditionIds = new Set();
    const drugIds = new Set();
    const typeCount = {};

    relationships.forEach(rel => {
        if (rel.source.type === 'condition') conditionIds.add(rel.source.id);
        if (rel.target.type === 'drug') drugIds.add(rel.target.id);

        typeCount[rel.relationshipType] = (typeCount[rel.relationshipType] || 0) + 1;
    });

    return {
        totalRelationships: relationships.length,
        conditionsLinked: conditionIds.size,
        drugsLinked: drugIds.size,
        byType: typeCount
    };
}

export default relationships;

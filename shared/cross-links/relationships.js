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
    },

    // ============================================
    // DIABETES MELLITUS TYPE 2
    // ============================================
    {
        source: { type: 'condition', id: 'diabetes-mellitus-type-2', name: 'Diabetes Mellitus Type 2' },
        target: { type: 'drug', id: 'metformin', name: 'Metformin' },
        relationshipType: 'chronic-management',
        context: 'First-line for T2DM. Decreases hepatic gluconeogenesis. Weight neutral. Reduces macrovascular complications.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'diabetes-mellitus-type-2', name: 'Diabetes Mellitus Type 2' },
        target: { type: 'drug', id: 'insulin', name: 'Insulin' },
        relationshipType: 'chronic-management',
        context: 'For uncontrolled T2DM despite oral agents, or in T1DM. Multiple formulations (rapid, short, intermediate, long-acting).',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'diabetes-mellitus-type-2', name: 'Diabetes Mellitus Type 2' },
        target: { type: 'drug', id: 'glipizide', name: 'Glipizide' },
        relationshipType: 'chronic-management',
        context: 'Sulfonylurea. Stimulates insulin secretion. Risk of hypoglycemia and weight gain.',
        priority: 'second-line',
        direction: 'bidirectional'
    },

    // ============================================
    // ATRIAL FIBRILLATION
    // ============================================
    {
        source: { type: 'condition', id: 'atrial-fibrillation', name: 'Atrial Fibrillation' },
        target: { type: 'drug', id: 'warfarin', name: 'Warfarin' },
        relationshipType: 'chronic-management',
        context: 'Vitamin K antagonist for stroke prevention. Requires INR monitoring (target 2-3). Multiple drug/food interactions.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'atrial-fibrillation', name: 'Atrial Fibrillation' },
        target: { type: 'drug', id: 'apixaban', name: 'Apixaban' },
        relationshipType: 'chronic-management',
        context: 'Direct oral anticoagulant (DOAC). Factor Xa inhibitor. No monitoring needed. Preferred over warfarin in most patients.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'atrial-fibrillation', name: 'Atrial Fibrillation' },
        target: { type: 'drug', id: 'metoprolol', name: 'Metoprolol' },
        relationshipType: 'chronic-management',
        context: 'Beta-blocker for rate control. First-line for ventricular rate management.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'atrial-fibrillation', name: 'Atrial Fibrillation' },
        target: { type: 'drug', id: 'diltiazem', name: 'Diltiazem' },
        relationshipType: 'chronic-management',
        context: 'Non-dihydropyridine CCB for rate control. Alternative to beta-blockers.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'atrial-fibrillation', name: 'Atrial Fibrillation' },
        target: { type: 'drug', id: 'amiodarone', name: 'Amiodarone' },
        relationshipType: 'chronic-management',
        context: 'Class III antiarrhythmic for rhythm control. Multiple toxicities (pulmonary, thyroid, hepatic).',
        priority: 'second-line',
        direction: 'bidirectional'
    },

    // ============================================
    // DVT/PE (VENOUS THROMBOEMBOLISM)
    // ============================================
    {
        source: { type: 'condition', id: 'deep-vein-thrombosis', name: 'Deep Vein Thrombosis' },
        target: { type: 'drug', id: 'heparin', name: 'Heparin' },
        relationshipType: 'acute-treatment',
        context: 'Unfractionated heparin for acute DVT/PE. Immediate anticoagulation while bridging to warfarin. Monitor PTT.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'deep-vein-thrombosis', name: 'Deep Vein Thrombosis' },
        target: { type: 'drug', id: 'warfarin', name: 'Warfarin' },
        relationshipType: 'chronic-management',
        context: 'Long-term anticoagulation for VTE. Minimum 3 months, may be indefinite if unprovoked.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'deep-vein-thrombosis', name: 'Deep Vein Thrombosis' },
        target: { type: 'drug', id: 'apixaban', name: 'Apixaban' },
        relationshipType: 'chronic-management',
        context: 'DOAC alternative to warfarin. Can be used for acute treatment and long-term therapy.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'deep-vein-thrombosis', name: 'Deep Vein Thrombosis' },
        target: { type: 'drug', id: 'rivaroxaban', name: 'Rivaroxaban' },
        relationshipType: 'chronic-management',
        context: 'Factor Xa inhibitor. Can be used as monotherapy for VTE (no need for heparin bridge).',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'pulmonary-embolism', name: 'Pulmonary Embolism' },
        target: { type: 'drug', id: 'heparin', name: 'Heparin' },
        relationshipType: 'acute-treatment',
        context: 'Immediate anticoagulation for acute PE. Consider thrombolytics if massive PE with hemodynamic instability.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'pulmonary-embolism', name: 'Pulmonary Embolism' },
        target: { type: 'drug', id: 'warfarin', name: 'Warfarin' },
        relationshipType: 'chronic-management',
        context: 'Long-term anticoagulation post-PE. Duration depends on risk factors and provocation.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // COMMUNITY-ACQUIRED PNEUMONIA
    // ============================================
    {
        source: { type: 'condition', id: 'pneumonia-community-acquired', name: 'Community-Acquired Pneumonia' },
        target: { type: 'drug', id: 'azithromycin', name: 'Azithromycin' },
        relationshipType: 'acute-treatment',
        context: 'Macrolide for outpatient CAP. Covers atypicals (Mycoplasma, Chlamydia, Legionella).',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'pneumonia-community-acquired', name: 'Community-Acquired Pneumonia' },
        target: { type: 'drug', id: 'ceftriaxone', name: 'Ceftriaxone' },
        relationshipType: 'acute-treatment',
        context: 'Third-generation cephalosporin for inpatient CAP. Covers S. pneumoniae. Often combined with azithromycin.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'pneumonia-community-acquired', name: 'Community-Acquired Pneumonia' },
        target: { type: 'drug', id: 'levofloxacin', name: 'Levofloxacin' },
        relationshipType: 'acute-treatment',
        context: 'Respiratory fluoroquinolone. Monotherapy option for CAP (covers typical and atypical).',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // URINARY TRACT INFECTION
    // ============================================
    {
        source: { type: 'condition', id: 'urinary-tract-infection', name: 'Urinary Tract Infection' },
        target: { type: 'drug', id: 'nitrofurantoin', name: 'Nitrofurantoin' },
        relationshipType: 'acute-treatment',
        context: 'First-line for uncomplicated cystitis in women. 5-7 day course. Avoid in pyelonephritis (poor tissue penetration).',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'urinary-tract-infection', name: 'Urinary Tract Infection' },
        target: { type: 'drug', id: 'trimethoprim-sulfamethoxazole', name: 'Trimethoprim-Sulfamethoxazole' },
        relationshipType: 'acute-treatment',
        context: 'TMP-SMX for uncomplicated UTI. Check local resistance patterns. Avoid if resistance >20%.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'urinary-tract-infection', name: 'Urinary Tract Infection' },
        target: { type: 'drug', id: 'ciprofloxacin', name: 'Ciprofloxacin' },
        relationshipType: 'acute-treatment',
        context: 'Fluoroquinolone for complicated UTI or pyelonephritis. Not first-line for simple cystitis.',
        priority: 'second-line',
        direction: 'bidirectional'
    },

    // ============================================
    // SEIZURE DISORDERS / EPILEPSY
    // ============================================
    {
        source: { type: 'condition', id: 'seizures-generalized', name: 'Generalized Seizures' },
        target: { type: 'drug', id: 'levetiracetam', name: 'Levetiracetam' },
        relationshipType: 'chronic-management',
        context: 'Broad-spectrum AED. First-line for many seizure types. Favorable side effect profile, minimal drug interactions.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'seizures-generalized', name: 'Generalized Seizures' },
        target: { type: 'drug', id: 'valproic-acid', name: 'Valproic Acid' },
        relationshipType: 'chronic-management',
        context: 'Broad-spectrum AED. Effective for generalized seizures. Teratogenic - avoid in women of childbearing age.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'seizures-focal', name: 'Focal Seizures' },
        target: { type: 'drug', id: 'levetiracetam', name: 'Levetiracetam' },
        relationshipType: 'chronic-management',
        context: 'First-line for focal seizures. Well-tolerated, no hepatic metabolism.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'seizures-focal', name: 'Focal Seizures' },
        target: { type: 'drug', id: 'phenytoin', name: 'Phenytoin' },
        relationshipType: 'chronic-management',
        context: 'Older AED for focal seizures. Zero-order kinetics. Many drug interactions. Monitor levels.',
        priority: 'second-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'seizures-focal', name: 'Focal Seizures' },
        target: { type: 'drug', id: 'carbamazepine', name: 'Carbamazepine' },
        relationshipType: 'chronic-management',
        context: 'Effective for focal seizures and trigeminal neuralgia. Risk of aplastic anemia, SIADH.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'status-epilepticus', name: 'Status Epilepticus' },
        target: { type: 'drug', id: 'lorazepam', name: 'Lorazepam' },
        relationshipType: 'acute-treatment',
        context: 'Benzodiazepine for acute seizure termination. IV push, rapidly effective. First-line for status epilepticus.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // RHEUMATOID ARTHRITIS
    // ============================================
    {
        source: { type: 'condition', id: 'rheumatoid-arthritis', name: 'Rheumatoid Arthritis' },
        target: { type: 'drug', id: 'methotrexate', name: 'Methotrexate' },
        relationshipType: 'chronic-management',
        context: 'First-line DMARD for RA. Give with folic acid to reduce toxicity. Monitor LFTs, CBC.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'rheumatoid-arthritis', name: 'Rheumatoid Arthritis' },
        target: { type: 'drug', id: 'prednisone', name: 'Prednisone' },
        relationshipType: 'acute-treatment',
        context: 'Glucocorticoid for RA flares. Bridge therapy while waiting for DMARDs to work. Minimize chronic use.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // HYPOTHYROIDISM
    // ============================================
    {
        source: { type: 'condition', id: 'hypothyroidism', name: 'Hypothyroidism' },
        target: { type: 'drug', id: 'levothyroxine', name: 'Levothyroxine' },
        relationshipType: 'chronic-management',
        context: 'Synthetic T4 for thyroid hormone replacement. Take on empty stomach. Monitor TSH to adjust dose.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // HYPERTHYROIDISM / GRAVES DISEASE
    // ============================================
    {
        source: { type: 'condition', id: 'hyperthyroidism', name: 'Hyperthyroidism' },
        target: { type: 'drug', id: 'methimazole', name: 'Methimazole' },
        relationshipType: 'chronic-management',
        context: 'Thionamide antithyroid drug. Inhibits thyroid peroxidase. First-line for Graves disease.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'hyperthyroidism', name: 'Hyperthyroidism' },
        target: { type: 'drug', id: 'propylthiouracil', name: 'Propylthiouracil' },
        relationshipType: 'chronic-management',
        context: 'Thionamide. Preferred in pregnancy (1st trimester) and thyroid storm. Risk of hepatotoxicity.',
        priority: 'second-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'hyperthyroidism', name: 'Hyperthyroidism' },
        target: { type: 'drug', id: 'propranolol', name: 'Propranolol' },
        relationshipType: 'acute-treatment',
        context: 'Beta-blocker for symptomatic relief (tremor, palpitations, anxiety). Does not treat underlying hyperthyroidism.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // ANEMIA (IRON DEFICIENCY)
    // ============================================
    {
        source: { type: 'condition', id: 'anemia-iron-deficiency', name: 'Iron Deficiency Anemia' },
        target: { type: 'drug', id: 'ferrous-sulfate', name: 'Ferrous Sulfate' },
        relationshipType: 'chronic-management',
        context: 'Oral iron supplementation. First-line for iron deficiency anemia. Take with vitamin C for absorption.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // ANEMIA (B12 DEFICIENCY)
    // ============================================
    {
        source: { type: 'condition', id: 'anemia-b12-deficiency', name: 'Vitamin B12 Deficiency Anemia' },
        target: { type: 'drug', id: 'cyanocobalamin', name: 'Cyanocobalamin' },
        relationshipType: 'chronic-management',
        context: 'Vitamin B12 supplementation. IM or high-dose oral. Treats pernicious anemia and B12 deficiency.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // GOUT
    // ============================================
    {
        source: { type: 'condition', id: 'gout-acute', name: 'Acute Gout' },
        target: { type: 'drug', id: 'indomethacin', name: 'Indomethacin' },
        relationshipType: 'acute-treatment',
        context: 'NSAID for acute gout flare. High doses for rapid symptom relief. Avoid in renal disease.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'gout-acute', name: 'Acute Gout' },
        target: { type: 'drug', id: 'colchicine', name: 'Colchicine' },
        relationshipType: 'acute-treatment',
        context: 'Inhibits neutrophil migration. Effective if started early (<24h). GI side effects common.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'gout-chronic', name: 'Chronic Gout' },
        target: { type: 'drug', id: 'allopurinol', name: 'Allopurinol' },
        relationshipType: 'chronic-management',
        context: 'Xanthine oxidase inhibitor. Reduces uric acid production. First-line for gout prophylaxis.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // PARKINSON DISEASE
    // ============================================
    {
        source: { type: 'condition', id: 'parkinson-disease', name: 'Parkinson Disease' },
        target: { type: 'drug', id: 'levodopa-carbidopa', name: 'Levodopa-Carbidopa' },
        relationshipType: 'chronic-management',
        context: 'Gold standard for Parkinson disease. Carbidopa prevents peripheral conversion. Most effective, but motor complications develop.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // MIGRAINE
    // ============================================
    {
        source: { type: 'condition', id: 'migraine-acute', name: 'Acute Migraine' },
        target: { type: 'drug', id: 'sumatriptan', name: 'Sumatriptan' },
        relationshipType: 'acute-treatment',
        context: 'Triptan 5-HT1B/1D agonist. First-line for moderate-severe migraine. Contraindicated in coronary artery disease.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'migraine-prophylaxis', name: 'Migraine Prophylaxis' },
        target: { type: 'drug', id: 'propranolol', name: 'Propranolol' },
        relationshipType: 'prophylaxis',
        context: 'Beta-blocker for migraine prevention. Reduces frequency of attacks. First-line prophylaxis.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'migraine-prophylaxis', name: 'Migraine Prophylaxis' },
        target: { type: 'drug', id: 'topiramate', name: 'Topiramate' },
        relationshipType: 'prophylaxis',
        context: 'Anticonvulsant for migraine prevention. Weight loss side effect. Cognitive impairment risk.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // OSTEOPOROSIS
    // ============================================
    {
        source: { type: 'condition', id: 'osteoporosis', name: 'Osteoporosis' },
        target: { type: 'drug', id: 'alendronate', name: 'Alendronate' },
        relationshipType: 'chronic-management',
        context: 'Bisphosphonate. First-line for osteoporosis. Take on empty stomach, stay upright 30min. Risk of jaw osteonecrosis.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // PEPTIC ULCER DISEASE
    // ============================================
    {
        source: { type: 'condition', id: 'peptic-ulcer-disease', name: 'Peptic Ulcer Disease' },
        target: { type: 'drug', id: 'omeprazole', name: 'Omeprazole' },
        relationshipType: 'chronic-management',
        context: 'PPI for ulcer healing. If H. pylori positive, combine with antibiotics (triple/quadruple therapy).',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // ANXIETY DISORDERS
    // ============================================
    {
        source: { type: 'condition', id: 'generalized-anxiety-disorder', name: 'Generalized Anxiety Disorder' },
        target: { type: 'drug', id: 'sertraline', name: 'Sertraline' },
        relationshipType: 'chronic-management',
        context: 'SSRI. First-line for GAD. Takes 4-6 weeks for full effect.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'panic-disorder', name: 'Panic Disorder' },
        target: { type: 'drug', id: 'sertraline', name: 'Sertraline' },
        relationshipType: 'chronic-management',
        context: 'SSRI. First-line for panic disorder. Avoid benzodiazepines for chronic use.',
        priority: 'first-line',
        direction: 'bidirectional'
    },

    // ============================================
    // BIPOLAR DISORDER
    // ============================================
    {
        source: { type: 'condition', id: 'bipolar-disorder', name: 'Bipolar Disorder' },
        target: { type: 'drug', id: 'lithium', name: 'Lithium' },
        relationshipType: 'chronic-management',
        context: 'Mood stabilizer. Gold standard for bipolar disorder. Narrow therapeutic index. Monitor levels, renal, thyroid function.',
        priority: 'first-line',
        direction: 'bidirectional'
    },
    {
        source: { type: 'condition', id: 'bipolar-disorder', name: 'Bipolar Disorder' },
        target: { type: 'drug', id: 'valproic-acid', name: 'Valproic Acid' },
        relationshipType: 'chronic-management',
        context: 'Mood stabilizer. Alternative to lithium. Monitor LFTs. Teratogenic.',
        priority: 'first-line',
        direction: 'bidirectional'
    }
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

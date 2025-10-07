const drugData = [
    {
        system: 'Autonomic Nervous System',
        therapeutic_classes: [
            {
                name: 'Cholinergic Agonists',
                pharma_classes: [
                    {
                        name: 'Direct Muscarinic Agonists',
                        mechanism: 'Direct stimulation of muscarinic receptors, mimicking acetylcholine effects.',
                        side_effects: ['Cholinergic crisis', 'Bradycardia', 'Hypotension', 'Bronchoconstriction'],
                        interactions: 'Anticholinergics antagonize effects.',
                        drugs: [
                            { name: 'Bethanechol', features: 'Selective for M3 receptors.', choice: 'Postoperative urinary retention.', indications: ['Urinary Retention', 'Gastroparesis'], contraindications: ['Asthma', 'COPD', 'Mechanical Obstruction'] },
                            { name: 'Pilocarpine', features: 'Crosses blood-brain barrier.', choice: 'Glaucoma, xerostomia.', indications: ['Glaucoma', 'Dry Mouth'], contraindications: ['Narrow-angle Glaucoma', 'Asthma'] }
                        ]
                    },
                    {
                        name: 'Acetylcholinesterase Inhibitors',
                        mechanism: 'Inhibit breakdown of acetylcholine, increasing cholinergic transmission.',
                        side_effects: ['Cholinergic crisis', 'Muscle weakness', 'Bradycardia'],
                        interactions: 'Succinylcholine effects prolonged.',
                        drugs: [
                            { name: 'Neostigmine', features: 'Does not cross BBB.', choice: 'Reversal of neuromuscular blockade.', indications: ['Myasthenia Gravis', 'Neuromuscular Blockade Reversal'], contraindications: ['Mechanical Obstruction'] },
                            { name: 'Physostigmine', features: 'Crosses blood-brain barrier.', choice: 'Anticholinergic poisoning antidote.', indications: ['Anticholinergic Toxicity'], contraindications: ['Asthma', 'Mechanical Obstruction'] },
                            { name: 'Pyridostigmine', features: 'Longer duration than neostigmine.', choice: 'Chronic myasthenia gravis treatment.', indications: ['Myasthenia Gravis'], contraindications: ['Mechanical Obstruction'] }
                        ]
                    }
                ]
            },
            {
                name: 'Cholinergic Antagonists',
                pharma_classes: [
                    {
                        name: 'Muscarinic Antagonists',
                        mechanism: 'Block muscarinic receptors, preventing acetylcholine effects.',
                        side_effects: ['Dry mouth', 'Constipation', 'Urinary retention', 'Confusion'],
                        interactions: 'Other anticholinergics (additive effects).',
                        drugs: [
                            { name: 'Atropine', features: 'Crosses BBB, systemic effects.', choice: 'Bradycardia, organophosphate poisoning.', indications: ['Bradycardia', 'Organophosphate Poisoning'], contraindications: ['Narrow-angle Glaucoma', 'BPH'] },
                            { name: 'Scopolamine', features: 'High CNS penetration.', choice: 'Motion sickness prevention.', indications: ['Motion Sickness', 'Postoperative Nausea'], contraindications: ['Narrow-angle Glaucoma'] },
                            { name: 'Ipratropium', features: 'Quaternary ammonium, minimal systemic absorption.', choice: 'COPD bronchodilation.', indications: ['COPD', 'Asthma'], contraindications: ['Soy/Peanut Allergy'] },
                            { name: 'Tiotropium', features: 'Once-daily LAMA.', choice: 'COPD maintenance therapy.', indications: ['COPD'], contraindications: ['Narrow-angle Glaucoma'] }
                        ]
                    },
                    {
                        name: 'Nicotinic Antagonists',
                        mechanism: 'Block nicotinic receptors at neuromuscular junction or ganglia.',
                        side_effects: ['Muscle weakness', 'Paralysis', 'Ganglionic blockade'],
                        interactions: 'Aminoglycosides potentiate blockade.',
                        drugs: [
                            { name: 'Succinylcholine', features: 'Depolarizing blocker, fasciculations.', choice: 'Rapid sequence intubation.', indications: ['Neuromuscular Blockade'], contraindications: ['Malignant Hyperthermia', 'Hyperkalemia'] },
                            { name: 'Rocuronium', features: 'Non-depolarizing, reversible.', choice: 'Surgical paralysis.', indications: ['Neuromuscular Blockade'], contraindications: ['Myasthenia Gravis'] }
                        ]
                    }
                ]
            },
            {
                name: 'Adrenergic Agonists',
                pharma_classes: [
                    {
                        name: 'Mixed α/β Agonists',
                        mechanism: 'Stimulate both alpha and beta adrenergic receptors.',
                        side_effects: ['Hypertension', 'Tachycardia', 'Arrhythmias'],
                        interactions: 'MAOIs potentiate effects.',
                        drugs: [
                            { name: 'Epinephrine', features: 'Potent α1, β1, β2 agonist.', choice: 'Anaphylaxis, cardiac arrest.', indications: ['Anaphylaxis', 'Cardiac Arrest', 'Asthma'], contraindications: ['Narrow-angle Glaucoma'] },
                            { name: 'Norepinephrine', features: 'Potent α1, β1, minimal β2.', choice: 'Septic shock, hypotension.', indications: ['Shock', 'Hypotension'], contraindications: ['Hypovolemia'] }
                        ]
                    },
                    {
                        name: 'Selective β2 Agonists',
                        mechanism: 'Selective stimulation of β2 receptors causing bronchodilation.',
                        side_effects: ['Tachycardia', 'Tremor', 'Hypokalemia'],
                        interactions: 'Beta-blockers antagonize effects.',
                        drugs: [
                            { name: 'Albuterol', features: 'Short-acting, rescue medication.', choice: 'Acute bronchospasm.', indications: ['Asthma', 'COPD'], contraindications: ['Hypersensitivity'] },
                            { name: 'Salmeterol', features: 'Long-acting, maintenance therapy.', choice: 'Asthma controller (with ICS).', indications: ['Asthma', 'COPD'], contraindications: ['Asthma Monotherapy'] },
                            { name: 'Formoterol', features: 'Long-acting with rapid onset.', choice: 'COPD maintenance therapy.', indications: ['Asthma', 'COPD'], contraindications: ['Asthma Monotherapy'] }
                        ]
                    }
                ]
            },
            {
                name: 'Adrenergic Antagonists',
                pharma_classes: [
                    {
                        name: 'Beta Blockers',
                        mechanism: 'Block beta-adrenergic receptors, reducing heart rate and contractility.',
                        side_effects: ['Bradycardia', 'Fatigue', 'Bronchoconstriction'],
                        interactions: 'Calcium channel blockers, amiodarone.',
                        interaction_explanation: 'MECHANISM: Both beta blockers and calcium channel blockers (especially verapamil and diltiazem) independently suppress cardiac conduction and contractility. Beta blockers block sympathetic stimulation of the heart, while non-dihydropyridine CCBs block L-type calcium channels crucial for cardiac conduction and contraction. CLINICAL CONSEQUENCE: When combined, these effects are additive, creating dangerous negative inotropic (reduced contractility) and negative chronotropic (reduced heart rate) effects. This can lead to severe bradycardia, complete heart block, cardiogenic shock, and hemodynamic collapse. AMIODARONE: Has additional risks due to its multiple mechanisms - blocks sodium, potassium, and calcium channels while also having anti-adrenergic effects, creating a "quadruple block" when combined with beta blockers.',
                        drugs: [
                            { name: 'Propranolol', features: 'Non-selective, crosses BBB.', choice: 'Anxiety, migraine prophylaxis.', indications: ['Hypertension', 'Anxiety', 'Migraine'], contraindications: ['Asthma', 'COPD', 'Heart Block'] },
                            { name: 'Metoprolol', features: 'β1-selective (cardioselective).', choice: 'Hypertension with asthma/COPD.', indications: ['Hypertension', 'Heart Failure'], contraindications: ['Decompensated Heart Failure', 'Heart Block'] },
                            { name: 'Atenolol', features: 'β1-selective, renally excreted.', choice: 'Hypertension, post-MI.', indications: ['Hypertension', 'Post-MI'], contraindications: ['Heart Block', 'Severe Bradycardia'] },
                            { name: 'Carvedilol', features: 'Combined α/β blocker.', choice: 'Heart failure with proven mortality benefit.', indications: ['Heart Failure', 'Hypertension'], contraindications: ['Decompensated Heart Failure'] }
                        ]
                    },
                    {
                        name: 'Alpha Blockers',
                        mechanism: 'Block alpha-adrenergic receptors causing vasodilation.',
                        side_effects: ['Orthostatic hypotension', 'First-dose syncope'],
                        interactions: 'Other antihypertensives (additive effects).',
                        drugs: [
                            { name: 'Prazosin', features: 'Selective α1-blocker.', choice: 'Hypertension, BPH, PTSD nightmares.', indications: ['Hypertension', 'BPH', 'PTSD'], contraindications: ['Hypotension'] },
                            { name: 'Doxazosin', features: 'Long-acting α1-blocker.', choice: 'BPH with hypertension.', indications: ['Hypertension', 'BPH'], contraindications: ['Hypotension'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Cardiovascular System',
        therapeutic_classes: [
            {
                name: 'Antihypertensives',
                pharma_classes: [
                    {
                        name: 'ACE Inhibitors',
                        mechanism: 'Inhibit Angiotensin Converting Enzyme, reducing Angiotensin II and causing vasodilation.',
                        side_effects: ['Dry cough', 'Angioedema', 'Hyperkalemia'],
                        interactions: 'Potassium-sparing diuretics, NSAIDs.',
                        interaction_explanation: 'POTASSIUM-SPARING DIURETICS: MECHANISM - ACE inhibitors reduce aldosterone production (via decreased Angiotensin II), leading to potassium retention. Potassium-sparing diuretics independently block aldosterone receptors or epithelial sodium channels, also causing potassium retention. CONSEQUENCE - Additive hyperkalemia can cause dangerous cardiac arrhythmias, including fatal ventricular arrhythmias and asystole. NSAIDS: MECHANISM - ACE inhibitors work partly through increased prostaglandin E2 and prostacyclin (vasodilators). NSAIDs block cyclooxygenase, reducing these protective prostaglandins. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury, especially in patients with pre-existing renal disease, elderly patients, or volume-depleted states.',
                        drugs: [
                            { name: 'Lisinopril', features: 'Long half-life, not a prodrug.', choice: 'First-line for hypertension, especially in diabetics.', indications: ['Hypertension', 'Heart Failure', 'Diabetic Nephropathy'], contraindications: ['Pregnancy', 'History of Angioedema'] },
                            { name: 'Captopril', features: 'Short half-life, contains sulfhydryl group.', choice: 'Hypertensive emergencies, renal crisis.', indications: ['Hypertension', 'Scleroderma Crisis'], contraindications: ['Pregnancy', 'History of Angioedema'] },
                            { name: 'Enalapril', features: 'Prodrug, proven mortality benefit.', choice: 'Heart failure with mortality benefit.', indications: ['Hypertension', 'Heart Failure'], contraindications: ['Pregnancy', 'History of Angioedema'] },
                            { name: 'Ramipril', features: 'Long half-life, cardiovascular protection.', choice: 'Stroke prevention, cardiovascular protection.', indications: ['Hypertension', 'Stroke Prevention'], contraindications: ['Pregnancy', 'History of Angioedema'] }
                        ]
                    },
                    {
                        name: 'Angiotensin Receptor Blockers',
                        mechanism: 'Block AT1 receptors, preventing angiotensin II effects without affecting bradykinin.',
                        side_effects: ['Hyperkalemia', 'Hypotension', 'Dizziness'],
                        interactions: 'Potassium-sparing diuretics, NSAIDs.',
                        drugs: [
                            { name: 'Losartan', features: 'First ARB, active metabolite.', choice: 'ACE inhibitor alternative, cough intolerance.', indications: ['Hypertension', 'Diabetic Nephropathy'], contraindications: ['Pregnancy'] },
                            { name: 'Valsartan', features: 'Proven mortality benefit in HF.', choice: 'Heart failure with ACE inhibitor intolerance.', indications: ['Hypertension', 'Heart Failure'], contraindications: ['Pregnancy'] },
                            { name: 'Irbesartan', features: 'Excellent renal protection.', choice: 'Diabetic nephropathy protection.', indications: ['Hypertension', 'Diabetic Nephropathy'], contraindications: ['Pregnancy'] }
                        ]
                    },
                    {
                        name: 'Calcium Channel Blockers',
                        mechanism: 'Block L-type calcium channels, causing vasodilation or reduced cardiac contractility.',
                        side_effects: ['Peripheral edema', 'Constipation', 'Bradycardia'],
                        interactions: 'Beta-blockers (increased risk of heart block).',
                        interaction_explanation: 'BETA-BLOCKERS: MECHANISM - Non-dihydropyridine CCBs (verapamil, diltiazem) have negative chronotropic and dromotropic effects on the AV node. Beta-blockers also slow AV node conduction and reduce heart rate. CONSEQUENCE - Combined use significantly increases risk of symptomatic bradycardia, AV block (first-, second-, or third-degree), and potential asystole, especially in elderly patients or those with pre-existing conduction abnormalities.',
                        drugs: [
                            { name: 'Amlodipine', features: 'Long-acting dihydropyridine.', choice: 'Hypertension with minimal cardiac effects.', indications: ['Hypertension', 'Angina'], contraindications: ['Severe Aortic Stenosis'] },
                            { name: 'Nifedipine', features: 'Short-acting, can cause reflex tachycardia.', choice: 'Prinzmetal angina.', indications: ['Hypertension', 'Angina'], contraindications: ['Acute MI'] },
                            { name: 'Verapamil', features: 'Non-dihydropyridine, cardiac selective.', choice: 'Hypertension with arrhythmias.', indications: ['Hypertension', 'SVT'], contraindications: ['Heart Block', 'Heart Failure'] },
                            { name: 'Diltiazem', features: 'Non-dihydropyridine, intermediate selectivity.', choice: 'Hypertension with atrial fibrillation.', indications: ['Hypertension', 'Atrial Fibrillation'], contraindications: ['Heart Block', 'Heart Failure'] }
                        ]
                    },
                    {
                        name: 'Nitrates',
                        mechanism: 'Release nitric oxide, causing venous and arterial vasodilation.',
                        side_effects: ['Headache', 'Hypotension', 'Tolerance with continuous use'],
                        interactions: 'Sildenafil and other PDE5 inhibitors (severe hypotension).',
                        interaction_explanation: 'PDE5 INHIBITORS: MECHANISM - Nitrates increase cGMP levels through nitric oxide release. PDE5 inhibitors (sildenafil, tadalafil, vardenafil) prevent cGMP breakdown by inhibiting phosphodiesterase-5. CONSEQUENCE - Synergistic vasodilation leads to severe, potentially life-threatening hypotension that may not respond to fluids and requires vasopressors.',
                        drugs: [
                            { name: 'Nitroglycerin', features: 'Short-acting, sublingual or IV.', choice: 'Acute angina, pulmonary edema.', indications: ['Angina', 'Acute MI', 'Pulmonary Edema'], contraindications: ['Severe Aortic Stenosis', 'Recent PDE5 Inhibitor Use'] },
                            { name: 'Isosorbide Mononitrate', features: 'Long-acting, once daily.', choice: 'Angina prophylaxis.', indications: ['Angina Prophylaxis'], contraindications: ['Severe Aortic Stenosis', 'Recent PDE5 Inhibitor Use'] },
                            { name: 'Isosorbide Dinitrate', features: 'Intermediate-acting, requires conversion.', choice: 'Heart failure with hydralazine.', indications: ['Angina', 'Heart Failure'], contraindications: ['Severe Aortic Stenosis', 'Recent PDE5 Inhibitor Use'] }
                        ]
                    }
                ]
            },
            {
                name: 'Diuretics (Cardiovascular)',
                pharma_classes: [
                    {
                        name: 'Loop Diuretics',
                        mechanism: 'Inhibit NKCC2 transporter in thick ascending limb, causing rapid fluid loss.',
                        side_effects: ['Hypokalemia', 'Hyponatremia', 'Ototoxicity'],
                        interactions: 'Aminoglycosides (ototoxicity), lithium (increased levels).',
                        interaction_explanation: 'AMINOGLYCOSIDES: MECHANISM - Both loop diuretics and aminoglycosides have direct ototoxic effects on hair cells in the cochlea. CONSEQUENCE - Synergistic permanent hearing loss. LITHIUM: MECHANISM - Volume depletion increases lithium reabsorption. CONSEQUENCE - Lithium toxicity with tremor and confusion.',
                        drugs: [
                            { name: 'Furosemide', features: 'Most commonly used, IV/PO.', choice: 'Acute heart failure, pulmonary edema.', indications: ['Heart Failure', 'Pulmonary Edema', 'Hypertension'], contraindications: ['Anuria', 'Sulfonamide Allergy'] },
                            { name: 'Bumetanide', features: '40x more potent than furosemide.', choice: 'Furosemide resistance.', indications: ['Heart Failure', 'Hypertension'], contraindications: ['Anuria', 'Sulfonamide Allergy'] }
                        ]
                    },
                    {
                        name: 'Thiazide Diuretics',
                        mechanism: 'Inhibit NCC transporter in distal convoluted tubule, first-line for HTN.',
                        side_effects: ['Hypokalemia', 'Hyperuricemia', 'Hyperglycemia'],
                        interactions: 'Lithium (increased levels), NSAIDs (reduced efficacy).',
                        interaction_explanation: 'LITHIUM: MECHANISM - Thiazides cause volume depletion, increasing lithium reabsorption. CONSEQUENCE - Lithium toxicity. NSAIDS: MECHANISM - Thiazides work partly through prostaglandin-mediated vasodilation, NSAIDs block this. CONSEQUENCE - Reduced antihypertensive effect.',
                        drugs: [
                            { name: 'Hydrochlorothiazide (HCTZ)', features: 'Most common thiazide.', choice: 'First-line hypertension.', indications: ['Hypertension', 'Mild Heart Failure'], contraindications: ['Anuria', 'Sulfonamide Allergy'] },
                            { name: 'Chlorthalidone', features: 'Longer half-life, better outcomes.', choice: 'Preferred thiazide for HTN.', indications: ['Hypertension'], contraindications: ['Anuria', 'Sulfonamide Allergy'] }
                        ]
                    },
                    {
                        name: 'Potassium-Sparing Diuretics',
                        mechanism: 'Block aldosterone receptors or ENaC channels, prevent K+ loss.',
                        side_effects: ['Hyperkalemia', 'Gynecomastia (spironolactone)'],
                        interactions: 'ACE inhibitors, ARBs (hyperkalemia).',
                        interaction_explanation: 'ACE INHIBITORS/ARBS: MECHANISM - Both reduce aldosterone and block potassium excretion. CONSEQUENCE - Dangerous hyperkalemia with risk of fatal arrhythmias.',
                        drugs: [
                            { name: 'Spironolactone', features: 'Aldosterone antagonist.', choice: 'Heart failure, prevents K+ loss.', indications: ['Heart Failure', 'Hypertension'], contraindications: ['Hyperkalemia', 'Anuria'] },
                            { name: 'Eplerenone', features: 'Selective aldosterone antagonist.', choice: 'Post-MI heart failure.', indications: ['Post-MI Heart Failure', 'Hypertension'], contraindications: ['Hyperkalemia'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antiarrhythmics',
                pharma_classes: [
                    {
                        name: 'Class I (Sodium Channel Blockers)',
                        mechanism: 'Block sodium channels, slowing conduction velocity. Sub-classified into IA, IB, IC based on effect on action potential duration.',
                        side_effects: ['Proarrhythmic effects', 'CNS toxicity', 'Anticholinergic effects'],
                        interactions: 'Many, due to effects on cardiac conduction and metabolism.',
                        drugs: [
                            { name: 'Quinidine (IA)', features: 'Blocks Na+ and K+ channels.', choice: 'Atrial fibrillation conversion.', indications: ['Atrial Fibrillation', 'Ventricular Arrhythmias'], contraindications: ['Heart Block', 'Long QT'] },
                            { name: 'Procainamide (IA)', features: 'Can cause drug-induced lupus.', choice: 'Atrial and ventricular arrhythmias.', indications: ['Atrial Arrhythmias', 'Ventricular Arrhythmias'], contraindications: ['Heart Block', 'Lupus'] },
                            { name: 'Lidocaine (IB)', features: 'Acts preferentially on ischemic tissue.', choice: 'Ventricular arrhythmias post-MI.', indications: ['Ventricular Arrhythmias'], contraindications: ['Heart Block'] },
                            { name: 'Flecainide (IC)', features: 'Significant proarrhythmic potential.', choice: 'Atrial fibrillation (pill-in-pocket).', indications: ['Atrial Fibrillation'], contraindications: ['Structural Heart Disease', 'CAD'] }
                        ]
                    },
                    {
                        name: 'Class III (Potassium Channel Blockers)',
                        mechanism: 'Block potassium channels, prolonging repolarization and action potential duration.',
                        side_effects: ['QT prolongation', 'Torsades de pointes', 'Thyroid dysfunction'],
                        interactions: 'Drugs that prolong QT interval.',
                        drugs: [
                            { name: 'Amiodarone', features: 'Complex pharmacology, very long half-life.', choice: 'Life-threatening arrhythmias.', indications: ['Atrial Fibrillation', 'Ventricular Arrhythmias'], contraindications: ['Iodine Allergy', 'Heart Block'] },
                            { name: 'Sotalol', features: 'Combined beta-blocking and Class III effects.', choice: 'Atrial fibrillation with rate control.', indications: ['Atrial Fibrillation', 'Ventricular Tachycardia'], contraindications: ['Asthma', 'Long QT', 'Heart Block'] }
                        ]
                    }
                ]
            },
            {
                name: 'Lipid Management',
                pharma_classes: [
                    {
                        name: 'Statins',
                        mechanism: 'Inhibit HMG-CoA reductase, the rate-limiting step in cholesterol synthesis.',
                        side_effects: ['Myopathy', 'Rhabdomyolysis', 'Hepatotoxicity'],
                        interactions: 'CYP3A4 inhibitors increase levels.',
                        drugs: [
                            { name: 'Atorvastatin', features: 'Most commonly prescribed.', choice: 'First-line for hyperlipidemia.', indications: ['Hyperlipidemia', 'CAD Prevention'], contraindications: ['Active Liver Disease', 'Pregnancy'] },
                            { name: 'Simvastatin', features: 'More drug interactions.', choice: 'Cost-effective option.', indications: ['Hyperlipidemia'], contraindications: ['Active Liver Disease', 'Pregnancy'] },
                            { name: 'Rosuvastatin', features: 'Most potent statin.', choice: 'High-intensity statin therapy.', indications: ['Hyperlipidemia'], contraindications: ['Active Liver Disease', 'Pregnancy'] },
                            { name: 'Pravastatin', features: 'Hydrophilic, fewer interactions.', choice: 'Multiple drug interactions concern.', indications: ['Hyperlipidemia'], contraindications: ['Active Liver Disease', 'Pregnancy'] }
                        ]
                    }
                ]
            },
            {
                name: 'Positive Inotropes',
                pharma_classes: [
                    {
                        name: 'Cardiac Glycosides',
                        mechanism: 'Inhibit Na+/K+-ATPase pump, increasing intracellular calcium and cardiac contractility.',
                        side_effects: ['Arrhythmias', 'Nausea', 'Visual disturbances', 'Confusion'],
                        interactions: 'Diuretics (hypokalemia increases toxicity), amiodarone, quinidine.',
                        interaction_explanation: 'DIURETICS: MECHANISM - Digoxin toxicity is potentiated by hypokalemia because potassium competes with digoxin for binding to Na+/K+-ATPase. CONSEQUENCE - Low potassium increases digoxin binding and toxicity, leading to dangerous arrhythmias. AMIODARONE/QUINIDINE: MECHANISM - These drugs inhibit P-glycoprotein, reducing digoxin clearance. CONSEQUENCE - Increased digoxin levels requiring dose reduction.',
                        drugs: [
                            { name: 'Digoxin', features: 'Narrow therapeutic window, requires monitoring.', choice: 'Atrial fibrillation rate control, heart failure.', indications: ['Atrial Fibrillation', 'Heart Failure'], contraindications: ['Ventricular Arrhythmias', 'Hypertrophic Cardiomyopathy'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Nervous System',
        therapeutic_classes: [
            {
                name: 'Antidepressants',
                pharma_classes: [
                    {
                        name: 'SSRIs (Selective Serotonin Reuptake Inhibitors)',
                        mechanism: 'Selectively inhibit serotonin reuptake, increasing synaptic serotonin.',
                        side_effects: ['Sexual dysfunction', 'Nausea', 'Insomnia', 'Serotonin syndrome'],
                        interactions: 'MAOIs (serotonin syndrome), warfarin (increased bleeding).',
                        drugs: [
                            { name: 'Fluoxetine', features: 'Long half-life, CYP2D6 inhibitor.', choice: 'Depression with poor compliance.', indications: ['Depression', 'OCD', 'Bulimia'], contraindications: ['MAOI use', 'Pregnancy concerns'] },
                            { name: 'Sertraline', features: 'Least drug interactions, safe in cardiac disease.', choice: 'Depression with cardiac comorbidities.', indications: ['Depression', 'PTSD', 'Panic Disorder'], contraindications: ['MAOI use'] },
                            { name: 'Paroxetine', features: 'Most anticholinergic, difficult withdrawal.', choice: 'Depression with anxiety.', indications: ['Depression', 'Social Anxiety'], contraindications: ['MAOI use', 'Pregnancy'] },
                            { name: 'Citalopram', features: 'Clean pharmacology, QT prolongation risk.', choice: 'Depression in elderly.', indications: ['Depression', 'Anxiety'], contraindications: ['MAOI use', 'Long QT'] },
                            { name: 'Escitalopram', features: 'S-enantiomer of citalopram, well-tolerated.', choice: 'First-line for depression.', indications: ['Depression', 'Anxiety'], contraindications: ['MAOI use'] }
                        ]
                    },
                    {
                        name: 'SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)',
                        mechanism: 'Inhibit both serotonin and norepinephrine reuptake.',
                        side_effects: ['Hypertension', 'Sexual dysfunction', 'Discontinuation syndrome'],
                        interactions: 'MAOIs (serotonin syndrome).',
                        drugs: [
                            { name: 'Venlafaxine', features: 'Dose-dependent dual mechanism.', choice: 'Depression with neuropathic pain.', indications: ['Depression', 'Anxiety', 'Neuropathic Pain'], contraindications: ['MAOI use', 'Uncontrolled Hypertension'] },
                            { name: 'Duloxetine', features: 'Balanced 5-HT/NE inhibition.', choice: 'Depression with diabetic neuropathy.', indications: ['Depression', 'Diabetic Neuropathy', 'Fibromyalgia'], contraindications: ['MAOI use', 'Liver Disease'] }
                        ]
                    },
                    {
                        name: 'Atypical Antidepressants',
                        mechanism: 'Various mechanisms outside traditional classes.',
                        side_effects: ['Varies by drug'],
                        interactions: 'Drug-specific.',
                        drugs: [
                            { name: 'Bupropion', features: 'Dopamine/norepinephrine reuptake inhibitor.', choice: 'Depression with sexual dysfunction concern.', indications: ['Depression', 'Smoking Cessation'], contraindications: ['Seizure Disorder', 'Eating Disorders'] },
                            { name: 'Mirtazapine', features: 'α2-antagonist, sedating and orexigenic.', choice: 'Depression with insomnia and weight loss.', indications: ['Depression', 'Insomnia'], contraindications: ['Hypersensitivity'] }
                        ]
                    }
                ]
            },
            {
                name: 'Anxiolytics and Sedatives',
                pharma_classes: [
                    {
                        name: 'Benzodiazepines',
                        mechanism: 'Potentiate GABA-A receptors, enhancing chloride influx.',
                        side_effects: ['Sedation', 'Dependence', 'Respiratory depression', 'Amnesia'],
                        interactions: 'Alcohol (increased CNS depression).',
                        drugs: [
                            { name: 'Lorazepam', features: 'Intermediate-acting, no active metabolites.', choice: 'Anxiety, status epilepticus.', indications: ['Anxiety', 'Status Epilepticus'], contraindications: ['Respiratory Depression', 'Sleep Apnea'] },
                            { name: 'Diazepam', features: 'Long-acting, active metabolites.', choice: 'Alcohol withdrawal, muscle spasms.', indications: ['Anxiety', 'Alcohol Withdrawal'], contraindications: ['Respiratory Depression', 'Sleep Apnea'] },
                            { name: 'Alprazolam', features: 'Short-acting, high potency.', choice: 'Panic disorder.', indications: ['Panic Disorder', 'Anxiety'], contraindications: ['Respiratory Depression'] },
                            { name: 'Midazolam', features: 'Very short-acting, water-soluble.', choice: 'Procedural sedation.', indications: ['Procedural Sedation'], contraindications: ['Respiratory Depression'] }
                        ]
                    },
                    {
                        name: 'Non-Benzodiazepine Hypnotics',
                        mechanism: 'Selective GABA-A receptor modulation.',
                        side_effects: ['Complex sleep behaviors', 'Dependence'],
                        interactions: 'CYP3A4 inhibitors increase levels.',
                        drugs: [
                            { name: 'Zolpidem', features: 'Short half-life, sleep-selective.', choice: 'Sleep initiation problems.', indications: ['Insomnia'], contraindications: ['Sleep Apnea'] },
                            { name: 'Eszopiclone', features: 'Longer half-life than zolpidem.', choice: 'Sleep maintenance problems.', indications: ['Insomnia'], contraindications: ['Sleep Apnea'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antipsychotics',
                pharma_classes: [
                    {
                        name: 'Typical Antipsychotics',
                        mechanism: 'Primarily D2 receptor antagonism.',
                        side_effects: ['Extrapyramidal symptoms', 'Tardive dyskinesia', 'Neuroleptic malignant syndrome'],
                        interactions: 'CNS depressants (additive effects).',
                        drugs: [
                            { name: 'Haloperidol', features: 'High potency, high EPS risk.', choice: 'Acute psychosis, delirium.', indications: ['Schizophrenia', 'Acute Psychosis', 'Tourette\'s'], contraindications: ['Parkinson\'s Disease'] },
                            { name: 'Chlorpromazine', features: 'Low potency, sedating.', choice: 'Agitated psychosis.', indications: ['Schizophrenia', 'Severe Agitation'], contraindications: ['Bone Marrow Depression'] }
                        ]
                    },
                    {
                        name: 'Atypical Antipsychotics',
                        mechanism: 'D2 and 5-HT2A antagonism with lower EPS risk.',
                        side_effects: ['Weight gain', 'Metabolic syndrome', 'QT prolongation'],
                        interactions: 'CYP450 interactions vary by drug.',
                        drugs: [
                            { name: 'Risperidone', features: 'Lower EPS than typical antipsychotics.', choice: 'First-episode schizophrenia.', indications: ['Schizophrenia', 'Bipolar Disorder'], contraindications: ['Hypersensitivity'] },
                            { name: 'Olanzapine', features: 'Highly effective but significant metabolic effects.', choice: 'Treatment-resistant schizophrenia.', indications: ['Schizophrenia', 'Bipolar Disorder'], contraindications: ['Diabetes Risk'] },
                            { name: 'Quetiapine', features: 'Very sedating, used off-label for sleep.', choice: 'Bipolar depression.', indications: ['Schizophrenia', 'Bipolar Disorder'], contraindications: ['Hypersensitivity'] },
                            { name: 'Aripiprazole', features: 'Dopamine partial agonist, activating.', choice: 'Stable schizophrenia with metabolic concerns.', indications: ['Schizophrenia', 'Bipolar Disorder'], contraindications: ['Hypersensitivity'] }
                        ]
                    }
                ]
            },
            {
                name: 'Anesthetics',
                pharma_classes: [
                    {
                        name: 'Intravenous Anesthetics',
                        mechanism: 'Various mechanisms including GABA potentiation and NMDA antagonism.',
                        side_effects: ['Respiratory depression', 'Hypotension', 'Injection site pain'],
                        interactions: 'CNS depressants (additive effects).',
                        drugs: [
                            { name: 'Propofol', features: 'Rapid onset/offset, milky appearance.', choice: 'Induction and maintenance of anesthesia, sedation.', indications: ['General Anesthesia', 'Procedural Sedation'], contraindications: ['Egg/Soy Allergy', 'Severe Cardiac Disease'] },
                            { name: 'Ketamine', features: 'NMDA antagonist, dissociative anesthetic.', choice: 'Anesthesia with hemodynamic instability.', indications: ['General Anesthesia', 'Pain Management', 'Depression'], contraindications: ['Increased Intracranial Pressure', 'Psychosis'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antiepileptics',
                pharma_classes: [
                    {
                        name: 'Sodium Channel Blockers',
                        mechanism: 'Block voltage-gated sodium channels, preventing neuronal firing.',
                        side_effects: ['Diplopia', 'Ataxia', 'Rash'],
                        interactions: 'Many are enzyme inducers.',
                        drugs: [
                            { name: 'Phenytoin', features: 'Zero-order kinetics, many interactions.', choice: 'Status epilepticus.', indications: ['Epilepsy', 'Status Epilepticus'], contraindications: ['Heart Block'] },
                            { name: 'Carbamazepine', features: 'Autoinduces metabolism.', choice: 'Trigeminal neuralgia.', indications: ['Epilepsy', 'Trigeminal Neuralgia'], contraindications: ['Bone Marrow Depression'] },
                            { name: 'Lamotrigine', features: 'Broad spectrum, rash risk.', choice: 'Bipolar disorder.', indications: ['Epilepsy', 'Bipolar Disorder'], contraindications: ['Rash History'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Respiratory System',
        therapeutic_classes: [
            {
                name: 'Bronchodilators',
                pharma_classes: [
                    {
                        name: 'Short-Acting Beta-2 Agonists (SABA)',
                        mechanism: 'Stimulate β2 receptors causing rapid bronchodilation.',
                        side_effects: ['Tachycardia', 'Tremor', 'Hypokalemia'],
                        interactions: 'Beta-blockers antagonize effects.',
                        drugs: [
                            { name: 'Albuterol', features: 'Rapid onset, 4-6 hour duration.', choice: 'Rescue therapy for acute bronchospasm.', indications: ['Asthma', 'COPD', 'Exercise-Induced Bronchospasm'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Long-Acting Beta-2 Agonists (LABA)',
                        mechanism: 'Long-duration β2 stimulation for maintenance therapy.',
                        side_effects: ['Tachycardia', 'Tremor', 'Increased asthma mortality if used alone'],
                        interactions: 'Must be used with inhaled corticosteroids in asthma.',
                        drugs: [
                            { name: 'Salmeterol', features: 'Twice-daily dosing.', choice: 'Asthma maintenance (always with ICS).', indications: ['Asthma', 'COPD'], contraindications: ['Asthma Monotherapy'] },
                            { name: 'Formoterol', features: 'Rapid onset for a LABA.', choice: 'COPD maintenance therapy.', indications: ['Asthma', 'COPD'], contraindications: ['Asthma Monotherapy'] }
                        ]
                    },
                    {
                        name: 'Anticholinergics',
                        mechanism: 'Block muscarinic receptors preventing bronchoconstriction.',
                        side_effects: ['Dry mouth', 'Urinary retention'],
                        interactions: 'Other anticholinergics (additive effects).',
                        drugs: [
                            { name: 'Ipratropium', features: 'Short-acting muscarinic antagonist.', choice: 'COPD, especially with β2-agonist.', indications: ['COPD', 'Asthma'], contraindications: ['Soy/Peanut Allergy'] },
                            { name: 'Tiotropium', features: 'Once-daily long-acting anticholinergic.', choice: 'COPD maintenance therapy.', indications: ['COPD'], contraindications: ['Narrow-angle Glaucoma'] }
                        ]
                    }
                ]
            },
            {
                name: 'Anti-Inflammatory Agents',
                pharma_classes: [
                    {
                        name: 'Inhaled Corticosteroids',
                        mechanism: 'Local anti-inflammatory effects in airways.',
                        side_effects: ['Oral thrush', 'Hoarseness', 'Growth suppression'],
                        interactions: 'Minimal systemic interactions.',
                        drugs: [
                            { name: 'Beclomethasone', features: 'Lower potency ICS.', choice: 'Mild persistent asthma.', indications: ['Asthma', 'Allergic Rhinitis'], contraindications: ['Fungal Infections'] },
                            { name: 'Fluticasone', features: 'High potency, low systemic absorption.', choice: 'Moderate to severe asthma.', indications: ['Asthma', 'Allergic Rhinitis'], contraindications: ['Fungal Infections'] },
                            { name: 'Budesonide', features: 'High first-pass metabolism.', choice: 'Asthma in children.', indications: ['Asthma', 'COPD'], contraindications: ['Fungal Infections'] }
                        ]
                    },
                    {
                        name: 'Leukotriene Modifiers',
                        mechanism: 'Block leukotriene effects or synthesis.',
                        side_effects: ['Neuropsychiatric effects', 'Hepatotoxicity'],
                        interactions: 'CYP450 interactions.',
                        drugs: [
                            { name: 'Montelukast', features: 'Oral leukotriene receptor antagonist.', choice: 'Asthma with allergic rhinitis.', indications: ['Asthma', 'Allergic Rhinitis'], contraindications: ['Hypersensitivity'] },
                            { name: 'Zileuton', features: '5-lipoxygenase inhibitor.', choice: 'Aspirin-sensitive asthma.', indications: ['Asthma'], contraindications: ['Liver Disease'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Antimicrobials',
        therapeutic_classes: [
            {
                name: 'Cell Wall Inhibitors',
                pharma_classes: [
                    {
                        name: 'Penicillins',
                        mechanism: 'Bind to penicillin-binding proteins (PBPs) to inhibit peptidoglycan synthesis.',
                        side_effects: ['Hypersensitivity reactions', 'Anaphylaxis', 'Interstitial nephritis'],
                        interactions: 'Probenecid increases levels, tetracyclines may interfere.',
                        drugs: [
                            { name: 'Penicillin G', features: 'Narrow spectrum, IV/IM only.', choice: 'Syphilis, strep pharyngitis.', indications: ['Syphilis', 'Strep Pharyngitis'], contraindications: ['Penicillin Allergy'] },
                            { name: 'Amoxicillin', features: 'Oral bioavailability, broader spectrum.', choice: 'Otitis media, sinusitis.', indications: ['Otitis Media', 'Sinusitis'], contraindications: ['Penicillin Allergy'] },
                            { name: 'Nafcillin', features: 'Penicillinase-resistant.', choice: 'MSSA infections.', indications: ['MSSA Infections'], contraindications: ['Penicillin Allergy'] }
                        ]
                    },
                    {
                        name: 'Cephalosporins',
                        mechanism: 'Similar to penicillins; inhibit cell wall synthesis. Organized by generations.',
                        side_effects: ['Hypersensitivity', 'Disulfiram-like reaction', 'Vitamin K deficiency'],
                        interactions: 'Aminoglycosides increase nephrotoxicity.',
                        drugs: [
                            { name: 'Cefazolin (1st gen)', features: 'Excellent gram-positive coverage.', choice: 'Surgical prophylaxis.', indications: ['Surgical Prophylaxis'], contraindications: ['Cephalosporin Allergy'] },
                            { name: 'Ceftriaxone (3rd gen)', features: 'CNS penetration, broad spectrum.', choice: 'Meningitis, gonorrhea.', indications: ['Meningitis', 'Gonorrhea'], contraindications: ['Cephalosporin Allergy'] },
                            { name: 'Cefepime (4th gen)', features: 'Anti-pseudomonal activity.', choice: 'Hospital-acquired pneumonia.', indications: ['Hospital-Acquired Pneumonia'], contraindications: ['Cephalosporin Allergy'] }
                        ]
                    }
                ]
            },
            {
                name: 'Protein Synthesis Inhibitors',
                pharma_classes: [
                    {
                        name: 'Aminoglycosides',
                        mechanism: 'Inhibit 30S ribosomal subunit, causing misreading of mRNA.',
                        side_effects: ['Nephrotoxicity', 'Ototoxicity', 'Neuromuscular blockade'],
                        interactions: 'Loop diuretics increase ototoxicity.',
                        drugs: [
                            { name: 'Gentamicin', features: 'Broad-spectrum, once-daily dosing.', choice: 'Gram-negative sepsis.', indications: ['Gram-negative Infections', 'Endocarditis'], contraindications: ['Pregnancy', 'Myasthenia Gravis'] },
                            { name: 'Tobramycin', features: 'Anti-pseudomonal activity.', choice: 'Pseudomonas infections.', indications: ['Pseudomonas Infections'], contraindications: ['Pregnancy', 'Renal Impairment'] },
                            { name: 'Amikacin', features: 'Resistant to most aminoglycoside-modifying enzymes.', choice: 'MDR gram-negative infections.', indications: ['MDR Gram-negative Infections'], contraindications: ['Pregnancy', 'Hearing Loss'] }
                        ]
                    },
                    {
                        name: 'Macrolides',
                        mechanism: 'Inhibit 50S ribosomal subunit, block peptide elongation.',
                        side_effects: ['GI upset', 'QT prolongation', 'Hepatotoxicity'],
                        interactions: 'CYP3A4 inhibition, increases levels of many drugs.',
                        drugs: [
                            { name: 'Azithromycin', features: 'Long half-life, tissue penetration.', choice: 'Atypical pneumonia, chlamydia.', indications: ['Atypical Pneumonia', 'Chlamydia'], contraindications: ['QT Prolongation'] },
                            { name: 'Clarithromycin', features: 'H. pylori activity.', choice: 'H. pylori eradication.', indications: ['H. pylori Infection'], contraindications: ['Liver Disease'] },
                            { name: 'Erythromycin', features: 'Motilin receptor agonist.', choice: 'Gastroparesis, penicillin allergy.', indications: ['Gastroparesis', 'Strep Infections'], contraindications: ['QT Prolongation'] }
                        ]
                    },
                    {
                        name: 'Tetracyclines',
                        mechanism: 'Inhibit 30S ribosomal subunit, prevent tRNA binding.',
                        side_effects: ['Tooth discoloration', 'Photosensitivity', 'Esophagitis'],
                        interactions: 'Divalent cations reduce absorption.',
                        drugs: [
                            { name: 'Doxycycline', features: 'Lipophilic, good tissue penetration.', choice: 'Lyme disease, rickettsial infections.', indications: ['Lyme Disease', 'Rocky Mountain Spotted Fever'], contraindications: ['Pregnancy', 'Children <8 years'] },
                            { name: 'Minocycline', features: 'CNS penetration, anti-inflammatory.', choice: 'CNS infections, acne.', indications: ['Acne', 'Meningococcal Carrier State'], contraindications: ['Pregnancy', 'Lupus'] },
                            { name: 'Tetracycline', features: 'Original tetracycline.', choice: 'H. pylori, acne.', indications: ['H. pylori Infection', 'Acne'], contraindications: ['Pregnancy', 'Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'Chloramphenicol',
                        mechanism: 'Inhibits 50S ribosomal subunit, blocks peptidyl transferase.',
                        side_effects: ['Bone marrow suppression', 'Gray baby syndrome', 'Aplastic anemia'],
                        interactions: 'Inhibits CYP enzymes.',
                        drugs: [
                            { name: 'Chloramphenicol', features: 'Broad spectrum, CNS penetration.', choice: 'Bacterial meningitis (when others contraindicated).', indications: ['Bacterial Meningitis'], contraindications: ['Pregnancy', 'G6PD Deficiency'] }
                        ]
                    }
                ]
            },
            {
                name: 'DNA/RNA Synthesis Inhibitors',
                pharma_classes: [
                    {
                        name: 'Fluoroquinolones',
                        mechanism: 'Inhibit DNA gyrase and topoisomerase IV.',
                        side_effects: ['Tendon rupture', 'CNS effects', 'QT prolongation'],
                        interactions: 'Divalent cations reduce absorption.',
                        drugs: [
                            { name: 'Ciprofloxacin', features: 'Excellent gram-negative coverage.', choice: 'UTI, gram-negative infections.', indications: ['UTI', 'Gram-negative Infections'], contraindications: ['Pregnancy', 'Children'] },
                            { name: 'Levofloxacin', features: 'Respiratory quinolone, atypical coverage.', choice: 'Community-acquired pneumonia.', indications: ['Pneumonia', 'Sinusitis'], contraindications: ['Pregnancy', 'Tendon Disorders'] },
                            { name: 'Moxifloxacin', features: 'Enhanced anaerobic and gram-positive coverage.', choice: 'Complicated skin infections.', indications: ['Skin and Soft Tissue Infections'], contraindications: ['Pregnancy', 'QT Prolongation'] }
                        ]
                    },
                    {
                        name: 'Metronidazole',
                        mechanism: 'DNA damage via reduction to toxic metabolites in anaerobic conditions.',
                        side_effects: ['Disulfiram-like reaction', 'Peripheral neuropathy', 'Metallic taste'],
                        interactions: 'Warfarin effects enhanced.',
                        drugs: [
                            { name: 'Metronidazole', features: 'Excellent anaerobic coverage.', choice: 'C. diff colitis, anaerobic infections.', indications: ['C. diff Colitis', 'Anaerobic Infections', 'Trichomoniasis'], contraindications: ['Alcohol Use', 'Pregnancy (1st trimester)'] }
                        ]
                    }
                ]
            },
            {
                name: 'Folate Synthesis Inhibitors',
                pharma_classes: [
                    {
                        name: 'Sulfonamides',
                        mechanism: 'Inhibit dihydropteroate synthase, disrupt folate synthesis.',
                        side_effects: ['Hypersensitivity', 'Stevens-Johnson syndrome', 'Kernicterus'],
                        interactions: 'Warfarin effects enhanced.',
                        drugs: [
                            { name: 'Sulfamethoxazole', features: 'Usually combined with trimethoprim.', choice: 'UTI, PCP prophylaxis.', indications: ['UTI', 'PCP Prophylaxis'], contraindications: ['Sulfa Allergy', 'G6PD Deficiency'] }
                        ]
                    },
                    {
                        name: 'Trimethoprim',
                        mechanism: 'Inhibits dihydrofolate reductase.',
                        side_effects: ['Hyperkalemia', 'Megaloblastic anemia', 'Rash'],
                        interactions: 'ACE inhibitors increase hyperkalemia risk.',
                        drugs: [
                            { name: 'Trimethoprim-Sulfamethoxazole', features: 'Synergistic combination.', choice: 'PCP treatment, MRSA.', indications: ['PCP Treatment', 'MRSA Infections'], contraindications: ['Sulfa Allergy', 'Folate Deficiency'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antifungals',
                pharma_classes: [
                    {
                        name: 'Polyenes',
                        mechanism: 'Bind ergosterol in fungal cell membrane, create pores.',
                        side_effects: ['Nephrotoxicity', 'Infusion reactions', 'Electrolyte abnormalities'],
                        interactions: 'Nephrotoxic drugs increase risk.',
                        drugs: [
                            { name: 'Amphotericin B', features: 'Broad-spectrum antifungal.', choice: 'Systemic fungal infections.', indications: ['Systemic Fungal Infections'], contraindications: ['Renal Impairment'] },
                            { name: 'Nystatin', features: 'Topical use only, not absorbed.', choice: 'Oral/vaginal candidiasis.', indications: ['Oral Candidiasis', 'Vaginal Candidiasis'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Azoles',
                        mechanism: 'Inhibit 14α-demethylase, disrupt ergosterol synthesis.',
                        side_effects: ['Hepatotoxicity', 'Drug interactions', 'QT prolongation'],
                        interactions: 'CYP3A4 inhibition affects many drugs.',
                        drugs: [
                            { name: 'Fluconazole', features: 'Excellent CNS penetration.', choice: 'Candidiasis, cryptococcal meningitis.', indications: ['Candidiasis', 'Cryptococcal Meningitis'], contraindications: ['Liver Disease'] },
                            { name: 'Itraconazole', features: 'Broad spectrum, capsule requires acid.', choice: 'Histoplasmosis, aspergillosis.', indications: ['Histoplasmosis', 'Aspergillosis'], contraindications: ['Heart Failure', 'Liver Disease'] },
                            { name: 'Voriconazole', features: 'First-line for aspergillosis.', choice: 'Invasive aspergillosis.', indications: ['Invasive Aspergillosis'], contraindications: ['CYP2C19 Poor Metabolizers'] }
                        ]
                    },
                    {
                        name: 'Echinocandins',
                        mechanism: 'Inhibit β-glucan synthesis in fungal cell wall.',
                        side_effects: ['Infusion reactions', 'Hepatotoxicity', 'Histamine release'],
                        interactions: 'Few significant interactions.',
                        drugs: [
                            { name: 'Caspofungin', features: 'First echinocandin, IV only.', choice: 'Candidemia, aspergillosis.', indications: ['Candidemia', 'Invasive Aspergillosis'], contraindications: ['Hypersensitivity'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antivirals',
                pharma_classes: [
                    {
                        name: 'Nucleoside Analogs',
                        mechanism: 'Mimic nucleosides, terminate DNA/RNA synthesis.',
                        side_effects: ['Bone marrow suppression', 'Nephrotoxicity', 'CNS effects'],
                        interactions: 'Probenecid increases levels.',
                        drugs: [
                            { name: 'Acyclovir', features: 'HSV and VZV selective.', choice: 'HSV encephalitis, VZV infections.', indications: ['HSV Infections', 'VZV Infections'], contraindications: ['Dehydration'] },
                            { name: 'Ganciclovir', features: 'CMV activity, more toxic.', choice: 'CMV retinitis in AIDS.', indications: ['CMV Infections'], contraindications: ['Neutropenia'] },
                            { name: 'Ribavirin', features: 'Broad-spectrum antiviral.', choice: 'RSV, hepatitis C (with interferon).', indications: ['RSV', 'Hepatitis C'], contraindications: ['Pregnancy', 'Anemia'] }
                        ]
                    },
                    {
                        name: 'Neuraminidase Inhibitors',
                        mechanism: 'Inhibit viral neuraminidase, prevent viral release.',
                        side_effects: ['Nausea', 'Vomiting', 'Neuropsychiatric effects'],
                        interactions: 'Few significant interactions.',
                        drugs: [
                            { name: 'Oseltamivir', features: 'Oral bioavailability.', choice: 'Influenza treatment and prophylaxis.', indications: ['Influenza'], contraindications: ['Hypersensitivity'] },
                            { name: 'Zanamivir', features: 'Inhaled formulation.', choice: 'Influenza (when oseltamivir resistant).', indications: ['Influenza'], contraindications: ['Asthma', 'COPD'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antimalarials',
                pharma_classes: [
                    {
                        name: 'Quinoline Antimalarials',
                        mechanism: 'Interfere with heme detoxification in Plasmodium parasites.',
                        side_effects: ['Cinchonism', 'Hemolysis in G6PD deficiency', 'Retinal toxicity'],
                        interactions: 'QT-prolonging drugs increase arrhythmia risk.',
                        drugs: [
                            { name: 'Chloroquine', features: 'Oral and parenteral, resistance widespread.', choice: 'Malaria in chloroquine-sensitive areas.', indications: ['Malaria', 'Amebiasis'], contraindications: ['G6PD Deficiency', 'Retinal Disease'] },
                            { name: 'Quinine', features: 'IV for severe malaria, narrow therapeutic window.', choice: 'Severe malaria, chloroquine-resistant P. falciparum.', indications: ['Severe Malaria'], contraindications: ['G6PD Deficiency', 'Optic Neuritis'] },
                            { name: 'Hydroxychloroquine', features: 'Less toxic than chloroquine, immunomodulatory.', choice: 'Rheumatoid arthritis, SLE, malaria prophylaxis.', indications: ['Rheumatoid Arthritis', 'SLE', 'Malaria'], contraindications: ['Retinal Disease', 'G6PD Deficiency'] }
                        ]
                    }
                ]
            },
            {
                name: 'Anti-Tuberculosis Drugs',
                pharma_classes: [
                    {
                        name: 'First-Line Anti-TB Agents',
                        mechanism: 'Various mechanisms targeting mycobacterial metabolism and cell wall synthesis.',
                        side_effects: ['Hepatotoxicity', 'Peripheral neuropathy', 'Optic neuritis'],
                        interactions: 'Rifampin is major CYP450 inducer.',
                        drugs: [
                            { name: 'Rifampin', features: 'Potent CYP450 inducer, orange-red secretions.', choice: 'First-line anti-TB therapy.', indications: ['Tuberculosis', 'Latent TB'], contraindications: ['Severe Liver Disease'] },
                            { name: 'Isoniazid', features: 'Bactericidal against actively dividing mycobacteria.', choice: 'First-line anti-TB, latent TB treatment.', indications: ['Tuberculosis', 'Latent TB'], contraindications: ['Severe Liver Disease', 'Peripheral Neuropathy'] },
                            { name: 'Ethambutol', features: 'Bacteriostatic, monitor for optic neuritis.', choice: 'First-line anti-TB to prevent resistance.', indications: ['Tuberculosis'], contraindications: ['Optic Neuritis', 'Renal Impairment'] },
                            { name: 'Pyrazinamide', features: 'Active in acidic environment, sterilizing activity.', choice: 'Intensive phase anti-TB therapy.', indications: ['Tuberculosis'], contraindications: ['Severe Liver Disease', 'Gout'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Endocrine System',
        therapeutic_classes: [
            {
                name: 'Diabetes Medications',
                pharma_classes: [
                    {
                        name: 'Insulin',
                        mechanism: 'Replaces endogenous insulin, promotes glucose uptake and storage.',
                        side_effects: ['Hypoglycemia', 'Weight gain', 'Injection site reactions'],
                        interactions: 'Beta-blockers mask hypoglycemia symptoms.',
                        drugs: [
                            { name: 'Insulin Lispro', features: 'Rapid-acting (15 min onset).', choice: 'Mealtime coverage, rapid correction.', indications: ['Type 1 Diabetes', 'Type 2 Diabetes'], contraindications: ['Hypoglycemia'] },
                            { name: 'Insulin Regular', features: 'Short-acting (30 min onset).', choice: 'Mealtime coverage, DKA treatment.', indications: ['Type 1 Diabetes', 'Type 2 Diabetes', 'DKA'], contraindications: ['Hypoglycemia'] },
                            { name: 'Insulin NPH', features: 'Intermediate-acting (2-4 hr onset).', choice: 'Basal insulin coverage.', indications: ['Type 1 Diabetes', 'Type 2 Diabetes'], contraindications: ['Hypoglycemia'] },
                            { name: 'Insulin Glargine', features: 'Long-acting (24 hr duration).', choice: 'Once-daily basal insulin.', indications: ['Type 1 Diabetes', 'Type 2 Diabetes'], contraindications: ['Hypoglycemia'] }
                        ]
                    },
                    {
                        name: 'Biguanides',
                        mechanism: 'Decrease hepatic glucose production, increase insulin sensitivity.',
                        side_effects: ['GI upset', 'Lactic acidosis (rare)', 'B12 deficiency'],
                        interactions: 'Contrast agents increase lactic acidosis risk.',
                        drugs: [
                            { name: 'Metformin', features: 'First-line therapy, weight neutral.', choice: 'Initial T2DM treatment, PCOS.', indications: ['Type 2 Diabetes', 'PCOS'], contraindications: ['Renal Impairment', 'Heart Failure', 'Alcohol Abuse'] }
                        ]
                    },
                    {
                        name: 'Sulfonylureas',
                        mechanism: 'Stimulate insulin release from pancreatic beta cells.',
                        side_effects: ['Hypoglycemia', 'Weight gain', 'SIADH'],
                        interactions: 'Sulfonamides potentiate effects.',
                        drugs: [
                            { name: 'Glipizide', features: 'Short-acting, liver metabolism.', choice: 'T2DM when metformin insufficient.', indications: ['Type 2 Diabetes'], contraindications: ['Type 1 Diabetes', 'Diabetic Ketoacidosis'] },
                            { name: 'Glyburide', features: 'Long-acting, higher hypoglycemia risk.', choice: 'T2DM, avoid in elderly.', indications: ['Type 2 Diabetes'], contraindications: ['Type 1 Diabetes', 'Renal Impairment'] },
                            { name: 'Glimepiride', features: 'Once-daily dosing.', choice: 'T2DM with compliance issues.', indications: ['Type 2 Diabetes'], contraindications: ['Type 1 Diabetes', 'Diabetic Ketoacidosis'] }
                        ]
                    },
                    {
                        name: 'Thiazolidinediones',
                        mechanism: 'PPAR-γ agonists, increase insulin sensitivity in muscle and fat.',
                        side_effects: ['Weight gain', 'Fluid retention', 'Heart failure', 'Bone fractures'],
                        interactions: 'CYP2C8 inhibitors increase levels.',
                        drugs: [
                            { name: 'Pioglitazone', features: 'Improves insulin sensitivity.', choice: 'T2DM with insulin resistance.', indications: ['Type 2 Diabetes'], contraindications: ['Heart Failure', 'Bladder Cancer History'] }
                        ]
                    },
                    {
                        name: 'DPP-4 Inhibitors',
                        mechanism: 'Inhibit dipeptidyl peptidase-4, increase incretin levels.',
                        side_effects: ['Upper respiratory infections', 'Headache', 'Pancreatitis (rare)'],
                        interactions: 'Few significant interactions.',
                        drugs: [
                            { name: 'Sitagliptin', features: 'Weight neutral, low hypoglycemia risk.', choice: 'T2DM add-on therapy.', indications: ['Type 2 Diabetes'], contraindications: ['Type 1 Diabetes', 'Diabetic Ketoacidosis'] },
                            { name: 'Linagliptin', features: 'Hepatic elimination, safe in renal disease.', choice: 'T2DM with kidney disease.', indications: ['Type 2 Diabetes'], contraindications: ['Type 1 Diabetes'] }
                        ]
                    },
                    {
                        name: 'GLP-1 Receptor Agonists',
                        mechanism: 'Mimic incretin hormones, glucose-dependent insulin release.',
                        side_effects: ['Nausea', 'Vomiting', 'Diarrhea', 'Pancreatitis risk'],
                        interactions: 'Delay gastric emptying, affect oral drug absorption.',
                        drugs: [
                            { name: 'Exenatide', features: 'Twice-daily injection, weight loss.', choice: 'T2DM with obesity.', indications: ['Type 2 Diabetes'], contraindications: ['Type 1 Diabetes', 'Gastroparesis'] },
                            { name: 'Liraglutide', features: 'Once-daily, cardiovascular benefits.', choice: 'T2DM with CV risk.', indications: ['Type 2 Diabetes', 'Obesity'], contraindications: ['MTC History', 'MEN 2'] }
                        ]
                    },
                    {
                        name: 'SGLT2 Inhibitors',
                        mechanism: 'Block sodium-glucose cotransporter-2 in kidneys, increase glucose excretion.',
                        side_effects: ['UTIs', 'Genital mycotic infections', 'DKA risk', 'Dehydration'],
                        interactions: 'Diuretics increase dehydration risk.',
                        drugs: [
                            { name: 'Empagliflozin', features: 'Cardiovascular and renal benefits.', choice: 'T2DM with heart failure or CKD.', indications: ['Type 2 Diabetes', 'Heart Failure'], contraindications: ['Type 1 Diabetes', 'Severe Renal Impairment'] },
                            { name: 'Canagliflozin', features: 'May reduce CV events.', choice: 'T2DM with established CVD.', indications: ['Type 2 Diabetes'], contraindications: ['Severe Renal Impairment', 'Lower Limb Amputation History'] }
                        ]
                    }
                ]
            },
            {
                name: 'Thyroid Medications',
                pharma_classes: [
                    {
                        name: 'Thyroid Hormones',
                        mechanism: 'Replace deficient thyroid hormones T4 and T3.',
                        side_effects: ['Hyperthyroid symptoms', 'Arrhythmias', 'Osteoporosis'],
                        interactions: 'Iron, calcium reduce absorption.',
                        drugs: [
                            { name: 'Levothyroxine', features: 'T4 replacement, converted to T3.', choice: 'Hypothyroidism treatment.', indications: ['Hypothyroidism', 'Thyroid Cancer'], contraindications: ['Untreated Adrenal Insufficiency'] },
                            { name: 'Liothyronine', features: 'T3 replacement, rapid onset.', choice: 'Myxedema coma.', indications: ['Severe Hypothyroidism', 'Myxedema Coma'], contraindications: ['Untreated Adrenal Insufficiency'] }
                        ]
                    },
                    {
                        name: 'Antithyroid Agents',
                        mechanism: 'Inhibit thyroid hormone synthesis.',
                        side_effects: ['Agranulocytosis', 'Hepatotoxicity', 'Rash'],
                        interactions: 'Warfarin effects enhanced.',
                        drugs: [
                            { name: 'Methimazole', features: 'Preferred agent, once-daily dosing.', choice: 'Hyperthyroidism treatment.', indications: ['Hyperthyroidism', 'Graves Disease'], contraindications: ['Pregnancy (1st trimester)'] },
                            { name: 'Propylthiouracil', features: 'Blocks T4 to T3 conversion.', choice: 'Pregnancy, thyroid storm.', indications: ['Hyperthyroidism in Pregnancy', 'Thyroid Storm'], contraindications: ['Severe Liver Disease'] }
                        ]
                    }
                ]
            },
            {
                name: 'Corticosteroids',
                pharma_classes: [
                    {
                        name: 'Glucocorticoids',
                        mechanism: 'Anti-inflammatory and immunosuppressive effects via genomic pathways.',
                        side_effects: ['Hyperglycemia', 'Osteoporosis', 'Immunosuppression', 'Adrenal suppression'],
                        interactions: 'CYP3A4 inducers/inhibitors affect levels.',
                        drugs: [
                            { name: 'Prednisone', features: 'Oral prodrug, converted to prednisolone.', choice: 'Inflammatory conditions, immunosuppression.', indications: ['Inflammatory Diseases', 'Asthma', 'Autoimmune Disorders'], contraindications: ['Systemic Fungal Infections'] },
                            { name: 'Hydrocortisone', features: 'Physiologic replacement dose.', choice: 'Adrenal insufficiency, acute inflammation.', indications: ['Adrenal Insufficiency', 'Inflammatory Skin Conditions'], contraindications: ['Viral Skin Infections'] },
                            { name: 'Dexamethasone', features: 'Long-acting, high potency.', choice: 'Cerebral edema, severe inflammation.', indications: ['Cerebral Edema', 'Severe Asthma'], contraindications: ['Systemic Fungal Infections'] }
                        ]
                    },
                    {
                        name: 'Mineralocorticoids',
                        mechanism: 'Sodium retention and potassium excretion in distal nephron.',
                        side_effects: ['Hypertension', 'Hypokalemia', 'Fluid retention'],
                        interactions: 'NSAIDs reduce effectiveness.',
                        drugs: [
                            { name: 'Fludrocortisone', features: 'Oral mineralocorticoid replacement.', choice: 'Adrenal insufficiency with salt wasting.', indications: ['Primary Adrenal Insufficiency', 'Orthostatic Hypotension'], contraindications: ['Systemic Fungal Infections', 'Hypertension'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Gastrointestinal System',
        therapeutic_classes: [
            {
                name: 'Acid Suppression',
                pharma_classes: [
                    {
                        name: 'Proton Pump Inhibitors',
                        mechanism: 'Irreversibly block H+/K+-ATPase in gastric parietal cells.',
                        side_effects: ['Bone fractures', 'B12 deficiency', 'C. diff infection', 'Rebound acid hypersecretion'],
                        interactions: 'Reduce absorption of pH-dependent drugs.',
                        drugs: [
                            { name: 'Omeprazole', features: 'First PPI, extensive CYP2C19 metabolism.', choice: 'GERD, peptic ulcer disease.', indications: ['GERD', 'Peptic Ulcer Disease', 'H. pylori Eradication'], contraindications: ['Clopidogrel (avoid omeprazole)'] },
                            { name: 'Pantoprazole', features: 'IV formulation available.', choice: 'Upper GI bleeding, ICU stress ulcer prophylaxis.', indications: ['Upper GI Bleeding', 'GERD'], contraindications: ['Hypersensitivity'] },
                            { name: 'Esomeprazole', features: 'S-enantiomer of omeprazole.', choice: 'Erosive esophagitis.', indications: ['Erosive Esophagitis', 'GERD'], contraindications: ['Clopidogrel concerns'] }
                        ]
                    },
                    {
                        name: 'H2 Receptor Antagonists',
                        mechanism: 'Block histamine H2 receptors on gastric parietal cells.',
                        side_effects: ['CNS effects (especially cimetidine)', 'Gynecomastia', 'Drug interactions'],
                        interactions: 'Cimetidine inhibits CYP enzymes.',
                        drugs: [
                            { name: 'Ranitidine', features: 'Fewer drug interactions than cimetidine.', choice: 'GERD, peptic ulcers (when PPI not needed).', indications: ['GERD', 'Peptic Ulcer Disease'], contraindications: ['Porphyria'] },
                            { name: 'Famotidine', features: 'Longest duration, fewest interactions.', choice: 'Preferred H2 blocker.', indications: ['GERD', 'Peptic Ulcer Disease'], contraindications: ['Renal Impairment'] },
                            { name: 'Cimetidine', features: 'Multiple drug interactions via CYP inhibition.', choice: 'Avoid due to interactions.', indications: ['GERD', 'Peptic Ulcer Disease'], contraindications: ['Multiple drug interactions'] }
                        ]
                    },
                    {
                        name: 'Antacids',
                        mechanism: 'Neutralize gastric acid through basic compounds.',
                        side_effects: ['Constipation (aluminum)', 'Diarrhea (magnesium)', 'Electrolyte imbalances'],
                        interactions: 'Affect absorption of many drugs.',
                        drugs: [
                            { name: 'Aluminum Hydroxide', features: 'Constipating, phosphate binding.', choice: 'Hyperphosphatemia in CKD.', indications: ['Hyperphosphatemia', 'Heartburn'], contraindications: ['Constipation'] },
                            { name: 'Magnesium Hydroxide', features: 'Laxative effect.', choice: 'Heartburn with constipation.', indications: ['Heartburn', 'Constipation'], contraindications: ['Renal Impairment', 'Diarrhea'] }
                        ]
                    }
                ]
            },
            {
                name: 'Gastrointestinal Motility',
                pharma_classes: [
                    {
                        name: 'Prokinetic Agents',
                        mechanism: 'Enhance GI motility through various receptor mechanisms.',
                        side_effects: ['Extrapyramidal effects', 'Tardive dyskinesia', 'QT prolongation'],
                        interactions: 'CNS depressants additive effects.',
                        drugs: [
                            { name: 'Metoclopramide', features: 'D2 antagonist, 5-HT4 agonist.', choice: 'Gastroparesis, postoperative nausea.', indications: ['Gastroparesis', 'Postoperative Nausea'], contraindications: ['GI Obstruction', 'Parkinson Disease'] },
                            { name: 'Domperidone', features: 'Peripheral D2 antagonist.', choice: 'Gastroparesis (not FDA approved in US).', indications: ['Gastroparesis'], contraindications: ['Cardiac Arrhythmias'] }
                        ]
                    },
                    {
                        name: 'Antidiarrheals',
                        mechanism: 'Reduce intestinal motility and fluid secretion.',
                        side_effects: ['Constipation', 'CNS depression', 'Dependency potential'],
                        interactions: 'MAOIs contraindicated with loperamide.',
                        drugs: [
                            { name: 'Loperamide', features: 'Opioid receptor agonist, poor CNS penetration.', choice: 'Acute diarrhea, IBS-D.', indications: ['Acute Diarrhea', 'IBS with Diarrhea'], contraindications: ['Bloody Diarrhea', 'C. diff Colitis'] },
                            { name: 'Diphenoxylate/Atropine', features: 'Opioid with anticholinergic to prevent abuse.', choice: 'Chronic diarrhea.', indications: ['Chronic Diarrhea'], contraindications: ['Pseudomembranous Colitis'] }
                        ]
                    },
                    {
                        name: 'Laxatives',
                        mechanism: 'Various mechanisms to promote bowel movements.',
                        side_effects: ['Electrolyte imbalances', 'Dependency', 'Dehydration'],
                        interactions: 'May affect absorption of other drugs.',
                        drugs: [
                            { name: 'Psyllium', features: 'Bulk-forming fiber.', choice: 'Chronic constipation, IBS.', indications: ['Constipation', 'IBS'], contraindications: ['GI Obstruction'] },
                            { name: 'Docusate', features: 'Stool softener.', choice: 'Prevention of constipation.', indications: ['Constipation Prevention'], contraindications: ['GI Obstruction'] },
                            { name: 'Senna', features: 'Stimulant laxative.', choice: 'Acute constipation.', indications: ['Acute Constipation'], contraindications: ['GI Obstruction', 'Inflammatory Bowel Disease'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Pain Management',
        therapeutic_classes: [
            {
                name: 'Analgesics',
                pharma_classes: [
                    {
                        name: 'NSAIDs',
                        mechanism: 'Inhibit cyclooxygenase enzymes, reduce prostaglandin synthesis.',
                        side_effects: ['GI ulceration', 'Renal impairment', 'Cardiovascular risk', 'Platelet dysfunction'],
                        interactions: 'Warfarin, ACE inhibitors, lithium.',
                        interaction_explanation: 'WARFARIN: MECHANISM - NSAIDs displace warfarin from protein binding sites (increasing free active drug) and independently inhibit platelet aggregation via COX-1 blockade. Some NSAIDs also inhibit warfarin metabolism. CONSEQUENCE - Dramatically increased bleeding risk through dual anticoagulant/antiplatelet effects. ACE INHIBITORS: MECHANISM - NSAIDs block cyclooxygenase, reducing prostaglandin E2 and prostacyclin production. These prostaglandins normally cause vasodilation and help maintain renal blood flow. CONSEQUENCE - Reduced antihypertensive efficacy and increased risk of acute kidney injury. LITHIUM: MECHANISM - NSAIDs reduce renal blood flow and glomerular filtration rate, decreasing lithium clearance. Lithium has a narrow therapeutic window. CONSEQUENCE - Lithium toxicity with neurological symptoms (tremor, confusion, seizures) and potential nephrotoxicity.',
                        drugs: [
                            { name: 'Ibuprofen', features: 'Short half-life, reversible COX inhibition.', choice: 'Mild-moderate pain, fever.', indications: ['Pain', 'Fever', 'Inflammation'], contraindications: ['Active GI Bleeding', 'Severe Heart Failure'] },
                            { name: 'Naproxen', features: 'Longer half-life, twice-daily dosing.', choice: 'Chronic inflammatory conditions.', indications: ['Arthritis', 'Chronic Pain'], contraindications: ['Active GI Bleeding', 'Severe Renal Impairment'] },
                            { name: 'Celecoxib', features: 'COX-2 selective, reduced GI toxicity.', choice: 'Arthritis with GI risk factors.', indications: ['Osteoarthritis', 'Rheumatoid Arthritis'], contraindications: ['Sulfa Allergy', 'Cardiovascular Disease'] },
                            { name: 'Aspirin', features: 'Irreversible COX inhibition, antiplatelet.', choice: 'Cardiovascular protection, antipyretic.', indications: ['Cardiovascular Protection', 'Fever', 'Pain'], contraindications: ['Active Bleeding', 'Children with Viral Illness'] }
                        ]
                    },
                    {
                        name: 'Acetaminophen',
                        mechanism: 'Inhibits CNS cyclooxygenase, exact mechanism unclear.',
                        side_effects: ['Hepatotoxicity (dose-dependent)', 'Rare skin reactions'],
                        interactions: 'Warfarin (high doses), alcohol increases hepatotoxicity.',
                        drugs: [
                            { name: 'Acetaminophen', features: 'No anti-inflammatory effects, hepatic metabolism.', choice: 'Fever, pain when NSAIDs contraindicated.', indications: ['Fever', 'Pain'], contraindications: ['Severe Liver Disease', 'Alcohol Abuse'] }
                        ]
                    },
                    {
                        name: 'Opioid Analgesics',
                        mechanism: 'Activate opioid receptors in CNS and periphery.',
                        side_effects: ['Respiratory depression', 'Constipation', 'Dependence', 'Tolerance'],
                        interactions: 'CNS depressants, MAOIs, CYP3A4 inhibitors.',
                        drugs: [
                            { name: 'Morphine', features: 'Prototype opioid, active metabolites.', choice: 'Severe acute pain, end-of-life care.', indications: ['Severe Pain', 'Myocardial Infarction'], contraindications: ['Respiratory Depression', 'Paralytic Ileus'] },
                            { name: 'Codeine', features: 'Prodrug, converted to morphine by CYP2D6.', choice: 'Mild-moderate pain, cough.', indications: ['Mild Pain', 'Cough'], contraindications: ['CYP2D6 Ultra-rapid Metabolizers', 'Children <12'] },
                            { name: 'Oxycodone', features: 'Semi-synthetic, high oral bioavailability.', choice: 'Moderate-severe pain.', indications: ['Moderate to Severe Pain'], contraindications: ['Respiratory Depression'] },
                            { name: 'Fentanyl', features: 'High potency, rapid onset, transdermal available.', choice: 'Severe chronic pain, anesthesia.', indications: ['Severe Chronic Pain', 'Anesthesia'], contraindications: ['Opioid-naive Patients (transdermal)'] },
                            { name: 'Tramadol', features: 'Weak opioid receptor agonist, SNRI activity.', choice: 'Moderate pain, lower abuse potential.', indications: ['Moderate Pain'], contraindications: ['Seizure Disorders', 'MAOIs'] }
                        ]
                    },
                    {
                        name: 'Opioid Antagonists',
                        mechanism: 'Block opioid receptors, reverse opioid effects.',
                        side_effects: ['Precipitated withdrawal', 'Hypertension', 'Arrhythmias'],
                        interactions: 'Reverses analgesic effects of opioids.',
                        drugs: [
                            { name: 'Naloxone', features: 'Short duration, IV/IM/nasal administration.', choice: 'Opioid overdose reversal.', indications: ['Opioid Overdose'], contraindications: ['Hypersensitivity'] },
                            { name: 'Naltrexone', features: 'Long-acting, oral formulation.', choice: 'Opioid use disorder, alcohol dependence.', indications: ['Opioid Use Disorder', 'Alcohol Dependence'], contraindications: ['Current Opioid Use'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antiemetics',
                pharma_classes: [
                    {
                        name: 'Serotonin Antagonists',
                        mechanism: 'Block 5-HT3 receptors in chemoreceptor trigger zone.',
                        side_effects: ['Headache', 'Constipation', 'QT prolongation'],
                        interactions: 'CYP3A4 substrates.',
                        drugs: [
                            { name: 'Ondansetron', features: 'Highly effective for chemotherapy-induced nausea.', choice: 'Chemotherapy-induced nausea, postoperative nausea.', indications: ['Chemotherapy-Induced Nausea', 'Postoperative Nausea'], contraindications: ['Congenital Long QT Syndrome'] },
                            { name: 'Granisetron', features: 'Longer duration than ondansetron.', choice: 'Chemotherapy-induced nausea.', indications: ['Chemotherapy-Induced Nausea'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Dopamine Antagonists',
                        mechanism: 'Block dopamine D2 receptors in chemoreceptor trigger zone.',
                        side_effects: ['Extrapyramidal effects', 'Tardive dyskinesia', 'Hyperprolactinemia'],
                        interactions: 'CNS depressants.',
                        drugs: [
                            { name: 'Prochlorperazine', features: 'Phenothiazine antiemetic.', choice: 'Severe nausea, migraine-associated nausea.', indications: ['Severe Nausea', 'Migraine'], contraindications: ['Parkinson Disease', 'Bone Marrow Depression'] },
                            { name: 'Promethazine', features: 'Antihistamine with antiemetic properties.', choice: 'Motion sickness, pregnancy-related nausea.', indications: ['Motion Sickness', 'Pregnancy-Related Nausea'], contraindications: ['Children <2 years'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Renal/Genitourinary System',
        therapeutic_classes: [
            {
                name: 'Diuretics',
                pharma_classes: [
                    {
                        name: 'Loop Diuretics',
                        mechanism: 'Inhibit NKCC2 transporter in thick ascending limb of loop of Henle.',
                        side_effects: ['Hypokalemia', 'Hyponatremia', 'Ototoxicity', 'Hyperuricemia'],
                        interactions: 'Aminoglycosides (increased ototoxicity), lithium (increased levels).',
                        interaction_explanation: 'AMINOGLYCOSIDES: MECHANISM - Both loop diuretics and aminoglycosides have direct ototoxic effects on hair cells in the cochlea. Loop diuretics may increase aminoglycoside concentration in the inner ear. CONSEQUENCE - Synergistic ototoxicity leading to permanent hearing loss, especially high-frequency hearing. LITHIUM: MECHANISM - Loop diuretics cause volume depletion, leading to increased proximal tubule lithium reabsorption. CONSEQUENCE - Elevated lithium levels with risk of lithium toxicity including tremor, confusion, and nephrotoxicity.',
                        drugs: [
                            { name: 'Furosemide', features: 'Most commonly used loop diuretic.', choice: 'Heart failure, pulmonary edema.', indications: ['Heart Failure', 'Pulmonary Edema', 'Edema'], contraindications: ['Anuria', 'Sulfonamide Allergy'] },
                            { name: 'Bumetanide', features: '40x more potent than furosemide.', choice: 'Patients with furosemide resistance.', indications: ['Heart Failure', 'Edema'], contraindications: ['Anuria', 'Sulfonamide Allergy'] },
                            { name: 'Torsemide', features: 'Longer half-life, better bioavailability.', choice: 'Heart failure with poor oral absorption.', indications: ['Heart Failure', 'Hypertension'], contraindications: ['Anuria', 'Sulfonamide Allergy'] }
                        ]
                    },
                    {
                        name: 'Thiazide Diuretics',
                        mechanism: 'Inhibit NCC transporter in distal convoluted tubule.',
                        side_effects: ['Hypokalemia', 'Hyperuricemia', 'Hyperglycemia', 'Hyperlipidemia'],
                        interactions: 'Lithium (increased levels), NSAIDs (reduced efficacy).',
                        interaction_explanation: 'LITHIUM: MECHANISM - Thiazides cause mild volume depletion, increasing proximal tubule sodium and lithium reabsorption. CONSEQUENCE - Increased lithium levels with risk of toxicity. NSAIDS: MECHANISM - Thiazides work partly through prostaglandin-mediated vasodilation. NSAIDs inhibit prostaglandin synthesis. CONSEQUENCE - Reduced antihypertensive efficacy and potential for acute kidney injury.',
                        drugs: [
                            { name: 'Hydrochlorothiazide (HCTZ)', features: 'Most common thiazide.', choice: 'First-line for hypertension.', indications: ['Hypertension', 'Edema'], contraindications: ['Anuria', 'Sulfonamide Allergy'] },
                            { name: 'Chlorthalidone', features: 'Longer half-life than HCTZ.', choice: 'Hypertension with better outcomes data.', indications: ['Hypertension'], contraindications: ['Anuria', 'Sulfonamide Allergy'] },
                            { name: 'Indapamide', features: 'Less metabolic side effects.', choice: 'Diabetes with hypertension.', indications: ['Hypertension'], contraindications: ['Anuria', 'Sulfonamide Allergy'] }
                        ]
                    },
                    {
                        name: 'Potassium-Sparing Diuretics',
                        mechanism: 'Either block aldosterone receptors (spironolactone) or ENaC channels (amiloride).',
                        side_effects: ['Hyperkalemia', 'Gynecomastia (spironolactone)', 'Menstrual irregularities'],
                        interactions: 'ACE inhibitors, ARBs (hyperkalemia risk).',
                        interaction_explanation: 'ACE INHIBITORS/ARBS: MECHANISM - ACE inhibitors and ARBs reduce aldosterone production, leading to potassium retention. Potassium-sparing diuretics independently block potassium excretion. CONSEQUENCE - Additive hyperkalemia with risk of fatal cardiac arrhythmias, especially in patients with kidney disease or diabetes.',
                        drugs: [
                            { name: 'Spironolactone', features: 'Aldosterone receptor antagonist.', choice: 'Heart failure, primary aldosteronism.', indications: ['Heart Failure', 'Primary Aldosteronism', 'Hirsutism'], contraindications: ['Hyperkalemia', 'Anuria'] },
                            { name: 'Amiloride', features: 'ENaC channel blocker.', choice: 'Hypertension without hormonal effects.', indications: ['Hypertension', 'Edema'], contraindications: ['Hyperkalemia', 'Anuria'] },
                            { name: 'Eplerenone', features: 'Selective aldosterone antagonist.', choice: 'Post-MI heart failure without gynecomastia.', indications: ['Post-MI Heart Failure', 'Hypertension'], contraindications: ['Hyperkalemia', 'Severe Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'Carbonic Anhydrase Inhibitors',
                        mechanism: 'Inhibit carbonic anhydrase in proximal tubule, reducing sodium reabsorption.',
                        side_effects: ['Metabolic acidosis', 'Hypokalemia', 'Kidney stones'],
                        interactions: 'Salicylates (increased toxicity).',
                        interaction_explanation: 'SALICYLATES: MECHANISM - Both carbonic anhydrase inhibitors and salicylates can cause metabolic acidosis. Acetazolamide may also increase salicylate levels by altering renal elimination. CONSEQUENCE - Enhanced salicylate toxicity with confusion, tinnitus, and potentially fatal metabolic acidosis.',
                        drugs: [
                            { name: 'Acetazolamide', features: 'Weak diuretic, crosses blood-brain barrier.', choice: 'Glaucoma, altitude sickness.', indications: ['Glaucoma', 'Altitude Sickness', 'Epilepsy'], contraindications: ['Sulfonamide Allergy', 'Severe Renal Disease'] }
                        ]
                    }
                ]
            },
            {
                name: 'Benign Prostatic Hyperplasia (BPH)',
                pharma_classes: [
                    {
                        name: 'Alpha-1 Blockers',
                        mechanism: 'Block α1-adrenergic receptors in prostate smooth muscle, reducing urethral resistance.',
                        side_effects: ['Orthostatic hypotension', 'Dizziness', 'Retrograde ejaculation'],
                        interactions: 'Antihypertensives (additive hypotension), PDE5 inhibitors.',
                        interaction_explanation: 'ANTIHYPERTENSIVES: MECHANISM - Alpha-1 blockers cause vasodilation and reduced peripheral resistance. Combined with other antihypertensives, this can cause excessive hypotension. CONSEQUENCE - Symptomatic hypotension, falls, and syncope, especially with first dose or dose increases.',
                        drugs: [
                            { name: 'Tamsulosin', features: 'Selective for α1A receptors in prostate.', choice: 'BPH with minimal cardiovascular effects.', indications: ['Benign Prostatic Hyperplasia'], contraindications: ['Severe Hepatic Impairment'] },
                            { name: 'Doxazosin', features: 'Non-selective α1 blocker.', choice: 'BPH with hypertension.', indications: ['Benign Prostatic Hyperplasia', 'Hypertension'], contraindications: ['Hypersensitivity'] },
                            { name: 'Terazosin', features: 'Long-acting α1 blocker.', choice: 'BPH with hypertension.', indications: ['Benign Prostatic Hyperplasia', 'Hypertension'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: '5α-Reductase Inhibitors',
                        mechanism: 'Inhibit conversion of testosterone to dihydrotestosterone (DHT), reducing prostate size.',
                        side_effects: ['Decreased libido', 'Erectile dysfunction', 'Gynecomastia'],
                        interactions: 'Minimal drug interactions.',
                        drugs: [
                            { name: 'Finasteride', features: 'Inhibits type II 5α-reductase.', choice: 'BPH with enlarged prostate, male pattern baldness.', indications: ['Benign Prostatic Hyperplasia', 'Male Pattern Baldness'], contraindications: ['Pregnancy', 'Women of Childbearing Age'] },
                            { name: 'Dutasteride', features: 'Inhibits both type I and II 5α-reductase.', choice: 'BPH with faster symptom improvement.', indications: ['Benign Prostatic Hyperplasia'], contraindications: ['Pregnancy', 'Women of Childbearing Age'] }
                        ]
                    }
                ]
            },
            {
                name: 'Urinary Tract Infections',
                pharma_classes: [
                    {
                        name: 'Urinary Antiseptics',
                        mechanism: 'Concentrated in urine to achieve bactericidal levels in urinary tract.',
                        side_effects: ['GI upset', 'Pulmonary toxicity (nitrofurantoin)', 'Hemolysis in G6PD deficiency'],
                        interactions: 'Antacids (reduced absorption).',
                        drugs: [
                            { name: 'Nitrofurantoin', features: 'Concentrated in urine, minimal systemic absorption.', choice: 'Uncomplicated cystitis, UTI prophylaxis.', indications: ['Uncomplicated UTI', 'UTI Prophylaxis'], contraindications: ['Severe Renal Impairment', 'G6PD Deficiency'] },
                            { name: 'Trimethoprim-Sulfamethoxazole', features: 'Synergistic folate antagonism.', choice: 'UTI, PCP prophylaxis.', indications: ['UTI', 'PCP Pneumonia'], contraindications: ['Sulfonamide Allergy', 'Severe Renal Impairment'] }
                        ]
                    }
                ]
            },
            {
                name: 'ADH-Related Disorders',
                pharma_classes: [
                    {
                        name: 'ADH Agonists',
                        mechanism: 'Activate V2 receptors in collecting duct, increasing water reabsorption.',
                        side_effects: ['Hyponatremia', 'Water intoxication', 'Headache'],
                        interactions: 'NSAIDs (potentiate ADH effects).',
                        drugs: [
                            { name: 'Desmopressin (DDAVP)', features: 'Synthetic ADH analog with longer duration.', choice: 'Central diabetes insipidus, nocturnal enuresis.', indications: ['Central Diabetes Insipidus', 'Nocturnal Enuresis', 'Hemophilia A'], contraindications: ['Hyponatremia', 'Severe Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'ADH Antagonists',
                        mechanism: 'Block V2 receptors, promoting free water excretion.',
                        side_effects: ['Hypernatremia', 'Dehydration', 'Thirst'],
                        interactions: 'CYP3A4 inhibitors (increased levels).',
                        drugs: [
                            { name: 'Tolvaptan', features: 'Oral V2 receptor antagonist.', choice: 'SIADH, hyponatremia.', indications: ['SIADH', 'Hyponatremia'], contraindications: ['Hypernatremia', 'Inability to Sense Thirst'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Hematology/Oncology',
        therapeutic_classes: [
            {
                name: 'Anticoagulants',
                pharma_classes: [
                    {
                        name: 'Vitamin K Antagonists',
                        mechanism: 'Inhibit vitamin K epoxide reductase, preventing synthesis of factors II, VII, IX, X.',
                        side_effects: ['Bleeding', 'Teratogenic', 'Skin necrosis'],
                        interactions: 'Many drugs affect INR - antibiotics, NSAIDs, amiodarone.',
                        interaction_explanation: 'ANTIBIOTICS: MECHANISM - Antibiotics kill gut bacteria that produce vitamin K, reducing vitamin K availability. CONSEQUENCE - Enhanced anticoagulation and increased bleeding risk. NSAIDS: MECHANISM - NSAIDs inhibit platelet function and increase GI bleeding risk. CONSEQUENCE - Additive bleeding risk, especially GI bleeding.',
                        drugs: [
                            { name: 'Warfarin', features: 'Requires INR monitoring, reversible with vitamin K.', choice: 'Long-term anticoagulation, mechanical valves.', indications: ['Atrial Fibrillation', 'DVT/PE', 'Mechanical Heart Valves'], contraindications: ['Pregnancy', 'Active Bleeding'] }
                        ]
                    },
                    {
                        name: 'Heparins',
                        mechanism: 'Bind antithrombin III, enhancing inactivation of thrombin and factor Xa.',
                        side_effects: ['Bleeding', 'HIT (heparin-induced thrombocytopenia)', 'Osteoporosis'],
                        interactions: 'Antiplatelet agents (increased bleeding).',
                        interaction_explanation: 'ANTIPLATELET AGENTS: MECHANISM - Heparins prevent fibrin formation while antiplatelets prevent platelet aggregation. CONSEQUENCE - Synergistic bleeding risk affecting both primary and secondary hemostasis.',
                        drugs: [
                            { name: 'Unfractionated Heparin', features: 'IV/SC, requires aPTT monitoring.', choice: 'Acute anticoagulation, surgery.', indications: ['DVT/PE', 'ACS', 'Perioperative'], contraindications: ['HIT History', 'Active Bleeding'] },
                            { name: 'Enoxaparin (LMWH)', features: 'Subcutaneous, predictable dosing.', choice: 'Outpatient DVT treatment, prophylaxis.', indications: ['DVT/PE', 'ACS', 'VTE Prophylaxis'], contraindications: ['Severe Renal Impairment', 'Active Bleeding'] }
                        ]
                    },
                    {
                        name: 'Direct Oral Anticoagulants (DOACs)',
                        mechanism: 'Direct inhibition of thrombin (dabigatran) or factor Xa (rivaroxaban, apixaban).',
                        side_effects: ['Bleeding', 'GI upset', 'No easy reversal (except dabigatran)'],
                        interactions: 'P-gp inhibitors (increased levels), rifampin (decreased levels).',
                        interaction_explanation: 'P-GLYCOPROTEIN INHIBITORS: MECHANISM - DOACs are substrates for P-gp efflux pump. Inhibitors like amiodarone, verapamil increase DOAC levels. CONSEQUENCE - Increased bleeding risk requiring dose reduction.',
                        drugs: [
                            { name: 'Dabigatran', features: 'Direct thrombin inhibitor, reversible with idarucizumab.', choice: 'A-fib with normal renal function.', indications: ['Atrial Fibrillation', 'DVT/PE'], contraindications: ['Mechanical Heart Valves', 'Severe Renal Impairment'] },
                            { name: 'Rivaroxaban', features: 'Factor Xa inhibitor, once daily dosing.', choice: 'A-fib, VTE treatment/prophylaxis.', indications: ['Atrial Fibrillation', 'DVT/PE', 'VTE Prophylaxis'], contraindications: ['Severe Hepatic Impairment'] },
                            { name: 'Apixaban', features: 'Factor Xa inhibitor, twice daily, lowest bleeding risk.', choice: 'A-fib in elderly, bleeding-prone patients.', indications: ['Atrial Fibrillation', 'DVT/PE'], contraindications: ['Active Bleeding'] }
                        ]
                    }
                ]
            },
            {
                name: 'Antiplatelet Agents',
                pharma_classes: [
                    {
                        name: 'Cyclooxygenase Inhibitors',
                        mechanism: 'Irreversibly inhibit COX-1, preventing thromboxane A2 synthesis and platelet aggregation.',
                        side_effects: ['GI bleeding', 'Peptic ulcers', 'Reye syndrome (children)'],
                        interactions: 'Warfarin (increased bleeding), methotrexate (increased toxicity).',
                        interaction_explanation: 'WARFARIN: MECHANISM - Aspirin affects platelet function while warfarin affects coagulation cascade. CONSEQUENCE - Additive bleeding risk affecting both primary and secondary hemostasis.',
                        drugs: [
                            { name: 'Aspirin', features: 'Irreversible COX inhibition, low-dose cardioprotective.', choice: 'Primary/secondary CVD prevention.', indications: ['ACS', 'Stroke Prevention', 'MI Prevention'], contraindications: ['Active GI Bleeding', 'Children with Viral Illness'] }
                        ]
                    },
                    {
                        name: 'P2Y12 Inhibitors',
                        mechanism: 'Block P2Y12 receptors on platelets, preventing ADP-induced platelet aggregation.',
                        side_effects: ['Bleeding', 'Thrombotic thrombocytopenic purpura (TTP)'],
                        interactions: 'CYP2C19 inhibitors affect clopidogrel efficacy.',
                        interaction_explanation: 'CYP2C19 INHIBITORS: MECHANISM - Clopidogrel is a prodrug requiring CYP2C19 activation. Inhibitors like omeprazole reduce active metabolite formation. CONSEQUENCE - Reduced antiplatelet efficacy and increased thrombotic risk.',
                        drugs: [
                            { name: 'Clopidogrel', features: 'Prodrug, requires CYP2C19 activation.', choice: 'Dual antiplatelet therapy with aspirin.', indications: ['ACS', 'PCI', 'Stroke Prevention'], contraindications: ['Active Bleeding', 'Severe Hepatic Impairment'] },
                            { name: 'Ticagrelor', features: 'Reversible inhibitor, more potent than clopidogrel.', choice: 'ACS, high thrombotic risk patients.', indications: ['ACS', 'High-Risk CAD'], contraindications: ['Active Bleeding', 'History of ICH'] }
                        ]
                    }
                ]
            },
            {
                name: 'Chemotherapy Agents',
                pharma_classes: [
                    {
                        name: 'Alkylating Agents',
                        mechanism: 'Cross-link DNA strands, preventing replication and causing cell death.',
                        side_effects: ['Myelosuppression', 'Secondary malignancies', 'Infertility'],
                        interactions: 'Live vaccines (immunosuppression).',
                        drugs: [
                            { name: 'Cyclophosphamide', features: 'Requires hepatic activation, hemorrhagic cystitis risk.', choice: 'Lymphomas, autoimmune diseases.', indications: ['Lymphoma', 'Breast Cancer', 'Autoimmune Diseases'], contraindications: ['Severe Myelosuppression', 'Pregnancy'] },
                            { name: 'Mechlorethamine', features: 'Nitrogen mustard, vesicant.', choice: 'Hodgkin lymphoma.', indications: ['Hodgkin Lymphoma'], contraindications: ['Pregnancy', 'Severe Myelosuppression'] }
                        ]
                    },
                    {
                        name: 'Antimetabolites',
                        mechanism: 'Mimic normal metabolites, interfere with DNA/RNA synthesis.',
                        side_effects: ['Myelosuppression', 'Mucositis', 'Hepatotoxicity'],
                        interactions: 'Folate supplements reduce methotrexate efficacy.',
                        drugs: [
                            { name: 'Methotrexate', features: 'Folate analog, requires leucovorin rescue.', choice: 'ALL, rheumatoid arthritis.', indications: ['Leukemia', 'Rheumatoid Arthritis', 'Psoriasis'], contraindications: ['Pregnancy', 'Severe Renal/Hepatic Impairment'] },
                            { name: '5-Fluorouracil (5-FU)', features: 'Pyrimidine analog, S-phase specific.', choice: 'Colorectal, breast cancer.', indications: ['Colorectal Cancer', 'Breast Cancer'], contraindications: ['DPD Deficiency', 'Pregnancy'] }
                        ]
                    }
                ]
            },
            {
                name: 'Hematopoietic Growth Factors',
                pharma_classes: [
                    {
                        name: 'Colony Stimulating Factors',
                        mechanism: 'Stimulate bone marrow production and differentiation of blood cells.',
                        side_effects: ['Bone pain', 'Splenomegaly', 'Injection site reactions'],
                        interactions: 'Lithium may potentiate neutrophil production.',
                        drugs: [
                            { name: 'Filgrastim (G-CSF)', features: 'Stimulates neutrophil production.', choice: 'Chemotherapy-induced neutropenia.', indications: ['Chemotherapy-Induced Neutropenia', 'Bone Marrow Transplant'], contraindications: ['Hypersensitivity'] },
                            { name: 'Epoetin alfa (EPO)', features: 'Stimulates red blood cell production.', choice: 'Anemia in CKD, chemotherapy.', indications: ['CKD Anemia', 'Chemotherapy-Induced Anemia'], contraindications: ['Uncontrolled Hypertension', 'Pure Red Cell Aplasia'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Immunology/Rheumatology',
        therapeutic_classes: [
            {
                name: 'Immunosuppressants',
                pharma_classes: [
                    {
                        name: 'Disease-Modifying Antirheumatic Drugs (DMARDs)',
                        mechanism: 'Various mechanisms to suppress immune system and slow disease progression.',
                        side_effects: ['Immunosuppression', 'Hepatotoxicity', 'Myelosuppression'],
                        interactions: 'Live vaccines contraindicated, increased infection risk.',
                        interaction_explanation: 'LIVE VACCINES: MECHANISM - DMARDs suppress immune system function, reducing ability to mount adequate immune response. CONSEQUENCE - Risk of disseminated infection from live vaccines, potentially fatal. Use killed vaccines only.',
                        drugs: [
                            { name: 'Methotrexate', features: 'Folate analog, requires folate supplementation.', choice: 'First-line DMARD for RA.', indications: ['Rheumatoid Arthritis', 'Psoriatic Arthritis', 'Crohn Disease'], contraindications: ['Pregnancy', 'Severe Renal/Hepatic Impairment'] },
                            { name: 'Sulfasalazine', features: 'Anti-inflammatory and immunosuppressive.', choice: 'RA, inflammatory bowel disease.', indications: ['Rheumatoid Arthritis', 'Ulcerative Colitis'], contraindications: ['Sulfonamide Allergy', 'G6PD Deficiency'] },
                            { name: 'Hydroxychloroquine', features: 'Antimalarial with anti-inflammatory effects.', choice: 'Mild RA, SLE, malaria prophylaxis.', indications: ['Rheumatoid Arthritis', 'SLE', 'Malaria'], contraindications: ['Retinal Disease', 'G6PD Deficiency'] }
                        ]
                    },
                    {
                        name: 'Biologic DMARDs',
                        mechanism: 'Target specific inflammatory mediators (TNF-α, IL-1, IL-6).',
                        side_effects: ['Increased infection risk', 'Injection site reactions', 'Reactivation of TB'],
                        interactions: 'Live vaccines, other immunosuppressants.',
                        interaction_explanation: 'OTHER IMMUNOSUPPRESSANTS: MECHANISM - Additive immunosuppressive effects when combined with conventional DMARDs or corticosteroids. CONSEQUENCE - Significantly increased risk of opportunistic infections including PCP, TB reactivation, and fungal infections.',
                        drugs: [
                            { name: 'Adalimumab', features: 'TNF-α inhibitor, subcutaneous injection.', choice: 'RA, psoriatic arthritis, IBD.', indications: ['Rheumatoid Arthritis', 'Psoriatic Arthritis', 'Crohn Disease'], contraindications: ['Active Infection', 'Latent TB'] },
                            { name: 'Rituximab', features: 'Anti-CD20, depletes B cells.', choice: 'RA refractory to TNF inhibitors.', indications: ['Rheumatoid Arthritis', 'Non-Hodgkin Lymphoma'], contraindications: ['Active Infection', 'Severe Heart Failure'] }
                        ]
                    }
                ]
            },
            {
                name: 'Corticosteroids',
                pharma_classes: [
                    {
                        name: 'Systemic Corticosteroids',
                        mechanism: 'Bind glucocorticoid receptors, suppress inflammatory gene transcription.',
                        side_effects: ['Osteoporosis', 'Diabetes', 'Infection risk', 'Adrenal suppression'],
                        interactions: 'CYP3A4 inducers reduce efficacy, live vaccines.',
                        interaction_explanation: 'CYP3A4 INDUCERS: MECHANISM - Rifampin, phenytoin increase cortisol metabolism, reducing therapeutic levels. CONSEQUENCE - Loss of anti-inflammatory efficacy, potential disease flare. May need dose adjustment.',
                        drugs: [
                            { name: 'Prednisone', features: 'Oral, intermediate-acting.', choice: 'Inflammatory conditions, immunosuppression.', indications: ['Rheumatoid Arthritis', 'Asthma', 'Allergic Reactions'], contraindications: ['Systemic Fungal Infections'] },
                            { name: 'Methylprednisolone', features: 'IV/PO, more potent than prednisone.', choice: 'Acute inflammatory conditions.', indications: ['Severe Asthma', 'Acute MS Relapse'], contraindications: ['Systemic Fungal Infections'] },
                            { name: 'Dexamethasone', features: 'Long-acting, potent, minimal mineralocorticoid activity.', choice: 'Cerebral edema, high-altitude sickness.', indications: ['Cerebral Edema', 'Adrenal Insufficiency Testing'], contraindications: ['Systemic Fungal Infections'] }
                        ]
                    }
                ]
            },
            {
                name: 'Gout Medications',
                pharma_classes: [
                    {
                        name: 'Uric Acid Lowering Agents',
                        mechanism: 'Reduce uric acid production (allopurinol) or increase excretion (probenecid).',
                        side_effects: ['Gout flares initially', 'Hypersensitivity reactions', 'Kidney stones'],
                        interactions: 'Azathioprine with allopurinol (severe toxicity).',
                        interaction_explanation: 'AZATHIOPRINE: MECHANISM - Allopurinol inhibits xanthine oxidase, which metabolizes azathioprine. This leads to accumulation of toxic metabolites. CONSEQUENCE - Severe myelosuppression and life-threatening bone marrow toxicity requiring dose reduction.',
                        drugs: [
                            { name: 'Allopurinol', features: 'Xanthine oxidase inhibitor.', choice: 'Chronic gout prevention, tumor lysis syndrome.', indications: ['Chronic Gout', 'Hyperuricemia', 'Tumor Lysis Syndrome'], contraindications: ['Acute Gout Attack', 'HLA-B*5801 (Asians)'] },
                            { name: 'Probenecid', features: 'Uricosuric agent, blocks renal reabsorption.', choice: 'Gout in patients with normal kidney function.', indications: ['Chronic Gout'], contraindications: ['Kidney Stones', 'Severe Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'Acute Gout Treatment',
                        mechanism: 'Anti-inflammatory effects to treat acute gout attacks.',
                        side_effects: ['GI upset', 'Diarrhea', 'Neutropenia'],
                        interactions: 'CYP3A4 inhibitors increase colchicine toxicity.',
                        drugs: [
                            { name: 'Colchicine', features: 'Microtubule inhibitor, anti-inflammatory.', choice: 'Acute gout attacks, familial Mediterranean fever.', indications: ['Acute Gout', 'Familial Mediterranean Fever'], contraindications: ['Severe Renal/Hepatic Impairment'] },
                            { name: 'Indomethacin', features: 'Potent NSAID.', choice: 'Acute gout when colchicine contraindicated.', indications: ['Acute Gout', 'Patent Ductus Arteriosus'], contraindications: ['Peptic Ulcer Disease', 'Severe Heart Failure'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Musculoskeletal System',
        therapeutic_classes: [
            {
                name: 'Muscle Relaxants',
                pharma_classes: [
                    {
                        name: 'Central Acting Muscle Relaxants',
                        mechanism: 'Act centrally in spinal cord and brain to reduce muscle spasticity.',
                        side_effects: ['Sedation', 'Dizziness', 'Weakness', 'Hepatotoxicity'],
                        interactions: 'CNS depressants (additive sedation), alcohol.',
                        interaction_explanation: 'CNS DEPRESSANTS: MECHANISM - Additive effects on GABA and other inhibitory neurotransmitter systems. CONSEQUENCE - Enhanced sedation, respiratory depression, and risk of falls, especially in elderly patients.',
                        drugs: [
                            { name: 'Baclofen', features: 'GABA-B agonist, used for spasticity.', choice: 'Multiple sclerosis, spinal cord injury.', indications: ['Multiple Sclerosis', 'Spinal Cord Injury'], contraindications: ['Hypersensitivity'] },
                            { name: 'Tizanidine', features: 'α2-adrenergic agonist.', choice: 'Muscle spasms, spasticity.', indications: ['Muscle Spasms', 'Spasticity'], contraindications: ['Hepatic Impairment'] },
                            { name: 'Cyclobenzaprine', features: 'Tricyclic-like structure.', choice: 'Acute muscle spasms.', indications: ['Acute Muscle Spasms'], contraindications: ['MAOIs', 'Recent MI'] }
                        ]
                    },
                    {
                        name: 'Neuromuscular Blocking Agents',
                        mechanism: 'Block nicotinic receptors at neuromuscular junction.',
                        side_effects: ['Paralysis', 'Respiratory depression', 'Malignant hyperthermia'],
                        interactions: 'Aminoglycosides potentiate blockade.',
                        drugs: [
                            { name: 'Succinylcholine', features: 'Depolarizing blocker, rapid onset/offset.', choice: 'Rapid sequence intubation.', indications: ['Rapid Sequence Intubation'], contraindications: ['Malignant Hyperthermia', 'Hyperkalemia'] },
                            { name: 'Vecuronium', features: 'Non-depolarizing, intermediate duration.', choice: 'Surgical paralysis.', indications: ['Surgical Paralysis'], contraindications: ['Hypersensitivity'] }
                        ]
                    }
                ]
            },
            {
                name: 'Bone Health',
                pharma_classes: [
                    {
                        name: 'Bisphosphonates',
                        mechanism: 'Inhibit osteoclast-mediated bone resorption by binding to hydroxyapatite.',
                        side_effects: ['Esophagitis', 'Osteonecrosis of jaw', 'Atypical fractures'],
                        interactions: 'Calcium, antacids reduce absorption.',
                        interaction_explanation: 'CALCIUM/ANTACIDS: MECHANISM - Divalent cations (Ca2+, Mg2+) chelate bisphosphonates, forming insoluble complexes. CONSEQUENCE - Markedly reduced oral bioavailability and therapeutic efficacy. Take on empty stomach.',
                        drugs: [
                            { name: 'Alendronate', features: 'Weekly dosing, oral.', choice: 'Osteoporosis prevention and treatment.', indications: ['Osteoporosis', 'Paget Disease'], contraindications: ['Esophageal Abnormalities', 'Inability to Stand'] },
                            { name: 'Zoledronic acid', features: 'IV infusion, annual dosing.', choice: 'Severe osteoporosis, hypercalcemia.', indications: ['Osteoporosis', 'Hypercalcemia of Malignancy'], contraindications: ['Severe Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'Calcium and Vitamin D',
                        mechanism: 'Provide building blocks for bone mineralization and enhance calcium absorption.',
                        side_effects: ['Constipation', 'Kidney stones', 'Hypercalcemia'],
                        interactions: 'Thiazide diuretics increase calcium retention.',
                        drugs: [
                            { name: 'Calcium Carbonate', features: 'Requires acid for absorption.', choice: 'Osteoporosis prevention, antacid.', indications: ['Osteoporosis Prevention', 'Hypocalcemia'], contraindications: ['Hypercalcemia', 'Kidney Stones'] },
                            { name: 'Calcitriol', features: 'Active form of vitamin D.', choice: 'Chronic kidney disease, hypoparathyroidism.', indications: ['CKD', 'Hypoparathyroidism'], contraindications: ['Hypercalcemia', 'Vitamin D Toxicity'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Dermatology',
        therapeutic_classes: [
            {
                name: 'Acne Medications',
                pharma_classes: [
                    {
                        name: 'Topical Retinoids',
                        mechanism: 'Normalize follicular keratinization, reduce comedone formation.',
                        side_effects: ['Skin irritation', 'Photosensitivity', 'Teratogenic'],
                        interactions: 'Other topical irritants increase skin irritation.',
                        drugs: [
                            { name: 'Tretinoin', features: 'First-generation retinoid, most studied.', choice: 'Comedonal acne, photoaging.', indications: ['Acne Vulgaris', 'Photoaging'], contraindications: ['Pregnancy', 'Eczema'] },
                            { name: 'Adapalene', features: 'Third-generation, less irritating.', choice: 'Sensitive skin acne.', indications: ['Acne Vulgaris'], contraindications: ['Pregnancy'] }
                        ]
                    },
                    {
                        name: 'Oral Antibiotics',
                        mechanism: 'Reduce Propionibacterium acnes, anti-inflammatory effects.',
                        side_effects: ['GI upset', 'Photosensitivity', 'Antibiotic resistance'],
                        interactions: 'Antacids reduce absorption, oral contraceptives.',
                        drugs: [
                            { name: 'Doxycycline', features: 'Tetracycline, anti-inflammatory properties.', choice: 'Moderate to severe acne.', indications: ['Acne Vulgaris', 'Rosacea'], contraindications: ['Pregnancy', 'Children <8 years'] },
                            { name: 'Minocycline', features: 'Lipophilic tetracycline, CNS penetration.', choice: 'Severe acne, when doxycycline fails.', indications: ['Severe Acne'], contraindications: ['Pregnancy', 'Children <8 years'] }
                        ]
                    },
                    {
                        name: 'Isotretinoin',
                        mechanism: 'Reduces sebum production, normalizes keratinization, anti-inflammatory.',
                        side_effects: ['Severe teratogenicity', 'Depression', 'Dry skin/lips', 'Hepatotoxicity'],
                        interactions: 'Vitamin A supplements (hypervitaminosis A), tetracyclines (pseudotumor cerebri).',
                        interaction_explanation: 'TETRACYCLINES: MECHANISM - Both isotretinoin and tetracyclines can increase intracranial pressure. CONSEQUENCE - Risk of pseudotumor cerebri with severe headaches and vision changes.',
                        drugs: [
                            { name: 'Isotretinoin', features: 'Requires iPLEDGE program, pregnancy prevention.', choice: 'Severe cystic acne, acne resistant to other treatments.', indications: ['Severe Acne'], contraindications: ['Pregnancy', 'Breastfeeding'] }
                        ]
                    }
                ]
            },
            {
                name: 'Topical Antifungals',
                pharma_classes: [
                    {
                        name: 'Azole Antifungals',
                        mechanism: 'Inhibit ergosterol synthesis by blocking 14α-demethylase.',
                        side_effects: ['Local irritation', 'Contact dermatitis'],
                        interactions: 'Minimal systemic absorption, few interactions.',
                        drugs: [
                            { name: 'Clotrimazole', features: 'Broad-spectrum imidazole.', choice: 'Candidiasis, dermatophytes.', indications: ['Tinea Infections', 'Candidiasis'], contraindications: ['Hypersensitivity'] },
                            { name: 'Ketoconazole', features: 'Available as cream and shampoo.', choice: 'Seborrheic dermatitis, tinea versicolor.', indications: ['Seborrheic Dermatitis', 'Tinea Versicolor'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Allylamine Antifungals',
                        mechanism: 'Inhibit squalene epoxidase, fungicidal.',
                        side_effects: ['Local burning', 'Skin irritation'],
                        interactions: 'None significant.',
                        drugs: [
                            { name: 'Terbinafine', features: 'Fungicidal, shorter treatment duration.', choice: 'Dermatophyte infections, onychomycosis.', indications: ['Tinea Infections', 'Onychomycosis'], contraindications: ['Hypersensitivity'] }
                        ]
                    }
                ]
            },
            {
                name: 'Topical Corticosteroids',
                pharma_classes: [
                    {
                        name: 'Low to High Potency Steroids',
                        mechanism: 'Anti-inflammatory, immunosuppressive, vasoconstrictive effects.',
                        side_effects: ['Skin atrophy', 'Striae', 'Systemic absorption', 'Rebound dermatitis'],
                        interactions: 'Occlusive dressings increase absorption.',
                        drugs: [
                            { name: 'Hydrocortisone', features: 'Low potency, safe for face and children.', choice: 'Mild eczema, contact dermatitis.', indications: ['Eczema', 'Contact Dermatitis'], contraindications: ['Viral Skin Infections'] },
                            { name: 'Triamcinolone', features: 'Medium potency, versatile.', choice: 'Moderate inflammatory skin conditions.', indications: ['Psoriasis', 'Eczema'], contraindications: ['Skin Infections'] },
                            { name: 'Clobetasol', features: 'Very high potency, limited use.', choice: 'Severe psoriasis, lichen planus.', indications: ['Severe Psoriasis', 'Lichen Planus'], contraindications: ['Facial Use', 'Children'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Ophthalmology/ENT',
        therapeutic_classes: [
            {
                name: 'Glaucoma Medications',
                pharma_classes: [
                    {
                        name: 'Prostaglandin Analogs',
                        mechanism: 'Increase aqueous humor outflow through uveoscleral pathway.',
                        side_effects: ['Iris pigmentation', 'Eyelash growth', 'Periorbital fat atrophy'],
                        interactions: 'Minimal systemic interactions.',
                        drugs: [
                            { name: 'Latanoprost', features: 'Once daily dosing, most effective IOP reduction.', choice: 'First-line glaucoma treatment.', indications: ['Open-Angle Glaucoma', 'Ocular Hypertension'], contraindications: ['Macular Edema', 'Uveitis'] },
                            { name: 'Bimatoprost', features: 'Prostamide analog, cosmetic eyelash growth.', choice: 'Glaucoma, eyelash hypotrichosis.', indications: ['Glaucoma', 'Eyelash Hypotrichosis'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Beta-Blockers',
                        mechanism: 'Reduce aqueous humor production by blocking β-receptors.',
                        side_effects: ['Bradycardia', 'Bronchospasm', 'Fatigue'],
                        interactions: 'Systemic beta-blockers (additive effects), calcium channel blockers.',
                        interaction_explanation: 'SYSTEMIC BETA-BLOCKERS: MECHANISM - Additive β-adrenergic blockade from topical and systemic routes. CONSEQUENCE - Enhanced bradycardia, heart block, and bronchospasm, especially dangerous in COPD/asthma patients.',
                        drugs: [
                            { name: 'Timolol', features: 'Non-selective beta-blocker, twice daily.', choice: 'Glaucoma when prostaglandins contraindicated.', indications: ['Open-Angle Glaucoma'], contraindications: ['Asthma', 'COPD', 'Heart Block'] },
                            { name: 'Betaxolol', features: 'β1-selective, safer in respiratory disease.', choice: 'Glaucoma with mild respiratory disease.', indications: ['Open-Angle Glaucoma'], contraindications: ['Severe Heart Block'] }
                        ]
                    },
                    {
                        name: 'Carbonic Anhydrase Inhibitors',
                        mechanism: 'Reduce aqueous humor production by inhibiting carbonic anhydrase.',
                        side_effects: ['Metallic taste', 'Stinging', 'Systemic effects if absorbed'],
                        interactions: 'Oral CAIs (additive effects).',
                        drugs: [
                            { name: 'Dorzolamide', features: 'Topical CAI, sulfonamide.', choice: 'Adjunctive glaucoma therapy.', indications: ['Open-Angle Glaucoma'], contraindications: ['Sulfonamide Allergy'] },
                            { name: 'Brinzolamide', features: 'Topical CAI, better tolerated than dorzolamide.', choice: 'Glaucoma with dorzolamide intolerance.', indications: ['Open-Angle Glaucoma'], contraindications: ['Severe Renal Impairment'] }
                        ]
                    }
                ]
            },
            {
                name: 'Ear Medications',
                pharma_classes: [
                    {
                        name: 'Otic Antibiotics',
                        mechanism: 'Local antibiotic therapy for external ear infections.',
                        side_effects: ['Local irritation', 'Ototoxicity if tympanic membrane perforated'],
                        interactions: 'Avoid if eardrum perforation.',
                        drugs: [
                            { name: 'Ciprofloxacin otic', features: 'Fluoroquinolone, broad spectrum.', choice: 'Otitis externa, chronic otitis media.', indications: ['Otitis Externa', 'Chronic Otitis Media'], contraindications: ['Viral Ear Infections'] },
                            { name: 'Polymyxin B/Neomycin/Hydrocortisone', features: 'Combination antibiotic with steroid.', choice: 'Infected otitis externa with inflammation.', indications: ['Otitis Externa'], contraindications: ['Perforated Eardrum', 'Viral Infections'] }
                        ]
                    }
                ]
            },
            {
                name: 'Nasal Medications',
                pharma_classes: [
                    {
                        name: 'Nasal Decongestants',
                        mechanism: 'α1-adrenergic agonists causing vasoconstriction.',
                        side_effects: ['Rebound congestion', 'Hypertension', 'Tachycardia'],
                        interactions: 'MAOIs, tricyclic antidepressants.',
                        drugs: [
                            { name: 'Oxymetazoline', features: 'Long-acting, 12-hour duration.', choice: 'Short-term nasal congestion relief.', indications: ['Nasal Congestion'], contraindications: ['MAOIs', 'Narrow-Angle Glaucoma'] },
                            { name: 'Phenylephrine', features: 'Shorter duration, less rebound.', choice: 'Brief nasal decongestion.', indications: ['Nasal Congestion'], contraindications: ['Severe Hypertension', 'MAOIs'] }
                        ]
                    },
                    {
                        name: 'Intranasal Corticosteroids',
                        mechanism: 'Local anti-inflammatory effects in nasal passages.',
                        side_effects: ['Nasal dryness', 'Epistaxis', 'Septal perforation (rare)'],
                        interactions: 'Minimal systemic absorption.',
                        drugs: [
                            { name: 'Fluticasone', features: 'High potency, low systemic absorption.', choice: 'Allergic rhinitis, nasal polyps.', indications: ['Allergic Rhinitis', 'Nasal Polyps'], contraindications: ['Nasal Infections'] },
                            { name: 'Budesonide', features: 'High first-pass metabolism.', choice: 'Allergic rhinitis in children.', indications: ['Allergic Rhinitis'], contraindications: ['Nasal Infections'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Psychiatry/Neurology (Expanded)',
        therapeutic_classes: [
            {
                name: 'Mood Stabilizers',
                pharma_classes: [
                    {
                        name: 'Lithium',
                        mechanism: 'Inhibits inositol monophosphatase, affects neurotransmitter signaling.',
                        side_effects: ['Tremor', 'Polyuria', 'Thyroid dysfunction', 'Nephrotoxicity'],
                        interactions: 'Thiazides, ACE inhibitors, NSAIDs increase lithium levels.',
                        interaction_explanation: 'THIAZIDES: MECHANISM - Thiazides cause volume depletion, increasing proximal tubule lithium reabsorption. CONSEQUENCE - Lithium toxicity with tremor, confusion, seizures. NSAIDS: MECHANISM - Reduce renal prostaglandins needed for lithium excretion. CONSEQUENCE - Increased lithium levels and toxicity.',
                        drugs: [
                            { name: 'Lithium Carbonate', features: 'Narrow therapeutic index, requires monitoring.', choice: 'Bipolar disorder, acute mania.', indications: ['Bipolar Disorder', 'Acute Mania'], contraindications: ['Severe Renal Disease', 'Severe Heart Disease'] }
                        ]
                    },
                    {
                        name: 'Anticonvulsants as Mood Stabilizers',
                        mechanism: 'Various mechanisms: sodium channel blockade, GABA enhancement.',
                        side_effects: ['Sedation', 'Weight gain', 'Teratogenicity', 'Blood dyscrasias'],
                        interactions: 'CYP450 inducers and inhibitors.',
                        drugs: [
                            { name: 'Valproic Acid', features: 'GABA enhancer, teratogenic.', choice: 'Bipolar disorder, epilepsy.', indications: ['Bipolar Disorder', 'Epilepsy', 'Migraine Prophylaxis'], contraindications: ['Pregnancy', 'Hepatic Disease'] },
                            { name: 'Lamotrigine', features: 'Sodium channel blocker, good for depression.', choice: 'Bipolar depression, epilepsy.', indications: ['Bipolar Disorder', 'Epilepsy'], contraindications: ['Hypersensitivity'] },
                            { name: 'Carbamazepine', features: 'Sodium channel blocker, CYP450 inducer.', choice: 'Bipolar disorder, trigeminal neuralgia.', indications: ['Bipolar Disorder', 'Trigeminal Neuralgia', 'Epilepsy'], contraindications: ['Bone Marrow Depression', 'MAOIs'] }
                        ]
                    }
                ]
            },
            {
                name: 'Parkinson Disease Medications',
                pharma_classes: [
                    {
                        name: 'Dopamine Precursors',
                        mechanism: 'Levodopa crosses blood-brain barrier, converted to dopamine.',
                        side_effects: ['Dyskinesias', 'On-off phenomena', 'Nausea', 'Orthostatic hypotension'],
                        interactions: 'MAOIs, high-protein meals reduce absorption.',
                        interaction_explanation: 'MAOIS: MECHANISM - MAOIs prevent dopamine breakdown, while levodopa increases dopamine production. CONSEQUENCE - Risk of hypertensive crisis from excessive dopamine. Use MAO-B selective inhibitors only.',
                        drugs: [
                            { name: 'Levodopa/Carbidopa', features: 'Carbidopa prevents peripheral conversion.', choice: 'First-line Parkinson treatment.', indications: ['Parkinson Disease'], contraindications: ['MAOIs', 'Angle-Closure Glaucoma'] }
                        ]
                    },
                    {
                        name: 'Dopamine Agonists',
                        mechanism: 'Direct stimulation of dopamine receptors.',
                        side_effects: ['Impulse control disorders', 'Sleep attacks', 'Nausea'],
                        interactions: 'Antipsychotics antagonize effects.',
                        drugs: [
                            { name: 'Pramipexole', features: 'Non-ergot agonist, good for early PD.', choice: 'Early Parkinson disease, restless leg syndrome.', indications: ['Parkinson Disease', 'Restless Leg Syndrome'], contraindications: ['Hypersensitivity'] },
                            { name: 'Ropinirole', features: 'Non-ergot agonist, impulse control risk.', choice: 'Early PD, restless leg syndrome.', indications: ['Parkinson Disease', 'Restless Leg Syndrome'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'MAO-B Inhibitors',
                        mechanism: 'Inhibit MAO-B enzyme, increase dopamine availability.',
                        side_effects: ['Insomnia', 'Nausea', 'Dizziness'],
                        interactions: 'Meperidine, tramadol (serotonin syndrome).',
                        drugs: [
                            { name: 'Selegiline', features: 'Irreversible MAO-B inhibitor.', choice: 'Early PD, adjunct to levodopa.', indications: ['Parkinson Disease'], contraindications: ['Meperidine Use'] },
                            { name: 'Rasagiline', features: 'Irreversible MAO-B inhibitor, neuroprotective.', choice: 'Early or advanced PD.', indications: ['Parkinson Disease'], contraindications: ['Severe Hepatic Impairment'] }
                        ]
                    }
                ]
            },
            {
                name: 'Comprehensive Antiepileptics',
                pharma_classes: [
                    {
                        name: 'Sodium Channel Blockers',
                        mechanism: 'Block voltage-gated sodium channels, prevent neuronal firing.',
                        side_effects: ['Diplopia', 'Ataxia', 'Cognitive impairment', 'Rash'],
                        interactions: 'CYP450 inducers/inhibitors affect levels.',
                        drugs: [
                            { name: 'Phenytoin', features: 'Narrow therapeutic index, zero-order kinetics.', choice: 'Tonic-clonic seizures, status epilepticus.', indications: ['Tonic-Clonic Seizures', 'Status Epilepticus'], contraindications: ['Heart Block', 'Porphyria'] },
                            { name: 'Carbamazepine', features: 'Autoinduction, drug interactions.', choice: 'Partial seizures, trigeminal neuralgia.', indications: ['Partial Seizures', 'Trigeminal Neuralgia'], contraindications: ['Bone Marrow Depression'] },
                            { name: 'Lamotrigine', features: 'Broad spectrum, good tolerability.', choice: 'Broad-spectrum epilepsy, bipolar disorder.', indications: ['Epilepsy', 'Bipolar Disorder'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'GABA Enhancers',
                        mechanism: 'Enhance GABA-mediated inhibition through various mechanisms.',
                        side_effects: ['Sedation', 'Weight gain', 'Cognitive slowing'],
                        interactions: 'CNS depressants (additive sedation).',
                        drugs: [
                            { name: 'Valproic Acid', features: 'Broad spectrum, multiple mechanisms.', choice: 'Absence seizures, myoclonic epilepsy.', indications: ['Absence Seizures', 'Myoclonic Epilepsy'], contraindications: ['Hepatic Disease', 'Pregnancy'] },
                            { name: 'Phenobarbital', features: 'GABA-A receptor enhancer, enzyme inducer.', choice: 'Neonatal seizures, refractory epilepsy.', indications: ['Neonatal Seizures', 'Refractory Epilepsy'], contraindications: ['Porphyria', 'Severe Respiratory Depression'] },
                            { name: 'Gabapentin', features: 'Calcium channel modulator, renally excreted.', choice: 'Partial seizures, neuropathic pain.', indications: ['Partial Seizures', 'Neuropathic Pain'], contraindications: ['Hypersensitivity'] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        system: 'Reproductive/Gynecology',
        therapeutic_classes: [
            {
                name: 'Hormonal Contraceptives',
                pharma_classes: [
                    {
                        name: 'Combined Oral Contraceptives',
                        mechanism: 'Estrogen and progestin suppress LH/FSH, prevent ovulation.',
                        side_effects: ['Thromboembolism', 'Hypertension', 'Breast tenderness', 'Nausea'],
                        interactions: 'CYP450 inducers reduce efficacy, antibiotics may reduce efficacy.',
                        interaction_explanation: 'CYP450 INDUCERS: MECHANISM - Rifampin, phenytoin increase hepatic metabolism of contraceptive hormones, reducing levels. CONSEQUENCE - Breakthrough bleeding and contraceptive failure. Use backup contraception.',
                        drugs: [
                            { name: 'Ethinyl Estradiol/Norethindrone', features: 'First-generation progestin combination.', choice: 'Contraception, menstrual regulation.', indications: ['Contraception', 'Menstrual Irregularities'], contraindications: ['Thromboembolism History', 'Smoking >35 years'] },
                            { name: 'Ethinyl Estradiol/Levonorgestrel', features: 'Second-generation progestin, androgenic.', choice: 'Contraception with good cycle control.', indications: ['Contraception'], contraindications: ['Thromboembolism History', 'Severe Hypertension'] },
                            { name: 'Ethinyl Estradiol/Drospirenone', features: 'Anti-androgenic progestin, antimineralocorticoid.', choice: 'PMDD, acne, contraception.', indications: ['Contraception', 'PMDD', 'Acne'], contraindications: ['Renal Impairment', 'Hyperkalemia'] }
                        ]
                    },
                    {
                        name: 'Progestin-Only Contraceptives',
                        mechanism: 'Thicken cervical mucus, thin endometrium, some ovulation suppression.',
                        side_effects: ['Irregular bleeding', 'Weight gain', 'Mood changes'],
                        interactions: 'CYP450 inducers reduce efficacy.',
                        drugs: [
                            { name: 'Norethindrone (Mini-pill)', features: 'Daily oral progestin-only pill.', choice: 'Breastfeeding, estrogen contraindications.', indications: ['Contraception in Breastfeeding'], contraindications: ['Active Liver Disease', 'Breast Cancer'] },
                            { name: 'Medroxyprogesterone (Depo)', features: 'Injectable, 3-month duration.', choice: 'Long-acting contraception, compliance issues.', indications: ['Long-Term Contraception'], contraindications: ['Osteoporosis', 'Breast Cancer'] },
                            { name: 'Levonorgestrel IUD', features: 'Intrauterine, 5-year duration.', choice: 'Long-term contraception, heavy periods.', indications: ['Long-Term Contraception', 'Heavy Menstrual Bleeding'], contraindications: ['PID', 'Distorted Uterine Cavity'] }
                        ]
                    }
                ]
            },
            {
                name: 'Reproductive Hormones',
                pharma_classes: [
                    {
                        name: 'Estrogens',
                        mechanism: 'Estrogen receptor agonists, multiple physiologic effects.',
                        side_effects: ['Thromboembolism', 'Breast cancer risk', 'Endometrial hyperplasia'],
                        interactions: 'CYP450 inducers reduce levels.',
                        drugs: [
                            { name: 'Estradiol', features: 'Bioidentical estrogen, multiple formulations.', choice: 'Menopausal hormone therapy.', indications: ['Menopausal Symptoms', 'Osteoporosis Prevention'], contraindications: ['Breast Cancer', 'Thromboembolism History'] },
                            { name: 'Conjugated Estrogens', features: 'Mixed estrogens from pregnant mare urine.', choice: 'Menopausal symptoms, postmenopausal osteoporosis.', indications: ['Menopausal Symptoms', 'Atrophic Vaginitis'], contraindications: ['Breast Cancer', 'Liver Disease'] }
                        ]
                    },
                    {
                        name: 'Progestins',
                        mechanism: 'Progesterone receptor agonists, oppose estrogen effects.',
                        side_effects: ['Weight gain', 'Mood changes', 'Breast tenderness'],
                        interactions: 'CYP450 interactions vary by agent.',
                        drugs: [
                            { name: 'Progesterone', features: 'Bioidentical, multiple routes available.', choice: 'Luteal phase support, HRT.', indications: ['Luteal Phase Deficiency', 'Menopausal HRT'], contraindications: ['Breast Cancer', 'Liver Disease'] },
                            { name: 'Medroxyprogesterone', features: 'Synthetic progestin, oral and injectable.', choice: 'Abnormal uterine bleeding, contraception.', indications: ['Abnormal Uterine Bleeding', 'Contraception'], contraindications: ['Pregnancy', 'Breast Cancer'] }
                        ]
                    }
                ]
            },
            {
                name: 'Labor and Delivery',
                pharma_classes: [
                    {
                        name: 'Oxytocics',
                        mechanism: 'Stimulate uterine contractions via oxytocin receptors.',
                        side_effects: ['Uterine rupture', 'Water intoxication', 'Hypotension'],
                        interactions: 'Vasoconstrictors (severe hypertension).',
                        drugs: [
                            { name: 'Oxytocin', features: 'Endogenous hormone, IV/IM administration.', choice: 'Labor induction, postpartum hemorrhage.', indications: ['Labor Induction', 'Postpartum Hemorrhage'], contraindications: ['Fetal Distress', 'Placenta Previa'] },
                            { name: 'Methylergonovine', features: 'Ergot alkaloid, prolonged uterine contraction.', choice: 'Postpartum hemorrhage, incomplete abortion.', indications: ['Postpartum Hemorrhage'], contraindications: ['Hypertension', 'Labor Induction'] }
                        ]
                    },
                    {
                        name: 'Tocolytics',
                        mechanism: 'Suppress uterine contractions to delay preterm labor.',
                        side_effects: ['Pulmonary edema', 'Tachycardia', 'Hyperglycemia'],
                        interactions: 'Beta-agonists with corticosteroids increase pulmonary edema risk.',
                        drugs: [
                            { name: 'Terbutaline', features: 'β2-agonist, off-label use for tocolysis.', choice: 'Acute tocolysis, short-term use only.', indications: ['Preterm Labor'], contraindications: ['Maternal Heart Disease', 'Severe Preeclampsia'] },
                            { name: 'Nifedipine', features: 'Calcium channel blocker, oral administration.', choice: 'Tocolysis maintenance therapy.', indications: ['Preterm Labor'], contraindications: ['Maternal Hypotension'] }
                        ]
                    }
                ]
            },
            {
                name: 'Erectile Dysfunction',
                pharma_classes: [
                    {
                        name: 'PDE5 Inhibitors',
                        mechanism: 'Inhibit phosphodiesterase-5, increasing cGMP levels and causing vasodilation.',
                        side_effects: ['Headache', 'Flushing', 'Nasal congestion', 'Visual disturbances'],
                        interactions: 'Nitrates (severe hypotension), alpha-blockers (hypotension).',
                        interaction_explanation: 'NITRATES: MECHANISM - Nitrates increase cGMP levels through nitric oxide release. PDE5 inhibitors prevent cGMP breakdown by inhibiting phosphodiesterase-5. CONSEQUENCE - Synergistic vasodilation leads to severe, potentially life-threatening hypotension that may not respond to fluids and requires vasopressors.',
                        drugs: [
                            { name: 'Sildenafil', features: 'First PDE5 inhibitor, 4-hour duration.', choice: 'Erectile dysfunction, pulmonary hypertension.', indications: ['Erectile Dysfunction', 'Pulmonary Hypertension'], contraindications: ['Nitrate Use', 'Severe Cardiac Disease'] },
                            { name: 'Tadalafil', features: 'Longest duration (36 hours), daily dosing option.', choice: 'ED with desire for spontaneity.', indications: ['Erectile Dysfunction', 'BPH'], contraindications: ['Nitrate Use', 'Severe Hepatic Impairment'] },
                            { name: 'Vardenafil', features: 'Intermediate duration, less visual side effects.', choice: 'ED in patients with visual concerns.', indications: ['Erectile Dysfunction'], contraindications: ['Nitrate Use', 'QT Prolongation'] }
                        ]
                    }
                ]
            }
        ]
    }
];

// Global app object to hold all functions
window.DrugApp = {};

// Global search functions
function searchByIndication(indication) {
    console.log('searchByIndication called with:', indication);
    // Switch to search view and search for all drugs with this indication
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const indicationRadio = document.querySelector('input[name="search-type"][value="indication"]');
            console.log('Found elements:', { searchInput, indicationRadio });
            if (indicationRadio) indicationRadio.checked = true;
            if (searchInput) searchInput.value = indication;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(indication, 'indication');
            }
        }, 100);
    }
}

function searchByContraindication(contraindication) {
    console.log('searchByContraindication called with:', contraindication);
    // Switch to search view and search for all drugs to avoid with this condition
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            if (searchInput) searchInput.value = contraindication;
            // Special search type for contraindications
            if (window.DrugApp.performContraindicationSearch) {
                window.DrugApp.performContraindicationSearch(contraindication);
            }
        }, 100);
    }
}

function searchBySideEffect(sideEffect) {
    console.log('searchBySideEffect called with:', sideEffect);
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const sideEffectRadio = document.querySelector('input[name="search-type"][value="side-effect"]');
            if (sideEffectRadio) sideEffectRadio.checked = true;
            if (searchInput) searchInput.value = sideEffect;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(sideEffect, 'side-effect');
            }
        }, 100);
    }
}

function searchByMechanism(mechanism) {
    console.log('searchByMechanism called with:', mechanism);
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const mechanismRadio = document.querySelector('input[name="search-type"][value="mechanism"]');
            if (mechanismRadio) mechanismRadio.checked = true;
            if (searchInput) searchInput.value = mechanism;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(mechanism, 'mechanism');
            }
        }, 100);
    }
}

function searchByClass(drugClass) {
    console.log('searchByClass called with:', drugClass);
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const classRadio = document.querySelector('input[name="search-type"][value="class"]');
            if (classRadio) classRadio.checked = true;
            if (searchInput) searchInput.value = drugClass;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(drugClass, 'class');
            }
        }, 100);
    }
}

function searchBySystem(system) {
    console.log('searchBySystem called with:', system);
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const systemRadio = document.querySelector('input[name="search-type"][value="system"]');
            if (systemRadio) systemRadio.checked = true;
            if (searchInput) searchInput.value = system;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(system, 'system');
            }
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('column-container');
    const headerControls = document.getElementById('header-controls');
    const comparisonList = [];
    let lastState = { func: showSystems, args: [] };
    let searchableData = [];
    

    function parseInteractionTags(interactionText) {
        const interactionLower = interactionText.toLowerCase();
        const commonInteractions = [];
        
        // Common drug classes that interact
        const drugClasses = ['warfarin', 'nsaids', 'ace inhibitors', 'beta-blockers', 'calcium channel blockers', 
                          'diuretics', 'maois', 'ssris', 'lithium', 'digoxin', 'phenytoin', 'cimetidine',
                          'amiodarone', 'quinidine', 'verapamil', 'diltiazem', 'atorvastatin', 'simvastatin'];
        
        // Also check for variations with different capitalization
        const drugClassVariations = ['Calcium channel blockers', 'Beta-blockers', 'ACE inhibitors', 'MAOIs', 'SSRIs', 'NSAIDs'];
        
        drugClasses.forEach(drugClass => {
            if (interactionLower.includes(drugClass)) {
                commonInteractions.push(drugClass);
            }
        });
        
        // Check for capitalized variations in original text
        drugClassVariations.forEach(drugClass => {
            if (interactionText.includes(drugClass) && !commonInteractions.includes(drugClass.toLowerCase())) {
                commonInteractions.push(drugClass.toLowerCase());
            }
        });
        
        // Also split by common delimiters for other interactions
        const otherInteractions = interactionText.split(/[,;.]/)
            .filter(item => item.trim() && !commonInteractions.some(common => 
                item.toLowerCase().includes(common)))
            .slice(0, 3); // Limit to prevent overcrowding
        
        return [...commonInteractions, ...otherInteractions]
            .map(interaction => `<span class="tag interaction">${interaction.trim()}</span>`)
            .join('');
    }

    function flattenDrugData() {
        searchableData = []; // Clear previous data
        drugData.forEach(system => {
            system.therapeutic_classes.forEach(therapeuticClass => {
                therapeuticClass.pharma_classes.forEach(pharmaClass => {
                    pharmaClass.drugs.forEach(drug => {
                        searchableData.push({
                            drugName: drug.name,
                            drugClass: pharmaClass.name,
                            indications: drug.indications || [],
                            pointers: { system, therapeuticClass, pharmaClass, drug }
                        });
                    });
                });
            });
        });
    }

    function saveLastState(func, args) {
        lastState = { func, args };
    }

    function updateHeaderControls() {
        headerControls.innerHTML = '';
        const searchButton = document.createElement('button');
        searchButton.className = 'header-btn';
        searchButton.innerText = 'Search';
        searchButton.onclick = renderSearchView;
        headerControls.appendChild(searchButton);
        if (comparisonList.length > 0) {
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-view-button';
            compareButton.innerText = `Compare Items (${comparisonList.length})`;
            compareButton.onclick = renderCompareView;
            headerControls.appendChild(compareButton);
        }
    }

    const backToNavigation = function() {
        // Restore the main navigation container
        mainContainer.className = '';
        mainContainer.id = 'column-container';
        
        // Restore the last saved navigation state
        if (lastState && lastState.func) {
            lastState.func.apply(null, lastState.args);
        } else {
            showSystems();
        }
    };
    window.DrugApp.backToNavigation = backToNavigation;

    function handleCompareClick(drug, pharmaClass, button) {
        const index = comparisonList.findIndex(item => item.drug.name === drug.name);
        if (index > -1) {
            comparisonList.splice(index, 1);
            button.innerText = 'Compare';
            button.classList.remove('added');
        } else {
            comparisonList.push({ drug, pharmaClass });
            button.innerText = 'Added';
            button.classList.add('added');
        }
        updateHeaderControls();
    }

    function createColumn(title, items, onItemClick, keyFunction = item => item, tagType = 'default') {
        const column = document.createElement('div');
        column.className = 'column';

        const header = document.createElement('div');
        header.className = 'column-header';
        header.textContent = title;
        column.appendChild(header);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'column-items';
        column.appendChild(itemsContainer);

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'column-item';
            
            if (tagType === 'default') {
                itemElement.innerHTML = `<span>${keyFunction(item)}</span>`;
            } else {
                itemElement.innerHTML = `<span class="tag ${tagType}">${keyFunction(item)}</span>`;
            }
            
            itemElement.onclick = () => onItemClick(item);
            itemsContainer.appendChild(itemElement);
        });

        return column;
    }

    function showSystems() {
        saveLastState(showSystems, []);
        mainContainer.innerHTML = '';
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, system => system.system, 'system');
        mainContainer.appendChild(systemsColumn);
        updateHeaderControls();
    }

    function showTherapeuticClasses(system) {
        saveLastState(showTherapeuticClasses, [system]);
        mainContainer.innerHTML = '';
        
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            therapeuticClass => showPharmaClasses(system, therapeuticClass), 
            therapeuticClass => therapeuticClass.name, 'subclass');
        mainContainer.appendChild(therapeuticColumn);
        updateHeaderControls();
    }

    function showPharmaClasses(system, therapeuticClass) {
        saveLastState(showPharmaClasses, [system, therapeuticClass]);
        mainContainer.innerHTML = '';
        
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pharmaClass => showDrugs(system, therapeuticClass, pharmaClass), 
            pharmaClass => pharmaClass.name, 'class');
        mainContainer.appendChild(pharmaColumn);
        updateHeaderControls();
    }

    function showDrugs(system, therapeuticClass, pharmaClass) {
        saveLastState(showDrugs, [system, therapeuticClass, pharmaClass]);
        mainContainer.innerHTML = '';
        
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pc => showDrugs(system, therapeuticClass, pc), 
            pc => pc.name, 'class');
        pharmaColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (therapeuticClass.pharma_classes[index] === pharmaClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(pharmaColumn);

        // Drugs column
        const drugsColumn = document.createElement('div');
        drugsColumn.className = 'column';
        const drugsHeader = document.createElement('div');
        drugsHeader.className = 'column-header';
        drugsHeader.textContent = 'Individual Drugs';
        drugsColumn.appendChild(drugsHeader);

        const drugsContainer = document.createElement('div');
        drugsContainer.className = 'column-items';
        drugsColumn.appendChild(drugsContainer);

        pharmaClass.drugs.forEach(drug => {
            const drugElement = document.createElement('div');
            drugElement.className = 'column-item';
            
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-btn';
            compareButton.innerText = 'Compare';
            compareButton.onclick = (e) => {
                e.stopPropagation();
                handleCompareClick(drug, pharmaClass, compareButton);
            };
            
            const isInComparison = comparisonList.some(item => item.drug.name === drug.name);
            if (isInComparison) {
                compareButton.innerText = 'Added';
                compareButton.classList.add('added');
            }

            drugElement.innerHTML = `<span>${drug.name}</span>`;
            drugElement.appendChild(compareButton);
            drugElement.onclick = () => showDrugDetail(system, therapeuticClass, pharmaClass, drug);
            drugsContainer.appendChild(drugElement);
        });

        mainContainer.appendChild(drugsColumn);
        updateHeaderControls();
    }

    function showDrugDetail(system, therapeuticClass, pharmaClass, drug) {
        saveLastState(showDrugDetail, [system, therapeuticClass, pharmaClass, drug]);
        mainContainer.innerHTML = '';
        
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pc => showDrugs(system, therapeuticClass, pc), 
            pc => pc.name, 'class');
        pharmaColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (therapeuticClass.pharma_classes[index] === pharmaClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(pharmaColumn);

        // Drugs column
        const drugsColumn = document.createElement('div');
        drugsColumn.className = 'column';
        const drugsHeader = document.createElement('div');
        drugsHeader.className = 'column-header';
        drugsHeader.textContent = 'Individual Drugs';
        drugsColumn.appendChild(drugsHeader);

        const drugsContainer = document.createElement('div');
        drugsContainer.className = 'column-items';
        drugsColumn.appendChild(drugsContainer);

        pharmaClass.drugs.forEach(d => {
            const drugElement = document.createElement('div');
            drugElement.className = 'column-item';
            if (d === drug) {
                drugElement.classList.add('selected');
            }
            
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-btn';
            compareButton.innerText = 'Compare';
            compareButton.onclick = (e) => {
                e.stopPropagation();
                handleCompareClick(d, pharmaClass, compareButton);
            };
            
            const isInComparison = comparisonList.some(item => item.drug.name === d.name);
            if (isInComparison) {
                compareButton.innerText = 'Added';
                compareButton.classList.add('added');
            }

            drugElement.innerHTML = `<span>${d.name}</span>`;
            drugElement.appendChild(compareButton);
            drugElement.onclick = () => showDrugDetail(system, therapeuticClass, pharmaClass, d);
            drugsContainer.appendChild(drugElement);
        });

        mainContainer.appendChild(drugsColumn);

        // Detail view
        const detailColumn = document.createElement('div');
        detailColumn.className = 'detail-view-column';

        detailColumn.innerHTML = `
            <div class="detail-section">
                <h3>${drug.name}</h3>
                <p><strong>Class:</strong> ${pharmaClass.name}</p>
            </div>
            <div class="detail-section">
                <h3>Mechanism of Action</h3>
                <p>${pharmaClass.mechanism}</p>
            </div>
            <div class="detail-section">
                <h3>Key Features</h3>
                <p>${drug.features}</p>
            </div>
            <div class="detail-section">
                <h3>Clinical Choice</h3>
                <p>${drug.choice}</p>
            </div>
            <div class="detail-section">
                <h3>Indications</h3>
                <div class="tag-container">
                    ${drug.indications.map((indication, index) => `<span class="tag indication clickable-tag" data-indication="${indication}" data-index="${index}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h3>Contraindications</h3>
                <div class="tag-container">
                    ${drug.contraindications.map((contraindication, index) => `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" data-index="${index}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h3>Side Effects</h3>
                <div class="tag-container">
                    ${pharmaClass.side_effects.map(effect => `<span class="tag side-effect">${effect}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h3>Drug Interactions</h3>
                <div class="tag-container">
                    ${parseInteractionTags(pharmaClass.interactions)}
                </div>
                <div class="interaction-explanation">
                    <p><strong>Clinical Significance:</strong> ${pharmaClass.interaction_explanation || pharmaClass.interactions}</p>
                </div>
            </div>
        `;

        mainContainer.appendChild(detailColumn);
        updateHeaderControls();
    }

    const renderSearchView = function() {
        mainContainer.innerHTML = '';
        mainContainer.className = '';
        mainContainer.id = 'search-view-container';

        const searchHeader = document.createElement('div');
        searchHeader.className = 'search-header';
        searchHeader.innerHTML = `
            <h2>Drug Search</h2>
            <button class="header-btn" onclick="window.DrugApp.backToNavigation()">Back to Navigation</button>
        `;
        mainContainer.appendChild(searchHeader);

        const searchControls = document.createElement('div');
        searchControls.className = 'search-controls';
        searchControls.innerHTML = `
            <input type="text" class="search-input" placeholder="Search drugs by name, indication, side effect, mechanism, class, or system..." id="drug-search-input">
            <div class="search-options">
                <label><input type="radio" name="search-type" value="drug" checked> Drug Name</label>
                <label><input type="radio" name="search-type" value="indication"> Indication</label>
                <label><input type="radio" name="search-type" value="contraindication"> Contraindication (Drugs to Avoid)</label>
                <label><input type="radio" name="search-type" value="side-effect"> Side Effect</label>
                <label><input type="radio" name="search-type" value="mechanism"> Mechanism of Action</label>
                <label><input type="radio" name="search-type" value="class"> Drug Class</label>
                <label><input type="radio" name="search-type" value="system"> Body System</label>
                <button id="toggle-indications" class="header-btn" style="margin-left: 20px;">Show Indication Browser</button>
            </div>
        `;
        mainContainer.appendChild(searchControls);

        // All indications container (hidden by default)
        const indicationsContainer = document.createElement('div');
        indicationsContainer.className = 'indications-container';
        indicationsContainer.style.display = 'none';
        indicationsContainer.innerHTML = '<h3>Browse by Common Indications</h3>';
        
        const indicationsList = document.createElement('div');
        indicationsList.className = 'indications-list';
        
        // Get all unique indications
        const allIndications = new Set();
        searchableData.forEach(item => {
            item.indications.forEach(indication => allIndications.add(indication));
        });
        
        Array.from(allIndications).sort().forEach(indication => {
            const tag = document.createElement('span');
            tag.className = 'indication-tag';
            tag.textContent = indication;
            tag.onclick = () => performSearch(indication, 'indication');
            indicationsList.appendChild(tag);
        });
        
        indicationsContainer.appendChild(indicationsList);
        mainContainer.appendChild(indicationsContainer);

        // Toggle functionality for indications browser
        const toggleButton = document.getElementById('toggle-indications');
        toggleButton.addEventListener('click', () => {
            if (indicationsContainer.style.display === 'none') {
                indicationsContainer.style.display = 'block';
                toggleButton.textContent = 'Hide Indication Browser';
            } else {
                indicationsContainer.style.display = 'none';
                toggleButton.textContent = 'Show Indication Browser';
            }
        });

        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.className = 'drug-grid';
        mainContainer.appendChild(resultsContainer);

        // Show all drugs initially as cards
        searchableData.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;
            
            const drugCard = document.createElement('div');
            drugCard.className = 'drug-card';
            
            drugCard.innerHTML = `
                <div class="drug-name">${drug.name}</div>
                
                <div class="drug-section">
                    <div class="drug-section-title">System & Class</div>
                    <div class="tag-container">
                        <span class="tag system" onclick="filterByTag('system', '${system.system}')">${system.system}</span>
                        <span class="tag class" onclick="filterByTag('class', '${pharmaClass.name}')">${pharmaClass.name}</span>
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Indications</div>
                    <div class="tag-container">
                        ${drug.indications.map(indication => 
                            `<span class="tag indication clickable-tag" data-indication="${indication}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Contraindications</div>
                    <div class="tag-container">
                        ${drug.contraindications.map(contraindication => 
                            `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Key Features</div>
                    <p style="font-size: 0.9em; color: #666;">${drug.features}</p>
                </div>
            `;
            
            drugCard.onclick = (e) => {
                // Don't navigate if clicking on a tag
                if (e.target.classList.contains('tag')) return;
                
                mainContainer.className = '';
                mainContainer.id = 'column-container';
                showDrugDetail(system, therapeuticClass, pharmaClass, drug);
            };
            
            resultsContainer.appendChild(drugCard);
        });

        const searchInput = document.getElementById('drug-search-input');
        searchInput.addEventListener('input', (e) => {
            const searchType = document.querySelector('input[name="search-type"]:checked').value;
            performSearch(e.target.value, searchType);
        });

        document.querySelectorAll('input[name="search-type"]').forEach(radio => {
            radio.addEventListener('change', () => {
                const currentSearch = searchInput.value;
                if (currentSearch) {
                    performSearch(currentSearch, radio.value);
                }
            });
        });
    };
    window.DrugApp.renderSearchView = renderSearchView;

    const performContraindicationSearch = function(query) {
        const resultsContainer = document.getElementById('search-results');
        if (!query.trim()) {
            resultsContainer.innerHTML = '';
            return;
        }
        
        // Search for drugs that have this contraindication
        const results = searchableData.filter(item => {
            const drug = item.pointers.drug;
            return drug.contraindications && drug.contraindications.some(contraindication => 
                contraindication.toLowerCase().includes(query.toLowerCase())
            );
        });
        
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No drugs found with this contraindication.</p>';
            return;
        }
        
        // Add header explaining what we're showing
        const header = document.createElement('div');
        header.style.marginBottom = '20px';
        header.style.padding = '15px';
        header.style.backgroundColor = '#fff3cd';
        header.style.border = '1px solid #ffeaa7';
        header.style.borderRadius = '8px';
        header.innerHTML = `<strong>⚠️ Drugs to AVOID in patients with: ${query}</strong><br><small>The following ${results.length} drugs are contraindicated for this condition:</small>`;
        resultsContainer.appendChild(header);
        
        // Change results container to grid layout
        resultsContainer.className = 'drug-grid';
        
        results.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;
            
            const drugCard = document.createElement('div');
            drugCard.className = 'drug-card';
            drugCard.style.borderLeft = '4px solid #e74c3c'; // Red border for contraindications
            
            drugCard.innerHTML = `
                <div class="drug-name">${drug.name}</div>
                <div class="drug-section">
                    <div class="drug-section-title">Drug Class</div>
                    <span class="tag class">${pharmaClass.name}</span>
                </div>
                <div class="drug-section">
                    <div class="drug-section-title">System</div>
                    <span class="tag system">${system.system}</span>
                </div>
                <div class="drug-section">
                    <div class="drug-section-title">Why Contraindicated</div>
                    <div class="tag-container">
                        ${drug.contraindications.filter(c => c.toLowerCase().includes(query.toLowerCase())).map(contraindication => `<span class="tag contraindication">${contraindication}</span>`).join('')}
                    </div>
                </div>
                <div class="drug-section">
                    <div class="drug-section-title">All Contraindications</div>
                    <div class="tag-container">
                        ${drug.contraindications.map(contraindication => `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" style="cursor: pointer;">${contraindication}</span>`).join('')}
                    </div>
                </div>
            `;
            
            drugCard.onclick = () => {
                showDrugDetail(drug, pharmaClass, system, therapeuticClass);
            };
            
            resultsContainer.appendChild(drugCard);
        });
    };
    window.DrugApp.performContraindicationSearch = performContraindicationSearch;

    const performSearch = function(query, searchType) {
            // If searching by contraindication, use the special function
            if (searchType === 'contraindication') {
                performContraindicationSearch(query);
                return;
            }

            const resultsContainer = document.getElementById('search-results');
            if (!query.trim()) {
                resultsContainer.innerHTML = '';
                return;
            }

            const results = searchableData.filter(item => {
                const { system, therapeuticClass, pharmaClass, drug } = item.pointers;
                const queryLower = query.toLowerCase();
                
                if (searchType === 'drug') {
                    return item.drugName.toLowerCase().includes(queryLower);
                } else if (searchType === 'indication') {
                    return item.indications.some(indication => 
                        indication.toLowerCase().includes(queryLower)
                    );
                } else if (searchType === 'contraindication') {
                    return drug.contraindications && drug.contraindications.some(contraindication => 
                        contraindication.toLowerCase().includes(queryLower)
                    );
                } else if (searchType === 'side-effect') {
                    return pharmaClass.side_effects && pharmaClass.side_effects.some(effect => 
                        effect.toLowerCase().includes(queryLower)
                    );
                } else if (searchType === 'mechanism') {
                    return pharmaClass.mechanism && pharmaClass.mechanism.toLowerCase().includes(queryLower);
                } else if (searchType === 'class') {
                    return pharmaClass.name.toLowerCase().includes(queryLower) || 
                           therapeuticClass.name.toLowerCase().includes(queryLower);
                } else if (searchType === 'system') {
                    return system.system.toLowerCase().includes(queryLower);
                }
            });

            resultsContainer.innerHTML = '';
            if (results.length === 0) {
                resultsContainer.innerHTML = '<p>No results found.</p>';
                return;
            }

            // Change results container to grid layout
            resultsContainer.className = 'drug-grid';
            
            results.forEach(result => {
                const { system, therapeuticClass, pharmaClass, drug } = result.pointers;
                
                const drugCard = document.createElement('div');
                drugCard.className = 'drug-card';
                
                drugCard.innerHTML = `
                    <div class="drug-name">${drug.name}</div>
                    
                    <div class="drug-section">
                        <div class="drug-section-title">System & Class</div>
                        <div class="tag-container">
                            <span class="tag system" onclick="filterByTag('system', '${system.system}')">${system.system}</span>
                            <span class="tag class" onclick="filterByTag('class', '${pharmaClass.name}')">${pharmaClass.name}</span>
                        </div>
                    </div>

                    <div class="drug-section">
                        <div class="drug-section-title">Mechanism</div>
                        <div class="tag-container">
                            <span class="tag mechanism" onclick="filterByTag('mechanism', '${pharmaClass.mechanism.substring(0, 50)}...')" title="${pharmaClass.mechanism}">${pharmaClass.mechanism.length > 50 ? pharmaClass.mechanism.substring(0, 50) + '...' : pharmaClass.mechanism}</span>
                        </div>
                    </div>

                    <div class="drug-section">
                        <div class="drug-section-title">Indications</div>
                        <div class="tag-container">
                            ${drug.indications.map(indication => 
                                `<span class="tag indication clickable-tag" data-indication="${indication}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="drug-section">
                        <div class="drug-section-title">Contraindications</div>
                        <div class="tag-container">
                            ${drug.contraindications.map(contraindication => 
                                `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="drug-section">
                        <div class="drug-section-title">Side Effects</div>
                        <div class="tag-container">
                            ${pharmaClass.side_effects.map(effect => 
                                `<span class="tag side-effect" onclick="filterByTag('side-effect', '${effect}')">${effect}</span>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="drug-section">
                        <div class="drug-section-title">Drug Interactions</div>
                        <div class="tag-container">
                            ${pharmaClass.interactions.split(/[,;.]/).filter(item => item.trim()).map(interaction => 
                                `<span class="tag interaction" onclick="filterByTag('interaction', '${interaction.trim()}')">${interaction.trim()}</span>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="drug-section">
                        <div class="drug-section-title">Key Features</div>
                        <p style="font-size: 0.9em; color: #666;">${drug.features}</p>
                    </div>
                `;
                
                drugCard.onclick = (e) => {
                    // Don't navigate if clicking on a tag
                    if (e.target.classList.contains('tag')) return;
                    
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                };
                
                resultsContainer.appendChild(drugCard);
            });
        };

    // Global function for tag filtering
    window.filterByTag = function(tagType, tagValue) {
        const resultsContainer = document.getElementById('search-results');
        let filteredResults = [];

        switch(tagType) {
            case 'system':
                filteredResults = searchableData.filter(item => 
                    item.pointers.system.system === tagValue
                );
                break;
            case 'class':
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.name === tagValue
                );
                break;
            case 'indication':
                filteredResults = searchableData.filter(item => 
                    item.indications.includes(tagValue)
                );
                break;
            case 'contraindication':
                filteredResults = searchableData.filter(item => 
                    item.pointers.drug.contraindications.includes(tagValue)
                );
                break;
            case 'side-effect':
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.side_effects.includes(tagValue)
                );
                break;
            case 'interaction':
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.interactions.toLowerCase().includes(tagValue.toLowerCase())
                );
                break;
            case 'mechanism':
                const cleanTagValue = tagValue.replace('...', '');
                filteredResults = searchableData.filter(item => 
                    item.pointers.pharmaClass.mechanism.includes(cleanTagValue.substring(0, 40))
                );
                break;
            default:
                filteredResults = searchableData;
        }

        // Clear search input
        const searchInput = document.getElementById('drug-search-input');
        if (searchInput) {
            searchInput.value = `Filtered by ${tagType}: ${tagValue}`;
        }

        // Display filtered results
        resultsContainer.innerHTML = '';
        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = '<p>No drugs found with this tag.</p>';
            return;
        }

        // Change results container to grid layout
        resultsContainer.className = 'drug-grid';
        
        filteredResults.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;
            
            const drugCard = document.createElement('div');
            drugCard.className = 'drug-card';
            
            drugCard.innerHTML = `
                <div class="drug-name">${drug.name}</div>
                
                <div class="drug-section">
                    <div class="drug-section-title">System & Class</div>
                    <div class="tag-container">
                        <span class="tag system" onclick="filterByTag('system', '${system.system}')">${system.system}</span>
                        <span class="tag class" onclick="filterByTag('class', '${pharmaClass.name}')">${pharmaClass.name}</span>
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Mechanism</div>
                    <div class="tag-container">
                        <span class="tag mechanism" onclick="filterByTag('mechanism', '${pharmaClass.mechanism.substring(0, 50)}...')" title="${pharmaClass.mechanism}">${pharmaClass.mechanism.length > 50 ? pharmaClass.mechanism.substring(0, 50) + '...' : pharmaClass.mechanism}</span>
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Indications</div>
                    <div class="tag-container">
                        ${drug.indications.map(indication => 
                            `<span class="tag indication clickable-tag" data-indication="${indication}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Contraindications</div>
                    <div class="tag-container">
                        ${drug.contraindications.map(contraindication => 
                            `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Side Effects</div>
                    <div class="tag-container">
                        ${pharmaClass.side_effects.map(effect => 
                            `<span class="tag side-effect" onclick="filterByTag('side-effect', '${effect}')">${effect}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Drug Interactions</div>
                    <div class="tag-container">
                        ${pharmaClass.interactions.split(/[,;.]/).filter(item => item.trim()).map(interaction => 
                            `<span class="tag interaction" onclick="filterByTag('interaction', '${interaction.trim()}')">${interaction.trim()}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="drug-section">
                    <div class="drug-section-title">Key Features</div>
                    <p style="font-size: 0.9em; color: #666;">${drug.features}</p>
                </div>
            `;
            
            drugCard.onclick = (e) => {
                // Don't navigate if clicking on a tag
                if (e.target.classList.contains('tag')) return;
                
                mainContainer.className = '';
                mainContainer.id = 'column-container';
                showDrugDetail(system, therapeuticClass, pharmaClass, drug);
            };
            
            resultsContainer.appendChild(drugCard);
        });
    };
    window.DrugApp.performSearch = performSearch;

    function renderCompareView() {
        if (comparisonList.length === 0) return;

        mainContainer.innerHTML = '';
        mainContainer.className = 'compare-view-container';

        comparisonList.forEach(item => {
            const detailColumn = document.createElement('div');
            detailColumn.className = 'detail-view-column';
            
            detailColumn.innerHTML = `
                <div class="detail-section">
                    <h3>${item.drug.name}</h3>
                    <p><strong>Class:</strong> ${item.pharmaClass.name}</p>
                </div>
                <div class="detail-section">
                    <h3>Mechanism of Action</h3>
                    <p>${item.pharmaClass.mechanism}</p>
                </div>
                <div class="detail-section">
                    <h3>Key Features</h3>
                    <p>${item.drug.features}</p>
                </div>
                <div class="detail-section">
                    <h3>Clinical Choice</h3>
                    <p>${item.drug.choice}</p>
                </div>
                <div class="detail-section">
                    <h3>Indications</h3>
                    <div class="tag-container">
                        ${item.drug.indications.map(indication => `<span class="tag indication clickable-tag" data-indication="${indication}" style="cursor: pointer;" title="Click to find all drugs for ${indication}">${indication}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>Contraindications</h3>
                    <div class="tag-container">
                        ${item.drug.contraindications.map(contraindication => `<span class="tag contraindication clickable-tag" data-contraindication="${contraindication}" style="cursor: pointer;" title="Click to find all drugs to avoid with ${contraindication}">${contraindication}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>Side Effects</h3>
                    <div class="tag-container">
                        ${item.pharmaClass.side_effects.map(effect => `<span class="tag side-effect">${effect}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>Drug Interactions</h3>
                    <div class="tag-container">
                        ${parseInteractionTags(item.pharmaClass.interactions)}
                    </div>
                    <div class="interaction-explanation">
                        <p><strong>Clinical Significance:</strong> ${item.pharmaClass.interaction_explanation || item.pharmaClass.interactions}</p>
                    </div>
                </div>
            `;

            mainContainer.appendChild(detailColumn);
        });

        updateHeaderControls();
    }

    // Universal event listener for clickable tags with debug logging
    document.addEventListener('click', function(e) {
        console.log('Click detected on:', e.target);
        console.log('Classes:', e.target.classList);
        
        // Check if the tag is inside a column-item (main navigation view)
        const isInColumnItem = e.target.closest('.column-item');
        if (isInColumnItem) {
            console.log('Tag is in column navigation - ignoring click');
            return;
        }
        
        // Check for clickable tags or any tag with appropriate classes
        if (e.target.classList.contains('clickable-tag') || e.target.classList.contains('tag')) {
            console.log('Tag found!');
            
            if (e.target.dataset.indication) {
                console.log('Calling searchByIndication with:', e.target.dataset.indication);
                searchByIndication(e.target.dataset.indication);
            } else if (e.target.dataset.contraindication) {
                console.log('Calling searchByContraindication with:', e.target.dataset.contraindication);
                searchByContraindication(e.target.dataset.contraindication);
            } else if (e.target.classList.contains('side-effect')) {
                console.log('Calling searchBySideEffect with:', e.target.textContent);
                searchBySideEffect(e.target.textContent);
            } else if (e.target.classList.contains('mechanism')) {
                console.log('Calling searchByMechanism with:', e.target.textContent);
                searchByMechanism(e.target.textContent);
            } else if (e.target.classList.contains('class') || e.target.classList.contains('subclass')) {
                console.log('Calling searchByClass with:', e.target.textContent);
                searchByClass(e.target.textContent);
            } else if (e.target.classList.contains('system')) {
                console.log('Calling searchBySystem with:', e.target.textContent);
                searchBySystem(e.target.textContent);
            }
        }
    });

    // Initialize
    flattenDrugData();
    showSystems();

});

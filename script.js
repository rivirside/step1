const drugData = [
    {
        system: 'Autonomic Nervous System',
        therapeutic_classes: [
            {
                name: 'Cholinergic Agonists (Parasympathomimetics)',
                pharma_classes: [
                    {
                        name: 'Direct Muscarinic Agonists',
                        mechanism: 'Direct stimulation of muscarinic receptors, mimicking acetylcholine effects.',
                        side_effects: ['Cholinergic crisis', 'Bradycardia', 'Hypotension', 'Bronchoconstriction'],
                        interactions: 'Anticholinergics antagonize effects.',
                        drugs: [
                            { name: 'Bethanechol', features: 'Selective for M3 receptors.', choice: 'Postoperative urinary retention.', indications: ['Urinary Retention', 'Gastroparesis'], contraindications: ['Asthma', 'COPD', 'Mechanical Obstruction'] },
                            { name: 'Pilocarpine', features: 'Crosses blood-brain barrier.', choice: 'Glaucoma, xerostomia.', indications: ['Glaucoma', 'Dry Mouth'], contraindications: ['Narrow-angle Glaucoma', 'Asthma'] },
                            { name: 'Carbachol', features: 'Resistant to AChE, strong nicotinic activity.', choice: 'Pupil constriction for glaucoma.', indications: ['Glaucoma', 'Miosis Induction'], contraindications: ['Asthma', 'COPD'] },
                            { name: 'Methacholine', features: 'Potent muscarinic agonist, short-acting.', choice: 'Bronchial hyperreactivity challenge test.', indications: ['Asthma Diagnosis'], contraindications: ['Severe Asthma', 'Recent MI', 'Arrhythmia'] }
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
                            { name: 'Pyridostigmine', features: 'Longer duration than neostigmine.', choice: 'Chronic myasthenia gravis treatment.', indications: ['Myasthenia Gravis'], contraindications: ['Mechanical Obstruction'] },
                            { name: 'Edrophonium', features: 'Very short-acting AChE inhibitor.', choice: 'Tensilon test to diagnose myasthenia gravis.', indications: ['Myasthenia Diagnosis'], contraindications: ['Asthma', 'Mechanical Obstruction'] },
                            { name: 'Donepezil', features: 'Lipophilic, CNS penetration.', choice: 'Alzheimer disease symptomatic therapy.', indications: ['Alzheimer Disease'], contraindications: ['Bradycardia', 'Heart Block'] },
                            { name: 'Rivastigmine', features: 'Transdermal option, less hepatic metabolism.', choice: 'Dementia with parkinsonism.', indications: ['Alzheimer Disease', 'Parkinson Dementia'], contraindications: ['Hypersensitivity'] },
                            { name: 'Galantamine', features: 'Also modulates nicotinic receptors.', choice: 'Alzheimer disease mild-to-moderate.', indications: ['Alzheimer Disease'], contraindications: ['Severe Hepatic Impairment'] }
                        ]
                    }
                ]
            },
            {
                name: 'Cholinergic Antagonists (Parasympatholytics)',
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
                            { name: 'Tiotropium', features: 'Once-daily LAMA.', choice: 'COPD maintenance therapy.', indications: ['COPD'], contraindications: ['Narrow-angle Glaucoma'] },
                            { name: 'Benztropine', features: 'Central acting M1 antagonist.', choice: 'Parkinson tremor and dystonia.', indications: ['Parkinson Disease', 'Acute Dystonia'], contraindications: ['Narrow-angle Glaucoma', 'Tardive Dyskinesia'] },
                            { name: 'Trihexyphenidyl', features: 'Central antimuscarinic similar to benztropine.', choice: 'Adjunct therapy for Parkinsonism.', indications: ['Parkinson Disease'], contraindications: ['Narrow-angle Glaucoma', 'Prostatic Hypertrophy'] },
                            { name: 'Glycopyrrolate', features: 'Quaternary, no CNS penetration.', choice: 'Preoperative secretion control, IBS.', indications: ['Peptic Ulcer Adjunct', 'Excess Drooling'], contraindications: ['Severe Ulcerative Colitis'] },
                            { name: 'Oxybutynin', features: 'Selective for bladder M3 receptors.', choice: 'Urge urinary incontinence.', indications: ['Overactive Bladder'], contraindications: ['Urinary Retention', 'Gastric Retention'] },
                            { name: 'Tolterodine', features: 'Bladder-selective antimuscarinic.', choice: 'Chronic overactive bladder.', indications: ['Overactive Bladder'], contraindications: ['Urinary Retention'] },
                            { name: 'Homatropine/Tropicamide', features: 'Short-acting mydriatics.', choice: 'Mydriasis for eye exams.', indications: ['Ophthalmic Dilation'], contraindications: ['Narrow-angle Glaucoma'] },
                            { name: 'Dicyclomine', features: 'GI-selective antispasmodic.', choice: 'Irritable bowel syndrome cramping.', indications: ['IBS'], contraindications: ['Severe Ulcerative Colitis', 'Obstructive Uropathy'] },
                            { name: 'Hyoscyamine', features: 'GI antispasmodic, sublingual option.', choice: 'Adjunct for IBS symptom control.', indications: ['IBS'], contraindications: ['Narrow-angle Glaucoma'] }
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
                name: 'Adrenergic Agonists (Sympathomimetics)',
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
                        name: 'Dopamine Receptor Agonists',
                        mechanism: 'Dose-dependent stimulation of dopamine, β1, and α1 receptors.',
                        side_effects: ['Arrhythmias', 'Tachycardia', 'Extravasation injury'],
                        interactions: 'MAOIs and β-blockers modify response.',
                        drugs: [
                            { name: 'Dopamine', features: 'Low dose renal vasodilation, high dose α1.', choice: 'Unstable bradycardia, cardiogenic shock.', indications: ['Shock', 'Heart Failure'], contraindications: ['Pheochromocytoma', 'Tachyarrhythmias'] }
                        ]
                    },
                    {
                        name: 'β1-Selective Agonists',
                        mechanism: 'Preferential stimulation of β1 receptors increases inotropy and chronotropy.',
                        side_effects: ['Tachyarrhythmias', 'Angina', 'Hypertension'],
                        interactions: 'Beta-blockers blunt effects.',
                        drugs: [
                            { name: 'Dobutamine', features: 'Predominantly β1 with mild β2/α1 activity.', choice: 'Acute decompensated heart failure.', indications: ['Heart Failure', 'Cardiac Stress Testing'], contraindications: ['Idiopathic Hypertrophic Subaortic Stenosis'] }
                        ]
                    },
                    {
                        name: 'Non-selective β Agonists',
                        mechanism: 'Stimulate both β1 and β2 receptors strongly.',
                        side_effects: ['Tachycardia', 'Arrhythmias', 'Hypotension from β2 vasodilation'],
                        interactions: 'Beta-blockers antagonize effects.',
                        drugs: [
                            { name: 'Isoproterenol', features: 'Powerful β1/β2 agonist, minimal α activity.', choice: 'Refractory bradycardia with torsades from long QT.', indications: ['Bradycardia', 'Torsades de Pointes'], contraindications: ['Tachyarrhythmias'] }
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
                            { name: 'Formoterol', features: 'Long-acting with rapid onset.', choice: 'COPD maintenance therapy.', indications: ['Asthma', 'COPD'], contraindications: ['Asthma Monotherapy'] },
                            { name: 'Terbutaline', features: 'β2 selective, systemic administration.', choice: 'Tocolysis and asthma exacerbations.', indications: ['Asthma', 'Preterm Labor'], contraindications: ['Cardiac Disease', 'Hyperthyroidism'] }
                        ]
                    },
                    {
                        name: 'α1-Selective Agonists',
                        mechanism: 'Stimulate α1 receptors causing vasoconstriction and increased tone.',
                        side_effects: ['Hypertension', 'Reflex bradycardia', 'Piloerection'],
                        interactions: 'MAOIs enhance effects, α-blockers antagonize.',
                        drugs: [
                            { name: 'Phenylephrine', features: 'Pure α1 agonist.', choice: 'Hypotension, nasal decongestant, mydriasis.', indications: ['Hypotension', 'Nasal Congestion'], contraindications: ['Severe Hypertension'] },
                            { name: 'Midodrine', features: 'Prodrug activating α1 receptors.', choice: 'Neurogenic orthostatic hypotension.', indications: ['Orthostatic Hypotension'], contraindications: ['Severe Organic Heart Disease', 'Urinary Retention'] }
                        ]
                    },
                    {
                        name: 'Indirect Sympathomimetics',
                        mechanism: 'Increase synaptic catecholamines via release or reuptake inhibition.',
                        side_effects: ['Tachycardia', 'Hypertension', 'CNS stimulation'],
                        interactions: 'MAOIs and sympathomimetics potentiate hypertensive crises.',
                        drugs: [
                            { name: 'Amphetamine', features: 'Promotes release of catecholamines.', choice: 'ADHD, narcolepsy.', indications: ['ADHD', 'Narcolepsy'], contraindications: ['Severe Hypertension', 'Cardiac Disease'] },
                            { name: 'Ephedrine', features: 'Mixed direct/indirect sympathomimetic.', choice: 'Nasal decongestant, hypotension in anesthesia.', indications: ['Hypotension', 'Nasal Congestion'], contraindications: ['Tachyarrhythmias'] }
                        ]
                    },
                    {
                        name: 'Reuptake Inhibitors',
                        mechanism: 'Block catecholamine reuptake pumps at synaptic clefts.',
                        side_effects: ['Arrhythmias', 'Hypertension', 'Seizures'],
                        interactions: 'Sympathomimetics enhance toxicity.',
                        drugs: [
                            { name: 'Cocaine', features: 'Blocks NE reuptake, local anesthetic.', choice: 'Topical anesthetic for ENT procedures.', indications: ['Local Anesthesia'], contraindications: ['Beta Blocker Use', 'Cardiovascular Disease'] }
                        ]
                    }
                ]
            },
            {
                name: 'Adrenergic Antagonists (Sympatholytics)',
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
                            { name: 'Carvedilol', features: 'Combined α/β blocker.', choice: 'Heart failure with proven mortality benefit.', indications: ['Heart Failure', 'Hypertension'], contraindications: ['Decompensated Heart Failure'] },
                            { name: 'Esmolol', features: 'Ultra–short acting β1 blocker.', choice: 'Acute SVT, intraoperative control.', indications: ['Supraventricular Tachycardia', 'Thyroid Storm'], contraindications: ['Sinus Bradycardia', 'Heart Block'] },
                            { name: 'Timolol', features: 'Non-selective, ophthalmic use.', choice: 'Open-angle glaucoma topical therapy.', indications: ['Glaucoma'], contraindications: ['Asthma', 'COPD'] },
                            { name: 'Nadolol', features: 'Non-selective, long half-life.', choice: 'Portal hypertension variceal prophylaxis.', indications: ['Hypertension', 'Variceal Bleeding Prophylaxis'], contraindications: ['Asthma', 'Heart Block'] },
                            { name: 'Nebivolol', features: 'β1 blocker with NO-mediated vasodilation.', choice: 'Hypertension with metabolic syndrome.', indications: ['Hypertension'], contraindications: ['Severe Hepatic Impairment'] },
                            { name: 'Labetalol', features: 'α1 and β blockade, IV or PO.', choice: 'Hypertensive emergency, pregnancy.', indications: ['Hypertensive Emergency', 'Pregnancy Hypertension'], contraindications: ['Asthma', 'Heart Block'] }
                        ]
                    },
                    {
                        name: 'Alpha Blockers',
                        mechanism: 'Block alpha-adrenergic receptors causing vasodilation.',
                        side_effects: ['Orthostatic hypotension', 'First-dose syncope'],
                        interactions: 'Other antihypertensives (additive effects).',
                        drugs: [
                            { name: 'Prazosin', features: 'Selective α1-blocker.', choice: 'Hypertension, BPH, PTSD nightmares.', indications: ['Hypertension', 'BPH', 'PTSD'], contraindications: ['Hypotension'] },
                            { name: 'Doxazosin', features: 'Long-acting α1-blocker.', choice: 'BPH with hypertension.', indications: ['Hypertension', 'BPH'], contraindications: ['Hypotension'] },
                            { name: 'Terazosin', features: 'α1 blocker with smooth muscle relaxation.', choice: 'BPH symptom relief.', indications: ['BPH'], contraindications: ['Hypotension'] },
                            { name: 'Tamsulosin', features: 'Uroselective α1A antagonist.', choice: 'BPH with minimal blood pressure effect.', indications: ['BPH'], contraindications: ['Sulfa Allergy'] },
                            { name: 'Phenoxybenzamine', features: 'Irreversible non-selective α blocker.', choice: 'Preoperative pheochromocytoma preparation.', indications: ['Pheochromocytoma'], contraindications: ['Angina', 'Severe Hypotension'] },
                            { name: 'Phentolamine', features: 'Reversible non-selective α blocker.', choice: 'Hypertensive crisis from MAOI/tyramine.', indications: ['Pheochromocytoma', 'Cocaine Extravasation'], contraindications: ['Coronary Artery Disease'] }
                        ]
                    },
                    {
                        name: 'Central α2 Agonists',
                        mechanism: 'Stimulate central α2 receptors to reduce sympathetic outflow.',
                        side_effects: ['Sedation', 'Rebound hypertension', 'Dry mouth'],
                        interactions: 'CNS depressants enhance sedation.',
                        drugs: [
                            { name: 'Clonidine', features: 'Lipophilic, rapid onset oral/patch.', choice: 'Resistant hypertension, ADHD adjunct.', indications: ['Hypertension', 'ADHD'], contraindications: ['Depression', 'Severe Coronary Insufficiency'] },
                            { name: 'Methyldopa', features: 'Converted to α-methylnorepinephrine.', choice: 'Hypertension during pregnancy.', indications: ['Pregnancy Hypertension'], contraindications: ['Hepatic Disease', 'MAOI Therapy'] },
                            { name: 'Tizanidine', features: 'Imidazoline derivative, muscle relaxant.', choice: 'Spasticity management.', indications: ['Muscle Spasticity'], contraindications: ['Severe Hepatic Impairment'] }
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
                        name: 'Direct Vasodilators',
                        mechanism: 'Directly relax arteriolar smooth muscle to reduce afterload (± preload).',
                        side_effects: ['Reflex tachycardia', 'Fluid retention', 'Headache', 'Hypertrichosis (minoxidil)'],
                        interactions: 'Often require concomitant β-blocker/diuretic to blunt reflex responses.',
                        drugs: [
                            { name: 'Hydralazine', features: 'Increases cGMP -> smooth muscle relaxation.', choice: 'Severe HTN, HF (with nitrates) in pregnancy or AA patients.', indications: ['Severe Hypertension', 'Heart Failure'], contraindications: ['Coronary Artery Disease', 'Rheumatic Heart Disease in Mitral Stenosis'] },
                            { name: 'Minoxidil', features: 'Opens K+ channels -> hyperpolarization.', choice: 'Refractory hypertension, topical for alopecia.', indications: ['Refractory Hypertension', 'Alopecia'], contraindications: ['Pheochromocytoma'] }
                        ]
                    },
                    {
                        name: 'Hypertensive Emergency Agents',
                        mechanism: 'Rapidly lower blood pressure via potent arterial dilatation and renal vasodilation.',
                        side_effects: ['Hypotension', 'Cyanide toxicity (nitroprusside)', 'Tachycardia', 'Nausea'],
                        interactions: 'Additive hypotension with other vasodilators.',
                        drugs: [
                            { name: 'Sodium Nitroprusside', features: 'IV, short acting, releases NO and cyanide.', choice: 'Hypertensive emergencies with acute target-organ damage.', indications: ['Hypertensive Emergency'], contraindications: ['Renal Failure without thiosulfate'] },
                            { name: 'Fenoldopam', features: 'D1 agonist -> renal vasodilation, natriuresis.', choice: 'Hypertensive emergency with acute kidney injury.', indications: ['Hypertensive Emergency', 'Postoperative Hypertension'], contraindications: ['Sulfite Sensitivity'] }
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
                    },
                    {
                        name: 'Miscellaneous (Class V)',
                        mechanism: 'Act through unique pathways to acutely slow AV node conduction or stabilize myocardium.',
                        side_effects: ['Flushing (adenosine)', 'Chest discomfort', 'Hypotension', 'Bradycardia'],
                        interactions: 'Dipyridamole and carbamazepine potentiate adenosine; methylxanthines antagonize.',
                        drugs: [
                            { name: 'Adenosine', features: 'Very short acting, activates K+ efflux in AV node.', choice: 'Acute supraventricular tachycardia conversion.', indications: ['Paroxysmal SVT'], contraindications: ['Second/Third-Degree AV Block', 'Asthma'] },
                            { name: 'Magnesium Sulfate', features: 'Stabilizes cardiac membrane, suppresses early afterdepolarizations.', choice: 'Torsades de pointes, digoxin toxicity.', indications: ['Torsades de Pointes', 'Digoxin Toxicity'], contraindications: ['AV Block', 'Renal Failure'] }
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
                    },
                    {
                        name: 'Cholesterol Absorption Inhibitors',
                        mechanism: 'Block NPC1L1 transporter at intestinal brush border to reduce cholesterol absorption.',
                        side_effects: ['Diarrhea', 'Elevated LFTs (with statins)'],
                        interactions: 'Bile acid resins decrease ezetimibe absorption.',
                        drugs: [
                            { name: 'Ezetimibe', features: 'Add-on for LDL reduction when statins insufficient.', choice: 'Hyperlipidemia intolerant of high-dose statin.', indications: ['Hyperlipidemia'], contraindications: ['Active Liver Disease'] }
                        ]
                    },
                    {
                        name: 'Bile Acid Sequestrants',
                        mechanism: 'Bind bile acids in intestine, forcing hepatic conversion of cholesterol to bile acids.',
                        side_effects: ['GI distress', 'Decreased fat-soluble vitamins'],
                        interactions: 'Reduce absorption of many drugs (digoxin, warfarin).',
                        drugs: [
                            { name: 'Cholestyramine', features: 'Powder formulation, lowers LDL modestly.', choice: 'Hyperlipidemia in patients intolerant to statins.', indications: ['Hyperlipidemia', 'Pruritus from Cholestasis'], contraindications: ['Complete Biliary Obstruction'] },
                            { name: 'Colesevelam', features: 'Tablet, better tolerated.', choice: 'Adjunct LDL lowering with fewer GI effects.', indications: ['Hyperlipidemia'], contraindications: ['Triglycerides >500 mg/dL'] }
                        ]
                    },
                    {
                        name: 'Fibrates',
                        mechanism: 'Activate PPAR-α to increase lipoprotein lipase activity and lower triglycerides.',
                        side_effects: ['Myopathy (especially with statins)', 'Gallstones'],
                        interactions: 'Gemfibrozil increases statin levels via OATP inhibition.',
                        drugs: [
                            { name: 'Gemfibrozil', features: 'Potent TG lowering.', choice: 'Severe hypertriglyceridemia to prevent pancreatitis.', indications: ['Hypertriglyceridemia'], contraindications: ['Gallbladder Disease', 'Severe Renal/Hepatic Dysfunction'] },
                            { name: 'Fenofibrate', features: 'Safer with statins, once-daily.', choice: 'Hypertriglyceridemia with mixed dyslipidemia.', indications: ['Hypertriglyceridemia'], contraindications: ['Severe Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'Niacin',
                        mechanism: 'Inhibits hepatic VLDL synthesis and adipose lipolysis, raising HDL.',
                        side_effects: ['Flushing', 'Hyperglycemia', 'Hyperuricemia', 'Hepatotoxicity'],
                        interactions: 'Additive myopathy with statins.',
                        drugs: [
                            { name: 'Niacin (Vitamin B3)', features: 'Most effective agent for raising HDL.', choice: 'Combined dyslipidemia with low HDL.', indications: ['Mixed Dyslipidemia'], contraindications: ['Gout', 'Active Peptic Ulcer Disease'] }
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
                    },
                    {
                        name: 'Phosphodiesterase-3 Inhibitors',
                        mechanism: 'Inhibit PDE3 to increase cAMP in cardiomyocytes and vascular smooth muscle, enhancing inotropy and vasodilation.',
                        side_effects: ['Arrhythmias', 'Hypotension', 'Thrombocytopenia'],
                        interactions: 'Additive hypotension with other vasodilators.',
                        drugs: [
                            { name: 'Milrinone', features: 'IV inotrope with vasodilatory properties.', choice: 'Acute decompensated heart failure with low output.', indications: ['Acute Heart Failure'], contraindications: ['Severe Valvular Disease'] }
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
                    },
                    {
                        name: 'Methylxanthines',
                        mechanism: 'Inhibit phosphodiesterase to increase cAMP and block adenosine receptors, causing bronchodilation.',
                        side_effects: ['Narrow therapeutic index', 'Arrhythmias', 'Seizures'],
                        interactions: 'CYP inhibitors (ciprofloxacin, cimetidine) increase toxicity; smoking induces metabolism.',
                        drugs: [
                            { name: 'Theophylline', features: 'Oral bronchodilator with CNS and cardiac stimulation.', choice: 'Severe asthma exacerbations unresponsive to standard therapy.', indications: ['Asthma', 'COPD'], contraindications: ['Cardiac Arrhythmias', 'Seizure Disorders'] }
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
                    },
                    {
                        name: 'Mast Cell Stabilizers',
                        mechanism: 'Prevent calcium-dependent mast cell degranulation.',
                        side_effects: ['Throat irritation', 'Cough', 'Unpleasant taste'],
                        interactions: 'Minimal systemic interactions.',
                        drugs: [
                            { name: 'Cromolyn Sodium', features: 'Inhaled prophylactic agent.', choice: 'Exercise- or allergen-induced asthma prevention.', indications: ['Asthma Prophylaxis'], contraindications: ['Acute Asthma Exacerbation'] }
                        ]
                    },
                    {
                        name: 'Targeted Biologics',
                        mechanism: 'Monoclonal antibodies neutralize IgE or cytokines driving allergic inflammation.',
                        side_effects: ['Injection site reactions', 'Anaphylaxis (rare)'],
                        interactions: 'Live vaccines contraindicated while on therapy.',
                        drugs: [
                            { name: 'Omalizumab', features: 'Binds circulating IgE, downregulates Fc epsilon RI.', choice: 'Severe allergic asthma uncontrolled on ICS/LABA.', indications: ['Severe Allergic Asthma'], contraindications: ['Acute Asthma Deterioration'] }
                        ]
                    }
                ]
            },
            {
                name: 'Airway Clearance Agents',
                pharma_classes: [
                    {
                        name: 'Mucolytics',
                        mechanism: 'Reduce mucus viscosity to improve airway clearance.',
                        side_effects: ['Bronchospasm', 'Chest tightness', 'Nausea'],
                        interactions: 'May enhance effects of other inhaled therapies by improving deposition.',
                        drugs: [
                            { name: 'N-Acetylcysteine', features: 'Breaks disulfide bonds in mucus; antidote for acetaminophen toxicity.', choice: 'Cystic fibrosis mucus plugging, COPD exacerbations.', indications: ['Cystic Fibrosis', 'COPD', 'Acetaminophen Toxicity'], contraindications: ['Active GI Bleeding'] },
                            { name: 'Dornase Alfa', features: 'Recombinant DNase I, reduces DNA viscosity in sputum.', choice: 'Daily maintenance in cystic fibrosis.', indications: ['Cystic Fibrosis'], contraindications: ['Hypersensitivity'] }
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
                    },
                    {
                        name: 'Carbapenems',
                        mechanism: 'Beta-lactams resistant to most beta-lactamases, broad-spectrum activity.',
                        side_effects: ['Seizures (imipenem)', 'GI upset', 'Rash'],
                        interactions: 'Valproate levels decreased, raising seizure risk.',
                        drugs: [
                            { name: 'Imipenem/Cilastatin', features: 'Cilastatin prevents renal dehydropeptidase degradation.', choice: 'Severe polymicrobial infections.', indications: ['Severe Nosocomial Infections'], contraindications: ['History of Seizures'] },
                            { name: 'Meropenem', features: 'Lower seizure risk, stable to dehydropeptidase.', choice: 'Resistant gram-negative infections.', indications: ['Resistant Gram-negative Infections'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Monobactams',
                        mechanism: 'Monocyclic beta-lactam active against gram-negative rods.',
                        side_effects: ['Rash', 'Elevated liver enzymes'],
                        interactions: 'Minimal cross-reactivity with other beta-lactams.',
                        drugs: [
                            { name: 'Aztreonam', features: 'Safe in penicillin allergy, lacks gram-positive/anaerobe activity.', choice: 'Gram-negative infections in beta-lactam allergy.', indications: ['Gram-negative Infections'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Glycopeptides',
                        mechanism: 'Bind D-Ala-D-Ala termini to inhibit peptidoglycan cross-linking.',
                        side_effects: ['Red man syndrome', 'Nephrotoxicity', 'Ototoxicity'],
                        interactions: 'Other nephrotoxic drugs increase toxicity.',
                        drugs: [
                            { name: 'Vancomycin', features: 'IV for MRSA, oral for C. difficile.', choice: 'Serious gram-positive infections.', indications: ['MRSA Infections', 'C. difficile Colitis'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Lipopeptides',
                        mechanism: 'Insert into gram-positive cell membranes causing depolarization and rapid cell death.',
                        side_effects: ['Myopathy', 'Eosinophilic pneumonia'],
                        interactions: 'Statins increase risk of myopathy.',
                        drugs: [
                            { name: 'Daptomycin', features: 'Bactericidal against MRSA and VRE, inactivated by lung surfactant.', choice: 'Right-sided endocarditis, complicated skin infections.', indications: ['MRSA Infections', 'VRE Infections'], contraindications: ['Pneumonia'] }
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
                            { name: 'Amikacin', features: 'Resistant to most aminoglycoside-modifying enzymes.', choice: 'MDR gram-negative infections.', indications: ['MDR Gram-negative Infections'], contraindications: ['Pregnancy', 'Hearing Loss'] },
                            { name: 'Streptomycin', features: 'Oldest agent, significant ototoxicity.', choice: 'Second-line tuberculosis, plague.', indications: ['Tuberculosis', 'Yersinia pestis Infection'], contraindications: ['Pregnancy', 'Myasthenia Gravis'] }
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
                    },
                    {
                        name: 'Lincosamides',
                        mechanism: 'Bind 50S ribosomal subunit to inhibit peptide transfer.',
                        side_effects: ['C. difficile colitis', 'Diarrhea', 'Rash'],
                        interactions: 'Antagonistic when combined with macrolides.',
                        drugs: [
                            { name: 'Clindamycin', features: 'Excellent anaerobic coverage above diaphragm.', choice: 'Aspiration pneumonia, oral infections, toxin suppression.', indications: ['Anaerobic Infections', 'Streptococcal Toxic Shock'], contraindications: ['History of C. difficile Colitis'] }
                        ]
                    },
                    {
                        name: 'Oxazolidinones',
                        mechanism: 'Prevent formation of the initiation complex on the 50S ribosomal subunit.',
                        side_effects: ['Thrombocytopenia', 'Peripheral neuropathy', 'Serotonin syndrome'],
                        interactions: 'MAO inhibition potentiates serotonergic drugs.',
                        drugs: [
                            { name: 'Linezolid', features: 'Oral option for resistant gram-positive organisms.', choice: 'MRSA or VRE infections.', indications: ['MRSA Infections', 'VRE Infections'], contraindications: ['Uncontrolled Hypertension', 'Serotonergic Therapy without adjustment'] }
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
            },
            {
                name: 'Inflammatory Bowel Disease',
                pharma_classes: [
                    {
                        name: 'Aminosalicylates',
                        mechanism: 'Deliver 5-aminosalicylic acid to inflamed colonic mucosa to inhibit prostaglandins and leukotrienes.',
                        side_effects: ['Headache', 'Nausea', 'Interstitial nephritis (rare)'],
                        interactions: 'Concurrent NSAIDs increase renal risk.',
                        drugs: [
                            { name: 'Mesalamine', features: 'Multiple formulations for targeted release.', choice: 'Mild to moderate ulcerative colitis maintenance.', indications: ['Ulcerative Colitis'], contraindications: ['Salicylate Allergy'] }
                        ]
                    },
                    {
                        name: 'Biologic Agents',
                        mechanism: 'Monoclonal antibodies neutralize TNF-α to reduce intestinal inflammation.',
                        side_effects: ['Infection risk', 'Infusion reactions', 'Reactivation of latent TB'],
                        interactions: 'Live vaccines contraindicated.',
                        drugs: [
                            { name: 'Infliximab', features: 'Chimeric anti-TNF antibody.', choice: 'Moderate to severe Crohn disease or ulcerative colitis.', indications: ['Crohn Disease', 'Ulcerative Colitis'], contraindications: ['Active Infection', 'Latent TB without prophylaxis'] }
                        ]
                    }
                ]
            },
            {
                name: 'Portal and Hepatic Disorders',
                pharma_classes: [
                    {
                        name: 'Somatostatin Analogs',
                        mechanism: 'Decrease splanchnic blood flow and hormone secretion.',
                        side_effects: ['Gallstones', 'Steatorrhea', 'Glucose dysregulation'],
                        interactions: 'May reduce absorption of fat-soluble drugs.',
                        drugs: [
                            { name: 'Octreotide', features: 'Long-acting somatostatin analog.', choice: 'Variceal bleeding control, hormone-secreting tumors.', indications: ['Esophageal Varices', 'Carcinoid Syndrome', 'VIPoma'], contraindications: ['Hypersensitivity'] }
                        ]
                    },
                    {
                        name: 'Ammonia-Lowering Agents',
                        mechanism: 'Reduce intestinal ammonia production and absorption.',
                        side_effects: ['Bloating', 'Diarrhea', 'Electrolyte disturbances'],
                        interactions: 'Additive diarrhea with other laxatives.',
                        drugs: [
                            { name: 'Lactulose', features: 'Non-absorbable disaccharide acidifying colon.', choice: 'First-line therapy for hepatic encephalopathy.', indications: ['Hepatic Encephalopathy'], contraindications: ['Galactosemia'] },
                            { name: 'Rifaximin', features: 'Poorly absorbed oral antibiotic.', choice: 'Adjunct to lactulose to reduce ammonia-producing flora.', indications: ['Hepatic Encephalopathy'], contraindications: ['Severe Hepatic Impairment (caution)'] }
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
                    },
                    {
                        name: 'Osmotic Diuretics',
                        mechanism: 'Increase tubular fluid osmolarity, drawing free water out of tissues and into filtrate.',
                        side_effects: ['Pulmonary edema', 'Dehydration', 'Hypernatremia'],
                        interactions: 'Additive nephrotoxicity with other nephrotoxic agents.',
                        drugs: [
                            { name: 'Mannitol', features: 'IV sugar alcohol, does not cross BBB.', choice: 'Increased intracranial or intraocular pressure.', indications: ['Cerebral Edema', 'Acute Glaucoma', 'Drug Overdose'], contraindications: ['Anuria', 'Heart Failure', 'Pulmonary Edema'] }
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
                        name: 'Parenteral Direct Thrombin Inhibitors',
                        mechanism: 'Directly inhibit thrombin independent of antithrombin III.',
                        side_effects: ['Bleeding', 'Hematoma', 'GI upset'],
                        interactions: 'Additive bleeding with antiplatelets/anticoagulants.',
                        drugs: [
                            { name: 'Argatroban', features: 'IV, hepatic clearance.', choice: 'Anticoagulation in HIT.', indications: ['Heparin-Induced Thrombocytopenia'], contraindications: ['Severe Hepatic Impairment'] },
                            { name: 'Bivalirudin', features: 'Short half-life, renal clearance.', choice: 'PCI in patients with HIT history.', indications: ['Percutaneous Coronary Intervention', 'HIT'], contraindications: ['Severe Renal Impairment'] }
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
                    },
                    {
                        name: 'GPIIb/IIIa Inhibitors',
                        mechanism: 'Block platelet glycoprotein IIb/IIIa receptors, preventing fibrinogen binding and aggregation.',
                        side_effects: ['Bleeding', 'Thrombocytopenia'],
                        interactions: 'Additive bleeding with anticoagulants.',
                        drugs: [
                            { name: 'Abciximab', features: 'Monoclonal antibody, reversible with platelet transfusion.', choice: 'PCI with high thrombotic risk.', indications: ['Percutaneous Coronary Intervention'], contraindications: ['Active Bleeding', 'Recent Stroke'] },
                            { name: 'Eptifibatide', features: 'Peptide inhibitor, renal clearance.', choice: 'NSTEMI/UA undergoing PCI.', indications: ['Acute Coronary Syndrome'], contraindications: ['Renal Failure', 'Active Bleeding'] },
                            { name: 'Tirofiban', features: 'Non-peptide small molecule.', choice: 'Unstable angina with planned PCI.', indications: ['Acute Coronary Syndrome'], contraindications: ['Active Bleeding', 'History of Intracranial Hemorrhage'] }
                        ]
                    },
                    {
                        name: 'Phosphodiesterase Inhibitors',
                        mechanism: 'Increase cAMP in platelets and cause vasodilation to reduce aggregation.',
                        side_effects: ['Headache', 'Flushing', 'Hypotension'],
                        interactions: 'Other vasodilators increase risk of symptomatic hypotension.',
                        drugs: [
                            { name: 'Cilostazol', features: 'Also causes vasodilation, improves claudication distance.', choice: 'Peripheral arterial disease with claudication.', indications: ['Peripheral Arterial Disease'], contraindications: ['Heart Failure'] },
                            { name: 'Dipyridamole', features: 'Also adenosine reuptake inhibitor.', choice: 'Stroke prevention with aspirin, stress testing.', indications: ['Stroke Prevention', 'Pharmacologic Stress Testing'], contraindications: ['Hypotension', 'Unstable Angina'] }
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
                        name: 'Antitumor Antibiotics',
                        mechanism: 'Intercalate DNA or generate free radicals to inhibit replication.',
                        side_effects: ['Cardiotoxicity (doxorubicin)', 'Pulmonary fibrosis (bleomycin)', 'Myelosuppression'],
                        interactions: 'Dexrazoxane mitigates doxorubicin cardiotoxicity.',
                        drugs: [
                            { name: 'Doxorubicin', features: 'Anthracycline generating free radicals.', choice: 'Breast cancer, lymphomas.', indications: ['Breast Cancer', 'Lymphoma'], contraindications: ['Pre-existing Cardiac Dysfunction'] },
                            { name: 'Bleomycin', features: 'Induces DNA strand breaks via free radicals.', choice: 'Testicular cancer, Hodgkin lymphoma.', indications: ['Testicular Cancer', 'Hodgkin Lymphoma'], contraindications: ['Pulmonary Fibrosis'] }
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
                    },
                    {
                        name: 'Microtubule Inhibitors',
                        mechanism: 'Disrupt microtubule dynamics to arrest cells in metaphase.',
                        side_effects: ['Peripheral neuropathy', 'Myelosuppression', 'Alopecia'],
                        interactions: 'Strong CYP3A4 inhibitors increase toxicity.',
                        drugs: [
                            { name: 'Vincristine', features: 'Prevents microtubule polymerization.', choice: 'Leukemias, lymphomas (part of CHOP).', indications: ['Leukemia', 'Lymphoma'], contraindications: ['Charcot-Marie-Tooth Disease'] },
                            { name: 'Paclitaxel', features: 'Stabilizes microtubules, preventing depolymerization.', choice: 'Breast and ovarian cancers.', indications: ['Breast Cancer', 'Ovarian Cancer'], contraindications: ['Baseline Neutropenia'] }
                        ]
                    },
                    {
                        name: 'Topoisomerase Inhibitors',
                        mechanism: 'Inhibit topoisomerase II or I to prevent DNA unwinding and replication.',
                        side_effects: ['Myelosuppression', 'Alopecia', 'Diarrhea (irinotecan)'],
                        interactions: 'CYP3A4 modulators alter irinotecan levels.',
                        drugs: [
                            { name: 'Etoposide', features: 'Topoisomerase II inhibitor.', choice: 'Testicular cancer, small cell lung cancer.', indications: ['Testicular Cancer', 'Small Cell Lung Cancer'], contraindications: ['Severe Myelosuppression'] },
                            { name: 'Irinotecan', features: 'Topoisomerase I inhibitor, prodrug.', choice: 'Metastatic colorectal cancer (FOLFIRI).', indications: ['Colorectal Cancer'], contraindications: ['UGT1A1 Deficiency'] }
                        ]
                    },
                    {
                        name: 'Targeted Therapies',
                        mechanism: 'Monoclonal antibodies or tyrosine kinase inhibitors directed at specific oncogenic drivers.',
                        side_effects: ['Cardiotoxicity (trastuzumab)', 'Fluid retention (imatinib)', 'Bleeding (bevacizumab)'],
                        interactions: 'Concomitant cardiotoxic or anticoagulant therapy increases adverse effects.',
                        drugs: [
                            { name: 'Imatinib', features: 'BCR-ABL tyrosine kinase inhibitor.', choice: 'Chronic myelogenous leukemia.', indications: ['Chronic Myelogenous Leukemia', 'GIST'], contraindications: ['Severe Hepatic Impairment'] },
                            { name: 'Trastuzumab', features: 'HER2/neu monoclonal antibody.', choice: 'HER2-positive breast cancer.', indications: ['Breast Cancer'], contraindications: ['Pre-existing Cardiac Dysfunction'] },
                            { name: 'Bevacizumab', features: 'VEGF inhibitor reducing angiogenesis.', choice: 'Colorectal, renal cell carcinoma.', indications: ['Colorectal Cancer', 'Renal Cell Carcinoma'], contraindications: ['Uncontrolled Hypertension', 'Recent Surgery'] }
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
                            { name: 'Infliximab', features: 'Chimeric monoclonal antibody against TNF-α.', choice: 'Crohn disease, ulcerative colitis, rheumatoid arthritis.', indications: ['Crohn Disease', 'Ulcerative Colitis', 'Rheumatoid Arthritis'], contraindications: ['Active Infection', 'Latent TB'] },
                            { name: 'Etanercept', features: 'TNF receptor fusion protein.', choice: 'Rheumatoid arthritis refractory to methotrexate.', indications: ['Rheumatoid Arthritis', 'Psoriatic Arthritis'], contraindications: ['Active Infection', 'Latent TB'] },
                            { name: 'Rituximab', features: 'Anti-CD20, depletes B cells.', choice: 'RA refractory to TNF inhibitors.', indications: ['Rheumatoid Arthritis', 'Non-Hodgkin Lymphoma'], contraindications: ['Active Infection', 'Severe Heart Failure'] }
                        ]
                    },
                    {
                        name: 'Calcineurin Inhibitors',
                        mechanism: 'Inhibit calcineurin to block IL-2 transcription and T-cell activation.',
                        side_effects: ['Nephrotoxicity', 'Hypertension', 'Neurotoxicity', 'Gingival hyperplasia (cyclosporine)'],
                        interactions: 'CYP3A4 inhibitors markedly increase levels.',
                        drugs: [
                            { name: 'Cyclosporine', features: 'Binds cyclophilin.', choice: 'Transplant rejection prophylaxis, severe psoriasis.', indications: ['Organ Transplantation', 'Psoriasis'], contraindications: ['Uncontrolled Hypertension', 'Renal Dysfunction'] },
                            { name: 'Tacrolimus', features: 'Binds FKBP-12, more potent.', choice: 'Solid organ transplant prophylaxis.', indications: ['Organ Transplantation'], contraindications: ['Severe Renal Impairment'] }
                        ]
                    },
                    {
                        name: 'Antimetabolite Immunosuppressants',
                        mechanism: 'Inhibit nucleotide synthesis to prevent lymphocyte proliferation.',
                        side_effects: ['Myelosuppression', 'GI upset', 'Hepatotoxicity'],
                        interactions: 'Allopurinol increases azathioprine toxicity; antacids reduce mycophenolate absorption.',
                        drugs: [
                            { name: 'Mycophenolate Mofetil', features: 'Inhibits IMP dehydrogenase in lymphocytes.', choice: 'Transplant rejection prophylaxis, lupus nephritis.', indications: ['Organ Transplantation', 'Lupus Nephritis'], contraindications: ['Pregnancy'] },
                            { name: 'Azathioprine', features: 'Prodrug of 6-mercaptopurine.', choice: 'Steroid-sparing agent for autoimmune disease.', indications: ['Rheumatoid Arthritis', 'Inflammatory Bowel Disease'], contraindications: ['Thiopurine Methyltransferase Deficiency'] }
                        ]
                    },
                    {
                        name: 'mTOR Inhibitors',
                        mechanism: 'Block mTOR signaling downstream of IL-2 to prevent T-cell proliferation.',
                        side_effects: ['Hyperlipidemia', 'Bone marrow suppression', 'Mouth ulcers'],
                        interactions: 'CYP3A4 and P-gp substrates.',
                        drugs: [
                            { name: 'Sirolimus (Rapamycin)', features: 'Used with calcineurin inhibitors to prevent chronic rejection.', choice: 'Renal transplant immunosuppression.', indications: ['Renal Transplantation'], contraindications: ['Severe Hepatic Impairment'] }
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
                    },
                    {
                        name: 'Anabolic Agents',
                        mechanism: 'Stimulate osteoblasts to increase bone formation.',
                        side_effects: ['Hypercalcemia', 'Leg cramps', 'Osteosarcoma risk (black box warning)'],
                        interactions: 'Avoid combination with other hypercalcemia-inducing therapies.',
                        drugs: [
                            { name: 'Teriparatide', features: 'Recombinant PTH 1-34, daily SC dosing.', choice: 'Severe osteoporosis with high fracture risk or glucocorticoid-induced osteoporosis.', indications: ['Severe Osteoporosis', 'Glucocorticoid-Induced Osteoporosis'], contraindications: ['Paget Disease', 'Bone Malignancy History'] }
                        ]
                    },
                    {
                        name: 'RANKL Inhibitors',
                        mechanism: 'Monoclonal antibody inhibits RANKL to block osteoclast activation.',
                        side_effects: ['Hypocalcemia', 'Osteonecrosis of jaw', 'Infections'],
                        interactions: 'Ensure adequate calcium/vitamin D to prevent hypocalcemia.',
                        drugs: [
                            { name: 'Denosumab', features: 'Subcutaneous every 6 months.', choice: 'Postmenopausal osteoporosis with high fracture risk.', indications: ['Osteoporosis'], contraindications: ['Hypocalcemia'] }
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
    trackEvent('shortcut_search', {
        trigger: 'indication_tag',
        value: indication
    });
    // Switch to search view and search for all drugs with this indication
    if (window.DrugApp && window.DrugApp.renderSearchView) {
        window.DrugApp.renderSearchView();
        setTimeout(() => {
            const searchInput = document.getElementById('drug-search-input');
            const indicationRadio = document.querySelector('input[name="search-type"][value="indication"]');
            if (indicationRadio) indicationRadio.checked = true;
            if (searchInput) searchInput.value = indication;
            if (window.DrugApp.performSearch) {
                window.DrugApp.performSearch(indication, 'indication');
            }
        }, 100);
    }
}

function searchByContraindication(contraindication) {
    trackEvent('shortcut_search', {
        trigger: 'contraindication_tag',
        value: contraindication
    });
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
    trackEvent('shortcut_search', {
        trigger: 'side_effect_tag',
        value: sideEffect
    });
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
    trackEvent('shortcut_search', {
        trigger: 'mechanism_tag',
        value: mechanism
    });
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
    trackEvent('shortcut_search', {
        trigger: 'class_tag',
        value: drugClass
    });
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
    trackEvent('shortcut_search', {
        trigger: 'system_tag',
        value: system
    });
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

const analyticsQueue = [];

const resolveGtag = () => {
    if (typeof window === 'undefined') return null;
    if (typeof window.gtag === 'function') return window.gtag;
    if (window.Step1Analytics && typeof window.Step1Analytics.gtag === 'function') {
        return window.Step1Analytics.gtag;
    }
    return null;
};

const flushAnalyticsQueue = () => {
    const gtag = resolveGtag();
    if (!gtag || !analyticsQueue.length) return;
    while (analyticsQueue.length) {
        const { eventName, params } = analyticsQueue.shift();
        gtag('event', eventName, params);
    }
};

const trackEvent = (eventName, params = {}) => {
    const payload = { ...params };
    const gtag = resolveGtag();
    if (gtag) {
        gtag('event', eventName, payload);
        return;
    }
    analyticsQueue.push({ eventName, params: payload });
};

window.addEventListener('load', flushAnalyticsQueue);

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('column-container');
    const headerControls = document.getElementById('header-controls');
    const comparisonList = [];
    let lastState = { func: showSystems, args: [] };
    let searchableData = [];
    const columnWidthCache = {};
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const infoModalClose = document.getElementById('info-modal-close');
    const layoutToggle = document.getElementById('layout-toggle');
    const infoModalStart = document.getElementById('info-modal-start');
    const WELCOME_STORAGE_KEY = 'step1DrugReview_seenWelcome';
    let hasSeenWelcome = false;
    try {
        hasSeenWelcome = localStorage.getItem(WELCOME_STORAGE_KEY) === 'true';
    } catch (error) {
        hasSeenWelcome = false;
    }
    let layoutMode = 'reference';
    let selectedSystem = null;
    let selectedTherapeuticClass = null;
    let selectedPharmaClass = null;

    const debounce = (fn, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(null, args), delay);
        };
    };

    let lastSearchLog = { fingerprint: '', timestamp: 0 };
    let latestSearchOutcome = null;

    const logSearchInteraction = debounce((searchType, value) => {
        const trimmed = value.trim();
        if (!trimmed) return;
        const normalized = trimmed.toLowerCase();
        const fingerprint = `${searchType}:${normalized}`;
        const now = Date.now();
        if (fingerprint === lastSearchLog.fingerprint && now - lastSearchLog.timestamp < 5000) {
            return;
        }
        lastSearchLog = { fingerprint, timestamp: now };
        const payload = {
            search_type: searchType,
            query_length: Math.min(trimmed.length, 100)
        };
        if (
            latestSearchOutcome &&
            latestSearchOutcome.type === searchType &&
            latestSearchOutcome.query === normalized
        ) {
            payload.results_count = latestSearchOutcome.resultsCount;
        }
        trackEvent('search_input', payload);
    }, 700);

    const openInfoModal = () => {
        if (!infoModal) return;
        infoModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        trackEvent('open_help_modal');
        try {
            localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
        } catch (error) {
            // Ignore storage errors (private mode, etc.)
        }
    };

    const closeInfoModal = () => {
        if (!infoModal) return;
        infoModal.classList.add('hidden');
        document.body.style.overflow = '';
        trackEvent('close_help_modal');
    };

    if (infoButton) {
        infoButton.addEventListener('click', openInfoModal);
    }

    if (infoModalClose) {
        infoModalClose.addEventListener('click', closeInfoModal);
    }

    if (infoModalStart) {
        infoModalStart.addEventListener('click', () => {
            trackEvent('start_from_help_modal');
            closeInfoModal();
        });
    }

    if (infoModal) {
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                closeInfoModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal && !infoModal.classList.contains('hidden')) {
            closeInfoModal();
        }
    });

    if (!hasSeenWelcome) {
        setTimeout(() => {
            openInfoModal();
        }, 120);
    }

    function applyFadeIn(element, direction = 'down') {
        if (!element) return;
        const baseClass = direction === 'left' ? 'fade-enter-left' : 'fade-enter';
        element.classList.remove('fade-enter', 'fade-enter-left', 'fade-enter-active');
        element.classList.add(baseClass);
        requestAnimationFrame(() => {
            element.classList.add('fade-enter-active');
        });
    }

    if (layoutToggle) {
        const updateLayoutToggleText = () => {
            layoutToggle.textContent = layoutMode === 'learning' ? 'Reference View' : 'Learning View';
        };

        updateLayoutToggleText();

        layoutToggle.addEventListener('click', () => {
            layoutMode = layoutMode === 'learning' ? 'reference' : 'learning';
            updateLayoutToggleText();
            trackEvent('toggle_layout', { layout: layoutMode });
            if (layoutMode === 'reference') {
                ensureCascadeSelections();
            }
            showSystems();
        });
    }

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
        const isSearchView = mainContainer.id === 'search-view-container';
        const isCompareView = mainContainer.classList.contains('compare-view-container');

        if (isSearchView) {
            const backButton = document.createElement('button');
            backButton.className = 'header-btn';
            backButton.innerText = 'Back to Navigation';
            backButton.onclick = backToNavigation;
            headerControls.appendChild(backButton);
        } else {
            const searchButton = document.createElement('button');
            searchButton.className = 'header-btn';
            searchButton.innerText = 'Search';
            searchButton.onclick = renderSearchView;
            headerControls.appendChild(searchButton);
        }

        if (comparisonList.length > 0) {
            const compareButton = document.createElement('button');
            compareButton.className = 'compare-view-button';
            if (isCompareView) {
                compareButton.innerText = 'Return to Navigation';
                compareButton.onclick = backToNavigation;
            } else {
                compareButton.innerText = `Compare Items (${comparisonList.length})`;
                compareButton.onclick = renderCompareView;
            }
            headerControls.appendChild(compareButton);
        }
    }

    function ensureCascadeSelections() {
        if (!drugData.length) {
            selectedSystem = null;
            selectedTherapeuticClass = null;
            selectedPharmaClass = null;
            return;
        }

        if (!selectedSystem || !drugData.includes(selectedSystem)) {
            selectedSystem = drugData[0];
        }

        const therapeuticOptions = selectedSystem.therapeutic_classes || [];
        if (!selectedTherapeuticClass || !therapeuticOptions.includes(selectedTherapeuticClass)) {
            selectedTherapeuticClass = therapeuticOptions[0] || null;
        }

        const pharmaOptions = selectedTherapeuticClass ? (selectedTherapeuticClass.pharma_classes || []) : [];
        if (!selectedPharmaClass || !pharmaOptions.includes(selectedPharmaClass)) {
            selectedPharmaClass = pharmaOptions[0] || null;
        }
    }

    function buildDrugCard({
        drug,
        pharmaClass,
        system,
        therapeuticClass,
        includeCompare = false,
        compared = false,
        onCompareClick,
        onCardClick,
        showSystemTags = false,
        showMechanism = false
    }) {
        const card = document.createElement('div');
        card.className = 'drug-card';

        const headerRow = document.createElement('div');
        headerRow.className = 'drug-card-header-row';

        const nameEl = document.createElement('div');
        nameEl.className = 'drug-name';
        nameEl.textContent = drug.name;
        headerRow.appendChild(nameEl);

        const actionsEl = document.createElement('div');
        actionsEl.className = 'drug-card-actions';

        let compareButton = null;
        if (includeCompare) {
            compareButton = document.createElement('button');
            compareButton.className = 'compare-btn';
            compareButton.innerText = compared ? 'Added' : 'Compare';
            if (compared) {
                compareButton.classList.add('added');
            }
            compareButton.addEventListener('click', (event) => {
                event.stopPropagation();
                if (typeof onCompareClick === 'function') {
                    onCompareClick(compareButton);
                }
            });
            actionsEl.appendChild(compareButton);
        }

        const expandButton = document.createElement('button');
        expandButton.type = 'button';
        expandButton.className = 'expand-btn';
        expandButton.innerHTML = '🔍';
        expandButton.setAttribute('aria-expanded', 'false');
        expandButton.title = 'Expand details';
        expandButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const willExpand = !card.classList.contains('expanded');

            if (willExpand && card.parentElement) {
                card.parentElement.querySelectorAll('.drug-card.expanded').forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('expanded');
                        const otherButton = otherCard.querySelector('.expand-btn');
                        if (otherButton) {
                            otherButton.setAttribute('aria-expanded', 'false');
                            otherButton.innerHTML = '🔍';
                        }
                    }
                });
            }

            const expanded = card.classList.toggle('expanded');
            expandButton.setAttribute('aria-expanded', expanded);
            expandButton.innerHTML = expanded ? '✕' : '🔍';

            if (expanded) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        actionsEl.appendChild(expandButton);

        headerRow.appendChild(actionsEl);
        card.appendChild(headerRow);

        if (showSystemTags && system) {
            const section = document.createElement('div');
            section.className = 'drug-section';
            const title = document.createElement('div');
            title.className = 'drug-section-title';
            title.textContent = 'System & Class';
            section.appendChild(title);

            const container = document.createElement('div');
            container.className = 'tag-container';

            const systemTag = document.createElement('span');
            systemTag.className = 'tag system';
            systemTag.textContent = system.system;
            systemTag.title = `Filter by ${system.system}`;
            systemTag.addEventListener('click', (event) => {
                event.stopPropagation();
                if (window.filterByTag) {
                    window.filterByTag('system', system.system);
                }
            });
            container.appendChild(systemTag);

            if (pharmaClass) {
                const classTag = document.createElement('span');
                classTag.className = 'tag class';
                classTag.textContent = pharmaClass.name;
                classTag.title = `Filter by ${pharmaClass.name}`;
                classTag.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (window.filterByTag) {
                        window.filterByTag('class', pharmaClass.name);
                    }
                });
                container.appendChild(classTag);
            }

            section.appendChild(container);
            card.appendChild(section);
        }

        if (showMechanism && pharmaClass && pharmaClass.mechanism) {
            const mechanismSection = document.createElement('div');
            mechanismSection.className = 'drug-section';
            const mechanismTitle = document.createElement('div');
            mechanismTitle.className = 'drug-section-title';
            mechanismTitle.textContent = 'Mechanism';
            mechanismSection.appendChild(mechanismTitle);

            const mechanismContainer = document.createElement('div');
            mechanismContainer.className = 'tag-container';
            const mechanismTag = document.createElement('span');
            mechanismTag.className = 'tag mechanism';
            const mechanismText = pharmaClass.mechanism;
            mechanismTag.textContent = mechanismText.length > 60 ? `${mechanismText.substring(0, 60)}…` : mechanismText;
            mechanismTag.title = mechanismText;
            mechanismTag.addEventListener('click', (event) => {
                event.stopPropagation();
                if (window.filterByTag) {
                    window.filterByTag('mechanism', mechanismText);
                }
            });
            mechanismContainer.appendChild(mechanismTag);
            mechanismSection.appendChild(mechanismContainer);
            card.appendChild(mechanismSection);
        }

        const featuresSection = document.createElement('div');
        featuresSection.className = 'drug-section';
        const featuresTitle = document.createElement('div');
        featuresTitle.className = 'drug-section-title';
        featuresTitle.textContent = 'Key Features';
        featuresSection.appendChild(featuresTitle);
        const featuresBody = document.createElement('p');
        featuresBody.className = 'drug-card-feature';
        featuresBody.textContent = drug.features || '—';
        featuresSection.appendChild(featuresBody);
        card.appendChild(featuresSection);

        const indicationsSection = document.createElement('div');
        indicationsSection.className = 'drug-section';
        const indicationsTitle = document.createElement('div');
        indicationsTitle.className = 'drug-section-title';
        indicationsTitle.textContent = 'Indications';
        indicationsSection.appendChild(indicationsTitle);
        const indicationsContainer = document.createElement('div');
        indicationsContainer.className = 'tag-container';
        if (Array.isArray(drug.indications) && drug.indications.length) {
            drug.indications.forEach(indication => {
                const tag = document.createElement('span');
                tag.classList.add('tag', 'indication', 'clickable-tag');
                tag.dataset.indication = indication;
                tag.title = `Click to find all drugs for ${indication}`;
                tag.textContent = indication;
                indicationsContainer.appendChild(tag);
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag indication';
            placeholder.textContent = '—';
            indicationsContainer.appendChild(placeholder);
        }
        indicationsSection.appendChild(indicationsContainer);
        card.appendChild(indicationsSection);

        const contraindicationsSection = document.createElement('div');
        contraindicationsSection.className = 'drug-section';
        const contraindicationsTitle = document.createElement('div');
        contraindicationsTitle.className = 'drug-section-title';
        contraindicationsTitle.textContent = 'Contraindications';
        contraindicationsSection.appendChild(contraindicationsTitle);
        const contraindicationsContainer = document.createElement('div');
        contraindicationsContainer.className = 'tag-container';
        if (Array.isArray(drug.contraindications) && drug.contraindications.length) {
            drug.contraindications.forEach(contraindication => {
                const tag = document.createElement('span');
                tag.classList.add('tag', 'contraindication', 'clickable-tag');
                tag.dataset.contraindication = contraindication;
                tag.title = `Click to find all drugs to avoid with ${contraindication}`;
                tag.textContent = contraindication;
                contraindicationsContainer.appendChild(tag);
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag contraindication';
            placeholder.textContent = '—';
            contraindicationsContainer.appendChild(placeholder);
        }
        contraindicationsSection.appendChild(contraindicationsContainer);
        card.appendChild(contraindicationsSection);

        const extraContainer = document.createElement('div');
        extraContainer.className = 'drug-card-extra';

        if (drug.choice) {
            const choiceSection = document.createElement('div');
            choiceSection.className = 'drug-section';
            const choiceTitle = document.createElement('div');
            choiceTitle.className = 'drug-section-title';
            choiceTitle.textContent = 'Clinical Choice';
            choiceSection.appendChild(choiceTitle);
            const choiceBody = document.createElement('p');
            choiceBody.textContent = drug.choice;
            choiceSection.appendChild(choiceBody);
            extraContainer.appendChild(choiceSection);
        }

        if (!showMechanism && pharmaClass && pharmaClass.mechanism) {
            const mechanismSection = document.createElement('div');
            mechanismSection.className = 'drug-section';
            const mechanismTitle = document.createElement('div');
            mechanismTitle.className = 'drug-section-title';
            mechanismTitle.textContent = 'Mechanism of Action';
            mechanismSection.appendChild(mechanismTitle);
            const mechanismContainer = document.createElement('div');
            mechanismContainer.className = 'tag-container';
            const mechanismTag = document.createElement('span');
            mechanismTag.classList.add('tag', 'mechanism');
            mechanismTag.textContent = pharmaClass.mechanism;
            mechanismTag.title = pharmaClass.mechanism;
            mechanismTag.addEventListener('click', (event) => {
                event.stopPropagation();
                if (window.filterByTag) {
                    window.filterByTag('mechanism', pharmaClass.mechanism);
                }
            });
            mechanismContainer.appendChild(mechanismTag);
            mechanismSection.appendChild(mechanismContainer);
            extraContainer.appendChild(mechanismSection);
        }

        const sideEffectsSection = document.createElement('div');
        sideEffectsSection.className = 'drug-section';
        const sideTitle = document.createElement('div');
        sideTitle.className = 'drug-section-title';
        sideTitle.textContent = 'Adverse Effects';
        sideEffectsSection.appendChild(sideTitle);
        const sideContainer = document.createElement('div');
        sideContainer.className = 'tag-container';
        const sideEffects = Array.isArray(pharmaClass && pharmaClass.side_effects) ? pharmaClass.side_effects : [];
        if (sideEffects.length) {
            sideEffects.forEach(effect => {
                const tag = document.createElement('span');
                tag.classList.add('tag', 'side-effect');
                tag.textContent = effect;
                sideContainer.appendChild(tag);
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag side-effect';
            placeholder.textContent = 'No adverse effects listed';
            sideContainer.appendChild(placeholder);
        }
        sideEffectsSection.appendChild(sideContainer);
        extraContainer.appendChild(sideEffectsSection);

        const interactionSection = document.createElement('div');
        interactionSection.className = 'drug-section';
        const interactionTitle = document.createElement('div');
        interactionTitle.className = 'drug-section-title';
        interactionTitle.textContent = 'Drug Interactions';
        interactionSection.appendChild(interactionTitle);
        const interactionContainer = document.createElement('div');
        interactionContainer.className = 'tag-container';
        if (pharmaClass && pharmaClass.interactions) {
            interactionContainer.innerHTML = parseInteractionTags(pharmaClass.interactions);
            interactionContainer.querySelectorAll('.tag.interaction').forEach(tag => {
                const value = tag.textContent.trim();
                tag.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (window.filterByTag) {
                        window.filterByTag('interaction', value);
                    }
                });
            });
        } else {
            const placeholder = document.createElement('span');
            placeholder.className = 'tag interaction';
            placeholder.textContent = 'No major interactions listed';
            interactionContainer.appendChild(placeholder);
        }
        interactionSection.appendChild(interactionContainer);
        if (pharmaClass && pharmaClass.interaction_explanation) {
            const explanation = document.createElement('div');
            explanation.className = 'interaction-explanation';
            explanation.innerHTML = `<p><strong>Clinical Significance:</strong> ${pharmaClass.interaction_explanation}</p>`;
            interactionSection.appendChild(explanation);
        }
        extraContainer.appendChild(interactionSection);

        card.appendChild(extraContainer);

        if (typeof onCardClick === 'function') {
            card.addEventListener('click', (event) => {
                if (event.target.closest('.compare-btn') || event.target.closest('.expand-btn') || event.target.closest('.clickable-tag')) {
                    return;
                }
                onCardClick(event);
            });
        }

        return card;
    }

    function renderCascadeDrugCards(pharmaClass, detailContainer) {
        if (!pharmaClass) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'cascade-message';
            emptyMessage.textContent = 'Select a pharmacological class to see its drugs.';
            detailContainer.appendChild(emptyMessage);
            return;
        }

        const header = document.createElement('div');
        header.className = 'cascade-detail-header';
        const title = document.createElement('h2');
        title.textContent = pharmaClass.name;
        header.appendChild(title);
        if (pharmaClass.mechanism) {
            const mechanism = document.createElement('p');
            mechanism.textContent = pharmaClass.mechanism;
            header.appendChild(mechanism);
        }
        detailContainer.appendChild(header);

        if (!pharmaClass.drugs || pharmaClass.drugs.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'cascade-message';
            emptyMessage.textContent = 'No individual drugs listed for this class yet.';
            detailContainer.appendChild(emptyMessage);
            return;
        }

        const cardGrid = document.createElement('div');
        cardGrid.className = 'drug-grid cascade-grid';

        pharmaClass.drugs.forEach(drug => {
            const card = buildDrugCard({
                drug,
                pharmaClass,
                system: selectedSystem,
                therapeuticClass: selectedTherapeuticClass,
                includeCompare: true,
                compared: comparisonList.some(item => item.drug.name === drug.name),
                onCompareClick: (button) => handleCompareClick(drug, pharmaClass, button)
            });
            cardGrid.appendChild(card);
            applyFadeIn(card);
        });

        detailContainer.appendChild(cardGrid);
        applyFadeIn(cardGrid);
    }

    function renderCascadeView() {
        ensureCascadeSelections();

        const navContainer = document.createElement('div');
        navContainer.className = 'cascade-nav';

        if (!selectedSystem) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'cascade-message';
            emptyMessage.textContent = 'No data available. Add systems to begin exploring.';
            navContainer.appendChild(emptyMessage);
        } else {
            drugData.forEach(system => {
                const systemItem = document.createElement('div');
                systemItem.className = 'cascade-item system-item';
                if (system === selectedSystem) {
                    systemItem.classList.add('selected');
                }

                const systemButton = document.createElement('button');
                systemButton.className = 'cascade-label system-label';
                systemButton.textContent = system.system;
                systemButton.onclick = () => {
                    selectedSystem = system;
                    selectedTherapeuticClass = null;
                    selectedPharmaClass = null;
                    trackEvent('cascade_select', { level: 'system', value: system.system });
                    showSystems();
                };
                systemItem.appendChild(systemButton);

                if (system === selectedSystem && system.therapeutic_classes && system.therapeutic_classes.length) {
                    const therapeuticList = document.createElement('div');
                    therapeuticList.className = 'cascade-children therapeutic-list';

                    system.therapeutic_classes.forEach(therapeuticClass => {
                        const therapeuticItem = document.createElement('div');
                        therapeuticItem.className = 'cascade-item therapeutic-item';
                        if (therapeuticClass === selectedTherapeuticClass) {
                            therapeuticItem.classList.add('selected');
                        }

                        const therapeuticButton = document.createElement('button');
                        therapeuticButton.className = 'cascade-label therapeutic-label';
                        therapeuticButton.textContent = therapeuticClass.name;
                        therapeuticButton.onclick = () => {
                            selectedSystem = system;
                            selectedTherapeuticClass = therapeuticClass;
                            selectedPharmaClass = null;
                            trackEvent('cascade_select', {
                                level: 'therapeutic_class',
                                value: therapeuticClass.name,
                                system: system.system
                            });
                            showSystems();
                        };
                        therapeuticItem.appendChild(therapeuticButton);

                        if (therapeuticClass === selectedTherapeuticClass && therapeuticClass.pharma_classes && therapeuticClass.pharma_classes.length) {
                            const pharmaList = document.createElement('div');
                            pharmaList.className = 'cascade-children pharma-list';

                            therapeuticClass.pharma_classes.forEach(pharmaClass => {
                                const pharmaItem = document.createElement('div');
                                pharmaItem.className = 'cascade-item pharma-item';
                                if (pharmaClass === selectedPharmaClass) {
                                    pharmaItem.classList.add('selected');
                                }

                                const pharmaButton = document.createElement('button');
                                pharmaButton.className = 'cascade-label pharma-label';
                                pharmaButton.textContent = pharmaClass.name;
                                pharmaButton.onclick = () => {
                                    selectedSystem = system;
                                    selectedTherapeuticClass = therapeuticClass;
                                    selectedPharmaClass = pharmaClass;
                                    trackEvent('cascade_select', {
                                        level: 'pharma_class',
                                        value: pharmaClass.name,
                                        system: system.system,
                                        therapeutic_class: therapeuticClass.name
                                    });
                                    showSystems();
                                };
                                pharmaItem.appendChild(pharmaButton);

                                pharmaList.appendChild(pharmaItem);
                            });

                            therapeuticItem.appendChild(pharmaList);
                        }

                        therapeuticList.appendChild(therapeuticItem);
                    });

                    systemItem.appendChild(therapeuticList);
                }

                navContainer.appendChild(systemItem);
            });
        }

        const detailContainer = document.createElement('div');
        detailContainer.className = 'cascade-detail';

        if (!selectedTherapeuticClass) {
            const message = document.createElement('div');
            message.className = 'cascade-message';
            message.textContent = 'This body system has no therapeutic classes yet.';
            detailContainer.appendChild(message);
            mainContainer.appendChild(navContainer);
            applyFadeIn(navContainer, 'left');
            mainContainer.appendChild(detailContainer);
            applyFadeIn(detailContainer);
            return;
        }

        if (!selectedTherapeuticClass.pharma_classes || selectedTherapeuticClass.pharma_classes.length === 0) {
            const message = document.createElement('div');
            message.className = 'cascade-message';
            message.textContent = 'No pharmacological classes listed for this therapeutic class yet.';
            detailContainer.appendChild(message);
            mainContainer.appendChild(navContainer);
            applyFadeIn(navContainer, 'left');
            mainContainer.appendChild(detailContainer);
            applyFadeIn(detailContainer);
            return;
        }

        renderCascadeDrugCards(selectedPharmaClass, detailContainer);

        mainContainer.appendChild(navContainer);
        applyFadeIn(navContainer, 'left');
        mainContainer.appendChild(detailContainer);
        applyFadeIn(detailContainer);
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
        const action = index > -1 ? 'remove' : 'add';
        if (action === 'remove') {
            comparisonList.splice(index, 1);
            button.innerText = 'Compare';
            button.classList.remove('added');
        } else {
            comparisonList.push({ drug, pharmaClass });
            button.innerText = 'Added';
            button.classList.add('added');
        }
        updateHeaderControls();
        trackEvent('compare_toggle', {
            action,
            drug_name: drug.name,
            class_name: pharmaClass.name,
            list_size: comparisonList.length
        });
    }

    function createColumn(title, items, onItemClick, keyFunction = item => item, tagType = 'default') {
        const column = document.createElement('div');
        column.className = 'column';
        const cacheKey = title;
        const cachedWidth = columnWidthCache[cacheKey];
        if (typeof cachedWidth === 'number') {
            column.style.width = `${cachedWidth}px`;
        }

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

        attachColumnResizer(column, cacheKey);
        return column;
    }

    function attachColumnResizer(column, cacheKey) {
        const resizer = document.createElement('div');
        resizer.className = 'column-resizer';
        column.appendChild(resizer);

        let startX = 0;
        let startWidth = 0;
        const minWidth = 240;
        const maxWidth = 620;

        const handlePointerMove = (event) => {
            const delta = event.clientX - startX;
            let newWidth = startWidth + delta;
            if (newWidth < minWidth) newWidth = minWidth;
            if (newWidth > maxWidth) newWidth = maxWidth;
            column.style.width = `${newWidth}px`;
        };

        const handlePointerUp = () => {
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
            document.removeEventListener('pointercancel', handlePointerUp);
            column.classList.remove('resizing');
            columnWidthCache[cacheKey] = Math.round(column.getBoundingClientRect().width);
        };

        resizer.addEventListener('pointerdown', (event) => {
            event.preventDefault();
            startX = event.clientX;
            startWidth = column.getBoundingClientRect().width;
            column.classList.add('resizing');
            document.addEventListener('pointermove', handlePointerMove);
            document.addEventListener('pointerup', handlePointerUp);
            document.addEventListener('pointercancel', handlePointerUp);
        });
    }

    function showSystems() {
        saveLastState(showSystems, []);
        mainContainer.innerHTML = '';

        trackEvent('view_navigation', { level: 'system', layout: layoutMode });

        if (layoutMode === 'reference') {
            ensureCascadeSelections();
            mainContainer.className = 'cascade-container';
            mainContainer.id = 'column-container';
            renderCascadeView();
            updateHeaderControls();
            return;
        }

        mainContainer.className = '';
        mainContainer.id = 'column-container';

        if (!selectedSystem) {
            selectedSystem = drugData[0] || null;
            selectedTherapeuticClass = selectedSystem && selectedSystem.therapeutic_classes ? selectedSystem.therapeutic_classes[0] || null : null;
            selectedPharmaClass = selectedTherapeuticClass && selectedTherapeuticClass.pharma_classes ? selectedTherapeuticClass.pharma_classes[0] || null : null;
        }

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, system => system.system, 'system');
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');
        updateHeaderControls();
    }

    function showTherapeuticClasses(system) {
        saveLastState(showTherapeuticClasses, [system]);
        mainContainer.innerHTML = '';
        trackEvent('view_navigation', {
            level: 'therapeutic_class',
            system: system.system
        });

        if (layoutMode === 'reference') {
            selectedSystem = system;
            selectedTherapeuticClass = null;
            selectedPharmaClass = null;
            showSystems();
            return;
        }

        selectedSystem = system;
        selectedTherapeuticClass = null;
        selectedPharmaClass = null;

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            therapeuticClass => showPharmaClasses(system, therapeuticClass), 
            therapeuticClass => therapeuticClass.name, 'subclass');
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);
        updateHeaderControls();
    }

    function showPharmaClasses(system, therapeuticClass) {
        saveLastState(showPharmaClasses, [system, therapeuticClass]);
        mainContainer.innerHTML = '';
        trackEvent('view_navigation', {
            level: 'pharma_class',
            system: system.system,
            therapeutic_class: therapeuticClass.name
        });

        if (layoutMode === 'reference') {
            selectedSystem = system;
            selectedTherapeuticClass = therapeuticClass;
            selectedPharmaClass = null;
            showSystems();
            return;
        }

        selectedSystem = system;
        selectedTherapeuticClass = therapeuticClass;
        selectedPharmaClass = null;

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pharmaClass => showDrugs(system, therapeuticClass, pharmaClass), 
            pharmaClass => pharmaClass.name, 'class');
        mainContainer.appendChild(pharmaColumn);
        applyFadeIn(pharmaColumn);
        updateHeaderControls();
    }

    function showDrugs(system, therapeuticClass, pharmaClass) {
        saveLastState(showDrugs, [system, therapeuticClass, pharmaClass]);
        mainContainer.innerHTML = '';
        trackEvent('view_navigation', {
            level: 'drug_list',
            system: system.system,
            therapeutic_class: therapeuticClass.name,
            class_name: pharmaClass.name
        });

        if (layoutMode === 'reference') {
            selectedSystem = system;
            selectedTherapeuticClass = therapeuticClass;
            selectedPharmaClass = pharmaClass;
            showSystems();
            return;
        }

        selectedSystem = system;
        selectedTherapeuticClass = therapeuticClass;
        selectedPharmaClass = pharmaClass;

        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pc => showDrugs(system, therapeuticClass, pc), 
            pc => pc.name, 'class');
        pharmaColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (therapeuticClass.pharma_classes[index] === pharmaClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(pharmaColumn);
        applyFadeIn(pharmaColumn);

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
        applyFadeIn(drugsColumn);
        updateHeaderControls();
    }

    function showDrugDetail(system, therapeuticClass, pharmaClass, drug) {
        saveLastState(showDrugDetail, [system, therapeuticClass, pharmaClass, drug]);
        mainContainer.innerHTML = '';

        trackEvent('view_drug_detail', {
            drug_name: drug.name,
            class_name: pharmaClass.name,
            therapeutic_class: therapeuticClass.name,
            system: system.system
        });
        
        const systemsColumn = createColumn('Body Systems', drugData, showTherapeuticClasses, s => s.system, 'system');
        systemsColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (drugData[index] === system) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(systemsColumn);
        applyFadeIn(systemsColumn, 'left');

        const therapeuticColumn = createColumn('Therapeutic Classes', system.therapeutic_classes, 
            tc => showPharmaClasses(system, tc), 
            tc => tc.name, 'subclass');
        therapeuticColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (system.therapeutic_classes[index] === therapeuticClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(therapeuticColumn);
        applyFadeIn(therapeuticColumn);

        const pharmaColumn = createColumn('Pharmacological Classes', therapeuticClass.pharma_classes, 
            pc => showDrugs(system, therapeuticClass, pc), 
            pc => pc.name, 'class');
        pharmaColumn.querySelectorAll('.column-item').forEach((item, index) => {
            if (therapeuticClass.pharma_classes[index] === pharmaClass) {
                item.classList.add('selected');
            }
        });
        mainContainer.appendChild(pharmaColumn);
        applyFadeIn(pharmaColumn);

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
        applyFadeIn(detailColumn);
        updateHeaderControls();
    }

    const renderSearchView = function() {
        mainContainer.innerHTML = '';
        mainContainer.className = '';
        mainContainer.id = 'search-view-container';
        updateHeaderControls();

        trackEvent('view_search', {});

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
            const opening = indicationsContainer.style.display === 'none';
            if (opening) {
                indicationsContainer.style.display = 'block';
                toggleButton.textContent = 'Hide Indication Browser';
            } else {
                indicationsContainer.style.display = 'none';
                toggleButton.textContent = 'Show Indication Browser';
            }
            trackEvent('toggle_indication_browser', {
                state: opening ? 'open' : 'closed'
            });
        });

        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.className = 'drug-grid';
        mainContainer.appendChild(resultsContainer);

        // Show all drugs initially as cards
        searchableData.forEach(result => {
            const { system, therapeuticClass, pharmaClass, drug } = result.pointers;

            const card = buildDrugCard({
                drug,
                pharmaClass,
                system,
                therapeuticClass,
                showSystemTags: true,
                showMechanism: true,
                onCardClick: () => {
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                }
            });

            resultsContainer.appendChild(card);
            applyFadeIn(card);
        });

        const searchInput = document.getElementById('drug-search-input');
        searchInput.addEventListener('input', (e) => {
            const searchType = document.querySelector('input[name="search-type"]:checked').value;
            performSearch(e.target.value, searchType);
            logSearchInteraction(searchType, e.target.value);
        });

        document.querySelectorAll('input[name="search-type"]').forEach(radio => {
            radio.addEventListener('change', () => {
                trackEvent('search_option_change', { search_type: radio.value });
                const currentSearch = searchInput.value;
                if (currentSearch) {
                    performSearch(currentSearch, radio.value);
                    logSearchInteraction(radio.value, currentSearch);
                }
            });
        });
    };
    window.DrugApp.renderSearchView = renderSearchView;

    const performContraindicationSearch = function(query) {
        const resultsContainer = document.getElementById('search-results');
        const trimmedQuery = query.trim();
        if (!trimmedQuery) {
            resultsContainer.innerHTML = '';
            return;
        }
        
        // Search for drugs that have this contraindication
        const results = searchableData.filter(item => {
            const drug = item.pointers.drug;
            return drug.contraindications && drug.contraindications.some(contraindication => 
                contraindication.toLowerCase().includes(trimmedQuery.toLowerCase())
            );
        });

        trackEvent('search_contraindication', {
            query_length: Math.min(trimmedQuery.length, 100),
            results_count: results.length
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

            const card = buildDrugCard({
                drug,
                pharmaClass,
                system,
                therapeuticClass,
                showSystemTags: true,
                showMechanism: true,
                onCardClick: () => {
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                }
            });
            card.style.borderLeft = '4px solid #e74c3c';

            const queryLower = query.toLowerCase();
            card.querySelectorAll('.tag.contraindication').forEach(tag => {
                const value = tag.dataset.contraindication || tag.textContent;
                if (value && value.toLowerCase().includes(queryLower)) {
                    tag.classList.add('tag-highlight');
                }
            });

            resultsContainer.appendChild(card);
            applyFadeIn(card);
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
            const trimmedQuery = query.trim();
            if (!trimmedQuery) {
                resultsContainer.innerHTML = '';
                latestSearchOutcome = null;
                return;
            }

            const results = searchableData.filter(item => {
                const { system, therapeuticClass, pharmaClass, drug } = item.pointers;
                const queryLower = trimmedQuery.toLowerCase();
                
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

            latestSearchOutcome = {
                type: searchType,
                query: trimmedQuery.toLowerCase(),
                resultsCount: results.length
            };

            trackEvent('search_results', {
                search_type: searchType,
                query_length: Math.min(trimmedQuery.length, 100),
                results_count: results.length
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

                const card = buildDrugCard({
                    drug,
                    pharmaClass,
                    system,
                    therapeuticClass,
                    showSystemTags: true,
                    showMechanism: true,
                    onCardClick: () => {
                        mainContainer.className = '';
                        mainContainer.id = 'column-container';
                        showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                    }
                });

                resultsContainer.appendChild(card);
                applyFadeIn(card);
            });
        };

    // Global function for tag filtering
    window.filterByTag = function(tagType, tagValue) {
        const resultsContainer = document.getElementById('search-results');
        let filteredResults = [];
        trackEvent('tag_filter', {
            tag_type: tagType,
            tag_value: tagValue ? tagValue.slice(0, 50) : ''
        });

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

            const card = buildDrugCard({
                drug,
                pharmaClass,
                system,
                therapeuticClass,
                showSystemTags: true,
                showMechanism: true,
                onCardClick: () => {
                    mainContainer.className = '';
                    mainContainer.id = 'column-container';
                    showDrugDetail(system, therapeuticClass, pharmaClass, drug);
                }
            });

            resultsContainer.appendChild(card);
            applyFadeIn(card);
        });
    };
    window.DrugApp.performSearch = performSearch;

    function renderCompareView() {
        if (comparisonList.length === 0) return;

        mainContainer.innerHTML = '';
        mainContainer.className = 'compare-view-container';

        trackEvent('view_compare', {
            items: comparisonList.map(item => item.drug.name),
            item_count: comparisonList.length
        });

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
        // Ignore clicks inside the column navigation list
        if (e.target.closest('.column-item')) {
            return;
        }

        if (e.target.classList.contains('clickable-tag') || e.target.classList.contains('tag')) {
            if (e.target.dataset.indication) {
                searchByIndication(e.target.dataset.indication);
            } else if (e.target.dataset.contraindication) {
                searchByContraindication(e.target.dataset.contraindication);
            } else if (e.target.classList.contains('side-effect')) {
                searchBySideEffect(e.target.textContent);
            } else if (e.target.classList.contains('mechanism')) {
                searchByMechanism(e.target.textContent);
            } else if (e.target.classList.contains('class') || e.target.classList.contains('subclass')) {
                searchByClass(e.target.textContent);
            } else if (e.target.classList.contains('system')) {
                searchBySystem(e.target.textContent);
            }
        }
    });

    // Initialize
    flattenDrugData();
    showSystems();

});

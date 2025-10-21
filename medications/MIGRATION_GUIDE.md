# Complete Drug Migration Guide

## Strategy

For each of the 36 duplicate drugs:

1. **Identify all occurrences** across files
2. **Choose primary location** (most detailed entry)
3. **Merge pharmacologic classes** into array
4. **Combine unique information** (indications, interactions, etc.)
5. **Delete duplicate entries**
6. **Test**

## Migration Order (by complexity)

### Group 1: Beta-2 Agonists (Simple - Same Classes)
- albuterol: `selective-β2-agonists` + `short-acting-beta-2-agonists-saba`
- salmeterol: `selective-β2-agonists` + `long-acting-beta-2-agonists-laba`
- formoterol: `selective-β2-agonists` + `long-acting-beta-2-agonists-laba`
- terbutaline: `selective-β2-agonists` + `tocolytics`

### Group 2: Anticholinergics (Simple)
- ipratropium: `muscarinic-antagonists` + `anticholinergics`
- tiotropium: `muscarinic-antagonists` + `anticholinergics`

### Group 3: Diuretics (Same Class, Different Systems)
- furosemide: `loop-diuretics` (cardiovascular + renal)
- bumetanide: `loop-diuretics` (cardiovascular + renal)
- hydrochlorothiazide-hctz: `thiazide-diuretics` (cardiovascular + renal)
- chlorthalidone: `thiazide-diuretics` (cardiovascular + renal)
- spironolactone: `potassium-sparing-diuretics` (cardiovascular + renal)
- eplerenone: `potassium-sparing-diuretics` (cardiovascular + renal)

### Group 4: Corticosteroids (Multiple Classes)
- hydrocortisone: `low-to-high-potency-steroids` + `glucocorticoids`
- prednisone: `glucocorticoids` + `systemic-corticosteroids`
- dexamethasone: `glucocorticoids` + `systemic-corticosteroids`
- fluticasone: `intranasal-corticosteroids` + `inhaled-corticosteroids`
- budesonide: `intranasal-corticosteroids` + `inhaled-corticosteroids`

### Group 5: Antiepileptics/Mood Stabilizers (Multiple Uses)
- carbamazepine: `sodium-channel-blockers` + `anticonvulsants-as-mood-stabilizers`
- lamotrigine: `sodium-channel-blockers` + `anticonvulsants-as-mood-stabilizers`
- phenytoin: `sodium-channel-blockers` (appears twice, same class)
- valproic-acid: `anticonvulsants-as-mood-stabilizers` + `gaba-enhancers`

### Group 6: Alpha Blockers (Similar Classes)
- doxazosin: `alpha-blockers` + `alpha-1-blockers`
- terazosin: `alpha-blockers` + `alpha-1-blockers`
- tamsulosin: `alpha-blockers` + `alpha-1-blockers`

### Group 7: Other Alpha/Beta Drugs
- phenylephrine: `α1-selective-agonists` + `nasal-decongestants`
- timolol: `beta-blockers` (same class, different systems)

### Group 8: Muscle Relaxants
- succinylcholine: `nicotinic-antagonists` + `neuromuscular-blocking-agents`
- tizanidine: `central-α2-agonists` + `central-acting-muscle-relaxants`

### Group 9: Antibiotics
- doxycycline: `tetracyclines` + `oral-antibiotics`
- minocycline: `tetracyclines` + `oral-antibiotics`
- trimethoprim-sulfamethoxazole: `trimethoprim` + `urinary-antiseptics`

### Group 10: Immunosuppressants
- hydroxychloroquine: `quinoline-antimalarials` + `disease-modifying-antirheumatic-drugs-dmards`
- methotrexate: `antimetabolites` + `disease-modifying-antirheumatic-drugs-dmards`
- infliximab: `biologic-agents` + `biologic-dmards`

### Group 11: Calcium Channel Blocker
- nifedipine: `calcium-channel-blockers` + `tocolytics`

## Primary Location Decisions

Choose the file with:
1. Most complete mechanism description
2. Most indications
3. Most detailed interactions
4. Primary clinical use

For same-class duplicates (just different systems):
- Keep in PRIMARY system (e.g., diuretics → cardiovascular)
- Update system if needed


# Multi-Class Drug Analysis

## Drugs Requiring Multiple Pharmacologic Classes

### Definite Multi-Class Drugs (High Priority)

#### 1. **Aspirin** (Currently appears twice with different classes)
- **Current**: Appears in both `hematology-oncology` and `pain-management`
- **Should be**: `["cyclooxygenase-inhibitors", "antiplatelet-agents"]`
- **Rationale**: Irreversibly inhibits COX-1 (NSAID action) AND prevents platelet aggregation (antiplatelet action)

#### 2. **Carvedilol**
- **Current**: `["beta-blockers"]`
- **Should be**: `["beta-blockers", "alpha-blockers"]`
- **Rationale**: Combined α1/β1/β2 blocker - this is explicitly mentioned in features

#### 3. **Labetalol**
- **Current**: `["beta-blockers"]`
- **Should be**: `["beta-blockers", "alpha-blockers"]`
- **Rationale**: α1 and β blockade - used in hypertensive emergencies

#### 4. **Amiodarone**
- **Current**: `["class-iii-potassium-channel-blockers"]`
- **Should be**: `["class-iii-potassium-channel-blockers", "class-i-sodium-channel-blockers", "class-ii-beta-blockers", "class-iv-calcium-channel-blockers"]`
- **Rationale**: Has ALL four Vaughan-Williams classes of antiarrhythmic activity - "complex pharmacology"

### Potential Multi-Class Drugs (Lower Priority)

#### 5. **Duloxetine**
- **Current**: `["snris-serotonin-norepinephrine-reuptake-inhibitors"]`
- **Consideration**: Could also be in analgesics for neuropathic pain
- **Decision**: Keep as single class (SNRI) - pain is a secondary indication, not different mechanism

#### 6. **Amitriptyline**
- **Current**: `["tricyclic-antidepressants"]`
- **Consideration**: Also used for neuropathic pain
- **Decision**: Keep as single class (TCA) - pain is a secondary indication

### Drugs with Duplicate Entries (Consolidation Needed)

Need to check if any other drugs besides aspirin appear in multiple files with same ID.

## Implementation Plan

### Phase 1: Data Structure Changes
1. Change `pharmacologicClass` → `pharmacologicClasses` (array)
2. Update all drug objects in all data files
3. Handle aspirin consolidation (merge both entries into one with both classes)

### Phase 2: Code Changes
1. Update `data-loader.js` indexing
2. Update `script-v3.js` tree rendering
3. Update drug detail rendering
4. Update deep linking

### Phase 3: Testing
1. Test aspirin appears under both COX inhibitors and antiplatelet agents
2. Test carvedilol appears under both beta and alpha blockers
3. Test clicking drug from either class shows same detail page
4. Test deep linking works for multi-class drugs


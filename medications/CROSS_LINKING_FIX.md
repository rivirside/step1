# Cross-Linking Navigation Fix ✅

## Issue
When clicking a condition link on a drug page, it opened the conditions explorer but showed the homepage instead of the specific disease detail.

## Root Cause
The conditions explorer (`conditions/script.js`) did not have URL parameter support. When links like:
```
../conditions/index.html?disease=asthma
```
were clicked, the `?disease=asthma` parameter was ignored.

## Solution
Added URL parameter handling to `conditions/script.js` to match the medications explorer pattern.

### Changes Made

**File**: `/Users/rivir/Documents/GitHub/step1/conditions/script.js`

**Added two functions** (after line 66):

1. **`checkUrlParameters()`** - Reads URL parameters and navigates to the specified disease
2. **`expandTreeToDisease(disease)`** - Expands the tree hierarchy to show and highlight the disease

**Code Added**:
```javascript
// Check URL parameters for deep linking
function checkUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const diseaseId = params.get('disease');

    if (diseaseId) {
        console.log(`Deep linking to disease: ${diseaseId}`);
        const disease = dataLoader.getDisease(diseaseId);

        if (disease) {
            // Select and display the disease
            selectEntity(disease, 'disease');

            // Expand the tree to show this disease
            expandTreeToDisease(disease);
        } else {
            console.warn(`Disease not found: ${diseaseId}`);
        }
    }
}

// Expand tree to show a specific disease
function expandTreeToDisease(disease) {
    // Find and expand the system
    const systemNode = document.querySelector(`[data-system-id="${disease.system}"]`);
    if (systemNode && !systemNode.classList.contains('expanded')) {
        systemNode.querySelector('.node-header').click();
    }

    // Wait for tree to expand, then find category
    setTimeout(() => {
        // Find the first category that contains this disease
        const categoryId = disease.categories[0];
        if (categoryId) {
            const categoryNode = document.querySelector(`[data-category-id="${categoryId}"]`);
            if (categoryNode && !categoryNode.classList.contains('expanded')) {
                categoryNode.querySelector('.node-header').click();
            }

            // Finally, highlight the disease
            setTimeout(() => {
                const diseaseNode = document.querySelector(`[data-disease-id="${disease.id}"]`);
                if (diseaseNode) {
                    diseaseNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    diseaseNode.classList.add('highlighted');
                }
            }, 150);
        }
    }, 150);
}
```

**Also modified** the `init()` function to call `checkUrlParameters()` after the tree is rendered (lines 54-58):
```javascript
// Check for URL parameters AFTER tree is rendered (deep linking from medications explorer)
// Use setTimeout to ensure tree DOM is fully built
setTimeout(() => {
    checkUrlParameters();
}, 100);
```

## How It Works Now

### From Medications → Conditions

1. User views a drug page (e.g., Albuterol)
2. Drug page shows "Related Conditions" section with links
3. User clicks a condition link (e.g., "Asthma")
4. Opens conditions explorer in new tab with URL: `conditions/index.html?disease=asthma`
5. Conditions explorer:
   - Parses the `?disease=asthma` parameter
   - Finds the "Asthma" disease
   - Expands the tree: System → Category → Disease
   - Displays disease detail in right panel
   - Highlights and scrolls to the disease in the tree

### Bidirectional Navigation

**Medications → Conditions**:
```
Drug Page: Albuterol
→ Click "Asthma" in Related Conditions
→ Opens: conditions/index.html?disease=asthma
→ Shows: Asthma disease detail
```

**Conditions → Medications**:
```
Disease Page: Asthma
→ Click "Albuterol" in Related Medications
→ Opens: medications/index-v2.html?drug=albuterol  
→ Shows: Albuterol drug detail
```

## Testing

1. **Open**: `http://localhost:8765/medications/index-v2.html`
2. **Navigate** to any drug (e.g., Albuterol, Aspirin, Propranolol)
3. **Scroll** to "🏥 Related Conditions" section
4. **Click** any condition link
5. **Verify**: Conditions explorer opens and shows that specific disease detail

### Example Test Cases

**Test 1: Albuterol → Asthma**
- View Albuterol drug page
- Click "Asthma" in Related Conditions
- Should see Asthma disease detail in conditions explorer

**Test 2: Aspirin → MI**
- View Aspirin drug page
- Click "Myocardial Infarction" in Related Conditions
- Should see MI disease detail in conditions explorer

**Test 3: Propranolol → Hypertension**
- View Propranolol drug page
- Click "Hypertension" in Related Conditions
- Should see Hypertension disease detail in conditions explorer

## Status

✅ **FIXED** - Cross-linking now works bidirectionally:
- ✅ Medications → Conditions (with URL parameters)
- ✅ Conditions → Medications (already working)
- ✅ Tree auto-expands to show linked entity
- ✅ Detail panel displays correct information
- ✅ Smooth scroll and highlight effect

---

**Fixed**: 2025-10-20  
**Modified**: `/Users/rivir/Documents/GitHub/step1/conditions/script.js`  
**Lines added**: ~50 lines (2 new functions + init modification)

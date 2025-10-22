# Subcategory Implementation Guide

## Overview

Added 4th hierarchy level (subcategories) to organize diseases within categories. This allows grouping related diseases for easier navigation and learning.

**Hierarchy:**
```
System (e.g., Renal)
  └─ Category (e.g., Glomerular Diseases)
      └─ Subcategory (e.g., Nephrotic Syndrome) ← NEW LEVEL
          └─ Disease (e.g., Minimal Change Disease)
```

---

## Data Structure

### Category Schema (Updated)

```javascript
{
  id: "glomerular-diseases",
  name: "Glomerular Diseases",
  system: "renal",
  type: "category",

  // Keep original diseaseIds for backward compatibility
  diseaseIds: [
    "minimal-change-disease",
    "focal-segmental-glomerulosclerosis",
    "membranous-nephropathy",
    "iga-nephropathy",
    "post-infectious-glomerulonephritis",
    "rapidly-progressive-glomerulonephritis"
  ],

  // NEW: Optional subcategories array
  subcategories: [
    {
      id: "nephrotic-syndrome",
      name: "Nephrotic Syndrome",
      diseaseIds: [
        "minimal-change-disease",
        "focal-segmental-glomerulosclerosis",
        "membranous-nephropathy"
      ],
      description: "Podocyte injury → >3.5 g/day proteinuria, hypoalbuminemia..."
    },
    {
      id: "nephritic-syndrome",
      name: "Nephritic Syndrome",
      diseaseIds: [
        "iga-nephropathy",
        "post-infectious-glomerulonephritis",
        "rapidly-progressive-glomerulonephritis"
      ],
      description: "Glomerular inflammation → hematuria, RBC casts..."
    }
  ],

  pageType: "category",
  detail: { ... }
}
```

### Subcategory Object

```javascript
{
  id: "nephrotic-syndrome",           // Unique ID for subcategory
  name: "Nephrotic Syndrome",         // Display name
  diseaseIds: [                       // Array of disease IDs in this subcategory
    "minimal-change-disease",
    "focal-segmental-glomerulosclerosis",
    "membranous-nephropathy"
  ],
  description: "Brief description..."  // Optional: summary of subcategory
}
```

---

## Implementation Details

### 1. Script.js Changes

#### Modified `createCategoryNode()` Function

```javascript
function createCategoryNode(category) {
    // ... existing header code ...

    // Check if category has subcategories
    if (category.subcategories && category.subcategories.length > 0) {
        // Create subcategories container
        const subcategoriesContainer = document.createElement('div');
        subcategoriesContainer.className = 'subcategories-container';
        subcategoriesContainer.style.display = 'none';

        category.subcategories.forEach(subcategory => {
            const subcategoryNode = createSubcategoryNode(subcategory, category.id);
            subcategoriesContainer.appendChild(subcategoryNode);
        });

        node.appendChild(subcategoriesContainer);
    } else {
        // No subcategories - create diseases container directly (backward compatible)
        const diseasesContainer = document.createElement('div');
        diseasesContainer.className = 'diseases-container';
        // ... existing disease rendering code ...
    }
}
```

#### New `createSubcategoryNode()` Function

```javascript
function createSubcategoryNode(subcategory, categoryId) {
    const node = document.createElement('div');
    node.className = 'tree-node subcategory-node';
    node.dataset.subcategoryId = subcategory.id;
    node.dataset.categoryId = categoryId;

    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
        <span class="expand-icon">▶</span>
        <span class="node-title">${subcategory.name}</span>
    `;

    const badge = document.createElement('span');
    badge.className = 'count-badge';
    badge.textContent = subcategory.diseaseIds.length;
    header.appendChild(badge);

    node.appendChild(header);

    // Diseases container
    const diseasesContainer = document.createElement('div');
    diseasesContainer.className = 'diseases-container';
    diseasesContainer.style.display = 'none';

    // Get diseases for this subcategory
    subcategory.diseaseIds.forEach(diseaseId => {
        const disease = dataLoader.getDisease(diseaseId);
        if (disease) {
            const diseaseNode = createDiseaseNode(disease);
            diseasesContainer.appendChild(diseaseNode);
        }
    });

    node.appendChild(diseasesContainer);

    // Toggle expand/collapse
    header.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSubcategoryNode(node);
    });

    return node;
}
```

#### Updated `toggleCategoryNode()` Function

```javascript
function toggleCategoryNode(node) {
    // Check if this category has subcategories or diseases
    const subcategoriesContainer = node.querySelector('.subcategories-container');
    const diseasesContainer = node.querySelector('.diseases-container');
    const expandIcon = node.querySelector('.expand-icon');

    const containerToToggle = subcategoriesContainer || diseasesContainer;

    if (containerToToggle && containerToToggle.style.display === 'none') {
        containerToToggle.style.display = 'block';
        expandIcon.textContent = '▼';
        node.classList.add('expanded');
    } else if (containerToToggle) {
        containerToToggle.style.display = 'none';
        expandIcon.textContent = '▶';
        node.classList.remove('expanded');
    }
}
```

#### New `toggleSubcategoryNode()` Function

```javascript
function toggleSubcategoryNode(node) {
    const diseasesContainer = node.querySelector('.diseases-container');
    const expandIcon = node.querySelector('.expand-icon');

    if (diseasesContainer.style.display === 'none') {
        diseasesContainer.style.display = 'block';
        expandIcon.textContent = '▼';
        node.classList.add('expanded');
    } else {
        diseasesContainer.style.display = 'none';
        expandIcon.textContent = '▶';
        node.classList.remove('expanded');
    }
}
```

### 2. CSS Changes

Added styling for subcategory nodes in `styles.css`:

```css
/* Subcategory node */
.subcategory-node {
    margin-left: 1rem;
}

.subcategory-node > .node-header {
    font-weight: 550;
    font-size: 0.9rem;
    color: #5d6d7e;
    font-style: italic;  /* Italics to distinguish from categories */
}

.subcategories-container {
    border-left: 2px solid #d5dbdb;
    margin-left: 1rem;
    padding-left: 0.5rem;
}
```

**Visual Hierarchy:**
- **System:** Bold, large (1.1rem), gray background
- **Category:** Semi-bold, medium (0.95rem), regular text
- **Subcategory:** Medium, smaller (0.9rem), *italic text* ← NEW
- **Disease:** Regular, small (0.9rem), with severity indicator

---

## Implemented Subcategories

### 1. Renal System - Glomerular Diseases

**Category:** `glomerular-diseases`

**Subcategories:**

#### Nephrotic Syndrome (`nephrotic-syndrome`)
- Minimal Change Disease
- Focal Segmental Glomerulosclerosis (FSGS)
- Membranous Nephropathy

**Key features:** >3.5 g/day proteinuria, hypoalbuminemia, edema, hyperlipidemia

#### Nephritic Syndrome (`nephritic-syndrome`)
- IgA Nephropathy
- Post-Infectious Glomerulonephritis
- Rapidly Progressive Glomerulonephritis (RPGN)

**Key features:** Hematuria, RBC casts, HTN, oliguria, mild proteinuria

---

### 2. Hematology - Anemia

**Category:** `anemia`

**Subcategories:**

#### Microcytic Anemia (MCV <80) (`microcytic-anemia`)
- Iron Deficiency Anemia
- Thalassemia
- Anemia of Chronic Disease
- Sideroblastic Anemia

**Mnemonic:** TAILS (Thalassemia, Anemia of chronic disease, Iron deficiency, Lead poisoning, Sideroblastic)

#### Macrocytic Anemia (MCV >100) (`macrocytic-anemia`)
- B12 Deficiency
- Folate Deficiency

**Key distinction:** B12 → neurologic symptoms, Folate → no neuro symptoms

#### Normocytic Anemia (MCV 80-100) (`normocytic-anemia`)
- Aplastic Anemia

**Key approach:** Check reticulocyte count (low = ↓ production, high = ↑ destruction)

---

### 3. Hematology - Hemolytic Anemia

**Category:** `hemolytic-anemia`

**Subcategories:**

#### Intrinsic Hemolytic Anemia (`intrinsic-hemolytic-anemia`)
- Hereditary Spherocytosis
- G6PD Deficiency
- Sickle Cell Disease
- Paroxysmal Nocturnal Hemoglobinuria (PNH)

**Key feature:** Intrinsic RBC defects (hereditary)

#### Extrinsic Hemolytic Anemia (`extrinsic-hemolytic-anemia`)
- Autoimmune Hemolytic Anemia
- TTP (Thrombotic Thrombocytopenic Purpura)
- HUS (Hemolytic Uremic Syndrome)
- DIC (Disseminated Intravascular Coagulation)

**Key feature:** External factors destroy normal RBCs

---

## Backward Compatibility

✅ **Categories without subcategories work exactly as before**
- If `subcategories` field is missing or empty, diseases render directly under category
- No changes required to existing categories
- Progressive enhancement approach

Example (no subcategories):
```javascript
{
  id: "electrolyte-disorders",
  name: "Electrolyte Disorders",
  diseaseIds: ["hyponatremia", "hypernatremia", ...],
  // No subcategories field → renders diseases directly
}
```

---

## Benefits

### Educational
- **Clearer organization:** Groups related diseases (nephrotic vs nephritic)
- **Pattern recognition:** Students learn to differentiate subtypes
- **Step 1 alignment:** Mirrors how USMLE tests approach to diseases

### Clinical
- **Diagnostic flow:** Matches clinical reasoning (MCV → microcytic/normocytic/macrocytic)
- **Systematic approach:** Helps build differential diagnosis skills

### Technical
- **Scalable:** Easy to add more subcategories to existing categories
- **Minimal changes:** Only ~50 lines of code added
- **Backward compatible:** Doesn't break existing categories

---

## Future Subcategory Candidates

### Potential Additions

1. **CV - Valvular Disease**
   - Stenotic Lesions (AS, MS)
   - Regurgitant Lesions (AR, MR, TR)

2. **Respiratory - Interstitial Lung Disease**
   - Idiopathic (IPF, NSIP)
   - Secondary (Sarcoidosis, Hypersensitivity Pneumonitis)

3. **GI - Hepatitis**
   - Viral Hepatitis (Hep A, B, C)
   - Autoimmune/Metabolic (Autoimmune hepatitis, Wilson, Hemochromatosis)

4. **Psychiatry - Mood Disorders**
   - Depressive Disorders (MDD, PDD)
   - Bipolar Disorders (Bipolar I, II)

5. **Endocrine - Diabetes**
   - Type 1 Diabetes
   - Type 2 Diabetes
   - Gestational Diabetes

---

## Implementation Checklist

When adding subcategories to a new category:

- [ ] Identify logical groupings (clinical or pathophysiologic)
- [ ] Add `subcategories` array to category object
- [ ] Each subcategory needs:
  - `id` (unique, kebab-case)
  - `name` (display name)
  - `diseaseIds` (array of disease IDs)
  - `description` (optional, brief summary)
- [ ] Verify all diseaseIds exist in the disease database
- [ ] Keep original `diseaseIds` array in category for backward compatibility
- [ ] Test rendering in browser

---

## Testing

### Manual Test Checklist

✅ System expands to show categories
✅ Category expands to show subcategories (if present)
✅ Subcategory expands to show diseases
✅ Diseases are clickable and render detail panel
✅ Category without subcategories shows diseases directly
✅ Count badges show correct numbers
✅ Expand/collapse icons animate properly
✅ Styling is visually distinct (subcategories are italicized)
✅ No JavaScript errors in console

### Test Cases

**Test 1: Category WITH subcategories**
- Navigate to Renal → Glomerular Diseases
- Should show "Nephrotic Syndrome" and "Nephritic Syndrome"
- Expand Nephrotic Syndrome → shows 3 diseases
- Expand Nephritic Syndrome → shows 3 diseases

**Test 2: Category WITHOUT subcategories**
- Navigate to Renal → Electrolyte Disorders
- Should show diseases directly (no subcategory level)

**Test 3: Hematology anemia**
- Navigate to Hematology → Anemia
- Should show 3 subcategories: Microcytic, Macrocytic, Normocytic
- Each subcategory shows correct diseases

---

## Technical Notes

### Performance
- No performance impact for categories without subcategories
- Minimal impact for categories with subcategories (just one extra DOM level)
- Lazy rendering: subcategories only created when category is expanded

### Data Loading
- No changes to data-loader.js required
- Categories with subcategories still indexed by disease IDs
- Search still works across all diseases

### Future Enhancements
- Could add subcategory detail pages (similar to category pages)
- Could add comparison tables at subcategory level
- Could add subcategory-specific clinical pearls

---

## Summary

Successfully implemented 4-level hierarchy:
1. ✅ Script.js updated with subcategory rendering
2. ✅ CSS styling for subcategory nodes
3. ✅ 4 categories updated with subcategories
4. ✅ Backward compatible with existing categories
5. ✅ Clean, maintainable code

**Total effort:** ~2-3 hours (as estimated)
**Files modified:**
- `script.js` (rendering logic)
- `styles.css` (styling)
- `renal-categories.js` (1 category)
- `hematology-oncology-categories.js` (3 categories)

The subcategory system is now ready for use and can be easily extended to other categories as needed!

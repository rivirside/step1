# Stone Diseases Cross-Referencing Strategy

## Problem Statement

Currently we have stone diseases in two separate systems:
- **Renal System:** Nephrolithiasis (kidney stones) - 4 types
- **GI System:** Biliary stones (gallstones, choledocholithiasis) - 4 types

These should cross-reference each other since:
1. Medical students need to differentiate between stone types
2. Some conditions increase risk for BOTH (e.g., Crohn's disease → calcium oxalate kidney stones + gallstones)
3. Similar diagnostic approach (imaging, labs) but different treatments
4. Questions often test "which type of stone?" across systems

---

## Current Stone Diseases

### Renal/Nephrolithiasis (4 diseases)
Located in: `/data/diseases/renal-diseases.js`

1. **calcium-oxalate-stones** (75-85% of kidney stones)
   - Most common
   - Radiopaque
   - Risk: hypercalciuria, hyperoxaluria, low citrate, low fluid intake
   - Associated with: IBD (fat malabsorption → oxalate absorption)

2. **uric-acid-stones** (5-10% of kidney stones)
   - **RADIOLUCENT** (invisible on X-ray, seen on CT)
   - Forms in acidic urine (pH <5.5)
   - Risk: gout, high purine diet, myeloproliferative disorders, tumor lysis
   - **CAN DISSOLVE** with alkalinization (pH 6.5-7.0)

3. **struvite-stones** (10-15% of kidney stones)
   - "Infection stones" - Proteus, Klebsiella (urease producers)
   - Staghorn calculi (fill renal pelvis)
   - Alkaline urine (pH >7.5)
   - Risk: chronic UTIs, neurogenic bladder, chronic catheterization

4. **cystine-stones** (1-2% of kidney stones, 6-8% pediatric)
   - Genetic - autosomal recessive (SLC3A1, SLC7A9 mutations)
   - Hexagonal crystals (pathognomonic)
   - Young age (10-30 years)
   - Radiolucent or faintly radiopaque
   - **CAN PARTIALLY DISSOLVE** with alkalinization (pH >7.0)

### GI/Biliary (4 diseases)
Located in: `/data/diseases/gi-diseases.js`

1. **cholelithiasis** (gallstones)
   - Cholesterol stones (80%): supersaturated bile, obesity, rapid weight loss
   - Pigment stones (20%): hemolysis, cirrhosis, TPN
   - Risk: 4 F's (Female, Forty, Fat, Fertile) + Crohn's disease, ileal resection

2. **choledocholithiasis** (common bile duct stones)
   - Stone migrates from gallbladder to CBD
   - Causes RUQ pain + jaundice + elevated bili/ALP
   - Can lead to cholangitis (medical emergency)

3. **acute-cholecystitis**
   - Gallstone impacted in cystic duct → inflammation
   - Murphy's sign, RUQ pain >6h, fever
   - Complications: gangrene, perforation, emphysematous

4. **acute-cholangitis** (ascending cholangitis)
   - Infection of bile ducts due to obstruction (usually choledocholithiasis)
   - **Charcot's triad:** fever, RUQ pain, jaundice
   - **Reynolds' pentad:** + hypotension + altered mental status
   - Medical emergency - antibiotics + urgent ERCP

---

## Cross-Referencing Strategy

### Option 1: Add "Related Conditions" Section (Simplest)

Add to each stone disease's `clinicalPearls` or create new `relatedConditions` field:

```javascript
// In calcium-oxalate-stones
clinicalPearls: [
  // ... existing pearls
  "STONE DIFFERENTIAL: Compare to other stone types: uric acid (radiolucent, acidic urine), struvite (infection, staghorn), cystine (genetic, young age). See also biliary stones: cholelithiasis (RUQ pain, not flank), choledocholithiasis (jaundice)."
]

// OR create new field
relatedConditions: {
  kidneyStones: ["uric-acid-stones", "struvite-stones", "cystine-stones"],
  biliaryStones: ["cholelithiasis", "choledocholithiasis", "acute-cholangitis"],
  note: "Crohn's disease increases risk for both calcium oxalate kidney stones (fat malabsorption) and gallstones (ileal resection → bile salt malabsorption)"
}
```

### Option 2: Create "Stone Diseases" Meta-Category (Better)

Create a new category that spans both systems:

```javascript
// In /data/categories/meta-categories.js (new file)
export default [
  {
    id: "stone-diseases",
    name: "Stone Diseases (Renal & Biliary)",
    type: "meta-category",
    systems: ["renal", "gi"],
    description: "Comprehensive comparison of kidney stones vs biliary stones",
    diseaseIds: [
      // Kidney stones
      "calcium-oxalate-stones",
      "uric-acid-stones",
      "struvite-stones",
      "cystine-stones",
      // Biliary stones
      "cholelithiasis",
      "choledocholithiasis",
      "acute-cholecystitis",
      "acute-cholangitis"
    ],
    comparisonTable: {
      headers: ["Type", "Location", "Imaging", "pH", "Treatment", "Key Features"],
      rows: [
        ["Calcium oxalate", "Kidney", "Radiopaque", "Any", "Hydration, thiazides", "Most common (80%)"],
        ["Uric acid", "Kidney", "RADIOLUCENT", "Acidic <5.5", "Alkalinization → DISSOLVES", "Gout, acidic urine"],
        ["Struvite", "Kidney", "Radiopaque", "Alkaline >7.5", "Antibiotics + surgery", "Infection, staghorn"],
        ["Cystine", "Kidney", "Faint/lucent", "Acidic <7", "Alkalinization, thiols", "Genetic, hexagonal crystals"],
        ["Cholesterol", "Gallbladder", "Lucent (10% opaque)", "N/A", "Cholecystectomy", "4 F's, obesity"],
        ["Pigment", "Gallbladder", "Radiopaque", "N/A", "Cholecystectomy", "Hemolysis, cirrhosis"],
        ["CBD stone", "Bile duct", "Variable", "N/A", "ERCP", "Jaundice, ↑ ALP"],
        ["Infected bile", "Bile duct", "N/A", "N/A", "Antibiotics + ERCP", "Charcot's triad, emergency"]
      ]
    }
  }
];
```

### Option 3: Add Cross-Links in Differential Diagnosis (Most Integrated)

Update the `differentialDiagnosis` section to include cross-system comparisons:

```javascript
// In calcium-oxalate-stones
differentialDiagnosis: [
  // Existing kidney stone differentials
  "Uric acid stones (radiolucent on X-ray, acidic urine pH <5.5, gout history, can dissolve with alkalinization)",
  "Struvite stones (staghorn calculi, chronic UTI with urease+ organism, alkaline urine pH >7.5)",
  "Cystine stones (young age 10-30, hexagonal crystals, genetic, radiolucent)",

  // Add biliary differentials
  "Cholelithiasis (RUQ pain not flank, Murphy's sign, ultrasound shows gallstones, no hematuria)",
  "Choledocholithiasis (RUQ pain + jaundice, elevated bilirubin/ALP, dilated CBD on imaging)",
  "Acute cholecystitis (RUQ pain >6h, fever, Murphy's sign, wall thickening on ultrasound)",

  // Other abdominal pain differentials
  "Appendicitis (RLQ pain, McBurney's point, fever, leukocytosis)",
  "Pyelonephritis (fever, CVA tenderness, pyuria, WBC casts)"
]
```

Then the inline linker will automatically create hover tooltips for each condition!

---

## Recommended Approach: Hybrid (Options 1 + 3)

**Do both:**
1. Update `differentialDiagnosis` to include cross-system stones (uses existing inline linker)
2. Add brief comparison in `clinicalPearls`

**Why this works best:**
- ✓ Uses existing inline linker (hover tooltips already work)
- ✓ Minimal code changes (just update text content)
- ✓ Educational (forces students to think across systems)
- ✓ No new infrastructure needed
- ✓ Questions can test "RUQ pain - kidney stone or gallstone?"

---

## Implementation Plan

### Step 1: Update Kidney Stone Differentials

Add biliary stones to each kidney stone's `differentialDiagnosis`:

```javascript
// calcium-oxalate-stones
differentialDiagnosis: [
  // Kidney stones (existing)
  "Uric acid stones (radiolucent, acidic urine, gout, can dissolve)",
  "Struvite stones (infection, staghorn, alkaline urine)",
  "Cystine stones (genetic, young, hexagonal crystals)",

  // Biliary stones (NEW)
  "Cholelithiasis (RUQ not flank, Murphy's sign, no hematuria)",
  "Acute cholecystitis (RUQ pain >6h, fever, wall thickening)",

  // Other differentials
  "Pyelonephritis (fever, pyuria, WBC casts)",
  "Appendicitis (RLQ pain, McBurney's point)"
]
```

### Step 2: Update Biliary Stone Differentials

Add kidney stones to biliary diseases:

```javascript
// cholelithiasis
differentialDiagnosis: [
  // Biliary (existing)
  "Acute cholecystitis (pain >6h, fever, Murphy's sign)",
  "Choledocholithiasis (jaundice, elevated bilirubin)",
  "Acute cholangitis (Charcot's triad: fever + RUQ pain + jaundice)",

  // Kidney stones (NEW)
  "Nephrolithiasis/kidney stones (FLANK pain to groin, hematuria, radiopaque or lucent on CT)",
  "Uric acid kidney stones (flank pain, radiolucent, acidic urine)",

  // Other
  "Acute pancreatitis (epigastric to back, elevated lipase)",
  "Peptic ulcer disease (epigastric pain, no Murphy's)"
]
```

### Step 3: Add Comparison Pearls

Add to `clinicalPearls` in each disease:

```javascript
// In ALL kidney stone diseases, add:
"STONE LOCATION: Kidney stones → FLANK pain to groin + hematuria. Gallstones → RUQ pain + Murphy's sign. Imaging: CT for kidney, ultrasound for gallbladder."

// In ALL biliary stone diseases, add:
"STONE LOCATION: Gallstones → RUQ pain (Murphy's sign), no hematuria. Kidney stones → FLANK pain to groin + hematuria. Both can cause obstruction."
```

### Step 4: Add Shared Risk Factors

Some conditions increase risk for BOTH stone types:

```javascript
// In calcium-oxalate-stones, add to riskFactors:
"Crohn's disease/ileal resection (fat malabsorption → ↑ oxalate absorption → kidney stones. Also ↑ gallstone risk from bile salt malabsorption)"

// In cholelithiasis, add to riskFactors:
"Crohn's disease/ileal resection (bile salt malabsorption → ↓ bile salt pool → supersaturated cholesterol bile. Also ↑ calcium oxalate kidney stone risk)"
```

---

## Questions to Test Cross-System Knowledge

Example integrated questions:

**Q1: Stone Type Differentiation**
```
A 55-year-old woman presents with colicky abdominal pain. Imaging shows a radiopaque stone.
Where is the stone most likely located?

A. Kidney (calcium oxalate stone)
B. Kidney (uric acid stone)
C. Gallbladder (cholesterol stone)
D. Gallbladder (pigment stone)
E. Cannot determine from information given

Answer: E (Cannot determine)
Explanation: Both calcium oxalate kidney stones AND pigment gallstones are radiopaque.
Need additional info: FLANK pain + hematuria → kidney. RUQ pain + Murphy's → gallbladder.
Note: Uric acid stones and cholesterol gallstones are RADIOLUCENT.
```

**Q2: Crohn's Disease Complications**
```
A 28-year-old man with Crohn's disease (terminal ileum involvement) develops severe colicky pain.
Which TWO complications is he at increased risk for? (Select 2)

A. Calcium oxalate kidney stones
B. Uric acid kidney stones
C. Struvite kidney stones
D. Cholesterol gallstones
E. Cystine kidney stones

Answer: A + D
Explanation:
- Crohn's → fat malabsorption → ↑ oxalate absorption → calcium oxalate stones
- Crohn's/ileal resection → bile salt malabsorption → cholesterol gallstones
```

**Q3: Radiolucent Stones**
```
A patient has a stone that is RADIOLUCENT (invisible on X-ray, seen on CT).
Which of the following is most likely?

A. Calcium oxalate kidney stone
B. Struvite kidney stone
C. Uric acid kidney stone
D. Pigment gallstone
E. Infected bile duct stone

Answer: C
Explanation:
- RADIOLUCENT kidney stones: uric acid (most common), cystine (rare)
- RADIOLUCENT gallstones: cholesterol (80% of gallstones)
- Radiopaque: calcium oxalate, struvite, pigment stones
```

---

## UI Display: Stone Comparison Widget

Add a visual comparison on the nephrolithiasis category page:

```html
<div class="stone-comparison-table">
  <h3>Kidney Stones vs Biliary Stones</h3>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Kidney Stones</th>
        <th>Biliary Stones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Location</td>
        <td>Kidney, ureter, bladder</td>
        <td>Gallbladder, bile ducts</td>
      </tr>
      <tr>
        <td>Pain Location</td>
        <td>FLANK → groin</td>
        <td>RUQ</td>
      </tr>
      <tr>
        <td>Key Sign</td>
        <td>Hematuria (70-90%)</td>
        <td>Murphy's sign</td>
      </tr>
      <tr>
        <td>First-line Imaging</td>
        <td>Non-contrast CT (gold standard)</td>
        <td>RUQ ultrasound</td>
      </tr>
      <tr>
        <td>Types</td>
        <td>
          <a href="#calcium-oxalate-stones">Calcium (80%)</a>,
          <a href="#uric-acid-stones">Uric acid (10%)</a>,
          <a href="#struvite-stones">Struvite (10%)</a>,
          <a href="#cystine-stones">Cystine (1%)</a>
        </td>
        <td>
          <a href="#cholelithiasis">Cholesterol (80%)</a>,
          Pigment (20%),
          <a href="#choledocholithiasis">CBD stones</a>
        </td>
      </tr>
      <tr>
        <td>Radiolucent Types</td>
        <td>Uric acid (common), cystine (rare)</td>
        <td>Cholesterol (80%)</td>
      </tr>
      <tr>
        <td>Dissolvable?</td>
        <td>Uric acid (YES - alkalinize urine)</td>
        <td>NO (surgery required)</td>
      </tr>
      <tr>
        <td>Infection Risk</td>
        <td>Struvite (urease+ bacteria)</td>
        <td>Cholangitis (E. coli, Klebsiella)</td>
      </tr>
      <tr>
        <td>Emergency</td>
        <td>Obstructed infected kidney</td>
        <td>Cholangitis (Charcot's triad)</td>
      </tr>
    </tbody>
  </table>

  <div class="shared-risk-factors">
    <h4>Conditions Increasing Risk for BOTH:</h4>
    <ul>
      <li><strong>Crohn's disease:</strong> Calcium oxalate kidney stones + cholesterol gallstones</li>
      <li><strong>Hemolysis:</strong> Uric acid kidney stones + pigment gallstones</li>
      <li><strong>TPN:</strong> Biliary sludge/stones + metabolic stones</li>
    </ul>
  </div>
</div>
```

---

## Files to Update

1. **`/data/diseases/renal-diseases.js`** (4 kidney stone diseases)
   - Update `differentialDiagnosis` to include biliary stones
   - Add comparison pearl to `clinicalPearls`
   - Add shared risk factors (Crohn's, hemolysis)

2. **`/data/diseases/gi-diseases.js`** (4 biliary diseases)
   - Update `differentialDiagnosis` to include kidney stones
   - Add comparison pearl to `clinicalPearls`
   - Add shared risk factors

3. **`/data/categories/renal-categories.js`** (nephrolithiasis category)
   - Add note about biliary stone differential

4. **`/data/categories/gi-categories.js`** (biliary category)
   - Add note about kidney stone differential

5. **Optional: `/script.js`** (category page renderer)
   - Add stone comparison table widget to nephrolithiasis and biliary category pages

---

## Next Steps

1. Review this strategy
2. Decide: Hybrid approach (differential + pearls) or also build comparison table widget?
3. Update renal stone diseases (4 files)
4. Update biliary stone diseases (4 files)
5. Test inline linker creates correct hover tooltips
6. Write 5-10 integrated questions testing cross-system knowledge

---

## Benefits

✓ **Educational:** Forces students to think across organ systems
✓ **Clinical:** Mirrors real diagnostic reasoning ("RUQ pain - kidney or gallbladder?")
✓ **Comprehensive:** Covers Step 1 high-yield differentials
✓ **Minimal Code:** Uses existing inline linker infrastructure
✓ **Question-Ready:** Enables integrated vignettes for question bank

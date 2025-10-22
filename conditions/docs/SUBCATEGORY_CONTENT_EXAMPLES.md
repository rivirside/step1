# Subcategory Content Examples

This document shows examples of rich educational content for subcategories using the flexible schema.

## Example 1: Jaundice - Unconjugated Hyperbilirubinemia

```javascript
{
  id: "unconjugated-hyperbilirubinemia",
  name: "Unconjugated (Indirect) Hyperbilirubinemia",
  diseaseIds: [
    // Would need to add hemolysis diseases
  ],
  description: "Indirect bilirubin ↑. Causes: hemolysis, Gilbert syndrome, Crigler-Najjar. No bile in urine (unconjugated can't be filtered).",

  subcategoryDetail: {
    diagnosticAlgorithm: `
Step 1: Fractionated bilirubin shows indirect (unconjugated) ↑

Step 2: Check for hemolysis
  - ↑ LDH, ↑ reticulocytes, ↓ haptoglobin → Hemolytic anemia
  - Normal hemolysis markers → Proceed to Step 3

Step 3: Bilirubin level
  - Mild elevation (<3-4 mg/dL) + fasting/stress triggers → Gilbert syndrome
  - Severe elevation (>20 mg/dL) + neonate → Crigler-Najjar
    `,

    keyFeatures: [
      "Unconjugated bilirubin CANNOT be filtered by kidneys → NO dark urine",
      "Indirect bilirubin is lipid-soluble → can cross blood-brain barrier → kernicterus in neonates",
      "Normal LFTs (no hepatocellular injury)",
      "Most common cause: hemolysis (check hemolysis labs first)"
    ],

    clinicalPearls: [
      "Gilbert syndrome: affects 5-10% of population, benign, mild ↑ bilirubin with fasting/illness",
      "Crigler-Najjar Type I: severe, requires phototherapy/liver transplant. Type II: less severe, responds to phenobarbital",
      "If hemolysis present: check Coombs (autoimmune), G6PD, hemoglobin electrophoresis"
    ]
  }
}
```

## Example 2: Jaundice - Hepatocellular Pattern

```javascript
{
  id: "hepatocellular-jaundice",
  name: "Hepatocellular (Conjugated) Jaundice",
  diseaseIds: [
    "viral-hepatitis-a",
    "viral-hepatitis-b",
    "viral-hepatitis-c",
    "alcoholic-hepatitis",
    "nafld"
  ],
  description: "Direct (conjugated) bilirubin ↑ + AST/ALT >> ALP (>5× ULN). Hepatocyte injury prevents bilirubin excretion.",

  subcategoryDetail: {
    diagnosticAlgorithm: `
Step 1: LFT pattern shows AST/ALT >> ALP (ratio >5)
  → Hepatocellular injury confirmed

Step 2: AST:ALT ratio
  - AST:ALT >2 → Alcoholic hepatitis (AST rarely >300)
  - AST:ALT ≈1 → Viral hepatitis (can be >1000)

Step 3: Viral serologies
  - HBsAg, anti-HBc IgM → Acute Hep B
  - Anti-HAV IgM → Acute Hep A
  - HCV RNA → Acute/chronic Hep C

Step 4: If negative → drug-induced, autoimmune (ANA, ASMA), Wilson (ceruloplasmin), hemochromatosis
    `,

    keyFeatures: [
      "AST/ALT elevation is MASSIVE (often >500, can be >1000 in viral hepatitis)",
      "ALP elevation is mild (<3× ULN)",
      "Direct bilirubin ↑ → dark urine (tea-colored)",
      "May have hepatomegaly, RUQ tenderness"
    ],

    diseaseDistinctions: `
Alcoholic hepatitis:
  - AST:ALT >2 (AST rarely >300, ALT rarely >100)
  - ↑ GGT
  - History of heavy drinking

Viral hepatitis:
  - AST/ALT >1000 possible
  - AST:ALT ≈1
  - Specific serologies differentiate

Ischemic hepatitis ("shock liver"):
  - MASSIVE transaminase elevation (>1000, can be >10,000)
  - Preceded by hypotension/shock
  - Rapid improvement with perfusion restoration
    `
  }
}
```

## Example 3: Pneumonia - Typical vs Atypical

```javascript
{
  id: "typical-pneumonia",
  name: "Typical Bacterial Pneumonia",
  diseaseIds: [
    "pneumonia-cap",
    "pneumonia-hap",
    "pneumonia-aspiration"
  ],
  description: "Sudden onset, high fever, productive cough, lobar consolidation. S. pneumoniae most common.",

  subcategoryDetail: {
    clinicalApproach: `
Typical pneumonia = LOBAR consolidation
  - Sudden onset (<24-48h)
  - High fever (>39°C), rigors
  - Productive cough (rusty sputum if S. pneumoniae)
  - Pleuritic chest pain
  - CXR: lobar consolidation, air bronchograms

Community-acquired (CAP):
  - S. pneumoniae (most common)
  - H. influenzae (COPD patients)
  - Moraxella (COPD patients)

Hospital-acquired (HAP):
  - MRSA, Pseudomonas, Gram-negatives
  - Occurs >48h after admission
  - Higher mortality

Aspiration:
  - Right lower lobe (gravity)
  - Foul-smelling sputum (anaerobes)
  - Risk: altered mental status, dysphagia
    `,

    keyFeatures: [
      "Lobar consolidation on CXR (vs interstitial in atypical)",
      "Neutrophilic infiltrate",
      "Responds to β-lactams (penicillin, cephalosporins)",
      "Positive sputum Gram stain and culture"
    ]
  }
},

{
  id: "atypical-pneumonia",
  name: "Atypical Pneumonia",
  diseaseIds: [
    "atypical-pneumonia-mycoplasma",
    "atypical-pneumonia-legionella",
    "atypical-pneumonia-chlamydia"
  ],
  description: "Gradual onset, low-grade fever, dry cough, interstitial pattern. Intracellular organisms.",

  subcategoryDetail: {
    comparisonMatrix: {
      title: "Atypical Pneumonia Organisms",
      description: "Which atypical organism?",
      content: `
MYCOPLASMA:
  - Young adults (college dorms, military)
  - Gradual onset, headache, dry cough
  - Bullous myringitis (pathognomonic)
  - Cold agglutinins (IgM vs RBCs)
  - Extrapulmonary: hemolytic anemia, erythema multiforme
  - CXR worse than exam
  - Tx: Macrolides (azithromycin), doxycycline

LEGIONELLA:
  - Water exposure (AC, hot tubs, cruise ships)
  - GI symptoms (diarrhea) + pneumonia
  - Hyponatremia common
  - Urine antigen test (best test)
  - Tx: Macrolides or fluoroquinolones

CHLAMYDIA PNEUMONIAE:
  - School-age children, young adults
  - Hoarseness, pharyngitis before pneumonia
  - Prolonged cough (weeks)
  - Tx: Macrolides, doxycycline
      `
    },

    keyFeatures: [
      "Interstitial (not lobar) infiltrates on CXR",
      "Organisms DON'T grow on standard culture (intracellular)",
      "DON'T respond to β-lactams (no cell wall or intracellular)",
      "Gradual onset over days (not sudden)"
    ]
  }
}
```

## Example 4: GI Bleeding - Upper vs Lower

```javascript
{
  id: "upper-gi-bleed",
  name: "Upper GI Bleed (UGIB)",
  diseaseIds: [
    "peptic-ulcer-disease",
    "gastritis",
    "esophageal-varices",
    "mallory-weiss-tear"
  ],
  description: "Bleeding proximal to ligament of Treitz. Hematemesis, coffee-ground emesis, melena.",

  subcategoryDetail: {
    overview: "Source: esophagus, stomach, or duodenum (proximal to ligament of Treitz)",

    diagnosticAlgorithm: `
Step 1: Presentation
  - Hematemesis (bright red blood vomit) → active UGIB
  - Coffee-ground emesis → slower UGIB (blood exposed to gastric acid)
  - Melena (black tarry stool) → UGIB (blood digested)

Step 2: Hemodynamic status
  - Unstable (SBP <90, HR >100) → 2 large-bore IVs, transfusion, urgent EGD
  - Stable → risk stratify (Glasgow-Blatchford score)

Step 3: NG tube (optional, not required)
  - Positive (bloody or coffee-ground) → confirms UGIB
  - Negative → doesn't rule out (may be duodenal source)

Step 4: EGD within 24h (urgent if unstable)
  - Identify source
  - Therapeutic: cauterization, injection, clipping, banding
    `,

    diseaseDistinctions: `
PUD (most common UGIB, 50%):
  - Epigastric pain
  - H. pylori or NSAID history
  - EGD: ulcer in stomach or duodenum

Varices (10-20%, highest mortality):
  - Cirrhosis/portal hypertension
  - Massive hematemesis
  - EGD: dilated submucosal veins
  - Tx: octreotide + endoscopic banding

Mallory-Weiss tear (5-15%):
  - Preceded by forceful vomiting
  - Hematemesis after retching
  - EGD: linear mucosal tear at GE junction
  - Usually self-limited
    `
  }
}
```

## Key Principles for Content

1. **Use what makes sense**:
   - Algorithm for diagnostic approaches
   - Comparison matrix for differentiating similar diseases
   - Clinical approach for treatment strategies
   - Disease distinctions for within-subcategory differences

2. **Keep it concise**:
   - High-yield information only
   - Step 1-focused
   - Pattern recognition emphasis

3. **Visual hierarchy**:
   - Use preformatted text for algorithms/comparisons
   - Bullet points for key features
   - Separate sections logically

4. **Educational value**:
   - How would a student approach this?
   - What mental model helps?
   - What's the high-yield distinguishing feature?

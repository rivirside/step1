# Question Bank Planning Document

## Overview

This document outlines the structure, taxonomy, UI/UX, and implementation plan for the Step 1 question bank system.

---

## Question Bank Architecture

### Two Question Bank Types

#### 1. **Page-Specific Questions** (Targeted Learning)
- Directly tied to individual disease/drug/concept pages
- Appears as "Practice Questions" button on each page
- Tests specific details from that page
- 10-20 questions per disease/drug
- **Use case:** "I just read about hyponatremia, let me test myself"

#### 2. **Integrated Question Bank** (Step 1 Style)
- General question browser (like UWorld/Amboss)
- Cross-cutting vignettes that integrate multiple concepts
- Can filter by system, category, topic tags
- Simulates real Step 1 question format
- **Use case:** "Give me 20 random cardiology questions" or "Test me on everything"

### Question Taxonomy

Every question has:
```javascript
{
  id: "q-hypo-na-001",
  type: "mcq", // mcq, multi-select, fill-blank, image-based

  // Categorization
  primaryPage: "hyponatremia", // Main disease/drug page
  relatedPages: ["siadh", "thiazide-diuretics", "osmotic-demyelination"],
  system: "renal",
  categories: ["electrolyte-disorders"],
  tags: ["diagnosis", "labs", "treatment", "complications"],

  // Difficulty & Importance
  difficulty: "medium", // easy, medium, hard
  importance: "high", // high, medium, low (Step 1 yield)

  // Question content
  stem: "65-year-old woman...",
  options: ["A. SIADH", "B. Psychogenic polydipsia", ...],
  correct: 2, // index of correct answer (0-based)

  // Educational value
  explanation: "Detailed explanation with key teaching points...",
  keyTeachingPoints: [
    "Thiazides are most common drug cause of hyponatremia",
    "UNa >20 + Uosm >100 suggests SIADH or diuretics"
  ],

  // References
  imageUrl: null, // optional image
  references: ["First Aid 2024 p.123", "UpToDate: Hyponatremia"],

  // Spaced repetition metadata (filled by user progress)
  // userStats handled separately in save state
}
```

---

## Question Types & Distribution

### Question Types

**1. Multiple Choice (MCQ) - 85%**
- Standard A/B/C/D/E format
- Clinical vignette → diagnosis, next step, treatment, complication

**2. Multi-Select - 10%**
- "Select all that apply"
- Common on real Step 1
- Example: "Which of the following are risk factors for hyponatremia? (Select 3)"

**3. Image-Based - 5%**
- Histology, imaging, graphs, EKGs
- Example: Show urine microscopy → identify casts

**4. Fill-in-Blank - Future**
- Not on real Step 1, but good for active recall
- Example: "Normal serum Na range: ___ to ___ mEq/L"

### Question Distribution Goals

**Per Disease Page (Avg 15 questions):**
- Definition/Pathophysiology: 2 questions
- Risk factors/Epidemiology: 2 questions
- Presentation/Physical Exam: 3 questions
- Diagnosis/Labs: 4 questions (most clinically relevant)
- Treatment: 3 questions
- Complications/Prognosis: 1 question

**Integrated Question Bank:**
- 50% diagnosis questions (most common on Step 1)
- 25% management/treatment
- 15% pathophysiology/mechanism
- 10% complications/prognosis

---

## UI/UX Design

### Page-Specific Questions UI

**Location:** Each disease/drug page has "Practice Questions" button in header

**Flow:**
```
[Disease Page: Hyponatremia]
┌─────────────────────────────────────┐
│ Hyponatremia                        │
│ [Practice Questions (12/15 seen)]   │ ← Button shows progress
└─────────────────────────────────────┘
                ↓ Click
┌─────────────────────────────────────┐
│ Questions: Hyponatremia             │
│                                     │
│ Progress: 12/15 seen, 83% accuracy  │
│                                     │
│ [Start Practice (5 questions)]      │
│ [Review Missed Questions (2)]       │
│ [Random Mix (10 questions)]         │
│                                     │
│ Question List (optional):           │
│ ✓ Q1: Diagnosis of hyponatremia     │
│ ✓ Q2: Urine osmolality interpret... │
│ ✗ Q3: SIADH criteria                │
│ ○ Q4: Treatment of severe...        │ ← unseen
└─────────────────────────────────────┘
```

**Question Display:**
```
┌─────────────────────────────────────────────┐
│ Question 3 of 5                             │
│ Hyponatremia · Diagnosis · Medium          │
│                                             │
│ A 65-year-old woman with hypertension      │
│ presents with confusion. She takes HCTZ.   │
│ Labs: Na 118 mEq/L, Uosm 450, UNa 40.     │
│                                             │
│ What is the most likely diagnosis?         │
│                                             │
│ ○ A. SIADH                                 │
│ ○ B. Psychogenic polydipsia                │
│ ○ C. Thiazide-induced hyponatremia         │
│ ○ D. Adrenal insufficiency                 │
│ ○ E. Cerebral salt wasting                 │
│                                             │
│ [Submit Answer]    [Mark for Review]       │
└─────────────────────────────────────────────┘

After submission:
┌─────────────────────────────────────────────┐
│ ✓ Correct! (or ✗ Incorrect)                │
│                                             │
│ The answer is C. Thiazide-induced...       │
│                                             │
│ Explanation:                                │
│ Uosm >100 indicates ADH activity...        │
│                                             │
│ Key Teaching Points:                        │
│ • Thiazides most common drug cause         │
│ • UNa >20 suggests SIADH or diuretics     │
│ • Elderly women at highest risk            │
│                                             │
│ Related Concepts:                           │
│ [SIADH] [Thiazide Diuretics] [...]        │ ← Clickable links
│                                             │
│ [Next Question]  [Back to Questions]       │
└─────────────────────────────────────────────┘
```

---

### Integrated Question Bank UI

**Location:** Dedicated question browser page (`/questions/`)

**Main Interface:**
```
┌──────────────────────────────────────────────────────────┐
│ Step 1 Question Bank                                     │
│                                                          │
│ Overall Progress: 234/1247 seen (18.8%) · 76% accuracy  │
│ ━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 18.8%     │
│                                                          │
│ ┌────────────────┐  ┌────────────────┐                 │
│ │ Create Session │  │ Browse All     │                 │
│ └────────────────┘  └────────────────┘                 │
└──────────────────────────────────────────────────────────┘

[Create Session] modal:
┌─────────────────────────────────────┐
│ Create Practice Session             │
│                                     │
│ Mode:                               │
│ ○ Tutor (see answer immediately)    │
│ ● Timed (simulate exam)             │
│ ○ Untimed                           │
│                                     │
│ Number of questions: [20] ▼         │
│                                     │
│ Filter by:                          │
│ System: [All Systems ▼]             │
│   ☑ Cardiovascular (234 questions)  │
│   ☑ Renal (187 questions)           │
│   ☑ Respiratory (156 questions)     │
│   ...                               │
│                                     │
│ Status:                             │
│ ☑ Unseen (1013 questions)           │
│ ☑ Incorrect (45 questions)          │
│ ☐ Marked (12 questions)             │
│ ☐ All                               │
│                                     │
│ Difficulty:                         │
│ ☑ Easy  ☑ Medium  ☑ Hard            │
│                                     │
│ [Start Session]  [Cancel]           │
└─────────────────────────────────────┘
```

**Browse Mode:**
```
┌──────────────────────────────────────────────────────────┐
│ Question Browser                        [Create Session] │
│                                                          │
│ Filters: [Renal ▼] [All Categories ▼] [Search...]      │
│                                                          │
│ Showing 187 questions                                    │
│                                                          │
│ ┌────────────────────────────────────────────────────┐  │
│ │ ✓ Hyponatremia diagnosis • Medium • 4 attempts     │  │
│ │   Last: 2 days ago • 75% accuracy                  │  │
│ │   "65F on HCTZ presents with confusion..."         │  │
│ └────────────────────────────────────────────────────┘  │
│                                                          │
│ ┌────────────────────────────────────────────────────┐  │
│ │ ✗ SIADH diagnostic criteria • Hard • 2 attempts    │  │
│ │   Last: 1 week ago • 0% accuracy                   │  │
│ │   "Which of the following are required for..."     │  │
│ └────────────────────────────────────────────────────┘  │
│                                                          │
│ ┌────────────────────────────────────────────────────┐  │
│ │ ○ Osmotic demyelination syndrome • Medium • Unseen │  │
│ │   "A patient's Na is corrected from 118 to..."     │  │
│ └────────────────────────────────────────────────────┘  │
│                                                          │
│ [Load More]                                             │
└──────────────────────────────────────────────────────────┘

Legend:
✓ = Answered correctly last time
✗ = Answered incorrectly last time
○ = Unseen
```

**Session Interface (Timed Mode):**
```
┌──────────────────────────────────────────────────────────┐
│ Question 5 of 20           Time: 18:23 remaining         │
│ ━━━━━━━━━━━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░░░░ 25%    │
│                                                          │
│ [Suspend/End Session]              [Mark] [Previous]     │
└──────────────────────────────────────────────────────────┘
│ Renal · Electrolytes · Hard                             │
│                                                          │
│ [Question vignette...]                                   │
│                                                          │
│ [Answer choices...]                                      │
│                                                          │
│ [Submit & Next]                                          │
└──────────────────────────────────────────────────────────┘

Progress tracker (sidebar or top):
[ 1✓][ 2✓][ 3✗][ 4✓][ 5 ][ 6 ][ 7 ]...[20 ]
  Green=correct, Red=incorrect, Blue=current, Gray=unanswered
```

**Session Summary (End of Timed Session):**
```
┌──────────────────────────────────────────────────────────┐
│ Session Complete                                         │
│                                                          │
│ Score: 15/20 (75%)                                       │
│ Time: 32:14                                              │
│                                                          │
│ By Category:                                             │
│ • Electrolytes: 5/7 (71%)                               │
│ • Glomerular diseases: 6/8 (75%)                        │
│ • AKI: 4/5 (80%)                                        │
│                                                          │
│ Missed Questions:                                        │
│ • Q3: SIADH diagnostic criteria                         │
│ • Q8: Minimal change disease treatment                  │
│ • Q12: Hyperkalemia EKG changes                         │
│ • Q17: Nephritic syndrome differential                  │
│ • Q19: RTA type 1 vs type 2                            │
│                                                          │
│ [Review All Answers]  [Review Missed Only]  [Done]      │
└──────────────────────────────────────────────────────────┘
```

---

## Question Creation Strategy

### Phase 1: Core Diseases (500 questions)

**Renal (100 questions):**
- Hyponatremia: 15 questions
- Hypernatremia: 10 questions
- Hypokalemia/Hyperkalemia: 12 questions each
- AKI: 15 questions
- CKD: 12 questions
- Glomerular diseases: 10 questions each (FSGS, Minimal change, membranous)

**Cardiovascular (120 questions):**
- Heart failure: 20 questions
- MI/ACS: 20 questions
- Arrhythmias: 15 questions each (AFib, VTach)
- Valvular disease: 15 questions
- HTN: 15 questions

**Respiratory (80 questions):**
- Asthma/COPD: 15 questions each
- Pneumonia: 15 questions
- PE: 12 questions
- Restrictive lung disease: 10 questions

**GI (100 questions):**
- IBD: 15 questions each (Crohn's, UC)
- Cirrhosis: 20 questions
- Hepatitis: 15 questions
- GI bleeding: 12 questions
- Pancreatitis: 10 questions

**Other systems:** 100 questions (distributed)

### Phase 2: Integrated/Cross-Cutting (300 questions)

- Multi-system vignettes (e.g., septic patient with AKI + ARDS)
- Drug side effects across systems
- Diagnostic reasoning (when to order what test)
- Treatment algorithms (step-by-step management)

### Phase 3: Advanced/Low-Yield (200 questions)

- Rare diseases (for completeness)
- Zebras mentioned in First Aid
- Pathology/histology focus

---

## Question Quality Standards

### High-Quality Question Checklist

**Clinical Vignette:**
- ✓ Realistic patient scenario
- ✓ Appropriate age/demographics for disease
- ✓ Key clinical details present (but not highlighted)
- ✓ Distractors plausible but distinguishable
- ✓ No "buzzwords" that give away answer

**Answer Choices:**
- ✓ Grammatically parallel structure
- ✓ Similar length (don't make correct answer obviously longer)
- ✓ Homogenous (all diagnoses, or all treatments, not mixed)
- ✓ Ordered logically (alphabetically or by mechanism)

**Explanation:**
- ✓ Explains why correct answer is correct
- ✓ Explains why each wrong answer is wrong
- ✓ Includes teaching points beyond just the question
- ✓ Links to related concepts
- ✓ Cites references (First Aid page, etc.)

**Educational Value:**
- ✓ Tests understanding, not memorization
- ✓ Requires clinical reasoning
- ✓ Reinforces high-yield concepts
- ✓ Mirrors real Step 1 question style

---

## Example Questions (Different Types)

### Example 1: Classic Diagnosis Question

```javascript
{
  id: "q-hypo-na-001",
  type: "mcq",
  primaryPage: "hyponatremia",
  relatedPages: ["thiazide-diuretics", "siadh"],
  system: "renal",
  categories: ["electrolyte-disorders"],
  tags: ["diagnosis", "labs"],
  difficulty: "medium",
  importance: "high",

  stem: "A 65-year-old woman with hypertension presents to the ED with confusion and nausea for 2 days. She takes hydrochlorothiazide daily. Vital signs are normal. Labs show:\n\nNa: 118 mEq/L\nK: 3.2 mEq/L\nUrine osmolality: 450 mOsm/kg\nUrine Na: 40 mEq/L\n\nPhysical exam shows dry mucous membranes and normal skin turgor. Which of the following is the most likely diagnosis?",

  options: [
    "SIADH",
    "Psychogenic polydipsia",
    "Thiazide-induced hyponatremia",
    "Adrenal insufficiency",
    "Cerebral salt wasting"
  ],

  correct: 2,

  explanation: "This patient has thiazide-induced hyponatremia. The key features are:\n\n1. **HCTZ use**: Thiazides are the most common drug cause of hyponatremia, especially in elderly women\n2. **Urine osmolality >100**: Indicates ADH activity (not polydipsia)\n3. **Urine Na >20**: Suggests renal Na wasting (thiazides or SIADH)\n4. **Hypokalemia**: Common with thiazides, not typical of SIADH\n5. **Dry mucous membranes**: Suggests mild volume depletion\n\n**Why other answers are wrong:**\n- **SIADH**: Would expect euvolemia, not dry mucous membranes. Hypokalemia uncommon.\n- **Psychogenic polydipsia**: Would have dilute urine (Uosm <100)\n- **Adrenal insufficiency**: Would typically have hyperkalemia, not hypokalemia\n- **Cerebral salt wasting**: Rare, typically seen in SAH/TBI patients",

  keyTeachingPoints: [
    "Thiazides are the #1 drug cause of hyponatremia (10-20% of cases)",
    "Elderly women with low BMI are highest risk for thiazide-induced hyponatremia",
    "Uosm >100 + UNa >20 = either SIADH or diuretics (check volume status and K)",
    "Thiazides cause hypokalemia; SIADH typically has normal K"
  ],

  references: ["First Aid 2024 p.587", "UpToDate: Thiazide-induced hyponatremia"]
}
```

---

### Example 2: Multi-Select Question

```javascript
{
  id: "q-hypo-na-002",
  type: "multi-select",
  primaryPage: "hyponatremia",
  relatedPages: ["siadh"],
  system: "renal",
  categories: ["electrolyte-disorders"],
  tags: ["diagnosis"],
  difficulty: "hard",
  importance: "medium",

  stem: "Which of the following are required diagnostic criteria for SIADH? (Select all that apply)",

  options: [
    "Serum Na <135 mEq/L",
    "Serum osmolality <280 mOsm/kg",
    "Urine osmolality >100 mOsm/kg",
    "Urine Na >40 mEq/L",
    "Euvolemic status",
    "Normal thyroid and adrenal function",
    "Normal renal function"
  ],

  correct: [0, 1, 2, 4, 5], // Indices of correct answers

  explanation: "SIADH diagnostic criteria require ALL of the following:\n\n**Required:**\n1. Hyponatremia (Na <135)\n2. Low serum osmolality (<280)\n3. Urine osmolality inappropriately high (>100, often >300)\n4. **Euvolemia** (no edema, no dehydration)\n5. Normal thyroid, adrenal, and renal function\n\n**Supportive but not required:**\n- Urine Na >20-40 (suggests Na excretion despite low serum Na)\n- Improvement with fluid restriction\n- BUN <10 (dilutional)\n\n**Why UNa >40 is NOT required:**\nWhile most SIADH patients have UNa >20, the exact cutoff varies. Some use >20, some >40. It's supportive but not part of strict diagnostic criteria. Patients on low-salt diets may have UNa <20 even with SIADH.",

  keyTeachingPoints: [
    "SIADH = hyponatremia + low Sosm + high Uosm + euvolemia + normal thyroid/adrenal",
    "Must rule out hypothyroidism and adrenal insufficiency before diagnosing SIADH",
    "Euvolemia is critical - if hypovolemic, it's appropriate ADH response"
  ],

  references: ["First Aid 2024 p.349"]
}
```

---

### Example 3: Image-Based Question

```javascript
{
  id: "q-aki-003",
  type: "mcq",
  primaryPage: "acute-tubular-necrosis",
  relatedPages: ["acute-kidney-injury"],
  system: "renal",
  categories: ["acute-kidney-injury"],
  tags: ["diagnosis", "microscopy"],
  difficulty: "easy",
  importance: "high",

  stem: "A 58-year-old man undergoes coronary artery bypass grafting. On postoperative day 2, his creatinine rises from 1.0 to 2.8 mg/dL. Urine microscopy is shown below:\n\n[Image shows muddy brown casts]\n\nWhich of the following is the most likely diagnosis?",

  imageUrl: "/images/questions/muddy-brown-casts.jpg",

  options: [
    "Prerenal azotemia",
    "Acute tubular necrosis",
    "Acute interstitial nephritis",
    "Post-renal obstruction",
    "Contrast-induced nephropathy"
  ],

  correct: 1,

  explanation: "This image shows **muddy brown casts**, which are pathognomonic for **acute tubular necrosis (ATN)**.\n\n**Key features:**\n- Post-surgical setting (ischemic ATN)\n- Rapid Cr rise on POD 2\n- Muddy brown casts = sloughed tubular epithelial cells\n\n**Cast types and diseases:**\n- **Muddy brown casts** → ATN\n- **RBC casts** → Glomerulonephritis\n- **WBC casts** → Pyelonephritis, AIN\n- **Hyaline casts** → Normal or prerenal\n- **Waxy/broad casts** → CKD\n\n**Why other answers wrong:**\n- Prerenal: Would have hyaline casts, FeNa <1%, responds to fluids\n- AIN: WBC casts, eosinophils, eosinophiluria\n- Post-renal: Would need obstruction (not post-CABG)\n- Contrast-induced: Also ATN, but no contrast mentioned",

  keyTeachingPoints: [
    "Muddy brown casts = ATN (pathognomonic)",
    "ATN causes: ischemia (shock, surgery) or nephrotoxins (aminoglycosides, contrast)",
    "ATN has FeNa >2%, unlike prerenal (<1%)",
    "ATN typically recovers in 1-3 weeks with supportive care"
  ],

  references: ["First Aid 2024 p.589"]
}
```

---

### Example 4: Treatment/Management Question

```javascript
{
  id: "q-hypo-na-004",
  type: "mcq",
  primaryPage: "hyponatremia",
  relatedPages: ["osmotic-demyelination-syndrome"],
  system: "renal",
  categories: ["electrolyte-disorders"],
  tags: ["treatment", "complications"],
  difficulty: "hard",
  importance: "high",

  stem: "A 42-year-old woman with schizophrenia is brought to the ED with a seizure. She is confused and unable to provide history. Labs:\n\nNa: 118 mEq/L\nGlucose: 95 mg/dL\n\nShe is given 100 mL of 3% hypertonic saline over 10 minutes. Repeat Na 30 minutes later is 122 mEq/L. Which of the following is the most appropriate next step?",

  options: [
    "Continue 3% saline at 50 mL/hour",
    "Switch to normal saline at 100 mL/hour",
    "Discontinue hypertonic saline and monitor",
    "Give desmopressin (DDAVP)",
    "Start mannitol"
  ],

  correct: 2,

  explanation: "The patient's Na increased by 4 mEq/L in 30 minutes, which is **too fast**. You must **stop hypertonic saline** to prevent osmotic demyelination syndrome (ODS).\n\n**Correction limits for hyponatremia:**\n- Acute correction goal: ↑ Na by 4-6 mEq/L to stop seizures\n- Maximum: 10-12 mEq/L in 24h, ≤18 mEq/L in 48h\n- Overcorrection → ODS (quadriparesis, locked-in syndrome)\n\n**In this case:**\n- Na went from 118 → 122 (4 mEq/L increase) ✓ Goal achieved\n- Seizure stopped (question doesn't mention ongoing seizure)\n- Already used ~40% of 24h limit in 30 minutes!\n- Must stop hypertonic saline NOW\n\n**Why other answers wrong:**\n- **Continue 3% saline**: Will cause overcorrection → ODS\n- **Normal saline**: Still raises Na, risks overcorrection\n- **DDAVP**: Used to *re-lower* Na if already overcorrected (not the case here yet)\n- **Mannitol**: No role in hyponatremia management\n\n**Monitoring:**\n- Check Na q2-4h during active correction\n- If already overcorrected (>10-12 in 24h), give DDAVP + free water to re-lower Na",

  keyTeachingPoints: [
    "Severe symptomatic hyponatremia: 3% saline bolus, goal ↑ 4-6 mEq/L acutely",
    "Correction limits: ≤10-12 mEq/L in 24h (prevent ODS)",
    "Once symptoms stop, STOP hypertonic saline and monitor closely",
    "ODS = overcorrection complication (quadriparesis, dysarthria, locked-in)",
    "If overcorrected, re-lower Na with DDAVP + free water"
  ],

  references: ["First Aid 2024 p.587", "UpToDate: Treatment of severe hyponatremia"]
}
```

---

### Example 5: Integrated/Cross-System Question

```javascript
{
  id: "q-integ-001",
  type: "mcq",
  primaryPage: null, // Not tied to single page
  relatedPages: ["heart-failure", "hyponatremia", "loop-diuretics"],
  system: "multi-system",
  categories: ["cardiovascular", "renal"],
  tags: ["treatment", "complications", "clinical-reasoning"],
  difficulty: "hard",
  importance: "high",

  stem: "A 68-year-old man with heart failure (EF 25%) is admitted with dyspnea and lower extremity edema. He is treated with IV furosemide 40 mg BID. On hospital day 3, labs show:\n\nNa: 128 mEq/L (was 136 on admission)\nK: 3.0 mEq/L\nCr: 1.8 mg/dL (baseline 1.2)\nBNP: decreased from 1200 → 400\n\nPhysical exam shows improved edema but still some crackles. Which of the following best explains the hyponatremia?",

  options: [
    "SIADH from heart failure",
    "Diuretic-induced hyponatremia",
    "Pseudohyponatremia from hyperlipidemia",
    "Dilutional hyponatremia from persistent volume overload",
    "Adrenal insufficiency from critical illness"
  ],

  correct: 3,

  explanation: "This is **dilutional hyponatremia** from persistent CHF despite diuresis.\n\n**Key reasoning:**\n1. CHF with low EF → poor cardiac output → ↑ ADH (appropriate response)\n2. Despite diuresis (improved edema, ↓ BNP), still volume overloaded (crackles)\n3. Na ↓ from 136 → 128 during diuresis = dilutional (total body Na actually decreased, but water decreased less)\n4. This is **hypervolemic hyponatremia** (CHF, cirrhosis, nephrotic syndrome)\n\n**Why other answers wrong:**\n- **Diuretic-induced**: Loop diuretics rarely cause hyponatremia (unlike thiazides). Loops cause hypernatremia if anything.\n- **SIADH**: Would be euvolemic. This patient has edema + crackles = hypervolemic.\n- **Pseudohyponatremia**: No mention of hyperlipidemia/hyperproteinemia. Also, BNP suggests real hyponatremia.\n- **Adrenal insufficiency**: Would have hyperkalemia, not hypokalemia (K 3.0 from loop diuretic).\n\n**Management:**\n- Continue diuresis (need to remove more volume)\n- Fluid restriction (<1.5-2 L/day)\n- Optimize CHF meds (ACE-I, beta-blocker, spironolactone)\n- Do NOT give hypertonic saline (will worsen volume overload)\n\n**Teaching point:** Hypervolemic hyponatremia (CHF, cirrhosis) = too much water AND Na, but water > Na. Treat underlying disease + fluid restriction, NOT saline.",

  keyTeachingPoints: [
    "CHF → low cardiac output → ↑ ADH → dilutional hyponatremia",
    "Hypervolemic hyponatremia: CHF, cirrhosis, nephrotic syndrome",
    "Loop diuretics rarely cause hyponatremia (thiazides do)",
    "Treat hypervolemic hyponatremia with fluid restriction + treat underlying disease",
    "Do NOT give saline for hypervolemic hyponatremia (worsens volume overload)"
  ],

  references: ["First Aid 2024 p.587, 318"]
}
```

---

## Implementation Roadmap

### Month 1: Foundation
- [ ] Set up question data structure and files
- [ ] Build QuizStateManager class
- [ ] Create encryption/decryption system
- [ ] Write 50 sample questions (5 diseases × 10 questions)
- [ ] Test save/export/import functionality

### Month 2: Page-Specific Questions
- [ ] Build "Practice Questions" UI for disease pages
- [ ] Create 200 questions for top 20 renal diseases
- [ ] Implement spaced repetition algorithm
- [ ] Add progress tracking to disease page headers

### Month 3: Integrated Question Bank
- [ ] Build dedicated question browser page (`/questions/`)
- [ ] Create session modes (tutor, timed, untimed)
- [ ] Build filter/search functionality
- [ ] Create 300 more questions (other systems)

### Month 4: Polish & Launch
- [ ] Write final 200 questions (total 750+)
- [ ] Implement session summary and analytics
- [ ] Deploy Cloudflare Worker for license validation
- [ ] Set up Gumroad product page
- [ ] Beta test with 10-20 med students
- [ ] Public launch

---

## Technical Notes

### File Structure
```
/questions/
  /plain/                    # Plain JSON (not shipped to users)
    /diseases/
      hyponatremia.json
      hypernatremia.json
    /drugs/
      lisinopril.json
    /integrated/
      renal-mixed.json
      cardio-mixed.json

  /encrypted/               # Shipped to users (paid content)
    /diseases/
      hyponatremia.encrypted.js
      hypernatremia.encrypted.js
    /drugs/
      lisinopril.encrypted.js
    /integrated/
      renal-mixed.encrypted.js

  /metadata.json           # Public metadata (counts, tags, categories)
```

### State Storage Structure
```javascript
{
  v: 1,  // version
  ts: 1729540000,  // last updated timestamp

  // User progress
  p: {
    "hyponatremia": {
      "q-hypo-na-001": [5, 4, 1, 1729530000],  // [seen, correct, incorrect, lastSeen]
      "q-hypo-na-002": [2, 1, 1, 1729520000]
    }
  },

  // Session history
  h: [
    {
      id: "session-001",
      date: 1729540000,
      mode: "timed",
      questions: 20,
      correct: 15,
      time: 1940,  // seconds
      systems: ["renal", "cardiovascular"]
    }
  ],

  // Settings
  s: {
    questionsPerSession: 20,
    defaultMode: "tutor",
    showExplanations: true
  },

  // License (if paid user)
  lic: {
    key: "GUMROAD-KEY-HERE",
    decryptionKey: "aes-key-here",
    validated: 1729540000
  }
}
```

---

## Open Questions / Decisions Needed

1. **Should page-specific questions be free or paid?**
   - Option A: All questions paid (maximize revenue)
   - Option B: 5 sample questions per page free, rest paid (better conversion)
   - **Recommendation:** Option B (sample questions build trust)

2. **Should we have explanations for every answer choice?**
   - Pros: More educational, UWorld-style
   - Cons: 4x more writing work
   - **Recommendation:** Explain correct + key incorrect choices only

3. **Image hosting strategy?**
   - Option A: Self-host (simple, but bandwidth costs)
   - Option B: Imgur/CDN (free, but less control)
   - **Recommendation:** Self-host initially (images are small, medical education fair use)

4. **Question difficulty calibration?**
   - Use First Aid = "easy", UWorld = "medium", NBME = "hard"?
   - Or user-rated difficulty (evolves over time)?
   - **Recommendation:** Author-assigned initially, add user ratings later

5. **Mobile app or web-only?**
   - Web-only initially (works on mobile browsers)
   - React Native wrapper later if successful
   - **Recommendation:** Mobile-responsive web first

---

## Success Metrics

### Question Quality Metrics
- Average time per question: 60-90 seconds (like real Step 1)
- User-reported difficulty matches author difficulty: >70% agreement
- Explanation helpfulness rating: >4.5/5
- Refund requests citing "poor questions": <2%

### Engagement Metrics
- Questions per user per week: 50-100 (active studiers)
- Completion rate: >80% finish started sessions
- Return rate: >60% use questions 3+ times per week
- Page-specific question usage: >40% of disease page visitors try questions

### Conversion Metrics (Free → Paid)
- Free users who try sample questions: >30%
- Sample question triers who purchase: >10%
- Overall free → paid conversion: >3%

---

## Next Steps

1. Review this plan and provide feedback
2. Create 5-10 sample questions for hyponatremia (all question types)
3. Build basic quiz UI for page-specific questions
4. Test question flow end-to-end
5. Iterate based on user testing

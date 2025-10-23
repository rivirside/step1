# Content Creation Templates

Quick reference templates for adding enhanced content to drug classes and drugs.

---

## 📋 Pharmacologic Class Template

```javascript
{
    "id": "class-id",
    "name": "Class Name",
    "therapeuticClass": "parent-therapeutic-class",
    "system": "system-name",
    "mechanism": "Brief mechanism statement (1-2 sentences)",
    "sideEffects": [
        "Common side effect 1",
        "Common side effect 2",
        "Serious side effect"
    ],
    "interactions": "Brief interaction statement",
    "interactionDetails": "",
    "drugIds": [
        "drug1",
        "drug2",
        "drug3"
    ],
    "pageType": "pharmacologic-class",
    "detail": {
        "overview": "2-3 sentences: What is this class? When used? General principles.",

        "clinicalApproach": [
            "When to use drugs in this class (first-line vs second-line)",
            "How to choose between drugs within the class",
            "Special population considerations",
            "Advantages/disadvantages vs other classes"
        ],

        "pharmacokinetics": {
            "absorption": "How drugs absorbed (oral, IV, etc). Factors affecting absorption.",
            "distribution": "Distribution characteristics, protein binding, tissue penetration.",
            "metabolism": "Metabolic pathways (CYP enzymes, etc). Active metabolites.",
            "excretion": "Primary route of elimination. Renal/hepatic considerations."
        },

        "comparison": {
            "title": "Comparison of [Class Name]",
            "description": "Brief description of what differs between drugs",
            "content": `
DRUG 1 NAME:
- Key differentiator 1: value
- Key differentiator 2: value
- Use case: when to choose

DRUG 2 NAME:
- Key differentiator 1: value
- Key differentiator 2: value
- Use case: when to choose
`
        },

        "monitoring": [
            "Labs to monitor (with frequency)",
            "Vital signs to watch",
            "Clinical symptoms to assess",
            "Frequency of monitoring"
        ],

        "contraindications": [
            "Absolute contraindication 1",
            "Absolute contraindication 2",
            "Relative contraindication / caution"
        ],

        "clinicalPearls": [
            "Mnemonic for mechanism/side effects",
            "Step 1 buzzword: 'buzzword here'",
            "Classic board vignette presentation",
            "High-yield drug interactions",
            "Common wrong answer on exams",
            "Key differentiator from similar classes",
            "Important safety consideration"
        ]
    }
}
```

---

## 💊 Individual Drug Template

```javascript
{
    "id": "drug-id",
    "name": "Drug Name",
    "pharmacologicClass": "class-id",
    "therapeuticClass": "therapeutic-class",
    "system": "system-name",

    "mechanism": "Detailed mechanism: molecular target → biochemical effect → physiologic outcome. 2-3 sentences.",

    "features": "1 sentence unique feature",

    "pharmacokinetics": {
        "onset": "Time to onset of action",
        "peak": "Time to peak effect/concentration",
        "duration": "Duration of action",
        "halfLife": "Elimination half-life",
        "metabolism": "Metabolic pathway (CYP enzymes, phase I/II). Active metabolites if any.",
        "excretion": "Primary route of elimination. Renal/hepatic percentage."
    },

    "indications": [
        "FDA-approved indication 1",
        "FDA-approved indication 2",
        "Common off-label use (if Step 1 relevant)"
    ],

    "clinicalChoice": "2-3 sentences: When to choose THIS drug over alternatives in same class. What makes it unique? Patient populations where preferred.",

    "dosing": {
        "typical": "Standard adult dosing regimen. Route, frequency, duration.",
        "renal": "Adjustment for renal impairment (if needed). CrCl cutoffs.",
        "hepatic": "Adjustment for hepatic impairment (if needed). Child-Pugh class.",
        "elderly": "Geriatric dosing considerations (if different).",
        "pediatric": "Pediatric dosing (if Step 1 relevant)."
    },

    "contraindications": [
        "Absolute contraindication 1",
        "Absolute contraindication 2",
        "Condition that worsens with this drug"
    ],

    "sideEffects": {
        "common": [
            "Most common side effect (>10%)",
            "Common side effect 2",
            "Common but tolerable effect"
        ],
        "serious": [
            "Life-threatening or serious complication",
            "Serious organ toxicity",
            "Serious adverse reaction requiring monitoring"
        ],
        "rare": [
            "Rare but board-tested side effect",
            "Rare but pathognomonic side effect"
        ]
    },

    "blackBoxWarnings": [
        "FDA black box warning 1 (if any)",
        "FDA black box warning 2 (if any)"
    ],

    "interactions": {
        "drugDrug": [
            "Drug A: mechanism of interaction and clinical significance",
            "Drug B: what happens when combined",
            "CYP enzyme interactions (inducers/inhibitors)"
        ],
        "drugDisease": [
            "Disease/condition that worsens with this drug",
            "Condition requiring dose adjustment or avoidance"
        ],
        "drugFood": [
            "Food interaction (if clinically significant)",
            "Alcohol interaction (if relevant)"
        ]
    },

    "monitoring": {
        "labs": [
            "Lab test 1 (e.g., CBC, LFTs, renal function)",
            "Lab test 2 with target values",
            "Therapeutic drug monitoring (if applicable)"
        ],
        "vitals": [
            "Vital sign to monitor (BP, HR, temp, etc)",
            "What to watch for"
        ],
        "symptoms": [
            "Clinical symptom/sign to assess",
            "Toxicity symptom to watch for"
        ],
        "frequency": "How often to monitor (e.g., baseline, weekly, monthly)"
    },

    "pregnancy": {
        "category": "FDA pregnancy category (if assigned) or modern classification",
        "considerations": "Safety in pregnancy and lactation. Risk vs benefit. Alternatives if contraindicated."
    },

    "clinicalPearls": [
        "Step 1 buzzword: 'classic presentation or side effect'",
        "Mnemonic for remembering key facts",
        "Common board vignette: 'Patient presents with X, given Y drug, what happens?'",
        "Classic wrong answer: 'Students often confuse with Drug Z'",
        "Pathognomonic side effect that identifies this drug",
        "Key difference from similar drug in class",
        "Important timing consideration (e.g., give before meals)",
        "Brand name (if commonly tested): Generic = Brand",
        "Historical fact or origin (if helps memory)",
        "Antidote or reversal agent (if applicable)"
    ],

    "pageType": "drug"
}
```

---

## ✏️ Writing Guidelines

### Overview Section
- Start with what the class IS (chemical structure, receptor target)
- Explain WHERE in therapy cascade it fits
- State PRIMARY use cases
- Mention if first-line, second-line, or rescue therapy
- Keep to 2-4 sentences

### Clinical Approach
- Use bullet points for easy scanning
- Start with clearest indication
- Address "when to use" and "when NOT to use"
- Include special populations (pregnancy, elderly, renal/hepatic)
- Mention advantages over alternatives

### Mechanism
- Use arrow notation: Receptor → Effect → Outcome
- Be specific about molecular targets
- Explain WHY the mechanism leads to therapeutic effect
- Keep under 3 sentences for clarity

### Clinical Pearls
- **Always include**:
  - At least one Step 1 buzzword
  - At least one mnemonic (if applicable)
  - Classic vignette presentation
  - Key contraindication
  - High-yield drug interaction
- Use format: "Step 1 buzzword: 'the buzzword'"
- Use format: "Mnemonic: explanation"
- Front-load most important pearls

### Side Effects Organization
- **Common**: >10% incidence, usually tolerable
- **Serious**: <10% but requires intervention, hospitalization, or is life-threatening
- **Rare**: <1% but board-tested or pathognomonic

### Dosing
- Always include route and frequency
- Specify if loading dose needed
- For renal: specify CrCl cutoffs (e.g., "CrCl <30: reduce by 50%")
- For hepatic: use Child-Pugh class if available
- If "no adjustment needed" - still state that explicitly

---

## 🎯 High-Yield Focus Areas

### For Step 1, Prioritize:

1. **Mechanism** - Most tested concept
2. **Classic Side Effects** - Buzzword recognition
3. **Contraindications** - Safety vignettes
4. **Drug Interactions** - Common question stem
5. **Black Box Warnings** - High-yield
6. **Antidotes/Reversal** - Emergency scenarios
7. **Pregnancy Category** - Ethics/safety questions

### Less Important for Step 1:
- Exact dosing regimens (general ranges OK)
- Brand names (unless iconic like Coumadin)
- Cost considerations
- Formulary preferences
- Minor drug-drug interactions

---

## 📊 Quality Checklist

Before marking a drug/class as complete:

**For Classes**:
- [ ] Overview explains what, when, why (2-4 sentences)
- [ ] Clinical approach has 4+ actionable bullets
- [ ] Pharmacokinetics covers all 4 ADME components
- [ ] Comparison table present (if >2 drugs in class)
- [ ] At least 5 clinical pearls
- [ ] At least 1 mnemonic or buzzword
- [ ] All contraindications listed

**For Drugs**:
- [ ] Mechanism uses arrow notation and is detailed
- [ ] Pharmacokinetics has onset, peak, duration, metabolism, excretion
- [ ] Clinical choice explains WHEN to use THIS drug
- [ ] Side effects organized by common/serious/rare
- [ ] Interactions organized by drug/disease/food
- [ ] At least 8 clinical pearls
- [ ] At least 2 Step 1 buzzwords
- [ ] At least 1 mnemonic
- [ ] Pregnancy category stated

---

## 🚀 Quick Start: Copy-Paste Workflow

1. **Copy template** from above
2. **Fill in basic fields** (id, name, mechanism, side effects)
3. **Add detail object** with overview and clinical approach
4. **Research and fill** pharmacokinetics, monitoring, contraindications
5. **Write clinical pearls** - most important for Step 1
6. **Add comparison table** if multiple drugs
7. **Review against checklist**
8. **Test in browser** - navigate to the class/drug page
9. **Commit** with clear message

**Time Budget**:
- Class: 15-20 minutes
- Drug: 10-15 minutes
- Experienced: Can do 5-6 drugs/hour

---

## 📚 Example References

See these files for complete examples:
- **Class**: Insulin (endocrine-system-classes.js:5-104)
- **Class**: Amylin Analogs (endocrine-system-classes.js:221-272)
- **Class**: Alpha-Glucosidase Inhibitors (endocrine-system-classes.js:273-352)
- **Drug**: Insulin Glargine (endocrine-system-drugs.js:83-179)
- **Drug**: Pramlintide (endocrine-system-drugs.js:463-551)
- **Drug**: Acarbose (endocrine-system-drugs.js:553-640)
- **Drug**: Miglitol (endocrine-system-drugs.js:642-725)

---

Ready to build! 💪

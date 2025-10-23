# Enhanced Data Schema for Medications Explorer

This document defines the enhanced data structure for drug class pages and individual drug pages to provide comprehensive Step 1 learning material.

## Enhanced Pharmacologic Class Schema

Pharmacologic classes should include a `detail` object with comprehensive learning material:

```javascript
{
    "id": "insulin",
    "name": "Insulin",
    "therapeuticClass": "diabetes-medications",
    "system": "endocrine-system",
    "pageType": "pharmacologic-class",

    // Basic class info (already exists)
    "mechanism": "Brief mechanism statement",
    "sideEffects": ["side effect 1", "side effect 2"],
    "interactions": "Brief interaction statement",

    // NEW: Comprehensive detail object
    "detail": {
        // Overview: What is this class? When is it used?
        "overview": "Comprehensive explanation of the drug class, its role in therapy, and general principles.",

        // Clinical Approach: How to think about using this class
        "clinicalApproach": [
            "When to use drugs in this class",
            "How to choose between drugs within the class",
            "First-line vs second-line considerations",
            "Special populations considerations"
        ],

        // Pharmacokinetics: Class-level PK characteristics
        "pharmacokinetics": {
            "absorption": "How drugs in this class are absorbed",
            "distribution": "Distribution characteristics",
            "metabolism": "Metabolic pathways (CYP enzymes, etc)",
            "excretion": "Excretion routes"
        },

        // Comparison: How do drugs within this class differ?
        "comparison": {
            "title": "Comparison of [Class Name]",
            "description": "Key differences between drugs in this class",
            "content": "Structured comparison data (can be table format)"
        },

        // Monitoring: What to monitor for this class
        "monitoring": [
            "Labs to check",
            "Vital signs to monitor",
            "Symptoms to watch for",
            "Frequency of monitoring"
        ],

        // Contraindications: Class-level contraindications
        "contraindications": [
            "Absolute contraindications for the class",
            "Relative contraindications"
        ],

        // Clinical Pearls: High-yield Step 1 facts
        "clinicalPearls": [
            "Mnemonics",
            "Board buzzwords",
            "High-yield associations",
            "Common Step 1 vignette presentations"
        ]
    },

    "drugIds": ["drug1", "drug2", "drug3"]
}
```

## Enhanced Individual Drug Schema

Individual drugs should have expanded, standardized information:

```javascript
{
    "id": "insulin-glargine",
    "name": "Insulin Glargine",
    "pharmacologicClass": ["insulin"],  // Can be array for multi-class drugs
    "therapeuticClass": "diabetes-medications",
    "system": "endocrine-system",
    "pageType": "drug",

    // CORE PHARMACOLOGY
    "mechanism": "Detailed mechanism of action",

    "pharmacokinetics": {
        "onset": "How quickly it acts",
        "peak": "When peak effect occurs",
        "duration": "How long it lasts",
        "halfLife": "Elimination half-life",
        "metabolism": "How it's metabolized (CYP enzymes, etc)",
        "excretion": "How it's excreted (renal, hepatic, etc)"
    },

    // CLINICAL USE
    "indications": ["Indication 1", "Indication 2"],

    "clinicalChoice": "When to choose THIS drug over alternatives",

    "dosing": {
        "typical": "Typical dosing regimen",
        "elderly": "Dose adjustments for elderly (if applicable)",
        "renal": "Dose adjustments for renal impairment (if applicable)",
        "hepatic": "Dose adjustments for hepatic impairment (if applicable)",
        "pediatric": "Pediatric dosing (if applicable)"
    },

    // SAFETY
    "contraindications": ["Contraindication 1", "Contraindication 2"],

    "sideEffects": {
        "common": ["Common side effect 1", "Common side effect 2"],
        "serious": ["Serious side effect 1", "Serious side effect 2"],
        "rare": ["Rare but important side effect"]
    },

    "blackBoxWarnings": [
        "FDA black box warnings (if any)"
    ],

    "interactions": {
        "drugDrug": [
            "Drug-drug interactions with clinical significance"
        ],
        "drugDisease": [
            "Drug-disease interactions (conditions that worsen)"
        ],
        "drugFood": [
            "Drug-food interactions (if applicable)"
        ]
    },

    // MONITORING & MANAGEMENT
    "monitoring": {
        "labs": ["Labs to monitor"],
        "vitals": ["Vital signs to monitor"],
        "symptoms": ["Symptoms to watch for"],
        "frequency": "How often to monitor"
    },

    // SPECIAL CONSIDERATIONS
    "pregnancy": {
        "category": "FDA pregnancy category (if applicable)",
        "considerations": "Pregnancy/breastfeeding considerations"
    },

    // STEP 1 HIGH-YIELD
    "clinicalPearls": [
        "Mnemonics",
        "Board buzzwords",
        "Classic vignette presentations",
        "High-yield associations",
        "Common wrong answers / distractors"
    ]
}
```

## Implementation Strategy

### Phase 1: Enhance Class Pages
1. Update 1-2 representative classes (e.g., Insulin, Beta-blockers) with full `detail` object
2. Update UI to render enhanced class detail sections
3. Test and refine the display

### Phase 2: Enhance Drug Pages
1. Update 1-2 representative drugs with expanded structure
2. Update UI to render enhanced drug detail sections
3. Test and refine the display

### Phase 3: Scale
1. Create templates and examples for content creators
2. Document the process for adding new content
3. Gradually expand content for all classes and drugs

## Backward Compatibility

- All new fields are optional - existing minimal data will still display
- UI checks for existence of `detail` object and new fields before rendering
- Graceful fallbacks to existing simple structure

## UI Display Sections

### Class Page Sections (in order):
1. Class header with badge
2. Overview (if exists)
3. Mechanism of Action
4. Clinical Approach (when to use, how to choose)
5. Pharmacokinetics (class-level)
6. Comparison Table (if exists)
7. Side Effects
8. Contraindications
9. Drug Interactions
10. Monitoring
11. Clinical Pearls (highlighted box)
12. Drugs in this Class (clickable cards)

### Drug Page Sections (in order):
1. Drug header with class badges
2. Mechanism of Action
3. Pharmacokinetics (onset, peak, duration, metabolism, excretion)
4. Clinical Use (indications, when to choose this drug, dosing)
5. Black Box Warnings (if any) - highlighted danger box
6. Contraindications
7. Side Effects (organized by severity)
8. Drug Interactions (organized by type)
9. Monitoring
10. Pregnancy Considerations
11. Clinical Pearls (highlighted box)
12. Related Conditions (existing cross-linking feature)

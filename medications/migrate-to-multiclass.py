#!/usr/bin/env python3
"""
Migrate Medications to Multi-Class System

This script converts the medication data structure from single pharmacologicClass
to multiple pharmacologicClasses (array), handling duplicate drug entries.

Strategy:
1. For drugs with duplicate IDs across files:
   - Merge into single entry with combined pharmacologicClasses array
   - Choose primary system based on first occurrence
   - Combine indications, contraindications, side effects

2. For all other drugs:
   - Convert pharmacologicClass (string) → pharmacologicClasses (array)

3. For manually identified multi-class drugs (carvedilol, labetalol, amiodarone):
   - Add additional pharmacologic classes based on mechanism
"""

import json
import re
import os
from pathlib import Path

MEDICATIONS_DIR = Path(__file__).parent
DRUGS_DIR = MEDICATIONS_DIR / "data" / "drugs"

# Load the duplicate drugs report
with open(MEDICATIONS_DIR / "DUPLICATE_DRUGS_REPORT.json") as f:
    duplicate_report = json.load(f)

# Create mapping of drug ID → consolidated pharmacologic classes
drug_class_mapping = {}

for dup in duplicate_report["duplicates"]:
    drug_id = dup["id"]
    classes = dup["pharmacologicClasses"]

    # If classes are actually the same (like timolol: both beta-blockers),
    # keep just one. Otherwise, keep all unique classes.
    unique_classes = list(set(classes))
    drug_class_mapping[drug_id] = unique_classes

print(f"📊 Loaded {len(drug_class_mapping)} duplicate drugs to consolidate")
print(f"\nMulti-class examples:")
for drug_id in list(drug_class_mapping.keys())[:5]:
    print(f"  - {drug_id}: {drug_class_mapping[drug_id]}")

# Manually add multi-class designations for drugs that SHOULD be multi-class
# but currently only appear once in the data
additional_multiclass = {
    "carvedilol": ["beta-blockers", "alpha-blockers"],
    "labetalol": ["beta-blockers", "alpha-blockers"],
    "amiodarone": [
        "class-iii-potassium-channel-blockers",
        "class-i-sodium-channel-blockers",
        "class-ii-beta-blockers",
        "class-iv-calcium-channel-blockers"
    ]
}

print(f"\n📋 Additional multi-class drugs to add:")
for drug_id, classes in additional_multiclass.items():
    print(f"  - {drug_id}: {classes}")
    drug_class_mapping[drug_id] = classes

print(f"\n✅ Total drugs with multiple classes: {len(drug_class_mapping)}")

# Now we need to process each drug file
# For this first pass, let's create a migration report
migration_plan = {
    "total_drugs_to_migrate": len(drug_class_mapping),
    "drugs": {}
}

for drug_id, classes in drug_class_mapping.items():
    migration_plan["drugs"][drug_id] = {
        "id": drug_id,
        "pharmacologicClasses": classes,
        "is_duplicate": drug_id in [d["id"] for d in duplicate_report["duplicates"]],
        "is_manual_addition": drug_id in additional_multiclass
    }

# Save migration plan
with open(MEDICATIONS_DIR / "MIGRATION_PLAN.json", "w") as f:
    json.dump(migration_plan, f, indent=2)

print(f"\n📄 Migration plan saved to MIGRATION_PLAN.json")
print(f"\n🎯 Next steps:")
print(f"  1. Review MIGRATION_PLAN.json")
print(f"  2. Run consolidation to merge duplicate entries")
print(f"  3. Update all drug objects to use pharmacologicClasses array")
print(f"  4. Update code (data-loader.js, script-v3.js) to handle arrays")

#!/usr/bin/env python3
"""
Extract medication data from monolithic script.js and restructure into modular ES6 format.
Matches the architecture pattern used in the conditions explorer.
"""

import json
import re
import os
from pathlib import Path

def extract_drug_data(script_path):
    """Extract the drugData array from script.js"""
    with open(script_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the drugData array
    match = re.search(r'const drugData = (\[[\s\S]*?\n\]);', content)
    if not match:
        raise ValueError("Could not find drugData array in script.js")

    drug_data_str = match.group(1)

    # Convert JavaScript object notation to JSON
    # This is a simplified conversion - may need manual fixes
    json_str = drug_data_str

    # Replace JavaScript single quotes with double quotes (carefully)
    # This is tricky because of apostrophes in text like "don't"
    # For now, use eval in JavaScript or manual cleanup

    return drug_data_str

def create_systems_file(systems, output_path):
    """Create systems.js file"""
    systems_data = []

    for system_name in sorted(systems.keys()):
        system_id = system_name.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '')
        therapeutic_class_ids = [
            tc_name.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '')
            for tc_name in systems[system_name]
        ]

        systems_data.append({
            'id': system_id,
            'name': system_name,
            'therapeuticClassIds': therapeutic_class_ids,
            'pageType': 'system'
        })

    # Write as ES6 module
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("// Medication systems\n")
        f.write("const systems = ")
        f.write(json.dumps(systems_data, indent=4))
        f.write(";\n\n")
        f.write("export default systems;\n")

def main():
    script_path = Path(__file__).parent / 'script.js'
    data_dir = Path(__file__).parent / 'data'

    print("Extracting medication data from script.js...")
    print(f"Script path: {script_path}")
    print(f"Data directory: {data_dir}")

    # For now, just create the directory structure
    # We'll manually extract the data in a more controlled way

    systems_dir = data_dir / 'systems'
    therapeutic_dir = data_dir / 'therapeutic-classes'
    drugs_dir = data_dir / 'drugs'

    systems_dir.mkdir(parents=True, exist_ok=True)
    therapeutic_dir.mkdir(parents=True, exist_ok=True)
    drugs_dir.mkdir(parents=True, exist_ok=True)

    print("Created directory structure")
    print("Next: Manual extraction recommended due to complex JavaScript object notation")
    print("\nSystems to extract:")
    print("1. Autonomic Nervous System")
    print("2. Cardiovascular System")
    print("3. Respiratory System")
    print("4. Gastrointestinal System")
    print("5. Nervous System / Psychiatry")
    print("6. Endocrine System")
    print("7. Renal/Genitourinary System")
    print("8. Hematology/Oncology")
    print("9. Antimicrobials")
    print("10. Pain Management")
    print("... and 6 more")

if __name__ == '__main__':
    main()

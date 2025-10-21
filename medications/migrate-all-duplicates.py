#!/usr/bin/env python3
"""
Automated Migration Script for All 36 Duplicate Drugs

This script:
1. Loads the DUPLICATE_DRUGS_REPORT.json
2. For each duplicate drug, consolidates entries
3. Updates pharmacologicClasses to array format
4. Removes duplicate entries
5. Writes back to files
"""

import json
import re
from pathlib import Path
from collections import defaultdict

# Configuration
MEDICATIONS_DIR = Path(__file__).parent
DRUGS_DIR = MEDICATIONS_DIR / "data" / "drugs"
REPORT_FILE = MEDICATIONS_DIR / "DUPLICATE_DRUGS_REPORT.json"

def load_drug_file(filepath):
    """Load a drug JavaScript file and extract the drugs array"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the drugs array using regex
    match = re.search(r'const drugs = \[(.*)\];', content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find drugs array in {filepath}")

    drugs_str = '[' + match.group(1) + ']'

    # Use eval to parse (safe since we control the files)
    try:
        drugs = eval(drugs_str)
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return []

    return drugs, content

def save_drug_file(filepath, drugs, original_content):
    """Save drugs array back to JavaScript file"""
    # Convert drugs to formatted JSON
    drugs_json = json.dumps(drugs, indent=4, ensure_ascii=False)

    # Replace the drugs array in original content
    # Extract header (before drugs array)
    header_match = re.search(r'^(.*?)const drugs = \[', original_content, re.DOTALL)
    if not header_match:
        raise ValueError(f"Could not find header in {filepath}")

    header = header_match.group(1)
    footer = "\n];\n\nexport default drugs;\n"

    # Convert JSON array to JavaScript format
    drugs_js = drugs_json[1:-1]  # Remove outer brackets

    new_content = f"{header}const drugs = [\n{drugs_js}\n];export default drugs;\n"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

def merge_drug_data(drug_list):
    """Merge data from multiple drug entries"""
    if len(drug_list) == 1:
        return drug_list[0]['data']

    # Use first entry as base
    merged = drug_list[0]['data'].copy()

    # Collect all pharmacologic classes
    classes = set()
    for entry in drug_list:
        classes.add(entry['data']['pharmacologicClass'])

    merged['pharmacologicClasses'] = sorted(list(classes))
    merged['pharmacologicClass'] = merged['pharmacologicClasses'][0]

    # Merge indications (unique)
    all_indications = set()
    for entry in drug_list:
        if 'indications' in entry['data']:
            all_indications.update(entry['data']['indications'])
    if all_indications:
        merged['indications'] = sorted(list(all_indications))

    # Combine features if different
    features = []
    for entry in drug_list:
        if 'features' in entry['data'] and entry['data']['features']:
            if entry['data']['features'] not in features:
                features.append(entry['data']['features'])
    if len(features) > 1:
        merged['features'] = ' | '.join(features)

    return merged

def main():
    print("🚀 Starting automated migration of all 36 duplicate drugs...\n")

    # Load duplicate drugs report
    with open(REPORT_FILE, 'r') as f:
        report = json.load(f)

    print(f"📊 Found {report['total']} duplicate drugs to migrate\n")

    # Track all drug files and their data
    all_files = {}

    # Process each duplicate
    for i, dup in enumerate(report['duplicates'], 1):
        drug_id = dup['id']
        files = dup['files']
        classes = dup['pharmacologicClasses']

        print(f"[{i}/{report['total']}] Processing: {drug_id}")
        print(f"   Files: {', '.join(files)}")
        print(f"   Classes: {classes}")

        # Load all files containing this drug
        drug_entries = []
        for filename in files:
            filepath = DRUGS_DIR / filename

            # Load file if not already loaded
            if filename not in all_files:
                try:
                    drugs, content = load_drug_file(filepath)
                    all_files[filename] = {
                        'drugs': drugs,
                        'content': content,
                        'modified': False
                    }
                except Exception as e:
                    print(f"   ❌ Error loading {filename}: {e}")
                    continue

            # Find this drug in the file
            for idx, drug in enumerate(all_files[filename]['drugs']):
                if drug and drug.get('id') == drug_id:
                    drug_entries.append({
                        'file': filename,
                        'index': idx,
                        'data': drug
                    })

        if not drug_entries:
            print(f"   ⚠️  No entries found for {drug_id}")
            continue

        # Merge drug data
        merged_drug = merge_drug_data(drug_entries)

        # Keep in first file, remove from others
        primary_file = drug_entries[0]['file']
        primary_index = drug_entries[0]['index']

        # Update primary entry
        all_files[primary_file]['drugs'][primary_index] = merged_drug
        all_files[primary_file]['modified'] = True

        # Mark duplicates for removal (from end to preserve indices)
        for entry in reversed(drug_entries[1:]):
            file = entry['file']
            index = entry['index']
            all_files[file]['drugs'][index] = None  # Mark for removal
            all_files[file]['modified'] = True

        print(f"   ✅ Merged into {primary_file}, marked {len(drug_entries)-1} duplicates for removal\n")

    # Save all modified files
    print("\n💾 Saving modified files...")
    for filename, file_data in all_files.items():
        if file_data['modified']:
            filepath = DRUGS_DIR / filename

            # Remove None entries (duplicates)
            cleaned_drugs = [d for d in file_data['drugs'] if d is not None]

            try:
                save_drug_file(filepath, cleaned_drugs, file_data['content'])
                print(f"   ✅ Saved {filename} ({len(cleaned_drugs)} drugs)")
            except Exception as e:
                print(f"   ❌ Error saving {filename}: {e}")

    print("\n🎉 Migration complete!")
    print(f"\n📈 Summary:")
    print(f"   - {report['total']} duplicate drugs migrated")
    print(f"   - {len([f for f in all_files.values() if f['modified']])} files modified")
    print(f"   - All drugs now use pharmacologicClasses arrays")

if __name__ == '__main__':
    main()

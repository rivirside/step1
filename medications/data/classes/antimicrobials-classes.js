// Antimicrobials - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "penicillins",
        "name": "Penicillins",
        "therapeuticClass": "cell-wall-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Bind to penicillin-binding proteins (PBPs) to inhibit peptidoglycan synthesis.",
        "sideEffects": [
            "Hypersensitivity reactions",
            "Anaphylaxis",
            "Interstitial nephritis"
        ],
        "interactions": "Probenecid increases levels, tetracyclines may interfere.",
        "interactionDetails": "",
        "drugIds": [
            "penicillin-g",
            "amoxicillin",
            "nafcillin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "cephalosporins",
        "name": "Cephalosporins",
        "therapeuticClass": "cell-wall-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Similar to penicillins; inhibit cell wall synthesis. Organized by generations.",
        "sideEffects": [
            "Hypersensitivity",
            "Disulfiram-like reaction",
            "Vitamin K deficiency"
        ],
        "interactions": "Aminoglycosides increase nephrotoxicity.",
        "interactionDetails": "",
        "drugIds": [
            "cefazolin-1st-gen",
            "ceftriaxone-3rd-gen",
            "cefepime-4th-gen"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "carbapenems",
        "name": "Carbapenems",
        "therapeuticClass": "cell-wall-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Beta-lactams resistant to most beta-lactamases, broad-spectrum activity.",
        "sideEffects": [
            "Seizures (imipenem)",
            "GI upset",
            "Rash"
        ],
        "interactions": "Valproate levels decreased, raising seizure risk.",
        "interactionDetails": "",
        "drugIds": [
            "imipenem-cilastatin",
            "meropenem"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "monobactams",
        "name": "Monobactams",
        "therapeuticClass": "cell-wall-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Monocyclic beta-lactam active against gram-negative rods.",
        "sideEffects": [
            "Rash",
            "Elevated liver enzymes"
        ],
        "interactions": "Minimal cross-reactivity with other beta-lactams.",
        "interactionDetails": "",
        "drugIds": [
            "aztreonam"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "glycopeptides",
        "name": "Glycopeptides",
        "therapeuticClass": "cell-wall-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Bind D-Ala-D-Ala termini to inhibit peptidoglycan cross-linking.",
        "sideEffects": [
            "Red man syndrome",
            "Nephrotoxicity",
            "Ototoxicity"
        ],
        "interactions": "Other nephrotoxic drugs increase toxicity.",
        "interactionDetails": "",
        "drugIds": [
            "vancomycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "lipopeptides",
        "name": "Lipopeptides",
        "therapeuticClass": "cell-wall-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Insert into gram-positive cell membranes causing depolarization and rapid cell death.",
        "sideEffects": [
            "Myopathy",
            "Eosinophilic pneumonia"
        ],
        "interactions": "Statins increase risk of myopathy.",
        "interactionDetails": "",
        "drugIds": [
            "daptomycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "cell-wall-inhibitors",
        "name": "Cell Wall Inhibitors",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "penicillins",
            "cephalosporins",
            "carbapenems",
            "monobactams",
            "glycopeptides",
            "lipopeptides"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "aminoglycosides",
        "name": "Aminoglycosides",
        "therapeuticClass": "protein-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibit 30S ribosomal subunit, causing misreading of mRNA.",
        "sideEffects": [
            "Nephrotoxicity",
            "Ototoxicity",
            "Neuromuscular blockade"
        ],
        "interactions": "Loop diuretics increase ototoxicity.",
        "interactionDetails": "",
        "drugIds": [
            "gentamicin",
            "tobramycin",
            "amikacin",
            "streptomycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "macrolides",
        "name": "Macrolides",
        "therapeuticClass": "protein-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibit 50S ribosomal subunit, block peptide elongation.",
        "sideEffects": [
            "GI upset",
            "QT prolongation",
            "Hepatotoxicity"
        ],
        "interactions": "CYP3A4 inhibition, increases levels of many drugs.",
        "interactionDetails": "",
        "drugIds": [
            "azithromycin",
            "clarithromycin",
            "erythromycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "tetracyclines",
        "name": "Tetracyclines",
        "therapeuticClass": "protein-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibit 30S ribosomal subunit, prevent tRNA binding.",
        "sideEffects": [
            "Tooth discoloration",
            "Photosensitivity",
            "Esophagitis"
        ],
        "interactions": "Divalent cations reduce absorption.",
        "interactionDetails": "",
        "drugIds": [
            "doxycycline",
            "minocycline",
            "tetracycline"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "chloramphenicol",
        "name": "Chloramphenicol",
        "therapeuticClass": "protein-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibits 50S ribosomal subunit, blocks peptidyl transferase.",
        "sideEffects": [
            "Bone marrow suppression",
            "Gray baby syndrome",
            "Aplastic anemia"
        ],
        "interactions": "Inhibits CYP enzymes.",
        "interactionDetails": "",
        "drugIds": [
            "chloramphenicol"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "lincosamides",
        "name": "Lincosamides",
        "therapeuticClass": "protein-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Bind 50S ribosomal subunit to inhibit peptide transfer.",
        "sideEffects": [
            "C. difficile colitis",
            "Diarrhea",
            "Rash"
        ],
        "interactions": "Antagonistic when combined with macrolides.",
        "interactionDetails": "",
        "drugIds": [
            "clindamycin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "oxazolidinones",
        "name": "Oxazolidinones",
        "therapeuticClass": "protein-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Prevent formation of the initiation complex on the 50S ribosomal subunit.",
        "sideEffects": [
            "Thrombocytopenia",
            "Peripheral neuropathy",
            "Serotonin syndrome"
        ],
        "interactions": "MAO inhibition potentiates serotonergic drugs.",
        "interactionDetails": "",
        "drugIds": [
            "linezolid"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "protein-synthesis-inhibitors",
        "name": "Protein Synthesis Inhibitors",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "aminoglycosides",
            "macrolides",
            "tetracyclines",
            "chloramphenicol",
            "lincosamides",
            "oxazolidinones"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "fluoroquinolones",
        "name": "Fluoroquinolones",
        "therapeuticClass": "dna-rna-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibit DNA gyrase and topoisomerase IV.",
        "sideEffects": [
            "Tendon rupture",
            "CNS effects",
            "QT prolongation"
        ],
        "interactions": "Divalent cations reduce absorption.",
        "interactionDetails": "",
        "drugIds": [
            "ciprofloxacin",
            "levofloxacin",
            "moxifloxacin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "metronidazole",
        "name": "Metronidazole",
        "therapeuticClass": "dna-rna-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "DNA damage via reduction to toxic metabolites in anaerobic conditions.",
        "sideEffects": [
            "Disulfiram-like reaction",
            "Peripheral neuropathy",
            "Metallic taste"
        ],
        "interactions": "Warfarin effects enhanced.",
        "interactionDetails": "",
        "drugIds": [
            "metronidazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "dna-rna-synthesis-inhibitors",
        "name": "DNA/RNA Synthesis Inhibitors",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "fluoroquinolones",
            "metronidazole"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "sulfonamides",
        "name": "Sulfonamides",
        "therapeuticClass": "folate-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibit dihydropteroate synthase, disrupt folate synthesis.",
        "sideEffects": [
            "Hypersensitivity",
            "Stevens-Johnson syndrome",
            "Kernicterus"
        ],
        "interactions": "Warfarin effects enhanced.",
        "interactionDetails": "",
        "drugIds": [
            "sulfamethoxazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "trimethoprim",
        "name": "Trimethoprim",
        "therapeuticClass": "folate-synthesis-inhibitors",
        "system": "antimicrobials",
        "mechanism": "Inhibits dihydrofolate reductase.",
        "sideEffects": [
            "Hyperkalemia",
            "Megaloblastic anemia",
            "Rash"
        ],
        "interactions": "ACE inhibitors increase hyperkalemia risk.",
        "interactionDetails": "",
        "drugIds": [
            "trimethoprim-sulfamethoxazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "folate-synthesis-inhibitors",
        "name": "Folate Synthesis Inhibitors",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "sulfonamides",
            "trimethoprim"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "polyenes",
        "name": "Polyenes",
        "therapeuticClass": "antifungals",
        "system": "antimicrobials",
        "mechanism": "Bind ergosterol in fungal cell membrane, create pores.",
        "sideEffects": [
            "Nephrotoxicity",
            "Infusion reactions",
            "Electrolyte abnormalities"
        ],
        "interactions": "Nephrotoxic drugs increase risk.",
        "interactionDetails": "",
        "drugIds": [
            "amphotericin-b",
            "nystatin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "azoles",
        "name": "Azoles",
        "therapeuticClass": "antifungals",
        "system": "antimicrobials",
        "mechanism": "Inhibit 14α-demethylase, disrupt ergosterol synthesis.",
        "sideEffects": [
            "Hepatotoxicity",
            "Drug interactions",
            "QT prolongation"
        ],
        "interactions": "CYP3A4 inhibition affects many drugs.",
        "interactionDetails": "",
        "drugIds": [
            "fluconazole",
            "itraconazole",
            "voriconazole"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "echinocandins",
        "name": "Echinocandins",
        "therapeuticClass": "antifungals",
        "system": "antimicrobials",
        "mechanism": "Inhibit β-glucan synthesis in fungal cell wall.",
        "sideEffects": [
            "Infusion reactions",
            "Hepatotoxicity",
            "Histamine release"
        ],
        "interactions": "Few significant interactions.",
        "interactionDetails": "",
        "drugIds": [
            "caspofungin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antifungals",
        "name": "Antifungals",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "polyenes",
            "azoles",
            "echinocandins"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "nucleoside-analogs",
        "name": "Nucleoside Analogs",
        "therapeuticClass": "antivirals",
        "system": "antimicrobials",
        "mechanism": "Mimic nucleosides, terminate DNA/RNA synthesis.",
        "sideEffects": [
            "Bone marrow suppression",
            "Nephrotoxicity",
            "CNS effects"
        ],
        "interactions": "Probenecid increases levels.",
        "interactionDetails": "",
        "drugIds": [
            "acyclovir",
            "ganciclovir",
            "ribavirin"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "neuraminidase-inhibitors",
        "name": "Neuraminidase Inhibitors",
        "therapeuticClass": "antivirals",
        "system": "antimicrobials",
        "mechanism": "Inhibit viral neuraminidase, prevent viral release.",
        "sideEffects": [
            "Nausea",
            "Vomiting",
            "Neuropsychiatric effects"
        ],
        "interactions": "Few significant interactions.",
        "interactionDetails": "",
        "drugIds": [
            "oseltamivir",
            "zanamivir"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antivirals",
        "name": "Antivirals",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "nucleoside-analogs",
            "neuraminidase-inhibitors"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "quinoline-antimalarials",
        "name": "Quinoline Antimalarials",
        "therapeuticClass": "antimalarials",
        "system": "antimicrobials",
        "mechanism": "Interfere with heme detoxification in Plasmodium parasites.",
        "sideEffects": [
            "Cinchonism",
            "Hemolysis in G6PD deficiency",
            "Retinal toxicity"
        ],
        "interactions": "QT-prolonging drugs increase arrhythmia risk.",
        "interactionDetails": "",
        "drugIds": [
            "chloroquine",
            "quinine",
            "hydroxychloroquine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "antimalarials",
        "name": "Antimalarials",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "quinoline-antimalarials"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "first-line-anti-tb-agents",
        "name": "First-Line Anti-TB Agents",
        "therapeuticClass": "anti-tuberculosis-drugs",
        "system": "antimicrobials",
        "mechanism": "Various mechanisms targeting mycobacterial metabolism and cell wall synthesis.",
        "sideEffects": [
            "Hepatotoxicity",
            "Peripheral neuropathy",
            "Optic neuritis"
        ],
        "interactions": "Rifampin is major CYP450 inducer.",
        "interactionDetails": "",
        "drugIds": [
            "rifampin",
            "isoniazid",
            "ethambutol",
            "pyrazinamide"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "anti-tuberculosis-drugs",
        "name": "Anti-Tuberculosis Drugs",
        "system": "antimicrobials",
        "pharmacologicClassIds": [
            "first-line-anti-tb-agents"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

// High Yield Drug IDs for Step 1 USMLE
// These drugs are marked as high yield for filtering in quiz/learning modes

const highYieldDrugIds = [
    // ===== TIER 1-3 DRUGS (Recently Added) =====
    // GI
    "ondansetron", "lubiprostone", "ursodeoxycholic-acid", "misoprostol", "cholestyramine",

    // Cardiovascular
    "evolocumab", "alirocumab", "icosapent-ethyl", "sacubitril-valsartan", "ivabradine",
    "ranolazine", "carvedilol", "milrinone", "dobutamine", "nesiritide", "clonidine",
    "methyldopa", "ezetimibe",

    // Endocrine
    "semaglutide", "dulaglutide", "dapagliflozin", "saxagliptin", "propranolol",
    "raloxifene", "teriparatide", "bromocriptine", "cabergoline",

    // Respiratory
    "umeclidinium", "roflumilast", "mepolizumab", "theophylline", "cromolyn",

    // Hematology
    "edoxaban", "prasugrel", "eltrombopag", "romiplostim",

    // Renal/GU
    "tamsulosin", "terazosin",

    // Antimicrobials
    "daptomycin", "linezolid", "tigecycline", "colistin", "fosfomycin", "fidaxomicin",

    // Immunology/Rheumatology
    "tofacitinib", "anakinra", "tocilizumab", "febuxostat",

    // ===== CORE HIGH-YIELD EXISTING DRUGS =====

    // Cardiovascular - Antihypertensives
    "lisinopril", "captopril", "enalapril", "ramipril",  // ACE inhibitors
    "losartan", "valsartan", "candesartan",  // ARBs
    "metoprolol", "atenolol", "propranolol", "labetalol", "esmolol",  // Beta blockers
    "amlodipine", "nifedipine", "verapamil", "diltiazem",  // CCBs
    "hydralazine", "minoxidil", "nitroprusside",  // Direct vasodilators

    // Cardiovascular - Diuretics
    "furosemide", "bumetanide", "torsemide",  // Loop diuretics
    "hydrochlorothiazide", "chlorthalidone", "indapamide",  // Thiazides
    "spironolactone", "eplerenone", "amiloride", "triamterene",  // K-sparing
    "acetazolamide", "mannitol",  // Other diuretics

    // Cardiovascular - Heart Failure/Arrhythmias
    "digoxin", "adenosine", "amiodarone", "sotalol", "flecainide", "procainamide", "lidocaine",

    // Cardiovascular - Lipids
    "atorvastatin", "simvastatin", "pravastatin", "rosuvastatin",  // Statins
    "gemfibrozil", "fenofibrate",  // Fibrates
    "niacin", "colestipol",  // Others

    // Cardiovascular - Anticoagulation
    "warfarin", "heparin", "enoxaparin", "fondaparinux",  // Traditional
    "dabigatran", "rivaroxaban", "apixaban",  // DOACs
    "aspirin", "clopidogrel",  // Antiplatelets
    "alteplase", "tenecteplase", "streptokinase",  // Fibrinolytics

    // Cardiovascular - Angina
    "nitroglycerin", "isosorbide-dinitrate", "isosorbide-mononitrate",

    // Endocrine - Diabetes
    "insulin-regular", "insulin-nph", "insulin-lispro", "insulin-aspart", "insulin-glargine", "insulin-detemir",
    "metformin", "glyburide", "glipizide", "pioglitazone", "rosiglitazone",
    "acarbose", "miglitol", "sitagliptin", "linagliptin",

    // Endocrine - Thyroid
    "levothyroxine", "liothyronine", "propylthiouracil", "methimazole",

    // Endocrine - Adrenal/Steroids
    "prednisone", "prednisolone", "methylprednisolone", "dexamethasone", "hydrocortisone",
    "fludrocortisone",

    // Endocrine - Bone
    "alendronate", "risedronate", "zoledronic-acid", "denosumab",
    "calcitonin", "cinacalcet",

    // Respiratory
    "albuterol", "salmeterol", "formoterol",  // Beta-agonists
    "ipratropium", "tiotropium",  // Anticholinergics
    "fluticasone", "budesonide", "beclomethasone",  // ICS
    "montelukast", "zafirlukast",  // Leukotriene modifiers
    "omalizumab",  // Anti-IgE

    // GI
    "omeprazole", "pantoprazole", "esomeprazole", "lansoprazole",  // PPIs
    "ranitidine", "famotidine", "cimetidine",  // H2 blockers
    "metoclopramide", "ondansetron",
    "loperamide", "diphenoxylate-atropine",
    "mesalamine", "sulfasalazine", "infliximab", "adalimumab",
    "lactulose", "rifaximin",

    // Renal/GU
    "finasteride", "dutasteride", "nitrofurantoin",
    "desmopressin-ddavp", "tolvaptan", "conivaptan",

    // Antimicrobials - Beta-lactams
    "penicillin-g", "penicillin-v", "amoxicillin", "ampicillin", "nafcillin", "oxacillin",
    "piperacillin-tazobactam", "ampicillin-sulbactam", "amoxicillin-clavulanate",
    "cefazolin", "cephalexin", "cefoxitin", "cefotetan", "ceftriaxone", "cefotaxime",
    "ceftazidime", "cefepime", "ceftaroline",
    "imipenem", "meropenem", "ertapenem", "aztreonam",

    // Antimicrobials - Others
    "vancomycin", "gentamicin", "tobramycin", "amikacin",  // Glycopeptides & aminoglycosides
    "azithromycin", "clarithromycin", "erythromycin",  // Macrolides
    "doxycycline", "minocycline", "tetracycline",  // Tetracyclines
    "ciprofloxacin", "levofloxacin", "moxifloxacin",  // Fluoroquinolones
    "metronidazole", "clindamycin",
    "sulfamethoxazole-trimethoprim",

    // Antimicrobials - Antivirals
    "acyclovir", "valacyclovir", "ganciclovir", "foscarnet",
    "oseltamivir", "zanamivir",
    "zidovudine", "tenofovir", "emtricitabine", "lamivudine",
    "efavirenz", "nevirapine",
    "ritonavir", "lopinavir", "atazanavir", "darunavir",
    "raltegravir", "dolutegravir",
    "interferon-alpha", "ribavirin", "sofosbuvir",

    // Antimicrobials - Antifungals
    "fluconazole", "itraconazole", "voriconazole", "posaconazole",
    "amphotericin-b", "nystatin", "caspofungin", "micafungin",
    "terbinafine", "griseofulvin",

    // Antimicrobials - Antiparasitics
    "chloroquine", "hydroxychloroquine", "mefloquine", "primaquine", "artemether-lumefantrine",
    "atovaquone", "pentamidine", "pyrimethamine", "sulfadiazine",
    "albendazole", "mebendazole", "praziquantel", "ivermectin",

    // Hematology/Oncology
    "filgrastim", "epoetin-alfa", "darbepoetin",
    "ferrous-sulfate", "iron-dextran", "vitamin-b12", "folic-acid",
    "cyclophosphamide", "methotrexate", "fluorouracil", "cytarabine",
    "doxorubicin", "bleomycin", "vincristine", "paclitaxel",
    "cisplatin", "carboplatin",
    "imatinib", "rituximab", "trastuzumab", "bevacizumab",
    "tamoxifen", "anastrozole", "letrozole",

    // Immunology/Rheumatology
    "azathioprine", "mycophenolate", "cyclosporine", "tacrolimus", "sirolimus",
    "methotrexate", "sulfasalazine", "hydroxychloroquine",
    "etanercept", "adalimumab", "infliximab",
    "colchicine", "allopurinol", "probenecid",

    // CNS - Anesthetics/Analgesics
    "morphine", "fentanyl", "hydromorphone", "oxycodone", "codeine", "tramadol",
    "acetaminophen", "ibuprofen", "naproxen", "indomethacin", "ketorolac",
    "lidocaine", "bupivacaine", "propofol", "etomidate", "ketamine",
    "succinylcholine", "rocuronium", "vecuronium",

    // CNS - Antidepressants/Anxiolytics
    "fluoxetine", "sertraline", "paroxetine", "citalopram", "escitalopram",  // SSRIs
    "venlafaxine", "duloxetine",  // SNRIs
    "amitriptyline", "nortriptyline", "imipramine",  // TCAs
    "phenelzine", "tranylcypromine",  // MAOIs
    "bupropion", "mirtazapine", "trazodone",
    "diazepam", "lorazepam", "alprazolam", "clonazepam",  // Benzodiazepines
    "buspirone", "zolpidem",

    // CNS - Antipsychotics
    "haloperidol", "chlorpromazine", "fluphenazine",  // Typical
    "clozapine", "risperidone", "olanzapine", "quetiapine", "aripiprazole",  // Atypical

    // CNS - Mood Stabilizers
    "lithium", "valproic-acid", "carbamazepine", "lamotrigine",

    // CNS - Anti-Parkinsonian
    "levodopa-carbidopa", "pramipexole", "ropinirole", "selegiline", "rasagiline",
    "entacapone", "tolcapone", "amantadine", "benztropine",

    // CNS - Antiepileptics
    "phenytoin", "phenobarbital", "carbamazepine", "valproic-acid",
    "lamotrigine", "levetiracetam", "topiramate", "gabapentin", "pregabalin",
    "ethosuximide",

    // CNS - Migraine
    "sumatriptan", "ergotamine",

    // CNS - ADHD
    "methylphenidate", "amphetamine", "atomoxetine",

    // Autonomic
    "atropine", "scopolamine", "glycopyrrolate",
    "bethanechol", "neostigmine", "pyridostigmine", "edrophonium",
    "phenylephrine", "epinephrine", "norepinephrine", "dopamine", "dobutamine",
    "isoproterenol", "clonidine", "prazosin", "doxazosin", "phentolamine"
];

export default highYieldDrugIds;

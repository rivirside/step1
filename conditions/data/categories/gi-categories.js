// Gastrointestinal categories, symptoms, and syndromes
const gastrointestinalCategories = [
    {
        id: "abdominal-pain-acute",
        name: "Acute Abdominal Pain",
        system: "gastrointestinal",
        type: "symptom",
        diseaseIds: [
            "appendicitis",
            "acute-cholecystitis",
            "acute-pancreatitis",
            "bowel-obstruction",
            "perforated-viscus",
            "acute-diverticulitis",
            "ischemic-colitis"
        ],
        pageType: "category",
        detail: {
            approach: "Acute abdominal pain: surgical emergency vs medical management. Location, onset (sudden vs gradual), character, and associated symptoms guide diagnosis. Always consider life-threatening causes first.",
            redFlags: [
                "Peritoneal signs (rigidity, rebound, guarding) suggest perforation or peritonitis",
                "Sudden onset severe pain suggests perforation, vascular catastrophe, or ruptured ectopic",
                "Absent bowel sounds suggest ileus or late obstruction",
                "Pulsatile mass suggests AAA (don't palpate if suspected)",
                "Hypotension + abdominal pain = ruptured AAA, ectopic, or sepsis",
                "Age >50 + new-onset pain = consider malignancy, diverticulitis, ischemia"
            ],
            initialWorkup: [
                "Vital signs: fever (infection), hypotension (perforation, bleeding, AAA)",
                "Abdominal exam: inspection, auscultation, percussion, palpation (in that order)",
                "Labs: CBC, CMP, lipase, LFTs, lactate (ischemia), pregnancy test (all women of childbearing age)",
                "Imaging: Upright CXR (free air), CT abdomen/pelvis (most diagnoses), ultrasound (RUQ pain, pregnancy)"
            ],
            differentialCategories: [
                "RUQ: cholecystitis, hepatitis, PUD, pneumonia",
                "Epigastric: PUD, pancreatitis, MI, GERD",
                "LUQ: splenic pathology, pancreatitis (tail)",
                "RLQ: appendicitis, ovarian (ectopic, torsion), IBD, kidney stone",
                "LLQ: diverticulitis, ovarian, IBD, kidney stone",
                "Periumbilical: early appendicitis, bowel obstruction, mesenteric ischemia, AAA",
                "Diffuse: peritonitis, obstruction, gastroenteritis, IBD, DKA"
            ]
        }
    },
    {
        id: "gi-bleeding",
        name: "Gastrointestinal Bleeding",
        system: "gastrointestinal",
        type: "symptom",
        diseaseIds: [
            "peptic-ulcer-disease",
            "gastritis",
            "esophageal-varices",
            "mallory-weiss-tear",
            "diverticulosis",
            "colorectal-cancer",
            "hemorrhoids",
            "angiodysplasia"
        ],
        pageType: "category",
        detail: {
            approach: "Upper GI bleed (proximal to ligament of Treitz): hematemesis, coffee-ground emesis, melena. Lower GI bleed (distal to ligament of Treitz): hematochezia, maroon stools. Distinguish acute vs chronic, severity, and source.",
            redFlags: [
                "Hemodynamic instability (tachycardia, hypotension) = massive bleed, resuscitate first",
                "Hematemesis or coffee-ground emesis = upper GI bleed → urgent EGD",
                "Massive hematochezia with hemodynamic instability = consider upper GI source (10-15% of cases)",
                "Syncope or presyncope = significant blood loss",
                "Chronic anemia + occult blood = malignancy until proven otherwise"
            ],
            initialWorkup: [
                "Resuscitation: 2 large-bore IVs, fluid resuscitation, type and cross",
                "Labs: CBC (hemoglobin), coagulation studies, BMP, LFTs",
                "NG tube: if UGIB suspected (positive = coffee-ground or bloody, negative doesn't rule out)",
                "Risk stratification: Glasgow-Blatchford score (predicts need for intervention)",
                "Upper GI: EGD within 24h (urgent if unstable)",
                "Lower GI: colonoscopy (after prep if stable), tagged RBC scan or angiography if massive"
            ],
            differentialCategories: [
                "UGIB: PUD (most common), varices (cirrhosis), Mallory-Weiss (vomiting), gastritis, malignancy",
                "LGIB: diverticulosis (most common), hemorrhoids, angiodysplasia, IBD, colorectal cancer, ischemic colitis",
                "Obscure GI bleed: small bowel (angiodysplasia, Meckel's, tumors) - capsule endoscopy"
            ]
        }
    },
    {
        id: "diarrhea",
        name: "Diarrhea",
        system: "gastrointestinal",
        type: "symptom",
        diseaseIds: [
            "inflammatory-bowel-disease-crohns",
            "ulcerative-colitis",
            "celiac-disease"
        ],
        pageType: "category",
        detail: {
            approach: "Acute (<2 weeks) vs chronic (>4 weeks). Watery vs bloody. Inflammatory vs non-inflammatory. Infectious vs non-infectious. Osmotic vs secretory (continues with fasting).",
            redFlags: [
                "Bloody diarrhea = inflammatory (IBD, infection, ischemia)",
                "Fever + bloody diarrhea = invasive bacterial infection or IBD",
                "Recent antibiotics = C. difficile",
                "Severe dehydration, especially in young/elderly",
                "Chronic diarrhea + weight loss = malabsorption, IBD, or malignancy",
                "Immunosuppressed + diarrhea = opportunistic infections (CMV, Cryptosporidium, Microsporidium)"
            ],
            initialWorkup: [
                "Acute: Most viral, self-limited. Stool studies if: bloody, severe, >7 days, recent travel, recent antibiotics, immunosuppressed",
                "Stool studies: WBC (inflammatory), culture, ova & parasites, C. diff toxin",
                "Labs: CBC, CMP (electrolytes, renal function), inflammatory markers if IBD suspected",
                "Chronic: stool studies + labs + colonoscopy with biopsies"
            ],
            differentialCategories: [
                "Acute watery: viral (norovirus, rotavirus), enterotoxigenic E. coli, food poisoning (S. aureus, B. cereus), medications",
                "Acute bloody: Campylobacter, Salmonella, Shigella, E. coli O157:H7, C. diff, ischemic colitis",
                "Chronic watery: IBS, malabsorption (celiac, lactose intolerance), microscopic colitis, laxative abuse",
                "Chronic bloody/inflammatory: IBD (UC, Crohn's), chronic infections (TB, amebiasis)"
            ]
        }
    },
    {
        id: "dysphagia",
        name: "Dysphagia",
        system: "gastrointestinal",
        type: "symptom",
        diseaseIds: [
            "achalasia",
            "gerd",
            "esophageal-cancer"
        ],
        pageType: "category",
        detail: {
            approach: "Oropharyngeal (difficulty initiating swallow, coughing, nasal regurgitation) vs Esophageal (food sticking in chest). Solids only (mechanical obstruction) vs Solids and liquids (motility disorder). Progressive vs intermittent.",
            redFlags: [
                "Progressive solid dysphagia = mechanical obstruction (cancer, stricture) → urgent EGD",
                "Weight loss + progressive dysphagia = esophageal cancer",
                "Odynophagia (painful swallowing) = infection (candida, HSV, CMV in immunosuppressed) or pill esophagitis",
                "Food impaction = emergency (EGD for disimpaction)",
                "Regurgitation of undigested food = achalasia or Zenker's diverticulum"
            ],
            initialWorkup: [
                "History: onset, progression, solids vs liquids, associated symptoms",
                "Alarm features: weight loss, anemia, age >50, progressive",
                "Barium swallow: anatomic abnormalities, motility disorders (bird's beak = achalasia)",
                "EGD: visualize mucosa, biopsy masses/strictures, rule out cancer",
                "Esophageal manometry: motility disorders (achalasia, DES, nutcracker esophagus)"
            ],
            differentialCategories: [
                "Oropharyngeal: stroke, Parkinson's, myasthenia gravis, polymyositis, Zenker's diverticulum",
                "Esophageal mechanical: esophageal cancer, stricture (GERD, radiation), Schatzki ring, eosinophilic esophagitis (food impaction)",
                "Esophageal motility: achalasia, scleroderma, DES, nutcracker esophagus, GERD (severe)"
            ]
        }
    },
    {
        id: "jaundice",
        name: "Jaundice",
        system: "gastrointestinal",
        type: "symptom",
        diseaseIds: [
            "viral-hepatitis-a",
            "viral-hepatitis-b",
            "viral-hepatitis-c",
            "alcoholic-hepatitis",
            "primary-biliary-cholangitis",
            "primary-sclerosing-cholangitis",
            "cirrhosis",
            "acute-cholecystitis",
            "choledocholithiasis",
            "acute-cholangitis",
            "pancreatic-cancer",
            "hepatocellular-carcinoma"
        ],
        pageType: "category",
        detail: {
            approach: "Jaundice = bilirubin >3 mg/dL (scleral icterus earliest sign). Classify as prehepatic (hemolysis), hepatic (hepatocellular), or posthepatic (cholestatic/obstructive). Fractionated bilirubin, LFTs, and imaging guide diagnosis.",
            redFlags: [
                "Charcot's triad (fever, RUQ pain, jaundice) = ascending cholangitis (emergency)",
                "Reynolds' pentad (Charcot's + hypotension + confusion) = suppurative cholangitis (sepsis)",
                "Painless jaundice + weight loss = pancreatic cancer (Courvoisier sign: palpable gallbladder)",
                "Acute liver failure: encephalopathy, coagulopathy (INR >1.5), jaundice",
                "Hemolytic jaundice + anemia = hemolysis"
            ],
            initialWorkup: [
                "Labs: Fractionated bilirubin (direct vs indirect), LFTs (AST, ALT, ALP, GGT), PT/INR, albumin",
                "Hemolysis workup if unconjugated hyperbilirubinemia: CBC, reticulocyte count, haptoglobin, LDH, Coombs",
                "Hepatocellular pattern: AST/ALT >> ALP. Check viral serologies, autoantibodies, ceruloplasmin, drug history",
                "Cholestatic pattern: ALP >> AST/ALT. Imaging: ultrasound (first-line), MRCP or ERCP",
                "Ultrasound: dilated bile ducts = obstruction (stone, cancer, stricture). Assess for cirrhosis."
            ],
            differentialCategories: [
                "Unconjugated (indirect) hyperbilirubinemia: Hemolysis, Gilbert syndrome, Crigler-Najjar",
                "Conjugated (direct) hyperbilirubinemia - Hepatocellular: Viral hepatitis, alcoholic hepatitis, drug-induced, autoimmune, Wilson's, hemochromatosis",
                "Conjugated - Cholestatic/Obstructive: Choledocholithiasis, cholangitis, pancreatic cancer, cholangiocarcinoma, PSC/PBC, drug-induced (phenothiazines)"
            ]
        }
    },
    {
        id: "nausea-vomiting",
        name: "Nausea & Vomiting",
        system: "gastrointestinal",
        type: "symptom",
        diseaseIds: [
            "bowel-obstruction",
            "gastroparesis",
            "acute-pancreatitis",
            "appendicitis",
            "acute-cholecystitis",
            "gastritis"
        ],
        pageType: "category",
        detail: {
            approach: "Acute vs chronic. With or without abdominal pain. Timing relative to meals. Associated symptoms (diarrhea, fever, abdominal pain). Rule out extra-GI causes (neurologic, cardiac, metabolic, pregnancy).",
            redFlags: [
                "Feculent vomiting = distal bowel obstruction",
                "Bilious vomiting in neonate = malrotation with midgut volvulus (surgical emergency)",
                "Projectile vomiting = pyloric stenosis (infants) or increased ICP",
                "Vomiting + severe abdominal pain = surgical abdomen (appendicitis, obstruction, pancreatitis)",
                "Chronic vomiting + weight loss = malignancy, gastroparesis"
            ],
            initialWorkup: [
                "History: timing, relationship to meals, associated symptoms",
                "Pregnancy test (all women of childbearing age)",
                "Labs: BMP (electrolytes - contraction alkalosis), glucose",
                "Imaging: Upright/decubitus abdominal X-ray (obstruction, free air), CT if surgical concern"
            ],
            differentialCategories: [
                "GI: gastroenteritis, obstruction, gastroparesis, pancreatitis, appendicitis, cholecystitis",
                "Neurologic: migraine, increased ICP, vestibular",
                "Metabolic: DKA, uremia, hypercalcemia, adrenal insufficiency",
                "Medications/toxins: chemotherapy, opioids, alcohol",
                "Pregnancy: hyperemesis gravidarum",
                "Cardiac: MI (inferior wall)"
            ]
        }
    },
    {
        id: "hepatobiliary-disorders",
        name: "Hepatobiliary Disorders",
        system: "gastrointestinal",
        type: "pathophysiologic",
        diseaseIds: [
            "viral-hepatitis-a",
            "viral-hepatitis-b",
            "viral-hepatitis-c",
            "alcoholic-hepatitis",
            "nafld",
            "primary-biliary-cholangitis",
            "primary-sclerosing-cholangitis",
            "cirrhosis",
            "acute-cholecystitis",
            "choledocholithiasis",
            "acute-cholangitis",
            "hepatocellular-carcinoma"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of the liver, gallbladder, and biliary tree. Liver: hepatitis (inflammation), cirrhosis (fibrosis), failure. Biliary: stones, infection, cholestasis. Distinguished by LFT pattern and imaging.",
            classification: [
                "Hepatocellular pattern: AST/ALT >> ALP (>5x ULN). Viral hepatitis, alcoholic, drug-induced, autoimmune, ischemic.",
                "Cholestatic pattern: ALP >> AST/ALT (>3x ULN). Biliary obstruction, drug-induced, PBC, PSC.",
                "Mixed pattern: both elevated."
            ],
            generalPrinciples: [
                "LFTs: AST, ALT (hepatocellular injury), ALP, GGT (cholestasis), bilirubin, albumin, PT/INR (synthetic function)",
                "Ultrasound first-line for RUQ pain and jaundice. MRCP for biliary tree. CT for masses.",
                "ERCP therapeutic (stone extraction, stenting). MRCP diagnostic.",
                "Cirrhosis complications: portal hypertension (varices, ascites), hepatic encephalopathy, HCC, coagulopathy",
                "Acute liver failure: encephalopathy + coagulopathy + jaundice. Causes: acetaminophen, viral, ischemic, autoimmune. High mortality."
            ]
        }
    },
    {
        id: "inflammatory-bowel-disease",
        name: "Inflammatory Bowel Disease (IBD)",
        system: "gastrointestinal",
        type: "pathophysiologic",
        diseaseIds: [
            "inflammatory-bowel-disease-crohns",
            "ulcerative-colitis"
        ],
        pageType: "category",
        detail: {
            overview: "Chronic relapsing-remitting inflammatory conditions of the GI tract. Crohn's: transmural, skip lesions, mouth-to-anus, fistulas. UC: mucosal, continuous, rectum to proximal colon, increased colon cancer risk.",
            classification: [
                "Crohn's disease: Any part of GI tract (mouth to anus), transmural inflammation, skip lesions, granulomas, fistulas/strictures",
                "Ulcerative colitis: Rectum (always involved) extending proximally in continuous fashion, limited to colon, mucosal inflammation, increased colorectal cancer risk"
            ],
            generalPrinciples: [
                "Presentation: bloody diarrhea, abdominal pain, weight loss, extraintestinal manifestations",
                "Diagnosis: colonoscopy with biopsies (gold standard)",
                "Extraintestinal: arthritis (most common), erythema nodosum, pyoderma gangrenosum, uveitis, PSC (UC), kidney stones (Crohn's)",
                "Treatment: 5-ASA, corticosteroids (flares), immunomodulators (azathioprine, 6-MP), biologics (anti-TNF, anti-integrin)",
                "Complications: strictures, fistulas, abscesses (Crohn's), toxic megacolon, perforation, colorectal cancer (UC > Crohn's)"
            ]
        }
    },
    {
        id: "peptic-ulcer-disease-disorders",
        name: "Peptic Ulcer Disease & Gastritis",
        system: "gastrointestinal",
        type: "pathophysiologic",
        diseaseIds: [
            "peptic-ulcer-disease",
            "gastritis"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders caused by acid-mediated damage to gastroduodenal mucosa. PUD: mucosal defects penetrating muscularis mucosa (deeper). Gastritis: mucosal inflammation without deep ulceration.",
            classification: [
                "Gastric ulcer: epigastric pain worsened by eating, H. pylori or NSAID-related, malignancy risk",
                "Duodenal ulcer: epigastric pain improved by eating (acid buffering), H. pylori > NSAID, no malignancy risk",
                "Gastritis: epigastric discomfort, nausea, can be acute (erosive) or chronic (atrophic)"
            ],
            generalPrinciples: [
                "Causes: H. pylori (most common), NSAIDs, stress (ICU), alcohol, autoimmune (pernicious anemia), Zollinger-Ellison (gastrinoma)",
                "Diagnosis: EGD with biopsy (rule out malignancy in gastric ulcers, confirm H. pylori, identify atrophic gastritis)",
                "Complications: bleeding (most common), perforation, gastric outlet obstruction",
                "H. pylori treatment: triple therapy (PPI + amoxicillin + clarithromycin) or quadruple (add metronidazole)",
                "Gastritis types: acute erosive (NSAIDs, alcohol, stress), chronic atrophic (autoimmune, H. pylori), pernicious anemia (anti-IF antibodies)"
            ]
        }
    },
    {
        id: "malabsorption-syndromes",
        name: "Malabsorption Syndromes",
        system: "gastrointestinal",
        type: "pathophysiologic",
        diseaseIds: [
            "celiac-disease",
            "chronic-pancreatitis"
        ],
        pageType: "category",
        detail: {
            overview: "Impaired absorption of nutrients leading to diarrhea, steatorrhea, weight loss, and nutritional deficiencies. Caused by mucosal disease (celiac), pancreatic insufficiency, or bacterial overgrowth.",
            classification: [
                "Mucosal disorders: Celiac disease, tropical sprue, Whipple disease, IBD, intestinal lymphoma",
                "Pancreatic insufficiency: Chronic pancreatitis, cystic fibrosis, pancreatic cancer",
                "Bile acid deficiency: Cholestasis, ileal resection, bacterial overgrowth",
                "Other: lactose intolerance, short bowel syndrome, Giardia"
            ],
            generalPrinciples: [
                "Presentation: chronic diarrhea, steatorrhea (fatty, foul-smelling, floats), weight loss, bloating",
                "Nutritional deficiencies: fat-soluble vitamins (A, D, E, K), iron, B12, folate, calcium",
                "Steatorrhea: >7g fat in 72h stool collection (gold standard)",
                "Celiac: anti-tTG, anti-endomysial antibodies, duodenal biopsy (villous atrophy, crypt hyperplasia)",
                "Pancreatic insufficiency: fecal elastase, secretin stimulation test, imaging (calcifications)"
            ]
        }
    },
    {
        id: "gi-malignancies",
        name: "Gastrointestinal Malignancies",
        system: "gastrointestinal",
        type: "pathophysiologic",
        diseaseIds: [
            "esophageal-cancer",
            "gastric-cancer",
            "colorectal-cancer",
            "pancreatic-cancer",
            "hepatocellular-carcinoma"
        ],
        pageType: "category",
        detail: {
            overview: "Malignancies of the GI tract. Most common: colorectal > gastric > esophageal > pancreatic. Early detection improves prognosis (screening colonoscopy for CRC).",
            classification: [
                "Esophageal: Squamous cell (upper/middle, smoking/alcohol) vs Adenocarcinoma (lower, Barrett's, GERD)",
                "Gastric: Adenocarcinoma (H. pylori, Japan/Korea), intestinal vs diffuse (linitis plastica, signet ring)",
                "Colorectal: Adenocarcinoma from polyp, left-sided (obstruction, bleeding) vs right-sided (anemia), Lynch syndrome, FAP",
                "Pancreatic: Adenocarcinoma (head > body/tail), poor prognosis, painless jaundice",
                "HCC: Cirrhosis (HBV, HCV, alcohol), elevated AFP"
            ],
            generalPrinciples: [
                "Red flags: weight loss, progressive dysphagia, GI bleeding, anemia, jaundice, palpable mass",
                "Diagnosis: endoscopy with biopsy, cross-sectional imaging (CT, MRI) for staging",
                "Colorectal screening: colonoscopy starting age 45 (average risk), earlier if family history or IBD",
                "Treatment: surgical resection (curative if early), chemotherapy/radiation",
                "Prognosis: early detection improves survival. Pancreatic cancer worst prognosis (5-year survival <10%)."
            ]
        }
    }
];

export default gastrointestinalCategories;

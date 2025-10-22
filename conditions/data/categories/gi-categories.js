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
        subcategories: [
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
                    diagnosticAlgorithm: `Step 1: Presentation & Hemodynamics
  - Hematemesis (bright red) → active UGIB
  - Coffee-ground emesis → slower UGIB (gastric acid exposure)
  - Melena (black tarry stool) → UGIB (blood digested in GI tract)
  - Check vitals: HR >100, SBP <90 → unstable → aggressive resuscitation

Step 2: Resuscitation (if unstable)
  - 2 large-bore IVs
  - Crystalloid resuscitation
  - Type & cross for transfusion
  - Keep Hgb >7 (restrictive strategy)

Step 3: Risk Stratification
  - Glasgow-Blatchford score (predicts need for intervention)
  - NG tube (optional): bloody/coffee-ground confirms UGIB

Step 4: EGD within 24h (urgent if unstable)
  - Identify source: ulcer, varices, Mallory-Weiss, gastritis
  - Therapeutic: cauterization, injection, clipping, banding`,
                    keyFeatures: [
                        "Hematemesis = UGIB (proximal to ligament of Treitz)",
                        "Melena = typically UGIB (blood digested → black/tarry)",
                        "NG tube: positive confirms UGIB, negative doesn't rule out (duodenal source)",
                        "EGD is diagnostic AND therapeutic (cautery, clips, injection, banding)"
                    ],
                    diseaseDistinctions: `PUD (50% of UGIB):
  - Epigastric pain
  - H. pylori or NSAID history
  - EGD: ulcer in stomach or duodenum
  - Tx: PPI, treat H. pylori

Varices (10-20%, highest mortality):
  - Cirrhosis/portal hypertension
  - Massive hematemesis
  - EGD: dilated submucosal veins
  - Tx: octreotide + endoscopic banding, antibiotics (SBP prophylaxis)

Mallory-Weiss tear (5-15%):
  - Preceded by forceful vomiting/retching
  - Hematemesis after retching
  - EGD: linear mucosal tear at GE junction
  - Usually self-limited

Gastritis:
  - NSAIDs, alcohol, stress
  - Diffuse mucosal inflammation
  - Usually less severe bleeding`,
                    clinicalPearls: [
                        "Massive hematochezia can be UGIB (10-15%) if bleeding is brisk enough",
                        "Variceal bleeding: give octreotide + antibiotics + urgent EGD for banding",
                        "PUD bleeding: high-dose PPI (IV bolus + infusion) improves outcomes",
                        "If unstable: resuscitate FIRST, then scope within hours (not minutes)"
                    ]
                }
            },
            {
                id: "lower-gi-bleed",
                name: "Lower GI Bleed (LGIB)",
                diseaseIds: [
                    "diverticulosis",
                    "colorectal-cancer",
                    "hemorrhoids",
                    "angiodysplasia"
                ],
                description: "Bleeding distal to ligament of Treitz. Hematochezia (bright red blood per rectum), maroon stools.",
                subcategoryDetail: {
                    diagnosticAlgorithm: `Step 1: Confirm LGIB
  - Hematochezia (bright red blood) = LGIB
  - Maroon stools = LGIB or brisk UGIB
  - Rule out UGIB: if massive/unstable → consider NG tube or EGD first

Step 2: Hemodynamic assessment
  - Stable → elective colonoscopy after prep
  - Unstable → consider urgent intervention

Step 3: If stable
  - Colonoscopy (after bowel prep) - diagnostic AND therapeutic
  - Identifies source in 75-95% of cases

Step 4: If unstable or colonoscopy non-diagnostic
  - Tagged RBC scan (if bleeding >0.1 mL/min)
  - CT angiography (if bleeding >0.3 mL/min)
  - Angiography with embolization (if refractory)`,
                    keyFeatures: [
                        "Hematochezia = bright red blood per rectum (usually LGIB)",
                        "Most LGIB is self-limited (stops spontaneously in 80%)",
                        "Colonoscopy after prep (stable patients) - diagnostic + therapeutic",
                        "Diverticulosis is most common cause of LGIB in adults >40"
                    ],
                    diseaseDistinctions: `Diverticulosis (most common, 40%):
  - Painless hematochezia
  - Older adults
  - Usually self-limited
  - Colonoscopy shows diverticula

Angiodysplasia (20%):
  - Older adults, aortic stenosis
  - Cecum/right colon (most common)
  - Colonoscopy: vascular malformations
  - Tx: cauterization

Hemorrhoids:
  - Bright red blood on toilet paper
  - Associated with straining
  - Usually minor bleeding
  - Anoscopy diagnostic

Colorectal cancer:
  - Chronic occult bleeding → anemia
  - Weight loss, change in bowel habits
  - Colonoscopy with biopsy
  - Age >50 or alarm features`,
                    clinicalPearls: [
                        "80% of LGIB stops spontaneously → observation often sufficient",
                        "If massive hematochezia + unstable → rule out UGIB first (10-15% of cases)",
                        "Diverticular bleeding: painless (vs diverticulitis which is painful)",
                        "Angiodysplasia associated with aortic stenosis (Heyde syndrome)"
                    ]
                }
            }
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
        subcategories: [
            {
                id: "hepatocellular-jaundice",
                name: "Hepatocellular Jaundice",
                diseaseIds: [
                    "viral-hepatitis-a",
                    "viral-hepatitis-b",
                    "viral-hepatitis-c",
                    "alcoholic-hepatitis",
                    "cirrhosis",
                    "hepatocellular-carcinoma"
                ],
                description: "Direct bilirubin ↑ + AST/ALT >> ALP (>5× ULN). Hepatocyte injury prevents bilirubin excretion.",
                subcategoryDetail: {
                    diagnosticAlgorithm: `Step 1: LFT pattern shows AST/ALT >> ALP (ratio >5)
  → Hepatocellular injury confirmed

Step 2: AST:ALT ratio
  - AST:ALT >2 → Alcoholic hepatitis (AST rarely >300)
  - AST:ALT ≈1 → Viral hepatitis (can be >1000)

Step 3: Viral serologies
  - HBsAg, anti-HBc IgM → Acute Hep B
  - Anti-HAV IgM → Acute Hep A
  - HCV RNA → Acute/chronic Hep C

Step 4: If negative → check drug-induced, autoimmune (ANA, ASMA), Wilson (ceruloplasmin)`,
                    keyFeatures: [
                        "AST/ALT elevation is MASSIVE (often >500, can be >1000 in viral)",
                        "ALP elevation is mild (<3× ULN)",
                        "Direct bilirubin ↑ → dark urine (tea-colored)",
                        "AST:ALT ratio >2 suggests alcoholic hepatitis"
                    ]
                }
            },
            {
                id: "cholestatic-jaundice",
                name: "Cholestatic/Obstructive Jaundice",
                diseaseIds: [
                    "primary-biliary-cholangitis",
                    "primary-sclerosing-cholangitis",
                    "choledocholithiasis",
                    "acute-cholangitis",
                    "pancreatic-cancer"
                ],
                description: "Direct bilirubin ↑ + ALP >> AST/ALT (>3× ULN). Bile flow obstruction.",
                subcategoryDetail: {
                    diagnosticAlgorithm: `Step 1: LFT pattern shows ALP >> AST/ALT (ratio >3)
  → Cholestasis confirmed

Step 2: Ultrasound to check for dilated bile ducts
  - Dilated ducts → Extrahepatic obstruction
  - Normal ducts → Intrahepatic cholestasis

Step 3: If dilated ducts (extrahepatic obstruction)
  → MRCP or ERCP to identify: stone, stricture, cancer

Step 4: If normal ducts (intrahepatic cholestasis)
  → PBC (AMA antibodies), PSC (p-ANCA), drug-induced`,
                    keyFeatures: [
                        "ALP and GGT markedly elevated",
                        "AST/ALT elevation is mild",
                        "Pruritus common (bile salt accumulation)",
                        "Dilated ducts on ultrasound → obstruction (stone, tumor, stricture)"
                    ],
                    clinicalPearls: [
                        "Charcot's triad (fever + RUQ pain + jaundice) = cholangitis emergency",
                        "Painless jaundice = pancreatic cancer until proven otherwise",
                        "PBC: middle-aged women, AMA+, xanthomas. PSC: IBD association, beading on MRCP"
                    ]
                }
            }
        ],
        pageType: "category",
        detail: {
            approach: "Jaundice = bilirubin >3 mg/dL (scleral icterus earliest sign). Step 1: Fractionated bilirubin (direct vs indirect). Step 2: If direct ↑ → check LFT pattern (AST/ALT vs ALP). Step 3: Hepatocellular (AST/ALT >> ALP) vs Cholestatic (ALP >> AST/ALT).",
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
        subcategories: [
            {
                id: "viral-hepatitis",
                name: "Viral Hepatitis",
                diseaseIds: [
                    "viral-hepatitis-a",
                    "viral-hepatitis-b",
                    "viral-hepatitis-c"
                ],
                description: "Inflammation of liver caused by hepatotropic viruses. AST/ALT can be >1000. Transmission varies by virus.",
                subcategoryDetail: {
                    comparisonMatrix: {
                        title: "Viral Hepatitis Comparison",
                        description: "Which hepatitis virus?",
                        content: `HEPATITIS A:
  - Transmission: Fecal-oral (contaminated food/water)
  - Incubation: 2-6 weeks
  - Chronic infection: NO (always acute, self-limited)
  - Diagnosis: Anti-HAV IgM (acute), Anti-HAV IgG (past/immune)
  - Prevention: Vaccine available (travel to endemic areas)
  - Treatment: Supportive only
  - Prognosis: Excellent, no chronic disease

HEPATITIS B:
  - Transmission: Blood/body fluids, vertical (mother to child)
  - Incubation: 1-6 months
  - Chronic infection: YES (5-10% adults, 90% neonates)
  - Diagnosis: HBsAg (active), Anti-HBc IgM (acute), Anti-HBs (immune/vaccinated)
  - Prevention: Vaccine (part of childhood series), HBIG for exposure
  - Treatment: Chronic → antivirals (entecavir, tenofovir)
  - Prognosis: Chronic → cirrhosis → HCC risk

HEPATITIS C:
  - Transmission: Blood (IVDU, transfusions pre-1992, needlestick)
  - Incubation: 2-26 weeks
  - Chronic infection: YES (85% become chronic!)
  - Diagnosis: Anti-HCV antibody → confirm with HCV RNA (PCR)
  - Prevention: NO vaccine available
  - Treatment: Direct-acting antivirals (DAAs) - cure >95%
  - Prognosis: Chronic → cirrhosis → HCC. Treatment can cure!`
                    },
                    keyFeatures: [
                        "Hep A: Fecal-oral, NO chronic disease, vaccine available",
                        "Hep B: Blood/vertical, 5-10% chronic (90% in neonates), vaccine available",
                        "Hep C: Blood (IVDU), 85% chronic, NO vaccine, but curable with DAAs",
                        "All can cause acute hepatitis with massive transaminase elevation (>1000)"
                    ],
                    clinicalPearls: [
                        "HBV serologies: HBsAg (current infection), Anti-HBs (immune), Anti-HBc IgM (acute), Anti-HBc IgG (past exposure)",
                        "HCV: Screen all baby boomers (1945-1965) and people with risk factors (IVDU, transfusion pre-1992)",
                        "Chronic HBV/HCV → screen for HCC with ultrasound + AFP every 6 months",
                        "Acute hepatitis treatment: Supportive. Chronic HBV/HCV → antivirals to prevent cirrhosis/HCC"
                    ]
                }
            },
            {
                id: "metabolic-alcoholic-liver",
                name: "Metabolic & Alcoholic Liver Disease",
                diseaseIds: [
                    "alcoholic-hepatitis",
                    "nafld"
                ],
                description: "Liver injury from alcohol or metabolic syndrome. AST:ALT ratio and risk factors distinguish.",
                subcategoryDetail: {
                    diagnosticAlgorithm: `Step 1: AST:ALT ratio
  - AST:ALT >2 → Alcoholic liver disease
  - AST:ALT ≈1 → NAFLD/NASH

Step 2: Additional clues
  Alcoholic hepatitis:
    - AST rarely >300 (vs viral can be >1000)
    - ALT rarely >100
    - ↑ GGT
    - Heavy alcohol use (>3 drinks/day women, >4 men)

  NAFLD/NASH:
    - Metabolic syndrome (obesity, diabetes, hyperlipidemia)
    - AST/ALT <1 typically
    - May have normal LFTs despite fatty liver

Step 3: Imaging
  - Ultrasound: increased echogenicity (fatty liver)
  - Elastography: assess fibrosis

Step 4: Biopsy (if diagnosis unclear)
  Alcoholic: Mallory-Denk bodies, neutrophilic infiltrate
  NASH: steatosis + inflammation + fibrosis`,
                    keyFeatures: [
                        "AST:ALT >2 is hallmark of alcoholic liver disease",
                        "AST rarely >300 in alcoholic hepatitis (vs >1000 in viral)",
                        "NAFLD: most common cause of chronic liver disease in US (obesity epidemic)",
                        "Both can progress to cirrhosis → HCC"
                    ],
                    diseaseDistinctions: `Alcoholic Hepatitis:
  - Heavy alcohol use required
  - AST:ALT >2, AST <300
  - ↑ GGT, ↑ MCV
  - Mallory-Denk bodies on biopsy
  - Treatment: abstinence, corticosteroids (severe)

NAFLD/NASH:
  - Metabolic syndrome (obesity, DM, hyperlipidemia)
  - AST/ALT <1
  - Spectrum: fatty liver → NASH → fibrosis → cirrhosis
  - Treatment: weight loss, manage metabolic syndrome`,
                    clinicalPearls: [
                        "Alcoholic hepatitis: Discriminant function (DF) score predicts mortality. DF >32 → steroids",
                        "NAFLD progression: Simple steatosis (benign) vs NASH (inflammation + fibrosis risk)",
                        "NASH is 2nd most common cause of liver transplant in US (after HCV)",
                        "Both: abstinence/weight loss can reverse early disease before cirrhosis develops"
                    ]
                }
            },
            {
                id: "cholestatic-biliary-disease",
                name: "Cholestatic & Biliary Disease",
                diseaseIds: [
                    "primary-biliary-cholangitis",
                    "primary-sclerosing-cholangitis",
                    "acute-cholecystitis",
                    "choledocholithiasis",
                    "acute-cholangitis"
                ],
                description: "ALP >> AST/ALT. Intrahepatic (PBC, PSC) vs extrahepatic (stones, strictures) obstruction.",
                subcategoryDetail: {
                    diagnosticAlgorithm: `Step 1: Confirm cholestatic pattern
  - ALP >> AST/ALT (ratio >3)
  - ↑ GGT confirms hepatic source
  - ↑ Direct bilirubin

Step 2: Ultrasound - check for dilated bile ducts
  - Dilated ducts → EXTRAHEPATIC obstruction
    → Choledocholithiasis, stricture, pancreatic cancer
  - Normal ducts → INTRAHEPATIC cholestasis
    → PBC, PSC, drug-induced

Step 3: If dilated ducts (extrahepatic)
  - MRCP or ERCP to identify: stone, stricture, cancer
  - Charcot's triad (fever + RUQ pain + jaundice) = cholangitis (emergency)

Step 4: If normal ducts (intrahepatic)
  - PBC: Anti-mitochondrial antibodies (AMA)
  - PSC: p-ANCA, MRCP shows beading
  - Drug-induced: medication review`,
                    keyFeatures: [
                        "Dilated ducts on ultrasound = extrahepatic obstruction (stone, tumor, stricture)",
                        "Normal ducts = intrahepatic cholestasis (PBC, PSC, drugs)",
                        "Pruritus is prominent (bile salt accumulation in skin)",
                        "Charcot's triad = cholangitis emergency (antibiotics + biliary drainage)"
                    ],
                    diseaseDistinctions: `PBC (Primary Biliary Cholangitis):
  - Middle-aged women
  - AMA antibodies (>95% specific)
  - Intrahepatic bile duct destruction
  - Pruritus, xanthomas, fat-soluble vitamin deficiency
  - Tx: Ursodeoxycholic acid (UDCA)

PSC (Primary Sclerosing Cholangitis):
  - Young men
  - IBD association (70% have UC)
  - Intra + extrahepatic bile duct strictures
  - MRCP: beading of bile ducts
  - ↑ Risk cholangiocarcinoma
  - Tx: supportive (no effective treatment)

Choledocholithiasis:
  - Stone in common bile duct
  - RUQ pain, jaundice
  - Ultrasound: dilated CBD
  - ERCP for stone extraction

Acute Cholangitis:
  - Infection of obstructed biliary tree
  - Charcot's triad (fever, RUQ pain, jaundice)
  - Reynolds' pentad (+ AMS, hypotension) = sepsis
  - Emergency: antibiotics + biliary drainage (ERCP)`,
                    clinicalPearls: [
                        "PBC: AMA+ is pathognomonic. Treat with UDCA to slow progression",
                        "PSC: 'onion skin' fibrosis on biopsy. Screen for cholangiocarcinoma (CA 19-9)",
                        "Cholangitis = biliary sepsis. Mortality high without urgent drainage",
                        "ERCP is therapeutic (stone extraction, stenting). MRCP is diagnostic only"
                    ]
                }
            },
            {
                id: "cirrhosis-hcc",
                name: "Cirrhosis & Hepatocellular Carcinoma",
                diseaseIds: [
                    "cirrhosis",
                    "hepatocellular-carcinoma"
                ],
                description: "End-stage liver disease with fibrosis and portal hypertension. HCC develops in cirrhotic livers.",
                subcategoryDetail: {
                    overview: "Cirrhosis = end result of chronic liver injury. Complications: portal hypertension (varices, ascites), hepatic encephalopathy, coagulopathy, HCC risk.",
                    keyFeatures: [
                        "Cirrhosis: irreversible fibrosis + regenerative nodules",
                        "Portal hypertension: varices, ascites, splenomegaly, caput medusae",
                        "Hepatic encephalopathy: asterixis, confusion (↑ ammonia)",
                        "HCC: cirrhosis is #1 risk factor. Screen with ultrasound + AFP q6mo"
                    ],
                    clinicalApproach: `CIRRHOSIS Complications (remember with "HAVOC"):
H - Hepatic encephalopathy
  - Asterixis, confusion
  - ↑ Ammonia
  - Tx: lactulose, rifaximin

A - Ascites
  - Portal HTN + hypoalbuminemia
  - SAAG >1.1 = portal HTN
  - Tx: Na restriction, diuretics (spironolactone + furosemide)
  - SBP prophylaxis if prior episode

V - Varices
  - Esophageal/gastric from portal HTN
  - Screen with EGD
  - Primary prophylaxis: non-selective BB (propranolol)
  - Acute bleed: octreotide + banding + antibiotics

O - Other: Coagulopathy (↓ clotting factors), hepatorenal syndrome

C - Cancer (HCC)
  - Screen every 6 months: ultrasound + AFP
  - Diagnosis: triphasic CT/MRI (arterial enhancement, venous washout)
  - Treatment: ablation, resection, transplant (early), sorafenib (advanced)`,
                    clinicalPearls: [
                        "Child-Pugh score: predicts mortality (bilirubin, albumin, INR, ascites, encephalopathy)",
                        "MELD score: used for liver transplant allocation",
                        "SBP (spontaneous bacterial peritonitis): ascites + fever/abdominal pain. Diagnose with paracentesis (PMN >250)",
                        "HCC surveillance: ultrasound + AFP every 6 months in all cirrhotics"
                    ]
                }
            }
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

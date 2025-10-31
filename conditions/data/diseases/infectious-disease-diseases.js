// Infectious Disease Diseases (Placeholder)
const infectiousDiseases = [
    {
        id: "community-acquired-pneumonia",
        name: "Community-Acquired Pneumonia",
        system: "infectious-disease",
        categories: ["respiratory-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["pneumonia", "strep-pneumo", "fever", "cough"],
        detail: {
            definition: "Pneumonia acquired outside healthcare setting. Strep pneumoniae most common. Fever, cough, dyspnea, pleuritic chest pain. CXR: lobar consolidation. CURB-65 for severity. Treat: macrolide or respiratory fluoroquinolone.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "urinary-tract-infection",
        name: "Urinary Tract Infection",
        system: "infectious-disease",
        categories: ["uti-kidney-infections"],
        severity: "low",
        acuity: "acute",
        tags: ["UTI", "cystitis", "dysuria", "E-coli"],
        detail: {
            definition: "Bladder infection. E. coli most common. Dysuria, frequency, urgency, suprapubic pain. UA: pyuria, bacteriuria, nitrites, leukocyte esterase. Urine culture >100k CFU/mL. Treat: nitrofurantoin, TMP-SMX (if susceptible), fluoroquinolone.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "pyelonephritis",
        name: "Pyelonephritis",
        system: "infectious-disease",
        categories: ["uti-kidney-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["kidney-infection", "CVA-tenderness", "fever"],
        detail: {
            definition: "Kidney infection. E. coli most common. Fever, chills, flank pain, CVA tenderness, N/V. UA and culture. Treat: fluoroquinolone or ceftriaxone x 7-14 days. Admit if septic/unable to tolerate PO.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "clostridioides-difficile-colitis",
        name: "Clostridioides difficile Colitis",
        system: "infectious-disease",
        categories: ["gi-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["C-diff", "diarrhea", "pseudomembranes", "antibiotic-associated"],
        detail: {
            definition: "Antibiotic-associated colitis. Watery diarrhea, abdominal pain, fever. Stool toxin assay (PCR or EIA). CT: colonic wall thickening. Colonoscopy: pseudomembranes. Treat: discontinue offending antibiotic, PO vancomycin or fidaxomicin. Severe/fulminant: add IV metronidazole, consider colectomy.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "cellulitis",
        name: "Cellulitis",
        system: "infectious-disease",
        categories: ["skin-soft-tissue-infections"],
        severity: "medium",
        acuity: "acute",
        tags: ["skin-infection", "erythema", "strep", "staph"],
        detail: {
            definition: "Bacterial skin infection (dermis and subcutaneous tissue). Strep pyogenes, S. aureus. Erythema, warmth, edema, tenderness. No clear demarcation. Treat: cephalexin or dicloxacillin. MRSA risk: add TMP-SMX or doxycycline.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "necrotizing-fasciitis",
        name: "Necrotizing Fasciitis",
        system: "infectious-disease",
        categories: ["skin-soft-tissue-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["surgical-emergency", "gas-gangrene", "LRINEC"],
        detail: {
            definition: "Life-threatening soft tissue infection. Pain out of proportion, crepitus, bullae, systemic toxicity. Group A Strep (type II) or polymicrobial (type I). LRINEC score. Surgical emergency: immediate debridement + broad-spectrum antibiotics.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "hiv-aids",
        name: "HIV/AIDS",
        system: "infectious-disease",
        categories: ["sexually-transmitted-infections", "opportunistic-infections"],
        severity: "high",
        acuity: "chronic",
        tags: ["retrovirus", "CD4", "opportunistic-infections"],
        detail: {
            definition: "Human immunodeficiency virus. Acute retroviral syndrome → latency (years) → AIDS (CD4 <200). Opportunistic infections: PCP, Toxoplasma, Cryptococcus, CMV, MAC. Screen: 4th generation HIV Ag/Ab. Confirm: Western blot or HIV RNA. Treat: combination ART (≥3 drugs from ≥2 classes).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "syphilis",
        name: "Syphilis",
        system: "infectious-disease",
        categories: ["sexually-transmitted-infections"],
        severity: "medium",
        acuity: "chronic",
        tags: ["STI", "spirochete", "chancre", "treponema"],
        detail: {
            definition: "Treponema pallidum. Primary (painless chancre), secondary (rash palms/soles, condyloma lata, lymphadenopathy), latent (asymptomatic), tertiary (gummas, aortitis, neurosyphilis, Argyll Robertson pupils). Screen: RPR/VDRL. Confirm: FTA-ABS or TP-PA. Treat: benzathine penicillin G.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "endocarditis",
        name: "Infective Endocarditis",
        system: "infectious-disease",
        categories: ["systemic-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["valve-infection", "bacteremia", "Duke-criteria"],
        detail: {
            definition: "Infection of heart valve. S. aureus (acute, IVDU), Strep viridans (subacute, poor dentition), Enterococcus, HACEK, fungal. Fever, new murmur, peripheral stigmata (Janeway, Osler, Roth spots, splinter hemorrhages). Duke criteria. 3 sets blood cultures, TTE → TEE. Treat: prolonged IV antibiotics ± surgery.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "sepsis-septic-shock",
        name: "Sepsis & Septic Shock",
        system: "infectious-disease",
        categories: ["fever-sepsis"],
        severity: "high",
        acuity: "acute",
        tags: ["emergency", "SIRS", "hypotension", "lactate"],
        detail: {
            definition: "Life-threatening organ dysfunction due to dysregulated host response to infection. SIRS criteria: temp >38 or <36, HR >90, RR >20, WBC >12k or <4k. Sepsis: infection + SIRS + organ dysfunction (SOFA score). Septic shock: sepsis + hypotension refractory to fluids + lactate >2. Treat: early antibiotics (<1hr), IV fluids (30mL/kg), vasopressors (norepinephrine), source control.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "fever-unknown-origin",
        name: "Fever of Unknown Origin (FUO)",
        system: "infectious-disease",
        categories: ["fever-sepsis"],
        severity: "medium",
        acuity: "chronic",
        tags: ["prolonged-fever", "diagnostic-challenge"],
        detail: {
            definition: "Fever >38.3°C for >3 weeks without diagnosis after 1 week investigation. Causes: infection (TB, abscess, endocarditis), malignancy (lymphoma, RCC), autoimmune (SLE, temporal arteritis, Still's disease), drug fever. Workup: detailed history, exam, basic labs, cultures, imaging (CT chest/abdomen/pelvis), consider PET scan, biopsy if indicated.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "pneumocystis-pneumonia",
        name: "Pneumocystis jirovecii Pneumonia (PCP)",
        system: "infectious-disease",
        categories: ["opportunistic-infections", "respiratory-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["HIV", "CD4<200", "hypoxia", "TMP-SMX"],
        detail: {
            definition: "Fungal pneumonia in immunocompromised (HIV with CD4 <200, transplant, high-dose steroids). Subacute dyspnea, dry cough, fever, hypoxia (worse with exertion). ↑ LDH. CXR: bilateral diffuse interstitial infiltrates (ground-glass, bat-wing). Induced sputum or BAL: silver stain, immunofluorescence. Treat: TMP-SMX (high-dose) + prednisone if PaO2 <70, prophylaxis if CD4 <200.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "cytomegalovirus",
        name: "Cytomegalovirus (CMV)",
        system: "infectious-disease",
        categories: ["opportunistic-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["HIV", "transplant", "retinitis", "colitis"],
        detail: {
            definition: "Herpesvirus causing disease in immunocompromised (HIV CD4 <50, transplant). CMV retinitis (leading cause of blindness in AIDS - cotton-wool spots, hemorrhages), colitis (bloody diarrhea), esophagitis, pneumonitis. Diagnosis: CMV PCR (viral load), biopsy (owl's eye inclusions). Treat: ganciclovir or valganciclovir, foscarnet if resistant.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "cryptococcal-meningitis",
        name: "Cryptococcal Meningitis",
        system: "infectious-disease",
        categories: ["opportunistic-infections", "cns-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["HIV", "CD4<100", "India-ink", "yeast"],
        detail: {
            definition: "Fungal meningitis (Cryptococcus neoformans). HIV CD4 <100. Subacute headache, fever, altered mental status. ↑ intracranial pressure. LP: ↑ opening pressure, ↑ WBC (lymphocytes), ↑ protein, ↓ glucose. India ink stain (budding yeast with capsule), cryptococcal antigen (CrAg), culture. Treat: amphotericin B + flucytosine (induction) → fluconazole (consolidation/maintenance), therapeutic LPs for ↑ pressure.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "toxoplasma-encephalitis",
        name: "Toxoplasma Encephalitis",
        system: "infectious-disease",
        categories: ["opportunistic-infections", "cns-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["HIV", "CD4<100", "ring-enhancing-lesions"],
        detail: {
            definition: "CNS toxoplasmosis (Toxoplasma gondii). HIV CD4 <100. Reactivation of latent infection. Focal neurologic deficits, headache, seizures, altered mental status. MRI: multiple ring-enhancing lesions (basal ganglia, corticomedullary junction). Positive toxoplasma IgG (latent infection). Treat: pyrimethamine + sulfadiazine + leucovorin. Prophylaxis: TMP-SMX (same as PCP).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "mycobacterium-avium-complex",
        name: "Mycobacterium avium Complex (MAC)",
        system: "infectious-disease",
        categories: ["opportunistic-infections"],
        severity: "high",
        acuity: "chronic",
        tags: ["HIV", "CD4<50", "disseminated"],
        detail: {
            definition: "Disseminated MAC infection in advanced AIDS (CD4 <50). Fever, night sweats, weight loss, diarrhea, hepatosplenomegaly, lymphadenopathy. Anemia, ↑ Alk Phos. Blood culture (mycobacterial culture). Treat: clarithromycin + ethambutol (± rifabutin). Prophylaxis: azithromycin or clarithromycin if CD4 <50.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "osteomyelitis",
        name: "Osteomyelitis",
        system: "infectious-disease",
        categories: ["systemic-infections", "bone-disorders"],
        severity: "high",
        acuity: "acute",
        tags: ["bone-infection", "staph-aureus", "diabetic-foot"],
        detail: {
            definition: "Bone infection. Hematogenous (S. aureus in children - long bones, vertebrae in adults), contiguous (diabetic foot ulcers, trauma), direct inoculation. Pain, fever, ↑ ESR/CRP. X-ray: periosteal reaction, lytic lesions (takes 2 weeks). MRI most sensitive. Bone biopsy/culture (gold standard). Treat: prolonged IV antibiotics (4-6 weeks), surgical debridement if needed. Vertebral: S. aureus, TB (Pott disease).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "gastroenteritis-infectious",
        name: "Infectious Gastroenteritis",
        system: "infectious-disease",
        categories: ["gi-infections"],
        severity: "medium",
        acuity: "acute",
        tags: ["diarrhea", "vomiting", "dehydration"],
        detail: {
            definition: "Acute diarrhea ± vomiting. Viral (norovirus, rotavirus - watery), bacterial (invasive: Salmonella, Shigella, Campylobacter, EHEC - bloody; toxin: S. aureus, B. cereus, C. perfringens - rapid onset), parasitic (Giardia, Cryptosporidium, Entamoeba). Assess hydration. Stool studies if bloody, severe, immunocompromised, or >7 days. Treat: oral rehydration (most important), antibiotics only if invasive bacterial (cipro or azithro) or severe. Avoid antimotility agents if bloody diarrhea.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "malaria",
        name: "Malaria",
        system: "infectious-disease",
        categories: ["tropical-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["Plasmodium", "fever", "hemolysis", "travel"],
        detail: {
            definition: "Plasmodium (P. falciparum most severe). Mosquito-borne. Cyclic fever (every 48-72hrs), chills, sweats, headache, N/V. Hemolytic anemia, thrombocytopenia, jaundice. Complications: cerebral malaria, ARDS, renal failure, DIC. Blood smear (thick and thin) with Giemsa stain. Treat: chloroquine (sensitive areas), artemisinin-based combination therapy or atovaquone-proguanil (resistant/severe). Prophylaxis for travelers.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "dengue-fever",
        name: "Dengue Fever",
        system: "infectious-disease",
        categories: ["tropical-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["arbovirus", "hemorrhagic-fever", "breakbone-fever"],
        detail: {
            definition: "Dengue virus (flavivirus). Mosquito-borne (Aedes). Tropical/subtropical. High fever, severe headache, retro-orbital pain, myalgias/arthralgias (breakbone fever), rash (maculopapular). Leukopenia, thrombocytopenia. Dengue hemorrhagic fever/shock syndrome: plasma leakage, bleeding, shock. Tourniquet test positive. PCR or NS1 antigen early, IgM/IgG later. Treat: supportive (IV fluids, avoid NSAIDs/aspirin due to bleeding risk).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "typhoid-fever",
        name: "Typhoid Fever (Enteric Fever)",
        system: "infectious-disease",
        categories: ["tropical-infections", "gi-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["Salmonella-typhi", "rose-spots", "step-ladder-fever"],
        detail: {
            definition: "Salmonella typhi. Fecal-oral transmission (contaminated water/food). Step-ladder fever, relative bradycardia, rose spots (faint salmon-colored macules on trunk), hepatosplenomegaly, constipation/diarrhea. Complications: intestinal perforation, GI bleeding. Diagnosis: blood culture (early), stool culture (later), Widal test. Treat: ceftriaxone or azithromycin (fluoroquinolone if susceptible). Carrier state (chronic infection in gallbladder).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "chlamydia-gonorrhea",
        name: "Chlamydia & Gonorrhea",
        system: "infectious-disease",
        categories: ["sexually-transmitted-infections"],
        severity: "medium",
        acuity: "acute",
        tags: ["STI", "urethritis", "cervicitis", "PID"],
        detail: {
            definition: "Chlamydia trachomatis and Neisseria gonorrhoeae (often coinfection). Urethritis (dysuria, discharge), cervicitis (vaginal discharge, bleeding), PID (abdominal/pelvic pain, fever, cervical motion tenderness). Asymptomatic common (especially chlamydia in women). Complications: infertility, ectopic pregnancy, chronic pelvic pain, Fitz-Hugh-Curtis syndrome (perihepatitis). NAAT (urine or swab). Treat: azithromycin or doxycycline (chlamydia), ceftriaxone (gonorrhea) - treat both empirically.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "herpes-simplex-genital",
        name: "Genital Herpes (HSV-2)",
        system: "infectious-disease",
        categories: ["sexually-transmitted-infections"],
        severity: "low",
        acuity: "chronic",
        tags: ["STI", "vesicles", "recurrent", "viral"],
        detail: {
            definition: "HSV-2 (genital, can be HSV-1). Painful grouped vesicles on erythematous base on genitals. Primary infection worse (systemic symptoms, longer duration). Recurrent outbreaks (prodrome of tingling). Viral culture, PCR, Tzanck smear. Complications: aseptic meningitis, neonatal HSV (vertical transmission). Treat: acyclovir or valacyclovir (suppressive therapy for frequent recurrences), cesarean if active lesions at delivery.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "lyme-disease",
        name: "Lyme Disease",
        system: "infectious-disease",
        categories: ["systemic-infections"],
        severity: "medium",
        acuity: "chronic",
        tags: ["Borrelia", "tick-borne", "erythema-migrans", "bulls-eye"],
        detail: {
            definition: "Borrelia burgdorferi. Ixodes tick (deer tick). Stage 1 (early localized): erythema migrans (bulls-eye rash), flu-like symptoms. Stage 2 (early disseminated): multiple erythema migrans, AV block, facial nerve palsy (bilateral), aseptic meningitis. Stage 3 (late): arthritis (knee), encephalopathy. ELISA → Western blot. Treat: doxycycline (oral for early), ceftriaxone (IV for neuro/cardiac).",
            overview: "[Content coming soon]"
        }
    },
    { id: "tuberculosis", name: "Tuberculosis", system: "infectious-disease", categories: ["respiratory-infections"], severity: "high", acuity: "chronic", tags: ["Mycobacterium", "AFB", "granulomas"], detail: { definition: "Mycobacterium tuberculosis. Primary (usually asymptomatic, Ghon complex) vs reactivation (apical, cavitary). Pulmonary: chronic cough, hemoptysis, night sweats, weight loss. Extrapulmonary: lymphadenitis (scrofula), meningitis, Pott disease (vertebral osteomyelitis), miliary (disseminated). PPD/IGRA positive. CXR: upper lobe infiltrates, cavitation. Sputum AFB smear/culture (gold standard). Treat: RIPE x2 months (Rifampin, Isoniazid, Pyrazinamide, Ethambutol), then RI x4 months. Latent TB: isoniazid x9 months or rifampin x4 months. Monitor: baseline LFTs, visual acuity (ethambutol). Notify public health.", overview: "[Content coming soon]" } },
    { id: "hiv-aids", name: "HIV/AIDS", system: "infectious-disease", categories: ["opportunistic-infections"], severity: "high", acuity: "chronic", tags: ["retrovirus", "CD4", "opportunistic"], detail: { definition: "Human Immunodeficiency Virus. Retrovirus. Transmission: sexual, blood, vertical. Acute retroviral syndrome (2-4 weeks post-exposure): fever, rash, lymphadenopathy, pharyngitis (mono-like). Latency period (years). AIDS: CD4 <200 or AIDS-defining illness. Opportunistic infections: CD4 <200 (PCP, esophageal candidiasis), <100 (toxoplasma, cryptococcus), <50 (CMV, MAC). HIV RNA PCR (viral load), CD4 count. Treat: ART (combination antiretroviral therapy - 2 NRTIs + INSTI or PI). Prophylaxis: CD4 <200 → TMP-SMX (PCP), <100 → azithromycin (MAC), <50 → valganciclovir (CMV if high risk). Undetectable = untransmittable (U=U).", overview: "[Content coming soon]" } },
    { id: "malaria", name: "Malaria", system: "infectious-disease", categories: ["tropical-infections"], severity: "high", acuity: "acute", tags: ["Plasmodium", "mosquito", "cyclical-fever"], detail: { definition: "Plasmodium (P. falciparum most deadly, P. vivax/ovale have dormant liver forms). Anopheles mosquito. Cyclical fever/chills every 48-72hrs (depends on species), headache, myalgias, N/V, splenomegaly. Falciparum: cerebral malaria, severe anemia, ARDS, renal failure, high parasitemia (>5%). Blood smear: intracellular parasites (ring forms, trophozoites, schizonts). Treat: Uncomplicated → artemisinin combination therapy (ACT) or chloroquine (if sensitive). Severe falciparum → IV artesunate. Vivax/ovale → add primaquine (eradicate liver hypnozoites - check G6PD first). Prophylaxis for travelers: atovaquone-proguanil, doxycycline, or mefloquine.", overview: "[Content coming soon]" } },
    { id: "toxoplasmosis", name: "Toxoplasmosis", system: "infectious-disease", categories: ["opportunistic-infections"], severity: "high", acuity: "acute", tags: ["Toxoplasma", "cat", "brain-abscess"], detail: { definition: "Toxoplasma gondii. Cat feces, undercooked meat. Immunocompetent: usually asymptomatic or mild lymphadenopathy. Immunocompromised (HIV CD4 <100): brain abscess (ring-enhancing lesions, multiple). Congenital: chorioretinitis, hydrocephalus, intracranial calcifications, intellectual disability (classic triad: chorioretinitis, hydrocephalus, intracranial calcifications). Serology: IgM (acute), IgG (prior/latent). MRI brain: multiple ring-enhancing lesions (vs lymphoma - single). Treat: pyrimethamine + sulfadiazine + leucovorin. Prophylaxis in HIV if CD4 <100: TMP-SMX. Pregnant women: avoid cat litter, cook meat thoroughly.", overview: "[Content coming soon]" } },
    { id: "cmv", name: "Cytomegalovirus (CMV)", system: "infectious-disease", categories: ["opportunistic-infections"], severity: "high", acuity: "acute", tags: ["herpesvirus", "retinitis", "transplant"], detail: { definition: "Human herpesvirus 5 (HHV-5). Transmission: close contact, sexual, transplant, vertical. Immunocompetent: asymptomatic or mono-like (heterophile negative). Immunocompromised (HIV CD4 <50, transplant): retinitis (cotton-wool spots, hemorrhages → blindness), esophagitis (linear ulcers), colitis (bloody diarrhea), pneumonitis, encephalitis. Congenital: most common congenital viral infection. Petechiae (blueberry muffin baby), microcephaly, periventricular calcifications, SNHL, chorioretinitis, hepatosplenomegaly. CMV IgM/IgG, PCR (viral load). Treat: ganciclovir or valganciclovir (retinitis), foscarnet (resistant). Prophylaxis in transplant: valganciclovir.", overview: "[Content coming soon]" } },
    { id: "ebv-mono", name: "Epstein-Barr Virus / Infectious Mononucleosis", system: "infectious-disease", categories: ["systemic-infections"], severity: "low", acuity: "acute", tags: ["kissing-disease", "atypical-lymphocytes", "heterophile"], detail: { definition: "Epstein-Barr virus (HHV-4). Transmission: saliva (kissing disease). Teens/young adults. Classic triad: fever, pharyngitis (tonsillar exudates), posterior cervical lymphadenopathy. Splenomegaly (50%), hepatomegaly, palatal petechiae. Avoid contact sports (splenic rupture risk). Amoxicillin/ampicillin causes maculopapular rash (not true allergy). Labs: atypical lymphocytes (Downey cells), ↑ LFTs. Heterophile antibody (Monospot) positive. EBV VCA IgM (acute). Complications: splenic rupture, airway obstruction, hemolytic anemia (cold agglutinins). Treat: supportive, avoid contact sports x3-4 weeks. Steroids if severe pharyngitis/airway obstruction.", overview: "[Content coming soon]" } },
    { id: "lyme-disease-detail", name: "Lyme Disease (Detailed)", system: "infectious-disease", categories: ["systemic-infections"], severity: "medium", acuity: "chronic", tags: ["Borrelia", "tick", "erythema-migrans", "stage"], detail: { definition: "Borrelia burgdorferi. Ixodes scapularis tick (deer tick), endemic in Northeast/Upper Midwest. Stage 1 (days-weeks): erythema migrans (bulls-eye rash at bite site, pathognomonic), flu-like symptoms. Stage 2 (weeks-months): multiple erythema migrans, carditis (AV block - 1st/2nd/3rd degree), bilateral facial nerve palsy (CN VII), aseptic meningitis, radiculoneuropathy. Stage 3 (months-years): arthritis (monoarticular, knee), chronic neurologic (encephalopathy, polyneuropathy). Diagnosis: clinical (early), ELISA → Western blot (2-tier if negative or equivocal). PCR synovial fluid (arthritis). Treat: Early/localized → doxycycline x14-21 days (or amoxicillin if <8yo/pregnant). Neuro/cardiac → IV ceftriaxone x14-28 days. Arthritis → doxycycline x28 days. Prevention: tick checks, remove within 24-48hrs.", overview: "[Content coming soon]" } },
    { id: "rmsf", name: "Rocky Mountain Spotted Fever", system: "infectious-disease", categories: ["systemic-infections"], severity: "high", acuity: "acute", tags: ["Rickettsia", "tick", "rash"], detail: { definition: "Rickettsia rickettsii. Dog tick, wood tick. Southeast US (not Rocky Mountains). Fever, headache, myalgias → rash (appears day 3-5, starts at wrists/ankles → spreads centrally to trunk, includes palms/soles). Petechial rash (vasculitis). Complications: DIC, ARDS, meningitis, renal failure, death if untreated. Clinical diagnosis (don't wait for serology). Treat: doxycycline (all ages including children - don't wait for confirmation, start empirically if suspected).", overview: "[Content coming soon]" } },
    { id: "babesiosis", name: "Babesiosis", system: "infectious-disease", categories: ["tropical-infections"], severity: "medium", acuity: "acute", tags: ["parasite", "tick", "hemolysis"], detail: { definition: "Babesia microti. Ixodes tick (same as Lyme - coinfection possible). Intraerythrocytic parasite (like malaria). Asymptomatic to severe (splenectomized, elderly, immunocompromised). Fever, chills, hemolytic anemia, jaundice. Blood smear: intraerythrocytic ring forms, Maltese cross (pathognomonic, rare). Treat: atovaquone + azithromycin (mild-moderate) or clindamycin + quinine (severe). Exchange transfusion if severe.", overview: "[Content coming soon]" } },
    { id: "leishmaniasis", name: "Leishmaniasis", system: "infectious-disease", categories: ["tropical-infections"], severity: "high", acuity: "chronic", tags: ["parasite", "sandfly", "visceral"], detail: { definition: "Leishmania. Sandfly vector. Cutaneous (most common - skin ulcer at bite site), mucocutaneous (destructive nasal/oral lesions), visceral/kala-azar (fever, hepatosplenomegaly, pancytopenia - fatal if untreated). Endemic: Middle East, South America, Africa. Diagnosis: amastigotes in macrophages on biopsy/aspirate. Treat: liposomal amphotericin B (visceral), local therapy or systemic (cutaneous - miltefosine, sodium stibogluconate).", overview: "[Content coming soon]" } }
];

export default infectiousDiseases;

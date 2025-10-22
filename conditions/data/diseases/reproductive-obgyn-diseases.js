// Reproductive/OB-GYN Diseases (Placeholder)
const reproductiveObgynDiseases = [
    {
        id: "preeclampsia",
        name: "Preeclampsia",
        system: "reproductive-obgyn",
        categories: ["pregnancy-complications"],
        severity: "high",
        acuity: "acute",
        tags: ["HTN", "proteinuria", "pregnancy", "magnesium"],
        detail: {
            definition: "HTN (≥140/90) + proteinuria or end-organ damage after 20 weeks gestation. Severe features: BP ≥160/110, ↑ Cr, ↓ platelets, ↑ transaminases, pulmonary edema, visual symptoms, RUQ pain. Complications: eclampsia (seizures), HELLP syndrome. Treat: magnesium sulfate (seizure prophylaxis), BP control (labetalol, hydralazine), delivery (definitive - ≥37wks or if severe features).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "eclampsia",
        name: "Eclampsia",
        system: "reproductive-obgyn",
        categories: ["pregnancy-complications"],
        severity: "high",
        acuity: "acute",
        tags: ["seizures", "preeclampsia", "emergency"],
        detail: {
            definition: "Seizures in setting of preeclampsia. Medical emergency. Treat: IV magnesium sulfate (loading + maintenance), control BP, supportive care (airway, O2), expedite delivery.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "gestational-diabetes",
        name: "Gestational Diabetes",
        system: "reproductive-obgyn",
        categories: ["pregnancy-complications"],
        severity: "medium",
        acuity: "chronic",
        tags: ["diabetes", "pregnancy", "macrosomia", "GTT"],
        detail: {
            definition: "Glucose intolerance diagnosed during pregnancy. Screen 24-28 weeks: 1hr 50g glucose challenge (≥140 → 3hr 100g GTT). Complications: macrosomia, shoulder dystocia, polyhydramnios, neonatal hypoglycemia. Maternal risk of T2DM later. Treat: diet modification, glucose monitoring, insulin if needed (metformin alternative). Induction at 39-40 weeks.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "placenta-previa",
        name: "Placenta Previa",
        system: "reproductive-obgyn",
        categories: ["pregnancy-complications"],
        severity: "high",
        acuity: "acute",
        tags: ["placenta", "painless-bleeding", "c-section"],
        detail: {
            definition: "Placenta covers internal cervical os. Painless vaginal bleeding in 2nd/3rd trimester. Risk: prior C-section, multiparity, advanced maternal age. Ultrasound diagnosis. NO digital vaginal exam. Complications: hemorrhage, placenta accreta. Treat: pelvic rest, cesarean delivery (scheduled 36-37 weeks or emergent if unstable).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "placental-abruption",
        name: "Placental Abruption",
        system: "reproductive-obgyn",
        categories: ["pregnancy-complications"],
        severity: "high",
        acuity: "acute",
        tags: ["placenta", "painful-bleeding", "fetal-distress"],
        detail: {
            definition: "Premature separation of placenta from uterus. Painful vaginal bleeding, rigid/tender uterus, fetal distress. Risk: HTN, trauma, cocaine, smoking, prior abruption. Clinical diagnosis (ultrasound often negative). Complications: DIC, hemorrhagic shock, fetal demise. Treat: stabilize mother, emergent C-section if fetal distress or severe, vaginal delivery if mild and stable.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "ectopic-pregnancy",
        name: "Ectopic Pregnancy",
        system: "reproductive-obgyn",
        categories: ["pregnancy-complications"],
        severity: "high",
        acuity: "acute",
        tags: ["tubal", "rupture", "hCG", "emergency"],
        detail: {
            definition: "Implantation outside uterus (fallopian tube 95%). Missed period, abdominal pain, vaginal bleeding. Risk: PID, prior ectopic, tubal surgery, IUD. ↑ hCG but lower than expected, no IUP on ultrasound. Ruptured ectopic: acute abdomen, hemodynamic instability, surgical emergency. Treat: unruptured (methotrexate if hCG <5000, small mass, hemodynamically stable; or salpingectomy), ruptured (emergent surgery).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "polycystic-ovary-syndrome",
        name: "Polycystic Ovary Syndrome (PCOS)",
        system: "reproductive-obgyn",
        categories: ["menstrual-disorders"],
        severity: "medium",
        acuity: "chronic",
        tags: ["oligomenorrhea", "hyperandrogenism", "infertility", "insulin-resistance"],
        detail: {
            definition: "Most common endocrine disorder in women. Rotterdam criteria (2 of 3): oligoovulation/anovulation, hyperandrogenism (hirsutism, acne), polycystic ovaries on ultrasound. Associated with insulin resistance, obesity, metabolic syndrome, infertility. ↑ LH:FSH ratio, ↑ testosterone. Treat: lifestyle modification, OCPs (regulate cycles, reduce androgens), metformin (insulin resistance), spironolactone (hirsutism), clomiphene/letrozole (infertility).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "endometriosis",
        name: "Endometriosis",
        system: "reproductive-obgyn",
        categories: ["pelvic-pain-masses"],
        severity: "medium",
        acuity: "chronic",
        tags: ["dysmenorrhea", "infertility", "chocolate-cyst"],
        detail: {
            definition: "Ectopic endometrial tissue outside uterus. Cyclic pelvic pain, dysmenorrhea, dyspareunia, dyschezia, infertility. Exam: uterosacral nodularity, fixed retroverted uterus, adnexal mass (endometrioma/chocolate cyst). Definitive diagnosis: laparoscopy with biopsy (powder burn lesions). CA-125 may be elevated. Treat: NSAIDs, OCPs or progestins (continuous), GnRH agonists, laparoscopic excision/ablation.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "uterine-fibroids",
        name: "Uterine Fibroids (Leiomyomas)",
        system: "reproductive-obgyn",
        categories: ["pelvic-pain-masses"],
        severity: "low",
        acuity: "chronic",
        tags: ["menorrhagia", "bulk-symptoms", "benign"],
        detail: {
            definition: "Benign smooth muscle tumors of uterus. Very common (40-60% by age 35). Menorrhagia, bulk symptoms (pelvic pressure, urinary frequency), infertility. Enlarged, irregular uterus on exam. Ultrasound confirms. Submucosal (bleed most), intramural, subserosal. Treat: expectant if asymptomatic, OCPs/NSAIDs for menorrhagia, GnRH agonists (shrink pre-op), myomectomy (preserve fertility), hysterectomy (definitive), uterine artery embolization.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "pelvic-inflammatory-disease",
        name: "Pelvic Inflammatory Disease (PID)",
        system: "reproductive-obgyn",
        categories: ["gynecologic-infections"],
        severity: "high",
        acuity: "acute",
        tags: ["STI", "chlamydia", "gonorrhea", "infertility"],
        detail: {
            definition: "Infection of upper genital tract (endometritis, salpingitis, oophoritis, tubo-ovarian abscess). Chlamydia/gonorrhea ascend from cervix. Lower abdominal pain + cervical motion tenderness + adnexal tenderness. Fever, purulent cervical discharge, ↑ WBC/ESR/CRP. Complications: chronic pelvic pain, infertility (tubal scarring), ectopic pregnancy, TOA (↑ risk with IUD). Treat: outpatient (ceftriaxone + doxycycline ± metronidazole) or inpatient if severe/TOA/pregnant (IV cefoxitin/cefotetan + doxycycline).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "bacterial-vaginosis",
        name: "Bacterial Vaginosis",
        system: "reproductive-obgyn",
        categories: ["gynecologic-infections"],
        severity: "low",
        acuity: "acute",
        tags: ["Gardnerella", "fishy-odor", "clue-cells"],
        detail: {
            definition: "Overgrowth of anaerobes (Gardnerella vaginalis). Thin, gray, malodorous (fishy) discharge. Amsel criteria (3 of 4): thin gray discharge, clue cells on wet mount, pH >4.5, positive whiff test (KOH). Treat: metronidazole or clindamycin. Treat in pregnancy (↑ risk preterm labor).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "vulvovaginal-candidiasis",
        name: "Vulvovaginal Candidiasis",
        system: "reproductive-obgyn",
        categories: ["gynecologic-infections"],
        severity: "low",
        acuity: "acute",
        tags: ["yeast", "Candida", "pruritus"],
        detail: {
            definition: "Candida albicans. Thick, white, cottage cheese discharge. Vulvar pruritus, erythema, edema. Risk: antibiotics, diabetes, pregnancy, immunosuppression. Wet mount: pseudohyphae, budding yeast. pH normal (<4.5). Treat: topical azoles (clotrimazole, miconazole) or oral fluconazole.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "cervical-cancer",
        name: "Cervical Cancer",
        system: "reproductive-obgyn",
        categories: ["gynecologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["HPV", "squamous-cell", "Pap-smear"],
        detail: {
            definition: "HPV (16, 18) → dysplasia (CIN) → invasive cancer. Squamous cell (80%) vs adenocarcinoma. Postcoital bleeding, abnormal vaginal bleeding. Pap smear screening + HPV testing. Colposcopy with biopsy if abnormal. Staging: clinical (I-IV). Treat: early stage (cone biopsy, trachelectomy, or hysterectomy), advanced (chemoradiation). Prevention: HPV vaccine (Gardasil 9).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "ovarian-cancer",
        name: "Ovarian Cancer",
        system: "reproductive-obgyn",
        categories: ["gynecologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["epithelial", "CA-125", "ascites", "BRCA"],
        detail: {
            definition: "Epithelial ovarian cancer (90%) - serous most common. Often late presentation (70% stage III/IV). Abdominal distension, early satiety, pelvic/abdominal pain, bloating. Pelvic mass, ascites. CA-125 elevated. Ultrasound, CT/MRI. Risk: BRCA1/2 mutation, family history, nulliparity. Treat: surgical staging/debulking + platinum-based chemotherapy. PARP inhibitors if BRCA mutation.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "endometrial-cancer",
        name: "Endometrial Cancer",
        system: "reproductive-obgyn",
        categories: ["gynecologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["postmenopausal-bleeding", "adenocarcinoma", "Lynch-syndrome"],
        detail: {
            definition: "Most common gynecologic cancer. Endometrioid adenocarcinoma (Type I - estrogen-driven, better prognosis) vs serous/clear cell (Type II - p53, worse prognosis). Postmenopausal bleeding (most common presentation). Risk: unopposed estrogen (obesity, PCOS, HRT, tamoxifen), Lynch syndrome. Endometrial biopsy or D&C. Treat: hysterectomy + BSO ± staging (lymph nodes). Adjuvant radiation/chemo if high-grade or advanced.",
            overview: "[Content coming soon]"
        }
    }
];

export default reproductiveObgynDiseases;

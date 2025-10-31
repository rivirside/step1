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
    },
    { id: "pcos-detail", name: "Polycystic Ovary Syndrome (PCOS)", system: "reproductive-obgyn", categories: ["menstrual-disorders"], severity: "medium", acuity: "chronic", tags: ["hyperandrogenism", "anovulation", "insulin-resistance"], detail: { definition: "Most common endocrine disorder in women of reproductive age. Rotterdam criteria (2 of 3): oligo/anovulation, hyperandrogenism (clinical: hirsutism, acne OR biochemical: ↑ androgens), polycystic ovaries on ultrasound. Irregular periods, infertility, hirsutism, acne, obesity, acanthosis nigricans. Insulin resistance → ↑ risk T2DM, metabolic syndrome. ↑ LH:FSH ratio, ↑ testosterone, ↑ DHEAS. Ultrasound: ≥12 follicles per ovary or ovarian volume >10mL. Treat: OCPs (regulate cycles, ↓ androgens), metformin (insulin resistance, induce ovulation), spironolactone (anti-androgen for hirsutism), clomiphene or letrozole (induce ovulation for infertility), weight loss.", overview: "[Content coming soon]" } },
    { id: "endometriosis-detail", name: "Endometriosis", system: "reproductive-obgyn", categories: ["pelvic-pain-masses"], severity: "high", acuity: "chronic", tags: ["dysmenorrhea", "infertility", "chocolate-cysts"], detail: { definition: "Endometrial tissue outside uterus. Ovaries (most common - endometriomas/chocolate cysts), peritoneum, cul-de-sac, bladder, bowel. Dysmenorrhea (worsens over time), dyspareunia, dyschezia (painful defecation), chronic pelvic pain, infertility (30-50%). Exam: fixed retroverted uterus, nodularity in cul-de-sac, adnexal masses. CA-125 may be elevated (non-specific). Ultrasound: endometriomas. Definitive diagnosis: laparoscopy with biopsy (powder-burn lesions, chocolate cysts). Treat: NSAIDs, OCPs or continuous progesterone (suppress menstruation), GnRH agonists (induce medical menopause), surgery (ablation/excision of lesions, hysterectomy + BSO if severe/refractory).", overview: "[Content coming soon]" } },
    { id: "leiomyomas", name: "Uterine Leiomyomas (Fibroids)", system: "reproductive-obgyn", categories: ["pelvic-pain-masses"], severity: "medium", acuity: "chronic", tags: ["menorrhagia", "bulk-symptoms", "benign"], detail: { definition: "Benign smooth muscle tumors. Most common pelvic tumor in women (20-40%). Estrogen-dependent. Intramural (most common, within myometrium), submucosal (protrude into cavity - cause bleeding), subserosal (outward - less bleeding, more bulk symptoms). Menorrhagia (iron deficiency anemia), pelvic pressure, urinary frequency (bladder compression), constipation (rectal compression), infertility, pregnancy complications. Enlarged irregular uterus on exam. Ultrasound or MRI. Treat: observation if asymptomatic, NSAIDs/tranexamic acid (menorrhagia), OCPs or progesterone (suppress growth), GnRH agonists (shrink temporarily before surgery), UAE (uterine artery embolization), myomectomy (preserve fertility), hysterectomy (definitive).", overview: "[Content coming soon]" } },
    { id: "ovarian-cyst-detail", name: "Ovarian Cysts", system: "reproductive-obgyn", categories: ["pelvic-pain-masses"], severity: "medium", acuity: "acute", tags: ["functional-cyst", "torsion", "rupture"], detail: { definition: "Functional (follicular, corpus luteum - most common, resolve spontaneously) vs pathologic (dermoid/teratoma, cystadenoma, endometrioma, malignancy). Follicular cyst: anovulation, estrogen-producing. Corpus luteum cyst: progesterone-producing, may hemorrhage/rupture. Often asymptomatic. Acute pain if rupture or torsion. Pelvic exam: adnexal mass. Ultrasound: simple (thin-walled, anechoic - benign) vs complex (septations, solid components, vascularity - concerning for malignancy). CA-125 if suspicious for malignancy (postmenopausal, complex features). Treat: Functional <5cm → observe, repeat ultrasound in 6-8 weeks (usually resolves). Persistent or large → surgery. Dermoid/endometrioma/cystadenoma → surgical excision. Malignancy concern → staging surgery (TAH-BSO, omentectomy, lymph nodes).", overview: "[Content coming soon]" } },
    { id: "ectopic-pregnancy-detail", name: "Ectopic Pregnancy", system: "reproductive-obgyn", categories: ["pregnancy-complications"], severity: "high", acuity: "acute", tags: ["emergency", "PID", "tubal"], detail: { definition: "Implantation outside uterus. Fallopian tube (95%, ampulla most common). Risk: PID/STI (scarring), prior ectopic, tubal surgery, IUD, smoking, endometriosis. Classic triad: amenorrhea, vaginal bleeding, abdominal pain. May present with shock if ruptured. β-hCG positive but lower than expected for dates, doesn't double every 48h. Transvaginal ultrasound: no intrauterine pregnancy, may see adnexal mass, free fluid (blood). β-hCG discriminatory zone: should see intrauterine pregnancy on TVUS if β-hCG >1500-2000. Treat: Stable hemodynamically + unruptured + β-hCG <5000 + no fetal cardiac activity → methotrexate (single or multi-dose). Unstable, ruptured, or failed methotrexate → surgery (salpingectomy vs salpingostomy).", overview: "[Content coming soon]" } },
    { id: "placenta-previa-detail", name: "Placenta Previa", system: "reproductive-obgyn", categories: ["pregnancy-complications"], severity: "high", acuity: "acute", tags: ["painless-bleeding", "C-section", "emergency"], detail: { definition: "Placenta covers internal cervical os. Complete (covers os completely), partial, marginal, low-lying. Risk: prior C-section, multiparity, advanced maternal age, prior previa, smoking, multiple gestation. Painless vaginal bleeding (2nd/3rd trimester). NO DIGITAL CERVICAL EXAM (can cause massive hemorrhage). Transabdominal ultrasound, confirm with transvaginal if needed. Complications: hemorrhage (maternal/fetal), preterm delivery, placenta accreta (if prior C-section). Treat: if <34-36 weeks and bleeding stopped → expectant management, betamethasone, pelvic rest, no intercourse. Active bleeding or term → delivery. C-section required if persists at term.", overview: "[Content coming soon]" } },
    { id: "placental-abruption-detail", name: "Placental Abruption", system: "reproductive-obgyn", categories: ["pregnancy-complications"], severity: "high", acuity: "acute", tags: ["painful-bleeding", "emergency", "DIC"], detail: { definition: "Premature separation of placenta from uterus. Risk: HTN/preeclampsia (most important), trauma, cocaine, smoking, prior abruption, PPROM, thrombophilia. Painful vaginal bleeding (may be concealed if retroplacental), contractions, uterine tenderness, rigid abdomen, fetal distress. Ultrasound often negative (diagnosis clinical). Complications: hemorrhagic shock, DIC, fetal hypoxia/death, Couvelaire uterus (blood infiltrates myometrium). Labs: ↓ Hgb, ↓ platelets, ↑ PT/PTT, ↓ fibrinogen, ↑ D-dimer (DIC). Treat: if fetal distress or maternal instability → emergency C-section. Mild abruption + stable + preterm → expectant management. Maternal resuscitation, blood products if DIC.", overview: "[Content coming soon]" } },
    { id: "hellp-syndrome", name: "HELLP Syndrome", system: "reproductive-obgyn", categories: ["pregnancy-complications"], severity: "high", acuity: "acute", tags: ["emergency", "preeclampsia", "hemolysis"], detail: { definition: "Severe form of preeclampsia. HELLP: Hemolysis (schistocytes, ↑ LDH, ↑ indirect bilirubin), Elevated Liver enzymes (↑ AST/ALT), Low Platelets (<100k). RUQ/epigastric pain, N/V, malaise, headache. May occur without HTN or proteinuria. Complications: DIC, liver hematoma/rupture, placental abruption, acute renal failure, pulmonary edema, fetal death. Labs: hemolysis (↑ LDH, ↓ haptoglobin, schistocytes), ↑ AST/ALT, ↓ platelets. Treat: Delivery (only cure). Stabilize: IV magnesium sulfate (seizure prophylaxis), antihypertensives if severe HTN, platelet transfusion if <20k or active bleeding. Deliver immediately if ≥34 weeks or maternal/fetal compromise. If <34 weeks: betamethasone + delivery within 24-48hrs.", overview: "[Content coming soon]" } }
];

export default reproductiveObgynDiseases;

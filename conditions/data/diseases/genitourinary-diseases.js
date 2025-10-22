// Genitourinary Diseases (Placeholder)
const genitourinaryDiseases = [
    {
        id: "benign-prostatic-hyperplasia",
        name: "Benign Prostatic Hyperplasia (BPH)",
        system: "genitourinary",
        categories: ["prostate-disorders"],
        severity: "medium",
        acuity: "chronic",
        tags: ["prostate", "urinary-obstruction", "LUTS"],
        detail: {
            definition: "Benign enlargement of prostate. Obstructive symptoms (hesitancy, weak stream, incomplete emptying, retention) and irritative symptoms (frequency, urgency, nocturia). IPSS score. DRE: enlarged, smooth prostate. PSA may be elevated. Treat: alpha blockers (tamsulosin), 5-alpha reductase inhibitors (finasteride), TURP if severe.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "prostate-cancer",
        name: "Prostate Cancer",
        system: "genitourinary",
        categories: ["prostate-disorders", "urologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["adenocarcinoma", "PSA", "Gleason"],
        detail: {
            definition: "Most common cancer in men. Often asymptomatic. ↑ PSA, hard nodular prostate on DRE. Biopsy: Gleason score (sum of 2 most common patterns, 6-10). Staging: low/intermediate/high risk. Treat: active surveillance (low risk), prostatectomy or radiation (intermediate/high risk), ADT if metastatic.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "acute-prostatitis",
        name: "Acute Prostatitis",
        system: "genitourinary",
        categories: ["prostate-disorders"],
        severity: "high",
        acuity: "acute",
        tags: ["infection", "fever", "dysuria"],
        detail: {
            definition: "Bacterial infection of prostate. E. coli most common. Fever, chills, dysuria, pelvic/perineal pain. DRE: tender, boggy prostate (avoid vigorous exam - risk of bacteremia). UA/culture. Treat: fluoroquinolone or TMP-SMX x 4-6 weeks.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "testicular-torsion",
        name: "Testicular Torsion",
        system: "genitourinary",
        categories: ["scrotal-testicular-disorders"],
        severity: "high",
        acuity: "acute",
        tags: ["surgical-emergency", "absent-cremasteric", "bell-clapper"],
        detail: {
            definition: "Twisting of spermatic cord → testicular ischemia. Acute severe scrotal pain, N/V. High-riding testis, absent cremasteric reflex. Doppler: decreased/absent flow. Surgical emergency: manual detorsion or orchiopexy within 6hrs to save testis. Bell-clapper deformity predisposes.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "epididymitis",
        name: "Epididymitis",
        system: "genitourinary",
        categories: ["scrotal-testicular-disorders"],
        severity: "medium",
        acuity: "acute",
        tags: ["infection", "STI", "Prehn-sign"],
        detail: {
            definition: "Inflammation/infection of epididymis. <35yo: STI (chlamydia, gonorrhea). >35yo: E. coli (from UTI/prostatitis). Gradual onset scrotal pain, dysuria, urethral discharge. Prehn sign (pain relieved by testicular elevation). Doppler: increased flow. Treat: <35yo doxycycline + ceftriaxone, >35yo fluoroquinolone.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "testicular-cancer",
        name: "Testicular Cancer",
        system: "genitourinary",
        categories: ["scrotal-testicular-disorders", "urologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["seminoma", "nonseminoma", "AFP", "hCG"],
        detail: {
            definition: "Most common solid malignancy in young men (20-40yo). Painless testicular mass. Seminoma (radiosensitive, better prognosis, ↑ hCG) vs nonseminoma (↑ AFP, ↑ hCG, worse prognosis - embryonal, yolk sac, choriocarcinoma, teratoma). Ultrasound, tumor markers (AFP, hCG, LDH). Treat: radical inguinal orchiectomy ± chemo/radiation.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "erectile-dysfunction-disorder",
        name: "Erectile Dysfunction",
        system: "genitourinary",
        categories: ["erectile-dysfunction"],
        severity: "low",
        acuity: "chronic",
        tags: ["impotence", "vascular", "PDE5-inhibitor"],
        detail: {
            definition: "Inability to achieve/maintain erection. Psychogenic vs organic (vascular, neurogenic, hormonal, medications). Associated with CV disease. History, testosterone level, assess CV risk. Treat: PDE5 inhibitors (sildenafil, tadalafil) if no nitrates. Alternative: intracavernosal injections, vacuum device, penile prosthesis.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "renal-cell-carcinoma",
        name: "Renal Cell Carcinoma",
        system: "genitourinary",
        categories: ["urologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["kidney-cancer", "clear-cell", "hematuria", "VHL"],
        detail: {
            definition: "Most common kidney cancer. Clear cell type (70%). Triad (only 10%): hematuria, flank pain, palpable mass. Often incidental on imaging. Paraneoplastic: polycythemia (EPO), hypercalcemia (PTHrP), hypertension (renin). CT or MRI. Treat: nephrectomy (partial or radical), targeted therapy/immunotherapy if metastatic.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "bladder-cancer",
        name: "Bladder Cancer",
        system: "genitourinary",
        categories: ["urologic-oncology"],
        severity: "high",
        acuity: "chronic",
        tags: ["urothelial", "hematuria", "smoking"],
        detail: {
            definition: "Urothelial carcinoma (90%). Painless hematuria. Risk factors: smoking, occupational exposure (aniline dyes), cyclophosphamide, chronic cystitis (squamous cell). Cystoscopy with biopsy. Staging: non-muscle invasive (TURBT ± intravesical BCG/chemo) vs muscle invasive (radical cystectomy ± neoadjuvant chemo).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "urinary-incontinence",
        name: "Urinary Incontinence",
        system: "genitourinary",
        categories: ["urinary-tract-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["stress", "urge", "overflow"],
        detail: {
            definition: "Involuntary loss of urine. Types: stress (cough/laugh/strain - pelvic floor weakness in women), urge (overactive bladder - detrusor instability, sudden urge to void), overflow (incomplete emptying - BPH, DM neuropathy), functional (mobility/cognitive issues). Urinalysis, post-void residual. Treat: stress (Kegel exercises, pessary, surgery), urge (bladder training, anticholinergics/beta-3 agonists), overflow (treat obstruction, catheterization).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "urinary-retention",
        name: "Urinary Retention",
        system: "genitourinary",
        categories: ["urinary-tract-disorders"],
        severity: "high",
        acuity: "acute",
        tags: ["obstruction", "BPH", "catheter"],
        detail: {
            definition: "Inability to empty bladder. Acute (sudden, painful, distended bladder, unable to void) vs chronic (painless, high post-void residual >200mL). Causes: BPH, medications (anticholinergics, alpha-agonists), neurogenic bladder, infection. Post-void residual. Treat: urinary catheterization (Foley or intermittent), treat underlying cause (alpha blockers for BPH, stop offending medications).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "hematuria",
        name: "Hematuria",
        system: "genitourinary",
        categories: ["urinary-tract-disorders"],
        severity: "medium",
        acuity: "acute",
        tags: ["gross", "microscopic", "glomerular"],
        detail: {
            definition: "Blood in urine. Gross (visible) vs microscopic (>3 RBC/hpf). Glomerular (dysmorphic RBCs, RBC casts, proteinuria) vs non-glomerular (infection, stones, tumor, trauma). UA with microscopy, urine culture, cytology (if >35yo or risk factors). Imaging: CT urogram. Cystoscopy if non-glomerular. Causes: UTI, stones, BPH, cancer, glomerulonephritis, polycystic kidney disease, anticoagulation.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "nephrolithiasis",
        name: "Nephrolithiasis (Kidney Stones)",
        system: "genitourinary",
        categories: ["urinary-tract-disorders"],
        severity: "high",
        acuity: "acute",
        tags: ["renal-colic", "calcium-oxalate", "CT"],
        detail: {
            definition: "Kidney stones. Acute severe colicky flank pain radiating to groin, hematuria, N/V. Types: calcium oxalate (most common, radiopaque), uric acid (radiolucent, gout), struvite (staghorn, infection with urease-producing bacteria - Proteus), cystine (genetic). Non-contrast CT (gold standard). UA: hematuria, crystals. Treat: hydration, NSAIDs, alpha blocker (tamsulosin - medical expulsive therapy for distal stones <10mm), lithotripsy or ureteroscopy if large/refractory. Prevention: hydration, dietary modification based on stone type.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "hydrocele",
        name: "Hydrocele",
        system: "genitourinary",
        categories: ["scrotal-testicular-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["scrotal-swelling", "transillumination"],
        detail: {
            definition: "Fluid accumulation around testis (tunica vaginalis). Painless scrotal swelling. Communicating (infants - patent processus vaginalis) vs non-communicating (adults - idiopathic or secondary to infection/trauma/tumor). Transilluminates. Ultrasound to rule out testicular mass. Treat: observation (infants - resolves by 1yo), surgical repair if large/symptomatic.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "varicocele",
        name: "Varicocele",
        system: "genitourinary",
        categories: ["scrotal-testicular-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["scrotal-veins", "bag-of-worms", "infertility"],
        detail: {
            definition: "Dilated pampiniform plexus veins. Left-sided 90% (left testicular vein drains to left renal vein). Dull ache, dragging sensation, worse with standing. Bag of worms appearance, increases with Valsalva. Associated with infertility (↑ scrotal temp). Right-sided or sudden onset: consider IVC/renal vein obstruction (RCC). Ultrasound with Doppler. Treat: observation if asymptomatic, varicocelectomy if pain or infertility.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "peyronies-disease",
        name: "Peyronie's Disease",
        system: "genitourinary",
        categories: ["erectile-dysfunction"],
        severity: "low",
        acuity: "chronic",
        tags: ["penile-curvature", "fibrosis", "plaque"],
        detail: {
            definition: "Penile fibrosis causing curvature. Fibrous plaque in tunica albuginea. Painful erection, penile curvature (usually dorsal), palpable plaque. May cause erectile dysfunction. Associated with Dupuytren's contracture. Acute phase (painful, progressive) vs chronic phase (stable). Ultrasound. Treat: observation if mild, oral medications (pentoxifylline, vitamin E - limited evidence), intralesional collagenase, surgery (plication or grafting) if severe/stable.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "urethral-stricture",
        name: "Urethral Stricture",
        system: "genitourinary",
        categories: ["urinary-tract-disorders"],
        severity: "medium",
        acuity: "chronic",
        tags: ["obstruction", "trauma", "infection"],
        detail: {
            definition: "Narrowing of urethra. Causes: iatrogenic (catheterization, instrumentation), trauma (pelvic fracture, straddle injury), infection (gonorrhea), lichen sclerosus. Weak stream, hesitancy, dribbling, UTIs. Uroflowmetry, retrograde urethrogram. Treat: urethral dilation or direct vision internal urethrotomy (DVIU), urethroplasty if recurrent.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "priapism",
        name: "Priapism",
        system: "genitourinary",
        categories: ["erectile-dysfunction"],
        severity: "high",
        acuity: "acute",
        tags: ["prolonged-erection", "ischemic", "sickle-cell"],
        detail: {
            definition: "Prolonged painful erection >4hrs unrelated to sexual stimulation. Ischemic (low-flow, painful, medical emergency - sickle cell, medications like trazodone) vs non-ischemic (high-flow, painless, trauma to perineum). Penile blood gas (ischemic: hypoxic, acidotic). Treat: ischemic (aspiration and irrigation, intracavernosal phenylephrine, surgical shunt if refractory - time-sensitive to prevent permanent ED), non-ischemic (observation, embolization if needed).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "phimosis-paraphimosis",
        name: "Phimosis & Paraphimosis",
        system: "genitourinary",
        categories: ["urinary-tract-disorders"],
        severity: "medium",
        acuity: "acute",
        tags: ["foreskin", "circumcision"],
        detail: {
            definition: "Phimosis: inability to retract foreskin over glans. Physiologic (infants/young boys - normal, resolves with age) vs pathologic (adults - lichen sclerosus, recurrent infections, forceful retraction). Treat: topical steroids, circumcision if severe. Paraphimosis: retracted foreskin cannot be reduced, forms constricting band → venous congestion → swelling. Urologic emergency. Treat: manual reduction (compress glans, reduce foreskin), circumcision once swelling resolves.",
            overview: "[Content coming soon]"
        }
    }
];

export default genitourinaryDiseases;

// Renal system
const renalSystem = {
    id: "renal",
    name: "Renal",
    categoryIds: [
        "acute-kidney-injury",
        "chronic-kidney-disease",
        "glomerular-diseases",
        "tubulointerstitial-diseases",
        "electrolyte-disorders",
        "acid-base-disorders",
        "nephrolithiasis"
    ],
    pageType: "system",
    detail: {
        overview: "The renal system consists of the kidneys, ureters, bladder, and urethra. The kidneys filter blood, regulate fluid/electrolyte balance, control acid-base homeostasis, produce hormones (EPO, renin, calcitriol), and excrete metabolic waste. Diseases can affect glomeruli (nephrotic/nephritic syndromes), tubules (AKI, RTA), interstitium (AIN, ATN), or electrolyte/acid-base balance.",
        keyAnatomy: [
            "Nephron: glomerulus (filtration) → proximal tubule (reabsorption) → loop of Henle (concentration) → distal tubule (fine-tuning) → collecting duct (ADH action)",
            "Glomerulus: fenestrated endothelium, basement membrane, podocyte foot processes (filtration barrier)",
            "Juxtaglomerular apparatus: macula densa (senses Na), JG cells (secrete renin)",
            "Blood supply: renal artery → segmental → interlobar → arcuate → interlobular → afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries/vasa recta"
        ],
        commonThemes: [
            "Acute Kidney Injury (AKI): rapid ↑ Cr, ↓ urine output. Prerenal (↓ perfusion, FENa <1%), intrarenal (ATN, GN, AIN), postrenal (obstruction). Treat underlying cause.",
            "Chronic Kidney Disease (CKD): progressive ↓ GFR over months-years. Stages 1-5 (G1-G5). Complications: anemia (↓ EPO), bone disease (↓ calcitriol, ↑ PTH), hyperkalemia, acidosis. ESRD → dialysis or transplant.",
            "Nephrotic syndrome: proteinuria >3.5 g/day, hypoalbuminemia, edema, hyperlipidemia. Podocyte injury (minimal change, FSGS, membranous). Complications: infections, thrombosis, hyperlipidemia.",
            "Nephritic syndrome: hematuria, HTN, oliguria, mild proteinuria. Glomerular inflammation (post-infectious GN, IgA nephropathy, RPGN). RBC casts pathognomonic.",
            "Electrolyte disorders: hyponatremia (SIADH, hypovolemia, psychogenic polydipsia), hypernatremia (diabetes insipidus, dehydration), hypokalemia (diuretics, RTA), hyperkalemia (renal failure, meds).",
            "Acid-base: metabolic acidosis (↑ anion gap = MUDPILES, normal gap = diarrhea/RTA), metabolic alkalosis (vomiting, diuretics), respiratory acidosis (hypoventilation), respiratory alkalosis (hyperventilation).",
            "Nephrolithiasis: calcium oxalate (most common), uric acid, struvite (infection), cystine. Flank pain, hematuria. CT without contrast gold standard. Hydration, analgesia, stone analysis."
        ]
    }
};

export default renalSystem;

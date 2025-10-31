// Erythroid Lineage - Red Blood Cell Development
// From Proerythroblast to Mature Erythrocyte

const erythroidLineage = {
    "id": "erythroid-lineage",
    "name": "Erythroid Lineage",
    "fullName": "Red Blood Cell Development",
    "parentCell": "megakaryocyte-erythroid-progenitor",
    "system": "hematopoietic",
    "pageType": "lineage",

    "overview": {
        "description": "Progressive maturation from nucleated precursors to anucleate red blood cells specialized for oxygen transport. Takes approximately 7 days from proerythroblast to mature erythrocyte.",
        "keyTranscriptionFactors": [
            "GATA1 (master erythroid regulator - mutations cause anemia)",
            "KLF1 (Kruppel-like factor 1 - β-globin switching)",
            "TAL1/SCL (required for erythroid commitment)",
            "EKLF (erythroid Kruppel-like factor)"
        ],
        "keyCytokines": [
            "EPO (Erythropoietin) - primary driver, binds EPO-R to activate JAK2/STAT5",
            "SCF (Stem Cell Factor) - supports early stages",
            "IL-3 (Interleukin-3) - supports proliferation"
        ],
        "keyMechanism": "EPO binding → EPO-R dimerization → JAK2 activation → STAT5 phosphorylation → anti-apoptotic genes (Bcl-xL) + proliferation. Progressive hemoglobin accumulation while nucleus condenses and is extruded.",
        "timeline": "~7 days total: Proerythroblast (1 day) → Basophilic (1 day) → Polychromatic (2 days) → Orthochromatic (2 days) → Reticulocyte (1-2 days) → Erythrocyte (120 days lifespan)"
    },

    "stages": [
        {
            "stageNumber": 1,
            "id": "proerythroblast",
            "name": "Proerythroblast",
            "alternateName": "Rubriblast",
            "markers": ["CD34-", "CD71+++ (transferrin receptor, HIGH)", "Glycophorin A- (GlyA-)", "EPO-R+++"],
            "size": "20-25 μm (largest erythroid precursor)",
            "morphology": "Large round cell with deeply basophilic (blue) cytoplasm due to abundant ribosomes for protein synthesis. Large nucleus with fine chromatin and 1-2 prominent nucleoli. High nuclear-to-cytoplasmic ratio.",
            "location": "Bone marrow erythroblastic islands (surrounding central macrophage)",
            "function": "Earliest committed erythroid precursor. Responds to EPO by proliferating and beginning hemoglobin synthesis. High metabolic activity preparing for massive hemoglobin production.",
            "mechanisticDetail": "EPO receptor is maximally expressed at this stage. EPO binding prevents apoptosis via Bcl-xL upregulation and drives cell division. Transferrin receptor (CD71) is highly expressed to import iron for heme synthesis. Ribosomes are rapidly produced for upcoming globin chain synthesis.",
            "hemoglobin": "Minimal hemoglobin synthesis beginning",
            "nucleus": "Large, round, euchromatic (open chromatin), prominent nucleoli",
            "divides": true,
            "clinicalRelevance": [
                "Target of EPO therapy in chronic kidney disease",
                "Iron deficiency at this stage impairs hemoglobin synthesis in all subsequent stages",
                "Diamond-Blackfan anemia: Ribosomal protein mutations block development at/before this stage"
            ],
            "step1Pearls": [
                "Largest and most immature morphologically recognizable erythroid cell",
                "CD71 (transferrin receptor) is HIGHEST here - needed for iron uptake",
                "EPO receptor expression peaks here - maximal EPO sensitivity",
                "Diamond-Blackfan anemia: Pure red cell aplasia from ribosomal defects"
            ]
        },
        {
            "stageNumber": 2,
            "id": "basophilic-erythroblast",
            "name": "Basophilic Erythroblast",
            "alternateName": "Prorubricyte",
            "markers": ["CD71+++", "Glycophorin A+ (GlyA+)", "EPO-R++"],
            "size": "16-18 μm (smaller than proerythroblast)",
            "morphology": "Deeply basophilic (dark blue) cytoplasm - even more blue than proerythroblast due to MASSIVE amounts of ribosomes. Nucleus is smaller with more condensed chromatin (darker). Nucleoli less prominent or absent.",
            "location": "Bone marrow erythroblastic islands",
            "function": "Intense hemoglobin synthesis begins. Peak ribosome production for globin chain synthesis. Actively dividing while accumulating hemoglobin.",
            "mechanisticDetail": "This stage has the HIGHEST ribosomal RNA synthesis and ribosome production of any erythroid stage. Globin mRNA translation is ramping up. Heme synthesis (via ALA synthase in mitochondria) and globin synthesis (on cytoplasmic ribosomes) must be coordinated. Iron-sulfur cluster assembly occurs in mitochondria.",
            "hemoglobin": "Hemoglobin synthesis accelerating (α and β globin chains + heme)",
            "nucleus": "Smaller, chromatin condensing (heterochromatin forming), nucleoli fading",
            "divides": true,
            "clinicalRelevance": [
                "High ribosome activity makes it very basophilic (blue) on Wright-Giemsa stain",
                "Thalassemias: Imbalanced globin chain synthesis causes ineffective erythropoiesis at this stage",
                "Lead poisoning: Inhibits ALA dehydratase → blocks heme synthesis → basophilic stippling"
            ],
            "step1Pearls": [
                "Most basophilic (bluest) of all erythroid cells - packed with ribosomes",
                "Glycophorin A appears here (marks erythroid commitment)",
                "Still actively dividing while making hemoglobin",
                "β-Thalassemia: Excess α chains precipitate → ineffective erythropoiesis"
            ]
        },
        {
            "stageNumber": 3,
            "id": "polychromatic-erythroblast",
            "name": "Polychromatic Erythroblast",
            "alternateName": "Rubricyte",
            "markers": ["CD71++", "Glycophorin A++", "EPO-R+"],
            "size": "12-15 μm (continuing to shrink)",
            "morphology": "Gray-blue (polychromatic) cytoplasm - a MIX of blue (residual RNA/ribosomes) and pink (accumulating hemoglobin). Nucleus is smaller and more condensed (pyknotic). No nucleoli visible.",
            "location": "Bone marrow erythroblastic islands",
            "function": "Continued hemoglobin accumulation. Transitioning from synthesis mode to hemoglobin accumulation mode. Last stage that divides.",
            "mechanisticDetail": "Hemoglobin concentration increases from ~20% to ~40% of final amount. Ribosomes begin to degrade as mRNA translation slows. Mitochondria remain active for heme synthesis. Nucleus chromatin is heavily condensed preparing for extrusion. This is typically the LAST dividing stage.",
            "hemoglobin": "~40% of final hemoglobin content - visible as pink color mixing with blue",
            "nucleus": "Small, condensed (heterochromatic), dark, preparing for extrusion",
            "divides": true,
            "clinicalRelevance": [
                "The color change from blue to gray-blue indicates successful hemoglobin synthesis",
                "Abnormal persistence suggests ineffective erythropoiesis (thalassemia, MDS)",
                "Last dividing stage - cell cycle exit occurs here"
            ],
            "step1Pearls": [
                "Polychromatic = 'many colors' = mixture of blue (RNA) and pink (Hb)",
                "Last erythroid stage that divides (typically)",
                "Nucleus is very condensed (pyknotic) here",
                "By this stage, cells are committed to becoming RBCs - no going back"
            ]
        },
        {
            "stageNumber": 4,
            "id": "orthochromatic-erythroblast",
            "name": "Orthochromatic Erythroblast",
            "alternateName": "Normoblast, Metarubricyte",
            "markers": ["CD71+ (low)", "Glycophorin A+++", "EPO-R-"],
            "size": "8-12 μm (approaching mature RBC size)",
            "morphology": "Pink/salmon-colored cytoplasm (mostly hemoglobin, little RNA remains). Small, dense, pyknotic nucleus that is being extruded or recently extruded. Nucleus may appear off-center or being 'budded off'.",
            "location": "Bone marrow (normally). Can appear in peripheral blood in severe hemolytic anemia or extramedullary hematopoiesis.",
            "function": "Nearly mature. Final hemoglobin accumulation and organelle degradation. Nucleus is extruded via macrophage assistance (central macrophage 'nurses' the erythroblastic island).",
            "mechanisticDetail": "The nucleus is extruded via actin-myosin contractile ring. The central macrophage in the erythroblastic island engulfs the extruded nucleus (erythrophagocytosis). Autophagy degrades remaining ribosomes and mitochondria. CD71 (transferrin receptor) is shed. The cell becomes a reticulocyte after nucleus extrusion.",
            "hemoglobin": "~80-90% of final hemoglobin content",
            "nucleus": "Very small, dense (pyknotic), dark purple, being extruded",
            "divides": false,
            "clinicalRelevance": [
                "Presence in peripheral blood = 'nucleated RBCs' (NRBCs) - sign of stress erythropoiesis",
                "Seen in: Severe hemolytic anemia, extramedullary hematopoiesis, bone marrow infiltration, newborns",
                "Central macrophage dysfunction → Nucleated RBCs in blood"
            ],
            "step1Pearls": [
                "'Orthochromatic' = 'correct color' = same pink as mature RBC",
                "Nucleus about to be extruded - pyknotic (shrunken, dense)",
                "Normoblasts in peripheral blood = ABNORMAL (except newborns)",
                "After nucleus extrusion → becomes reticulocyte",
                "Central macrophage eats the extruded nucleus"
            ]
        },
        {
            "stageNumber": 5,
            "id": "reticulocyte",
            "name": "Reticulocyte",
            "alternateName": "Polychromatophilic RBC, 'Retic'",
            "markers": ["CD71- (shed)", "Glycophorin A+++", "Band 3+", "Residual RNA (ribosomes, mitochondria)"],
            "size": "7-8 μm (slightly larger than mature RBC)",
            "morphology": "NO NUCLEUS. Appears slightly blue-gray on Wright-Giemsa stain due to residual RNA. With supravital stains (new methylene blue, brilliant cresyl blue), residual RNA forms a reticular (net-like) pattern - hence 'reticulocyte'. Slightly larger and less biconcave than mature RBC.",
            "location": "Bone marrow (24-48 hours), then peripheral blood (24-48 hours). Normal peripheral reticulocyte count: 0.5-2% of RBCs.",
            "function": "Immature RBC that still contains residual RNA and mitochondria. Loses these organelles over 24-48 hours in circulation via autophagy. Finishes hemoglobin synthesis (remaining 10-20%). Transitions from reticulocyte to mature erythrocyte.",
            "mechanisticDetail": "Autophagy degrades residual ribosomes, mitochondria, and other organelles. CD71 (transferrin receptor) is completely shed. Membrane remodeling occurs - excess membrane is removed by splenic macrophages. The cell becomes more deformable and develops its characteristic biconcave shape. Final hemoglobin synthesis completes using residual ribosomes.",
            "hemoglobin": "Completes final 10-20% of hemoglobin synthesis using residual ribosomes",
            "nucleus": "NONE (extruded in previous stage)",
            "divides": false,
            "lifespan": "1-2 days as reticulocyte, then becomes mature RBC",
            "clinicalRelevance": [
                "Reticulocyte count measures bone marrow RBC production/response to anemia",
                "HIGH reticulocyte count (>2-3%) = appropriate marrow response (hemolysis, bleeding, recovery from anemia)",
                "LOW reticulocyte count in anemia = inadequate marrow response (aplastic anemia, iron deficiency, CKD)",
                "Corrected reticulocyte count = (measured % × patient Hct) / 45",
                "Reticulocyte production index (RPI) accounts for early release"
            ],
            "step1Pearls": [
                "Reticulocyte = immature RBC with residual RNA (no nucleus)",
                "Appears blue-gray on Wright stain (polychromasia)",
                "Supravital stains show reticular pattern (new methylene blue)",
                "Reticulocyte count = BEST measure of bone marrow RBC production",
                "High retics in anemia = good marrow response (hemolysis/bleeding)",
                "Low retics in anemia = bone marrow problem (aplasia, iron deficiency)",
                "Normal reticulocyte count: 0.5-2% (or 50,000-100,000 cells/μL)",
                "Reticulocytosis seen in: hemolytic anemia, acute bleeding, response to EPO/iron therapy"
            ]
        },
        {
            "stageNumber": 6,
            "id": "erythrocyte",
            "name": "Erythrocyte",
            "alternateName": "Red Blood Cell (RBC), Mature Erythrocyte",
            "markers": ["Glycophorin A+++", "Band 3+++", "Spectrin", "Ankyrin", "Protein 4.1", "NO CD71", "NO nucleus", "NO RNA"],
            "size": "7-8 μm diameter, 2 μm thick (biconcave disc)",
            "morphology": "Anucleate biconcave disc with salmon-pink cytoplasm. Central pallor (light area) due to biconcave shape. Uniform size and shape (normocytic, normochromic when healthy). Deformable to pass through capillaries (3 μm diameter).",
            "location": "Circulates in blood vessels. Passes through spleen for quality control. Travels ~300 km in 120-day lifespan.",
            "function": "Oxygen transport from lungs to tissues via hemoglobin. CO₂ transport from tissues to lungs. Maintains acid-base balance via carbonic anhydrase and hemoglobin buffering. NO metabolism except glycolysis (no mitochondria).",
            "mechanisticDetail": "Hemoglobin (Hb A: α₂β₂) binds O₂ cooperatively (sigmoid curve). Binding affinity regulated by: 2,3-BPG (decreases affinity, shifts curve right), pH (Bohr effect), temperature, CO₂. Energy (ATP) generated solely by glycolysis via Embden-Meyerhof pathway. Pentose phosphate shunt generates NADPH to reduce glutathione (protects from oxidative damage). No protein synthesis possible (no ribosomes). Cytoskeleton (spectrin-ankyrin-protein 4.1) maintains biconcave shape and deformability.",
            "hemoglobin": "~30 pg per cell. Normal Hb A (α₂β₂) is 96-98%, Hb A₂ (α₂δ₂) is 2-3%, Hb F (α₂γ₂) is <1% in adults",
            "nucleus": "NONE (extruded as normoblast)",
            "divides": false,
            "lifespan": "120 days. Removed by splenic macrophages when old/damaged.",
            "metabolism": [
                "Glycolysis (Embden-Meyerhof pathway): Glucose → Pyruvate → Lactate. Generates 2 ATP per glucose.",
                "Rapoport-Luebering shunt: Produces 2,3-BPG (regulates Hb-O₂ affinity)",
                "Pentose phosphate pathway (HMP shunt): Generates NADPH → reduces glutathione → protects from oxidative damage",
                "Methemoglobin reductase: Uses NADH to reduce Fe³⁺ back to Fe²⁺ (keeps Hb functional)"
            ],
            "clinicalRelevance": [
                "Anemia defined as low Hb: Men <13 g/dL, Women <12 g/dL, Pregnant <11 g/dL",
                "Microcytic anemia (MCV <80 fL): Iron deficiency, thalassemia, lead poisoning, sideroblastic anemia",
                "Normocytic anemia (MCV 80-100 fL): Hemolysis, acute bleeding, chronic disease, aplastic anemia",
                "Macrocytic anemia (MCV >100 fL): B12/folate deficiency, alcohol, liver disease, hypothyroidism",
                "Hemolytic anemias: Membrane defects (spherocytosis, elliptocytosis), enzyme defects (G6PD, PK), hemoglobinopathies (sickle cell)",
                "Spherocytes (loss of central pallor): Hereditary spherocytosis, autoimmune hemolytic anemia",
                "Target cells: Thalassemia, liver disease, HbC disease, post-splenectomy",
                "Schistocytes (fragmented RBCs): Microangiopathic hemolytic anemia (TTP, HUS, DIC, mechanical valve)"
            ],
            "step1Pearls": [
                "RBC lifespan = 120 days. Removed by splenic macrophages → unconjugated bilirubin",
                "Biconcave shape maximizes surface area for gas exchange",
                "Deformable to pass through capillaries smaller than RBC diameter",
                "NO nucleus, NO mitochondria, NO ribosomes → cannot make new proteins or repair DNA",
                "Energy ONLY from glycolysis (anaerobic) → produces lactate",
                "2,3-BPG shifts O₂ curve RIGHT (decreased affinity) → better O₂ delivery to tissues",
                "G6PD deficiency: Defective pentose phosphate pathway → oxidative damage → hemolysis with oxidative stress (fava beans, sulfa drugs)",
                "Pyruvate kinase deficiency: Impaired glycolysis → ATP depletion → hemolysis",
                "Hemoglobin A = α₂β₂ (adult). Hemoglobin F = α₂γ₂ (fetal, higher O₂ affinity)",
                "Thalassemia: Defective globin chain synthesis (α or β)",
                "Sickle cell: HbS (Glu→Val mutation in β-globin) → polymerizes when deoxygenated",
                "Spherocytosis: Spectrin/ankyrin defects → loss of membrane → spherical cells → splenic sequestration → hemolysis",
                "Reticulocyte count helps distinguish: Increased (hemolysis/bleeding) vs Decreased (production problem)"
            ]
        }
    ],

    "clinicalCorrelations": [
        {
            "disease": "Iron Deficiency Anemia",
            "mechanism": "Inadequate iron → impaired heme synthesis → microcytic, hypochromic RBCs",
            "affectedStages": "All stages - especially proerythroblast through polychromatic (when heme synthesis is active)",
            "labs": "Low ferritin, low serum iron, high TIBC, low transferrin saturation, high RDW",
            "treatment": "Oral or IV iron supplementation"
        },
        {
            "disease": "Vitamin B12/Folate Deficiency (Megaloblastic Anemia)",
            "mechanism": "Impaired DNA synthesis → nuclear maturation lags behind cytoplasmic maturation → megaloblastic (large) cells",
            "affectedStages": "All dividing stages - proerythroblast through polychromatic",
            "labs": "Macrocytic anemia (MCV >100), hypersegmented neutrophils, high homocysteine/methylmalonic acid",
            "treatment": "B12 injections (if B12 deficiency) or folate supplementation"
        },
        {
            "disease": "Thalassemia (α or β)",
            "mechanism": "Defective globin chain synthesis → imbalanced chains precipitate → ineffective erythropoiesis + hemolysis",
            "affectedStages": "Basophilic through reticulocyte - whenever globin synthesis occurs",
            "labs": "Microcytic anemia, target cells, high RBC count relative to Hb",
            "treatment": "Transfusions, iron chelation, possible bone marrow transplant"
        },
        {
            "disease": "Chronic Kidney Disease (CKD) - Anemia",
            "mechanism": "Decreased EPO production by kidney → insufficient erythroid stimulation",
            "affectedStages": "Mainly proerythroblast and basophilic (EPO-responsive stages)",
            "labs": "Normocytic normochromic anemia, low reticulocyte count, low EPO level",
            "treatment": "Recombinant EPO (epoetin alfa, darbepoetin alfa)"
        },
        {
            "disease": "Diamond-Blackfan Anemia",
            "mechanism": "Ribosomal protein gene mutations → ribosome dysfunction → block at proerythroblast stage",
            "affectedStages": "Block at or before proerythroblast - pure red cell aplasia",
            "labs": "Severe anemia, very low/absent reticulocytes, normal WBC/platelets, high Hb F",
            "treatment": "Corticosteroids, transfusions, bone marrow transplant"
        },
        {
            "disease": "Hemolytic Anemias",
            "mechanism": "Increased RBC destruction → compensatory erythropoiesis → reticulocytosis",
            "affectedStages": "Accelerated maturation through all stages, increased reticulocytes",
            "labs": "Anemia + high reticulocyte count, high indirect bilirubin, high LDH, low haptoglobin",
            "treatment": "Depends on cause (steroids for autoimmune, splenectomy for spherocytosis, etc.)"
        }
    ],

    "step1HighYieldConcepts": [
        "Reticulocyte count is the BEST indicator of bone marrow erythroid activity",
        "Reticulocytosis (high) in anemia = appropriate response (hemolysis or bleeding)",
        "Reticulocytopenia (low) in anemia = production problem (aplasia, nutritional deficiency, CKD)",
        "EPO is made by renal peritubular interstitial cells - low in CKD",
        "Basophilic erythroblast is the BLUEST cell - most ribosomes",
        "Polychromatic = mix of blue (RNA) and pink (Hb) = gray-blue color",
        "Orthochromatic = 'correct color' = pink like mature RBC, nucleus about to pop out",
        "Normoblasts (nucleated RBCs) in peripheral blood = ABNORMAL (except newborns)",
        "RBC lifespan = 120 days, removed by splenic macrophages",
        "2,3-BPG shifts O₂ dissociation curve RIGHT (easier to release O₂)",
        "Microcytic anemia: TAILS (Thalassemia, Anemia of chronic disease, Iron deficiency, Lead poisoning, Sideroblastic)",
        "Macrocytic anemia: Megaloblastic (B12/folate) or non-megaloblastic (alcohol, liver disease, hypothyroid)",
        "Hemolytic anemia labs: High indirect bilirubin, high LDH, low haptoglobin, high reticulocyte count"
    ]
};

export default erythroidLineage;

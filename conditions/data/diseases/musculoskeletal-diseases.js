// Musculoskeletal Diseases (Placeholder)
const musculoskeletalDiseases = [
    {
        id: "hip-fracture",
        name: "Hip Fracture",
        system: "musculoskeletal",
        categories: ["fractures-trauma"],
        severity: "high",
        acuity: "acute",
        tags: ["fracture", "elderly", "fall", "surgical"],
        detail: {
            definition: "Femoral neck or intertrochanteric fracture. Common in elderly with osteoporosis after fall. Shortened, externally rotated leg. X-ray hip (AP and lateral). Surgical fixation or replacement. Complications: AVN (femoral neck), mortality.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "compartment-syndrome",
        name: "Compartment Syndrome",
        system: "musculoskeletal",
        categories: ["fractures-trauma"],
        severity: "high",
        acuity: "acute",
        tags: ["surgical-emergency", "5-Ps", "fasciotomy"],
        detail: {
            definition: "Increased pressure within muscle compartment → ischemia. 5 P's: Pain out of proportion, Pressure, Paresthesias, Pallor, Pulselessness, Paralysis. Measure compartment pressure >30 mmHg. Surgical emergency: immediate fasciotomy.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "acl-tear",
        name: "Anterior Cruciate Ligament (ACL) Tear",
        system: "musculoskeletal",
        categories: ["sports-injuries"],
        severity: "medium",
        acuity: "acute",
        tags: ["knee", "sports", "pivot", "pop"],
        detail: {
            definition: "Knee ligament injury. Heard/felt 'pop' during pivot/deceleration. Immediate swelling (hemarthrosis). Positive Lachman test (most sensitive), anterior drawer, pivot shift. MRI confirms. Treat: reconstruction if active/young, conservative if sedentary.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "rotator-cuff-tear",
        name: "Rotator Cuff Tear",
        system: "musculoskeletal",
        categories: ["sports-injuries"],
        severity: "medium",
        acuity: "chronic",
        tags: ["shoulder", "supraspinatus", "impingement"],
        detail: {
            definition: "Tear of rotator cuff (supraspinatus most common). Acute trauma or chronic degeneration. Shoulder pain, weakness with abduction. Positive empty can test, drop arm test. MRI confirms. Treat: PT, NSAIDs; surgery if complete tear in active patient.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "meniscal-tear",
        name: "Meniscal Tear",
        system: "musculoskeletal",
        categories: ["sports-injuries"],
        severity: "low",
        acuity: "acute",
        tags: ["knee", "twisting", "locking", "McMurray"],
        detail: {
            definition: "Tear of medial or lateral meniscus. Twisting injury on flexed knee (sports) or degenerative (elderly). Knee pain, locking, clicking. Positive McMurray test, joint line tenderness. MRI confirms. Treat: conservative vs arthroscopic repair/meniscectomy.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "lumbar-disc-herniation",
        name: "Lumbar Disc Herniation",
        system: "musculoskeletal",
        categories: ["spine-disorders"],
        severity: "medium",
        acuity: "acute",
        tags: ["radiculopathy", "sciatica", "back-pain"],
        detail: {
            definition: "Herniated nucleus pulposus compresses nerve root. L4/L5 (foot drop, L5 dermatomal pain) or L5/S1 (decreased ankle reflex, S1 sciatica). Positive straight leg raise. MRI confirms. Treat: conservative (NSAIDs, PT) unless cauda equina or progressive neurologic deficit.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "spinal-stenosis",
        name: "Spinal Stenosis",
        system: "musculoskeletal",
        categories: ["spine-disorders"],
        severity: "medium",
        acuity: "chronic",
        tags: ["neurogenic-claudication", "degenerative"],
        detail: {
            definition: "Narrowing of spinal canal (degenerative, congenital). Neurogenic claudication: leg pain/weakness with walking, relieved by sitting/forward flexion (shopping cart sign). MRI shows canal narrowing. Treat: PT, epidural steroids, laminectomy if severe.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "cauda-equina-syndrome",
        name: "Cauda Equina Syndrome",
        system: "musculoskeletal",
        categories: ["spine-disorders"],
        severity: "high",
        acuity: "acute",
        tags: ["surgical-emergency", "saddle-anesthesia", "bowel-bladder"],
        detail: {
            definition: "Compression of cauda equina nerve roots. Massive disc herniation, tumor, abscess. Saddle anesthesia, bowel/bladder dysfunction (urinary retention, fecal incontinence), bilateral leg weakness. Surgical emergency: immediate decompression within 24-48hrs.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "colles-fracture",
        name: "Colles Fracture",
        system: "musculoskeletal",
        categories: ["fractures-trauma"],
        severity: "medium",
        acuity: "acute",
        tags: ["distal-radius", "FOOSH", "dinner-fork"],
        detail: {
            definition: "Distal radius fracture with dorsal angulation (dinner fork deformity). Fall on outstretched hand (FOOSH). Common in osteoporotic elderly women. X-ray shows fracture. Treat: closed reduction and casting, ORIF if unstable. Smith fracture = volar angulation (opposite mechanism).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "clavicle-fracture",
        name: "Clavicle Fracture",
        system: "musculoskeletal",
        categories: ["fractures-trauma"],
        severity: "low",
        acuity: "acute",
        tags: ["shoulder", "fall", "mid-shaft"],
        detail: {
            definition: "Most commonly fractured bone in children/young adults. Fall on shoulder or outstretched hand. Mid-shaft most common (80%). Visible/palpable deformity, pain, limited shoulder movement. X-ray confirms. Treat: sling, NSAIDs (most heal without surgery). Surgery if open, neurovascular compromise, or significant displacement.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "scaphoid-fracture",
        name: "Scaphoid Fracture",
        system: "musculoskeletal",
        categories: ["fractures-trauma"],
        severity: "medium",
        acuity: "acute",
        tags: ["wrist", "FOOSH", "anatomic-snuffbox", "AVN"],
        detail: {
            definition: "Most common carpal bone fracture. FOOSH. Anatomic snuffbox tenderness, scaphoid tubercle tenderness. X-ray may be initially negative (order dedicated scaphoid views). If suspected clinically, treat empirically (thumb spica cast), repeat X-ray in 2 weeks or MRI. Risk of AVN (proximal pole due to retrograde blood supply) and nonunion. Treat: thumb spica cast (nondisplaced), ORIF (displaced or proximal pole).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "shoulder-dislocation",
        name: "Shoulder Dislocation",
        system: "musculoskeletal",
        categories: ["fractures-trauma"],
        severity: "medium",
        acuity: "acute",
        tags: ["anterior", "Bankart", "Hill-Sachs", "axillary-nerve"],
        detail: {
            definition: "Most commonly dislocated joint. Anterior dislocation (95%) - arm abducted/externally rotated, squared-off shoulder, loss of deltoid contour. Complications: axillary nerve injury (test deltoid strength, lateral shoulder sensation), Hill-Sachs lesion (humeral head), Bankart lesion (glenoid labrum). X-ray (AP, lateral, axillary). Treat: closed reduction, immobilization. Recurrent dislocation common in young.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "adhesive-capsulitis",
        name: "Adhesive Capsulitis (Frozen Shoulder)",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["shoulder", "stiffness", "diabetes"],
        detail: {
            definition: "Shoulder stiffness and pain. Idiopathic or secondary (prolonged immobilization, DM). Progressive loss of active and passive ROM in all directions (vs rotator cuff where active > passive limitation). 3 phases: freezing (painful), frozen (stiff), thawing (recovery). Self-limited (12-18 months). Treat: PT, NSAIDs, intra-articular steroids, manipulation under anesthesia if severe.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "carpal-tunnel-syndrome",
        name: "Carpal Tunnel Syndrome",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["median-nerve", "paresthesias", "pregnancy"],
        detail: {
            definition: "Median nerve compression at wrist. Numbness/tingling in thumb, index, middle fingers (median distribution), worse at night, relieved by shaking hand. Weakness of thumb abduction (APB). Risk factors: pregnancy, DM, hypothyroid, RA, repetitive wrist motion. Positive Tinel sign (tap wrist), Phalen sign (wrist flexion). EMG/NCS confirms. Treat: wrist splint (neutral position at night), NSAIDs, steroid injection, carpal tunnel release if severe.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "cubital-tunnel-syndrome",
        name: "Cubital Tunnel Syndrome",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["ulnar-nerve", "elbow", "numbness"],
        detail: {
            definition: "Ulnar nerve compression at elbow (cubital tunnel). Numbness/tingling in 4th-5th fingers (ulnar distribution), medial forearm. Weakness of interossei (finger abduction/adduction), lumbricals (4th-5th), FDP (4th-5th). Froment sign (thumb IP flexion when pinching paper). Risk: prolonged elbow flexion, leaning on elbow. EMG/NCS. Treat: avoid pressure/flexion, elbow pad, splint at night, decompression surgery if severe.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "plantar-fasciitis",
        name: "Plantar Fasciitis",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["heel-pain", "first-steps", "overuse"],
        detail: {
            definition: "Most common cause of heel pain. Inflammation of plantar fascia. Stabbing pain at medial heel, worse with first steps in morning or after rest. Improves with walking. Risk: obesity, prolonged standing, flat feet/high arches, tight Achilles. Tenderness at medial calcaneal tubercle. Clinical diagnosis. Treat: rest, ice, NSAIDs, stretching exercises, orthotics, night splints. Steroid injection or surgery if refractory.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "de-quervain-tenosynovitis",
        name: "De Quervain's Tenosynovitis",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "acute",
        tags: ["thumb", "radial-wrist", "Finkelstein"],
        detail: {
            definition: "Inflammation of 1st dorsal compartment tendons (APL, EPB). Radial wrist pain, worse with thumb/wrist movement. New mothers (repetitive lifting baby). Positive Finkelstein test (ulnar deviation with thumb in palm → pain). Treat: thumb spica splint, NSAIDs, steroid injection, surgical release if refractory.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "lateral-epicondylitis",
        name: "Lateral Epicondylitis (Tennis Elbow)",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["elbow", "overuse", "wrist-extensors"],
        detail: {
            definition: "Tendinopathy of wrist extensors (ECRB) at lateral epicondyle. Overuse (racquet sports, manual labor). Lateral elbow pain, worse with wrist extension/gripping. Tenderness at lateral epicondyle. Pain with resisted wrist extension/supination. Treat: rest, activity modification, NSAIDs, PT (stretching, strengthening), counterforce brace, steroid injection. Medial epicondylitis (golfer's elbow) = flexor-pronator origin.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "pagets-disease-bone",
        name: "Paget's Disease of Bone",
        system: "musculoskeletal",
        categories: ["bone-disorders"],
        severity: "medium",
        acuity: "chronic",
        tags: ["bone-remodeling", "alk-phos", "skull", "hat-size"],
        detail: {
            definition: "Abnormal bone remodeling (↑ osteoclast activity → ↑ osteoblast activity → disorganized bone). Elderly. Most asymptomatic. Bone pain, deformity (bowed legs, enlarged skull - increasing hat size), fractures, deafness (skull base). ↑↑ Alk Phos (isolated), normal calcium/phosphate. X-ray: thickened cortex, mixed lytic/sclerotic, cotton-wool appearance (skull). Complications: high-output heart failure, osteosarcoma (rare). Treat: bisphosphonates if symptomatic.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "rhabdomyolysis",
        name: "Rhabdomyolysis",
        system: "musculoskeletal",
        categories: ["muscle-disorders-msk"],
        severity: "high",
        acuity: "acute",
        tags: ["muscle-breakdown", "myoglobin", "AKI", "CK"],
        detail: {
            definition: "Muscle breakdown releasing myoglobin → AKI. Causes: trauma (crush injury), prolonged immobilization, seizures, extreme exertion, drugs (statins, cocaine), infections, metabolic (hypokalemia). Myalgias, weakness, dark urine (tea-colored). ↑↑ CK (>5x normal, often >10k), ↑ myoglobin, hyperkalemia, hyperphosphatemia, hypocalcemia (early), ↑ creatinine. UA: heme-positive without RBCs (myoglobin cross-reacts). Treat: aggressive IV fluids (prevent AKI), monitor electrolytes, dialysis if severe AKI.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "fibromyalgia",
        name: "Fibromyalgia",
        system: "musculoskeletal",
        categories: ["muscle-disorders-msk"],
        severity: "low",
        acuity: "chronic",
        tags: ["chronic-pain", "tender-points", "fatigue"],
        detail: {
            definition: "Chronic widespread pain syndrome. Women 20-50yo. Diffuse musculoskeletal pain (>3 months, both sides of body, above/below waist), fatigue, sleep disturbance, cognitive dysfunction (fibro fog). Multiple tender points (historical). Normal labs, no inflammation. Diagnosis of exclusion. Treat: PT, aerobic exercise, CBT, medications (duloxetine, pregabalin, amitriptyline), improve sleep hygiene.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "dupuytren-contracture",
        name: "Dupuytren's Contracture",
        system: "musculoskeletal",
        categories: ["joint-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["hand", "palmar-fascia", "flexion-contracture"],
        detail: {
            definition: "Progressive fibrosis of palmar fascia. Men >40yo, Northern European. Nodules and cords in palm → flexion contracture (4th and 5th fingers most common). Risk: DM, alcohol, smoking, trauma. Treat: observation if mild, collagenase injection, needle aponeurotomy, or fasciectomy if severe (unable to place hand flat on table).",
            overview: "[Content coming soon]"
        }
    }
];

export default musculoskeletalDiseases;

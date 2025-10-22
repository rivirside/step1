// Rheumatology Diseases (Placeholder)
const rheumatologyDiseases = [
    {
        id: "rheumatoid-arthritis",
        name: "Rheumatoid Arthritis",
        system: "rheumatology",
        categories: ["inflammatory-arthritis"],
        severity: "high",
        acuity: "chronic",
        tags: ["autoimmune", "symmetric", "small-joints", "RF", "anti-CCP"],
        detail: {
            definition: "Chronic autoimmune inflammatory arthritis. Symmetric small joint polyarthritis (MCPs, PIPs, wrists). Morning stiffness >1hr. RF+, anti-CCP+. Extra-articular: rheumatoid nodules, ILD, pericarditis.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "osteoarthritis",
        name: "Osteoarthritis",
        system: "rheumatology",
        categories: ["osteoarthritis-crystal-arthropathy"],
        severity: "medium",
        acuity: "chronic",
        tags: ["degenerative", "DIP", "Heberden", "Bouchard"],
        detail: {
            definition: "Degenerative joint disease. Pain worsens with activity. DIPs > PIPs, CMC thumb, knees, hips. Heberden (DIP) and Bouchard (PIP) nodes. Normal ESR/CRP. X-ray: joint space narrowing, osteophytes, subchondral sclerosis/cysts.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "gout",
        name: "Gout",
        system: "rheumatology",
        categories: ["osteoarthritis-crystal-arthropathy"],
        severity: "medium",
        acuity: "acute",
        tags: ["crystal-arthropathy", "podagra", "uric-acid", "tophi"],
        detail: {
            definition: "Monosodium urate crystal deposition. Acute monoarticular arthritis (podagra - 1st MTP). Negatively birefringent needle-shaped crystals. ↑ uric acid (but can be normal during attack). Chronic: tophi, urate nephropathy.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "pseudogout",
        name: "Pseudogout (CPPD)",
        system: "rheumatology",
        categories: ["osteoarthritis-crystal-arthropathy"],
        severity: "medium",
        acuity: "acute",
        tags: ["crystal-arthropathy", "calcium-pyrophosphate", "knee"],
        detail: {
            definition: "Calcium pyrophosphate deposition disease. Acute monoarthritis (knee most common). Positively birefringent rhomboid crystals. X-ray: chondrocalcinosis.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "systemic-lupus-erythematosus",
        name: "Systemic Lupus Erythematosus (SLE)",
        system: "rheumatology",
        categories: ["connective-tissue-diseases"],
        severity: "high",
        acuity: "chronic",
        tags: ["autoimmune", "ANA", "malar-rash", "photosensitivity"],
        detail: {
            definition: "Systemic autoimmune disease. Malar rash, discoid rash, photosensitivity, oral ulcers, arthritis, serositis, renal, neurologic, hematologic. ANA+, anti-dsDNA (specific), anti-Smith (specific). Complement ↓ (C3, C4).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "scleroderma",
        name: "Scleroderma (Systemic Sclerosis)",
        system: "rheumatology",
        categories: ["connective-tissue-diseases"],
        severity: "high",
        acuity: "chronic",
        tags: ["autoimmune", "fibrosis", "Raynaud", "CREST"],
        detail: {
            definition: "Autoimmune disease with excessive collagen deposition. Limited (CREST: Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia, anti-centromere) vs diffuse (rapid skin thickening, renal crisis, ILD, anti-Scl-70).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "sjogrens-syndrome",
        name: "Sjögren's Syndrome",
        system: "rheumatology",
        categories: ["connective-tissue-diseases"],
        severity: "medium",
        acuity: "chronic",
        tags: ["autoimmune", "sicca", "dry-eyes", "dry-mouth"],
        detail: {
            definition: "Autoimmune exocrinopathy. Dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia). Anti-SSA (Ro), anti-SSB (La). Schirmer test, salivary gland biopsy. Associated with lymphoma risk.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "ankylosing-spondylitis",
        name: "Ankylosing Spondylitis",
        system: "rheumatology",
        categories: ["spondyloarthropathies"],
        severity: "medium",
        acuity: "chronic",
        tags: ["HLA-B27", "sacroiliitis", "inflammatory-back-pain", "bamboo-spine"],
        detail: {
            definition: "Chronic inflammatory arthritis of axial skeleton. Young men. Inflammatory back pain (improves with activity), morning stiffness. HLA-B27+. Sacroiliitis on X-ray/MRI. Bamboo spine (syndesmophytes). Extra-articular: uveitis, aortitis, apical lung fibrosis.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "polymyalgia-rheumatica",
        name: "Polymyalgia Rheumatica",
        system: "rheumatology",
        categories: ["myopathies-myositis"],
        severity: "medium",
        acuity: "chronic",
        tags: ["elderly", "proximal-weakness", "ESR"],
        detail: {
            definition: "Inflammatory condition in elderly (>50yo). Bilateral shoulder and hip girdle pain/stiffness. Markedly ↑ ESR/CRP. Normal CK. Dramatic response to low-dose prednisone. Associated with giant cell arteritis.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "dermatomyositis",
        name: "Dermatomyositis",
        system: "rheumatology",
        categories: ["myopathies-myositis"],
        severity: "high",
        acuity: "chronic",
        tags: ["autoimmune", "proximal-weakness", "rash", "heliotrope", "Gottron"],
        detail: {
            definition: "Inflammatory myopathy with characteristic rash. Proximal muscle weakness, ↑ CK, heliotrope rash (eyelids), Gottron papules (knuckles). EMG, muscle biopsy. Associated with malignancy (screen for cancer).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "psoriatic-arthritis",
        name: "Psoriatic Arthritis",
        system: "rheumatology",
        categories: ["inflammatory-arthritis", "spondyloarthropathies"],
        severity: "medium",
        acuity: "chronic",
        tags: ["HLA-B27", "psoriasis", "dactylitis", "pencil-in-cup"],
        detail: {
            definition: "Inflammatory arthritis associated with psoriasis. 5 patterns: asymmetric oligoarthritis (most common), symmetric polyarthritis (RA-like), DIP involvement, spondylitis, arthritis mutilans. Dactylitis (sausage digits), nail pitting. X-ray: pencil-in-cup deformity. HLA-B27+ if spondylitis. Treat: NSAIDs, DMARDs (methotrexate), TNF-α inhibitors.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "reactive-arthritis",
        name: "Reactive Arthritis (Reiter Syndrome)",
        system: "rheumatology",
        categories: ["spondyloarthropathies"],
        severity: "medium",
        acuity: "acute",
        tags: ["HLA-B27", "post-infectious", "triad", "cant-see-pee-climb"],
        detail: {
            definition: "Sterile arthritis following infection (GI: Salmonella, Shigella, Campylobacter, Yersinia; GU: Chlamydia). Classic triad: arthritis, urethritis, conjunctivitis (can't see, can't pee, can't climb a tree). Asymmetric oligoarthritis (lower extremities), dactylitis, enthesitis. Keratoderma blennorrhagicum, circinate balanitis. HLA-B27+. Usually self-limited. Treat: NSAIDs, treat underlying infection.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "polymyositis",
        name: "Polymyositis",
        system: "rheumatology",
        categories: ["myopathies-myositis"],
        severity: "high",
        acuity: "chronic",
        tags: ["autoimmune", "proximal-weakness", "CK"],
        detail: {
            definition: "Inflammatory myopathy without rash. Symmetric proximal muscle weakness (difficulty rising from chair, climbing stairs). ↑ CK, ↑ aldolase. Anti-Jo-1 (antisynthetase syndrome: ILD, mechanic's hands, Raynaud). EMG: fibrillations, positive sharp waves. Muscle biopsy: endomysial inflammation. Treat: corticosteroids, steroid-sparing agents (methotrexate, azathioprine).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "inclusion-body-myositis",
        name: "Inclusion Body Myositis",
        system: "rheumatology",
        categories: ["myopathies-myositis"],
        severity: "medium",
        acuity: "chronic",
        tags: ["elderly", "quadriceps", "finger-flexors", "steroid-resistant"],
        detail: {
            definition: "Most common myopathy in elderly >50yo. Insidious progressive weakness: quadriceps (frequent falls), finger flexors (trouble gripping), foot dorsiflexors. Asymmetric. Mild ↑ CK. Biopsy: rimmed vacuoles, inclusion bodies. Resistant to steroids/immunosuppression. Progressive, no effective treatment.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "mixed-connective-tissue-disease",
        name: "Mixed Connective Tissue Disease",
        system: "rheumatology",
        categories: ["connective-tissue-diseases"],
        severity: "medium",
        acuity: "chronic",
        tags: ["overlap-syndrome", "anti-U1-RNP", "Raynaud"],
        detail: {
            definition: "Overlap syndrome with features of SLE, scleroderma, polymyositis. Anti-U1-RNP (very high titers). Raynaud phenomenon, swollen hands, arthritis, myositis, ILD. Generally more favorable prognosis than individual diseases. Treat: based on organ involvement (steroids, immunosuppressants).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "giant-cell-arteritis",
        name: "Giant Cell Arteritis (Temporal Arteritis)",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "acute",
        tags: ["elderly", "headache", "jaw-claudication", "blindness"],
        detail: {
            definition: "Large vessel granulomatous vasculitis. Elderly >50yo. Severe headache, jaw claudication, vision loss (anterior ischemic optic neuropathy - emergency). Tender palpable temporal artery. Markedly ↑ ESR/CRP. Temporal artery biopsy (skip lesions - may be negative). Associated with polymyalgia rheumatica. Treat: immediate high-dose corticosteroids (prevent blindness, don't wait for biopsy).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "takayasu-arteritis",
        name: "Takayasu Arteritis",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "chronic",
        tags: ["large-vessel", "pulseless-disease", "young-women"],
        detail: {
            definition: "Large vessel granulomatous vasculitis. Young Asian women. Aorta and major branches. Constitutional symptoms, limb claudication, BP discrepancy between arms, diminished/absent pulses (pulseless disease), bruits. Renovascular hypertension, aortic regurgitation. ↑ ESR/CRP. Angiography or MRA/CTA. Treat: corticosteroids, immunosuppressants, revascularization if severe stenosis.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "polyarteritis-nodosa",
        name: "Polyarteritis Nodosa",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "acute",
        tags: ["medium-vessel", "HBV", "aneurysms"],
        detail: {
            definition: "Medium vessel necrotizing vasculitis. Associated with hepatitis B. Systemic: fever, weight loss, myalgias, arthralgias. Renal (renovascular HTN, renal infarcts, NOT glomerulonephritis), GI (mesenteric ischemia, bleeding), neuro (mononeuritis multiplex), skin (livedo reticularis, ulcers). Angiography: microaneurysms (string of beads), stenoses. p-ANCA negative. Treat: corticosteroids + cyclophosphamide.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "kawasaki-disease",
        name: "Kawasaki Disease",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "acute",
        tags: ["children", "coronary-aneurysms", "conjunctivitis"],
        detail: {
            definition: "Medium vessel vasculitis in children <5yo. Diagnostic criteria (≥5 days fever + 4/5): bilateral conjunctivitis (non-exudative), mucositis (strawberry tongue, cracked lips), rash, extremity changes (edema, erythema, desquamation), cervical lymphadenopathy. Coronary artery aneurysms (most serious complication → MI, sudden death). ↑ ESR/CRP, thrombocytosis. Echo. Treat: IVIG + aspirin (only disease where aspirin used in children) within 10 days.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "granulomatosis-with-polyangiitis",
        name: "Granulomatosis with Polyangiitis (GPA, Wegener's)",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "acute",
        tags: ["c-ANCA", "PR3", "upper-respiratory", "glomerulonephritis"],
        detail: {
            definition: "Small-medium vessel necrotizing granulomatous vasculitis. Triad: upper respiratory (sinusitis, nasal septal perforation, saddle-nose deformity), lower respiratory (pulmonary nodules, hemoptysis), glomerulonephritis (hematuria, RBC casts). c-ANCA (anti-PR3) 90%. Biopsy: necrotizing granulomas. Treat: corticosteroids + cyclophosphamide or rituximab.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "microscopic-polyangiitis",
        name: "Microscopic Polyangiitis",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "acute",
        tags: ["p-ANCA", "MPO", "pulmonary-renal-syndrome"],
        detail: {
            definition: "Small vessel necrotizing vasculitis without granulomas. Pulmonary-renal syndrome: pulmonary capillaritis (hemoptysis, alveolar hemorrhage) + rapidly progressive glomerulonephritis. p-ANCA (anti-MPO) 60-80%. No upper respiratory involvement (vs GPA). Biopsy: no granulomas (vs GPA). Treat: corticosteroids + cyclophosphamide or rituximab.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "eosinophilic-granulomatosis-with-polyangiitis",
        name: "Eosinophilic Granulomatosis with Polyangiitis (EGPA, Churg-Strauss)",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "acute",
        tags: ["eosinophilia", "asthma", "p-ANCA"],
        detail: {
            definition: "Small-medium vessel necrotizing granulomatous vasculitis. Triad: asthma (adult-onset), eosinophilia (>10%), vasculitis (multi-organ). Mononeuritis multiplex, pulmonary infiltrates, cardiac (myocarditis, main cause of death), GI, renal (less common than GPA/MPA). p-ANCA (anti-MPO) 40-60%. Treat: corticosteroids ± cyclophosphamide if severe organ involvement.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "iga-vasculitis",
        name: "IgA Vasculitis (Henoch-Schönlein Purpura)",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "medium",
        acuity: "acute",
        tags: ["children", "palpable-purpura", "IgA-deposition"],
        detail: {
            definition: "Small vessel IgA-mediated vasculitis. Children following URI. Classic tetrad: palpable purpura (buttocks, lower extremities), arthritis/arthralgias, abdominal pain (GI bleeding, intussusception), glomerulonephritis (IgA nephropathy). Biopsy: IgA deposition in vessel walls. Usually self-limited. Treat: supportive, steroids if severe GI/renal involvement.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "behcet-disease",
        name: "Behçet's Disease",
        system: "rheumatology",
        categories: ["vasculitis"],
        severity: "high",
        acuity: "chronic",
        tags: ["recurrent-oral-ulcers", "genital-ulcers", "uveitis"],
        detail: {
            definition: "Variable-size vessel vasculitis. Recurrent oral aphthous ulcers (most common), genital ulcers, uveitis (hypopyon), skin (erythema nodosum, pathergy test positive). CNS involvement, thrombosis (arterial/venous). More common in Middle East, Silk Road. HLA-B51. Treat: colchicine, corticosteroids, immunosuppressants (azathioprine, TNF-α inhibitors for severe disease).",
            overview: "[Content coming soon]"
        }
    }
];

export default rheumatologyDiseases;

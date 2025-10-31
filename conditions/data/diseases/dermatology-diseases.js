// Dermatology Diseases (Placeholder)
const dermatologyDiseases = [
    {
        id: "atopic-dermatitis",
        name: "Atopic Dermatitis (Eczema)",
        system: "dermatology",
        categories: ["rashes-dermatitis"],
        severity: "low",
        acuity: "chronic",
        tags: ["eczema", "atopy", "pruritus", "flexural"],
        detail: {
            definition: "Chronic inflammatory skin condition. Pruritic, erythematous, scaly patches in flexural areas (antecubital, popliteal). Personal/family history of atopy (asthma, allergic rhinitis). Xerosis. Treat: moisturizers, topical corticosteroids, tacrolimus, avoid triggers.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "psoriasis",
        name: "Psoriasis",
        system: "dermatology",
        categories: ["rashes-dermatitis"],
        severity: "medium",
        acuity: "chronic",
        tags: ["plaque", "silvery-scale", "extensor", "Auspitz"],
        detail: {
            definition: "Chronic inflammatory skin disease. Well-demarcated erythematous plaques with silvery scale on extensor surfaces (elbows, knees), scalp. Auspitz sign (pinpoint bleeding when scale removed). Nail pitting. Associated with psoriatic arthritis. Treat: topical steroids, vitamin D analogs, phototherapy, biologics (TNF-α, IL-17/23 inhibitors).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "contact-dermatitis",
        name: "Contact Dermatitis",
        system: "dermatology",
        categories: ["rashes-dermatitis"],
        severity: "low",
        acuity: "acute",
        tags: ["allergic", "irritant", "patch-test"],
        detail: {
            definition: "Allergic (type IV hypersensitivity, poison ivy, nickel) vs irritant (chemical). Pruritic erythematous vesicular rash in pattern of contact. Patch testing for allergen identification. Treat: avoid allergen, topical steroids, antihistamines.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "impetigo",
        name: "Impetigo",
        system: "dermatology",
        categories: ["infections-skin"],
        severity: "low",
        acuity: "acute",
        tags: ["bacterial", "honey-crusted", "strep", "staph"],
        detail: {
            definition: "Superficial bacterial skin infection. S. aureus, Strep pyogenes. Honey-crusted lesions on face/mouth. Non-bullous (most common) vs bullous (toxin-mediated). Highly contagious (children). Treat: topical mupirocin or oral antibiotics (cephalexin).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "herpes-simplex",
        name: "Herpes Simplex Virus (HSV)",
        system: "dermatology",
        categories: ["infections-skin"],
        severity: "low",
        acuity: "acute",
        tags: ["viral", "vesicles", "HSV-1", "HSV-2"],
        detail: {
            definition: "HSV-1 (orolabial) or HSV-2 (genital). Grouped vesicles on erythematous base. Painful. Primary infection worse than recurrence. Tzanck smear (multinucleated giant cells), PCR. Treat: acyclovir, valacyclovir.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "herpes-zoster",
        name: "Herpes Zoster (Shingles)",
        system: "dermatology",
        categories: ["infections-skin"],
        severity: "medium",
        acuity: "acute",
        tags: ["VZV", "dermatomal", "postherpetic-neuralgia"],
        detail: {
            definition: "Varicella-zoster virus reactivation. Painful vesicular rash in dermatomal distribution. Prodrome of pain before rash. Complications: postherpetic neuralgia (elderly), ophthalmic involvement (V1 - Hutchinson sign). Treat: antivirals within 72hrs (acyclovir, valacyclovir), pain management.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "tinea-infections",
        name: "Tinea Infections (Dermatophytosis)",
        system: "dermatology",
        categories: ["infections-skin"],
        severity: "low",
        acuity: "chronic",
        tags: ["fungal", "ringworm", "KOH"],
        detail: {
            definition: "Dermatophyte fungal infection. Tinea corporis (ringworm - annular), pedis (athlete's foot), cruris (jock itch), capitis (scalp - kerion), unguium (onychomycosis). KOH prep shows hyphae. Treat: topical antifungals (clotrimazole, terbinafine); oral for scalp/nails.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "melanoma",
        name: "Melanoma",
        system: "dermatology",
        categories: ["neoplasms-skin"],
        severity: "high",
        acuity: "chronic",
        tags: ["skin-cancer", "ABCDE", "metastatic"],
        detail: {
            definition: "Malignant melanocytic neoplasm. ABCDE: Asymmetry, Border irregular, Color variegated, Diameter >6mm, Evolving. Subtypes: superficial spreading (most common), nodular (worst prognosis), lentigo maligna (sun-exposed elderly), acral lentiginous (palms/soles, darker skin). Biopsy: Breslow depth determines prognosis. Treat: wide local excision ± sentinel lymph node biopsy, immunotherapy/targeted therapy if metastatic.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "basal-cell-carcinoma",
        name: "Basal Cell Carcinoma",
        system: "dermatology",
        categories: ["neoplasms-skin"],
        severity: "low",
        acuity: "chronic",
        tags: ["skin-cancer", "pearly", "sun-exposure"],
        detail: {
            definition: "Most common skin cancer. Pearly papule with rolled borders, telangiectasias, central ulceration. Sun-exposed areas (face, nose). Slow-growing, locally invasive, rarely metastasizes. Biopsy confirms. Treat: excision, Mohs surgery, cryotherapy, topical 5-FU/imiquimod.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "squamous-cell-carcinoma",
        name: "Squamous Cell Carcinoma (SCC)",
        system: "dermatology",
        categories: ["neoplasms-skin"],
        severity: "medium",
        acuity: "chronic",
        tags: ["skin-cancer", "ulcerated", "actinic-keratosis"],
        detail: {
            definition: "Second most common skin cancer. Scaly, ulcerated, indurated plaque/nodule. Arises from actinic keratosis. Sun-exposed areas, chronic wounds, immunosuppression. Can metastasize (higher risk on lip, ear, genitals). Biopsy confirms. Treat: excision, Mohs surgery, radiation.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "stevens-johnson-syndrome",
        name: "Stevens-Johnson Syndrome / TEN",
        system: "dermatology",
        categories: ["drug-reactions-skin"],
        severity: "high",
        acuity: "acute",
        tags: ["drug-reaction", "epidermal-necrosis", "emergency"],
        detail: {
            definition: "Severe drug reaction. SJS (<10% BSA), SJS-TEN overlap (10-30%), TEN (>30%). Fever, mucosal involvement, targetoid lesions → widespread epidermal necrosis, positive Nikolsky sign. Medications: sulfonamides, anticonvulsants (phenytoin, carbamazepine), allopurinol, NSAIDs. Treat: stop offending drug, ICU/burn unit, supportive care (fluids, wound care), IVIG or cyclosporine.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "pemphigus-vulgaris",
        name: "Pemphigus Vulgaris",
        system: "dermatology",
        categories: ["autoimmune-bullous"],
        severity: "high",
        acuity: "chronic",
        tags: ["autoimmune", "intraepidermal-blisters", "Nikolsky"],
        detail: {
            definition: "Autoimmune intraepidermal blistering disease. Anti-desmoglein 3 (mucosal) and 1 (skin) antibodies. Flaccid blisters/bullae that rupture easily, oral ulcers (often first manifestation), positive Nikolsky sign. Biopsy: tombstone pattern on H&E, IgG on DIF (intercellular). Treat: high-dose corticosteroids, steroid-sparing agents (azathioprine, mycophenolate), rituximab.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "bullous-pemphigoid",
        name: "Bullous Pemphigoid",
        system: "dermatology",
        categories: ["autoimmune-bullous"],
        severity: "medium",
        acuity: "chronic",
        tags: ["autoimmune", "subepidermal-blisters", "elderly"],
        detail: {
            definition: "Autoimmune subepidermal blistering disease. Anti-BP180 and BP230 (hemidesmosome) antibodies. Elderly. Tense bullae on urticarial base, pruritus. Often spares mucosa (vs pemphigus). Biopsy: subepidermal split, linear IgG at BMZ on DIF. Treat: topical or systemic corticosteroids, doxycycline.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "dermatitis-herpetiformis",
        name: "Dermatitis Herpetiformis",
        system: "dermatology",
        categories: ["autoimmune-bullous"],
        severity: "medium",
        acuity: "chronic",
        tags: ["gluten", "IgA", "celiac-disease"],
        detail: {
            definition: "Cutaneous manifestation of celiac disease. IgA antibodies to tissue transglutaminase. Intensely pruritic vesicles on extensor surfaces (elbows, knees, buttocks), scalp. Granular IgA deposits at dermal papillae on DIF. Associated with celiac disease. Treat: gluten-free diet, dapsone.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "vitiligo",
        name: "Vitiligo",
        system: "dermatology",
        categories: ["pigmentation-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["depigmentation", "autoimmune", "melanocyte-destruction"],
        detail: {
            definition: "Autoimmune destruction of melanocytes. Well-demarcated depigmented (white) patches. Often symmetric, periorbital, hands, genitals. Associated with other autoimmune diseases (thyroid, T1DM, pernicious anemia, Addison). Wood's lamp accentuates. Treat: topical corticosteroids, calcineurin inhibitors, phototherapy, camouflage.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "melasma",
        name: "Melasma (Chloasma)",
        system: "dermatology",
        categories: ["pigmentation-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["hyperpigmentation", "pregnancy", "mask-of-pregnancy"],
        detail: {
            definition: "Hyperpigmentation on face. Pregnant women, OCPs, sun exposure. Brown/gray-brown patches on cheeks, forehead, upper lip (mask of pregnancy). Worsens with sun. Treat: sunscreen, hydroquinone, tretinoin, chemical peels.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "alopecia-areata",
        name: "Alopecia Areata",
        system: "dermatology",
        categories: ["hair-nail-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["autoimmune", "patchy-hair-loss", "exclamation-point-hairs"],
        detail: {
            definition: "Autoimmune hair loss. Well-demarcated round/oval patches of hair loss on scalp/beard. Exclamation point hairs at periphery. Nail pitting. Can progress to totalis (entire scalp) or universalis (entire body). Associated with vitiligo, thyroid disease. Treat: intralesional steroids, topical immunotherapy (DPCP), JAK inhibitors.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "androgenetic-alopecia",
        name: "Androgenetic Alopecia (Male/Female Pattern Baldness)",
        system: "dermatology",
        categories: ["hair-nail-disorders"],
        severity: "low",
        acuity: "chronic",
        tags: ["DHT", "miniaturization", "hereditary"],
        detail: {
            definition: "Most common cause of hair loss. Androgen-mediated miniaturization of hair follicles. Men: receding hairline, vertex balding (Hamilton-Norwood scale). Women: central scalp thinning (Ludwig scale). Treat: minoxidil (topical vasodilator), finasteride (5-alpha reductase inhibitor, men only), hair transplant.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "onychomycosis",
        name: "Onychomycosis",
        system: "dermatology",
        categories: ["hair-nail-disorders", "infections-skin"],
        severity: "low",
        acuity: "chronic",
        tags: ["fungal", "nail-infection", "dermatophyte"],
        detail: {
            definition: "Fungal infection of nail. Dermatophytes (T. rubrum most common), Candida, molds. Thickened, discolored (yellow/white), brittle nails. Subungual debris. KOH prep or fungal culture. Treat: oral terbinafine or itraconazole (topical ineffective for toenails), nail debridement.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "acne-vulgaris",
        name: "Acne Vulgaris",
        system: "dermatology",
        categories: ["rashes-dermatitis"],
        severity: "low",
        acuity: "chronic",
        tags: ["comedones", "P-acnes", "adolescent"],
        detail: {
            definition: "Follicular plugging with sebum and keratin. Adolescents/young adults. Comedones (blackheads, whiteheads), papules, pustules, nodules, cysts. Face, chest, back. P. acnes bacteria. Treat: topical retinoids + benzoyl peroxide, topical/oral antibiotics (doxycycline), OCPs (women), isotretinoin (severe, teratogenic).",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "rosacea",
        name: "Rosacea",
        system: "dermatology",
        categories: ["rashes-dermatitis"],
        severity: "low",
        acuity: "chronic",
        tags: ["facial-erythema", "telangiectasia", "rhinophyma"],
        detail: {
            definition: "Chronic facial inflammatory condition. Adults. Central facial erythema, telangiectasias, papules/pustules (no comedones). Triggers: alcohol, spicy food, heat. Subtypes: erythematotelangiectatic, papulopustular, phymatous (rhinophyma - bulbous nose), ocular. Treat: metronidazole gel, azelaic acid, doxycycline, brimonidine (vasoconstrictor), laser for telangiectasias.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "seborrheic-dermatitis",
        name: "Seborrheic Dermatitis",
        system: "dermatology",
        categories: ["rashes-dermatitis"],
        severity: "low",
        acuity: "chronic",
        tags: ["greasy-scale", "dandruff", "Malassezia"],
        detail: {
            definition: "Chronic inflammatory dermatitis. Greasy, yellowish scale on erythematous base. Scalp (dandruff), face (nasolabial folds, eyebrows), chest. Malassezia yeast. Worsens with stress, cold, Parkinson's, HIV. Treat: selenium sulfide or ketoconazole shampoo, topical steroids.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "erythema-multiforme",
        name: "Erythema Multiforme",
        system: "dermatology",
        categories: ["drug-reactions-skin"],
        severity: "medium",
        acuity: "acute",
        tags: ["target-lesions", "HSV", "mycoplasma"],
        detail: {
            definition: "Immune-mediated reaction. Target (iris) lesions with 3 zones (dusky center, pale middle, erythematous outer). Hands/feet (palms/soles), extensor surfaces. Triggers: HSV (most common), Mycoplasma pneumoniae, drugs. Minor (skin only) vs major (with mucosal involvement - 1 site). Treat: supportive, treat underlying cause, acyclovir if HSV.",
            overview: "[Content coming soon]"
        }
    },
    {
        id: "urticaria",
        name: "Urticaria (Hives)",
        system: "dermatology",
        categories: ["drug-reactions-skin"],
        severity: "low",
        acuity: "acute",
        tags: ["wheals", "pruritus", "histamine"],
        detail: {
            definition: "Wheals (raised, edematous, erythematous plaques) with central pallor. Pruritic. Individual lesions last <24hrs (migrate). Acute (<6 weeks - allergens, infections, drugs) vs chronic (>6 weeks - autoimmune, idiopathic). Angioedema (deeper, non-pitting). Treat: antihistamines (H1 blockers), avoid triggers, epinephrine if anaphylaxis.",
            overview: "[Content coming soon]"
        }
    },
    { id: "pityriasis-rosea", name: "Pityriasis Rosea", system: "dermatology", categories: ["rashes-dermatitis"], severity: "low", acuity: "acute", tags: ["herald-patch", "Christmas-tree", "self-limited"], detail: { definition: "Self-limited papulosquamous eruption. Herald patch (single large oval salmon-pink patch with collarette scale, trunk) appears first, then 1-2 weeks later: generalized eruption of smaller oval patches along skin tension lines (Langer lines) → Christmas tree pattern on back. Mild pruritus. Young adults. Viral prodrome (likely HHV-6/7). Resolves spontaneously in 6-8 weeks. Inverse pityriasis rosea: flexural areas (groin, axillae). Treat: reassurance, self-limited. Antihistamines for itch, UV light may hasten resolution. DDx: secondary syphilis (check RPR if involves palms/soles, sexually active), tinea corporis, guttate psoriasis.", overview: "[Content coming soon]" } },
    { id: "seborrheic-keratosis", name: "Seborrheic Keratosis", system: "dermatology", categories: ["skin-lesions"], severity: "low", acuity: "chronic", tags: ["benign", "stuck-on", "hyperkeratosis"], detail: { definition: "Benign epidermal tumor. 'Stuck-on' appearance (waxy, sharply demarcated, raised, brown/black plaques with keratin plugs). Common in elderly (almost universal >50 years). Face, trunk, extremities. Multiple lesions. Asymptomatic (cosmetic concern). Leser-Trélat sign: sudden onset of multiple seborrheic keratoses → suggests underlying visceral malignancy (gastric adenocarcinoma). Dermoscopy: milia-like cysts, comedo-like openings, fissures/ridges (brain-like). No malignant potential. Treat: no treatment needed. Cryotherapy, curettage, or shave excision if symptomatic or cosmetically bothersome. DDx: melanoma (if pigmented - biopsy if concern), wart, actinic keratosis.", overview: "[Content coming soon]" } },
    { id: "actinic-keratosis", name: "Actinic Keratosis", system: "dermatology", categories: ["skin-lesions"], severity: "medium", acuity: "chronic", tags: ["precancerous", "sun-damage", "SCC"], detail: { definition: "Precancerous lesion (dysplastic keratinocytes confined to epidermis). Rough, scaly, erythematous papules/plaques on sun-exposed areas (face, scalp, dorsal hands, forearms, lips). 'Sandpaper' texture - easier to feel than see. Caused by chronic UV exposure. Fair-skinned, elderly, outdoor workers. Risk of progression to squamous cell carcinoma (SCC): 0.1-10% per lesion per year. Actinic cheilitis (lower lip - red, scaly, blurred vermillion border - higher SCC risk). Cutaneous horn: hyperkeratotic projection from AK. Treat: field therapy (multiple lesions - 5-fluorouracil cream, imiquimod cream, photodynamic therapy, chemical peel) OR lesion-directed (single lesion - cryotherapy with liquid nitrogen [most common], curettage). Prevent: sun protection (sunscreen, hats, avoid peak sun). Monitor for SCC (enlarging, ulcerated, bleeding lesion). DDx: seborrheic keratosis (stuck-on, not scaly), SCC (induration, ulceration, nodular), Bowen disease (SCC in situ - larger, well-demarcated plaque).", overview: "[Content coming soon]" } }
];

export default dermatologyDiseases;

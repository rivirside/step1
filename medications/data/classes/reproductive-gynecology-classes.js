// Reproductive/Gynecology - Therapeutic and Pharmacologic Classes
// Auto-generated from modularize-data.js

const classes = [
    {
        "id": "combined-oral-contraceptives",
        "name": "Combined Oral Contraceptives",
        "therapeuticClass": "hormonal-contraceptives",
        "system": "reproductive-gynecology",
        "mechanism": "Estrogen and progestin suppress LH/FSH, prevent ovulation.",
        "sideEffects": [
            "Thromboembolism",
            "Hypertension",
            "Breast tenderness",
            "Nausea"
        ],
        "interactions": "CYP450 inducers reduce efficacy, antibiotics may reduce efficacy.",
        "interactionDetails": "CYP450 INDUCERS: MECHANISM - Rifampin, phenytoin increase hepatic metabolism of contraceptive hormones, reducing levels. CONSEQUENCE - Breakthrough bleeding and contraceptive failure. Use backup contraception.",
        "drugIds": [
            "ethinyl-estradiol-norethindrone",
            "ethinyl-estradiol-levonorgestrel",
            "ethinyl-estradiol-drospirenone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "progestin-only-contraceptives",
        "name": "Progestin-Only Contraceptives",
        "therapeuticClass": "hormonal-contraceptives",
        "system": "reproductive-gynecology",
        "mechanism": "Thicken cervical mucus, thin endometrium, some ovulation suppression.",
        "sideEffects": [
            "Irregular bleeding",
            "Weight gain",
            "Mood changes"
        ],
        "interactions": "CYP450 inducers reduce efficacy.",
        "interactionDetails": "",
        "drugIds": [
            "norethindrone-mini-pill",
            "medroxyprogesterone-depo",
            "levonorgestrel-iud"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "hormonal-contraceptives",
        "name": "Hormonal Contraceptives",
        "system": "reproductive-gynecology",
        "pharmacologicClassIds": [
            "combined-oral-contraceptives",
            "progestin-only-contraceptives"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "estrogens",
        "name": "Estrogens",
        "therapeuticClass": "reproductive-hormones",
        "system": "reproductive-gynecology",
        "mechanism": "Estrogen receptor agonists, multiple physiologic effects.",
        "sideEffects": [
            "Thromboembolism",
            "Breast cancer risk",
            "Endometrial hyperplasia"
        ],
        "interactions": "CYP450 inducers reduce levels.",
        "interactionDetails": "",
        "drugIds": [
            "estradiol",
            "conjugated-estrogens"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "progestins",
        "name": "Progestins",
        "therapeuticClass": "reproductive-hormones",
        "system": "reproductive-gynecology",
        "mechanism": "Progesterone receptor agonists, oppose estrogen effects.",
        "sideEffects": [
            "Weight gain",
            "Mood changes",
            "Breast tenderness"
        ],
        "interactions": "CYP450 interactions vary by agent.",
        "interactionDetails": "",
        "drugIds": [
            "progesterone",
            "medroxyprogesterone"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "reproductive-hormones",
        "name": "Reproductive Hormones",
        "system": "reproductive-gynecology",
        "pharmacologicClassIds": [
            "estrogens",
            "progestins"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "oxytocics",
        "name": "Oxytocics",
        "therapeuticClass": "labor-and-delivery",
        "system": "reproductive-gynecology",
        "mechanism": "Stimulate uterine contractions via oxytocin receptors.",
        "sideEffects": [
            "Uterine rupture",
            "Water intoxication",
            "Hypotension"
        ],
        "interactions": "Vasoconstrictors (severe hypertension).",
        "interactionDetails": "",
        "drugIds": [
            "oxytocin",
            "methylergonovine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "tocolytics",
        "name": "Tocolytics",
        "therapeuticClass": "labor-and-delivery",
        "system": "reproductive-gynecology",
        "mechanism": "Suppress uterine contractions to delay preterm labor.",
        "sideEffects": [
            "Pulmonary edema",
            "Tachycardia",
            "Hyperglycemia"
        ],
        "interactions": "Beta-agonists with corticosteroids increase pulmonary edema risk.",
        "interactionDetails": "",
        "drugIds": [
            "terbutaline",
            "nifedipine"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "labor-and-delivery",
        "name": "Labor and Delivery",
        "system": "reproductive-gynecology",
        "pharmacologicClassIds": [
            "oxytocics",
            "tocolytics"
        ],
        "pageType": "therapeutic-class"
    },
    {
        "id": "pde5-inhibitors",
        "name": "PDE5 Inhibitors",
        "therapeuticClass": "erectile-dysfunction",
        "system": "reproductive-gynecology",
        "mechanism": "Inhibit phosphodiesterase-5, increasing cGMP levels and causing vasodilation.",
        "sideEffects": [
            "Headache",
            "Flushing",
            "Nasal congestion",
            "Visual disturbances"
        ],
        "interactions": "Nitrates (severe hypotension), alpha-blockers (hypotension).",
        "interactionDetails": "NITRATES: MECHANISM - Nitrates increase cGMP levels through nitric oxide release. PDE5 inhibitors prevent cGMP breakdown by inhibiting phosphodiesterase-5. CONSEQUENCE - Synergistic vasodilation leads to severe, potentially life-threatening hypotension that may not respond to fluids and requires vasopressors.",
        "drugIds": [
            "sildenafil",
            "tadalafil",
            "vardenafil"
        ],
        "pageType": "pharmacologic-class"
    },
    {
        "id": "erectile-dysfunction",
        "name": "Erectile Dysfunction",
        "system": "reproductive-gynecology",
        "pharmacologicClassIds": [
            "pde5-inhibitors"
        ],
        "pageType": "therapeutic-class"
    }
];

export default classes;

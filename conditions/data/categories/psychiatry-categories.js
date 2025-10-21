// Psychiatry categories, symptoms, and syndromes
const psychiatryCategories = [
    {
        id: "mood-disorders",
        name: "Mood Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "major-depressive-disorder",
            "bipolar-disorder-type-1",
            "bipolar-disorder-type-2",
            "persistent-depressive-disorder",
            "cyclothymic-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders characterized by disturbances in mood (depression or mania/hypomania). Major categories: depressive disorders (MDD, persistent depressive disorder) and bipolar disorders (bipolar I, bipolar II, cyclothymia). High morbidity, suicide risk, functional impairment.",
            classification: [
                "Depressive disorders: MDD (≥2 weeks depressed mood/anhedonia + SIG E CAPS), persistent depressive disorder (dysthymia - chronic ≥2 years)",
                "Bipolar I: ≥1 manic episode (DIG FAST ≥1 week, marked impairment or hospitalization)",
                "Bipolar II: ≥1 hypomanic episode (4-7 days, less severe, no marked impairment) + ≥1 major depressive episode (NO full mania)",
                "Cyclothymic disorder: chronic mood instability ≥2 years (hypomanic + depressive symptoms not meeting full criteria)"
            ],
            generalPrinciples: [
                "Screening: PHQ-9 for depression (≥10 = likely MDD), MDQ for bipolar (screen BEFORE starting antidepressant)",
                "Suicide risk assessment CRITICAL at every visit: ask directly about SI, plan, intent, means, prior attempts. Highest risk in MDD, bipolar (mixed/depressive episodes).",
                "MDD treatment: SSRIs first-line (sertraline, escitalopram), CBT, combination superior. ECT for severe/refractory.",
                "Bipolar treatment: mood stabilizers (lithium gold standard), antipsychotics. AVOID antidepressant monotherapy (can trigger mania).",
                "High comorbidity: anxiety disorders (60%), substance abuse (50%), medical conditions (bidirectional)"
            ]
        }
    },
    {
        id: "anxiety-disorders",
        name: "Anxiety Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "generalized-anxiety-disorder",
            "panic-disorder",
            "social-anxiety-disorder",
            "obsessive-compulsive-disorder",
            "post-traumatic-stress-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Excessive fear, anxiety, and avoidance behaviors causing significant distress/impairment. Categories: generalized anxiety (GAD), panic disorder, social anxiety, specific phobias, OCD, PTSD. Lifetime prevalence 30%. Female predominance. High comorbidity with depression.",
            classification: [
                "GAD: excessive worry about multiple topics ≥6 months, difficult to control, physical symptoms",
                "Panic disorder: recurrent unexpected panic attacks + persistent concern/avoidance",
                "Social anxiety: fear of social situations, scrutiny, embarrassment",
                "Specific phobia: fear of specific object/situation (heights, animals, blood)",
                "OCD: obsessions (intrusive thoughts) + compulsions (repetitive behaviors)",
                "PTSD: trauma exposure → intrusive memories, avoidance, negative mood, hyperarousal"
            ],
            generalPrinciples: [
                "First-line: SSRIs (escitalopram, sertraline) or SNRIs (venlafaxine). CBT equally effective. Combination superior.",
                "Benzodiazepines: SHORT-TERM only (<4 weeks) for severe symptoms while SSRI takes effect. Avoid long-term (dependence risk).",
                "CBT techniques: exposure therapy, cognitive restructuring, relaxation training, interoceptive exposure (panic)",
                "High comorbidity: MDD (60%), substance abuse (self-medication with alcohol, benzos)",
                "Rule out medical causes: hyperthyroidism, cardiac arrhythmia, pheochromocytoma, hypoglycemia, caffeine"
            ]
        }
    },
    {
        id: "obsessive-compulsive-related-disorders",
        name: "Obsessive-Compulsive and Related Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "obsessive-compulsive-disorder",
            "body-dysmorphic-disorder",
            "hoarding-disorder",
            "trichotillomania",
            "excoriation-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders characterized by repetitive thoughts and behaviors. Separated from anxiety disorders in DSM-5. Includes body dysmorphic disorder (preoccupation with perceived appearance flaws), hoarding disorder (difficulty discarding possessions), trichotillomania (hair pulling), excoriation disorder (skin picking). Share features: repetitive behaviors, unsuccessful attempts to decrease/stop, causing distress/impairment.",
            classification: [
                "Body dysmorphic disorder (BDD): preoccupation with perceived defects in appearance (not observable/slight). Repetitive behaviors (mirror checking, skin picking, reassurance-seeking). Insight poor to absent.",
                "Hoarding disorder: persistent difficulty discarding possessions regardless of value, cluttered living space, distress/impairment. Distinct from OCD.",
                "Trichotillomania (hair-pulling disorder): recurrent pulling out of hair → hair loss, repeated attempts to decrease/stop",
                "Excoriation disorder (skin-picking disorder): recurrent skin picking → lesions, repeated attempts to stop"
            ],
            generalPrinciples: [
                "Treatment: SSRIs (higher doses than depression/anxiety - similar to OCD doses) + CBT",
                "CBT for BDD: exposure with response prevention (ERP), cognitive restructuring. Avoid reassurance, mirror checking.",
                "CBT for trichotillomania/excoriation: habit reversal training (awareness, competing response)",
                "Hoarding: specialized CBT (motivational interviewing, decision-making skills, exposure). Medications less effective.",
                "High comorbidity: MDD (75% with BDD), OCD (30%), social anxiety, substance abuse",
                "BDD high suicide risk: 25% attempt. Assess at every visit. Avoid cosmetic procedures (ineffective, often worsen symptoms)."
            ]
        }
    },
    {
        id: "psychotic-disorders",
        name: "Psychotic Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "schizophrenia",
            "schizoaffective-disorder",
            "brief-psychotic-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders characterized by loss of contact with reality: delusions, hallucinations, disorganized thinking/behavior. Primary psychotic disorders (schizophrenia, schizoaffective) vs secondary (mood disorder with psychotic features, substance-induced, medical).",
            classification: [
                "Schizophrenia: psychotic symptoms ≥1 month + total duration ≥6 months, functional impairment. Positive (delusions, hallucinations) + negative symptoms (flat affect, avolition).",
                "Schizoaffective: psychotic symptoms + major mood episode. Psychosis for ≥2 weeks WITHOUT mood.",
                "Brief psychotic disorder: ≥1 day but <1 month, full recovery",
                "Schizophreniform: schizophrenia symptoms <6 months duration",
                "Delusional disorder: non-bizarre delusions, no hallucinations, functioning preserved"
            ],
            generalPrinciples: [
                "Antipsychotics: atypical (risperidone, olanzapine, quetiapine, aripiprazole) first-line. Fewer EPS, but metabolic side effects.",
                "Clozapine: most effective for treatment-resistant (failed ≥2 trials), but requires CBC monitoring (agranulocytosis 1%)",
                "Monitor: metabolic (weight, glucose, lipids q3 months), EPS, tardive dyskinesia (AIMS q6 months)",
                "Psychosocial: CBT for psychosis, family therapy, supported employment, assertive community treatment",
                "Rule out secondary causes: substance (PCP, amphetamines, cannabis), medical (tumor, HIV, neurosyphilis, autoimmune)",
                "Complications: suicide 10%, substance abuse 50%, tardive dyskinesia, metabolic syndrome"
            ]
        }
    },
    {
        id: "substance-use-disorders",
        name: "Substance Use Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "alcohol-use-disorder",
            "opioid-use-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Maladaptive pattern of substance use leading to significant impairment/distress. DSM-5: ≥2 criteria (out of 11) within 12 months. Severity: mild (2-3), moderate (4-5), severe (≥6). High morbidity, mortality, comorbidity with other psychiatric disorders.",
            classification: [
                "Alcohol: most common. Withdrawal life-threatening (delirium tremens). Treat with benzodiazepines, thiamine.",
                "Opioids: heroin, prescription pain medications. Withdrawal uncomfortable but not dangerous. Treat with methadone, buprenorphine, naltrexone.",
                "Stimulants: cocaine, amphetamines. Withdrawal causes depression, fatigue. No FDA-approved pharmacotherapy.",
                "Cannabis: most commonly used illicit drug. Withdrawal: irritability, insomnia, decreased appetite.",
                "Benzodiazepines: withdrawal dangerous (seizures). Slow taper required."
            ],
            generalPrinciples: [
                "Screening: CAGE (alcohol), AUDIT, DAST (drugs)",
                "Treatment: detoxification, rehabilitation, psychosocial (AA/NA, CBT, motivational interviewing), pharmacotherapy",
                "Alcohol withdrawal: benzodiazepines (CIWA protocol), thiamine (prevent Wernicke's), folate, multivitamin",
                "Opioid use disorder: medication-assisted treatment (MAT) - methadone, buprenorphine (reduces mortality 50%)",
                "Naloxone (Narcan): opioid overdose reversal. Intranasal or IM. Prescribe to all patients on opioids.",
                "High comorbidity: mood disorders (40%), anxiety, PTSD, personality disorders"
            ]
        }
    },
    {
        id: "eating-disorders",
        name: "Eating Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "anorexia-nervosa",
            "bulimia-nervosa",
            "binge-eating-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Abnormal eating behaviors and preoccupation with weight/shape causing significant distress/impairment. Anorexia (restriction), bulimia (binge/purge), binge eating disorder. Female predominance (10:1). High mortality (anorexia highest mortality of psychiatric disorders 5-10%).",
            classification: [
                "Anorexia nervosa: restriction → significantly low weight, intense fear of weight gain, distorted body image. Subtypes: restricting vs binge-eating/purging.",
                "Bulimia nervosa: recurrent binge eating + compensatory behaviors (vomiting, laxatives, exercise) ≥1x/week for 3 months. Normal/overweight.",
                "Binge eating disorder: recurrent binge eating WITHOUT compensatory behaviors. Overweight/obese. Most common eating disorder."
            ],
            generalPrinciples: [
                "Medical complications: anorexia (bradycardia, hypothermia, osteoporosis, amenorrhea), bulimia (electrolyte abnormalities, dental erosion, esophageal tears)",
                "Refeeding syndrome: anorexia treatment complication. Hypophosphatemia → cardiac arrhythmias, seizures, death. Monitor electrolytes closely.",
                "Treatment: nutrition rehabilitation, psychotherapy (CBT, family-based therapy for adolescents), treat medical complications",
                "Medications: limited role. Fluoxetine for bulimia (only FDA-approved). No effective medication for anorexia.",
                "Hospitalization criteria: <75% ideal body weight, vital sign instability, severe electrolyte abnormalities, suicidal"
            ]
        }
    },
    {
        id: "personality-disorders",
        name: "Personality Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "borderline-personality-disorder",
            "antisocial-personality-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Enduring patterns of inner experience/behavior deviating from cultural expectations, pervasive and inflexible, onset adolescence/early adulthood, causing distress/impairment. Cluster A (odd/eccentric), B (dramatic/emotional), C (anxious/fearful).",
            classification: [
                "Cluster A (odd): Paranoid, Schizoid, Schizotypal",
                "Cluster B (dramatic): Antisocial, Borderline, Histrionic, Narcissistic",
                "Cluster C (anxious): Avoidant, Dependent, Obsessive-Compulsive"
            ],
            generalPrinciples: [
                "Borderline PD: unstable relationships, self-image, affects; impulsivity, self-harm, chronic emptiness, fear of abandonment. Treat with DBT (dialectical behavior therapy).",
                "Antisocial PD: disregard for others' rights, deceitfulness, impulsivity, aggression, lack of remorse. Must be ≥18yo, conduct disorder before age 15.",
                "Treatment: psychotherapy primary (CBT, DBT, psychodynamic). Medications for comorbid conditions (depression, anxiety) or symptom management.",
                "High comorbidity: mood disorders, anxiety, substance abuse, other personality disorders",
                "Prognosis: variable. Borderline may improve with age (40s-50s). Antisocial rarely improves."
            ]
        }
    },
    {
        id: "neurodevelopmental-disorders",
        name: "Neurodevelopmental Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "adhd",
            "autism-spectrum-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Developmental deficits causing impairment in personal, social, academic, or occupational functioning. Onset in developmental period (childhood). Includes intellectual disabilities, ADHD, autism spectrum disorder, learning disorders, tic disorders.",
            classification: [
                "ADHD: inattention and/or hyperactivity-impulsivity ≥6 months, onset before age 12, present in ≥2 settings. Subtypes: inattentive, hyperactive-impulsive, combined.",
                "Autism spectrum disorder: social communication deficits + restricted/repetitive behaviors, onset early development. Spectrum (mild to severe)."
            ],
            generalPrinciples: [
                "ADHD treatment: stimulants first-line (methylphenidate, amphetamines) - improve symptoms 70-80%. Behavioral therapy. Non-stimulants: atomoxetine, guanfacine, clonidine.",
                "ADHD adults: persists in 50-65%. Continue treatment if impairment. Screen for substance abuse, mood/anxiety disorders.",
                "Autism: early intervention critical (ABA - applied behavior analysis, speech/occupational therapy). No cure. Medications for comorbid conditions (irritability, hyperactivity).",
                "Screening: M-CHAT (autism, age 18-24 months), Conners (ADHD)",
                "High comorbidity: ADHD (anxiety, depression, ODD, learning disabilities), Autism (intellectual disability, epilepsy, anxiety)"
            ]
        }
    },
    {
        id: "trauma-stressor-disorders",
        name: "Trauma and Stressor-Related Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "adjustment-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders following exposure to traumatic or stressful event. Includes PTSD, acute stress disorder, adjustment disorders. Symptoms: intrusion, avoidance, negative alterations in cognition/mood, hyperarousal.",
            classification: [
                "PTSD: exposure to trauma → intrusive memories, avoidance, negative mood/cognition, hyperarousal ≥1 month",
                "Acute stress disorder: similar to PTSD but 3 days to 1 month duration (PTSD if >1 month)",
                "Adjustment disorder: emotional/behavioral symptoms in response to identifiable stressor within 3 months, <6 months after stressor ends"
            ],
            generalPrinciples: [
                "Treatment: trauma-focused psychotherapy (prolonged exposure, CPT), EMDR, CBT. SSRIs/SNRIs for PTSD.",
                "Adjustment disorder: supportive therapy, brief psychotherapy, remove/cope with stressor. Symptoms resolve within 6 months.",
                "Screen for comorbid depression, anxiety, substance abuse",
                "PTSD medications: sertraline, paroxetine (FDA-approved). Prazosin for nightmares."
            ]
        }
    },
    {
        id: "sleep-wake-disorders",
        name: "Sleep-Wake Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "insomnia-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Disorders of sleep-wake regulation causing significant distress/impairment. Includes insomnia, hypersomnolence, narcolepsy, sleep apnea, circadian rhythm disorders, parasomnias. Insomnia most common (10-15% chronic).",
            classification: [
                "Insomnia disorder: difficulty initiating/maintaining sleep ≥3 nights/week for ≥3 months",
                "Sleep apnea: obstructive (OSA) or central. Snoring, witnessed apneas, daytime sleepiness",
                "Narcolepsy: excessive daytime sleepiness, cataplexy, hypnagogic hallucinations, sleep paralysis",
                "Circadian rhythm disorders: delayed/advanced sleep phase, shift work disorder, jet lag"
            ],
            generalPrinciples: [
                "Insomnia: CBT-I (cognitive-behavioral therapy for insomnia) first-line. Medications short-term only.",
                "Sleep hygiene: regular sleep schedule, avoid caffeine/alcohol, dark/quiet bedroom, limit screen time",
                "Rule out medical causes: sleep apnea, restless legs, pain, medications, substances",
                "High comorbidity: depression (50%), anxiety, substance abuse"
            ]
        }
    },
    {
        id: "somatic-symptom-disorders",
        name: "Somatic Symptom and Related Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "somatic-symptom-disorder",
            "illness-anxiety-disorder",
            "factitious-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Excessive focus on somatic symptoms and health concerns causing significant distress/impairment. Includes somatic symptom disorder, illness anxiety disorder (hypochondriasis), conversion disorder, factitious disorder. Differentiate from malingering (intentional for external gain).",
            classification: [
                "Somatic symptom disorder: ≥1 somatic symptom + excessive thoughts/feelings/behaviors about symptoms ≥6 months",
                "Illness anxiety disorder (hypochondriasis): preoccupation with having/acquiring serious illness despite minimal symptoms",
                "Conversion disorder (functional neurological symptom disorder): neurological symptoms (paralysis, blindness, seizures) not explained by medical condition",
                "Factitious disorder: falsifying symptoms/illness for psychological need (sick role), NOT external gain"
            ],
            generalPrinciples: [
                "Regular scheduled visits with single provider (avoid doctor shopping, unnecessary tests)",
                "Acknowledge symptoms as real (not 'in your head'), but shift focus to functioning",
                "CBT: address catastrophic thinking, health anxiety",
                "Rule out medical causes, but avoid excessive testing (reinforces belief)",
                "Factitious disorder: confront gently, set boundaries, psychiatric referral. NOT malingering (external gain)."
            ]
        }
    },
    {
        id: "dissociative-disorders",
        name: "Dissociative Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "dissociative-identity-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Disruption of consciousness, memory, identity, emotion, perception, or behavior. Includes dissociative identity disorder (DID), dissociative amnesia, depersonalization/derealization disorder. Strong association with trauma.",
            classification: [
                "Dissociative identity disorder (DID): ≥2 distinct personality states, recurrent gaps in recall, severe trauma history (childhood abuse 85-95%)",
                "Dissociative amnesia: inability to recall important autobiographical information (trauma-related)",
                "Depersonalization/derealization disorder: persistent feelings of detachment from self (depersonalization) or surroundings (derealization)"
            ],
            generalPrinciples: [
                "DID: trauma-focused therapy (phase-oriented - safety/stabilization, trauma processing, integration)",
                "Strong association with childhood trauma (especially DID - 85-95% severe abuse)",
                "Rule out neurological causes: seizures, TBI, dementia, substance use",
                "Comorbid PTSD, depression, anxiety common"
            ]
        }
    },
    {
        id: "disruptive-impulse-control-disorders",
        name: "Disruptive, Impulse-Control, and Conduct Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "oppositional-defiant-disorder",
            "conduct-disorder",
            "intermittent-explosive-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Problems with emotional/behavioral self-control: aggression, defiance, rule violations, impulsivity. Includes ODD, conduct disorder, intermittent explosive disorder. Onset childhood/adolescence (except IED). High comorbidity with ADHD.",
            classification: [
                "Oppositional defiant disorder (ODD): angry/irritable mood, argumentative/defiant behavior, vindictiveness ≥6 months. Onset childhood. Comorbid ADHD 50%.",
                "Conduct disorder: aggression to people/animals, property destruction, deceitfulness/theft, serious rule violations. Onset <18yo. Becomes antisocial PD if ≥18.",
                "Intermittent explosive disorder: recurrent impulsive aggression (verbal/physical) out of proportion to stressor"
            ],
            generalPrinciples: [
                "ODD: parent management training, individual therapy. Comorbid ADHD 50% - treat ADHD improves ODD.",
                "Conduct disorder: multisystemic therapy, family therapy. High risk antisocial PD (if onset continues ≥18yo).",
                "High comorbidity: ADHD (50% with ODD/conduct disorder), learning disabilities, substance abuse",
                "Early intervention critical: prevent progression (ODD → conduct disorder → antisocial PD)"
            ]
        }
    },
    {
        id: "neurocognitive-disorders",
        name: "Neurocognitive Disorders",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "delirium",
            "major-neurocognitive-disorder"
        ],
        pageType: "category",
        detail: {
            overview: "Decline from previous level of cognitive functioning. Delirium (acute, reversible) vs dementia (chronic, progressive). Delirium: medical emergency, fluctuating consciousness, inattention. Dementia: gradual cognitive decline affecting memory, language, executive function.",
            classification: [
                "Delirium: acute (hours-days), fluctuating consciousness, inattention, medical cause (infection, medications, metabolic). REVERSIBLE if treat cause.",
                "Major neurocognitive disorder (dementia): gradual cognitive decline interfering with independence. Alzheimer's (most common 60-70%), vascular, Lewy body, frontotemporal.",
                "Mild neurocognitive disorder: modest cognitive decline NOT interfering with independence (mild cognitive impairment - MCI)"
            ],
            generalPrinciples: [
                "Delirium: identify and treat underlying cause (infection, medications, metabolic, hypoxia). Supportive care, reorient, avoid restraints.",
                "Dementia: no cure. Treat symptoms (cholinesterase inhibitors for Alzheimer's), manage behaviors, support caregivers.",
                "Rule out reversible causes of dementia: B12 deficiency, hypothyroidism, normal pressure hydrocephalus, depression (pseudodementia)",
                "High morbidity: delirium increases mortality, length of stay, risk of dementia. Dementia progressive decline, caregiver burden."
            ]
        }
    },
    {
        id: "gender-dysphoria",
        name: "Gender Dysphoria",
        system: "psychiatry",
        type: "pathophysiologic",
        diseaseIds: [
            "gender-dysphoria"
        ],
        pageType: "category",
        detail: {
            overview: "Marked incongruence between experienced/expressed gender and assigned gender, causing clinically significant distress. Onset childhood or adolescence/adulthood. Treatment: social transition, hormone therapy, surgery if desired (gender-affirming care).",
            classification: [
                "Gender dysphoria in children: strong preference for other gender, discomfort with assigned gender",
                "Gender dysphoria in adolescents/adults: marked incongruence, desire to be other gender, distress/impairment"
            ],
            generalPrinciples: [
                "Treatment: gender-affirming care (social transition, hormone therapy if desired, surgery if desired)",
                "Children: social transition, puberty blockers (reversible) if approaching puberty",
                "Adolescents/adults: hormone therapy (testosterone for transgender men, estrogen for transgender women), gender-affirming surgery",
                "Mental health support: therapy to cope with distress, discrimination, family/social support",
                "High comorbidity: depression, anxiety, suicidality (often related to discrimination, lack of support)"
            ]
        }
    }
];

export default psychiatryCategories;

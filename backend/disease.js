const diseases = [
  {
    name: "flu",
    symptoms: ["fever", "cough", "sore throat", "body aches", "fatigue"],
    description:
      "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness and spreads through respiratory droplets from infected individuals.",
    treatments: [
      "Rest and fluid intake are recommended to manage the flu and promote recovery. Antiviral medications such as Oseltamivir (Tamiflu) may be prescribed to shorten the duration of symptoms. It is essential to stay home to prevent spreading the virus to others.",
      "Proper hand hygiene, such as frequent handwashing, can help reduce the risk of flu transmission.",
      "Over-the-counter medications, such as acetaminophen or ibuprofen, can help alleviate fever and body aches.",
      "Avoiding close contact with sick individuals and using face masks can prevent flu spread.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "malaria",
    symptoms: ["fever", "chills", "headache", "nausea", "muscle aches"],
    description:
      "Malaria is a mosquito-borne infectious disease that affects humans and other animals. It is caused by the Plasmodium parasite and commonly transmitted through the bite of infected mosquitoes.",
    treatments: [
      "Antimalarial medications, such as Artemether-Lumefantrine, are prescribed to treat malaria and clear the parasite from the body. Bed rest and staying hydrated are essential for recovery and restoring energy levels.",
      "Preventive measures like using insecticide-treated bed nets and mosquito repellents can reduce the risk of infection.",
      "Early diagnosis and treatment are crucial to prevent severe complications such as cerebral malaria.",
      "People traveling to malaria-endemic areas should take prophylactic antimalarial medications before, during, and after their trip.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kolebu Teaching Hospital, Accra"],
  },
  {
    name: "common_cold",
    symptoms: [
      "sore throat",
      "runny nose",
      "cough",
      "sneezing",
      "mild headache",
    ],
    description:
      "The common cold is a viral infection that primarily affects the nose and throat. It causes symptoms such as sore throat, runny nose, cough, sneezing, and a mild headache.",
    treatments: [
      "Rest and proper hydration are essential to support the body's immune response and recovery. Drinking warm liquids like tea or soup can soothe a sore throat and provide comfort.",
      "Over-the-counter cold medications containing antihistamines or decongestants can help alleviate symptoms.",
      "Gargling with warm saltwater can ease a sore throat and reduce inflammation.",
      "Using a humidifier or steam inhalation can help relieve nasal congestion and improve breathing.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Afari Community Hospital, Kumasi"],
  },
  {
    name: "bronchitis",
    symptoms: [
      "cough",
      "shortness of breath",
      "chest discomfort",
      "mucus production",
      "low-grade fever",
    ],
    description:
      "Bronchitis is an inflammation of the bronchial tubes, which carry air to the lungs. It causes symptoms such as a persistent cough, shortness of breath, chest discomfort, mucus production, and a low-grade fever.",
    treatments: [
      "Rest and avoiding irritants, such as smoking and air pollutants, can help the bronchial tubes heal. Drinking plenty of fluids can help thin mucus and make coughing more productive.",
      "Cough suppressants can provide temporary relief from a persistent cough, but they are not recommended for productive coughs.",
      "Bronchodilators, typically delivered through an inhaler, can help open the airways and improve breathing.",
      "In some cases, antibiotics may be prescribed if the bronchitis is caused by a bacterial infection.",
    ],
    facilities: [
      "Claron Health International, Accra or Cedarcrest Hospitals Ghana, Accra",
    ],
  },
  {
    name: "pneumonia",
    symptoms: [
      "fever",
      "cough",
      "shortness of breath",
      "chest pain",
      "fatigue",
    ],
    description:
      "Pneumonia is an infection that inflames the air sacs in one or both lungs. It causes symptoms such as fever, cough, shortness of breath, chest pain, and fatigue.",
    treatments: [
      "Antibiotics are prescribed if the pneumonia is bacterial. It is essential to complete the full course of antibiotics as prescribed by the healthcare provider.",
      "Rest and increased fluid intake help the body fight the infection and support recovery.",
      "Oxygen therapy may be necessary for severe cases to maintain adequate oxygen levels in the blood.",
      "Pain relievers can help alleviate chest pain and reduce fever, but they do not treat the underlying infection.",
    ],
    facilities: [
      "Komfo Anokye Teaching hospital, Kumasi or Ernest Chemists Hospital, Accra",
    ],
  },
  {
    name: "asthma",
    symptoms: [
      "shortness of breath",
      "wheezing",
      "cough",
      "chest tightness",
      "increased mucus production",
    ],
    description:
      "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways. It causes symptoms such as shortness of breath, wheezing, cough, chest tightness, and increased mucus production.",
    treatments: [
      "Inhaled corticosteroids are the mainstay of asthma treatment and help reduce airway inflammation. They are used as a controller medication to prevent asthma symptoms.",
      "Bronchodilators, such as short-acting beta-agonists, provide quick relief by relaxing the airway muscles and improving breathing during asthma attacks.",
      "Allergy management, such as avoiding triggers and using allergy medications, can help prevent asthma exacerbations triggered by allergens.",
      "Creating and following an asthma action plan helps individuals recognize and manage asthma symptoms effectively.",
    ],
    facilities: [
      "Komfo Anokye Teaching Hospital, Kumasi or 37 Military Hospital, Accra",
    ],
  },
  {
    name: "diabetes",
    symptoms: [
      "frequent urination",
      "excessive thirst",
      "unexplained weight loss",
      "fatigue",
      "blurred vision",
    ],
    description:
      "Diabetes is a chronic condition that affects the body's ability to regulate blood sugar levels. It causes symptoms such as frequent urination, excessive thirst, unexplained weight loss, fatigue, and blurred vision.",
    treatments: [
      "Insulin therapy is prescribed for individuals with Type 1 diabetes to help regulate blood sugar levels. It involves injecting insulin under the skin using a syringe, pen, or insulin pump.",
      "Oral medications, such as Metformin, are used for Type 2 diabetes to improve insulin sensitivity and control blood sugar.",
      "Dietary management, including carb counting and balanced meals, is crucial for diabetes management and blood sugar control.",
      "Regular physical activity helps improve insulin sensitivity and maintain a healthy weight for diabetes management.",
    ],
    facilities: ["Bethel Hospital, Tema or Special Ice Hospital, Accra"],
  },
  {
    name: "hypertension",
    symptoms: [
      "high blood pressure","headaches","dizziness","fatigue","chest pain",
    ],
    description:
      "Hypertension, or high blood pressure, is a condition in which the force of blood against the artery walls is too high. It often has no symptoms but may cause headaches, dizziness, fatigue, and chest pain.",
    treatments: [
      "Lifestyle modifications play a crucial role in managing hypertension. This includes adopting a heart-healthy diet, reducing sodium intake, exercising regularly, and quitting smoking.",
      "Antihypertensive medications, such as ACE inhibitors or diuretics, may be prescribed to control blood pressure levels.",
      "Regular blood pressure monitoring is essential to track changes and adjust treatment if necessary.",
      "Stress management techniques, such as meditation and deep breathing exercises, can help reduce blood pressure.",
    ],
    facilities: [
      'Korle-Bu Teaching Hospital, Accra or Sunshine Healthcare Limited, Kumasi'
    ],
  },
  {
    name: "gastritis",
    symptoms: [
      "abdominal pain",
      "nausea",
      "vomiting",
      "indigestion",
      "loss of appetite",
    ],
    description:
      "Gastritis is an inflammation of the stomach lining. It causes symptoms such as abdominal pain, nausea, vomiting, indigestion, and loss of appetite.",
    treatments: [
      "Antacids can help neutralize stomach acid and provide relief from gastritis-related discomfort. Proton pump inhibitors may be prescribed to reduce stomach acid production and promote healing of the stomach lining.",
      "Dietary changes, such as avoiding spicy or acidic foods, can help reduce stomach irritation.",
      "Avoiding alcohol and nonsteroidal anti-inflammatory drugs (NSAIDs) can prevent gastritis exacerbation.",
      "Eating smaller, more frequent meals can help ease digestion and reduce stomach irritation.",
    ],
    facilities: [
      "Olive Medical Hospital, Kumasi or Tema General Hospital, Tema",
    ],
  },
  {
    name: "urinary_tract_infection",
    symptoms: [
      "painful urination",
      "frequent urination",
      "lower abdominal pain",
      "cloudy urine",
      "blood in urine",
    ],
    description:
      "A urinary tract infection (UTI) is an infection in any part of the urinary system. It causes symptoms such as frequent urination, painful urination, lower abdominal pain, cloudy urine, and blood in urine.",
    treatments: [
      "Antibiotics are prescribed to treat UTIs and clear the bacterial infection from the urinary system. It is crucial to complete the full course of antibiotics as prescribed by the healthcare provider.",
      "Drinking plenty of fluids can help flush bacteria from the urinary system and promote healing.",
      "Over-the-counter pain relievers, such as ibuprofen, can help alleviate discomfort and pain associated with UTIs.",
      "Practicing good hygiene, such as wiping from front to back and urinating before and after sexual activity, can help prevent UTIs.",
    ],
    facilities: [
      "Okomfo Anokye Teaching Hospital, Kumasi or Sunshine Healthcare Limited, Kumasi",
    ],
  },
  
  {
    name: "Iron Deficiency Anemia",
    symptoms: [ "Fatigue", "weakness", "pale skin", "shortness of breath", "dizziness", "cold hands and feet"], 
    description: "Iron deficiency anemia occurs when there is insufficient iron to produce hemoglobin, necessary for red blood cells to carry oxygen throughout the body.",
    treatment: [
      "Iron supplementation, dietary changes to include iron-rich foods (like red meat, beans, and fortified cereals), and addressing underlying causes of iron loss or malabsorption."
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Vitamin D Deficiency",
    symptoms: ["Bone pain", "muscle weakness", "increased risk of fractures", "rickets"],
    description: "Vitamin D deficiency results from inadequate sunlight exposure or dietary intake, crucial for calcium absorption and bone health.",
    treatment: ["Vitamin D supplementation, increased sunlight exposure, and dietary sources of vitamin D such as fatty fish and fortified foods."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"]
    },
    {
    name: "Vitamin B12 Deficiency (Pernicious Anemia)",
    symptoms: ["Fatigue", "weakness", "pale skin", "shortness of breath", "numbness or tingling in hands and feet", "difficulty walking", "cognitive difficulties"], 
    description: "Vitamin B12 deficiency can occur due to poor dietary intake, malabsorption, or insufficient intrinsic factor, leading to megaloblastic anemia and neurological symptoms.",
    treatment: ["Vitamin B12 injections or high-dose oral supplements, addressing underlying causes like pernicious anemia or malabsorption disorders."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Iodine Deficiency",
    symptoms: [ "Swelling of the thyroid gland (goiter) ", "fatigue", "weight gain", "cold intolerance", "dry skin",  "cognitive impairment"],
    description: "Iodine deficiency results in inadequate thyroid hormone production, causing goiter and potentially hypothyroidism.",
    treatment: [ "Iodine supplementation, iodized salt, and dietary sources such as seafood and dairy products."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Vitamin A Deficiency",
    symptoms: [ "Night blindness", "dry eyes", "increased susceptibility to infections", "dry skin", "xerophthalmia (blindness due to corneal damage)"],
    description: "Vitamin A deficiency occurs due to inadequate dietary intake of retinoids or carotenoids, essential for vision, immune function, and cell growth.",
    treatment: [ "Vitamin A supplementation, increasing intake of foods rich in preformed vitamin A (like liver, eggs, and dairy) or provitamin A carotenoids (such as carrots and leafy greens)."],
    facilities: ["KNUST Hospital, Kumasi", "Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Calcium Deficiency",
    symptoms: [ "Muscle cramps", "numbness and tingling in fingers", "weakened bones", "heart rhythm disturbances"],
    description: "Calcium deficiency results from inadequate dietary intake or absorption, leading to weakened bones and increased risk of osteoporosis. ",
    treatment: [ "Calcium supplementation, increased intake of calcium-rich foods (like dairy products, leafy greens, and fortified foods), and vitamin D to enhance calcium absorption"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"]
    },
    {
    name: "Vitamin C Deficiency (Scurvy)",
    symptoms: [ "Fatigue", "weakness", "swollen and bleeding gums", "easy bruising", "joint pain", "impaired wound healing"],
    description: "Scurvy is caused by severe vitamin C deficiency, necessary for collagen synthesis, leading to weakened connective tissues and blood vessels.",
    treatment: [ "Vitamin C supplementation, increasing intake of vitamin C-rich foods (such as citrus fruits, strawberries, and bell peppers"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"]
    },
    {
    name: "Folate Deficiency",
    symptoms: [ "Fatigue", "weakness", "megaloblastic anemia", "shortness of breath"],
    description: "Folate deficiency results from inadequate dietary intake, impairing DNA synthesis and red blood cell production.  In pregnant women, neural tube defects in the fetus", 
    treatment: [" Folic acid supplementation, increasing intake of folate-rich foods (like leafy greens, beans, and fortified cereals"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"]
  },
    
    {
    name: "Zinc Deficiency",
    Symptoms: ["Growth retardation", "delayed sexual maturation", "impaired immune function", "hair loss", "dermatitis", "diarrhea"],
    Description: "Zinc deficiency occurs due to inadequate dietary intake or absorption, essential for immune function, wound healing, and cell division",
     Treatment: ["Zinc supplementation, increasing intake of zinc-rich foods (such as meat, shellfish, nuts, and seeds"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    
    {
    name: "Magnesium Deficiency",
    Symptoms: ["Muscle cramps", "tremors", "irregular heartbeat", "fatigue", "seizures" ,"numbness", "tingling"],
    Description: "Magnesium deficiency results from inadequate dietary intake or absorption, essential for muscle and nerve function, bone health, and energy production",
    Treatment: ["Magnesium supplementation, increasing intake of magnesium-rich foods like nuts, seeds, whole grains, and leafy greens."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Protein-Energy Malnutrition (PEM)",
    Symptoms: ["Poor growth", "muscle wasting", "fatigue", "weakened immune system", "edema"],
    Description: "Protein-energy malnutrition results from inadequate intake of protein and calories, leading to growth failure, muscle wasting, and impaired immune function",
    Treatment: [ "Nutritional rehabilitation with balanced protein and calorie intake, nutritional supplements, and addressing underlying causes such as food insecurity or illness."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    
    },
    {
    name: "Beriberi",
    Symptoms: ["Peripheral neuropathy", "muscle weakness", "fatigue", "difficulty walking", "cardiovascular complications"],
    Description: "Beriberi is caused by thiamine (vitamin B1) deficiency, affecting the nervous system and cardiovascular system",
    Treatment: ["Thiamine supplementation, increasing intake of thiamine-rich foods (like whole grains, beans, and fortified cereals."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    
    },
    {
     name: "Riboflavin Deficiency",
    Symptoms: ["Mouth cracks", "mouth redness", "sore throat", "mouth inflammation", "throat inflammation", "skin disorders"],
    Description: "Riboflavin (vitamin B2) deficiency results from inadequate dietary intake, affecting skin, eyes, and mucous membranes",
     Treatment: ["Riboflavin supplementation, increasing intake of riboflavin-rich foods (such as dairy products, meat, and leafy greens.)"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Pellagra",
    Symptoms: ["skin rash",  "diarrhea", "dementia"],
    Description:"Pellagra is caused by severe niacin (vitamin B3) deficiency, affecting the skin, digestive system, and nervous system",
     Treatment: ["Niacin supplementation, increasing intake of niacin-rich foods (like meat, fish, peanuts, and fortified cereals.)"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Copper Deficiency",
    Symptoms: [ "Anemia", "impaired immune function", "bone abnormalities", "neurological symptoms"],
    Description: "Copper deficiency occurs due to inadequate dietary intake or absorption, affecting multiple body systems including blood, bones, and nervous system",
    Treatment: ["Copper supplementation, increasing intake of copper-rich foods (like shellfish, nuts, seeds, and whole grains."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Choline Deficiency",
    Symptoms: ["Liver dysfunction", "muscle damage", "cognitive impairment", "fatty liver"],
    Description: "Choline deficiency results from inadequate dietary intake, essential for brain development, liver function, and nerve function",
    Treatment: ["Choline supplementation, increasing intake of choline-rich foods (like eggs, liver, peanuts, and soybeans"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Manganese Deficiency",
    Symptoms: ["Skeletal abnormalities", "impaired growth" , "muscle weakness", "neurological symptoms resembling Parkinson's disease"],
    Description: "Manganese deficiency occurs due to inadequate dietary intake, affecting bone development, metabolism, and neurological function",
     Treatment: ["Manganese supplementation, increasing intake of manganese-rich foods (like whole grains, nuts, seeds, and leafy greens"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Selenium Deficiency",
    Symptoms: [ "Muscle weakness", "fatigue", "hair loss", "Keshan disease"],
    Description: "Selenium deficiency results from inadequate dietary intake, essential for antioxidant function, thyroid hormone metabolism, and immune function",
     Treatment: ["Selenium supplementation, increasing intake of selenium-rich foods (like Brazil nuts, seafood, and whole grains"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Vitamin E Deficiency",
    Symptoms: ["Muscle weakness", "vision problems", "impaired immune function", "nerve damage"],
    Description: "Vitamin E deficiency occurs due to inadequate dietary intake, affecting immune function, skin health, and neurological function",
     Treatment: ["Vitamin E supplementation, increasing intake of vitamin E-rich foods (like nuts, seeds, vegetable oils, and green leafy vegetables"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Chlamydia",
    Symptoms: ["abnormal genital discharge", "burning sensation during urination"," intercourse pain", "pelvic pain", "testicular pain"],
    Description: "Chlamydia is a bacterial infection caused by *Chlamydia trachomatis. It is one of the most common STIs and can infect the genital tract, rectum, and throat",
    Treatment: ["Antibiotics, typically azithromycin or doxycycline. Both partners should be treated simultaneously to prevent reinfection"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Gonorrhea",
    Symptoms: ["painful urination", "abnormal genital discharge", "intermenstrual bleeding", "testicular pain", "testicular swelling"],
    Description: "Gonorrhea is a bacterial infection caused by *Neisseria gonorrhoeae. It can affect the genital tract, rectum, and throat",
    Treatment: ["Dual antibiotic therapy, usually ceftriaxone and azithromycin. Both partners should be treated to prevent reinfection"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Syphilis",
    Symptoms: ["Painless sore at the site of infection", "Skin rash", "mucous membrane lesions", "fever", "swollen lymph nodes"],
    Description: "Syphilis is a bacterial infection caused by Treponema pallidum. It progresses through stages: primary, secondary, latent, and tertiary",
    Treatment: [ "Penicillin injections. For those allergic to penicillin, other antibiotics such as doxycycline or tetracycline may be used"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Herpes Simplex Virus (HSV)",
    Symptoms: ["Painful blisters", "sores on genitals", "sore on rectum", "sore on mouth", "fever", "body aches", "lymph nodes"],
    Description: "HSV is a viral infection caused by HSV-1 (commonly causes oral herpes) or HSV-2 (commonly causes genital herpes)",
    Treatment: ["Antiviral medications such as acyclovir, valacyclovir, or famciclovir to reduce the frequency and severity of outbreaks. No cure exists for the virus"],
    facilities: ["KNUST Hospital, Kumasi", "Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Hepatitis B",
    Symptoms: ["fever", "fatigue", "loss of appetite", "nausea", "vomiting", "abdominal pain", "dark urine", "jaundice"],
    Description: "Hepatitis B is a viral infection that affects the liver. It can be transmitted through sexual contact, blood, and other bodily fluids",
     Treatment: ["No specific treatment for acute infection; chronic infection may be treated with antiviral medications. Vaccination is available for prevention"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Hepatitis C",
    Symptoms: ["fatigue", "jaundice", "abdominal pain", "dark urine", "liver damage"],
    Description: "Hepatitis C is a viral infection that affects the liver, primarily transmitted through blood but can also be sexually transmitted",
    Treatment: ["Antiviral medications, such as direct-acting antivirals (DAAs), which can cure the infection in most cases"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Chronic Kidney Injury",
    Symptoms: ["Fatigue", "Swollen feet and ankles", "shortness of breath", "Nausea", "Confusion"],
    Description: ["Chronic Kidney Injury is a long-term condition where the kidneys do not work as well as they should. It is usually a result of damage over many years, often due to diabetes or high blood pressure."],
    Treatment: ["Medications to control symptoms (e.g., blood pressure medications), Dietary changes, Dialysis in advanced stages, Kidney transplant in severe cases"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Acute Kidney Injury",
    Symptoms: ["Decreased urine", "Swelling legs", "swelling ankles", "swelling feet", "Fatigue", "Shortness of breath", "Confusion", "Chest pain"],
    Description: ["Acute Kidney Injury is a sudden episode of kidney failure or damage that happens within a few hours or days. It causes waste products to build up in the blood and makes it hard for the kidneys to maintain the right balance of fluid in the body."],
    Treatment: ["Treating the underlying cause, Hydration and fluid management, Medications to restore kidney function, Dialysis in severe cases"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Coronary Artery Infection",
    Symptoms: ["Chest pain", "Shortness of breath", "neck pain", "jaw pain", "throat pain", "upper abdominal pain", "back pain", "Fatigue"],
    Description: ["Coronary Artery Infection occurs when the major blood vessels that supply the heart with blood, oxygen, and nutrients (coronary arteries) become damaged or diseased. Cholesterol-containing deposits (plaques) and inflammation are usually to blame."],
    Treatment: ["Lifestyle changes (diet, exercise), Medications (cholesterol-lowering drugs, aspirin, beta-blockers), Procedures to restore blood flow (angioplasty, stent placement, coronary artery bypass surgery)"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name:"Heart Failure",
    Symptoms: ["Shortness of breath", "Fatigue", "Swollen legs", "swollen ankles", "swollen feet", "rapid heartbeat", "Persistent cough", "blood-tinged phlegm", "Increased night urination"],
    Description: ["Heart failure occurs when the heart muscle doesn't pump blood as well as it should. Certain conditions, such as narrowed arteries in the heart (coronary artery disease) or high blood pressure, gradually leave the heart too weak or stiff to fill and pump efficiently."],
    Treatment: ["Medications (ACE inhibitors, beta-blockers, diuretics), Lifestyle changes (diet, exercise, weight management), Devices (implantable cardioverter-defibrillators, pacemakers), Surgery or other procedures (coronary bypass surgery, heart valve repair or replacement)"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Stroke",
    Symptoms: ["weakness in the face", "weakness in the arm", "weakness in the leg", "Sudden confusion", "trouble speaking", "trouble walking", "dizziness", "loss of balance", "lack of coordination", "severe headache", "can't walk"],
    Description: ["A stroke occurs when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. A stroke can cause lasting brain damage, long-term disability, or even death."],
    Treatment: ["Emergency medical treatment, Medications to break up clots, Antiplatelet and anticoagulant drugs, surgery (carotid endarterectomy, aneurysm clipping), Rehabilitation (physical therapy, occupational therapy, speech therapy)"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Spinal Cord Injury",
    Symptoms: ["Loss of movement", "Loss of sensation", "difficult bladder control", "exaggerated reflex activities", "intense stinging sensation"],
    Description: ["A spinal cord injury is damage to any part of the spinal cord or nerves at the end of the spinal canal. This injury often causes permanent changes in strength, sensation, and other body functions below the site of the injury."],
    Treatment: ["Emergency medical attention, Medications to reduce inflammation, Surgery to remove bone fragments, foreign objects, herniated disks, or fractured vertebrae, Physical therapy and rehabilitation, Assistive devices (wheelchairs, braces)"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    
    },
    {
    name: "Ectopic Pregnancy",
    Symptoms: ["painful abdomen", "painful pelvis", "vaginal bleeding", "dizziness", "collapsing", "Shoulder pain"],
    Description: ["An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, usually in a fallopian tube. This can cause life-threatening bleeding and requires immediate medical attention."],
    Treatment: ["Medications (methotrexate) to stop cell growth and dissolve existing cells, Laparoscopic surgery to remove the ectopic pregnancy, Emergency surgery in cases of rupture and severe bleeding"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    
    },
    {
    name: "Type 1 Diabetes",
    Symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "weight loss", "Fatigue", "Blurred vision", "mood swings"],
    Description: ["Type 1 diabetes is a chronic condition in which the pancreas produces little or no insulin. It usually appears during childhood or adolescence but can develop in adults."],
    Treatment: ["Insulin therapy (injections or insulin pump), Monitoring blood sugar levels regularly, Healthy eating and physical activity, Managing stress and regular medical check-ups"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Earwax Buildup",
    Symptoms: ["ear fullness", "hearing loss", "ear ache"],
    Description: ["Accumulation of cerumen within the ear canal, potentially leading to conductive hearing loss, discomfort, and sometimes pain"],
    Treatment: ["Cerumenolytic agents, ear irrigation, or manual removal by a healthcare professional."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Eustachian Tube Dysfunction",
    Symptoms: ["muffled hearing", "ear fullness", "ear pain"],
    Description: ["Impairment in the patency or function of the Eustachian tube, resulting in symptoms of aural fullness, otalgia, and hearing impairment due to pressure dysregulation."],
    Treatment: ["Decongestants, antihistamines, nasal steroids, and sometimes Eustachian tube balloon dilation."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Perforated Eardrum",
    Symptoms: ["Otalgia", "hearing loss", "tinnitus", "otorrhea"],
    Description: ["A rupture or perforation of the tympanic membrane, which may arise from infections, trauma, or acoustic injury."],
    Treatment: ["Keeping the ear dry, antibiotic ear drops if infection is present, and in some cases, surgical repair (tympanoplasty)."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Temporal Bone Fracture",
    Symptoms: ["Hearing loss", "ear bleeding", "dizziness", "facial weakness"],
    Description: ["A fracture of the temporal bone, often resulting from head trauma. Clinical manifestations may include hearing loss, vertigo, facial nerve paralysis, and cerebrospinal fluid otorrhea."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    
    
    {
    name: "Varicose Veins",
    Symptoms: ["Aching pain", "swelling leg", "leg heaviness", "visible bulging veins"],
    Description: ["A Swollen, twisted veins that are visible under the skin, typically in the legs."],
    Treatment: ["Compression stockings, lifestyle changes, sclerotherapy, laser treatments, and surgery."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    
    {
    name: "Sever's Disease",
    Symptoms: ["Heel pain", "swelling heels", "tenderness"],
    Description: ["Inflammation of the growth plate in the heel of growing children."],
    Treatment: ["Rest, put ice on affected, and heel lifts or orthotic devices."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    {
    name: "Corns and Calluses",
    Symptoms: ["Hardened feet", "thickened feet", "pain under the skin"],
    Description: ["Thickened areas of skin caused by repeated pressure or friction."],
    Treatment: ["Padding, moisturizing, and removal of the thickened skin."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    
    {
    name: "Gout",
    Symptoms: ["joint pain", "joint swelling", "red joint", "warmth in joint"],
    Treatment: ["corticosteroids, colchicine, and medications to lower uric acid levels."],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    
    {
    name: "Plica Syndrome",
    Symptoms: ["Knee pain", "knee swelling", "clicking knee"],
    Description: ["Inflammation of the plica, a fold in the lining of the knee joint, causing pain and discomfort. "],
    Treatment: ["Rest, ice, physical therapy, and sometimes arthroscopic surgery"],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
    },
    
    
  {
    name: "Cataract",
    symptoms: ["Blurry vision", "difficulty seeing at night", "sensitivity to light and glare", "seeing halos around lights", "frequent changes in prescription glasses", "fading or yellowing of colors", "double vision in a single eye."],
    description:
      "A cataract is a clouding of the eye's natural lens, which lies behind the iris and the pupil. It is the most common cause of vision loss in people over 40 and the leading cause of blindness worldwide.",
    treatments: [
      "The primary treatment for cataracts is surgical removal of the cloudy lens, which is then replaced with a clear artificial lens called an intraocular lens (IOL).",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Glaucoma",
    symptoms: ["Patchy blind spots in your side (peripheral) or central vision", "frequently in both eyes", "tunnel vision in the advanced stages", "severe headache", "eye pain", "nausea and vomiting", "blurred vision", "halos around lights", "eye redness."],
    description:
      "Glaucoma is a group of eye conditions that damage the optic nerve, which is essential for good vision. This damage is often caused by abnormally high pressure in the eye.",
    treatments: [
      "Treatment options include prescription eye drops, oral medications, laser treatment, surgery, or a combination of these. The goal is to lower the intraocular pressure (IOP) to prevent further damage to the optic nerve."
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Age-related Macular Degeneration (AMD)",
    symptoms: ["Visual distortions", "such as straight lines seeming bent", "reduced central vision in one or both eyes", "the need for brighter light when reading or doing close work", "increased difficulty adapting to low light levels", "increased blurriness of printed words",  "difficulty recognizing faces."],
    description:
      "AMD is an eye disease that can blur your central vision. It happens when aging causes damage to the macula, the part of the eye that controls sharp, straight-ahead vision.",
    treatments: [
      "There is no cure, but treatment options include anti-angiogenic drugs, laser therapy, photodynamic laser therapy, and vitamins C and E, zinc, copper, lutein, and zeaxanthin."
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Diabetic Retinopathy",
    symptoms: ["Spots or dark strings floating in your vision (floaters) ", "blurred vision", "fluctuating vision", "impaired color vision", "dark or empty areas in your vision", "vision loss."],
    description:
      "Diabetic retinopathy is a diabetes complication that affects eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).",
    treatments: [
      "Treatment includes managing diabetes through diet, exercise, and medication. Advanced diabetic retinopathy may require laser treatment, vitrectomy, or injections of medications into the eye).",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Dry Eye Syndrome",
    symptoms: ["A stinging, burning, or scratchy sensation in your eyes", "stringy mucus in or around your eyes", "sensitivity to light", "eye redness", "a sensation of having something in your eyes", "difficulty wearing contact lenses", "difficulty with nighttime driving", "watery eyes", "blurred vision."],
    description:
      "Dry eye syndrome is a common condition that occurs when your tears aren't able to provide adequate lubrication for your eyes. This can be due to insufficient tear production or poor-quality tears.",
    treatments: [
      "Treatments include over-the-counter artificial tears, prescription medications, tear duct plugs, and changes in diet or environment to alleviate symptoms. In some cases, surgery may be necessary.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Conjunctivitis (Pink Eye)",
    symptoms: ["Redness in one or both eyes", "itchiness in one or both eyes", "a gritty feeling in one or both eyes", "discharge that forms a crust during the night", "tearing."],
    description:
      "Conjunctivitis, commonly known as pink eye, is an inflammation or infection of the transparent membrane (conjunctiva) that lines your eyelid and covers the white part of your eyeball.",
    treatments: [
      " Treatment depends on the cause: bacterial conjunctivitis is treated with antibiotic eye drops, viral conjunctivitis is usually self-limiting and treated with supportive care, and allergic conjunctivitis can be treated with allergy medications and avoiding allergens.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Keratitis",
    symptoms: ["Red eye", "eye pain", "excessive tearing or discharge", "difficulty opening your eyelid due to pain or irritation", "blurred vision", "decreased vision."],
    description:
      "Keratitis is an inflammation of the cornea, the clear dome that covers the front of the eye. It can be caused by infection, injury, or other diseases",
    treatments: [
      "Treatment depends on the cause. Bacterial keratitis is treated with antibacterial eye drops, viral keratitis with antiviral eye drops or oral medications, fungal keratitis with antifungal drops, and non-infectious keratitis with corticosteroid drops.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Uveitis",
    symptoms: ["Eye redness", "eye pain", "light sensitivity", "blurred vision", "dark, floating spots in your field of vision (floaters)."],
    description:
      "Uveitis is inflammation of the middle layer of the eye, known as the uvea. It can lead to redness, pain, and vision problems.",
    treatments: [
      "Treatment typically involves anti-inflammatory medications such as corticosteroid eye drops, oral medications, or injections. Immunosuppressive drugs may be necessary for severe cases.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Retinal Detachment",
    symptoms: ["Sudden appearance of floaters", "flashes of light in one or both eyes", "blurred vision", "gradually reduced side (peripheral) vision", "a curtain-like shadow over the visual field."],
    description:
      "Retinal detachment occurs when the retina, a thin layer of tissue at the back of the eye, pulls away from its normal position. This can cause permanent vision loss if not treated promptly.",
    treatments: [
      "Immediate surgery is usually required. Types of surgery include laser surgery, freezing (cryopexy), pneumatic retinopexy, scleral buckle, and vitrectomy",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Amblyopia (Lazy Eye)",
    symptoms: ["Poor depth perception", "squinting or shutting an eye", "head tilting", "abnormal results of vision screening tests", "one eye wandering inward or outward"],
    description:
      "Amblyopia, or lazy eye, is a vision development disorder in which an eye fails to achieve normal visual acuity, usually due to strabismus (misalignment of the eyes) or other vision issues.",
    treatments: [
      "Treatments include correcting any underlying vision problems (such as with glasses or contact lenses), patching the stronger eye to force the weaker eye to work harder, eye drops, and sometimes surgery.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
  {
    name: "Strabismus (Crossed Eyes)",
    symptoms: [" Misaligned eyes", "double vision", "impaired depth perception", "eyes that do not move together."],
    description:
      "Strabismus is a condition in which the eyes do not properly align with each other when looking at an object. One eye may turn in, out, up, or down while the other eye looks straight ahead.",
    treatments: [
      "Treatments include corrective glasses or contact lenses, prism lenses, vision therapy exercises, and surgery to adjust the muscles around the eyes.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: "Blepharitis",
    symptoms: ["Watery eyes", "red eyes", "a gritty, burning, or stinging sensation in the eyes", "eyelids that appear greasy", "itchy eyelids", "red and swollen eyelids", "flaking of the skin around the eyes", "crusted eyelashes upon waking", "eyelid sticking."],
    description:
      "Blepharitis is inflammation of the eyelids, typically involving the part of the eyelid where the eyelashes grow. It commonly occurs when the tiny oil glands near the base of the eyelashes become clogged.",
    treatments: [
      "Treatment includes regular cleaning of the eyelids, warm compresses, eyelid scrubs, and in some cases, antibiotic or steroid eye drops or ointments.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: "Corneal Ulcer",
    symptoms: [" Severe eye pain", "redness", "blurred vision", "sensitivity to light", "tearing, discharge from the eye", "a white spot on the cornea."],
    description:
      "A corneal ulcer is an open sore on the cornea, often resulting from infections. It can be caused by bacteria, viruses, fungi, or parasites.",
    treatments: [
      "Treatment depends on the cause but often includes antibacterial, antiviral, or antifungal eye drops. Severe cases may require oral medications or even corneal transplant surgery.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: "Presbyopia",
    symptoms: [" Difficulty reading small print, needing to hold reading material farther away, headaches or eyestrain after reading or doing close work, and blurred vision at normal reading distance."],
    description:
      "Presbyopia is the gradual loss of the eye's ability to focus on nearby objects, a condition that becomes noticeable in the early to mid-40s and continues to worsen until around age 65.",
    treatments: [
      "Treatments include corrective eyeglasses or contact lenses, reading glasses, bifocals, trifocals, progressive lenses, and in some cases, surgical options like LASIK or lens implants.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: "Myopia (Nearsightedness)",
    symptoms: [" Blurry vision when looking at distant objects", "the need to squint or partially close the eyelids to see clearly", "headaches caused by eye strain", "difficulty seeing while driving", "especially at night"],
    description:
      "Myopia is a condition where close objects appear clear, but distant objects appear blurry. It occurs when the eye is too long relative to the focusing power of the cornea and lens, causing light rays to focus in front of the retina.",
    treatments: [
"Treatments include prescription eyeglasses or contact lenses to correct the refractive error, and refractive surgery such as LASIK or PRK to reshape the cornea.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Hyperopia (Farsightedness)",
    symptoms: ["Blurry vision for close objects", "eye strain", "aching or burning eyes", "headaches after reading, writing, or working on a computer."],
    description:
      " Hyperopia is a condition where distant objects may be seen more clearly than close ones. It occurs when the eye is too short relative to the focusing power of the cornea and lens, causing light rays to focus behind the retina.",
    treatments: [
      " Treatments include prescription eyeglasses or contact lenses to correct the refractive error, and refractive surgery such as LASIK or PRK to reshape the cornea.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Astigmatism",
    symptoms: ["Blurry or distorted vision at all distances", "headaches", "eye strain", "difficulty with night vision."],
    description:
      " Astigmatism is a common condition that causes blurred vision due to an irregular shape of the cornea or lens, preventing light from focusing properly on the retina.",
    treatments: [
      " Treatments include prescription eyeglasses or contact lenses designed to compensate for the irregular curvature of the cornea, and refractive surgery such as LASIK or PRK to correct the shape of the cornea.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },

{
    name: " Anisometropia",
    symptoms: ["Blurry vision", "double vision", "headaches", "eye strain", "difficulty with depth perception", "In severe cases, it can lead to amblyopia (lazy eye) in one eye."],
    description:
      " Anisometropia is a condition where the two eyes have significantly different refractive powers, leading to unequal focus and potential difficulties with binocular vision.",
    treatments: [
      " Treatments include prescription eyeglasses or contact lenses that correct the refractive difference between the eyes. In some cases, refractive surgery may be considered to equalize the refractive powers of both eyes.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Allergic Conjunctivitis",
    symptoms: ["Red eyes", "itchy eyes", "watery eyes", "a burning sensation", "swollen eyelids", "sensitivity to light."],
    description:
      " Allergic conjunctivitis is an inflammation of the conjunctiva, the clear tissue covering the white part of the eye and the inside of the eyelids, caused by allergic reactions to substances like pollen, pet dander, or dust mites.",
    treatments: [
      " Treatments include avoiding allergens, using over-the-counter or prescription antihistamine eye drops, artificial tears, and oral antihistamines. In severe cases, corticosteroid eye drops may be prescribed.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Vernal Keratoconjunctivitis (VKC)",
    symptoms: ["Severe itching", "thick mucus discharge", "red eyes", "swollen eyelids", "photophobia (sensitivity to light) ", "Cobblestone-like bumps (papillae) may appear on the underside of the eyelids."],
    description:
     " VKC is a chronic, severe form of allergic conjunctivitis that primarily affects young boys and men. It is more common in warm climates and often occurs seasonally.",
    treatments: [
      "Treatments include avoiding allergens, using antihistamine and mast cell stabilizer eye drops, topical corticosteroids for severe inflammation, and immunomodulatory drugs. Cool compresses and artificial tears can provide symptomatic relief.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Atopic Keratoconjunctivitis (AKC)",
    symptoms: ["Intense itching", "eye redness", "tearing", "mucus discharge"," burning sensation",  "sensitivity to light", "Thickening and scaling of the eyelid skin are also common"],
    description:
      " AKC is a chronic, bilateral inflammation of the conjunctiva and cornea associated with atopic dermatitis. It primarily affects adults and can lead to significant eye complications if untreated.",
    treatments: [
      " Treatments include avoiding allergens, using antihistamine and mast cell stabilizer eye drops, topical corticosteroids, and immunomodulatory drugs. Proper management of underlying atopic dermatitis is also crucial.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Giant Papillary Conjunctivitis (GPC)",
    symptoms: ["Itchy eye", "mucus discharge", "eye redness", "a feeling of a foreign body in the eye", "Contact lens wearers may experience discomfort and an inability to tolerate lenses."],
    description:
       " GPC is an inflammatory condition of the conjunctiva, often associated with the prolonged use of contact lenses or the presence of an ocular prosthesis. It is characterized by the formation of large papillae on the underside of the eyelids.",
    treatments: [
      " Treatments include discontinuing contact lens use, switching to daily disposable lenses, using antihistamine and mast cell stabilizer eye drops, and ensuring proper lens hygiene. In severe cases, topical corticosteroids may be prescribed.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Seasonal Allergic Rhinitis (Hay Fever) with Ocular Symptoms",
    symptoms: ["Itchy eye", "red eye", "watery eyes", "sneezing, runny or stuffy nose", "itchy throat or ears."],
    description:
       " Seasonal allergic rhinitis, commonly known as hay fever, is an allergic response to outdoor allergens like pollen from trees, grasses, and weeds. It often presents with ocular symptoms.",
    treatments: [
      " Treatments include avoiding allergens, using over-the-counter or prescription antihistamines, decongestants, nasal corticosteroids, and antihistamine eye drops. Immunotherapy (allergy shots) may be considered for long-term relief.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Keratoconus",
    symptoms: ["Blurry or distorted vision", "increased sensitivity to light and glare", "difficulty seeing at night", "frequent changes in eyeglass prescriptions", "double vision in one eye"],
    description:
      " Keratoconus is a progressive eye disease where the cornea, which is normally round, thins and begins to bulge into a cone-like shape. This cone shape deflects light as it enters the eye on its way to the retina, causing distorted vision.",
    treatments: [
      " Treatments include prescription eyeglasses or contact lenses, corneal cross-linking to strengthen corneal tissue, and in advanced cases, corneal transplant surgery.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
{
    name: " Keratoconus",
    symptoms: ["Blurry or distorted vision", "increased sensitivity to light and glare", "difficulty seeing at night", "frequent changes in eyeglass prescriptions", "double vision in one eye."],
    description:
      " Keratoconus is a progressive eye disease where the cornea, which is normally round, thins and begins to bulge into a cone-like shape. This cone shape deflects light as it enters the eye on its way to the retina, causing distorted vision.",
    treatments: [
      " Treatments include prescription eyeglasses or contact lenses, corneal cross-linking to strengthen corneal tissue, and in advanced cases, corneal transplant surgery.",
    ],
    facilities: ["KNUST Hospital, Kumasi or Kokofu General Hospital, Kumasi"],
  },
];

module.exports = diseases;

let apiKey = 'e207638b02ecb23dabc2848f0b3931f6';
let limit = 100;
let apiObj, latitude, longitude;
let medicareDocs = [];
let specialtiesOptions = {
    0: "Women's Health Nurse Practitioner",
    1: "Vision Therapy",
    2: "Vascular Surgery",
    3: "Vascular & Interventional Radiology",
    4: "Urology",
    5: "Urology Female Pelvic Medicine and Reconstructive Surgery",
    6: "Undersea and Hyperbaric Medicine",
    7: "Transplant Surgery",
    8: "Transplant Hepatology",
    9: "Therapeutic Radiology",
    10: "Technician/Technologist",
    11: "Technician/Technologist Orthoptist",
    12: "Technician/Technologist Optometric Technician",
    13: "Technician/Technologist Optometric Assistant",
    14: "Technician/Technologist Optician",
    15: "Technician/Technologist Ophthalmic",
    16: "Technician/Technologist Ophthalmic Assistant",
    17: "Technician/Technologist Ocularist",
    18: "Technician/Technologist Contact Lens",
    19: "Technician/Technologist Contact Lens Fitter",
    20: "Surgical Oncology",
    21: "Surgery",
    22: "Surgery Trauma Surgery",
    23: "Surgery Surgical Critical Care",
    24: "Surgery of the Hand",
    25: "Surgery Hospice and Palliative Medicine",
    26: "Sports Vision",
    27: "Sports Physical Therapy",
    28: "Sports Medicine",
    29: "Sports Medicine Podiatry",
    30: "Spinal Cord Injury Medicine",
    31: "Speech Therapy",
    32: "Specialist/Technologist",
    33: "Specialist/Technologist Rehabilitation, Blind",
    34: "Specialist/Technologist Athletic Trainer",
    35: "Sleep Medicine",
    36: "School Psychology",
    37: "School Counseling",
    38: "Rheumatology",
    39: "Respiratory Therapist, Registered",
    40: "Respiratory Therapist, Registered SNF/Subacute Care",
    41: "Respiratory Therapist, Registered Pulmonary Rehabilitation",
    42: "Respiratory Therapist, Registered Pulmonary Function Technologist",
    43: "Respiratory Therapist, Registered Pulmonary Diagnostics",
    44: "Respiratory Therapist, Registered Patient Transport",
    45: "Respiratory Therapist, Registered Palliative/Hospice",
    46: "Respiratory Therapist, Registered Neonatal/Pediatrics",
    47: "Respiratory Therapist, Registered Home Health",
    48: "Respiratory Therapist, Registered Geriatric Care",
    49: "Respiratory Therapist, Registered General Care",
    50: "Respiratory Therapist, Registered Emergency Care",
    51: "Respiratory Therapist, Registered Educational",
    52: "Respiratory Therapist, Registered Critical Care",
    53: "Respiratory Therapist, Certified",
    54: "Respiratory Therapist, Certified SNF/Subacute Care",
    55: "Respiratory Therapist, Certified Pulmonary Rehabilitation",
    56: "Respiratory Therapist, Certified Pulmonary Function Technologist",
    57: "Respiratory Therapist, Certified Pulmonary Diagnostics",
    58: "Respiratory Therapist, Certified Patient Transport",
    59: "Respiratory Therapist, Certified Palliative/Hospice",
    60: "Respiratory Therapist, Certified Neonatal/Pediatrics",
    61: "Respiratory Therapist, Certified Home Health",
    62: "Respiratory Therapist, Certified Geriatric Care",
    63: "Respiratory Therapist, Certified General Care",
    64: "Respiratory Therapist, Certified Emergency Care",
    65: "Respiratory Therapist, Certified Educational",
    66: "Respiratory Therapist, Certified Critical Care",
    67: "Reproductive Endocrinology",
    68: "Rehabilitation Psychology",
    69: "Rehabilitation Practitioner",
    70: "Rehabilitation Counselor",
    71: "Rehabilitation Counselor Orientation and Mobility Training Provider",
    72: "Rehabilitation Counselor Assistive Technology Supplier",
    73: "Rehabilitation Counselor Assistive Technology Practitioner",
    74: "Recreation Therapist",
    75: "Radiology Podiatry",
    76: "Radiological Physics",
    77: "Radiation Oncology",
    78: "Pulmonary Function Technologist",
    79: "Pulmonary Disease",
    80: "Psychology",
    81: "Psychoanalysis",
    82: "Psychiatry",
    83: "Psychiatry & Neurology Vascular Neurology",
    84: "Psychiatry & Neurology Sports Medicine",
    85: "Psychiatry & Neurology Sleep Medicine",
    86: "Psychiatry & Neurology Psychosomatic Medicine",
    87: "Psychiatry & Neurology Pain Medicine",
    88: "Psychiatry & Neurology Neuromuscular Medicine",
    89: "Psychiatry & Neurology Neurodevelopmental Disabilities",
    90: "Psychiatry & Neurology Hospice and Palliative Medicine",
    91: "Psychiatry & Neurology Forensic Psychiatry",
    92: "Psychiatry & Neurology Diagnostic Neuroimaging",
    93: "Psychiatry & Neurology Behavioral Neurology & Neuropsychiatry",
    94: "Psychiatry & Neurology Bariatric Medicine",
    95: "Psychiatry & Neurology Addiction Medicine",
    96: "Psych/Mental Health Nurse Practitioner",
    97: "Prosthodontics",
    98: "Prosthetist",
    99: "Professional Counseling",
    100: "Procedural Dermatology",
    101: "Primary Podiatric Medicine",
    102: "Primary Care Nurse Practitioner",
    103: "Preventive Sports Medicine",
    104: "Preventive Medicine",
    105: "Preventive Medicine Clinical Informatics",
    106: "Preventive Medical Toxicology",
    107: "Prescribing (Medical) Psychology",
    108: "Podiatry",
    109: "Podiatrist Public Medicine",
    110: "Podiatrist General Practice",
    111: "Plastic Surgery",
    112: "Plastic Surgery within the Head & Neck",
    113: "Plastic Surgery Surgery of the Hand",
    114: "Plastic Surgery Plastic Surgery Within the Head and Neck",
    115: "Plastic and Reconstructive Surgery",
    116: "Physical Therapy",
    117: "Physical Therapy Assistant",
    118: "Physical Medicine & Rehabilitation",
    119: "Physiastric Sports Medicine",
    120: "Phlebology",
    121: "Ph.D. Medical Genetics",
    122: "Periodontics",
    123: "Pedorthist",
    124: "Pediatrics",
    125: "Pediatrics Medical Toxicology",
    126: "Pediatrics Hospice and Palliative Medicine",
    127: "Pediatrics Clinical & Laboratory Immunology",
    128: "Pediatric Urology",
    129: "Pediatric Transplant Hepatology",
    130: "Pediatric Surgery",
    131: "Pediatric Sport Medicine",
    132: "Pediatric Sleep Medicine",
    133: "Pediatric Rheumatology",
    134: "Pediatric Rehabilitation Medicine",
    135: "Pediatric Radiology",
    136: "Pediatric Pulmonology",
    137: "Pediatric Physical Therapy",
    138: "Pediatric Pathology",
    139: "Pediatric Otolaryngology",
    140: "Pediatric Orthopedic Surgery",
    141: "Pediatric Optometry",
    142: "Pediatric Nurse Practitioner",
    143: "Pediatric Neurology",
    144: "Pediatric Nephrology",
    145: "Pediatric Infectious Disease",
    146: "Pediatric Hematology & Oncology",
    147: "Pediatric Gastroenterology",
    148: "Pediatric Endocrinology",
    149: "Pediatric Emergency Medicine",
    150: "Pediatric Dermatology",
    151: "Pediatric Dentistry",
    152: "Pediatric Critical Care Medicine",
    153: "Pediatric Cardiology",
    154: "Pediatric Anesthesiology",
    155: "Pediatric Allergy",
    156: "Pathology",
    157: "Pathology Clinical Informatics",
    158: "Pastoral Counseling",
    159: "Pain Medicine",
    160: "Pain Medicine",
    161: "Pain Medicine",
    162: "Otology & Neurotology",
    163: "Otolaryngology/Facial Plastic Surgery",
    164: "Otolaryngology",
    165: "Otolaryngologic Sleep Medicine",
    166: "Otolaryngic Allergy",
    167: "Orthotist",
    168: "Orthotic Fitter",
    169: "Orthopedic Trauma",
    170: "Orthopedic Surgery",
    171: "Orthopedic Surgery of the Spine",
    172: "Orthopedic Sports Medicine",
    173: "Orthopedic Physical Therapy",
    174: "Orthodontics",
    175: "Oral Medicinist",
    176: "Oral and Maxillofacial Radiology",
    177: "Oral and Maxillofacial Pathology",
    178: "Oral & Maxillofacial Surgery",
    179: "Oral & Maxillofacial Surgery",
    180: "Optometry",
    181: "Ophthalmology",
    182: "Occupational Vision",
    183: "Occupational Therapy Assistant",
    184: "Occupational Therapy Assistant Low Vision",
    185: "Occupational Therapy Assistant Feeding, Eating & Swallowing",
    186: "Occupational Therapy Assistant Environmental Modification",
    187: "Occupational Therapy Assistant Driving and Community Mobility",
    188: "Occupational Therapist",
    189: "Occupational Therapist Physical Rehabilitation",
    190: "Occupational Therapist Pediatrics",
    191: "Occupational Therapist Neurorehabilitation",
    192: "Occupational Therapist Mental Health",
    193: "Occupational Therapist Low Vision",
    194: "Occupational Therapist Human Factors",
    195: "Occupational Therapist Hand",
    196: "Occupational Therapist Gerontology",
    197: "Occupational Therapist Feeding, Eating & Swallowing",
    198: "Occupational Therapist Ergonomics",
    199: "Occupational Therapist Environmental Modification",
    200: "Occupational Therapist Driving and Community Mobility",
    201: "Occupational Medicine",
    202: "Obstetrics",
    203: "Obstetrics & Gynecology",
    204: "Obstetrics & Gynecology Female Pelvic Medicine and Reconstructive Surgery",
    205: "OBGYN Nurse Practitioner",
    206: "Nutrition Medicine",
    207: "Nurse Practitioner",
    208: "Nuclear Radiology",
    209: "Nuclear Medicine",
    210: "Nuclear Imaging & Therapy",
    211: "Nuclear Cardiology",
    212: "Neuroradiology",
    213: "Neuropathology",
    214: "Neuromusculoskeletal Medicine, Sports Medicine",
    215: "Neuromusculoskeletal Medicine & OMM",
    216: "Neuromuscular Medicine",
    217: "Neurology",
    218: "Neurology Physical Therapy",
    219: "Neurological Surgery",
    220: "Neurodevelopmental Disability",
    221: "Nephrology",
    222: "Neonatology Nurse Practitioner",
    223: "Neonatal, Critical Care Nurse Practitioner",
    224: "Neonatal & Perinatal Medicine",
    225: "Naturopath",
    226: "Music Therapist",
    227: "Molecular Genetic Pathology",
    228: "MOHS-Micrographic Surgery",
    229: "Mental Retardation & Developmental Disabilities",
    230: "Mental Health Counseling",
    231: "Medical Toxicology",
    232: "Medical Oncology",
    233: "Medical Microbiology",
    234: "Medical Genetics, Ph.D. Medical Genetics",
    235: "Medical Genetics Molecular Genetic Pathology",
    236: "Maternal & Fetal Medicine",
    237: "Mastectomy Fitter",
    238: "Massage Therapy",
    239: "Low Vision Rehabilitation",
    240: "Legal Medicine",
    241: "Kinesiotherapist",
    242: "Interventional Pain Medicine",
    243: "Interventional Cardiology",
    244: "Internal Medicine",
    245: "Internal Medicine Sports Medicine",
    246: "Internal Medicine Magnetic Resonance Imaging (MRI)",
    247: "Internal Medicine Hypertension Specialist",
    248: "Internal Medicine Hematology",
    249: "Internal Medicine Clinical Cardiac Electrophysiology",
    250: "Internal Medicine Clinical & Laboratory Immunology",
    251: "Internal Medicine Bariatric Medicine",
    252: "Internal Medicine Allergy & Immunology",
    253: "Internal Medicine Adolescent Medicine",
    254: "Infectious Disease",
    255: "Independent Medical Examiner",
    256: "In Vivo & In Vitro Nuclear Medicine",
    257: "Immunopathology",
    258: "Human Factor Physical Therapy",
    259: "Hospitalist",
    260: "Hospice and Palliative Medicine",
    261: "Hospice and Palliative Medicine",
    262: "Hospice and Palliative Medicine",
    263: "Hospice and Palliative Medicine",
    264: "Hospice & Palliative Medicine",
    265: "Hepatology",
    266: "Hematology",
    267: "Hematology & Oncology",
    268: "Health Service Psychology",
    269: "Health Psychology",
    270: "Hand Surgery",
    271: "Hand Physical Therapy",
    272: "Gynecology",
    273: "Gynecologic Oncology",
    274: "Group Psychotherapy",
    275: "Gerontology Nurse Practitioner",
    276: "Geriatrics Physical Therapy",
    277: "Geriatric Psychiatry",
    278: "Geriatric Medicine",
    279: "General Practice",
    280: "General Dentistry",
    281: "Gastroenterology",
    282: "Forensic Psychology",
    283: "Forensic Pathology",
    284: "Foot Surgery",
    285: "Foot and Ankle Surgery",
    286: "Foot & Ankle Surgery",
    287: "Family Psychology",
    288: "Family Nurse Practitioner",
    289: "Family Medicine",
    290: "Family Medicine Sleep Medicine",
    291: "Family Medicine Hospice and Palliative Medicine",
    292: "Family Medicine Geriatric Medicine",
    293: "Family Medicine Bariatric Medicine",
    294: "Family Medicine Adult Medicine",
    295: "Family Medicine Adolescent Medicine",
    296: "Family Medicine Addiction Medicine",
    297: "Facial Plastic Surgery",
    298: "Ergonomic Physical Therapy",
    299: "Environmental Preventive Medicine",
    300: "Endodontics",
    301: "Endocrinology, Diabetes & Metabolism",
    302: "Emergency Medicine",
    303: "Emergency Medicine Undersea and Hyperbaric Medicine",
    304: "Emergency Medicine Sports Medicine",
    305: "Emergency Medicine Pediatric Emergency Medicine",
    306: "Emergency Medicine Hospice and Palliative Medicine",
    307: "Emergency Medicine Emergency Medical Services",
    308: "Electrodiagnostic Medicine",
    309: "Dietitian, Registered",
    310: "Diagnostic Ultrasound",
    311: "Diagnostic Radiology",
    312: "Diagnostic Neuroimaging",
    313: "Developmental Therapist",
    314: "Developmental Behavioral Pediatrics",
    315: "Dermatopathology",
    316: "Dermatopathology",
    317: "Dermatology",
    318: "Denturist",
    319: "Dentistry",
    320: "Dentist Dentist Anesthesiologist",
    321: "Dentist Dental Public Health",
    322: "Dental Therapist",
    323: "Dental Laboratory Technician",
    324: "Dental Hygienist",
    325: "Dental Assistant",
    326: "Dance Therapist",
    327: "Cytopathology",
    328: "Critical Care Medicine",
    329: "Critical Care Medicine",
    330: "Critical Care Medicine OBGYN",
    331: "Counseling",
    332: "Counseling Psychology",
    333: "Corneal and Contact Management",
    334: "Colon & Rectal Surgery",
    335: "Cognitive & Behavioral Psychology",
    336: "Clinical Psychology",
    337: "Clinical Pharmacology",
    338: "Clinical Pathology/Laboratory Medicine",
    339: "Clinical Pathology",
    340: "Clinical Neurophysiology",
    341: "Clinical Molecular Genetics",
    342: "Clinical Genetics (M.D.)",
    343: "Clinical Exercise Physiologist",
    344: "Clinical Electrophysiology",
    345: "Clinical Cytogenetic",
    346: "Clinical Child & Adolescent Psychology",
    347: "Clinical Biochemical Genetics",
    348: "Clinical & Laboratory Dermatological Immunology",
    349: "Chiropractics",
    350: "Chiropractic Thermography",
    351: "Chiropractic Sports Medicine",
    352: "Chiropractic Rehabilitation",
    353: "Chiropractic Radiology",
    354: "Chiropractic Pediatrics",
    355: "Chiropractic Orthopedics",
    356: "Chiropractic Occupational Health",
    357: "Chiropractic Nutrition Medicine",
    358: "Chiropractic Neurology",
    359: "Chiropractic Medical Examiner",
    360: "Chiropractic Internal Medicine",
    361: "Child Abuse Pediatrics",
    362: "Child & Adolescent Psychiatry",
    363: "Chemical Pathology",
    364: "Cardiovascular Disease",
    365: "Cardiothoracic Surgery",
    366: "Cardiopulmonary Physical Therapy",
    367: "Body Imaging",
    368: "Blood Banking & Transfusion Medicine",
    369: "Bariatric Medicine OBGYN",
    370: "Audiology",
    371: "Audiology & Hearing Aid Fitter",
    372: "Assistant, Podiatric",
    373: "Art Therapist",
    374: "Anesthesiology",
    375: "Anatomic Pathology",
    376: "Anaplastologist",
    377: "Allergy & Immunology",
    378: "Allergy & Immunology Clinical & Laboratory Immunology",
    379: "Allergy & Immunology Allergy",
    380: "Aerospace Medicine",
    381: "Advanced Practice Dental Therapist",
    382: "Adult Reconstructive orthopedic Surgery",
    383: "Adult Health Nurse Practitioner",
    384: "Adult Development & Aging Psychology",
    385: "Adolescent Medicine",
    386: "Addiction Psychology",
    387: "Addiction Psychiatry",
    388: "Addiction Medicine",
    389: "Addiction",
    390: "Addiction Counseling",
    391: "Acute Care Nurse Practitioner",
    392: "Acupuncture",
    393: "All Medicare Providers",
}

// API GET that pulls location data of user
$.ajax({
    url: `https://api.ipstack.com/check?access_key=fef26ea7f3f8cb548a3b9cafbf91346c`,
    type: "GET",
}).then(function(data) {
    // console.log(data);
    latitude = parseFloat(data.latitude.toFixed(3));
    longitude = parseFloat(data.longitude.toFixed(3));
});

//Initializes dropdown menu and populates it with specialty options
$(document).ready(function(){
    $('select').formSelect();
});

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

Object.keys(specialtiesOptions).forEach(element =>
    $('select').prepend(`<option value="${element}">${specialtiesOptions[element]}</options>`));
$('select').prepend(`<option value="" disabled selected>All Medicare Providers</option>`);

//Event Listener: Initiates API GET of Doctor Data
$('#find').on('click', (event)=>{
    event.preventDefault();
    let specialtyInput = $('input').val();
    medicareDocs = [];
    $('li.docs').remove();
    $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?location=${latitude},${longitude},100&skip=2&limit=${limit}&user_key=${apiKey}`,
        type: "GET",
    }).then(function(data){
        apiObj = data;
        // console.log(apiObj);
        // console.log($('select'));
        for(let i = 0; i < apiObj.data.length; i++){
            for(let x = 0; x < apiObj.data[i].insurances.length; x++){    
                if(apiObj.data[i].insurances[x].insurance_provider.name.includes('Medicare') && apiObj.data[i].specialties[0]){
                    medicareDocs.push(apiObj.data[i]);
                }
            }
        }
        
//Cleans up API data: Removes Objs w/o Specialty and dedupes medicareDocs
        removeEmptySpecialty(medicareDocs);
        deduplicate(medicareDocs,'npi');
        console.log(medicareDocs);
//Search Logic for returning doctor data to user based on specialty
        if(specialtyInput === "All Medicare Providers"){
            // console.log(specialtyInput);
            // console.log(medicareDocs.length);
            for(let y = 0; y < medicareDocs.length; y++){
                $("ul.collapsible").prepend(`<li class="docs">
                                                <div class="collapsible-header"><i class="material-icons">contact_phone</i>&nbsp&nbsp&nbsp<strong>${medicareDocs[y].profile.first_name} ${medicareDocs[y].profile.last_name}</strong>&nbsp-&nbsp<em>${medicareDocs[y].specialties[0].name}</em></div>
                                                <div class="collapsible-body"><span><strong>${medicareDocs[y].practices[0].name}</strong></span><br>
                                                                                <span>${medicareDocs[y].practices[0].visit_address.street}</span><br>
                                                                                <span>${medicareDocs[y].practices[0].visit_address.city},&nbsp${medicareDocs[y].practices[0].visit_address.state}&nbsp${medicareDocs[y].practices[0].visit_address.zip}</span><br><br>
                                                                                <span><i class="material-icons">local_phone</i>&nbsp&nbsp&nbsp${medicareDocs[y].practices[0].phones[0].number}</span>
                                                </div>
                                            </li>`);
                // console.log(`${medicareDocs[y].specialties[0].name}: ${medicareDocs[y].profile.first_name} ${medicareDocs[y].profile.last_name} - ${medicareDocs[y].practices[0].phones[0].number}`);
            }
        } else {
            for(let y = 0; y < medicareDocs.length; y++){
                if(medicareDocs[y].specialties[0].name.includes(specialtyInput)){
                    $("ul.collapsible").prepend(`<li class="docs">
                    <div class="collapsible-header"><i class="material-icons">contact_phone</i>&nbsp&nbsp&nbsp<strong>${medicareDocs[y].profile.first_name} ${medicareDocs[y].profile.last_name}</strong>&nbsp-&nbsp<em>${medicareDocs[y].specialties[0].name}</em></div>
                    <div class="collapsible-body"><span><strong>${medicareDocs[y].practices[0].name}</strong></span><br>
                                                    <span>${medicareDocs[y].practices[0].visit_address.street}</span><br>
                                                    <span>${medicareDocs[y].practices[0].visit_address.city},&nbsp${medicareDocs[y].practices[0].visit_address.state}&nbsp${medicareDocs[y].practices[0].visit_address.zip}</span><br><br>
                                                    <span><i class="material-icons">local_phone</i>&nbsp&nbsp&nbsp${medicareDocs[y].practices[0].phones[0].number}</span>
                    </div>
                </li>`);
// console.log(`${medicareDocs[z].specialties[0].name}: ${medicareDocs[z].profile.first_name} ${medicareDocs[z].profile.last_name} - ${medicareDocs[z].practices[0].phones[0].number}`);
                    }
                }
            if($('li.docs').length === 0){
                alert('No providers found for that specialty. Below is a list of General Practitioners in your area.');
                for(let y = 0; y < medicareDocs.length; y++){
                    if(medicareDocs[y].specialties[0].name === "Internal Medicine" || medicareDocs[y].specialties[0].name === "Family Medicine"){
                        $("ul.collapsible").prepend(`<li class="docs">
                        <div class="collapsible-header"><i class="material-icons">contact_phone</i>&nbsp&nbsp&nbsp<strong>${medicareDocs[y].profile.first_name} ${medicareDocs[y].profile.last_name}</strong>&nbsp-&nbsp<em>${medicareDocs[y].specialties[0].name}</em></div>
                        <div class="collapsible-body"><span><strong>${medicareDocs[y].practices[0].name}</strong></span><br>
                                                        <span>${medicareDocs[y].practices[0].visit_address.street}</span><br>
                                                        <span>${medicareDocs[y].practices[0].visit_address.city},&nbsp${medicareDocs[y].practices[0].visit_address.state}&nbsp${medicareDocs[y].practices[0].visit_address.zip}</span><br><br>
                                                        <span><i class="material-icons">local_phone</i>&nbsp&nbsp&nbsp${medicareDocs[y].practices[0].phones[0].number}</span>
                        </div>
                    </li>`);
}
                }
            }
        }
    })
});

function removeEmptySpecialty(arr){
    for (let a = 0; a < arr.length; a++){
        if(arr[a].specialties.length === 0){
            arr.splice(a, 1);
        }
    }
}

function deduplicate(arr, key){
    let index = {};
    let dedupedArr =[];

    for(let i = 0; i < arr.length; i++){
        if(!index[arr[i][key]]) {
            index[arr[i][key]] = true;
            dedupedArr.push(arr[i]);
        }
    }
    medicareDocs = dedupedArr;
}

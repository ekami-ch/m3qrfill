"use strict";
const defaultQrOptions = {
    outputFormat: "JSON",
    encoding: "Base64",
    genString: "@TLTFTBRTTTMTT1T2TPTCTTWWW",
    platform: "mobile"
};
const defaultFormFields = 'SLFB@iM12PCcb';
const standardFields = {
    'L': {
        name: "lastname",
        id: "lastname",
        required: true,
        autocomplete: "off",
        type: "text",
        maxlength: 50,
        label: "Nom (lastname)",
        class: "form-control",
        placeholder: "Last Name",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'F': {
        name: "firstname",
        required: true,
        autocomplete: "off",
        id: "firstname",
        type: "text",
        maxlength: 50,
        label: "Prénom (firstname)",
        class: "form-control",
        placeholder: "First Name",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'S': {
        name: "sex",
        required: true,
        autocomplete: "off",
        id: "sex",
        type: "select",
        label: "Sexe (sex)",
        options: {
            male: 'Homme (male)',
            female: 'Femme (female)'
        },
        class: "form-select",
        placeholder: " ",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'B': {
        name: "birthdate",
        pattern: "\d{4}-\d{1,2}-\d{1,2}",
        required: true,
        autocomplete: "off",
        id: "birthdate",
        type: "text",
        label: "Date de naissance (Birthdate Year-Month-Day)",
        class: "form-control datepicker",
        placeholder: "Year-Month-Day",
        readonly: "readonly",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    '1': {
        name: "address1",
        required: true,
        autocomplete: "off",
        id: "address1",
        type: "text",
        maxlength: 50,
        label: "Adresse - ligne 1",
        class: "form-control",
        placeholder: "Address 1",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    '2': {
        name: "address2",
        id: "address2",
        type: "text",
        maxlength: 50,
        label: "Adresse - ligne 2",
        class: "form-control",
        placeholder: "Address 2 (Optional)",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'P': {
        name: "postcode",
        required: true,
        autocomplete: "off",
        id: "postcode",
        type: "text",
        maxlength: 20,
        label: "Code postal (postcode)",
        class: "form-control",
        placeholder: "ZIP Code",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    '@': {
        name: "email",
        required: true,
        autocomplete: "off",
        id: "email",
        type: "email",
        maxlength: 50,
        label: "Email",
        class: "form-control",
        placeholder: "Email",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'i': {
        name: "countrycode",
        id: "countrycode",
        type: "select",
        label: "Code pays (Country Code)",
        options: "countrycodes",
        class: "form-select",
        placeholder: " ",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'M': {
        name: "mobile",
        required: true,
        autocomplete: "off",
        id: "mobile",
        type: "tel",
        maxlength: 15,
        label: "Téléphone Mobile (mobile number)",
        class: "form-control",
        placeholder: "0781112233",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'C': {
        name: "city",
        required: true,
        autocomplete: "off",
        id: "city",
        type: "text",
        maxlength: 50,
        label: "Ville (city)",
        class: "form-control",
        placeholder: "City",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'c': {
        name: "country",
        required: true,
        autocomplete: "off",
        id: "country",
        type: "select",
        label: "Pays (country)",
        options: "iso2country",
        class: "form-select",
        placeholder: "Country",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3", "form-floating"]
    },
    'b': {
        type: "button",
        id: "print-button",
        value: "Print/Imprimer",
        class: "btn btn-primary"
    }
};
const standardLists = {
    iso2country: {
        "CH": "Switzerland",
        "FR": "France",
        "IT": "Italy",
        "AT": "Austria",
        "AF": "Afghanistan",
        "AX": "Åland Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia, Plurinational State of",
        "BQ": "Bonaire, Sint Eustatius and Saba",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "CV": "Cape Verde",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Congo",
        "CD": "Congo, the Democratic Republic of the",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "CI": "Côte d'Ivoire",
        "HR": "Croatia",
        "CU": "Cuba",
        "CW": "Curaçao",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Ethiopia",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and McDonald Mcdonald Islands",
        "VA": "Holy See (Vatican City State)",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran, Islamic Republic of",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KP": "Korea, Democratic People's Republic of",
        "KR": "Korea, Republic of",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People's Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MK": "Macedonia, the Former Yugoslav Republic of",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia, Federated States of",
        "MD": "Moldova, Republic of",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestine, State of",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Réunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint Barthélemy",
        "SH": "Saint Helena, Ascension and Tristan da Cunha",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin (French part)",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and the Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SX": "Sint Maarten (Dutch part)",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard and Jan Mayen",
        "SZ": "Swaziland",
        "SE": "Sweden",
        "SY": "Syrian Arab Republic",
        "TW": "Taiwan, Republic of China",
        "TJ": "Tajikistan",
        "TZ": "Tanzania, United Republic of",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "Turkey",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States",
        "UM": "United States Minor Outlying Islands",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela, Bolivarian Republic of",
        "VN": "Viet Nam",
        "VG": "Virgin Islands, British",
        "VI": "Virgin Islands, U.S.",
        "WF": "Wallis and Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    },
    countrycodes: {
        "+41": "Switzerland(+41)",
        "+33": "France(+33)",
        "+93": "Afghanistan(+93)",
        "+355": "Albania(+355)",
        "+213": "Algeria(+213)",
        "+1-684": "American Samoa(+1-684)",
        "+376": "Andorra(+376)",
        "+244": "Angola(+244)",
        "+1-264": "Anguilla(+1-264)",
        "+672": "Antarctica(+672)",
        "+1-268": "Antigua(+1-268)",
        "+54": "Argentina(+54)",
        "+374": "Armenia(+374)",
        "+297": "Aruba(+297)",
        "+61": "Australia(+61)",
        "+43": "Austria(+43)",
        "+994": "Azerbaijan(+994)",
        "+1-242": "Bahamas(+1-242)",
        "+973": "Bahrain(+973)",
        "+880": "Bangladesh(+880)",
        "+1-246": "Barbados(+1-246)",
        "+375": "Belarus(+375)",
        "+32": "Belgium(+32)",
        "+501": "Belize(+501)",
        "+229": "Benin(+229)",
        "+1-441": "Bermuda(+1-441)",
        "+975": "Bhutan(+975)",
        "+591": "Bolivia(+591)",
        "+387": "Bosnia",
        "+267": "Botswana(+267)",
        "+55": "Brazil(+55)",
        "+673": "Brunei(+673)",
        "+359": "Bulgaria(+359)",
        "+226": "Burkina Faso(+226)",
        "+257": "Burundi(+257)",
        "+855": "Cambodia(+855)",
        "+237": "Cameroon(+237)",
        "+238": "Cape Verde(+238)",
        "+1-345": "Cayman Islands(+1-345)",
        "+236": "Central African Republic(+236)",
        "+235": "Chad(+235)",
        "+56": "Chile(+56)",
        "+86": "China(+86)",
        "+57": "Colombia(+57)",
        "+243": "Congo(+243)",
        "+242": "Congo(+242)",
        "+682": "Cook Islands(+682)",
        "+506": "Costa Rica(+506)",
        "+225": "Cote D'Ivoire(+225)",
        "+385": "Croatia(+385)",
        "+53": "Cuba(+53)",
        "+357": "Cyprus(+357)",
        "+420": "Czech Republic(+420)",
        "+45": "Denmark(+45)",
        "+253": "Djibouti(+253)",
        "+1-767": "Dominica(+1-767)",
        "+1-829  ": "Dominican Republic(+1-829)",
        "+670": "East Timor(+670)",
        "+593 ": "Ecuador(+593 )",
        "+20": "Egypt(+20)",
        "+503": "El Salvador(+503)",
        "+240": "Equatorial Guinea(+240)",
        "+291": "Eritrea(+291)",
        "+372": "Estonia(+372)",
        "+251": "Ethiopia(+251)",
        "+500": "Falkland Islands(+500)",
        "+298": "Faroe Islands(+298)",
        "+679": "Fiji(+679)",
        "+358": "Finland(+358)",
        "+594": "French Guyana(+594)",
        "+689": "French Polynesia(+689)",
        "+241": "Gabon(+241)",
        "+220": "Gambia(+220)",
        "+995": "Georgia(+995)",
        "+49": "Germany(+49)",
        "+233": "Ghana(+233)",
        "+350": "Gibraltar(+350)",
        "+30": "Greece(+30)",
        "+299": "Greenland(+299)",
        "+1-473": "Grenada(+1-473)",
        "+590": "Guadeloupe(+590)",
        "+1-671": "Guam(+1-671)",
        "+502": "Guatemala(+502)",
        "+224": "Guinea(+224)",
        "+245": "Guinea-Bissau(+245)",
        "+592": "Guyana(+592)",
        "+509": "Haiti(+509)",
        "+504": "Honduras(+504)",
        "+852": "Hong Kong(+852)",
        "+36": "Hungary(+36)",
        "+354": "Iceland(+354)",
        "+91": "India(+91)",
        "+62": "Indonesia(+62)",
        "+98": "Iran(+98)",
        "+964": "Iraq(+964)",
        "+353": "Ireland(+353)",
        "+972": "Israel(+972)",
        "+39": "Italy(+39)",
        "+1-876": "Jamaica(+1-876)",
        "+81": "Japan(+81)",
        "+962": "Jordan(+962)",
        "+254": "Kenya(+254)",
        "+686": "Kiribati(+686)",
        "+850": "North Korea(+850)",
        "+82": "South Korea(+82)",
        "+965": "Kuwait(+965)",
        "+996": "Kyrgyzstan(+996)",
        "+856": "Laos(+856)",
        "+371": "Latvia(+371)",
        "+961": "Lebanon(+961)",
        "+266": "Lesotho(+266)",
        "+231": "Liberia(+231)",
        "+218": "Libya(+218)",
        "+423": "Liechtenstein(+423)",
        "+370": "Lithuania(+370)",
        "+352": "Luxembourg(+352)",
        "+853": "Macau(+853)",
        "+389": "Macedonia(+389)",
        "+261": "Madagascar(+261)",
        "+265": "Malawi(+265)",
        "+60": "Malaysia(+60)",
        "+960": "Maldives(+960)",
        "+223": "Mali(+223)",
        "+356": "Malta(+356)",
        "+692": "Marshall Islands(+692)",
        "+596": "Martinique (French)(+596)",
        "+222": "Mauritania(+222)",
        "+230": "Mauritius(+230)",
        "+269": "Mayotte(+269)",
        "+52": "Mexico(+52)",
        "+691": "Micronesia(+691)",
        "+373": "Moldova(+373)",
        "+377": "Monaco(+377)",
        "+976": "Mongolia(+976)",
        "+1-664": "Montserrat(+1-664)",
        "+212": "Morocco(+212)",
        "+258": "Mozambique(+258)",
        "+95": "Myanmar(+95)",
        "+264": "Namibia(+264)",
        "+674": "Nauru(+674)",
        "+977": "Nepal(+977)",
        "+31": "Netherlands(+31)",
        "+599": "Netherlands Antilles(+599)",
        "+687": "New Caledonia(+687)",
        "+64": "New Zealand (Aotearoa)(+64)",
        "+505": "Nicaragua(+505)",
        "+227": "Niger(+227)",
        "+234": "Nigeria(+234)",
        "+683": "Niue(+683)",
        "+1-670": "Northern Mariana Islands(+1-670)",
        "+47": "Norway(+47)",
        "+968": "Oman(+968)",
        "+92": "Pakistan(+92)",
        "+680": "Palau(+680)",
        "+970": "Palestinian State(+970)",
        "+507": "Panama(+507)",
        "+675": "Papua New Guinea(+675)",
        "+595": "Paraguay(+595)",
        "+51": "Peru(+51)",
        "+63": "Philippines(+63)",
        "+48": "Poland(+48)",
        "+351": "Portugal(+351)",
        "+1-939": "Puerto Rico(+1-939)",
        "+974 ": "Qatar(+974)",
        "+262": "Reunion(+262)",
        "+40": "Romania(+40)",
        "+7": "Russian Federation(+7)",
        "+250": "Rwanda(+250)",
        "+290": "Saint Helena(+290)",
        "+1-869": "Saint Kitts and Nevis(+1-869)",
        "+1-758": "Saint Lucia(+1-758)",
        "+508": "Saint Pierre and Miquelon(+508)",
        "+1-784": "Saint Vincent and the Grenadines(+1-784)",
        "+685": "Samoa(+685)",
        "+378": "San Marino(+378)",
        "+239": "Sao Tome and Principe(+239)",
        "+966": "Saudi Arabia(+966)",
        "+381": "Serbia(+381)",
        "+221": "Senegal(+221)",
        "+248": "Seychelles(+248)",
        "+232": "Sierra Leone(+232)",
        "+65": "Singapore(+65)",
        "+421": "Slovakia(+421)",
        "+386": "Slovenia(+386)",
        "+677": "Solomon Islands(+677)",
        "+252": "Somalia(+252)",
        "+27": "South Africa(+27)",
        "+34": "Spain(+34)",
        "+94": "Sri Lanka(+94)",
        "+249": "Sudan(+249)",
        "+597": "Suriname(+597)",
        "+268": "Swaziland(+268)",
        "+46": "Sweden(+46)",
        "+963": "Syria(+963)",
        "+886": "Taiwan(+886)",
        "+992": "Tajikistan(+992)",
        "+255": "Tanzania(+255)",
        "+66": "Thailand(+66)",
        "+690": "Tokelau(+690)",
        "+676": "Tonga(+676)",
        "+1-868": "Trinidad/Tobago(+1-868)",
        "+216": "Tunisia(+216)",
        "+90": "Turkey(+90)",
        "+993": "Turkmenistan(+993)",
        "+1-649": "TurksCaicos Islands(+1-649)",
        "+688": "Tuvalu(+688)",
        "+256": "Uganda(+256)",
        "+380": "Ukraine(+380)",
        "+971": "United Arab Emirates(+971)",
        "+44": "United Kingdom",
        "+1": "United States/Canada(+1)",
        "+598": "Uruguay(+598)",
        "+998": "Uzbekistan(+998)",
        "+678": "Vanuatu(+678)",
        "+418": "Vatican City State(+418)",
        "+58": "Venezuela(+58)",
        "+84": "Vietnam(+84)",
        "+1-284": "Virgin Islands, UK(+1-284)",
        "+1-340": "Virgin Islands, US(+1-340)",
        "+681": "Wallis and Futuna(+681)",
        "+967": "Yemen(+967)",
        "+260": "Zambia(+260)",
        "+263": "Zimbabwe)(+263)"
    },
};
const standardConvertionTable = {
    "https?:\/\/.*m3-test\.ch.*": {
        dataLocations: {
            "input[autocomplete='firstname']": ["form", "firstname"],
            "input[autocomplete='lastname']": ["form", "lastname"],
            //"#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div.control.has-icons-left > div > div.react-datepicker-wrapper > div > input": ["form", "birthdate"],
            "div.react-datepicker-wrapper > div > input": ["form", "birthdate"],
            "input[autocomplete='email']": ["form", "email"],
            "input[autocomplete='phone']": ["form", "mobile"],
            "input[autocomplete='address line 1']": ["form", "address1"],
            "input[autocomplete='address line 2']": ["form", "address2"],
            "input[autocomplete='postal code']": ["form", "postcode"],
            "input[autocomplete='city']": ["form", "city"],
            "#root > div:nth-child(3) > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div > div:nth-child(2) > div:nth-child(6) > div.control.has-icons-left > div > select": ["form", "country"],
            "#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div > div:nth-child(2) > div:nth-child(5) > div.control.has-icons-left > div > select": ["form", "country"],
            "input[id='maleRadio']": ["form", "sex"],
            "input[id='femaleRadio']": ["form", "sex"],
            //Le selecteur ci dessous est le selecteur countrycode du formulaire 
            "#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div > div:nth-child(1) > div > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select": ["form", "countrycode"],
            //Le selecteur ci dessous est le selecteur countrycode du formulaire normal de la page admin
            "#root > div > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div > div:nth-child(1) > div > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select": ["form", "countrycode"]
        },
        dataTransforms: {
            "input[id='maleRadio']": {
                "male": true,
                "female": false
            },
            "input[id='femaleRadio']": {
                "male": false,
                "female": true
            },
            // Country, using reference to Standard Lists
            "#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div > div:nth-child(2) > div:nth-child(5) > div.control.has-icons-left > div > select": {
                "CH": "Switzerland",
                "FR": "France",
                "IT": "Italy",
                "AT": "Austria",
                "AF": "Afghanistan",
                "AX": "Åland Islands",
                "AL": "Albania",
                "DZ": "Algeria",
                "AS": "American Samoa",
                "AD": "Andorra",
                "AO": "Angola",
                "AI": "Anguilla",
                "AQ": "Antarctica",
                "AG": "Antigua and Barbuda",
                "AR": "Argentina",
                "AM": "Armenia",
                "AW": "Aruba",
                "AU": "Australia",
                "AZ": "Azerbaijan",
                "BS": "Bahamas",
                "BH": "Bahrain",
                "BD": "Bangladesh",
                "BB": "Barbados",
                "BY": "Belarus",
                "BE": "Belgium",
                "BZ": "Belize",
                "BJ": "Benin",
                "BM": "Bermuda",
                "BT": "Bhutan",
                "BO": "Bolivia, Plurinational State of",
                "BQ": "Bonaire, Sint Eustatius and Saba",
                "BA": "Bosnia and Herzegovina",
                "BW": "Botswana",
                "BV": "Bouvet Island",
                "BR": "Brazil",
                "IO": "British Indian Ocean Territory",
                "BN": "Brunei Darussalam",
                "BG": "Bulgaria",
                "BF": "Burkina Faso",
                "BI": "Burundi",
                "KH": "Cambodia",
                "CM": "Cameroon",
                "CA": "Canada",
                "CV": "Cape Verde",
                "KY": "Cayman Islands",
                "CF": "Central African Republic",
                "TD": "Chad",
                "CL": "Chile",
                "CN": "China",
                "CX": "Christmas Island",
                "CC": "Cocos (Keeling) Islands",
                "CO": "Colombia",
                "KM": "Comoros",
                "CG": "Congo",
                "CD": "Congo, the Democratic Republic of the",
                "CK": "Cook Islands",
                "CR": "Costa Rica",
                "CI": "Côte d'Ivoire",
                "HR": "Croatia",
                "CU": "Cuba",
                "CW": "Curaçao",
                "CY": "Cyprus",
                "CZ": "Czech Republic",
                "DK": "Denmark",
                "DJ": "Djibouti",
                "DM": "Dominica",
                "DO": "Dominican Republic",
                "EC": "Ecuador",
                "EG": "Egypt",
                "SV": "El Salvador",
                "GQ": "Equatorial Guinea",
                "ER": "Eritrea",
                "EE": "Estonia",
                "ET": "Ethiopia",
                "FK": "Falkland Islands (Malvinas)",
                "FO": "Faroe Islands",
                "FJ": "Fiji",
                "FI": "Finland",
                "GF": "French Guiana",
                "PF": "French Polynesia",
                "TF": "French Southern Territories",
                "GA": "Gabon",
                "GM": "Gambia",
                "GE": "Georgia",
                "DE": "Germany",
                "GH": "Ghana",
                "GI": "Gibraltar",
                "GR": "Greece",
                "GL": "Greenland",
                "GD": "Grenada",
                "GP": "Guadeloupe",
                "GU": "Guam",
                "GT": "Guatemala",
                "GG": "Guernsey",
                "GN": "Guinea",
                "GW": "Guinea-Bissau",
                "GY": "Guyana",
                "HT": "Haiti",
                "HM": "Heard Island and McDonald Mcdonald Islands",
                "VA": "Holy See (Vatican City State)",
                "HN": "Honduras",
                "HK": "Hong Kong",
                "HU": "Hungary",
                "IS": "Iceland",
                "IN": "India",
                "ID": "Indonesia",
                "IR": "Iran, Islamic Republic of",
                "IQ": "Iraq",
                "IE": "Ireland",
                "IM": "Isle of Man",
                "IL": "Israel",
                "JM": "Jamaica",
                "JP": "Japan",
                "JE": "Jersey",
                "JO": "Jordan",
                "KZ": "Kazakhstan",
                "KE": "Kenya",
                "KI": "Kiribati",
                "KP": "Korea, Democratic People's Republic of",
                "KR": "Korea, Republic of",
                "KW": "Kuwait",
                "KG": "Kyrgyzstan",
                "LA": "Lao People's Democratic Republic",
                "LV": "Latvia",
                "LB": "Lebanon",
                "LS": "Lesotho",
                "LR": "Liberia",
                "LY": "Libya",
                "LI": "Liechtenstein",
                "LT": "Lithuania",
                "LU": "Luxembourg",
                "MO": "Macao",
                "MK": "Macedonia, the Former Yugoslav Republic of",
                "MG": "Madagascar",
                "MW": "Malawi",
                "MY": "Malaysia",
                "MV": "Maldives",
                "ML": "Mali",
                "MT": "Malta",
                "MH": "Marshall Islands",
                "MQ": "Martinique",
                "MR": "Mauritania",
                "MU": "Mauritius",
                "YT": "Mayotte",
                "MX": "Mexico",
                "FM": "Micronesia, Federated States of",
                "MD": "Moldova, Republic of",
                "MC": "Monaco",
                "MN": "Mongolia",
                "ME": "Montenegro",
                "MS": "Montserrat",
                "MA": "Morocco",
                "MZ": "Mozambique",
                "MM": "Myanmar",
                "NA": "Namibia",
                "NR": "Nauru",
                "NP": "Nepal",
                "NL": "Netherlands",
                "NC": "New Caledonia",
                "NZ": "New Zealand",
                "NI": "Nicaragua",
                "NE": "Niger",
                "NG": "Nigeria",
                "NU": "Niue",
                "NF": "Norfolk Island",
                "MP": "Northern Mariana Islands",
                "NO": "Norway",
                "OM": "Oman",
                "PK": "Pakistan",
                "PW": "Palau",
                "PS": "Palestine, State of",
                "PA": "Panama",
                "PG": "Papua New Guinea",
                "PY": "Paraguay",
                "PE": "Peru",
                "PH": "Philippines",
                "PN": "Pitcairn",
                "PL": "Poland",
                "PT": "Portugal",
                "PR": "Puerto Rico",
                "QA": "Qatar",
                "RE": "Réunion",
                "RO": "Romania",
                "RU": "Russian Federation",
                "RW": "Rwanda",
                "BL": "Saint Barthélemy",
                "SH": "Saint Helena, Ascension and Tristan da Cunha",
                "KN": "Saint Kitts and Nevis",
                "LC": "Saint Lucia",
                "MF": "Saint Martin (French part)",
                "PM": "Saint Pierre and Miquelon",
                "VC": "Saint Vincent and the Grenadines",
                "WS": "Samoa",
                "SM": "San Marino",
                "ST": "Sao Tome and Principe",
                "SA": "Saudi Arabia",
                "SN": "Senegal",
                "RS": "Serbia",
                "SC": "Seychelles",
                "SL": "Sierra Leone",
                "SG": "Singapore",
                "SX": "Sint Maarten (Dutch part)",
                "SK": "Slovakia",
                "SI": "Slovenia",
                "SB": "Solomon Islands",
                "SO": "Somalia",
                "ZA": "South Africa",
                "GS": "South Georgia and the South Sandwich Islands",
                "SS": "South Sudan",
                "ES": "Spain",
                "LK": "Sri Lanka",
                "SD": "Sudan",
                "SR": "Suriname",
                "SJ": "Svalbard and Jan Mayen",
                "SZ": "Swaziland",
                "SE": "Sweden",
                "SY": "Syrian Arab Republic",
                "TW": "Taiwan, Province of China",
                "TJ": "Tajikistan",
                "TZ": "Tanzania, United Republic of",
                "TH": "Thailand",
                "TL": "Timor-Leste",
                "TG": "Togo",
                "TK": "Tokelau",
                "TO": "Tonga",
                "TT": "Trinidad and Tobago",
                "TN": "Tunisia",
                "TR": "Turkey",
                "TM": "Turkmenistan",
                "TC": "Turks and Caicos Islands",
                "TV": "Tuvalu",
                "UG": "Uganda",
                "UA": "Ukraine",
                "AE": "United Arab Emirates",
                "GB": "United Kingdom",
                "US": "United States",
                "UM": "United States Minor Outlying Islands",
                "UY": "Uruguay",
                "UZ": "Uzbekistan",
                "VU": "Vanuatu",
                "VE": "Venezuela, Bolivarian Republic of",
                "VN": "Viet Nam",
                "VG": "Virgin Islands, British",
                "VI": "Virgin Islands, U.S.",
                "WF": "Wallis and Futuna",
                "EH": "Western Sahara",
                "YE": "Yemen",
                "ZM": "Zambia",
                "ZW": "Zimbabwe"
            },
            "#root > div:nth-child(3) > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div > div:nth-child(2) > div:nth-child(6) > div.control.has-icons-left > div > select": {
                "CH": "Switzerland",
                "FR": "France",
                "IT": "Italy",
                "AT": "Austria",
                "AF": "Afghanistan",
                "AX": "Åland Islands",
                "AL": "Albania",
                "DZ": "Algeria",
                "AS": "American Samoa",
                "AD": "Andorra",
                "AO": "Angola",
                "AI": "Anguilla",
                "AQ": "Antarctica",
                "AG": "Antigua and Barbuda",
                "AR": "Argentina",
                "AM": "Armenia",
                "AW": "Aruba",
                "AU": "Australia",
                "AZ": "Azerbaijan",
                "BS": "Bahamas",
                "BH": "Bahrain",
                "BD": "Bangladesh",
                "BB": "Barbados",
                "BY": "Belarus",
                "BE": "Belgium",
                "BZ": "Belize",
                "BJ": "Benin",
                "BM": "Bermuda",
                "BT": "Bhutan",
                "BO": "Bolivia, Plurinational State of",
                "BQ": "Bonaire, Sint Eustatius and Saba",
                "BA": "Bosnia and Herzegovina",
                "BW": "Botswana",
                "BV": "Bouvet Island",
                "BR": "Brazil",
                "IO": "British Indian Ocean Territory",
                "BN": "Brunei Darussalam",
                "BG": "Bulgaria",
                "BF": "Burkina Faso",
                "BI": "Burundi",
                "KH": "Cambodia",
                "CM": "Cameroon",
                "CA": "Canada",
                "CV": "Cape Verde",
                "KY": "Cayman Islands",
                "CF": "Central African Republic",
                "TD": "Chad",
                "CL": "Chile",
                "CN": "China",
                "CX": "Christmas Island",
                "CC": "Cocos (Keeling) Islands",
                "CO": "Colombia",
                "KM": "Comoros",
                "CG": "Congo",
                "CD": "Congo, the Democratic Republic of the",
                "CK": "Cook Islands",
                "CR": "Costa Rica",
                "CI": "Côte d'Ivoire",
                "HR": "Croatia",
                "CU": "Cuba",
                "CW": "Curaçao",
                "CY": "Cyprus",
                "CZ": "Czech Republic",
                "DK": "Denmark",
                "DJ": "Djibouti",
                "DM": "Dominica",
                "DO": "Dominican Republic",
                "EC": "Ecuador",
                "EG": "Egypt",
                "SV": "El Salvador",
                "GQ": "Equatorial Guinea",
                "ER": "Eritrea",
                "EE": "Estonia",
                "ET": "Ethiopia",
                "FK": "Falkland Islands (Malvinas)",
                "FO": "Faroe Islands",
                "FJ": "Fiji",
                "FI": "Finland",
                "GF": "French Guiana",
                "PF": "French Polynesia",
                "TF": "French Southern Territories",
                "GA": "Gabon",
                "GM": "Gambia",
                "GE": "Georgia",
                "DE": "Germany",
                "GH": "Ghana",
                "GI": "Gibraltar",
                "GR": "Greece",
                "GL": "Greenland",
                "GD": "Grenada",
                "GP": "Guadeloupe",
                "GU": "Guam",
                "GT": "Guatemala",
                "GG": "Guernsey",
                "GN": "Guinea",
                "GW": "Guinea-Bissau",
                "GY": "Guyana",
                "HT": "Haiti",
                "HM": "Heard Island and McDonald Mcdonald Islands",
                "VA": "Holy See (Vatican City State)",
                "HN": "Honduras",
                "HK": "Hong Kong",
                "HU": "Hungary",
                "IS": "Iceland",
                "IN": "India",
                "ID": "Indonesia",
                "IR": "Iran, Islamic Republic of",
                "IQ": "Iraq",
                "IE": "Ireland",
                "IM": "Isle of Man",
                "IL": "Israel",
                "JM": "Jamaica",
                "JP": "Japan",
                "JE": "Jersey",
                "JO": "Jordan",
                "KZ": "Kazakhstan",
                "KE": "Kenya",
                "KI": "Kiribati",
                "KP": "Korea, Democratic People's Republic of",
                "KR": "Korea, Republic of",
                "KW": "Kuwait",
                "KG": "Kyrgyzstan",
                "LA": "Lao People's Democratic Republic",
                "LV": "Latvia",
                "LB": "Lebanon",
                "LS": "Lesotho",
                "LR": "Liberia",
                "LY": "Libya",
                "LI": "Liechtenstein",
                "LT": "Lithuania",
                "LU": "Luxembourg",
                "MO": "Macao",
                "MK": "Macedonia, the Former Yugoslav Republic of",
                "MG": "Madagascar",
                "MW": "Malawi",
                "MY": "Malaysia",
                "MV": "Maldives",
                "ML": "Mali",
                "MT": "Malta",
                "MH": "Marshall Islands",
                "MQ": "Martinique",
                "MR": "Mauritania",
                "MU": "Mauritius",
                "YT": "Mayotte",
                "MX": "Mexico",
                "FM": "Micronesia, Federated States of",
                "MD": "Moldova, Republic of",
                "MC": "Monaco",
                "MN": "Mongolia",
                "ME": "Montenegro",
                "MS": "Montserrat",
                "MA": "Morocco",
                "MZ": "Mozambique",
                "MM": "Myanmar",
                "NA": "Namibia",
                "NR": "Nauru",
                "NP": "Nepal",
                "NL": "Netherlands",
                "NC": "New Caledonia",
                "NZ": "New Zealand",
                "NI": "Nicaragua",
                "NE": "Niger",
                "NG": "Nigeria",
                "NU": "Niue",
                "NF": "Norfolk Island",
                "MP": "Northern Mariana Islands",
                "NO": "Norway",
                "OM": "Oman",
                "PK": "Pakistan",
                "PW": "Palau",
                "PS": "Palestine, State of",
                "PA": "Panama",
                "PG": "Papua New Guinea",
                "PY": "Paraguay",
                "PE": "Peru",
                "PH": "Philippines",
                "PN": "Pitcairn",
                "PL": "Poland",
                "PT": "Portugal",
                "PR": "Puerto Rico",
                "QA": "Qatar",
                "RE": "Réunion",
                "RO": "Romania",
                "RU": "Russian Federation",
                "RW": "Rwanda",
                "BL": "Saint Barthélemy",
                "SH": "Saint Helena, Ascension and Tristan da Cunha",
                "KN": "Saint Kitts and Nevis",
                "LC": "Saint Lucia",
                "MF": "Saint Martin (French part)",
                "PM": "Saint Pierre and Miquelon",
                "VC": "Saint Vincent and the Grenadines",
                "WS": "Samoa",
                "SM": "San Marino",
                "ST": "Sao Tome and Principe",
                "SA": "Saudi Arabia",
                "SN": "Senegal",
                "RS": "Serbia",
                "SC": "Seychelles",
                "SL": "Sierra Leone",
                "SG": "Singapore",
                "SX": "Sint Maarten (Dutch part)",
                "SK": "Slovakia",
                "SI": "Slovenia",
                "SB": "Solomon Islands",
                "SO": "Somalia",
                "ZA": "South Africa",
                "GS": "South Georgia and the South Sandwich Islands",
                "SS": "South Sudan",
                "ES": "Spain",
                "LK": "Sri Lanka",
                "SD": "Sudan",
                "SR": "Suriname",
                "SJ": "Svalbard and Jan Mayen",
                "SZ": "Swaziland",
                "SE": "Sweden",
                "SY": "Syrian Arab Republic",
                "TW": "Taiwan, Province of China",
                "TJ": "Tajikistan",
                "TZ": "Tanzania, United Republic of",
                "TH": "Thailand",
                "TL": "Timor-Leste",
                "TG": "Togo",
                "TK": "Tokelau",
                "TO": "Tonga",
                "TT": "Trinidad and Tobago",
                "TN": "Tunisia",
                "TR": "Turkey",
                "TM": "Turkmenistan",
                "TC": "Turks and Caicos Islands",
                "TV": "Tuvalu",
                "UG": "Uganda",
                "UA": "Ukraine",
                "AE": "United Arab Emirates",
                "GB": "United Kingdom",
                "US": "United States",
                "UM": "United States Minor Outlying Islands",
                "UY": "Uruguay",
                "UZ": "Uzbekistan",
                "VU": "Vanuatu",
                "VE": "Venezuela, Bolivarian Republic of",
                "VN": "Viet Nam",
                "VG": "Virgin Islands, British",
                "VI": "Virgin Islands, U.S.",
                "WF": "Wallis and Futuna",
                "EH": "Western Sahara",
                "YE": "Yemen",
                "ZM": "Zambia",
                "ZW": "Zimbabwe"
            },
            //Country codes for phone
            "#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div > div:nth-child(1) > div > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select": {
                "+41": "CH",
                "+33": "FR",
                "+93": "AF",
                "+355": "AL",
                "+213": "DZ",
                "+1-684": "AS",
                "+376": "AD",
                "+244": "AO",
                "+1-264": "AI",
                "+672": "AQ",
                "+1-268": "AG",
                "+54": "AR",
                "+374": "AM",
                "+297": "AW",
                "+61": "AU",
                "+43": "AT",
                "+994": "AZ",
                "+1-242": "BS",
                "+973": "BH",
                "+880": "BD",
                "+1-246": "BB",
                "+375": "BY",
                "+32": "BE",
                "+501": "BZ",
                "+229": "BJ",
                "+1-441": "BM",
                "+975": "BT",
                "+591": "BO",
                "+387": "BA",
                "+267": "BW",
                "+55": "BR",
                "+673": "BN",
                "+359": "BG",
                "+226": "BF",
                "+257": "BI",
                "+855": "KH",
                "+237": "CM",
                "+1": "CA/US",
                "+238": "CV",
                "+1-345": "KY",
                "+236": "CF",
                "+235": "TD",
                "+56": "CL",
                "+86": "CN",
                "+53": "CX",
                "+57": "CO",
                "+269": "KM",
                "+243": "CD",
                "+242": "CG",
                "+682": "CK",
                "+506": "CR",
                "+225": "CI",
                "+385": "HR",
                "+357": "CY",
                "+420": "CZ",
                "+45": "DK",
                "+253": "DJ",
                "+1-767": "DM",
                "+1-829": "DO",
                "+670": "TP",
                "+593 ": "EC",
                "+20": "EG",
                "+503": "SV",
                "+240": "GQ",
                "+291": "ER",
                "+372": "EE",
                "+251": "ET",
                "+500": "FK",
                "+298": "FO",
                "+679": "FJ",
                "+358": "FI",
                "+594": "GF",
                "+689": "PF",
                "+241": "GA",
                "+220": "GM",
                "+995": "GE",
                "+49": "DE",
                "+233": "GH",
                "+350": "GI",
                "+30": "GR",
                "+299": "GL",
                "+1-473": "GD",
                "+590": "GP",
                "+1-671": "GU",
                "+502": "GT",
                "+224": "GN",
                "+245": "GW",
                "+592": "GY",
                "+509": "HT",
                "+504": "HN",
                "+852": "HK",
                "+36": "HU",
                "+354": "IS",
                "+91": "IN",
                "+62": "ID",
                "+98": "IR",
                "+964": "IQ",
                "+353": "IE",
                "+972": "IL",
                "+39": "IT",
                "+1-876": "JM",
                "+81": "JP",
                "+962": "JO",
                "+7": "KZ",
                "+254": "KE",
                "+686": "KI",
                "+850": "KP",
                "+82": "KR",
                "+965": "KW",
                "+996": "KG",
                "+856": "LA",
                "+371": "LV",
                "+961": "LB",
                "+266": "LS",
                "+231": "LR",
                "+218": "LY",
                "+423": "LI",
                "+370": "LT",
                "+352": "LU",
                "+853": "MO",
                "+389": "MK",
                "+261": "MG",
                "+265": "MW",
                "+60": "MY",
                "+960": "MV",
                "+223": "ML",
                "+356": "MT",
                "+692": "MH",
                "+596": "MQ",
                "+222": "MR",
                "+230": "MU",
                "+52": "MX",
                "+691": "FM",
                "+373": "MD",
                "+377": "MC",
                "+976": "MN",
                "+1-664": "MS",
                "+212": "MA",
                "+258": "MZ",
                "+95": "MM",
                "+264": "NA",
                "+674": "NR",
                "+977": "NP",
                "+31": "NL",
                "+599": "AN",
                "+687": "NC",
                "+64": "NZ",
                "+505": "NI",
                "+227": "NE",
                "+234": "NG",
                "+683": "NU",
                "+1-670": "MP",
                "+47": "NO",
                "+968": "OM",
                "+92": "PK",
                "+680": "PW",
                "+970": "PS",
                "+507": "PA",
                "+675": "PG",
                "+595": "PY",
                "+51": "PE",
                "+63": "PH",
                "+48": "PL",
                "+351": "PT",
                "+1-939": "PR",
                "+974 ": "QA",
                "+262": "RE",
                "+40": "RO",
                "+250": "RW",
                "+290": "SH",
                "+1-869": "KN",
                "+1-758": "LC",
                "+508": "PM",
                "+1-784": "VC",
                "+685": "WS",
                "+378": "SM",
                "+239": "ST",
                "+966": "SA",
                "+381": "SN",
                "+221": "SN",
                "+248": "SC",
                "+232": "SL",
                "+65": "SG",
                "+421": "SK",
                "+386": "SI",
                "+677": "SB",
                "+252": "SO",
                "+27": "ZA",
                "+34": "ES",
                "+94": "LK",
                "+249": "SD",
                "+597": "SR",
                "+268": "SZ",
                "+46": "SE",
                "+963": "SY",
                "+886": "TW",
                "+992": "TJ",
                "+255": "TZ",
                "+66": "TH",
                "+690": "TK",
                "+676": "TO",
                "+1-868": "TT",
                "+216": "TN",
                "+90": "TR",
                "+993": "TM",
                "+1-649": "TC",
                "+688": "TV",
                "+256": "UG",
                "+380": "UA",
                "+971": "AE",
                "+44": "GB",
                "+598": "UY",
                "+998": "UZ",
                "+678": "VU",
                "+418": "VA",
                "+58": "VE",
                "+84": "VN",
                "+1-284": "VI",
                "+1-340": "VQ",
                "+681": "WF",
                "+967": "YE",
                "+260": "ZM",
                "+263": "ZW"
            },
            "#root > div > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div > div:nth-child(1) > div > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select": {
                "+41": "CH",
                "+33": "FR",
                "+93": "AF",
                "+355": "AL",
                "+213": "DZ",
                "+1-684": "AS",
                "+376": "AD",
                "+244": "AO",
                "+1-264": "AI",
                "+672": "AQ",
                "+1-268": "AG",
                "+54": "AR",
                "+374": "AM",
                "+297": "AW",
                "+61": "AU",
                "+43": "AT",
                "+994": "AZ",
                "+1-242": "BS",
                "+973": "BH",
                "+880": "BD",
                "+1-246": "BB",
                "+375": "BY",
                "+32": "BE",
                "+501": "BZ",
                "+229": "BJ",
                "+1-441": "BM",
                "+975": "BT",
                "+591": "BO",
                "+387": "BA",
                "+267": "BW",
                "+55": "BR",
                "+673": "BN",
                "+359": "BG",
                "+226": "BF",
                "+257": "BI",
                "+855": "KH",
                "+237": "CM",
                "+1": "CA/US",
                "+238": "CV",
                "+1-345": "KY",
                "+236": "CF",
                "+235": "TD",
                "+56": "CL",
                "+86": "CN",
                "+53": "CX",
                "+57": "CO",
                "+269": "KM",
                "+243": "CD",
                "+242": "CG",
                "+682": "CK",
                "+506": "CR",
                "+225": "CI",
                "+385": "HR",
                "+357": "CY",
                "+420": "CZ",
                "+45": "DK",
                "+253": "DJ",
                "+1-767": "DM",
                "+1-829": "DO",
                "+670": "TP",
                "+593 ": "EC",
                "+20": "EG",
                "+503": "SV",
                "+240": "GQ",
                "+291": "ER",
                "+372": "EE",
                "+251": "ET",
                "+500": "FK",
                "+298": "FO",
                "+679": "FJ",
                "+358": "FI",
                "+594": "GF",
                "+689": "PF",
                "+241": "GA",
                "+220": "GM",
                "+995": "GE",
                "+49": "DE",
                "+233": "GH",
                "+350": "GI",
                "+30": "GR",
                "+299": "GL",
                "+1-473": "GD",
                "+590": "GP",
                "+1-671": "GU",
                "+502": "GT",
                "+224": "GN",
                "+245": "GW",
                "+592": "GY",
                "+509": "HT",
                "+504": "HN",
                "+852": "HK",
                "+36": "HU",
                "+354": "IS",
                "+91": "IN",
                "+62": "ID",
                "+98": "IR",
                "+964": "IQ",
                "+353": "IE",
                "+972": "IL",
                "+39": "IT",
                "+1-876": "JM",
                "+81": "JP",
                "+962": "JO",
                "+7": "KZ",
                "+254": "KE",
                "+686": "KI",
                "+850": "KP",
                "+82": "KR",
                "+965": "KW",
                "+996": "KG",
                "+856": "LA",
                "+371": "LV",
                "+961": "LB",
                "+266": "LS",
                "+231": "LR",
                "+218": "LY",
                "+423": "LI",
                "+370": "LT",
                "+352": "LU",
                "+853": "MO",
                "+389": "MK",
                "+261": "MG",
                "+265": "MW",
                "+60": "MY",
                "+960": "MV",
                "+223": "ML",
                "+356": "MT",
                "+692": "MH",
                "+596": "MQ",
                "+222": "MR",
                "+230": "MU",
                "+52": "MX",
                "+691": "FM",
                "+373": "MD",
                "+377": "MC",
                "+976": "MN",
                "+1-664": "MS",
                "+212": "MA",
                "+258": "MZ",
                "+95": "MM",
                "+264": "NA",
                "+674": "NR",
                "+977": "NP",
                "+31": "NL",
                "+599": "AN",
                "+687": "NC",
                "+64": "NZ",
                "+505": "NI",
                "+227": "NE",
                "+234": "NG",
                "+683": "NU",
                "+1-670": "MP",
                "+47": "NO",
                "+968": "OM",
                "+92": "PK",
                "+680": "PW",
                "+970": "PS",
                "+507": "PA",
                "+675": "PG",
                "+595": "PY",
                "+51": "PE",
                "+63": "PH",
                "+48": "PL",
                "+351": "PT",
                "+1-939": "PR",
                "+974 ": "QA",
                "+262": "RE",
                "+40": "RO",
                "+250": "RW",
                "+290": "SH",
                "+1-869": "KN",
                "+1-758": "LC",
                "+508": "PM",
                "+1-784": "VC",
                "+685": "WS",
                "+378": "SM",
                "+239": "ST",
                "+966": "SA",
                "+381": "SN",
                "+221": "SN",
                "+248": "SC",
                "+232": "SL",
                "+65": "SG",
                "+421": "SK",
                "+386": "SI",
                "+677": "SB",
                "+252": "SO",
                "+27": "ZA",
                "+34": "ES",
                "+94": "LK",
                "+249": "SD",
                "+597": "SR",
                "+268": "SZ",
                "+46": "SE",
                "+963": "SY",
                "+886": "TW",
                "+992": "TJ",
                "+255": "TZ",
                "+66": "TH",
                "+690": "TK",
                "+676": "TO",
                "+1-868": "TT",
                "+216": "TN",
                "+90": "TR",
                "+993": "TM",
                "+1-649": "TC",
                "+688": "TV",
                "+256": "UG",
                "+380": "UA",
                "+971": "AE",
                "+44": "GB",
                "+598": "UY",
                "+998": "UZ",
                "+678": "VU",
                "+418": "VA",
                "+58": "VE",
                "+84": "VN",
                "+1-284": "VI",
                "+1-340": "VQ",
                "+681": "WF",
                "+967": "YE",
                "+260": "ZM",
                "+263": "ZW"
            }
        }
    },
};
//export { standardConvertionTable, standardFields, standardLists, defaultFormFields, defaultQrOptions };
/*            //Country
            "#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div.columns.pt-4 > div:nth-child(2) > div:nth-child(5) > div.control.has-icons-left > div > select": {
                "CH": "Switzerland",
                "FR": "France",
                "IT": "Italy",
                "AT": "Austria",
                "AF": "Afghanistan",
                "AX": "Åland Islands",
                "AL": "Albania",
                "DZ": "Algeria",
                "AS": "American Samoa",
                "AD": "Andorra",
                "AO": "Angola",
                "AI": "Anguilla",
                "AQ": "Antarctica",
                "AG": "Antigua and Barbuda",
                "AR": "Argentina",
                "AM": "Armenia",
                "AW": "Aruba",
                "AU": "Australia",
                "AZ": "Azerbaijan",
                "BS": "Bahamas",
                "BH": "Bahrain",
                "BD": "Bangladesh",
                "BB": "Barbados",
                "BY": "Belarus",
                "BE": "Belgium",
                "BZ": "Belize",
                "BJ": "Benin",
                "BM": "Bermuda",
                "BT": "Bhutan",
                "BO": "Bolivia, Plurinational State of",
                "BQ": "Bonaire, Sint Eustatius and Saba",
                "BA": "Bosnia and Herzegovina",
                "BW": "Botswana",
                "BV": "Bouvet Island",
                "BR": "Brazil",
                "IO": "British Indian Ocean Territory",
                "BN": "Brunei Darussalam",
                "BG": "Bulgaria",
                "BF": "Burkina Faso",
                "BI": "Burundi",
                "KH": "Cambodia",
                "CM": "Cameroon",
                "CA": "Canada",
                "CV": "Cape Verde",
                "KY": "Cayman Islands",
                "CF": "Central African Republic",
                "TD": "Chad",
                "CL": "Chile",
                "CN": "China",
                "CX": "Christmas Island",
                "CC": "Cocos (Keeling) Islands",
                "CO": "Colombia",
                "KM": "Comoros",
                "CG": "Congo",
                "CD": "Congo, the Democratic Republic of the",
                "CK": "Cook Islands",
                "CR": "Costa Rica",
                "CI": "Côte d'Ivoire",
                "HR": "Croatia",
                "CU": "Cuba",
                "CW": "Curaçao",
                "CY": "Cyprus",
                "CZ": "Czech Republic",
                "DK": "Denmark",
                "DJ": "Djibouti",
                "DM": "Dominica",
                "DO": "Dominican Republic",
                "EC": "Ecuador",
                "EG": "Egypt",
                "SV": "El Salvador",
                "GQ": "Equatorial Guinea",
                "ER": "Eritrea",
                "EE": "Estonia",
                "ET": "Ethiopia",
                "FK": "Falkland Islands (Malvinas)",
                "FO": "Faroe Islands",
                "FJ": "Fiji",
                "FI": "Finland",
                "GF": "French Guiana",
                "PF": "French Polynesia",
                "TF": "French Southern Territories",
                "GA": "Gabon",
                "GM": "Gambia",
                "GE": "Georgia",
                "DE": "Germany",
                "GH": "Ghana",
                "GI": "Gibraltar",
                "GR": "Greece",
                "GL": "Greenland",
                "GD": "Grenada",
                "GP": "Guadeloupe",
                "GU": "Guam",
                "GT": "Guatemala",
                "GG": "Guernsey",
                "GN": "Guinea",
                "GW": "Guinea-Bissau",
                "GY": "Guyana",
                "HT": "Haiti",
                "HM": "Heard Island and McDonald Mcdonald Islands",
                "VA": "Holy See (Vatican City State)",
                "HN": "Honduras",
                "HK": "Hong Kong",
                "HU": "Hungary",
                "IS": "Iceland",
                "IN": "India",
                "ID": "Indonesia",
                "IR": "Iran, Islamic Republic of",
                "IQ": "Iraq",
                "IE": "Ireland",
                "IM": "Isle of Man",
                "IL": "Israel",
                "JM": "Jamaica",
                "JP": "Japan",
                "JE": "Jersey",
                "JO": "Jordan",
                "KZ": "Kazakhstan",
                "KE": "Kenya",
                "KI": "Kiribati",
                "KP": "Korea, Democratic People's Republic of",
                "KR": "Korea, Republic of",
                "KW": "Kuwait",
                "KG": "Kyrgyzstan",
                "LA": "Lao People's Democratic Republic",
                "LV": "Latvia",
                "LB": "Lebanon",
                "LS": "Lesotho",
                "LR": "Liberia",
                "LY": "Libya",
                "LI": "Liechtenstein",
                "LT": "Lithuania",
                "LU": "Luxembourg",
                "MO": "Macao",
                "MK": "Macedonia, the Former Yugoslav Republic of",
                "MG": "Madagascar",
                "MW": "Malawi",
                "MY": "Malaysia",
                "MV": "Maldives",
                "ML": "Mali",
                "MT": "Malta",
                "MH": "Marshall Islands",
                "MQ": "Martinique",
                "MR": "Mauritania",
                "MU": "Mauritius",
                "YT": "Mayotte",
                "MX": "Mexico",
                "FM": "Micronesia, Federated States of",
                "MD": "Moldova, Republic of",
                "MC": "Monaco",
                "MN": "Mongolia",
                "ME": "Montenegro",
                "MS": "Montserrat",
                "MA": "Morocco",
                "MZ": "Mozambique",
                "MM": "Myanmar",
                "NA": "Namibia",
                "NR": "Nauru",
                "NP": "Nepal",
                "NL": "Netherlands",
                "NC": "New Caledonia",
                "NZ": "New Zealand",
                "NI": "Nicaragua",
                "NE": "Niger",
                "NG": "Nigeria",
                "NU": "Niue",
                "NF": "Norfolk Island",
                "MP": "Northern Mariana Islands",
                "NO": "Norway",
                "OM": "Oman",
                "PK": "Pakistan",
                "PW": "Palau",
                "PS": "Palestine, State of",
                "PA": "Panama",
                "PG": "Papua New Guinea",
                "PY": "Paraguay",
                "PE": "Peru",
                "PH": "Philippines",
                "PN": "Pitcairn",
                "PL": "Poland",
                "PT": "Portugal",
                "PR": "Puerto Rico",
                "QA": "Qatar",
                "RE": "Réunion",
                "RO": "Romania",
                "RU": "Russian Federation",
                "RW": "Rwanda",
                "BL": "Saint Barthélemy",
                "SH": "Saint Helena, Ascension and Tristan da Cunha",
                "KN": "Saint Kitts and Nevis",
                "LC": "Saint Lucia",
                "MF": "Saint Martin (French part)",
                "PM": "Saint Pierre and Miquelon",
                "VC": "Saint Vincent and the Grenadines",
                "WS": "Samoa",
                "SM": "San Marino",
                "ST": "Sao Tome and Principe",
                "SA": "Saudi Arabia",
                "SN": "Senegal",
                "RS": "Serbia",
                "SC": "Seychelles",
                "SL": "Sierra Leone",
                "SG": "Singapore",
                "SX": "Sint Maarten (Dutch part)",
                "SK": "Slovakia",
                "SI": "Slovenia",
                "SB": "Solomon Islands",
                "SO": "Somalia",
                "ZA": "South Africa",
                "GS": "South Georgia and the South Sandwich Islands",
                "SS": "South Sudan",
                "ES": "Spain",
                "LK": "Sri Lanka",
                "SD": "Sudan",
                "SR": "Suriname",
                "SJ": "Svalbard and Jan Mayen",
                "SZ": "Swaziland",
                "SE": "Sweden",
                "SY": "Syrian Arab Republic",
                "TW": "Taiwan, Province of China",
                "TJ": "Tajikistan",
                "TZ": "Tanzania, United Republic of",
                "TH": "Thailand",
                "TL": "Timor-Leste",
                "TG": "Togo",
                "TK": "Tokelau",
                "TO": "Tonga",
                "TT": "Trinidad and Tobago",
                "TN": "Tunisia",
                "TR": "Turkey",
                "TM": "Turkmenistan",
                "TC": "Turks and Caicos Islands",
                "TV": "Tuvalu",
                "UG": "Uganda",
                "UA": "Ukraine",
                "AE": "United Arab Emirates",
                "GB": "United Kingdom",
                "US": "United States",
                "UM": "United States Minor Outlying Islands",
                "UY": "Uruguay",
                "UZ": "Uzbekistan",
                "VU": "Vanuatu",
                "VE": "Venezuela, Bolivarian Republic of",
                "VN": "Viet Nam",
                "VG": "Virgin Islands, British",
                "VI": "Virgin Islands, U.S.",
                "WF": "Wallis and Futuna",
                "EH": "Western Sahara",
                "YE": "Yemen",
                "ZM": "Zambia",
                "ZW": "Zimbabwe"
            },//Country codes for phone
            "#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div.columns.pt-4 > div:nth-child(1) > div:nth-child(7) > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select" : {
                "+41":"CH",
                "+33":"FR",
                "+93":"AF",
                "+355":"AL",
                "+213":"DZ",
                "+1-684":"AS",
                "+376":"AD",
                "+244":"AO",
                "+1-264":"AI",
                "+672":"AQ",
                "+1-268":"AG",
                "+54":"AR",
                "+374":"AM",
                "+297":"AW",
                "+61":"AU",
                "+43":"AT",
                "+994":"AZ",
                "+1-242":"BS",
                "+973":"BH",
                "+880":"BD",
                "+1-246":"BB",
                "+375":"BY",
                "+32":"BE",
                "+501":"BZ",
                "+229":"BJ",
                "+1-441":"BM",
                "+975":"BT",
                "+591":"BO",
                "+387":"BA",
                "+267":"BW",
                "+55":"BR",
                "+673":"BN",
                "+359":"BG",
                "+226":"BF",
                "+257":"BI",
                "+855":"KH",
                "+237":"CM",
                "+1":"CA",
                "+238":"CV",
                "+1-345":"KY",
                "+236":"CF",
                "+235":"TD",
                "+56":"CL",
                "+86":"CN",
                "+53":"CX",
                "+61":"CC",
                "+57":"CO",
                "+269":"KM",
                "+243":"CD",
                "+242":"CG",
                "+682":"CK",
                "+506":"CR",
                "+225":"CI",
                "+385":"HR",
                "+53":"CU",
                "+357":"CY",
                "+420":"CZ",
                "+45":"DK",
                "+253":"DJ",
                "+1-767":"DM",
                "+1-829":"DO",
                "+670":"TP",
                "+593 ":"EC",
                "+20":"EG",
                "+503":"SV",
                "+240":"GQ",
                "+291":"ER",
                "+372":"EE",
                "+251":"ET",
                "+500":"FK",
                "+298":"FO",
                "+679":"FJ",
                "+358":"FI",
                "+594":"GF",
                "+689":"PF",
                "+241":"GA",
                "+220":"GM",
                "+995":"GE",
                "+49":"DE",
                "+233":"GH",
                "+350":"GI",
                "+30":"GR",
                "+299":"GL",
                "+1-473":"GD",
                "+590":"GP",
                "+1-671":"GU",
                "+502":"GT",
                "+224":"GN",
                "+245":"GW",
                "+592":"GY",
                "+509":"HT",
                "+504":"HN",
                "+852":"HK",
                "+36":"HU",
                "+354":"IS",
                "+91":"IN",
                "+62":"ID",
                "+98":"IR",
                "+964":"IQ",
                "+353":"IE",
                "+972":"IL",
                "+39":"IT",
                "+1-876":"JM",
                "+81":"JP",
                "+962":"JO",
                "+7":"KZ",
                "+254":"KE",
                "+686":"KI",
                "+850":"KP",
                "+82":"KR",
                "+965":"KW",
                "+996":"KG",
                "+856":"LA",
                "+371":"LV",
                "+961":"LB",
                "+266":"LS",
                "+231":"LR",
                "+218":"LY",
                "+423":"LI",
                "+370":"LT",
                "+352":"LU",
                "+853":"MO",
                "+389":"MK",
                "+261":"MG",
                "+265":"MW",
                "+60":"MY",
                "+960":"MV",
                "+223":"ML",
                "+356":"MT",
                "+692":"MH",
                "+596":"MQ",
                "+222":"MR",
                "+230":"MU",
                "+269":"YT",
                "+52":"MX",
                "+691":"FM",
                "+373":"MD",
                "+377":"MC",
                "+976":"MN",
                "+1-664":"MS",
                "+212":"MA",
                "+258":"MZ",
                "+95":"MM",
                "+264":"NA",
                "+674":"NR",
                "+977":"NP",
                "+31":"NL",
                "+599":"AN",
                "+687":"NC",
                "+64":"NZ",
                "+505":"NI",
                "+227":"NE",
                "+234":"NG",
                "+683":"NU",
                "+672":"NF",
                "+1-670":"MP",
                "+47":"NO",
                "+968":"OM",
                "+92":"PK",
                "+680":"PW",
                "+970":"PS",
                "+507":"PA",
                "+675":"PG",
                "+595":"PY",
                "+51":"PE",
                "+63":"PH",
                "+48":"PL",
                "+351":"PT",
                "+1-939":"PR",
                "+974 ":"QA",
                "+262":"RE",
                "+40":"RO",
                "+7":"RU",
                "+250":"RW",
                "+290":"SH",
                "+1-869":"KN",
                "+1-758":"LC",
                "+508":"PM",
                "+1-784":"VC",
                "+685":"WS",
                "+378":"SM",
                "+239":"ST",
                "+966":"SA",
                "+381":"SN",
                "+221":"SN",
                "+248":"SC",
                "+232":"SL",
                "+65":"SG",
                "+421":"SK",
                "+386":"SI",
                "+677":"SB",
                "+252":"SO",
                "+27":"ZA",
                "+34":"ES",
                "+94":"LK",
                "+249":"SD",
                "+597":"SR",
                "+268":"SZ",
                "+46":"SE",
                "+963":"SY",
                "+886":"TW",
                "+992":"TJ",
                "+255":"TZ",
                "+66":"TH",
                "+690":"TK",
                "+676":"TO",
                "+1-868":"TT",
                "+216":"TN",
                "+90":"TR",
                "+993":"TM",
                "+1-649":"TC",
                "+688":"TV",
                "+256":"UG",
                "+380":"UA",
                "+971":"AE",
                "+44":"GB",
                "+1":"US",
                "+598":"UY",
                "+998":"UZ",
                "+678":"VU",
                "+418":"VA",
                "+58":"VE",
                "+84":"VN",
                "+1-284":"VI",
                "+1-340":"VQ",
                "+681":"WF",
                "+967":"YE",
                "+260":"ZM",
                "+263":"ZW"






            }
*/
/*
    ,
    "https?:\/\/.*\.m3-test\.ch\/admin\/platform\/team":{
        dataLocations: { // Associate inputs with elemenents in formData.payload
            "input[autocomplete='firstname']": ["form", "firstname"],
            "input[autocomplete='lastname']": ["form", "lastname"],
            //"#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div.control.has-icons-left > div > div.react-datepicker-wrapper > div > input": ["form", "birthdate"],
            "div.react-datepicker-wrapper > div > input": ["form", "birthdate"],
            "input[autocomplete='email']": ["form", "email"],
            "input[autocomplete='phone']": ["form", "mobile"],
            "input[autocomplete='address line 1']": ["form", "address1"],
            "input[autocomplete='address line 2']": ["form", "address2"],
            "input[autocomplete='postal code']": ["form", "postcode"],
            "input[autocomplete='city']": ["form", "city"],
            //"#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(5) > div.control.has-icons-left > div > select": ["form", "country"],
            "#root > div:nth-child(3) > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(6) > div.control.has-icons-left > div > select": ["form", "country"],
            "input[id='maleRadio']": ["form", "sex"],
            "input[id='femaleRadio']": ["form", "sex"],
            //"#root > div.wrapper > div > section > div > div > section.booking-funnel-step.section.pt-3 > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(7) > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select": ["form", "countrycode"]
            "#root > div:nth-child(3) > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select": ["form", "countrycode"]
        },
        dataTransforms: { // Modify the value of specified inputs based on below transformation tables
            "input[id='maleRadio']": {
                "male": true,
                "female": false
            },
            "input[id='femaleRadio']": {
                "male": false,
                "female": true
            },
            //Country
            "#root > div:nth-child(3) > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(6) > div.control.has-icons-left > div > select": {
                "CH": "Switzerland",
                "FR": "France",
                "IT": "Italy",
                "AT": "Austria",
                "AF": "Afghanistan",
                "AX": "Åland Islands",
                "AL": "Albania",
                "DZ": "Algeria",
                "AS": "American Samoa",
                "AD": "Andorra",
                "AO": "Angola",
                "AI": "Anguilla",
                "AQ": "Antarctica",
                "AG": "Antigua and Barbuda",
                "AR": "Argentina",
                "AM": "Armenia",
                "AW": "Aruba",
                "AU": "Australia",
                "AZ": "Azerbaijan",
                "BS": "Bahamas",
                "BH": "Bahrain",
                "BD": "Bangladesh",
                "BB": "Barbados",
                "BY": "Belarus",
                "BE": "Belgium",
                "BZ": "Belize",
                "BJ": "Benin",
                "BM": "Bermuda",
                "BT": "Bhutan",
                "BO": "Bolivia, Plurinational State of",
                "BQ": "Bonaire, Sint Eustatius and Saba",
                "BA": "Bosnia and Herzegovina",
                "BW": "Botswana",
                "BV": "Bouvet Island",
                "BR": "Brazil",
                "IO": "British Indian Ocean Territory",
                "BN": "Brunei Darussalam",
                "BG": "Bulgaria",
                "BF": "Burkina Faso",
                "BI": "Burundi",
                "KH": "Cambodia",
                "CM": "Cameroon",
                "CA": "Canada",
                "CV": "Cape Verde",
                "KY": "Cayman Islands",
                "CF": "Central African Republic",
                "TD": "Chad",
                "CL": "Chile",
                "CN": "China",
                "CX": "Christmas Island",
                "CC": "Cocos (Keeling) Islands",
                "CO": "Colombia",
                "KM": "Comoros",
                "CG": "Congo",
                "CD": "Congo, the Democratic Republic of the",
                "CK": "Cook Islands",
                "CR": "Costa Rica",
                "CI": "Côte d'Ivoire",
                "HR": "Croatia",
                "CU": "Cuba",
                "CW": "Curaçao",
                "CY": "Cyprus",
                "CZ": "Czech Republic",
                "DK": "Denmark",
                "DJ": "Djibouti",
                "DM": "Dominica",
                "DO": "Dominican Republic",
                "EC": "Ecuador",
                "EG": "Egypt",
                "SV": "El Salvador",
                "GQ": "Equatorial Guinea",
                "ER": "Eritrea",
                "EE": "Estonia",
                "ET": "Ethiopia",
                "FK": "Falkland Islands (Malvinas)",
                "FO": "Faroe Islands",
                "FJ": "Fiji",
                "FI": "Finland",
                "GF": "French Guiana",
                "PF": "French Polynesia",
                "TF": "French Southern Territories",
                "GA": "Gabon",
                "GM": "Gambia",
                "GE": "Georgia",
                "DE": "Germany",
                "GH": "Ghana",
                "GI": "Gibraltar",
                "GR": "Greece",
                "GL": "Greenland",
                "GD": "Grenada",
                "GP": "Guadeloupe",
                "GU": "Guam",
                "GT": "Guatemala",
                "GG": "Guernsey",
                "GN": "Guinea",
                "GW": "Guinea-Bissau",
                "GY": "Guyana",
                "HT": "Haiti",
                "HM": "Heard Island and McDonald Mcdonald Islands",
                "VA": "Holy See (Vatican City State)",
                "HN": "Honduras",
                "HK": "Hong Kong",
                "HU": "Hungary",
                "IS": "Iceland",
                "IN": "India",
                "ID": "Indonesia",
                "IR": "Iran, Islamic Republic of",
                "IQ": "Iraq",
                "IE": "Ireland",
                "IM": "Isle of Man",
                "IL": "Israel",
                "JM": "Jamaica",
                "JP": "Japan",
                "JE": "Jersey",
                "JO": "Jordan",
                "KZ": "Kazakhstan",
                "KE": "Kenya",
                "KI": "Kiribati",
                "KP": "Korea, Democratic People's Republic of",
                "KR": "Korea, Republic of",
                "KW": "Kuwait",
                "KG": "Kyrgyzstan",
                "LA": "Lao People's Democratic Republic",
                "LV": "Latvia",
                "LB": "Lebanon",
                "LS": "Lesotho",
                "LR": "Liberia",
                "LY": "Libya",
                "LI": "Liechtenstein",
                "LT": "Lithuania",
                "LU": "Luxembourg",
                "MO": "Macao",
                "MK": "Macedonia, the Former Yugoslav Republic of",
                "MG": "Madagascar",
                "MW": "Malawi",
                "MY": "Malaysia",
                "MV": "Maldives",
                "ML": "Mali",
                "MT": "Malta",
                "MH": "Marshall Islands",
                "MQ": "Martinique",
                "MR": "Mauritania",
                "MU": "Mauritius",
                "YT": "Mayotte",
                "MX": "Mexico",
                "FM": "Micronesia, Federated States of",
                "MD": "Moldova, Republic of",
                "MC": "Monaco",
                "MN": "Mongolia",
                "ME": "Montenegro",
                "MS": "Montserrat",
                "MA": "Morocco",
                "MZ": "Mozambique",
                "MM": "Myanmar",
                "NA": "Namibia",
                "NR": "Nauru",
                "NP": "Nepal",
                "NL": "Netherlands",
                "NC": "New Caledonia",
                "NZ": "New Zealand",
                "NI": "Nicaragua",
                "NE": "Niger",
                "NG": "Nigeria",
                "NU": "Niue",
                "NF": "Norfolk Island",
                "MP": "Northern Mariana Islands",
                "NO": "Norway",
                "OM": "Oman",
                "PK": "Pakistan",
                "PW": "Palau",
                "PS": "Palestine, State of",
                "PA": "Panama",
                "PG": "Papua New Guinea",
                "PY": "Paraguay",
                "PE": "Peru",
                "PH": "Philippines",
                "PN": "Pitcairn",
                "PL": "Poland",
                "PT": "Portugal",
                "PR": "Puerto Rico",
                "QA": "Qatar",
                "RE": "Réunion",
                "RO": "Romania",
                "RU": "Russian Federation",
                "RW": "Rwanda",
                "BL": "Saint Barthélemy",
                "SH": "Saint Helena, Ascension and Tristan da Cunha",
                "KN": "Saint Kitts and Nevis",
                "LC": "Saint Lucia",
                "MF": "Saint Martin (French part)",
                "PM": "Saint Pierre and Miquelon",
                "VC": "Saint Vincent and the Grenadines",
                "WS": "Samoa",
                "SM": "San Marino",
                "ST": "Sao Tome and Principe",
                "SA": "Saudi Arabia",
                "SN": "Senegal",
                "RS": "Serbia",
                "SC": "Seychelles",
                "SL": "Sierra Leone",
                "SG": "Singapore",
                "SX": "Sint Maarten (Dutch part)",
                "SK": "Slovakia",
                "SI": "Slovenia",
                "SB": "Solomon Islands",
                "SO": "Somalia",
                "ZA": "South Africa",
                "GS": "South Georgia and the South Sandwich Islands",
                "SS": "South Sudan",
                "ES": "Spain",
                "LK": "Sri Lanka",
                "SD": "Sudan",
                "SR": "Suriname",
                "SJ": "Svalbard and Jan Mayen",
                "SZ": "Swaziland",
                "SE": "Sweden",
                "SY": "Syrian Arab Republic",
                "TW": "Taiwan, Province of China",
                "TJ": "Tajikistan",
                "TZ": "Tanzania, United Republic of",
                "TH": "Thailand",
                "TL": "Timor-Leste",
                "TG": "Togo",
                "TK": "Tokelau",
                "TO": "Tonga",
                "TT": "Trinidad and Tobago",
                "TN": "Tunisia",
                "TR": "Turkey",
                "TM": "Turkmenistan",
                "TC": "Turks and Caicos Islands",
                "TV": "Tuvalu",
                "UG": "Uganda",
                "UA": "Ukraine",
                "AE": "United Arab Emirates",
                "GB": "United Kingdom",
                "US": "United States",
                "UM": "United States Minor Outlying Islands",
                "UY": "Uruguay",
                "UZ": "Uzbekistan",
                "VU": "Vanuatu",
                "VE": "Venezuela, Bolivarian Republic of",
                "VN": "Viet Nam",
                "VG": "Virgin Islands, British",
                "VI": "Virgin Islands, U.S.",
                "WF": "Wallis and Futuna",
                "EH": "Western Sahara",
                "YE": "Yemen",
                "ZM": "Zambia",
                "ZW": "Zimbabwe"
            },//Country codes for phone
            "#root > div:nth-child(3) > div > div > section > div > div > div.column.is-three-quarters.content-box > div > div > div > div > div.tile.is-parent.false > article > div > div > div:nth-child(4) > div:nth-child(1) > div:nth-child(8) > div.phone-container.columns > div.field.code.column.is-half > div > div.select.is-rounded > select" : {
                "+41":"CH",
                "+33":"FR",
                "+93":"AF",
                "+355":"AL",
                "+213":"DZ",
                "+1-684":"AS",
                "+376":"AD",
                "+244":"AO",
                "+1-264":"AI",
                "+672":"AQ",
                "+1-268":"AG",
                "+54":"AR",
                "+374":"AM",
                "+297":"AW",
                "+61":"AU",
                "+43":"AT",
                "+994":"AZ",
                "+1-242":"BS",
                "+973":"BH",
                "+880":"BD",
                "+1-246":"BB",
                "+375":"BY",
                "+32":"BE",
                "+501":"BZ",
                "+229":"BJ",
                "+1-441":"BM",
                "+975":"BT",
                "+591":"BO",
                "+387":"BA",
                "+267":"BW",
                "+55":"BR",
                "+673":"BN",
                "+359":"BG",
                "+226":"BF",
                "+257":"BI",
                "+855":"KH",
                "+237":"CM",
                "+1":"CA",
                "+238":"CV",
                "+1-345":"KY",
                "+236":"CF",
                "+235":"TD",
                "+56":"CL",
                "+86":"CN",
                "+53":"CX",
                "+61":"CC",
                "+57":"CO",
                "+269":"KM",
                "+243":"CD",
                "+242":"CG",
                "+682":"CK",
                "+506":"CR",
                "+225":"CI",
                "+385":"HR",
                "+53":"CU",
                "+357":"CY",
                "+420":"CZ",
                "+45":"DK",
                "+253":"DJ",
                "+1-767":"DM",
                "+1-829":"DO",
                "+670":"TP",
                "+593 ":"EC",
                "+20":"EG",
                "+503":"SV",
                "+240":"GQ",
                "+291":"ER",
                "+372":"EE",
                "+251":"ET",
                "+500":"FK",
                "+298":"FO",
                "+679":"FJ",
                "+358":"FI",
                "+594":"GF",
                "+689":"PF",
                "+241":"GA",
                "+220":"GM",
                "+995":"GE",
                "+49":"DE",
                "+233":"GH",
                "+350":"GI",
                "+30":"GR",
                "+299":"GL",
                "+1-473":"GD",
                "+590":"GP",
                "+1-671":"GU",
                "+502":"GT",
                "+224":"GN",
                "+245":"GW",
                "+592":"GY",
                "+509":"HT",
                "+504":"HN",
                "+852":"HK",
                "+36":"HU",
                "+354":"IS",
                "+91":"IN",
                "+62":"ID",
                "+98":"IR",
                "+964":"IQ",
                "+353":"IE",
                "+972":"IL",
                "+39":"IT",
                "+1-876":"JM",
                "+81":"JP",
                "+962":"JO",
                "+7":"KZ",
                "+254":"KE",
                "+686":"KI",
                "+850":"KP",
                "+82":"KR",
                "+965":"KW",
                "+996":"KG",
                "+856":"LA",
                "+371":"LV",
                "+961":"LB",
                "+266":"LS",
                "+231":"LR",
                "+218":"LY",
                "+423":"LI",
                "+370":"LT",
                "+352":"LU",
                "+853":"MO",
                "+389":"MK",
                "+261":"MG",
                "+265":"MW",
                "+60":"MY",
                "+960":"MV",
                "+223":"ML",
                "+356":"MT",
                "+692":"MH",
                "+596":"MQ",
                "+222":"MR",
                "+230":"MU",
                "+269":"YT",
                "+52":"MX",
                "+691":"FM",
                "+373":"MD",
                "+377":"MC",
                "+976":"MN",
                "+1-664":"MS",
                "+212":"MA",
                "+258":"MZ",
                "+95":"MM",
                "+264":"NA",
                "+674":"NR",
                "+977":"NP",
                "+31":"NL",
                "+599":"AN",
                "+687":"NC",
                "+64":"NZ",
                "+505":"NI",
                "+227":"NE",
                "+234":"NG",
                "+683":"NU",
                "+672":"NF",
                "+1-670":"MP",
                "+47":"NO",
                "+968":"OM",
                "+92":"PK",
                "+680":"PW",
                "+970":"PS",
                "+507":"PA",
                "+675":"PG",
                "+595":"PY",
                "+51":"PE",
                "+63":"PH",
                "+48":"PL",
                "+351":"PT",
                "+1-939":"PR",
                "+974 ":"QA",
                "+262":"RE",
                "+40":"RO",
                "+7":"RU",
                "+250":"RW",
                "+290":"SH",
                "+1-869":"KN",
                "+1-758":"LC",
                "+508":"PM",
                "+1-784":"VC",
                "+685":"WS",
                "+378":"SM",
                "+239":"ST",
                "+966":"SA",
                "+381":"SN",
                "+221":"SN",
                "+248":"SC",
                "+232":"SL",
                "+65":"SG",
                "+421":"SK",
                "+386":"SI",
                "+677":"SB",
                "+252":"SO",
                "+27":"ZA",
                "+34":"ES",
                "+94":"LK",
                "+249":"SD",
                "+597":"SR",
                "+268":"SZ",
                "+46":"SE",
                "+963":"SY",
                "+886":"TW",
                "+992":"TJ",
                "+255":"TZ",
                "+66":"TH",
                "+690":"TK",
                "+676":"TO",
                "+1-868":"TT",
                "+216":"TN",
                "+90":"TR",
                "+993":"TM",
                "+1-649":"TC",
                "+688":"TV",
                "+256":"UG",
                "+380":"UA",
                "+971":"AE",
                "+44":"GB",
                "+1":"US",
                "+598":"UY",
                "+998":"UZ",
                "+678":"VU",
                "+418":"VA",
                "+58":"VE",
                "+84":"VN",
                "+1-284":"VI",
                "+1-340":"VQ",
                "+681":"WF",
                "+967":"YE",
                "+260":"ZM",
                "+263":"ZW"
            }
        }
    }
}

*/ 
define("web-basics-helper-kit/web-basics/javascript-simplifier", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateElement = void 0;
    // General function to create any html element (basically replace the document.createElement())
    // Tag, id, value (often text), attributes object attribute: value}, parent object, class array
    function generateElement(tag, objectid, value, attributes, objectparent, objectclass) {
        var createdElement = document.createElement(tag);
        if (objectid) {
            createdElement.id = objectid;
        }
        if (objectclass) {
            switch (typeof objectclass) {
                case "string":
                    createdElement.classList.add(objectclass);
                    break;
                case "object":
                    objectclass.forEach((item) => {
                        createdElement.classList.add(item);
                    });
                    break;
            }
        }
        if (objectparent) {
            objectparent.appendChild(createdElement);
        }
        if (value) {
            var insideText = document.createTextNode(value);
            createdElement.appendChild(insideText);
        }
        if (attributes) {
            for (let attribute_key in attributes) {
                createdElement.setAttribute(attribute_key, attributes[attribute_key]);
            }
        }
        return createdElement;
    }
    exports.generateElement = generateElement;
});
define("src/formgenerator", ["require", "exports", "web-basics-helper-kit/web-basics/javascript-simplifier"], function (require, exports, javascript_simplifier_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateForm = void 0;
    function generateForm(formID, strFormFields = defaultFormFields, formFields = standardFields, dataLists = standardLists) {
        let form = document.getElementById(formID);
        ////////////////////// FORM FIELDS ///////////////////////
        // console.log(strFormFields);
        // Used to set autofocus on first field
        let firstField = true;
        for (const c of strFormFields) {
            if (!formFields.hasOwnProperty(c))
                throw `Unknown form key (${c})`;
            let fieldAttributes = formFields[c];
            ///////////////// Create div
            // console.log("fieldAttributes", fieldAttributes);
            if (fieldAttributes.div == true) {
                var newDiv = (0, javascript_simplifier_js_1.generateElement)("div", null, null, null, form, fieldAttributes.div_classes);
            }
            else
                var newDiv = (0, javascript_simplifier_js_1.generateElement)("div", null, null, null, form);
            ///////////////// Create new element
            // handle the special case of Select
            if (fieldAttributes["type"] == "select") {
                var newField = (0, javascript_simplifier_js_1.generateElement)("select");
                // Create "option" children
                // the Options attribute can contain a string referencing a dataList, or a list directly.
                if (typeof (fieldAttributes["options"]) == "string")
                    var options = dataLists[fieldAttributes["options"]];
                else
                    var options = fieldAttributes["options"];
                Object.entries(options).forEach(([optionName, optionText]) => {
                    (0, javascript_simplifier_js_1.generateElement)("option", null, optionText, { "value": optionName, "data-tokens": optionText }, newField);
                });
                delete fieldAttributes.options;
            }
            else
                var newField = (0, javascript_simplifier_js_1.generateElement)("input");
            if (firstField) {
                newField.autofocus = true;
                firstField = false;
            }
            var newLabel = null;
            ///////////////// Set attributes
            switch (fieldAttributes["type"]) {
                case "select":
                case "text":
                case "email":
                case "number":
                case "tel":
                case "submit":
                case "button":
                case "":
                case "date":
                    if (fieldAttributes.hasOwnProperty("label")) {
                        newLabel = (0, javascript_simplifier_js_1.generateElement)("label", // tag 
                        null, // id
                        fieldAttributes.label, // value
                        { "for": fieldAttributes.name }, // attributes {}
                        null, // parent element
                        fieldAttributes.label_classes // classes []
                        );
                        delete fieldAttributes.label;
                    }
                    // Add all attributes to the input tag
                    Object.entries(fieldAttributes).forEach(([attribute, value]) => {
                        if (attribute != "label_classes" && attribute != "div" && attribute != "div_classes")
                            newField.setAttribute(attribute, value);
                    });
                    break;
                default:
                    throw `Label: Unable to handle field type ${fieldAttributes["type"]}`;
            }
            newDiv.appendChild(newField);
            if (newLabel)
                newDiv.appendChild(newLabel);
        }
        ////////////////////// DATA LISTS ///////////////////////
        if (dataLists) {
            Object.entries(dataLists).forEach(([listName, listContent]) => {
                var listElement = (0, javascript_simplifier_js_1.generateElement)("datalist", listName);
                Object.entries(listContent).forEach(([elementName, elementValue]) => {
                    (0, javascript_simplifier_js_1.generateElement)("option", null, elementValue, { value: elementName }, listElement);
                });
                document.body.appendChild(listElement);
            });
        }
    }
    exports.generateForm = generateForm;
});
define("src/konamiStatPrint", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextInPopup = exports.download_csv_file = exports.incrementPrintNumber = exports.touchendEvent = exports.touchstartEvent = void 0;
    // the 'official' Konami Code sequence
    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    var konamiCodeHistory = ['', '', '', '', '', '', '', ''];
    var configPopup = document.getElementById('configPopup');
    var modal = new bootstrap.Modal(document.querySelector(".modal"), {});
    //variables used for the initial touch point 
    var clientX, clientY;
    function touchstartEvent(e) {
        // Cache the client X/Y coordinates
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    }
    exports.touchstartEvent = touchstartEvent;
    function touchendEvent(e) {
        var deltaX, deltaY;
        // Compute the change in X and Y coordinates.
        // The first touch point in the changedTouches
        // list is the touch point that was just removed from the surface.
        deltaX = e.changedTouches[0].clientX - clientX;
        deltaY = e.changedTouches[0].clientY - clientY;
        let key;
        //calculate wich move was done with the difference between touch point and end point
        if (Math.abs(deltaX) > Math.abs(deltaY))
            key = (deltaX > 0) ? "ArrowRight" : "ArrowLeft";
        else
            key = (deltaY > 0) ? "ArrowDown" : "ArrowUp";
        //}
        detectKonamiCode(key);
    }
    exports.touchendEvent = touchendEvent;
    // add keydown event listener
    document.addEventListener('keydown', function (e) {
        detectKonamiCode(e.key);
    });
    //function that add the last event at the end of the pile, then checks if the konami code is done or not
    function detectKonamiCode(key) {
        console.log("key", key);
        //    if (konamiCode.indexOf(key) >= 0) {
        konamiCodeHistory.push(key);
        konamiCodeHistory.shift();
        console.log("konamiCodeHistory", konamiCodeHistory);
        if (JSON.stringify(konamiCode) == JSON.stringify(konamiCodeHistory)) {
            modal.show();
            TextInPopup();
        }
        //    }
    }
    //key's name of the local storage used by csv print infos
    const LOCALSTORAGEKEY_PRINTSTATS = "PrintStats";
    //this function is used to increment the number of print done with the device
    function incrementPrintNumber() {
        //get the infos about printing in the local storage
        var PrintStats = window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS);
        PrintStats = (PrintStats == null) ? {} : JSON.parse(PrintStats);
        //console.log(PrintStats)
        const DATE = new Date();
        //this one gets today's date, and the actual hour
        var printTimeStamp = (new Date(DATE.getFullYear(), DATE.getMonth(), DATE.getDate(), DATE.getHours(), 0, 0))
            .toISOString();
        //if the timestamp already exists, increase the number of printing by 1
        if (printTimeStamp in PrintStats)
            PrintStats[printTimeStamp] += 1;
        else //create a new line with the new timestamp and set it to 1
            PrintStats[printTimeStamp] = 1;
        //store the new datas about prints
        window.localStorage.setItem(LOCALSTORAGEKEY_PRINTSTATS, JSON.stringify(PrintStats));
        //console.log("getItem", window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS))
    }
    exports.incrementPrintNumber = incrementPrintNumber;
    function download_csv_file() {
        var PrintStats = window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS);
        PrintStats = (PrintStats == null) ? {} : JSON.parse(PrintStats);
        //define the heading for each row of the data  
        var csv = 'Date impression,Nombre\n';
        //loop in every data about prints stocked in local storage  
        Object.entries(PrintStats).forEach((row) => {
            csv += row + "\n";
        });
        //create a hidden element that will be used to download the csv
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        //provide the name for the CSV file to be downloaded  
        hiddenElement.download = 'Print Number and date.csv';
        hiddenElement.click();
    }
    exports.download_csv_file = download_csv_file;
    //displays the number of impressions in the modal, so it'll be up to date ach time the modal appears
    function TextInPopup() {
        var PrintStats = window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS);
        PrintStats = (PrintStats == null) ? {} : JSON.parse(PrintStats);
        let number = 0;
        Object.entries(PrintStats).forEach((row) => {
            number = number + row[1];
        });
        //console.log(number)
        configPopup.innerText = "Nombre total d'impressions aujourd'hui :" + " " + number;
    }
    exports.TextInPopup = TextInPopup;
});
//import { defaultQrOptions, standardFields } from './commons.js';
define("src/qrautofill", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.changeDisplayFromPlatform = exports.setQrOptionsFromURL = exports.updateQRCode = exports.initQRCode = exports.generateQRContent = void 0;
    // Global variables
    var outputFormat, encoding, genString, platform;
    var qrCode, qrValueOutput;
    // Set  and update input field
    function setQrOptionsFromURL() {
        // Get / Set QR Generator parameters
        // get parameters from URL
        let urlParams = new URLSearchParams(document.location.search.substring(1));
        // Set Output format. Default is JSON. 
        outputFormat = urlParams.has('outputformat') ?
            urlParams.get('outputformat') : defaultQrOptions.outputFormat; // JSON, String
        // Platform (Mobile/PC)
        platform = urlParams.has('platform') ?
            urlParams.get('platform') : defaultQrOptions.platform; // PC
        // Encoding. Default is Base64
        encoding = urlParams.has('encoding') ?
            urlParams.get('encoding') : defaultQrOptions.encoding; // Base64, Raw, utf-16
        // Set genstring variable. Default matches m3-test mobile unit form. Only for String Output
        genString = urlParams.has('genstring') ?
            urlParams.get('genstring') : defaultQrOptions.genString;
        // document.getElementsByName("genstring")[0].value = genString;
        return { outputFormat: outputFormat, encoding: encoding, genString: genString };
    }
    exports.setQrOptionsFromURL = setQrOptionsFromURL;
    function changeDisplayFromPlatform() {
        let qrcodediv = document.querySelector("#qrcode-div");
        let printButton = document.querySelector("#print-button");
        if (platform == "mobile") {
            qrcodediv.style.display = "block";
            printButton.style.display = "none";
        }
        else {
            qrcodediv.id = "qrcode-div-print";
        }
    }
    exports.changeDisplayFromPlatform = changeDisplayFromPlatform;
    // Return the text to be encoded in the QR Code based on the genString sequence provided in argument
    function generateSequenceOuput(genString) {
        // Return the value corresponding to a specific Character in the genString
        function getValueFromCharacter(c) {
            // If no special character is to be returned, eturn corresponding element's name
            function getElementNameFromCharacter(c) {
                if (standardFields.has(c))
                    return standardFields.c.name;
                else
                    throw `Incorrect character in genString (${c})`;
            }
            // Return special character, or corresponding element's value
            switch (c) {
                case 'T':
                    return '\t';
                case 'R':
                    return '\r';
                case 'W':
                    return ' ';
                case 'N':
                    return '\n';
                default:
                    // If not a special character, try to find an element by its name and return its value
                    return document.getElementsByName(getElementNameFromCharacter(c))[0].value;
            }
            ;
        }
        // Generate String to be encoded in the QR Code by concatenating each value corresponding to the characters in the genString sequence
        let generatedString = "";
        [...genString].forEach(c => {
            generatedString += getValueFromCharacter(c);
        });
        // console.log(generatedString)
        return generatedString;
    }
    function generateJsonOutput() {
        let payload = {};
        // Go through each form
        Array.from(document.forms).forEach((form, formIndex) => {
            payload[form.id] = {};
            function appendFormElement(element, elementIndex) {
                if (element.type == 'fieldset')
                    return;
                payload[form.id][element.name] = element.value;
                // console.log(form.id, element.name, element);
            }
            // Go through each element of the form
            Array.from(form.elements).forEach(appendFormElement);
        });
        // Put payload in main object containing headers
        let outputObject = {
            v: "1.0",
            type: "data"
        };
        outputObject['payload'] = payload;
        // console.log(outputObject);
        let jsonOutput = JSON.stringify(outputObject);
        // console.log(jsonOutput);
        return jsonOutput;
    }
    // This function will generate the string that will be saved in the QR Code.
    // It is agnostic of the selected QR Code Generator library.
    function generateQRContent(outputFormat, encoding) {
        let qrContent = new String;
        // 1. Generate content in raw format
        switch (outputFormat) {
            case "Sequence":
                qrContent = generateSequenceOuput();
                break;
            case "JSON":
            case "":
                qrContent = generateJsonOutput();
                break;
            default:
                throw `Unknown Output Format (${outputFormat})`;
        }
        // 2. Encoding
        if (encoding != "Raw")
            qrContent = changeEncoding(qrContent, encoding);
        // Return
        // console.log(`Generated qrContent`, qrContent)
        return qrContent;
    }
    exports.generateQRContent = generateQRContent;
    // Test
    function changeEncoding(qrContent, encoding) {
        let encodedString;
        switch (encoding) {
            case "Base64":
                encodedString = btoa(qrContent);
                break;
            case "lz7":
                encodedString = LZString.compressToBase64(qrContent).replace(/\+/g, "-").replace(/\//g, "_");
                ;
                break;
            default:
                throw `Unknown Encoding (${encoding})`;
        }
        return encodedString;
    }
    // Initialise QR Code in HTML document
    function initQRCode(qrCodeId = "qrcode", qrValueOutputId = null, qrOptions = defaultQrOptions) {
        let easyQRCodeOptions = {
            // ====== Basic
            text: "https://github.com/ushelp/EasyQRCodeJS",
            width: 430,
            height: 430,
            colorDark: "#000000",
            colorLight: "#fffcf0",
            correctLevel: QRCode.CorrectLevel.L,
            dotScale: 0.8,
            quietZone: 1,
            quietZoneColor: "rgba(0,0,0,0)",
            logo: 'assets/img/m3-logo-transparent-square.png',
            logoBackgroundTransparent: true,
            autoColor: true,
            autoColorDark: "rgba(0, 0, 0, 1)",
            autoColorLight: "rgba(255, 255, 255, 1)", // Automatic color: light CSS color
            // title: '', // content 
            // titleFont: "normal normal bold 20px Arial", //font. default is "bold 16px Arial"
            // titleColor: "#004284", // color. default is "#000"
            // titleBackgroundColor: "#fff", // background color. default is "#fff"
            // titleHeight: 40, // height, including subTitle. default is 0
            // titleTop: 20, // draws y coordinates. default is 30
            // ====== dotScale
            /*
    
            dotScaleTiming: 1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
            dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
            dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
    
            dotScaleA: 1, // Dafault for alignment block, must be greater than 0, less than or equal to 1. default is 1
            dotScaleAO: undefined, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
            dotScaleAI: undefined, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1
            */
            // ====== Logo
            /*
            logo: "assets/m3-logo-transparent-min.png", // Relative address, relative to `easy.qrcode.min.js`
            logoWidth: 80, // fixed logo width. default is `width/3.5`
            logoHeight: 80, // fixed logo height. default is `heigth/3.5`
            logoMaxWidth: undefined, // Maximum logo width. if set will ignore `logoWidth` value
            logoMaxHeight: undefined, // Maximum logo height. if set will ignore `logoHeight` value
            logoBackgroundColor: '#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
            logoBackgroundTransparent: false, // Whether use transparent image, default is false
            */
            // ====== Backgroud Image
            /*
            backgroundImage: '', // Background Image
            backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
            autoColor: false, // Automatic color adjustment(for data block)
            autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
            autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color
            */
            // ====== Colorful
            // === Posotion Pattern(Eye) Color
            /*
            PO: '#e1622f', // Global Posotion Outer color. if not set, the defaut is `colorDark`
            PI: '#aa5b71', // Global Posotion Inner color. if not set, the defaut is `colorDark`
            PO_TL:'', // Posotion Outer color - Top Left
            PI_TL:'', // Posotion Inner color - Top Left
            PO_TR:'', // Posotion Outer color - Top Right
            PI_TR:'', // Posotion Inner color - Top Right
            PO_BL:'', // Posotion Outer color - Bottom Left
            PI_BL:'', // Posotion Inner color - Bottom Left
            */
            // === Alignment Color
            /*
            AO: '', // Alignment Outer. if not set, the defaut is `colorDark`
            AI: '', // Alignment Inner. if not set, the defaut is `colorDark`
            */
            // === Timing Pattern Color
            /*
            timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
            timing_H: '', // Horizontal timing color
            timing_V: '', // Vertical timing color
            */
            // ====== Title
            /*
            title: 'QR Title', // content
            titleFont: "normal normal bold 18px Arial", //font. default is "bold 16px Arial"
            titleColor: "#004284", // color. default is "#000"
            titleBackgroundColor: "#fff", // background color. default is "#fff"
            titleHeight: 70, // height, including subTitle. default is 0
            titleTop: 25, // draws y coordinates. default is 30
            */
            // ====== SubTitle
            /*
            subTitle: 'QR subTitle', // content
            subTitleFont: "normal normal normal 14px Arial", // font. default is "14px Arial"
            subTitleColor: "#004284", // color. default is "4F4F4F"
            subTitleTop: 40, // draws y coordinates. default is 0
            */
            // ===== Event Handler
            /*
            onRenderingStart: undefined,
            onRenderingEnd: undefined,
            */
            // ===== Versions
            /*
            version: 0, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.
            */
            // ===== Binary(hex) data mode
            /*
            binary: false, // Whether it is binary mode, default is text mode.
            */
            // ===== Tooltip
            /*
            tooltip: false, // Whether set the QRCode Text as the title attribute value of the QRCode div
            */
            // ==== CORS
            /*
            crossOrigin: null, // String which specifies the CORS setting to use when retrieving the image. null means that the crossOrigin attribute is not set.
            */
            // =====  Drawing method
            /*
            drawer: 'canvas' // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
            */
        };
        qrCode = new QRCode(document.getElementById(qrCodeId), easyQRCodeOptions);
        if (qrValueOutputId)
            qrValueOutput = document.getElementById(qrValueOutputId);
    }
    exports.initQRCode = initQRCode;
    // This function will render / update the QR Code on the HTML Document
    // Contains code specific to the selected QR Code Generator Library.
    function updateQRCode() {
        // console.log(`Updating QR Code`);
        // Generate QR Code from document DOM
        let qrcontent = generateQRContent(outputFormat, encoding);
        qrCode.makeCode(qrcontent);
        if (qrValueOutput)
            qrValueOutput.innerText = qrcontent;
    }
    exports.updateQRCode = updateQRCode;
});
define("src/qrfill.formgenerate", ["require", "exports", "src/qrautofill", "src/formgenerator", "src/konamiStatPrint"], function (require, exports, qrautofill_js_1, formgenerator_js_1, konamiStatPrint_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.addEventListener('DOMContentLoaded', function () {
        // get parameters from URL
        let urlParams = new URLSearchParams(document.location.search.substring(1));
        (0, formgenerator_js_1.generateForm)('form');
        (0, qrautofill_js_1.setQrOptionsFromURL)();
        (0, qrautofill_js_1.initQRCode)('qrcode', 'qroutputvalue');
        (0, qrautofill_js_1.changeDisplayFromPlatform)();
        var body = document.querySelector('body');
        var form = document.querySelector('form');
        var printBtn = document.getElementById('print-button');
        var dlCsvBtn = document.getElementById('dl-csv-button');
        $('.datepicker').datepicker({
            format: "yyyy-mm-dd",
            startView: 2,
            maxViewMode: 2,
            language: "fr",
            keyboardNavigation: false,
            autoclose: true,
            defaultViewDate: { year: 1980, month: 1, day: 1 }
        });
        form.addEventListener('change', qrautofill_js_1.updateQRCode);
        form.addEventListener('keyup', qrautofill_js_1.updateQRCode);
        printBtn.onclick = function () {
            qrautofill_js_1.updateQRCode;
            setTimeout(function () {
                window.print();
                (0, konamiStatPrint_js_1.incrementPrintNumber)();
            }, 1000);
        };
        //reload the page after clicking print button
        window.onafterprint = function () {
            window.location.reload();
        };
        dlCsvBtn.onclick = konamiStatPrint_js_1.download_csv_file; // download the CSV file
        body.addEventListener('touchstart', konamiStatPrint_js_1.touchstartEvent, false); //those 2 functions are used to detect
        body.addEventListener('touchend', konamiStatPrint_js_1.touchendEvent, false); //the swipes and moves on screen to use the konami code
    }); //EOF
});
/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if (typeof exports === 'object') {
        factory(require('jquery'));
    }
    else {
        factory(jQuery);
    }
}(function ($, undefined) {
    function UTCDate() {
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function UTCToday() {
        var today = new Date();
        return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
    }
    function isUTCEquals(date1, date2) {
        return (date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() === date2.getUTCDate());
    }
    function alias(method, deprecationMsg) {
        return function () {
            if (deprecationMsg !== undefined) {
                $.fn.datepicker.deprecated(deprecationMsg);
            }
            return this[method].apply(this, arguments);
        };
    }
    function isValidDate(d) {
        return d && !isNaN(d.getTime());
    }
    var DateArray = (function () {
        var extras = {
            get: function (i) {
                return this.slice(i)[0];
            },
            contains: function (d) {
                // Array.indexOf is not cross-browser;
                // $.inArray doesn't work with Dates
                var val = d && d.valueOf();
                for (var i = 0, l = this.length; i < l; i++)
                    // Use date arithmetic to allow dates with different times to match
                    if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000 * 60 * 60 * 24)
                        return i;
                return -1;
            },
            remove: function (i) {
                this.splice(i, 1);
            },
            replace: function (new_array) {
                if (!new_array)
                    return;
                if (!$.isArray(new_array))
                    new_array = [new_array];
                this.clear();
                this.push.apply(this, new_array);
            },
            clear: function () {
                this.length = 0;
            },
            copy: function () {
                var a = new DateArray();
                a.replace(this);
                return a;
            }
        };
        return function () {
            var a = [];
            a.push.apply(a, arguments);
            $.extend(a, extras);
            return a;
        };
    })();
    // Picker object
    var Datepicker = function (element, options) {
        $.data(element, 'datepicker', this);
        this._events = [];
        this._secondaryEvents = [];
        this._process_options(options);
        this.dates = new DateArray();
        this.viewDate = this.o.defaultViewDate;
        this.focusDate = null;
        this.element = $(element);
        this.isInput = this.element.is('input');
        this.inputField = this.isInput ? this.element : this.element.find('input');
        this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn') : false;
        if (this.component && this.component.length === 0)
            this.component = false;
        this.isInline = !this.component && this.element.is('div');
        this.picker = $(DPGlobal.template);
        // Checking templates and inserting
        if (this._check_template(this.o.templates.leftArrow)) {
            this.picker.find('.prev').html(this.o.templates.leftArrow);
        }
        if (this._check_template(this.o.templates.rightArrow)) {
            this.picker.find('.next').html(this.o.templates.rightArrow);
        }
        this._buildEvents();
        this._attachEvents();
        if (this.isInline) {
            this.picker.addClass('datepicker-inline').appendTo(this.element);
        }
        else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }
        if (this.o.rtl) {
            this.picker.addClass('datepicker-rtl');
        }
        if (this.o.calendarWeeks) {
            this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
                .attr('colspan', function (i, val) {
                return Number(val) + 1;
            });
        }
        this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        });
        this._allow_update = false;
        this.setViewMode(this.o.startView);
        this._allow_update = true;
        this.fillDow();
        this.fillMonths();
        this.update();
        if (this.isInline) {
            this.show();
        }
    };
    Datepicker.prototype = {
        constructor: Datepicker,
        _resolveViewName: function (view) {
            $.each(DPGlobal.viewModes, function (i, viewMode) {
                if (view === i || $.inArray(view, viewMode.names) !== -1) {
                    view = i;
                    return false;
                }
            });
            return view;
        },
        _resolveDaysOfWeek: function (daysOfWeek) {
            if (!$.isArray(daysOfWeek))
                daysOfWeek = daysOfWeek.split(/[,\s]*/);
            return $.map(daysOfWeek, Number);
        },
        _check_template: function (tmp) {
            try {
                // If empty
                if (tmp === undefined || tmp === "") {
                    return false;
                }
                // If no html, everything ok
                if ((tmp.match(/[<>]/g) || []).length <= 0) {
                    return true;
                }
                // Checking if html is fine
                var jDom = $(tmp);
                return jDom.length > 0;
            }
            catch (ex) {
                return false;
            }
        },
        _process_options: function (opts) {
            // Store raw options for reference
            this._o = $.extend({}, this._o, opts);
            // Processed options
            var o = this.o = $.extend({}, this._o);
            // Check if "de-DE" style date is available, if not language should
            // fallback to 2 letter code eg "de"
            var lang = o.language;
            if (!dates[lang]) {
                lang = lang.split('-')[0];
                if (!dates[lang])
                    lang = defaults.language;
            }
            o.language = lang;
            // Retrieve view index from any aliases
            o.startView = this._resolveViewName(o.startView);
            o.minViewMode = this._resolveViewName(o.minViewMode);
            o.maxViewMode = this._resolveViewName(o.maxViewMode);
            // Check view is between min and max
            o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));
            // true, false, or Number > 0
            if (o.multidate !== true) {
                o.multidate = Number(o.multidate) || false;
                if (o.multidate !== false)
                    o.multidate = Math.max(0, o.multidate);
            }
            o.multidateSeparator = String(o.multidateSeparator);
            o.weekStart %= 7;
            o.weekEnd = (o.weekStart + 6) % 7;
            var format = DPGlobal.parseFormat(o.format);
            if (o.startDate !== -Infinity) {
                if (!!o.startDate) {
                    if (o.startDate instanceof Date)
                        o.startDate = this._local_to_utc(this._zero_time(o.startDate));
                    else
                        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
                }
                else {
                    o.startDate = -Infinity;
                }
            }
            if (o.endDate !== Infinity) {
                if (!!o.endDate) {
                    if (o.endDate instanceof Date)
                        o.endDate = this._local_to_utc(this._zero_time(o.endDate));
                    else
                        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
                }
                else {
                    o.endDate = Infinity;
                }
            }
            o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled || []);
            o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted || []);
            o.datesDisabled = o.datesDisabled || [];
            if (!$.isArray(o.datesDisabled)) {
                o.datesDisabled = o.datesDisabled.split(',');
            }
            o.datesDisabled = $.map(o.datesDisabled, function (d) {
                return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
            });
            var plc = String(o.orientation).toLowerCase().split(/\s+/g), _plc = o.orientation.toLowerCase();
            plc = $.grep(plc, function (word) {
                return /^auto|left|right|top|bottom$/.test(word);
            });
            o.orientation = { x: 'auto', y: 'auto' };
            if (!_plc || _plc === 'auto')
                ; // no action
            else if (plc.length === 1) {
                switch (plc[0]) {
                    case 'top':
                    case 'bottom':
                        o.orientation.y = plc[0];
                        break;
                    case 'left':
                    case 'right':
                        o.orientation.x = plc[0];
                        break;
                }
            }
            else {
                _plc = $.grep(plc, function (word) {
                    return /^left|right$/.test(word);
                });
                o.orientation.x = _plc[0] || 'auto';
                _plc = $.grep(plc, function (word) {
                    return /^top|bottom$/.test(word);
                });
                o.orientation.y = _plc[0] || 'auto';
            }
            if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
                o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
            }
            else if (o.defaultViewDate) {
                var year = o.defaultViewDate.year || new Date().getFullYear();
                var month = o.defaultViewDate.month || 0;
                var day = o.defaultViewDate.day || 1;
                o.defaultViewDate = UTCDate(year, month, day);
            }
            else {
                o.defaultViewDate = UTCToday();
            }
        },
        _applyEvents: function (evs) {
            for (var i = 0, el, ch, ev; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1];
                }
                else if (evs[i].length === 3) {
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.on(ev, ch);
            }
        },
        _unapplyEvents: function (evs) {
            for (var i = 0, el, ev, ch; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1];
                }
                else if (evs[i].length === 3) {
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.off(ev, ch);
            }
        },
        _buildEvents: function () {
            var events = {
                keyup: $.proxy(function (e) {
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };
            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }
            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                            click: $.proxy(this.show, this)
                        }]
                ];
            }
            else {
                this._events = [
                    [this.element, {
                            click: $.proxy(this.show, this),
                            keydown: $.proxy(this.keydown, this)
                        }]
                ];
            }
            this._events.push(
            // Component: listen for blur on element descendants
            [this.element, '*', {
                    blur: $.proxy(function (e) {
                        this._focused_from = e.target;
                    }, this)
                }], 
            // Input: listen for blur on element
            [this.element, {
                    blur: $.proxy(function (e) {
                        this._focused_from = e.target;
                    }, this)
                }]);
            if (this.o.immediateUpdates) {
                // Trigger input updates immediately on changed year/month
                this._events.push([this.element, {
                        'changeYear changeMonth': $.proxy(function (e) {
                            this.update(e.date);
                        }, this)
                    }]);
            }
            this._secondaryEvents = [
                [this.picker, {
                        click: $.proxy(this.click, this)
                    }],
                [this.picker, '.prev, .next', {
                        click: $.proxy(this.navArrowsClick, this)
                    }],
                [this.picker, '.day:not(.disabled)', {
                        click: $.proxy(this.dayCellClick, this)
                    }],
                [$(window), {
                        resize: $.proxy(this.place, this)
                    }],
                [$(document), {
                        'mousedown touchstart': $.proxy(function (e) {
                            // Clicked outside the datepicker, hide it
                            if (!(this.element.is(e.target) ||
                                this.element.find(e.target).length ||
                                this.picker.is(e.target) ||
                                this.picker.find(e.target).length ||
                                this.isInline)) {
                                this.hide();
                            }
                        }, this)
                    }]
            ];
        },
        _attachEvents: function () {
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function (event, altdate) {
            var date = altdate || this.dates.get(-1), local_date = this._utc_to_local(date);
            this.element.trigger({
                type: event,
                date: local_date,
                viewMode: this.viewMode,
                dates: $.map(this.dates, this._utc_to_local),
                format: $.proxy(function (ix, format) {
                    if (arguments.length === 0) {
                        ix = this.dates.length - 1;
                        format = this.o.format;
                    }
                    else if (typeof ix === 'string') {
                        format = ix;
                        ix = this.dates.length - 1;
                    }
                    format = format || this.o.format;
                    var date = this.dates.get(ix);
                    return DPGlobal.formatDate(date, format, this.o.language);
                }, this)
            });
        },
        show: function () {
            if (this.inputField.is(':disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
                return;
            if (!this.isInline)
                this.picker.appendTo(this.o.container);
            this.place();
            this.picker.show();
            this._attachSecondaryEvents();
            this._trigger('show');
            if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
                $(this.element).blur();
            }
            return this;
        },
        hide: function () {
            if (this.isInline || !this.picker.is(':visible'))
                return this;
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.setViewMode(this.o.startView);
            if (this.o.forceParse && this.inputField.val())
                this.setValue();
            this._trigger('hide');
            return this;
        },
        destroy: function () {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date;
            }
            return this;
        },
        paste: function (e) {
            var dateString;
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
                && $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
                dateString = e.originalEvent.clipboardData.getData('text/plain');
            }
            else if (window.clipboardData) {
                dateString = window.clipboardData.getData('Text');
            }
            else {
                return;
            }
            this.setDate(dateString);
            this.update();
            e.preventDefault();
        },
        _utc_to_local: function (utc) {
            if (!utc) {
                return utc;
            }
            var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));
            if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
                local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
            }
            return local;
        },
        _local_to_utc: function (local) {
            return local && new Date(local.getTime() - (local.getTimezoneOffset() * 60000));
        },
        _zero_time: function (local) {
            return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
        },
        _zero_utc_time: function (utc) {
            return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
        },
        getDates: function () {
            return $.map(this.dates, this._utc_to_local);
        },
        getUTCDates: function () {
            return $.map(this.dates, function (d) {
                return new Date(d);
            });
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate());
        },
        getUTCDate: function () {
            var selected_date = this.dates.get(-1);
            if (selected_date !== undefined) {
                return new Date(selected_date);
            }
            else {
                return null;
            }
        },
        clearDates: function () {
            this.inputField.val('');
            this.update();
            this._trigger('changeDate');
            if (this.o.autoclose) {
                this.hide();
            }
        },
        setDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, args);
            this._trigger('changeDate');
            this.setValue();
            return this;
        },
        setUTCDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.setDates.apply(this, $.map(args, this._utc_to_local));
            return this;
        },
        setDate: alias('setDates'),
        setUTCDate: alias('setUTCDates'),
        remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),
        setValue: function () {
            var formatted = this.getFormattedDate();
            this.inputField.val(formatted);
            return this;
        },
        getFormattedDate: function (format) {
            if (format === undefined)
                format = this.o.format;
            var lang = this.o.language;
            return $.map(this.dates, function (d) {
                return DPGlobal.formatDate(d, format, lang);
            }).join(this.o.multidateSeparator);
        },
        getStartDate: function () {
            return this.o.startDate;
        },
        setStartDate: function (startDate) {
            this._process_options({ startDate: startDate });
            this.update();
            this.updateNavArrows();
            return this;
        },
        getEndDate: function () {
            return this.o.endDate;
        },
        setEndDate: function (endDate) {
            this._process_options({ endDate: endDate });
            this.update();
            this.updateNavArrows();
            return this;
        },
        setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
            this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
            this.update();
            return this;
        },
        setDaysOfWeekHighlighted: function (daysOfWeekHighlighted) {
            this._process_options({ daysOfWeekHighlighted: daysOfWeekHighlighted });
            this.update();
            return this;
        },
        setDatesDisabled: function (datesDisabled) {
            this._process_options({ datesDisabled: datesDisabled });
            this.update();
            return this;
        },
        place: function () {
            if (this.isInline)
                return this;
            var calendarWidth = this.picker.outerWidth(), calendarHeight = this.picker.outerHeight(), visualPadding = 10, container = $(this.o.container), windowWidth = container.width(), scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(), appendOffset = container.offset();
            var parentsZindex = [0];
            this.element.parents().each(function () {
                var itemZIndex = $(this).css('z-index');
                if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0)
                    parentsZindex.push(Number(itemZIndex));
            });
            var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var left = offset.left - appendOffset.left;
            var top = offset.top - appendOffset.top;
            if (this.o.container !== 'body') {
                top += scrollTop;
            }
            this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom ' +
                'datepicker-orient-right datepicker-orient-left');
            if (this.o.orientation.x !== 'auto') {
                this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
                if (this.o.orientation.x === 'right')
                    left -= calendarWidth - width;
            }
            // auto x orientation is best-placement: if it crosses a window
            // edge, fudge it sideways
            else {
                if (offset.left < 0) {
                    // component is outside the window on the left side. Move it into visible range
                    this.picker.addClass('datepicker-orient-left');
                    left -= offset.left - visualPadding;
                }
                else if (left + calendarWidth > windowWidth) {
                    // the calendar passes the widow right edge. Align it to component right side
                    this.picker.addClass('datepicker-orient-right');
                    left += width - calendarWidth;
                }
                else {
                    if (this.o.rtl) {
                        // Default to right
                        this.picker.addClass('datepicker-orient-right');
                    }
                    else {
                        // Default to left
                        this.picker.addClass('datepicker-orient-left');
                    }
                }
            }
            // auto y orientation is best-situation: top or bottom, no fudging,
            // decision based on which shows more of the calendar
            var yorient = this.o.orientation.y, top_overflow;
            if (yorient === 'auto') {
                top_overflow = -scrollTop + top - calendarHeight;
                yorient = top_overflow < 0 ? 'bottom' : 'top';
            }
            this.picker.addClass('datepicker-orient-' + yorient);
            if (yorient === 'top')
                top -= calendarHeight + parseInt(this.picker.css('padding-top'));
            else
                top += height;
            if (this.o.rtl) {
                var right = windowWidth - (left + width);
                this.picker.css({
                    top: top,
                    right: right,
                    zIndex: zIndex
                });
            }
            else {
                this.picker.css({
                    top: top,
                    left: left,
                    zIndex: zIndex
                });
            }
            return this;
        },
        _allow_update: true,
        update: function () {
            if (!this._allow_update)
                return this;
            var oldDates = this.dates.copy(), dates = [], fromArgs = false;
            if (arguments.length) {
                $.each(arguments, $.proxy(function (i, date) {
                    if (date instanceof Date)
                        date = this._local_to_utc(date);
                    dates.push(date);
                }, this));
                fromArgs = true;
            }
            else {
                dates = this.isInput
                    ? this.element.val()
                    : this.element.data('date') || this.inputField.val();
                if (dates && this.o.multidate)
                    dates = dates.split(this.o.multidateSeparator);
                else
                    dates = [dates];
                delete this.element.data().date;
            }
            dates = $.map(dates, $.proxy(function (date) {
                return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
            }, this));
            dates = $.grep(dates, $.proxy(function (date) {
                return (!this.dateWithinRange(date) ||
                    !date);
            }, this), true);
            this.dates.replace(dates);
            if (this.o.updateViewDate) {
                if (this.dates.length)
                    this.viewDate = new Date(this.dates.get(-1));
                else if (this.viewDate < this.o.startDate)
                    this.viewDate = new Date(this.o.startDate);
                else if (this.viewDate > this.o.endDate)
                    this.viewDate = new Date(this.o.endDate);
                else
                    this.viewDate = this.o.defaultViewDate;
            }
            if (fromArgs) {
                // setting date by clicking
                this.setValue();
                this.element.change();
            }
            else if (this.dates.length) {
                // setting date by typing
                if (String(oldDates) !== String(this.dates) && fromArgs) {
                    this._trigger('changeDate');
                    this.element.change();
                }
            }
            if (!this.dates.length && oldDates.length) {
                this._trigger('clearDate');
                this.element.change();
            }
            this.fill();
            return this;
        },
        fillDow: function () {
            if (this.o.showWeekDays) {
                var dowCnt = this.o.weekStart, html = '<tr>';
                if (this.o.calendarWeeks) {
                    html += '<th class="cw">&#160;</th>';
                }
                while (dowCnt < this.o.weekStart + 7) {
                    html += '<th class="dow';
                    if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
                        html += ' disabled';
                    html += '">' + dates[this.o.language].daysMin[(dowCnt++) % 7] + '</th>';
                }
                html += '</tr>';
                this.picker.find('.datepicker-days thead').append(html);
            }
        },
        fillMonths: function () {
            var localDate = this._utc_to_local(this.viewDate);
            var html = '';
            var focused;
            for (var i = 0; i < 12; i++) {
                focused = localDate && localDate.getMonth() === i ? ' focused' : '';
                html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },
        setRange: function (range) {
            if (!range || !range.length)
                delete this.range;
            else
                this.range = $.map(range, function (d) {
                    return d.valueOf();
                });
            this.fill();
        },
        getClassNames: function (date) {
            var cls = [], year = this.viewDate.getUTCFullYear(), month = this.viewDate.getUTCMonth(), today = UTCToday();
            if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)) {
                cls.push('old');
            }
            else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)) {
                cls.push('new');
            }
            if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
                cls.push('focused');
            // Compare internal UTC date with UTC today, not local today
            if (this.o.todayHighlight && isUTCEquals(date, today)) {
                cls.push('today');
            }
            if (this.dates.contains(date) !== -1)
                cls.push('active');
            if (!this.dateWithinRange(date)) {
                cls.push('disabled');
            }
            if (this.dateIsDisabled(date)) {
                cls.push('disabled', 'disabled-date');
            }
            if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1) {
                cls.push('highlighted');
            }
            if (this.range) {
                if (date > this.range[0] && date < this.range[this.range.length - 1]) {
                    cls.push('range');
                }
                if ($.inArray(date.valueOf(), this.range) !== -1) {
                    cls.push('selected');
                }
                if (date.valueOf() === this.range[0]) {
                    cls.push('range-start');
                }
                if (date.valueOf() === this.range[this.range.length - 1]) {
                    cls.push('range-end');
                }
            }
            return cls;
        },
        _fill_yearsView: function (selector, cssClass, factor, year, startYear, endYear, beforeFn) {
            var html = '';
            var step = factor / 10;
            var view = this.picker.find(selector);
            var startVal = Math.floor(year / factor) * factor;
            var endVal = startVal + step * 9;
            var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
            var selected = $.map(this.dates, function (d) {
                return Math.floor(d.getUTCFullYear() / step) * step;
            });
            var classes, tooltip, before;
            for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
                classes = [cssClass];
                tooltip = null;
                if (currVal === startVal - step) {
                    classes.push('old');
                }
                else if (currVal === endVal + step) {
                    classes.push('new');
                }
                if ($.inArray(currVal, selected) !== -1) {
                    classes.push('active');
                }
                if (currVal < startYear || currVal > endYear) {
                    classes.push('disabled');
                }
                if (currVal === focusedVal) {
                    classes.push('focused');
                }
                if (beforeFn !== $.noop) {
                    before = beforeFn(new Date(currVal, 0, 1));
                    if (before === undefined) {
                        before = {};
                    }
                    else if (typeof before === 'boolean') {
                        before = { enabled: before };
                    }
                    else if (typeof before === 'string') {
                        before = { classes: before };
                    }
                    if (before.enabled === false) {
                        classes.push('disabled');
                    }
                    if (before.classes) {
                        classes = classes.concat(before.classes.split(/\s+/));
                    }
                    if (before.tooltip) {
                        tooltip = before.tooltip;
                    }
                }
                html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
            }
            view.find('.datepicker-switch').text(startVal + '-' + endVal);
            view.find('td').html(html);
        },
        fill: function () {
            var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth(), startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity, startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity, endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity, endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity, todaytxt = dates[this.o.language].today || dates['en'].today || '', cleartxt = dates[this.o.language].clear || dates['en'].clear || '', titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat, todayDate = UTCToday(), titleBtnVisible = (this.o.todayBtn === true || this.o.todayBtn === 'linked') && todayDate >= this.o.startDate && todayDate <= this.o.endDate && !this.weekOfDateIsDisabled(todayDate), tooltip, before;
            if (isNaN(year) || isNaN(month))
                return;
            this.picker.find('.datepicker-days .datepicker-switch')
                .text(DPGlobal.formatDate(d, titleFormat, this.o.language));
            this.picker.find('tfoot .today')
                .text(todaytxt)
                .css('display', titleBtnVisible ? 'table-cell' : 'none');
            this.picker.find('tfoot .clear')
                .text(cleartxt)
                .css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
            this.picker.find('thead .datepicker-title')
                .text(this.o.title)
                .css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month, 0), day = prevMonth.getUTCDate();
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
            var nextMonth = new Date(prevMonth);
            if (prevMonth.getUTCFullYear() < 100) {
                nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
            }
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var weekDay, clsName;
            while (prevMonth.valueOf() < nextMonth) {
                weekDay = prevMonth.getUTCDay();
                if (weekDay === this.o.weekStart) {
                    html.push('<tr>');
                    if (this.o.calendarWeeks) {
                        // ISO 8601: First week contains first thursday.
                        // ISO also states week starts on Monday, but we can be more abstract here.
                        var 
                        // Start of current week: based on weekstart/current date
                        ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5), 
                        // Thursday of this week
                        th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5), 
                        // First Thursday of year, year from thursday
                        yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5), 
                        // Calendar week: ms between thursdays, div ms per day, div 7 days
                        calWeek = (th - yth) / 864e5 / 7 + 1;
                        html.push('<td class="cw">' + calWeek + '</td>');
                    }
                }
                clsName = this.getClassNames(prevMonth);
                clsName.push('day');
                var content = prevMonth.getUTCDate();
                if (this.o.beforeShowDay !== $.noop) {
                    before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                    if (before === undefined)
                        before = {};
                    else if (typeof before === 'boolean')
                        before = { enabled: before };
                    else if (typeof before === 'string')
                        before = { classes: before };
                    if (before.enabled === false)
                        clsName.push('disabled');
                    if (before.classes)
                        clsName = clsName.concat(before.classes.split(/\s+/));
                    if (before.tooltip)
                        tooltip = before.tooltip;
                    if (before.content)
                        content = before.content;
                }
                //Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
                //Fallback to unique function for older jquery versions
                if ($.isFunction($.uniqueSort)) {
                    clsName = $.uniqueSort(clsName);
                }
                else {
                    clsName = $.unique(clsName);
                }
                html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
                tooltip = null;
                if (weekDay === this.o.weekEnd) {
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
            }
            this.picker.find('.datepicker-days tbody').html(html.join(''));
            var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
            var months = this.picker.find('.datepicker-months')
                .find('.datepicker-switch')
                .text(this.o.maxViewMode < 2 ? monthsTitle : year)
                .end()
                .find('tbody span').removeClass('active');
            $.each(this.dates, function (i, d) {
                if (d.getUTCFullYear() === year)
                    months.eq(d.getUTCMonth()).addClass('active');
            });
            if (year < startYear || year > endYear) {
                months.addClass('disabled');
            }
            if (year === startYear) {
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year === endYear) {
                months.slice(endMonth + 1).addClass('disabled');
            }
            if (this.o.beforeShowMonth !== $.noop) {
                var that = this;
                $.each(months, function (i, month) {
                    var moDate = new Date(year, i, 1);
                    var before = that.o.beforeShowMonth(moDate);
                    if (before === undefined)
                        before = {};
                    else if (typeof before === 'boolean')
                        before = { enabled: before };
                    else if (typeof before === 'string')
                        before = { classes: before };
                    if (before.enabled === false && !$(month).hasClass('disabled'))
                        $(month).addClass('disabled');
                    if (before.classes)
                        $(month).addClass(before.classes);
                    if (before.tooltip)
                        $(month).prop('title', before.tooltip);
                });
            }
            // Generating decade/years picker
            this._fill_yearsView('.datepicker-years', 'year', 10, year, startYear, endYear, this.o.beforeShowYear);
            // Generating century/decades picker
            this._fill_yearsView('.datepicker-decades', 'decade', 100, year, startYear, endYear, this.o.beforeShowDecade);
            // Generating millennium/centuries picker
            this._fill_yearsView('.datepicker-centuries', 'century', 1000, year, startYear, endYear, this.o.beforeShowCentury);
        },
        updateNavArrows: function () {
            if (!this._allow_update)
                return;
            var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth(), startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity, startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity, endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity, endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity, prevIsDisabled, nextIsDisabled, factor = 1;
            switch (this.viewMode) {
                case 4:
                    factor *= 10;
                /* falls through */
                case 3:
                    factor *= 10;
                /* falls through */
                case 2:
                    factor *= 10;
                /* falls through */
                case 1:
                    prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
                    nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
                    break;
                case 0:
                    prevIsDisabled = year <= startYear && month <= startMonth;
                    nextIsDisabled = year >= endYear && month >= endMonth;
                    break;
            }
            this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
            this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
        },
        click: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var target, dir, day, year, month;
            target = $(e.target);
            // Clicked on the switch
            if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode) {
                this.setViewMode(this.viewMode + 1);
            }
            // Clicked on today button
            if (target.hasClass('today') && !target.hasClass('day')) {
                this.setViewMode(0);
                this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
            }
            // Clicked on clear button
            if (target.hasClass('clear')) {
                this.clearDates();
            }
            if (!target.hasClass('disabled')) {
                // Clicked on a month, year, decade, century
                if (target.hasClass('month')
                    || target.hasClass('year')
                    || target.hasClass('decade')
                    || target.hasClass('century')) {
                    this.viewDate.setUTCDate(1);
                    day = 1;
                    if (this.viewMode === 1) {
                        month = target.parent().find('span').index(target);
                        year = this.viewDate.getUTCFullYear();
                        this.viewDate.setUTCMonth(month);
                    }
                    else {
                        month = 0;
                        year = Number(target.text());
                        this.viewDate.setUTCFullYear(year);
                    }
                    this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);
                    if (this.viewMode === this.o.minViewMode) {
                        this._setDate(UTCDate(year, month, day));
                    }
                    else {
                        this.setViewMode(this.viewMode - 1);
                        this.fill();
                    }
                }
            }
            if (this.picker.is(':visible') && this._focused_from) {
                this._focused_from.focus();
            }
            delete this._focused_from;
        },
        dayCellClick: function (e) {
            var $target = $(e.currentTarget);
            var timestamp = $target.data('date');
            var date = new Date(timestamp);
            if (this.o.updateViewDate) {
                if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
                    this._trigger('changeYear', this.viewDate);
                }
                if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
                    this._trigger('changeMonth', this.viewDate);
                }
            }
            this._setDate(date);
        },
        // Clicked on prev or next
        navArrowsClick: function (e) {
            var $target = $(e.currentTarget);
            var dir = $target.hasClass('prev') ? -1 : 1;
            if (this.viewMode !== 0) {
                dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
            }
            this.viewDate = this.moveMonth(this.viewDate, dir);
            this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
            this.fill();
        },
        _toggle_multidate: function (date) {
            var ix = this.dates.contains(date);
            if (!date) {
                this.dates.clear();
            }
            if (ix !== -1) {
                if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive) {
                    this.dates.remove(ix);
                }
            }
            else if (this.o.multidate === false) {
                this.dates.clear();
                this.dates.push(date);
            }
            else {
                this.dates.push(date);
            }
            if (typeof this.o.multidate === 'number')
                while (this.dates.length > this.o.multidate)
                    this.dates.remove(0);
        },
        _setDate: function (date, which) {
            if (!which || which === 'date')
                this._toggle_multidate(date && new Date(date));
            if ((!which && this.o.updateViewDate) || which === 'view')
                this.viewDate = date && new Date(date);
            this.fill();
            this.setValue();
            if (!which || which !== 'view') {
                this._trigger('changeDate');
            }
            this.inputField.trigger('change');
            if (this.o.autoclose && (!which || which === 'date')) {
                this.hide();
            }
        },
        moveDay: function (date, dir) {
            var newDate = new Date(date);
            newDate.setUTCDate(date.getUTCDate() + dir);
            return newDate;
        },
        moveWeek: function (date, dir) {
            return this.moveDay(date, dir * 7);
        },
        moveMonth: function (date, dir) {
            if (!isValidDate(date))
                return this.o.defaultViewDate;
            if (!dir)
                return date;
            var new_date = new Date(date.valueOf()), day = new_date.getUTCDate(), month = new_date.getUTCMonth(), mag = Math.abs(dir), new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag === 1) {
                test = dir === -1
                    // If going back one month, make sure month is not current month
                    // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                    ? function () {
                        return new_date.getUTCMonth() === month;
                    }
                    // If going forward one month, make sure month is as expected
                    // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                    : function () {
                        return new_date.getUTCMonth() !== new_month;
                    };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                new_month = (new_month + 12) % 12;
            }
            else {
                // For magnitudes >1, move one month at a time...
                for (var i = 0; i < mag; i++)
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function () {
                    return new_month !== new_date.getUTCMonth();
                };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()) {
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },
        moveYear: function (date, dir) {
            return this.moveMonth(date, dir * 12);
        },
        moveAvailableDate: function (date, dir, fn) {
            do {
                date = this[fn](date, dir);
                if (!this.dateWithinRange(date))
                    return false;
                fn = 'moveDay';
            } while (this.dateIsDisabled(date));
            return date;
        },
        weekOfDateIsDisabled: function (date) {
            return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
        },
        dateIsDisabled: function (date) {
            return (this.weekOfDateIsDisabled(date) ||
                $.grep(this.o.datesDisabled, function (d) {
                    return isUTCEquals(date, d);
                }).length > 0);
        },
        dateWithinRange: function (date) {
            return date >= this.o.startDate && date <= this.o.endDate;
        },
        keydown: function (e) {
            if (!this.picker.is(':visible')) {
                if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
                    this.show();
                    e.stopPropagation();
                }
                return;
            }
            var dateChanged = false, dir, newViewDate, focusDate = this.focusDate || this.viewDate;
            switch (e.keyCode) {
                case 27: // escape
                    if (this.focusDate) {
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.fill();
                    }
                    else
                        this.hide();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 37: // left
                case 38: // up
                case 39: // right
                case 40: // down
                    if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
                        break;
                    dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
                    if (this.viewMode === 0) {
                        if (e.ctrlKey) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
                            if (newViewDate)
                                this._trigger('changeYear', this.viewDate);
                        }
                        else if (e.shiftKey) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
                            if (newViewDate)
                                this._trigger('changeMonth', this.viewDate);
                        }
                        else if (e.keyCode === 37 || e.keyCode === 39) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
                        }
                        else if (!this.weekOfDateIsDisabled(focusDate)) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
                        }
                    }
                    else if (this.viewMode === 1) {
                        if (e.keyCode === 38 || e.keyCode === 40) {
                            dir = dir * 4;
                        }
                        newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
                    }
                    else if (this.viewMode === 2) {
                        if (e.keyCode === 38 || e.keyCode === 40) {
                            dir = dir * 4;
                        }
                        newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
                    }
                    if (newViewDate) {
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault();
                    }
                    break;
                case 13: // enter
                    if (!this.o.forceParse)
                        break;
                    focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
                    if (this.o.keyboardNavigation) {
                        this._toggle_multidate(focusDate);
                        dateChanged = true;
                    }
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(':visible')) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (this.o.autoclose)
                            this.hide();
                    }
                    break;
                case 9: // tab
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break;
            }
            if (dateChanged) {
                if (this.dates.length)
                    this._trigger('changeDate');
                else
                    this._trigger('clearDate');
                this.inputField.trigger('change');
            }
        },
        setViewMode: function (viewMode) {
            this.viewMode = viewMode;
            this.picker
                .children('div')
                .hide()
                .filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
                .show();
            this.updateNavArrows();
            this._trigger('changeViewMode', new Date(this.viewDate));
        }
    };
    var DateRangePicker = function (element, options) {
        $.data(element, 'datepicker', this);
        this.element = $(element);
        this.inputs = $.map(options.inputs, function (i) {
            return i.jquery ? i[0] : i;
        });
        delete options.inputs;
        this.keepEmptyValues = options.keepEmptyValues;
        delete options.keepEmptyValues;
        datepickerPlugin.call($(this.inputs), options)
            .on('changeDate', $.proxy(this.dateUpdated, this));
        this.pickers = $.map(this.inputs, function (i) {
            return $.data(i, 'datepicker');
        });
        this.updateDates();
    };
    DateRangePicker.prototype = {
        updateDates: function () {
            this.dates = $.map(this.pickers, function (i) {
                return i.getUTCDate();
            });
            this.updateRanges();
        },
        updateRanges: function () {
            var range = $.map(this.dates, function (d) {
                return d.valueOf();
            });
            $.each(this.pickers, function (i, p) {
                p.setRange(range);
            });
        },
        clearDates: function () {
            $.each(this.pickers, function (i, p) {
                p.clearDates();
            });
        },
        dateUpdated: function (e) {
            // `this.updating` is a workaround for preventing infinite recursion
            // between `changeDate` triggering and `setUTCDate` calling.  Until
            // there is a better mechanism.
            if (this.updating)
                return;
            this.updating = true;
            var dp = $.data(e.target, 'datepicker');
            if (dp === undefined) {
                return;
            }
            var new_date = dp.getUTCDate(), keep_empty_values = this.keepEmptyValues, i = $.inArray(e.target, this.inputs), j = i - 1, k = i + 1, l = this.inputs.length;
            if (i === -1)
                return;
            $.each(this.pickers, function (i, p) {
                if (!p.getUTCDate() && (p === dp || !keep_empty_values))
                    p.setUTCDate(new_date);
            });
            if (new_date < this.dates[j]) {
                // Date being moved earlier/left
                while (j >= 0 && new_date < this.dates[j]) {
                    this.pickers[j--].setUTCDate(new_date);
                }
            }
            else if (new_date > this.dates[k]) {
                // Date being moved later/right
                while (k < l && new_date > this.dates[k]) {
                    this.pickers[k++].setUTCDate(new_date);
                }
            }
            this.updateDates();
            delete this.updating;
        },
        destroy: function () {
            $.map(this.pickers, function (p) { p.destroy(); });
            $(this.inputs).off('changeDate', this.dateUpdated);
            delete this.element.data().datepicker;
        },
        remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
    };
    function opts_from_el(el, prefix) {
        // Derive options from element data-attrs
        var data = $(el).data(), out = {}, inkey, replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
        prefix = new RegExp('^' + prefix.toLowerCase());
        function re_lower(_, a) {
            return a.toLowerCase();
        }
        for (var key in data)
            if (prefix.test(key)) {
                inkey = key.replace(replace, re_lower);
                out[inkey] = data[key];
            }
        return out;
    }
    function opts_from_locale(lang) {
        // Derive options from locale plugins
        var out = {};
        // Check if "de-DE" style date is available, if not language should
        // fallback to 2 letter code eg "de"
        if (!dates[lang]) {
            lang = lang.split('-')[0];
            if (!dates[lang])
                return;
        }
        var d = dates[lang];
        $.each(locale_opts, function (i, k) {
            if (k in d)
                out[k] = d[k];
        });
        return out;
    }
    var old = $.fn.datepicker;
    var datepickerPlugin = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        var internal_return;
        this.each(function () {
            var $this = $(this), data = $this.data('datepicker'), options = typeof option === 'object' && option;
            if (!data) {
                var elopts = opts_from_el(this, 'date'), 
                // Preliminary otions
                xopts = $.extend({}, defaults, elopts, options), locopts = opts_from_locale(xopts.language), 
                // Options priority: js args, data-attrs, locales, defaults
                opts = $.extend({}, defaults, locopts, elopts, options);
                if ($this.hasClass('input-daterange') || opts.inputs) {
                    $.extend(opts, {
                        inputs: opts.inputs || $this.find('input').toArray()
                    });
                    data = new DateRangePicker(this, opts);
                }
                else {
                    data = new Datepicker(this, opts);
                }
                $this.data('datepicker', data);
            }
            if (typeof option === 'string' && typeof data[option] === 'function') {
                internal_return = data[option].apply(data, args);
            }
        });
        if (internal_return === undefined ||
            internal_return instanceof Datepicker ||
            internal_return instanceof DateRangePicker)
            return this;
        if (this.length > 1)
            throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
        else
            return internal_return;
    };
    $.fn.datepicker = datepickerPlugin;
    var defaults = $.fn.datepicker.defaults = {
        assumeNearbyYear: false,
        autoclose: false,
        beforeShowDay: $.noop,
        beforeShowMonth: $.noop,
        beforeShowYear: $.noop,
        beforeShowDecade: $.noop,
        beforeShowCentury: $.noop,
        calendarWeeks: false,
        clearBtn: false,
        toggleActive: false,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: 'mm/dd/yyyy',
        keepEmptyValues: false,
        keyboardNavigation: true,
        language: 'en',
        minViewMode: 0,
        maxViewMode: 4,
        multidate: false,
        multidateSeparator: ',',
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        updateViewDate: true,
        weekStart: 0,
        disableTouchKeyboard: false,
        enableOnReadonly: true,
        showOnFocus: true,
        zIndexOffset: 10,
        container: 'body',
        immediateUpdates: false,
        title: '',
        templates: {
            leftArrow: '&#x00AB;',
            rightArrow: '&#x00BB;'
        },
        showWeekDays: true
    };
    var locale_opts = $.fn.datepicker.locale_opts = [
        'format',
        'rtl',
        'weekStart'
    ];
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    };
    var DPGlobal = {
        viewModes: [
            {
                names: ['days', 'month'],
                clsName: 'days',
                e: 'changeMonth'
            },
            {
                names: ['months', 'year'],
                clsName: 'months',
                e: 'changeYear',
                navStep: 1
            },
            {
                names: ['years', 'decade'],
                clsName: 'years',
                e: 'changeDecade',
                navStep: 10
            },
            {
                names: ['decades', 'century'],
                clsName: 'decades',
                e: 'changeCentury',
                navStep: 100
            },
            {
                names: ['centuries', 'millennium'],
                clsName: 'centuries',
                e: 'changeMillennium',
                navStep: 1000
            }
        ],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (format) {
            if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'), parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0) {
                throw new Error("Invalid date format.");
            }
            return { separators: separators, parts: parts };
        },
        parseDate: function (date, format, language, assumeNearby) {
            if (!date)
                return undefined;
            if (date instanceof Date)
                return date;
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (format.toValue)
                return format.toValue(date, format, language);
            var fn_map = {
                d: 'moveDay',
                m: 'moveMonth',
                w: 'moveWeek',
                y: 'moveYear'
            }, dateAliases = {
                yesterday: '-1d',
                today: '+0d',
                tomorrow: '+1d'
            }, parts, part, dir, i, fn;
            if (date in dateAliases) {
                date = dateAliases[date];
            }
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)) {
                parts = date.match(/([\-+]\d+)([dmwy])/gi);
                date = new Date();
                for (i = 0; i < parts.length; i++) {
                    part = parts[i].match(/([\-+]\d+)([dmwy])/i);
                    dir = Number(part[1]);
                    fn = fn_map[part[2].toLowerCase()];
                    date = Datepicker.prototype[fn](date, dir);
                }
                return Datepicker.prototype._zero_utc_time(date);
            }
            parts = date && date.match(this.nonpunctuation) || [];
            function applyNearbyYear(year, threshold) {
                if (threshold === true)
                    threshold = 10;
                // if year is 2 digits or less, than the user most likely is trying to get a recent century
                if (year < 100) {
                    year += 2000;
                    // if the new year is more than threshold years in advance, use last century
                    if (year > ((new Date()).getFullYear() + threshold)) {
                        year -= 100;
                    }
                }
                return year;
            }
            var parsed = {}, setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'], setters_map = {
                yyyy: function (d, v) {
                    return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
                },
                m: function (d, v) {
                    if (isNaN(d))
                        return d;
                    v -= 1;
                    while (v < 0)
                        v += 12;
                    v %= 12;
                    d.setUTCMonth(v);
                    while (d.getUTCMonth() !== v)
                        d.setUTCDate(d.getUTCDate() - 1);
                    return d;
                },
                d: function (d, v) {
                    return d.setUTCDate(v);
                }
            }, val, filtered;
            setters_map['yy'] = setters_map['yyyy'];
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCToday();
            var fparts = format.parts.slice();
            // Remove noop parts
            if (parts.length !== fparts.length) {
                fparts = $(fparts).filter(function (i, p) {
                    return $.inArray(p, setters_order) !== -1;
                }).toArray();
            }
            // Process remainder
            function match_part() {
                var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
                return m.toLowerCase() === p.toLowerCase();
            }
            if (parts.length === fparts.length) {
                var cnt;
                for (i = 0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch (part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                var _date, s;
                for (i = 0; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])) {
                        _date = new Date(date);
                        setters_map[s](_date, parsed[s]);
                        if (!isNaN(_date))
                            date = _date;
                    }
                }
            }
            return date;
        },
        formatDate: function (date, format, language) {
            if (!date)
                return '';
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            date = [];
            var seps = $.extend([], format.separators);
            for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
                if (seps.length)
                    date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        headTemplate: '<thead>' +
            '<tr>' +
            '<th colspan="7" class="datepicker-title"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="prev">' + defaults.templates.leftArrow + '</th>' +
            '<th colspan="5" class="datepicker-switch"></th>' +
            '<th class="next">' + defaults.templates.rightArrow + '</th>' +
            '</tr>' +
            '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot>' +
            '<tr>' +
            '<th colspan="7" class="today"></th>' +
            '</tr>' +
            '<tr>' +
            '<th colspan="7" class="clear"></th>' +
            '</tr>' +
            '</tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">' +
        '<div class="datepicker-days">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        '<tbody></tbody>' +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-months">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-years">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-decades">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-centuries">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '</div>';
    $.fn.datepicker.DPGlobal = DPGlobal;
    /* DATEPICKER NO CONFLICT
    * =================== */
    $.fn.datepicker.noConflict = function () {
        $.fn.datepicker = old;
        return this;
    };
    /* DATEPICKER VERSION
     * =================== */
    $.fn.datepicker.version = '1.9.0';
    $.fn.datepicker.deprecated = function (msg) {
        var console = window.console;
        if (console && console.warn) {
            console.warn('DEPRECATED: ' + msg);
        }
    };
    /* DATEPICKER DATA-API
    * ================== */
    $(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
        var $this = $(this);
        if ($this.data('datepicker'))
            return;
        e.preventDefault();
        // component click requires us to explicitly show it
        datepickerPlugin.call($this, 'show');
    });
    $(function () {
        datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
    });
}));
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function () {
    // private property
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var baseReverseDic = {};
    function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for (var i = 0; i < alphabet.length; i++) {
                baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
        }
        return baseReverseDic[alphabet][character];
    }
    var LZString = {
        compressToBase64: function (input) {
            if (input == null)
                return "";
            var res = LZString._compress(input, 6, function (a) { return keyStrBase64.charAt(a); });
            switch (res.length % 4) { // To produce valid Base64
                default: // When could this happen ?
                case 0: return res;
                case 1: return res + "===";
                case 2: return res + "==";
                case 3: return res + "=";
            }
        },
        decompressFromBase64: function (input) {
            if (input == null)
                return "";
            if (input == "")
                return null;
            return LZString._decompress(input.length, 32, function (index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
        },
        compressToUTF16: function (input) {
            if (input == null)
                return "";
            return LZString._compress(input, 15, function (a) { return f(a + 32); }) + " ";
        },
        decompressFromUTF16: function (compressed) {
            if (compressed == null)
                return "";
            if (compressed == "")
                return null;
            return LZString._decompress(compressed.length, 16384, function (index) { return compressed.charCodeAt(index) - 32; });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function (uncompressed) {
            var compressed = LZString.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character
            for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
                var current_value = compressed.charCodeAt(i);
                buf[i * 2] = current_value >>> 8;
                buf[i * 2 + 1] = current_value % 256;
            }
            return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function (compressed) {
            if (compressed === null || compressed === undefined) {
                return LZString.decompress(compressed);
            }
            else {
                var buf = new Array(compressed.length / 2); // 2 bytes per character
                for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
                    buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
                }
                var result = [];
                buf.forEach(function (c) {
                    result.push(f(c));
                });
                return LZString.decompress(result.join(''));
            }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function (input) {
            if (input == null)
                return "";
            return LZString._compress(input, 6, function (a) { return keyStrUriSafe.charAt(a); });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function (input) {
            if (input == null)
                return "";
            if (input == "")
                return null;
            input = input.replace(/ /g, "+");
            return LZString._decompress(input.length, 32, function (index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
        },
        compress: function (uncompressed) {
            return LZString._compress(uncompressed, 16, function (a) { return f(a); });
        },
        _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null)
                return "";
            var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, // Compensate for the first entry which should not count
            context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
            for (ii = 0; ii < uncompressed.length; ii += 1) {
                context_c = uncompressed.charAt(ii);
                if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                    context_dictionary[context_c] = context_dictSize++;
                    context_dictionaryToCreate[context_c] = true;
                }
                context_wc = context_w + context_c;
                if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                    context_w = context_wc;
                }
                else {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for (i = 0; i < context_numBits; i++) {
                                context_data_val = (context_data_val << 1);
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                }
                                else {
                                    context_data_position++;
                                }
                            }
                            value = context_w.charCodeAt(0);
                            for (i = 0; i < 8; i++) {
                                context_data_val = (context_data_val << 1) | (value & 1);
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                }
                                else {
                                    context_data_position++;
                                }
                                value = value >> 1;
                            }
                        }
                        else {
                            value = 1;
                            for (i = 0; i < context_numBits; i++) {
                                context_data_val = (context_data_val << 1) | value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                }
                                else {
                                    context_data_position++;
                                }
                                value = 0;
                            }
                            value = context_w.charCodeAt(0);
                            for (i = 0; i < 16; i++) {
                                context_data_val = (context_data_val << 1) | (value & 1);
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                }
                                else {
                                    context_data_position++;
                                }
                                value = value >> 1;
                            }
                        }
                        context_enlargeIn--;
                        if (context_enlargeIn == 0) {
                            context_enlargeIn = Math.pow(2, context_numBits);
                            context_numBits++;
                        }
                        delete context_dictionaryToCreate[context_w];
                    }
                    else {
                        value = context_dictionary[context_w];
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = (context_data_val << 1) | (value & 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            }
                            else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    // Add wc to the dictionary.
                    context_dictionary[context_wc] = context_dictSize++;
                    context_w = String(context_c);
                }
            }
            // Output the code for w.
            if (context_w !== "") {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                    if (context_w.charCodeAt(0) < 256) {
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = (context_data_val << 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            }
                            else {
                                context_data_position++;
                            }
                        }
                        value = context_w.charCodeAt(0);
                        for (i = 0; i < 8; i++) {
                            context_data_val = (context_data_val << 1) | (value & 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            }
                            else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    }
                    else {
                        value = 1;
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = (context_data_val << 1) | value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            }
                            else {
                                context_data_position++;
                            }
                            value = 0;
                        }
                        value = context_w.charCodeAt(0);
                        for (i = 0; i < 16; i++) {
                            context_data_val = (context_data_val << 1) | (value & 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            }
                            else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    delete context_dictionaryToCreate[context_w];
                }
                else {
                    value = context_dictionary[context_w];
                    for (i = 0; i < context_numBits; i++) {
                        context_data_val = (context_data_val << 1) | (value & 1);
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        }
                        else {
                            context_data_position++;
                        }
                        value = value >> 1;
                    }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                }
            }
            // Mark the end of the stream
            value = 2;
            for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                }
                else {
                    context_data_position++;
                }
                value = value >> 1;
            }
            // Flush the last char
            while (true) {
                context_data_val = (context_data_val << 1);
                if (context_data_position == bitsPerChar - 1) {
                    context_data.push(getCharFromInt(context_data_val));
                    break;
                }
                else
                    context_data_position++;
            }
            return context_data.join('');
        },
        decompress: function (compressed) {
            if (compressed == null)
                return "";
            if (compressed == "")
                return null;
            return LZString._decompress(compressed.length, 32768, function (index) { return compressed.charCodeAt(index); });
        },
        _decompress: function (length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
            for (i = 0; i < 3; i += 1) {
                dictionary[i] = i;
            }
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch (next = bits) {
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 2:
                    return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while (true) {
                if (data.index > length) {
                    return "";
                }
                bits = 0;
                maxpower = Math.pow(2, numBits);
                power = 1;
                while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                        data.position = resetValue;
                        data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                switch (c = bits) {
                    case 0:
                        bits = 0;
                        maxpower = Math.pow(2, 8);
                        power = 1;
                        while (power != maxpower) {
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 1:
                        bits = 0;
                        maxpower = Math.pow(2, 16);
                        power = 1;
                        while (power != maxpower) {
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 2:
                        return result.join('');
                }
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                if (dictionary[c]) {
                    entry = dictionary[c];
                }
                else {
                    if (c === dictSize) {
                        entry = w + w.charAt(0);
                    }
                    else {
                        return null;
                    }
                }
                result.push(entry);
                // Add w+entry[0] to the dictionary.
                dictionary[dictSize++] = w + entry.charAt(0);
                enlargeIn--;
                w = entry;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
            }
        }
    };
    return LZString;
})();
if (typeof define === 'function' && define.amd) {
    define(function () { return LZString; });
}
else if (typeof module !== 'undefined' && module != null) {
    module.exports = LZString;
}
else if (typeof angular !== 'undefined' && angular != null) {
    angular.module('LZString', [])
        .factory('LZString', function () {
        return LZString;
    });
}

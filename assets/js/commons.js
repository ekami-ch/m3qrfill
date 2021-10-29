export const defaultQrOptions = {
    outputFormat: "JSON",
    encoding: "Base64",
    genString: "@TLTFTBRTTTMTT1T2TPTCTTWWW"
}

export const defaultFormFields = 'LFSB12P@MC';

export const standardFields = {
    'L': {
        name: "lastname",
        id: "lastname",
        type: "text",
        maxlength: 15,
        label: "Nom",
        class: "form-control",
        placeholder: "Last Name",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    'F': {
        name: "firstname",
        id: "firstname",
        type: "text",
        maxlength: 15,
        label: "Prénom",
        class: "form-control",
        placeholder: "First Name",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    'S': {
        name: "gender",
        id: "gender",
        type: "select",
        label: "Genre",
        options: {
            male: 'Homme',
            female: 'Femme'
        },
        class: "form-select",
        placeholder: "Gender",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    'B': {
        name: "birthdate",
        id: "birthdate",
        type: "date",
        label: "Date de naissance",
        class: "form-control",
        placeholder: "Birth Date",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    '1': {
        name: "address1",
        id: "address1",
        type: "text",
        maxlength: 15,
        label: "Adresse (ligne 1)",
        class: "form-control",
        placeholder: "Address 1",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    '2': {
        name: "address2",
        id: "address2",
        type: "text",
        maxlength: 15,
        label: "Adresse (ligne 2)",
        class: "form-control",
        placeholder: "Address 2 (Optional)",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    'P': {
        name: "postcode",
        id: "postcode",
        type: "text",
        maxlength: 10,
        label: "Code postal",
        class: "form-control",
        placeholder: "ZIP Code",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    '@': {
        name: "email",
        id: "email",
        type: "email",
        maxlength: 30,
        label: "Email",
        class: "form-control",
        placeholder: "Email",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    'M': {
        name: "mobile",
        id: "mobile",
        type: "number",
        maxlength: 15,
        label: "Numéro de mobile",
        class: "form-control",
        placeholder: "Cellphone number",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
    'C': {
        name: "city",
        id: "city",
        type: "text",
        maxlength: 15,
        label: "Ville",
        class: "form-control",
        placeholder: "City",
        label_classes: ["form-label"],
        div: true,
        div_classes: ["mb-3"]
    },
}
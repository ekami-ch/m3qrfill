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
        label_name: "form-label",
        class: "form-control w-100",
        placeholder: "Last Name"
    },
    'F': {
        name: "firstname",
        id: "firstname",
        type: "text",
        maxlength: 15,
        label: "Prénom",
        class: "form-control",
        placeholder: "First Name"
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
        style: "width: 100%;"
    },
    'B': {
        name: "birthdate",
        id: "birthdate",
        type: "date",
        label: "Date de naissance",
        class: "form-control",
        placeholder: "Birth Date"
    },
    '1': {
        name: "address1",
        id: "address1",
        type: "text",
        maxlength: 15,
        label: "Adresse (ligne 1)",
        class: "form-control",
        placeholder: "Address 1"
    },
    '2': {
        name: "address2",
        id: "address2",
        type: "text",
        maxlength: 15,
        label: "Adresse (ligne 2)",
        class: "form-control",
        placeholder: "Address 2 (Optional)"
    },
    'P': {
        name: "postcode",
        id: "postcode",
        type: "text",
        maxlength: 10,
        label: "Code postal",
        class: "form-control",
        placeholder: "ZIP Code"
    },
    '@': {
        name: "email",
        id: "email",
        type: "email",
        maxlength: 30,
        label: "Email",
        class: "form-control",
        placeholder: "Email"
    },
    'M': {
        name: "mobile",
        id: "mobile",
        type: "text",
        maxlength: 15,
        label: "Numéro de mobile",
        class: "form-control",
        placeholder: "Cellphone number"
    },
    'C': {
        name: "city",
        id: "city",
        type: "text",
        maxlength: 15,
        label: "Ville",
        class: "form-control",
        placeholder: "City"
    },
}
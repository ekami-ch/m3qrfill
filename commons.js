export const defaultQrOptions = {
    outputFormat: "JSON",
    encoding: "Base64",
    genString: "@TLTFTBRTTTMTT1T2TPTCTTWWW"
}

export const defaultFormFields = 'LFSB12P@MC';

export const standardFields = {
    'L': {
        name: "lastname",
        type: "text",
        maxlength: 15,
        label: "Nom"
    },
    'F': {
        name: "firstname",
        type: "text",
        maxlength: 15,
        label: "Prénom"
    },
    'S': {
        name: "sex",
        type: "select",
        label: "Genre",
        options: {
            male: 'Homme',
            female: 'Femme'
        }
    },
    'B': {
        name: "birthdate",
        type: "date",
        label: "Date de naissance"
    },
    '1': {
        name: "address1",
        type: "text",
        maxlength: 15,
        label: "Adresse (ligne 1)"
    },
    '2': {
        name: "address2",
        type: "text",
        maxlength: 15,
        label: "Adresse (ligne 2)"
    },
    'P': {
        name: "postcode",
        type: "text",
        maxlength: 10,
        label: "Code postal"
    },
    '@': {
        name: "email",
        type: "email",
        maxlength: 30,
        label: "Email"
    },
    'M': {
        name: "mobile",
        type: "text",
        maxlength: 15,
        label: "Numéro de mobile"
    },
    'C': {
        name: "city",
        type: "text",
        maxlength: 15,
        label: "Ville"
    },
}
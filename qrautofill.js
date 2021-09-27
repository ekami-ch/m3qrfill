// Global variable describing the sequence of input values and special characters (tabs, enter...) to be contained in the QR Code
// Currently unecessary as this information is also stored in the corresponding input field
var genString;

// initForm
// Set genString and update input field
function initForm() {
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "",
        // width: 128,
        // height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });


    // get parameters from URL
    let urlParams = new URLSearchParams(document.location.search.substring(1));

    // set genstring
    genString = urlParams.has('genstring') ?
        urlParams.get('genstring') :
        "LTFTSTBT1T2TPTC";

    document.getElementsByName("genstring")[0].value = genString;

}

// Return the text to be encoded in the QR Code based on the genString sequence provided in argument
function parseGenString(genString) {
    function parseGenCharacter(c) {
        // Return corresponding element's name
        function getElementFromGenCharacter(c) {
            switch (c) {
                case 'L':
                    return "lastname";
                case 'F':
                    return "firstname";
                case 'S':
                    return "sex";
                case 'B':
                    return "birthdate";
                case '1':
                    return "address1";
                case '2':
                    return "address2";
                case 'P':
                    return "postcode";
                case '@':
                    return "email";
                case 'M':
                    return "mobile";
                case 'C':
                    return "city";
                default:
                    throw `Incorrect character in genString (${c})`
            }
        }

        // Return special character, or corresponding element's value
        switch (c) {
            case 'T':
                return '\t';
            case 'R':
                return '\n';
            case 'W':
                return ' ';
            default:
                return document.getElementsByName(getElementFromGenCharacter(c))[0].value
        };
    }

    // Generate String to be encoded in the QR Code by concatenating each value corresponding to the characters in the genString sequence
    generatedString = "";

    [...genString].forEach(c => {
        generatedString += parseGenCharacter(c);
    });

    console.log(generatedString);

    return generatedString;
}


function updateQR() {
    genString = document.getElementsByName("genstring")[0].value;
    console.log(`Updating QR Code (${genString})`)

    let qrcontent = parseGenString(genString);

    qrcode.makeCode(qrcontent);
    document.getElementById("output").innerText = qrcontent;
}
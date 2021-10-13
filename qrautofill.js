// Global variables
var outputFormat, encoding, charsetChange, genString;

// initForm
// Set genString and update input field
function initForm() {
    // Get / Set QR Generator parameters
    // get parameters from URL
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    // Set Output format. Default is JSON. 
    outputFormat = urlParams.has('outputformat') ?
        urlParams.get('outputformat') : "JSON"; // JSON, String

    // Encoding. Default is Base64
    encoding = urlParams.has('encoding') ?
        urlParams.get('encoding') : "Base64"; // Base64, Raw

    // Charset change. Default is none
    charsetChange = urlParams.has('charsetchange') ?
        urlParams.get('charsetchange') : "None"; // None, CP850_to_ISO8859_1, ISO8859_1_TO_CP850

    // Set genstring variable. Default matches m3-test mobile unit form. Only for String Output
    genString = urlParams.has('genstring') ?
        urlParams.get('genstring') : "@TLTFTBRTTTMTT1T2TPTCTTWWW";

    document.getElementsByName("genstring")[0].value = genString;

    initQRCode();
}

// Update global variables with form content
function updateGlobalVariables() {
    // Update relevant global variables
    genString = document.getElementsByName("genstring")[0].value;
    console.log(genString);
}

// Return the text to be encoded in the QR Code based on the genString sequence provided in argument
function parseGenString(genString) {

    // Return the value corresponding to a specific Character in the genString
    function parseGenCharacter(c) {
        // If no special character is to be returned, eturn corresponding element's name
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
                return '\r';
            case 'W':
                return ' ';
            case 'N':
                return '\n';
            default:
                return document.getElementsByName(getElementFromGenCharacter(c))[0].value
        };
    }

    // Generate String to be encoded in the QR Code by concatenating each value corresponding to the characters in the genString sequence
    generatedString = "";

    [...genString].forEach(c => {
        generatedString += parseGenCharacter(c);
    });

    console.log(generatedString)

    return generatedString;

}

function changeCharset(input, charsetFromTo) {
    var conversionTables = {};

    conversionTables.CP850_to_ISO8859_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
        33, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
        96, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 123, 124, 125, 126, 199,
        220, 201, 194, 196, 192, 197, 199, 202, 203, 200, 207, 206, 204, 196, 197, 201, 198, 198, 212, 214, 210, 219, 217, 255, 214, 220,
        216, 163, 216, 215, 159, 193, 205, 211, 218, 209, 209, 170, 186, 191, 174, 172, 189, 188, 161, 171, 187, 176, 177, 178, 179, 180,
        193, 194, 192, 169, 185, 186, 187, 188, 162, 165, 191, 192, 193, 194, 195, 196, 197, 195, 195, 200, 201, 202, 203, 204, 205, 206,
        164, 208, 208, 202, 203, 200, 213, 205, 206, 207, 217, 218, 219, 220, 166, 204, 223, 211, 223, 212, 210, 213, 213, 181, 222, 222,
        218, 219, 217, 221, 221, 175, 180, 173, 177, 242, 190, 182, 167, 247, 184, 176, 168, 183, 185, 179, 178, 254, 255
    ];

    conversionTables.ISO8859_1_TO_CP850 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 32, 64, 65,
        66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 65, 66, 67,
        68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 123, 124, 125, 126, 127, 128, 129, 130, 131,
        132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
        159, 255, 173, 189, 156, 207, 190, 221, 245, 249, 184, 166, 174, 170, 240, 169, 238, 248, 241, 253, 252, 239, 230, 244, 250, 247, 251,
        167, 175, 172, 171, 243, 168, 133, 160, 131, 198, 132, 134, 145, 128, 138, 130, 136, 137, 141, 161, 140, 139, 208, 164, 149, 162, 147,
        228, 148, 158, 155, 151, 163, 150, 129, 236, 231, 225, 133, 160, 131, 198, 132, 134, 145, 128, 138, 130, 136, 137, 141, 161, 140, 139,
        208, 164, 149, 162, 147, 228, 148, 246, 155, 151, 163, 150, 129, 236, 231, 152
    ];

    let output = new String;

    // None: do nothing
    if (charsetFromTo === "None") return input;

    // Other values: check that an array exists with such name, and if it does, assign its content to conversionTable
    if (typeof conversionTables[charsetFromTo] === "undefined") {
        throw "Invalid charsetFromTo (" + charsetFromTo + "})";
    }

    let conversionTable = eval(charsetFromTo);

    // Change Charset based on conversionTable
    for (let c of input) {
        output += String.fromCharCode(conversionTable[c.charCodeAt()])
    }

    console.log(`New charset applied ${charsetFromTo}. Result: `, output);

    return output;

}


// This function will generate the string that will be saved in the QR Code.
// It is agnostic of the selected QR Code Generator library.
function generateQRContent( genString, charsetChange, outputFormat, encoding) {
    let qrContent = new String;

    // 1. Generate content in raw format
    qrContent = parseGenString(genString);

    // 2. Charset change
    //qrContent = changeCharset(qrContent, charsetChange);

    // 3. Encoding
    qrContent = changeEncoding(qrContent, encoding)

    // Return
    return qrContent;
}

// Test

function changeEncoding(qrContent, encoding)
{
    let encodedString = btoa(qrContent)
    return encodedString
}


// Initialise QR Code in HTML document
function initQRCode() {
    // qrcodejs Library
    const qrcodejsOptions = {
        text: "",
        // width: 128,
        // height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    };

    // QR Code Styling Library
    const qroptions = {
        width: 300,
        height: 300,
        type: "svg",
        data: "https://www.m-3.com/",
        mode: "Byte", //string ('Numeric' 'Alphanumeric' 'Byte' 'Kanji')
        //image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        dotsOptions: {
            color: "#000000",
            type: "square" //'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'
        },
        backgroundOptions: {
            color: "#ffffff",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 10
        }
    };

    // QRCodejs
    qrcode = new QRCode(document.getElementById("qrcode"), qrcodejsOptions);

    // QR Code Styling
    QRCodeStyling = new QRCodeStyling(qroptions);
    QRCodeStyling.append(document.getElementById("qrcodestyling"));
    // QRCodeStyling.download({ name: "qr", extension: "svg" });

}

// This function will render / update the QR Code on the HTML Document
// Contains code specific to the selected QR Code Generator Library.
function updateQR() {
    console.log(`Updating QR Code`);

    updateGlobalVariables();

    generateQRContent( genString, charsetChange, outputFormat, encoding);

    let qrcontent = parseGenString(genString);

    qrcode.makeCode(qrcontent);
    qroptions.data = qrcontent;
    QRCodeStyling.update(qroptions);
    document.getElementById("output").innerText = qrcontent;

}
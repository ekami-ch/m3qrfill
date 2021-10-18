// Global variables
var outputFormat, encoding, charsetChange, genString;
var easyQRCode;

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
function generateStringOuput(genString) {

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

function generateJsonOutput() {
    let payload = {};

    // Go through each form
    Array.from(document.forms).forEach((form, formIndex) => {

        payload[form.name] = {};

        function appendFormElement(element, elementIndex) {
            if (element.type == 'fieldset')
                return;

            payload[form.name][element.name] = element.value;

            console.log(form.name, element.name, element);
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

    console.log(outputObject);

    let jsonOutput = JSON.stringify(outputObject)

    console.log(jsonOutput);

    return jsonOutput;
}

// This function will generate the string that will be saved in the QR Code.
// It is agnostic of the selected QR Code Generator library.
function generateQRContent(genString, charsetFromTo, outputFormat, encoding) {
    let qrContent = new String;

    // 1. Generate content in raw format
    switch (outputFormat) {
        case "String":
            qrContent = generateStringOuput(genString);
            break;

        case "JSON":
        case "":
            qrContent = generateJsonOutput();
            break;

        default:
            throw `Unknown Output Format (${outputFormat})`
    }

    // 2. Charset change
    if ((charsetChange != "None") && (charsetChange != ""))
        qrContent = changeCharset(qrContent, charsetFromTo);

    // 3. Encoding
    if (encoding != "Raw")
        qrContent = changeEncoding(qrContent, encoding)

    // Return
    console.log(`Generated qrContent`, qrContent)
    return qrContent;
}

// Test

function changeEncoding(qrContent, encoding) {
    let encodedString;

    switch (encoding) {
        case "Base64":
            encodedString = btoa(qrContent);
            break;
        default:
            throw `Unknown Encoding (${encoding})`;
    }

    return encodedString
}


// Initialise QR Code in HTML document
function initQRCode() {

    let easyQRCodeOptions = {
        // ====== Basic
        text: "https://github.com/ushelp/EasyQRCodeJS",
        width: 512,
        height: 512,
        colorDark: "#000000",
        colorLight: "#fffcf0",
        correctLevel: QRCode.CorrectLevel.M, // L, M, Q, H
        dotScale: 0.6, // For body block, must be greater than 0, less than or equal to 1. default is 1
        quietZone: 10,
        quietZoneColor: "rgba(0,0,0,0)",
        backgroundImage: 'assets/m3-logo-transparent-square.png', // Background Image
        backgroundImageAlpha: 0.2, // Background image transparency, value between 0 and 1. default is 1. 
        autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color
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

    easyQRCode = new QRCode(document.getElementById("easyqrcode"), easyQRCodeOptions);
}

// This function will render / update the QR Code on the HTML Document
// Contains code specific to the selected QR Code Generator Library.
function updateQR() {
    console.log(`Updating QR Code`);

    updateGlobalVariables();

    let qrcontent = generateQRContent(genString, charsetChange, outputFormat, encoding);

    easyQRCode.makeCode(qrcontent);
    document.getElementById("output").innerText = qrcontent;
}
//import { defaultQrOptions, standardFields } from './commons.js';

export { generateQRContent, initQRCode, updateQRCode, setQrOptionsFromURL, changeDisplayFromPlatform };


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
function changeDisplayFromPlatform() {
    let qrcodediv = document.querySelector("#qrcode-div");
    let printButton = document.querySelector("#print-button");
    if(platform == "mobile") {
        qrcodediv.style.display = "block";
        printButton.style.display = "none";
    }
    else {
        qrcodediv.id = "qrcode-div-print";
    }
}
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
                return document.getElementsByName(getElementNameFromCharacter(c))[0].value
        };
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

    let jsonOutput = JSON.stringify(outputObject)

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
            throw `Unknown Output Format (${outputFormat})`
    }

    // 2. Encoding
    if (encoding != "Raw")
        qrContent = changeEncoding(qrContent, encoding)

    // Return
    // console.log(`Generated qrContent`, qrContent)
    return qrContent;
}

// Test

function changeEncoding(qrContent, encoding) {
    let encodedString;

    switch (encoding) {
        case "Base64":
            encodedString = btoa(qrContent);
            break;
        case "lz7":
            encodedString = LZString.compressToBase64(qrContent).replace(/\+/g, "-").replace(/\//g, "_");;
            break;
        default:
            throw `Unknown Encoding (${encoding})`;
    }

    return encodedString
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
        correctLevel: QRCode.CorrectLevel.L, // L, M, Q, H
        dotScale: 0.8, // For body block, must be greater than 0, less than or equal to 1. default is 1
        quietZone: 1,
        quietZoneColor: "rgba(0,0,0,0)",
        logo: 'assets/img/m3-logo-transparent-square.png', // Background Image
        logoBackgroundTransparent: true,
        autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, 1)", // Automatic color: dark CSS color
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
    if (qrValueOutputId) qrValueOutput = document.getElementById(qrValueOutputId);
}

// This function will render / update the QR Code on the HTML Document
// Contains code specific to the selected QR Code Generator Library.
function updateQRCode() {
    // console.log(`Updating QR Code`);

    // Generate QR Code from document DOM
    let qrcontent = generateQRContent(outputFormat, encoding);
    qrCode.makeCode(qrcontent);

    if (qrValueOutput) qrValueOutput.innerText = qrcontent;
}
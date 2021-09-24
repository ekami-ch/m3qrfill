function parseGenString(genString) {
    function parseGenCharacter(c) {
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
                case 'C':
                    return "city";
                default:
                    throw `Incorrect character in genString (${c})`
            }
        }
        switch (c) {
            case 'T':
                return '\t';
            case 'E':
                return "\n";
            default:
                return document.getElementsByName(getElementFromGenCharacter(c))[0].value
        };
    }

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

    output = parseGenString(genString);

    qrcode.makeCode(output);
    document.getElementById("output").innerText = output;
}
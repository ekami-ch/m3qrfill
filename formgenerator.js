import { defaultFormFields, standardFields } from './commons.js';

export { generateForm };


function generateForm(formID, strFormFields = defaultFormFields, formFields = standardFields) {
    let form = document.getElementById(formID);

    console.log(strFormFields);

    // Used to set autofocus on first field
    let firstField = true;

    for (const c of strFormFields) {
        if (!formFields.hasOwnProperty(c)) throw `Unknown form key (${c})`;

        let fieldAttributes = formFields[c];

        console.log("fieldAttributes", fieldAttributes);
        var newDiv = document.createElement("div");
        newDiv.classList.add("mb-3");
        form.appendChild(newDiv);
        // Create the new element, and handle the special case of Select
        if (fieldAttributes["type"] == "select") {
            var newField = document.createElement("select");

            // Create "option" children
            Object.entries(fieldAttributes["options"]).forEach(([optionName, optionText]) => {
                let newOption = document.createElement("option");
                newOption.value = optionName;
                newOption.innerHTML = optionText;
                newField.appendChild(newOption);
            });

            delete fieldAttributes.options;
        } else 
            var newField = document.createElement("input");

        // Create 
        switch (fieldAttributes["type"]) {
            case "select":
            case "text":
            case "email":
            case "date":
                if (fieldAttributes.hasOwnProperty("label")) {
                    
                    let newLabel = document.createElement("label");
                    newLabel.setAttribute("for", fieldAttributes.name);
                    newLabel.classList.add("form-label")
                    newLabel.innerText = fieldAttributes.label;               
                    newDiv.appendChild(newLabel);

                    delete fieldAttributes.label;
                }
                // Add all attributes to the input tag
                Object.entries(fieldAttributes).forEach(([attribute, value]) => {
                    newField.setAttribute(attribute, value);
                });
                break;

            default:
                throw `Unable to handle field type ${fieldAttributes["type"]}`;
        }

        if (firstField) {
            newField.autofocus = true;
            firstField = false;
        }

        newDiv.appendChild(newField);
    }
}
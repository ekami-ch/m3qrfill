import { defaultFormFields, standardFields } from './commons.js';
import { generateElement } from '../../../web-basics-helper-kit/js/web-basics/javascript-simplifier.js';
export { generateForm };

function generateForm(formID, strFormFields = defaultFormFields, formFields = standardFields) {
    let form = document.getElementById(formID);

    // console.log(strFormFields);

    // Used to set autofocus on first field
    let firstField = true;

    for (const c of strFormFields) {
        if (!formFields.hasOwnProperty(c)) throw `Unknown form key (${c})`;

        let fieldAttributes = formFields[c];

        // console.log("fieldAttributes", fieldAttributes);
        if (fieldAttributes.div == true) {
            var newDiv = generateElement("div",null,null,null,form, fieldAttributes.div_classes);
        }
        else
            var newDiv = generateElement("div",null,null,null,form);

        // Create the new element, and handle the special case of Select
        if (fieldAttributes["type"] == "select") {
            var newField = generateElement("select");

            // Create "option" children
            Object.entries(fieldAttributes["options"]).forEach(([optionName, optionText]) => {
                let newOption = generateElement("option", null, optionText, { "value": optionName},newField);
            });

            delete fieldAttributes.options;
        } else 
            var newField = generateElement("input");

        // Create 
        switch (fieldAttributes["type"]) {
            case "select":
            case "text":
            case "email":
            case "number":
            case "date":
                if (fieldAttributes.hasOwnProperty("label")) {
                    let newLabel = generateElement(
                        "label",                        // tag 
                        null,                           // id
                        fieldAttributes.label,          // value
                        { "for": fieldAttributes.name },// attributes {}
                        newDiv,                         // parent element
                        fieldAttributes.label_classes   // classes []
                    )
                    delete fieldAttributes.label;
                }
                // Add all attributes to the input tag
                Object.entries(fieldAttributes).forEach(([attribute, value]) => {
                    if(attribute != "label_classes" && attribute != "div" && attribute != "div_classes")
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


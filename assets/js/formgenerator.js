//import { defaultFormFields, standardFields, standardLists } from './commons.js';
import { generateElement } from '../../web-basics-helper-kit/js/web-basics/javascript-simplifier.js';
export { generateForm };

function generateForm(formID, strFormFields = defaultFormFields, formFields = standardFields, dataLists = standardLists) {
    let form = document.getElementById(formID);


    ////////////////////// FORM FIELDS ///////////////////////
    // console.log(strFormFields);
    // Used to set autofocus on first field
    let firstField = true;

    for (const c of strFormFields) {
        if (!formFields.hasOwnProperty(c)) throw `Unknown form key (${c})`;

        let fieldAttributes = formFields[c];

        ///////////////// Create div
        // console.log("fieldAttributes", fieldAttributes);
        if (fieldAttributes.div == true) {
            var newDiv = generateElement("div",null,null,null,form, fieldAttributes.div_classes);
        }
        else
            var newDiv = generateElement("div",null,null,null,form);

        ///////////////// Create new element
        // handle the special case of Select
        if (fieldAttributes["type"] == "select") {
            var newField = generateElement("select");

            // Create "option" children

            // the Options attribute can contain a string referencing a dataList, or a list directly.
            if (typeof(fieldAttributes["options"]) == "string")
                var options = dataLists[fieldAttributes["options"]]
            else
                var options = fieldAttributes["options"]

            Object.entries(options).forEach(([optionName, optionText]) => {
                generateElement("option", null, optionText, { "value": optionName, "data-tokens": optionText},newField);
            });

            delete fieldAttributes.options;
        } else 
            var newField = generateElement("input");


        if (firstField) {
            newField.autofocus = true;
            firstField = false;
        }

        var newLabel = null;

        ///////////////// Set attributes
        switch (fieldAttributes["type"]) {
            case "select":
            case "text":
            case "email":
            case "number":
            case "tel":
            case "submit":
            case "button":
            case "":
            case "date":
                if (fieldAttributes.hasOwnProperty("label")) {
                    newLabel = generateElement(
                        "label",                        // tag 
                        null,                           // id
                        fieldAttributes.label,          // value
                        { "for": fieldAttributes.name },// attributes {}
                        null,                           // parent element
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
                throw `Label: Unable to handle field type ${fieldAttributes["type"]}`;
        }
        dateSelector( '.form-date');
        newDiv.appendChild(newField);
        if (newLabel) newDiv.appendChild(newLabel);
    }

    ////////////////////// DATA LISTS ///////////////////////

    if (dataLists) {
        Object.entries(dataLists).forEach(([listName, listContent]) => {
            var listElement = generateElement("datalist", listName);

            Object.entries(listContent).forEach(([elementName, elementValue]) => {
                generateElement("option", null, elementValue, { value: elementName }, listElement );
            });

            document.body.appendChild(listElement)
        });
    }
}




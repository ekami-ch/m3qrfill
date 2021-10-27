export {generateElement}

// General function to create any html element (basically replace the document.createElement())
// Tag, id, value (often text), attributes object {attribute: value}, parent object, class array
function generateElement(tag, objectid=null, value=null, attributes=null, objectparent=null , objectclass=null) {
    var createdElement = document.createElement(tag);

    if (objectid != null) {
        createdElement.id = objectid;
    }
    if (objectclass != null) {
        objectclass.forEach((item) => {
            createdElement.classList.add(item);
        });
    }    
    if (objectparent != null ) {
        objectparent.appendChild(createdElement);
    }
    if (value != null) {
        var insideText = document.createTextNode(value);
        createdElement.appendChild(insideText);
    }
    if (attributes != null) {
        Object.entries(attributes).forEach(([attribute_type, attribute_value]) => {
            createdElement.setAttribute(attribute_type, attribute_value);
        });
    }
    return createdElement;
}


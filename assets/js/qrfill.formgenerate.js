import {generateQRContent, initQRCode, updateQRCode, setQrOptionsFromURL, changeDisplayFromPlatform} from './qrautofill.js';
import {generateForm} from './formgenerator.js';

document.addEventListener('DOMContentLoaded', function() {
    // get parameters from URL
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    generateForm('form');
    setQrOptionsFromURL();
    initQRCode('qrcode', 'qroutputvalue');
    changeDisplayFromPlatform();
    document.getElementById('form').addEventListener('change', updateQRCode);
    document.getElementById('form').addEventListener('keyup', updateQRCode);    
    var form = document.querySelector('form')
        
    document.getElementById('print-button').onclick = function() { 
        updateQRCode; window.print();
        // if(form.checkValidity())
        // {
            
        // }
        // else
        // {
        //     alert("You must fill all required informations correctly! (Except adresse ligne 2) \nVous Devez remplir toutes les informations correctement (Sauf adresse ligne 2)");
        // }
    }
    window.onafterprint = function() {window.location.reload()}
});
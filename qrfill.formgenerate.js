import {generateQRContent, initQRCode, updateQRCode, setQrOptionsFromURL} from './qrautofill.js';
import {generateForm} from './formgenerator.js';

document.addEventListener('DOMContentLoaded', function() {
    // get parameters from URL
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    generateForm('form');
    setQrOptionsFromURL();
    initQRCode('qrcode', 'qroutputvalue');
    document.getElementById('form').addEventListener('keydown', updateQRCode); 

});
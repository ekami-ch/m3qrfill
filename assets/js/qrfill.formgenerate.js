import {generateQRContent, initQRCode, updateQRCode, setQrOptionsFromURL, changeDisplayFromPlatform} from './qrautofill.js';
import {generateForm} from './formgenerator.js';
import {touchstartEvent, touchendEvent, incrementPrintNumber, download_csv_file} from './konamiStatPrint.js';

document.addEventListener('DOMContentLoaded', function() {
    // get parameters from URL
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    generateForm('form');
    setQrOptionsFromURL();
    initQRCode('qrcode', 'qroutputvalue');
    changeDisplayFromPlatform();

    var body = document.querySelector('body');
    var form = document.querySelector('form');
    var printBtn = document.getElementById('print-button');
    var dlCsvBtn = document.getElementById('dl-csv-button');
    var closeConfigBtn = document.getElementById('close-config-button');
    var configPopup = document.getElementById('configPopup');

    form.addEventListener('change', updateQRCode);
    form.addEventListener('keyup', updateQRCode);    

    printBtn.onclick = function() { 
        updateQRCode;
        setTimeout(
            function(){ 
                window.print();
                incrementPrintNumber(); 
            }, 1000);
        
    }

    window.onafterprint = function() {
        window.location.reload()
    }

    dlCsvBtn.onclick = download_csv_file;

    body.addEventListener('touchstart', touchstartEvent, false);
    body.addEventListener('touchend', touchendEvent, false);
    
});
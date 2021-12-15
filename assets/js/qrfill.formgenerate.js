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
    //reload the page after clicking print button
    window.onafterprint = function() {
        window.location.reload()
    }

    dlCsvBtn.onclick = download_csv_file; // download the CSV file

    body.addEventListener('touchstart', touchstartEvent, false); //those 2 functions are used to detect
    body.addEventListener('touchend', touchendEvent, false);//the swipes and moves on screen to use the konami code
    
});//EOF
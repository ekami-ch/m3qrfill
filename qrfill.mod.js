import { initQRCode, updateQRCode, setQrOptionsFromURL } from "./qrautofill.js";
      document.getElementsByName('qrForm')[0].addEventListener('keydown', updateQRCode); 
      setQrOptionsFromURL(); 
      initQRCode('qrcode'); 
      updateQRCode();
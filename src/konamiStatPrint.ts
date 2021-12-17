// the 'official' Konami Code sequence
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
var konamiCodeHistory = ['', '', '', '', '', '', '', ''];
var configPopup = document.getElementById('configPopup');
var modal = new bootstrap.Modal(document.querySelector(".modal"), {})

//variables used for the initial touch point 
var clientX, clientY;

export function touchstartEvent(e) {
    // Cache the client X/Y coordinates
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
}

export function touchendEvent(e) {
    var deltaX, deltaY;
    
    // Compute the change in X and Y coordinates.
    // The first touch point in the changedTouches
    // list is the touch point that was just removed from the surface.
    deltaX = e.changedTouches[0].clientX - clientX;
    deltaY = e.changedTouches[0].clientY - clientY;
    let key;
        //calculate wich move was done with the difference between touch point and end point
        if (Math.abs(deltaX) > Math.abs(deltaY))
            key = (deltaX > 0) ? "ArrowRight" : "ArrowLeft";
        else
            key = (deltaY > 0) ? "ArrowDown" : "ArrowUp";
    //}
    detectKonamiCode(key)    
}

// add keydown event listener
document.addEventListener('keydown', function (e) {
    detectKonamiCode(e.key);
});
//function that add the last event at the end of the pile, then checks if the konami code is done or not
function detectKonamiCode(key){
    console.log("key",key)
    
    //    if (konamiCode.indexOf(key) >= 0) {
    konamiCodeHistory.push(key)
    konamiCodeHistory.shift();
    console.log("konamiCodeHistory",konamiCodeHistory)
    
    if (JSON.stringify(konamiCode) == JSON.stringify(konamiCodeHistory)) {
        modal.show()
        TextInPopup()
    }
    //    }
} 


//key's name of the local storage used by csv print infos
const LOCALSTORAGEKEY_PRINTSTATS = "PrintStats"

//this function is used to increment the number of print done with the device
export function incrementPrintNumber() {
    //get the infos about printing in the local storage
    var PrintStats = window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS)
    PrintStats = (PrintStats == null) ? {} : JSON.parse(PrintStats)
    
    //console.log(PrintStats)
    
    const DATE = new Date()
    //this one gets today's date, and the actual hour
    var printTimeStamp = (new Date(DATE.getFullYear(), DATE.getMonth(), DATE.getDate(), DATE.getHours(), 0, 0))
    .toISOString();
    //if the timestamp already exists, increase the number of printing by 1
    if (printTimeStamp in PrintStats)
    PrintStats[printTimeStamp] += 1
    else //create a new line with the new timestamp and set it to 1
    PrintStats[printTimeStamp] = 1
    //store the new datas about prints
    window.localStorage.setItem(LOCALSTORAGEKEY_PRINTSTATS, JSON.stringify(PrintStats))
    //console.log("getItem", window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS))
}


export function download_csv_file() {
    var PrintStats = window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS)
    PrintStats = (PrintStats == null) ? {} : JSON.parse(PrintStats)
    //define the heading for each row of the data  
    var csv = 'Date impression,Nombre\n';
    
    //loop in every data about prints stocked in local storage  
    Object.entries(PrintStats).forEach((row) => {
        csv += row + "\n";
    });
    //create a hidden element that will be used to download the csv
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    
    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = 'Print Number and date.csv';
    hiddenElement.click();
}

//displays the number of impressions in the modal, so it'll be up to date ach time the modal appears
export function TextInPopup(){
        var PrintStats = window.localStorage.getItem(LOCALSTORAGEKEY_PRINTSTATS)
        PrintStats = (PrintStats == null) ? {} : JSON.parse(PrintStats)
        let number=0;
        Object.entries(PrintStats).forEach((row) => {
             number=number + row[1];
        });
        //console.log(number)
        configPopup.innerText="Nombre total d'impressions aujourd'hui :"+" "+number;
}
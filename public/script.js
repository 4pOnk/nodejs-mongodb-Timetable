let timerDiv = document.getElementsByClassName('timer')[0];
let TTval = document.getElementById('timeTableInp').value;
let nowLes = document.getElementById('nowLes');
let lessonsAnStr = document.getElementById('lessonsInp').innerHTML;

let lessonsEnd = false;

let timeTable = TTval.split(',');
let lessonsAn = lessonsAnStr.split(',');


let now = new Date();
let seconds = 0;
let minuts = 5;
let hours = 8;

let timerSec = '0';
let timerMin = '0';
let timerH = '00';


let getTime = () => {
    //now = new Date();
    //seconds = now.getSeconds();
    //minuts = now.getMinutes();
    //hours = now.getHours();
     seconds++;
     if (seconds == 60 && minuts == 59) {
         hours++
         minuts = 0;
         seconds = 0;
     } else if (seconds == 60) {
         seconds = 0;
         minuts++
     }
};


let showTimer = () => {
    if(lessonsEnd){
        timerDiv.innerHTML = '00 : 00 : 00'
    }else if(timerSec<10&&timerMin<10){
     timerDiv.innerHTML = timerH + " : 0" + timerMin + ' : 0' + timerSec; 
    }else if(timerMin<10&&timerSec>9){
        timerDiv.innerHTML = timerH + " : 0" + timerMin + ' : ' + timerSec; 
    }else if(timerSec<10&&timerMin>9){
        timerDiv.innerHTML = timerH + " : " + timerMin + ' : 0' + timerSec; 
    }else{
        timerDiv.innerHTML = timerH + " : " + timerMin + ' : ' + timerSec; 
    }
    }
    showTimer()

setInterval(() => {
    getTime();
    showTimer();
    if(hours>=parseInt(timeTable[timeTable.length-2])&&minuts>parseInt(timeTable[timeTable.length-1])){
        lessonsEnd = true;
    }
}, 1000)

function lesChek(h1, m1, h2, m2,les) {

    setInterval(() => {
        timerSec = 60 - seconds - 1;

        if (h2 > h1) {
            if ((hours == h1 && minuts >= m1) || (hours == h2 && minuts <= m2)) {
                if (hours == h1 && minuts >= m1 && minuts <= 60) {
                    timerMin = 40 + (m1 - minuts) - 1;
                    nowLes.innerHTML = les;
                } else {
                    timerMin = m2 - minuts - 1;
                    nowLes.innerHTML = les;
                }
            }
        }
        else if (h2 == h1) {
            if (h1 <= hours && h2 >= hours && m1 <= minuts && m2 > minuts) {
                timerMin = m2 - minuts - 1;
                nowLes.innerHTML = les;
            }
        }
    }, 1000)
}


for (let i = 0; i < timeTable.length - 2; i += 2) {
    lesChek(parseInt(timeTable[i]),
            parseInt(timeTable[i + 1]),
            parseInt(timeTable[i + 2]), 
            parseInt(timeTable[i + 3]),
            lessonsAn[i/2]
    )
}


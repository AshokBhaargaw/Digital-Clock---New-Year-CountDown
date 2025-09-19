// for clock
let hour = document.getElementById("time").children[0];
let minute = document.getElementById("time").children[1];
let second = document.getElementById("time").children[2];
let ampm = document.getElementById("time").children[3];

// for new year counter 
let newYearDay = document.getElementById("newYear").children[0];
let newYearHour = document.getElementById("newYear").children[1];
let newYearMinutes = document.getElementById("newYear").children[2];
let newYearSeconds = document.getElementById("newYear").children[3];

setInterval(() => {
    // for clock
    let time = new Date();
    hour.innerText = ((time.getHours() % 12) || 12).toString().padStart(2, '0');
    minute.innerText = (time.getMinutes()).toString().padStart(2, '0');
    second.innerText = (time.getSeconds()).toString().padStart(2, '0');
    ampm.innerText = time.getHours() >= 12 ? "PM" : "AM";

    // for new year counter 
    let newYear = new Date(`January 01 ${time.getFullYear() + 1} 00:00:00`);
    let diff = newYear - time;
    newYearDay.innerText = Math.floor(diff / 1000 / 60 / 60 / 24);
    newYearHour.innerText = Math.floor(diff / 1000 / 60 / 60) % 24;
    newYearMinutes.innerText = Math.floor(diff / 1000 / 60) % 60;
    newYearSeconds.innerText = Math.floor(diff / 1000) % 60;
}, 1000);




// for stop watch
let playPauseBtn = document.querySelector(".btn.btn-success");
let resetBtn = document.querySelector(".btn.btn-danger");
let swMiliSec = document.querySelectorAll(".stopWatch div b")[3];
let swSecond = document.querySelectorAll(".stopWatch div b")[2];
let swMinute = document.querySelectorAll(".stopWatch div b")[1];
let swHours = document.querySelectorAll(".stopWatch div b")[0];
let playTimer = false;
let count = 0;
let swCounter = null;

let startTimer = (bool) => {
    if (bool) {
        swCounter = setInterval(() => {
            swMiliSec.innerText++;
            swMiliSec.innerText = swMiliSec.innerText.padStart(2, 0);
            if (swMiliSec.innerText == 100) {
                swSecond.innerText++;
                swSecond.innerText = swSecond.innerText.padStart(2, 0);
                swMiliSec.innerText = "00";
                if (swSecond.innerText == "59") {
                    swMinute.innerHTML++;
                    swMinute.innerText = swMinute.innerText.padStart(2, 0);
                    swSecond.innerText = "00"
                    if (swMinute.innerText == "59") {
                        swHours.innerText++;
                        swHours.innerText = swHours.innerText.padStart(2, 0);
                        swMinute.innerText = "00";
                    }
                }
            }
        }, 10);
    } else {
        clearInterval(swCounter);
    }
}

playPauseBtn.addEventListener("click", () => {
    if (!playTimer) {
        playPauseBtn.innerText = "Pause";
        playPauseBtn.classList.remove("btn-success");
        playPauseBtn.classList.add("btn-warning");
        startTimer(true);
    } else {
        playPauseBtn.innerText = "Play";
        playPauseBtn.classList.remove("btn-warning");
        playPauseBtn.classList.add("btn-success");
        startTimer(false);
    }
    playTimer = !playTimer;
})

resetBtn.addEventListener("click", () => {
    playPauseBtn.innerText = "Play";
    playPauseBtn.classList.remove("btn-warning");
    playPauseBtn.classList.add("btn-success");
    playTimer = false; 
    startTimer(false);
    swMiliSec.innerText = "00";
    swSecond.innerText = "00";
    swMinute.innerText = "00";
    swHours.innerText = "00";

})
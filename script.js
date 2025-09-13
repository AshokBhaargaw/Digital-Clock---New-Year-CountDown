let hour = document.getElementById("time").children[0];
let minute = document.getElementById("time").children[1];
let second = document.getElementById("time").children[2];
let ampm = document.getElementById("time").children[3];

let newYearDay = document.getElementById("newYear").children[0];
let newYearhour = document.getElementById("newYear").children[1];
let newYearMinutes = document.getElementById("newYear").children[2];
let newYearSeconds = document.getElementById("newYear").children[3];



setInterval(() => {
    let time = new Date();
    let newYear = new Date(`January 01 ${time.getFullYear() + 1} 00:00:00`);

    hour.innerText = (time.getHours() % 12).toString().padStart(2, '0');
    minute.innerText = (time.getMinutes()).toString().padStart(2, '0');
    second.innerText = (time.getSeconds()).toString().padStart(2, '0');
    ampm.innerText = time.getHours() >= 12 ? "PM" : "AM";

    let diff = newYear - time;
    newYearDay.innerText = Math.floor(diff/1000/60/60/24);
    newYearhour.innerText = Math.floor(diff/1000/60/60)%24;
    newYearMinutes.innerText = Math.floor(diff/1000/60)%60;
    newYearSeconds.innerText = Math.floor(diff/1000)%60;

    console.log((diff/1000/60/60)%24)
}, 1000);



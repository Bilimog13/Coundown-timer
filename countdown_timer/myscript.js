const newYear = "1 January 2022";

function countdowntimer(){

const currentDate = new Date();

const newYearsDate = new Date(newYear);

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = document.querySelector("#day");
    const day = Math.floor(totalSeconds / 3600 / 24);

    const hours = document.querySelector("#hour");
    const hour = Math.floor(totalSeconds / 3600) % 24;

    const mins = document.querySelector("#min");
    const min = (Math.floor(totalSeconds / 60) % 24) %24;

    const secs = document.querySelector("#sec");
    const sec =  Math.floor(totalSeconds % 60);


   days.innerText=day;
   mins.innerText=min;
   hours.innerText=hour;
   secs.innerText=sec;

};

countdowntimer();
setInterval(countdowntimer, 1000)
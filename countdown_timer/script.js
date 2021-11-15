

const newYears = '1 Jan 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

   
   const totalSeconds = (newYearsDate - currentDate ) / 1000;
  
   const hour =  document.getElementById('hours');
   const hours = Math.floor(totalSeconds /3600) % 24;


   const min = document.getElementById('mins');
   const minutes = (Math.floor(totalSeconds / 60) % 24) %24;

   const day = document.getElementById('days');
   const days = Math.floor(totalSeconds / 3600 / 24);

   const sec = document.getElementById('Seconds');
   const seconds = Math.floor(totalSeconds % 60);


   day.innerText=days;
   min.innerText=minutes;
   hour.innerText=hours;
   sec.innerText=seconds;

}

countdown();
setInterval(countdown, 1000);




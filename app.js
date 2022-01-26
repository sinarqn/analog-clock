const digitalClock = document.querySelector('.digital-container');
const analogSec = document.querySelector('.sec');
const analogMin = document.querySelector('.min');
const analogHour = document.querySelector('.hour');

let time = new Date;
let sec = time.getSeconds();
let min = time.getMinutes();
let hour = time.getHours();

rotateAnalog();
showClock();
setInterval(showClock, 1000);
setInterval(rotateAnalog, 1000);

function halfHourClock(){
  let time = new Date;
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();
  
  let amPm = 'Am';
  if(sec < 10) sec = '0' + sec;
  if(min < 10) min = '0' + min;
  if(hour < 10) hour = '0' + hour;
  if(hour > 12){
    hour = hour - 12;
    amPm = 'Pm';
  } 
  return hour + ':' + min + ':' + sec + ' ' + amPm;
}
function fullHourClock(){
  let time = new Date;
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();

  if(sec < 10) sec = '0' + sec;
  if(min < 10) min = '0' + min;
  if(hour < 10) hour = '0' + hour;
  return hour + ':' + min + ':' + sec;
}
function showClock(){
  digitalClock.innerHTML = fullHourClock();
}

function rotateAnalog(){
  let time = new Date;
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();
  let secDegree = (sec * 6) - 90;
  let minDegree = (min * 6) - 90;
  let hourDegree = (hour * 30) - 90;
  analogSec.style.transform = 'rotate('+ secDegree + 'deg)';
  analogMin.style.transform = 'rotate('+ minDegree + 'deg)';
  analogHour.style.transform = 'rotate('+ hourDegree + 'deg)';
}


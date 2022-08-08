//alert
const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);
audio.loop = true;

//let currentTime = document.querySelector(".timer");
let currentDate = document.querySelector(".date");
let currentSecond = document.querySelector(".second");
let currentMinute = document.querySelector(".minute");
let currentHour = document.querySelector(".hour");

let currentTime = document.querySelector(".time");

//mode
let currentMode = document.querySelector(".mode");

//btn
let hourInc = document.querySelector(".btn-hour__inc");
let hourDec = document.querySelector(".btn-hour__dec");
let minuteInc = document.querySelector(".btn-minute__inc");
let minuteDec = document.querySelector(".btn-minute__dec");
let secondInc = document.querySelector(".btn-second__inc");
let secondDec = document.querySelector(".btn-second__dec");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let backgroundImg = [
  "https://images.unsplash.com/photo-1532087912058-22332fec7847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
];
let mode = ["day mode", "night mode"];
let color = ["black", "white"];
let value = false;
let hour = 0;
let minute = 0;
let second = 0;
function countdown() {
  let timer = new Date();

  currentDate.innerHTML =
    days[timer.getDay()] +
    " , " +
    months[timer.getMonth()] +
    " " +
    timer.getDate() +
    " , " +
    timer.getFullYear();

  currentTime.innerHTML =
    formatTime(timer.getHours()) +
    " : " +
    formatTime(timer.getMinutes()) +
    " : " +
    formatTime(timer.getSeconds());

  currentHour.innerHTML = formatTime(hour);
  currentMinute.innerHTML = formatTime(minute);
  currentSecond.innerHTML = formatTime(second);

  //remaining
  let totalTime =
    parseInt(hour) * 60 * 60 + parseInt(minute) * 60 + parseInt(second);
  let totalTimeNow =
    timer.getHours() * 60 * 60 + timer.getMinutes() * 60 + timer.getSeconds();
  let remaining = document.querySelector(".remaining");
  let remainingTime;
  if (totalTime - totalTimeNow > 0) {
    remainingTime = totalTime - totalTimeNow;
  } else {
    remainingTime = totalTime + 24 * 60 * 60 - totalTimeNow;
  }
  remaining.innerHTML =
    Math.floor(remainingTime / 60 / 60) +
    " : " +
    Math.floor((remainingTime / 60) % 60) +
    " : " +
    (remainingTime % 60);
  if (totalTime === totalTimeNow) {
    audio.play();
  }
}

setInterval(countdown, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

currentMode.innerHTML = mode[0];

currentMode.addEventListener("click", () => {
  value = !value;
  currentMode.innerHTML = mode[value ? 1 : 0];
  document.body.style.backgroundImage = `url(${backgroundImg[value ? 1 : 0]})`;
  document.body.style.color = color[value ? 1 : 0];
});

hourInc.addEventListener("click", () => {
  if (hour >= 23) hour = 0;
  else hour += 1;
});
hourDec.addEventListener("click", () => {
  if (hour <= 0) hour = 23;
  else hour -= 1;
});

minuteInc.addEventListener("click", () => {
  if (minute >= 59) minute = 0;
  else minute += 1;
});
minuteDec.addEventListener("click", () => {
  if (minute <= 0) minute = 59;
  else minute -= 1;
});

secondInc.addEventListener("click", () => {
  if (second >= 59) second = 0;
  else second += 1;
});
secondDec.addEventListener("click", () => {
  if (second <= 0) second = 59;
  else second -= 1;
});

let ok = document.querySelector(".ok");
ok.addEventListener("click", () => {
  audio.pause();
});

const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const timeZone = document.querySelector("#timezone");
const CURRENT_TIME_ZONE = 2;

setInterval(applyTimeZoneDifference, 1000);

// move hands of clock 
function moveHands(seconds, minutes, hours) {
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

function getCurrentTime() {
  const now = new Date();
  
  const seconds = now.getSeconds();

  const minutes = now.getMinutes();

  const hours = now.getHours();

  return {
    hours,
    minutes,
    seconds,
  }
};

function applyTimeZoneDifference() {
  const { seconds, minutes, hours } = getCurrentTime();
  const tZ = timeZone.value;
  const timeZoneDiff = tZ - CURRENT_TIME_ZONE;
  let newHours = hours + timeZoneDiff;

  if (newHours >= 24) {
    newHours = newHours - 24;
  };

  moveHands(seconds, minutes, newHours)

  console.log(1);
}
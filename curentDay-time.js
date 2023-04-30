let today = new Date();
let day = today.getDay();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is :" + dayList[day] + ".");

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepend = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepend === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = "Noon";
  } else {
    hour = 12;
    prepend = "PM";
  }
}

if (hour === 0 && prepend === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = "Mid Night";
  } else {
    hour = 12;
    prepend = "AM";
  }
}

console.log(
  "Current Time: " + hour + ":" + minute + ":" + second + " " + prepend
);

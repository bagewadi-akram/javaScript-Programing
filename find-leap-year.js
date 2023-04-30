let year = window.prompt("input a Year:");
let x = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

console.log(x);

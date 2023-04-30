let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25)
  christmas.setFullYear(christmas.getFullYear() + 1);

let one_day = 1000 * 60 * 60 * 24;

console.log(
  Math.ceil((christmas.getTime() - today.getTime()) / one_day) +
    "Days Left Until Christmas !"
);

const ceilToFahrenheit = (celsius) => {
  let cTemp = celsius;
  let cToFha = (cTemp * 9) / 5 + 32;

  let message = cTemp + "\xB0C is" + cToFha + "\xB0F.";

  console.log(message);
};

const FahrenheitToCeil = (fahrenheit) => {
  let fTemp = fahrenheit;
  let fToCeil = ((fTemp - 32) * 5) / 9;

  let message = fTemp + "\xB0F is" + fToCeil + "\xB0C.";

  console.log(message);
};

ceilToFahrenheit(69);
FahrenheitToCeil(49);

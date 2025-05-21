const convertToCelsius = function(fahrenheit) {
  // Formula: (F - 32) * 5/9
  const celsius = (fahrenheit - 32) * (5 / 9);
  // Round to 1 decimal place
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // Formula: (C * 9/5) + 32
  const fahrenheit = (celsius * 9 / 5) + 32;
  // Round to 1 decimal place
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

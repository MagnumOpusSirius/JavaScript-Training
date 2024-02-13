//Goal: create a functionn that returns an object

//we have an object that returns all three values
let convertF = function (f) {
  return {
    fahrenheit: f,
    kelvin: (f + 460) * (5 / 9),
    celcius: (f - 32) * (5 / 9),
  };
};

//call this function:
console.log(convertF(82));

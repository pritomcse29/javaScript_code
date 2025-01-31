// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// (0°C × 9/5) + 32

function convertTemp(Celsius){
     Fahrenheit = Celsius*(9/5)+32;
     return Fahrenheit;
}

const result = convertTemp(29);
console.log(result+"°F");


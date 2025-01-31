// 12 inch 1 feet
// function inchToFeet(inch){
//     const feet = inch / 12;
//     return feet;
// }

function inchToFeet(inch){
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft '+inchRemaining+' inch ';
    return result;
}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);
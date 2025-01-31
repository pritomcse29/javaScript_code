// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function countDuplicate(numbers,x){
    let count = 0;
    for(const num of numbers){
        if(x==num){
            count++;
        }
    }
    return count;
}

let numbers = [5,6,11,12,98,5];
let x = 5;
const result = countDuplicate(numbers,5);
console.log("The number "+x+" is repeated in the array"+" "+result);



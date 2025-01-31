/**
 * array has some duplicate elements
 * []
*/


// const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function removeDuplicate(numbers){
       let unique =[];
       for(const name of numbers){
            if(unique.includes(name) === false){
                unique.push(name);
            }
       }
       return unique;
}

const result = removeDuplicate(numbers);
console.log(result);
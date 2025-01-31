// Task-3:
// Write a function to count the number of vowels in a string.

function numberVowel(str){
    let count = 0;
       for(const letter of str){
            if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u"){
            count++;
            }
       }
       return count;
}

const str = "pritom";
const result = numberVowel(str);
console.log(result);
function odAverage(numbers){
    let oddNumber=[];
    let sum = 0;
     for(let i=0;i<numbers.length;i++){
           if(numbers[i] % 2 == 0){
             oddNumber.push(numbers[i]);
             sum+=numbers[i];
           }
           
     }
     if (oddNumber.length === 0) {
        return 0; 
    }
     return sum/oddNumber.length;
}

const numbers = [10,11,13,14,16,17,18];
const result = odAverage(numbers);
console.log(result);

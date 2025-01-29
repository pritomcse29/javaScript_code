// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

let Mathematics = 75.25;
let Biology = 65;
let Chemistry = 80;
let Physics = 35.45;
let Bangla = 99.50;
Avg_marks = (Mathematics+Biology+Chemistry+Physics+Bangla)/5;
console.log(Avg_marks.toFixed(2));

let Marks = [75.25,65,80,35.45,99.50];
let sum = 0,count=0;
for(let i=0;i<Marks.length;i++){
    count=count+1;
    sum=Marks[i]+sum;
}
let Avg = sum/count;
// let result = Avg.toFixed(2)
console.log("Average Marks Is:",Avg.toFixed(2));


// function sum(marks){
//     let count=0;
//     for(let i=0;i<marks.length;i++){
//         count=count+1;
//         sum=marks[i]+sum;
//     }
//     let Avg = sum/count;
//     return Avg
// }

// let marks_obj ={
//     Mathematics:75.25,
//     Biology:65,
//     Chemistry:35.45,
//     Physics:80,
//     Bangla:99.50
// }
// let total = sum(marks_obj);
// console.log(total.toFixed(2))

// let marks_obj ={
//     Mathematics:75.25,
//     Biology:65,
//     Chemistry:35.45,
//     Physics:80,
//     Bengali:99.50
// }
// const list = Object.values(marks_obj);
// const key = Object.keys(marks_obj);
// console.log(list)
// console.log(key)

// const computer = {
//     brand: 'lenovo',
//     price: 35000,
//     processor: 'intel',
//     hdd: '512gb', 
//     monitor: 'hp'
// }

// const values = Object.values(computer);
// console.log(values);

function marks(value){
    let count = 0,sum=0;
    for(let i=0;i<value.length;i++){
        count++;
        sum = sum+value[i];
    }
   let  Avg = sum/count 
    return Avg;

}
let marks_obj ={
    Mathematics:75.25,
    Biology:65,
    Chemistry:35.45,
    Physics:80,
    Bengali:99.50
}
let value = Object.values(marks_obj);
let result = marks(value);
console.log(result.toFixed(2));
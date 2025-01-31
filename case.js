const school ="Bogura Zilla School";
const lowerCase = school.toLowerCase();
const upperCase = school.toUpperCase();
console.log(lowerCase);
console.log(upperCase);

const name1 ="Chemistry";
const name2 = "chemistry";
if(name1.toLowerCase==name2.toUpperCase){
    console.log("I read the Chemistry book");
}
else{
    console.log('I don\'t read the chemistry book');
}


const w ="Water";
const w1=" water ";
if(w.toLowerCase().trim()==w1.toLowerCase().trim()){
    console.log("Water");
}
else{
    console.log("Not Water");
}

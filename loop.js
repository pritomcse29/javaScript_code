// for of : array
// for in : object

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for(const prop in mobile){
//     // console.log(prop)
//     // console.log(mobile[prop])
// }

// for (const prop in mobile){
//     // console.log(prop);
//     console.log(mobile[prop]);
// }
let keys = Object.keys(mobile);
for(const key of keys){
    console.log(key + " "+ mobile[key]);
}

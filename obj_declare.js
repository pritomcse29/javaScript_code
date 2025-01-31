const obj1 = {brand:'BMW',price:1000000,color:'black'}
const obj2 = new Object()
const obj3 = Object.create({})
// এই কোডে তিনটি ভিন্নভাবে অবজেক্ট তৈরি করা হয়েছে। নিচে প্রত্যেকটির ব্যাখ্যা:

// const obj1 = {brand: 'BMW', price: 1000000, color: 'black'}:

// এখানে একটি অবজেক্ট তৈরি করা হয়েছে সরাসরি লিটারাল (literal) সিনট্যাক্স ব্যবহার করে।
// এই পদ্ধতিতে অবজেক্টের প্রপার্টি এবং মান সরাসরি নির্ধারণ করা হয়।
// উদাহরণ:
// javascript
// Copy
// Edit
// console.log(obj1);  // {brand: 'BMW', price: 1000000, color: 'black'}
// const obj2 = new Object():

// এই পদ্ধতিতে new Object() ব্যবহার করে একটি নতুন অবজেক্ট তৈরি করা হয়েছে।
// এটি JavaScript-এর পুরানো পদ্ধতি, যেখানে আপনি Object কন্সট্রাক্টর ব্যবহার করে নতুন অবজেক্ট তৈরি করতে পারেন।
// উদাহরণ:
// javascript
// Copy
// Edit
// console.log(obj2);  // {}
// obj2.brand = 'Audi';
// console.log(obj2);  // {brand: 'Audi'}
// const obj3 = Object.create({}):

// Object.create() একটি পদ্ধতি যা একটি নতুন অবজেক্ট তৈরি করে, যার প্রোটোটাইপ (prototype) হিসেবে অন্য একটি অবজেক্ট নির্ধারণ করা হয়।
// এখানে {} (খালি অবজেক্ট) কে প্রোটোটাইপ হিসেবে ব্যবহার করা হয়েছে।
// এর ফলে obj3 একটি খালি অবজেক্ট হবে, কিন্তু এর প্রোটোটাইপ হিসেবে একটি খালি অবজেক্ট থাকবে।
// উদাহরণ:
// javascript
// Copy
// Edit
// console.log(obj3);  // {}
// console.log(obj3.__proto__);  // {}
// সারাংশ:
// obj1 একটি সাধারণ অবজেক্ট লিটারাল।
// obj2 new Object() কন্সট্রাক্টর দ্বারা তৈরি একটি অবজেক্ট।
// obj3 Object.create() ব্যবহার করে প্রোটোটাইপ নির্ধারণ করা হয়েছে এমন একটি অবজেক্ট।

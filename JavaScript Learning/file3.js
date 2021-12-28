"use strict";
// typeof operator

let x = 10.5;
console.log(typeof x);

x = "deepak";
console.log(typeof x);


// number to string
let age = 20;
console.log(typeof age);

age = age + "";
console.log(typeof age);

// string to number
let myGradYr = "2023";
console.log(typeof myGradYr);

myGradYr = + myGradYr;
console.log(typeof myGradYr);     // JavaScript orz

// Number()   &   String()
let num = 100;
console.log(typeof num);

num = String(num);
console.log(typeof num);

num = Number(num);
console.log(typeof num);

// Undefined
let x;
console.log(x , typeof x);

// null;
let y = null;
console.log(y , typeof y);    // bug in javascript

// BigInt
console.log(Number.MAX_SAFE_INTEGER);

let num = BigInt("2323452312097219921802120909792072");
console.log(num);

let a = 130n;
let b = 150n;
console.log(a , typeof a);
console.log(a+b);

// let c = 150;
// console.log(a+c);    Error : BigInt + Number



// boolean
// true , false

console.log(a < b);


// == vs ===
console.log("______________   == vs ===    ________________");  // javascript orz
let n1 = 10 , n2 = 10 , n3 = "10";

console.log(n1 == n2);
console.log(n1 == n3);   // checks only value, no matter what datatype

console.log(n1 === n2);
console.log(n1 === n3);  // check value and datatype both



// != vs !==
console.log("______________   != vs !==    ________________");  // javascript orz
console.log(n1 != n2);
console.log(n1 != n3);

console.log(n1 !== n2);
console.log(n1 !== n3);
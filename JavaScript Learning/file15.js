// Array destructuring;

const arr = ["vampire_questt" , "Invincible327"];

let [val1 , val2] = arr;

console.log("Value of arr[0] : " , val1);   // val1 and val2 are normal variables
console.log("Value of arr[1] : " , val2);

val1 = "deepak";
console.log(val1);

const [a , b] = arr;
console.log(a);
console.log(b);

// a = "deepak";   // const variable can't be updated

const arr1 = ["Codeforces" , "Atcoder" , "Codechef"];

let [x,y,z] = arr1;
console.log(x);
console.log(y);
console.log(z);

let [p , , q] = arr1;
console.log(p);
console.log(q);

[p , q] = arr1;
console.log(p);
console.log(q);

[p , ...q] = arr1;
console.log(p);
console.log(q);

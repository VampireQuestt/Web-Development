// Primitive type  vs   Reference type


// Primitive type  --  Actual data is stored in stack
let num1 = 10;
let num2 = num1;
console.log("num1 : " , num1);
console.log("num2 : " , num2);

num1 += 1;
console.log("num1 : " , num1);
console.log("num2 : " , num2);



// Reference type  --  Actual data (Array) is stored in heap, pointer to that data is stored in stack

let arr1 = ["vampire_questt" , "Invincible327"];
let arr2 = arr1;
console.log("arr1[] : " , arr1);
console.log("arr2[] : " , arr2);

arr1.push("stoic_code");
console.log("arr1[] : " , arr1);
console.log("arr2[] : " , arr2);
// Arrays
// ordered collection of items;

let arr = [1 , 2 , undefined , 3.4 , -20 , "Invincible327" , true , null];
console.log("arr[] : " , arr)

console.log("First element : " , arr[0]);
console.log("Lenght of arr[] is : " , arr.length);
console.log("Last element : " , arr[arr.length-1]);

arr[5] = "vampire_questt";
console.log("arr[] : " , arr);

console.log("Type of arr[] : " , typeof arr);

console.log(Array.isArray(arr));


// push pop shift unshift

let fruits = [];
console.log("fruits[] : " , fruits);

fruits.push("apple");   // add at end O(1)
fruits.push("mango");
fruits.push("grapes");
console.log("fruits[] : " , fruits);

let popped = fruits.pop();  // delete from end O(1)
console.log("fruits[] : " , fruits);
console.log("Popped fruit : " , popped);

fruits.unshift("papaya");   // add at starting O(N)
console.log("fruits[] : " , fruits);

let shifted = fruits.shift();  // delete from starting O(N)
console.log("fruits[] : " , fruits);
console.log("shifted fruit : " , shifted);

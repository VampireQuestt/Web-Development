// how to clone two arrays
// how to concatenate two arrays

let arr1 = ["item1" , "itme2"];
let arr2 = arr1;
console.log(arr1===arr2);   // both arr1 and arr2 are same under

let arr3 = arr1.slice(0);
console.log(arr1===arr3);  // both are different

let arr4 = [].concat(arr1);
console.log(arr1===arr4);


// spread operator

let arr5 = [...arr1];
console.log(arr5===arr1);


// clone & concatenate

let arr6 = arr1.slice(0).concat(["itme3" , "item4"]);
console.log(arr6);

let arr7 = [].concat(arr1 , ["item3" , "item4"]);
console.log(arr7);
console.log(arr6===arr7);

let arr8 = [...arr1 , "item3" , "item4"];
console.log(arr8);

let arr9 = [...arr1 , "vampire_questt" , ...arr8];
console.log(arr9);
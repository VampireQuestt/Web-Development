// spread operator

const arr1 = [1 , 2 , 3];
const arr2 = [4 , 5 , 6];

const arr = [...arr1 , ...arr2];
// const arr = [...arr1 , arr2];
// const arr = [arr1 , ...arr2];
console.log(arr);


const newArray = [..."abcd"];
console.log(newArray);

// const newArray2 = [...123456789];
const newArray2 = [..."123456789"];
console.log(newArray2);
console.log(typeof newArray2[1]);


// spread operator in Objects

const obj1 = {
    key1 : "val1",
    key2 : "val2"
}

const obj2 = {
    key1 : "Unique value",
    key3 : "val3",
    key4 : "val4"
}

const newObj = { ...obj1};
console.log(newObj);

const obj = { ...obj1 , ...obj2};
console.log(obj);

const obj3 = { ...obj2 , ...obj1};
console.log(obj3);

const obj4 = { ...obj1 , key69 : "vampire_questt" , ...obj2};
console.log(obj4);


// Creation of objects using Arrays

const myArr = ["Deepak" , "Invincible327" , "vampire_questt" , "JARVIS"];

const myObj = { ...myArr};
console.log(myObj);

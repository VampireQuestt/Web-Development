// for loop in Arrays

console.log("______for loop in Arrays______\n\n");
let fruits = ["Apple" , "Mango" , "Grapes" , "Banana"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("__________________________________\n\n");
for(let f of fruits){
    console.log(f);
}

console.log("__________________________________\n\n");
for(let i in fruits){
    console.log(fruits[i]);
}

// while loop in Arrays

console.log("\n_______while loop in Arrays_______\n\n");
let i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

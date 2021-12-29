// while loop

let i = 0;
while(i < 10){
    console.log(i++);
}


// for loop

let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}
console.log("Sum :" , sum);

for(var j = 0; j < 10; j++){
    console.log("j : ", j);
}

console.log("value of j outside the loop : " , j);


// break

console.log("break statement");
for(let i = 0; i < 5; i++){
    console.log(i);
    if(i == 2){
        break;
    }
}

// continue
console.log("continue statement");
for(let i = 0; i < 5; i++){
    if(i == 2) continue;
    console.log(i);
}


// do while loop

console.log("do while loop");
let x = 5;
do{
    console.log(x);
    x++;
}while(x <= 4);
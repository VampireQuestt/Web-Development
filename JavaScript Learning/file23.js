// Functions

function sayHello(){
    console.log("Hello");
}

sayHello();


function Add(x , y){
    return x+y;
}

let sum = Add(2 , 3);
console.log(sum);


function MultiplyAll(x , ...y){
    let res = [];
    for(let i of y){
        res.push(i*x);
    }
    return res;
}

let res1 = MultiplyAll(10 , 4);
let res2 = MultiplyAll(10 , 1 , 2 , 3 , 4 , 5);
console.log(res1);
console.log(res2);



// function Expression

const sayGoodBye = function(){
    console.log("Good Bye !");
}

sayGoodBye();


const isEven = function(number){
    return !(number&1);
}

console.log(isEven(4));
console.log(isEven(13));


// Arrow Functions

const CodeforcesRating = () => {
    return ["Specialist" , 1475];
}

let var1 = CodeforcesRating();
console.log(var1);


const Fibonnaci = (n) => {
    if(n <= 1) return n;
    return Fibonnaci(n-1)+Fibonnaci(n-2);
}

console.log(Fibonnaci(10));




// Single line Expression like Lambda function in Python

const firstChar = Mystring => Mystring[0];

console.log(firstChar("Deepak"));
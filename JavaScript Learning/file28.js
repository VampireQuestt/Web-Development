// default parameters  and   rest parameters

function add(num1 , num2){
    return num1+num2;
}

console.log(add(10));


function Add(num1 , num2){
    if(typeof num2 === "undefined"){
        num2 = 0;
    }
    return num1+num2;
}

console.log(Add(10));
console.log(Add(10,20));


function Adddefault(num1 , num2 = 100){
    return num1+num2;
}

console.log(Adddefault(10));
console.log(Adddefault(10,20));



// rest parameters

function magic(a , b , ...c){
    console.log("a : ", a , "b : " ,  b , "c : " , c);
}

magic(1,2,3,4,5,6,7);
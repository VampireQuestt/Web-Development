// callback functions   --  function as a parameter to another function


function myFun2(name){
    console.log("Inside myFun2" , name);
}


function myFun1(callback){
    console.log("Inside myFun1");
    console.log(callback);
    callback("vampire_questt");
}

myFun1(myFun2);



// function returning function

function fun1(){

    function hello(){
        console.log("Hello World");
    }

    return hello;
}


const sayHello = fun1();

sayHello();

console.log(typeof sayHello);


// these type of functions are known as higher order functions
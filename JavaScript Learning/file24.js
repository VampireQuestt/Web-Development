// hoisting

sayHello();

function sayHello(){
    console.log("You can call a normal function before its declaration"); // this behaviour is hoisting
}

sayHello();

// myFun();

const myFun = function(){
    console.log("You can't call a function Expression before its declaration");
}

myFun();


// myFun2();

const myFun2 = () => {
    console.log("You can't call an arrow function before its declaration");
}

myFun2();
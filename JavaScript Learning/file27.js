// block scope vs function scope

// let and const are block scope

// var is function scope


// {
//     const myName = "Deepak";
//     console.log(myName);
// }

// // console.log(myName);

// {
//     const myName = "vampire_questt";
//     console.log(myName);
// }

// // console.log(myName);

// const myName = "Invincible327";
// console.log(myName);



// you can say the javascript code runs under main function, that is the each line of code is inside some virtual main function


function myFun(){

    if(true){
        let myVar = "Deepak Rajveer Singh";
        console.log(myVar);
    }

    if(!0){
        // console.log(myVar);
    }

    if(~0){
        let myVar = "Captain Jack Sparrow";
        console.log(myVar);
    }
    
    // console.log(myVar);
}

myFun();


function myFun2(){

    if(true){
        var myVar = "Deepak Rajveer Singh";
        console.log(myVar);
    }

    if(!0){
        console.log(myVar);
    }

    if(~0){
        var myVar = "Captain Jack Sparrow";
        console.log(myVar);
    }
    
    console.log(myVar);
}

myFun2();

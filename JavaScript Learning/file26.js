// lexical scope

let myVar = "Global scope";

function myFun(){
    let myVar = "vampire_questt";
    const cp = "Codeforces";

    function Helper(){
        const myVar = "Invincible327";
        console.log("Inside Helper" , myVar);
        console.log(cp);
    }
    
    console.log(myVar);
    myVar = "changed";
    console.log(myVar);

    Helper();
}

myFun();
console.log(myVar);
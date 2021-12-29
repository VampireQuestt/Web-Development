// if else condition
let age = 20;

if(age < 14){
    console.log("You cannot play this game");
}
else{
    console.log("You can play this game");
}


let firstName = "";
// firstName = null;

if(firstName){
    console.log(firstName);
}
else{
    console.log("firstName is Empty");
}


// ternary operator

let year = 2021;

year == 2022 ? console.log("Happy New Year!") : console.log("Good Bye 2021");


// Number guessing game

let winningNumber = 34;
let userGuess = +prompt("Guess a Number");    // prompt takes input as a string

if(userGuess === winningNumber){
    console.log("Your Guess is right");
}
else{
    if(userGuess < winningNumber){
        console.log("Too low !!!");
    }
    else{
        console.log("Too high !!!");
    }
}


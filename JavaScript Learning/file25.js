// function inside function

function myFun(){
    console.log("Inside myFun");

    const fun1 = () => console.log("vampire_questt");

    const Add = function(num1 , num2){
        return num1+num2;
    }

    const Mul = function(num1 , num2){
        return num1*num2;
    }

    console.log(Add(10,20));

    console.log("Javascript is just orz");

    fun1();

    console.log(Mul(3,4));
}


myFun();

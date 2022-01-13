// param destructuring

const person = {
    name : "Deepak",
    age : 20,
};

function myFun(obj){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.handle);
}

myFun(person);



function myFun2({name , age , handle}){
    console.log(name);
    console.log(age);
    console.log(handle);
}

myFun2(person);
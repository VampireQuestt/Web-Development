// Object destructuring

const Myinfo = {
    name : "Deepak",
    age : 20,
    CP_handle : "vampire_questt",
    favs : ["CJS" , "SRK" , "Tony"]
};


const Myname = Myinfo.name;
console.log(Myname);

const Myage = Myinfo.age;
console.log(Myage);

// Object destructuring

const {name , CP_handle} = Myinfo;   // by default it takes name of the keys as variable name
console.log(name);
console.log(CP_handle);

const {name:var1 , CP_handle:var2} = Myinfo;  // using semicolon , we can give our variablr desired name
console.log(var1);
console.log(var2);


let {name:var3 , ...MyRestInfo} = Myinfo;
console.log(var3);
console.log(MyRestInfo);

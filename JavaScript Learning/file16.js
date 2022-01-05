// objects : reference type data structure
// key value pairs
// objects don't have indexes

const Myinfo = {
    name : "Deepak",
    age : 20,
    CP_handle : "vampire_questt",
    favs : ["CJS" , "SRK" , "Tony"]
};

console.log(Myinfo)

// how to access data from objects
console.log(Myinfo.name);
console.log(Myinfo.favs[1]);
console.log(Myinfo["favs"]);
// console.log(Myinfo[favs]);

// how to add key value pair to objects
Myinfo.love = "Codeforces";

console.log(Myinfo);

Myinfo["Mob"] = 9142344865;

console.log(Myinfo);
console.log(Myinfo.Mob , typeof Myinfo.Mob);


// how to add key with spaces

// Myinfo.fav movies = ["Intrestellar" , "Pirates of the carribean" , "DDLJ"];   Error  -- spaces not allowed

Myinfo["fav movies"] = ["Intrestellar" , "Pirates of the carribean" , "DDLJ"];

// console.log(Myinfo.fav movies);
console.log(Myinfo["fav movies"]);
console.log(Myinfo["fav movies"][2]);

// add key value from a variable

let key = "Email";
// Myinfo.key = "vampirequestt@gmail.com";
// console.log(Myinfo);

// Myinfo["key"] = "vampirequestt@gmail.com";
// console.log(Myinfo);

Myinfo[key] = "vampirequestt@gmail.com";
console.log(Myinfo);

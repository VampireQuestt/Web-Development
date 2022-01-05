// how to iterate objects

const Myinfo = {
    name : "Deepak",
    age : 20,
    CP_handle : "vampire_questt",
    favs : ["CJS" , "SRK" , "Tony"]
};

// for in loop

for(let key in Myinfo){
    // console.log(key , " : " , Myinfo.key);
    // console.log(key , " : " , Myinfo["key"]);
    console.log(key , " : " , Myinfo[key]);
    console.log(`${key} : ${Myinfo[key]}`);
}



// Object.keys() method

console.log(Object.keys(Myinfo));

// for of loop

for(let key of Object.keys(Myinfo)){
    console.log(key , " : " , Myinfo[key]);
}


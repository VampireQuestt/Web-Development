// Nested destructuring

const users = [
    {userID : 1 , name : "Deepak" , Email : "deepak.it2023@gmail.com"},
    {userID : 2 , name : "Invincible327" , Email : "xyz@gmail.com"},
    {userID : 3 , name : "Vampire_questt" , Email : "vampirequestt@gmail.com"},
]


const [user1 , user2 , user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);


// Nested destructuring

const [{name:Myname , userID:MyID} ,  , {Email:MyEmail}] = users;

console.log(Myname);
console.log(MyEmail);
console.log(MyID);
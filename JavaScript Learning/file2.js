// strings

let firstName = "Deepak";
console.log(firstName , " : " , firstName.length);

// last Index = length-1
// negative indexing is not allowed, Python orz
console.log(firstName[5]);



// trim()

let x = "   A B      ";
console.log(x , " : " , x.length);

x.trim()
console.log(x , " : " , x.length);

let y = x.trim();
console.log(y , " : " , y.length);


// toUpperCase
let caps = firstName.toUpperCase();
console.log(caps);

// toLowerCase
let small = firstName.toLowerCase();
console.log(small);

// slice()
let slc = firstName.slice(1 , 5);
console.log(slc);
console.log(firstName.slice(2));
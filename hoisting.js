console.log("a :", a);
var a = 10;
console.log("a :", a);

// // For let type
console.log("b :", b);
let b;
console.log("b :", b);

// For const type
console.log("c :", c);
const c = 10;
console.log("c :", c);

// Temporal Dead Zone.
// Its the time between the let/const is hoisted & until its initialized
// variable hoisted =======> variable initialized
// If you try to use the let/const in between this above mentioned journey/step,
//then you will get ref error

// In the above example, we have 
//a is var type, b is let type and c is const type

// If we DEBUG deeply, we find that
//a is put in global scope
//b and c are put in 'script' scope

// We cannot access script memmory space
// Array destrcuturing
const arr1 = ["Denberg", "NY", "Phil"];

// let denberg = arr1[0];
// let ny = arr1[1];
// let phil = arr1[2];

let [denberg, ny, phil] = arr1;

// console.log(denberg);
// console.log(ny);
// console.log(phil);

// Object destructuring
const obj = {
  city1: "Denberg",
  city2: "NY",
  city3: "PHIL",
};

// const obj1 = {
//     data: {
//         citiesInfo: {
//             :
//         }
//     }
// }

// let denberg1 = obj.city1;

// let ny1 = obj.city2;
// let phil1 = obj.city3;
// var {denberg1, ny1, phil1} = obj;
var { city1, city2, city3 } = obj;

console.log(city1);
//console.log(ny1);
//console.log(phil1);

//============================================================================

// Array destrcuturing
const numbers = [1, 2, 3, 4, 5, 6, 7];

const [a, b, , ...rest] = numbers;
// const [a, b,, ...rest] = numbers; //[ 4, 5, 6, 7 ]
// const [a, b, c, , d] = numbers; //skip

console.log(a); //1
console.log(b); //2
console.log(rest); //[ 3, 4, 5, 6, 7 ]

// Object destructuring
const user = {
  firstName: "Mari",
  lasName: "Ost",
  age: 34,
  city: undefined, // if Denver
};

const { firstName, age, city = "no city" } = user; //city will be Denver
console.log(firstName, age);

console.log(city);

//============================================================================

// DESTRUCTURE


const tree = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 3 }] },
    { value: 4, children: [{ value: 5 }] },
  ],
};

// output must be 
// 1, 2, 3, 4, 5

const {
    value, 
    children: [
        { value: v2, children: [{value: v3}]},      // when you have repeated "value" we will save it like -> value: v2
        {value: v4, children: [{value: v5}]}        // same name property

]
} = tree
console.log(value, v2, v3, v4, v5);

// Let's do 
// Brute Force method

//somehow we need to print value

let vv1 = tree.value;       // vv1 value as 1
let vv2 = tree.children[0].value;       // first array object of children, this will give 2
let vv3 = tree.children[0].children[0].value;       // we reched children in children's value which is 3
let vv4 = tree.children[1].value;       // second children, children is an array with 2 objects, 
let vv5 = tree.children[1].children[0].value;       //[0], [1] indexses


console.log("Brute Force method.." + vv1, vv2, vv3, vv4, vv5)
//
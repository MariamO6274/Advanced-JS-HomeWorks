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
}

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
var {city1, city2, city3 } = obj;

console.log(city1);
//console.log(ny1);
//console.log(phil1);

//============================================================================

// Array destrcuturing
const numbers = [1, 2, 3, 4, 5, 6, 7];

const [a, b,, ...rest] = numbers;
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
}

const { firstName, age , city = "no city"} = user; //city will be Denver
console.log(firstName, age);

console.log(city)
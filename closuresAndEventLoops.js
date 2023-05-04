console.log("Code before settimeout");

// // Web APIs
// // SetTimeout is a web api
// setTimeout(() => {
//     console.log("This is from settimeout");
// }, 0);

// console.log("Code after settimeout");

// //

// Web APIs
// SetTimeout is a web api
for (let i = 0; i < 5; i++) {
  //var j = i;
  setTimeout(() => {
    console.log("This is from settimeout number: ", i);
  }, 3000);
}

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

let denberg1 = obj.city1;

// let ny1 = obj.city2;
// let phil1 = obj.city3;
// var {denberg1, ny1, phil1} = obj;
var { city1, city2, city3 } = obj;

console.log(city1);
//console.log(ny1);
//console.log(phil1);

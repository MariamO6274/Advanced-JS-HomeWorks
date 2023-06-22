/**
 * Is it a method or a function?
 * 
Close! A method is a function with the difference that the method is called on something.
For example .toUpperCase() is a method called on string.
 */

//map
//filter
//find
//reduce
//slice

//from

//================================================================
//splice
//changes the contents of an array by removing or replacing existing elemnts
//and/or adding new elements
//takes 3 arguments
//I-იმ ელემენტის ინდექსი რომლიდანაც ვიწყებთ წაშლას
//II-რაოდენობა თუ რამდენი ელემენტის წაშლა გვინდა
//III-ის ელემენტი რომლის ჩამატებაც გვინდა
//Ex.
var ara = [1, 2, 3, 4, 5, "hi w", "hi w2"];
ara.splice(0, 1); //წაიშალა 0 ინდექსზე მდგომი 1 ელემენტი
console.log(ara); //[2, 3, 4, 5, 'hi w', 'hi w2']

ara.splice(1, 0, "Hellow"); //0 ნიშნავს რომ არაფერი წაგვიშლია და რა ინდექსიც მივეცით იმაზე ჩაამატა ანუ 1 ინდექსი რიგით 2
console.log(ara); //[ 2, 'Hellow', 3, 4, 5, 'hi w', 'hi w2' ]

//================================================================
//map
var names = ["mariami", "gioRgi"];
var upperNames = names.map(function (name) {
  return name.toUpperCase();
});
console.log(upperNames);
console.log("---------------------");

//double it
var doubleNumbers = [4, 2, 5, 8];

var doubled = doubleNumbers.map(function (number) {
  return number * 2;
});
console.log(doubled);
console.log("---------------------");

//================================================================
//filter
var nums = [9, 5, 14, 3, 11]; //calle it 5 times

var numbersAboveTen = nums.filter(function (number) {
  return number > 10;
});
console.log(numbersAboveTen);
console.log("---------------------");
//will get another array back, with some of the items from orig array, new array

var years = [2000, 2008, 2020, 2023];

var yearlowerthen2010 = years.filter(function (year) {
  return year >= 2010;
});

console.log(yearlowerthen2010);
console.log("---------------------");

//temperature
function getPositiveTemperatures(temperatures) {
  return temperatures.filter(function (temperature) {
    return temperature > 0;
  });
}

console.log(getPositiveTemperatures([-5, 12, 3]));
console.log(getPositiveTemperatures([1, -3, -2, 4, 10]));
console.log("---------------------");

//================================================================
//reduce
var grades = [10, 15, 5];
var sum = grades.reduce((total, current) => {
  return total + current;
}, 0);

//total is 0 ... 0 + 10
//current is first item in array
//then total is 10

//addition ++++
let grades1 = [10, 5, 15, 20];

let sum1 = grades1.reduce((total, current) => {
  console.log(`Total is ${total}`);
  console.log(`Current is ${current}`);
  console.log("---------------------");
  return total + current;
}, 0);

console.log(`Sum is ${sum1}`);
console.log("---------------------");

//multiplication ****
var numbers = [5, 2, 10];

var result = numbers.reduce((total, current) => {
  return total * current;
}, 1);
console.log(result);
console.log("---------------------");

const multiplyNumbers = (numbers) => {
  return numbers.reduce((total, current) => {
    return total * current;
  }, 1);
};

console.log(multiplyNumbers([10, 20, 30]));
console.log(multiplyNumbers([2, 4, 2, 10]));

//================================================================

//join(glue)
//The array .join(glue) method returns a string of the array elements separated by the glue.
var groceries = ["Apple", "Peach", "Tomato"];
groceries.toString(); // "Apple,Peach,Tomato"

var groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"

//================================================================
// Set
// How does set works

/**
 * ჯავასკრიპტში არსებობს კიდევ ერთი მეთოდი სეტი, რომელიც საშუალებას გვაძლევს 
მასში შევინახოთ უნიკალური ჩანაწერები მისი სახელია Set 
ერთიდაიგივე რაღაცეები ა რემორედება სეტში
როგორ შევქმნათ Set

სეტის შექმნა შეიძლება შემდეგნაირად:

გადავცეთ მასივი new Set()-ს;
სეტის შექმნის შემდეგ შეგვიძლია დავამატოთ ახალი ჩანაწერები სეტს add() მეთოდის დახმარებით
 */

// სეტის შექმნა
const cars = new Set([`Ferrari`, `Porsche`, `Subaru`]);

// ახალი ელემენტის დამატება
cars.add(`BMW`); //აქ რომ ისევ Ferrari დავამატოთ არარ დაემატება იმიტომ რომ უნიკალური უნდა იყოს

// სეტის ელემენტების დაბეჭვდა
cars.forEach((car) => {
  console.log(car);
});

// delete(); -- 	ელემენტის წაშლა სეტიდან
// has(); --	შემოწმება, არის თუ არა სეტში ელემენტი. (აბრუნებს ბულეანს true ან false)
// size; --	აბრუნებს სეტის სიგრძეს
// values();	-- აბრუნებს იტერატორს, ყველა ელემენტით, რომელიც შენახულია სეტში

//================================================================
//filter
//------
// const grades = [10, 2, 21, 35, 50, -10, 0, 1];

// // get all grades > 20
// const result = grades.filter(grade => grade > 20); // [21, 35, 50];

// // get all grades > 30
// grades.filter(grade => grade > 30); // [35, 50]


//================================================================
// JUNE 21st 2023
//================================================================



// Let's combine 2 arrays

console.log("Combine two arrays");

const numArr1 = [1, 2, 3, 4, 5];

const numArr2 = [6, 7, 8, 9, 10];

const numArr3 = numArr1.concat(numArr2);

console.log(numArr3);

const arrRes = [...numArr1, ...numArr2];
console.log("Using spread operator.." + arrRes);

//  Remove dublicates from array

const numArr4 = [1, 2, 3, 4, 5, 2, 1];

const numArr5 = [6, 7, 8, 9, 10, 9];

// Loop this element and check if it contains duplicate
const newArr6 = [];
for (let i = 0; i < numArr4.length; i++) {
  if (!newArr6.includes(numArr4[i])) {
    newArr6.push(numArr4[i]);
  }
}

for (let i = 0; i < numArr5.length; i++) {
  if (!newArr6.includes(numArr5[i])) {
    newArr6.push(numArr5[i]);
  }
}
console.log("New array.." + newArr6);

// Or we can use SET bc set will itself rejected duplicateed arrays, set is unique

let myset = new Set([...numArr1, ...numArr2])
console.log("We used set here.." + myset)

// or combine first and then set
 let combine = [...numArr1, ...numArr2];
let newset = new Set(combine)
console.log("We have combined here first and then set.." + newset)

const resArray = [...newset]
console.log(resArray + " go back to array")

//================================================================

// Map

const personss = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

personss.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
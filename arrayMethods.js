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
console.log(ara) //[ 2, 'Hellow', 3, 4, 5, 'hi w', 'hi w2' ]

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

var numbersAboveTen = nums.filter(function(number) {
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
    return temperatures.filter(function(temperature) {
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
//Arrow function VS Normal function example in obj

var person = {
  firstname: "Tom",
  lastname: "Hank",
  printName: () => {
    console.log("Firstname: " + this.firstname + "Lastname: " + this.lastname);
  },
};

person.printName();
console.log("-----------------------");

//this will be undefind because arrow function does not have it's own this
// normal function will give Firstname: Tom Lastname: Hank
//Let's see

var person1 = {
  firstName: "Mariam",
  lastName: "Ostatishvili",
  printFullname: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`); 
  },
};

person1.printFullname(); //My full name is Mariam Ostatishvili

console.log("-----------------------")

var person2 = {
  fName: "Mari",
  lName: "Ost",
  getFullName: function () {
    console.log("First name is " + this.fName + " Last name is " + this.lName);
  },
};
person2.getFullName(); //First name is Mari Last name is Ost

//==================================================================================

// when we have regular function do not use -> this <- to clg patrameters
// also additional parameter gives you undefind

let address = function (buildingName, street) {
  console.log( "Building: " + buildingName +  " street: " +  this.street +  " country: " +  this.country);
};

address("Palladium", "Times Square"); //Building: Palladium street: undefined country: undefined (we don't have country)

console.log("-----------------------------")

function one (city, streetName){
  console.log("City " + this.city + " Street " + streetName);
}

one("Tbilisi", "Vaja P.") //City undefined Street Vaja P.

//==================================================================================

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Call Apply Bind
console.log("------------Call/Apply------------");
//you can use call() method to control what this refers to


var game = {
  title: "Spider Man",
  year: 2023,
};

function info() {
  console.log(`${this.title} was released in ${this.year}`);
}

info.call(game); //Spider Man was released in 2023

//let's pass additional arguments inside our function call

function info1(platform, character) {
  console.log(
    `${this.title} was released in ${this.year}, for ${platform}, it features the character ${character}`
  );
}
info1.apply(game, ["SEGA", "Sonic"]); //Spider Man was released in 2023, for SEGA, it features the character Sonic

// difference between call and apply is how we call additional arguments
// call - we can write them out as normal
// apply - they need to be inside of an array

console.log("------------Bind------------");

var gameInfo = info.bind(game, "SEGAA", "Sonic.");
gameInfo();
//Permanent change that will store in variable ამ შემთხვევაში var gameInfo და მერე ფუნქციასავით იძახებ.

console.log("-----------------------");

var myInfo = {
  myName: "Mariam",
  mylastName: "Ostatishvili",
  year: 1988,
};

function personalInfo(City, State) {
  console.log(
    `My name is ${this.myName} ${this.mylastName} and I was born in ${this.year}. I live in ${City}, state of ${State}.`
  );
}

personalInfo.apply(myInfo, ["Denver", "Colorado"]); //My name is Mariam Ostatishvili and I was born in 1988. I live in Denver state of Colorado.

let person = {
  fName: "Mari",
  lName: "Ost",
  state: "CO"
}

let person2 = {
  fName: "Gio",
  lName: "Rgi",
  state: "NY"
}

let fullName = function (city, country){
  console.log(`${this.fName} ${this.lName} lives in ${city}, ${country} in ${this.state}`)
}
fullName.call(person2, "Brooklyn", "USA"); //Gio Rgi lives in Brooklyn, USA in NY
fullName.call(person, "Brooklyn"); //Mari Ost lives in Brooklyn, undefined in CO
// if we don't pass country argument here we'll get undefined
fullName.apply(person, ["Brooklyn", "Georgia"]); 

// this როდესაც ვუწერთ მაშინ მოაქვს ობჯექტის ინფორმაცია, თუ არ გადავცემთ this-ს ობჯექტში მოაქვს undefined
// თუ პარამეტრებში გადავცემთ დამატებით რამეს მაშინ არგუმენტებშ უნდა სახელები (მაგ: პარამეტრებშ city არგუმენტად "Denver") clg-ში this-ის გარეშეა
// თუ პარამეტრებში გვაქვს (city) და არგუმენტში არ გადავცემთ რომელიმეს მოგვცემს undefined-ს

// call and apply looks like prototypes
// call and apply ONLY for ONE time uses

console.log("------------TASK------------")

/*
* TASKS

1. Creat am object called book and add a title and author property.
Next creat an info function that logs "title was written by author" to the console.
Use call() to log the sentence to the console.

2. Update info to include the year or release, i.e. "..and was released in year".
Use apply() to update the invocation

3. Finally, use bind() and invoke the function with the new variable.

*/

var book = {
  title: "Jungle Book",
  author: "Rudyard Kipling"
};

var inffo = function(year){
  console.log(
    this.title + " was written by " + this.author + " and was released in " + year
  );
}

inffo.call(book); //comment this out, or u/ll get undefined for year!
// 1.Jungle Book was written by Rudyard Kipling
inffo.apply(book, ["1967"]);
// 2.Jungle Book was written by Rudyard Kipling and was released in 1967

var jungleBookInfo = inffo.bind(book, "1967");
jungleBookInfo();
//Jungle Book was written by Rudyard Kipling and was released in 1967
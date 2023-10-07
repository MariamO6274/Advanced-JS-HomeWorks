var printfullName = function (city, country) {
  console.log(
    "FirstName: " +
      this.name +
      " LastName: " +
      this.lastname +
      " Lives in: " +
      city +
      " ," +
      country
  );
};

var person1 = {
  name: "Tom",
  lastname: "Hank",
};

var person2 = {
  name: "Sam",
  lastname: "Johnson",
  // printfullName: function() {
  //     console.log("FirstName: " + this.name + " LastName: "+ this.lastname);
  // }
};
var person3 = {
  name: "person3",
  lastname: "p3LastName",
  // printfullName: function() {
  //     console.log("FirstName: " + this.name + " LastName: "+ this.lastname);
  // }
};

// person1.printfullName("Paris");

// Function borrowing concept
// person2 and person3 are borrowing the function from person1

// printfullName.call(person2, "NewYork", "USA");
// printfullName.call(person3, "Pune", "India");

// let details = ["NewYork", "USA"];
// printfullName.apply(person2, details);
// printfullName.apply(person3, ["Pune", "India"]);

// bind
// Bind will return us a new FUNCTION
let printPerson2Function = printfullName.bind(person2);
//console.log(newPrintFunction);

printPerson2Function("Pune", "India");
printPerson2Function("Paris", "France");

let printPerson1Function = printfullName.bind(person1);
printPerson1Function("Pune", "India");
printPerson1Function("Paris", "France");

let printPerson1Function2 = printfullName.bind(person1, "Pune");

//======================================================
// How copies help us to create new meaningful functions
//======================================================
//Function Curring

let multiply = function () {
  console.log(this.x * this.y);
};

multiply(2, 3);

// Suppose I want to create a function which should take one number
// as input and return me multiple of 2 or 3 or 4

let obj = {
  x: 2,
  y: 4,
};

var multiply2 = multiply.bind(obj, 3);
multiply2(3);
multiply2(5);

let add = function (x, y) {
  console.log(x + y);
};

var add2 = multiply.bind(this, 3);
add2(5);

// Important to NOTE:
// first argument of bind will freeze your context (which object to refer to if your function has 'this' keyword)
// Seconnd argument onwards, the bind will freeze your arguments of function
// So in above case, multiply function is using only this.x and this.x, it is not using any passed arguments (x,y),
// So here the object that you pass to bind will freeze the this.x and this.y value. Any arguements passed will not be used
//
// however in add function, it is using only the arguments
// so here we can freeze the arguments with bind. multiply.bind(this, 3);
// It will freeze the context as 'window' and first arguments will be frozen as 3
// So now it will accept only second argument add2(5);

//=============================================
console.log(
  "<---------------------------Home Work--------------------------->"
);

// Date : 4 May 2023
// call APply bind Practice steps
// 1. create some person obj with firstname, lastname and printDetails function
//          Remember to use 'this' in your function
// 2. Create another person obj, and try to borrow the function from person1
// 3. Use call and apply methods on person obj
// 4. Introduce at least 2 arguments to your printDetails function.
// 5. Pass these arguments through call, apply methods
// 6. Now use bind to create copies of function (with some context)

var printDetails = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastName} lives in ${city}, ${country}`
  );
};

var person = {
  firstname: "Mari",
  lastName: "Ostatishvili",
};

var anotherPerson = {
  firstname: "Mariam",
  lastName: "Ostatishvili",
};

// printDetails.call(anotherPerson, "Colorado", "USA");
printDetails.apply(anotherPerson, ["Colorado", "USA"]);

console.log("practice");

// var person = {
//     firstName: "Mariam",
//     lastName: "Ost",
//     getFullName: function (){
//         var fullName = `${this.firstName} ${this.lastName}`
//         return fullName;
//     }

// }

// var logName = function(lang1, lang2) {
//     console.log("Logged: "+ this.getFullName());
// }

// var logPersonName = logName.bind(person);
// logPersonName();


//if you add mymap to diff file it will still work in proto
var arr3 = [];

arr3.mymap();

//=======================================================================================


// CALL APPLY BIND

// 'this'.
// this key word can point to the global object in some cases,
// and in other cases it can point to the object that contains the function,
// if the function is a method attached to an object.

let person = {
    firstName: "Tom",
    lastName: "Doe",
    printfullName: function() {
        let fullName = this.firstName + " " + this.lastName
        return fullName;
     
    }
}


// I have this object with these two properties and this method.
// The method uses the this keyword.
// Since this is a method on an object an this function is executed
// this key word will point to this whole object the person object.

let printfullName = function (city, country) {
  console.log(
    "FirstName: " +
      this.name +
      " LastName: " +
      this.lastname +
      " Lives in: " +
      city +
      " ," +
      country
  );
};


//=======================================================================================


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
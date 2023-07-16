var person = {
  firstname: "Mari",
  lastname: "Ostatishvili",
  printName: () => {
    console.log("Firstname: " + this.firstname + "Lastname: " + this.lastname);
  },
};

person.printName();

//this will be undefind because arrow function does not have it's own this
// normal function will give "Mari Ostatishvili"

var person1 = {
  firstName: "Mariam",
  lastName: "Ostatishvili",
  printFullname: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`); 
  },
};

person1.printFullname(); //My full name is Mariam Ostatishvili

////////////////////////////////////////

// when we have regular function do not use -> this <- to clg patrameters
// also additional parameter gives you undefind

let address = function (buildingName, street) {
  console.log( "Building: " + buildingName +  " street: " +  this.street +  " country: " +  this.country);
};

address("22", "Washington St"); // Building: 22 street: undefined country: undefined
console.log("-----------------------------")

function one (city, streetName){
  console.log("City " + this.city + " Street " + streetName);
}

one("Tbilisi", "Vaja P.") //City undefined Street Vaja P.

// this როდესაც ვუწერთ მაშინ მოაქვს ობჯექტის ინფორმაცია, თუ არ გადავცემთ this-ს ობჯექტში მოაქვს undefined
// თუ პარამეტრებში გადავცემთ დამატებით რამეს მაშინ არგუმენტებშ უნდა სახელები (მაგ: პარამეტრებშ city არგუმენტად "Denver") clg-ში this-ის გარეშეა
// თუ პარამეტრებში გვაქვს (city) და არგუმენტში არ გადავცემთ რომელიმეს მოგვცემს undefined-ს
////////////////////////////////////////


let homeAddress = function (buildingName, street) {
  console.log(
    "Building: " +
      buildingName +
      " street: " +
      street +
      " country: " +
      this.country
  );
};

let giorgiAddress = {
  buildingName: "Empire building",
  street: "Main street",
  country: "USA",
};
let mariamAddress = {
  buildingName: "Red building",
  street: "Museum street",
  country: "Geo",
};

// call is used to call functions
//homeAddress("Empire building", "Main street");

homeAddress.call(giorgiAddress, "Empire building", "Main street");

homeAddress.call(mariamAddress, "Empire building");



































// last

// function person(fn, ln) {
//   this.fn = fn;
//   this.ln = ln;
//   this.getName = () => {
//     console.log(this.fn + " " + this.ln);
//   };
// }

// var fname = person("mari", "ostat");
// fname.getName();

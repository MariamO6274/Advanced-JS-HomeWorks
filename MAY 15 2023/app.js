//==================================================================================

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! prototypes


// In order to reduce memory space we use prototypes 
// Prototype is a superpower


// If we want to have only one function instance associated with every animal object.
// What do we do?

// We can use bind
// we can use Prototype

var person1 = {
  firstName: "Mari",
  lastName: "Ostatishvili",
  year: 1988,
};

var person2 = {
  firstName: "Giga",
  lastName: "Lelashvili",
  year: 1989,
};

var person3 = {
  firstName: "Lazare",
  lastName: "Lelashvili",
  year: 2018,
};

var person4 = {
  firstName: "Nikolas",
  lastName: "Lelashvili",
  year: 2020,
};

Object.prototype.familyFullname = function () {
  console.log("My family member is: " + this.firstName + " " + this.lastName);
};

person1.familyFullname();
person2.familyFullname();
person3.familyFullname();
person4.familyFullname();

// call-ისგან განსხვავებით აქ ჯერ ვიღებთ obj სახელს მერე ფუნქციას და ვიძახებთ, Object.prototype.familyFullname 
// every js obj can accese to Object.prototype when you write this way (Object.prototype)



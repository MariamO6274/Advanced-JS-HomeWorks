function outter() {
  var num = 10;

  function inner() {
    var num2 = 20;

    return num2;
  }

//   var result = inner();
//   return result;

return inner();
}
var result2 = outter();
/////


function veichale(){
    function car() {
        
    }

}

//stuff from Work file
function outer1() {
  var num = 10;

  function inner1() {
    var num2 = 20;
    return num2;
  }
  var j = inner1();
  return j; // 20
}

var i = outer1();

console.log(i);

// function outer() {
//   var num = 10;

//   function inner() {
//     var num2 = 20;
//     return num2;
//   }
//   return inner;
// }

// var i = outer();
// console.log(i);

//===================================================================

function outerFun() {
  console.log(arguments);
  let innerFun = () => {
    console.log(arguments);
  };
  innerFun("Hello", "Coder");
}
outerFun("welcon", "to", "Scaler");

//===================================================================

// function greet () {
//     var fun = function () {
//         console.log("iner")
//     }
//     return fun;
// }
// var e1 = greet();
// e1();
//===================================================================

function greet(name1) {
  return function () {
    console.log(name1);
    console.log("iner");
  };
  //return func
}
var e1 = greet("TOM");
e1();
//===================================================================

function greet(name1) {
  var count = 10;

  return function () {
    console.log(name1);
    console.log(count);
    console.log("iner");
  };
  //return func
}
var e1 = greet("TOM");
e1();
//===================================================================

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

e1();
//===================================================================
//Check this for tomorrow in miro
let obj = {
  greetMes: "welcome",
  funOne() {
    console.log(this);
  },
  funTwo: () => {
    console.log(this);
  },
};
obj.funOne();
let fun = obj.funOne;
fun();
obj.funTwo();
let a = obj.funTwo;
a();
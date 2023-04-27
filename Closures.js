// 27 April

// Closures

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

//console.log(i);

function outer() {
  var num = 10;

  function inner() {
    var num2 = 20;
    return num2;
  }
  return inner;
}

var i = outer();
console.log(i);

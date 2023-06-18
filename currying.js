// let result = add(3, 5);

// let result2 = operate(3, 5, 7);

function operate(a) {
  return function (b) {
    return function (c) {
      return a + b * c;
    };
  };
}
// If you write the arrow function in single line then you may skip the return statement
// Its called as implicit return

var operate1 = (a) => (b) => (c) => a + b * c;

// BODMAS rule
let result1 = operate1(3)(5)(7);

console.log(result1);

// function add(x, y) {

// }

// add(3, 5);

var word = "hhhhiiyyyyyuuuuubbbb";

// 4h2i5y5u4b



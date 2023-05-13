//Which of these methods modifies the original array?

const arr = [1, 2, 3];

arr.map((x) => x * 10); //[10, 20, 30]
arr.filter((x) => x % 2 !== 0); //[1, 3]
arr.find((x) => x !== 2); //1
arr.reduce((acc, cur) => acc + cur); //6
arr.slice(1, 2); //[2]
arr.splice(1, 2); //(2) [2, 3]

//================================================================

//splice changes the contents of an array by removing or replacing existing elemnts
//and/or adding new elements
//takes 3 arguments

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rebbit"];

var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);
//{dog: 2, chicken: 3, cat: 1, rebbit: 1}

//================================================================

//what will be the output?

let obj = {
  greetingMessage: "Welcome to Scaler Academy",
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

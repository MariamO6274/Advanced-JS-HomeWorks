// practice practice
// promises
// callbacks
// distructure-array
// event loop (output)

let promise = new Promise(function (resolve, reject) {
  console.log("Promise was called ...");
})
  .then(function () {
    resolve("succses");
  })
  .then(function () {
    resolve("yay");
  })
  .catch(function () {
    reject("error");
  });

// A function returns a promise : This means that that function is meant to get some data from database
// So it may take some time
// Once the promise is fulfilled, you will get the desired data.
// Then u may use this data to build some meaningful UI
// Incase the promise is not fulfilled (rejected), then you can stop building the UI and show error

let p1 = new Promise(function (res, rej) {
  console.log("Let's print promise");
})
  .then(function () {
    res("succes");
  })
  .catch(function () {
    rej("error");
  });

/////////////////////////////////////////////////////////

let promise1 = new Promise((resolve, reject) => {
  if (1 > 2) {
    resolve("succes");
    return;
  }
  reject("error");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

//////////////

let promise2 = new Promise((res, rej) => {
  console.log("I am promise 2..");
  res("yay");
  rej("error");
});

promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//////////////

let promise3 = new Promise((resolve, reject) => {
  console.log("I am romise 3...");
  resolve("got success");
  reject("got error");
});

promise3.then((x) => console.log(x)).catch((error) => console.log(error));

//////////////

let promise4 = new Promise((resolve, reject) => {
  console.log("I am promise 4 ...");
  resolve("Success");
  reject("Error");
});

promise4
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//////////////

let promise5 = new Promise((res, rej) => {
  console.log("I am promise 5..");
  res("succesfully");
  rej("error");
});

promise5
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//////////////

let promise6 = new Promise((resolve, reject) => {
  console.log("I am promise 6..");
  resolve("Succes");
  reject("Error");
});
promise6.then((x) => console.log(x)).catch((error) => console.log(error));

//////////////

let promise7 = new Promise((resolve, reject) => {
  console.log("I am promise 7");
  if (5 < 10) {
    return;
    resolve("Success");
  }
  reject("Error");
});

promise7.then((value) => console.log(value)).catch((error) => error);

//////////////

let promise8 = new Promise((resolve, reject) => {
  console.log("I am promise 8..");
  setTimeout(() => {
    if (2 > 0) {
      resolve("yay");
      return;
    }

    reject("error");
  },4000);
});

promise8
  .then(value => console.log(value))
  .catch((error) => console.log(error));

/////////////////////////////////////////////////////////

function greet(saysomething) {
  return function (name) {
    console.log(saysomething + " " + name);
  };
}
let sayHi = greet("Hi");
sayHi("Mariam");

//////////////

function greet1(sayhello){
    return function(yourName){
        console.log( sayhello + " " + yourName)
    }
}
let sayHey = greet("Good morning")
// sayHey("Mariamoo")
console.log(sayHey("Mari"))
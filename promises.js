// Promise

// When do we need async code in project?
// One very common need is when we want to make out project or website INTERACTIVE

// A promise ca be created with new Promise()
// Promise take a function as an argument

function executor(resolve, reject) {
  console.log("Executor function called....");
  ///

  // Do some logic.  Call some webservice to get some data
  // Example: youtube API to get some details of videos

  // This youtube API will retrn some response
  // The response can be good or error
  // You need to undertsnad what response it has returned.
  // Is it good or error

  // If API response is good.
  //  Then call resolve and pass the response to it
  //resolve(APIresponse);

  // If my logial outcome is not good, then call rejet() and pass the error to it
  setTimeout(() => {
    //reject(" The API failed to return video list...");
    resolve();
  }, 3000);
}

let p1 = new Promise(executor);

p1.then(function(youtubeAPIResponse) {
    console.log("First Then called.....");

    // Process the response
    // take the details for youtube API and display the video list

    return new Promise(function (resolve, reject) {
        resolve("newResponse");
        //reject();
    })

}).then(function(res) {
    console.log(" Second then called......") ///logical seperation of your code
    //fetch1();
}).then(function() {
    console.log(" Third then called......"); /// every next then is defending on previouse then's ecexution

}).then(function() {
    console.log(" Fourth then called......") /// every then follows only one then (fourth followes third)
}).then(function() {
    console.log(" Fifth then called......") /// fifth followes fourth, you controlling thens based on promes results
})

p1.catch(function(errMsg){
    console.log(errMsg);
})


//=================
// Promise is for future commitment
// fulfill the promise (resolve)
// break the promise (reject)
// YOU as a developer have the CONTROL to fulfill or break promise
// YOU as a developer have to call resolve() or reject() method.
//
// Where to call these methods?
// You need to call these in your executor function.

// If resolved, then it will execute the p1.then part of your code
// If rejected, then it will execute the p1.catch part of your code

// How do you pass the APIresponse from Promise to the 'then' callback function
//    You can directly pass it as an argument to resolve function

// How do you pass the APIresponse from Promise to the 'catch' callback function
// You can directly pass it as an argument to reject function

//=================

function fetch1() {
  return new Promise(function (resolve, reject) {
    //resolve();
    // call some another webservice

    // resolve ("Pass data of new webservice")
    reject();
  });
}



//=========================== Promises Practis

function hold(resolve, reject) {
  console.log("This is a main function to be called..");

  setTimeout(() => {
    resolve();
  }, 3000);
}

let promise = new Promise(hold);

promise.then(function (anything) {
  console.log("If it resolves call..");

  return new Promise(function (resolve, reject) {
    reject();
  });
});

promise.catch(function (error) {
  console.log(error);
});
//============
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

console.log(wait(1000));


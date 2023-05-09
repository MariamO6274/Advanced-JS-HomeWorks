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

p1.then(function (youtubeAPIResponse) {
  console.log("Then called.....");

  // Process the response
  // take the details for youtube API and display the video list

  return new Promise(function (resolve, reject) {
    //resolve();
    reject();
  });
}).then(function () {
  console.log(" Second then called......");
});

p1.catch(function (errMsg) {
  console.log(errMsg);
});


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


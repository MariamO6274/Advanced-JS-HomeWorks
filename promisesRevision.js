let p2 = new Promise(function () {
  console.log("First Promise function called....");

  // Getting some information from database
});

p2.then(function () {
  //.... Showing the info from database
  //
  //
  //
  //
});

// A function returns a promise : This means that that function is meant to get some data from database
// So it may take some time
// Once the promise is fulfilled, you will get the desired data.
// Then u may use this data to build some meaningful UI
// Incase the promise is not fulfilled (rejected), then you can stop building the UI and show error

// Example:
// fetch API returns a promise
//

// amis qvevit

//EUR Button
function getRate() {
  fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/")
    .then(function (response) {
      console.log(response);
      response.json().then((result) => {
        console.log(result);

        // Post process the response
        // console.log(result[0].currencies[13]);

        let allCurrencies = result[0].currencies;

        console.log(allCurrencies);
        let EurCurrency = "";
        console.log(EurCurrency);

        allCurrencies.forEach((currency) => {
          if (currency.code == "EUR") EurCurrency = currency;
        });

     

        console.log(EurCurrency);

        console.log("Rate: " + EurCurrency.rate);

        document.getElementById("currRate").innerHTML = EurCurrency.rate;
      });
    })
    .catch(function (message) {
      console.log(message);
    });
}

//amis zevit nagdi
//amis qvemot meore induristvis

//INR Button
function getInrRate() {
  fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/")
    .then(function (response) {
      console.log(response);
      response.json().then((result) => {
        console.log(result);

        let allCurrencies = result[0].currencies;

        console.log(allCurrencies);
        let IndianInr = "";
        console.log(IndianInr);

        allCurrencies.forEach((currency) => {
          if (currency.code == "INR") IndianInr = currency;
        });

        console.log(IndianInr);

        console.log(" Indian INR Rate is: " + IndianInr.rate);

        document.getElementById("inrRate").innerHTML = IndianInr.rate;
      });
    })
    .catch(function (message) {
      console.log(message);
    });
}

// function getRate() {
//   fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/")
//     .then(function (response) {
//       console.log(response);
//       response.json().then((result) => {
//         console.log(result);

//         // Post process the response
//         // console.log(result[0].currencies[13]);

//         let allCurrencies = result[0].currencies;

//         console.log(allCurrencies);
//         let EurCurrency = "";
//         console.log(EurCurrency);

//         let IndianInr = "";

//         allCurrencies.forEach((currency) => {
//           if (currency.code == "EUR") {
//             EurCurrency = currency;
//           } else if (currency.code == "INR") {
//             IndianInr = currency;
//           }
//         });

//         console.log(EurCurrency);
//         console.log(IndianInr);

//         console.log("EUR rate: " + EurCurrency.rate);
//         console.log("INR rate: " + IndianInr.rate);

//         document.getElementById("currRate").innerHTML =
//           EurCurrency.rate;
//         document.getElementById("inrRate").innerHTML =
//           IndianInr.rate;
//       });
//     })
//     .catch(function (message) {
//       console.log(message);
//     });
// }

//=================================================

// //Fetch

// let checknotifications = function() {
    
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    
// }

// let result = checknotifications();
// console.log(result);

// //=======================

// function fetchFunction() {
//   return new Promise(function (resolve, reject) {
//     resolve();
//     //reject();
//   });
// }
//====================

// // function user() {
// //   fetch("https://reqres.in/api/user")
// //     .then((res) => resn.jason())
// //     .then((data) => console.log(data));
// // }
// // user();

fetch("https://reqres.in/api/user")
  .then((res) => {
    if (res.ok) {
      console.log("Working...");
    } else {
      console.log("Not Working");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));

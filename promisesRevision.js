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

        let domParagraph = (document.getElementById("currRate").innerHTML =
          EurCurrency.rate);
      });
    })
    .catch(function (message) {
      console.log(message);
    });
}

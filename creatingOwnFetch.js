// Creators code
(function () {
  console.log(this); // window
  this.myFetchJson = function (url) {
    return new Promise(function (resolve, reject) {
      // Write my own logic here

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        });
      // If my logic is good, I should call resolve

      // Else if my logic is not good, I can call reject
    });
  };

  this.myFetchText = function (url) {
    return new Promise(function (resolve, reject) {
      // Write my own logic here

      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          resolve(text);
        });
      // If my logic is good, I should call resolve

      // Else if my logic is not good, I can call reject
    });
  };
  console.log("myFetch function");
})();

// Consumer code
// Consumer should first decide the url to use/
// Pass the url to the fetch function

// Consumer 1: Mariam
myFetchJson(
  "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/"
).then((json) => {
  console.log(json);
});

// Consumer 2: Giorgi
myFetchJson("https://dummyjson.com/products").then((json) => {
  console.log(json);
});

// Consumer 3: Mayur
myFetchText("https://dummyjson.com/products").then((text) => {
  console.log(text);
});

// POints to remember while using promises
// API creator uses return new Promise

// API user/consumer calls that API and uses 'then'

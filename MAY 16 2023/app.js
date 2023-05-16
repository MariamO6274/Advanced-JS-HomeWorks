/**
                                                    
16 MAY 2023

Create nested div like below, using plain JS
div
    <p>
    <div>
        <p>
        <div>
            <a>

Revise event listenserns
onCLick
onChange
focus
onDblClick
ondrag
and few more if you like
Create hyour react application
npx create-react-app
npm start
Try playing around with Babel tool
 */

let clickExample = document.querySelector("#clickExam");
let submitExample = document.querySelector("#submitExam");
let textExample = document.querySelector("#textExam");
let changeExample = document.querySelector("#changeExam");

clickExample.addEventListener("click", function () {
  console.log("I am a click button!");
});

submitExample.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(textExam.value);
});

changeExample.addEventListener("change", function () {
  console.log(changeExam.value);
});

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
let focusExample = document.getElementById("form");
let doubleClkExample = document.getElementById("doubleCLickExam");

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

focusExample.addEventListener(
  "focus",
  function (e) {
    console.log(e.target);
    e.target.style.background = "gray";
  },
  true
);

doubleClkExample.addEventListener("ondblclick", function () {
  console.log("I am a double click button");
});

//Create nested div
let creatDiv = document.createElement("div");
console.log(creatDiv);

//Add P element to Div
let creatPelement = document.createElement("p");
creatDiv.appendChild(creatPelement);
console.log(creatPelement);
document.body.appendChild(creatDiv); //add to html body 

// Event listeners
// What are event listeners
// How to create event listeners


const button = document.getElementById("event-tester");
button.addEventListener("click", (eventDetails) => {
  console.log("Button was clicked");
  console.log(eventDetails);
});

console.log("hello");

// Event Bubbling
// Event Capturing/Trickkling-means top to bottom
// Both are event propagation 

// Let add some events on Divs
const grandparentDiv = document.getElementById("outermost");
grandparentDiv.addEventListener('click', () => {
    console.log("Grandparent clicked")
}, false)

const parentDiv = document.getElementById("inner");
parentDiv.addEventListener("click", (e) => {
   // e.stopImmediatePropagation();
   // e.stopPropagation()
  console.log("Parent clicked");
}, true);

const childDiv = document.getElementById("innermost");
childDiv.addEventListener("click", () => {
  console.log("Child clicked");
}, false);


// Event delegation 
// when you have 100 buttons

const eventDelegationDiv = document.getElementById("eventdelegationo");
eventDelegationDiv.addEventListener('click', (eventDetails) => {
    console.log(eventDetails.target.innerText);
    console.log('Item Click')
})
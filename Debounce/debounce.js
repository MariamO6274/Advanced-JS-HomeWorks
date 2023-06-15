// const { clearTimeout } = require("timers");

let count = 0;

function getData() {
  console.log("Data called...", count++);
}

//user takes pause so we don't waste resaurses

const betterFunction = debounce(getData);

//condition is that we don;t want to call getData() all the time
// call it after some delay

//introduce a delay to call getData function
function debounce(getData) {
  let timerID;

  return function () {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      getData();
    }, 1000);
  };
}
//if user pauses for 1 sec then call this function


//we need to cencele timeout and create newSet time
//if it's present than directly create set timout
// we do it before creation (last created timout) line 21

//only one setTimeout evrytime when we call/ deleting old setTimout and then creating new one
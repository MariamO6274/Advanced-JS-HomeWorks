
// function getDescription(text){
//     console.log(text)
//     if(text.length > 10){
//         return text.substring(0, 10) + "..."
//     }
//     return text
// }
// console.log(getDescription(Hello))


// 1. Complete the function useCalculator such that it adds the "Calculator" string to the apps array it receives. Then, return the apps array.
function useCalculator(apps){
    apps.push("Calculator")
    return apps
}
console.log(useCalculator(["Clock", "Twitter"])); 
// ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); 
// ["Weather", "Calculator"]



// 2. Complete the function such that the app variable is added to the apps array. Then, return the apps array.
function useApp(apps, app){
    apps.push(app)
    return apps
}
console.log(useApp(["Clock", "Twitter"], "Firefox")); 
// ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]


// 3. Complete the function getFirstApp such that it returns the first element from the apps array it receives as a parameter.
function getFirstApp(apps) {
  return apps[0];
}
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"

// 4. Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.




//================================================================
// This is how we call it in terminal
// node 1learnJS.js
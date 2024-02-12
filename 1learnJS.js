
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
function getLastApp(apps) {
  return apps[apps.length - 1];
}
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"

// ARRAYS
// 5. Complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter. We haven't seen reduce yet.
function sumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });
  return sum;
}
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

// 6. Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers from the numbers parameter it receives.
function sumPositiveNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    if (number >= 0) sum += number;
  });

  return sum;
}
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5

// 7. Complete the function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives.
//The function should also work for negative numbers.
function sumOddNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    if (number % 2 !== 0) {
      sum += number;
    }
  });
  return sum;
}
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

// FILTER
// 8. Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
function getPositiveTemperatures(temperatures) {
  return temperatures.filter((temp) => {
    return temp >= 0;
  });
}
// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]


// 9. Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).
function getFreezingTemperatures(temperatures) {
    return temperatures.filter(function(temperature){
        return temperature < 0;
    })

}

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]











//================================================================
// This is how we call it in terminal
// node 1learnJS.js
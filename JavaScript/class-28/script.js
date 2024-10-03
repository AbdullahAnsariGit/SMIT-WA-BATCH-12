// Operators
// == - Compare value based
// === - Compare value and type based
// > - Check k value greater than h k nh
// < - Check k value less than h k nh
// >= Check k value bari ya barabar
// <= Check k value choti ya barabar
// != Not equal to
//  = Assign a value to variable
// || (logical or operator) Check both value agr left wali falsy value bhi h tb bhi yh right check krega
// && (logical and operator)- Check left value if true then check right other wise return false

var weight = 299;
var time = 6;
var distance = 99;
var velocity = 26;
var torque = 68;
var momentum = 96;
momentum = 75;
time = 9;
torque = 62;

// console.log(weight < 300 && time > 6 && momentum >= 96 && torque == 68);
// if (weight > 300 && time < 6) {
//   alert("Come to our tryout!");
// } else {
//   alert("Come to our cookout!");
// }

// Task: Create a simple weather advisor

// Write a JavaScript program that asks the user for the current temperature and whether it's raining. Based on the input, the program should advise the user on what to wear:

// If the temperature is above 30°C and it's not raining, the advice should be "Wear light clothes and stay hydrated."
// If the temperature is between 20°C and 30°C and it's raining, the advice should be "Carry an umbrella and wear a rain jacket."
// If the temperature is between 10°C and 20°C and it's not raining, the advice should be "Wear a light jacket."
// If the temperature is 10°C or below, the advice should be "It's cold! Wear a warm coat."
// If none of the conditions are met, the program should give the advice: "Just dress comfortably for the weather."

// var a = 0; // False
// var b = 1; // True

// console.log(!a);

// Nested if else

// var age = Number(prompt("Enter your age?"));

// if (age >= 18) {
//   var gender = prompt("Enter your gender: Male or Female?");
//   if (gender == "Male") {
//     var profession = prompt("Enter your profession");
//     alert(`Male profession ${profession}`);
//   } else if (gender == "Female") {
//     var hobbies = prompt("Enter your hobbies");
//     alert(`Female hobbies ${hobbies}`);
//   } else {
//     alert("You're not eligible");
//   }
// } else {
//   alert("You're not eligible");
// }


// Task: Movie Ticket Pricing Based on Age and Time of Day
// Write a JavaScript program that asks for the user's age and the time of the movie (morning, afternoon, or evening). Based on the inputs, calculate the ticket price as follows:
// 1. If the age is less than 12:
//     * Morning show: $5
//     * Afternoon show: $7
//     * Evening show: $10
// 2. If the age is between 12 and 65:
//     * Morning show: $8
//     * Afternoon show: $10
//     * Evening show: $12
// 3. If the age is over 65:
//     * Morning show: $4
//     * Afternoon show: $6
//     * Evening show: $8
// If the inputs don’t match any of the valid age ranges or times, the program should display an error message.
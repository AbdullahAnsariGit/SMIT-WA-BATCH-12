// var word = prompt("Enter word");
// var reverseWord = "";

// for (var i = word.length - 1; i >= 0; i--) {
//   reverseWord += word[i];
// }

// if (word === reverseWord) {
//   alert("True");
// } else {
//   alert("False");
// }

// var userPrompt = prompt("Enter word"); // Eye

// var reverseWord = userPrompt.split("").reverse().join("");
// console.log("reverseWord", reverseWord);

// // Split
// ["E", "y", "e"];

var para =
  "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

// All text remove
var removeDummy = para.replace(/dummy/g, "static");
// One text remove
var removeDummy = para.replace("dummy", "static").replace("the", "Abc");

console.log(removeDummy);

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.random()

var num = Math.round(4.6);
console.log("🚀 ~ num:", num);
var num1 = Math.round(4.2);
console.log("🚀 ~ num1:", num1);
var num2 = Math.round(4.5);
console.log("🚀 ~ num1:", num2);

var num3 = Math.ceil(4.8);
console.log("🚀 ~ num3:", num3);
var num4 = Math.ceil(4.2);
console.log("🚀 ~ num4:", num4);

var num5 = Math.floor(4.8);
console.log("🚀 ~ num5:", num5);
var num6 = Math.floor(4.2);
console.log("🚀 ~ num6:", num6);

var userId = Math.round(Math.random() * 10);
console.log("🚀 ~ userId:", userId);

// For 2 decimal number
// Math.round(num * 100) / 100
// Output: 3.13

// For 3 decimal number
// Math.round(num * 1000) / 1000
// Output: 3.134

// var num = prompt("Enter a num");
// var num2 = Number(prompt("Enter a num"));
// var num = parseInt(prompt("Enter a num"));
// var num = parseFloat(prompt("Enter a num"));

// console.log(num);

// console.log( typeof true)

// Problem Js

var arr = ["a", "b", 1, 2, true, 3, "c", "d", false, "false", 4, 5];

// // Output
// string: 5;
// number: 5;
// bool: 2;
// let stringCount=0;
// let NumberCount=0;
// let booleanCount=0;
// for(let i =0; i<arr.length; i++){
// let type= typeof arr[i];
// console.log(type);
// if(type=="string"){
//     stringCount++;

// }else if(type=="number"){
//     NumberCount++
// }else if(type=="boolean"){
//     booleanCount++
// }
// }

// console.log(stringCount,NumberCount,booleanCount );

// var num = 3.432999;
//Fixed decimal limit
// console.log("decimal limit 2", num.toFixed(2));
// var num2 = 354;
// console.log(typeof num2);
// // Convert string to number
// console.log(typeof num2.toString());

//Date in js
var getDate = new Date();
console.log("🚀 ~ getDate:", getDate);
var getDay = getDate.getDay(); // Its return day index 0 to 6
console.log("🚀 ~ getDay:", getDay);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameOfToday = dayNames[getDay];
// console.log("🚀 ~ nameOfToday:", nameOfToday);

var getFullYear = getDate.getFullYear();
console.log("🚀 ~ getFullYear:", getFullYear);

var getHours = getDate.getHours();
console.log("🚀 ~ getHours:", getHours);

var getMinutes = getDate.getMinutes();
console.log("🚀 ~ getMinutes:", getMinutes);

var getSeconds = getDate.getSeconds();
console.log("🚀 ~ getSeconds:", getSeconds);

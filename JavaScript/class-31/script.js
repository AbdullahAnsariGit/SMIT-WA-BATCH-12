// var num= Number(prompt("Enter the Integer"));

// for (var i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num*i}`);
// }

//  Program for find fruit
// Add product in shop
// var fruitQty = Number(prompt("Enter qty of fruit")); // 5
// var fruitShop = [];
// for (var i = 1; i <= fruitQty; i++) {
//   fruitShop.push(prompt(`Enter ${i} fruit`));
// }

// console.log(fruitShop);

// var userInput = prompt("Enter a fruit name you want");
// // var fruitAvailable = ["Banana", "Apple", "Mango", "Graphs"];
// var isFruit = false;

// for (var i = 0; i < fruitShop.length; i++) {
//   if (userInput === fruitShop[i]) {
//     isFruit = true;
//     break;
//   }
// }

// if (isFruit === true) {
//   console.log("Fruit is available");
// } else {
//   console.log("Fruit is not available");
// }

// var a = ["Banana", "Apple", "Mango", "Graphs"];
// console.log(a[1]);

// NastedIfElse
// var age = Number(prompt("Enter your age"));
// if (age <= 18) {
//   var bform = prompt("Do you've b-form, Yes/No");
//   if (bform == "Yes") {
//     alert("Eligible");
//   } else {
//     alert("Not Eligible");
//   }
// } else if (age > 18) {
//   var cnic = prompt("Do you've Cnic, Yes/No");
//   if (cnic == "Yes") {
//     alert("Eligible");
//   } else {
//     alert("Not Eligible");
//   }
// } else {
//   console.log("No");
// }

// var table = [1, 2, 3, 4];
// var value = [1, 2, 3, 4];

// for (var i = 0; i < table.length; i++) {
//   for (var j = 0; j < value.length; j++) {
//     console.log(`${table[i]} Multiply ${value[j]} Equal to ${table[i] * value[j]}`);
//   }
// }

// // Parent
// 1
// table[0] = 1
// // Child
// 1
// value[0] = 1
// 2
// value[1] = 2
// 3
// value[2] = 3
// 4
// value[3] = 4

// // Parent
// 2
// // Child
// 1
// 2
// 3
// 4
// // Parent
// 3
// // Child
// 1
// 2
// 3
// 4
// // Parent
// 4
// // Child
// 1
// 2
// 3
// 4

// var user = "abduLlah"
// var user1 = "abduLlah"

// console.log(user.toLowerCase());
// console.log(user1.charAt(0).toUpperCase() + user1.slice(1).toLowerCase());

// if(user === "Abdullah" ||user === "abdullah" ){
//   console.log(true)
// }else{
//   console.log(false)
// }

// problem

// user input

// abdullah
// abduLlah
// ABdullah

// output
// Abdullah

// Using loop

// var userInput = prompt("Enter your name");
// var lengthOfLoop = userInput.length;
// var result = "";

// for (var i = 0; i < lengthOfLoop; i++) {
//   if (i == 0) {
//     result += userInput[i].toUpperCase();
//   } else {
//     result += userInput[i].toLowerCase();
//   }
// }

// console.log(result);

// var testName = "Abdullah";
// console.log(testName.lastIndexOf("d"))
// var text = "World War II";
// for (var i = 0; i < text.length; i++) {
//   console.log('text.slice(i, i + 12)',text.slice(i, i + 12));
//   console.log('text.slice(i + 12)',text.slice(i + 12));
//   console.log('text.slice(0, i)',text.slice(0, i));
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// }

// console.log(text)

// var text = "Abdullah";
// var firstChar = text.lastIndexOf("");
// console.log(firstChar);

// var firstName = "Abdullah";
// var lastName = "Ansari";
// console.log(firstName.concat(" ",lastName))

// var firstName = "     Abdullah    ";
// console.log(firstName.trim()+ "A");
// console.log(firstName.trimStart() + "A");

// let text = "5";
// let padded = text.padStart(4,"0");

// console.log('padded',padded)

// let numb = 5;
// let text = numb.toString();

// console.log(typeof numb);
// console.log(typeof text);

var word = prompt("Enter word");
var reverseWord = "";

for (var i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}

if (word === reverseWord) {
  alert("True");
} else {
  alert("False");
}

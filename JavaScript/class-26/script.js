// Revision
// alert("hello world");
// Write this in english
// My name is abdullah

// var name = "ABDULLAH";
// var desc = "Write this in english";

// console.log(name);

// var num = 5;
// var num2 = 5;
// console.log(num+num2);

// var lastName = "Ansari";

// Rules of variable
// A variable name can't contain any spaces.
// A variable name can contain only letters, numbers, dollar signs, and underscores.
// Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
// For example, userAlert and myVar are legal.
// Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a
// Rose. If you assign the string "Floribundas" to the variable rose, and then ask JavaScript
// for the value assigned to Rose, you'll come up empty.
// I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or
// two (or three) in the middle if the name is formed by more than one word. A camelCase
// name begins in lower case. If there's more than one word in the name, each subsequent
// word gets an initial cap, creating a hump. If you form a variable name with only one
// word, like response, there's no hump. It's a camel that's out of food. Please adopt the
// camelCase convention. It'll make your variable names more readable, and you'll be less
// likely to get variable names mixed up.

// Chapter 5

// var popularNumber = 10;

// var secondNumber = 2;

// console.log(popularNumber + secondNumber);

// 9

// alert(2+2); //4
// alert("2+2"); //2+2

// console.log(popularNumber / secondNumber);
// Modulus
// console.log(popularNumber % secondNumber);

// var whatsLeftOver = 9 % 3;

// var num = 2;
// var num2 = "2";

// console.log(num - "num2"); // NaN

// Chapter 6
// Code # 1
// var num = 89;
// num++; // num + 1
// console.log(num);

// Code # 2
// var num = 89;
// console.log(num);
// var num2 = num ++ // num + 1
// console.log("num2",num2);
// console.log("num",num);
// console.log("num2",num2);
// console.log(num2 ++);
// console.log(num2);

// Code # 3
// var num = 89;
// console.log(num++);

// alert(`hello \n world`)
// console.log(`hello \n world`)

// 1. Pre-Increment and Post-Increment Difference
// let a = 10; // 10
// console.log(a++); // print value 10 but its update the a which is 11
// console.log(a); // 11

// 2. Pre-Decrement and Post-Decrement Difference
// let b = 7;  // 7
// console.log(--b); // decrement the value 6 then print 6
// console.log(b); //6

// 3. Compound Assignment with Addition
// let x = 5; // 5
// x += 3; // 8
// console.log(x); //8

// 4. Compound Assignment with Multiplication
// let y = 4;
// y *= 2;
// console.log(y);

// 5. Pre-Increment in a Mathematical Expression
// let z = 3; // 3
// let result1 = ++z * 2; // z+1 = 4 * 2 = 8
// console.log(result1); // 8

// 6. Post-Increment in a Mathematical Expression
// let num = 4;
// let result2 = num++ + 5;
// console.log(result2);
// console.log(num);

// 7. Pre-Decrement with Multiplication
// let c = 6;
// let result3 = --c * 3;
// console.log(result3);

// 8. Post-Decrement in an Assignment
// let d = 8;
// let newD = d--;
// console.log(newD);
// console.log(d);

// 9. Combining Pre-Increment and Addition
// let m = 2;
// let n = 3 + ++m;
// console.log(n);

// 10. Combining Post-Increment and Addition
// let p = 1;
// let q = 2 + p++;
// console.log(q);
// console.log(p);

// 11. Double Pre-Increment
// let k = 5;
// ++k;
// console.log(++k);

// 12. Double Post-Increment
// let j = 10;
// j++;
// console.log(j++);
// console.log(j);

// 13. Using Increment in a Ternary Operation
// let num2 = 9;
// let isGreater = ++num2 == 10 ? "Greater" : "Not Greater";
// console.log(isGreater);

// if(true){
//     console.log("Greater")
// }else{
//     console.log("Not Greater")
// }

// var a = 0;
// var b = 5;
// let c;
// c = a++ + a++ + b++ + a++ + a-- + ++b;

// 0, 1,5, 2, 3,7 = 18
// console.log(c)

// Bodmas rule:
// var num = 2 + 6 * 8;   // 6 * 8 = 48 |  2+ 48 = 50
// console.log(num);
// var num = (2 + 6) * 8;   // 2+6 = 8 * 8 = 64
// console.log(num);

// var num = 6 - 6 * 2;
// console.log(num);

// var num = 6 * 6 - 3;
// console.log(num);

// var num = 6 / 3 * 4;
// console.log(num);

// var num = 3 * 5 + 6;
// var num2 = 7 * 2;
// var num3 = 4 / 2;

// console.log(num++ + num2 + --num3);


var num = --8 * 3++ + 2;
var num2 = 7++ + 2 - --5;
var num3 = ++3 - 4 + 22;
var num4 = 2--

console.log(--num + num2 + num3++ - num4)
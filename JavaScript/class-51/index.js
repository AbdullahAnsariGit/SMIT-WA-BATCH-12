// Closures Example:

//Example 01:
function outerFunction() {
    var outerVariable = "Hello";
    console.log("Outer function executed and finished!");

    function innerFunction() {
        console.log(outerVariable); // Access Yes or Not?
    }
    return innerFunction;
}

// Outer function execute done
var outerFunctionResult = outerFunction();

// Now inner function is executed
outerFunctionResult();


//Example 02:
function counter() {
    let count = 0; // Local variable jo outerFunction ke andar define hai
    console.log("Counter function executed and finished!");

    return function increment() {
        count++;
        console.log(`Current count: ${count}`); // count ko access kar raha hai
    };
}

// Counter function execute ho gayi
let counterFunction = counter();

// Ab increment function ko bar-bar call karte hain
counterFunction(); // Output: Current count: 1
counterFunction(); // Output: Current count: 2
counterFunction(); // Output: Current count: 3


// Destructuring 
// Problem
const array = ['alex', 17, 'BSCS'];
const name = array[0]
const age = array[0]
const degree = array[0]


// Example 01:
const [first, second, third] = array; // Destructuring

console.log(first); // Output: 1
console.log(second); // Output: 2

function fnD([first, second, third]) {
    console.log(first); // Output:
    console.log(second); // Output:
    console.log(third); // Output:

}
fnD([1, 2, 3])

// function fnD2(){
//     return [1,2,3]
// }
// const [a, b, c] = fnD2()

// Task 1 Same check object k sth.
// Task 2 Same check nested array k sth
// Task 3 Create a function which return an array with properties then destructure all these functions array values.


// Spread Operator

// Example 01
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Task 1 Given two arrays, merge them into a new array using the spread operator.
// Input: const array1 = [10, 20, 30]; const array2 = [40, 50, 60];
// Output: [10, 20, 30, 40, 50, 60]

// Rest Operator

// Example 01
function sumAll(...numbers) {
    console.log(numbers)
    // return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4));

// Task 1 Write a function findMax that takes any number of numeric arguments and returns the maximum value among them using the rest operator.


// Enhanced Object Literals

// 1 - Property Shorthand

// Example
const nameObj = "Ali";
const ageObj = 22;

// Pehle:
const person1 = { nameObj: nameObj, nameObj: nameObj };

// Ab:
const person2 = { nameObj, nameObj }; // Shorthand
console.log(person2); // { name: "Ali", age: 22 }



// 2 - Method Shorthand

const person = {
    name: "Sara",
    greet() { // Shorthand
        console.log(`Hello, my name is ${this.name}.`);
    },
};

person.greet(); // Output: Hello, my name is Sara.



// 3 - Computed Property Names

const key = "hobby";

const personC = {
  name: "Zain",
  [key]: "Cricket", // Dynamic property name
};

console.log(personC); // { name: "Zain", hobby: "Cricket" }


// Array methods in js

// 1. Adding/Removing Elements
// push(): Array ke end me ek ya zyada elements add karta hai.
// Example: [1, 2, 3].push(4) → [1, 2, 3, 4]

// pop(): Array ke last element ko remove karta hai.
// Example: [1, 2, 3].pop() → [1, 2]

// unshift(): Array ke start me ek ya zyada elements add karta hai.
// Example: [1, 2, 3].unshift(0) → [0, 1, 2, 3]

// shift(): Array ke first element ko remove karta hai.
// Example: [1, 2, 3].shift() → [2, 3]

// 2. Combining/Extracting
// concat(): Do ya zyada arrays ko combine karta hai.
// Example: [1, 2].concat([3, 4]) → [1, 2, 3, 4]

// slice(): Array ke ek portion ko extract karta hai (original array change nahi hoti).
// Example: [1, 2, 3, 4, 5].slice(1, 3) → [2, 3]

// splice(): Array me elements add/remove karta hai.
// Example: [1, 2, 3, 4].splice(2, 1, "new") → [1, 2, "new", 4]

// 3. Iteration Methods
// forEach(): Har element ke liye ek function run karta hai (kuch return nahi karta).
// Example: [1, 2, 3].forEach(num => console.log(num * 2))

// map(): Naya array banata hai har element par function apply karke.
// Example: [1, 2, 3].map(num => num * 2) → [2, 4, 6]

// filter(): Ek naya array banata hai sirf un elements ka jo condition pass karein.
// Example: [1, 2, 3, 4].filter(num => num % 2 === 0) → [2, 4]

// reduce(): Ek single value return karta hai array ke elements ko combine karke.
// Example: [1, 2, 3, 4].reduce((acc, num) => acc + num, 0) → 10

// find(): Pehla element return karta hai jo condition pass karein.
// Example: [1, 2, 3, 4].find(num => num % 2 === 0) → 2

// findIndex(): Pehle element ka index return karta hai jo condition pass karein.
// Example: [1, 2, 3, 4].findIndex(num => num > 2) → 2

// 4. Checking/Searching
// includes(): Check karta hai agar value array me hai ya nahi (true/false).
// Example: [1, 2, 3].includes(2) → true

// indexOf(): Value ka pehla index return karta hai (nahi mila to -1).
// Example: [1, 2, 3].indexOf(2) → 1

// lastIndexOf(): Value ka last index return karta hai.
// Example: [1, 2, 3, 2].lastIndexOf(2) → 3

// 5. Sorting/Transforming
// sort(): Array ke elements ko sort karta hai (default ascending).
// Example: [3, 1, 4, 2].sort() → [1, 2, 3, 4]

// reverse(): Array ke elements ka order ulta karta hai.
// Example: [1, 2, 3].reverse() → [3, 2, 1]

// 6. Others
// join(): Array ke elements ko ek string me combine karta hai.
// Example: [1, 2, 3].join('-') → "1-2-3"

// split(): String ko array me todta hai (Array ka part nahi, string ka method hai).
// Example: "1-2-3".split('-') → [1, 2, 3]

// isArray(): Check karta hai agar variable array hai ya nahi.
// Example: Array.isArray([1, 2, 3]) → true
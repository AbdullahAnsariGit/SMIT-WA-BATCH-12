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

function fnD([first, second, third]){
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


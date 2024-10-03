// var student1 = "Ali";
// var student2 = "Ali2";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";
// var student3 = "Ali4";

// var students = [
//   "Ali",
//   "Bilal",
//   "Salman",
//   "Shahrukh",
//   1,
//   23,
//   4,
//   5,
//   true,
//   false,
//   true,
//   false,
//   ""
// ];
// // // console.log("🚀 ~ students:", students);
// // (student1[5] = 22)
// // console.log("🚀 ~ students:", students[5]);

// console.log("last member", home[6]);

// var homeLength = home.length;

// // console.log("🚀 ~ homeLength:", homeLength);

// console.log("last member using length", home[homeLength - 1]); // 12-1 ==> 10
// console.log("last member using length", home[(homeLength/2)-1]); // ==> 11

var home = [
  "father",
  "mother",
  "sister",
  "brother",
  "husband",
  "wife",
  "child1",
  "child2",
  "child3",
  "child4",
  "child5",
  "child6",
];

//Update:
console.log("Before update:", home);

home[0] = "RIP";
home[5] = "divorced";

console.log("After update:", home);

//Delete Last Element:
home.pop();
home.pop();
home.pop();
home.pop();

console.log("After delete last el:", home);

//Add element in last
home.push("jrAli");

console.log("After add el in last:", home);

// Problem:
// Create a JavaScript program that manages a list of favorite books. The program should allow the user to:
// 1. Add a new book to the array.
// 2. Update an existing book's title.
// 3. Remove the last book from the array.
// 4. Display the total number of books in the array.

// Task Breakdown:
// 1. Add: Use push() to add a new book title entered by the user.
// 2. Update: The user should input the index of the book they want to update and provide a new title.
// 3. Remove: Use pop() to remove the last book in the list.
// 4. Display Count: Use length to display the total number of books in the array.

// Task 1


// Step 1
var favBooklist = ["Maths", "English", "Urdu"];
alert(favBooklist);

// Step 2
var newBook = prompt("Enter a title of book");
favBooklist.push(newBook);

alert(favBooklist);

// Step 3
var indexOfBook = Number(
  prompt(
    `Enter a index of the book: Input 0 to ${favBooklist.length - 1} range`
  )
);

var updateBookName = prompt("Enter a title of update book");
favBooklist[indexOfBook] = updateBookName;
alert(favBooklist);


favBooklist.pop()

alert(favBooklist);

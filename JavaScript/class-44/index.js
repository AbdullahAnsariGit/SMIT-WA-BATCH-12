// var planObj = [
//   {
//     name: "basic",
//     price: 100,
//     space: "100Gb",
//   },
//   {
//     name: "pro",
//     // price: 500,
//     space: "500Gb",
//   },
//   {
//     name: "ultimate",
//     price: 1000,
//     space: "1000Gb",
//   },
// ];

// console.log(planObj[1].price, "Second subcription price");

// planObj?.forEach(function (item) {
//   console.log("items", item.price);
//   if (item.name == "pro") {
//     console.log(item?.price);
//   }
// });

// var arr = null;

// arr?.forEach(function (item) {
//   console.log("item", item);
// });

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
// };

// console.log(plan1);

// console.log(plan1.name);
// console.log(plan1.price);
// console.log(plan1.space);

// let userData = {
//   id: 1,
//   name: "Alex",
//   email: "alex@gmail.com",
//   phone: "0321",
//   gender: "male",
//   dob: "11-11-2011",
//   address: {
//     country: "pakistan",
//     city: "lahore",
//     zip: 75400,
//     street: 5,
//     houseno: "A-23",
//   },
// };

// console.log(userData.address.zip)

// let userData = {
//   id: 1,
//   name: "Alex",
//   email: "alex@gmail.com",
//   phone: "0321",
//   gender: "male",
//   dob: "11-11-1997",
//   address: {
//     country: "pakistan",
//     city: "lahore",
//     zip: 75400,
//     street: 5,
//     houseno: "A-23",
//   },
//   education: [
//     {
//       institute: "school",
//       grade: "A Grade",
//       passingYear: "2011",
//       name: "Educator",
//     },
//     {
//       institute: "college",
//       grade: "B Grade",
//       passingYear: "2013",
//       name: "National",
//     },
//     {
//       institute: "university",
//       grade: "C Grade",
//       passingYear: "2020",
//       name: "KU",
//     },
//     {
//       institute: "university",
//       grade: "A+ Grade",
//       passingYear: "2022",
//       name: "Nust",
//     },
//   ],
// };

// var a = [1, 23, 3];

// a.forEach(function(item){

// })

// var userEducation = userData.education;

// userEducation.forEach(function (eachValue) {
//   console.log(eachValue);
//   if (eachValue.institute == "university") {
//     console.log("Selected Value:", eachValue.grade);
//   }
// });

// var obj1 = {
//   name: "abc",
//   class: "12",
//   bio: "hero",
// };

// // obj.name = "cde";

// // console.log(obj.name);

// var obj2 = obj1;
// obj2.name = "alex";

// console.log(obj1.name);

// var name = "abdullah"
// var name2 = name;
// name2 = 'alex'
// console.log(name)

// var employData = {
//   designation: "Jr Dev",
//   name: "Mehmood",
//   package: "50000",
//   duration: "2011-2012",
// };

// var employUpdatedData = employData;

//Shallow Cloning
// var employUpdatedData = {...employData};
// var employUpdatedData = Object.create(employData);

//Deep Cloning
// var employUpdatedData = JSON.parse(JSON.stringify(employData));

// employUpdatedData.package = "450000";
// employUpdatedData.duration = "2021 Continue";

// console.log("Print Previous Employ Package", employData.package);
// console.log("Print Current Employ Package", employUpdatedData.package);

// function restOperation(...rest) {
//   //   console.log(name, className);
// }

// restOperation("abdullah", "12", "math", "teacher");

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,

// };

// console.log(plan1["name"])

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
};

// delete plan1.pages

// console.log(plan1.pages)

// var checkPriceExistOrNot = "abc" in plan1;
// console.log("checkPriceExistOrNot", checkPriceExistOrNot);

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [0, 7, 11],
//   //   January,
//   //   Augest,
//   //   November,
// };

// function calcAnnual(percentIfDisc) {
//   var bestPrice = plan1.price;
//   var currDate = new Date();
//   var thisMo = currDate.getMonth(); // 0 to 11 - 0 == january
//   for (var i = 0; i < plan1.discountMonths.length; i++) {
//     if (plan1.discountMonths[i] === thisMo) {
//       bestPrice = plan1.price * percentIfDisc;
//       break;
//     }
//   }

//   var getBody = document.querySelector("body");
//   var createEl = document.createElement("div");
//   createEl.innerHTML = bestPrice * 12;
//   getBody.appendChild(createEl);
// }

// var annualPrice = calcAnnual(0.85);

// console.log("annualPrice", annualPrice);

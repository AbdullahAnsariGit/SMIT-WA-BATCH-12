// function sum(a, b) {
//   document.write(a + b);
// }

// function popup(str) {
//   alert(str);
// }

// anchor tag
// Javascript:void(0)
// onClick - onclick
// onMouseover
// onMouseout
// onFocus
// onBlur
// Buttom

// this.style.propertyName
// Image Change
// document.write()
// var val1 = "", val2= "";
// function value1(){
//   var v1 = Number(prompt("Enter 1st Value: "));
//   val1 = v1;
// }
// function value2(){
//   var v2 = Number(prompt("Enter 2nd Value: "));
//   val2 = v2;
// }
// function sum(){
//   alert(`Result : ${val1+val2}`);
// }
// function sub(){
//   alert(`Result : ${val1-val2}`);
// }
// function mul(){
//   alert(`Result : ${val1*val2}`);
// }
// function div(){
//   alert(`Result : ${val1/val2}`);
// }

function checkAddress(fieldId) {
  var a = document.getElementById(fieldId).value;
  var re = /^\s*\+?04(\d)(?!\1\s*\1{3}\s*\1{3})\d\s*\d{3}\s*\d{3}\s*$/;
  if (a === "") {
    alert("Email address required.");
  } else if (!re.test(a)) {
    alert("Minimum eight characters, at least one letter and one number");
  }
}

// function fillCity() {
//   var cityName;
//   var zipEntered = document.getElementById("zip").value;
//   switch (zipEntered) {
//     case "60608":
//       cityName = "Chicago";
//       break;
//     case "68114":
//       cityName = "Omaha";
//       break;
//     case "53212":
//       cityName = "Milwaukee";
//   }
//   document.getElementById("city").value = cityName;
// }

// https://stackoverflow.com/questions/44320486/regex-if-else-condition-in-html-form-validation

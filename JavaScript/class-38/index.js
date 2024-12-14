// function checkValue(event) {
//   event.preventDefault();
//   var a = document.getElementById("name1").value;
//   document.getElementById("name2").value = a;
// }

// function expandPara() {
//   var paraLong =
//     "The value property sets or returns the value of the value attribute of a text field. The value property sets or returns the value of the value attribute of a text field. The value property sets or returns the value of the value attribute of a text field. The value property sets or returns the value of the value attribute of a text field.";
//   var paraShort =
//     "The value property sets or returns the value of the value attribute of a text field.";
//   if (document.getElementById("myBtn").innerHTML == "see more") {
//     document.getElementById("myBtn").innerHTML = "see less";
//     document.getElementById("myPara").innerHTML = paraLong;
//   } else {
//     document.getElementById("myBtn").innerHTML = "see more";
//     document.getElementById("myPara").innerHTML = paraShort;
//   }
//   //   document.getElementById("myPara").innerHTML = a;
// }

// function handleImageHide() {
//   var getImage = document.getElementById("img1");
//   getImage.className = "hidden";
// }

// function makeBig() {
//   document.getElementById("p1").className += " big";
// }

function handleHeight() {
  document.getElementById("img1").className = "imageHeight";
}
function handleBorder() {
  document.getElementById("img1").className += " imageBorder";
}
function handleRemoveStyle() {
  document.getElementById("img1").className = "";
}

function handleRSC(removeClassName, tagId) {
  // document.getElementById(tagId).classList.remove(removeClassName);
}

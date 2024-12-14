// function changeImage() {
//   // 1 task
//   // Get Image tag
//   // 2 task
//   // Update property src

//   document.getElementById("myImg").src = "after.png";
// }

// function handleGetLink() {
//   // 1 Task
//   // Get the anchor tag
//   // 2 Task
//   // Get url link

//   var link = document.getElementById("linkGoogle");
//   console.log(link.href);
// }

// function handleChangeFontSize() {
//   document.getElementById("heading").style.fontSize = "60px";
// }

function styleAllPara() {
  //   Step 1 - Get All Para
  var allEl = document.getElementsByTagName("p");
  console.log("Get All Paragraphs", typeof allEl);
  // 1 Way
  //   for (var i = 0; i < allEl.length; i++) {
  //     // console.log(allEl[i]);
  //     allEl[i].style.color = "green";
  //     allEl[i].textContent = "New Para";
  //   }
  // 2 Way
  Array.from(allEl).forEach(function (eachEl) {
    eachEl.style.fontSize = "60px";
    eachEl.textContent = "Updated Content";
  });
}

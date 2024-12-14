// SetItem
// 1st Key
// 2nd Value

//GetItem
// 1st key
// var userLastName = "Ansari";

// localStorage.setItem("lastName", userLastName);

// var getMyLastName = localStorage.getItem("lastName");

// console.log(getMyLastName, "Last Name");

var fName = document.getElementById("f1");
var lName = document.getElementById("f2");
var btn = document.getElementById("btn");
var container = document.getElementById("container");
var getAllFullName = JSON.parse(localStorage.getItem("allFullname")) || [];
console.log('getAllFullName',getAllFullName)
var allNames = getAllFullName ? getAllFullName : [];
btn.addEventListener("click", function () {
  var firstName = fName.value;
  var lastName = lName.value;
  var fullName = firstName + " " + lastName;
  allNames.push(fullName);
  localStorage.setItem("allFullname", JSON.stringify(allNames));
  loadData();
});


function loadData() {
    container.innerHTML = ''
  getAllFullName.forEach((item) => {
    var createDiv = document.createElement("div");
    var createPara = document.createElement("p");
    console.log("getAllFullName[i]", item);
    createPara.textContent = item;
    createPara.style.color = "#000000";
    createDiv.appendChild(createPara);
    container.appendChild(createDiv);
  });
}

loadData();

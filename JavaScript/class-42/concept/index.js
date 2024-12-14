// Get Element
var chinttu = document.getElementById("0321");
var minkey = document.getElementById("0311");
var getInputBtn = document.getElementById("0345");
var inputField = document.getElementById("input");

//Syntax
// 1- Event name is always placed in string

// chinttu.addEventListener(eventName,function)

chinttu.addEventListener("click", function () {
  alert("Chinttu ko nokri milgaye!");
});

minkey.addEventListener("click", function () {
  alert("Minkey ko chintu milgya! - Nikkah Mubarak");
});

getInputBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
  console.log(inputField.value);
  inputField.value = "";
}

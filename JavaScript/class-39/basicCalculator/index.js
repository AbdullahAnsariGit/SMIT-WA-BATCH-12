function displayVal(userVal) {
  var inputVal = document.getElementById("calValue");
  inputVal.value += userVal;
}

function resetCal() {
  var inputVal = document.getElementById("calValue");
  inputVal.value = "";
}

function delCal() {
  var inputVal = document.getElementById("calValue");
  inputVal.value = inputVal.value.slice(0, -1);
}

function displayResult() {
  var inputVal = document.getElementById("calValue");
  try {
    var result = eval(inputVal.value);
    inputVal.value = result;
  } catch {
    inputVal.value = "Error";
  }
}

let text = "Hello world!";
let result = text.substring(1, 4);

console.log(result);

{
  /* <div class="container">
<p>Iron Man 3</p>
<div class="innerDiv">
    <p>1000 Rs</p>
    <button>Buy Now</button>
</div>

</div> */
}

var getButton = document.getElementById("btn");
var getContainer = document.getElementById("con");
getButton.addEventListener("click", function () {
  getContainer.classList.add("container");

  var para = document.createElement("p");

  para.textContent = "Iron Man 3";

  var createDiv = document.createElement("div");

  createDiv.classList.add("innerDiv");

  var innerPara = document.createElement("p");

  innerPara.textContent = "1000 Rs";

  var createBtn = document.createElement("button");

  createBtn.textContent = "Buy Now";

  createDiv.append(innerPara, createBtn);

  getContainer.append(para, createDiv);
});

var myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function () {
  // window.location.assign('http://127.0.0.1:5500/index1.html')
  var myNewWindow = window.open();
  var myInnerEl = `<div
        style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 600px; width: 600px;">
        <h1>Form Submitted Successfully</h1>
        <img src="assets/img/thumbsup.jpg" style="height: 200px; width: 200px; object-fit: contain;" />
    </div>`;
  myNewWindow.document.write(myInnerEl);
});

// Windows open

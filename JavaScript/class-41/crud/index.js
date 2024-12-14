function handleCheck() {
  // Get Parent Element
  var getMyParentDiv = document.getElementById("con");

  // Create Paragraph
  var createNewEl = document.createElement("p");

  // Add Css
  createNewEl.classList.add("para");

  // Create Text
  var addText = document.createTextNode("Hello World");

  // Add text to my paragraph
  createNewEl.appendChild(addText);

  // Add New Paragraph to my Parent Element
  getMyParentDiv.appendChild(createNewEl);
}

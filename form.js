// Add your code here
// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the form element
  var form = document.querySelector("form");

  // Add an event listener to the form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
      alert("Please fill in all the required fields.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  });

});

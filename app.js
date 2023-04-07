// About section functionality.
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Portfolio section "See More" button functionality.
function openImage() {
  window.open("/Images/coming soon.webp");
}

// Hamburger Menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

/* // Thankyou alert functionality
// Get the form
const form1 = document.getElementById("contact-form");
// Get the alert box
const alertBox = document.getElementById("alert");
// Function to show alert box
function showAlert() {
  alertBox.style.display = "flex";
}
// Function to close alert box
function closeAlert() {
  alertBox.style.display = "none";
}
// Event listener for form submission
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  showAlert();
  form1.reset();
}); */

/* Google Sheets connection for Data saving
const scriptURL = 'https://script.google.com/macros/s/AKfycbzHn5pnLOmoHoo0pPH4loBIvjeFPZl5RjWYQCZhnvtBxQAajpCAeyWY_p_uaXvOFCxRIA/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
}) */

// Alert function and google sheets data saving
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzHn5pnLOmoHoo0pPH4loBIvjeFPZl5RjWYQCZhnvtBxQAajpCAeyWY_p_uaXvOFCxRIA/exec";
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the values from the form fields
  const formData = new FormData(form);

  // Send the form data to the Google Apps Script server
  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
      console.log("Success!", response);
      // Show an alert box to confirm submission
      showAlert();
      // Clear the form fields
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });
});

// Function to show alert box
function showAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "flex";
}

// Function to close alert box
function closeAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "none";
}

// closing the alert
let alert = document.getElementById("alert");
let close = document.getElementById("close");
function displayAlert() {
  alert.style.display = "block";
}
function hideAlert() {
  alert.style.display = "none";
  localStorage.setItem("alertShown", "true");
}
close.addEventListener("click", hideAlert);
// show the alert if it hasn't been shown yet
if (!localStorage.getItem("alertShown")) {
  displayAlert();
}

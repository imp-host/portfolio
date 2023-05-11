// About section functionality.------------------------------------------------------------------------------------------------------
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

  // scroll to the tab content with an offset of -220px
  var tabContentTop = document.getElementById(tabname).offsetTop;
  window.scrollTo(0, tabContentTop - 220);
}

// Portfolio section "See More" button functionality.------------------------------------------------------------------------------------------------------
function openImage() {
  window.open("/Images/coming soon.webp");
}

// Portfolio section "wip" button functionality.------------------------------------------------------------------------------------------------------
function openImage1() {
  window.open("/Images/wip.jpg");
}

// Hamburger Menu functionality------------------------------------------------------------------------------------------------------
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

// Alert function and google sheets data saving------------------------------------------------------------------------------------------------------
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

// Function to show alert box------------------------------------------------------------------------------------------------------
function showAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "flex";
}

// Function to close alert box------------------------------------------------------------------------------------------------------
function closeAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.style.display = "none";
}

// closing the alert------------------------------------------------------------------------------------------------------
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
// if (!localStorage.getItem("alertShown")) {
//   displayAlert();
// }

// Toggle button to switch between light and dark theme along with color changes------------------------------------------------------------------------------------------------------
const themeToggle = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// Function to set blue color for elements with rgb(0, 255, 255) color in light mode
const setBlueColors = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    const color = window.getComputedStyle(element).color;
    if (color === "rgb(0, 255, 255)") {
      element.style.color = "blue";
    }
    if (color === "rgb(255, 255, 255)") {
      element.style.color = "black";
    }
  });
};

// Function to set original color for elements with blue color in dark mode
const setOriginalColors = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    if (element.style.color === "blue") {
      element.style.color = "rgb(0, 255, 255)";
    }
    if (element.style.color === "black") {
      element.style.color = "rgb(255, 255, 255)";
    }
  });
};

// Function to toggle theme
const toggleTheme = () => {
  const body = document.body;
  const isLightMode = body.classList.toggle("light-mode");
  if (isLightMode) {
    localStorage.setItem("mode", "light");
    darkIcon.classList.add("hide");
    lightIcon.classList.remove("hide");
    setBlueColors();
  } else {
    localStorage.setItem("mode", "dark");
    lightIcon.classList.add("hide");
    darkIcon.classList.remove("hide");
    setOriginalColors();
  }
};

// Event listener for theme toggle button
themeToggle.addEventListener("click", toggleTheme);

// Set the initial state of the button based on the user's preference
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
    lightIcon.classList.add("hide");
    darkIcon.classList.remove("hide");
    setOriginalColors();
  } else {
    document.body.classList.remove("dark-mode");
    lightIcon.classList.remove("hide");
    darkIcon.classList.add("hide");
    setBlueColors();
  }
});

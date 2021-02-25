// Select the button
const dayNight = document.querySelector(".day-night");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get logo element
var image = document.getElementById('logo-desktop');
 
// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle("dark-mode");
  dayNight.querySelector("i").classList.toggle("fa-sun");
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle("light-mode");
  dayNight.querySelector("i").classList.toggle("fa-moon");
} else {
  document.body.classList.toggle("light-mode");
  dayNight.querySelector("i").classList.toggle("fa-moon");
}
 
// Listen for a click on the button
dayNight.addEventListener("click", function() {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  // If the user's OS setting is dark and matches our .dark-mode class...
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);
  
  // Load correct image source
  if (document.body.classList.contains("dark-mode")) {
    image.src = "/images/logo/logo-dark.svg";
  } else if (document.body.classList.contains("light-mode")) {
    image.src = "/images/logo/logo.svg";
  } else {
    image.src = "/images/logo/logo.svg";
  }
});

// Load correct image source
if (document.body.classList.contains("dark-mode")) {
  image.src = "/images/logo/logo-dark.svg";
} else if (document.body.classList.contains("light-mode")) {
  image.src = "/images/logo/logo.svg";
} else {
  image.src = "/images/logo/logo.svg";
}

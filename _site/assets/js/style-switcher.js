// Select the button
const dayNight = document.querySelector(".day-night");
 
// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  console.log("Local storage being used:");
  console.log(currentTheme);
} else {
  console.log("Nothing in local storage yet, setting to light mode.");
  document.body.classList.toggle("light-mode");
  dayNight.querySelector("i").classList.add("fa-moon");
}
 
// Listen for a click on the button
dayNight.addEventListener("click", function() {
  // Set local storage to new theme
  if(currentTheme == "dark") {
    console.log("Light theme set in local storage.");
    localStorage.setItem("theme", "light");
  } else {
    console.log("Dark theme set in local storage.");
    localStorage.setItem("theme", "dark");
  }

  // Toggle sun/moon icon
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");

  // Toggle theme
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

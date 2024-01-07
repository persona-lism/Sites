document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("switch");

  // Variables
  let navBar = document.getElementById("navigation-bar");
  let body = document.getElementById("bodies");
  let progressBar = document.getElementById("progress-bar");
  let dropdown = document.getElementById("dropdown");
  let thirdSection = document.getElementById("third-section");

  // Check the user's preference in localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    themeSwitch.checked = currentTheme === "dark-mode";
  }

  // Toggle theme on checkbox change
  themeSwitch.addEventListener("change", function () {
    if (themeSwitch.checked) {
      //
      navBar.classList.add("dark-mode");
      body.classList.add("dark-mode");
      progressBar.classList.add("dark-mode");
      dropdown.classList.add("dark-mode");
      thirdSection.classList.add("dark-mode");
      //
      localStorage.setItem("theme", "dark-mode");
    } else {
      //
      navBar.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
      progressBar.classList.remove("dark-mode");
      dropdown.classList.remove("dark-mode");
      thirdSection.classList.remove("dark-mode");
      //
      localStorage.setItem("theme", "light-mode");
    }
  });
  navBar.classList.add(currentTheme);
  body.classList.add(currentTheme);
  progressBar.classList.add(currentTheme);
  dropdown.classList.add(currentTheme);
  thirdSection.classList.add(currentTheme);
});

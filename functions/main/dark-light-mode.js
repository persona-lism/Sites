document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("switch");

  var navBar = document.getElementById("navigation-bar");
  var body = document.getElementById("bodies");
  var progressBar = document.getElementById("progress-bar");
  var dropdown = document.getElementById("dropdown");
  var thirdSection = document.getElementById("third-section");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      navBar.classList.add("dark-mode");
      body.classList.add("dark-mode");
      progressBar.classList.add("dark-mode");
      dropdown.classList.add("dark-mode");
      thirdSection.classList.add("dark-mode");
    } else {
      navBar.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
      progressBar.classList.remove("dark-mode");
      dropdown.classList.remove("dark-mode");
      thirdSection.classList.remove("dark-mode");
    }
  });
});

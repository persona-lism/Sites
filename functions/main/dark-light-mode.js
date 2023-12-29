document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("switch");

  var navBar = document.getElementById("navigation-bar");
  var body = document.getElementById("bodies");
  var progressBar = document.getElementById("progress-bar");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      navBar.classList.add("dark-mode");
      body.classList.add("dark-mode");
      progressBar.classList.add("dark-mode");
    } else {
      navBar.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
      progressBar.classList.remove("dark-mode");
    }
  });
});

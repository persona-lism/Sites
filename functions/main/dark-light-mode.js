document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("switch");

  const applyTheme = (theme) => {
    document.body.classList.toggle("dark-mode", theme === "dark-mode");
    localStorage.setItem("theme", theme);
  };

  // Check the user's preference in localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    applyTheme(currentTheme);
    themeSwitch.checked = currentTheme === "dark-mode";
  }

  // Toggle theme on checkbox change
  themeSwitch.addEventListener("change", function () {
    applyTheme(themeSwitch.checked ? "dark-mode" : "light");
  });
});

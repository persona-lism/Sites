// index.js

export function handleSectionScroll() {
  var sections = document.querySelectorAll("section");

  sections.forEach((sec) => {
    var top = window.scrollY;
    var offset = sec.offsetTop - 250;
    var height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animateOnScroll");
    } else {
      sec.classList.remove("show-animateOnScroll");
    }
  });
}

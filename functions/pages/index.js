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

// let sections = document.querySelectorAll("section");

// window.onscroll = function () {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 250;
//     let height = sec.offsetHeight;

//     if (top >= offset && top < offset + height) {
//       sec.classList.add("show-animateOnScroll");
//     } else {
//       sec.classList.remove("show-animateOnScroll");
//     }
//   });
// };

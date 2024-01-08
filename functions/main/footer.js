// footer.js

// export function handleFooterScroll() {
//   var footers = document.querySelectorAll("footer");

//   footers.forEach((foo) => {
//     var Ftop = window.scrollY;
//     var Foffset = foo.offsetTop + 700;
//     var Fheight = foo.offsetHeight;
//     if (Ftop >= Foffset && Ftop < Foffset + Fheight) {
//       foo.classList.add("show-footer");
//     } else {
//       foo.classList.remove("show-footer");
//     }
//   });
// }

export function handleFooterScroll() {
  var footer = document.getElementById("footer");

  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Adjust this value as needed based on when you want the div to appear
  var triggerPosition = document.body.offsetHeight - 200 - window.innerHeight;

  if (scrollPosition >= triggerPosition) {
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
}

// >>>
// document.addEventListener("DOMContentLoaded", function () {
//   var footer = document.getElementById("footer");
//   var divE = document.getElementById("tester");

//   window.onscroll = function () {
//     var scrollPosition =
//       window.scrollY || document.documentElement.scrollTop;

//     // Adjust this value as needed based on when you want the div to appear
//     var triggerPosition = document.body.offsetHeight - 500 - window.innerHeight;

//     if (scrollPosition >= triggerPosition) {
//       footer.classList.add("show-footer");
//       divE.classList.add("show-test");
//     } else {
//       footer.classList.remove("show-footer");
//       divE.classList.remove("show-test");
//     }
//   };
// });

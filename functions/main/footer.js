function handleFooterScroll() {
  var footers = document.querySelectorAll("footer");

  footers.forEach((foo) => {
    var Ftop = window.scrollY;
    var Foffset = foo.offsetTop - 900;
    var Fheight = foo.offsetHeight;
    if (Ftop >= Foffset && Ftop < Foffset + Fheight) {
      foo.classList.add("show-footer");
    } else {
      foo.classList.remove("show-footer");
    }
  });
}

// Attach each function to the scroll event separately
window.onscroll = function () {
  handleFooterScroll();
  handleSectionScroll();
};

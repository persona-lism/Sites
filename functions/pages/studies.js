// // Function to toggle the sub-description
// function toggleSubDescription(id) {
//   let element = document.getElementById(id);

//   if (element.style.display === "none") {
//     element.style.display = "block";
//     element.style.animation = "fadeIn 1s";
//   } else {
//     element.style.animation = "fadeOut 1s";
//     setTimeout(function () {
//       element.style.display = "none";
//     }, 1000);
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("description");

  dropdown.addEventListener("click", function () {
    let content = document.getElementById("content");
    dropdown.classList.toggle("expand");

    if (dropdown.classList.contains("expand")) {
      content.style.animation = "fadeIn 0.4s";
      content.style.display = "flex";
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    } else {
      content.style.opacity = "0";
      setTimeout(() => {
        content.style.display = "none";
      }, 400);
    }
  });
});

//

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("description-1");

  dropdown.addEventListener("click", function () {
    let content = document.getElementById("content-1");
    dropdown.classList.toggle("expand-1");

    if (dropdown.classList.contains("expand-1")) {
      content.style.animation = "fadeIn 0.4s";
      content.style.display = "flex";
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    } else {
      content.style.opacity = "0";
      setTimeout(() => {
        content.style.display = "none";
      }, 400);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("description-2");

  dropdown.addEventListener("click", function () {
    let content = document.getElementById("content-2");
    dropdown.classList.toggle("expand-2");

    if (dropdown.classList.contains("expand-2")) {
      content.style.animation = "fadeIn 0.4s";
      content.style.display = "flex";
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    } else {
      content.style.opacity = "0";
      setTimeout(() => {
        content.style.display = "none";
      }, 400);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("description-3");

  dropdown.addEventListener("click", function () {
    let content = document.getElementById("content-3");
    dropdown.classList.toggle("expand-3");

    if (dropdown.classList.contains("expand-3")) {
      content.style.animation = "fadeIn 0.4s";
      content.style.display = "flex";
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    } else {
      content.style.opacity = "0";
      setTimeout(() => {
        content.style.display = "none";
      }, 400);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("description-4");

  dropdown.addEventListener("click", function () {
    let content = document.getElementById("content-4");
    dropdown.classList.toggle("expand-4");

    if (dropdown.classList.contains("expand-4")) {
      content.style.animation = "fadeIn 0.4s";
      content.style.display = "flex";
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100);
    } else {
      content.style.opacity = "0";
      setTimeout(() => {
        content.style.display = "none";
      }, 400);
    }
  });
});

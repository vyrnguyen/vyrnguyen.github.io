var messagesToType = [
  "software engineer",
  "woman in tech",
  "baker",
  "full-stack developer",
  "ui/ux designer",
  "code coach",
  "os-enthusiast",
  "video game maker",
];
var menuIcon = document.getElementById("menu-icon");

function typewriter(i = 0, text = "", callback) {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    setTimeout(function () {
      typewriter(i + 1, text, callback);
    }, 100);
  } else if (typeof callback == "function") {
    setTimeout(callback, 2000);
  }
}

function startTypingAnimation(i) {
  if (i >= messagesToType.length) {
    setTimeout(function () {
      startTypingAnimation(0);
    }, 2000);
  } else {
    typewriter(0, messagesToType[i], function () {
      startTypingAnimation(i + 1);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  startTypingAnimation(0);
});

// Menu Icons for mobile view
menuIcon.addEventListener("click", function () {
  var navLinks = document.getElementById("nav-links");
  var navLinksStyle = window.getComputedStyle(navLinks);

  if (navLinksStyle.getPropertyValue("display") === "none") {
    navLinks.style.display = "flex";
    menuIcon.classList.remove("bi-three-dots");
    menuIcon.classList.add("bi-x");
  } else {
    navLinks.style.display = "none";
    menuIcon.classList.add("bi-three-dots");
    menuIcon.classList.remove("bi-x");
  }
});

window.addEventListener("resize", function() {
  var navLinks = document.getElementById("nav-links");
  if (window.innerWidth > 600) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
    menuIcon.classList.add("bi-three-dots");
    menuIcon.classList.remove("bi-x");
  }
});

var menuIcon = document.getElementById("menu-icon");

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

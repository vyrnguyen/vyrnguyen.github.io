var root = document.documentElement;
var themeBtn = document.getElementById("theme-btn");
var themeIcon = document.getElementById("theme-icon");

var menuIcon = document.getElementById("menu-icon");

var githubIcon = document.getElementById("github-icon");
var linkedinIcon = document.getElementById("linkedin-icon");
var emailIcon = document.getElementById("email-icon");

function setPJSColor(color = "#fffcfa") {
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.particles.color.value = color;
    window.pJSDom[0].pJS.particles.line_linked.color = color;
    window.pJSDom[0].pJS.fn.particlesRefresh();
  }
}
 
function setDarkTheme(color = "#fffcfa") {
  localStorage.setItem("theme", "dark");
  setPJSColor(color);
  themeIcon.style.color = color;
  themeIcon.style.fontSize = "xx-large";
  themeIcon.classList.remove("bi-sun-fill");
  themeIcon.classList.add("bi-moon-fill");
  menuIcon.style.color = color;
  githubIcon.src = "static/images/footer/github-light.png";
  linkedinIcon.src = "static/images/footer/linkedin-light.png";
  emailIcon.src = "static/images/footer/email-light.png";
}

function setLightTheme(color = "#54433a") {
  localStorage.setItem("theme", "light");
  setPJSColor(color); 
  themeIcon.style.color = color;
  themeIcon.style.fontSize = "xxx-large";
  themeIcon.classList.add("bi-sun-fill");
  themeIcon.classList.remove("bi-moon-fill");
  menuIcon.style.color = color;
  githubIcon.src = "static/images/footer/github.png";
  linkedinIcon.src = "static/images/footer/linkedin.png";
  emailIcon.src = "static/images/footer/email.png";
}

// On page load, set the theme.
document.addEventListener("DOMContentLoaded", () => {
  var mode = localStorage.getItem("theme");

  if (mode == null) {
    localStorage.setItem("theme", "light");
    setLightTheme();
  } else if (mode == "dark") {
    root.classList.toggle("dark");
    setDarkTheme();
  }
});

function toggleTheme() {
  root.classList.toggle("dark");

  var mode = localStorage.getItem("theme");
  if (mode == "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

themeBtn.addEventListener("click", toggleTheme);

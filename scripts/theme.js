var root = document.documentElement;
var themeBtn = document.getElementById("theme-btn");
var themeIcon = document.getElementById("theme-icon");
 
var githubIcon = document.getElementById("github-icon");
var linkedinIcon = document.getElementById("linkedin-icon");
var emailIcon = document.getElementById("email-icon");
 
var particlesjs = document.getElementById("particles-js");

function setDarkTheme() {
  localStorage.setItem("theme", "dark");

  themeIcon.src = "static/images/navbar/moon.png";
  githubIcon.src = "static/images/footer/github-light.png";
  linkedinIcon.src = "static/images/footer/linkedin-light.png";
  emailIcon.src = "static/images/footer/email-light.png";
}

function setLightTheme() {
  localStorage.setItem("theme", "light");

  themeIcon.src = "static/images/navbar/sun.png";
  githubIcon.src = "static/images/footer/github.png";
  linkedinIcon.src = "static/images/footer/linkedin.png";
  emailIcon.src = "static/images/footer/email.png";
}

// On page load, set the theme.
document.addEventListener("DOMContentLoaded", () => {
  var mode = localStorage.getItem("theme");

  if (mode == null) {
    // dont need to set anything; base by default
    localStorage.setItem("theme", "light");
  } else if (mode == "dark") {
    root.classList.toggle("dark");
    particlesjs.toggle("dark");
    setDarkTheme();
  }
});

function toggleTheme() {
  root.classList.toggle("dark");
  particlesjs.toggle("dark");

  var mode = localStorage.getItem("theme");
  if (mode == "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

themeBtn.addEventListener("click", toggleTheme);

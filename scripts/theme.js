root = document.documentElement;
themeBtn = document.getElementById("theme-btn");
themeIcon = document.getElementById("theme-icon");

githubIcon = document.getElementById("github-icon");
linkedinIcon = document.getElementById("linkedin-icon");
emailIcon = document.getElementById("email-icon");

particlesJS = document.getElementById("particles-js");

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
    particlesJS.toggle("dark");
    setDarkTheme();
  }
});

function toggleTheme() {
  root.classList.toggle("dark");
  particlesJS.toggle("dark");

  var mode = localStorage.getItem("theme");
  if (mode == "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

themeBtn.addEventListener("click", toggleTheme);

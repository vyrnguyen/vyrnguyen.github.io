root = document.documentElement;
themeBtn = document.getElementById("theme-btn");
themeIcon = document.getElementById("theme-icon");

githubIcon = document.getElementById("github-icon");
linkedinIcon = document.getElementById("linkedin-icon");
emailIcon = document.getElementById("email-icon");

function setDarkThemeIcons() {
  themeIcon.src = "static/images/navbar/moon.png";
  githubIcon.src = "static/images/footer/github-light.png";
  linkedinIcon.src = "static/images/footer/linkedin-light.png";
  emailIcon.src = "static/images/footer/email-light.png";
}

function setLightThemeIcons() {
  themeIcon.src = "static/images/navbar/sun.png";
  githubIcon.src = "static/images/footer/github.png";
  linkedinIcon.src = "static/images/footer/linkedin.png";
  emailIcon.src = "static/images/footer/email.png";
}

// On page load, set the theme.
document.addEventListener("DOMContentLoaded", () => {
  window.particleJSColor = "#54433a";
  var mode = localStorage.getItem("theme");
  if (mode == null) {
    // dont need to set anything; base by default
    localStorage.setItem("theme", "light");
  } else if (mode == "dark") {
    window.particleJSColor = "#fffcfa";
    root.classList.toggle("dark");
    setDarkThemeIcons();
  }
});

function toggleTheme() {
  root.classList.toggle("dark");

  var mode = localStorage.getItem("theme");
  if (mode == "light") {
    window.particleJSColor = "#54433a";
    localStorage.setItem("theme", "dark");
    setDarkThemeIcons();
  } else {
    window.particleJSColor = "#fffcfa";
    localStorage.setItem("theme", "light");
    setLightThemeIcons();
  }
}

themeBtn.addEventListener("click", toggleTheme);

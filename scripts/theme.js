root = document.documentElement;
themeBtn = document.getElementById("theme-btn");
themeIcon = document.getElementById("theme-icon");

// On page load, set the theme.
window.onload = () => {
  var mode = localStorage.getItem("theme");
  console.log(mode);
  if (mode == null) {
    localStorage.setItem("theme", "light");
  } else if (mode == "dark") {
    root.classList.toggle("dark");
    themeIcon.src = "/static/images/navbar/moon.png";
  }
};

function toggleTheme() {
  mode = localStorage.getItem("theme");
  root.classList.toggle("dark");
  if (mode == "light") {
    localStorage.setItem("theme", "dark");
    themeIcon.src = "/static/images/navbar/moon.png";
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.src = "/static/images/navbar/sun.png";
  }
}

themeBtn.addEventListener("click", toggleTheme);

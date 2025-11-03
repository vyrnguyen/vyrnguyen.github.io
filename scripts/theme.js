root = document.documentElement;
themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    root.classList.toggle("dark");
  }
)


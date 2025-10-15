const projectSection = document.querySelector(".projects");
const card = document.querySelector(".card");
const projectInitDisplay = projectSection.style.display;
const btn = document.querySelector(".btn");

function fadeOut(element) {
  var i = 1;
  var timer = setInterval(function () {
    if (i <= 0) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = i;
    i -= 0.1;
  }, 50);
}

function fadeIn(element) {
  var i = 0;
  element.style.display = projectInitDisplay; 
  var timer = setInterval(function () {
    if (i >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = i;
    i += 0.1;
  }, 50);
}

var isFaded = false;
card.addEventListener("click", () => {
  if (isFaded) {
    fadeIn(projectSection);
    isFaded = false;
  } else {
    fadeOut(projectSection);
    isFaded = true;
  }
});

btn.addEventListener("click", () => {
  fadeIn(projectSection);
})

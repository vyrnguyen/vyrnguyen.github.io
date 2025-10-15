const projectSection = document.querySelector(".projects");
const card = document.querySelector(".card");
const projectInitDisplay = projectSection.style.display;

var isFaded = false;
card.addEventListener("click", () => {
  if (isFaded) {
    projectSection.style.animation = "fade-in 0.5s forwards";
    isFaded = false;
  } else {
    projectSection.style.animation = "fade-out 0.5s forwards";
    isFaded = true;
  }
});

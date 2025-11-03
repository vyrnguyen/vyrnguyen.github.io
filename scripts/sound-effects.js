var click = document.getElementById("click-sound");
const sfx = document.getElementsByClassName("sfx");

for (let i = 0; i < sfx.length; i++) {
  sfx[i].addEventListener("click", function() {
    click.currentTime = 0;
    click.play();
  })
}

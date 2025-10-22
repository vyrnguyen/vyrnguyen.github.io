const galleryImages = document.getElementsByClassName("gallery-img");
const overlay = document.getElementById("overlay");
const zoomedImage = document.getElementById("zoomed-img");

function zoomIn() {
  zoomedImage.src = this.getAttribute("src"); 
  zoomedImage.alt = zoomedImage.alt + this.getAttribute("alt"); 
  overlay.classList.add("active");
}

function zoomOut() {
  overlay.classList.remove("active");
  zoomedImage.src = "";
  zoomedImage.alt = "Zoomed img of "
};

for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", zoomIn);
}

overlay.addEventListener("click", zoomOut);

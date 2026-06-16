const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll("img[src^='img/']");

images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});
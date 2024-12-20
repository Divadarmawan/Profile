document.getElementById("menu-icon").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

// Feedback form submission handler
const feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("feedbackMessage").style.display = "block";
});

// Example multimedia functionality (gallery slideshow)
const galleryImages = document.querySelectorAll(".gallery img");
let currentImageIndex = 0;

setInterval(() => {
  galleryImages[currentImageIndex].classList.remove("visible");
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  galleryImages[currentImageIndex].classList.add("visible");
}, 3000);

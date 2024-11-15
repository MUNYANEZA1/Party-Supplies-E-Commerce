//carousel.js

export function initializeCarousel() {
  let carouselIndex = 0;
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  function showCarouselImage(index) {
    carouselImagesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  // Previous button functionality
    document.querySelector(".prev-btn").addEventListener("click", () => {
      carouselIndex = (carouselIndex > 0) ? carouselIndex - 1 : totalImages - 1;
      showCarouselImage(carouselIndex);
    });

  // Next button functionality
  document.querySelector(".next-btn").addEventListener("click", () => {
    carouselIndex = (carouselIndex < totalImages - 1) ? carouselIndex + 1 : 0;
    showCarouselImage(carouselIndex);
  });

  // Automatically slide every 3 seconds
  setInterval(() => {
    carouselIndex = (carouselIndex < totalImages - 1) ? carouselIndex + 1 : 0;
    showCarouselImage(carouselIndex);
  }, 3000);
}

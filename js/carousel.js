export function initializeCarousel() {
  let carouselIndex = 0;
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  function showCarouselImage(index) {
    // Set transform to slide images one by one based on their index
    document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector(".prev-btn").addEventListener("click", () => {
    carouselIndex = (carouselIndex > 0) ? carouselIndex - 1 : totalImages - 1;
    showCarouselImage(carouselIndex);
  });

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



// Array of image URLs
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg"
  ];
  
  // Function to get a random image URL
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }
  
  // Function to add images to the carousel
  function addImagesToCarousel(numImages) {
    const carouselImages = document.querySelector('.carousel-images');
    for (let i = 0; i < numImages; i++) {
      const img = document.createElement('img');
      img.src = getRandomImage();
      img.alt = `Image ${i + 1}`;
      carouselImages.appendChild(img);
    }
  }
  
  // Add 10 random images to the carousel
  addImagesToCarousel(10);
  
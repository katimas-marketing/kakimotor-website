const carousel = document.querySelector(".carousel"),
      firstImg = carousel.querySelectorAll("img")[0],
      arrowIcons = document.querySelectorAll(".wrapper i"),
      indicatorsContainer = document.querySelector('.indicators');

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});


//Create indicators for each image
const createIndicators = () => {
  const totalImages = carousel.querySelectorAll("img").length;
  for (let i = 0; i < totalImages; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
      // Set the scrollLeft to the center of the ith image when an indicator is clicked
      const imageWidth = firstImg.clientWidth + 14; // Image width plus margin
      const scrollLeft = (i * imageWidth) - (carousel.clientWidth / 2) + (imageWidth / 2); // Calculate scrollLeft position
      carousel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    });
    indicatorsContainer.appendChild(indicator);
  }
};

// Update indicators based on the current active image
const updateIndicators = () => {
  const indicators = document.querySelectorAll('.indicator');
  // const currentIndex = Math.round(carousel.scrollLeft / firstImg.clientWidth);
  const currentIndex = Math.round(carousel.scrollLeft / (firstImg.clientWidth + 14)); // Image width plus margin
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
};

carousel.addEventListener('scroll', updateIndicators);

createIndicators();
updateIndicators();


// Auto Slide Function
// const autoSlide = () => {
//   // Calculate the next scroll position
//   let nextScrollLeft = carousel.scrollLeft + 1220; // Adjust this value as needed for smooth scrolling

//   // If the next scroll position exceeds the maximum scrollable width, reset it to 0
//   if (nextScrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
//       // Smoothly scroll back to the beginning
//       carousel.scrollTo({
//           left: 0,
//           behavior: 'smooth'
//       });
//   } else {
//       // Smoothly scroll to the next position
//       carousel.scrollTo({
//           left: nextScrollLeft,
//           behavior: 'smooth'
//       });
//   }
// }

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// // Add auto sliding functionality
// setInterval(() => {
//     autoSlide();
// }, 2500); // Adjust the interval (in milliseconds) as needed

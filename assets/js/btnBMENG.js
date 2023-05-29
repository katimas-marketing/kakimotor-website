$(document).ready(function() {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 1,
      autoplay: false, // Disable autoplay
    });
  
    // Add click event listener to BM button
    $('#bmButton').on('click', function() {
      $('.owl-carousel').trigger('to.owl.carousel', 0); // Go to the first slide
    });
  
    // Add click event listener to ENG button
    $('#engButton').on('click', function() {
      $('.owl-carousel').trigger('to.owl.carousel', 1); // Go to the second slide
    });
  });
  
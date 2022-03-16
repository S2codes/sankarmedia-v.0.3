$(document).ready(function () {
  // review carousel - slick js
  $('.reviewContainer').slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1000,
  });


  $('.ourclients').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });


})

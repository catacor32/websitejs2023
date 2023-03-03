var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover',
  keyboard:true,
  touch: true,
  ride: false
});
// carousel.on('slide.bs.carousel', function () {
//   alert(1);
// })
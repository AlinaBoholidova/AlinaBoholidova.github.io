jQuery(document).ready(function ($) {

    function AutoPlay(){
      setInterval(function () {
          moveRight();
      }, 5000);
    };

    AutoPlay();

      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 500, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 500, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('button.control_prev').click(function () {
          moveLeft();
      });
  
      $('button.control_next').click(function () {
          moveRight();
      });
  
  });
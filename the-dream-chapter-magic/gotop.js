$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Go Top"><i class="fas fa-chevron-up"></i></a>');
  });
  
$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "800") $(this).fadeIn("slow")
    var scrollDiv = $(this);
  $(window).scroll(function() {
    if ($(window).scrollTop() <= "800") $(scrollDiv).fadeOut("slow")
    else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
    $("html, body").animate({scrollTop: 0}, "slow")
  })
  }
});
  
$(function() {
  $("#go-top").scrollToTop();
});
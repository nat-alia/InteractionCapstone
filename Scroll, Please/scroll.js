var s = skrollr.init();

$(document).ready(function(){
  $('.scroll-container-text').html($(window).scrollTop());
  $(window).scroll(function(e){
    $('.scroll-container-text').html($(window).scrollTop());
  });

  $('.footer .footer-pixelcount').html($(window).scrollTop());
  $(window).scroll(function(e){
    $('.footer .footer-pixelcount').html($(window).scrollTop());
  });
});

new WOW().init();



// Show Or Hide Element Based on ScrollTop
$(document).scroll(function () {
     if ($(document).scrollTop() > 300) {
         $('.top').fadeIn();
     } else {
         $('.top').fadeOut();
     }
 })
 
 $('.top').click(function () {
 
     $('body, html').animate({
         scrollTop: 0
     }, 1500);
 
 })
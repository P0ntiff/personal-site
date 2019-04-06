$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("navbar-shrink");
    } else {
      $("nav").removeClass("navbar-shrink");
    }
  });


var scroller = document.getElementById("scroll");

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    scroller.css({
        'opacity' : 1 - st/600
    });
});
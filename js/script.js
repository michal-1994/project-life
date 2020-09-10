$(function(){

	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
      $('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
    });
    $(".scrollTopButton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").offset().top
        }, 400);
    });
  
    $("#started").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#intro").offset().top
        }, 400);
    });
});

window.sr = ScrollReveal();

var slideUp = {
    mobile: true,
    distance: '50%',
    origin: 'left',
    duration: 1000
};

ScrollReveal().reveal('.intro__left', slideUp);

var slideUp = {
    mobile: true,
    distance: '50%',
    origin: 'right',
    duration: 1000
};

ScrollReveal().reveal('.intro__right', slideUp);


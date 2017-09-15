$(window).scroll(function(){
  if ($(window).scrollTop() >= 180) {
  	$('.pagetitle').removeClass('hidetitle');
  	$('.titlebar').addClass('titlebarshadow');
  }
  else {
    $('.pagetitle').addClass('hidetitle');
    $('.titlebar').removeClass('titlebarshadow');
  }
});
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
$(document).ready(function() {
	$('.thumbnail').click(function(e) {
		if($(this).hasClass('col-4')) {
      // $('.expandable-box.out').not($(this)).removeClass('out');
      // $(this).removeClass('col-4');
      $(this).find('.thumbnailbutton').addClass('border');
    }
    else {
      // $(this).addClass('col-4');
      $(this).find('.thumbnailbutton').removeClass('border');
    }
	});
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
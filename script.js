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
      // var width = $(this).find('.thumbnailimage').css('width');
      $(this).addClass('col-12');
      $(this).removeClass('col-4');
      $(this).find('.thumbnailbutton').removeClass('col-12');
      $(this).find('.thumbnailbutton').addClass('col-4');
      $(this).find('.thumbnailtext').removeClass('col-0');
      $(this).find('.thumbnailtext').addClass('col-8');
      $(this).find('.thumbnailtext').addClass('padding');
      // $(this).find('.thumbnailimage').css('width', width);
      // $(this).find('.thumbnailtext').css('height', 'auto');
      // $(this).find('.thumbnailtext').css('max-width', '100%');
    }
    else {
      $(this).addClass('col-4');
      $(this).removeClass('col-12');
      $(this).find('.thumbnailbutton').addClass('col-12');
      $(this).find('.thumbnailbutton').removeClass('col-4');
      $(this).find('.thumbnailtext').addClass('col-0');
      $(this).find('.thumbnailtext').removeClass('col-8');
      $(this).find('.thumbnailtext').removeClass('padding');
      // $(this).find('.thumbnailimage').css('width', '100%');
      // $(this).find('.thumbnailtext').css('height', '0');
      // $(this).find('.thumbnailtext').css('max-width', '0');
      // $(this).find('.thumbnailbutton').removeClass('border');
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
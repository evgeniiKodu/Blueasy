$(document).ready(function(){
	var touch = $('.touch-menu');
	var menu = $('.menu');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 768 ) {
			menu.removeAttr('style');
		}
	});
});

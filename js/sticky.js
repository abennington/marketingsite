$(document).ready(function() {
	// grab the initial top offset of the navigation 
   	var stickyNavTop = $('.nav').offset().top;

   	
   	// this function decides whether the navigation bar should be "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	    if (scrollTop > stickyNavTop) { 
	        $('.nav').addClass('sticky');
	    } else {
	        $('.nav').removeClass('sticky'); 
	    }
	};

	stickyNav();

	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});
});


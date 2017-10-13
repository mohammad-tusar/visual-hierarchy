$(document).ready(function(){

	//Scroll Menu

	$("#navnav").onePageNav({
	    changeHash: true,
	    scrollSpeed: 1000,
	    filter: ':not(.external)'
	});

	$("#navrol").onePageNav({
	    changeHash: true,
	    scrollSpeed: 1000,
	    filter: ':not(.external)'
	});

	//wow
	new WOW().init();

	// owlCarousel

	 $("#owl-demo").owlCarousel({

	    navigation : true, // Show next and prev buttons
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    singleItem:true
	 
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	 
	  });

	// owlCarousel

	// Modal
	$('.modal').on('shown.bs.modal', function () {
	  	$('#myInput').focus();
	});

	//Custom style
	$(".conat").attr("title", "Click Me");
	$(".read").attr("title", "Read More Content");
	$(".carousel-indicators").children('li').attr("title", "Click Next");

	//Editor
	$("#myNavmenu > ul > li > a").on("click", function(){
		$("nav.offcanvas.in")
			.offcanvas('toggle')
			.siblings("div.navbar")
				.css({"left": "255", "right": "-192"});
	});

	//ScrollTop
	$(function () {
	    $.scrollUp({
	        scrollName: 'scrollUp',      // Element ID
	        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top',           // 'top' or 'bottom'
	        scrollSpeed: 300,            // Speed back to top (ms)
	        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
	        animation: 'fade',           // Fade, slide, none
	        animationSpeed: 200,         // Animation speed (ms)
	        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
	        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
	        scrollText: 'Scroll to top', // Text for element, can contain HTML
	        scrollTitle: false,          // Set a custom <a> title if required.
	        scrollImg: true,            // Set true to use image
	        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647           // Z-Index for the overlay
	    });
	});


	//AppClick
	$(".tabline").children('img').addClass(function(i){
		return "image" + " " + "name" + (i + 1);
	});
	$(".media").addClass(function(e){
		return "media" + (e + 1);
	});
	$(".image").hide();
	
	$(".media").on("click", function(){
		$(".media").removeClass('colx');
		$(this).addClass('colx');
	});

	if( $(".media").hasClass('one1') ){
		$(".one1").addClass('colx');
		$(".name1").show();
	}

	$(".media").bind("click", function(){
		if($(this).hasClass('media1')){
			$(".name1").fadeIn(1000);
		}else{
			$(".name1").fadeOut(1000);
		}
		if($(this).hasClass('media2')){
			$(".name2").fadeIn(1000);
		}else{
			$(".name2").fadeOut(1000);
		}
		if($(this).hasClass('media3')){
			$(".name3").fadeIn(1000);
		}else{
			$(".name3").fadeOut(1000);
		}
		if($(this).hasClass('media4')){
			$(".name4").fadeIn(1000);
		}else{
			$(".name4").fadeOut(1000);
		}
		if($(this).hasClass('media5')){
			$(".name5").fadeIn(1000);
		}else{
			$(".name5").fadeOut(1000);
		}
		if($(this).hasClass('media6')){
			$(".name6").fadeIn(1000);
		}else{
			$(".name6").fadeOut(1000);
		}
		
	});


});
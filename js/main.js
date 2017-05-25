$(document).ready(function(){
	function wResize(){
		$("header").css("height", $(window).height());
	}
	wResize();
	$(window).resize(function(){
		wResize();
	});

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});
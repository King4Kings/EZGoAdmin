$(document).ready(function(){

	/*Navigation links action (main content)**************************/
	
	$('#Side-nav ul.side-nav li a').click(function(){	
		var cnt = $(this).attr('content');
		$('.mc-active').removeClass('mc-active');
		$('#'+cnt).addClass('mc-active');
		$('.m-active').removeClass('m-active');
		$(this).parent('li').addClass('m-active');
	});
	
	
	
});










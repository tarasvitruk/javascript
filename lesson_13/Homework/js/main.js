$(document).ready(function() {
	$('.main_btna, .main_btn, [href="#sheldure"]').click(function() {
		$('.modal').css('display', 'block');
		$('.overlay').slideToggle('slow');
		$('.modal').animate({
			'position': 'relative',
			'top': '-1500'}, 1).animate({
				'top': '0'
			}, 2000);
	});
	$('.close').click(function(){
		$('.overlay').slideToggle(2000);
		$('.modal').animate({
			'top': '-1500'}, 2000);
	});
});
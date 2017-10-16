$(function() {
	$('.main-nav li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.main-body').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
	
});
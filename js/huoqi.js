$(function() {
	$('.content-tab span').click(function() {
		console.log($(this).eq($(this).index()))
		$(this).addClass('active').siblings().removeClass('active');
	});
});
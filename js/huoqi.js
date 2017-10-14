$(function() {
	$('.content-tab span').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-con-items').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
});
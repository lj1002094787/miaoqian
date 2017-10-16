$(function() {
	$('.wrap-panel-head li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.wrap-panel-l-main').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
});
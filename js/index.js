$(function() {
	var index = 0;
	var nIndex = 0;
	var dynIndex = 0;
	var length = $('.banner-indexes li').length;
	var aNoticeLi = $('.notice-list li').length;
	var aDynamicLi = $('.mq-dynamic-img ol li').length;

	//定时器
	var timer = null;
	var timer2 = null;
	var timerDyn = null;

	function autoplay() {
		timer = setInterval(function() {
			banner();
		}, 5000);
		timer2 = setInterval(function() {
			notice();
			dynamic();
		}, 4000);
	}
	autoplay();

	//1大轮播索引切换
	$('.banner-indexes li').click(function() {
		index = $(this).index();
		$('.banner-indexes li').eq(index).addClass('active').siblings().removeClass('active');
		$('.banner-slide a').eq(index).fadeIn(400).siblings().fadeOut(400);
	});

	function banner() {
		index++;
		if(index > length - 1) {
			index = 0;
		}
		$('.banner-indexes li').eq(index).addClass('active').siblings().removeClass('active');
		$('.banner-slide a').eq(index).fadeIn(400).siblings().fadeOut(400);
	}

	//2notice
	function notice() {
		nIndex++;
		if(nIndex > aNoticeLi - 1) {
			nIndex = 0;
		}
		$('.notice-list ul').css('top', -50 * nIndex + 'px');
	}

	//3dynamic索引切换
	$('.mq-dynamic-img ol li').mouseover(function() {
		dynIndex = $(this).index();
		dynamic();
	});

	//dynamic
	function dynamic() {
		$('.mq-dynamic-img ul').css('left', -260 * dynIndex + 'px');
		$('.md-dynamic-title ul').css('top', -40 * dynIndex + 'px');
		$('.mq-dynamic-img ol li').eq(dynIndex).addClass('active').siblings().removeClass('active');
		dynIndex++;
		if(dynIndex > aDynamicLi - 1) {
			dynIndex = 0;
		}
	}

});
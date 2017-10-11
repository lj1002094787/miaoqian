//var slide = document.querySelectorAll('.banner-slide a');
//var indexes = document.querySelectorAll('.banner-indexes li');
//
//for(var i = 0; i < indexes.length; i++) {
//	indexes[i].index = i;
//	indexes[i].onclick = function() {
//		for(var j = 0; j < indexes.length; j++) {
//			indexes[j].className = '';
//			slide[j].className = '';
//		}
//		indexes[this.index].className = 'active';
//		slide[this.index].className = 'active';
//	}
//}
$(function() {
	var index = 0;
	var length = $('.banner-indexes li').length;

	//索引切换
	$('.banner-indexes li').click(function() {
		index = $(this).index();
	});

	//定时器
	var timer = null;

	function autoplay() {
		timer = setInterval(function() {
			add();
		}, 5000);
	}
	autoplay();

	function add() {
		index++;
		if(index > length - 1) {
			index = 0;
		}
		init();
	}

	//初始化函数
	function init() {
		$('.banner-indexes li').eq(index).addClass('active').siblings().removeClass('active');
		$('.banner-slide a').eq(index).fadeIn(400).siblings().fadeOut(400);
	}
});
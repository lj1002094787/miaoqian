var myAssets = document.querySelector('.myAssets');
var userInfo = document.querySelector('.userInfo');
myAssets.onmouseover = function() {
	this.className = 'myAssets active';
	userInfo.style.display = 'block';
}
myAssets.onmouseout = function() {
	this.className = 'myAssets';
	userInfo.style.display = 'none';
}
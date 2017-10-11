var oInvite = document.querySelector('.invite');
var oArrow = document.querySelector('.invite-arrow');
var oInvibox = document.querySelector('.invite-box .ibox');
var oAgree = document.querySelector('.agreement');
var oCkImg = document.querySelector('.ck-img');
var oShowPsw = document.querySelector('.showPsw');

var phone = document.getElementById('phone');
var shortMsg = document.getElementById('shortMsg');
var psw = document.getElementById('password');
var getCode = document.querySelector('.getCode');
var invite = document.getElementById('invite');

var on = true;
var on2 = true;
var on3 = true;

//邀请码开关
oInvite.onclick = function() {
	if(on) {
		oArrow.className = 'invite-arrow active';
		oInvibox.style.display = 'block';
	} else {
		oArrow.className = 'invite-arrow';
		oInvibox.style.display = 'none';
	}
	on = !on;
}

//同意协议开关
oAgree.onclick = function() {
	if(on2) {
		oCkImg.className = 'ck-img active';
	} else {
		oCkImg.className = 'ck-img';
	}
	on2 = !on2;
}

//查看密码开关
oShowPsw.onclick = function() {
	if(on3) {
		this.className = 'showPsw active';
		psw.attributes.type.value = 'text';
	} else {
		this.className = 'showPsw';
		psw.attributes.type.value = 'password';
	}
	on3 = !on3;
}

/*表单数据验证*/

//手机验证
phone.onblur = function() {
	var oError = this.nextSibling.nextSibling;
	var reg = /^[1][3,4,5,7,8][0-9]{9}$/.test(this.value);
	if(this.value == '' || this.value == null) {
		this.parentElement.className = 'ibox active';
		oError.innerHTML = '请输入11位手机号码';
		oError.style.display = 'block';
	} else {
		if(reg) {
			this.parentElement.className = 'ibox';
			oError.style.display = 'none';
		} else {
			this.parentElement.className = 'ibox active';
			oError.innerHTML = '手机号码格式错误';
			oError.style.display = 'block';
		}
	}
}

//短信验证
shortMsg.onblur = function() {
	var oError = this.nextSibling.nextSibling;
	var reg = /^\w{4,6}$/.test(this.value);
	if(this.value == '' || this.value == null) {
		this.parentElement.className = 'ibox active';
		oError.innerHTML = '请输入6位数字验证码';
		oError.style.display = 'block';
	} else {
		if(reg) {
			this.parentElement.className = 'ibox';
			oError.style.display = 'none';
		} else {
			this.parentElement.className = 'ibox active';
			oError.innerHTML = '短信验证码格式错误';
			oError.style.display = 'block';
		}
	}
}

//获取短信验证
getCode.onclick = function() {
	var oError = phone.nextSibling.nextSibling;
	if(phone.value == '' || phone.value == null) {
		phone.parentElement.className = 'ibox active';
		oError.innerHTML = '请输入11位手机号码';
		oError.style.display = 'block';
	}
}

//密码验证
psw.onblur = function() {
	var oError = this.nextSibling.nextSibling;
	var reg = /^\w{6,16}$/.test(this.value);
	var regChinese = /[\u4e00-\u9fa5]/.test(this.value);
	if(regChinese) {
		this.parentElement.className = 'ibox active';
		oError.innerHTML = '密码不能包含中文';
		oError.style.display = 'block';
	} else if(this.value == '' || this.value == null) {
		this.parentElement.className = 'ibox active';
		oError.innerHTML = '请输入6-16位密码，字母区分大小写';
		oError.style.display = 'block';
	} else {
		if(reg) {
			this.parentElement.className = 'ibox';
			oError.style.display = 'none';
		} else {
			this.parentElement.className = 'ibox active';
			oError.innerHTML = '密码长度必须为6-16位的字符';
			oError.style.display = 'block';
		}
	}
}

//邀请码验证
invite.onblur = function() {
	var oError = this.nextSibling.nextSibling;
	var reg = /^\w{0,10}$/.test(this.value);
	if(reg) {
		this.parentElement.className = 'ibox';
		oError.style.display = 'none';
	} else {
		this.parentElement.className = 'ibox active';
		oError.innerHTML = '邀请码格式错误';
		oError.style.display = 'block';
	}
}
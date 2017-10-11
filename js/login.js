var inputs = document.querySelectorAll('.ibox input');
var errors = document.querySelectorAll('.ibox .error');
for(var i = 0; i < inputs.length; i++) {
	inputs[i].index = i;
	inputs[i].onblur = function() {
		var str = this.value;
		if(str == '' || str == null) {
			this.parentElement.className = "ibox active";
			errors[this.index].style.display = "block";
		} else {
			this.parentElement.className = "ibox";
			errors[this.index].style.display = "none";
		}
	}
}
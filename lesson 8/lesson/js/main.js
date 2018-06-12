let d = new Date();
let now = addZero(d.getHours()) + ':' + addZero(d.getMinutes()) + ':' + addZero(d.getSeconds());

function addZero(n) {
	if(n < 10) {
		n = '0' + n;
	}
	return n
}

document.write(now);
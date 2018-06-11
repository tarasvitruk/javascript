let d = new Date();
let now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + addZero(d.getDate()) + '.' + addZero(d.getMonth()) + '.' + d.  //треба продовжити

function addZero(n) {
	if(n < 10) {
		n = '0' + n;
	}
	return n
}

document.write(now);
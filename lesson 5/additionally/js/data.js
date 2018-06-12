let d = new Date();
let now = addZero(d.getHours()) + ':' + addZero(d.getMinutes()) + ':' + addZero(d.getSeconds()) + ' ' + addZero(d.getDate()) + '.' + addZero(d.getMonth()) + '.' + d.getFullYear();

function addZero(n) {
	if(n < 10) {
		n = '0' + n;
	}
	return n
}

document.write(now + '</br>');


var date = new Date();
document.write(date.toLocaleString('ru', {weekday: 'long'}));





/*Четвертое задание*/ 

let date1Date = [];
let date2Date = [];

function days() {
	let date1 = document.getElementById('date1'),
			date2 = document.getElementById('date2'),
			resultBox = document.getElementById('result'),
			result;

	let date1Value = date1.value,
			date2Value = date2.value;

	date1Value = date1Value.split('-');
	date2Value = date2Value.split('-');

	date1Date = new Date(date1Value[0], date1Value[1], date1Value[2]);
	date2Date = new Date(date2Value[0], date2Value[1], date2Value[2]);


	result = (date1Date - date2Date) / 86400000;
	
	if (isNaN(result)) {
		resultBox.value = '';
	} else if (result < 0) {
		resultBox.value = result * -1;
	} else resultBox.value = result;
	

}
btn.addEventListener('click', days);







let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (var i = 0; i < week.length; i++) {
	if (i > 4) {
			document.write(week[i].bold() + '<br />' );
	  }
	else if (i == 3) {
			document.write(week[i].italics() + '<br />' );
	  }
	else {
		document.write(week[i] + '<br />');
	}
} 



let arr = ['316', '198', '777', '490', '511', '374', '200'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i]);
	}
}
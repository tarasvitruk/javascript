let week = ['Понедельник', '<br>Вторник', '<br>Среда', '<br>Четверг'.italics(), '<br>Пятница', '<br>Суббота'.bold(), '<br>Воскресенье'.bold()];
document.write(week.join(''));


let arr = ['316', '198', '777', '490', '511', '374', '200'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i]);
	}
}
let str = "урок-3-был слишком легким";
let newStr = str[0].toUpperCase() + str.slice(1).replace( /-/g, " " );
		console.log(newStr);
		newStrTwo = newStr.replace( "легким", "" );
		newStrThree = newStrTwo.replace( "слишком", "слишкоо" );
		alert(newStrThree);

let arr = [20, 33, 1, "Человек", 2, 3];
let cubeSum = 0;
for (let i = 0; i < 6; i++) {
	if((typeof(arr[i])) === 'number') {
		var arr3 = arr[i]**3;
		cubeSum += arr3;
	} else {
			console.log('Не в этот раз =)');
		}
}
console.log(Math.sqrt(cubeSum));



let arg,
		newArg;
function argument(callback) {
	arg = prompt('Введите аргумент.');
	
	if((typeof(arg)) === 'string') {
		arg = arg.trim();
	} else {
		alert('Вы не ввели строку!');
	}
	callback();
};
argument(symbol);


function symbol() {
	if(arg.length > 50) {
		newArg = arg.slice(0, 50); + ' ...';
		console.log(newArg + ' ...');
	} else {
		alert('Ввели <50 символов');
		console.log(arg);
	}
};








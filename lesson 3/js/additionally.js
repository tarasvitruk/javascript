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



// function lesson(str) {
// 	if (!str) return str;

// 	return str[0].toUpperCase() + str.slice(1);
// }
// alert(newStr);
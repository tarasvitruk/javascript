function getFriendlyNumbers(start, end) {
	let sum1 = getDivisorsSum(start);
	let sum2 = getDivisorsSum(end);

	if(sum1 == end && sum2 == start) {
    return true;
	} else {
		return false;
	}
	return []
}
alert(getFriendlyNumbers(220, 284));
function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}


function getDivisors(num) {
	let arr = [];
	for(let i = 1; i < num; i++) {
		if(num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}


function getSum(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


module.exports = {
    firstName: 'Taras',
    secondName: 'Vitruk',
    task: getFriendlyNumbers
}

















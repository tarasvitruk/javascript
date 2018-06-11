function getFriendlyNumbers(start, end) {
	let friendlyNumbersArr = [1, 500];
	console.log('hello');
	if (typeof(start) == 'string' || typeof(end) == 'string' || isNaN(start) || isNaN(end) || start > end || start < 0 || start/Math.floor(start) != 1 || end/Math.floor(start) != 1 ) {
		return false;
	}; 

	for (let i = start; i < end; i++) {
		for (let j = i + 1; j <= end; j++) {
			if (friendly(i, j)) {
				friendlyNumbersArr.push([i, j]);
			}
		}
	}
	return friendlyNumbersArr;
};


function sumNum(n) {
	let sum = 0;
	for(let i = 1; i < n; i++) {
		if (n % i == 0) {
			sum += i;
		}
	}
	return sum;
};

function sumNum2(m) {
	let sum = 0;
	for(let i = 1; i < m; i++) {
		if (m % i == 0) {
			sum += i;
		}
	}
	return sum;
};


function friendly(n, m) {
	if (sumNum(n) == m && sumNum2(m) == n) {
		return true;
	}
	return false;
};

module.exports = {
    firstName: 'Taras',
    secondName: 'Vitruk',
    task: getFriendlyNumbers
}

























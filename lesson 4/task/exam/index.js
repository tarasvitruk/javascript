function getFriendlyNumbers(start, end) {
	let friendlyNumbersArr = [];
		if ((typeof(start)) === 'number' && (typeof(end)) === 'number' && (start ^ 0) === start && (end ^ 0) === end && end >= start && start > 0 && end > 0 ){

			for (let i = start; i <= end; i++) {
	    	for (let y = start; y <= end; y++) {
	      	if (FrendlyNamber(i, y) && i !== y && i > y) {
	       	 friendlyNumbersArr.push([i, y].sort());
	      	}
	    	}
	  	}
		} else {
			 return false;
		};
	return friendlyNumbersArr;
}
getFriendlyNumbers(1, 300);


function FrendlyNamber(i, j) {
    if (getDivisorsSum(i) == j && getDivisorsSum(j) == i) { return true; } 
}

function SumOfTheArray(arr) { 
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function Divisors(num){ 
    var arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0){
            arr.push(i);
        }
    }
    return(arr)
}

function getDivisorsSum(num) {
    return SumOfTheArray(Divisors(num));
}
	


module.exports = {
    firstName: 'Taras',
    secondName: 'Vitruk',
    task: getFriendlyNumbers
};


function sum(a, b) {
	return a + b > 10;
}
sum(2,2)


let numArr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = numArr[1][1];


var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

// Test-1

let assert = require('chai').assert

describe('sum', function() {

    it('Тип данных true', function() {
        assert.typeOf(sum(2,2), 'true')
    });
});

// Test-2

describe('num', function() {

    it('Num = 5', function() {
        assert.equal(num, 5)
    });
});

// Test-3

describe('each', function() {

    it('each возвращает массив', function() {
        assert.typeOf(each(arr, myFunc), 'array')
    });

    it('Свойство lenght', function() {
        assert.equal(each(arr, myFunc).length, arr.length)
    });
});
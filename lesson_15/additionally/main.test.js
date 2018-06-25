//Нужно установить jest-extended (https://github.com/jest-community/jest-extended)
const sum = require('./test1');
const num = require('./test2');
const eachFn = require('./test3.js');
const { each: each } = eachFn;
const { arr: arr } = eachFn;
const { myFunc: myFunc } = eachFn;

test('Функция sum должна возвращать тип данных true', () => {
    expect(sum(2, 2)).toBeTruthy();
});

test('Переменная num должна быть равна 5', () => {
    expect(num()).toBe(5);
});

test('each возвращает массив', () => {
    expect(each(arr, myFunc)).toBeArray(); 
});

test('Cвойство length', ()=> {
    expect(each(arr, myFunc).length).toEqual(arr.length);
});
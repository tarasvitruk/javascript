var money = prompt("Ваш бюджет на месяц?");
var name = prompt("Название вашего магазина?");

var mainList = {
	budget: money,
	shpName: name,
	shopGoods: [],
	employers: {},
	open: false
};

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
}

alert("Ваш бюджет на 1 день: " + (mainList.budget / 30));

console.log(mainList);
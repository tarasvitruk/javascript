var money = prompt("Ваш бюджет на месяц?", "50000");
var nameShop = prompt("Название вашего магазина?");

var mainList = {
	money,
	nameShop,
	shopGoods: [],
	employers: {},
	open: false
};

 mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
 mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
 mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert("Ваш бюджет на 1 день: " + (money / 30));
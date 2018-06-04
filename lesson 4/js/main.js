let money,
		name,
		time,
		price;

function start() {
	money = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?", "");
	}

	name = prompt("Название вашего магазина?", "").toUpperCase();
	
};
time = 19;
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods:  function chooseGoods() {
									for (let i = 0; i < 5; i++) {
										let a = prompt("Какой тип товаров будем продавать?", "");
										if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
											console.log('Все верно!');
											mainList.shopGoods[i] = a;
										} else {
												--i;
											}
									}
								},
	workTime: function workTime(time) {
							if (time < 0) {
								console.log('Такого просто не может быть');
							} else if(time > 8 && time < 20) {
									console.log('Время работать!');
									mainList.open = true;
									} else if(time < 24) {
											console.log('Уже слишком поздно!');
											} else {
													console.log('В сутках только 24 часа!');
													}
						},
	hiringEmployers:  function hiringEmployers() {
											for (let i = 1; i < 5; i++) {
												let b = prompt("Введите имя сотрудника.", "");
												if((typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 30 ) {
													console.log('Все верно!');
													mainList.employers[i] = b;
												} else {
														--i;
													}
											}
										},
	discountSystem: function discountSystem() {
										if(mainList.discount === true) {
											price = 1000;
											priceProcent = price / 100 * 20;
											price = price - priceProcent;
											alert('С скидкой 20% будет: ' + price);
										} else {
											alert('Без скидки будет: ' + price);
										}
									},
	moneyBudget:  function moneyBudget(text) {
									alert("Ваш бюджет на 1 день: " + (mainList.budget / 30));
								},
	chooseShopItems:  function chooseShopItems() {
											let items = prompt('Перечислите через запятую товары.', '');
											while(!isNaN(items) || items === '' || items === null) {
												items = prompt('Перечислите через запятую товары.', '');
											}
											mainList.shopItems = items.split(',');
											mainList.shopItems.push(prompt('Может что то забыли?', ''));
											mainList.shopItems.sort();
										},
	shopItemsAlert: function shopItemsAlert() {
										mainList.shopItems.forEach(function(item, i, shopItems) {
										  alert( i + 1 + ": " + 'У нас вы можете приобрести: "' + item + '"' );
										});
									},
	objAlert: function objAlert() {
							for( let key in mainList) {
								console.log('Свойство ' + key + 'имеет значение ' + mainList[key]);
							}
						}


};

mainList.hiringEmployers();

mainList.discountSystem();

mainList.chooseGoods();

mainList.workTime();

mainList.moneyBudget();

mainList.chooseShopItems();

console.log(mainList);
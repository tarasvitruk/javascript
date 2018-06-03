let money,
		name,
		time,
		price;

function start() {
	money = prompt("Ваш бюджет на месяц?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

function hiringEmployers() {
	for (let i = 1; i < 5; i++) {
		let b = prompt("Введите имя сотрудника.");
		if((typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 30 ) {
			console.log('Все верно!');
			mainList.employers[i] = b;
		} else {
				--i;
			}
	}
}
hiringEmployers();

function discountSystem() {
	if(mainList.discount === true) {
		price = 1000;
		priceProcent = price / 100 * 20;
		price = price - priceProcent;
		alert('С скидкой 20% будет: ' + price);
	} else {
		alert('Без скидки будет: ' + price);
	}
}
discountSystem();

/* 1 способ */
function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
				--i;
			}
	}
}
chooseGoods();

/* 2 способ */
// let i = 0;
// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 			--i;
// 	}
// 	i++;
// }

/* 3 способ */
// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 			--i;
// 	}
// 	i++;
// } while (i < 5);

function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			} else if(time < 24) {
					console.log('Уже слишком поздно!');
					} else {
							console.log('В сутках только 24 часа!');
							}
}
workTime();

// switch (true) {
// 	case (time < 0):
// 		console.log('Такого просто не может быть');
// 		break;
// 	case (time > 8 && time < 20):
// 		console.log('Время работать!');
// 		break;
// 	case (time < 24):
// 		console.log('Уже слишком поздно!');
// 		break;
// 	default:
// 		console.log('В сутках только 24 часа!');
// 		break;
// }



function moneyBudget(text) {
	alert("Ваш бюджет на 1 день: " + (mainList.budget / 30));
}
moneyBudget();


console.log(mainList);
let ul = document.getElementsByTagName('ul');
let div = document.getElementsByTagName('div');
let li = document.createElement('li');
let menuItem = document.getElementsByClassName('menu-item');
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');
ul[0].appendChild(li);
ul[0].insertBefore(menuItem[2], menuItem[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
console.log(ul);

title.innerHTML = 'Мы продаем только подлинную технику Apple';

// let column = document.querySelectorAll('.column');
let adv = document.getElementsByClassName('adv');
adv[0].parentNode.removeChild(adv[0]);

let question = document.querySelector('.prompt');
question.textContent = prompt('Ваше отношение к технике apple?');

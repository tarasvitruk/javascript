let ul = document.getElementsByTagName('ul');
let li = document.createElement('li');
let menuItem = document.getElementsByClassName('menu-item');
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');
ul[0].appendChild(li);
ul[0].insertBefore(menuItem[2], menuItem[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
console.log(ul);

title.innerHTML = 'Мы продаем только подлинную технику Apple';

let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
column[1].removeChild(adv);

let question = document.querySelector('.prompt');
question.textContent = prompt('Ваше отношение к технике apple?');

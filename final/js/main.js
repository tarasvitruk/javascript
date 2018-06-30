window.addEventListener('DOMContentLoaded', function() {
	
	// popupEngineer

	let headerBtn = document.querySelector('.header_btn'),
			popupEngineer = document.querySelector('.popup_engineer'),
			popupEnginnerClose = document.querySelector('.popup_engineer_close');

	headerBtn.addEventListener('click', function() {
		popupEngineer.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	
	popupEnginnerClose.addEventListener('click', function() {
		popupEngineer.style.display = 'none';
		document.body.style.overflow = '';
	});


	// popup

	let phoneLink = document.getElementsByClassName('phone_link'),
			popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup_close');

	for (let i = 0; i < 2; i++) {
		let btn = phoneLink[i];
		btn.addEventListener('click', () => {
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	};
	
	popupClose.addEventListener('click', function() {
		popup.style.display = 'none';
		document.body.style.overflow = '';
	});

	// document.onclick = function(ev) {
	//   let popupEngineer = document.querySelector('.popup_engineer');
	//   if (ev.target.id != popupEngineer.id && popupEngineer.style.display == 'block')  {
	//     popupEngineer.style.display = 'none';
	//   }
	// }

	// Timer

	let deadline = '2018-07-4';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
				t -= 7200000;
		let seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( (t/(1000*60*60)) % 24 ),
				days = Math.floor( (t/(1000*60*60*24)) );

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				days = document.querySelector('.days'),
				hours = document.querySelector('.hours'),
				minutes = document.querySelector('.minutes'),
				seconds = document.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			if (t.days < 10) {
				days.innerHTML = '0' + t.days;
			} else days.innerHTML = t.days;

			if (t.hours < 10) {
				hours.innerHTML = '0' + t.hours;
			} else hours.innerHTML = t.hours;

			if (t.minutes < 10) {
				minutes.innerHTML = '0' + t.minutes;
			} else minutes.innerHTML = t.minutes;

			if (t.seconds < 10) {
				seconds.innerHTML = '0' + t.seconds;
			} else seconds.innerHTML = t.seconds;
			
			let timeInterval = setInterval(updateClock, 1000);
			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.innerHTML = '00';
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}
		updateClock();
		
	}
	setClock('timer', deadline);

	// Tabs

	let tab = document.querySelectorAll('.info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('active');
		}
	}
	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			tab[b].classList.add('active');

		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Tabs decoration

	let decorationTab = document.querySelectorAll('.decoration_tab'),
			decorationLink = document.querySelectorAll('.decoration_link'),
			decorationTabContent = document.getElementsByClassName('decoration_tabcontent'),
			decorationInfo = document.getElementsByClassName('decoration_slider2')[0];

	function hideDecorationTabContent(a) {
		for (let i = a; i < decorationTabContent.length; i++) {
			decorationTabContent[i].classList.remove('show');
			decorationTabContent[i].classList.add('hide');
			decorationTab[i].classList.remove('after_click');
			decorationLink[i].classList.remove('after_click');
		}
	}
	hideDecorationTabContent(1)

	function showDecorationTabContent(b) {
		if (decorationTabContent[b].classList.contains('hide')) {
			hideDecorationTabContent(0);
			decorationTabContent[b].classList.remove('hide');
			decorationTabContent[b].classList.add('show');
			decorationTab[b].classList.add('after_click');
			decorationLink[b].classList.add('after_click');

		}
	}

	decorationInfo.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'decoration_tab') {
			for (let i = 0; i < decorationTab.length; i++) {
				if (target == decorationTab[i]) {
					showDecorationTabContent(i);
					break;
				}
			}
		}
	});


});
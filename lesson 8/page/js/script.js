window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0],
			aboutUsBtn = document.getElementsByTagName('a')[0],
			photoBtn = document.getElementsByTagName('a')[1],
			priceBtn = document.getElementsByTagName('a')[2],
			contactsBtn = document.getElementsByTagName('a')[3];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
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

	//Timer

	let deadline = '2018-06-14';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
				t -= 7200000;
		let seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = document.querySelector('.hours'),
				minutes = document.querySelector('.minutes'),
				seconds = document.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
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
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}
		updateClock();
		
	}
	setClock('timer', deadline);

	// Scroll

	aboutUsBtn.addEventListener('click', (event) => {
	    event.preventDefault();
	    window.scrollTo({ top: (document.querySelector(aboutUsBtn.getAttribute('href')).getBoundingClientRect().top - 50), behavior: 'smooth' });
	});

	photoBtn.addEventListener('click', (event) => {
	    event.preventDefault();
	    window.scrollTo({ top: (document.querySelector(photoBtn.getAttribute('href')).getBoundingClientRect().top - 50), behavior: 'smooth' });
	});

	priceBtn.addEventListener('click', (event) => {
	    event.preventDefault();
	    window.scrollTo({ top: (document.querySelector(priceBtn.getAttribute('href')).getBoundingClientRect().top - 50), behavior: 'smooth' });
	});

	contactsBtn.addEventListener('click', (event) => {
	    event.preventDefault();
	    window.scrollTo({ top: document.querySelector(contactsBtn.getAttribute('href')).getBoundingClientRect().top, behavior: 'smooth' });
	});
});





























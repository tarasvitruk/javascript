window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

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

	var linkNav = document.querySelectorAll('[href^="#nav"]'),
	    V = .3;  // скорость, может иметь дробное значение через точку
	for (var i = 0; i < linkNav.length; i++) {
	  linkNav[i].addEventListener('click', function(e) {
	    e.preventDefault();
	    var w = window.pageYOffset,  // прокрутка
	        hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
	        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
	        start = null;
	    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
	    function step(time) {
	      if (start === null) start = time;
	      var progress = time - start,
	          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
	      window.scrollTo(0,r);
	      if (r != w + t) {
	        requestAnimationFrame(step)
	      } else {
	        location.hash = hash  // URL с хэшем
	      }
	    }
	  }, false);
	}


});





























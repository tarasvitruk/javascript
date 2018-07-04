(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
				}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];return o(n || r);
				}, p, p.exports, r, e, n, t);
			}return n[i].exports;
		}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
			o(t[i]);
		}return o;
	}return r;
})()({ 1: [function (require, module, exports) {
		function images() {
			var imgBig = void 0;
			var overlay = document.createElement('div');
			overlay.classList.add('overlayNew');
			document.body.appendChild(overlay);

			var imgSmall = document.querySelectorAll('.img-small');

			var _loop = function _loop(i) {
				imgSmall[i].addEventListener('click', function () {
					imgBig = imgSmall[i].cloneNode(false);
					imgBig.id = 'imgBig';
					overlay.appendChild(imgBig);
					overlay.style.display = 'flex';
					return imgBig;
				});
				overlay.addEventListener('click', function () {
					overlay.style.display = 'none';
					imgBig.remove();
				});
			};

			for (var i = 0; i < imgSmall.length; i++) {
				_loop(i);
			};
		}
		module.exports = images;
	}, {}], 2: [function (require, module, exports) {
		function popup() {
			var phoneLink = document.getElementsByClassName('phone_link'),
			    popup = document.querySelector('.popup'),
			    popupClose = document.querySelector('.popup_close'),
			    popupShadow = document.querySelector('.popup-shadow');

			for (var i = 0; i < 2; i++) {
				var btn = phoneLink[i];
				btn.addEventListener('click', function () {
					popup.style.display = 'block';
					document.body.style.overflow = 'hidden';
				});
			};

			popupClose.addEventListener('click', function () {
				popup.style.display = 'none';
				document.body.style.overflow = '';
			});
			popupShadow.addEventListener('click', function () {
				popup.style.display = 'none';
			});
			// Popup To Show 60sec
			function popupTime() {
				popup.style.display = 'block';
			}
			setTimeout(popupTime, 60000);
		}
		module.exports = popup;
	}, {}], 3: [function (require, module, exports) {
		function popupCalc() {
			var btnCalc = document.getElementsByClassName('popup_calc_btn'),
			    popupCalc = document.querySelector('.popup_calc'),
			    popupCalcClose = document.querySelector('.popup_calc_close'),
			    popupCalcShadow = document.querySelector('.popup-calc-shadow');

			for (var i = 0; i < btnCalc.length; i++) {
				var btn = btnCalc[i];
				btn.addEventListener('click', function () {
					popupCalc.style.display = 'block';
					document.body.style.overflow = 'hidden';
				});
			};

			popupCalcClose.addEventListener('click', function () {
				popupCalc.style.display = 'none';
				document.body.style.overflow = '';
			});
			popupCalcShadow.addEventListener('click', function () {
				popupCalc.style.display = 'none';
				document.body.style.overflow = '';
			});
		}
		module.exports = popupCalc;
	}, {}], 4: [function (require, module, exports) {
		function popupEnginner() {
			var headerBtn = document.querySelector('.header_btn'),
			    popupEngineer = document.querySelector('.popup_engineer'),
			    popupEngineerClose = document.querySelector('.popup_engineer_close'),
			    popupEngineerShadow = document.querySelector('.popup-engineer-shadow');

			headerBtn.addEventListener('click', function () {
				popupEngineer.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});

			popupEngineerClose.addEventListener('click', function () {
				popupEngineer.style.display = 'none';
				document.body.style.overflow = '';
			});
			popupEngineerShadow.addEventListener('click', function () {
				popupEngineer.style.display = 'none';
			});
		}
		module.exports = popupEnginner;
	}, {}], 5: [function (require, module, exports) {
		window.addEventListener('DOMContentLoaded', function () {

			// popupEnginner
			var popupEnginner = require('./popupEnginner.js');
			// popup
			var popup = require('./popup.js');
			// popupCalc
			var popupCalc = require('./popupCalc.js');
			// tabsCalc
			var tabsCalc = require('./tabsCalc.js');
			// timer
			var timer = require('./timer.js');
			// tabs
			var tabs = require('./tabs.js');
			// tabsDecoration
			var tabsDecoration = require('./tabsDecoration.js');
			// images
			var images = require('./images.js');

			popupEnginner();
			popup();
			popupCalc();
			tabsCalc();
			timer();
			tabs();
			tabsDecoration();
			images();
		});
	}, { "./images.js": 1, "./popup.js": 2, "./popupCalc.js": 3, "./popupEnginner.js": 4, "./tabs.js": 6, "./tabsCalc.js": 7, "./tabsDecoration.js": 8, "./timer.js": 9 }], 6: [function (require, module, exports) {
		function tabs() {
			var tab = document.querySelectorAll('.info-header-tab'),
			    tabContent = document.getElementsByClassName('info-tabcontent'),
			    info = document.getElementsByClassName('info-header')[0];

			function hideTabContent(a) {
				for (var i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
					tab[i].classList.remove('active');
				}
			}
			hideTabContent(1);

			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
					tab[b].classList.add('active');
				}
			}

			info.addEventListener('click', function (event) {
				var target = event.target;
				if (target.className == 'info-header-tab') {
					for (var i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				}
			});
		}
		module.exports = tabs;
	}, {}], 7: [function (require, module, exports) {
		function tabsCalc() {
			var balconIconsItems = document.getElementsByClassName('balcon_icons-items'),
			    balconBigImages = document.getElementsByClassName('balcon_big-images'),
			    balconIcons = document.getElementsByClassName('balcon_icons')[0],
			    formParameters = document.querySelectorAll('.form-parameters'),
			    popupCalcButton = document.querySelector('.popup_calc_button'),
			    popupCalc = document.querySelector('.popup_calc'),

			//Возможно понадобится в модульной системе
			popupCalcProfile = document.querySelector('.popup_calc_profile'),
			    checkboxCold = document.querySelector('.checkbox-cold'),
			    checkboxWarm = document.querySelector('.checkbox-warm'),
			    popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
			    popupCalcEnd = document.querySelector('.popup_calc_end'),
			    popupCalcEndButton = document.querySelector('.popup_calc_end_button'),
			    popupCalcEndClose = document.querySelector('.popup_calc_end_close'),
			    popupCalcProfileClose = document.querySelector('.popup_calc_profile_close'),
			    parametersObj = {};

			function hideBalconTabContent(a) {
				for (var i = a; i < balconBigImages.length; i++) {
					balconBigImages[i].classList.remove('show');
					balconBigImages[i].classList.add('hide');
					balconIconsItems[i].classList.remove('active-icon');
				}
			}
			hideBalconTabContent(1);

			function showBalconTabContent(b) {
				if (balconBigImages[b].classList.contains('hide')) {
					hideBalconTabContent(0);
					balconBigImages[b].classList.remove('hide');
					balconBigImages[b].classList.add('show');
					balconIconsItems[b].classList.add('active-icon');
				}
			}

			balconIcons.addEventListener('click', function (event) {
				var target = event.target;
				if (target.className == 'balcon_icons-items') {
					for (var i = 0; i < balconIconsItems.length; i++) {
						if (target == balconIconsItems[i]) {
							showBalconTabContent(i);
							break;
						}
					}
				}
			});

			// Проверка на число

			for (var i = 0; i < 2; i++) {
				formParameters[i].addEventListener('keypress', function (b) {
					if (!/\d/.test(b.key)) b.preventDefault();
				});
			};

			// Popup Profile

			popupCalcButton.addEventListener('click', function () {
				// Inputs
				parametersObj.width = width.value;
				parametersObj.height = height.value;
				// Очищаем поля ввода
				width.value = '';
				height.value = '';

				popupCalc.style.display = 'none';
				popupCalcProfile.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});

			popupCalcProfileClose.addEventListener('click', function () {
				popupCalcProfile.style.display = 'none';
				document.body.style.overflow = 'hidden';
				delete parametersObj.width;
				delete parametersObj.height;
				delete parametersObj.parameters;
			});

			// Popup Calc End

			popupCalcProfileButton.addEventListener('click', function () {
				// Checkbox
				if (checkboxCold.checked) {
					parametersObj.parameters = 'Холодное';
				} else if (checkboxWarm.checked) {
					parametersObj.parameters = 'Теплое';
				}

				popupCalcProfile.style.display = 'none';
				popupCalcEnd.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});

			popupCalcEndClose.addEventListener('click', function () {
				popupCalcEnd.style.display = 'none';
				document.body.style.overflow = 'hidden';
				delete parametersObj.width;
				delete parametersObj.height;
				delete parametersObj.parameters;
			});

			popupCalcEndButton.addEventListener('click', function () {

				popupCalcEnd.style.display = 'none';
				document.body.style.overflow = 'hidden';
				delete parametersObj.width;
				delete parametersObj.height;
				delete parametersObj.parameters;
			});

			//Ajax
			var message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо. Скоро мы с вами свяжемся';
			message.failure = 'Что-то пошло не так...';

			var form = document.querySelectorAll('.form'),
			    input = document.querySelectorAll('.form_input'),
			    statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

			// Вводим только число

			for (var _i = 0; _i <= input.length; _i++) {
				if (_i % 2 == 0) {} else {
					input[_i].addEventListener('keypress', function (a) {
						if (!/\d/.test(a.key)) a.preventDefault();
					});
				}
			};

			// Перебор всех форм

			var _loop2 = function _loop2(_i2) {
				form[_i2].addEventListener('submit', function (event) {
					event.preventDefault();
					form[_i2].appendChild(statusMessage);

					// AJAX

					var request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					var formData = new FormData(form[_i2]);
					// Додаем данные из CalcPopup
					if (parametersObj != null) {
						formData.append("Ширина", parametersObj.width);
						formData.append("Высота", parametersObj.height);
						formData.append("Тип окна", parametersObj.parameters);
					}
					request.send(formData);
					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							statusMessage.innerHTML = message.loading;
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								statusMessage.innerHTML = message.success;
								// Здесь добавляем контент на страницу
							} else {
								statusMessage.innerHTML = message.failure;
							}
						}
					};
					for (var _i3 = 0; _i3 < input.length; _i3++) {
						input[_i3].value = '';
						// Очищаем поля ввода
					}
				});
			};

			for (var _i2 = 0; _i2 < form.length; _i2++) {
				_loop2(_i2);
			};
		}
		module.exports = tabsCalc;
	}, {}], 8: [function (require, module, exports) {
		function tabsDecoration() {
			var decorationTab = document.querySelectorAll('.decoration_tab'),
			    decorationLink = document.querySelectorAll('.decoration_link'),
			    decorationTabContent = document.getElementsByClassName('decoration_tabcontent'),
			    decorationInfo = document.getElementsByClassName('decoration_slider2')[0];

			function hideDecorationTabContent(a) {
				for (var i = a; i < decorationTabContent.length; i++) {
					decorationTabContent[i].classList.remove('show');
					decorationTabContent[i].classList.add('hide');
					decorationTab[i].classList.remove('after_click');
					decorationLink[i].classList.remove('after_click');
				}
			}
			hideDecorationTabContent(1);

			function showDecorationTabContent(b) {
				if (decorationTabContent[b].classList.contains('hide')) {
					hideDecorationTabContent(0);
					decorationTabContent[b].classList.remove('hide');
					decorationTabContent[b].classList.add('show');
					decorationTab[b].classList.add('after_click');
					decorationLink[b].classList.add('after_click');
				}
			}

			decorationInfo.addEventListener('click', function (event) {
				var target = event.target;
				if (target.className == 'decoration_tab') {
					for (var i = 0; i < decorationTab.length; i++) {
						if (target == decorationTab[i]) {
							showDecorationTabContent(i);
							break;
						}
					}
				}
			});
		}
		module.exports = tabsDecoration;
	}, {}], 9: [function (require, module, exports) {
		function timer() {
			var deadline = '2018-07-5';

			function getTimeRemaining(endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date());
				t -= 7200000;
				var seconds = Math.floor(t / 1000 % 60),
				    minutes = Math.floor(t / 1000 / 60 % 60),
				    hours = Math.floor(t / (1000 * 60 * 60) % 24),
				    days = Math.floor(t / (1000 * 60 * 60 * 24));

				return {
					'total': t,
					'days': days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			}

			function setClock(id, endtime) {
				var timer = document.getElementById(id),
				    days = document.querySelector('.days'),
				    hours = document.querySelector('.hours'),
				    minutes = document.querySelector('.minutes'),
				    seconds = document.querySelector('.seconds');

				function updateClock() {
					var t = getTimeRemaining(endtime);
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

					var timeInterval = setInterval(updateClock, 1000);
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
		}
		module.exports = timer;
	}, {}] }, {}, [5]);

},{"./images.js":2,"./popup.js":3,"./popupCalc.js":4,"./popupEnginner.js":5,"./tabs.js":6,"./tabsCalc.js":7,"./tabsDecoration.js":8,"./timer.js":9}],2:[function(require,module,exports){
'use strict';

function images() {
	var imgBig = void 0;
	var overlay = document.createElement('div');
	overlay.classList.add('overlayNew');
	document.body.appendChild(overlay);

	var imgSmall = document.querySelectorAll('.img-small');

	var _loop = function _loop(i) {
		imgSmall[i].addEventListener('click', function () {
			imgBig = imgSmall[i].cloneNode(false);
			imgBig.id = 'imgBig';
			overlay.appendChild(imgBig);
			overlay.style.display = 'flex';
			return imgBig;
		});
		overlay.addEventListener('click', function () {
			overlay.style.display = 'none';
			imgBig.remove();
		});
	};

	for (var i = 0; i < imgSmall.length; i++) {
		_loop(i);
	};
}
module.exports = images;

},{}],3:[function(require,module,exports){
'use strict';

function popup() {
	var phoneLink = document.getElementsByClassName('phone_link'),
	    popup = document.querySelector('.popup'),
	    popupClose = document.querySelector('.popup_close'),
	    popupShadow = document.querySelector('.popup-shadow');

	for (var i = 0; i < 2; i++) {
		var btn = phoneLink[i];
		btn.addEventListener('click', function () {
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	};

	popupClose.addEventListener('click', function () {
		popup.style.display = 'none';
		document.body.style.overflow = '';
	});
	popupShadow.addEventListener('click', function () {
		popup.style.display = 'none';
	});
	// Popup To Show 60sec
	function popupTime() {
		popup.style.display = 'block';
	}
	setTimeout(popupTime, 60000);
}
module.exports = popup;

},{}],4:[function(require,module,exports){
'use strict';

function popupCalc() {
	var btnCalc = document.getElementsByClassName('popup_calc_btn'),
	    popupCalc = document.querySelector('.popup_calc'),
	    popupCalcClose = document.querySelector('.popup_calc_close'),
	    popupCalcShadow = document.querySelector('.popup-calc-shadow');

	for (var i = 0; i < btnCalc.length; i++) {
		var btn = btnCalc[i];
		btn.addEventListener('click', function () {
			popupCalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	};

	popupCalcClose.addEventListener('click', function () {
		popupCalc.style.display = 'none';
		document.body.style.overflow = '';
	});
	popupCalcShadow.addEventListener('click', function () {
		popupCalc.style.display = 'none';
		document.body.style.overflow = '';
	});
}
module.exports = popupCalc;

},{}],5:[function(require,module,exports){
'use strict';

function popupEnginner() {
	var headerBtn = document.querySelector('.header_btn'),
	    popupEngineer = document.querySelector('.popup_engineer'),
	    popupEngineerClose = document.querySelector('.popup_engineer_close'),
	    popupEngineerShadow = document.querySelector('.popup-engineer-shadow');

	headerBtn.addEventListener('click', function () {
		popupEngineer.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	popupEngineerClose.addEventListener('click', function () {
		popupEngineer.style.display = 'none';
		document.body.style.overflow = '';
	});
	popupEngineerShadow.addEventListener('click', function () {
		popupEngineer.style.display = 'none';
	});
}
module.exports = popupEnginner;

},{}],6:[function(require,module,exports){
'use strict';

function tabs() {
	var tab = document.querySelectorAll('.info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('active');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			tab[b].classList.add('active');
		}
	}

	info.addEventListener('click', function (event) {
		var target = event.target;
		if (target.className == 'info-header-tab') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}
module.exports = tabs;

},{}],7:[function(require,module,exports){
'use strict';

function tabsCalc() {
	var balconIconsItems = document.getElementsByClassName('balcon_icons-items'),
	    balconBigImages = document.getElementsByClassName('balcon_big-images'),
	    balconIcons = document.getElementsByClassName('balcon_icons')[0],
	    formParameters = document.querySelectorAll('.form-parameters'),
	    popupCalcButton = document.querySelector('.popup_calc_button'),
	    popupCalc = document.querySelector('.popup_calc'),

	//Возможно понадобится в модульной системе
	popupCalcProfile = document.querySelector('.popup_calc_profile'),
	    checkboxCold = document.querySelector('.checkbox-cold'),
	    checkboxWarm = document.querySelector('.checkbox-warm'),
	    popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
	    popupCalcEnd = document.querySelector('.popup_calc_end'),
	    popupCalcEndButton = document.querySelector('.popup_calc_end_button'),
	    popupCalcEndClose = document.querySelector('.popup_calc_end_close'),
	    popupCalcProfileClose = document.querySelector('.popup_calc_profile_close'),
	    parametersObj = {};

	function hideBalconTabContent(a) {
		for (var i = a; i < balconBigImages.length; i++) {
			balconBigImages[i].classList.remove('show');
			balconBigImages[i].classList.add('hide');
			balconIconsItems[i].classList.remove('active-icon');
		}
	}
	hideBalconTabContent(1);

	function showBalconTabContent(b) {
		if (balconBigImages[b].classList.contains('hide')) {
			hideBalconTabContent(0);
			balconBigImages[b].classList.remove('hide');
			balconBigImages[b].classList.add('show');
			balconIconsItems[b].classList.add('active-icon');
		}
	}

	balconIcons.addEventListener('click', function (event) {
		var target = event.target;
		if (target.className == 'balcon_icons-items') {
			for (var i = 0; i < balconIconsItems.length; i++) {
				if (target == balconIconsItems[i]) {
					showBalconTabContent(i);
					break;
				}
			}
		}
	});

	// Проверка на число

	for (var i = 0; i < 2; i++) {
		formParameters[i].addEventListener('keypress', function (b) {
			if (!/\d/.test(b.key)) b.preventDefault();
		});
	};

	// Popup Profile

	popupCalcButton.addEventListener('click', function () {
		// Inputs
		parametersObj.width = width.value;
		parametersObj.height = height.value;
		// Очищаем поля ввода
		width.value = '';
		height.value = '';

		popupCalc.style.display = 'none';
		popupCalcProfile.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	popupCalcProfileClose.addEventListener('click', function () {
		popupCalcProfile.style.display = 'none';
		document.body.style.overflow = 'hidden';
		delete parametersObj.width;
		delete parametersObj.height;
		delete parametersObj.parameters;
	});

	// Popup Calc End

	popupCalcProfileButton.addEventListener('click', function () {
		// Checkbox
		if (checkboxCold.checked) {
			parametersObj.parameters = 'Холодное';
		} else if (checkboxWarm.checked) {
			parametersObj.parameters = 'Теплое';
		}

		popupCalcProfile.style.display = 'none';
		popupCalcEnd.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	popupCalcEndClose.addEventListener('click', function () {
		popupCalcEnd.style.display = 'none';
		document.body.style.overflow = 'hidden';
		delete parametersObj.width;
		delete parametersObj.height;
		delete parametersObj.parameters;
	});

	popupCalcEndButton.addEventListener('click', function () {

		popupCalcEnd.style.display = 'none';
		document.body.style.overflow = 'hidden';
		delete parametersObj.width;
		delete parametersObj.height;
		delete parametersObj.parameters;
	});

	//Ajax
	var message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо. Скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	var form = document.querySelectorAll('.form'),
	    input = document.querySelectorAll('.form_input'),
	    statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	// Вводим только число

	for (var _i = 0; _i <= input.length; _i++) {
		if (_i % 2 == 0) {} else {
			input[_i].addEventListener('keypress', function (a) {
				if (!/\d/.test(a.key)) a.preventDefault();
			});
		}
	};

	// Перебор всех форм

	var _loop = function _loop(_i2) {
		form[_i2].addEventListener('submit', function (event) {
			event.preventDefault();
			form[_i2].appendChild(statusMessage);

			// AJAX

			var request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			var formData = new FormData(form[_i2]);
			// Додаем данные из CalcPopup
			if (parametersObj != null) {
				formData.append("Ширина", parametersObj.width);
				formData.append("Высота", parametersObj.height);
				formData.append("Тип окна", parametersObj.parameters);
			}
			request.send(formData);
			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Здесь добавляем контент на страницу
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (var _i3 = 0; _i3 < input.length; _i3++) {
				input[_i3].value = '';
				// Очищаем поля ввода
			}
		});
	};

	for (var _i2 = 0; _i2 < form.length; _i2++) {
		_loop(_i2);
	};
}
module.exports = tabsCalc;

},{}],8:[function(require,module,exports){
'use strict';

function tabsDecoration() {
	var decorationTab = document.querySelectorAll('.decoration_tab'),
	    decorationLink = document.querySelectorAll('.decoration_link'),
	    decorationTabContent = document.getElementsByClassName('decoration_tabcontent'),
	    decorationInfo = document.getElementsByClassName('decoration_slider2')[0];

	function hideDecorationTabContent(a) {
		for (var i = a; i < decorationTabContent.length; i++) {
			decorationTabContent[i].classList.remove('show');
			decorationTabContent[i].classList.add('hide');
			decorationTab[i].classList.remove('after_click');
			decorationLink[i].classList.remove('after_click');
		}
	}
	hideDecorationTabContent(1);

	function showDecorationTabContent(b) {
		if (decorationTabContent[b].classList.contains('hide')) {
			hideDecorationTabContent(0);
			decorationTabContent[b].classList.remove('hide');
			decorationTabContent[b].classList.add('show');
			decorationTab[b].classList.add('after_click');
			decorationLink[b].classList.add('after_click');
		}
	}

	decorationInfo.addEventListener('click', function (event) {
		var target = event.target;
		if (target.className == 'decoration_tab') {
			for (var i = 0; i < decorationTab.length; i++) {
				if (target == decorationTab[i]) {
					showDecorationTabContent(i);
					break;
				}
			}
		}
	});
}
module.exports = tabsDecoration;

},{}],9:[function(require,module,exports){
'use strict';

function timer() {
	var deadline = '2018-07-5';

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		t -= 7200000;
		var seconds = Math.floor(t / 1000 % 60),
		    minutes = Math.floor(t / 1000 / 60 % 60),
		    hours = Math.floor(t / (1000 * 60 * 60) % 24),
		    days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		var timer = document.getElementById(id),
		    days = document.querySelector('.days'),
		    hours = document.querySelector('.hours'),
		    minutes = document.querySelector('.minutes'),
		    seconds = document.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endtime);
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

			var timeInterval = setInterval(updateClock, 1000);
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
}
module.exports = timer;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnVuZGxlLmpzIiwic3JjL2ltYWdlcy5qcyIsInNyYy9wb3B1cC5qcyIsInNyYy9wb3B1cENhbGMuanMiLCJzcmMvcG9wdXBFbmdpbm5lci5qcyIsInNyYy90YWJzLmpzIiwic3JjL3RhYnNDYWxjLmpzIiwic3JjL3RhYnNEZWNvcmF0aW9uLmpzIiwic3JjL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVU7QUFBQyxVQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBaUI7QUFBQyxXQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFlO0FBQUMsT0FBRyxDQUFDLEVBQUosQ0FBSSxDQUFKLEVBQVM7QUFBQyxRQUFHLENBQUMsRUFBSixDQUFJLENBQUosRUFBUztBQUFDLFNBQUksSUFBRSxjQUFZLE9BQVosT0FBQSxJQUFOLE9BQUEsQ0FBMEMsSUFBRyxDQUFBLENBQUEsSUFBSCxDQUFBLEVBQVMsT0FBTyxFQUFBLENBQUEsRUFBSSxDQUFYLENBQU8sQ0FBUCxDQUFlLElBQUEsQ0FBQSxFQUFLLE9BQU8sRUFBQSxDQUFBLEVBQUksQ0FBWCxDQUFPLENBQVAsQ0FBZSxJQUFJLElBQUUsSUFBQSxLQUFBLENBQVUseUJBQUEsQ0FBQSxHQUFoQixHQUFNLENBQU4sQ0FBOEMsTUFBTSxFQUFBLElBQUEsR0FBQSxrQkFBQSxFQUFOLENBQUE7QUFBa0MsU0FBSSxJQUFFLEVBQUEsQ0FBQSxJQUFLLEVBQUMsU0FBWixFQUFXLEVBQVgsQ0FBd0IsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBYSxFQUFiLE9BQUEsRUFBdUIsVUFBQSxDQUFBLEVBQVc7QUFBQyxTQUFJLElBQUUsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFOLENBQU0sQ0FBTixDQUFpQixPQUFPLEVBQUUsS0FBVCxDQUFPLENBQVA7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LEVBQXZCLElBQUE7QUFERCxJQUFBLE1BRU8sS0FBQSxTQUFBLEdBQWlCLEVBQWpCLElBQUE7O0FBRVAsT0FBSSxFQUFBLEtBQUEsR0FBSixFQUFBLEVBQWtCO0FBQ2pCLFVBQUEsU0FBQSxHQUFrQixNQUFNLEVBQXhCLEtBQUE7QUFERCxJQUFBLE1BRU8sTUFBQSxTQUFBLEdBQWtCLEVBQWxCLEtBQUE7O0FBRVAsT0FBSSxFQUFBLE9BQUEsR0FBSixFQUFBLEVBQW9CO0FBQ25CLFlBQUEsU0FBQSxHQUFvQixNQUFNLEVBQTFCLE9BQUE7QUFERCxJQUFBLE1BRU8sUUFBQSxTQUFBLEdBQW9CLEVBQXBCLE9BQUE7O0FBRVAsT0FBSSxFQUFBLE9BQUEsR0FBSixFQUFBLEVBQW9CO0FBQ25CLFlBQUEsU0FBQSxHQUFvQixNQUFNLEVBQTFCLE9BQUE7QUFERCxJQUFBLE1BRU8sUUFBQSxTQUFBLEdBQW9CLEVBQXBCLE9BQUE7O0FBRVAsT0FBSSxlQUFlLFlBQUEsV0FBQSxFQUFuQixJQUFtQixDQUFuQjtBQUNBLE9BQUksRUFBQSxLQUFBLElBQUosQ0FBQSxFQUFrQjtBQUNqQixrQkFBQSxZQUFBO0FBQ0EsU0FBQSxTQUFBLEdBQUEsSUFBQTtBQUNBLFVBQUEsU0FBQSxHQUFBLElBQUE7QUFDQSxZQUFBLFNBQUEsR0FBQSxJQUFBO0FBQ0EsWUFBQSxTQUFBLEdBQUEsSUFBQTtBQUNBO0FBQ0Q7QUFDRDtBQUVBO0FBQ0QsVUFBQSxPQUFBLEVBQUEsUUFBQTtBQUNBO0FBQ0QsT0FBQSxPQUFBLEdBQUEsS0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuZnVuY3Rpb24gaW1hZ2VzKCkge1xuXHQgIGxldCBpbWdCaWc7XG5cdCAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXlOZXcnKTtcblx0ICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG5cdCBcdGxldCBpbWdTbWFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctc21hbGwnKTtcblx0IFx0IGZvciAobGV0IGkgPSAwOyBpIDwgaW1nU21hbGwubGVuZ3RoOyBpKyspIHtcblx0IFx0IFx0aW1nU21hbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0IFx0IFx0XHRpbWdCaWcgPSBpbWdTbWFsbFtpXS5jbG9uZU5vZGUoZmFsc2UpO1xuXHQgXHQgXHRcdGltZ0JpZy5pZCA9ICdpbWdCaWcnO1xuXHQgXHQgXHRcdG92ZXJsYXkuYXBwZW5kQ2hpbGQoaW1nQmlnKTtcblx0IFx0IFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdCBcdCBcdFx0cmV0dXJuIGltZ0JpZztcblx0IFx0IFx0fSk7XG5cdCBcdCBcdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0IFx0IFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCBcdCBcdFx0aW1nQmlnLnJlbW92ZSgpO1xuXHQgXHQgXHR9KTtcblx0XHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZXM7XG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmZ1bmN0aW9uIHBvcHVwKCkge1xuXHRsZXQgcGhvbmVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGhvbmVfbGluaycpLFxuXHRcdFx0cG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKSxcblx0XHRcdHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2xvc2UnKSxcblx0XHRcdHBvcHVwU2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXNoYWRvdycpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdFx0bGV0IGJ0biA9IHBob25lTGlua1tpXTtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRcdH0pO1xuXHR9O1xuXHRcblx0cG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuXHR9KTtcblx0cG9wdXBTaGFkb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9KTtcblx0Ly8gUG9wdXAgVG8gU2hvdyA2MHNlY1xuXHRmdW5jdGlvbiBwb3B1cFRpbWUoKSB7XG5cdCAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblx0c2V0VGltZW91dChwb3B1cFRpbWUsIDYwMDAwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcG9wdXA7XG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmZ1bmN0aW9uIHBvcHVwQ2FsYygpIHtcblx0bGV0IGJ0bkNhbGMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cF9jYWxjX2J0bicpLFxuXHRcdFx0cG9wdXBDYWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NhbGMnKSxcblx0XHRcdHBvcHVwQ2FsY0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NhbGNfY2xvc2UnKSxcblx0XHRcdHBvcHVwQ2FsY1NoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jYWxjLXNoYWRvdycpO1xuXG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5DYWxjLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJ0biA9IGJ0bkNhbGNbaV07XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRwb3B1cENhbGMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0fSk7XG5cdH07XG5cdFxuXHRwb3B1cENhbGNDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblx0fSk7XG5cdHBvcHVwQ2FsY1NoYWRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblx0fSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwQ2FsYztcbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuZnVuY3Rpb24gcG9wdXBFbmdpbm5lcigpIHtcblx0bGV0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfYnRuJyksXG5cdFx0XHRwb3B1cEVuZ2luZWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2VuZ2luZWVyJyksXG5cdFx0XHRwb3B1cEVuZ2luZWVyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZW5naW5lZXJfY2xvc2UnKSxcblx0XHRcdHBvcHVwRW5naW5lZXJTaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtZW5naW5lZXItc2hhZG93Jyk7XG5cblx0aGVhZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0cG9wdXBFbmdpbmVlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdH0pO1xuXHRcblx0cG9wdXBFbmdpbmVlckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0cG9wdXBFbmdpbmVlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblx0fSk7XG5cdHBvcHVwRW5naW5lZXJTaGFkb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRwb3B1cEVuZ2luZWVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBwb3B1cEVuZ2lubmVyO1xufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBcbiAgLy8gcG9wdXBFbmdpbm5lclxuICBsZXQgcG9wdXBFbmdpbm5lciA9IHJlcXVpcmUoJy4vcG9wdXBFbmdpbm5lci5qcycpO1xuXHQvLyBwb3B1cFxuXHRsZXQgcG9wdXAgPSByZXF1aXJlKCcuL3BvcHVwLmpzJyk7XG5cdC8vIHBvcHVwQ2FsY1xuXHRsZXQgcG9wdXBDYWxjID0gcmVxdWlyZSgnLi9wb3B1cENhbGMuanMnKTtcblx0Ly8gdGFic0NhbGNcblx0bGV0IHRhYnNDYWxjID0gcmVxdWlyZSgnLi90YWJzQ2FsYy5qcycpO1xuXHQvLyB0aW1lclxuXHRsZXQgdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyLmpzJyk7XG5cdC8vIHRhYnNcblx0bGV0IHRhYnMgPSByZXF1aXJlKCcuL3RhYnMuanMnKTtcblx0Ly8gdGFic0RlY29yYXRpb25cblx0bGV0IHRhYnNEZWNvcmF0aW9uID0gcmVxdWlyZSgnLi90YWJzRGVjb3JhdGlvbi5qcycpO1xuXHQvLyBpbWFnZXNcblx0bGV0IGltYWdlcyA9IHJlcXVpcmUoJy4vaW1hZ2VzLmpzJyk7XG5cblx0cG9wdXBFbmdpbm5lcigpO1xuXHRwb3B1cCgpO1xuXHRwb3B1cENhbGMoKTtcblx0dGFic0NhbGMoKTtcblx0dGltZXIoKTtcblx0dGFicygpO1xuXHR0YWJzRGVjb3JhdGlvbigpO1xuXHRpbWFnZXMoKTtcblxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxufSx7XCIuL2ltYWdlcy5qc1wiOjEsXCIuL3BvcHVwLmpzXCI6MixcIi4vcG9wdXBDYWxjLmpzXCI6MyxcIi4vcG9wdXBFbmdpbm5lci5qc1wiOjQsXCIuL3RhYnMuanNcIjo2LFwiLi90YWJzQ2FsYy5qc1wiOjcsXCIuL3RhYnNEZWNvcmF0aW9uLmpzXCI6OCxcIi4vdGltZXIuanNcIjo5fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5mdW5jdGlvbiB0YWJzKCkge1xuXHRsZXQgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8taGVhZGVyLXRhYicpLFxuXHRcdFx0dGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8tdGFiY29udGVudCcpLFxuXHRcdFx0aW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8taGVhZGVyJylbMF07XG5cblx0ZnVuY3Rpb24gaGlkZVRhYkNvbnRlbnQoYSkge1xuXHRcdGZvciAobGV0IGkgPSBhOyBpIDwgdGFiQ29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGFiQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cdFx0XHR0YWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRcdHRhYltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHR9XG5cdH1cblx0aGlkZVRhYkNvbnRlbnQoMSlcblxuXHRmdW5jdGlvbiBzaG93VGFiQ29udGVudChiKSB7XG5cdFx0aWYgKHRhYkNvbnRlbnRbYl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcblx0XHRcdGhpZGVUYWJDb250ZW50KDApO1xuXHRcdFx0dGFiQ29udGVudFtiXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHR0YWJDb250ZW50W2JdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdHRhYltiXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuXHRcdH1cblx0fVxuXG5cdGluZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKHRhcmdldC5jbGFzc05hbWUgPT0gJ2luZm8taGVhZGVyLXRhYicpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGFiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPT0gdGFiW2ldKSB7XG5cdFx0XHRcdFx0c2hvd1RhYkNvbnRlbnQoaSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0YWJzO1xufSx7fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5mdW5jdGlvbiB0YWJzQ2FsYygpIHtcblx0bGV0IGJhbGNvbkljb25zSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYWxjb25faWNvbnMtaXRlbXMnKSxcblx0XHRcdGJhbGNvbkJpZ0ltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhbGNvbl9iaWctaW1hZ2VzJyksXG5cdFx0XHRiYWxjb25JY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhbGNvbl9pY29ucycpWzBdLFxuXHRcdFx0Zm9ybVBhcmFtZXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1wYXJhbWV0ZXJzJyksXG5cdFx0XHRwb3B1cENhbGNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2FsY19idXR0b24nKSxcblx0XHRcdHBvcHVwQ2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjJyksIC8v0JLQvtC30LzQvtC20L3QviDQv9C+0L3QsNC00L7QsdC40YLRgdGPINCyINC80L7QtNGD0LvRjNC90L7QuSDRgdC40YHRgtC10LzQtVxuXHRcdFx0cG9wdXBDYWxjUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjX3Byb2ZpbGUnKSxcblx0XHRcdGNoZWNrYm94Q29sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1jb2xkJyksXG5cdFx0XHRjaGVja2JveFdhcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtd2FybScpLFxuXHRcdFx0cG9wdXBDYWxjUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjX3Byb2ZpbGVfYnV0dG9uJyksXG5cdFx0XHRwb3B1cENhbGNFbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2FsY19lbmQnKSxcblx0XHRcdHBvcHVwQ2FsY0VuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjX2VuZF9idXR0b24nKSxcblx0XHRcdHBvcHVwQ2FsY0VuZENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NhbGNfZW5kX2Nsb3NlJyksXG5cdFx0XHRwb3B1cENhbGNQcm9maWxlQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2FsY19wcm9maWxlX2Nsb3NlJyksXG5cdFx0XHRwYXJhbWV0ZXJzT2JqID0ge307XG5cblx0ZnVuY3Rpb24gaGlkZUJhbGNvblRhYkNvbnRlbnQoYSkge1xuXHRcdGZvciAobGV0IGkgPSBhOyBpIDwgYmFsY29uQmlnSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRiYWxjb25CaWdJbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0YmFsY29uQmlnSW1hZ2VzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRcdGJhbGNvbkljb25zSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWljb24nKTtcblx0XHR9XG5cdH1cblx0aGlkZUJhbGNvblRhYkNvbnRlbnQoMSlcblxuXHRmdW5jdGlvbiBzaG93QmFsY29uVGFiQ29udGVudChiKSB7XG5cdFx0aWYgKGJhbGNvbkJpZ0ltYWdlc1tiXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuXHRcdFx0aGlkZUJhbGNvblRhYkNvbnRlbnQoMCk7XG5cdFx0XHRiYWxjb25CaWdJbWFnZXNbYl0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0YmFsY29uQmlnSW1hZ2VzW2JdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdGJhbGNvbkljb25zSXRlbXNbYl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWljb24nKTtcblx0XHR9XG5cdH1cblxuXHRiYWxjb25JY29ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSAnYmFsY29uX2ljb25zLWl0ZW1zJykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYWxjb25JY29uc0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPT0gYmFsY29uSWNvbnNJdGVtc1tpXSkge1xuXHRcdFx0XHRcdHNob3dCYWxjb25UYWJDb250ZW50KGkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YfQuNGB0LvQvlxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdCAgZm9ybVBhcmFtZXRlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihiKSB7XG5cdCAgXHRpZighL1xcZC8udGVzdChiLmtleSkpXG5cdCAgXHRcdGIucHJldmVudERlZmF1bHQoKTtcblx0ICB9KTtcblx0fTtcblxuXHQvLyBQb3B1cCBQcm9maWxlXG5cblx0cG9wdXBDYWxjQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gSW5wdXRzXG5cdFx0cGFyYW1ldGVyc09iai53aWR0aCA9IHdpZHRoLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnNPYmouaGVpZ2h0ID0gaGVpZ2h0LnZhbHVlO1xuXHRcdC8vINCe0YfQuNGJ0LDQtdC8INC/0L7Qu9GPINCy0LLQvtC00LBcblx0XHR3aWR0aC52YWx1ZSA9ICcnO1xuXHRcdGhlaWdodC52YWx1ZSA9ICcnO1xuXG5cdFx0cG9wdXBDYWxjLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cG9wdXBDYWxjUHJvZmlsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XG5cdH0pO1xuXG5cdHBvcHVwQ2FsY1Byb2ZpbGVDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsY1Byb2ZpbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmoud2lkdGg7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmouaGVpZ2h0O1xuXHRcdGRlbGV0ZSBwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnM7XG5cdH0pO1xuXG5cdC8vIFBvcHVwIENhbGMgRW5kXG5cblx0cG9wdXBDYWxjUHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIENoZWNrYm94XG5cdFx0aWYgKGNoZWNrYm94Q29sZC5jaGVja2VkKSB7XG5cdFx0XHRwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnMgPSAn0KXQvtC70L7QtNC90L7QtSc7XG5cdFx0fSBlbHNlXG5cdFx0aWYgKGNoZWNrYm94V2FybS5jaGVja2VkKSB7XG5cdFx0XHRwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnMgPSAn0KLQtdC/0LvQvtC1Jztcblx0XHR9XG5cblx0XHRwb3B1cENhbGNQcm9maWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cG9wdXBDYWxjRW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuXHR9KTtcblxuXHRwb3B1cENhbGNFbmRDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsY0VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRkZWxldGUgcGFyYW1ldGVyc09iai53aWR0aDtcblx0XHRkZWxldGUgcGFyYW1ldGVyc09iai5oZWlnaHQ7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmoucGFyYW1ldGVycztcblx0fSk7XG5cblx0cG9wdXBDYWxjRW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cblx0XHRwb3B1cENhbGNFbmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmoud2lkdGg7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmouaGVpZ2h0O1xuXHRcdGRlbGV0ZSBwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnM7XG5cdH0pO1xuXG5cdC8vQWpheFxuXHRcdGxldCBtZXNzYWdlID0gbmV3IE9iamVjdCgpO1xuXHRcdG1lc3NhZ2UubG9hZGluZyA9ICfQl9Cw0LPRgNGD0LfQutCwLi4uJztcblx0XHRtZXNzYWdlLnN1Y2Nlc3MgPSAn0KHQv9Cw0YHQuNCx0L4uINCh0LrQvtGA0L4g0LzRiyDRgSDQstCw0LzQuCDRgdCy0Y/QttC10LzRgdGPJztcblx0XHRtZXNzYWdlLmZhaWx1cmUgPSAn0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQui4uLic7XG5cblx0XHRsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJyksXG5cdFx0XHRcdGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1faW5wdXQnKSxcblx0XHRcdFx0c3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG5cblx0XHQvLyDQktCy0L7QtNC40Lwg0YLQvtC70YzQutC+INGH0LjRgdC70L5cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0ICBpZiAoaSAlIDIgPT0gMCkge1xuXHRcdCAgICBcblx0XHQgIH0gZWxzZSB7XG5cdFx0ICBcdGlucHV0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oYSkge1xuXHRcdCAgXHRcdGlmKCEvXFxkLy50ZXN0KGEua2V5KSlcblx0XHQgIFx0XHRcdGEucHJldmVudERlZmF1bHQoKTtcblx0XHQgIFx0fSk7XG5cdFx0ICB9XG5cdFx0fTtcblx0ICBcblxuXHQgIFx0Ly8g0J/QtdGA0LXQsdC+0YAg0LLRgdC10YUg0YTQvtGA0LxcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuXHQgICAgZm9ybVtpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRmb3JtW2ldLmFwcGVuZENoaWxkKHN0YXR1c01lc3NhZ2UpO1xuXG5cdFx0XHRcdFx0Ly8gQUpBWFxuXG5cdFx0XHRcdGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHRcdHJlcXVlc3Qub3BlbignUE9TVCcsICdzZXJ2ZXIucGhwJyk7XG5cdFx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdFx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybVtpXSk7XG5cdFx0XHRcdC8vINCU0L7QtNCw0LXQvCDQtNCw0L3QvdGL0LUg0LjQtyBDYWxjUG9wdXBcblx0XHRcdFx0aWYgKHBhcmFtZXRlcnNPYmogIT0gbnVsbCkge1xuXHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcItCo0LjRgNC40L3QsFwiLCBwYXJhbWV0ZXJzT2JqLndpZHRoKTtcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXCLQktGL0YHQvtGC0LBcIiwgcGFyYW1ldGVyc09iai5oZWlnaHQpO1xuXHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcItCi0LjQvyDQvtC60L3QsFwiLCBwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcXVlc3Quc2VuZChmb3JtRGF0YSk7XG5cdFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA8IDQpIHtcblx0XHRcdFx0XHRcdHN0YXR1c01lc3NhZ2UuaW5uZXJIVE1MID0gbWVzc2FnZS5sb2FkaW5nO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwKSB7XG5cdFx0XHRcdFx0XHRcdHN0YXR1c01lc3NhZ2UuaW5uZXJIVE1MID0gbWVzc2FnZS5zdWNjZXNzO1xuXHRcdFx0XHRcdFx0XHQvLyDQl9C00LXRgdGMINC00L7QsdCw0LLQu9GP0LXQvCDQutC+0L3RgtC10L3RgiDQvdCwINGB0YLRgNCw0L3QuNGG0YNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9IG1lc3NhZ2UuZmFpbHVyZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpbnB1dFtpXS52YWx1ZSA9ICcnO1xuXHRcdFx0XHRcdC8vINCe0YfQuNGJ0LDQtdC8INC/0L7Qu9GPINCy0LLQvtC00LBcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdCAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFic0NhbGM7XG59LHt9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmZ1bmN0aW9uIHRhYnNEZWNvcmF0aW9uKCkge1xuXHRsZXQgZGVjb3JhdGlvblRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNvcmF0aW9uX3RhYicpLFxuXHRcdFx0ZGVjb3JhdGlvbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjb3JhdGlvbl9saW5rJyksXG5cdFx0XHRkZWNvcmF0aW9uVGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY29yYXRpb25fdGFiY29udGVudCcpLFxuXHRcdFx0ZGVjb3JhdGlvbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNvcmF0aW9uX3NsaWRlcjInKVswXTtcblxuXHRmdW5jdGlvbiBoaWRlRGVjb3JhdGlvblRhYkNvbnRlbnQoYSkge1xuXHRcdGZvciAobGV0IGkgPSBhOyBpIDwgZGVjb3JhdGlvblRhYkNvbnRlbnQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRlY29yYXRpb25UYWJDb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblx0XHRcdGRlY29yYXRpb25UYWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRcdGRlY29yYXRpb25UYWJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWZ0ZXJfY2xpY2snKTtcblx0XHRcdGRlY29yYXRpb25MaW5rW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FmdGVyX2NsaWNrJyk7XG5cdFx0fVxuXHR9XG5cdGhpZGVEZWNvcmF0aW9uVGFiQ29udGVudCgxKVxuXG5cdGZ1bmN0aW9uIHNob3dEZWNvcmF0aW9uVGFiQ29udGVudChiKSB7XG5cdFx0aWYgKGRlY29yYXRpb25UYWJDb250ZW50W2JdLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG5cdFx0XHRoaWRlRGVjb3JhdGlvblRhYkNvbnRlbnQoMCk7XG5cdFx0XHRkZWNvcmF0aW9uVGFiQ29udGVudFtiXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XHRkZWNvcmF0aW9uVGFiQ29udGVudFtiXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdFx0XHRkZWNvcmF0aW9uVGFiW2JdLmNsYXNzTGlzdC5hZGQoJ2FmdGVyX2NsaWNrJyk7XG5cdFx0XHRkZWNvcmF0aW9uTGlua1tiXS5jbGFzc0xpc3QuYWRkKCdhZnRlcl9jbGljaycpO1xuXG5cdFx0fVxuXHR9XG5cblx0ZGVjb3JhdGlvbkluZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKHRhcmdldC5jbGFzc05hbWUgPT0gJ2RlY29yYXRpb25fdGFiJykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvcmF0aW9uVGFiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPT0gZGVjb3JhdGlvblRhYltpXSkge1xuXHRcdFx0XHRcdHNob3dEZWNvcmF0aW9uVGFiQ29udGVudChpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRhYnNEZWNvcmF0aW9uO1xufSx7fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5mdW5jdGlvbiB0aW1lcigpIHtcblx0bGV0IGRlYWRsaW5lID0gJzIwMTgtMDctNSc7XG5cblx0ZnVuY3Rpb24gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKSB7XG5cdFx0bGV0IHQgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcblx0XHRcdFx0dCAtPSA3MjAwMDAwO1xuXHRcdGxldCBzZWNvbmRzID0gTWF0aC5mbG9vciggKHQvMTAwMCkgJSA2MCApLFxuXHRcdFx0XHRtaW51dGVzID0gTWF0aC5mbG9vciggKHQvMTAwMC82MCkgJSA2MCApLFxuXHRcdFx0XHRob3VycyA9IE1hdGguZmxvb3IoICh0LygxMDAwKjYwKjYwKSkgJSAyNCApLFxuXHRcdFx0XHRkYXlzID0gTWF0aC5mbG9vciggKHQvKDEwMDAqNjAqNjAqMjQpKSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdCd0b3RhbCc6IHQsXG5cdFx0XHQnZGF5cyc6IGRheXMsXG5cdFx0XHQnaG91cnMnOiBob3Vycyxcblx0XHRcdCdtaW51dGVzJzogbWludXRlcyxcblx0XHRcdCdzZWNvbmRzJzogc2Vjb25kc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRDbG9jayhpZCwgZW5kdGltZSkge1xuXHRcdGxldCB0aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSxcblx0XHRcdFx0ZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyksXG5cdFx0XHRcdGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJzJyksXG5cdFx0XHRcdG1pbnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpLFxuXHRcdFx0XHRzZWNvbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZHMnKTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xuXHRcdFx0bGV0IHQgPSBnZXRUaW1lUmVtYWluaW5nKGVuZHRpbWUpO1xuXHRcdFx0aWYgKHQuZGF5cyA8IDEwKSB7XG5cdFx0XHRcdGRheXMuaW5uZXJIVE1MID0gJzAnICsgdC5kYXlzO1xuXHRcdFx0fSBlbHNlIGRheXMuaW5uZXJIVE1MID0gdC5kYXlzO1xuXG5cdFx0XHRpZiAodC5ob3VycyA8IDEwKSB7XG5cdFx0XHRcdGhvdXJzLmlubmVySFRNTCA9ICcwJyArIHQuaG91cnM7XG5cdFx0XHR9IGVsc2UgaG91cnMuaW5uZXJIVE1MID0gdC5ob3VycztcblxuXHRcdFx0aWYgKHQubWludXRlcyA8IDEwKSB7XG5cdFx0XHRcdG1pbnV0ZXMuaW5uZXJIVE1MID0gJzAnICsgdC5taW51dGVzO1xuXHRcdFx0fSBlbHNlIG1pbnV0ZXMuaW5uZXJIVE1MID0gdC5taW51dGVzO1xuXG5cdFx0XHRpZiAodC5zZWNvbmRzIDwgMTApIHtcblx0XHRcdFx0c2Vjb25kcy5pbm5lckhUTUwgPSAnMCcgKyB0LnNlY29uZHM7XG5cdFx0XHR9IGVsc2Ugc2Vjb25kcy5pbm5lckhUTUwgPSB0LnNlY29uZHM7XG5cdFx0XHRcblx0XHRcdGxldCB0aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgMTAwMCk7XG5cdFx0XHRpZiAodC50b3RhbCA8PSAwKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZUludGVydmFsKTtcblx0XHRcdFx0ZGF5cy5pbm5lckhUTUwgPSAnMDAnO1xuXHRcdFx0XHRob3Vycy5pbm5lckhUTUwgPSAnMDAnO1xuXHRcdFx0XHRtaW51dGVzLmlubmVySFRNTCA9ICcwMCc7XG5cdFx0XHRcdHNlY29uZHMuaW5uZXJIVE1MID0gJzAwJztcblx0XHRcdH1cblx0XHR9XG5cdFx0dXBkYXRlQ2xvY2soKTtcblx0XHRcblx0fVxuXHRzZXRDbG9jaygndGltZXInLCBkZWFkbGluZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRpbWVyO1xufSx7fV19LHt9LFs1XSk7XG4iLCJmdW5jdGlvbiBpbWFnZXMoKSB7XG5cdCAgbGV0IGltZ0JpZztcblx0ICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheU5ldycpO1xuXHQgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cblx0IFx0bGV0IGltZ1NtYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1zbWFsbCcpO1xuXHQgXHQgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdTbWFsbC5sZW5ndGg7IGkrKykge1xuXHQgXHQgXHRpbWdTbWFsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQgXHQgXHRcdGltZ0JpZyA9IGltZ1NtYWxsW2ldLmNsb25lTm9kZShmYWxzZSk7XG5cdCBcdCBcdFx0aW1nQmlnLmlkID0gJ2ltZ0JpZyc7XG5cdCBcdCBcdFx0b3ZlcmxheS5hcHBlbmRDaGlsZChpbWdCaWcpO1xuXHQgXHQgXHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0IFx0IFx0XHRyZXR1cm4gaW1nQmlnO1xuXHQgXHQgXHR9KTtcblx0IFx0IFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQgXHQgXHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0IFx0IFx0XHRpbWdCaWcucmVtb3ZlKCk7XG5cdCBcdCBcdH0pO1xuXHRcdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlczsiLCJmdW5jdGlvbiBwb3B1cCgpIHtcblx0bGV0IHBob25lTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Bob25lX2xpbmsnKSxcblx0XHRcdHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyksXG5cdFx0XHRwb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2Nsb3NlJyksXG5cdFx0XHRwb3B1cFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1zaGFkb3cnKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuXHRcdGxldCBidG4gPSBwaG9uZUxpbmtbaV07XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHR9KTtcblx0fTtcblx0XG5cdHBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblx0fSk7XG5cdHBvcHVwU2hhZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0cG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fSk7XG5cdC8vIFBvcHVwIFRvIFNob3cgNjBzZWNcblx0ZnVuY3Rpb24gcG9wdXBUaW1lKCkge1xuXHQgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cdHNldFRpbWVvdXQocG9wdXBUaW1lLCA2MDAwMCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwOyIsImZ1bmN0aW9uIHBvcHVwQ2FsYygpIHtcblx0bGV0IGJ0bkNhbGMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cF9jYWxjX2J0bicpLFxuXHRcdFx0cG9wdXBDYWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NhbGMnKSxcblx0XHRcdHBvcHVwQ2FsY0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NhbGNfY2xvc2UnKSxcblx0XHRcdHBvcHVwQ2FsY1NoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jYWxjLXNoYWRvdycpO1xuXG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5DYWxjLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJ0biA9IGJ0bkNhbGNbaV07XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRwb3B1cENhbGMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0fSk7XG5cdH07XG5cdFxuXHRwb3B1cENhbGNDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblx0fSk7XG5cdHBvcHVwQ2FsY1NoYWRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblx0fSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwQ2FsYzsiLCJmdW5jdGlvbiBwb3B1cEVuZ2lubmVyKCkge1xuXHRsZXQgaGVhZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9idG4nKSxcblx0XHRcdHBvcHVwRW5naW5lZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZW5naW5lZXInKSxcblx0XHRcdHBvcHVwRW5naW5lZXJDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9lbmdpbmVlcl9jbG9zZScpLFxuXHRcdFx0cG9wdXBFbmdpbmVlclNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1lbmdpbmVlci1zaGFkb3cnKTtcblxuXHRoZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRwb3B1cEVuZ2luZWVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0fSk7XG5cdFxuXHRwb3B1cEVuZ2luZWVyQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRwb3B1cEVuZ2luZWVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuXHR9KTtcblx0cG9wdXBFbmdpbmVlclNoYWRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwRW5naW5lZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwRW5naW5uZXI7IiwiZnVuY3Rpb24gdGFicygpIHtcblx0bGV0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvLWhlYWRlci10YWInKSxcblx0XHRcdHRhYkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLXRhYmNvbnRlbnQnKSxcblx0XHRcdGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvLWhlYWRlcicpWzBdO1xuXG5cdGZ1bmN0aW9uIGhpZGVUYWJDb250ZW50KGEpIHtcblx0XHRmb3IgKGxldCBpID0gYTsgaSA8IHRhYkNvbnRlbnQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRhYkNvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0dGFiQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdFx0XHR0YWJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cdGhpZGVUYWJDb250ZW50KDEpXG5cblx0ZnVuY3Rpb24gc2hvd1RhYkNvbnRlbnQoYikge1xuXHRcdGlmICh0YWJDb250ZW50W2JdLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG5cdFx0XHRoaWRlVGFiQ29udGVudCgwKTtcblx0XHRcdHRhYkNvbnRlbnRbYl0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0dGFiQ29udGVudFtiXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdFx0XHR0YWJbYl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cblx0XHR9XG5cdH1cblxuXHRpbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGlmICh0YXJnZXQuY2xhc3NOYW1lID09ICdpbmZvLWhlYWRlci10YWInKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGFyZ2V0ID09IHRhYltpXSkge1xuXHRcdFx0XHRcdHNob3dUYWJDb250ZW50KGkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFiczsiLCJmdW5jdGlvbiB0YWJzQ2FsYygpIHtcblx0bGV0IGJhbGNvbkljb25zSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYWxjb25faWNvbnMtaXRlbXMnKSxcblx0XHRcdGJhbGNvbkJpZ0ltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhbGNvbl9iaWctaW1hZ2VzJyksXG5cdFx0XHRiYWxjb25JY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhbGNvbl9pY29ucycpWzBdLFxuXHRcdFx0Zm9ybVBhcmFtZXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1wYXJhbWV0ZXJzJyksXG5cdFx0XHRwb3B1cENhbGNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2FsY19idXR0b24nKSxcblx0XHRcdHBvcHVwQ2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjJyksIC8v0JLQvtC30LzQvtC20L3QviDQv9C+0L3QsNC00L7QsdC40YLRgdGPINCyINC80L7QtNGD0LvRjNC90L7QuSDRgdC40YHRgtC10LzQtVxuXHRcdFx0cG9wdXBDYWxjUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjX3Byb2ZpbGUnKSxcblx0XHRcdGNoZWNrYm94Q29sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1jb2xkJyksXG5cdFx0XHRjaGVja2JveFdhcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtd2FybScpLFxuXHRcdFx0cG9wdXBDYWxjUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjX3Byb2ZpbGVfYnV0dG9uJyksXG5cdFx0XHRwb3B1cENhbGNFbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2FsY19lbmQnKSxcblx0XHRcdHBvcHVwQ2FsY0VuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9jYWxjX2VuZF9idXR0b24nKSxcblx0XHRcdHBvcHVwQ2FsY0VuZENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NhbGNfZW5kX2Nsb3NlJyksXG5cdFx0XHRwb3B1cENhbGNQcm9maWxlQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfY2FsY19wcm9maWxlX2Nsb3NlJyksXG5cdFx0XHRwYXJhbWV0ZXJzT2JqID0ge307XG5cblx0ZnVuY3Rpb24gaGlkZUJhbGNvblRhYkNvbnRlbnQoYSkge1xuXHRcdGZvciAobGV0IGkgPSBhOyBpIDwgYmFsY29uQmlnSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRiYWxjb25CaWdJbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0YmFsY29uQmlnSW1hZ2VzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRcdGJhbGNvbkljb25zSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWljb24nKTtcblx0XHR9XG5cdH1cblx0aGlkZUJhbGNvblRhYkNvbnRlbnQoMSlcblxuXHRmdW5jdGlvbiBzaG93QmFsY29uVGFiQ29udGVudChiKSB7XG5cdFx0aWYgKGJhbGNvbkJpZ0ltYWdlc1tiXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuXHRcdFx0aGlkZUJhbGNvblRhYkNvbnRlbnQoMCk7XG5cdFx0XHRiYWxjb25CaWdJbWFnZXNbYl0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdFx0YmFsY29uQmlnSW1hZ2VzW2JdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdGJhbGNvbkljb25zSXRlbXNbYl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWljb24nKTtcblx0XHR9XG5cdH1cblxuXHRiYWxjb25JY29ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSAnYmFsY29uX2ljb25zLWl0ZW1zJykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYWxjb25JY29uc0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPT0gYmFsY29uSWNvbnNJdGVtc1tpXSkge1xuXHRcdFx0XHRcdHNob3dCYWxjb25UYWJDb250ZW50KGkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YfQuNGB0LvQvlxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdCAgZm9ybVBhcmFtZXRlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihiKSB7XG5cdCAgXHRpZighL1xcZC8udGVzdChiLmtleSkpXG5cdCAgXHRcdGIucHJldmVudERlZmF1bHQoKTtcblx0ICB9KTtcblx0fTtcblxuXHQvLyBQb3B1cCBQcm9maWxlXG5cblx0cG9wdXBDYWxjQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gSW5wdXRzXG5cdFx0cGFyYW1ldGVyc09iai53aWR0aCA9IHdpZHRoLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnNPYmouaGVpZ2h0ID0gaGVpZ2h0LnZhbHVlO1xuXHRcdC8vINCe0YfQuNGJ0LDQtdC8INC/0L7Qu9GPINCy0LLQvtC00LBcblx0XHR3aWR0aC52YWx1ZSA9ICcnO1xuXHRcdGhlaWdodC52YWx1ZSA9ICcnO1xuXG5cdFx0cG9wdXBDYWxjLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cG9wdXBDYWxjUHJvZmlsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XG5cdH0pO1xuXG5cdHBvcHVwQ2FsY1Byb2ZpbGVDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsY1Byb2ZpbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmoud2lkdGg7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmouaGVpZ2h0O1xuXHRcdGRlbGV0ZSBwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnM7XG5cdH0pO1xuXG5cdC8vIFBvcHVwIENhbGMgRW5kXG5cblx0cG9wdXBDYWxjUHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIENoZWNrYm94XG5cdFx0aWYgKGNoZWNrYm94Q29sZC5jaGVja2VkKSB7XG5cdFx0XHRwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnMgPSAn0KXQvtC70L7QtNC90L7QtSc7XG5cdFx0fSBlbHNlXG5cdFx0aWYgKGNoZWNrYm94V2FybS5jaGVja2VkKSB7XG5cdFx0XHRwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnMgPSAn0KLQtdC/0LvQvtC1Jztcblx0XHR9XG5cblx0XHRwb3B1cENhbGNQcm9maWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cG9wdXBDYWxjRW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuXHR9KTtcblxuXHRwb3B1cENhbGNFbmRDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcHVwQ2FsY0VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRkZWxldGUgcGFyYW1ldGVyc09iai53aWR0aDtcblx0XHRkZWxldGUgcGFyYW1ldGVyc09iai5oZWlnaHQ7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmoucGFyYW1ldGVycztcblx0fSk7XG5cblx0cG9wdXBDYWxjRW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cblx0XHRwb3B1cENhbGNFbmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmoud2lkdGg7XG5cdFx0ZGVsZXRlIHBhcmFtZXRlcnNPYmouaGVpZ2h0O1xuXHRcdGRlbGV0ZSBwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnM7XG5cdH0pO1xuXG5cdC8vQWpheFxuXHRcdGxldCBtZXNzYWdlID0gbmV3IE9iamVjdCgpO1xuXHRcdG1lc3NhZ2UubG9hZGluZyA9ICfQl9Cw0LPRgNGD0LfQutCwLi4uJztcblx0XHRtZXNzYWdlLnN1Y2Nlc3MgPSAn0KHQv9Cw0YHQuNCx0L4uINCh0LrQvtGA0L4g0LzRiyDRgSDQstCw0LzQuCDRgdCy0Y/QttC10LzRgdGPJztcblx0XHRtZXNzYWdlLmZhaWx1cmUgPSAn0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQui4uLic7XG5cblx0XHRsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJyksXG5cdFx0XHRcdGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1faW5wdXQnKSxcblx0XHRcdFx0c3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG5cblx0XHQvLyDQktCy0L7QtNC40Lwg0YLQvtC70YzQutC+INGH0LjRgdC70L5cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0ICBpZiAoaSAlIDIgPT0gMCkge1xuXHRcdCAgICBcblx0XHQgIH0gZWxzZSB7XG5cdFx0ICBcdGlucHV0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oYSkge1xuXHRcdCAgXHRcdGlmKCEvXFxkLy50ZXN0KGEua2V5KSlcblx0XHQgIFx0XHRcdGEucHJldmVudERlZmF1bHQoKTtcblx0XHQgIFx0fSk7XG5cdFx0ICB9XG5cdFx0fTtcblx0ICBcblxuXHQgIFx0Ly8g0J/QtdGA0LXQsdC+0YAg0LLRgdC10YUg0YTQvtGA0LxcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuXHQgICAgZm9ybVtpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRmb3JtW2ldLmFwcGVuZENoaWxkKHN0YXR1c01lc3NhZ2UpO1xuXG5cdFx0XHRcdFx0Ly8gQUpBWFxuXG5cdFx0XHRcdGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHRcdHJlcXVlc3Qub3BlbignUE9TVCcsICdzZXJ2ZXIucGhwJyk7XG5cdFx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdFx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybVtpXSk7XG5cdFx0XHRcdC8vINCU0L7QtNCw0LXQvCDQtNCw0L3QvdGL0LUg0LjQtyBDYWxjUG9wdXBcblx0XHRcdFx0aWYgKHBhcmFtZXRlcnNPYmogIT0gbnVsbCkge1xuXHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcItCo0LjRgNC40L3QsFwiLCBwYXJhbWV0ZXJzT2JqLndpZHRoKTtcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXCLQktGL0YHQvtGC0LBcIiwgcGFyYW1ldGVyc09iai5oZWlnaHQpO1xuXHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcItCi0LjQvyDQvtC60L3QsFwiLCBwYXJhbWV0ZXJzT2JqLnBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcXVlc3Quc2VuZChmb3JtRGF0YSk7XG5cdFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA8IDQpIHtcblx0XHRcdFx0XHRcdHN0YXR1c01lc3NhZ2UuaW5uZXJIVE1MID0gbWVzc2FnZS5sb2FkaW5nO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwKSB7XG5cdFx0XHRcdFx0XHRcdHN0YXR1c01lc3NhZ2UuaW5uZXJIVE1MID0gbWVzc2FnZS5zdWNjZXNzO1xuXHRcdFx0XHRcdFx0XHQvLyDQl9C00LXRgdGMINC00L7QsdCw0LLQu9GP0LXQvCDQutC+0L3RgtC10L3RgiDQvdCwINGB0YLRgNCw0L3QuNGG0YNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9IG1lc3NhZ2UuZmFpbHVyZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpbnB1dFtpXS52YWx1ZSA9ICcnO1xuXHRcdFx0XHRcdC8vINCe0YfQuNGJ0LDQtdC8INC/0L7Qu9GPINCy0LLQvtC00LBcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdCAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFic0NhbGM7IiwiZnVuY3Rpb24gdGFic0RlY29yYXRpb24oKSB7XG5cdGxldCBkZWNvcmF0aW9uVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlY29yYXRpb25fdGFiJyksXG5cdFx0XHRkZWNvcmF0aW9uTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNvcmF0aW9uX2xpbmsnKSxcblx0XHRcdGRlY29yYXRpb25UYWJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVjb3JhdGlvbl90YWJjb250ZW50JyksXG5cdFx0XHRkZWNvcmF0aW9uSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY29yYXRpb25fc2xpZGVyMicpWzBdO1xuXG5cdGZ1bmN0aW9uIGhpZGVEZWNvcmF0aW9uVGFiQ29udGVudChhKSB7XG5cdFx0Zm9yIChsZXQgaSA9IGE7IGkgPCBkZWNvcmF0aW9uVGFiQ29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZGVjb3JhdGlvblRhYkNvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0ZGVjb3JhdGlvblRhYkNvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXHRcdFx0ZGVjb3JhdGlvblRhYltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhZnRlcl9jbGljaycpO1xuXHRcdFx0ZGVjb3JhdGlvbkxpbmtbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWZ0ZXJfY2xpY2snKTtcblx0XHR9XG5cdH1cblx0aGlkZURlY29yYXRpb25UYWJDb250ZW50KDEpXG5cblx0ZnVuY3Rpb24gc2hvd0RlY29yYXRpb25UYWJDb250ZW50KGIpIHtcblx0XHRpZiAoZGVjb3JhdGlvblRhYkNvbnRlbnRbYl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcblx0XHRcdGhpZGVEZWNvcmF0aW9uVGFiQ29udGVudCgwKTtcblx0XHRcdGRlY29yYXRpb25UYWJDb250ZW50W2JdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHRcdGRlY29yYXRpb25UYWJDb250ZW50W2JdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdGRlY29yYXRpb25UYWJbYl0uY2xhc3NMaXN0LmFkZCgnYWZ0ZXJfY2xpY2snKTtcblx0XHRcdGRlY29yYXRpb25MaW5rW2JdLmNsYXNzTGlzdC5hZGQoJ2FmdGVyX2NsaWNrJyk7XG5cblx0XHR9XG5cdH1cblxuXHRkZWNvcmF0aW9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVjb3JhdGlvbl90YWInKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yYXRpb25UYWIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRhcmdldCA9PSBkZWNvcmF0aW9uVGFiW2ldKSB7XG5cdFx0XHRcdFx0c2hvd0RlY29yYXRpb25UYWJDb250ZW50KGkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFic0RlY29yYXRpb247IiwiZnVuY3Rpb24gdGltZXIoKSB7XG5cdGxldCBkZWFkbGluZSA9ICcyMDE4LTA3LTUnO1xuXG5cdGZ1bmN0aW9uIGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSkge1xuXHRcdGxldCB0ID0gRGF0ZS5wYXJzZShlbmR0aW1lKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSk7XG5cdFx0XHRcdHQgLT0gNzIwMDAwMDtcblx0XHRsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoICh0LzEwMDApICUgNjAgKSxcblx0XHRcdFx0bWludXRlcyA9IE1hdGguZmxvb3IoICh0LzEwMDAvNjApICUgNjAgKSxcblx0XHRcdFx0aG91cnMgPSBNYXRoLmZsb29yKCAodC8oMTAwMCo2MCo2MCkpICUgMjQgKSxcblx0XHRcdFx0ZGF5cyA9IE1hdGguZmxvb3IoICh0LygxMDAwKjYwKjYwKjI0KSkgKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQndG90YWwnOiB0LFxuXHRcdFx0J2RheXMnOiBkYXlzLFxuXHRcdFx0J2hvdXJzJzogaG91cnMsXG5cdFx0XHQnbWludXRlcyc6IG1pbnV0ZXMsXG5cdFx0XHQnc2Vjb25kcyc6IHNlY29uZHNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0Q2xvY2soaWQsIGVuZHRpbWUpIHtcblx0XHRsZXQgdGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksXG5cdFx0XHRcdGRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cycpLFxuXHRcdFx0XHRob3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpLFxuXHRcdFx0XHRtaW51dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnV0ZXMnKSxcblx0XHRcdFx0c2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRzJyk7XG5cblx0XHRmdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcblx0XHRcdGxldCB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcblx0XHRcdGlmICh0LmRheXMgPCAxMCkge1xuXHRcdFx0XHRkYXlzLmlubmVySFRNTCA9ICcwJyArIHQuZGF5cztcblx0XHRcdH0gZWxzZSBkYXlzLmlubmVySFRNTCA9IHQuZGF5cztcblxuXHRcdFx0aWYgKHQuaG91cnMgPCAxMCkge1xuXHRcdFx0XHRob3Vycy5pbm5lckhUTUwgPSAnMCcgKyB0LmhvdXJzO1xuXHRcdFx0fSBlbHNlIGhvdXJzLmlubmVySFRNTCA9IHQuaG91cnM7XG5cblx0XHRcdGlmICh0Lm1pbnV0ZXMgPCAxMCkge1xuXHRcdFx0XHRtaW51dGVzLmlubmVySFRNTCA9ICcwJyArIHQubWludXRlcztcblx0XHRcdH0gZWxzZSBtaW51dGVzLmlubmVySFRNTCA9IHQubWludXRlcztcblxuXHRcdFx0aWYgKHQuc2Vjb25kcyA8IDEwKSB7XG5cdFx0XHRcdHNlY29uZHMuaW5uZXJIVE1MID0gJzAnICsgdC5zZWNvbmRzO1xuXHRcdFx0fSBlbHNlIHNlY29uZHMuaW5uZXJIVE1MID0gdC5zZWNvbmRzO1xuXHRcdFx0XG5cdFx0XHRsZXQgdGltZUludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDEwMDApO1xuXHRcdFx0aWYgKHQudG90YWwgPD0gMCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XG5cdFx0XHRcdGRheXMuaW5uZXJIVE1MID0gJzAwJztcblx0XHRcdFx0aG91cnMuaW5uZXJIVE1MID0gJzAwJztcblx0XHRcdFx0bWludXRlcy5pbm5lckhUTUwgPSAnMDAnO1xuXHRcdFx0XHRzZWNvbmRzLmlubmVySFRNTCA9ICcwMCc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHVwZGF0ZUNsb2NrKCk7XG5cdFx0XG5cdH1cblx0c2V0Q2xvY2soJ3RpbWVyJywgZGVhZGxpbmUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0aW1lcjsiXX0=

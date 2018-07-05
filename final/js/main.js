/* jshint esversion: 6 */
	window.addEventListener('DOMContentLoaded', function() {
		
		// popupEnginner

		let headerBtn = document.querySelector('.header_btn'),
				popupEngineer = document.querySelector('.popup_engineer'),
				popupEngineerClose = document.querySelector('.popup_engineer_close'),
				popupEngineerShadow = document.querySelector('.popup-engineer-shadow');

		headerBtn.addEventListener('click', function() {
			popupEngineer.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
		
		popupEngineerClose.addEventListener('click', function() {
			popupEngineer.style.display = 'none';
			document.body.style.overflow = '';
		});
		popupEngineerShadow.addEventListener('click', function() {
			popupEngineer.style.display = 'none';
		});

		// popup

		let popup = document.querySelector('.popup'),
				popupClose = document.querySelector('.popup_close'),
				popupShadow = document.querySelector('.popup-shadow');

  document.body.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList == 'phone_link'){
        this.classList.add('more-splash');
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
      	return 0;
    }
  });
	
	popupClose.addEventListener('click', function() {
		popup.style.display = 'none';
		document.body.style.overflow = '';
	});
	popupShadow.addEventListener('click', function() {
		popup.style.display = 'none';
	});
	// Popup To Show 60sec
	function popupTime() {
	  popup.style.display = 'block';
	}
	setTimeout(popupTime, 60000);

		// popupCalc

		let btnCalc = document.querySelectorAll('.popup_calc_btn'),
				popupCalc = document.querySelector('.popup_calc'),
				popupCalcClose = document.querySelector('.popup_calc_close'),
				popupCalcShadow = document.querySelector('.popup-calc-shadow'),
				glazing = document.querySelector('.glazing');

		glazing.addEventListener('click', function (event) {
		  let target = event.target;
		     
		  if (target.classList.contains("popup_calc_btn")){
		      popupCalc.style.display = 'block';
		      document.body.style.overflow = 'hidden';
		  } else {
		    	return 0;
		  }
		});
		
		popupCalcClose.addEventListener('click', function() {
			popupCalc.style.display = 'none';
			document.body.style.overflow = '';
		});
		popupCalcShadow.addEventListener('click', function() {
			popupCalc.style.display = 'none';
			document.body.style.overflow = '';
		});
		
		// Tabs Calc

		let balconIconsItems = document.getElementsByClassName('balcon_icons-items'),
				balconBigImages = document.getElementsByClassName('balcon_big-images'),
				balconIcons = document.getElementsByClassName('balcon_icons')[0],
				formParameters = document.querySelectorAll('.form-parameters'),
				popupCalcButton = document.querySelector('.popup_calc_button'),
				popupCalc = document.querySelector('.popup_calc'), //Возможно понадобится в модульной системе
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
			for (let i = a; i < balconBigImages.length; i++) {
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

		balconIcons.addEventListener('click', function(event) {
			let target = event.target;
			if (target.className == 'balcon_icons-items') {
				for (let i = 0; i < balconIconsItems.length; i++) {
					if (target == balconIconsItems[i]) {
						showBalconTabContent(i);
						break;
					}
				}
			}
		});

		// Проверка на число

		for (let i = 0; i < 2; i++) {
		  formParameters[i].addEventListener('keypress', function(b) {
		  	if(!/\d/.test(b.key))
		  		b.preventDefault();
		  });
		}

		// Popup Profile

		popupCalcButton.addEventListener('click', function() {
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

		popupCalcProfileClose.addEventListener('click', function() {
			popupCalcProfile.style.display = 'none';
			document.body.style.overflow = 'hidden';
			delete parametersObj.width;
			delete parametersObj.height;
			delete parametersObj.parameters;
		});

		// Popup Calc End

		popupCalcProfileButton.addEventListener('click', function() {
			// Checkbox
			if (checkboxCold.checked) {
				parametersObj.parameters = 'Холодное';
			} else
			if (checkboxWarm.checked) {
				parametersObj.parameters = 'Теплое';
			}

			popupCalcProfile.style.display = 'none';
			popupCalcEnd.style.display = 'block';
			document.body.style.overflow = 'hidden';

		});

		popupCalcEndClose.addEventListener('click', function() {
			popupCalcEnd.style.display = 'none';
			document.body.style.overflow = 'hidden';
			delete parametersObj.width;
			delete parametersObj.height;
			delete parametersObj.parameters;
		});

		popupCalcEndButton.addEventListener('click', function() {

			popupCalcEnd.style.display = 'none';
			document.body.style.overflow = 'hidden';
			delete parametersObj.width;
			delete parametersObj.height;
			delete parametersObj.parameters;
		});

		// Timer

		//let deadline = '2018-07-4';

		function timer(deadLine) {
			//timer
    function getTime(endtime) {
      var dateDeadLine = new Date(endtime),
          dateNow = new Date(),
          t = dateDeadLine.getTime() - dateNow.getTime(),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / (1000 * 60) % 60),
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

    function setClock(endtime) {
      var days = document.querySelector('.days'),
          hours = document.querySelector('.hours'),
          minutes = document.querySelector('.minutes'),
          seconds = document.querySelector('.seconds');

      function updateClock() {
        var time = getTime(endtime);
        var arrTime = [time.days, time.hours, time.minutes, time.seconds];
        for (var i = 0; i < arrTime.length; i++) {
          if (arrTime[i] < 10) {
            arrTime[i] = '0' + arrTime[i];
          }
        }
        days.innerHTML = arrTime[0];
        hours.innerHTML = arrTime[1];
        minutes.innerHTML = arrTime[2];
        seconds.innerHTML = arrTime[3];
        if (time.total <= 0) {
          clearInterval(timeInterval);
          days.innerHTML = '00';
          hours.innerHTML = '00';
          minutes.innerHTML = '00';
          seconds.innerHTML = '00';
        }
      }
      var timeInterval = setInterval(updateClock, 1000);
    }

    setClock(deadLine);

		}

		timer('2018/07/6');

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
		hideTabContent(1);

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

		// Forms Ajax

    let message = {
    		loading: 'Загрузка...',
      	success: 'Спасибо. Скоро мы с вами свяжемся',
      	failure: 'Что-то пошло не так...'
  	};

		let form = document.querySelectorAll('.form'),
				input = document.querySelectorAll('.form_input'),
				statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		// Вводим только число

		for (let i = 0; i <= input.length; i++) {
		  if (i % 2 === 0) {
		    
		  } else {
		  	input[i].addEventListener('keypress', function(a) {
		  		if(!/\d/.test(a.key))
		  			a.preventDefault();
		  	});
		  }
		}
	  

	  	// Перебор всех форм

	  document.body.addEventListener('submit', function (event) {
	    let target = event.target;

	    if (target.classList.contains("form")){
	      event.preventDefault();
	      target.appendChild(statusMessage);

	      	// AJAX

	      let request = new XMLHttpRequest();
	      request.open('POST', 'server.php');
	      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	      let formData = new FormData(event);
	      // Додаем данные из CalcPopup
	      if (parametersObj !== null) {
	      	formData.append("Ширина", parametersObj.width);
	      	formData.append("Высота", parametersObj.height);
	      	formData.append("Тип окна", parametersObj.parameters);
	      }
	      request.send(formData);
	      request.onreadystatechange = function() {
	      	if (request.readyState < 4) {
	      		statusMessage.innerHTML = message.loading;
	      	} else if (request.readyState === 4) {
	      		if (request.status == 200 && request.status < 300) {
	      			statusMessage.innerHTML = message.success;
	      			// Здесь добавляем контент на страницу
	      		}
	      		else {
	      			statusMessage.innerHTML = message.failure;
	      		}
	      	}
	      };
	      for (let i = 0; i < input.length; i++) {
	      	input[i].value = '';
	      	// Очищаем поля ввода
	      }  
	    } else {
	      	return 0;
	    }
	  });

	  // Images
	  let imgBig;
	  let overlay = document.createElement('div');
	  overlay.classList.add('overlayNew');
	  document.body.appendChild(overlay);

	 	let imgSmall = document.querySelectorAll('.img-small');
	 	let containerImages = document.querySelector('.container-images');

	 	document.body.addEventListener('click', function (event) {
	 	  let target = event.target;
	 	     
	 	  if (target.classList.contains("img-small")){
      	imgBig = target.cloneNode(false);
      	imgBig.id = 'imgBig';
      	overlay.appendChild(imgBig);
      	overlay.style.display = 'flex';  
	 	  } else {
	 	    	return 0;
	 	  }
	 	});
 	 	overlay.addEventListener('click', function() {
 	 		overlay.style.display = 'none';
 	 		overlay.removeChild(imgBig);
 	 	});

	});
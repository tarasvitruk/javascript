function form() {
	let messages = new Object();
	messages.loading = 'Загрузка...';
	messages.success = 'Спасибо. Скоро мы с вами свяжемся';
	messages.failure = 'Что-то пошло не так...';

	let forms = document.getElementById('form'),
			inputs = forms.getElementsByTagName('input'),
			statusMessages = document.createElement('div');
	statusMessages.classList.add('status');
	forms.addEventListener('submit', function(event) {
		event.preventDefault();
		forms.appendChild(statusMessages);

		// AJAX

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		let formData = new FormData(forms);
		request.send(formData);
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessages.innerHTML = messages.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessages.innerHTML = messages.success;
					// Здесь добавляем контент на страницу
				}
				else {
					statusMessages.innerHTML = messages.failure;
				}
			}
		}
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
			// Очищаем поля ввода
		}
	});
}

module.exports = form;
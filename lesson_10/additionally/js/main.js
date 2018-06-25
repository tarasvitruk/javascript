let input = document.getElementById('tel');

input.addEventListener('focus', n => {
	if(!/^\+\d*$/.test(input.value))
		input.value = '+7';
});

input.addEventListener('keypress', a => {
	if(!/\d/.test(a.key))
		a.preventDefault();
});
let btn = document.querySelector('.btn');

function myAnimations() {
	let elem = document.querySelector('.box'),
			pos = 0,
			id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimations);
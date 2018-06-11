let btn = document.querySelector('.btn');

function animations() {
	let quade = document.querySelector('.element'),
			pos = 0,
			id = setInterval(frame, 10);

	function frame() {
		if (pos == 450) {
			clearInterval(id);
		} else {
			pos++;
			quade.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', animations);
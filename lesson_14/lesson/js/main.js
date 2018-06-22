
class option {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	div() {
		let div = document.createElement('div');
		div.innerHTML = 'Hello Artem!';
		document.body.appendChild(div);
		div.style.cssText = `height: ${this.height}px; \
		    width: ${this.width}px; \
		    background: ${this.bg}; \
		    font-size: ${this.fontSize}; \
		    text-align: ${this.textAlign}; \
		  `;
	}
}




const objDiv = new option(50, 100, 'green', 25, 'center');

objDiv.div();

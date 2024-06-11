export class FloatText {
	constructor(x, y, lifespan, text, list) {
		this._x = x;
		this._y = y;
		this._lifespan = lifespan;
		this._text = text;

		const el = document.createElement('span');
		el.classList.add('floatingtext');
		el.innerText = this._text;
		document.body.appendChild(el);
		el.style.left = `${this._x + (Math.random() - 0.5) * 100}px`;
		el.style.top = `${this._y + (Math.random() - 0.5) * 100}px`;
		el.style.animation = `1 particle ${this._lifespan}ms`;
		list.push(this);

		setTimeout(() => {
			document.body.removeChild(el);
			delete this;
		}, this._lifespan);
	}
}

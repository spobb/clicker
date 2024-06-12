class Building {
	constructor(price, production, name) {
		this._name = name;
		this._price = price;
		this._baseCost = price;
		this._production = production;
		this._count = 0;
	}
	get name() {
		return this._name;
	}
	get price() {
		return this._price;
	}
	get production() {
		return this._production;
	}
	get count() {
		return this._count;
	}
	updateCount() {
		++this._count;
	}
	produce() {
		return this._production;
	}
	updatePrice() {
		this._price = Math.floor(this._baseCost * 1.15 ** (this._count + 1));
	}
}

export class Clicker extends Building {
	constructor(price, production, name) {
		super(price, production, name);
		this._count = 0;
	}
	get count() {
		return this._count;
	}
	updateCount() {
		++this._count;
	}
}

export class TurboClicker extends Building {
	constructor(price, production, name) {
		super(price, production, name);
		this._count = 0;
	}
	get count() {
		return this._count;
	}
	updateCount() {
		++this._count;
	}
}

export class Balls extends Building {
	constructor(price, production, name) {
		super(price, production, name);
		this._count = 0;
	}
	get count() {
		return this._count;
	}
	updateCount() {
		++this._count;
	}
}

export class Portal extends Building {
	constructor(price, production, name) {
		super(price, production, name);
		this._count = 0;
	}
	get count() {
		return this._count;
	}
	updateCount() {
		++this._count;
	}
}

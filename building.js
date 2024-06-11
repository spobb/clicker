class Building {
	constructor(price, production, name, list) {
		this._name = name;
		this._price = price;
		this._production = production;

		list.push(this);
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
	produce() {
		return this._production;
	}
	*test() {
		yield this._name;
		yield this._price;
		yield this._production;
	}
}

export class Clicker extends Building {
	constructor(price, production, name, list) {
		super(price, production, name, list);
		this._price = Math.floor(this._price * 1.15 ** this._count);
	}
	static count = 0;
	_count = ++Clicker.count;

	get count() {
		return this._count;
	}
}

export class TurboClicker extends Building {
	constructor(price, production, name, list) {
		super(price, production, name, list);
		this._price = Math.floor(this._price * 1.15 ** this._count);
	}
	static count = 0;
	_count = ++TurboClicker.count;

	get count() {
		return this._count;
	}
}

export class Balls extends Building {
	constructor(price, production, name, list) {
		super(price, production, name, list);
		this._price = Math.floor(this._price * 1.15 ** this._count);
	}
	static count = 0;
	_count = ++Balls.count;

	get count() {
		return this._count;
	}
}

export class Portal extends Building {
	constructor(price, production, name, list) {
		super(price, production, name, list);
		this._price = Math.floor(this._price * 1.15 ** this._count);
	}
	static count = 0;
	_count = ++Portal.count;

	get count() {
		return this._count;
	}
}

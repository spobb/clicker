export class Building {
	constructor(price, production, name) {
		this._name = name;
		this._price = price;
		this._baseCost = price;
		this._production = production / 20;
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
		return this._production * this._count;
	}
	updatePrice() {
		this._price = Math.floor(this._baseCost * 1.15 ** (this._count + 1));
	}
}

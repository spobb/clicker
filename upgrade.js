export class Upgrade {
	constructor(price, effect, name) {
		this._price = price;
		this._effect = effect;
		this._name = name;
		this._BOUGHT = false;
	}
	get price() {
		return this._price;
	}
	get effect() {
		return this._effect;
	}
	get name() {
		return this._name;
	}
	get isBought() {
		return this._BOUGHT;
	}
	buy() {
		this._BOUGHT = true;
		return;
	}
}

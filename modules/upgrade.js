import { Game } from "../game.js";
import { Building } from "./building.js";

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

export class ClickPercent extends Upgrade {
	constructor(price, effect, name) {
		super(price, effect, name);
	}
	applyEffect() {
		Game.clickValue = Game.baseClickValue + (Game.perTick * 20) * this._effect;
		return;
	}
}

export class ClickMultiple extends Upgrade {
	constructor(price, effect, name) {
		super(price, effect, name);
	}
	applyEffect() {
		Game.clickValue = Game.baseClickValue * this._effect;
		return;
	}
}

export class ClickAddition extends Upgrade {
	constructor(price, effect, name) {
		super(price, effect, name);
	}
	applyEffect() {
		console.log(Game.buildingCount);
		Game.clickValue = Game.baseClickValue + (Game.buildingCount * 0.1);
		return;
	}
}

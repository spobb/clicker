import { Game } from './game.js';
import { Cheats } from './modules/cheats.js';

import { Building } from './modules/building.js';
import { Upgrade, ClickPercent, ClickMultiple } from './modules/upgrade.js';
import { FloatText } from './modules/floattext.js';
import { numFormats } from './modules/nums.js';
import { upgrades } from './modules/upgrades.js';
import { buildings } from './buildings.js';

let particles = [];

const button = document.getElementById('button');
const cookie = document.querySelector('.cookie');
const cookieDisplay = document.getElementById('cookieDisplay');
const CPS = document.getElementById('CPS');

const buildingsWrapper = document.getElementById('buildings');

function formatNum(num) {
	num = num.toExponential();
	let s = num.slice(0, num.indexOf('+') - 1);
	let magnitude = parseInt(num.slice(num.indexOf('+') + 1));
	return (s * (10 ** (magnitude % 3))).toFixed(num > 999 ? 3 : 0).replace(/[.]/g, ',') + ' ' + numFormats[magnitude];
}

button.addEventListener('mousedown', e => {
	Game.cookies += Game.clickValue;
	new FloatText(e.clientX, e.clientY, 2000, `+${Game.clickValue}`, particles);
	cookie.classList.add('clicked');
	addEventListener('mouseup', () => {
		cookie.classList.remove('clicked');
	});
});

document.querySelector('.upgrade').addEventListener('click', () => {
	if (Game.cookies >= upgrades['a1'].price) {
		// remove cost from total
		Game.cookies -= upgrades['a1'].price;

		// update info
		upgrades['a1'].buy();
		upgrades['a1'].applyEffect();
	}
});

// create each building

for (const [key, building] of Object.entries(buildings)) {
	// create html
	const elemCont = document.createElement('div');
	elemCont.classList.add('building', 'clickable');
	elemCont.dataset.is = key;

	const elemName = document.createElement('span');
	elemName.innerText = building.name;

	const elemCounter = document.createElement('span');
	elemCounter.innerText = building.count;

	const elemBuyDiv = document.createElement('div');
	elemBuyDiv.classList.add('buy');

	const elemPrice = document.createElement('span');
	elemPrice.classList.add('price');
	elemPrice.innerText = `${formatNum(building.price)} cookies `;

	elemBuyDiv.appendChild(elemPrice);
	elemCont.append(elemName, elemCounter, elemBuyDiv);

	buildingsWrapper.appendChild(elemCont);

	// event listener on each building

	elemCont.addEventListener('click', () => {
		// check if player has enough cookies
		if (Game.cookies >= building.price) {
			// remove cost from total
			Game.cookies -= building.price;

			// update info
			building.updatePrice();
			building.updateCount();

			// update html
			elemCounter.innerText = building.count;
			elemPrice.innerText = `${formatNum(building.price)} cookies `;
		}
	});
}

function updateCookies() {
	let produced = 0;
	for (const [_, building] of Object.entries(buildings)) {
		produced += building.produce();
	}
	for (const [_, upgrade] of Object.entries(upgrades)) {
		if (upgrade.isBought) { upgrade.applyEffect(); }
	}
	Game.perTick = produced;
	Game.cookies += Game.perTick;
	Game.cookies = Math.round(Game.cookies * 1000) / 1000;
	Game.clickValue = Math.round(Game.clickValue * 1000) / 1000;

	cookieDisplay.innerText = `Cookies: ${formatNum(Game.cookies)}`;
	CPS.innerText = `CPS: ${formatNum(Game.perTick * 20)}`;

}

// game loop

function loop() {
	setTimeout(function () {
		updateCookies();
		requestAnimationFrame(loop);
	}, 1000 / 20);
}

loop();
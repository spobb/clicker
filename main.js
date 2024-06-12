import {Building} from './building.js';
import {Upgrade} from './upgrade.js';
import {FloatText} from './floattext.js';

let cookies = 0;
let clickValue = 1;
let perTick = 0;

let particles = [];

const button = document.getElementById('button');
const cookie = document.querySelector('.cookie');
const cookieDisplay = document.getElementById('cookieDisplay');
const CPS = document.getElementById('CPS');

const buildingButtons = Array.from(document.querySelectorAll('.building'));
const buildingsWrapper = document.getElementById('buildings');

button.addEventListener('mousedown', e => {
	cookies += clickValue;
	cookieDisplay.innerText = `Cookies: ${formatNum(Math.floor((cookies * 1000) / 1000).toFixed(0))}`;
	new FloatText(e.clientX, e.clientY, 2000, `+${clickValue}`, particles);
	cookie.classList.add('clicked');
	addEventListener('mouseup', () => {
		cookie.classList.remove('clicked');
	});
});

document.getElementById('give').addEventListener('click', () => {
	cookies = 999999999;
});

// create buildings
let buildings = {
	clicker: new Building(15, 0.1, 'Clicker'),
	turbo: new Building(100, 1, 'Turbo Clicker'),
	balls: new Building(1100, 8, 'Mes couilles'),
	portal: new Building(12000, 47, 'Portal'),
	sweatshop: new Building(130000, 260, 'Chinese Sweatshop'),
	bank: new Building(1400000, 1400, 'Bank'),
	temple: new Building(20000000, 7800, 'Temple'),
};

let clickerup = new Upgrade(5, 1, 'cool upgrade');

document.querySelector('.upgrade').addEventListener('click', () => {
	if (cookies >= clickerup.price) {
		// remove cost from total
		cookies -= clickerup.price;

		// update info
		clickerup.buy();
		clickValue += Math.round(((perTick * 20) / 100) * clickerup.effect);
		console.log(Math.round(((perTick * 20) / 100) * clickerup.effect));
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
	elemCounter.innerText = `${formatNum(building.count)} `;

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
		if (cookies >= building.price) {
			// remove cost from total
			cookies -= building.price;

			// update info
			building.updatePrice();
			building.updateCount();

			// update html
			elemCounter.innerText = `${formatNum(building.count)} `;
			elemPrice.innerText = `${formatNum(building.price)} cookies `;
		}
	});
}

function updateCookies() {
	let produced = 0;
	for (const [_, building] of Object.entries(buildings)) {
		produced += building.produce();
	}
	perTick = produced * 10;
	cookies += perTick;
	cookies = Math.round(cookies * 1000) / 1000;
	cookieDisplay.innerText = `Cookies: ${formatNum(Math.floor((cookies * 1000) / 1000).toFixed(0))}`;
	CPS.innerText = `CPS: ${Math.floor(perTick * 1000) / 50}`;
}

function formatNum(num) {
	// return Intl.NumberFormat('en', {notation: 'compact'}).format(num);
	return num;
}

// game loop

function loop() {
	setTimeout(function () {
		updateCookies();
		requestAnimationFrame(loop);
	}, 1000 / 20);
}

loop();

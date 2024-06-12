import {Clicker, TurboClicker, Balls, Portal} from './building.js';
import {FloatText} from './floattext.js';

let cookies = 0;
let clickValue = 1;
let perTick = 0;

let buildings = [];
let particles = [];

const button = document.getElementById('button');
const cookie = document.querySelector('.cookie');
const cookieDisplay = document.getElementById('cookieDisplay');
const CPS = document.getElementById('CPS');

const buildingButtons = Array.from(document.querySelectorAll('.building button'));

button.addEventListener('mousedown', e => {
	cookies += clickValue;
	new FloatText(e.clientX, e.clientY, 2000, `+${1}`, particles);
	cookie.classList.add('clicked');
	addEventListener('mouseup', () => {
		cookie.classList.remove('clicked');
	});
});

document.getElementById('give').addEventListener('click', () => {
	cookies = 999999999;
});

// create buildings
let clicker = new Clicker(10, 0.01, 'Clicker');
let turbo = new TurboClicker(100, 0.05, 'Turbo Clicker');
let balls = new Balls(5000, 6, 'Mes couilles');
let portal = new Portal(10000000, 1000, 'Portal');

buildingButtons.forEach(button => {
	button.addEventListener('click', e => {
		switch (e.target.id) {
			case 'clicker':
				if (cookies >= clicker.price) {
					// remove cost from total
					cookies -= clicker.price;

					// push to array with all buildings
					buildings.push(clicker);

					// update info
					clicker.updatePrice();
					clicker.updateCount();

					// update html
					e.target.parentNode.childNodes[0].innerText = `${formatNum(clicker.price)} cookies `;
					e.target.parentNode.parentNode.childNodes[3].innerText = `${formatNum(clicker.count)} `;
				}
				break;
		}
		switch (e.target.id) {
			case 'turboClicker':
				if (cookies >= turbo.price) {
					// remove cost from total
					cookies -= turbo.price;

					// push to array with all buildings
					buildings.push(turbo);

					// update info
					turbo.updatePrice();
					turbo.updateCount();

					// update html
					e.target.parentNode.childNodes[0].innerText = `${formatNum(turbo.price)} cookies `;
					e.target.parentNode.parentNode.childNodes[3].innerText = `${formatNum(turbo.count)} `;
				}
				break;
		}
		switch (e.target.id) {
			case 'balls':
				e.target.parentNode.childNodes[0].innerText = `${formatNum(balls.price)} cookies `;
				e.target.parentNode.parentNode.childNodes[3].innerText = `${formatNum(balls.count)} `;

				break;
		}
		switch (e.target.id) {
			case 'portal':
				e.target.parentNode.childNodes[0].innerText = `${formatNum(portal.price)} cookies `;
				e.target.parentNode.parentNode.childNodes[3].innerText = `${formatNum(portal.count)} `;
				break;
		}
	});
});

function updateCookies() {
	let produced = 0;
	buildings.forEach(b => {
		produced += b.produce();
	});
	perTick = produced;
	cookies += perTick;
	cookies = Math.round(cookies * 100) / 100;
	cookieDisplay.innerText = `Cookies: ${formatNum(Math.floor(cookies))}`;
	CPS.innerText = `CPS: ${Math.round(perTick * 100) / 5}`;
}

function formatNum(num) {
	return Intl.NumberFormat('en', {notation: 'compact'}).format(num);
}

// game loop

function loop() {
	setTimeout(function () {
		updateCookies();
		requestAnimationFrame(loop);
	}, 1000 / 20);
}

loop();

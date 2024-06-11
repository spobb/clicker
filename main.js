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

// create buildings

buildingButtons.forEach(button => {
	button.addEventListener('click', e => {
		switch (e.target.id) {
			case 'clicker':
				let clicker = new Clicker(10, 0.01, 'Clicker', buildings);
				e.target.parentNode.childNodes[0].innerText = `${clicker.price} cookies `;
				e.target.parentNode.parentNode.childNodes[3].innerText = `${clicker.count} `;
				break;
		}
		switch (e.target.id) {
			case 'turboClicker':
				let turbo = new TurboClicker(100, 0.05, 'Turbo Clicker', buildings);
				e.target.parentNode.childNodes[0].innerText = `${turbo.price} cookies `;
				e.target.parentNode.parentNode.childNodes[3].innerText = `${turbo.count} `;

				break;
		}
		switch (e.target.id) {
			case 'balls':
				let balls = new Balls(5000, 6, 'Mes couilles', buildings);
				e.target.parentNode.childNodes[0].innerText = `${balls.price} cookies `;
				e.target.parentNode.parentNode.childNodes[3].innerText = `${balls.count} `;

				break;
		}
		switch (e.target.id) {
			case 'portal':
				let portal = new Portal(100000, 1000, 'Portal', buildings);
				e.target.parentNode.childNodes[0].innerText = `${portal.price} cookies `;
				e.target.parentNode.parentNode.childNodes[3].innerText = `${portal.count} `;

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
	cookieDisplay.innerText = `Cookies: ${Math.floor(cookies)}`;
	CPS.innerText = `CPS: ${Math.round(perTick * 100) / 5}`;
}

// game loop

function update() {
	updateCookies();
}

function loop() {
	setTimeout(function () {
		update();
		requestAnimationFrame(loop);
	}, 1000 / 20);
}

loop();

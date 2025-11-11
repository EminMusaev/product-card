// Функция вывождит температуру в заданном городе 
const city = 'Moscow';
const temperature = 9;

function showTemperature(city,temperature) {
    console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}

showTemperature(city, temperature);

// Сравнивает переданную скорость со скоростью звука
const SPEED_OF_SOUND = 1235;

function compareWithSpeedOfSound(speed) {
	if (speed > SPEED_OF_SOUND) {
		console.log('Сверхзвуковая скорость');
	} else if (speed < SPEED_OF_SOUND) {
		console.log('Дозвуковая скорость');
	} else {
		console.log('Скорость звука');
	}
}

compareWithSpeedOfSound(1300);
compareWithSpeedOfSound(1000);
compareWithSpeedOfSound(1235);


// // Функция проверяет хватает ли денег на покупку товара и выводит сообщение в консоль.
const productName = 'Футбольные Бутсы';
const productPrice = 7000;

function byuProduct(currentBudget) {
	if (currentBudget >= productPrice) {
		console.log(`${productName} приобретены. Спасибо за покупку`);
	} else {
		const lack = productPrice - currentBudget
		console.log(`Вам не хватает ${lack}$, пополните баланс`);
	}
}

byuProduct(7000);
byuProduct(5000);

// 4
function square(num) {
	console.log(num * num);
}

square(7);

// 5
const myFutureJob = 'IT';
let myHobby = 'Football';
var myCity = 'Saint-Petersburg';

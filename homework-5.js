// Функция вывождит температуру в заданном городе 
const city = 'Moscow';
const temperature = 9;

function showTemperature(city,temperature) {
    console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}

showTemperature(city, temperature);

// Функция выводит в консоль проверку скорости звука
const SPEED_SOUND = 1235;

function checkSpeedSound(speed) {
	if (speed > SPEED_SOUND) {
		console.log('Сверхзвуковая скорость');
		
	} else {
		console.log('Дозвуковая скорость');
		
	}
}

checkSpeedSound(1300);
checkSpeedSound(1000);


// // Функция проверяет хватает ли денег на покупку товара и выводит сообщение в консоль.
const productName = 'Футбольные Бутсы';
const productPrice = 7000;

function checkBudget(currentBudget) {
	if (currentBudget >= productPrice) {
		console.log(`${productName} приобретены. Спасибо за покупку`);
		
		
	} else {
		const lack = productPrice - currentBudget
		console.log(`Вам не хватает ${lack}$, пополните баланс`);
		
	}
}

checkBudget(7000);
checkBudget(5000);

// 4
function calc(number) {
	console.log(7 * 7);
	
}

calc();

// 5

const myFuture = 'IT';
let myHobby = 'Football';
var myCity = 'Saint-Petersburg';

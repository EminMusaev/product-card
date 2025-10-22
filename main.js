// Покраска Всех Карточек

const productCards = document.querySelectorAll('.product-card');
const cardColorAllButton = document.querySelector('#change-all-card');
const greenColorHash = '#489e9bad';
const beigeColorHash = '#631f0a2e';

cardColorAllButton.addEventListener('click' , () => {
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
});


// Покраска Первой карточки
const productFirstCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () =>{
    productFirstCard.style.backgroundColor = beigeColorHash;
});


// Открыть Google

const openGooglePage = document.querySelector('#open-google');

openGooglePage.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');
    
    if (answer === true) {
        window.open('https://google.com');
    } else {
        return;
    }
};


// Вызов Консоль Лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click',() => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message){
    alert(message)
    console.log(message);
};

// При наведений на главный заголовок он вызывается в Консоль лог  			

const mainTitle = document.querySelector('#main-title');

mainTitle.addEventListener('mouseenter', () => {
    console.log(mainTitle.textContent); 
});


// Изменить цвет последней кнопки 

const switchColorButton =  document.querySelector('#switch-color-btn');

switchColorButton.addEventListener('click', () => {
    handleButtonColorSwitch();
});

function handleButtonColorSwitch(){
    switchColorButton.classList.toggle('bg-orange');
};
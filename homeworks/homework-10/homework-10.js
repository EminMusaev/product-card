import { Modal } from './Modal.js';
import { Form } from './Form.js';
import { ForwardPlayer } from './ForwardPlayer.js';
import { Midfielder } from './Midfielder.js';
import { Goalkeeper } from './Goalkeeper.js';
import { Defender } from './Defender.js';

// №3
const ronaldo = new ForwardPlayer("Криштиану Роналду", 40, "Аль-Наср", '956+');
ronaldo.showInfo();
ronaldo.showGoals();

const neuer = new Goalkeeper("Мануэль Нойер", 39, "Бавария Мюнхен", '300+');
neuer.showInfo();
neuer.showDryMatches();

const ramos = new Defender("Серхио Рамос", 39, "Монтеррей", '1200+');
ramos.showInfo();
ramos.showTackles();

const modric = new Midfielder("Лука Модрич", 40, "Милан", '180+');
modric.showInfo();
modric.showAssists();

// №04 Переписать Модальное окно
const modal = new Modal('modal');
const loginBtn = document.getElementById("login-btn");
const authenticationOpenModalBtn = document.getElementById("authentication-open-modal-btn");

authenticationOpenModalBtn.addEventListener("click", () =>{
    modal.openModal();
});

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!registeredUser) {
        alert("Пользователь не зарегистрирован!");
        return;
    }
    console.log("Пользователь авторизован.", registeredUser);
    alert("Вы успешно авторизовались!");
    modal.closeModal();
});

// №5 Переписать Форму 

let registeredUser = undefined;
const registrationForm = new Form ('registration-form');
const password = document.getElementById('user-password');
const repeatedPassword = document.getElementById('user-repeated-password');

registrationForm.form.addEventListener('submit', event => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
        alert('Форма заполнена неверно');
        return;
    }
    if (password.value !== repeatedPassword.value) {
        alert(' Пароли не совпадают ❌');
        return;
    }

    const data = registrationForm.getAllValues();
    data.createdOn = new Date();
    registeredUser = data;

    console.log('Зарегистрирован пользователь:', registeredUser);

    alert(' Вы успешно зарегистрировались! ✅ ');
    registrationForm.resetForm();
});
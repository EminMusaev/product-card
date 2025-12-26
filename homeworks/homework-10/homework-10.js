import { Modal } from './modal.js';
import { Form } from './form.js';

// №03 Структура классов с наследованием
class FootballPlayer {
    constructor(name, age, club, position) {
        this.name = name;
        this.age = age;
        this.club = club;
        this.position = position;
    }

    showInfo() {
        console.log(`${this.name}, ${this.age}, ${this.club}, ${this.position}`);
    }

    setClub(newClub) {
        this.club = newClub;
    }

    getPosition() {
        return this.position;
    }
}
class FootballPlayerGoals extends FootballPlayer {
    constructor(name, age, club, position, goals) {
        super(name, age, club, position);
        this.goals = goals;
    }

    showGoals() {
        console.log(`${this.name} has scored ${this.goals} goals in his career`);
    }

    setGoals(value) {
        this.goals = value;
    }

    getGoals() {
        return this.goals;
    }
}
const ronaldo = new FootballPlayerGoals("Cristiano Ronaldo", 40, "Al-Nassr", "Forward", 950);

ronaldo.showInfo();
ronaldo.showGoals();

const messi = new FootballPlayerGoals("Lionel Messi", 35, "Inter Miami", "Forward", 900);

messi.showInfo();
messi.showGoals();

const mbappe = new FootballPlayerGoals("Kylian Mbappé", 24, "Real Madrid", "Forward", 400);

mbappe.showInfo();
mbappe.showGoals();

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
// // task №1 
// const getDataForm = (event) => {
//     const form = event.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     return data;
// }

// const emailForm = document.getElementById("email-form");
// if (emailForm) {
//     emailForm.addEventListener("submit", event => {
//         event.preventDefault();
//         const form = event.target;
//         if (!form.checkValidity()) {
//             console.log("Некорректный email");
//             return;
//         }
//         console.log(getDataForm(event));
//     });
// }

// // task №2
// let registeredUser = undefined;
// const registrationForm = document.getElementById("registration-form");
// const password = document.getElementById("user-password");
// const repeatedPassword = document.getElementById("user-repeated-password");

// const getResultValuesComparison = (firstValue, secondValue) => {
//     return firstValue === secondValue;
// }

// const validatePasswords = () => {
//     if (password && repeatedPassword && password.value && repeatedPassword.value) {
//         const arePasswordsMatch = getResultValuesComparison(password.value, repeatedPassword.value);
//         if (!arePasswordsMatch) {
//             alert('Пароли не совпадают, попробуйте еще раз!');
//         }
//     }
// }
// if (password) {
//     password.addEventListener('change', validatePasswords);
// }  
// if (repeatedPassword) {
//     repeatedPassword.addEventListener('change', validatePasswords);
// } 
// if (registrationForm) {
//     registrationForm.addEventListener("submit", event => {
//         event.preventDefault();
//         if (!getResultValuesComparison(password.value, repeatedPassword.value)) {
//             alert("Пароли не совпадают, попробуйте еще раз!");
//             return;
//         }
//         const newData = getDataForm(event);
//         newData.createdOn = new Date();
//         console.log("Регистрация:", newData);
//         registeredUser = newData;
//         alert("Вы успешно зарегистрировались!🎉");
//         registrationForm.reset();
//     });
// }

// // task №3,4
// let currentUser = undefined;
// const modalWindow = document.querySelector(".modal");
// const closeBtn = document.getElementById("close-btn");
// const authenticationOpenModalBtn = document.getElementById("authentication-open-modal-btn");
// const loginBtn = document.getElementById("login-btn");

// const setupAuthModal = () => {
//     if (authenticationOpenModalBtn && modalWindow) {
//         authenticationOpenModalBtn.addEventListener("click", () => {
//             modalWindow.classList.remove('close-modal');
//             modalWindow.classList.add('open-modal');
//         });
//     }
//     if (closeBtn && modalWindow) {
//         closeBtn.addEventListener("click", event => {
//             event.preventDefault();
//             modalWindow.classList.remove('open-modal');
//             modalWindow.classList.add('close-modal');
//         });
//     }
//     if (loginBtn && modalWindow) {
//         loginBtn.addEventListener("click", event => {
//             event.preventDefault();
//             if (!registeredUser) {
//                 alert("Пользователь не зарегистрирован!");
//                 return;
//             }
//             const userLoginInput = document.querySelector('.user-login-2');
//             const userPasswordInput = document.querySelector('.user-password-2');
//             if (!userLoginInput || !userPasswordInput) {
//                 alert("Ошибка формы авторизации!");
//                 return;
//             }
//             const isPasswordsEqual = getResultValuesComparison(registeredUser.userPassword, userPasswordInput.value);
//             const isLoginsEqual = getResultValuesComparison(registeredUser.userLogin, userLoginInput.value);
//             if (isPasswordsEqual && isLoginsEqual) {
//                 alert("Вы успешно авторизовались!🎊");
//                 modalWindow.classList.remove('open-modal');
//                 modalWindow.classList.add('close-modal');
//                 currentUser = registeredUser;
//                 currentUser.lastLogin = new Date();
//                 console.log(`Время последней авторизации: ${currentUser.lastLogin}`);
//             } else {
//                 alert("Логин или пароль не верны, попробуйте еще раз!");
//             }
//         });
//     }
// }

// setupAuthModal();

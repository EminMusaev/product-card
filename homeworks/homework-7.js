import { socialMediaComments } from "./comments.js";

// ----------------LEVEL 1---------------------

// 1) Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getFilteredNumbers = numbers.filter(num => num >= 5);
console.log(getFilteredNumbers);

/* 2) Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), 
проверить, есть ли в массиве какая-то определенная сущность.*/

const furniture = ["Комод", "Стол", "Шкаф", "Кровать", "Дверь"];
console.log(furniture.includes("Шкаф"));

/* 3) Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . 
Два вышеуказанных массива с помощью этой функции перевернуть. */
const getReverseArray = (arr) => {
    return [...arr].reverse()
}

console.log(getReverseArray(numbers));
console.log(getReverseArray(furniture));


// ----------------LEVEL 2---------------------

console.log(socialMediaComments);

// 5) Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const filteredEmail = socialMediaComments.filter(comment => comment.email.includes('.com'));
console.log(filteredEmail);

/* 6) Перебрать массив таким образом,
что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1*/
const commentsWithUpdatedPostId = socialMediaComments.map((comment) => {
    return ({...comment, postId: comment.id <= 5 ? 2 : 1});
});

console.log(commentsWithUpdatedPostId);

// 7) Перебрать массив, что бы объекты состояли только из айди и имени
const shortComments = socialMediaComments.map(({ id, name }) => ({ id, name }));
console.log(shortComments);

/* 8)Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/
const validatedComments = socialMediaComments.map(item => ({...item, isTooLong: item.body.length > 180}));
console.log(validatedComments);

// --------------------LEVEL 3----------------------

// 9) Сбор email через reduce
const allEmailsWithReduce = socialMediaComments.reduce((accumulator, currentComment) => {accumulator.push(currentComment.email);
    return accumulator;
}, []);

// Сбор email через map
const allEmailsWithMap = socialMediaComments.map(entry => entry.email);

console.log(allEmailsWithReduce);
console.log(allEmailsWithMap);

// 10) Преобразование массива email в строку
console.log(allEmailsWithReduce.toString());
console.log(allEmailsWithMap.join(", "));

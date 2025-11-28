import { productCards } from "./product-cards.js";
console.log(productCards);

// №3  Cоздать и реализовать шаблон для продуктовых карточек.

// №4 методом .reduce, получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой
const productCardNames = productCards.reduce((result, card) => {
    result.push(card.name);
    return result;
}, []);

console.log(productCardNames.join("; "));

// №5 методом .reduce(), получить массив объектов, ключ > название продукта, значение > его описание 
const productCardsDescByTitle = productCards.reduce((acc, product) => {
    acc.push({ [product.name]: product.description });
    return acc;
}, []);

console.log(productCardsDescByTitle);

// №6
const addCardsUsersRequest = () => {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
    const count = Number(userInput);

    if (count >= 1 && count <= 5) {
        const productCardsTemplate = document.getElementById("product-cards-template");
        const containerProductCards = document.getElementById("products-list");
        
        const diplayProductCards = productCards.slice(0, count);
        diplayProductCards.forEach((card) => {
            const cardClone = productCardsTemplate.content.cloneNode(true);
            cardClone.querySelector(".product-card__img").src = `img/${card.imgName}.png`;
            cardClone.querySelector(".product-card__img").alt = card.name;
            cardClone.querySelector(".product-card__skin").textContent = card.skinType;
            cardClone.querySelector(".product-card__name").textContent = card.name;
            cardClone.querySelector(".product-card__desc").textContent = card.description;  
            
            const productCompound = cardClone.querySelector(".compound__list");
            productCompound.innerHTML = "";
            card.compound.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                productCompound.appendChild(li);
            });
            cardClone.querySelector(".price__tag").innerHTML = `${card.price.toLocaleString()} &#x20BD`;
            containerProductCards.appendChild(cardClone);
        });
    }
};

addCardsUsersRequest();

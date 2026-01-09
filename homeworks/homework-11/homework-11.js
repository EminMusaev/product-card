import { Cafe } from "./Cafe.js";
import { Lemonade } from "./Lemonade.js";
import { Tea } from "./Tea.js";
import { Coffee } from "./Coffee.js";

const cafe = new Cafe(
    "Кофейная One-Love",
    " Невский Проспект, д.12, г. Санкт-Петербург"
);

const cocaCola = new Lemonade(
    "Кока-Кола",
    18,
    "5$",
    "очищенная вода",
    "сахар",
    "обычная кислота",
    "сладкий ароматизатор"
);

const greenTea = new Tea(
    "Зелёный чай",
    5.7,
    "4$",
    "горячая вода",
    "2 ложки",
    80
);

const coffee = new Coffee(
    "Маккачино",
    18,
    "10$",
    "средний помол",
    "густое молоко",
    "сахар"
);

cafe.showCafeDetails();
cafe.orderDrink(cocaCola);
cafe.orderDrink(greenTea);
cafe.orderDrink(coffee);
console.log(greenTea.getTemperature());


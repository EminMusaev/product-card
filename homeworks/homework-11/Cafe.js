export class Cafe {
  
  constructor(cafeName, location) {
    this.cafeName = cafeName;
    this.location = location;
  }

  showCafeDetails() {
    console.log(
        `Информация о кафе: "${ this.cafeName }", адрес: "${ this.location }"`
    );
  }

  orderDrink(drink) {
    console.log(`Заказан напиток: "${ drink.title }"`);
    drink.serve('Приготовление напитка по заказу клиента');
  }
}


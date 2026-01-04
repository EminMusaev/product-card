export class Drink {
  #temp;

  constructor(title, volume, price) {
    this.title = title;
    this.volume = volume;
    this.price = price;
    this.#temp = null;
  }

  getDescription() {
    return `Напиток: ${this.title}, объем: ${this.volume}, цена: ${this.price}, ${this.getTemp()}`;
  }

  getTemp() {
    return this.#temp;
  }

  setTemp(value) {
    this.#temp = `Температура: ${value}`;
  }

  #makeDrink(note) {
    console.log('Начинается приготовление напитка...');
    console.log(note);
    this.setTemp(65);
  }

  serve(note) {
    this.#makeDrink(note);
    console.log(`Напиток "${this.title}" подан`);
  }
}

export class Drink {
  
  #temperature;

  constructor(title, volume, price) {
    this.title = title;
    this.volume = volume;
    this.price = price;
    this.#temperature = null;
  }

  getDescription() {
    return `Напиток: ${ this.title }, объем: ${ this.volume }, цена: ${ this.price }, ${ this.getTemperature() }`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    this.#temperature = `Температура: ${ value }`;
  }

  #makeDrink(note) {
    console.log('Начинается приготовление напитка...');
    console.log(note);
    this.setTemperature(65);
  }

  serve(note) {
    this.#makeDrink(note);
    console.log(`Напиток "${ this.title }" подан`);
  }
}

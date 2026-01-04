import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(title, volume, price, waterType, spoonCount, brewTemp) {
    super(title, volume, price);
    this.waterType = waterType;
    this.spoonCount = spoonCount;
    this.brewTemp = brewTemp;
  }

  getTeaPreparationSteps() {
    return `Ополаскивание заварочной емкости (${this.waterType}) для прогрева, добавление заварки 
    (${this.spoonCount}), заливка водой с температурой ${this.brewTemp}.`;
  }
}

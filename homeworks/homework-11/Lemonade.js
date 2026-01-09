import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  
  constructor(title, volume, price, syrupType, sugarAmount, acidLevel, additives) {
    super(title, volume, price);
    this.syrupType = syrupType;
    this.sugarAmount = sugarAmount;
    this.acidLevel = acidLevel;
    this.additives = additives;
  }

  getLemonadePreparationSteps() {
    return `Добавляется сироп (${ this.syrupType }), смешивается с сахаром (${ this.sugarAmount }), затем добавляется кислота (${ this.acidLevel }), 
    в конце используются добавки (${ this.additives }), после чего напиток охлаждается 5 минут.`;
  }
}

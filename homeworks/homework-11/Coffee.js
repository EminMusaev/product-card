import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(title, volume, price, beanType, milkType, sugarLevel) {
    super(title, volume, price);
    this.beanType = beanType;
    this.milkType = milkType;
    this.sugarLevel = sugarLevel;
  }

  getCoffeePreparationSteps() {
    return `Помол зерен (${this.beanType}), соблюдение пропорций кофе и воды, нагрев воды до 94–96°, настаивание 3–4 минуты, 
    добавление молока (${this.milkType}) и сахара (${this.sugarLevel}).`;
  }
}

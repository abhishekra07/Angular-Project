import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato',5),
    new Ingredient('Apples',10)
  ]

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}

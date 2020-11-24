import { EventEmitter } from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from "../shared/ingredient.model";
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheese Burger',
      'Cheese Burger',
      'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png',
      [
        new Ingredient('Cheese',2),
        new Ingredient('Buns',2),
        new Ingredient('Onion',2),
        new Ingredient('Tomato',1),
        new Ingredient('Garlic',1)
      ]
    ),
    new Recipe(
      'Pizza',
      'Pizza',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
    [
      new Ingredient('Cheese',2),
      new Ingredient('Flour',1),
      new Ingredient('Tomato',1),
      new Ingredient('Onion',1),
      new Ingredient('Mozzaerella',1)
    ])
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}

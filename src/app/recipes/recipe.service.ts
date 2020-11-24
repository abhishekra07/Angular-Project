import { EventEmitter } from "@angular/core";
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test','test description','https://i0.wp.com/www.growblooms.com/wp-content/uploads/2018/01/recipe.png?w=357&ssl=1'),
    new Recipe('A test 2','test description','https://i0.wp.com/www.growblooms.com/wp-content/uploads/2018/01/recipe.png?w=357&ssl=1')
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}

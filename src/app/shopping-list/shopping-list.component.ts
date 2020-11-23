import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomato',5),
    new Ingredient('Apples',10)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}

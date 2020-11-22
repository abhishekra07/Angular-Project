import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test','test description','https://i0.wp.com/www.growblooms.com/wp-content/uploads/2018/01/recipe.png?w=357&ssl=1'),
    new Recipe('A test','test description','https://i0.wp.com/www.growblooms.com/wp-content/uploads/2018/01/recipe.png?w=357&ssl=1')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Array :- ',this.recipes);
  }



}

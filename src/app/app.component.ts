import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-project';
  isRecipeSelected:boolean = true;

  onNavidationChange(recipeSelected){
    this.isRecipeSelected = recipeSelected;
  }
}

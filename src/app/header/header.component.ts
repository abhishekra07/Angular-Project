import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('navigationChanged') navigationChanged = new EventEmitter<boolean>();
  recipeSelected = true;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(){
    this.recipeSelected = true;
    this.navigationChanged.emit(this.recipeSelected);
  }
  onShoppingSelect(){
    this.recipeSelected = false;
    this.navigationChanged.emit(this.recipeSelected);
  }

}

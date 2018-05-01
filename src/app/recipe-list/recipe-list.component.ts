import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  hotColor(recipe){
    if(recipe.hot === 1){
      return 'bg-success';
    }else if(recipe.hot===2){
      return 'bg-info';
    }else if(recipe.hot === 3){
      return 'bg-warning';
    }else if(recipe.hot === 4){
      return 'bg-danger';
    }
  }

  editButtonClicked(recipeToEdit: Recipe){
    this.clickSender.emit(recipeToEdit);
  }

}

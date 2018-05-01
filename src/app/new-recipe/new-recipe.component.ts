import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() sendRecipe = new EventEmitter();

  submitForm(title: string,  directions: string, ingredients: string, hot: string ){
    // let ingredientsArray = ingredients.split(" ");
    let newRecipe = new Recipe(title, directions, ingredients, hot);
    this.sendRecipe.emit(newRecipe);
  }

}

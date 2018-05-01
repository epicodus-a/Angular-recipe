import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedRecipe: Recipe = null;


  masterRecipes : Recipe[] = [
    new Recipe('Spicy Korean Ribs', 'racks baby back pork ribs 2 tablespoons soy sauce 1 small onion', 'These spicy Korean ribs are a family favorite recipe, picked it from the local paper. Best if left in the fridge overnight, the flavors are a lot stronger. The more sauce, the better! Serve with Asian sesame coleslaw.', '1'),
    new Recipe('Spicy Korean Ribs25', 'racks baby back pork ribs 3 tablespoons soy sauce 2 small onion', 'These spicy Korean ribs are a family favorite recipe, picked it from the local paper. Best if left in the fridge overnight, the flavors are a lot stronger. The more sauce, the better! Serve with Asian sesame coleslaw.', '2'),
    new Recipe('Spicy Korean Ribs3 6', 'racks baby back pork ribs 4 tablespoons soy sauce 3 small onion', 'These spicy Korean ribs are a family favorite recipe, picked it from the local paper. Best if left in the fridge overnight, the flavors are a lot stronger. The more sauce, the better! Serve with Asian sesame coleslaw.', '3'),
    new Recipe('Spicy Korean Ribs4 7', 'racks baby back pork ribs 5 tablespoons soy sauce  4 small onion', 'These spicy Korean ribs are a family favorite recipe, picked it from the local paper. Best if left in the fridge overnight, the flavors are a lot stronger. The more sauce, the better! Serve with Asian sesame coleslaw.', '4'),
  ];


  addRecipe(newRecipe: Recipe){
    this.masterRecipes.push(newRecipe);
  }

  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing(){
    this.selectedRecipe = null;
  }

}

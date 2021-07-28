import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe-list/recipe-item/recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeToShowInDetailedView: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  viewRecipeDetails(recipe: Recipe){
    console.log("TEST");
    this.recipeToShowInDetailedView = recipe;
  }

}

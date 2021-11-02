import {EventEmitter, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe-item/recipe";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void {
  }

  onShowRecipeDetails(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}


import {EventEmitter, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe-item/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor() {
    this.recipes = this.getRecipies();
  }

  ngOnInit(): void {
  }

  getRecipies(){
    let recipies = [];
    recipies.push(
      new Recipe("applepie", "yummy", "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg"),
      new Recipe("bread", "loaf", "https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg")
    );
    return recipies;
  }

  onShowDetails(positionInRecipesArray: number){
    let recipeToShow = this.recipes[positionInRecipesArray];
    this.recipeClicked.emit(recipeToShow);
  }

}


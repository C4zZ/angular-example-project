import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/recipe-list/recipe-item/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = []

  constructor() {
    this.recipes.push(
      new Recipe("applepie", "yummy", "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg"),
      new Recipe("bread", "loaf", "https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg")
    )
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}

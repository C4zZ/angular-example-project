import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  recipies: Recipe[];

  constructor() {
    this.recipies = this.getRecipies()
  }

  ngOnInit(): void {
  }

  getRecipies(){
    let recipies = [];
    recipies.push(
      new Recipe("applepie", "yummy", "applepieURL"),
      new Recipe("bread", "loaf", "breadURL")
    );
    return recipies;
  }

}


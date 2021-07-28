import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/Ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [];
    this.ingredients.push(
      new Ingredient("Apples", 2),
      new Ingredient("Tomatoes", 1)
    )
  }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}

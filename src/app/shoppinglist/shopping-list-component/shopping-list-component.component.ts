import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../Ingredient";

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [];
    this.ingredients.push(
      new Ingredient("apple", "yummy", 2),
      new Ingredient("bread", "just a loaf", 1)
    )
  }

  ngOnInit(): void {
  }

}

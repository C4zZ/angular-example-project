import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe";

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

  getRecipies(): Recipe[] {
    return [
      new Recipe("making bread", "bread!", [
        "the",
        "steps",
        "for",
        "making",
        "bread"
      ]),
      new Recipe("making apple pie", "even more yummy!", [
        "the",
        "steps",
        "for",
        "making",
        "apple",
        "pie"
      ])
    ]
  }
}


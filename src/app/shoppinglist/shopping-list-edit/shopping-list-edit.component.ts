import { EventEmitter } from '@angular/core';
import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('IngredientName')
  ingredientNameRef: ElementRef;
  @ViewChild('IngredientAmount')
  ingredientAmountRef: ElementRef;
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    let ingredientToAdd = new Ingredient(
      this.ingredientNameRef.nativeElement.value,
      this.ingredientAmountRef.nativeElement.value
    );
    this.ingredientAdded.emit(ingredientToAdd);
  }

}

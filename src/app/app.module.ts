import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shoppinglist/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipebook/recipe-book/recipe-book.component';
import { ShoppingListEditComponent } from './shoppinglist/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponentComponent } from './recipebook/recipe-list/recipe-list-component.component';
import { RecipeItemComponent } from './recipebook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    RecipeListComponentComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ShoppingListComponentComponent } from './shopping-list-component/shopping-list-component.component';
import { RecipeBookComponentComponent } from './recipe-book-component/recipe-book-component.component';
import { ShoppingListEditComponentComponent } from './shopping-list-edit-component/shopping-list-edit-component.component';
import { RecipeListComponentComponent } from './recipe-list-component/recipe-list-component.component';
import { RecipeItemComponentComponent } from './recipe-item-component/recipe-item-component.component';
import { RecipeDetailComponentComponent } from './recipe-detail-component/recipe-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ShoppingListComponentComponent,
    RecipeBookComponentComponent,
    ShoppingListEditComponentComponent,
    RecipeListComponentComponent,
    RecipeItemComponentComponent,
    RecipeDetailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

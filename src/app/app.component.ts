import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-project';
  isRecipiesCollapsed = false;
  isShoppingListCollapsed = true

  toggleView(viewName: string) {
    if(viewName === 'recipies') {
      this.toggleRecipiesView();
    } else if (viewName === 'shoppingList') {
      this.toggleShoppingListView();
    }
  }

  private toggleRecipiesView(){
    if(this.isRecipiesCollapsed){
      this.isRecipiesCollapsed = false;
      this.isShoppingListCollapsed = true;
    }
  }

  private toggleShoppingListView(){
    if(this.isShoppingListCollapsed){
      this.isShoppingListCollapsed = false;
      this.isRecipiesCollapsed = true;
    }
  }

}

import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-project';
  showShoppingList = true;
  showrecipes = false;

  toggleView(viewName: string){
    if (viewName == "recipes"){
      this.showrecipes = true;
      this.showShoppingList = false;
    } else if (viewName == "shoppingList"){
      this.showShoppingList = true;
      this.showrecipes = false;
    }
  }

}

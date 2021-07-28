import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-project';
  showShoppingList = true;
  showRecepies = false;

  toggleView(viewName: string){
    if (viewName == "recepies"){
      this.showRecepies = true;
      this.showShoppingList = false;
    } else if (viewName == "shoppingList"){
      this.showShoppingList = true;
      this.showRecepies = false;
    }
  }

}

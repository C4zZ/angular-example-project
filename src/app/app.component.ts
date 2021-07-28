import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-project';
  @ViewChild('shoppingListView')
  shoppingListView: ElementRef;
  @ViewChild('recepiesView', {read: ElementRef})
  recepiesViewElement: ElementRef;

  toggleView(viewName: string) {
    if(viewName === 'recipies') {
      console.log('RECIPIES');
    } else if (viewName === 'shoppingList') {
      console.log('SHOPPINGLIST');
    }
  }

}

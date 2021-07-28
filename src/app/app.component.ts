import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-project';

  toggleView(viewName: string){
    console.log(viewName + " angesprochen!");
  }

}

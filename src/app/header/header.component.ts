import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleView = new EventEmitter<string>();
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onTogglerecipes(){
    this.toggleView.emit("recipes");
  }

  onToggleShoppingList(){
    this.toggleView.emit("shoppingList");
  }

}

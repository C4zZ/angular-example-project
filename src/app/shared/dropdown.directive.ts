import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostListener('click')
  public test(){
    alert('clicked!');
  }

}
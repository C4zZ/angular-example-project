import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open')
  private isDropdownOpen: boolean;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ){}

  ngOnInit() {
    this.isDropdownOpen = false;
  }

  @HostListener('click')
  public toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}

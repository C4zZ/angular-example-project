import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
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
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      this.isDropdownOpen = true;
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
  }

}

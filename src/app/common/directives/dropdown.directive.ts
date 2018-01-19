import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.show') isShow = false;
  childrenDropDown: any;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2)  {
  }

  ngOnInit() {
    this.childrenDropDown = this.elementRef.nativeElement.children[1];
    this.removeClass(this.childrenDropDown, 'show');
  }

  @HostListener('click') toogleOpen() {
   // this.isShow = !this.isShow;  toggle class for directive elemebt
    if (this.childrenDropDown.classList.contains('show')) {
      this.removeClass(this.childrenDropDown, 'show')
    } else {
      this.addClass(this.childrenDropDown, 'show');
    }
 }

  addClass(element, className) {
    this.renderer.addClass(element, className);
  }

  removeClass(element, className) {
    this.renderer.removeClass(element, className);
  }

}

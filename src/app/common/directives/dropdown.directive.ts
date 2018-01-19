import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Renderer2,
  AfterViewInit,
  ViewChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective implements OnInit, AfterViewInit, AfterContentInit {

  @HostBinding('class.show') isShow = false;
  @ViewChildren(DropdownDirective) children: any;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2)  {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log(this.children)
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log(this.children)
  }
  @HostListener('click') toogleOpen() {
    this.isShow = !this.isShow;
 }

  // Renderer2 method
  // @HostListener('click') toogleOpen() {
  //   if (this.elementRef.nativeElement.classList.contains('show')) {
  //     this.removeClass('show')
  //   }else {
  //     this.addClass('show')
  //   }
  // }

  // addClass(className){
  //   this.renderer.addClass(this.elementRef.nativeElement, className);
  // }

  // removeClass(className){
  //   this.renderer.removeClass(this.elementRef.nativeElement, className);
  // }


}

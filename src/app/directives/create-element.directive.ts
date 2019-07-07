
import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[createElement]'
})
export class CreateElementDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.value);
    console.log("createElement");
    // this.renderer.addClass(this.el.nativeElement, 'wild');
  }
}

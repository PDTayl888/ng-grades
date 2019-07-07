import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
  selector: '[text-transformer]'
})
export class TextTransformerDirective implements OnInit {

    constructor(
    private elem: ElementRef) {
      // need access to inner text before setting new text
      // elem.nativeElement.outerHTML, innerHTML, outerText, innerText are all empty at this point

    }

  ngOnInit() {
    console.log(this.elem.nativeElement.innerText);
    this.elem.nativeElement.innerText += ' !!My new Text!!';
    console.log(this.elem.nativeElement.innerText) 
  }

}
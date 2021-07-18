import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCursorPointer]'
})
export class CursorPointerDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.cursor='pointer';
    // this.elem.nativeElement.style.transform='scale(1.2)';

  }
}



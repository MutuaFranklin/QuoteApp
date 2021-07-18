import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotes]'
})
export class HighestUpvotesDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.this.quotes.map((quote: { likes: any; }) => quote.likes);

  }
}



// max = Math.max(...this.quotes.map(quote => quote.likes));
//      maxValues = this.quotes.filter(quote => quote.likes == this.max);

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuotesBlueprint } from 'src/models/quotes-blueprint';

@Component({
  selector: 'app-quote-more-details',
  templateUrl: './quote-more-details.component.html',
  styleUrls: ['./quote-more-details.component.css']
})
export class QuoteMoreDetailsComponent implements OnInit {
  @Input() moreQuoteDetails!: QuotesBlueprint;
  @Output() deleteQuote = new EventEmitter <boolean>();



  quoteDelete(remove:boolean){
    this.deleteQuote.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

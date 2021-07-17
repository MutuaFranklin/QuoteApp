import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuotesBlueprint } from 'src/models/quotes-blueprint';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new QuotesBlueprint(0, "","", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<QuotesBlueprint>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuotesBlueprint } from 'src/models/quotes-blueprint';

@Component({
  selector: 'app-quotes-main-section',
  templateUrl: './quotes-main-section.component.html',
  styleUrls: ['./quotes-main-section.component.css']
})
export class QuotesMainSectionComponent implements OnInit {

  quotes: QuotesBlueprint[] = [
    new QuotesBlueprint(1, 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison', 'Franklin Mutua', new Date(2021,6,15), 23, 4 ),
    new QuotesBlueprint(2, 'The purpose of our lives is to be happy','Dalai Lama', 'Flynn Jones', new Date(2021,5,12), 10, 6),
    new QuotesBlueprint(3, 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.','Steve Jobs', 'Nelly Waridi', new Date(2021,5,3), 34, 3),

    ];

    // let quoteIndex: number = this.quotes.findIndex(
    //   (quote) => quote.upVote === maxValue
    // );
    highVotes (){
      let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote) {
        return quote.likes;
        })
      );
      let quoteIndex: number = this.quotes.findIndex(
      (quote) => quote.likes === maxValue
        );
      }


     max = Math.max(...this.quotes.map(quote => quote.likes));
     maxValues = this.quotes.filter(quote => quote.likes == this.max);


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }


   //Function to hide/show more quote details
   toggleDetails(index:number){
    this.quotes[index].showMoreQuoteDetails = !this.quotes[index].showMoreQuoteDetails;
  }


  removeQuote(deleteQuote:boolean, index:number){
    if(deleteQuote){
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if (toDelete){
      this.quotes.splice(index, 1)
    }
    }

  }

//upVote and downVote value and counter

  upVote(index:number){
      this.quotes[index].likes ++
      this.highVotes();



  }

  downVote(index:number){
    this.quotes[index].dislikes ++

  }


  constructor() { }

  ngOnInit(): void {


  }

}

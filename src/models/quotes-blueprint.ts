export class QuotesBlueprint {

  showMoreQuoteDetails:boolean;
  constructor(public id:number,  public publishedQuote:string, public author:string, public publisher: string, public DatePublished:Date, public likes:number, public dislikes:number){
    this.showMoreQuoteDetails = false;

  }

}

export class QuotesBlueprint {
  sort(arg0: (x: any, y: any) => number) {
    throw new Error('Method not implemented.');
  }
  showMoreQuoteDetails:boolean;
  constructor(public id:number,  public publishedQuote:string, public author:string, public publisher: string, public DatePublished:Date, public likes:number, public dislikes:number){
    this.showMoreQuoteDetails = false;

  }

}

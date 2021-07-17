import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    const secondsInHour = 3600; //60 seconds * 60 minutes in an hour

    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds

    var dateCounter = dateDifferenceSeconds/secondsInDay;
    var hoursCounter = dateDifferenceSeconds/secondsInHour;
    var dayResult = dateCounter + " days ago";
    var hourResult = hoursCounter + " hours ago"

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dayResult;
    }else{
      return (dayResult);
    }

  }
}

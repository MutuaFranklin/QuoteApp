import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    let today:Date = new Date();
    let todayWithSeconds:any = new Date(
      // today.getFullYear(),
      // today.getMonth(),
      // today.getDate(),
      today.getTime()

    )



    var secondsDifference = Math.abs(todayWithSeconds - value);

    const secondsInYear = 31104000; //60 seconds * 60 minutes in an hour * 24 hours in a day * 30 *12
    const secondsInMonth = 2592000; //60 seconds * 60 minutes in an hour * 24 hours in a day *30
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    const secondsInHour = 3600; //60 seconds * 60 minutes in an hour
    const secondsInMinute = 60;


    var secondsDifferenceSeconds = secondsDifference*0.001;


    var yearCounter = Math.trunc(secondsDifferenceSeconds/secondsInYear);
    var monthCounter = Math.trunc(secondsDifferenceSeconds/secondsInMonth);
    var dateCounter = Math.trunc(secondsDifferenceSeconds/secondsInDay);
    var hoursCounter = Math.trunc(secondsDifferenceSeconds/secondsInHour);
    var minutesCounter = Math.trunc(secondsDifferenceSeconds/secondsInMinute);
    var secondsCounter = Math.trunc(secondsDifferenceSeconds);

    var yearResult = yearCounter;
    var monthResult = monthCounter
    var dayResult = dateCounter + " days ago";
    var hourResult = hoursCounter + " hours ago";
    var minResult = minutesCounter + " minutes ago";
    var secResult = secondsCounter + " seconds ago";



    if (yearCounter >= 1){
      if(yearResult <2){
        return  yearCounter + " year ago";
      }
      else{
        return yearCounter  + " years ago";
      }    }

    else if (monthCounter >= 1){
      if(monthResult <2){
        return monthCounter  + " month ago";
      }
      else{
        return monthCounter  + " months ago";
      }
    }

    else if (dateCounter >= 1){
      return dayResult;
    }
    else if(dateCounter <= 1 && hoursCounter>=1){
      return hourResult;
    }
    else if(hoursCounter <=24 && minutesCounter >=1){
      return minResult;
    }
    else{
      return secResult;
    }


  }
}

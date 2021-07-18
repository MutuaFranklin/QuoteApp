import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let todayWithHours:any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours());
    let todayWithMinutes:any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());
    let todayWithSeconds:any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());


    var dateDifference = Math.abs(todayWithNoTime - value); //returns value in miliseconds
    var hoursDifference = Math.abs(todayWithHours - value);
    var minutesDifference = Math.abs(todayWithMinutes - value);
    var secondsDifference = Math.abs(todayWithSeconds - value);


    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    const secondsInHour = 3600; //60 seconds * 60 minutes in an hour
    const secondsInMinute = 60;


    var dateDifferenceSeconds = dateDifference*0.001; //converts milliseconds to seconds
    var hoursDifferenceSeconds = hoursDifference*0.001;
    var minutesDifferenceSeconds = minutesDifference*0.001;
    var secondsDifferenceSeconds = secondsDifference*0.001;




    var dateCounter = Math.trunc(dateDifferenceSeconds/secondsInDay);
    var hoursCounter = Math.trunc(hoursDifferenceSeconds/secondsInHour);
    var minutesCounter = Math.trunc(minutesDifferenceSeconds/secondsInMinute);
    var secondsCounter = Math.trunc(secondsDifferenceSeconds);

    var dayResult = dateCounter + " days ago";
    var hourResult = hoursCounter + " hours ago";
    var minResult = minutesCounter + " minutes ago";
    var secResult = secondsCounter + " seconds ago";
   

    if (dateCounter >= 1){
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

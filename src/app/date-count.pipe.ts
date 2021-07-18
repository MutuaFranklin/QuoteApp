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
    const secondsInMinute = 60;


    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds

    // var dateCounter = Math.trunc(dateDifferenceSeconds/secondsInDay);
    var dateCounter =(dateDifferenceSeconds/secondsInDay);
    var hoursCounter = Math.trunc(dateDifferenceSeconds/secondsInHour);
    var minutesCounter = Math.trunc(dateDifferenceSeconds/secondsInMinute);
    var secondsCounter = Math.trunc(dateDifferenceSeconds);

    var dayResult = dateCounter + " days ago";
    var hourResult = hoursCounter + " hours ago";
    var minResult = minutesCounter + "minutes ago";
    var secResult = secondsCounter + "seconds ago";

    // if (dateCounter >= 1 && value > todayWithNoTime){
    //   return dayResult;
    // }else{
    //   return (dayResult);
    // }


    if (dateDifferenceSeconds>= 86400){
      return dayResult;
    }
    else if (dateDifferenceSeconds>= 3600){
      return hourResult;
    }
    else if (dateDifferenceSeconds>= 60){
      return minResult;
    }
    else {
      return secResult;
    }



  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): unknown {
    let today:Date = new Date(); //get current date and time.
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime ) //returns value in Milliseconds
    const secondsInDay = 86400; //60 seconds in an hour * 24 hours in a day.
    var dateDifferenceInSeconds = dateDifference*0.001 //converts milliseconds to seconds
    var dateCounter = dateDifferenceInSeconds / secondsInDay;

    if(dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursCount'
})
export class HoursCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

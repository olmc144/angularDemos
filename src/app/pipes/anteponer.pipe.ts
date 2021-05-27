import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anteponer'
})
export class AnteponerPipe implements PipeTransform {

  transform(value: string, args: string): string {
    return args=== 'M' ?'Mr ' + value : 'Miss ' + value;
  }

}

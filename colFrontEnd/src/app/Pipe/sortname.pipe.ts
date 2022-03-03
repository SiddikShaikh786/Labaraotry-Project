import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(value: Array<any>, arg: any): any {
    return value.sort((a: any, b: any): any => {
      let x = a.uname.toLowerCase();
      let y = b.uname.toLowerCase();
      if (x > y) {
        return -1;
      }
      else {
        return 1;
      }
      return 0;
    })
  }

}

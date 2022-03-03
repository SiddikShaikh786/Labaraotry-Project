import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, firstName: string) {
    if (value.length === 0 || firstName === '') {
      return value
    }
    const users = [];
    for (const user of value) {
      if (user['uname'] === firstName) {
        users.push(user);
      }
    }
    return users
  }

}

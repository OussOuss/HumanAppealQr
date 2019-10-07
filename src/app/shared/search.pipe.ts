import {Pipe, PipeTransform} from '@angular/core';
import { user } from '../users/user.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(value: user[], filterString: string, propName: string): any {
    if (value.length === 0 || !filterString || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if ((<string>item[propName]).toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

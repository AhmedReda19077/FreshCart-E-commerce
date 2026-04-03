import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hi',
})
export class HiPipe implements PipeTransform {

  transform(myTitle : string): string {
    return "Hi" + myTitle;
  }

}

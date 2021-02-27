import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimmer'
})
export class TrimmerPipe implements PipeTransform {

  transform(values, keys) {

    keys.forEach((element: string) => {
      values.map((value) => {
        const ele = element.split('(');
        const KeyName = ele[0];
        const EndChar = ele[1].slice(0, 1);

        let vc = value[KeyName].trim();
        if (vc.length > 5) {
          vc = value[KeyName].trim().substring(0, EndChar) + ".....";
        }
         value[KeyName] = vc;
      });
    });
    return values;
  }
}

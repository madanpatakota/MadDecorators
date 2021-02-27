import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicateRemover'
})
export class DuplicateRemoverPipe implements PipeTransform {
  transform(value, keys, TopRecords?: string) {
    const filteredData: [] = value.filter(
      (s => o =>
        (k => !s.has(k) && s.add(k))
          (keys.map(k => o[k]).join('|'))
        // tslint:disable-next-line: new-parens
      )(new Set)
    );

    
    if (TopRecords) {
      // tslint:disable-next-line: radix
      const _topRecords = parseInt(TopRecords.replace("Top", ''));
      filteredData.splice(_topRecords);
    }

    return filteredData;
  }
}

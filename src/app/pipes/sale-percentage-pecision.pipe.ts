import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salePrecision'
})
export class SalePercentagePrecisionPipe implements PipeTransform {

  transform(sale:number): unknown {
     return Math.round(sale * 100) / 100;
  }

}

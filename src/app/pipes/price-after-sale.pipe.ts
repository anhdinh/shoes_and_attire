import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from "../services/model/ProductModel";

@Pipe({
  name: 'priceAfterSale'
})
export class PriceAfterSalePipe implements PipeTransform {

  transform(product: ProductModel, ...args: unknown[]): number {
    return product.price - product.price * product.discountPercentage / 100;
  }

}

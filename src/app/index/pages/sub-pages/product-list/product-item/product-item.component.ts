import {Component, Input} from '@angular/core';
import {ProductModel} from "../../../../../services/model/ProductModel";



@Component({
  selector: 'app-single-product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!:ProductModel;
  stars = [1,2,3,4,5];
}

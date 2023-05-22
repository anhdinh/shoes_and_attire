import {Component, Input} from '@angular/core';
import {ProductModel} from "../../../services/model/ProductModel";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  @Input() product!:ProductModel;
  stars = [1,2,3,4,5];
}

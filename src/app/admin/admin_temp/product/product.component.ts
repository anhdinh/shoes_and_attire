import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm =  new FormGroup({
    title:new FormControl(''),
    description:new FormControl(''),
    discountPercentage:new FormControl(''),
    ratting:new FormControl(''),
    stock:new FormControl(''),
    brand:new FormControl(''),
    category:new FormControl(''),
    thumbnail:new FormControl(''),
  });
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  max_discount_percentage,
  max_vote_star,
  min_discount_percentage, min_title,
  min_vote_star
} from "../../../configs/config_app";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = new FormControl('',[Validators.required,Validators.minLength(min_title)]);
  productForm :FormGroup    = new FormGroup({
    title:this.title,
    description:new FormControl(''),
    price:new FormControl('',[Validators.required,Validators.min(0)]),
    discountPercentage:new FormControl('',[Validators.max(max_discount_percentage),Validators.min(min_discount_percentage)]),
    ratting:new FormControl('',[Validators.max(max_vote_star),Validators.min(min_vote_star)]),
    stock:new FormControl('',Validators.min(0)),
    brand:new FormControl(''),
    category:new FormControl(''),
    thumbnail:new FormControl(''),
  });

  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
    this.resetRattingAndDiscount();
  }

  resetRattingAndDiscount(){
    this.productForm.get("discountPercentage")?.setValue(0);
    this.productForm.get("ratting")?.setValue(0);
  }

  onSummit() {
    if (this.productForm.valid){
      this.productService.createProduct(this.productForm.value).subscribe(product=>{
        this.productForm.reset();
        this.resetRattingAndDiscount();
        alert("Product was added")
      });

    }
  }


}

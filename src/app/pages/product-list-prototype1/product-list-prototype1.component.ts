import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-prototype1',
  templateUrl: './product-list-prototype1.component.html',
  styleUrls: ['./product-list-prototype1.component.css']
})
export class ProductListPrototype1Component {
  onEnterProduct(event:any){
    event?.srcElement?.classList?.add("is-hover");
  }

  onLeaveProduct(event:any){
    event?.srcElement?.classList?.remove("is-hover");
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  productData: any;
  cart = []

  constructor(private products: ProductsService){}

  //
  toggleProductInCart(product){
    this.cart.includes(product) ? this.cart = this.cart.filter(el => el != product) : this.cart.push(product);
    console.log(this.cart);
  }
  //

  ngOnInit(){
    this.products.getProducts()
    .subscribe((res:any) => {
      this.productData = res.products;
      console.log('this.productdata', this.productData);
    })
  }
}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  // The ActivatedRoute is specific to each routed component that the Angular Router loads. 
  // It contains information about the route, its parameters, and additional data associated with the route.
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
      // this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    //console.log('Your product has been added to the cart!');
    window.alert('Your product has been added to the cart!');
  }

}

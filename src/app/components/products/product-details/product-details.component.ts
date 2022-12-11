import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../Services/products.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];
  product: Product | null | undefined = null;

  constructor(
    private _productsService: ProductsService,
    private _cartService: CartService,
    private route: ActivatedRoute
  ) {}

  addToCart(product: Product) {
    this._cartService.addItem(product, 1);
    //window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const productNameFromRoute = String(routeParams.get('name'));

    this.products = this._productsService.getProducts();
    this.product = this.products.find(
      (product) => product.id === productIdFromRoute,
      (product) => product.name === productNameFromRoute
    );
  }
}

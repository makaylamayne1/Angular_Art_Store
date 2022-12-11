import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { ShoppingCart } from '../models/shopping-cart';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public cart: Observable<ShoppingCart> | null = null;
  public itemCount: number = 0;
  public cartItems: any;
  public itemsTotal: number = 0;
  public grossTotal: number = 0;

  private _cartSubscription: Subscription | null = null;
  private _totalItemsSubscription: Subscription | null = null;

  public constructor(
    private _productsService: ProductsService,
    private _cartService: CartService
  ) {}

  public emptyCart(): void {
    this._cartService.empty();
  }

  public ngOnInit(): void {
    this.products = this._productsService.getProducts();
    this.cart = this._cartService.get();
    this._cartSubscription = this.cart.subscribe((cart) => {
      this.cartItems = cart.items.map((item) => {
        let product = this.products.find((p) => p.id == item.productId);
        return { ...product, quantity: item.quantity };
      });
      this.itemCount = cart.items
        .map((x) => x.quantity)
        .reduce((p, n) => p + n, 0);
    });
    this._totalItemsSubscription = this.cart.subscribe((cart) => {
      this.itemsTotal = cart.items.map((x) => 1).reduce((p, n) => p + n, 0);
      console.log('this is it: ' + this.itemsTotal);
    });
    this._totalItemsSubscription = this.cart.subscribe((cart) => {
      cart.grossTotal = cart.items
      .map(
        (item) =>
          item.quantity *
          this.products.find((p) => p.id === item.productId)!.price
      )
      .reduce((previous, current) => previous + current, 0);
      this.grossTotal=cart.grossTotal;
    });
  }

  public ngOnDestroy(): void {
    if (this._cartSubscription) {
      this._cartSubscription.unsubscribe();
    }
    if (this._totalItemsSubscription) {
      this._totalItemsSubscription.unsubscribe();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { getCartItemsService } from '../Services/getCartItems';
import { CartItems } from '../model/cartitems';
import {RenderCartDisplayComponent} from '../render-cart-display/render-cart-display.component';

@Component({
  selector: 'app-cart-display-item',
  templateUrl: './cart-display-item.component.html',
  styleUrls: ['./cart-display-item.component.css'],
})
export class CartDisplayItemComponent implements OnInit {
  public cartItem = ' ';
  public cart: CartItems[];
  public constructor(private _getCartItemsService: getCartItemsService) {}

  ngOnInit() {
    this.cart = this._getCartItemsService.getCartItems();
  }
}

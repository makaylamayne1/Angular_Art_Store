import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  productList = [
    {name: 'Paint Brushes',price: 32},
    {name: 'WaterColor Notepad',price: 10},
    {name: 'Sketch Pencils' ,price: 33}
   ];
  cartProductList = [];
 
  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
  }
   removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
   }
}

import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class getCartItemsService {
  @Output() event = new EventEmitter();

  getCartItems() {
    return [
      {
        productId: 1,
        productName: 'Fancy paint brushes',
        productUrl:
          'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/FBDBA10D1E9241E2A8CF66404E5FDD36/10268869_21.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/FBDBA10D1E9241E2A8CF66404E5FDD36/10268869_21.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/FBDBA10D1E9241E2A8CF66404E5FDD36/10268869_21.jpg?fit=inside|540:540',
        productDescription:
          'These amazing paintbrushes are made and exported from Great Britain',
      },
      {
        productId: 2,
        productName: 'Watercolor Paper',
        productUrl:
         'https://images.squarespace-cdn.com/content/v1/5511fc7ce4b0a3782aa9418b/1429477219991-UBCUUEO580KAK0WDXOPA/watercolor-paint-on-paper.jpg',
        productDescription:
          'Tough watercolor paper',
      },
      {
        productId: 3,
        productName: 'High quality sketch pencils ',
        productUrl:
         'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/DD81CB883A2D410EA2324CC3A66BDE9E/10335896_21.jpg?fit=inside|540:540',
        productDescription:
          'These pencils are well known to not break and last for a long period of time',
      },
    ];
  }

  constructor() {}
}

import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  @Output() event = new EventEmitter();

  getProducts() {
    return [
      {
        id: 1,
        name: 'Large Canvas Print Info',
        description:
          'In case you need to add that energizing flicker to the walls of your office or home, you should try our range of great customized canvas prints.',
        pictureUrl:
          'https://t3.ftcdn.net/jpg/02/07/62/20/240_F_207622057_9uFezyCFNzqj5zjI5zYr3l1Y5opsBsWB.jpg',
        altPicture: 'Whomping Willow picture',
        price: 14.62,
        quantity: 10,
        rate: 4.1,
      },
      {
        id: 2,
        name: 'Brushes',
        description:
          'Set of brushes, 2 packages of 20 round and pointed nylon brushes for acrylic, oil, watercolor, face, nail decoration, miniature details and rock painting, blue.',
        pictureUrl:
          'https://m.media-amazon.com/images/I/81ON4-sLO0L._AC_SX679_.jpg',
        altPicture: 'Mandrake picture',
        price: 11.12,
        quantity: 10,
        rate: 3.9,
      },
      {
        id: 3,
        name: "colored pencils",
        description:
          'professional color pencils for artists and colorists, high quality art supplies for drawing, sketching and coloring books, smooth and creamy mix with bright colors.',
        pictureUrl:
          'https://t4.ftcdn.net/jpg/05/12/00/67/240_F_512006757_ewi5ZKoaiiC59VFnzReclE0tvIacrTUV.jpg',
        altPicture: "colored pencils",
        price: 12,
        quantity: 10,
        rate: 4.0,
      },
      {
        id: 4,
        name: 'Artists Ink',
        description:
          '.FW Artists Ink: 29.5 ml: set of 7 deferent colours.',
        pictureUrl:
          'https://as1.ftcdn.net/v2/jpg/02/30/91/38/1000_F_230913883_6RQ7uUbHBIz4OeM4xuayWZO9okzL3OW0.jpg',
        altPicture: 'Artists Ink',
        price: 26,
        quantity: 10,
        rate: 4.5,
      },
      {
        id: 5,
        name: 'Markers',
        description:
          'Pencils colored markers set vectorial realistic illustration.',
        pictureUrl:
          'https://as2.ftcdn.net/v2/jpg/02/86/09/89/1000_F_286098989_aEahQdnPC6LPB6KlffFNKqkHIFVV1lOR.jpg',
        altPicture: 'Coloured Markers',
        price: 81,
        quantity: 10,
        rate: 4.6,
      },
    ];
  }
}

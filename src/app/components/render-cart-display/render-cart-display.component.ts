import { Component, OnInit, Input } from '@angular/core';
import {CartItems} from '../model/cartitems'

@Component({
  selector: 'app-render-cart-display',
  templateUrl: './render-cart-display.component.html',
  styleUrls: ['./render-cart-display.component.css']
})
export class RenderCartDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() CartItems : CartItems | null= null;
}
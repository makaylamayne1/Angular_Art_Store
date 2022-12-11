import { Component, OnInit } from '@angular/core';
import {of, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    const advertiseMentObservable= of('Thank you for visiting our shop', 'Today, everything is 50% off');

    //subscribing to the observable
    advertiseMentObservable.subscribe(
      value=>{alert(value)}
    )

    let observable = new Observable(observer => {
      setTimeout(() => {
      observer.next('To get a surprise limited item in your purchase use the promo code 103jdswT')
      },5000)
      console.log('Observables invoked!');
      });
      observable.subscribe(v=>alert(v));
      
  }

}
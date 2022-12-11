import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './components/firebase/shared/services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularfirebase-authentication';
  dashboard: any;
  constructor(public authService: AuthService){}
  
  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}

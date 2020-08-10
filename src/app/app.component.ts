import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State } from './reducers/index';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { isLoggedIn, isLoggedOut } from 'src/app/auth/auth.selectors';
import { logoutAction } from 'src/app/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-ngrx'; 
  isLogin$: Observable<boolean>;
  isLoggedOut: Observable<boolean>
  constructor(private router: Router, private store: Store<State>){}
  
  ngOnInit() {
    this.isLogin$ = this.store.pipe(
      select(isLoggedIn)
    )
    this.isLoggedOut = this.store.pipe(
      select(isLoggedOut)
    )
  }
logout() {
  this.store.dispatch(logoutAction)
}
}

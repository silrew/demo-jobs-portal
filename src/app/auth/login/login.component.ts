import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { State } from '../../reducers/index'
import { noop } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { User } from '../models/user';
import { loginAction } from '../auth.actions'
import {AuthActions} from '../action-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authservice: AuthService, private fb: FormBuilder,
                private store: Store<State>) {}
  profileForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() { console.log('fier');
    const value =this.profileForm.value;
    this.authservice.getUser().pipe(
      tap((user: User) =>{
        const login = loginAction({user: user});
        console.log('loginaction', login)
        this.store.dispatch(
          login
       )
       })
      ).subscribe(
      noop,
      () => alert('login failed')
    )
  }
  ngOnInit() {
    
   // this.authservice.getUser().subscribe(data => console.log(data))
  }

}

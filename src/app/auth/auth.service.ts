import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<any>{
    return  this.http.post('https://putsreq.com/77NyKAgm9ruUWTebnQno',{user:'user'});
  }
}

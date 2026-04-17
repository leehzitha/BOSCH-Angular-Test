import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { IRegister } from './interfaces/IRegister';
import { ILogin } from './interfaces/ILogin';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api{
  login = (data: ILogin) : Observable<string> => {
    return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
  }
  subscribe = (data: IRegister): Observable<void> => {
    return this.client.post<void>(`${this.URL}/auth/subscribe`, data).pipe()
  }
}

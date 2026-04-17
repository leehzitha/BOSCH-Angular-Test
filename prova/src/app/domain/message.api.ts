import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageApi extends Api{

  protected headers : HttpHeaders = new HttpHeaders({
      "Authorization" : sessionStorage.getItem('token')!
  })

  public getMessagesFromUser (id : number) : Observable<[]> {
    return this.client.get<[]>(`${this.URL}/messages/{${id}`, {headers : this.headers}).pipe()
  }
}

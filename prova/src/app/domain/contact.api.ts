import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { IContact } from './interfaces/IContacts';

@Injectable({
  providedIn: 'root',
})
export class ContactApi extends Api {
  public getContacts = () : Observable<IContact[]> => {
    return this.client.get<IContact[]>(`${this.URL}/contacts`).pipe()
  }
}   

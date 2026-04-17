import { Component, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { IContact } from '../../domain/interfaces/IContacts';

@Component({
  selector: 'app-contacts-page',
  imports: [Header],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.css',
})
export class ContactsPage {
  protected contacts = signal<IContact[]>([]);

  handleUser(id : number) {
    
  }

}

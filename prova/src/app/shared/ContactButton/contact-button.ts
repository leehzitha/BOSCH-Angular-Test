import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from '../../domain/interfaces/IContacts';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCard {
  @Input()
  user? : IContact

  @Output()
  onClick : EventEmitter<string> = new EventEmitter();

  clicked = () => {
    this.onClick.emit(this.user?.id);
  }
}

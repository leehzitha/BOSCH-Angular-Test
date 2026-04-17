import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input()
  title : string = ""

  @Output()
  onCLick : EventEmitter<void> = new EventEmitter();

  clicked = () => {
    this.onCLick.emit();
  }
}

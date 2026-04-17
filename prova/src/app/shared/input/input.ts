import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class FormsInput {
  @Input()
  placeholder : string = "";

  value : string = "";

  @Output()
  onChange : EventEmitter<string> = new EventEmitter();

  setValue() {
   this.onChange.emit(this.value); 
  }
  
}

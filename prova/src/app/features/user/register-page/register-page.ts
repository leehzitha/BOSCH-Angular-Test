import { Component, EventEmitter, Input } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { FormsInput } from '../../../shared/input/input';
import { FormControl, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { IRegister } from '../../../domain/interfaces/IRegister';
import { AuthApi } from '../../../domain/auth.api';


@Component({
  selector: 'app-register-page',
  imports: [Button, FormsInput, FormsModule],
  standalone: true,
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  constructor(private api : AuthApi){}

  name = ""
  email = ""
  SubscribeForm : FormGroup = new FormGroup({
    name : new FormControl(this.name, [Validators.required]),
    email : new FormControl(this.email, [Validators.required, Validators.email] ),
    dataNasc : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required, Validators.minLength(9)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })


  get Name() {
    return this.SubscribeForm.get("name");
  }

  get Email() {
    return this.SubscribeForm.get("email");
  }

  get DataNasc() {
    return this.SubscribeForm.get("dataNasc")
  }

  get Phone() {
    return this.SubscribeForm.get("phone")
  }

  get Password() {
    return this.SubscribeForm.get("password")
  }

  subscribe = () => {
    if (!this.SubscribeForm.valid)
    {
      alert("Invalid fields");
      return;
    }

    const data: IRegister = {
      name :this.Name?.value,
      email : this.Email?.value,
      password : this.Password?.value,
      birthday : this.DataNasc?.value,
      phone : this.Phone?.value,
    }

    this.api.subscribe(data).subscribe(
        res => {
            alert("Signed Up!");
            this.SubscribeForm.reset;
        }
    )
  }

  getName = (value : string) => {
    
    // this.name = value;
    // console.log(`Nome: ${this.name}`)
  }

  getEmail = (value : string) => {
    // this.email = value
    // console.log(`Email: ${this.email}`)
  }

  getNasc = (value : string) => {

  }

  getPass = (value : string) => {

  }
  

  getPlace = (value : string) => {

  }

  getPhone = (value : string) => {

  }


  
}

import { Component } from '@angular/core';
import { FormsInput } from '../../../shared/input/input';
import { Button } from '../../../shared/button/button';
import { AuthApi } from '../../../domain/auth.api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../../domain/interfaces/ILogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [Button, FormsInput],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  constructor(
    private api : AuthApi,
    private router : Router
  ){}

  name = ""
  email = ""

  protected isSubscribe: boolean = false;

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(this.name, [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get Email() {
    return this.loginForm.get("email");
  }

  get Password() {
    return this.loginForm.get("password");
  }

  formAction = () => {
    return this.login()
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    }
    const data: ILogin = {
      password: this.Password?.value,
      email: this.Email?.value
    }

    this.api.login(data).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );
  }
  getEmail = (value: string) =>{

  }

  getPass = (value: string) => {

  }
}

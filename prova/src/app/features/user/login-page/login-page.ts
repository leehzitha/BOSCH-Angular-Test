import { Component } from '@angular/core';
import { FormsInput } from '../../../shared/input/input';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-login-page',
  imports: [Button, FormsInput],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  getEmail = (value: string) =>{

  }

  getPass = (value: string) => {

  }
}

import { Routes } from '@angular/router';
import { ContactsPage } from './features/contacts-page/contacts-page';
import { RegisterPage } from './features/user/register-page/register-page';
import { LoginPage } from './features/user/login-page/login-page';

export const routes: Routes = [
    {path: "", component: ContactsPage},
    {path: "register", component: RegisterPage},
    {path: "login", component: LoginPage}
];

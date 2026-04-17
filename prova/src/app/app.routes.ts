import { Routes } from '@angular/router';
import { ContactsPage } from './features/contacts-page/contacts-page';
import { RegisterPage } from './features/user/register-page/register-page';
import { LoginPage } from './features/user/login-page/login-page';
import { MainPage } from './features/main-page/main-page';

export const routes: Routes = [
    {path: "", component: MainPage, children: [
        {path: "register", component: RegisterPage},
        {path: "login", component: LoginPage},
    ]},
    
    {path: "contacts", component: ContactsPage, children: [
        // {path: ":id", component: MessagePage }
    ]}
];

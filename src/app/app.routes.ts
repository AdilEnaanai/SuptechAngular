import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Produits } from './produits/produits';
import { Services } from './services/services';
import { Contact } from './contact/contact';


export const routes: Routes = [
    {path:"accueil",component:Accueil},
    {path:"produits",component:Produits},
    {path:"services",component:Services},
    {path:"contact",component:Contact},
    {path:"",redirectTo:"accueil",pathMatch:"full"}
];

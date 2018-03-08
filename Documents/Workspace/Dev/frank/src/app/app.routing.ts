
import { AddRestauranteComponent } from './restaurante/add-restaurante/add-restaurante.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoComponent } from './prato/prato.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AddPratoComponent } from './prato/add-prato/add-prato.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'restaurantes', component: RestauranteComponent },
    { path: 'pratos', component: PratoComponent },
    { path: 'restaurantes/add-restaurante', component: AddRestauranteComponent },
    { path: 'pratos/add-prato', component: AddPratoComponent },
    { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

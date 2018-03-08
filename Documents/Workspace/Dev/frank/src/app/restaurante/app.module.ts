import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from '../home/home.component';
import { RestauranteComponent } from '../restaurante/restaurante.component';
import { PratoComponent } from '../prato/prato.component';
import { routing } from '../app.routing';
import { AddRestauranteComponent } from './add-restaurante/add-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestauranteComponent,
    PratoComponent,
    AddRestauranteComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

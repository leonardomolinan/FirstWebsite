import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AddPratoComponent } from './prato/add-prato/add-prato.component';
import { AddRestauranteComponent } from './restaurante/add-restaurante/add-restaurante.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PratoComponent } from './prato/prato.component';
import { PratoService } from './prato/prato.service';
import { RestauranteService } from './restaurante/restaurante.service';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './Modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestauranteComponent,
    PratoComponent,
    ModalComponent,
    AddPratoComponent,
    AddRestauranteComponent,
    CampoControlErroComponent,
    FormDebugComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    routing
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [
    RestauranteService,
    PratoService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}

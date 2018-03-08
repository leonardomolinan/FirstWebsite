import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { QuestionarioComponent } from './questionario/questionario.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ModalComponent]
})
export class AppModule { }

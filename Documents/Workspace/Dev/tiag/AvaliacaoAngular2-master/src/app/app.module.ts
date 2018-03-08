import { QuestionsService } from './questions.service';
import {RespostasQuestionarioService} from './respostas-questionario.service';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { InfoRecebidasComponent } from './info-recebidas/info-recebidas.component';
import { TermoComponent } from './termo/termo.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import { QuestionarioComponent } from './questionario/questionario.component';
import { TerminoCadastroComponent } from './termino-cadastro/termino-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoRecebidasComponent,
    TermoComponent,
    QuestionarioComponent,
    TerminoCadastroComponent
  ],
  imports: [
    
    
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:InfoRecebidasComponent},
      {path:'questionario',component:QuestionarioComponent},
      {path:'sucesso',component:TerminoCadastroComponent}
    ])

  ],
  entryComponents:[
    TermoComponent
  ],
  providers: [
    RespostasQuestionarioService,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

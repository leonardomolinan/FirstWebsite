import { Component, OnInit } from '@angular/core';

import { QuestionarioService } from './questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  constructor(_questionarioService: QuestionarioService) {
    this.questionarioService = _questionarioService;
  }

  opSel:any;

  pergunta1: string[];
  pergunta2: string[];
  pergunta3: string[];
  titulo: string;
  resposta1: any;
  resposta2: any;
  resposta3: any;
  questionarioService: QuestionarioService;

  ngOnInit() {
    this.pergunta1 = this.questionarioService.getPergunta1();
    this.pergunta2 = this.questionarioService.getPergunta2();
    this.pergunta3 = this.questionarioService.getPergunta3();
    this.titulo = this.questionarioService.getTitle();
  }
  
  onSubmit(form){
  }

  OnCheckboxSelect(resposta){
      this.resposta1 = resposta;
  }
}

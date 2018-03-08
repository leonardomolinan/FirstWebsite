import { QuestionsService } from './../questions.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { RespostasQuestionarioService } from '../respostas-questionario.service';

@Component({
  selector: 'app-termino-cadastro',
  templateUrl: './termino-cadastro.component.html',
  styleUrls: ['./termino-cadastro.component.css']
})
export class TerminoCadastroComponent implements OnInit {
  private respostas: any;
  private CheckBoxQuestions = null;
  private DropDownQuestions = null;
  private EnunciadoResposta:string[];
  constructor(private data: RespostasQuestionarioService,private service: QuestionsService) {
    
    service.getCheckBoxQuestions().subscribe(response =>{
      
      this.CheckBoxQuestions = response;
      
    });
    service.getDropDownQuestions().subscribe(response =>{
      
      this.DropDownQuestions = response;
      
    });
  }
  

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.respostas = message);
  }
}

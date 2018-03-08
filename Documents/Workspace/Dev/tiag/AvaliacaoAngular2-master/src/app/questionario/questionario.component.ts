import { RespostasQuestionarioService } from './../respostas-questionario.service';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {
  CheckBoxQuestions : any;
  DropDownQuestions : any;
  id : number;
  message: any;

  constructor(private router: Router, private service : QuestionsService,private data: RespostasQuestionarioService){
    service.getCheckBoxQuestions().subscribe(response =>{
      
      this.CheckBoxQuestions = response;
    });
    service.getDropDownQuestions().subscribe(response =>{
      
      this.DropDownQuestions = response;
    });
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  submit(respostas){
    this.data.changeMessage(respostas);
    this.router.navigate(['sucesso']);
  }

}

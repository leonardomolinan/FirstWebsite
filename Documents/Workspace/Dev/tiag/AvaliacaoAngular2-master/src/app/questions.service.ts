import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {
  urlCheckBoxQuestions = 'https://my-json-server.typicode.com/Tiago-Faria/Questions/checkBoxQuestions';
  urlDropDownQuestions = 'https://my-json-server.typicode.com/Tiago-Faria/Questions/DropdownQuestions';
  constructor(private http:Http) {}

  public getCheckBoxQuestions(){
    return this.http.get(this.urlCheckBoxQuestions).map(response => response.json());
  }
  public getDropDownQuestions(){
    return this.http.get(this.urlDropDownQuestions).map(response => response.json());
  }
}

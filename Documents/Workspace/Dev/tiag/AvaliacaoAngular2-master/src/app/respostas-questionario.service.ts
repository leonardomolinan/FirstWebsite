import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class RespostasQuestionarioService {
  private messageSource = new BehaviorSubject<any>("");
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message : any){
    this.messageSource.next(message);
  }
}

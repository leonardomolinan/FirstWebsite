import { Component } from '@angular/core';
import { CoursesComponent} from './courses.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Informações recebidas!</h1>
  <div>{{ text1 }}</div>
  <div>{{ text2 }}</div>
  <div>{{ text3 }}</div>
  <div>{{ text4 }}</div>
  <div>
  <button>Sim</button>
  <button>Não</button>
  </div>
  `
  
})
export class AppComponent  { 
  text1 = "Em até 48h daremos um retorno sobre a abertura de sua conta."
  text2 = "Para receber nossas recomendações de investimentos e começar a investir, precisamos conhecer seu perfil de investidor."
  text3 = "São apenas 4 perguntas que irão guiar todas as suas decisões de investimentos."
  text4 = "Gostaria de responder ao Perfil do investidor?"
  name = 'Angular'; 
}

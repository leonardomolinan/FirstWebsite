import { Injectable } from '@angular/core';

@Injectable()
export class QuestionarioService {

  getPergunta1(){
    return ['1 - Qual o seu comportamento em relação aos seus investimentos?',
    'PRESERVAR MEU DINHEIRO SEM CORRER RISCOS',
    'GANHAR MAIS DINHEIRO ASSUMINDO RISCOS MODERADOS',
    'GANHAR MAIS DINHEIRO ASSUMINDO RISCOS AGRESSIVOS',]
  }

  getPergunta2(){
    return ['2 - Por quanto tempo você deseja manter os seus investimentos?',
    'ATÉ 1 ANO', 'DE 1 A 3 ANOS', 'DE 3 A 5 ANOS']
  }

  getPergunta3(){
    return ['3 - Quantos % desses investimentos você pode precisar em um ano?',
    'ACIMA DE 75%', 'DE 26 A 76%', 'ATÉ 25%']
  }

  getTitle(){
    return 'PERFIL DO INVESTIDOR - QUESTIONÁRIO';
  }

  constructor() { }

}

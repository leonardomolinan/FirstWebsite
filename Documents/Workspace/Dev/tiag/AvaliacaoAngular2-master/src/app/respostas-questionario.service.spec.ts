import { TestBed, inject } from '@angular/core/testing';

import { RespostasQuestionarioService } from './respostas-questionario.service';

describe('RespostasQuestionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RespostasQuestionarioService]
    });
  });

  it('should be created', inject([RespostasQuestionarioService], (service: RespostasQuestionarioService) => {
    expect(service).toBeTruthy();
  }));
});

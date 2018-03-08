import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminoCadastroComponent } from './termino-cadastro.component';

describe('TerminoCadastroComponent', () => {
  let component: TerminoCadastroComponent;
  let fixture: ComponentFixture<TerminoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

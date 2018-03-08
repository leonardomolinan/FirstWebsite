import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro2ComponentComponent } from './meu-primeiro2-component.component';

describe('MeuPrimeiro2ComponentComponent', () => {
  let component: MeuPrimeiro2ComponentComponent;
  let fixture: ComponentFixture<MeuPrimeiro2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiro2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiro2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

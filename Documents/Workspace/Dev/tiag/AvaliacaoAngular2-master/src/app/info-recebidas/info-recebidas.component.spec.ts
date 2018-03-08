import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecebidasComponent } from './info-recebidas.component';

describe('InfoRecebidasComponent', () => {
  let component: InfoRecebidasComponent;
  let fixture: ComponentFixture<InfoRecebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRecebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRecebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

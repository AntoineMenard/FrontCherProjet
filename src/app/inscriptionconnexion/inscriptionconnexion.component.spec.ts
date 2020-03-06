import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionconnexionComponent } from './inscriptionconnexion.component';

describe('InscriptionconnexionComponent', () => {
  let component: InscriptionconnexionComponent;
  let fixture: ComponentFixture<InscriptionconnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionconnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

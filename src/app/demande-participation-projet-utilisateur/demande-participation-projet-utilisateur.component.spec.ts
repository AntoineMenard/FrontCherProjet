import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeParticipationProjetUtilisateurComponent } from './demande-participation-projet-utilisateur.component';

describe('DemandeParticipationProjetUtilisateurComponent', () => {
  let component: DemandeParticipationProjetUtilisateurComponent;
  let fixture: ComponentFixture<DemandeParticipationProjetUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeParticipationProjetUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeParticipationProjetUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

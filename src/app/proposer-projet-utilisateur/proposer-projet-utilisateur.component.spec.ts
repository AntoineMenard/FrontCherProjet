import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerProjetUtilisateurComponent } from './proposer-projet-utilisateur.component';

describe('ProposerProjetUtilisateurComponent', () => {
  let component: ProposerProjetUtilisateurComponent;
  let fixture: ComponentFixture<ProposerProjetUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerProjetUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerProjetUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

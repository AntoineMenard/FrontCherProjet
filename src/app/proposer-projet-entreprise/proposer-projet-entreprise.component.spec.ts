import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerProjetEntrepriseComponent } from './proposer-projet-entreprise.component';

describe('ProposerProjetEntrepriseComponent', () => {
  let component: ProposerProjetEntrepriseComponent;
  let fixture: ComponentFixture<ProposerProjetEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerProjetEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerProjetEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

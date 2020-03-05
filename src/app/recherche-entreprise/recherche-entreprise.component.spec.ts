import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEntrepriseComponent } from './recherche-entreprise.component';

describe('RechercheEntrepriseComponent', () => {
  let component: RechercheEntrepriseComponent;
  let fixture: ComponentFixture<RechercheEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

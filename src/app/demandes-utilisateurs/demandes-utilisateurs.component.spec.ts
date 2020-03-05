import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesUtilisateursComponent } from './demandes-utilisateurs.component';

describe('DemandesUtilisateursComponent', () => {
  let component: DemandesUtilisateursComponent;
  let fixture: ComponentFixture<DemandesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

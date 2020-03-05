import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProjetComponent } from './recherche-projet.component';

describe('RechercheProjetComponent', () => {
  let component: RechercheProjetComponent;
  let fixture: ComponentFixture<RechercheProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

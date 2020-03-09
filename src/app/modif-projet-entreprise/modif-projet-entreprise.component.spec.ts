import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProjetEntrepriseComponent } from './modif-projet-entreprise.component';

describe('ModifProjetEntrepriseComponent', () => {
  let component: ModifProjetEntrepriseComponent;
  let fixture: ComponentFixture<ModifProjetEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProjetEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProjetEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

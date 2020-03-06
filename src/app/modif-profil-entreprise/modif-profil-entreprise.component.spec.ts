import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProfilEntrepriseComponent } from './modif-profil-entreprise.component';

describe('ModifProfilEntrepriseComponent', () => {
  let component: ModifProfilEntrepriseComponent;
  let fixture: ComponentFixture<ModifProfilEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProfilEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProfilEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProfilParticulierComponent } from './modif-profil-particulier.component';

describe('ModifProfilParticulierComponent', () => {
  let component: ModifProfilParticulierComponent;
  let fixture: ComponentFixture<ModifProfilParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProfilParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProfilParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

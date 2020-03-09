import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsParticulierComponent } from './projets-particulier.component';

describe('ProjetsParticulierComponent', () => {
  let component: ProjetsParticulierComponent;
  let fixture: ComponentFixture<ProjetsParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

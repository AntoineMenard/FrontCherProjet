import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiMessageEntrepriseComponent } from './envoi-message-entreprise.component';

describe('EnvoiMessageEntrepriseComponent', () => {
  let component: EnvoiMessageEntrepriseComponent;
  let fixture: ComponentFixture<EnvoiMessageEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiMessageEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiMessageEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

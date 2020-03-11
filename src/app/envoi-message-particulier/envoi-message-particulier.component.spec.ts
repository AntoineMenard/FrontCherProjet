import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiMessageParticulierComponent } from './envoi-message-particulier.component';

describe('EnvoiMessageParticulierComponent', () => {
  let component: EnvoiMessageParticulierComponent;
  let fixture: ComponentFixture<EnvoiMessageParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiMessageParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiMessageParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

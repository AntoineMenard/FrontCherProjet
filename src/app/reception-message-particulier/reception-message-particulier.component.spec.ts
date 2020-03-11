import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionMessageParticulierComponent } from './reception-message-particulier.component';

describe('ReceptionMessageParticulierComponent', () => {
  let component: ReceptionMessageParticulierComponent;
  let fixture: ComponentFixture<ReceptionMessageParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionMessageParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionMessageParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

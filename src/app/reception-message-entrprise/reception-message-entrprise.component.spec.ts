import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionMessageEntrpriseComponent } from './reception-message-entrprise.component';

describe('ReceptionMessageEntrpriseComponent', () => {
  let component: ReceptionMessageEntrpriseComponent;
  let fixture: ComponentFixture<ReceptionMessageEntrpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionMessageEntrpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionMessageEntrpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

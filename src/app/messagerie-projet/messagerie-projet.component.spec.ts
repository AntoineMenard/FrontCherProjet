import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieProjetComponent } from './messagerie-projet.component';

describe('MessagerieProjetComponent', () => {
  let component: MessagerieProjetComponent;
  let fixture: ComponentFixture<MessagerieProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

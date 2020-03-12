import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieEntrepriseComponent } from './messagerie-entreprise.component';

describe('MessagerieEntrepriseComponent', () => {
  let component: MessagerieEntrepriseComponent;
  let fixture: ComponentFixture<MessagerieEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

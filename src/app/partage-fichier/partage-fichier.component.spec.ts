import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartageFichierComponent } from './partage-fichier.component';

describe('PartageFichierComponent', () => {
  let component: PartageFichierComponent;
  let fixture: ComponentFixture<PartageFichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartageFichierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartageFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

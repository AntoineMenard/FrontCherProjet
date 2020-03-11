import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEtapeComponent } from './modif-etape.component';

describe('ModifEtapeComponent', () => {
  let component: ModifEtapeComponent;
  let fixture: ComponentFixture<ModifEtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertlogscreenComponent } from './alertlogscreen.component';

describe('AlertlogscreenComponent', () => {
  let component: AlertlogscreenComponent;
  let fixture: ComponentFixture<AlertlogscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertlogscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertlogscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

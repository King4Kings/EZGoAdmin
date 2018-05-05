import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedscreenComponent } from './finishedscreen.component';

describe('FinishedscreenComponent', () => {
  let component: FinishedscreenComponent;
  let fixture: ComponentFixture<FinishedscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingscreenComponent } from './remainingscreen.component';

describe('RemainingscreenComponent', () => {
  let component: RemainingscreenComponent;
  let fixture: ComponentFixture<RemainingscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

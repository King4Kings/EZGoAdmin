import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriprequestscreenComponent } from './triprequestscreen.component';

describe('TriprequestscreenComponent', () => {
  let component: TriprequestscreenComponent;
  let fixture: ComponentFixture<TriprequestscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriprequestscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriprequestscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

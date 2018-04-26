import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripdirectionComponent } from './tripdirection.component';

describe('TripdirectionComponent', () => {
  let component: TripdirectionComponent;
  let fixture: ComponentFixture<TripdirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripdirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripdirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

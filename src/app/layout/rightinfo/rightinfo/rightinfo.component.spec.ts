import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightinfoComponent } from './rightinfo.component';

describe('RightinfoComponent', () => {
  let component: RightinfoComponent;
  let fixture: ComponentFixture<RightinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

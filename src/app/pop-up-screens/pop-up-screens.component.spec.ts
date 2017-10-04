import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpScreensComponent } from './pop-up-screens.component';

describe('PopUpScreensComponent', () => {
  let component: PopUpScreensComponent;
  let fixture: ComponentFixture<PopUpScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

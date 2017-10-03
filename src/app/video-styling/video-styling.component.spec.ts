import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStylingComponent } from './video-styling.component';

describe('VideoStylingComponent', () => {
  let component: VideoStylingComponent;
  let fixture: ComponentFixture<VideoStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStylingComponent } from './table-styling.component';

describe('TableStylingComponent', () => {
  let component: TableStylingComponent;
  let fixture: ComponentFixture<TableStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

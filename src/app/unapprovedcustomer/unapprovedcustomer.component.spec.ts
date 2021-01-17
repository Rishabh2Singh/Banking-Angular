import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedcustomerComponent } from './unapprovedcustomer.component';

describe('UnapprovedcustomerComponent', () => {
  let component: UnapprovedcustomerComponent;
  let fixture: ComponentFixture<UnapprovedcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

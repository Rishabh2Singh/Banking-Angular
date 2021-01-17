import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRemovePayeeComponent } from './confirm-remove-payee.component';

describe('ConfirmRemovePayeeComponent', () => {
  let component: ConfirmRemovePayeeComponent;
  let fixture: ComponentFixture<ConfirmRemovePayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRemovePayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemovePayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

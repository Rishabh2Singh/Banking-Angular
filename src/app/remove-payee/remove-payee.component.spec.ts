import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePayeeComponent } from './remove-payee.component';

describe('RemovePayeeComponent', () => {
  let component: RemovePayeeComponent;
  let fixture: ComponentFixture<RemovePayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

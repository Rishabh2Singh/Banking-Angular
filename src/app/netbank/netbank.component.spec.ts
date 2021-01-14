import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankComponent } from './netbank.component';

describe('NetbankComponent', () => {
  let component: NetbankComponent;
  let fixture: ComponentFixture<NetbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

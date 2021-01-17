import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetbankingdetailsComponent } from './internetbankingdetails.component';

describe('InternetbankingdetailsComponent', () => {
  let component: InternetbankingdetailsComponent;
  let fixture: ComponentFixture<InternetbankingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetbankingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetbankingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemkhoanDetailsComponent } from './diemkhoan-details.component';

describe('DiemkhoanDetailsComponent', () => {
  let component: DiemkhoanDetailsComponent;
  let fixture: ComponentFixture<DiemkhoanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiemkhoanDetailsComponent]
    });
    fixture = TestBed.createComponent(DiemkhoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemkhoanListComponent } from './diemkhoan-list.component';

describe('DiemkhoanListComponent', () => {
  let component: DiemkhoanListComponent;
  let fixture: ComponentFixture<DiemkhoanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiemkhoanListComponent]
    });
    fixture = TestBed.createComponent(DiemkhoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

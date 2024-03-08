import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiemkhoanComponent } from './add-diemkhoan.component';

describe('AddDiemkhoanComponent', () => {
  let component: AddDiemkhoanComponent;
  let fixture: ComponentFixture<AddDiemkhoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDiemkhoanComponent]
    });
    fixture = TestBed.createComponent(AddDiemkhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

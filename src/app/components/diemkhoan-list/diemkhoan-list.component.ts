import { Component, OnInit } from '@angular/core';
import { Diemkhoan } from 'src/app/models/diemkhoan.model';
import { DiemKhoanService } from 'src/app/services/diemkhoan.service';

@Component({
  selector: 'app-diemkhoan-list',
  templateUrl: './diemkhoan-list.component.html',
  styleUrls: ['./diemkhoan-list.component.css'],
})
export class DiemkhoanListComponent implements OnInit {
  diemkhoanls?: Diemkhoan[];
  currentDiemKhoan: Diemkhoan = {};
  currentIndex = -1;
  tenDiem = '';
  constructor(private diemkhoanService: DiemKhoanService) {}
  ngOnInit(): void {
    this.retrieveDiemKhoan();
  }
  retrieveDiemKhoan(): void {
    this.diemkhoanService.getAll().subscribe({
      next: (data) => {
        this.diemkhoanls = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  refreshList(): void {
    this.retrieveDiemKhoan();
    this.currentDiemKhoan = {};
    this.currentIndex = -1;
  }
  setActiveDiemKhoan(diemkhoan: Diemkhoan, index: number): void {
    this.currentDiemKhoan = diemkhoan;
    this.currentIndex = index;
  }
  removeAllDiemKhoan(): void {
    this.diemkhoanService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
  searchTenDiem(): void {
    this.currentDiemKhoan = {};
    this.currentIndex = -1;
    this.diemkhoanService.findByTitle(this.tenDiem).subscribe({
      next: (data) => {
        this.diemkhoanls = data;

        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}

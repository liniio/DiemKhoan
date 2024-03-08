import { Component, Input, OnInit } from '@angular/core';
import { DiemKhoanService } from 'src/app/services/diemkhoan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Diemkhoan } from 'src/app/models/diemkhoan.model';

@Component({
  selector: 'app-diemkhoan-details',
  templateUrl: './diemkhoan-details.component.html',
  styleUrls: ['./diemkhoan-details.component.css'],
})
export class DiemkhoanDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentDiemKhoan: Diemkhoan = {
    tenDiem: '',
    diaDanh: '',
    doSau: '',
    ngayKhoan: '',
    tenNguoiKhoan: '',
  };
  message = '';

  constructor(
    private diemkhoanService: DiemKhoanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDiemKhoan(this.route.snapshot.params['id']);
    }
  }
  getDiemKhoan(id: string): void {
    this.diemkhoanService.get(id).subscribe({
      next: (data) => {
        this.currentDiemKhoan = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateDiemKhoan(): void {
    this.message = '';
    this.diemkhoanService
      .update(this.currentDiemKhoan.id, this.currentDiemKhoan)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }
  deleteDiemKhoan(): void {
    this.diemkhoanService.delete(this.currentDiemKhoan.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/diemkhoanls']);
      },
      error: (e) => console.error(e),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Diemkhoan } from 'src/app/models/diemkhoan.model';
import { DiemKhoanService } from 'src/app/services/diemkhoan.service';

@Component({
  selector: 'app-add-diemkhoan',
  templateUrl: './add-diemkhoan.component.html',
  styleUrls: ['./add-diemkhoan.component.css'],
})
export class AddDiemkhoanComponent implements OnInit {
  diemkhoan: Diemkhoan = {
    tenDiem: '',
    diaDanh: '',
    doSau: '',
    ngayKhoan: '',
    tenNguoiKhoan: '',
  };
  submitted = false;
  constructor(private diemkhoanService: DiemKhoanService) {}
  ngOnInit(): void {}
  saveDiemKhoan(): void {
    const data = {
      tenDiem: this.diemkhoan.tenDiem,
      diaDanh: this.diemkhoan.diaDanh,
      doSau: this.diemkhoan.doSau,
      ngayKhoan: this.diemkhoan.ngayKhoan,
      tenNguoiKhoan: this.diemkhoan.tenNguoiKhoan,
    };
    24;
    this.diemkhoanService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
  newDiemKhoan(): void {
    this.submitted = false;
    this.diemkhoan = {
      tenDiem: '',
      diaDanh: '',
      doSau: '',
      ngayKhoan: '',
      tenNguoiKhoan: '',
    };
  }
}

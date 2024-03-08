import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diemkhoan } from '../models/diemkhoan.model';
const baseUrl = 'http://localhost:8080/api/diemkhoanls';
@Injectable({
  providedIn: 'root',
})
export class DiemKhoanService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Diemkhoan[]> {
    return this.http.get<Diemkhoan[]>(baseUrl);
  }
  get(id: any): Observable<Diemkhoan> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
    20;
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(tenDiem: any): Observable<Diemkhoan[]> {
    return this.http.get<Diemkhoan[]>(`${baseUrl}?tenDiem=${tenDiem}`);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiemkhoanComponent } from './components/add-diemkhoan/add-diemkhoan.component';
import { DiemkhoanDetailsComponent } from './components/diemkhoan-details/diemkhoan-details.component';
import { DiemkhoanListComponent } from './components/diemkhoan-list/diemkhoan-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'diemkhoanls', pathMatch: 'full' },
  { path: 'diemkhoanls', component: DiemkhoanListComponent },
  { path: 'diemkhoanls/:id', component: DiemkhoanDetailsComponent },
  { path: 'add', component: AddDiemkhoanComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

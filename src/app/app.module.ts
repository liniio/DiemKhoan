import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDiemkhoanComponent } from './components/add-diemkhoan/add-diemkhoan.component';
import { DiemkhoanDetailsComponent } from './components/diemkhoan-details/diemkhoan-details.component';
import { DiemkhoanListComponent } from './components/diemkhoan-list/diemkhoan-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AddDiemkhoanComponent,
    DiemkhoanDetailsComponent,
    DiemkhoanListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransferComponent } from './transfer/transfer.component';
import { LogoutComponent } from './logout/logout.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';


const route : Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundTransferComponent,
    TransferComponent,
    LogoutComponent,
    AddPayeeComponent,
    LoginDashboardComponent,
    AccountstatementComponent,
    AccountsummaryComponent,
    AccountdetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

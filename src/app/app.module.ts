import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetbankComponent } from './netbank/netbank.component';
import { PopupsuccessComponent } from './popupsuccess/popupsuccess.component';
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
import { TransactionReportComponent } from './transaction-report/transaction-report.component';



import { RegisterService } from './service/register.service';
import { NetbankService } from './service/netbank.service';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';




import { from } from 'rxjs';
import { ForgotUserComponent } from './forgot-user/forgot-user.component';
import { ConfirmTransactionComponent } from './confirm-transaction/confirm-transaction.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    NetbankComponent,
    PopupsuccessComponent,
    LoginComponent,
    FundTransferComponent,
    TransferComponent,
    LogoutComponent,
    AddPayeeComponent,
    LoginDashboardComponent,
    AccountstatementComponent,
    AccountsummaryComponent,
    AccountdetailsComponent,
    TransactionReportComponent,
    ConfirmEqualValidatorDirective,
    ForgotUserComponent,
    ConfirmTransactionComponent,
    ForgotpasswordComponent,
    
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
    //RouterModule.forRoot(routes),
    //RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [RegisterService,NetbankService],
  bootstrap: [AppComponent]
})
export class AppModule { }

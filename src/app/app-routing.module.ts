import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetbankComponent } from './netbank/netbank.component';
import { PopupsuccessComponent } from './popupsuccess/popupsuccess.component';
import { RegisterComponent } from './register/register.component';
import { AccountDet, AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { TransferComponent } from './transfer/transfer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ForgotUserComponent } from './forgot-user/forgot-user.component';
import { ConfirmTransactionComponent } from './confirm-transaction/confirm-transaction.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'netbanking', component: NetbankComponent},
  {path: 'successreg', component: PopupsuccessComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'homepage', component: HomeComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent },
  {path: 'login/forgotpassword', component: ForgotpasswordComponent },


  {path: 'login', component:LoginComponent},  
  // {path: 'login/dashboard/fundTransfer', component:FundTransferComponent},
  {path: 'transfer', component:TransferComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'login/dashboard/fundTransfer/addPayee', component:AddPayeeComponent},
  {path: 'login/dashboard', component:LoginDashboardComponent,
    children: [
      {path: 'fundTransfer', component: FundTransferComponent},
      {path: 'account-statement', component: AccountstatementComponent},
      {path: 'account-summary', component: AccountsummaryComponent},
      {path: 'account-details', component: AccountdetailsComponent}
    ]
    },
  // {path : 'login/account-statement' , component : AccountstatementComponent},
  // {path : 'login/account-summary' , component : AccountsummaryComponent},
  // {path : 'login/dashboard/account-details' , component : AccountdetailsComponent},
  {path : 'login/transactionDetail', component: TransactionReportComponent},
  {path : 'forgotId', component: ForgotUserComponent},
  {path : 'transfer/confirmTransaction', component: ConfirmTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},  
  {path: 'login/dashboard/fundTransfer', component:FundTransferComponent},
  {path: 'transfer', component:TransferComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'login/dashboard/fundTransfer/addPayee', component:AddPayeeComponent},
  {path: 'login/dashboard', component:LoginDashboardComponent},
  {path : 'login/dashboard/account-statement' , component : AccountstatementComponent},
  {path : 'login/dashboard/account-summary' , component : AccountsummaryComponent},
  {path : 'login/dashboard/account-details' , component : AccountdetailsComponent},
  {path : 'login/transactionDetail', component: TransactionReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

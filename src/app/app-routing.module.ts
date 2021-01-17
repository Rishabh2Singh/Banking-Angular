import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetbankComponent } from './netbank/netbank.component';
import { PopupsuccessComponent } from './popupsuccess/popupsuccess.component';
import { RegisterComponent } from './register/register.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TransferComponent } from './transfer/transfer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'netbanking', component: NetbankComponent},
  {path: 'successreg', component: PopupsuccessComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'homepage', component: HomeComponent},


  {path: 'login', component:LoginComponent},  
  {path: 'login/dashboard/fundTransfer', component:FundTransferComponent},
  {path: 'login/transfer', component:TransferComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'login/dashboard/fundTransfer/addPayee', component:AddPayeeComponent},
  {path: 'login/dashboard', component:LoginDashboardComponent},
  {path : 'login/dashboard/account-statement' , component : AccountstatementComponent},
  {path : 'login/dashboard/account-summary' , component : AccountsummaryComponent},
  {path : 'login/dashboard/account-details' , component : AccountdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

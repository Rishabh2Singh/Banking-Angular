import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'login/fundTransfer', component:FundTransferComponent},
  {path: 'login/transfer', component:TransferComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'login/fundTransfer/addPayee', component:AddPayeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

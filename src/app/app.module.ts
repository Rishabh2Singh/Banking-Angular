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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundTransferComponent,
    TransferComponent,
    LogoutComponent,
    AddPayeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { HttpClientModule } from '@angular/common/http';


const route : Routes = [
{path : 'account-statement' , component : AccountstatementComponent},
{path : 'account-summary' , component : AccountsummaryComponent},
{path : 'account-details' , component : AccountdetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginDashboardComponent,
    AccountstatementComponent,
    AccountsummaryComponent,
    AccountdetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent implements OnInit {
  constructor(private router:Router) { }
  acno:number=parseInt(sessionStorage.getItem('accountNo'));
  ngOnInit(): void {
    if(!this.acno){
      this.router.navigate(['/logout']);
    }
  }
  logoutUser(){
    sessionStorage.clear();
    // sessionStorage.removeItem(this.acno);
    // sessionStorage.removeItem(this.balance);
    this.router.navigate(['/login']);
  }
  goAccSumm(){
    this.router.navigate(['login/account-summary']);
  }
}

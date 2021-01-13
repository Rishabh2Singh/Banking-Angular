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

  ngOnInit(): void {
  }

  goAccSumm(){
    this.router.navigate(['login/account-summary']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login:Login=new Login();
  message:string;
  constructor(private loginService:LoginService, private router:Router) { }

  loginCheck(){
    this.loginService.login(this.login).subscribe(response=>{
      alert(JSON.stringify(response.message));
      this.message=response.message;
      alert(response.account)
      console.log(response);
      // sessionStorage.setItem('data',response.account);
      sessionStorage.setItem('accountNo',response.account.accountNo);
      sessionStorage.setItem('balance',response.account.balance);
      sessionStorage.setItem('custId',response.account.internetBanking.customerId);
      this.router.navigate(['login/dashboard']);
      // this.router.navigate(['login/transfer']);
    })
  }

}
export class Login{ 
  customerId:number;
  password:string;
}

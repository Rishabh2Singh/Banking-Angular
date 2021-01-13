import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  message:string;
  acno:number=parseInt(sessionStorage.getItem('accountNo'));
  balance:number=parseInt(sessionStorage.getItem('balance'));
  custId:number=parseInt(sessionStorage.getItem('custId'));


  constructor(private loginService:LoginService, private router:Router) { }
  type:string="IMPS";
  chooseTransfer(){
    
    sessionStorage.setItem('type',this.type);
    this.router.navigate(['login/transfer']);
  }

  logoutUser(){
    sessionStorage.clear();
    // sessionStorage.removeItem(this.acno);
    // sessionStorage.removeItem(this.balance);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if(!this.acno){
      this.router.navigate(['/logout']);
    }
  }

}
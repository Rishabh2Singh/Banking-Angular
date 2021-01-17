import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatementServiceService } from '../account-statement-service.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  stmt:any;
  accountStatementCredentials: AccountStatementCredentials = new AccountStatementCredentials();
 // accStat : AccountStatementDto[]=[];
  constructor(private accountStatementService:AccountStatementServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  accStatement(){
    this.accountStatementService.fetchStatement(this.accountStatementCredentials).subscribe(
      (response:any)=>{
        this.stmt=response;
  })
  } 
}
export class AccountStatementCredentials {
 customerId:number =parseInt(sessionStorage.getItem('custId'));
 fromDate:Date =new Date();
 toDate:Date =new Date();
}

export class AccountStatementDto{
    name:string="" ;
    accountNo:number=0;
    amount:number=0;
    type:string="";
}
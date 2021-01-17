import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatementServiceService } from '../account-statement-service.service';
// import * as jsPDF from 'jspdf'
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import html2canvas from 'html2canvas'
@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  stmt:any;
  public cusId1=parseInt(sessionStorage.getItem('custId'));
  accountStatementCredentials: AccountStatementCredentials = new AccountStatementCredentials();
  constructor(private accountStatementService:AccountStatementServiceService,private router:Router) { }

  ngOnInit(): void {
    this.accountStatementService.fetchDefaultStatement(this.cusId1).subscribe(
      (response:any)=>{
        this.stmt=response;
        console.log(this.stmt);
      }
    );
  }

  accStatement(){
    this.accountStatementService.fetchStatement(this.accountStatementCredentials).subscribe(
      (response:any)=>{
        this.stmt=response;
  });
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
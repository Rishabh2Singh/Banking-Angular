import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/Transaction.model';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
export class TransactionReportComponent implements OnInit {

  constructor() { }
  transId:any;
  type:string;
  custId:number;
  amount:any;
  toAcc:any;
  remark:string;
  fromAcc:string;
  ngOnInit(): void {
    this.type=sessionStorage.getItem('type')!;
    this.custId=parseInt(sessionStorage.getItem('custId'));
    this.transId=sessionStorage.getItem('transId');
    this.amount=sessionStorage.getItem('amount');
    this.toAcc=sessionStorage.getItem('toAcc');
    this.remark=sessionStorage.getItem('remark');
    this.fromAcc=sessionStorage.getItem('fromAcc');
   
  }

 
  
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/Transaction.model';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.component.html',
  styleUrls: ['./confirm-transaction.component.css']
})
export class ConfirmTransactionComponent implements OnInit {

  transfer:any;
  transId:any;
  balance:number;
  bankBal:any;
  type:string;
  fromAcc:any;
  remark:string;
  amount:number;
  transDate:Date;
  toAcc:number;
  otp:number;

  enteredOtp:number;

  constructor(private router:Router, private payeeService:PayeeService) {
    this.transfer=new Transaction();
   }

  ngOnInit(): void {
  }

  message:string;

  submitOtp(){
    this.otp=parseInt(sessionStorage.getItem('otp'));
    if(this.otp==this.enteredOtp){
      this.type=sessionStorage.getItem('type');
    this.fromAcc=parseInt(sessionStorage.getItem('fromAcc'));
    this.toAcc=parseInt(sessionStorage.getItem('toAcc'));
    this.amount=parseInt(sessionStorage.getItem('amount'));
    this.balance=parseInt(sessionStorage.getItem('balance'));
    this.remark=sessionStorage.getItem('remark');
    
    

    this.balance=this.balance-this.amount;
    this.bankBal=this.balance;
    sessionStorage.setItem('balance',this.bankBal);

    this.transfer.toAc=this.toAcc;
    this.transfer.type=this.type;
    this.transfer.amt=this.amount;
    this.transfer.remark=this.remark;
    this.transfer.fromAc=this.fromAcc;
    
    this.payeeService.addTransaction(this.transfer).subscribe(response=>{
      // alert(JSON.stringify(response));
      this.transId=response;
      if(parseInt(this.transId)==0){
        alert("Insufficient amount to make this transaction...");
        this.router.navigate(['transfer']);
      }
      else if(this.transId){
        sessionStorage.setItem('transId',this.transId);
        this.router.navigate(['login/transactionDetail']);
      }

      sessionStorage.removeItem('otp');
    });
    }
    else{
      alert("incorrect otp...transaction failed");
      sessionStorage.removeItem('otp');
      this.router.navigate(['transfer']);
      
    }
    
  
  }
  
}

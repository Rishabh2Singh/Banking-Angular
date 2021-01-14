import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../Extra Classes/Transfer';
import { LoginService } from '../login.service';
import { Beneficiary } from '../models/beneficiaries.model';
import { Transaction } from '../models/Transaction.model';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transfer:any;
 
  benef:any[];
  type:string;
  fromAcc:any;
  remark:string;
  amount:number;
  transDate:Date;
  toAcc:number;

  balance:number;
  bankBal:any;

  constructor(private payeeService:PayeeService, private router:Router) {
    // this.benef=new Beneficiary();
      this.transfer=new Transaction();
  }
  custId:number;
  
  ngOnInit(): void {
    this.type=sessionStorage.getItem('type')!;
    this.custId=parseInt(sessionStorage.getItem('custId'));

    this.payeeService.gettingBenef(this.custId).subscribe(response=>{
      this.benef=response;
      // alert(JSON.stringify(this.benef));
      // console.log(this.benef);
    });
    this.payeeService.getMyAcc(this.custId).subscribe(response=>{
      // alert(response);
      this.fromAcc=response;
      sessionStorage.setItem('fromAcc',this.fromAcc);
    })
  }
  transId:any;

  onSubmit(data: any){
    // alert(data.toAcc);
    console.log(data);
    this.transfer.toAc=data.toAcc;
    this.transfer.type=this.type;
    this.transfer.amt=data.amount;
    // this.transfer.dt=data.transDate;'
    this.transfer.remark=data.remark;
    this.transfer.fromAc=this.fromAcc;
    this.payeeService.addTransaction(this.transfer).subscribe(response=>{
          // alert(JSON.stringify(response));
          this.transId=response;
          if(this.transId){
            sessionStorage.setItem('toAcc',data.toAcc);
            sessionStorage.setItem('amount',data.amount);
            sessionStorage.setItem('remark',data.remark);
            this.balance=parseInt(sessionStorage.getItem('balance'));
            this.balance=this.balance-data.amount;
            this.bankBal=this.balance;
            sessionStorage.setItem('balance',this.bankBal);
            this.router.navigate(['login/transactionDetail']);
          }
        });
  }

}


// export class Payee{
//   id:number
//   name:String
//   nickname:String
//   type:String
//   account:number
//   customer:number
// }

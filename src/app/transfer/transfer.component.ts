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
  

  constructor(private payeeService:PayeeService, private router:Router,private loginService:LoginService) {
    // this.benef=new Beneficiary();
      this.transfer=new Transaction();
  }
  custId:number;
  
  ngOnInit(): void {
    this.type=sessionStorage.getItem('type')!;
    this.custId=parseInt(sessionStorage.getItem('custId'));

    this.payeeService.gettingBenef(this.custId).subscribe(response=>{
      this.benef=response;
    });

    this.payeeService.getMyAcc(this.custId).subscribe(response=>{
      this.fromAcc=response;
      sessionStorage.setItem('fromAcc',this.fromAcc);
    })
  }
  transId:any;
  otp:any;
  onSubmit(data: any){
    // alert(data.toAcc);
    console.log(data);
   

    //putting all input details in session
    sessionStorage.setItem('toAcc',data.toAcc);
    sessionStorage.setItem('amount',data.amount);
    sessionStorage.setItem('remark',data.remark);
    
    this.loginService.getOtp(this.fromAcc).subscribe(response=>{
      this.otp=response;
      alert(this.otp);
      sessionStorage.setItem('otp',this.otp);
      this.router.navigate(['transfer/confirmTransaction']);
    });

    
  }

}

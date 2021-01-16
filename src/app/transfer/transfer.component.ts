import { DatePipe } from '@angular/common';
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
  transDate=new Date();
  toAcc:number;
  toAccMssg:string;
  toAmountMssg:string;
  descriptionMssg:string;

  constructor(private payeeService:PayeeService, private router:Router,private loginService:LoginService) {
    // this.benef=new Beneficiary();
      this.transfer=new Transaction();
      // this.transDate=this.datePipe.transform(this.transDate,'yyyy-MM-dd');
  }
  custId:number;
  
  ngOnInit(): void {

    this.type=sessionStorage.getItem('type')!;
    if(this.type=="RTGS"){
      this.descriptionMssg="Real Time Gross Settlement(RTGS) are specialist funds transfer systems where the transfer of money takes place from one bank to any other bank on a real-time. Settlement in real time means a payment transaction is not subjected to any waiting period, with transactions being settled as soon as they are processed."
    }
    else if(this.type=="IMPS"){
      this.descriptionMssg="Immediate Payment Service (IMPS) is an instant payment inter-bank electronic funds transfer system in India. IMPS offers an inter-bank electronic fund transfer service through mobile phones. The service is available 24x7 throughout the year including bank holidays."
    }
    else if(this.type=="NEFT"){
      this.descriptionMssg="National Electronic Funds Transfer (NEFT) is an electronic funds transfer system maintained by the Reserve Bank of India (RBI). Fund transfers through the NEFT system do not occur in real-time basis. NEFT settles fund transfers in hourly batches with 23 settlements occurring between 00:30 hrs. to 00:00 hrs."
    }
    this.custId=parseInt(sessionStorage.getItem('custId'));

    this.payeeService.gettingBenef(this.custId).subscribe(response=>{
      this.benef=response;
    });

    this.payeeService.getMyAcc(this.custId).subscribe(response=>{
      this.fromAcc=response;
      sessionStorage.setItem('fromAcc',this.fromAcc);
    })
  }

  // addPayee(){
  //   this.router.navigate(['addPayee']);
  // }

  transId:any;
  otp:any;
  onSubmit(data: any){
    // alert(data.toAcc);
    if(!this.toAcc){
      this.toAccMssg="Please select the payee...";
    }
    else if(!(this.amount) || (this.amount<1)){
      this.toAmountMssg="Please fill the valid amount...";
      this.toAccMssg="";
    }
    else{
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

}

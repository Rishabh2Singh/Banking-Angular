import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  reAcno:number;
  payee:Payee=new Payee();
  constructor(private payeeService:PayeeService) { }
  message:string;
  payeeId:number;
  messageSuccess:string;

  customerId:number=parseInt(sessionStorage.getItem('custId'));
  insertPayee(){
    // alert(JSON.stringify(this.payee));
  
    if(this.reAcno===this.payee.acno){
      this.payee.custId=this.customerId ;//maybe this line will cuse error
      this.message="correct acno";
      // alert(JSON.stringify(this.payee));
      // alert(this.customerId);
      this.payeeService.addingPayee(this.payee).subscribe(response=>{
        // alert(JSON.stringify(response));
        this.payeeId=parseInt(response);
        if(this.payeeId==0){
          this.message="Invalid account number...Please check the account number";
        }
        else if(this.payeeId==1){
          this.message="This account number as payee already exists in your list...";
        }
        else{
          this.message="";
          this.messageSuccess="Payee added successfully...";
        }
      });
    }else{
      this.message="Entered account number not matched";
    }
    }

  ngOnInit(): void {
  }

}
export class Payee{
  name:String;
  acno:number;
  type:String;
  nickname:String;
  custId:number;
}
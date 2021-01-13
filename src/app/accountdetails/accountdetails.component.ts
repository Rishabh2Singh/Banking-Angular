import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatementServiceService } from '../account-statement-service.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  accDet: AccountDet=new AccountDet();
  public cusId1:number=1356786291;
  constructor(private accountStatementService:AccountStatementServiceService,private router:Router) { }

  ngOnInit(): void {
    this.accountStatementService.fetchDetails(this.cusId1).subscribe(
      (response:any)=>{
        this.accDet=response;
        this.accDet.cusId=this.cusId1;
       //console.log(response);
  })
  }

  update(){
    this.accountStatementService.updateDetails(this.accDet).subscribe(
      (response:any)=>{
      alert(JSON.stringify(response));  
  })
  }
}
export class Address{
  id:number;
   address:string;
	 landmark:string;
   city:string;
	 state:string;
	  pincode:number;
}
export class Occupation{
  id:number;
  type:string;
	income_source:string;
  annual_income:number;
}
export class AccountDet{
   cusId:number;
   name:string;
   mobile:number;
	 aadharNumber:number;
	 dob:Date=new Date();
   add1:Address;
   add2:Address;
   occupation:Occupation;
}
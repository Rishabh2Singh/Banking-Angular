import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import {AdminService} from '../admin.service';



@Component({
  selector: 'app-unapprovedcustomer',
  templateUrl: './unapprovedcustomer.component.html',
  styleUrls: ['./unapprovedcustomer.component.css']
})
export class UnapprovedcustomerComponent implements OnInit {


  constructor(private datatransfer:DataTransferService,private adminService:AdminService, private router:Router) { }
  //holderid1:hid=new hid();
  //cd  : CustomerDetails=new CustomerDetails();
  cd:CustomerDetails[];
  temp:Int16Array;
  ab:string;
  holderCheck(){

    console.log("holder value fetched at unapproved customer : "+this.datatransfer.getnum());
    temp:this.datatransfer.getnum();
    console.log("temp: "+this.temp);
    this.adminService.unapprovedCustomerList(this.datatransfer.getnum()).subscribe(response=>{
      this.cd=response;
      //console.log("Checking value in CD : " + this.cd.address);
      alert(JSON.stringify(response));
      
    })

  }
  Approve(){
    this.adminService.updateCustomerStatus(this.datatransfer.getnum()).subscribe(response=>{
      //alert(JSON.stringify(response));
      alert("update successful");
      this.router.navigate(['admin/dashboard']);
    })

  }
  Reject(){
    this.adminService.rejectCustomer(this.datatransfer.getnum()).subscribe()
    alert("Application Rejected");
    this.router.navigate(['admin/dashboard']);
  }
  ngOnInit(): void {
  }

}
/*export class hid()
{
  holderidd:Int16Array;

}*/
export class CustomerDetails{

   name:string;
	 fatherName:string;
   adharCard:number;
   dob:Date;
   address:string;
   income_source:string;
   annual_income:number;
   city:string;
   state:string;


}

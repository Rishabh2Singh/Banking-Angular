import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-internetbankingdetails',
  templateUrl: './internetbankingdetails.component.html',
  styleUrls: ['./internetbankingdetails.component.css']
})
export class InternetbankingdetailsComponent implements OnInit {

  internetBankingApprovalDetails:InternetBankingApprovalDetails;
  constructor(private datatransfer:DataTransferService,private adminService:AdminService, private router:Router) { }

  reqAcno:number;
  showDetails()
  {
    this.reqAcno=parseInt(sessionStorage.getItem('reqAcno'));
    // console.log(" inside show Details function");
    // console.log(this.datatransfer.getnum());
    this.adminService.internetBankingCustomerDetails(this.reqAcno).subscribe(response=>{
      // alert(JSON.stringify(response));
      this.internetBankingApprovalDetails=response;  
      // console.log("Details : ");
      // console.log(this.internetBankingApprovalDetails.accountNo);
      // console.log(this.internetBankingApprovalDetails.type);
      // console.log(this.internetBankingApprovalDetails.balance);
      // console.log(this.internetBankingApprovalDetails.name);
      // console.log(this.internetBankingApprovalDetails.adharCard);
      // console.log(this.internetBankingApprovalDetails.debitCard);
    })
    
  }
  ApproveInternetBanking()
  {
      // console.log("Inside Internet Banking Details");
      // console.log(this.datatransfer.getnum());
      this.adminService.updateInternetBankingStatus(this.reqAcno).subscribe(response=>{
        console.log("update successful");
        alert("Customer Approved for Internet Banking");
        sessionStorage.removeItem('reqAcno');
        this.router.navigate(['admin/dashboard']);
      })      
  }
  Reject1(){
    this.adminService.rejectInternetBankingApplication(this.datatransfer.getnum()).subscribe()
    alert("Application Rejected");
    this.router.navigate(['admin/dashboard']);
  }
  ngOnInit(): void {
  }

}
export class InternetBankingApprovalDetails
{
  accountNo:Int16Array;
  type:string;
  balance:number;
  name:string;
  adharCard:number;
  debitCard:number;
}

import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})



export class AdminDashboardComponent implements OnInit {
  
  adminEmail:string;
  adminName:string;
  customerAccountDetails:CustomerAccountDetail[];
  internetBankingDetails:InternetBankingDetails[];

  constructor(private adminService:AdminService,private datatransfer:DataTransferService, private router:Router) { }

  logoutAdmin(){
    sessionStorage.clear();
    this.router.navigate(['/admin']);
  }

  FetchCustomerAccountData()
  {
    console.log("Fetch Customer data function called");
    this.adminService.customerList().subscribe(response=>{

      // console.log('bbbb');
      //console.log(response);
      this.customerAccountDetails = response;
      //custDetails = JSON.stringify(response);
      // alert(JSON.stringify(response));
      
    })
  }

  FetchInternerBankingList(){
    console.log("fetch internet banking customet function called");
    this.adminService.internetBankingCustomerList().subscribe(response=>{

      this.internetBankingDetails=response;
      // alert(JSON.stringify(response));
    })

  }
ViewDetails()
{
 console.log("ViewDetails called");  
 sessionStorage


}
holid:any;
onsubmit(data:any)
{
  console.log(data);  

}
// sendData(id:Int16Array)
// {

//   console.log(id);
//   this.holid=id;
//   this.datatransfer.setnum(id)
//   console.log("returned value  : " + this.datatransfer.getnum());
//   this.router.navigate(['admin/dashboard/unapprovedcustomer']);
//   }

sendData(id:any)
{
  sessionStorage.setItem('reqId',id);

  // console.log(id);
  // this.holid=id;
  // this.datatransfer.setnum(id)
  // console.log("returned value  : " + this.datatransfer.getnum());
  this.router.navigate(['admin/dashboard/unapprovedcustomer']);
  }

sendInternetData(acno:any)
{
  sessionStorage.setItem('reqAcno',acno);
  // console.log("Inside sendInternerData");
  // console.log(id);
  // this.datatransfer.setnum(id);
  // console.log("returned value  : " + this.datatransfer.getnum());
  this.router.navigate(['admin/dashboard/internetbankingdetails']);
  
  /*this.holid=id;
  this.datatransfer.setnum(id)
  console.log("returned value  : " + this.datatransfer.getnum());
  this.router.navigate(['admin/dashboard/internetbankingdetails']);
*/
}

  ngOnInit(): void {
   this.adminEmail=sessionStorage.getItem('email');
   this.adminName=sessionStorage.getItem('name');
   if(!this.adminEmail){
     this.router.navigate(['logout']);
   }
  }
  
}
export class CustomerAccountDetail
{
  accountNo:Int16Array;
  accountHolderName:String;
  accountHolderId:Int16Array;
}
export class HolderId
{
  holdId:Int16Array;
}
export class InternetBankingDetails
{
  accountHolderName:string;
  accountNo:Int16Array;
  customerId:Int16Array;
}


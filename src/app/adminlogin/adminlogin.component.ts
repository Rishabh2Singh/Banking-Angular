import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { Router } from '@angular/router';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

export class AdminloginComponent implements OnInit {
  admin:Admin=new Admin();
  message:string;
  constructor(private adminService:AdminService, private router:Router) { }

  AdminCheck(){
    this.adminService.login(this.admin).subscribe(response=>{
      console.log('abcd');
      //console.log(response);
      alert(JSON.stringify(response));


      
      //sessionStorage.setItem('AdminId',response.id);
      this.router.navigate(['admin/dashboard']);
      
      //alert(response.Admin1);
      
      // sessionStorage.setItem('data',response.account);
      //sessionStorage.setItem('accountNo',response.account.accountNo);
      //sessionStorage.setItem('balance',response.account.balance);
      //sessionStorage.setItem('custId',response.account.internetBanking.customerId);
      //this.router.navigate(['login/dashboard']);
      // this.router.navigate(['login/transfer']);
    })
  }



  ngOnInit(): void {
  }

}
export class Admin{
  email:string;
  password:string;
}

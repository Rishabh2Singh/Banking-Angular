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
      // alert(JSON.stringify(response));
      if(response==null){
        this.message="Incorrect email/password...!";
      }
      else{
        sessionStorage.setItem('name',response.name);
        sessionStorage.setItem('email',response.email);
        sessionStorage.setItem('contact',response.contact);
        sessionStorage.setItem('designation',response.designation);
        this.router.navigate(['admin/dashboard']);
      }
    });
  }



  ngOnInit(): void {
  }

}
export class Admin{
  email:string;
  password:string;
}

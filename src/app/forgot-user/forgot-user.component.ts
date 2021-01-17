import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-user',
  templateUrl: './forgot-user.component.html',
  styleUrls: ['./forgot-user.component.css']
})
export class ForgotUserComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  
  acno:any;
  otp:any;
  otpSubmit:number;
  message:string;
  messageSuccess:string;

  getOtp(){
    if(!this.acno){
      this.message="Please enter your bank account number...";
    }
    else{
    this.loginService.getOtp(this.acno).subscribe(response=>{
      alert(response);
      this.otp=response;
      // sessionStorage.setItem('otp',response);
      if(parseInt(this.otp)==1){
      this.message="Invalid Account number...!"
      }
      else if(parseInt(this.otp)==2){
        this.message="User not registered for Internet Banking services...!";
      }
      else{
        sessionStorage.setItem('acno',this.acno);
        this.messageSuccess="Otp has been sent";
      }
    });
  }
  }

  checkOtp(){
    if(!this.otp || parseInt(this.otp)==1){
      this.message="please generate the otp first...!";
      this.messageSuccess="";
    }
    else{
      if(this.otpSubmit==parseInt(this.otp)){
        // this.message="correct otp";
        this.loginService.getCustomerId(parseInt(sessionStorage.getItem('acno'))).subscribe(response=>{ })
        alert("CustomerId is sent to your reistered email. Have a nice day!")
        this.messageSuccess="Done";
        sessionStorage.clear();
        this.otp=0;
      }
      else{
        this.message="incorrect Otp";
        sessionStorage.clear();
        this.otp=0;
        this.router.navigate(['login']);
      }
    } 
  }  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountStatementServiceService } from '../account-statement-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  custId: any;
  customerId: number;
  pwd:any;
  cpwd:any;
  constructor(private accountStatementService: AccountStatementServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.custId = this.router.snapshot.queryParamMap.get("cid");
    console.log(this.custId);
  }

  onUpdate() {
    console.log("Service Call to Reset the Password From Email");
    this.accountStatementService.updatePassword(this.custId,this.pwd).subscribe(
      (response: any) => {
        alert(JSON.stringify(response.statusMsg));
      });
  }
  validateCustId() {
    console.log(this.customerId);
    this.accountStatementService.forgotPwd(this.customerId).subscribe(
      (response: any) => {
        alert(JSON.stringify(response.statusMsg));
      });
  }

}

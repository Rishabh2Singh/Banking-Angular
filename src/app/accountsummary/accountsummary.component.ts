import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatementServiceService } from '../account-statement-service.service';


@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  summary:any;
  public cusId1=parseInt(sessionStorage.getItem('custId'));
  constructor(private accountStatementService:AccountStatementServiceService,private router:Router) { }

  ngOnInit(): void {
    this.accountStatementService.fetchAccountSummary(this.cusId1).subscribe(
      response=>{
        this.summary=response;
        console.log("Account Summary");
        console.log(this.summary);
      }
    );
  }
}

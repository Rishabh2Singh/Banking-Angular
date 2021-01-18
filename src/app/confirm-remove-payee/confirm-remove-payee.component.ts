import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-confirm-remove-payee',
  templateUrl: './confirm-remove-payee.component.html',
  styleUrls: ['./confirm-remove-payee.component.css']
})
export class ConfirmRemovePayeeComponent implements OnInit {

  constructor(private payeeService:PayeeService, private router:Router) { }

  acno:number;
  custId:number;

  ngOnInit(): void {
    this.acno=parseInt(sessionStorage.getItem('deleteAcno'));
    this.custId=parseInt(sessionStorage.getItem('custId'));
  }

  onSubmit(){
    this.payeeService.removePayee(this.acno,this.custId).subscribe(response=>{})
      this.router.navigate(['../login/dashboard/fundTransfer/removePayee'])
  }
  onDecline(){
    this.router.navigate(['../login/dashboard/fundTransfer/removePayee']);
  }
}

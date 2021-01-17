import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-remove-payee',
  templateUrl: './remove-payee.component.html',
  styleUrls: ['./remove-payee.component.css']
})
export class RemovePayeeComponent implements OnInit {

  custId:number;
  benef:any[];

  constructor(private payeeService:PayeeService, private router:Router) { }

  ngOnInit(): void {

    this.custId=parseInt(sessionStorage.getItem('custId'));

    this.payeeService.gettingBenef(this.custId).subscribe(response=>{
      this.benef=response;
    });
  }
  onSubmit(acno:any){
    // alert(acno);
    sessionStorage.setItem('deleteAcno',acno);
    this.router.navigate(['confirmRemovePayee']);
    // this.payeeService.removePayee(acno,this.custId).subscribe(response=>{
    //   alert(response);
    // })
  }

}

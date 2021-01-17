import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payee } from './add-payee/add-payee.component';
import { Transaction } from './models/Transaction.model';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {
  

  constructor(private http:HttpClient) { }

  gettingBenef(custId:any):Observable<any>{
    let url=(`http://localhost:8080/transfer?custId=${custId}`);
    // alert(custId);
    return this.http.get(url);
  }
  addingPayee(payee:Payee): Observable<any>{
    // alert(payee.custId);
    let url=("http://localhost:8080/add");
    return this.http.post(url,payee);
  }
  getMyAcc(custId: number):Observable<any> {
    let url=(`http://localhost:8080/getAcc?custId=${custId}`);
    return this.http.get(url);
  }
  addTransaction(transfer:Transaction){
    let url=("http://localhost:8080/transaction");
    // console.log(transfer);
    // alert(JSON.stringify(transfer));
    return this.http.post(url,transfer);
  }
  removePayee(acno:any,custId:any): Observable<any>{
    let url=(`http://localhost:8080/removePayee?acno=${acno}&custId=${custId}`);
    return this.http.get(url);
  }
}

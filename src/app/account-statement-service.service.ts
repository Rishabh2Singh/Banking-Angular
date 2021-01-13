import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountStatementCredentials } from './accountstatement/accountstatement.component';
import { AccountDet } from './accountdetails/accountdetails.component';

@Injectable({
  providedIn: 'root'
})
export class AccountStatementServiceService {

  constructor(private http:HttpClient) { }

  fetchStatement(accountStatementCredentials:AccountStatementCredentials):Observable<any>{
    let url="http://localhost:9074/accountStatement";
    return this.http.post(url,accountStatementCredentials);
  }

  fetchDetails(cusId:number):Observable<any>{
    let url="http://localhost:9074/accountDetails?cusId="+cusId;
    return this.http.get(url);
  }

 updateDetails(accDet : AccountDet):Observable<any>{
    let url="http://localhost:9074/updateDetails";
    console.log(accDet);
    return this.http.post<any>(url,accDet);
  }
}
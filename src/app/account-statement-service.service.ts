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
    let url="http://localhost:8086/accountStatement";
    return this.http.post(url,accountStatementCredentials);
  }

  fetchDetails(cusId:number):Observable<any>{
    let url="http://localhost:8086/accountDetails?cusId="+cusId;
    return this.http.get(url);
  }

 updateDetails(accDet : AccountDet):Observable<any>{
    let url="http://localhost:8086/updateDetails";
    return this.http.post<any>(url,accDet);
  }

  fetchAccountSummary(cusId:number):Observable<any>{
    let url="http://localhost:8086/accountSummary?custId="+cusId;
    return this.http.get<any>(url);
  }

  forgotPwd(cusId:number):Observable<any>{
    let url="http://localhost:8086/forgotPassword?custId="+cusId;
    return this.http.get<any>(url);
  }

  updatePassword(cusId:number,pwd:string):Observable<any>{
    let url="http://localhost:8086/setNewPassword?custId="+cusId+"&pwd="+pwd;
    return this.http.get<any>(url);
  }
}
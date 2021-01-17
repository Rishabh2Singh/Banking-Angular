import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Admin} from './adminlogin/adminlogin.component';
//import {Customerdetails} from './admin-dashboard/admin-dashboard.component'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  login(admin:Admin):Observable<any>{
    let url=("http://localhost:8080/adminlogin");
    return this.http.post(url,admin);
  }
  customerList():Observable<any>{
    let url=("http://localhost:8080/customers");
    return this.http.get(url);  
  }
  unapprovedCustomerList(a:Int16Array):Observable<any>{
    console.log("service class reached for : "+a);
    let url=("http://localhost:8080/accountOpeningRequest");
    return this.http.post(url,a);
  }
  updateCustomerStatus(a:Int16Array):Observable<any>{
    let url=("http://localhost:8080/approveCustomer");
    return this.http.post(url,a);
  }
  internetBankingCustomerList():Observable<any>{
    let url=("http://localhost:8080/internetBanking");
    return this.http.get(url);  
  }
  internetBankingCustomerDetails(a:Int16Array):Observable<any>{
    let url=("http://localhost:8080/internetBankingCustomerDetails");
    return this.http.post(url,a);  
  }
  updateInternetBankingStatus(a:Int16Array):Observable<any>{
    console.log("function called for : "+a);
    let url=("http://localhost:8080/approveinternetbanking");
    return this.http.post(url,a);
  }
  rejectCustomer(a:Int16Array):Observable<any>{
    let url=("http://localhost:8080/rejectCustomer");
    return this.http.post(url,a);
  }
  rejectInternetBankingApplication(a:Int16Array):Observable<any>{
    let url=("http://localhost:8080/rejectInternetBanking");
    return this.http.post(url,a);
  }
  
  
  
}
